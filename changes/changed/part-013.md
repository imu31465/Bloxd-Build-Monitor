# Changed — Bundle Modifications Report (Part 013 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `13 / 86` (**302** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 012](part-012.md) · [Part 014 →](part-014.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/221.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/221.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0)

#### 3. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L11-L139` → after: `L9-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L9-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L9-L28) · [Before (L11-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L11-L139)

```diff
-     var YB = GB(1238),
-       DB = GB(2787),
-       QB = GB(34828),
-       oB = GB(36937),
-       jB = GB(36939),
-       yB = GB(36945),
-       JB = GB(36991),
-       MB = GB(3898);
-     const PB = 480,
-       zB = 16,
-       lB = {
-         minGapMs: 250,
-         now: () => performance.now(),
-         skip: oB.s
-       },
-       pB = 30,
- ... (113 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(1172),
+       NW = OW(1422),
+       PW = OW(1532),
+       LW = OW(1102),
+       cW = OW(4994),
+       wW = OW(1659),
+       tW = OW(344),
+       ZW = OW(1653),
+       xW = OW(3083),
+       lW = OW(1089),
+       AW = OW.n(lW),
+       bW = OW(1111),
+       jW = OW(37541),
+       UW = OW(3247),
+       kW = OW(4723),
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L142-L158` → after: `L31-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L31-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L31-L44) · [Before (L142-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L142-L158)

```diff
-       for (let OB = 3; OB < BB.length; OB += 4)
-         if (0 !== BB[OB]) return !0;
-       return !1
-     }
-     async function VB(BB) {
-       var OB;
-       await JB.k.load();
-       const GB = {
-           name: BB.name,
-           info: null,
-           colour: null !== (OB = BB.nameColour) && void 0 !== OB ? OB : "default",
-           ranks: BB.ranks,
-           effects: [],
-           health: null,
-           IM: null,
-           hideNameSeed: null,
- ... (1 more removed lines; see GitHub link above)
+       let {
+         open: iW,
+         onToggle: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, EW.B)();
+       return (0, KW.jsxs)("button", {
+         type: "button",
+         className: "OnboardingMoreOptions",
+         "aria-expanded": iW,
+         "aria-controls": iW ? SW : void 0,
+         onClick: () => {
+           iW || (0, cW.l)("more"), OW()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L160-L175` → after: `L46-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L46-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L46-L54) · [Before (L160-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L160-L175)

```diff
-         YB = document.createElement("canvas"),
-         [DB, QB] = (0, yB.f)((0, yB.h)(yB.b.Nametag, GB), YB, !0);
-       return 0 === DB || 0 === QB ? null : {
-         src: YB.toDataURL("image/png"),
-         width: DB,
-         height: QB
-       }
-     }
-   },
-   34832: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB,
-       h: () => DB,
-       i: () => MB
-     });
-     var YB = GB(1611);
+         children: [mW("homePage:onboardingMoreOptions"), (0, KW.jsx)(MW.c, {
+           name: iW ? "caret-up" : "caret-down"
+         })]
+       })
+     }
+     const yW = Object.entries(wW.e).filter((WW => {
+       let [, iW] = WW;
+       return "default" === iW.cosmeticPack
+     }));
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L178-L284` → after: `L57-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L57-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L57-L65) · [Before (L178-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L178-L284)

```diff
-       var OB;
-       return {
-         ...oB.store,
-         yaw: oB.store.yaw + (null !== (OB = YB.d[BB].previewYaw) && void 0 !== OB ? OB : 0)
-       }
-     }
-     const QB = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       oB = {
-         player: QB,
-         store: {
-           ...QB,
- ... (91 more removed lines; see GitHub link above)
+       return ZW.e.default.colourGroups[WW].colours.map(((WW, iW) => {
+         let {
+           rbg: OW,
+           order: mW
+         } = WW;
+         return {
+           rbg: OW,
+           order: mW,
+           index: iW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L286-L342` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L67) · [Before (L286-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L286-L342)

```diff
-         return this.host
-       }
-       openMob(BB) {
-         return new yB(this.current().openMob(BB))
-       }
-       openPet(BB) {
-         return new yB(this.current().openPet(BB))
-       }
-       openMobLineup(BB) {
-         return new yB(this.current().openMobLineup(BB))
-       }
-       openCharacter(BB, OB) {
-         return new JB(this.current().openCharacter(BB, OB))
-       }
-     }
-   },
- ... (41 more removed lines; see GitHub link above)
+       })).sort(((WW, iW) => WW.order - iW.order))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L346` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L73-L76) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L346)

```diff
-       return BB.getContext("2d", OB)
+       var OW;
+       if (void 0 === iW || "default" !== (null === (OW = (0, xW.l)(WW, iW)) || void 0 === OW ? void 0 : OW.cosmeticPack)) return null;
+       const mW = (0, xW.h)(iW);
+       return mW && [mW[0], Number(mW[1])]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L361-L418` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L80) · [Before (L361-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L361-L418)

```diff
-       let [QB, oB] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [BB, OB], jB = Math.min(Number.isFinite(GB) && GB > 0 ? GB : 1, DB);
-       const yB = Math.max(0, QB, BB) * Math.max(0, oB, OB) * jB * jB;
-       return yB > YB && (jB *= Math.sqrt(YB / yB)), [Math.max(1, Math.floor(Math.max(0, BB) * jB)), Math.max(1, Math.floor(Math.max(0, OB) * jB))]
-     }
-   },
-   36997: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => MB,
-       g: () => yB,
-       k: () => jB,
-       o: () => JB
-     });
-     var YB = GB(2034);
-     let DB = null,
-       QB = 0;
-     const oB = new Set;
- ... (42 more removed lines; see GitHub link above)
+       return `${WW}_${iW}_${OW}`
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L422-L426` → after: `L84-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L84-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L84-L126) · [Before (L422-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L422-L426)

```diff
-       BB && (jB = !0)
-     }
- 
-     function zB() {
-       return jB
+       let {
+         label: iW,
+         colours: OW,
+         picked: mW,
+         onPick: NW
+       } = WW;
+       const {
+         t: PW
+       } = (0, EW.B)();
+       return (0, KW.jsxs)("div", {
+         className: "OnboardingColours",
+         children: [(0, KW.jsx)("div", {
+           className: "OnboardingColoursLabel",
+           children: iW
+         }), (0, KW.jsx)("div", {
+           className: "OnboardingSwatches",
+ ... (27 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L430-L431` → after: `L130-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L130-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L130-L275) · [Before (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L430-L431)

```diff
-       oB = BB
-     }
+       let {
+         moreOptions: iW,
+         onToggleMoreOptions: OW,
+         moreOptionsBelowPresets: NW
+       } = WW;
+       const {
+         t: PW
+       } = (0, EW.B)(), {
+         userContext: LW,
+         isUserContextUpdating: wW
+       } = (0, sW.e)(), [, ZW] = (0, mW.useReducer)((WW => WW + 1), 0), xW = (0, mW.useRef)({}), lW = (0, mW.useRef)(null), MW = (0, mW.useRef)({}), TW = (0, kW.c)(), oW = {
+         ...LW.getPlayerCosmetics(),
+         ...lW.current
+       }, dW = (0, mW.useRef)(null);
+       (0, mW.useEffect)((() => {
+         var WW;
+ ... (130 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L434` → after: `L278-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L278-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L278-L430) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L434)

```diff
-       return !(QB > 0 && (oB || BB - yB < 1e3 / YB - DB)) && (yB = BB, !0)
+       const {
+         t: iW
+       } = (0, EW.B)(), {
+         userContext: OW,
+         isUserContextUpdating: NW
+       } = (0, sW.e)(), LW = NW ? null : OW.getPlayerName(), wW = (0, mW.useRef)(null), [tW, ZW] = (0, mW.useState)((() => null === LW ? (0, dW.d)() : null)), [xW, lW] = (0, mW.useState)(null), [AW, bW] = (0, mW.useState)(!1), jW = (0, mW.useRef)("EZ"), UW = (0, kW.c)(), SW = (0,  … [truncated]
+         wW.current && (wW.current.value = WW), ZW(WW)
+       }, HW = (0, mW.useRef)(!1);
+       (0, mW.useEffect)((() => {
+         var WW, iW;
+         !AW && HW.current && (HW.current = !1, null === (WW = wW.current) || void 0 === WW || WW.focus(), null === (iW = wW.current) || void 0 === iW || iW.select())
+       }), [AW]);
+       const nW = (0, mW.useRef)(null);
+       (0, mW.useEffect)((() => {
+         var WW;
+         null !== xW && (null === (WW = nW.current) || void 0 === WW || WW.scrollIntoView({
+ ... (137 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L438-L454` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L434) · [Before (L438-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L438-L454)

```diff
-       JB.push(BB)
-     }
- 
-     function ZB() {
-       if (0 === JB.length) return;
-       const BB = JB;
-       JB = [];
-       for (const GB of BB) try {
-         GB()
-       } catch (OB) {
-         console.warn("[bloxd-previews] an after-draw callback threw", OB)
-       }
-     }
-   },
-   37009: (BB, OB, GB) => {
-     function YB() {
- ... (1 more removed lines; see GitHub link above)
+       return WW < 500
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L458` → after: `L438-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L438-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L438-L461) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L458)

```diff
-       return GB(37018)
+       const WW = {
+           finished: !1
+         },
+         iW = {
+           press: null
+         };
+       return NW.NotificationProvider.showCustomPopup({
+         body: OW => (0, KW.jsx)(CW, {
+           onFinish: () => {
+             (0, cW.j)(), WW.finished = !0, OW()
+           },
+           doneRef: iW
+         }),
+         middleScreenPopupClassName: "OnboardingPopup",
+         disableExitButton: !0,
+         ignoreBackgroundPress: !0,
+ ... (8 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L462` → after: `L465-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L465-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L465-L506) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L462)

```diff
-       return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
+       let {
+         onFinish: iW,
+         doneRef: OW
+       } = WW;
+       const {
+         t: NW
+       } = (0, EW.B)(), wW = VW(iW), tW = wW.ready && !wW.busy ? wW.submit : null;
+       (0, mW.useEffect)((() => (OW.press = tW, () => {
+         OW.press = null
+       })));
+       const [ZW, xW] = (0, mW.useState)(!1), lW = (0, LW.l)(((WW, iW) => pW(iW))), AW = () => {
+         xW(!ZW)
+       };
+       return (0, mW.useEffect)((() => {
+         (0, cW.t)()
+       }), []), (0, KW.jsxs)("div", {
+ ... (26 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L470` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L509) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L470)

```diff
-   36945: (BB, OB, GB) => {
+   37541: (WW, iW, OW) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L472-L475` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L511) · [Before (L472-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L472-L475)

```diff
-       b: () => ZB,
-       f: () => EB,
-       h: () => uB,
-       i: () => FB
+       d: () => PW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L477-L535` → after: `L513-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L513-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L513-L538) · [Before (L477-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L477-L535)

```diff
-     var YB = GB(36977),
-       DB = GB(36948),
-       QB = GB(36954),
-       oB = GB(36961);
- 
-     function jB(BB, OB, GB) {
-       const YB = "object" === typeof BB && null !== BB ? BB : {},
-         DB = function(BB, OB, GB) {
-           if (!Array.isArray(BB) || 0 === BB.length) return [];
-           const YB = [{
-             width: 0,
-             height: 0,
-             y: 0,
-             items: []
-           }];
-           for (const jB of (0, oB.h)(BB, oB.d.DEFAULT_FONT_SIZE, GB)) {
- ... (43 more removed lines; see GitHub link above)
+     var mW = OW(2037),
+       EW = OW(1584);
+     const NW = new class {
+       constructor() {
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
+       }
+       save(WW, iW) {
+         WW !== this.userContext && this.sendHeld(), this.userContext = WW;
+         for (const [mW, EW] of iW) this.pending.set(mW, EW);
+         if (null !== this.timer) return;
+         const OW = this.lastSentAt + 1100 - Date.now();
+         OW <= 0 ? this.send(WW) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), OW), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
+ ... (10 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L537-L567` → after: `L540-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L540-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L540-L543) · [Before (L537-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L537-L567)

```diff
-           return YB
-         }(YB.content, OB, GB);
-       let jB = 0,
-         yB = oB.d.VERTICAL_PADDING,
-         JB = 0;
-       for (const QB of DB) {
-         jB = Math.max(jB, QB.width + 2 * oB.d.HORIZONTAL_PADDING), yB += QB.height + oB.d.LINE_SPACING;
-         for (const BB of QB.items) JB += BB.chars
-       }
-       const MB = "string" === typeof YB.backgroundColor ? YB.backgroundColor : "#22283b";
-       return {
-         width: jB,
-         height: yB,
-         chars: JB,
-         draw: (BB, OB) => {
-           const YB = [];
- ... (15 more removed lines; see GitHub link above)
+         }));
+         this.pending.clear(), this.lastSentAt = Date.now(), EW.e.updateCosmetics(WW, iW).catch((WW => {
+           console.error("Failed to update cosmetics", WW)
+         }))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L603-L605` → after: `L548-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L548-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L548-L554) · [Before (L603-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L603-L605)

```diff
-       const GB = KB.encode(JSON.stringify(OB)),
-         YB = new Uint8Array(GB.length + 1);
-       return YB[0] = BB, YB.set(GB, 1), YB
+       for (const [OW, mW] of iW) WW.setPlayerCosmetics(OW, mW);
+       if (null === mW.gameBridge.latest("connectedGame").websocketUrl) NW.save(WW, iW);
+       else
+         for (const [OW, EW] of iW) mW.gameBridge.send("updateMyCosmetic", {
+           NE: OW,
+           PE: EW
+         })
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L608-L637` → after: `L570-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L570-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L570-L574) · [Before (L608-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L608-L637)

```diff
-         name: "Ag",
-         info: null,
-         colour: "default",
-         ranks: [],
-         effects: [],
-         health: .5,
-         IM: null,
-         hideNameSeed: null
-       },
-       IB = [uB(ZB.Nametag, mB), uB(ZB.Nametag, {
-         ...mB,
-         info: {
-           content: [{
-             str: "Ag"
-           }],
-           subtitle: ["Ag"]
- ... (14 more removed lines; see GitHub link above)
+       offline: "homePage:onboardingNameNoAccount",
+       outdated: "general:updatedReloading",
+       busy: "homePage:changeNameTooFast",
+       server: "homePage:changeNameFailed"
+     };
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L640-L647` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L577) · [Before (L640-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L640-L647)

```diff
-       qB.k.load().then((() => {
-         if (BB()) return;
-         const OB = (0, DB.f)(1, 1, {
-           willReadFrequently: !0
-         });
-         var GB;
-         OB && (GB = OB.canvas, IB.map((BB => EB(BB, GB))))
-       }))
+       return cW[WW]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L651-L652` → after: `L580-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L580-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L580-L581) · [Before (L651-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L651-L652)

```diff
-     function LB() {
-       fB.clear(), kB.clear()
+     function tW(WW) {
+       return (0, LW.c)(WW) ? "outdated" : WW instanceof mW.c ? 429 === WW.httpCode ? "busy" : "server" : "offline"
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L655-L657` → after: `L584-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L584-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L584-L590) · [Before (L655-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L655-L657)

```diff
-     function gB(BB, OB) {
-       const GB = BB.get(OB);
-       return void 0 !== GB && (BB.delete(OB), BB.set(OB, GB)), GB
+     function ZW(WW, iW, OW) {
+       return (0, PW.postJsonWithMetricsCookiesAndJsonResponse)(`${NW.clientSideServerUrls.indexUrl}${iW}`, OW, {
+         retries: 3
+       }, WW.getMetricsCookies()).catch((WW => (console.error("Bad response from the server when trying to change name:", iW, WW), {
+         outcome: "failed",
+         failure: tW(WW)
+       })))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L660-L661` → after: `L593-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L593-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L593-L594) · [Before (L660-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L660-L661)

```diff
-     function rB(BB, OB, GB) {
-       BB.set(OB, GB), BB.size > RB && BB.delete(BB.keys().next().value)
+     function xW(WW) {
+       return "outcome" in WW && "failed" === WW.outcome
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L664-L684` → after: `L597-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L597-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L597-L600) · [Before (L664-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L664-L684)

```diff
-     function XB(BB, OB, GB) {
-       if (BB === ZB.Nametag) {
-         let BB = gB(fB, OB);
-         return void 0 === BB && (BB = (0, yB.d)(JSON.parse(OB), GB, nB), rB(fB, OB, BB)), BB
-       }
-       if (BB === ZB.MultilineText) {
-         var DB;
-         const BB = JSON.parse(OB),
-           YB = JSON.stringify(null !== (DB = BB.box) && void 0 !== DB ? DB : null),
-           QB = "number" === typeof BB.shown ? BB.shown : null;
-         let oB = gB(kB, YB);
-         void 0 === oB && (oB = jB(BB.box, GB, nB), rB(kB, YB, oB));
-         const yB = null === QB ? null : Math.min(Math.max(0, Math.floor(QB)), oB.chars),
-           JB = oB;
-         return {
-           width: JB.width,
- ... (5 more removed lines; see GitHub link above)
+     function lW(WW) {
+       return console.error("Error when trying to get with new name from DB", WW), {
+         outcome: "refused",
+         message: WW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L743` → after: `L603-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L603-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L603-L620) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L743)

```diff
-     const wB = 2 ** Math.floor(Math.log2(NB));
+     async function AW(WW) {
+       const iW = await ZW(WW, "/index/name/random", {});
+       return xW(iW) ? iW : "err" in iW ? lW(iW.err) : (WW.setPlayerName(iW.name), {
+         outcome: "changed",
+         name: iW.name
+       })
+     }
+     async function bW(WW, iW) {
+       const OW = await ZW(WW, "/index/name/update", {
+         name: iW
+       });
+       return xW(OW) ? OW : "err" in OW ? lW(OW.err) : OW.nameExists ? {
+         outcome: "taken"
+       } : (WW.setPlayerName(iW), {
+         outcome: "changed",
+         name: iW
+ ... (2 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/221.js` (Changed code · before: `L746-L790` → after: `L623-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92b8edaa1547ea76def83a23ade0f2077d8c14a8961cdc3ce1c911cd952eefb0) · [After (L623-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/221.js#L623-L638) · [Before (L746-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/221.js#L746-L790)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       try {
-         if (BB.length < 2) return [0, 0];
-         const QB = (0, DB.e)(OB);
-         if (!QB) return [0, 0];
-         const oB = iB();
-         oB !== UB && (UB = oB, LB());
-         const [jB] = BB, yB = SB.decode(BB.subarray(1));
-         let JB;
-         jB !== ZB.Board && jB !== ZB.Leaderboard || !nB.canSeePlayerWrittenText || nB.glyphsShown(yB), QB.save();
-         try {
-           JB = XB(jB, yB, QB)
-         } finally {
-           QB.restore()
-         }
- ... (29 more removed lines; see GitHub link above)
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+       const mW = 1 === iW ? 1 : 10 ** (iW - 1),
+         NW = String(mW + Math.floor(OW() * (10 ** iW - mW)));
+       return `${WW.slice(0,EW.f-iW)}${NW}`
+     }
+     const UW = [1, 2, 3, 4];
+     async function kW(WW, iW) {
+       const OW = await bW(WW, iW);
+       if ("taken" !== OW.outcome) return OW;
+       for (const mW of UW) {
+         const OW = jW(iW, mW),
+           EW = await bW(WW, OW);
+         if ("taken" !== EW.outcome) return EW
+       }
+       return {
+         outcome: "taken"
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/222.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/222.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L4` → after: `L4-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L4-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/222.js#L4-L615) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/222.js#L4)

```diff
-   44670: (BB, OB, GB) => {
+   35159: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => FW,
+       e: () => oi,
+       h: () => ui,
+       k: () => ei,
+       m: () => bi,
+       q: () => Ui,
+       t: () => ki,
+       w: () => Mi,
+       y: () => di,
+       C: () => si
+     });
+     var mW = OW(248),
+       EW = OW(25),
+       NW = OW(100),
+ ... (596 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L8-L9` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/222.js#L619-L620) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/222.js#L8-L9)

```diff
-     var YB = GB(56),
-       DB = GB(3072);
+     var mW = OW(100),
+       EW = OW(131);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L12-L76` → after: `L623-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L623-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/222.js#L623-L636) · [Before (L12-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/222.js#L12-L76)

```diff
-       const QB = (0, YB.useRef)(null),
-         {
-           width: oB,
-           height: jB
-         } = (0, DB.e)(BB);
-       (0, YB.useEffect)((() => {
-         const GB = OB(BB.current);
-         return QB.current = GB, () => {
-           GB.close(), QB.current = null
-         }
-       }), [BB, OB]), (0, YB.useEffect)((() => {
-         oB <= 0 || jB <= 0 || QB.current.resize(oB, jB)
-       }), [oB, jB]), (0, YB.useEffect)((() => {
-         QB.current.show(GB)
-       }), [GB])
-     }
- ... (49 more removed lines; see GitHub link above)
+       if ("webgpu" === WW) return OW ? ((0, mW.seedGpuVendor)(OW), {
+         vendor: OW,
+         renderer: ""
+       }) : null;
+       try {
+         const OW = "webgl" === WW ? iW.getContext("webgl2") : iW.getContext("webgl");
+         "webgl" === WW && OW && (0, EW.A)(OW);
+         const NW = null === OW || void 0 === OW ? void 0 : OW.getExtension("WEBGL_debug_renderer_info");
+         if (OW && NW) {
+           const WW = String(OW.getParameter(NW.UNMASKED_VENDOR_WEBGL)),
+             iW = String(OW.getParameter(NW.UNMASKED_RENDERER_WEBGL));
+           return (0, mW.seedGpuVendor)(WW), (0, EW.F)(WW, iW), {
+             vendor: WW,
+             renderer: iW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/222.js` (Changed code · before: `L79-L332` → after: `L639-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-748c3a47606f574815fe78e44162a104072047dbe7d3240b740e757b1aecf0a5) · [After (L639-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/222.js#L639-L642) · [Before (L79-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/222.js#L79-L332)

```diff
-       }
-     }
-     const jB = oB([0, 0, 0], [0, 0, 0], .07),
-       yB = (0, DB.d)((0, YB.e)(jB), "mobIdle"),
-       JB = oB([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       MB = oB([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       PB = (0, DB.d)((0, YB.e)(JB), "gunReady"),
-       zB = (0, DB.d)((0, YB.e)(MB), "gunAimed")
-   },
-   39331: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => DB,
-       f: () => QB
-     });
-     const YB = new WeakMap;
- 
- ... (238 more removed lines; see GitHub link above)
+         OW && (0, EW.F)(String(OW.getParameter(OW.VENDOR)), String(OW.getParameter(OW.RENDERER)))
+       } catch {}
+       return null
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/223.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/223.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L4-L6)

```diff
-   44665: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       MobPreview: () => PB
+   38111: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       g: () => NW,
+       i: () => LW,
+       m: () => PW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L8-L14` → after: `L11-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L11-L17) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L8-L14)

```diff
-     var YB = GB(56),
-       DB = GB(1090),
-       QB = GB.n(DB),
-       oB = GB(44670),
-       jB = GB(34828),
-       yB = GB(44673),
-       JB = GB(1282);
+     var mW = OW(1876);
+     const EW = ".bloxdreplay",
+       NW = "application/octet-stream";
+ 
+     function PW() {
+       return `game-recording-${(arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date).toISOString()}${EW}`
+     }
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L17-L36` → after: `L20-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L20-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L20-L24) · [Before (L17-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L17-L36)

```diff
-       return jB.g.openMob(BB)
-     }
-     const PB = (0, YB.memo)((function(BB) {
-       let {
-         mobType: OB,
-         variation: GB = null,
-         animation: DB = yB.j,
-         className: jB
-       } = BB;
-       const PB = (0, YB.useRef)(null),
-         zB = (0, YB.useMemo)((() => ({
-           mobType: OB,
-           variation: GB,
-           animation: DB
-         })), [OB, GB, DB]);
-       return (0, oB.d)(PB, MB, zB), (0, JB.jsx)("div", {
- ... (4 more removed lines; see GitHub link above)
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW();
+       return (0, mW.e)(new Blob([WW], {
+         type: NW
+       }), iW), iW
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L38` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L26) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L38)

```diff
-   44670: (BB, OB, GB) => {
+   38101: (WW, iW, OW) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L40` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L28-L29) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L40)

```diff
-       d: () => QB
+       b: () => PW,
+       f: () => NW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L42-L43` → after: `L31-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L31-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L31-L40) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L42-L43)

```diff
-     var YB = GB(56),
-       DB = GB(3072);
+     var mW = OW(38105);
+     let EW = {
+       open: async () => {
+         throw new Error(mW.e.viewerLoadFailed.text)
+       },
+       replayKey: () => (console.warn("No game client has loaded to save a replay from"), null),
+       encode: async () => null,
+       fileHandle: () => null,
+       markSaved: () => {}
+     };
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L45-L54` → after: `L42-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L42-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L42-L147) · [Before (L45-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L45-L54)

```diff
-     function QB(BB, OB, GB) {
-       const QB = (0, YB.useRef)(null),
-         {
-           width: oB,
-           height: jB
-         } = (0, DB.e)(BB);
-       (0, YB.useEffect)((() => {
-         const GB = OB(BB.current);
-         return QB.current = GB, () => {
-           GB.close(), QB.current = null
+     function NW(WW) {
+       EW = WW
+     }
+ 
+     function PW() {
+       return EW
+     }
+   },
+   38105: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => PW,
+       i: () => wW,
+       m: () => cW
+     });
+     var mW = OW(27);
+     const EW = 1500,
+ ... (90 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L56-L60` → after: `L149-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L149-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L149-L163) · [Before (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L56-L60)

```diff
-       }), [BB, OB]), (0, YB.useEffect)((() => {
-         oB <= 0 || jB <= 0 || QB.current.resize(oB, jB)
-       }), [oB, jB]), (0, YB.useEffect)((() => {
-         QB.current.show(GB)
-       }), [GB])
+       },
+       LW = new Set(Object.values(PW).filter((WW => "Error" === WW.type)).map((WW => WW.text)));
+ 
+     function cW(WW) {
+       return WW instanceof Error && LW.has(WW.message) ? WW.message : void 0
+     }
+ 
+     function wW(WW) {
+       var iW;
+       const OW = null !== (iW = WW.timeoutMs) && void 0 !== iW ? iW : "Error" === WW.type ? EW : NW;
+       mW.l.iZ("showBottomMessage", {
+         message: WW.text,
+         timeoutLength: OW,
+         type: WW.type
+       })
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L63` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L166) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L63)

```diff
-   44673: (BB, OB, GB) => {
+   37735: (WW, iW, OW) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L66-L67` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L169) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L66-L67)

```diff
-       h: () => PB,
-       j: () => yB
+       g: () => NW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L69-L70` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L171) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L69-L70)

```diff
-     var YB = GB(37841),
-       DB = GB(39331);
+     let mW = !1;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L72-L80` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L173-L174) · [Before (L72-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L72-L80)

```diff
-     function QB(BB, OB) {
-       let [GB, YB, DB] = BB;
-       return [0, .5, 1].map((BB => ({
-         timeFraction: BB,
-         rotation: {
-           nG: "catmull-rom-spline",
-           point: [GB, YB, DB + (.5 === BB ? OB : 0)]
-         }
-       })))
+     function EW() {
+       return mW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L83-L113` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L177-L178) · [Before (L83-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L83-L113)

```diff
-     function oB(BB, OB, GB) {
-       return {
-         NG: 3200,
-         loop: !0,
-         AG: {
-           Root: {
-             timeline: [0, .5, 1].map((BB => ({
-               timeFraction: BB,
-               position: {
-                 nG: "catmull-rom-spline",
-                 point: [0, .5 === BB ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((BB => ({
- ... (15 more removed lines; see GitHub link above)
+     function NW(WW) {
+       return mW !== WW && (mW = WW, !0)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L122` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L181) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L122)

```diff
-   34832: (BB, OB, GB) => {
+   37968: (WW, iW, OW) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L126` → after: `L204-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L204-L207) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L126)

```diff
-       i: () => MB
+       l: () => sW,
+       p: () => SW,
+       s: () => KW,
+       w: () => jW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L128` → after: `L209-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L209-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L209-L222) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L128)

```diff
-     var YB = GB(1611);
+     var mW = OW(1463),
+       EW = OW(37975),
+       NW = OW(27);
+     const PW = "clientGameCraftableMarksChanged",
+       LW = "clientGameCraftableLocksChanged",
+       cW = "clientGameCraftableOrderChanged",
+       wW = "selectCraftable";
+     let tW = new Set,
+       ZW = new Map,
+       xW = new Map;
+ 
+     function lW() {
+       return tW
+     }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L131-L135` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L225-L226) · [Before (L131-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L131-L135)

```diff
-       var OB;
-       return {
-         ...oB.store,
-         yaw: oB.store.yaw + (null !== (OB = YB.d[BB].previewYaw) && void 0 !== OB ? OB : 0)
-       }
+       const iW = new Set(WW);
+       (0, EW.c)(iW, tW) || (tW = iW, NW.l.iZ(PW, tW))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L137-L149` → after: `L228-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L228-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L228-L252) · [Before (L137-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L137-L149)

```diff
-     const QB = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       oB = {
-         player: QB,
-         store: {
-           ...QB,
-           radius: 33,
-           target: [0, 3.9, 0]
-         }
+ 
+     function bW() {
+       return ZW
+     }
+ 
+     function jW(WW) {
+       0 === WW.size && 0 === ZW.size || (ZW = new Map(WW), NW.l.iZ(LW, ZW))
+     }
+ 
+     function UW() {
+       return xW
+     }
+ 
+     function kW(WW) {
+       WW.length === xW.size && WW.every(((WW, iW) => xW.get(WW) === iW)) || (xW = new Map(WW.map(((WW, iW) => [WW, iW]))), NW.l.iZ(cW, xW))
+     }
+ ... (9 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L153-L155` → after: `L307-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L307-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L307-L354) · [Before (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L153-L155)

```diff
-       BB instanceof Promise ? BB.then(OB).catch((BB => {
-         console.error("Couldn't open the preview", BB)
-       })) : OB(BB)
+       return mW(WW, iW)
+     }
+   },
+   37838: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW,
+       e: () => AW,
+       g: () => EW,
+       j: () => LW,
+       n: () => wW
+     });
+     var mW = OW(37840);
+     const EW = "data-camera-fade",
+       NW = "data-letterbox-bar",
+       PW = "data-camera-fade-layer";
+ 
+ ... (32 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L159-L165` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L358) · [Before (L159-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L159-L165)

```diff
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, jB(BB, (BB => {
-           this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
-         }))
-       }
-       show(BB) {
-         var OB;
-         this.view = BB, null === (OB = this.opened) || void 0 === OB || OB.show(BB)
+         this.getContainer = WW, this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1, this.markedHost = null, this.markedCovered = !1
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L167` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L360) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L167)

```diff
-       resize(BB, OB) {
+       setFade(WW, iW) {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L169-L172` → after: `L362-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L362-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L362-L368) · [Before (L169-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L169-L172)

```diff
-         this.size = {
-           width: BB,
-           height: OB
-         }, null === (GB = this.opened) || void 0 === GB || GB.resize(BB, OB)
+         if (!this.elements && iW <= 0) return;
+         const {
+           fade: mW
+         } = this.getElements(), EW = null !== (OW = cW) && void 0 !== OW ? OW : this.getContainer();
+         mW.parentElement !== EW && EW.appendChild(mW);
+         const NW = this.markHost(iW > 0 ? cW : null, iW >= 1);
+         (WW !== this.colour || iW !== this.alpha || NW) && (WW !== this.colour && (mW.style.background = WW), mW.style.opacity = String(iW), mW.style.display = iW > 0 ? "" : "none", this.fadeKeeperHosts(iW), this.colour = WW, this.alpha = iW)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L174` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L370) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L174)

```diff
-       close() {
+       fadeKeeperHosts(WW) {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L176-L186` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L372-L374) · [Before (L176-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L176-L186)

```diff
-         this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
-       }
-     }
-     class JB {
-       constructor(BB) {
-         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), jB(BB, (BB => {
-           this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
-         }))
-       }
-       get dev() {
-         return this.opened.dev
+         const OW = null === (iW = this.markedHost) || void 0 === iW ? void 0 : iW.parentElement;
+         if (OW)
+           for (const mW of OW.querySelectorAll("[data-camera-keeper-host]")) mW.style.setProperty("--camera-fade-alpha", String(WW))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L188-L190` → after: `L376-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L376-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L376-L385) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L188-L190)

```diff
-       isReady() {
-         var BB, OB;
-         return null !== (BB = null === (OB = this.opened) || void 0 === OB ? void 0 : OB.isReady()) && void 0 !== BB && BB
+       setLetterbox(WW, iW) {
+         if (WW === this.letterbox) return;
+         if (!this.elements && !WW) return;
+         const {
+           top: OW,
+           bottom: mW
+         } = this.getElements();
+         this.letterbox = WW;
+         const EW = !iW || "function" === typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "none" : "transform 400ms ease-in-out";
+         OW.style.transition = EW, mW.style.transition = EW, OW.style.transform = WW ? "translateY(0)" : "translateY(-100%)", mW.style.transform = WW ? "translateY(0)" : "translateY(100%)"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L192-L194` → after: `L387-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L387-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L387-L391) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L192-L194)

```diff
-       setCosmetic(BB, OB) {
-         var GB;
-         null === (GB = this.opened) || void 0 === GB || GB.setCosmetic(BB, OB)
+       clear() {
+         const {
+           elements: WW
+         } = this;
+         WW && (this.markHost(null, !1), WW.fade.remove(), WW.top.remove(), WW.bottom.remove(), this.elements = null, this.colour = "", this.alpha = 0, this.letterbox = !1)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L196` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L393) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L196)

```diff
-       playEmote(BB) {
+       markHost(WW, iW) {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L198-L202` → after: `L395-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L395-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L395-L399) · [Before (L198-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L198-L202)

```diff
-         null === (OB = this.opened) || void 0 === OB || OB.playEmote(BB)
-       }
-       setOrbit(BB) {
-         var OB;
-         null === (OB = this.opened) || void 0 === OB || OB.setOrbit(BB)
+         const mW = WW !== this.markedHost;
+         if (!mW && iW === this.markedCovered) return !1;
+         var NW, PW;
+         mW && (null === (NW = this.markedHost) || void 0 === NW || null === (PW = NW.parentElement) || void 0 === PW || PW.removeAttribute(EW));
+         return null === WW || void 0 === WW || null === (OW = WW.parentElement) || void 0 === OW || OW.setAttribute(EW, iW ? "covered" : ""), this.markedHost = WW, this.markedCovered = iW, mW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L204-L206` → after: `L401-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L401-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L401-L413) · [Before (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L204-L206)

```diff
-       resetCamera() {
-         var BB;
-         null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
+       getElements() {
+         if (this.elements) return this.elements;
+         const WW = ZW("top"),
+           iW = ZW("bottom");
+         WW.style.transform = "translateY(-100%)", iW.style.transform = "translateY(100%)";
+         const OW = tW();
+         OW.style.top = "0", OW.style.bottom = "0", OW.style.display = "none", OW.setAttribute(PW, "");
+         const mW = this.getContainer();
+         return mW.appendChild(WW), mW.appendChild(iW), WW.getBoundingClientRect(), this.elements = {
+           fade: OW,
+           top: WW,
+           bottom: iW
+         }, this.elements
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L208-L210` → after: `L415-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L415-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L415-L527) · [Before (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L208-L210)

```diff
-       async untilDrawn(BB) {
-         var OB;
-         await this.ready, await (null === (OB = this.opened) || void 0 === OB ? void 0 : OB.untilDrawn(BB))
+     }
+   },
+   37915: (WW, iW, OW) => {
+     OW.d(iW, {
+       C: () => tW,
+       d: () => mW,
+       f: () => xW,
+       g: () => ZW,
+       k: () => PW,
+       m: () => AW,
+       q: () => cW,
+       t: () => bW,
+       w: () => wW,
+       y: () => LW
+     });
+     const mW = Math.PI / 2 - .001,
+ ... (97 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L212-L217` → after: `L529-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L529-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L529-L537) · [Before (L212-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L212-L217)

```diff
-       resize(BB, OB) {
-         var GB;
-         this.size = {
-           width: BB,
-           height: OB
-         }, null === (GB = this.opened) || void 0 === GB || GB.resize(BB, OB)
+       if (!ZW) {
+         let WW = 0,
+           iW = 1;
+         tW = OW;
+         for (let EW = 0; EW < 12; EW++) {
+           const EW = cW(mW, NW, tW);
+           if (Math.abs(EW - OW) < 1e-6) break;
+           OW > EW ? WW = tW : iW = tW, tW = (WW + iW) / 2
+         }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L219-L221` → after: `L539-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L539-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L539-L553) · [Before (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L219-L221)

```diff
-       close() {
-         var BB;
-         this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
+       return cW(EW, PW, tW)
+     }
+ 
+     function ZW(WW) {
+       switch (WW) {
+         case "linear":
+           return mW;
+         case "easeIn":
+           return EW;
+         case "easeOut":
+           return NW;
+         case "easeInOut":
+           return PW;
+         default:
+           return WW
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L226-L237` → after: `L582-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L582-L583) · [Before (L226-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L226-L237)

```diff
-         this.host = null, this.makeDefault = null
-       }
-       setHost(BB) {
-         this.host = BB
-       }
-       setDefaultHost(BB) {
-         this.makeDefault = BB
-       }
-       current() {
-         if (null === this.host) {
-           if (null === this.makeDefault) throw new Error("no preview host");
-           this.host = this.makeDefault()
+         this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
+           document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L241-L242` → after: `L586-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L586-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L586-L592) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L241-L242)

```diff
-       openMob(BB) {
-         return new yB(this.current().openMob(BB))
+       isHeld() {
+         return this.holding && EW() !== this.heldOrientation && (this.holding = !1), this.holding
+       }
+       hold() {
+         this.heldOrientation = EW(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, mW.ub)(new Error("Game view size held for 60 s"))
+         }), 6e4)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L244-L245` → after: `L594-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L594-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L594-L601) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L244-L245)

```diff
-       openPet(BB) {
-         return new yB(this.current().openPet(BB))
+       release() {
+         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
+           if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
+           else {
+             this.holding = !1;
+             for (const WW of this.resizers) WW()
+           }
+         }), 1e3)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L247-L248` → after: `L603-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L603-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L603-L609) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L247-L248)

```diff
-       openMobLineup(BB) {
-         return new yB(this.current().openMobLineup(BB))
+       heldSizer(WW) {
+         let iW = !1;
+         return () => {
+           if (iW && this.isHeld()) return null;
+           const OW = WW();
+           return iW ||= null !== OW, OW
+         }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L250-L251` → after: `L611-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L611-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L611-L614) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L250-L251)

```diff
-       openCharacter(BB, OB) {
-         return new JB(this.current().openCharacter(BB, OB))
+       onRelease(WW) {
+         return this.resizers.add(WW), () => {
+           this.resizers.delete(WW)
+         }
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L255` → after: `L618-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L618-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L618-L625) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L255)

```diff
-   34828: (BB, OB, GB) => {
+   37752: (WW, iW, OW) => {
+     const mW = JSON.parse('{"classicGame":{"loseItemsIfLogOutTip":"You will lose your items if you log out when less than 80hp and hit by a player within the last 8 seconds.","protectLandWithProtectorsTip":"Protect your land and chests with protectors - craft them from diamonds", … [truncated]
+     (0, OW(1172).b)(mW)
+   },
+   37975: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return WW.size === iW.size && [...WW].every((WW => iW.has(WW)))
+     }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L257-L259` → after: `L627-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L627-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L627-L637) · [Before (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L257-L259)

```diff
-       b: () => YB.d,
-       e: () => YB.h,
-       g: () => YB.i
+       c: () => mW
+     })
+   },
+   35225: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => tW,
+       e: () => xW,
+       g: () => ZW,
+       k: () => PW,
+       o: () => wW,
+       q: () => cW
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L261-L269` → after: `L639-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L639-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L639-L719) · [Before (L261-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L261-L269)

```diff
-     var YB = GB(34832);
-     class DB {
-       constructor(BB) {
-         this.load = BB, this.loaded = null, this.loading = null
-       }
-       run(BB) {
-         return null !== this.loaded ? BB(this.loaded) : (this.loading ??= this.load().then((BB => (this.loaded = BB, BB)), (BB => {
-           throw this.loading = null, BB
-         })), this.loading.then(BB))
+     var mW = OW(344);
+     const EW = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
+       NW = {
+         Damage: {
+           translationKey: "enchantments:damageDescription"
+         },
+         "Attack Speed": {
+           translationKey: "enchantments:attackSpeedDescription"
+         },
+         "Critical Damage": {
+           translationKey: "enchantments:criticalDamageDescription"
+         },
+         Protection: {
+           translationKey: "enchantments:protectionDescription"
+         },
+         Health: {
+ ... (65 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L272-L283` → after: `L722-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L722-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L722-L817) · [Before (L272-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L272-L283)

```diff
-     class QB {
-       constructor() {
-         this.mobScene = new DB((() => Promise.all([GB.e(84), GB.e(259), GB.e(258), GB.e(283), GB.e(111), GB.e(284), GB.e(87), GB.e(281), GB.e(85), GB.e(86), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(303), GB.e(255), GB.e(272), GB.e(286), GB.e(289), GB.e(89), GB. … [truncated]
-       }
-       openMob(BB) {
-         return this.mobScene.run((OB => OB.openMobPreview(BB)))
-       }
-       openPet(BB) {
-         return this.mobScene.run((OB => OB.openPetPreview(BB)))
-       }
-       openMobLineup(BB) {
-         return this.mobScene.run((OB => OB.openMobLineupPreview(BB)))
+     const LW = {
+       "Wood Enchanting Table": [{
+         min: 1,
+         max: 2
+       }, {
+         min: 3,
+         max: 4
+       }, {
+         min: 5,
+         max: 6
+       }],
+       "Stone Enchanting Table": [{
+         min: 2,
+         max: 4
+       }, {
+         min: 5,
+ ... (80 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/223.js` (Changed code · before: `L285-L286` → after: `L819-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0cR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ff7f68178be34248f1bb258f78b77fa6fe6e111b87daf025cd3911afc4951e0c) · [After (L819-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/223.js#L819-L828) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/223.js#L285-L286)

```diff
-       openCharacter(BB, OB) {
-         return this.characterScene.run((GB => GB.openCharacterPreview(BB, OB)))
+     }
+ 
+     function xW(WW, iW) {
+       const {
+         min: OW,
+         max: EW
+       } = LW[WW][iW], NW = mW.e.sampleUniformIntDistribution(OW, EW, "includeMax");
+       return {
+         ...ZW(NW),
+         level: NW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/224.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/224.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L4)

```diff
-   37065: (BB, OB, GB) => {
+   35231: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L6` → after: `L6-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L6-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L6-L29) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L6)

```diff
-       default: () => GO
+       MAX_BLOCK_ID: () => mW,
+       armourReductionOf: () => CW,
+       clipSizeOf: () => fW,
+       creativeAltNames: () => Pi,
+       creativeCategoryOf: () => FW,
+       creativeItemCategories: () => LW,
+       creativeItemCategoryIcons: () => cW,
+       creativeItemIds: () => zW,
+       descriptionOf: () => DW,
+       displayNameOf: () => gW,
+       dropsNothing: () => qW,
+       enchantmentPerksOf: () => aW,
+       gunTypeOf: () => BW,
+       harvestsNullLevelOf: () => RW,
+       isDevOnlyItem: () => Oi,
+       itemIsDisabled: () => Ei,
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L8-L12` → after: `L31-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L31-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L31-L51) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L8-L12)

```diff
-     var YB = GB(56);
-     const DB = "newPlayerDeal",
-       QB = 36e5,
-       oB = [4, 12, 20, 20, 30];
-     const jB = 12 * QB;
+     const mW = 8574,
+       EW = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       NW = "S-$SW$$R&$SH2$)$'$)$4$)$X*$I6$-$%$%$cD1$WE1$%%%$]5$b7$RI4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$Oa0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TW3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       PW = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       LW = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
+       cW = {
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
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L15` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L54-L58) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L15)

```diff
-       return BB - jB
+       let iW = null;
+       return OW => {
+         var mW;
+         return iW ??= (0, tW.y)(WW, 10114), null !== (mW = iW[OW]) && void 0 !== mW ? mW : 0
+       }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L20` → after: `L63-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L63-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L63-L68) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L20)

```diff
-       return OB >= YB && OB < GB && (null === BB.lastShownAt || BB.lastShownAt < YB)
+       let EW = null,
+         NW = [];
+       return WW => {
+         const PW = mW(WW);
+         if (0 !== PW) return null === EW && (EW = iW.split(tW.s), NW = new Array(EW.length)), NW[PW - 1] ??= OW(EW[PW - 1])
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L23-L31` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L71-L72) · [Before (L23-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L23-L31)

```diff
-     function MB(BB, OB) {
-       const {
-         arrival: GB,
-         now: YB,
-         endsAt: DB,
-         playedOnDevice: jB
-       } = OB;
-       return !(YB >= DB || !jB) && (!(!JB(BB, YB, DB) && 0 !== BB.shownCount && null !== BB.lastShownAt) || "open" === GB && YB - BB.lastShownAt >= (yB = BB.shownCount, oB[Math.min(Math.max(yB, 1), oB.length) - 1] * QB));
-       var yB
+     function AW(WW) {
+       return WW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L62-L111` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L76) · [Before (L62-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L62-L111)

```diff
-       let {
-         shownView: OB,
-         close: GB
-       } = BB;
-       const {
-         t: DB
-       } = (0, IB.H)(), QB = (0, KB.S)(), {
-         purchaseUnderWay: oB,
-         notice: jB,
-         needsLogin: yB,
-         buyPack: JB
-       } = (0, rB.c)("popup", ((BB, OB) => {
-         GB(!1), (0, mB.e)(BB, OB)
-       })), MB = null === QB;
-       (0, YB.useEffect)((() => {
-         MB && GB(!1)
- ... (34 more removed lines; see GitHub link above)
+       return WW === tW.f ? null : (0, tW.B)(WW)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L115-L121` → after: `L104-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L104-L108) · [Before (L115-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L115-L121)

```diff
-       let {
-         arm: OB,
-         children: GB
-       } = BB;
-       return (0, YB.useEffect)((() => {
-         (0, KB.I)(!0)
-       }), []), (0, KB.T)(OB, "popup"), GB
+       const iW = jW(WW);
+       return null !== iW ? iW : KW(kW, WW, (() => {
+         const iW = (0, wW.d)(WW);
+         return void 0 === iW ? void 0 : (0, tW.E)(iW)
+       }))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L125-L141` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L112-L115) · [Before (L125-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L125-L141)

```diff
-       let OB = null;
-       AB.NotificationProvider.showCustomPopup({
-         body: GB => (0, XB.jsx)(EB, {
-           arm: BB.arm,
-           children: (0, XB.jsx)(wB, {
-             shownView: BB,
-             close: BB => {
-               OB ??= BB, GB()
-             }
-           })
-         }),
-         middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
-         middleScreenPopupClassName: "NewPlayerDealPopupPanel",
-         disableExitButton: !0,
-         unlockPointerKey: "NewPlayerDealPopup"
-       }).getResult().then((GB => {
- ... (1 more removed lines; see GitHub link above)
+       const iW = UW(WW);
+       return null !== iW ? iW : KW(sW, WW, (() => {
+         var iW;
+         return null !== (iW = (0, tW.D)(gW(WW))) && void 0 !== iW ? iW : void 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L150-L156` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L120) · [Before (L150-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L150-L156)

```diff
-       const OB = Date.now() + TB;
-       return new Promise((GB => {
-         const YB = () => {
-           BB() ? (0, fB.g)() || AB.NotificationProvider.hasPopup() || (0, UB.k)() || (0, KB.q)() || null !== lB.c.get("openEverythingMenuName") ? Date.now() > OB ? GB(!1) : setTimeout(YB, eB) : GB(!0) : GB(!1)
-         };
-         YB()
-       }))
+       return SW(WW)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L162-L164` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L123-L124) · [Before (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L162-L164)

```diff
-     function sB(BB, OB) {
-       var GB;
-       return (null === (GB = vB) || void 0 === GB ? void 0 : GB.accountId) === OB && vB.shownCount === BB.shownCount
+     function pW(WW) {
+       return YW(WW)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L167-L168` → after: `L127-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L127-L128) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L167-L168)

```diff
-     function xB(BB, OB, GB) {
-       return !!sB(OB, GB) && (vB = null, (0, KB.v)(GB), cB(BB), !0)
+     function fW(WW) {
+       return yW(WW)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L170-L197` → after: `L130-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L130-L132) · [Before (L170-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L170-L197)

```diff
-     async function tB(BB, OB, GB, YB) {
-       if (HB) return !1;
-       let DB;
-       HB = !0;
-       try {
-         DB = await async function(BB) {
-           const {
-             newPlayerDeal: OB,
-             counted: GB
-           } = await (0, WB.postJsonWithMetricsCookiesAndJsonResponse)(`${RB.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
-             shownCount: BB
-           }, {
-             retries: 1
-           });
-           return {
-             newPlayerDeal: OB,
- ... (12 more removed lines; see GitHub link above)
+ 
+     function CW(WW) {
+       return TW(WW)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L201-L277` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L135-L136) · [Before (L201-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L201-L277)

```diff
-     function OO(BB, OB, GB, DB, QB) {
-       var oB;
-       const {
-         gameState: jB
-       } = (0, lB.o)(["gameState"]), zB = "landingPage" === jB, {
-         pointing: pB
-       } = (0, nB.h)(), qB = (0, YB.useRef)(pB);
-       qB.current = pB;
-       const ZB = (0, YB.useRef)(BB);
-       ZB.current = BB;
-       const RB = (0, YB.useRef)(OB);
-       RB.current = OB;
-       const WB = (0, YB.useRef)(GB);
-       WB.current = GB;
-       const [AB, UB] = (0, YB.useState)(null), fB = (0, YB.useRef)(0), kB = (0, YB.useRef)(0), dB = (0, YB.useRef)(!1), KB = (0, YB.useCallback)((BB => {
-         "open" === function(BB) {
- ... (61 more removed lines; see GitHub link above)
+     function XW(WW) {
+       return JW(WW)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L280-L366` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L139-L140) · [Before (L280-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L280-L366)

```diff
-     function GO() {
-       const {
-         userContext: BB
-       } = (0, dB.d)(), OB = (0, pB.usePurchasesAllowed)(), [GB, QB] = (0, YB.useState)(uB.j);
-       (0, YB.useEffect)((() => (QB((0, uB.j)()), (0, uB.l)(QB))), []);
-       const oB = (0, KB.c)(BB);
-       ! function(BB, OB, GB) {
-         const [QB, oB] = (0, YB.useState)(0);
-         (0, YB.useEffect)((() => {
-           if (!OB || null === BB) return;
-           if (null !== GB) return void(0, KB.G)(BB, (0, uB.e)());
-           if (null !== (0, KB.h)(BB)) return;
-           let YB, QB = !1;
-           return (0, ZB.getBillingClient)().getOfferings(DB).then((OB => {
-             let {
-               offering: GB
- ... (71 more removed lines; see GitHub link above)
+     function BW(WW) {
+       return hW(WW)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L388-L399` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L144) · [Before (L388-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L388-L399)

```diff
-       let {
-         endsAt: OB,
-         className: GB
-       } = BB;
-       return (0, lB.jsxs)("span", {
-         className: QB()("NewPlayerDealClock", GB),
-         children: [(0, lB.jsx)(JB.b, {
-           name: "hourglass"
-         }), (0, lB.jsx)(yB.e, {
-           toTime: OB
-         })]
-       })
+       return 0 !== nW(WW)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L403-L447` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L148) · [Before (L403-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L403-L447)

```diff
-       let {
-         offered: OB,
-         needsLogin: GB,
-         busy: YB,
-         highlight: DB,
-         onBuy: yB
-       } = BB;
-       const {
-         t: JB
-       } = (0, oB.H)(), {
-         pack: pB
-       } = OB, qB = (0, PB.g)(OB.package);
-       return (0, lB.jsxs)("div", {
-         className: QB()("NewPlayerDealPack", {
-           NewPlayerDealPackHighlight: DB
-         }),
- ... (29 more removed lines; see GitHub link above)
+       return uW(WW)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L451-L484` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L152) · [Before (L451-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L451-L484)

```diff
-       let {
-         view: OB,
-         needsLogin: GB,
-         busy: DB,
-         highlight: jB,
-         onBuy: yB
-       } = BB;
-       const {
-         t: JB
-       } = (0, oB.H)();
-       return (0, lB.jsxs)("div", {
-         className: QB()("NewPlayerDealPacks", OB.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
-         children: [OB.packs.map(((BB, OB) => (0, lB.jsxs)(YB.Fragment, {
-           children: [OB > 0 && (0, lB.jsx)("div", {
-             className: "NewPlayerDealDivider",
-             "aria-hidden": !0,
- ... (18 more removed lines; see GitHub link above)
+       return 0 !== HW(WW)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L514-L518` → after: `L155-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L155-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L155-L159) · [Before (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L514-L518)

```diff
-     function nB(BB, OB) {
-       null !== BB && (0, NB.p)(BB) || ((0, DB.reportAnalyticsClick)({
-         id: "store.purchase_done",
-         value: `self:${OB.pack.packageId}`
-       }), null !== BB && (0, NB.r)(BB), fB(OB.pack.gems))
+     function IW(WW) {
+       const iW = oW(WW);
+       if (void 0 === iW || iW.startsWith(tW.q)) return null === iW || void 0 === iW ? void 0 : iW.slice(tW.q.length);
+       const OW = (0, wW.d)(WW);
+       return void 0 === OW ? void 0 : `${OW}${tW.s}${iW}`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L521-L536` → after: `L162-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L162-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L162-L174) · [Before (L521-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L521-L536)

```diff
-     function UB(BB, OB, GB) {
-       const DB = (0, NB.c)(OB);
-       switch (BB.kind) {
-         case "completed":
-           nB(DB, GB);
-           break;
-         case "pending":
-           QB = BB.intentId, oB = () => {
-             ZB.h.refresh(), nB(DB, GB)
-           }, SB || (SB = !0, VB.listen()), VB.follow(QB, oB);
-           break;
-         case "unknownPackage":
-           (0, NB.M)(OB, null);
-           break;
-         case "failed":
-           BB.errorKey === YB.e.newPlayerDealUnavailable && (0, NB.M)(OB, null)
+     function aW(WW) {
+       var iW;
+       return null !== (iW = dW(WW)) && void 0 !== iW ? iW : ZW
+     }
+     let rW = null;
+ 
+     function zW() {
+       if (null === rW) {
+         const WW = [],
+           iW = new tW.u(EW);
+         let OW = 0;
+         for (; !iW.done;) OW += (0, tW.I)(iW.next()), WW.push(OW);
+         rW = Object.freeze(WW)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L538` → after: `L176-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L176-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L176-L189) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L538)

```diff
-       var QB, oB
+       return rW
+     }
+ 
+     function FW(WW) {
+       return eW(WW)
+     }
+ 
+     function QW(WW, iW) {
+       var OW;
+       return 0 !== ((null !== (OW = vW(WW)) && void 0 !== OW ? OW : 0) & iW)
+     }
+ 
+     function Wi(WW) {
+       return QW(WW, tW.d.OnlyInSearch)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L542-L549` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L193) · [Before (L542-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L542-L549)

```diff
-       PB.NotificationProvider.showCustomPopup({
-         body: OB => (0, AB.jsx)(kB, {
-           gems: BB,
-           close: OB
-         }),
-         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
-         disableExitButton: !0
-       })
+       return QW(WW, tW.d.OnlyInCategory)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L553-L576` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L197) · [Before (L553-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L553-L576)

```diff
-       let {
-         gems: OB,
-         close: GB
-       } = BB;
-       const {
-         t: YB
-       } = (0, MB.H)();
-       return (0, AB.jsxs)("div", {
-         className: "NewPlayerDealAdded",
-         children: [(0, AB.jsxs)("div", {
-           className: "NewPlayerDealAddedHead",
-           children: [(0, AB.jsx)(pB.b, {
-             name: "circle-check"
-           }), (0, AB.jsx)(qB.b, {
-             amount: OB
-           }), (0, AB.jsx)("span", {
- ... (8 more removed lines; see GitHub link above)
+       return QW(WW, tW.d.DevOnly)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L580-L605` → after: `L201-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L201-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L201-L221) · [Before (L580-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L580-L605)

```diff
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.e;
-       const {
-         userContext: GB
-       } = (0, zB.d)(), {
-         purchaseUnderWay: YB,
-         notice: DB,
-         buy: yB
-       } = (0, jB.c)(OB), JB = (0, RB.j)(), MB = GB.mayBuy() || (0, QB.guestsMayBuy)(), PB = null === JB ? !MB : JB.guest && !GB.isLoggedIn();
-       return {
-         purchaseUnderWay: YB,
-         notice: DB,
-         needsLogin: PB,
-         buyPack: function(YB, DB) {
-           (0, NB.D)("new_player_deal.buy", (0, WB.b)(YB.arm, BB, DB.pack.packageId)), null === JB ? yB(function(BB) {
-             return {
-               sku: BB.pack.packageId,
- ... (10 more removed lines; see GitHub link above)
+       return !QW(WW, tW.d.HiddenByDefault) && void 0
+     }
+ 
+     function Ei(WW, iW, OW, mW) {
+       var EW;
+       const NW = null !== (EW = vW(WW)) && void 0 !== EW ? EW : 0;
+       return 0 !== (NW & tW.d.DisabledInPublicLobbies) && iW || 0 !== (NW & tW.d.DisabledInProduction) && !0 || !OW || !mW && 0 !== (NW & tW.d.DevOnly)
+     }
+     let Ni = null;
+ 
+     function Pi() {
+       if (null === Ni) {
+         const WW = PW.split(tW.s),
+           iW = new Map,
+           OW = new tW.u(NW);
+         let mW = 0,
+ ... (5 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/224.js` (Changed code · before: `L609-L610` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfdR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d0a6b189a3e97dd72032cd18495428ac60bdac327270d8fbcfab7c4412ba3cfd) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/224.js#L227) · [Before (L609-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/224.js#L609-L610)

```diff
-   },
-   34842: () => {}
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/225.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/225.js` (51 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee)

#### 1. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L4)

```diff
-   34856: (BB, OB, GB) => {
+   35240: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L7` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L8) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L7)

```diff
-       e: () => QB
+       f: () => NW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L9-L20` → after: `L10-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L10-L43) · [Before (L9-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L9-L20)

```diff
-     var YB = GB(3670);
- 
-     function DB() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const BB = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const OB = new BroadcastChannel(YB.o);
-         OB.postMessage({
-           stored: BB
-         }), OB.close()
-       } catch {
-         return null
+     var mW = OW(62);
+     const EW = new class {
+       constructor() {
+         this.inFlight = new Map, this.landings = new Map, this.listeners = new Set
+       }
+       getInFlight(WW) {
+         var iW;
+         return null !== (iW = this.inFlight.get(WW)) && void 0 !== iW ? iW : 0
+       }
+       setInFlight(WW, iW) {
+         this.getInFlight(WW) !== iW && (this.inFlight.set(WW, iW), this.notify())
+       }
+       subscribe(WW) {
+         return this.listeners.add(WW), () => {
+           this.listeners.delete(WW)
+         }
+ ... (18 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L22` → after: `L45-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L45-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L45-L54) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L22)

```diff
-       return BB
+     };
+ 
+     function NW(WW, iW) {
+       const [OW, NW] = (0, mW.useState)((() => EW.getInFlight(WW)));
+       return (0, mW.useLayoutEffect)((() => {
+         const iW = () => {
+           NW(EW.getInFlight(WW))
+         };
+         return iW(), EW.subscribe(iW)
+       }), [WW]), Math.max(0, iW - OW)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L25-L27` → after: `L57-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L57-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L57-L61) · [Before (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L25-L27)

```diff
-     function QB(BB) {
-       const OB = "object" === typeof BB && null !== BB ? BB.stored : null;
-       return "string" === typeof OB ? OB : null
+     function PW(WW, iW) {
+       let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+       (0, mW.useLayoutEffect)((() => {
+         if (OW) return EW.addLanding(WW, iW.current)
+       }), [WW, iW, OW])
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L30` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L64) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L30)

```diff
-   34854: (BB, OB, GB) => {
+   40748: (WW, iW, OW) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L32-L34` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L66) · [Before (L32-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L32-L34)

```diff
-       e: () => oB,
-       h: () => DB,
-       l: () => QB
+       e: () => EW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L36-L47` → after: `L68-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L68-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L68-L179) · [Before (L36-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L36-L47)

```diff
-     var YB = GB(3670);
-     async function DB(BB, OB, GB) {
-       let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
-       const QB = oB(await BB.getItem(YB.i, OB));
-       if (null === QB || DB()) return null;
-       const jB = await BB.getItem(YB.m, OB);
-       return DB() ? null : (await async function(BB) {
-         await Promise.all([BB.removeItem(YB.i), BB.removeItem(YB.m)])
-       }(BB).catch(GB), {
-         pack: QB,
-         source: "string" === typeof jB ? jB : null
-       })
+     var mW = OW(40751);
+     async function EW() {
+       const {
+         averageColors: WW
+       } = await OW.e(234).then((() => OW(35332)));
+       return new mW.d(WW)
+     }
+   },
+   40719: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => cW
+     });
+     var mW = OW(37917),
+       EW = OW(1172),
+       NW = OW(1244),
+       PW = OW(39679),
+ ... (96 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L50-L53` → after: `L302-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L302-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L302-L306) · [Before (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L50-L53)

```diff
-     function QB(BB) {
-       return (0, YB.u)() ? Promise.resolve(null) : DB(BB, !1, (BB => {
-         console.error("Error removing temporary texture pack: ", BB)
-       }), YB.u)
+     function HW() {
+       const WW = new Image;
+       WW.src = TW, WW.decode().catch((WW => {
+         console.error("[greenville] backpack art failed to load", WW)
+       }))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L57-L59` → after: `L350-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L350-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L350-L360) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L57-L59)

```diff
-       if ("object" !== typeof BB || null === BB) return null;
-       const OB = BB.metaData;
-       return "object" !== typeof OB || null === OB || "string" !== typeof OB.id ? null : BB
+       let {
+         controller: iW
+       } = WW;
+       (0, SW.g)(bW, null), (0, cW.useEffect)(HW, []);
+       const OW = iW.getView();
+       return null === OW ? null : (0, JW.jsx)(MW.h, {
+         placement: "bottomLeft",
+         children: (0, JW.jsx)(vW, {
+           view: OW
+         })
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L61-L62` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L362) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L61-L62)

```diff
-   },
-   54085: (BB, OB, GB) => {
+ 
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L64` → after: `L364-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L364-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L364-L490) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L64)

```diff
-       return null === BB.gameSource ? "player" : "customGame"
+       let {
+         view: iW
+       } = WW;
+       const {
+         t: OW
+       } = (0, yW.B)(), {
+         isTouchScreen: mW
+       } = (0, sW.p)(["isTouchScreen"]), [EW, NW] = (0, cW.useState)([]), PW = (0, cW.useRef)(null), LW = (0, cW.useRef)(null), wW = (0, cW.useRef)([]), tW = (0, cW.useRef)({
+         arrival: iW.arrival,
+         showToken: iW.showToken
+       }), {
+         arrival: ZW,
+         showToken: xW
+       } = iW;
+       (0, cW.useLayoutEffect)((() => {
+         var WW;
+ ... (111 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L75` → after: `L494-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L494-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L494-L507) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L75)

```diff
-       return "" === BB || "string" === typeof BB && DB.test(BB)
+       let {
+         shards: iW,
+         shardsPerItem: OW
+       } = WW;
+       return (0, JW.jsx)("div", {
+         className: "GreenvilleBackpackShards",
+         children: Array.from({
+           length: OW
+         }, ((WW, OW) => (0, JW.jsx)("span", {
+           className: kW()("GreenvilleBackpackShard", {
+             Filled: OW < iW
+           })
+         }, OW)))
+       })
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L79-L82` → after: `L511-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L511-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L511-L550) · [Before (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L79-L82)

```diff
-       return "object" === typeof BB && null !== BB && ("earth" === BB.type || Object.entries(BB).every((BB => {
-         let [OB, GB] = BB;
-         return "type" === OB || QB(GB)
-       })))
+       let {
+         drop: iW,
+         onLanded: OW
+       } = WW;
+       const mW = (0, cW.useRef)(null);
+       return (0, cW.useLayoutEffect)((() => {
+         const {
+           driftEm: WW,
+           spinDeg: EW
+         } = iW, NW = mW.current.animate([{
+           transform: `translate(${WW}em, -3.2em) rotate(${EW}deg) scale(1.2)`,
+           opacity: 0
+         }, {
+           transform: `translate(${.7*WW}em, -2.4em) rotate(${.7*EW}deg) scale(1.1)`,
+           opacity: 1,
+           offset: .25
+ ... (24 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L84-L89` → after: `L552-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L552-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L552-L558) · [Before (L84-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L84-L89)

```diff
-     const jB = /(?:src|image|image-set|cross-fade)\(/i,
-       yB = /url\(\s*(?:"(?<doubleQuoted>[^"]*)"|'(?<singleQuoted>[^']*)'|(?<unquoted>[^"'()\s]*))\s*\)/gi,
-       JB = /url\(/gi,
-       MB = ["https://bloxd.invalid/", "http://bloxd.invalid/"],
-       PB = new Set([...MB.map((BB => new URL(BB).origin)), "https://fonts.gstatic.com"]),
-       zB = new Set(["https://i.imgur.com/MEcjBFQ.png"]);
+     var VW = OW(80),
+       pW = OW(35243),
+       fW = OW(3332),
+       CW = OW(3599),
+       XW = OW(35240);
+     const BW = "gold",
+       qW = "Gold Coin";
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L91` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L560) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L91)

```diff
-     function lB(BB) {
+     function RW() {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L93-L110` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L562) · [Before (L93-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L93-L110)

```diff
-       if (BB.includes("\\") || jB.test(BB)) return !0;
-       const YB = [...BB.matchAll(yB)];
-       return YB.length !== (null !== (OB = null === (GB = BB.match(JB)) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : 0) || !YB.every((BB => {
-         var OB, GB, YB;
-         let {
-           groups: DB
-         } = BB;
-         return function(BB) {
-           try {
-             return MB.every((OB => {
-               const GB = new URL(BB, OB);
-               return "data:" === GB.protocol || PB.has(GB.origin) || zB.has(GB.href)
-             }))
-           } catch {
-             return !1
-           }
- ... (2 more removed lines; see GitHub link above)
+       return null !== (WW = null === (iW = (0, fW.e)("currencyAmounts")) || void 0 === iW ? void 0 : iW[BW].amount) && void 0 !== WW ? WW : 0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L114-L117` → after: `L583-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L583-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L583-L591) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L114-L117)

```diff
-       var OB, GB, YB, DB, jB, yB, JB;
-       const MB = [...Object.values(null !== (OB = BB.textureOverrides) && void 0 !== OB ? OB : {}), ...Object.values(null !== (GB = BB.modelOverrides) && void 0 !== GB ? GB : {})],
-         PB = [...Object.values(null !== (YB = null === (DB = BB.customCss) || void 0 === DB ? void 0 : DB.fontFaces) && void 0 !== YB ? YB : {}), ...Object.values(null !== (jB = null === (yB = BB.customCss) || void 0 === yB ? void 0 : yB.classStyles) && void 0 !== jB ? jB : {})]. … [truncated]
-       return !MB.every(QB) || !Object.values(null !== (JB = BB.skyBoxes) && void 0 !== JB ? JB : {}).every(oB) || PB.some((BB => "string" === typeof BB && lB(BB)))
+       var iW;
+       let {
+         sounds: OW
+       } = WW;
+       const mW = null === (iW = (0, fW.e)("currencyAmounts")) || void 0 === iW ? void 0 : iW[BW];
+       return !mW || mW.hidden ? null : (0, JW.jsx)(zW, {
+         gold: mW.amount,
+         sounds: OW
+       })
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L120-L135` → after: `L594-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L594-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L594-L630) · [Before (L120-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L120-L135)

```diff
-     function qB(BB, OB) {
-       if (null === BB || "player" === OB || !pB(BB)) return BB;
-       const GB = {
-         ...BB
-       };
-       return BB.textureOverrides && (GB.textureOverrides = NB(BB.textureOverrides, QB, "texture")), BB.modelOverrides && (GB.modelOverrides = NB(BB.modelOverrides, QB, "model")), BB.skyBoxes && (GB.skyBoxes = NB(BB.skyBoxes, oB, "sky")), BB.customCss && (GB.customCss = function(B … [truncated]
-         const OB = BB => NB(BB, (BB => "string" === typeof BB && !lB(BB)), "CSS"),
-           {
-             fontFaces: GB,
-             classStyles: YB
-           } = ZB(BB) ? BB : {},
-           DB = {};
-         for (const [QB, oB] of Object.entries(ZB(YB) ? YB : {})) DB[QB] = OB(oB);
-         return {
-           fontFaces: (Array.isArray(GB) ? GB : []).map(OB),
-           classStyles: DB
+     function zW(WW) {
+       let {
+         gold: iW,
+         sounds: OW
+       } = WW;
+       const mW = (0, CW.e)(),
+         [EW, NW] = (0, cW.useState)([]),
+         PW = (0, cW.useRef)(null),
+         LW = (0, cW.useRef)(null),
+         wW = (0, cW.useRef)(null),
+         tW = (0, cW.useRef)(null),
+         ZW = (0, cW.useRef)(iW);
+       (0, cW.useLayoutEffect)((() => {
+         const WW = iW - ZW.current;
+         if (ZW.current = iW, !(WW <= 0) && (OW.onGain(), !mW && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
+           const iW = function(WW) {
+ ... (21 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L137` → after: `L632-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L632-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L632-L682) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L137)

```diff
-       }(BB.customCss)), GB
+       }), [iW]), (0, cW.useEffect)((() => () => {
+         var WW;
+         null === (WW = wW.current) || void 0 === WW || WW.cancel()
+       }), []), (0, cW.useLayoutEffect)((() => () => {
+         XW.b.setInFlight(BW, 0)
+       }), []);
+       const xW = (0, cW.useCallback)(((WW, iW) => {
+           tW.current = iW, OW.onCoinLanded(WW.step, WW.steps), NW((iW => iW.filter((iW => {
+             let {
+               id: OW
+             } = iW;
+             return OW !== WW.id
+           }))))
+         }), [OW]),
+         lW = EW.length,
+         AW = (0, cW.useRef)(lW);
+ ... (35 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L141-L153` → after: `L686-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L686-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L686-L745) · [Before (L141-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L141-L153)

```diff
-       return "object" === typeof BB && null !== BB && !Array.isArray(BB)
-     }
- 
-     function NB(BB, OB, GB) {
-       const YB = Object.entries(ZB(BB) ? BB : {}),
-         DB = YB.filter((BB => {
-           let [, GB] = BB;
-           return !OB(GB)
-         }));
-       if (DB.length > 0) {
-         const BB = DB.map((BB => {
-           let [OB] = BB;
-           return OB
+       let {
+         coin: iW,
+         target: OW,
+         onLanded: mW
+       } = WW;
+       const EW = (0, cW.useRef)(null),
+         [NW] = (0, cW.useState)((() => XW.b.getLanding(BW))),
+         [PW, LW] = (0, cW.useState)(null !== NW);
+       return (0, cW.useEffect)((() => {
+         const WW = (null !== NW && void 0 !== NW ? NW : OW.current).getBoundingClientRect(),
+           {
+             burst: PW
+           } = iW,
+           cW = window.innerWidth / 2,
+           wW = window.innerHeight / 2,
+           tW = WW.left + WW.width / 2,
+ ... (44 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L155-L160` → after: `L747-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L747-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L747-L759) · [Before (L155-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L155-L160)

```diff
-         console.warn(`Ignoring a custom game texture pack's ${GB} files that name another site: ${BB.join(", ")}`)
-       }
-       return Object.fromEntries(YB.filter((BB => {
-         let [, GB] = BB;
-         return OB(GB)
-       })))
+         return () => {
+           AW(), lW.onfinish = null, lW.cancel()
+         }
+       }), [iW, OW, NW, mW]), (0, JW.jsx)("div", {
+         ref: EW,
+         className: kW()("GreenvilleGoldCoin", {
+           IntoMenu: PW
+         }),
+         children: (0, JW.jsx)(KW.b, {
+           itemName: qW,
+           amount: 0
+         })
+       })
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L184-L185` → after: `L762-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L762-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L762-L777) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L184-L185)

```diff
-       constructor(BB) {
-         this.host = BB, this.ready = void 0, this.state = lB, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
+       constructor(WW, iW, OW) {
+         this.pacer = WW, this.send = iW, this.onAnswersTimedOut = OW, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
+           if (!this.flushing) {
+             this.flushing = !0;
+             try {
+               for (; this.queued.length > 0 && this.pacer.tryStart();) {
+                 const WW = this.queued.shift();
+                 this.unanswered.push(WW), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(WW)
+               }
+             } finally {
+               this.flushing = !1
+             }
+           }
+         }, this.onAnswerTimeout = () => {
+           this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
+         }, WW.subscribe(this.flush)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L187-L190` → after: `L779-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L779-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L779-L780) · [Before (L187-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L187-L190)

```diff
-       readyWithin(BB) {
-         return Promise.race([this.ready, new Promise((OB => {
-           setTimeout(OB, BB)
-         }))])
+       getPending() {
+         return [...this.unanswered, ...this.queued]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L192-L193` → after: `L782-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L782-L783) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L192-L193)

```diff
-       current() {
-         return this.state
+       sZ() {
+         return 0 === this.unanswered.length && 0 === this.queued.length
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L195-L199` → after: `L785-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L785-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L785-L786) · [Before (L195-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L195-L199)

```diff
-       playerState() {
-         return {
-           pack: this.playerPack,
-           gameSource: null
-         }
+       getLastSent() {
+         return this.unanswered.at(-1)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L201-L204` → after: `L788-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L788-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L788-L790) · [Before (L201-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L201-L204)

```diff
-       onPlayerPackChange(BB) {
-         return this.ownListeners.add(BB), () => {
-           this.ownListeners.delete(BB)
-         }
+       getLastPending() {
+         var WW;
+         return null !== (WW = this.queued.at(-1)) && void 0 !== WW ? WW : this.unanswered.at(-1)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L206-L207` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L792-L793) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L206-L207)

```diff
-       isUsingCustomGameTexturePack(BB) {
-         return (0, PB.e)(this.state, BB)
+       push(WW) {
+         this.queued.push(WW), this.flush()
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L209-L210` → after: `L795-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L795-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L795-L797) · [Before (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L209-L210)

```diff
-       setGamePackConfirm(BB) {
-         this.confirmGamePack = BB
+       dropWaiting() {
+         const WW = this.queued.length > 0;
+         return this.queued = [], WW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L212-L217` → after: `L799-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L799-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L799-L802) · [Before (L212-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L212-L217)

```diff
-       subscribe(BB) {
-         return this.listeners.set(BB, null), this.ready.then((() => {
-           this.deliver(BB)
-         })), () => {
-           this.listeners.delete(BB)
-         }
+       takeAnswer() {
+         var WW;
+         const iW = null !== (WW = this.unanswered.shift()) && void 0 !== WW ? WW : null;
+         return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), iW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L219-L280` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L804-L805) · [Before (L219-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L219-L280)

```diff
-       async setPlayerPack(BB) {
-         const OB = ZB(BB) ? null : BB;
-         this.picks++, this.playerPicked = !0, this.ownChanges++, this.setOwn(OB), this.change({
-           pack: OB,
-           gameSource: null
-         }, !1);
-         const GB = await this.storePlayerPack(OB);
-         return GB && this.announce(), GB
-       }
-       async packForGame(BB, OB, GB) {
-         await this.readyWithin(Math.max(0, (null !== GB && void 0 !== GB ? GB : performance.now() + MB.e) - performance.now()));
-         const DB = ++this.picks,
-           QB = (0, YB.l)(BB) ? (0, YB.r)(BB) : null;
-         if (null === QB) return void this.usePlayerPack();
-         let oB;
-         const jB = function(BB) {
- ... (46 more removed lines; see GitHub link above)
+       clear() {
+         this.queued = [], this.unanswered = [], this.stopAnswerTimer()
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L282-L298` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L807-L808) · [Before (L282-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L282-L298)

```diff
-       async readPlayerPack() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (null !== BB && this.ownAnnouncements.delete(BB)) return;
-         await this.ready;
-         const OB = this.ownChanges;
-         let GB;
-         try {
-           GB = await this.host.store.getItem(oB.e, !0)
-         } catch (DB) {
-           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", DB)
-         }
-         if (this.Vp || this.ownChanges !== OB) return;
-         const YB = NB(GB);
-         (0, zB.b)(YB, this.playerPack) || (this.ownChanges++, this.setOwn(YB), this.onGamePack || this.change({
-           pack: YB,
-           gameSource: null
- ... (1 more removed lines; see GitHub link above)
+       stopAnswerTimer() {
+         null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L300-L301` → after: `L810-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L810-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L810-L813) · [Before (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L300-L301)

```diff
-       joinedWithout() {
-         this.picks++
+     }
+     class Wi {
+       constructor(WW, iW, OW, mW) {
+         this.confirmed = WW, this.picks = void 0, this.picks = new QW(iW, OW, mW)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L303-L304` → after: `L815-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L815-L816) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L303-L304)

```diff
-       dispose() {
-         this.Vp = !0, this.listeners.clear()
+       confirm(WW) {
+         this.confirmed = WW
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L306-L321` → after: `L818-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L818-L819) · [Before (L306-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L306-L321)

```diff
-       async readStored() {
-         const {
-           store: BB,
-           warn: OB
-         } = this.host;
-         await Promise.all([!1 === this.host.oneShot ? void 0 : (0, yB.h)(BB, !0, (BB => {
-           OB("the custom game's texture pack wasn't removed from storage", BB)
-         })).then((BB => {
-           this.takeOneShot(BB)
-         }), (BB => {
-           OB("the custom game's texture pack didn't read: the player's own shows", BB)
-         })), BB.getItem(oB.e, !0).then((BB => {
-           this.takeStoredOwn(BB)
-         }), (BB => {
-           OB("the stored texture pack didn't read: the default pack shows", BB), this.takeStoredOwn(null)
-         }))]), this.update()
+       getLastPending() {
+         return this.picks.getLastPending()
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L323` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L821) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L323)

```diff
-       takeOneShot(BB) {
+       getLatest() {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L325-L328` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L823) · [Before (L325-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L325-L328)

```diff
-         null === BB || this.Vp || this.changes > 0 || this.picks > 0 || ((0, JB.g)(BB.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
-           pack: BB.pack,
-           gameSource: null !== (OB = BB.source) && void 0 !== OB ? OB : ""
-         }))
+         return null !== (WW = this.getLastPending()) && void 0 !== WW ? WW : this.confirmed
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L330-L354` → after: `L825-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L825-L826) · [Before (L330-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L330-L354)

```diff
-       takeStoredOwn(BB) {
-         if (this.playerPicked || this.Vp) return;
-         if (this.ownChanges++, this.setOwn(NB(BB)), this.onGamePack) return;
-         const OB = {
-           pack: this.playerPack,
-           gameSource: null
-         };
-         0 === this.changes ? this.state = OB : this.change(OB, !1)
-       }
-       async update() {
-         const BB = this.playerPack,
-           OB = null === BB || void 0 === BB ? void 0 : BB.metaData.id;
-         if (!BB || !OB || !this.host.fetchLatest || OB === DB.e || OB === DB.t.CUSTOM) return;
-         const GB = DB.v[OB];
-         if (void 0 === GB || BB.metaData.version >= GB) return;
-         let YB;
- ... (9 more removed lines; see GitHub link above)
+       sZ() {
+         return this.picks.sZ()
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L356-L358` → after: `L828-L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L828-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L828-L831) · [Before (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L356-L358)

```diff
-       announce() {
-         const BB = (0, jB.c)();
-         null !== BB && this.ownAnnouncements.add(BB)
+       pushLatest(WW) {
+         var iW;
+         const OW = null !== (iW = this.picks.getLastSent()) && void 0 !== iW ? iW : this.confirmed;
+         this.picks.dropWaiting() && WW === OW || this.picks.push(WW)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L360-L366` → after: `L833-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L833-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L833-L834) · [Before (L360-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L360-L366)

```diff
-       setOwn(BB) {
-         this.playerPack = BB;
-         for (const GB of [...this.ownListeners]) try {
-           GB()
-         } catch (OB) {
-           this.host.warn("a texture pack listener threw", OB)
-         }
+       takeAnswer() {
+         this.picks.takeAnswer()
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L368-L372` → after: `L836-L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L836-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L836-L837) · [Before (L368-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L368-L372)

```diff
-       usePlayerPack() {
-         this.onGamePack && this.change({
-           pack: this.playerPack,
-           gameSource: null
-         }, !1)
+       clear() {
+         this.picks.clear()
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L374-L379` → after: `L839-L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L839-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L839-L846) · [Before (L374-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L374-L379)

```diff
-       async storePlayerPack(BB) {
-         try {
-           return null === BB ? (await this.host.store.removeItem(oB.e), !0) : await this.host.store.setItem(oB.e, BB)
-         } catch (OB) {
-           return this.host.warn("the texture pack wasn't stored: it shows until the page reloads", OB), !1
-         }
+     }
+     class ii {
+       constructor(WW, iW, OW) {
+         this.closed = WW, this.iZ = iW, this.menu = OW, this.view = void 0, this.dismiss = () => {
+           this.closePanel() && this.menu.dismiss()
+         }, this.onMenuClosed = () => {
+           this.closePanel()
+         }, this.view = WW
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L381-L385` → after: `L848-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L848-L849) · [Before (L381-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L381-L385)

```diff
-       change(BB, OB) {
-         if (!this.Vp) {
-           this.changes++, this.onGamePack = OB, this.state = BB;
-           for (const BB of [...this.listeners.keys()]) this.deliver(BB)
-         }
+       getView() {
+         return this.view
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L387-L395` → after: `L851-L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L851-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L851-L861) · [Before (L387-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L387-L395)

```diff
-       deliver(BB) {
-         if (!this.Vp && this.listeners.has(BB) && this.listeners.get(BB) !== this.state) {
-           this.listeners.set(BB, this.state);
-           try {
-             BB(this.state)
-           } catch (OB) {
-             this.host.warn("a texture pack listener threw", OB)
-           }
-         }
+       show(WW) {
+         this.set(WW), this.menu.open(this)
+       }
+       close() {
+         this.closePanel() && this.menu.close()
+       }
+       set(WW) {
+         this.view = WW, this.iZ(WW)
+       }
+       closePanel() {
+         return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L398-L402` → after: `L864-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L864-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L864-L871) · [Before (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L398-L402)

```diff
-     async function qB(BB, OB, GB) {
-       const YB = (0, yB.e)(await GB.fetchPack(OB));
-       if (null !== YB) return {
-         pack: YB,
-         key: OB
+     const Oi = "greenvilleDepotView",
+       mi = {
+         open: !1,
+         explosives: [],
+         picked: 0,
+         selected: 0,
+         level: 1,
+         line: "demolitionDepotIntro"
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L404-L410` → after: `L873-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L873-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L873-L912) · [Before (L404-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L404-L410)

```diff
-       const DB = await GB.packKey(BB);
-       if (null === DB) return null;
-       const QB = (0, yB.e)(await GB.fetchPack(DB));
-       if (null === QB) throw new Error(`no texture pack at ${DB}`);
-       return {
-         pack: QB,
-         key: DB
+     class Ei extends ii {
+       constructor(WW, iW, OW, mW) {
+         super(mi, WW, iW), this.picks = void 0, this.select = WW => {
+           this.set({
+             ...this.getView(),
+             selected: WW
+           })
+         }, this.Kl = WW => {
+           const iW = this.getView();
+           WW !== iW.picked && (this.picks.pushLatest(WW), this.set({
+             ...iW,
+             picked: WW,
+             line: "demolitionGrubnikPicked"
+           }))
+         }, this.onAnswersTimedOut = () => {
+           const WW = this.getView();
+ ... (24 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L415` → after: `L1141-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1141-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L1141-L1182) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L415)

```diff
-       return null === BB || BB.metaData.id === DB.e
+       let {
+         view: iW,
+         controller: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, yW.B)(), EW = iW.selected, NW = iW.explosives[EW], [PW, LW, cW, wW, tW] = NW, ZW = EW === iW.picked, xW = wW > iW.level;
+       return (0, JW.jsxs)(Ui, {
+         icon: (0, JW.jsx)(xi, {
+           item: PW
+         }),
+         name: mW(`greenvilleGame:${LW}`),
+         badges: xW && (0, JW.jsx)(ki, {
+           level: wW
+         }),
+         children: [(0, JW.jsx)("p", {
+ ... (26 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L419-L420` → after: `L1186-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1186-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L1186-L1311) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L419-L420)

```diff
-       const OB = (0, yB.e)(BB);
-       return ZB(OB) ? null : OB
+       let {
+         controller: iW
+       } = WW;
+       const OW = (0, SW.g)(Oi, iW.getView()),
+         {
+           t: mW
+         } = (0, yW.B)();
+       return 0 === OW.explosives.length ? null : (0, JW.jsxs)(li, {
+         open: OW.open,
+         onDismiss: iW.dismiss,
+         title: mW("greenvilleGame:demolitionDepotTitle"),
+         className: "GreenvilleDepotBoard",
+         headerExtra: (0, JW.jsx)("span", {
+           className: "GreenvilleBoardLevel",
+           children: mW("greenvilleGame:demolitionDepotLevel", {
+             level: OW.level
+ ... (110 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L422-L424` → after: `L1313-L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1313-L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L1313-L1320) · [Before (L422-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L422-L424)

```diff
-     async function RB(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QB.c;
-       if (null === BB.pack) return null;
+ 
+     function Hi(WW) {
+       let {
+         car: iW,
+         out: OW,
+         awaiting: mW,
+         controller: EW
+       } = WW;
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L426-L428` → after: `L1322-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1322-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L1322-L1344) · [Before (L426-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L426-L428)

```diff
-         packAssets: YB
-       } = await Promise.all([GB.e(227), GB.e(52)]).then((() => GB(64078)));
-       return YB(BB, OB)
+         t: NW
+       } = (0, yW.B)();
+       return (0, JW.jsx)(Ui, {
+         icon: (0, JW.jsx)(xi, {
+           item: iW
+         }),
+         name: (0, JW.jsx)(Zi, {
+           item: iW
+         }),
+         children: (0, JW.jsxs)("div", {
+           className: "GreenvilleBoardActions",
+           children: [OW && (0, JW.jsx)("span", {
+             className: "GreenvilleGarageOutStamp",
+             children: NW("greenvilleGame:dealershipGarageOut")
+           }), (0, JW.jsx)(Pi.f, {
+             disabled: OW && mW,
+ ... (7 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L432-L436` → after: `L1348-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1348-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/225.js#L1348-L1391) · [Before (L432-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/225.js#L432-L436)

```diff
-       const OB = (0, oB.w)();
-       return null === OB ? () => {} : (OB.onmessage = OB => {
-         BB.readPlayerPack((0, jB.e)(OB.data))
-       }, () => {
-         OB.close()
+       let {
+         controller: iW
+       } = WW;
+       const OW = (0, SW.g)(Yi, iW.getView()),
+         {
+           t: mW
+         } = (0, yW.B)(),
+         EW = 0 === OW.cars.length;
+       return (0, JW.jsxs)(li, {
+         open: OW.open,
+         onDismiss: iW.dismiss,
+         title: mW("greenvilleGame:dealershipGarageTitle"),
+         className: "GreenvilleGarageBoard",
+         status: {
+           speaker: mW("greenvilleGame:dealershipDelName"),
+           line: mW(EW ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${OW.line}`)
+ ... (28 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/226.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/226.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843)

#### 1. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/226.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/226.js#L4)

```diff
-   34861: (BB, OB, GB) => {
+   37317: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L6-L9` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/226.js#L6-L9) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/226.js#L6-L9)

```diff
-       packDisplayName: () => qB,
-       packModelMessage: () => ZB,
-       packModelSummary: () => RB,
-       refusedPackModels: () => NB
+       capturePreviewPicture: () => UW,
+       holdPreviewsLow: () => PW.d,
+       openLiveFigure: () => jW,
+       rasterNametag: () => KW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L11-L25` → after: `L11-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L11-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/226.js#L11-L94) · [Before (L11-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/226.js#L11-L25)

```diff
-     var YB = GB(34869),
-       DB = GB(34875);
-     const QB = "DRACO",
-       oB = 0,
-       jB = 1,
-       yB = 0,
-       JB = 1,
-       MB = 32768;
- 
-     function PB(BB) {
-       const OB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
-       let GB = 0;
-       const YB = () => {
-           if (GB >= BB.byteLength) throw new RangeError("past the stream");
-           return BB[GB++]
+     var mW = OW(1230),
+       EW = OW(3540),
+       NW = OW(35264),
+       PW = OW(37325),
+       LW = OW(37327),
+       cW = OW(37336),
+       wW = OW(37432),
+       tW = OW(4681);
+     const ZW = 480,
+       xW = 16,
+       lW = {
+         minGapMs: 250,
+         now: () => performance.now(),
+         skip: PW.t
+       },
+       AW = 30,
+ ... (68 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L27-L30` → after: `L96-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L96-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/226.js#L96-L158) · [Before (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/226.js#L27-L30)

```diff
-         DB = () => {
-           if (GB + 4 > BB.byteLength) throw new RangeError("past the stream");
-           const YB = OB.getUint32(GB, !0);
-           return GB += 4, YB
+         close: () => {
+           tW = !0, wW.close()
+         }
+       }
+     }
+ 
+     function UW(WW, iW) {
+       return new Promise((OW => {
+         const mW = EW => {
+           (0, PW.b)((() => {
+             if (!iW()) return void OW(null);
+             const NW = WW.isConnected ? function(WW) {
+               let {
+                 canvas: iW,
+                 x: OW,
+                 width: mW
+ ... (47 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L32-L82` → after: `L160-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L160-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/226.js#L160-L200) · [Before (L32-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/226.js#L32-L82)

```diff
-         PB = () => {
-           let BB = 0;
-           for (let OB = 0; OB < 35; OB += 7) {
-             const GB = YB();
-             if (BB += (127 & GB) * 2 ** OB, 0 === (128 & GB)) return BB
-           }
-           throw new RangeError("varint too long")
-         };
-       try {
-         for (let BB = 0; BB < QB.length; BB++)
-           if (YB() !== QB.charCodeAt(BB)) return null;
-         const OB = YB(),
-           zB = YB(),
-           lB = YB(),
-           pB = YB(),
-           qB = YB() | YB() << 8;
- ... (35 more removed lines; see GitHub link above)
+         mW = document.createElement("canvas"),
+         [EW, NW] = (0, cW.h)((0, cW.i)(cW.d.Nametag, OW), mW, !0);
+       return 0 === EW || 0 === NW ? null : {
+         src: mW.toDataURL("image/png"),
+         width: EW,
+         height: NW
+       }
+     }
+   },
+   35270: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => LW,
+       e: () => EW,
+       f: () => ZW
+     });
+     var mW = OW(1659);
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L84-L90` → after: `L202-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L202-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/226.js#L202-L293) · [Before (L84-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/226.js#L84-L90)

```diff
-         if (pB !== JB) return null;
-         YB(), zB < 2 && PB();
-         const NB = PB();
-         return {
-           faces: PB(),
-           vertices: NB,
-           minor: zB
+       };
+ 
+     function cW(WW, iW) {
+       WW instanceof Promise ? WW.then(iW).catch((WW => {
+         console.error("Couldn't open the preview", WW)
+       })) : iW(WW)
+     }
+     class wW {
+       constructor(WW) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, cW(WW, (WW => {
+           this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
+         }))
+       }
+       show(WW) {
+         var iW;
+         this.view = WW, null === (iW = this.opened) || void 0 === iW || iW.show(WW)
+ ... (76 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L92-L96` → after: `L295-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L295-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/226.js#L295-L350) · [Before (L92-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/226.js#L92-L96)

```diff
-       } catch {
-         return null
-       }
-     }
- 
+         return this.host
+       }
+       openMob(WW) {
+         return new wW(this.current().openMob(WW))
+       }
+       openPet(WW) {
+         return new wW(this.current().openPet(WW))
+       }
+       openMobLineup(WW) {
+         return new wW(this.current().openMobLineup(WW))
+       }
+       sharesCharacter() {
+         return !0 === this.current().sharesCharacter
+       }
+       openCharacter(WW, iW) {
+         return new tW(this.current().openCharacter(WW, iW))
+ ... (40 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L98-L126` → after: `L352-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L352-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/226.js#L352-L370) · [Before (L98-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/226.js#L98-L126)

```diff
-       var YB, DB;
-       if (null === (YB = null === (DB = BB.extensionsUsed) || void 0 === DB ? void 0 : DB.includes("KHR_draco_mesh_compression")) || void 0 === YB || !YB) return null;
-       for (const qB of null !== (QB = BB.meshes) && void 0 !== QB ? QB : []) {
-         var QB;
-         for (const YB of qB.primitives) {
-           var oB, jB, yB, JB, MB, zB;
-           const DB = null === (oB = YB.extensions) || void 0 === oB ? void 0 : oB.KHR_draco_mesh_compression;
-           if ("object" !== typeof DB || null === DB) continue;
-           const QB = null === (jB = BB.bufferViews) || void 0 === jB ? void 0 : jB[DB.bufferView];
-           if (null === OB || void 0 === QB) return lB;
-           const qB = null !== (yB = QB.byteOffset) && void 0 !== yB ? yB : 0,
-             ZB = PB(OB.subarray(qB, qB + QB.byteLength));
-           if (null === ZB && !GB) continue;
-           const NB = null !== (JB = BB.accessors) && void 0 !== JB ? JB : [],
-             RB = null === (MB = NB[YB.attributes.POSITION]) || void 0 === MB ? void 0 : MB.count,
-             WB = void 0 === YB.indices ? 0 : null === (zB = NB[YB.indices]) || void 0 === zB ? void 0 : zB.count;
- ... (13 more removed lines; see GitHub link above)
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(WW, iW).getContext("2d", OW);
+       const mW = document.createElement("canvas");
+       return mW.width = WW, mW.height = iW, mW.getContext("2d", OW)
+     }
+ 
+     function EW(WW, iW) {
+       return WW.getContext("2d", iW)
+     }
+     OW.d(iW, {
+       c: () => EW,
+       g: () => mW
+     })
+   },
+   37327: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L129-L152` → after: `L373-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L373-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/226.js#L373-L409) · [Before (L129-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/226.js#L129-L152)

```diff
-       return `Texture pack "${BB}": model "${OB}" was not loaded because it ${GB}. The default model is used instead.`
-     }
- 
-     function NB(BB, OB, GB) {
-       let {
-         strictDraco: QB = !1
-       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-       const oB = {};
-       for (const [jB, yB] of Object.entries(OB)) {
-         let OB;
-         if (yB.startsWith("data:")) try {
-           const BB = new Uint8Array((0, DB.k)(yB));
-           if (OB = (0, YB.d)(BB), null === OB) {
-             const {
-               json: GB,
-               bin: YB
- ... (8 more removed lines; see GitHub link above)
+       let [NW, PW] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [WW, iW], LW = Math.min(Number.isFinite(OW) && OW > 0 ? OW : 1, EW);
+       const cW = Math.max(0, NW, WW) * Math.max(0, PW, iW) * LW * LW;
+       return cW > mW && (LW *= Math.sqrt(mW / cW)), [Math.max(1, Math.floor(Math.max(0, WW) * LW)), Math.max(1, Math.floor(Math.max(0, iW) * LW))]
+     }
+   },
+   37325: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => jW,
+       d: () => tW,
+       g: () => lW,
+       j: () => ZW,
+       l: () => UW,
+       o: () => AW,
+       r: () => bW,
+       t: () => xW
+     });
+ ... (21 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L156-L162` → after: `L413-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L413-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/226.js#L413-L464) · [Before (L156-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/226.js#L156-L162)

```diff
-     function RB(BB, OB) {
-       const GB = Object.keys(OB);
-       if (0 === GB.length) return null;
-       if (1 === GB.length) return ZB(BB, GB[0], OB[GB[0]]);
-       const YB = GB.map((BB => `"${BB}" ${OB[BB]}`)).join("; ");
-       return `Texture pack "${BB}": ${GB.length} models were not loaded (${YB}). The default models are used instead.`
-     }
+     function lW(WW) {
+       PW = WW
+     }
+ 
+     function AW() {
+       return NW > 0
+     }
+ 
+     function bW(WW) {
+       return !(NW > 0 && (PW || WW - cW < 1e3 / mW - EW)) && (cW = WW, !0)
+     }
+ 
+     function jW(WW) {
+       return wW.push(WW), () => {
+         wW = wW.filter((iW => iW !== WW))
+       }
+ ... (36 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/227.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/227.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L4-L8)

```diff
-   34869: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => IB,
-       h: () => mB,
-       j: () => uB
+   37547: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       GiftOpening: () => Ni
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L10` → after: `L8-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L8-L23) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L10)

```diff
-     var YB = GB(34875);
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(1172),
+       LW = OW(25),
+       cW = OW(1556),
+       wW = OW(35264),
+       tW = OW(5238),
+       ZW = OW(1532),
+       xW = OW(1391),
+       lW = OW(3291),
+       AW = OW(3627),
+       bW = OW(3247),
+       jW = OW(1107),
+       UW = OW(4311),
+       kW = OW(1283);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L12-L67` → after: `L25-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L25-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L25-L27) · [Before (L12-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L12-L67)

```diff
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
-       QB = {
-         items: 1024,
-         perFile: 1024,
-         surfaces: 256,
-         few: 64,
- ... (40 more removed lines; see GitHub link above)
+       festive: "\ud83c\udf84 \u26c4 \ud83c\udf81",
+       sweater: "\u2744"
+     };
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L70-L74` → after: `L30-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L30-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L30-L93) · [Before (L70-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L70-L74)

```diff
-       return BB.toLocaleString("en-US")
-     }
- 
-     function NB(BB, OB, GB) {
-       return BB > OB ? `has ${ZB(BB)} ${GB} (the limit is ${ZB(OB)})` : null
+       let {
+         wrap: iW,
+         className: OW,
+         rootRef: mW,
+         bodyRef: EW,
+         lidRef: PW,
+         seamRef: LW
+       } = WW;
+       const cW = sW[iW];
+       return (0, kW.jsxs)("div", {
+         className: NW()("GiftBox", `GiftBoxWrap_${iW}`, OW),
+         ref: mW,
+         children: [(0, kW.jsx)("div", {
+           className: "GiftBoxPlinth"
+         }), (0, kW.jsxs)("div", {
+           className: "GiftBoxBody",
+ ... (48 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L78` → after: `L100-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L100-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L100-L107) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L78)

```diff
-       return Number.isInteger(BB) && BB >= 0 && BB < (null !== OB && void 0 !== OB ? OB : 0)
+       const [OW] = iW.cosmeticPacks;
+       return void 0 !== OW ? (0, YW.g)(OW) : iW.superDays > 0 ? WW("paymentHistory:superRankDays", {
+         count: iW.superDays
+       }) : iW.hyperDays > 0 ? WW("paymentHistory:hyperRankDays", {
+         count: iW.hyperDays
+       }) : WW("paymentHistory:premiumCurrency", {
+         count: iW.premiumCurrency
+       })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L82` → after: `L111-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L111-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L111-L124) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L82)

```diff
-       return Number.isInteger(BB) && BB >= 0
+       var iW, OW;
+       const {
+         t: mW
+       } = (0, PW.B)(), EW = SW.g.find((iW => iW.id === WW.message));
+       return {
+         message: void 0 === EW ? null : mW(EW.key, {
+           name: WW.recipientName,
+           level: null !== (iW = WW.senderLevel) && void 0 !== iW ? iW : 1,
+           tier: null !== (OW = WW.tierLabel) && void 0 !== OW ? OW : ""
+         }),
+         level: null === WW.senderLevel || "levelFlex" === (null === EW || void 0 === EW ? void 0 : EW.kind) ? null : mW("giftOpening:gifterLevel", {
+           level: WW.senderLevel
+         })
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L85-L86` → after: `L127-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L127-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L127-L152) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L85-L86)

```diff
-     function AB(BB, OB) {
-       return void 0 !== BB && (!Array.isArray(BB) || BB.length > OB)
+     function JW(WW) {
+       let {
+         gift: iW,
+         shown: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, PW.B)(), {
+         message: EW,
+         level: LW
+       } = TW(iW);
+       return (0, kW.jsxs)("div", {
+         className: NW()("GiftOpeningCard", {
+           GiftOpeningCardShown: OW
+         }),
+         children: [(0, kW.jsx)("div", {
+ ... (10 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L89-L90` → after: `L155-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L155-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L155-L171) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L89-L90)

```diff
-     function VB(BB, OB) {
-       return "object" === typeof BB && null !== BB && Object.keys(BB).length > OB
+     function hW(WW) {
+       let {
+         gift: iW
+       } = WW;
+       const {
+         message: OW,
+         level: mW
+       } = TW(iW);
+       return (0, kW.jsxs)(kW.Fragment, {
+         children: [null !== OW && (0, kW.jsx)("div", {
+           className: "GiftOpeningIntroMessage SmallTextLight",
+           children: `"${OW}"`
+         }), null !== mW && (0, kW.jsx)("div", {
+           className: "GiftOpeningIntroLevel SmallTextBold",
+           children: mW
+         })]
+ ... (1 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L94-L95` → after: `L175-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L175-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L175-L214) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L94-L95)

```diff
-       var OB;
-       return `${BB.normalized?"normalized ":""}${null!==(OB=YB.d[BB.componentType])&&void 0!==OB?OB:BB.componentType} ${BB.type}`
+       let {
+         gift: iW,
+         preview: OW,
+         analyticsValue: mW,
+         onReplay: EW,
+         onClose: NW
+       } = WW;
+       const {
+         t: wW
+       } = (0, PW.B)(), {
+         gameState: tW
+       } = (0, LW.p)(["gameState"]), lW = !OW && iW.items.cosmeticPacks.length > 0 && !(0, LW.e)(tW);
+       return (0, kW.jsxs)("div", {
+         className: "GiftOpeningButtons",
+         children: [OW && (0, kW.jsxs)(ZW.f, {
+           className: "GiftOpeningButton",
+ ... (24 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L98-L99` → after: `L234-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L234-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L234-L551) · [Before (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L98-L99)

```diff
-     function nB(BB) {
-       const OB = OB => {
+     function eW(WW, iW) {
+       return "sting" === WW ? uW[iW] : oW[WW]
+     }
+ 
+     function vW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       try {
+         nW.c.play(eW(WW, iW), dW[WW]).rate(Math.pow(2, 2 * OW / 12))
+       } catch (mW) {
+         console.warn("[gift-opening] a sound failed to play", mW)
+       }
+     }
+     const gW = "cubic-bezier(0.22, 1, 0.36, 1)";
+     class DW {
+       constructor(WW, iW) {
+         this.parts = WW, this.options = iW, this.phase = "arrive", this.timers = [], this.animations = [], this.opened = !1, this.popped = !1
+ ... (302 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L101-L103` → after: `L553-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L553-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L553-L566) · [Before (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L101-L103)

```diff
-         return null !== (GB = BB[OB]) && void 0 !== GB ? GB : -1
-       };
-       return 255 === OB(0) && 216 === OB(1) ? "JPEG" : 82 === OB(0) && 73 === OB(1) && 87 === OB(8) && 69 === OB(9) ? "WebP" : 171 === OB(0) && 75 === OB(1) && 84 === OB(2) && 88 === OB(3) ? "KTX2" : "non-PNG"
+         (this.clearTimers(), this.cancelAnimations(), this.popped) || (null === (WW = this.options.fx) || void 0 === WW || WW.clear());
+         this.markOpened(), this.parts.body.style.opacity = "0", this.parts.character.style.opacity = "1", this.parts.character.style.transform = "none", this.setPhase("done")
+       }
+       cancelAnimations() {
+         for (const WW of this.animations) WW.cancel();
+         this.animations = []
+       }
+       clearTimers() {
+         for (const WW of this.timers) clearTimeout(WW);
+         this.timers = []
+       }
+       dispose() {
+         this.clearTimers(), this.cancelAnimations(), this.parts.body.style.removeProperty("opacity"), this.parts.character.style.removeProperty("opacity"), this.parts.character.style.removeProperty("transform")
+       }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L107` → after: `L615-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L615-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L615-L619) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L107)

```diff
-       return BB.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((OB, GB) => BB[GB] === OB)) && 73 === BB[12] && 72 === BB[13] && 68 === BB[14] && 82 === BB[15]
+       const iW = pW[WW];
+       return {
+         ...iW,
+         burstAt: iW.chargeMs + iW.hitStopMs
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L110-L111` → after: `L627-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L627-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L627-L634) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L110-L111)

```diff
-     function fB(BB) {
-       return /^[aeiou]/i.test(BB) ? `an ${BB}` : `a ${BB}`
+     function XW(WW, iW, OW) {
+       const mW = document.createElement("canvas"),
+         EW = Math.ceil(WW * iW);
+       mW.width = EW, mW.height = EW;
+       const NW = mW.getContext("2d");
+       return NW && OW(NW, EW), {
+         image: mW
+       }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L114-L116` → after: `L637-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L637-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L637-L640) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L114-L116)

```diff
-     function kB(BB) {
-       const OB = BB.byteStride;
-       return void 0 === OB || Number.isInteger(OB) && OB >= 4 && OB <= 252 && OB % 4 === 0
+     function BW(WW, iW) {
+       return XW(16, iW, ((iW, OW) => {
+         iW.fillStyle = WW, iW.fillRect(.3 * OW, 0, .4 * OW, OW)
+       }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L120-L124` → after: `L644-L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L644-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L644-L646) · [Before (L120-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L120-L124)

```diff
-       var YB, DB;
-       const QB = null === (YB = BB.bufferViews) || void 0 === YB ? void 0 : YB[GB];
-       if (!QB || !OB || 0 !== QB.buffer) return null;
-       const oB = null !== (DB = QB.byteOffset) && void 0 !== DB ? DB : 0;
-       return !WB(oB) || !WB(QB.byteLength) || oB + QB.byteLength > OB.byteLength ? null : OB.subarray(oB, oB + QB.byteLength)
+       return XW(14, OW, ((OW, mW) => {
+         OW.fillStyle = iW, OW.fillRect(0, 0, mW, mW), OW.fillStyle = WW, OW.fillRect(0, 0, mW, .35 * mW)
+       }))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L128-L139` → after: `L650-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L650-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L650-L652) · [Before (L128-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L128-L139)

```diff
-       var GB, DB, QB;
-       const oB = YB.h[OB.type],
-         jB = YB.b[OB.componentType];
-       if (!oB || !jB || !Number.isInteger(OB.count) || OB.count < 0) return !1;
-       if (void 0 === OB.bufferView) return !0;
-       const yB = null === (GB = BB.bufferViews) || void 0 === GB ? void 0 : GB[OB.bufferView],
-         JB = null !== (DB = OB.byteOffset) && void 0 !== DB ? DB : 0;
-       if (!yB || !WB(JB) || JB % jB !== 0) return !1;
-       const MB = oB * jB,
-         PB = null !== (QB = yB.byteStride) && void 0 !== QB ? QB : MB;
-       if (PB < MB) return !1;
-       return (0 === OB.count ? 0 : JB + PB * (OB.count - 1) + MB) <= yB.byteLength
+       return XW(18, iW, ((iW, OW) => {
+         iW.fillStyle = WW, iW.beginPath(), iW.moveTo(OW / 2, 0), iW.lineTo(.85 * OW, .55 * OW), iW.lineTo(OW / 2, OW), iW.lineTo(.2 * OW, .45 * OW), iW.closePath(), iW.fill(), iW.fillStyle = "rgba(255,255,255,0.55)", iW.beginPath(), iW.moveTo(OW / 2, 0), iW.lineTo(.6 * OW, .5 * O … [truncated]
+       }))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L142-L143` → after: `L655-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L655-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L655-L665) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L142-L143)

```diff
-     function uB(BB) {
-       return BB > DB.fileBytes ? `is ${(BB/oB).toFixed(1)} MiB (the limit is ${DB.fileBytes/oB} MiB)` : null
+     function GW(WW, iW) {
+       return XW(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, iW, ((iW, OW) => {
+         const mW = OW / 2;
+         iW.fillStyle = WW, iW.beginPath();
+         for (let WW = 0; WW < 10; WW++) {
+           const OW = WW % 2 === 0 ? mW : .45 * mW,
+             EW = -Math.PI / 2 + WW * Math.PI / 5;
+           iW.lineTo(mW + Math.cos(EW) * OW, mW + Math.sin(EW) * OW)
+         }
+         iW.closePath(), iW.fill()
+       }))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L147-L219` → after: `L669-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L669-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L669-L928) · [Before (L147-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L147-L219)

```diff
-       try {
-         return function(BB, OB) {
-           var GB, oB, PB, ZB, WB, uB, mB, IB, FB, iB, LB, gB, rB, XB, wB, EB, cB;
-           const hB = Array.isArray(BB.extensionsUsed) && BB.extensionsUsed.includes("KHR_draco_mesh_compression");
-           if (function(BB, OB) {
-               var GB, YB;
-               const {
-                 items: DB,
-                 perFile: oB,
-                 surfaces: jB,
-                 few: yB,
-                 bounds: JB,
-                 attributeMembers: MB
-               } = QB;
-               if (AB(BB.extensionsRequired, yB) || AB(BB.animations, 1 / 0) || AB(BB.skins, 1 / 0)) return !0;
-               if (null !== (GB = BB.animations) && void 0 !== GB && GB.length || null !== (YB = BB.skins) && void 0 !== YB && YB.length) return !1;
- ... (57 more removed lines; see GitHub link above)
+       return XW(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 24, iW, ((iW, OW) => {
+         const mW = iW.createRadialGradient(OW / 2, OW / 2, 0, OW / 2, OW / 2, OW / 2);
+         mW.addColorStop(0, "rgba(255,255,255,1)"), mW.addColorStop(.25, WW), mW.addColorStop(1, "rgba(0,0,0,0)"), iW.fillStyle = mW, iW.fillRect(0, 0, OW, OW)
+       }))
+     }
+     const aW = {
+       classic: WW => [BW("#e63946", WW), BW("#ffffff", WW), BW("#ffd166", WW), BW("#2a9d8f", WW), GW("#ffd166", WW, 14)],
+       blocks: WW => [qW("#6abe30", "#8a5a33", WW), qW("#8a5a33", "#6d4426", WW), qW("#9da3a6", "#7b8083", WW), qW("#7ff3f0", "#3fb7c0", WW)],
+       gems: WW => [RW("#b673ff", WW), RW("#ff7ad9", WW), RW("#6fe0ff", WW), RW("#ffffff", WW)],
+       stars: WW => [GW("#fff6b0", WW), GW("#ffffff", WW, 14), GW("#9fd0ff", WW, 12), IW("#9fd0ff", WW, 16)],
+       legend: WW => [BW("#ffc83d", WW), BW("#ff5d8f", WW), BW("#5ab8ff", WW), BW("#7cf29a", WW), GW("#ffc83d", WW), GW("#fff4c2", WW, 14)],
+       sweater: WW => [IW("#ffffff", WW, 18), IW("#dff3ff", WW, 12), GW("#ffffff", WW, 12)],
+       festive: WW => ["\ud83c\udf84", "\u26c4", "\ud83c\udf81", "\u2744\ufe0f", "\u2b50"].map((iW => function(WW, iW) {
+         return XW(26, iW, ((iW, OW) => {
+           iW.font = `${Math.round(.8*OW)}px sans-serif`, iW.textAlign = "center", iW.textBaseline = "middle", iW.fillText(WW, OW / 2, OW / 2 + .05 * OW)
+         }))
+ ... (244 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L221-L223` → after: `L930-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L930-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L930-L979) · [Before (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L221-L223)

```diff
-           for (const [YB, DB] of(null !== (CB = BB.bufferViews) && void 0 !== CB ? CB : []).entries()) {
-             var CB;
-             if (!dB(BB, OB, YB) || !kB(DB)) return jB
+           WW.globalAlpha = 1, WW.globalCompositeOperation = "source-over"
+         }
+       }
+     }
+     var Wi = OW(3224),
+       ii = OW(1653),
+       Oi = OW(1659),
+       mi = OW(3184);
+     const Ei = 5e3;
+ 
+     function Ni(WW) {
+       let {
+         request: iW
+       } = WW;
+       const {
+         t: OW
+ ... (34 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L225-L230` → after: `L981-L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L981-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L981-L983) · [Before (L225-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L225-L230)

```diff
-           const HB = null !== (uB = BB.accessors) && void 0 !== uB ? uB : [];
-           for (const YB of HB) {
-             if (void 0 !== YB.sparse) return "uses sparse accessors";
-             const OB = Number.isInteger(YB.count) ? NB(YB.count, DB.accessorElements, "elements in an accessor") : null;
-             if (OB) return OB;
-             if (!KB(BB, YB)) return jB
+           return {
+             cosmetics: PW,
+             badge: mW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L232-L255` → after: `L985-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L985-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L985-L1045) · [Before (L232-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L232-L255)

```diff
-           const vB = null !== (mB = BB.scenes) && void 0 !== mB ? mB : [];
-           if (1 !== vB.length) return `has ${vB.length} scenes`;
-           const sB = (0, YB.n)(BB);
-           if (void 0 !== sB && 0 !== sB) return jB;
-           const xB = null !== (IB = BB.nodes) && void 0 !== IB ? IB : [],
-             tB = null !== (FB = BB.meshes) && void 0 !== FB ? FB : [],
-             BO = null !== (iB = BB.materials) && void 0 !== iB ? iB : [],
-             OO = null !== (LB = BB.textures) && void 0 !== LB ? LB : [],
-             GO = null !== (gB = BB.images) && void 0 !== gB ? gB : [],
-             YO = null !== (rB = null !== (XB = null !== (wB = NB(xB.length, DB.nodes, "nodes")) && void 0 !== wB ? wB : NB(tB.length, DB.meshes, "meshes")) && void 0 !== XB ? XB : NB(BO.length, DB.materials, "materials")) && void 0 !== rB ? rB : NB(GO.length, DB.images, "images") … [truncated]
-           if (YO) return YO;
-           const DO = new Set;
-           for (const YB of xB)
-             for (const BB of null !== (QO = YB.children) && void 0 !== QO ? QO : []) {
-               var QO;
-               if (!RB(BB, xB.length) || DO.has(BB)) return jB;
- ... (8 more removed lines; see GitHub link above)
+         }(sW.items, {
+           ...EW.getPlayerCosmetics()
+         }))),
+         [gW, pW] = (0, mW.useState)("arrive"),
+         [XW, BW] = (0, mW.useState)(0),
+         [qW, RW] = (0, mW.useState)(!1),
+         [GW, IW] = (0, mW.useState)(!1),
+         [aW, rW] = (0, mW.useState)(!1),
+         zW = (0, mW.useRef)(null),
+         FW = (0, mW.useRef)(null),
+         Ni = {
+           box: (0, mW.useRef)(null),
+           body: (0, mW.useRef)(null),
+           lid: (0, mW.useRef)(null),
+           seam: (0, mW.useRef)(null),
+           character: (0, mW.useRef)(null),
+ ... (45 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L257-L270` → after: `L1047-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1047-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1047-L1050) · [Before (L257-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L257-L270)

```diff
-             if (!RB(YB, xB.length) || DO.has(YB) || !jO(YB)) return jB
-           }
-           for (const YB of xB) {
-             if (void 0 !== YB.matrix) return "uses node matrices";
-             if (void 0 !== YB.skin) return "uses skins";
-             if (void 0 !== YB.weights) return "uses morph targets";
-             if (void 0 !== YB.mesh && !RB(YB.mesh, tB.length)) return jB;
-             const BB = [
-               [YB.translation, 3],
-               [YB.rotation, 4],
-               [YB.scale, 3]
-             ];
-             for (const [OB, GB] of BB)
-               if (void 0 !== OB && (!Array.isArray(OB) || OB.length !== GB || !OB.every((BB => Number.isFinite(BB))))) return jB
+             YW || ((0, cW.reportAnalyticsClick)({
+               id: "gift.open_anim",
+               value: dW
+             }), null === (WW = iW.onOpened) || void 0 === WW || WW.call(iW))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L272-L281` → after: `L1052-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1052-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1052-L1176) · [Before (L272-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L272-L281)

```diff
-           let JO = -1,
-             MO = 0,
-             PO = 0,
-             zO = null;
-           for (const DB of tB) {
-             if (void 0 !== DB.weights) return "uses morph targets";
-             if (0 === DB.primitives.length) return jB;
-             for (const GB of DB.primitives) {
-               var lO, pO;
-               const DB = null !== (lO = GB.mode) && void 0 !== lO ? lO : 4;
+         });
+         return FW.current = NW, NW.arrive(), () => {
+           window.removeEventListener("resize", EW), NW.dispose(), mW && (! function(WW) {
+             if (WW.frameMs.length < 10) return;
+             const iW = [...WW.frameMs].sort(((WW, iW) => WW - iW)),
+               OW = {
+                 frames: iW.length,
+                 medianFps: Math.round(1e3 / Math.max(iW[Math.floor(iW.length / 2)], 1)),
+                 p95FrameMs: Math.round(iW[Math.floor(.95 * iW.length)])
+               };
+             window.giftOpeningFrames = OW, console.info("[gift-opening] frames", OW)
+           }(mW), mW.stop())
+         }
+       }), [XW]);
+       const Pi = () => {
+           (0, KW.d)(iW)
+ ... (109 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L283-L334` → after: `L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1178) · [Before (L283-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L283-L334)

```diff
-               if (4 !== DB && 0 !== DB) return `uses ${null!==(qO=pB[DB])&&void 0!==qO?qO:`mode ${DB}`} primitives`;
-               if (void 0 !== GB.targets) return "uses morph targets";
-               if (void 0 !== GB.material && !RB(GB.material, BO.length)) return jB;
-               const QB = hB ? null === (pO = GB.extensions) || void 0 === pO ? void 0 : pO.KHR_draco_mesh_compression : void 0;
-               if (QB) {
-                 if (4 !== DB) return "uses Draco-compressed points";
-                 if (!dB(BB, OB, QB.bufferView) || "object" !== typeof QB.attributes) return jB
-               }
-               const oB = GB.attributes;
-               if ("object" !== typeof oB || null === oB) return jB;
-               if (void 0 === oB.POSITION) return "has a primitive with no positions";
-               if (!RB(oB.POSITION, HB.length)) return jB;
-               const yB = HB[oB.POSITION].count;
-               for (const [BB, OB] of Object.entries(oB)) {
-                 if (!RB(OB, HB.length)) return jB;
-                 if (/^(JOINTS|WEIGHTS)_\d+$/.test(BB)) return "uses skins";
- ... (36 more removed lines; see GitHub link above)
+               ("wait" !== gW || ci) && (null === (WW = FW.current) || void 0 === WW || WW.tap())
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L336-L380` → after: `L1180-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1180-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1180-L1196) · [Before (L336-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L336-L380)

```diff
-           }
-           let NO = 0,
-             RO = 0,
-             WO = 0;
-           for (let YB = 0; YB < xB.length; YB++) {
-             const BB = xB[YB].mesh;
-             if (void 0 !== BB && oO.has(YB))
-               for (const OB of tB[BB].primitives) WO++, NO += HB[OB.attributes.POSITION].count, void 0 !== OB.indices && (RO += HB[OB.indices].count)
-           }
-           const AO = null !== (EB = null !== (cB = NB(NO, DB.vertices, "vertices")) && void 0 !== cB ? cB : NB(RO, DB.indices, "indices")) && void 0 !== EB ? EB : NB(WO, DB.primitives, "primitives");
-           if (AO) return AO;
-           for (const YB of BO) {
-             var VO, SO;
-             if (void 0 !== YB.emissiveTexture) return "uses an emissive texture";
-             const OB = null !== (VO = YB.alphaMode) && void 0 !== VO ? VO : "OPAQUE";
-             if ("OPAQUE" !== OB && "MASK" !== OB && "BLEND" !== OB) return jB;
- ... (29 more removed lines; see GitHub link above)
+           }), ti && (0, kW.jsxs)(ZW.h, {
+             className: "GiftOpeningSkip",
+             onClick: Li,
+             children: [OW("giftOpening:skip"), " ", (0, kW.jsx)(xW.c, {
+               name: "arrow-right"
+             })]
+           }), "done" === gW && (0, kW.jsx)(HW, {
+             gift: sW,
+             preview: YW,
+             analyticsValue: dW,
+             onReplay: () => {
+               BW(XW + 1)
+             },
+             onClose: Pi
+           })]
+         })
+ ... (1 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L384-L394` → after: `L1208-L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1208-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1208-L1340) · [Before (L384-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L384-L394)

```diff
-       const OB = uB(BB.byteLength);
-       if (OB) return OB;
-       try {
-         const {
-           json: OB,
-           bin: GB
-         } = (0, YB.r)(BB);
-         return mB(OB, GB)
-       } catch (GB) {
-         if (GB instanceof YB.g) return GB.reason;
-         throw GB
+       var iW;
+       return {
+         ...LW.store,
+         yaw: LW.store.yaw + (null !== (iW = mW.e[WW].previewYaw) && void 0 !== iW ? iW : 0)
+       }
+     }
+     const NW = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       PW = {
+         ...NW,
+         radius: 33,
+         target: [0, 3.9, 0]
+ ... (117 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L398` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1344) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L398)

```diff
-   34875: (BB, OB, GB) => {
+   35264: (WW, iW, OW) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L400-L409` → after: `L1346-L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1346-L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1346-L1348) · [Before (L400-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L400-L409)

```diff
-       b: () => pB,
-       d: () => lB,
-       e: () => ZB,
-       f: () => oB,
-       g: () => QB,
-       h: () => qB,
-       k: () => PB,
-       m: () => zB,
-       n: () => jB,
-       r: () => MB
+       d: () => mW.d,
+       e: () => mW.e,
+       f: () => mW.f
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L411-L413` → after: `L1350-L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1350-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1350-L1351) · [Before (L411-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L411-L413)

```diff
-     const YB = 1179937895,
-       DB = 1313821514;
-     class QB extends Error {
+     var mW = OW(35270);
+     class EW {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L415` → after: `L1353-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1353-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1353-L1358) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L415)

```diff
-         super(`GLB refused: it ${BB}`), this.reason = BB, this.name = "GlbRefused"
+         this.load = WW, this.loaded = null, this.loading = null
+       }
+       run(WW) {
+         return null !== this.loaded ? WW(this.loaded) : (this.loading ??= this.load().then((WW => (this.loaded = WW, WW)), (WW => {
+           throw this.loading = null, WW
+         })), this.loading.then(WW))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L418-L420` → after: `L1361-L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1361-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1361-L1375) · [Before (L418-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L418-L420)

```diff
-     class oB extends Error {
-       constructor(BB) {
-         super(BB), this.name = "GlbError"
+     class NW {
+       constructor() {
+         this.sharesCharacter = !0, this.mobScene = new EW((() => Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(289), OW.e(113), OW.e(290), OW.e(89), OW.e(86), OW.e(287), OW.e(87), OW.e(88), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(311), OW.e(260), OW.e(278) … [truncated]
+       }
+       openMob(WW) {
+         return this.mobScene.run((iW => iW.openMobPreview(WW)))
+       }
+       openPet(WW) {
+         return this.mobScene.run((iW => iW.openPetPreview(WW)))
+       }
+       openMobLineup(WW) {
+         return this.mobScene.run((iW => iW.openMobLineupPreview(WW)))
+       }
+       openCharacter(WW, iW) {
+         return this.characterScene.run((OW => OW.openCharacterPreview(WW, iW)))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L425` → after: `L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1390) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L425)

```diff
-       return Reflect.get(BB, "scene")
+       return WW === (0, EW.h)().Av ? (0, EW.h)().Dv : WW
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L431-L443` → after: `L1394-L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1394-L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1394-L1504) · [Before (L431-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L431-L443)

```diff
-       var OB;
-       const GB = BB instanceof Uint8Array ? BB : new Uint8Array(BB),
-         oB = function(BB) {
-           const OB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
-           if (BB.byteLength < 20 || OB.getUint32(0, !0) !== YB || 2 !== OB.getUint32(4, !0)) return null;
-           const GB = Math.min(OB.getUint32(8, !0), BB.byteLength),
-             QB = OB.getUint32(12, !0);
-           if (OB.getUint32(16, !0) !== DB || 20 + QB > GB) return null;
-           let oB;
-           try {
-             oB = JSON.parse((new TextDecoder).decode(BB.subarray(20, 20 + QB)))
-           } catch {
-             return null
+       return !(0, mW.K)(WW) && NW(WW) === (0, EW.h)().Dv
+     }
+     const LW = "gravity";
+ 
+     function cW() {
+       return (0, EW.h)().physics[LW][1]
+     }
+   },
+   37555: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => yW
+     });
+     var mW = OW(37559),
+       EW = OW(182),
+       NW = OW(5615),
+       PW = OW(37563),
+ ... (95 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L445-L471` → after: `L1506-L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1506-L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1506-L1507) · [Before (L445-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L445-L471)

```diff
-           return "object" === typeof oB && null !== oB ? {
-             json: oB,
-             jsonEnd: 20 + QB,
-             length: GB
-           } : null
-         }(GB);
-       if (null === oB) throw new QB(JB);
-       const jB = oB.json,
-         {
-           jsonEnd: MB,
-           length: PB
-         } = oB,
-         zB = new DataView(GB.buffer, GB.byteOffset, GB.byteLength);
-       let lB = -1,
-         pB = 0;
-       for (let YB = MB; YB < PB;) {
- ... (11 more removed lines; see GitHub link above)
+         };
+         return mW
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L473-L476` → after: `L1509-L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1509-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1509-L1550) · [Before (L473-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L473-L476)

```diff
-       return {
-         json: jB,
-         bin: qB,
-         fileBytes: GB.byteLength
+       liveHowl() {
+         return this._unloaded ? null : this._howl
+       }
+       loaded() {
+         return "loaded" === this._howl.state()
+       }
+       unloadOnceIdle() {
+         (0, PW.f)(this._howl, (() => {
+           this._unloaded = !0
+         }))
+       }
+       setGlobalVolume(WW) {
+         this._volumeMultiplier.setMultiplierType("globalVolume", WW), this._howl.volume(WW)
+       }
+       _setPannerAttr(WW) {
+         let {
+ ... (26 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/227.js` (Changed code · before: `L479-L493` → after: `L1553-L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c62a8af061aa10ff5a017e5d66c12c1e39e190ca20edcac6b31ec4fff0900b2) · [After (L1553-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/227.js#L1553-L1650) · [Before (L479-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/227.js#L479-L493)

```diff
- 
-     function PB(BB) {
-       const OB = BB.slice(BB.indexOf(",") + 1),
-         GB = Uint8Array.fromBase64;
-       if (GB) return GB(OB).buffer;
-       const YB = atob(OB),
-         DB = new Uint8Array(YB.length);
-       for (let QB = 0; QB < YB.length; QB++) DB[QB] = YB.charCodeAt(QB);
-       return DB.buffer
-     }
-     async function zB(BB) {
-       if (BB.startsWith("data:")) return PB(BB);
-       const OB = await fetch(BB);
-       if (!OB.ok) throw new oB(`fetching ${BB} failed: ${OB.status} ${OB.statusText}`);
-       return await OB.arrayBuffer()
+     const yW = new class {
+       constructor() {
+         this.stereoSounds = {}, this.spatialSounds = {}, this.spatialVoices = new jW.c, this.idlePreloads = new Set, this.idlePreloadGeneration = 0, AW.l.subscribe("appManagerUpdated|soundVolume", (WW => {
+           const iW = Object.values(this.stereoSounds).concat(Object.values(this.spatialSounds));
+           for (const OW of iW) OW.setGlobalVolume(WW)
+         }))
+       }
+       play(WW, iW) {
+         var OW;
+         let NW, PW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null === (OW = (0, xW.h)()) || void 0 === OW ? void 0 : OW.Dv,
+           LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lW.f,
+           cW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : lW.g,
+           tW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         var AW;
+         (0, xW.h)() ? NW = !!Array.isArray(PW) || (0, wW.b)(PW) !== (null === (AW = (0, xW.h)()) || void 0 === AW ? void 0 : AW.Dv): NW = !1;
+         const bW = (0, mW.n)(WW),
+ ... (82 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/228.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/228.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/228.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/228.js#L4-L15)

```diff
-   34878: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       animatedBlockTextures: () => yB,
-       armourAtlasUrl: () => oB,
-       averageColors: () => JB,
-       blockAtlasUrls: () => QB,
-       blockAtlasWidth: () => YB,
-       buildHash: () => PB,
-       builtTextureIndexFingerprint: () => MB,
-       imagesPerAtlas: () => DB,
-       outputHash: () => zB,
-       rotatedBlockTextures: () => jB
+   53489: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L17-L305` → after: `L8-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L8-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/228.js#L8-L123) · [Before (L17-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/228.js#L17-L305)

```diff
-     const YB = 8,
-       DB = [256, 256, 256, 256, 256, 256, 114],
-       QB = [GB(34882), GB(34885), GB(34893), GB(34899), GB(34905), GB(34914), GB(34920)],
-       oB = GB(34922),
-       jB = {
-         "alloy_kiln_top[rot[1": GB(34926),
-         "alloy_kiln_top[rot[2": GB(34932),
-         "alloy_kiln_top[rot[3": GB(34938),
-         "alloy_kiln_top[rot[4": GB(34947),
-         "auto_bench_top[rot[1": GB(34951),
-         "auto_bench_top[rot[2": GB(34956),
-         "auto_bench_top[rot[3": GB(34958),
-         "auto_bench_top[rot[4": GB(34964),
-         "belt_tunnel_exit_top[rot[1": GB(34969),
-         "belt_tunnel_exit_top[rot[2": GB(34973),
-         "belt_tunnel_exit_top[rot[3": GB(34978),
- ... (273 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(3809);
+ 
+     function NW(WW, iW, OW) {
+       const NW = (0, mW.useRef)(null),
+         {
+           width: PW,
+           height: LW
+         } = (0, EW.d)(WW);
+       (0, mW.useEffect)((() => {
+         const OW = iW(WW.current);
+         return NW.current = OW, () => {
+           OW.close(), NW.current = null
+         }
+       }), [WW, iW]), (0, mW.useEffect)((() => {
+         PW <= 0 || LW <= 0 || NW.current.resize(PW, LW)
+ ... (100 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L308-L527` → after: `L126-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/228.js#L126-L128) · [Before (L308-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/228.js#L308-L527)

```diff
-         "Active Radar2": GB(36446),
-         "Active Radar3": GB(36449),
-         "Active Radar4": GB(36452),
-         "Active Radar5": GB(36459),
-         "Active Radar|meta|rot22": GB(36446),
-         "Active Radar|meta|rot23": GB(36449),
-         "Active Radar|meta|rot24": GB(36452),
-         "Active Radar|meta|rot25": GB(36459),
-         "Active Radar|meta|rot32": GB(36446),
-         "Active Radar|meta|rot33": GB(36449),
-         "Active Radar|meta|rot34": GB(36452),
-         "Active Radar|meta|rot35": GB(36459),
-         "Active Radar|meta|rot42": GB(36446),
-         "Active Radar|meta|rot43": GB(36449),
-         "Active Radar|meta|rot44": GB(36452),
-         "Active Radar|meta|rot45": GB(36459),
- ... (204 more removed lines; see GitHub link above)
+         ...NW,
+         radius: 33,
+         target: [0, 3.9, 0]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/228.js` (Changed code · before: `L530-L10909` → after: `L131-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d72232d7ccad024c972f05cc8e0ee4282454015f938b3730d4c7eaf88a5824e3) · [After (L131-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/228.js#L131-L344) · [Before (L530-L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/228.js#L530-L10909)

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
- ... (10364 more removed lines; see GitHub link above)
+         player: NW,
+         store: PW,
+         showcase: {
+           ...PW,
+           target: [0, 1.9, 0]
+         }
+       };
+ 
+     function cW(WW, iW) {
+       WW instanceof Promise ? WW.then(iW).catch((WW => {
+         console.error("Couldn't open the preview", WW)
+       })) : iW(WW)
+     }
+     class wW {
+       constructor(WW) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, cW(WW, (WW => {
+ ... (198 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/229.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/229.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L5-L139` → after: `L4-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L4-L14) · [Before (L5-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L5-L139)

```diff
-   40436: (BB, OB, GB) => {
-     function YB() {
-       return "object" === typeof process && "object" === typeof process.versions && "undefined" !== typeof process.versions.node
-     }
- 
-     function DB(BB) {
-       return BB instanceof Uint8Array && (!YB() || !Buffer.isBuffer(BB))
-     }
- 
-     function QB(BB) {
-       return BB instanceof ArrayBuffer
-     }
- 
-     function oB(BB) {
-       return !!YB() && Buffer.isBuffer(BB)
-     }
- ... (119 more removed lines; see GitHub link above)
+   53703: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       MobPreview: () => ZW
+     });
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(53489),
+       LW = OW(35264),
+       cW = OW(53483),
+       wW = OW(1283);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L142-L2492` → after: `L17-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L17-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L17-L36) · [Before (L142-L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L142-L2492)

```diff
-       this.array = BB, this.pos = 0
-     }
-     QB.prototype.readUncompressedLength = function() {
-       for (var BB, OB, GB = 0, YB = 0; YB < 32 && this.pos < this.array.length;) {
-         if (BB = this.array[this.pos], this.pos += 1, (OB = 127 & BB) << YB >>> YB !== OB) return -1;
-         if (GB |= OB << YB, BB < 128) return GB;
-         YB += 7
-       }
-       return -1
-     }, QB.prototype.uncompressToBuffer = function(BB) {
-       for (var OB, QB, oB, jB, yB = this.array, JB = yB.length, MB = this.pos, PB = 0; MB < yB.length;)
-         if (OB = yB[MB], MB += 1, 0 === (3 & OB)) {
-           if ((QB = 1 + (OB >>> 2)) > 60) {
-             if (MB + 3 >= JB) return !1;
-             oB = QB - 60, QB = 1 + ((QB = yB[MB] + (yB[MB + 1] << 8) + (yB[MB + 2] << 16) + (yB[MB + 3] << 24)) & GB[oB]), MB += oB
-           }
- ... (2335 more removed lines; see GitHub link above)
+       return LW.f.openMob(WW)
+     }
+     const ZW = (0, mW.memo)((function(WW) {
+       let {
+         mobType: iW,
+         variation: OW = null,
+         animation: EW = cW.h,
+         className: LW
+       } = WW;
+       const ZW = (0, mW.useRef)(null),
+         xW = (0, mW.useMemo)((() => ({
+           mobType: iW,
+           variation: OW,
+           animation: EW
+         })), [iW, OW, EW]);
+       return (0, PW.c)(ZW, tW, xW), (0, wW.jsx)("div", {
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L2494` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L38) · [Before (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L2494)

```diff
-   40657: (BB, OB, GB) => {
+   53489: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L2496-L2502` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L40) · [Before (L2496-L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L2496-L2502)

```diff
-       c: () => zB,
-       g: () => PB,
-       j: () => NB,
-       l: () => yB,
-       p: () => RB,
-       t: () => JB,
-       w: () => oB
+       c: () => NW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L2504-L6325` → after: `L42-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L42-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L42-L60) · [Before (L2504-L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L2504-L6325)

```diff
-     var YB = GB(40599),
-       DB = GB(40574),
-       QB = GB(40660);
-     new Map, new Map;
-     const oB = BB => {
-         if (!BB || "object" !== typeof BB) throw new TypeError("Encoding config must be an object.");
-         if (!YB.t.includes(BB.codec)) throw new TypeError(`Invalid video codec '${BB.codec}'. Must be one of: ${YB.t.join(", ")}.`);
-         const OB = BB.bitrate;
-         if (void 0 === BB.quality && void 0 === OB) throw new TypeError("config.quality must be provided.");
-         if (void 0 !== BB.quality && void 0 !== OB) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
-         if (void 0 !== BB.quality && !(BB.quality instanceof zB)) throw new TypeError("config.quality, when provided, must be a Quality.");
-         if (void 0 !== OB && !(OB instanceof zB) && (!Number.isInteger(OB) || OB <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
-         if (void 0 !== BB.keyFrameInterval && (!Number.isFinite(BB.keyFrameInterval) || BB.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
-         if (void 0 !== BB.sizeChangeBehavior && !["deny", "passThrough", "fill", "contain", "cover"].includes(BB.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
-         if (void 0 !== BB.transform) {
-           if ("object" !== typeof BB.transform || !BB.transform) throw new TypeError("config.transform, when provided, must be an object.");
- ... (3806 more removed lines; see GitHub link above)
+     var mW = OW(62),
+       EW = OW(3809);
+ 
+     function NW(WW, iW, OW) {
+       const NW = (0, mW.useRef)(null),
+         {
+           width: PW,
+           height: LW
+         } = (0, EW.d)(WW);
+       (0, mW.useEffect)((() => {
+         const OW = iW(WW.current);
+         return NW.current = OW, () => {
+           OW.close(), NW.current = null
+         }
+       }), [WW, iW]), (0, mW.useEffect)((() => {
+         PW <= 0 || LW <= 0 || NW.current.resize(PW, LW)
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6328` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L63) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6328)

```diff
-   40572: (BB, OB, GB) => {
+   53483: (WW, iW, OW) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6330` → after: `L65-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L65-L67) · [Before (L6330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6330)

```diff
-       e: () => WB
+       c: () => xW,
+       d: () => ZW,
+       h: () => cW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6332-L6362` → after: `L69-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L69-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L69-L78) · [Before (L6332-L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6332-L6362)

```diff
-     var YB = GB(40574),
-       DB = GB(40581),
-       QB = GB(40589),
-       oB = GB(40669),
-       jB = GB(40641),
-       yB = GB(40633),
-       JB = GB(40610),
-       MB = GB(40650),
-       PB = GB(40599);
-     const zB = ["video", "audio", "subtitle"];
-     class lB {
-       constructor(BB, OB, GB, YB, DB) {
-         this.id = BB, this.output = OB, this.type = GB, this.source = YB, this.metadata = DB
-       }
-       isVideoTrack() {
-         return "video" === this.type
- ... (15 more removed lines; see GitHub link above)
+     var mW = OW(38320),
+       EW = OW(39881);
+ 
+     function NW(WW, iW) {
+       let [OW, mW, EW] = WW;
+       return [0, .5, 1].map((WW => ({
+         timeFraction: WW,
+         rotation: {
+           YO: "catmull-rom-spline",
+           point: [OW, mW, EW + (.5 === WW ? iW : 0)]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6364-L6390` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L80) · [Before (L6364-L6390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6364-L6390)

```diff
-         return !1
-       }
-     }
-     class pB extends lB {
-       constructor(BB, OB, GB, YB) {
-         super(BB, OB, "video", GB, YB)
-       }
-     }
-     class qB extends lB {
-       constructor(BB, OB, GB, YB) {
-         super(BB, OB, "audio", GB, YB)
-       }
-     }
-     class ZB extends lB {
-       constructor(BB, OB, GB, YB) {
-         super(BB, OB, "subtitle", GB, YB)
- ... (11 more removed lines; see GitHub link above)
+       })))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6392-L6459` → after: `L82-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L82-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L82-L95) · [Before (L6392-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6392-L6459)

```diff
-     const RB = BB => {
-       if (!BB || "object" !== typeof BB) throw new TypeError("metadata must be an object.");
-       if (void 0 !== BB.languageCode && !(0, YB.Ub)(BB.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
-       if (void 0 !== BB.name && "string" !== typeof BB.name) throw new TypeError("metadata.name, when provided, must be a string.");
-       if (void 0 !== BB.disposition && (0, DB.p)(BB.disposition), void 0 !== BB.maximumPacketCount && (!Number.isInteger(BB.maximumPacketCount) || BB.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
-       if (void 0 !== BB.bitrate && (!Number.isFinite(BB.bitrate) || BB.bitrate < 0)) throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");
-       if (void 0 !== BB.averageBitrate && (!Number.isFinite(BB.averageBitrate) || BB.averageBitrate < 0)) throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");
-       if (void 0 !== BB.group && !(BB.group instanceof NB) && (!Array.isArray(BB.group) || BB.group.some((BB => !(BB instanceof NB))))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")
-     };
-     class WB extends YB.m {
-       get target() {
-         const BB = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
-         if (this._rootTargetPromise) throw new TypeError(BB);
-         const OB = this._getRootTarget();
-         if ((0, YB.gc)(OB)) throw new TypeError(BB);
-         return OB
- ... (52 more removed lines; see GitHub link above)
+ 
+     function PW(WW, iW, OW) {
+       return {
+         kO: 3200,
+         loop: !0,
+         MO: {
+           Root: {
+             timeline: [0, .5, 1].map((WW => ({
+               timeFraction: WW,
+               position: {
+                 YO: "catmull-rom-spline",
+                 point: [0, .5 === WW ? .18 : 0, 0]
+               }
+             })))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6461-L6608` → after: `L97-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L97-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L97-L110) · [Before (L6461-L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6461-L6608)

```diff
-           OB = this._getTargetValidated(BB),
-           GB = OB => ("canceled" === this.state ? OB._close() : this._rememberTarget(OB), this._emit("target", {
-             target: OB,
-             request: BB,
-             isRoot: !0
-           }), this._rootTarget = OB, OB);
-         return (0, YB.gc)(OB) ? this._rootTargetPromise = OB.then(GB) : GB(OB)
-       }
-       _getRootWriter(BB) {
-         return this._rootWriterPromise ??= (async () => {
-           const OB = await this._getRootTarget(),
-             GB = new yB.e(OB, "boolean" === typeof BB ? BB : BB(OB));
-           return GB.start(), GB
-         })()
-       }
-       addVideoTrack(BB) {
- ... (132 more removed lines; see GitHub link above)
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((WW => ({
+               timeFraction: WW,
+               rotation: {
+                 YO: "catmull-rom-spline",
+                 point: [0, .25 === WW ? .12 : .75 === WW ? -.12 : 0, 0]
+               }
+             })))
+           },
+           ArmLeftMesh: {
+             timeline: NW(WW, OW)
+           },
+           ArmRightMesh: {
+             timeline: NW(iW, -OW)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6610-L6692` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L112) · [Before (L6610-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6610-L6692)

```diff
-         })()
-       }
-     }
-   },
-   40650: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => QB,
-       e: () => DB
-     });
-     var YB = GB(40574);
-     const DB = new Uint8Array(0);
-     class QB {
-       constructor(BB, OB, GB, YB) {
-         let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
-           oB = arguments.length > 5 ? arguments[5] : void 0,
-           jB = arguments.length > 6 ? arguments[6] : void 0;
- ... (67 more removed lines; see GitHub link above)
+         }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6696` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L122) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6696)

```diff
-   40660: (BB, OB, GB) => {
+   35270: (WW, iW, OW) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6700-L6702` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L126) · [Before (L6700-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6700-L6702)

```diff
-       h: () => EB,
-       i: () => XB,
-       m: () => VB
+       f: () => ZW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6704-L6771` → after: `L128-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L128-L134) · [Before (L6704-L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6704-L6771)

```diff
-     var YB = GB(40574),
-       DB = GB(40610),
-       QB = function(BB, OB, GB) {
-         if (null !== OB && void 0 !== OB) {
-           if ("object" !== typeof OB && "function" !== typeof OB) throw new TypeError("Object expected.");
-           var YB, DB;
-           if (GB) {
-             if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
-             YB = OB[Symbol.asyncDispose]
-           }
-           if (void 0 === YB) {
-             if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
-             YB = OB[Symbol.dispose], GB && (DB = YB)
-           }
-           if ("function" !== typeof YB) throw new TypeError("Object not disposable.");
-           DB && (YB = function() {
- ... (52 more removed lines; see GitHub link above)
+     var mW = OW(1659);
+ 
+     function EW(WW) {
+       var iW;
+       return {
+         ...LW.store,
+         yaw: LW.store.yaw + (null !== (iW = mW.e[WW].previewYaw) && void 0 !== iW ? iW : 0)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L6774-L7266` → after: `L137-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L137-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L137-L153) · [Before (L6774-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L6774-L7266)

```diff
-     const PB = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"],
-       zB = new Set(PB);
-     class lB {
-       get codedWidth() {
-         return this.visibleRect.width
-       }
-       get codedHeight() {
-         return this.visibleRect.height
-       }
-       get displayWidth() {
-         return this.rotation % 180 === 0 ? this.squarePixelWidth : this.squarePixelHeight
-       }
-       get displayHeight() {
-         return this.rotation % 180 === 0 ? this.squarePixelHeight : this.squarePixelWidth
-       }
-       get microsecondTimestamp() {
- ... (477 more removed lines; see GitHub link above)
+     const NW = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       PW = {
+         ...NW,
+         radius: 33,
+         target: [0, 3.9, 0]
+       },
+       LW = {
+         player: NW,
+         store: PW,
+         showcase: {
+           ...PW,
+ ... (1 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7268-L7308` → after: `L155-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L155-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L155-L160) · [Before (L7268-L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7268-L7308)

```diff
-         const {
-           canvas: qB,
-           context: ZB,
-           isNew: RB
-         } = NB(zB.width, zB.height);
-         return this._drawWithFitAndMipmapping(qB, ZB, {
-           fit: zB.fit,
-           rotation: zB.rotation,
-           flip: zB.flip,
-           crop: zB.crop,
-           targetIsFresh: RB,
-           fillBlack: "discard" === zB.alpha
-         }), new lB(qB, {
-           timestamp: this.timestamp,
-           duration: this.duration,
-           rotation: 0,
- ... (25 more removed lines; see GitHub link above)
+       };
+ 
+     function cW(WW, iW) {
+       WW instanceof Promise ? WW.then(iW).catch((WW => {
+         console.error("Couldn't open the preview", WW)
+       })) : iW(WW)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7343-L7353` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L164-L166) · [Before (L7343-L7353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7343-L7353)

```diff
-         if (void 0 !== BB) {
-           if (!BB || "object" !== typeof BB) throw new TypeError("init.colorSpace, when provided, must be an object.");
-           const OB = Object.keys(YB.g);
-           if (null != BB.primaries && !OB.includes(BB.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${OB.join(", ")}.`);
-           const GB = Object.keys(YB.z);
-           if (null != BB.transfer && !GB.includes(BB.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${GB.join(", ")}.`);
-           const DB = Object.keys(YB.r);
-           if (null != BB.matrix && !DB.includes(BB.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${DB.join(", ")}.`);
-           if (null != BB.fullRange && "boolean" !== typeof BB.fullRange) throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")
-         }
-         this.primaries = BB?.primaries ?? null, this.transfer = BB?.transfer ?? null, this.matrix = BB?.matrix ?? null, this.fullRange = BB?.fullRange ?? null
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, cW(WW, (WW => {
+           this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
+         }))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7355-L7361` → after: `L168-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L168-L170) · [Before (L7355-L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7355-L7361)

```diff
-       toJSON() {
-         return {
-           primaries: this.primaries,
-           transfer: this.transfer,
-           matrix: this.matrix,
-           fullRange: this.fullRange
-         }
+       show(WW) {
+         var iW;
+         this.view = WW, null === (iW = this.opened) || void 0 === iW || iW.show(WW)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7363-L7372` → after: `L172-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L172-L174) · [Before (L7363-L7372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7363-L7372)

```diff
-     }
-     const WB = BB => "undefined" !== typeof VideoFrame && BB instanceof VideoFrame,
-       AB = (BB, OB, GB) => {
-         const DB = Math.min(BB.left, OB),
-           QB = Math.min(BB.top, GB),
-           oB = Math.min(BB.width, OB - DB),
-           jB = Math.min(BB.height, GB - QB);
-         return (0, YB.Q)(oB >= 0), (0, YB.Q)(jB >= 0), {
-           left: DB,
-           top: QB,
+       resize(WW, iW) {
+         var OW;
+         this.size = {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7375-L7579` → after: `L177-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L177-L181) · [Before (L7375-L7579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7375-L7579)

```diff
-         }
-       },
-       VB = (BB, OB) => {
-         if (!BB || "object" !== typeof BB) throw new TypeError(OB + "crop, when provided, must be an object.");
-         if (!Number.isInteger(BB.left) || BB.left < 0) throw new TypeError(OB + "crop.left must be a non-negative integer.");
-         if (!Number.isInteger(BB.top) || BB.top < 0) throw new TypeError(OB + "crop.top must be a non-negative integer.");
-         if (!Number.isInteger(BB.width) || BB.width < 0) throw new TypeError(OB + "crop.width must be a non-negative integer.");
-         if (!Number.isInteger(BB.height) || BB.height < 0) throw new TypeError(OB + "crop.height must be a non-negative integer.")
-       },
-       SB = BB => {
-         if (!BB || "object" !== typeof BB) throw new TypeError("options must be an object.");
-         if (void 0 !== BB.colorSpace && !["display-p3", "srgb"].includes(BB.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
-         if (void 0 !== BB.format && "string" !== typeof BB.format) throw new TypeError("options.format, when provided, must be a string.");
-         if (void 0 !== BB.layout) {
-           if (!Array.isArray(BB.layout)) throw new TypeError("options.layout, when provided, must be an array.");
-           for (const OB of BB.layout) {
- ... (189 more removed lines; see GitHub link above)
+         }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
+       }
+       close() {
+         var WW;
+         this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7590-L7791` → after: `L186-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L186-L188) · [Before (L7590-L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7590-L7791)

```diff
-         if (this._closed = !1, rB(BB)) {
-           if (null === BB.format) throw new TypeError("AudioData with null format is not supported.");
-           this._data = BB, this.format = BB.format, this.sampleRate = BB.sampleRate, this.numberOfFrames = BB.numberOfFrames, this.numberOfChannels = BB.numberOfChannels, this.timestamp = BB.timestamp / 1e6, this.duration = BB.numberOfFrames / BB.sampleRate
-         } else if (BB instanceof mB) {
-           if (this._data = BB, BB._referenceCount++, this.format = BB.getFormat(), !uB.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
-           if (this.sampleRate = BB.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
-           if (this.numberOfFrames = BB.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
-           if (this.numberOfChannels = BB.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
-           if (this.timestamp = BB.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
-           this.duration = this.numberOfFrames / this.sampleRate
-         } else {
-           if (!BB || "object" !== typeof BB) throw new TypeError("Invalid AudioDataInit: must be an object.");
-           if (!uB.has(BB.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
-           if (!Number.isFinite(BB.sampleRate) || BB.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
-           if (!Number.isInteger(BB.numberOfChannels) || 0 === BB.numberOfChannels) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
-           if (!Number.isFinite(BB?.timestamp)) throw new TypeError("init.timestamp must be a number.");
- ... (186 more removed lines; see GitHub link above)
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(WW).then((WW => WW.ready)), cW(WW, (WW => {
+           this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height))
+         }))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7793-L7794` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L190-L191) · [Before (L7793-L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7793-L7794)

```diff
-       close() {
-         this._closed || (JB?.unregister(this), this._data instanceof mB ? (this._data._referenceCount--, 0 === this._data._referenceCount && this._data.close()) : rB(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0)
+       get dev() {
+         return this.opened.dev
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7796-L7805` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L193-L195) · [Before (L7796-L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7796-L7805)

```diff
-       toAudioData() {
-         if (this._closed) throw new Error("AudioSample is closed.");
-         return this._data instanceof mB ? this._createAudioDataFromData() : rB(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({
-           format: this.format,
-           sampleRate: this.sampleRate,
-           numberOfFrames: this.numberOfFrames,
-           numberOfChannels: this.numberOfChannels,
-           timestamp: this.microsecondTimestamp,
-           data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice()
-         })
+       isReady() {
+         var WW, iW;
+         return null !== (WW = null === (iW = this.opened) || void 0 === iW ? void 0 : iW.isReady()) && void 0 !== WW && WW
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7807-L7842` → after: `L197-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L197-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L197-L199) · [Before (L7807-L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7807-L7842)

```diff
-       _createAudioDataFromData() {
-         if (iB(this.format)) {
-           const BB = this.allocationSize({
-               planeIndex: 0,
-               format: this.format
-             }),
-             OB = new ArrayBuffer(BB * this.numberOfChannels);
-           for (let GB = 0; GB < this.numberOfChannels; GB++) this.copyTo(new Uint8Array(OB, GB * BB, BB), {
-             planeIndex: GB,
-             format: this.format
-           });
-           return new AudioData({
-             format: this.format,
-             sampleRate: this.sampleRate,
-             numberOfFrames: this.numberOfFrames,
-             numberOfChannels: this.numberOfChannels,
- ... (20 more removed lines; see GitHub link above)
+       setCosmetic(WW, iW) {
+         var OW;
+         null === (OW = this.opened) || void 0 === OW || OW.setCosmetic(WW, iW)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7844-L7859` → after: `L201-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L201-L203) · [Before (L7844-L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7844-L7859)

```diff
-       toAudioBuffer() {
-         if (this._closed) throw new Error("AudioSample is closed.");
-         const BB = new AudioBuffer({
-             numberOfChannels: this.numberOfChannels,
-             length: this.numberOfFrames,
-             sampleRate: this.sampleRate
-           }),
-           OB = new Float32Array(this.allocationSize({
-             planeIndex: 0,
-             format: "f32-planar"
-           }) / 4);
-         for (let GB = 0; GB < this.numberOfChannels; GB++) this.copyTo(OB, {
-           planeIndex: GB,
-           format: "f32-planar"
-         }), BB.copyToChannel(OB, GB);
-         return BB
+       setNametag(WW) {
+         var iW;
+         null === (iW = this.opened) || void 0 === iW || iW.setNametag(WW)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7861-L7865` → after: `L205-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L205-L207) · [Before (L7861-L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7861-L7865)

```diff
-       setTimestamp(BB) {
-         if (!Number.isFinite(BB)) throw new TypeError("newTimestamp must be a number.");
-         this.timestamp = BB
-       } [Symbol.dispose]() {
-         this.close()
+       playEmote(WW) {
+         var iW;
+         null === (iW = this.opened) || void 0 === iW || iW.playEmote(WW)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7867-L7887` → after: `L209-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L209-L211) · [Before (L7867-L7887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7867-L7887)

```diff
-       static * _fromAudioBuffer(BB, OB) {
-         if (!(BB instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
-         const GB = BB.numberOfChannels,
-           YB = BB.sampleRate,
-           DB = BB.length,
-           QB = Math.floor(24e4 / GB);
-         let oB = 0,
-           jB = DB;
-         for (; jB > 0;) {
-           const DB = Math.min(QB, jB),
-             yB = new Float32Array(GB * DB);
-           for (let OB = 0; OB < GB; OB++) BB.copyFromChannel(yB.subarray(OB * DB, (OB + 1) * DB), OB, oB);
-           yield new IB({
-             format: "f32-planar",
-             sampleRate: YB,
-             numberOfFrames: DB,
- ... (5 more removed lines; see GitHub link above)
+       setOrbit(WW) {
+         var iW;
+         null === (iW = this.opened) || void 0 === iW || iW.setOrbit(WW)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7889-L7912` → after: `L213-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L213-L215) · [Before (L7889-L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7889-L7912)

```diff
-       static fromAudioBuffer(BB, OB) {
-         if (!(BB instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
-         const GB = BB.numberOfChannels,
-           YB = BB.sampleRate,
-           DB = BB.length,
-           QB = Math.floor(24e4 / GB);
-         let oB = 0,
-           jB = DB;
-         const yB = [];
-         for (; jB > 0;) {
-           const DB = Math.min(QB, jB),
-             JB = new Float32Array(GB * DB);
-           for (let OB = 0; OB < GB; OB++) BB.copyFromChannel(JB.subarray(OB * DB, (OB + 1) * DB), OB, oB);
-           const MB = new IB({
-             format: "f32-planar",
-             sampleRate: YB,
- ... (8 more removed lines; see GitHub link above)
+       resetCamera() {
+         var WW;
+         null === (WW = this.opened) || void 0 === WW || WW.resetCamera()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L7914-L8068` → after: `L217-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L217-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L217-L219) · [Before (L7914-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L7914-L8068)

```diff
-     }
-     const FB = BB => {
-         switch (BB) {
-           case "u8":
-           case "u8-planar":
-             return 1;
-           case "s16":
-           case "s16-planar":
-             return 2;
-           case "s32":
-           case "s32-planar":
-           case "f32":
-           case "f32-planar":
-             return 4;
-           default:
-             throw new Error("Unknown AudioSampleFormat")
- ... (139 more removed lines; see GitHub link above)
+       async untilDrawn(WW) {
+         var iW;
+         await this.ready, await (null === (iW = this.opened) || void 0 === iW ? void 0 : iW.untilDrawn(WW))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8070-L8083` → after: `L221-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L221-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L221-L226) · [Before (L8070-L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8070-L8083)

```diff
-   },
-   40627: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => oB,
-       e: () => JB,
-       h: () => QB,
-       j: () => yB
-     });
-     const YB = /(?:(.+?)\n)?((?:\d{2}:)?\d{2}:\d{2}.\d{3})\s+-->\s+((?:\d{2}:)?\d{2}:\d{2}.\d{3})/g,
-       DB = /^WEBVTT(.|\n)*?\n{2}/,
-       QB = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;
-     class oB {
-       constructor(BB) {
-         this.preambleText = null, this.preambleEmitted = !1, this.options = BB
+       resize(WW, iW) {
+         var OW;
+         this.size = {
+           width: WW,
+           height: iW
+         }, null === (OW = this.opened) || void 0 === OW || OW.resize(WW, iW)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8085-L8117` → after: `L228-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L228-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L228-L230) · [Before (L8085-L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8085-L8117)

```diff
-       parse(BB) {
-         let OB;
-         if (BB = BB.replaceAll("\r\n", "\n").replaceAll("\r", "\n"), YB.lastIndex = 0, !this.preambleText) {
-           if (!DB.test(BB)) throw new Error("WebVTT preamble incorrect.");
-           OB = YB.exec(BB);
-           const GB = BB.slice(0, OB?.index ?? BB.length).trimEnd();
-           if (!GB) throw new Error("No WebVTT preamble provided.");
-           this.preambleText = GB, OB && (BB = BB.slice(OB.index), YB.lastIndex = 0)
-         }
-         for (; OB = YB.exec(BB);) {
-           const GB = BB.slice(0, OB.index),
-             DB = OB[1],
-             QB = OB.index + OB[0].length,
-             oB = BB.indexOf("\n", QB) + 1,
-             jB = BB.slice(QB, oB).trim();
-           let JB = BB.indexOf("\n\n", QB); - 1 === JB && (JB = BB.length);
- ... (17 more removed lines; see GitHub link above)
+       close() {
+         var WW;
+         this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8120-L8145` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L233) · [Before (L8120-L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8120-L8145)

```diff
-     const jB = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/,
-       yB = BB => {
-         const OB = jB.exec(BB);
-         if (!OB) throw new Error("Expected match.");
-         return 36e5 * Number(OB[1] || "0") + 6e4 * Number(OB[2]) + 1e3 * Number(OB[3]) + Number(OB[4])
-       },
-       JB = BB => {
-         const OB = Math.floor(BB / 36e5),
-           GB = Math.floor(BB % 36e5 / 6e4),
-           YB = Math.floor(BB % 6e4 / 1e3),
-           DB = BB % 1e3;
-         return OB.toString().padStart(2, "0") + ":" + GB.toString().padStart(2, "0") + ":" + YB.toString().padStart(2, "0") + "." + DB.toString().padStart(3, "0")
-       }
-   },
-   40641: (BB, OB, GB) => {
-     var YB;
- ... (10 more removed lines; see GitHub link above)
+     const ZW = new class {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8147` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L235) · [Before (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8147)

```diff
-         super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null
+         this.host = null, this.makeDefault = null
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8149-L8150` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L237-L238) · [Before (L8149-L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8149-L8150)

```diff
-       _setMonotonicity(BB) {
-         !1 !== this._monotonicity && (this._monotonicity = BB)
+       setHost(WW) {
+         this.host = WW
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8152-L8177` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L240-L241) · [Before (L8152-L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8152-L8177)

```diff
-       _dispatchWrite(BB, OB) {
-         this.onwrite?.(BB, OB), this._emit("write", {
-           start: BB,
-           end: OB
-         })
-       }
-       slice(BB) {
-         if (!Number.isInteger(BB) || BB < 0) throw new TypeError("offset must be a non-negative integer.");
-         return new PB(this, BB)
-       }
-     }
-     const jB = 65536,
-       yB = 2 ** 32;
-     class JB extends oB {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
- ... (10 more removed lines; see GitHub link above)
+       setDefaultHost(WW) {
+         this.makeDefault = WW
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8179-L8189` → after: `L243-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L243-L246) · [Before (L8179-L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8179-L8189)

```diff
-       _ensureSize(BB) {
-         let OB = this._buffer.byteLength;
-         for (; OB < BB;) OB *= 2;
-         if (OB !== this._buffer.byteLength) {
-           if (OB > yB) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
-           if (this._supportsResize) this._buffer.resize(OB);
-           else {
-             const BB = new ArrayBuffer(OB),
-               GB = new Uint8Array(BB);
-             GB.set(this._bytes, 0), this._buffer = BB, this._bytes = GB
-           }
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8192-L8222` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L250-L251) · [Before (L8192-L8222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8192-L8222)

```diff
-       _start() {}
-       _write(BB, OB) {
-         this._ensureSize(OB + BB.byteLength), this._bytes.set(BB, OB), this._maxPos = Math.max(this._maxPos, OB + BB.byteLength), this._dispatchWrite(OB, OB + BB.byteLength)
-       }
-       async _flush() {}
-       async _finalize() {
-         this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized")
-       }
-       async _close() {}
-       _getSlice(BB, OB) {
-         return this._bytes.slice(BB, OB)
-       }
-     }
-     class MB extends oB {
-       _start() {}
-       _write(BB, OB) {
- ... (15 more removed lines; see GitHub link above)
+       openMob(WW) {
+         return new wW(this.current().openMob(WW))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8224-L8225` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L253-L254) · [Before (L8224-L8225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8224-L8225)

```diff
-       _flush() {
-         return this._baseTarget._flush()
+       openPet(WW) {
+         return new wW(this.current().openPet(WW))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8227-L8228` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L256-L257) · [Before (L8227-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8227-L8228)

```diff
-       async _finalize() {
-         this._emit("finalized")
+       openMobLineup(WW) {
+         return new wW(this.current().openMobLineup(WW))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8230-L8232` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L259-L260) · [Before (L8230-L8232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8230-L8232)

```diff
-       async _close() {}
-       _setMonotonicity(BB) {
-         super._setMonotonicity(BB), this._baseTarget._setMonotonicity(BB)
+       sharesCharacter() {
+         return !0 === this.current().sharesCharacter
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8234-L8238` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L262-L263) · [Before (L8234-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8234-L8238)

```diff
-     }
-     class zB {
-       constructor(BB, OB) {
-         if (this.rootPath = BB, this.getTarget = OB, "string" !== typeof BB) throw new TypeError("rootPath must be a string.");
-         if ("function" !== typeof OB) throw new TypeError("getTarget must be a function.")
+       openCharacter(WW, iW) {
+         return new tW(this.current().openCharacter(WW, iW))
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8242-L8248` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L267) · [Before (L8242-L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8242-L8248)

```diff
-   40619: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => YB
-     });
-     const YB = "Mediabunny v1.61.3"
-   },
-   40633: (BB, OB, GB) => {
+   35264: (WW, iW, OW) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8250` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L269-L271) · [Before (L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8250)

```diff
-       e: () => DB
+       d: () => mW.d,
+       e: () => mW.e,
+       f: () => mW.f
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8252` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L273) · [Before (L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8252)

```diff
-     var YB = GB(40574);
+     var mW = OW(35270);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8254-L8265` → after: `L275-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L275-L276) · [Before (L8254-L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8254-L8265)

```diff
-       constructor(BB, OB) {
-         if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, BB._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
-         this.target = BB, BB._setMonotonicity(OB), BB._writerAcquired = !0
-       }
-       start() {
-         (0, YB.Q)(!this.started), this.target._start(), this.started = !0
-       }
-       write(BB) {
-         (0, YB.Q)(this.started && !this.finalized), this.maybeTrackWrites(BB), this.target._write(BB, this.pos), this.pos += BB.byteLength
-       }
-       seek(BB) {
-         this.pos = BB
+       constructor(WW) {
+         this.load = WW, this.loaded = null, this.loading = null
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8267-L8268` → after: `L278-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L278-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L278-L281) · [Before (L8267-L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8267-L8268)

```diff
-       getPos() {
-         return this.pos
+       run(WW) {
+         return null !== this.loaded ? WW(this.loaded) : (this.loading ??= this.load().then((WW => (this.loaded = WW, WW)), (WW => {
+           throw this.loading = null, WW
+         })), this.loading.then(WW))
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8270-L8271` → after: `L283-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L283-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L283-L286) · [Before (L8270-L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8270-L8271)

```diff
-       async flush() {
-         return (0, YB.Q)(this.started && !this.finalized), this.target._flush()
+     }
+     class NW {
+       constructor() {
+         this.sharesCharacter = !0, this.mobScene = new EW((() => Promise.all([OW.e(85), OW.e(264), OW.e(263), OW.e(289), OW.e(113), OW.e(290), OW.e(89), OW.e(86), OW.e(287), OW.e(87), OW.e(88), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(311), OW.e(260), OW.e(278) … [truncated]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8273-L8274` → after: `L288-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L288-L289) · [Before (L8273-L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8273-L8274)

```diff
-       async finalize() {
-         (0, YB.Q)(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0
+       openMob(WW) {
+         return this.mobScene.run((iW => iW.openMobPreview(WW)))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8276-L8290` → after: `L291-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L291-L292) · [Before (L8276-L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8276-L8290)

```diff
-       maybeTrackWrites(BB) {
-         if (!this.trackedWrites) return;
-         let OB = this.getPos();
-         if (OB < this.trackedStart) {
-           if (OB + BB.byteLength <= this.trackedStart) return;
-           BB = BB.subarray(this.trackedStart - OB), OB = 0
-         }
-         const GB = OB + BB.byteLength - this.trackedStart;
-         let YB = this.trackedWrites.byteLength;
-         for (; YB < GB;) YB *= 2;
-         if (YB !== this.trackedWrites.byteLength) {
-           const BB = new Uint8Array(YB);
-           BB.set(this.trackedWrites, 0), this.trackedWrites = BB
-         }
-         this.trackedWrites.set(BB, OB - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, OB + BB.byteLength)
+       openPet(WW) {
+         return this.mobScene.run((iW => iW.openPetPreview(WW)))
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8292-L8293` → after: `L294-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L294-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L294-L295) · [Before (L8292-L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8292-L8293)

```diff
-       startTrackingWrites() {
-         this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart
+       openMobLineup(WW) {
+         return this.mobScene.run((iW => iW.openMobLineupPreview(WW)))
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/229.js` (Changed code · before: `L8295-L8302` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1eR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-535a03504ac7dbcceb99fe64f7f83dfe29a66a46b0d57f51830d5ac6c021ba1e) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/229.js#L297-L298) · [Before (L8295-L8302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/229.js#L8295-L8302)

```diff
-       stopTrackingWrites() {
-         if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
-         const BB = {
-           data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart),
-           start: this.trackedStart,
-           end: this.trackedEnd
-         };
-         return this.trackedWrites = null, BB
+       openCharacter(WW, iW) {
+         return this.characterScene.run((OW => OW.openCharacterPreview(WW, iW)))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/230.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/230.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341)

#### 1. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L4)

```diff
-   44646: (BB, OB, GB) => {
+   37544: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L6-L7)

```diff
-       loadGlbAsset: () => fO,
-       loadGlbTree: () => UO
+       default: () => Oi
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L9-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L8-L12) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L9-L11)

```diff
-     var YB = GB(38589),
-       DB = GB(120),
-       QB = GB(1195);
+     var mW = OW(62);
+     const EW = "newPlayerDeal",
+       NW = 36e5,
+       PW = [4, 12, 20, 20, 30];
+     const LW = 12 * NW;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L14` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L15) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L14)

```diff
-       return (0, DB.isDiscordClient)() ? `https://${QB.e.discordDomain}/${BB.href}` : BB.href
+       return WW - LW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L23-L24` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L18-L20) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L23-L24)

```diff
-     function MB() {
-       return JB()('(()=>{class BB extends Error{}function OB(OB,GB){const YB=OB._malloc(GB);if(0===YB)throw new BB(`Draco: the decoder\'s heap refused ${GB} bytes`);return YB}function GB(GB,YB,DB,QB){let oB=null,jB=null,yB=null;try{oB=new GB.Decoder,jB=new GB.DecoderBuffer,jB.Ini … [truncated]
+     function wW(WW, iW, OW) {
+       const mW = cW(OW);
+       return iW >= mW && iW < OW && (null === WW.lastShownAt || WW.lastShownAt < mW)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L43-L44` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L23) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L43-L44)

```diff
-     function nB() {
-       if (!ZB) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
+     function tW(WW, iW) {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L46-L47` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L25-L28) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L46-L47)

```diff
-         scriptUrl: BB,
-         wasmBinaryUrl: OB
+         arrival: OW,
+         now: mW,
+         endsAt: EW,
+         playedOnDevice: LW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L49-L75` → after: `L30-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L30-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L30-L59) · [Before (L49-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L49-L75)

```diff
-       return NB ??= fetch(OB).then((BB => {
-         if (!BB.ok) throw new Error(`Draco: fetching ${OB} failed: ${BB.status}`);
-         return BB.arrayBuffer()
-       })), NB.catch((() => {
-         NB = null
-       })), VB.workersStarted++, Promise.all([NB, (0, lB.g)()]).then((OB => {
-         let [GB] = OB;
-         return new Promise(((OB, YB) => {
-           const DB = new MB;
-           DB.onerror = BB => {
-             DB.onmessage = null, DB.onerror = null, DB.terminate(), YB(new Error("Draco: the decode worker failed to start" + (BB.message ? `: ${BB.message}` : " (its script did not load)")))
-           }, DB.onmessage = BB => {
-             let {
-               data: GB
-             } = BB;
-             DB.onmessage = null, DB.onerror = null, "initDone" === GB.id ? OB(DB) : (DB.terminate(), YB(new Error(`Draco: ${"initError"===GB.id?GB.message:"the worker did not start"}`)))
- ... (11 more removed lines; see GitHub link above)
+       return !(mW >= EW || !LW) && (!(!wW(WW, mW, EW) && 0 !== WW.shownCount && null !== WW.lastShownAt) || "open" === OW && mW - WW.lastShownAt >= (cW = WW.shownCount, PW[Math.min(Math.max(cW, 1), PW.length) - 1] * NW));
+       var cW
+     }
+     var ZW = OW(327),
+       xW = OW(1556),
+       lW = OW(25),
+       AW = OW(3132),
+       bW = OW(4076),
+       jW = OW(4085),
+       UW = OW(2059),
+       kW = OW(1185),
+       sW = OW(1111);
+     var MW = OW(1422),
+       KW = OW(39),
+       SW = OW(683),
+       YW = OW(3507),
+ ... (14 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L78-L104` → after: `L62-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L62-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L62-L97) · [Before (L78-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L78-L104)

```diff
-       const OB = RB.indexOf(BB); - 1 !== OB && RB.splice(OB, 1);
-       const GB = WB.shift();
-       GB && kB(GB)
-     }
- 
-     function fB(BB, OB) {
-       BB.busy = !0, BB.releaseTimer && (clearTimeout(BB.releaseTimer), BB.releaseTimer = null);
-       BB.worker.then((GB => {
-         const YB = AB++;
-         GB.onmessage = DB => {
-           let {
-             data: QB
-           } = DB;
-           if (("decoded" === QB.id || "decodeError" === QB.id) && QB.seq === YB) {
-             if (GB.onmessage = null, GB.onerror = null, "decoded" === QB.id) return VB.decodes++, OB.resolve({
-               indices: QB.indices,
- ... (11 more removed lines; see GitHub link above)
+       let {
+         shownView: iW,
+         close: OW
+       } = WW;
+       const {
+         t: EW
+       } = (0, oW.B)(), NW = (0, HW.V)(), {
+         purchaseUnderWay: PW,
+         notice: LW,
+         needsLogin: cW,
+         buyPack: wW
+       } = (0, DW.g)("popup", ((WW, iW) => {
+         OW(!1), (0, uW.b)(WW, iW)
+       })), tW = null === NW;
+       (0, mW.useEffect)((() => {
+         tW && OW(!1)
+ ... (20 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L106-L119` → after: `L99-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L99-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L99-L111) · [Before (L106-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L106-L119)

```diff
-         }, GB.onerror = YB => {
-           GB.onmessage = null, GB.onerror = null, GB.terminate(), OB.reject(new Error(`Draco: the decode worker failed: ${YB.message}`)), UB(BB)
-         };
-         const DB = {
-           id: "decode",
-           seq: YB,
-           data: OB.data,
-           attributeIds: OB.attributeIds,
-           expected: OB.expected
-         };
-         GB.postMessage(DB, [OB.data.buffer])
-       }), (GB => {
-         OB.reject(GB instanceof Error ? GB : new Error(String(GB))), UB(BB)
-       }))
+         }), (0, VW.jsx)(eW.e, {
+           notice: LW,
+           className: "SmallTextBold NewPlayerDealNotice"
+         }), (0, VW.jsx)(eW.b, {
+           className: "SmallTextBold NewPlayerDealNotice"
+         }), (0, VW.jsx)(dW.O, {
+           className: "NewPlayerDealNoThanks",
+           onClick: () => {
+             OW(!0)
+           },
+           children: EW("newPlayerDeal:noThanks")
+         })]
+       })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L123-L138` → after: `L115-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L115-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L115-L121) · [Before (L123-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L123-L138)

```diff
-       const OB = RB.find((BB => !BB.busy));
-       if (OB) fB(OB, BB);
-       else {
-         if (SB ??= (0, zB.e)() ? 1 : function(BB, OB) {
-             const GB = BB ? Math.max(1, Math.min(Math.floor(.5 * BB), 4)) : 1;
-             return OB ? Math.min(GB, pB) : GB
-           }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, PB.isMobile)()), RB.length < SB) {
-           const OB = {
-             worker: nB(),
-             busy: !0,
-             releaseTimer: null
-           };
-           return RB.push(OB), VB.mostWorkers = Math.max(VB.mostWorkers, RB.length), void fB(OB, BB)
-         }
-         WB.push(BB)
-       }
+       let {
+         arm: iW,
+         children: OW
+       } = WW;
+       return (0, mW.useEffect)((() => {
+         (0, HW.P)(!0)
+       }), []), (0, HW.W)(iW, "popup"), OW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L141-L149` → after: `L124-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L124-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L124-L140) · [Before (L141-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L141-L149)

```diff
-     function dB(BB, OB, GB) {
-       return new Promise(((YB, DB) => {
-         kB({
-           data: new Int8Array(BB.buffer, BB.byteOffset, BB.byteLength).slice(),
-           attributeIds: OB,
-           expected: GB,
-           resolve: YB,
-           reject: DB
-         })
+     function CW(WW) {
+       let iW = null;
+       MW.NotificationProvider.showCustomPopup({
+         body: OW => (0, VW.jsx)(fW, {
+           arm: WW.arm,
+           children: (0, VW.jsx)(pW, {
+             shownView: WW,
+             close: WW => {
+               iW ??= WW, OW()
+             }
+           })
+         }),
+         middleScreenPopupContainerClassName: "NewPlayerDealPopupContainer",
+         middleScreenPopupClassName: "NewPlayerDealPopupPanel",
+         unlockPointerKey: "NewPlayerDealPopup"
+       }).getResult().then((OW => {
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L152-L162` → after: `L143-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L143-L146) · [Before (L152-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L152-L162)

```diff
-     var KB = GB(38074),
-       uB = GB(38087),
-       mB = GB(34875),
-       IB = GB(34869);
-     const FB = {
-       index: -1,
-       magFilter: void 0,
-       minFilter: void 0,
-       wrapS: void 0,
-       wrapT: void 0
-     };
+     const XW = 2500,
+       BW = 6e4;
+     const qW = 500,
+       RW = 6e4;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L165-L363` → after: `L149-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L149-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L149-L155) · [Before (L165-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L165-L363)

```diff
-       const OB = (0, IB.j)(BB.byteLength);
-       if (OB) throw new mB.g(OB);
-       const {
-         json: GB,
-         bin: YB
-       } = (0, mB.r)(BB), DB = (0, IB.h)(GB, YB);
-       if (DB) throw new mB.g(DB);
-       try {
-         return function(BB, OB) {
-           var GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB;
-           const NB = new Map,
-             RB = GB => {
-               let YB = NB.get(GB);
-               if (!YB) {
-                 var DB;
-                 const QB = BB.bufferViews[GB],
- ... (183 more removed lines; see GitHub link above)
+       const iW = Date.now() + RW;
+       return new Promise((OW => {
+         const mW = () => {
+           WW() ? (0, TW.g)() || MW.NotificationProvider.hasPopup() || (0, yW.m)() || (0, HW.z)() || null !== lW.d.get("openEverythingMenuName") ? Date.now() > iW ? OW(!1) : setTimeout(mW, qW) : OW(!0) : OW(!1)
+         };
+         mW()
+       }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L365` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L157-L159) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L365)

```diff
-     const gB = new WeakMap;
+     const IW = "newPlayerDealPointerDeferred_";
+     let aW = !1,
+       rW = null;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L369-L370` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L163) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L369-L370)

```diff
-       const YB = null !== (GB = gB.get(BB)) && void 0 !== GB ? GB : OB(BB);
-       return gB.set(BB, YB), YB
+       return (null === (OW = rW) || void 0 === OW ? void 0 : OW.accountId) === iW && rW.shownCount === WW.shownCount
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L373-L390` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L166-L167) · [Before (L373-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L373-L390)

```diff
-     function XB(BB) {
-       const OB = BB.bufferView,
-         GB = 5125 === BB.componentType ? Uint32Array : Uint16Array,
-         YB = OB.bytes.buffer,
-         DB = OB.bytes.byteOffset + (BB.byteOffset || 0);
-       return DB % GB.BYTES_PER_ELEMENT !== 0 ? new GB(YB.slice(DB, DB + BB.count * GB.BYTES_PER_ELEMENT), 0) : new GB(YB, DB, BB.count)
-     }
- 
-     function wB(BB, OB) {
-       if (BB.min && BB.max) return [new Float64Array(BB.min), new Float64Array(BB.max)];
-       const GB = OB.find((BB => {
-           let {
-             kind: OB
-           } = BB;
-           return "position" === OB
-         })),
- ... (2 more removed lines; see GitHub link above)
+     function FW(WW, iW, OW) {
+       return !!zW(iW, OW) && (rW = null, (0, HW.E)(OW), CW(WW), !0)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L392-L399` → after: `L169-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L169-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L169-L174) · [Before (L392-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L392-L399)

```diff
- 
-     function EB(BB) {
-       const OB = BB.attributes.map((BB => {
-           var OB, GB;
-           let {
-             kind: YB,
-             accessor: DB
-           } = BB;
+     async function QW(WW, iW, OW, mW) {
+       if (aW) return !1;
+       let EW;
+       aW = !0;
+       try {
+         EW = await async function(WW) {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L401-L415` → after: `L176-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L176-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L176-L182) · [Before (L401-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L401-L415)

```diff
-             bufferView: QB,
-             numComponents: oB
-           } = DB;
-           if (!QB) {
-             return {
-               kind: YB,
-               data: rB(DB, (() => new Float32Array(oB * DB.count))),
-               offset: 0,
-               stride: 4 * oB,
-               components: oB,
-               glType: 5126,
-               isNormalized: !1
-             }
-           }
-           const jB = null !== (OB = QB.byteStride) && void 0 !== OB ? OB : oB * mB.b[DB.componentType];
+             newPlayerDeal: iW,
+             counted: OW
+           } = await (0, sW.postJsonWithMetricsCookiesAndJsonResponse)(`${kW.clientSideServerUrls.indexUrl}/index/new-player-deal/shown`, {
+             shownCount: WW
+           }, {
+             retries: 1
+           });
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L417-L423` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L184-L185) · [Before (L417-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L417-L423)

```diff
-             kind: YB,
-             data: QB.bytes,
-             offset: null !== (GB = DB.byteOffset) && void 0 !== GB ? GB : 0,
-             stride: jB,
-             components: oB,
-             glType: DB.componentType,
-             isNormalized: DB.normalized
+             newPlayerDeal: iW,
+             counted: !0 === OW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L425-L429` → after: `L187-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L187-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L187-L196) · [Before (L425-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L425-L429)

```diff
-         })),
-         GB = BB.indices,
-         YB = GB && rB(GB, XB),
-         DB = BB.position;
-       return new uB.e(OB, YB, DB.count, ...wB(DB, OB))
+         }(iW.shownCount)
+       } catch (NW) {
+         return console.error("New player deal: counting a showing of its popup failed", NW), !1
+       } finally {
+         aW = !1
+       }
+       return (0, HW.T)(OW, EW.newPlayerDeal), EW.counted && null !== EW.newPlayerDeal && (rW = {
+         accountId: mW,
+         shownCount: EW.newPlayerDeal.shownCount
+       }, "landingPage" === lW.d.get("gameState") && FW(WW, EW.newPlayerDeal, mW)), !0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L431` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L198) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L431)

```diff
-     const cB = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];
+     let Wi = null;
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L433-L450` → after: `L200-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L200-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L200-L231) · [Before (L433-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L433-L450)

```diff
-     function hB(BB, OB) {
-       const GB = OB.attributes.map((BB => {
-         let {
-           kind: OB,
-           data: GB,
-           size: YB,
-           byteOffset: DB,
-           byteStride: QB,
-           normalized: oB
-         } = BB;
-         return {
-           kind: OB,
-           data: GB,
-           offset: DB,
-           stride: QB,
-           components: YB,
- ... (2 more removed lines; see GitHub link above)
+     function ii(WW, iW, OW, EW, NW) {
+       var PW;
+       const {
+         gameState: LW
+       } = (0, lW.p)(["gameState"]), xW = "landingPage" === LW, {
+         pointing: AW
+       } = (0, YW.f)(), bW = (0, mW.useRef)(AW);
+       bW.current = AW;
+       const jW = (0, mW.useRef)(WW);
+       jW.current = WW;
+       const kW = (0, mW.useRef)(iW);
+       kW.current = iW;
+       const sW = (0, mW.useRef)(OW);
+       sW.current = OW;
+       const [MW, yW] = (0, mW.useState)(null), TW = (0, mW.useRef)(0), JW = (0, mW.useRef)(0), hW = (0, mW.useRef)(!1), HW = (0, mW.useCallback)((WW => {
+         "open" === function(WW) {
+ ... (16 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L452-L453` → after: `L233-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L233-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L233-L276) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L452-L453)

```diff
-       }));
-       return new uB.e(GB, OB.indices, OB.totalVertices, ...wB(BB.position, GB))
+       }), [xW, HW]);
+       const nW = null !== (PW = null === WW || void 0 === WW ? void 0 : WW.endsAt) && void 0 !== PW ? PW : null;
+       (0, mW.useEffect)((() => {
+         if (!xW || null === nW) return;
+         const WW = cW(nW) - Date.now();
+         if (WW <= 0 || WW > UW.c) return;
+         const iW = setTimeout((() => {
+           HW(!1)
+         }), WW);
+         return () => {
+           clearTimeout(iW)
+         }
+       }), [xW, nW, HW]);
+       const uW = null !== WW && null !== EW && null === NW;
+       (0, mW.useEffect)((() => {
+         if (null === MW || !uW || JW.current >= MW.seq) return;
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L456-L458` → after: `L279-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L279-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L279-L365) · [Before (L456-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L456-L458)

```diff
-     function aB(BB) {
-       const OB = BB.lastIndexOf("/");
-       return OB < 0 ? BB : BB.substring(OB + 1)
+     function Oi() {
+       const {
+         userContext: WW
+       } = (0, hW.e)(), iW = (0, AW.usePurchasesAllowed)(), [OW, NW] = (0, mW.useState)(nW.n);
+       (0, mW.useEffect)((() => (NW((0, nW.n)()), (0, nW.r)(NW))), []);
+       const PW = (0, HW.e)(WW);
+       ! function(WW, iW, OW) {
+         const [NW, PW] = (0, mW.useState)(0);
+         (0, mW.useEffect)((() => {
+           if (!iW || null === WW) return;
+           if (null !== OW) return void(0, HW.O)(WW, (0, nW.g)());
+           if (null !== (0, HW.l)(WW)) return;
+           let mW, NW = !1;
+           return (0, jW.getBillingClient)().getOfferings(EW).then((iW => {
+             let {
+               offering: OW
+ ... (71 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L462-L463` → after: `L387-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L387-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L387-L398) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L462-L463)

```diff
-       const OB = BB.lastIndexOf("/");
-       return OB < 0 ? "" : BB.substring(0, OB + 1)
+       let {
+         endsAt: iW,
+         className: OW
+       } = WW;
+       return (0, lW.jsxs)("span", {
+         className: NW()("NewPlayerDealClock", OW),
+         children: [(0, lW.jsx)(wW.c, {
+           name: "hourglass"
+         }), (0, lW.jsx)(cW.f, {
+           toTime: iW
+         })]
+       })
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L467` → after: `L402-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L402-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L402-L452) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L467)

```diff
-       return BB.name || `node${BB.index}`
+       let {
+         offered: iW,
+         needsLogin: OW,
+         busy: mW,
+         highlight: EW,
+         onBuy: cW
+       } = WW;
+       const {
+         t: wW
+       } = (0, PW.B)(), {
+         pack: AW
+       } = iW, bW = (0, ZW.e)(iW.package);
+       return (0, lW.jsxs)("div", {
+         className: NW()("NewPlayerDealPack", {
+           NewPlayerDealPackHighlight: EW
+         }),
+ ... (35 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L490-L492` → after: `L456-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L456-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L456-L489) · [Before (L490-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L490-L492)

```diff
-       var OB, GB, YB, DB;
-       const QB = null !== (OB = BB.minFilter) && void 0 !== OB ? OB : 9987;
-       return 9729 === (null !== (GB = BB.magFilter) && void 0 !== GB ? GB : 9729) ? null !== (YB = CB[QB]) && void 0 !== YB ? YB : 3 : null !== (DB = HB[QB]) && void 0 !== DB ? DB : 4
+       let {
+         view: iW,
+         needsLogin: OW,
+         busy: EW,
+         highlight: LW,
+         onBuy: cW
+       } = WW;
+       const {
+         t: wW
+       } = (0, PW.B)();
+       return (0, lW.jsxs)("div", {
+         className: NW()("NewPlayerDealPacks", iW.packs.length > 1 ? "NewPlayerDealPacksTwo" : "NewPlayerDealPacksOne"),
+         children: [iW.packs.map(((WW, iW) => (0, lW.jsxs)(mW.Fragment, {
+           children: [iW > 0 && (0, lW.jsx)("div", {
+             className: "NewPlayerDealDivider",
+             "aria-hidden": !0,
+ ... (18 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L494-L497` → after: `L491-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L491-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L491-L517) · [Before (L494-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L494-L497)

```diff
-     const sB = {
-       33071: 0,
-       33648: 2
-     };
+   },
+   35285: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => TW,
+       g: () => hW
+     });
+     OW(35279);
+     var mW = OW(4139),
+       EW = OW(1556),
+       NW = OW(3132),
+       PW = OW(4126),
+       LW = OW(4105),
+       cW = OW(4132),
+       wW = OW(4085),
+       tW = OW(1172),
+       ZW = OW(1422),
+ ... (11 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L499-L501` → after: `L519-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L519-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L519-L523) · [Before (L499-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L499-L501)

```diff
-     function xB(BB) {
-       var OB;
-       return null !== (OB = sB[null !== BB && void 0 !== BB ? BB : 10497]) && void 0 !== OB ? OB : 1
+     function YW(WW, iW) {
+       null !== WW && (0, UW.v)(WW) || ((0, EW.reportAnalyticsClick)({
+         id: "store.purchase_done",
+         value: `self:${iW.pack.packageId}`
+       }), null !== WW && (0, UW.D)(WW), TW(iW.pack.gems))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L504-L505` → after: `L526-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L526-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L526-L543) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L504-L505)

```diff
-     function tB(BB) {
-       return 9728 === BB.minFilter || 9729 === BB.minFilter
+     function yW(WW, iW, OW) {
+       const EW = (0, UW.e)(iW);
+       switch (WW.kind) {
+         case "completed":
+           YW(EW, OW);
+           break;
+         case "pending":
+           NW = WW.intentId, PW = () => {
+             jW.j.refresh(), YW(EW, OW)
+           }, SW || (SW = !0, KW.listen()), KW.follow(NW, PW);
+           break;
+         case "unknownPackage":
+           (0, UW.T)(iW, null);
+           break;
+         case "failed":
+           WW.errorKey === mW.b.newPlayerDealUnavailable && (0, UW.T)(iW, null)
+ ... (2 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L509-L515` → after: `L547-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L547-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L547-L554) · [Before (L509-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L509-L515)

```diff
-       var OB, GB, YB;
-       const DB = Float64Array.from(null !== (OB = BB.scale) && void 0 !== OB ? OB : [1, 1, 1]);
-       return BB.hasCamera && (DB[0] = -1), {
-         translation: Float64Array.from(null !== (GB = BB.translation) && void 0 !== GB ? GB : [0, 0, 0]),
-         rotation: Float64Array.from(null !== (YB = BB.rotation) && void 0 !== YB ? YB : [0, 0, 0, 1]),
-         scale: DB
-       }
+       ZW.NotificationProvider.showCustomPopup({
+         body: iW => (0, MW.jsx)(JW, {
+           gems: WW,
+           close: iW
+         }),
+         middleScreenPopupClassName: "NewPlayerDealAddedPopup",
+         disableExitButton: !0
+       })
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L518` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L557) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L518)

```diff
-     function OO(BB, OB) {
+     function JW(WW) {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L520-L522` → after: `L559-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L559-L560) · [Before (L520-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L520-L522)

```diff
-         translation: GB,
-         rotation: YB,
-         scale: DB
+         gems: iW,
+         close: OW
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L524-L709` → after: `L562-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L562-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L562-L581) · [Before (L524-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L524-L709)

```diff
-       const QB = new Float32Array(16);
-       return (0, KB.e)(DB, 0, YB, 0, GB, 0, QB), OB && (0, KB.o)(QB, OB, 0, QB), QB
-     }
-     class GO {
-       constructor(BB, OB, GB, YB) {
-         this.model = BB, this.decode = OB, this.fileInfo = GB, this.uniqueRootUrl = YB, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
-         const DB = new Set,
-           QB = (OB, GB) => {
-             const YB = BB.nodes[OB];
-             if (this.parents.has(YB)) throw new mB.f(`/nodes/${OB}: Invalid recursive node hierarchy`);
-             this.parents.set(YB, GB);
-             const oB = null === YB.mesh ? [] : BB.meshes[YB.mesh].primitives,
-               jB = oB.map((BB => {
-                 const OB = oB.length > 1;
-                 return {
-                   name: OB ? `${TB(YB)}_primitive${BB.index}` : TB(YB),
- ... (170 more removed lines; see GitHub link above)
+       const {
+         t: mW
+       } = (0, tW.B)();
+       return (0, MW.jsxs)("div", {
+         className: "NewPlayerDealAdded",
+         children: [(0, MW.jsxs)("div", {
+           className: "NewPlayerDealAddedHead",
+           children: [(0, MW.jsx)(AW.c, {
+             name: "circle-check"
+           }), (0, MW.jsx)(bW.c, {
+             amount: iW
+           }), (0, MW.jsx)("span", {
+             children: mW("newPlayerDeal:added")
+           })]
+         }), (0, MW.jsx)(lW.n, {
+           className: "NewPlayerDealAddedOk",
+ ... (4 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L713-L927` → after: `L585-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L585-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L585-L604) · [Before (L713-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L713-L927)

```diff
-       (0, QO.e)(BB) || (BB.geometry && BB.geometry.useBoundingInfoFromGeometry ? BB._updateBoundingInfo() : BB.refreshBoundingInfo(!0, !0))
-     }
-     class JO {
-       constructor(BB, OB) {
-         this.eq = BB, this.decode = OB, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(BB) {
-         let OB = this.viewData.get(BB.index);
-         return OB || (OB = this.bufferData.then((() => BB.bytes)), this.viewData.set(BB.index, OB)), OB
-       }
-       viewBuffer(BB) {
-         let OB = this.viewBuffers.get(BB.index);
-         return OB || (OB = this.viewBytes(BB).then((BB => new((0, DO.c)().BP)(this.eq.Lp(), BB, !1))), this.viewBuffers.set(BB.index, OB)), OB
-       }
-       vertexBuffer(BB, OB) {
-         const {
- ... (199 more removed lines; see GitHub link above)
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW.b;
+       const {
+         userContext: OW
+       } = (0, xW.e)(), {
+         purchaseUnderWay: mW,
+         notice: EW,
+         buy: cW
+       } = (0, LW.b)(iW), wW = (0, kW.n)(), tW = OW.mayBuy() || (0, NW.guestsMayBuy)(), ZW = null === wW ? !tW : wW.guest && !OW.isLoggedIn();
+       return {
+         purchaseUnderWay: mW,
+         notice: EW,
+         needsLogin: ZW,
+         buyPack: function(mW, EW) {
+           (0, UW.L)("new_player_deal.buy", (0, sW.b)(mW.arm, WW, EW.pack.packageId)), null === wW ? cW(function(WW) {
+             return {
+               sku: WW.pack.packageId,
+ ... (4 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L929-L1027` → after: `L606-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L606-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L606-L610) · [Before (L929-L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L929-L1027)

```diff
-             for (const OB of BB.children) YB.push(this.loadNode(this.asset.model.nodes[OB], (BB => {
-               BB.parent = DB
-             })));
-             (GB => {
-               WO(GB, BB.extras), OB(GB)
-             })(DB)
-           };
-         if (null === BB.mesh) {
-           const OB = this.node(TB(BB), !1);
-           this.nodeObjects.set(BB.index, OB), DB(OB)
-         } else {
-           const OB = this.asset.model.meshes[BB.mesh];
-           YB.push(this.loadMesh(`/meshes/${OB.index}`, BB, OB, DB))
-         }
-         return Promise.all(YB).then((() => {
-           for (const GB of null !== (OB = this.nodePrimitives.get(BB.index)) && void 0 !== OB ? OB : []) {
- ... (83 more removed lines; see GitHub link above)
+           }(EW), null, {
+             followPending: !1
+           }).then((WW => {
+             yW(WW, OW, EW)
+           })) : ZW ? iW(EW.pack.packageId, null) : YW((0, UW.e)(OW), EW)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L1088-L1090` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/230.js#L615) · [Before (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/230.js#L1088-L1090)

```diff
-   44655: (BB, OB, GB) => {
-     BB.exports = GB.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
-   }
+   35279: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/231.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/231.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/231.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/231.js#L4-L6)

```diff
-   44661: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       default: () => QB
+   35307: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => EW,
+       g: () => NW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L8-L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/231.js#L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/231.js#L8-L9)

```diff
-     var YB = GB(36856),
-       DB = GB.n(YB);
+     var mW = OW(4431);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L12` → after: `L12-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L12-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/231.js#L12-L27) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/231.js#L12)

```diff
-       return DB()('/*! For license information please see gw4e3a.procGen.worker.8cc73300.worker.js.LICENSE.txt */\n(()=>{var BB={62:BB=>{const OB="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,GB=()=>OB.now(),YB=BB=>BB===1/0||(BB= … [truncated]
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const WW = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const iW = new BroadcastChannel(mW.m);
+         iW.postMessage({
+           stored: WW
+         }), iW.close()
+       } catch {
+         return null
+       }
+       return WW
+     }
+ 
+     function NW(WW) {
+       const iW = "object" === typeof WW && null !== WW ? WW.stored : null;
+       return "string" === typeof iW ? iW : null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L15-L18` → after: `L30-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L30-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/231.js#L30-L287) · [Before (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/231.js#L15-L18)

```diff
-   36856: BB => {
-     BB.exports = function(BB, OB, GB, YB) {
-       var DB = self || window;
-       try {
+   35303: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW,
+       e: () => EW,
+       h: () => NW
+     });
+     var mW = OW(4431);
+     async function EW(WW, iW, OW) {
+       let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
+       const NW = PW(await WW.getItem(mW.h, iW));
+       if (null === NW || EW()) return null;
+       const LW = await WW.getItem(mW.l, iW);
+       return EW() ? null : (await async function(WW) {
+         await Promise.all([WW.removeItem(mW.h), WW.removeItem(mW.l)])
+       }(WW).catch(OW), {
+         pack: NW,
+ ... (242 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L20` → after: `L289-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L289-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/231.js#L289-L389) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/231.js#L20)

```diff
-           var QB;
+           OW = await this.host.store.getItem(PW.d, !0)
+         } catch (EW) {
+           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", EW)
+         }
+         if (this.JA || this.ownChanges !== iW) return;
+         const mW = UW(OW);
+         (0, xW.c)(mW, this.playerPack) || (this.ownChanges++, this.setOwn(mW), this.onGamePack || this.change({
+           pack: mW,
+           gameSource: null
+         }, !1))
+       }
+       joinedWithout() {
+         this.picks++
+       }
+       dispose() {
+         this.JA = !0, this.listeners.clear()
+ ... (85 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L22` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/231.js#L391) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/231.js#L22)

```diff
-             QB = new DB.Blob([BB])
+             WW(this.state)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L24` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/231.js#L393) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/231.js#L24)

```diff
-             (QB = new(DB.BlobBuilder || DB.WebKitBlobBuilder || DB.MozBlobBuilder || DB.MSBlobBuilder)).append(BB), QB = QB.getBlob()
+             this.host.warn("a texture pack listener threw", iW)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/232.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/232.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/232.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/232.js#L4)

```diff
-   44682: (BB, OB, GB) => {
+   35316: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/232.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/232.js#L6)

```diff
-       default: () => QB
+       packDisplayName: () => bW,
+       packModelMessage: () => jW,
+       packModelSummary: () => kW,
+       refusedPackModels: () => UW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L8-L9` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/232.js#L11-L18) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/232.js#L8-L9)

```diff
-     var YB = GB(36856),
-       DB = GB.n(YB);
+     var mW = OW(35324),
+       EW = OW(35330);
+     const NW = "DRACO",
+       PW = 0,
+       LW = 1,
+       cW = 0,
+       wW = 1,
+       tW = 32768;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L11-L17` → after: `L20-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L20-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/232.js#L20-L39) · [Before (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/232.js#L11-L17)

```diff
-     function QB() {
-       return DB()('(()=>{var BB={13:(BB,OB,GB)=>{BB.exports=GB.p+"static/media/bloxd_wasm_bg.2d869609fdbc6beb838a.wasm"},15:(BB,OB,GB)=>{BB.exports=GB.p+"static/media/bloxd_wasm_textures_bg.a539253ec85e302f100c.wasm"},9:(BB,OB,GB)=>{BB.exports=GB.p+"static/media/zstdDecodeWorker. … [truncated]
-     }
-   },
-   36856: BB => {
-     BB.exports = function(BB, OB, GB, YB) {
-       var DB = self || window;
+     function ZW(WW) {
+       const iW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
+       let OW = 0;
+       const mW = () => {
+           if (OW >= WW.byteLength) throw new RangeError("past the stream");
+           return WW[OW++]
+         },
+         EW = () => {
+           if (OW + 4 > WW.byteLength) throw new RangeError("past the stream");
+           const mW = iW.getUint32(OW, !0);
+           return OW += 4, mW
+         },
+         ZW = () => {
+           let WW = 0;
+           for (let iW = 0; iW < 35; iW += 7) {
+             const OW = mW();
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L19-L24` → after: `L41-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L41-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/232.js#L41-L81) · [Before (L19-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/232.js#L19-L24)

```diff
-         try {
-           var QB;
-           try {
-             QB = new DB.Blob([BB])
-           } catch (JB) {
-             (QB = new(DB.BlobBuilder || DB.WebKitBlobBuilder || DB.MozBlobBuilder || DB.MSBlobBuilder)).append(BB), QB = QB.getBlob()
+         for (let WW = 0; WW < NW.length; WW++)
+           if (mW() !== NW.charCodeAt(WW)) return null;
+         const iW = mW(),
+           xW = mW(),
+           lW = mW(),
+           AW = mW(),
+           bW = mW() | mW() << 8;
+         if (2 !== iW) return null;
+         0 !== (bW & tW) && function(WW, iW, OW) {
+           const mW = () => {
+               iW(OW())
+             },
+             EW = () => {
+               let OW = 1,
+                 EW = !0;
+               for (; OW > 0;) {
+ ... (25 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L33-L35` → after: `L84-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L84-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/232.js#L84-L93) · [Before (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/232.js#L33-L35)

```diff
-       } catch (JB) {
-         if (!YB) throw Error("Inline worker is not supported");
-         return new DB[OB](YB, GB)
+         if (AW !== wW) return null;
+         mW(), xW < 2 && ZW();
+         const UW = ZW();
+         return {
+           faces: ZW(),
+           vertices: UW,
+           minor: xW
+         }
+       } catch {
+         return null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/233.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/233.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925)

#### 1. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L4-L19` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/233.js#L4) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/233.js#L4-L19)

```diff
-   36948: (BB, OB, GB) => {
-     function YB(BB, OB, GB) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(BB, OB).getContext("2d", GB);
-       const YB = document.createElement("canvas");
-       return YB.width = BB, YB.height = OB, YB.getContext("2d", GB)
-     }
- 
-     function DB(BB, OB) {
-       return BB.getContext("2d", OB)
-     }
-     GB.d(OB, {
-       e: () => DB,
-       f: () => YB
-     })
-   },
-   41812: (BB, OB, GB) => {
+   35324: (WW, iW, OW) => {
```
