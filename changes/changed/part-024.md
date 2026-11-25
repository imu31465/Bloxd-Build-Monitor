# Changed — Bundle Modifications Report (Part 024 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `24 / 56` (**415** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 023](part-023.md) · [Part 025 →](part-025.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (1002 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 116. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1160-L1163` → after: `L1470-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1470-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1470-L1473) · [Before (L1160-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1160-L1163)

```diff
-     var wG = ZG(8218),
-       SG = ZG(8222),
-       LG = ZG(8205),
-       yG = ZG(8241);
+     var OM = iM(8738),
+       SM = iM(8743),
+       jM = iM(8723),
+       aM = iM(8767);
```

#### 117. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1168` → after: `L1478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1478) · [Before (L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1168)

```diff
-         return null !== (ZG = GG[SG]) && void 0 !== ZG ? ZG : wG.f[SG]
+         return null !== (iM = MM[SM]) && void 0 !== iM ? iM : OM.c[SM]
```

#### 118. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1181-L1186` → after: `L1491-L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1491-L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1491-L1496) · [Before (L1181-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1181-L1186)

```diff
-       VG = (GG, bG) => null !== GG && void 0 !== GG ? GG : "nintendo" === bG,
-       pG = GG => VG((0, SG.i)().swapConfirmBack, (0, SG.m)()) && YG.get(GG) || GG,
-       fG = GG => UG((0, SG.i)().bindings, pG(GG)),
-       QG = GG => wG.f[pG(GG)],
-       KG = Object.keys(wG.f),
-       hG = GG => "gameplay" === (0, wG.l)(GG) ? ["gameplay"] : (0, wG.j)(GG),
+       zM = (MM, rM) => null !== MM && void 0 !== MM ? MM : "nintendo" === rM,
+       LM = MM => zM((0, SM.j)().swapConfirmBack, (0, SM.l)()) && QM.get(MM) || MM,
+       mM = MM => nM((0, SM.j)().bindings, LM(MM)),
+       HM = MM => OM.c[LM(MM)],
+       hM = Object.keys(OM.c),
+       JM = MM => "gameplay" === (0, OM.f)(MM) ? ["gameplay"] : (0, OM.e)(MM),
```

#### 119. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1193` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1503) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1193)

```diff
-           yG = new Set((0, wG.n)(bG)),
+           aM = new Set((0, OM.h)(rM)),
```

#### 120. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1204-L1206` → after: `L1514-L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1514-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1514-L1516) · [Before (L1204-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1204-L1206)

```diff
-           const bG = UG(GG, pG) === SG ? ZG : SG,
-             yG = (0, wG.j)(pG).some((GG => wG.i.has(GG)));
-           if ((0, LG.B)(bG) && yG) return null;
+           const rM = nM(MM, LM) === SM ? iM : SM,
+             aM = (0, OM.e)(LM).some((MM => OM.d.has(MM)));
+           if ((0, jM.G)(rM) && aM) return null;
```

#### 121. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1209` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1519) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1209)

```diff
-         for (const LG of Object.keys(VG)) VG[LG] === wG.f[LG] && delete VG[LG];
+         for (const jM of Object.keys(zM)) zM[jM] === OM.c[jM] && delete zM[jM];
```

#### 122. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1212` → after: `L1522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1522) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1212)

```diff
-       rG = (GG, bG) => null !== JG((0, SG.i)().bindings, pG(GG), bG),
+       lM = (MM, rM) => null !== yM((0, SM.j)().bindings, LM(MM), rM),
```

#### 123. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1215-L1216` → after: `L1525-L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1525-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1525-L1526) · [Before (L1215-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1215-L1216)

```diff
-         const ZG = JG((0, SG.i)().bindings, pG(GG), bG);
-         return !!ZG && ((0, SG.q)({
+         const iM = yM((0, SM.j)().bindings, LM(MM), rM);
+         return !!iM && ((0, SM.p)({
```

#### 124. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1221` → after: `L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1531) · [Before (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1221)

```diff
-         const ZG = (0, wG.n)(bG);
+         const iM = (0, OM.h)(rM);
```

#### 125. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1238` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1548) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1238)

```diff
-         const ZG = (0, SG.i)();
+         const iM = (0, SM.j)();
```

#### 126. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1241` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1551) · [Before (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1241)

```diff
-           const ZG = bG ? XG[GG][SG] : wG.f[SG];
+           const iM = rM ? CM[MM][SM] : OM.c[SM];
```

#### 127. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1244-L1245` → after: `L1554-L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1554-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1554-L1555) · [Before (L1244-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1244-L1245)

```diff
-         return (0, SG.q)({
-           swapSticks: "southpaw" === GG ? bG : ZG.swapSticks,
+         return (0, SM.p)({
+           swapSticks: "southpaw" === MM ? rM : iM.swapSticks,
```

#### 128. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1250` → after: `L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1560) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1250)

```diff
-         (0, SG.q)({
+         (0, SM.p)({
```

#### 129. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1255-L1257` → after: `L1565-L1567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1565-L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1565-L1567) · [Before (L1255-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1255-L1257)

```diff
-       mG = () => (0, SG.i)().swapSticks ? "RightStick" : "LeftStick",
-       IG = () => (0, SG.i)().swapSticks ? "LeftStick" : "RightStick",
-       FG = GG => (0, SG.i)().swapSticks && (0, LG.B)(GG),
+       gM = () => (0, SM.j)().swapSticks ? "RightStick" : "LeftStick",
+       uM = () => (0, SM.j)().swapSticks ? "LeftStick" : "RightStick",
+       RM = MM => (0, SM.j)().swapSticks && (0, jM.G)(MM),
```

#### 130. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1260-L1262` → after: `L1570-L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1570-L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1570-L1572) · [Before (L1260-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1260-L1262)

```diff
-         if (wG.u.has(GG)) return mG();
-         const bG = wG.s[GG];
-         return bG && ("leaderboard" !== bG || (0, yG.e)(GG, (0, yG.c)())) ? fG(bG) : null
+         if (OM.l.has(MM)) return gM();
+         const rM = OM.k[MM];
+         return rM && ("leaderboard" !== rM || (0, aM.g)(MM, (0, aM.d)())) ? mM(rM) : null
```

#### 131. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1265` → after: `L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1575) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1265)

```diff
-   8200: (GG, bG, ZG) => {
+   8710: (MM, rM, iM) => {
```

#### 132. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1274-L1276` → after: `L1584-L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1584-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1584-L1586) · [Before (L1274-L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1274-L1276)

```diff
-       getBoundButton: () => VG.j,
-       getControllerSettings: () => fG.i,
-       getGlyphForNoaAction: () => VG.l,
+       getBoundButton: () => zM.m,
+       getControllerSettings: () => mM.j,
+       getGlyphForNoaAction: () => zM.s,
```

#### 133. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1287-L1291` → after: `L1597-L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1597-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1597-L1600) · [Before (L1287-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1287-L1291)

```diff
-     var SG = ZG(1151),
-       LG = ZG(1359),
-       yG = ZG(8202),
-       kG = ZG(59),
-       UG = ZG(17),
+     var SM = iM(1188),
+       jM = iM(1474),
+       aM = iM(8717),
+       PM = iM(65),
```

#### 134. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1293-L1300` → after: `L1602-L1610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1602-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1602-L1610) · [Before (L1293-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1293-L1300)

```diff
-       VG = ZG(8214),
-       pG = ZG(8248),
-       fG = ZG(8222),
-       QG = ZG(8250),
-       KG = ZG(8205),
-       hG = ZG(8707),
-       dG = ZG(8710),
-       JG = ZG(1606);
+       QM = iM(22),
+       zM = iM(8731),
+       LM = iM(8776),
+       mM = iM(8743),
+       HM = iM(8785),
+       hM = iM(8723),
+       JM = iM(9259),
+       dM = iM(9264),
+       yM = iM(1750);
```

#### 135. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1404` → after: `L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1714) · [Before (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1404)

```diff
-         for (let LG = GG instanceof HTMLElement ? GG : null !== (wG = null === GG || void 0 === GG ? void 0 : GG.parentElement) && void 0 !== wG ? wG : null; LG; LG = LG.parentElement) {
+         for (let jM = MM instanceof HTMLElement ? MM : null !== (OM = null === MM || void 0 === MM ? void 0 : MM.parentElement) && void 0 !== OM ? OM : null; jM; jM = jM.parentElement) {
```

#### 136. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1411` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1721) · [Before (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1411)

```diff
-         return SG instanceof HTMLElement && CG(SG, bG) ? SG : null
+         return SM instanceof HTMLElement && wM(SM, rM) ? SM : null
```

#### 137. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1426` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1736) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1426)

```diff
-         let ZG = WG(GG, bG) ? GG : null,
+         let iM = tM(MM, rM) ? MM : null,
```

#### 138. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1452-L1453` → after: `L1762-L1763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1762-L1763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1762-L1763) · [Before (L1452-L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1452-L1453)

```diff
-     var PG = ZG(51),
-       MG = ZG(1006),
+     var ZM = iM(44),
+       oM = iM(1116),
```

#### 139. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1455` → after: `L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1765) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1455)

```diff
-       sG = ZG(1067);
+       YM = iM(1303);
```

#### 140. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1469` → after: `L1779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1779) · [Before (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1469)

```diff
-           wG = ZG ? `${ZG.left},${ZG.top},${ZG.width},${ZG.height}` : "";
+           OM = iM ? `${iM.left},${iM.top},${iM.width},${iM.height}` : "";
```

#### 141. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1472` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1782) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1472)

```diff
-         this.shownKey = wG, bG.classList.toggle("Visible", null !== ZG), ZG && (bG.classList.toggle("Snap", SG), bG.style.width = `${ZG.width}px`, bG.style.height = `${ZG.height}px`, bG.style.transform = `translate(${ZG.left}px, ${ZG.top}px)`, SG && (bG.offsetWidth, bG.classList. … [truncated]
+         this.shownKey = OM, rM.classList.toggle("Visible", null !== iM), iM && (rM.classList.toggle("Snap", SM), rM.style.width = `${iM.width}px`, rM.style.height = `${iM.height}px`, rM.style.transform = `translate(${iM.left}px, ${iM.top}px)`, SM && (rM.offsetWidth, rM.classList. … [truncated]
```

#### 142. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1479` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1789) · [Before (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1479)

```diff
-         const wG = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!nG){nG=!0;const GG=document.createElement("div");GG.setAttribute("aria-hidden","true"),GG.style.cssText="po … [truncated]
+         const OM = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!AM){AM=!0;const MM=document.createElement("div");MM.setAttribute("aria-hidden","true"),MM.style.cssText="po … [truncated]
```

#### 143. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1489` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1799) · [Before (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1489)

```diff
-         return kG <= LG || UG <= yG ? bG : {
+         return PM <= jM || nM <= aM ? rM : {
```

#### 144. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1511` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1821) · [Before (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1511)

```diff
-     var RG = ZG(8715);
+     var FM = iM(9271);
```

#### 145. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1541` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1851) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1541)

```diff
-     var tG = ZG(8723);
+     var IM = iM(9287);
```

#### 146. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1645-L1646` → after: `L1955-L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1955-L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L1955-L1956) · [Before (L1645-L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1645-L1646)

```diff
-     var OG = ZG(8728),
-       xG = ZG(8726);
+     var TM = iM(9293),
+       VM = iM(2508);
```

#### 147. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1743` → after: `L2053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2053) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1743)

```diff
-         return null !== SG && void 0 !== SG ? SG : wG
+         return null !== SM && void 0 !== SM ? SM : OM
```

#### 148. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1818` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2128) · [Before (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1818)

```diff
-       Wb = GG => GG.hasAttribute("data-inven-idx") ? "slot" : GG.hasAttribute("data-recipe-key") ? "recipe" : GG.hasAttribute("data-craft-ingredient") || (0, xG.s)(GG) ? "info" : (0, RG.L)(GG) ? "textField" : "button",
+       tr = MM => MM.hasAttribute("data-inven-idx") ? "slot" : MM.hasAttribute("data-recipe-key") ? "recipe" : MM.hasAttribute("data-craft-ingredient") || (0, VM.s)(MM) ? "info" : (0, FM.F)(MM) ? "textField" : "button",
```

#### 149. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1825` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2135) · [Before (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1825)

```diff
-           recipe: null !== (bG = GG && (null === (ZG = Ib(GG)) || void 0 === ZG ? void 0 : ZG.getAttribute("data-recipe-key"))) && void 0 !== bG ? bG : null
+           recipe: null !== (rM = MM && (null === (iM = ur(MM)) || void 0 === iM ? void 0 : iM.getAttribute("data-recipe-key"))) && void 0 !== rM ? rM : null
```

#### 150. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1881` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2191) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1881)

```diff
-           JG = null !== (rG = kG.get(GG)) && void 0 !== rG ? rG : null, JG || (JG = {
+           yM = null !== (lM = PM.get(MM)) && void 0 !== lM ? lM : null, yM || (yM = {
```

#### 151. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1902` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2212) · [Before (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1902)

```diff
-             scrollGroup: null !== (EG = null === dG || void 0 === dG ? void 0 : dG.group) && void 0 !== EG ? EG : null,
+             scrollGroup: null !== (UM = null === dM || void 0 === dM ? void 0 : dM.group) && void 0 !== UM ? UM : null,
```

#### 152. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1904` → after: `L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2214) · [Before (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1904)

```diff
-             clip: null !== (oG = null === dG || void 0 === dG ? void 0 : dG.box) && void 0 !== oG ? oG : null,
+             clip: null !== (GM = null === dM || void 0 === dM ? void 0 : dM.box) && void 0 !== GM ? GM : null,
```

#### 153. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1908` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2218) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1908)

```diff
-             scrollContainer: null !== (XG = null === dG || void 0 === dG ? void 0 : dG.container) && void 0 !== XG ? XG : null
+             scrollContainer: null !== (CM = null === dM || void 0 === dM ? void 0 : dM.container) && void 0 !== CM ? CM : null
```

#### 154. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1936` → after: `L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2246) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1936)

```diff
-         return null !== (GG = null === (bG = this.latched) || void 0 === bG ? void 0 : bG.hold) && void 0 !== GG ? GG : null
+         return null !== (MM = null === (rM = this.latched) || void 0 === rM ? void 0 : rM.hold) && void 0 !== MM ? MM : null
```

#### 155. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1942` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2252) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1942)

```diff
-     var Ab = ZG(8732);
+     var fr = iM(9301);
```

#### 156. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1966` → after: `L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2276) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1966)

```diff
-           yG = `${SG}|${Math.round(wG.clientX)},${Math.round(wG.clientY)}`,
+           aM = `${SM}|${Math.round(OM.clientX)},${Math.round(OM.clientY)}`,
```

#### 157. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1974` → after: `L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2284) · [Before (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1974)

```diff
-         if (kG) return void("element" === LG.kind ? (0, RG.o)(LG.element, LG.element, qb(wG)) : GG.hover(null, wG));
+         if (PM) return void("element" === jM.kind ? (0, FM.t)(jM.element, jM.element, Nr(OM)) : MM.hover(null, OM));
```

#### 158. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1977` → after: `L2287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2287) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1977)

```diff
-         "element" === pG.kind ? (0, RG.o)(pG.element, fG, qb(wG)) : fG && (0, RG.o)(null, fG, qb(wG))
+         "element" === LM.kind ? (0, FM.t)(LM.element, mM, Nr(OM)) : mM && (0, FM.t)(null, mM, Nr(OM))
```

#### 159. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1987` → after: `L2297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2297) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L1987)

```diff
-         "element" === GG.kind && (0, RG.o)(GG.element, bG, qb(ZG))
+         "element" === MM.kind && (0, FM.t)(MM.element, rM, Nr(iM))
```

#### 160. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2026` → after: `L2336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2336) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2026)

```diff
-     var Tb = ZG(8736);
+     var Br = iM(9310);
```

#### 161. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2059` → after: `L2369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2369) · [Before (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2059)

```diff
-         return GG = (0, VG.j)("inventory"), !Bb.map(VG.j).includes(GG) && !(0, KG.B)(GG);
+         return MM = (0, zM.m)("inventory"), !cr.map(zM.m).includes(MM) && !(0, hM.G)(MM);
```

#### 162. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2106` → after: `L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2416) · [Before (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2106)

```diff
-               for (const ZG of pG.querySelectorAll(`${Xb}:first-child`)) {
+               for (const iM of LM.querySelectorAll(`${Cr}:first-child`)) {
```

#### 163. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2124` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2434) · [Before (L2124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2124)

```diff
-                   JG = dG && !SG.has(dG.container) ? dG : null;
+                   yM = dM && !SM.has(dM.container) ? dM : null;
```

#### 164. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2129` → after: `L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2439) · [Before (L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2129)

```diff
-                   scrollGroup: null !== (kG = null === JG || void 0 === JG ? void 0 : JG.group) && void 0 !== kG ? kG : null,
+                   scrollGroup: null !== (PM = null === yM || void 0 === yM ? void 0 : yM.group) && void 0 !== PM ? PM : null,
```

#### 165. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2131` → after: `L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2441) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2131)

```diff
-                   clip: null !== (UG = null === JG || void 0 === JG ? void 0 : JG.box) && void 0 !== UG ? UG : null,
+                   clip: null !== (nM = null === yM || void 0 === yM ? void 0 : yM.box) && void 0 !== nM ? nM : null,
```

#### 166. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2135` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2445) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2135)

```diff
-                   scrollContainer: null !== (YG = null === JG || void 0 === JG ? void 0 : JG.container) && void 0 !== YG ? YG : null
+                   scrollContainer: null !== (QM = null === yM || void 0 === yM ? void 0 : yM.container) && void 0 !== QM ? QM : null
```

#### 167. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2183-L2184` → after: `L2493-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2493-L2494) · [Before (L2183-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2183-L2184)

```diff
-           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(KG.z.map((GG => [GG, (0, hG.d)(KG.A)]))), this.stickRepeat = new KG.d((0, hG.d)(KG.cb)), this.pageUpTimer = (0, hG.d)(KG. … [truncated]
-             this.endInteraction((0, OG.e)()), (0, OG.i)() || this.forgetSurface()
+           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(hM.A.map((MM => [MM, (0, JM.d)(hM.C)]))), this.stickRepeat = new hM.b((0, JM.d)(hM.eb)), this.pageUpTimer = (0, JM.d)(hM. … [truncated]
+             this.endInteraction((0, TM.h)()), (0, TM.i)() || this.forgetSurface()
```

#### 168. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2187` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2497) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2187)

```diff
-             this.reopenSlotIdx = null !== (GG = this.focused ? vb(this.focused).idx : null) && void 0 !== GG ? GG : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, OG.t)(), this.panelMemory.clear(), this. … [truncated]
+             this.reopenSlotIdx = null !== (MM = this.focused ? pr(this.focused).idx : null) && void 0 !== MM ? MM : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, TM.t)(), this.panelMemory.clear(), this. … [truncated]
```

#### 169. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2192-L2193` → after: `L2502-L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2502-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2502-L2503) · [Before (L2192-L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2192-L2193)

```diff
-           }, this.shouldBlockRealPointer = GG => GG.isTrusted && !(0, JG.r)(GG) && this.isShowing(), this.noteRealPointer = GG => {
-             GG instanceof MouseEvent && GG.isTrusted && !(0, JG.r)(GG) && (this.lastRealPointer ??= {
+           }, this.shouldBlockRealPointer = MM => MM.isTrusted && !(0, yM.s)(MM) && this.isShowing(), this.noteRealPointer = MM => {
+             MM instanceof MouseEvent && MM.isTrusted && !(0, yM.s)(MM) && (this.lastRealPointer ??= {
```

#### 170. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2199` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2509) · [Before (L2199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2199)

```diff
-             return GG === (0, VG.j)("inventoryClose") ? !(null !== (bG = (0, OG.e)()) && void 0 !== bG && bG.isHolding()) : !(GG !== (0, VG.j)("inventory") || !GZ()) || ((0, KG.B)(GG) ? this.isNavButton(GG) : xb.some((bG => (0, VG.j)(bG) === GG)))
+             return MM === (0, zM.m)("inventoryClose") ? !(null !== (rM = (0, TM.h)()) && void 0 !== rM && rM.isHolding()) : !(MM !== (0, zM.m)("inventory") || !Mi()) || ((0, hM.G)(MM) ? this.isNavButton(MM) : Vr.some((rM => (0, zM.m)(rM) === MM)))
```

#### 171. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2204-L2206` → after: `L2514-L2516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2514-L2516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2514-L2516) · [Before (L2204-L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2204-L2206)

```diff
-           const yG = (0, OG.e)();
-           if (!(0, QG.l)()) return void(this.wasShowing && (this.endInteraction(yG), this.rehoverRealPointer()));
-           this.wasShowing = !0, this.applyFocusRequest(), GG.wokeDevice && this.focusWakePointer(!(null === yG || void 0 === yG || !yG.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, fG.i)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
+           const aM = (0, TM.h)();
+           if (!(0, HM.g)()) return void(this.wasShowing && (this.endInteraction(aM), this.rehoverRealPointer()));
+           this.wasShowing = !0, this.applyFocusRequest(), MM.wokeDevice && this.focusWakePointer(!(null === aM || void 0 === aM || !aM.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, mM.j)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
```

#### 172. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2213` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2523) · [Before (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2213)

```diff
-             KG = null !== (bG = null === (ZG = YG.actionElement) || void 0 === ZG ? void 0 : ZG.querySelector(".DoCraftItem")) && void 0 !== bG ? bG : YG.actionElement;
+             hM = null !== (rM = null === (iM = QM.actionElement) || void 0 === iM ? void 0 : iM.querySelector(".DoCraftItem")) && void 0 !== rM ? rM : QM.actionElement;
```

#### 173. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2224` → after: `L2534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2534) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2224)

```diff
-             pressed: GG.isHeld((0, VG.j)("inventoryPrimary"))
+             pressed: MM.isHeld((0, zM.m)("inventoryPrimary"))
```

#### 174. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2240` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2550) · [Before (L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2240)

```diff
-             pressHints: null !== (wG = null === (SG = YG.press) || void 0 === SG ? void 0 : SG.hints) && void 0 !== wG ? wG : null,
+             pressHints: null !== (OM = null === (SM = QM.press) || void 0 === SM ? void 0 : SM.hints) && void 0 !== OM ? OM : null,
```

#### 175. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2256` → after: `L2566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2566) · [Before (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2256)

```diff
-           this.setFocus(null !== (bG = rb(ZG, wG)) && void 0 !== bG ? bG : GG ? hb(ZG, wG, (GG => {
+           this.setFocus(null !== (rM = lr(iM, OM)) && void 0 !== rM ? rM : MM ? Jr(iM, OM, (MM => {
```

#### 176. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2263` → after: `L2573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2573) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2263)

```diff
-           })) : null, !1), "cursor" === (0, fG.i)().inventoryNavigation && (this.pointer = {
+           })) : null, !1), "cursor" === (0, mM.j)().inventoryNavigation && (this.pointer = {
```

#### 177. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2271` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2581) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2271)

```diff
-           if (!GG || "keyboardMouse" !== UG.e.get("activeInputDevice")) return;
+           if (!MM || "keyboardMouse" !== nM.d.get("activeInputDevice")) return;
```

#### 178. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2273` → after: `L2583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2583) · [Before (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2273)

```diff
-           bG && (0, RG.o)(null, bG, GG)
+           rM && (0, FM.t)(null, rM, MM)
```

#### 179. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2278` → after: `L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2588) · [Before (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2278)

```diff
-           this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(GG), this.ring.hide(), this.releasePointer(), this.publishState(Ab.d)
+           this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(MM), this.ring.hide(), this.releasePointer(), this.publishState(fr.e)
```

#### 180. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2286` → after: `L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2596) · [Before (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2286)

```diff
-           return this.focused && null !== (GG = this.getTargets().byElement.get(this.focused)) && void 0 !== GG ? GG : null
+           return this.focused && null !== (MM = this.getTargets().byElement.get(this.focused)) && void 0 !== MM ? MM : null
```

#### 181. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2314` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2624) · [Before (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2314)

```diff
-               })(bG, (0, OG.e)()),
+               })(rM, (0, TM.h)()),
```

#### 182. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2317` → after: `L2627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2627) · [Before (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2317)

```diff
-             SG = null !== GG || void 0 !== kG, wG = null !== (LG = null !== (yG = null !== GG && void 0 !== GG ? GG : kG) && void 0 !== yG ? yG : UG && ZG.get(UG)) && void 0 !== LG ? LG : zb(bG)
+             SM = null !== MM || void 0 !== PM, OM = null !== (jM = null !== (aM = null !== MM && void 0 !== MM ? MM : PM) && void 0 !== aM ? aM : nM && iM.get(nM)) && void 0 !== jM ? jM : Er(rM)
```

#### 183. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2332` → after: `L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2642) · [Before (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2332)

```diff
-             if ("cursor" === (0, fG.i)().inventoryNavigation) {
+             if ("cursor" === (0, mM.j)().inventoryNavigation) {
```

#### 184. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2360` → after: `L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2670) · [Before (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2360)

```diff
-           this.focusTarget = bG, (null === bG || void 0 === bG ? void 0 : bG.element) !== this.focused && (this.focused = null !== (GG = null === bG || void 0 === bG ? void 0 : bG.element) && void 0 !== GG ? GG : null, bG && (this.panelMemory.set(bG.panel, bG.element), this.lastR … [truncated]
+           this.focusTarget = rM, (null === rM || void 0 === rM ? void 0 : rM.element) !== this.focused && (this.focused = null !== (MM = null === rM || void 0 === rM ? void 0 : rM.element) && void 0 !== MM ? MM : null, rM && (this.panelMemory.set(rM.panel, rM.element), this.lastR … [truncated]
```

#### 185. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2364` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2674) · [Before (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2364)

```diff
-             wG = ZG && (0, fG.i)().cursorMagnetism ? kb(db(ZG)) : null;
+             OM = iM && (0, mM.j)().cursorMagnetism ? Pr(dr(iM)) : null;
```

#### 186. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2367` → after: `L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2677) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2367)

```diff
-             moveDeadzone: (0, fG.i)().moveDeadzone,
+             moveDeadzone: (0, mM.j)().moveDeadzone,
```

#### 187. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2370` → after: `L2680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2680) · [Before (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2370)

```diff
-             cursorSpeedPercent: (0, fG.i)().cursorSpeed,
+             cursorSpeedPercent: (0, mM.j)().cursorSpeed,
```

#### 188. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2403` → after: `L2713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2713) · [Before (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2403)

```diff
-             return null !== (wG = Kb(SG, bG, ZG)) && void 0 !== wG ? wG : hb(GG, bG)
+             return null !== (OM = hr(SM, rM, iM)) && void 0 !== OM ? OM : Jr(MM, rM)
```

#### 189. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2408` → after: `L2718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2718) · [Before (L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2408)

```diff
-           return !Ob.some((bG => (0, VG.j)(bG) === GG)) && !(GG === (0, VG.j)("inventory") && GZ())
+           return !Tr.some((rM => (0, zM.m)(rM) === MM)) && !(MM === (0, zM.m)("inventory") && Mi())
```

#### 190. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2411` → after: `L2721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2721) · [Before (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2411)

```diff
-           const ZG = (0, fG.i)().inventoryNavigation,
+           const iM = (0, mM.j)().inventoryNavigation,
```

#### 191. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2417` → after: `L2727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2727) · [Before (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2417)

```diff
-           for (const UG of KG.z) {
+           for (const nM of hM.A) {
```

#### 192. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2421` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2731) · [Before (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2421)

```diff
-           const LG = this.stickGate.update(GG.leftStick, (0, fG.i)().moveDeadzone);
+           const jM = this.stickGate.update(MM.leftStick, (0, mM.j)().moveDeadzone);
```

#### 193. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2423-L2424` → after: `L2733-L2734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2733-L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2733-L2734) · [Before (L2423-L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2423-L2424)

```diff
-             const bG = ((GG, bG, ZG, wG) => "hybrid" !== GG ? "cursor" === GG : !wG && (bG || ZG))(ZG, null !== this.pointer, LG, null !== SG);
-             return bG && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(GG, "cursor" === ZG ? wG : {
+             const rM = ((MM, rM, iM, OM) => "hybrid" !== MM ? "cursor" === MM : !OM && (rM || iM))(iM, null !== this.pointer, jM, null !== SM);
+             return rM && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(MM, "cursor" === iM ? OM : {
```

#### 194. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2429-L2430` → after: `L2739-L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2739-L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2739-L2740) · [Before (L2429-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2429-L2430)

```diff
-           const yG = (0, KG.i)(GG.leftStick, (0, fG.i)().moveDeadzone),
-             kG = this.stickRepeat.update(LG ? (0, KG.gb)(yG) : null, bG);
+           const aM = (0, hM.i)(MM.leftStick, (0, mM.j)().moveDeadzone),
+             PM = this.stickRepeat.update(jM ? (0, hM.hb)(aM) : null, rM);
```

#### 195. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2442` → after: `L2752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2752) · [Before (L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2442)

```diff
-           GG && (this.targets.invalidate(), this.setFocus((0, OG.c)(this.getTargets().targets, GG)))
+           MM && (this.targets.invalidate(), this.setFocus((0, TM.e)(this.getTargets().targets, MM)))
```

#### 196. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2446-L2447` → after: `L2756-L2757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2756-L2757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2756-L2757) · [Before (L2446-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2446-L2447)

```diff
-           const SG = GG.wasPressed((0, VG.j)("inventoryPanelPrevious")),
-             LG = GG.wasPressed((0, VG.j)("inventoryPanelNext"));
+           const SM = MM.wasPressed((0, zM.m)("inventoryPanelPrevious")),
+             jM = MM.wasPressed((0, zM.m)("inventoryPanelNext"));
```

#### 197. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2459` → after: `L2769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2769) · [Before (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2459)

```diff
-           })(yG, Cb), YG = null !== (bG = null === (ZG = this.focusTarget) || void 0 === ZG ? void 0 : ZG.panel) && void 0 !== bG ? bG : null, pG = LG ? 1 : -1, 0 === UG.length ? null : UG[Ub(null === YG ? -1 : UG.indexOf(YG), UG.length, pG)]);
+           })(aM, wr), QM = null !== (rM = null === (iM = this.focusTarget) || void 0 === iM ? void 0 : iM.panel) && void 0 !== rM ? rM : null, LM = jM ? 1 : -1, 0 === nM.length ? null : nM[nr(null === QM ? -1 : nM.indexOf(QM), nM.length, LM)]);
```

#### 198. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2464` → after: `L2774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2774) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2464)

```diff
-             KG = null !== (wG = QG.find((GG => GG.element === fG && GG.visible))) && void 0 !== wG ? wG : ZZ(QG, (0, OG.e)());
+             hM = null !== (OM = HM.find((MM => MM.element === mM && MM.visible))) && void 0 !== OM ? OM : ii(HM, (0, TM.h)());
```

#### 199. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2468-L2469` → after: `L2778-L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2778-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2778-L2779) · [Before (L2468-L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2468-L2469)

```diff
-           const ZG = (0, VG.j)("menuPageUp"),
-             wG = (0, VG.j)("menuPageDown"),
+           const iM = (0, zM.m)("menuPageUp"),
+             OM = (0, zM.m)("menuPageDown"),
```

#### 200. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2474` → after: `L2784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2784) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2474)

```diff
-           if (!GG.wasPressed(LG ? wG : ZG) && this.hasCategories) return;
+           if (!MM.wasPressed(jM ? OM : iM) && this.hasCategories) return;
```

#### 201. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2480` → after: `L2790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2790) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2480)

```diff
-               return (0, RG.n)(wG, (0, RG.y)(wG)), !0
+               return (0, FM.q)(OM, (0, FM.z)(OM)), !0
```

#### 202. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2484` → after: `L2794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2794) · [Before (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2484)

```diff
-             const GG = null !== (kG = null === (UG = this.focusTarget) || void 0 === UG ? void 0 : UG.scrollGroup) && void 0 !== kG ? kG : null,
+             const MM = null !== (PM = null === (nM = this.focusTarget) || void 0 === nM ? void 0 : nM.scrollGroup) && void 0 !== PM ? PM : null,
```

#### 203. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2493` → after: `L2803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2803) · [Before (L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2493)

```diff
-           } = this.getTargets(), pG = this.currentTarget(), fG = pG && Pb(pG) ? pG : YG.find((GG => Pb(GG) && GG.visible));
+           } = this.getTargets(), LM = this.currentTarget(), mM = LM && Zr(LM) ? LM : QM.find((MM => Zr(MM) && MM.visible));
```

#### 204. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2499` → after: `L2809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2809) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2499)

```diff
-               yG = SG.y + ("Down" === ZG ? wG : -wG);
+               aM = SM.y + ("Down" === iM ? OM : -OM);
```

#### 205. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2511` → after: `L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2821) · [Before (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2511)

```diff
-           this.setFocus(null !== QG && void 0 !== QG ? QG : fG)
+           this.setFocus(null !== HM && void 0 !== HM ? HM : mM)
```

#### 206. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2518` → after: `L2828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2828) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2518)

```diff
-           } = this.getTargets(), UG = this.pointer, YG = !UG && this.focusTarget && Pb(this.focusTarget) ? this.focusTarget.scrollContainer : null, VG = UG && (null === (bG = kG.find((GG => GG.clip && Jb(GG.clip, UG)))) || void 0 === bG ? void 0 : bG.scrollContainer), pG = null ! … [truncated]
+           } = this.getTargets(), nM = this.pointer, QM = !nM && this.focusTarget && Zr(this.focusTarget) ? this.focusTarget.scrollContainer : null, zM = nM && (null === (rM = PM.find((MM => MM.clip && yr(MM.clip, nM)))) || void 0 === rM ? void 0 : rM.scrollContainer), LM = null ! … [truncated]
```

#### 207. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2538` → after: `L2848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2848) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2538)

```diff
-           }, wG = this.focused ? Ib(this.focused) : null, SG = wG ? (0, Tb.e)(wG) : null;
+           }, OM = this.focused ? ur(this.focused) : null, SM = OM ? (0, Br.b)(OM) : null;
```

#### 208. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2554` → after: `L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2864) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2554)

```diff
-               const LG = (0, VG.j)(SG);
+               const jM = (0, zM.m)(SM);
```

#### 209. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2567-L2568` → after: `L2877-L2878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2877-L2878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2877-L2878) · [Before (L2567-L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2567-L2568)

```diff
-           const wG = GG.wasPressed((0, VG.j)("inventoryPrimary")) || GG.wasPressed((0, VG.j)("inventoryHotbarSwap"));
-           if (!wG && !GG.wasPressed((0, VG.j)("inventoryClose")) && !bG.isHolding()) return !(GG.wasPressed((0, VG.j)("inventory")) && GZ());
+           const OM = MM.wasPressed((0, zM.m)("inventoryPrimary")) || MM.wasPressed((0, zM.m)("inventoryHotbarSwap"));
+           if (!OM && !MM.wasPressed((0, zM.m)("inventoryClose")) && !rM.isHolding()) return !(MM.wasPressed((0, zM.m)("inventory")) && Mi());
```

#### 210. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2579` → after: `L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2889) · [Before (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2579)

```diff
-           } = this.getTargets(), SG = document.querySelector(tb), LG = null !== (bG = SG && wG.get(SG)) && void 0 !== bG ? bG : ZG.find((GG => "hotbar" === GG.panel));
+           } = this.getTargets(), SM = document.querySelector(Ir), jM = null !== (rM = SM && OM.get(SM)) && void 0 !== rM ? rM : iM.find((MM => "hotbar" === MM.panel));
```

#### 211. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2589` → after: `L2899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2899) · [Before (L2589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2589)

```diff
-           const wG = (0, VG.j)("inventoryDrop");
+           const OM = (0, zM.m)("inventoryDrop");
```

#### 212. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2592` → after: `L2902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2902) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2592)

```diff
-               kind: "Ik"
+               kind: "sQ"
```

#### 213. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2597` → after: `L2907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2907) · [Before (L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2597)

```diff
-             return void(GG && (this.dropFrom(GG, !1, ZG), this.dropLatch.press(GG, this.focusKey(), bG, dG.e[(0, fG.i)().tapHoldTime].dropStackMs), this.afterAction()))
+             return void(MM && (this.dropFrom(MM, !1, iM), this.dropLatch.press(MM, this.focusKey(), rM, dM.c[(0, mM.j)().tapHoldTime].dropStackMs), this.afterAction()))
```

#### 214. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2601` → after: `L2911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2911) · [Before (L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2601)

```diff
-           LG && ((GG, bG, ZG) => "Ik" === GG.kind ? bG : !bG && ZG(GG.idx))(LG, ZG.isHolding(), ZG.hasItemAt) && (this.dropFrom(LG, !0, ZG), this.afterAction())
+           jM && ((MM, rM, iM) => "sQ" === MM.kind ? rM : !rM && iM(MM.idx))(jM, iM.isHolding(), iM.hasItemAt) && (this.dropFrom(jM, !0, iM), this.afterAction())
```

#### 215. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2604` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2914) · [Before (L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2604)

```diff
-           "Ik" === GG.kind ? ZG.dropHeld(bG, this.slotPoint()) : ZG.dropSlot(GG.idx, bG)
+           "sQ" === MM.kind ? iM.dropHeld(rM, this.slotPoint()) : iM.dropSlot(MM.idx, rM)
```

#### 216. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2642` → after: `L2952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2952) · [Before (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2642)

```diff
-               (0, RG.n)(LG, (0, RG.y)(LG));
+               (0, FM.q)(jM, (0, FM.z)(jM));
```

#### 217. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2645` → after: `L2955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2955) · [Before (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2645)

```diff
-               (0, RG.L)(LG) && (0, RG.J)(LG);
+               (0, FM.F)(jM) && (0, FM.E)(jM);
```

#### 218. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2676` → after: `L2986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2986) · [Before (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2676)

```diff
-           })(GG, this.state) || (this.state = GG, YG.l.xh(Ab.h, GG))
+           })(MM, this.state) || (this.state = MM, QM.i.Tz(fr.i, MM))
```

#### 219. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2680-L2683` → after: `L2990-L2993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2990-L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2990-L2993) · [Before (L2680-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2680-L2683)

```diff
-     var yZ = ZG(8740),
-       kZ = ZG(333),
-       UZ = ZG(1579),
-       YZ = ZG(8218);
+     var ai = iM(9315),
+       Pi = iM(313),
+       ni = iM(1717),
+       Qi = iM(8738);
```

#### 220. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2689` → after: `L2999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L2999) · [Before (L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2689)

```diff
-         for (const SG of null !== (ZG = null === (wG = GG.parentElement) || void 0 === wG ? void 0 : wG.children) && void 0 !== ZG ? ZG : []) {
+         for (const SM of null !== (iM = null === (OM = MM.parentElement) || void 0 === OM ? void 0 : OM.children) && void 0 !== iM ? iM : []) {
```

#### 221. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2748` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3058) · [Before (L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2748)

```diff
-           wG[ZG] && !(SG ? LG : yG) || kG.add(ZG)
+           OM[iM] && !(SM ? jM : aM) || PM.add(iM)
```

#### 222. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2817-L2819` → after: `L3127-L3129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3127-L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3127-L3129) · [Before (L2817-L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2817-L2819)

```diff
-     var mZ = ZG(1626),
-       IZ = ZG(8742),
-       FZ = ZG(8750);
+     var ui = iM(1765),
+       Ri = iM(9322),
+       Wi = iM(9324);
```

#### 223. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2821-L2823` → after: `L3131-L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3131-L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3131-L3133) · [Before (L2821-L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2821-L2823)

```diff
-         if ("death" !== GG || "inGame" !== UG.e.get("gameState") || "off" === (0, fG.i)().quickChat || null === (0, mZ.b)()) return !1;
-         const bG = (0, VG.j)("chat");
-         return bG !== (0, VG.j)("menuConfirm") && bG !== (0, VG.j)("menuBack")
+         if ("death" !== MM || "inGame" !== nM.d.get("gameState") || "off" === (0, mM.j)().quickChat || null === (0, ui.e)()) return !1;
+         const rM = (0, zM.m)("chat");
+         return rM !== (0, zM.m)("menuConfirm") && rM !== (0, zM.m)("menuBack")
```

#### 224. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2826-L2828` → after: `L3136-L3138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3136-L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3136-L3138) · [Before (L2826-L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2826-L2828)

```diff
-     var cZ = ZG(4298),
-       lZ = ZG(8759),
-       jZ = ZG(8764);
+     var ki = iM(4633),
+       Zi = iM(9328),
+       oi = iM(9331);
```

#### 225. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2840` → after: `L3150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3150) · [Before (L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2840)

```diff
-               for (const wG of (0, xG.f)(bG)) {
+               for (const OM of (0, VM.i)(rM)) {
```

#### 226. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2858` → after: `L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3168) · [Before (L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2858)

```diff
-         const yG = null !== (SG = null === GG || void 0 === GG ? void 0 : GG.getFocused()) && void 0 !== SG ? SG : null,
+         const aM = null !== (SM = null === MM || void 0 === MM ? void 0 : MM.getFocused()) && void 0 !== SM ? SM : null,
```

#### 227. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2861` → after: `L3171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3171) · [Before (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2861)

```diff
-         (0, RG.e)(LG), GG && (UG ? MZ(GG, bG, UG, ZG) : GG.setFocus(LG, {
+         (0, FM.d)(jM), MM && (nM ? Yi(MM, rM, nM, iM) : MM.setFocus(jM, {
```

#### 228. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2867-L2868` → after: `L3177-L3178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3177-L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3177-L3178) · [Before (L2867-L2868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2867-L2868)

```diff
-         const ZG = lG(null !== (bG = mG(GG, "x")) && void 0 !== bG ? bG : GG),
-           wG = (0, xG.d)(GG).filter((GG => !(0, xG.s)(GG))),
+         const iM = DM(null !== (rM = gM(MM, "x")) && void 0 !== rM ? rM : MM),
+           OM = (0, VM.g)(MM).filter((MM => !(0, VM.s)(MM))),
```

#### 229. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2870` → after: `L3180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3180) · [Before (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2870)

```diff
-         return (SG.length > 0 ? SG : wG).sort(((GG, bG) => CZ(GG.getBoundingClientRect(), bG.getBoundingClientRect())))
+         return (SM.length > 0 ? SM : OM).sort(((MM, rM) => ti(MM.getBoundingClientRect(), rM.getBoundingClientRect())))
```

#### 230. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2896` → after: `L3206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3206) · [Before (L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2896)

```diff
-         const LG = null !== (wG = null === GG || void 0 === GG ? void 0 : GG.getFocused()) && void 0 !== wG ? wG : null,
+         const jM = null !== (OM = null === MM || void 0 === MM ? void 0 : MM.getFocused()) && void 0 !== OM ? OM : null,
```

#### 231. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2898` → after: `L3208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3208) · [Before (L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2898)

```diff
-           kG = null !== (SG = LG ? mG(LG, yG, bG) : null) && void 0 !== SG ? SG : FG(bG, yG);
+           PM = null !== (SM = jM ? gM(jM, aM, rM) : null) && void 0 !== SM ? SM : RM(rM, aM);
```

#### 232. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2900` → after: `L3210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3210) · [Before (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2900)

```diff
-         const UG = LG ? (0, RG.y)(LG) : null;
+         const nM = jM ? (0, FM.z)(jM) : null;
```

#### 233. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2917` → after: `L3227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3227) · [Before (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2917)

```diff
-           kG = iZ((0, RG.y)(LG), yG.map((GG => GG.getBoundingClientRect()))),
+           PM = wi((0, FM.z)(jM), aM.map((MM => MM.getBoundingClientRect()))),
```

#### 234. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2919` → after: `L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3229) · [Before (L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2919)

```diff
-         return GG.setFocus(null !== UG && void 0 !== UG && UG.isConnected ? UG : null !== (wG = yG[kG]) && void 0 !== wG ? wG : null, {
+         return MM.setFocus(null !== nM && void 0 !== nM && nM.isConnected ? nM : null !== (OM = aM[PM]) && void 0 !== OM ? OM : null, {
```

#### 235. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2924-L2925` → after: `L3234-L3235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3234-L3235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3234-L3235) · [Before (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2924-L2925)

```diff
-         const bG = (0, VG.j)(GG);
-         return (0, KG.B)(bG) || YZ.r.some((GG => (0, VG.j)(GG) === bG)) ? null : bG
+         const rM = (0, zM.m)(MM);
+         return (0, hM.G)(rM) || Qi.i.some((MM => (0, zM.m)(MM) === rM)) ? null : rM
```

#### 236. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2935` → after: `L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3245) · [Before (L2935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2935)

```diff
-             return null !== (bG = null === (ZG = PZ(GG)) || void 0 === ZG ? void 0 : ZG.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== bG ? bG : null
+             return null !== (rM = null === (iM = fi(MM)) || void 0 === iM ? void 0 : iM.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== rM ? rM : null
```

#### 237. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2938` → after: `L3248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3248) · [Before (L2938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2938)

```diff
-         (0, yZ.e)(), ZG === kZ.u.SETTINGS && (0, UZ.m)(UG.e.get("openEverythingMenuName")) ? UG.e.set({
+         (0, ai.d)(), iM === Pi.m.SETTINGS && (0, ni.m)(nM.d.get("openEverythingMenuName")) ? nM.d.set({
```

#### 238. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2940` → after: `L3250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3250) · [Before (L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2940)

```diff
-         }) : (0, UZ.x)((0, jZ.c)("padMenuShortcut"), ZG, wG), GG && LG && SG && MZ(GG, bG, LG, SG.closest("[data-pad-tabs]"))
+         }) : (0, ni.B)((0, oi.d)("padMenuShortcut"), iM, OM), MM && jM && SM && Yi(MM, rM, jM, SM.closest("[data-pad-tabs]"))
```

#### 239. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2944-L2945` → after: `L3254-L3255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3254-L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3254-L3255) · [Before (L2944-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2944-L2945)

```diff
-       NZ = (0, hG.d)(KG.Y),
-       OZ = (0, hG.d)(KG.Y),
+       Vi = (0, JM.d)(hM.$),
+       ci = (0, JM.d)(hM.$),
```

#### 240. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2948-L2949` → after: `L3258-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3258-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3258-L3259) · [Before (L2948-L2949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2948-L2949)

```diff
-             const ZG = (0, VG.j)("chat");
-             return vZ(bG) && GG.isHeld(ZG) ? "hold" === aZ.update(GG.wasPressed(ZG), GG.isHeld(ZG), performance.now(), dG.e[(0, fG.i)().tapHoldTime].wheelMs) && (pG.b.consumeButton(ZG), YG.l.xh(FZ.l), !0) : (aZ.release(), !1)
+             const iM = (0, zM.m)("chat");
+             return si(rM) && MM.isHeld(iM) ? "hold" === Di.update(MM.wasPressed(iM), MM.isHeld(iM), performance.now(), dM.c[(0, mM.j)().tapHoldTime].wheelMs) && (LM.d.consumeButton(iM), QM.i.Tz(Wi.k), !0) : (Di.release(), !1)
```

#### 241. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2956` → after: `L3266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3266) · [Before (L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2956)

```diff
-           if (bG.wasPressed((0, VG.j)(yG))) {
+           if (rM.wasPressed((0, zM.m)(aM))) {
```

#### 242. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2969` → after: `L3279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3279) · [Before (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2969)

```diff
-           const ZG = (0, VG.j)(yG);
+           const iM = (0, zM.m)(aM);
```

#### 243. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2973` → after: `L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3283) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2973)

```diff
-         return TZ(bG, "pause") ? (LG || (0, UZ.u)() && "menu" !== ZG.layer.kind || HZ(GG, wG, (0, UZ.u)() ? kZ.u.SETTINGS : (0, cZ.e)()), !0) : !!TZ(bG, "leaderboard") && ("home" === ZG.layer.kind ? (GG => {
+         return Ii(rM, "pause") ? (jM || (0, ni.v)() && "menu" !== iM.layer.kind || Ki(MM, OM, (0, ni.v)() ? Pi.m.SETTINGS : (0, ki.d)()), !0) : !!Ii(rM, "leaderboard") && ("home" === iM.layer.kind ? (MM => {
```

#### 244. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2975-L2976` → after: `L3285-L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3285-L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3285-L3286) · [Before (L2975-L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2975-L2976)

```diff
-           bG && (0, RG.e)(bG)
-         })(wG) : LG || HZ(GG, wG, kZ.u.LOBBY_LEADERBOARD, "inGame" === UG.e.get("gameState")), !0)
+           rM && (0, FM.d)(rM)
+         })(OM) : jM || Ki(MM, OM, Pi.m.LOBBY_LEADERBOARD, "inGame" === nM.d.get("gameState")), !0)
```

#### 245. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2981` → after: `L3291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3291) · [Before (L2981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2981)

```diff
-         if (bG.wasPressed((0, VG.j)("menuSecondary"))) {
+         if (rM.wasPressed((0, zM.m)("menuSecondary"))) {
```

#### 246. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2984` → after: `L3294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3294) · [Before (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2984)

```diff
-           if (SG) return (0, RG.e)(SG), !0;
+           if (SM) return (0, FM.d)(SM), !0;
```

#### 247. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2989` → after: `L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3299) · [Before (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2989)

```diff
-             }), (0, RG.e)(bG)) : UG.e.set({
+             }), (0, FM.d)(rM)) : nM.d.set({
```

#### 248. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2997` → after: `L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3307) · [Before (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2997)

```diff
-           if (!SG || !(0, xG.n)(SG)) return void(0, UZ.x)((0, jZ.c)("padMenuShortcut"), kZ.u.SOCIAL);
+           if (!SM || !(0, VM.n)(SM)) return void(0, ni.B)((0, oi.d)("padMenuShortcut"), Pi.m.SOCIAL);
```

#### 249. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2999` → after: `L3309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3309) · [Before (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L2999)

```diff
-           const LG = null !== (ZG = null === (wG = SG.querySelector("[data-pad-friends-start]")) || void 0 === wG ? void 0 : wG.getBoundingClientRect().top) && void 0 !== ZG ? ZG : -1 / 0,
+           const jM = null !== (iM = null === (OM = SM.querySelector("[data-pad-friends-start]")) || void 0 === OM ? void 0 : OM.getBoundingClientRect().top) && void 0 !== iM ? iM : -1 / 0,
```

#### 250. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3002` → after: `L3312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3312) · [Before (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3002)

```diff
-             UG = kG.length > 0 ? kG : yG,
+             nM = PM.length > 0 ? PM : aM,
```

#### 251. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3011` → after: `L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3321) · [Before (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3011)

```diff
-         const SG = (0, RG.z)(GG);
+         const SM = (0, FM.A)(MM);
```

#### 252. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3013-L3014` → after: `L3323-L3324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3323-L3324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3323-L3324) · [Before (L3013-L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3013-L3014)

```diff
-         const LG = (null !== (bG = null !== (ZG = null !== (wG = GG.getAttribute("aria-label")) && void 0 !== wG ? wG : GG.getAttribute("title")) && void 0 !== ZG ? ZG : GG.textContent) && void 0 !== bG ? bG : "").replace(/\s+/g, " ").trim();
-         return LG ? `${GG.tagName}:${LG.slice(0,100)}` : null
+         const jM = (null !== (rM = null !== (iM = null !== (OM = MM.getAttribute("aria-label")) && void 0 !== OM ? OM : MM.getAttribute("title")) && void 0 !== iM ? iM : MM.textContent) && void 0 !== rM ? rM : "").replace(/\s+/g, " ").trim();
+         return jM ? `${MM.tagName}:${jM.slice(0,100)}` : null
```

#### 253. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3035` → after: `L3345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3345) · [Before (L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3035)

```diff
-           LG = (0, RG.z)(bG),
+           jM = (0, FM.A)(rM),
```

#### 254. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3059` → after: `L3369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3369) · [Before (L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3059)

```diff
-         return null !== (ZG = null !== (wG = yG[SG.ordinal]) && void 0 !== wG ? wG : yG[0]) && void 0 !== ZG ? ZG : null
+         return null !== (iM = null !== (OM = aM[SM.ordinal]) && void 0 !== OM ? OM : aM[0]) && void 0 !== iM ? iM : null
```

#### 255. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3065` → after: `L3375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3375) · [Before (L3065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3065)

```diff
-     var Zw = ZG(1239);
+     var SO = iM(1287);
```

#### 256. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3080` → after: `L3390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3390) · [Before (L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3080)

```diff
-             const ZG = (null !== (wG = GG[LG]) && void 0 !== wG ? wG : 0) - (null !== (SG = bG[LG]) && void 0 !== SG ? SG : 0);
+             const iM = (null !== (OM = MM[jM]) && void 0 !== OM ? OM : 0) - (null !== (SM = rM[jM]) && void 0 !== SM ? SM : 0);
```

#### 257. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3093` → after: `L3403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3403) · [Before (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3093)

```diff
-         return null !== (ZG = Sw(GG.root, bG.root)) && void 0 !== ZG ? ZG : GG.order > bG.order
+         return null !== (iM = aO(MM.root, rM.root)) && void 0 !== iM ? iM : MM.order > rM.order
```

#### 258. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3102-L3103` → after: `L3412-L3413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3412-L3413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3412-L3413) · [Before (L3102-L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3102-L3103)

```diff
-           ZG = "number" === typeof bG ? bG : null;
-         if (null !== ZG && ZG === Uw && Yw === (0, Zw.d)()) return kw;
+           iM = "number" === typeof rM ? rM : null;
+         if (null !== iM && iM === zO && LO === (0, SO.e)()) return QO;
```

#### 259. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3107` → after: `L3417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3417) · [Before (L3107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3107)

```diff
-         for (const yG of (0, Zw.g)()) {
+         for (const aM of (0, SO.h)()) {
```

#### 260. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3118-L3119` → after: `L3428-L3429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3428-L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3428-L3429) · [Before (L3118-L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3118-L3119)

```diff
-         kw = wG, Uw = ZG, Yw = (0, Zw.d)();
-         for (const yG of SG)(0, Zw.h)(yG);
+         QO = OM, zO = iM, LO = (0, SO.e)();
+         for (const aM of SM)(0, SO.k)(aM);
```

#### 261. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3128` → after: `L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3438) · [Before (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3128)

```diff
-         return null !== (GG = null === (bG = Vw()) || void 0 === bG ? void 0 : bG.root) && void 0 !== GG ? GG : null
+         return null !== (MM = null === (rM = mO()) || void 0 === rM ? void 0 : rM.root) && void 0 !== MM ? MM : null
```

#### 262. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3136` → after: `L3446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3446) · [Before (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3136)

```diff
-       dw = (0, fG.i)().menuNavigation,
+       lO = (0, mM.j)().menuNavigation,
```

#### 263. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3140-L3141` → after: `L3450-L3451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3450-L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3450-L3451) · [Before (L3140-L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3140-L3141)

```diff
-     YG.l.subscribe(fG.h, (() => {
-       const GG = (0, fG.i)().menuNavigation;
+     QM.i.subscribe(mM.i, (() => {
+       const MM = (0, mM.j)().menuNavigation;
```

#### 264. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3146` → after: `L3456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3456) · [Before (L3146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3146)

```diff
-         return null !== (GG = Kw) && void 0 !== GG ? GG : (0, fG.i)().menuNavigation
+         return null !== (MM = dO) && void 0 !== MM ? MM : (0, mM.j)().menuNavigation
```

#### 265. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3173` → after: `L3483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3483) · [Before (L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3173)

```diff
-           has: (0, xG.j)(GG)
+           has: (0, VM.l)(MM)
```

#### 266. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3199-L3200` → after: `L3509-L3510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3509-L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3509-L3510) · [Before (L3199-L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3199-L3200)

```diff
-     var Fw = ZG(4564),
-       vw = ZG(5042);
+     var WO = iM(4927),
+       sO = iM(5419);
```

#### 267. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3202` → after: `L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3512) · [Before (L3202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3202)

```diff
-       lw = `${aw}, [data-pad-back]`,
+       kO = `${DO}, [data-pad-back]`,
```

#### 268. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3233-L3234` → after: `L3543-L3544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3543-L3544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3543-L3544) · [Before (L3233-L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3233-L3234)

```diff
-         const ZG = GG.querySelector(`${sw}[data-pad-selected='true']`);
-         return ZG && bG.includes(ZG) ? ZG : null
+         const iM = MM.querySelector(`${NO}[data-pad-selected='true']`);
+         return iM && rM.includes(iM) ? iM : null
```

#### 269. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3250` → after: `L3560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3560) · [Before (L3250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3250)

```diff
-         if (kG && kG !== yG) return yG || (this.contentReturn = new WeakRef(GG)), null !== (UG = qw(kG, ZG)) && void 0 !== UG ? UG : bG;
+         if (PM && PM !== aM) return aM || (this.contentReturn = new WeakRef(MM)), null !== (nM = AO(PM, iM)) && void 0 !== nM ? nM : rM;
```

#### 270. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3254` → after: `L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3564) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3254)

```diff
-         return VG && YG.contains(VG) && ZG.includes(VG) ? VG : null !== (LG = this.pickRegionStart(YG, mG(bG, "y", wG), ZG)) && void 0 !== LG ? LG : bG
+         return zM && QM.contains(zM) && iM.includes(zM) ? zM : null !== (jM = this.pickRegionStart(QM, gM(rM, "y", OM), iM)) && void 0 !== jM ? jM : rM
```

#### 271. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3262` → after: `L3572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3572) · [Before (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3262)

```diff
-         return ZG.some((GG => LG.contains(GG) && !GG.closest(lw))) || !bG.closest(lw) ? LG : null
+         return iM.some((MM => jM.contains(MM) && !MM.closest(kO))) || !rM.closest(kO) ? jM : null
```

#### 272. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3291` → after: `L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3601) · [Before (L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3291)

```diff
-         for (const LG of (0, xG.f)(GG)) {
+         for (const jM of (0, VM.i)(MM)) {
```

#### 273. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3311-L3312` → after: `L3621-L3622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3621-L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3621-L3622) · [Before (L3311-L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3311-L3312)

```diff
-           if (ZG) return bG === GG || bG.querySelectorAll(xG.b).length <= 1 ? ZG : null;
-           if (bG !== GG && bG.querySelectorAll(xG.b).length > 1) return null
+           if (iM) return rM === MM || rM.querySelectorAll(VM.c).length <= 1 ? iM : null;
+           if (rM !== MM && rM.querySelectorAll(VM.c).length > 1) return null
```

#### 274. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3317` → after: `L3627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3627) · [Before (L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3317)

```diff
-         (0, RG.o)(GG, bG, ZG);
+         (0, FM.t)(MM, rM, iM);
```

#### 275. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3320` → after: `L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3630) · [Before (L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3320)

```diff
-         wG !== SG && (0, RG.o)(wG, SG, SG ? (0, RG.y)(SG) : ZG, {
+         OM !== SM && (0, FM.t)(OM, SM, SM ? (0, FM.z)(SM) : iM, {
```

#### 276. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3335` → after: `L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3645) · [Before (L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3335)

```diff
-         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new bw, this.tabStripNav = new gw, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
+         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new OO, this.tabStripNav = new vO, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
```

#### 277. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3341` → after: `L3651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3651) · [Before (L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3341)

```diff
-         const GG = pG.b.register({
+         const MM = LM.d.register({
```

#### 278. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3343` → after: `L3653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3653) · [Before (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3343)

```diff
-             isActive: () => (0, QG.l)() && "focus" === Ww(),
+             isActive: () => (0, HM.g)() && "focus" === uO(),
```

#### 279. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3350` → after: `L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3660) · [Before (L3350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3350)

```diff
-             wakePressActs: GG => (0, pG.d)(GG) || GG === (0, VG.j)("menuConfirm") && (0, RG.G)((0, QG.d)())
+             wakePressActs: MM => (0, LM.g)(MM) || MM === (0, zM.m)("menuConfirm") && (0, FM.C)((0, HM.d)())
```

#### 280. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3352-L3353` → after: `L3662-L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3662-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3662-L3663) · [Before (L3352-L3353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3352-L3353)

```diff
-           bG = (0, Zw.k)((GG => {
-             const bG = (0, Zw.s)(GG);
+           rM = (0, SO.m)((MM => {
+             const rM = (0, SO.r)(MM);
```

#### 281. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3357-L3358` → after: `L3667-L3668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3667-L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3667-L3668) · [Before (L3357-L3358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3357-L3358)

```diff
-         const wG = yG.d.onFrame((GG => {
-             (0, QG.l)() || GG.timestampMs - ZG < 100 || (ZG = GG.timestampMs, Vw())
+         const OM = aM.g.onFrame((MM => {
+             (0, HM.g)() || MM.timestampMs - iM < 100 || (iM = MM.timestampMs, mO())
```

#### 282. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3361` → after: `L3671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3671) · [Before (L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3361)

```diff
-             GG.isTrusted && GG.target instanceof Element && yG.d.getActivePad() && this.noteChosenStop(GG.target)
+             MM.isTrusted && MM.target instanceof Element && aM.g.getActivePad() && this.noteChosenStop(MM.target)
```

#### 283. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3371` → after: `L3681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3681) · [Before (L3371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3371)

```diff
-         const SG = null !== (bG = null === (ZG = GG.closest(".Dropdown-root")) || void 0 === ZG ? void 0 : ZG.querySelector(".Dropdown-control")) && void 0 !== bG ? bG : GG,
+         const SM = null !== (rM = null === (iM = MM.closest(".Dropdown-root")) || void 0 === iM ? void 0 : iM.querySelector(".Dropdown-control")) && void 0 !== rM ? rM : MM,
```

#### 284. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3374` → after: `L3684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3684) · [Before (L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3374)

```diff
-         const yG = (0, Zw.s)(wG.layer);
+         const aM = (0, SO.r)(OM.layer);
```

#### 285. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3378` → after: `L3688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3688) · [Before (L3378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3378)

```diff
-         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = LG, this.lastFocusedCentre = (0, RG.y)(LG), this.rememberFocus(LG), this.notify())
+         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = jM, this.lastFocusedCentre = (0, FM.z)(jM), this.rememberFocus(jM), this.notify())
```

#### 286. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3399` → after: `L3709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3709) · [Before (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3399)

```diff
-           this.stickRepeat.reset(), null !== (GG = this.focused) && void 0 !== GG && GG.isConnected && Nw(this.focused, null, (0, RG.y)(this.focused)), this.notify()
+           this.stickRepeat.reset(), null !== (MM = this.focused) && void 0 !== MM && MM.isConnected && TO(this.focused, null, (0, FM.z)(this.focused)), this.notify()
```

#### 287. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3419-L3421` → after: `L3729-L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3729-L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3729-L3731) · [Before (L3419-L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3419-L3421)

```diff
-           const bG = (0, RG.y)(GG);
-           this.lastFocusedCentre = bG, this.movedInLayer && this.rememberFocus(GG), Nw(SG, GG, bG), "false" === GG.getAttribute("aria-pressed") && GG.closest("[data-pad-select-on-focus]") && (0, RG.e)(GG)
-         } else SG && Nw(SG, null, (0, RG.y)(SG));
+           const rM = (0, FM.z)(MM);
+           this.lastFocusedCentre = rM, this.movedInLayer && this.rememberFocus(MM), TO(SM, MM, rM), "false" === MM.getAttribute("aria-pressed") && MM.closest("[data-pad-select-on-focus]") && (0, FM.d)(MM)
+         } else SM && TO(SM, null, (0, FM.z)(SM));
```

#### 288. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3436` → after: `L3746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3746) · [Before (L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3436)

```diff
-         const LG = (0, Zw.s)(bG.layer);
+         const jM = (0, SO.r)(rM.layer);
```

#### 289. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3455` → after: `L3765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3765) · [Before (L3455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3455)

```diff
-         return (0, xG.d)(GG).filter((GG => !(0, xG.s)(GG)))
+         return (0, VM.g)(MM).filter((MM => !(0, VM.s)(MM)))
```

#### 290. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3461` → after: `L3771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3771) · [Before (L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3461)

```diff
-         const wG = null !== (bG = this.findOpenDropdown(ZG)) && void 0 !== bG ? bG : ZG,
+         const OM = null !== (rM = this.findOpenDropdown(iM)) && void 0 !== rM ? rM : iM,
```

#### 291. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3463` → after: `L3773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3773) · [Before (L3463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3463)

```diff
-           LG = (0, Zw.s)(wG.layer);
+           jM = (0, SO.r)(OM.layer);
```

#### 292. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3471` → after: `L3781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3781) · [Before (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3471)

```diff
-             "popup" !== wG.layer.kind || wG !== ZG || kG ? "menu" === wG.layer.kind && yG && "inGame" === UG.e.get("gameState") && !(0, yZ.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = SG + Fw.b) : (this.pressGuardExtends = bG, this.pressGuardUntilMs = SG + (b … [truncated]
+             "popup" !== OM.layer.kind || OM !== iM || PM ? "menu" === OM.layer.kind && aM && "inGame" === nM.d.get("gameState") && !(0, ai.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = SM + WO.b) : (this.pressGuardExtends = rM, this.pressGuardUntilMs = SM + (r … [truncated]
```

#### 293. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3474` → after: `L3784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3784) · [Before (L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3474)

```diff
-         if (this.layerKind = wG.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), GG.wokeDevice && this.focusPointedStop(wG.root), this.validateFocus(wG, SG), SG < this.pressGuardUntilMs && this.pressGuardExtends && (GG.wasPressed((0, VG.j)("menuConfirm")) || GG … [truncated]
+         if (this.layerKind = OM.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), MM.wokeDevice && this.focusPointedStop(OM.root), this.validateFocus(OM, SM), SM < this.pressGuardUntilMs && this.pressGuardExtends && (MM.wasPressed((0, zM.m)("menuConfirm")) || MM … [truncated]
```

#### 294. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3478-L3479` → after: `L3788-L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3788-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3788-L3789) · [Before (L3478-L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3478-L3479)

```diff
-             return bG !== zw && (zw = bG, rw.lock()), rw.update(GG, (0, fG.i)().moveDeadzone)
-           })(GG.leftStick)) return kG = this.getHandoff(), Jw = Qw(kG), hw = fw(), void pG.b.handOffHeldInput();
+             return rM !== GO && (GO = rM, UO.lock()), UO.update(MM, (0, mM.j)().moveDeadzone)
+           })(MM.leftStick)) return PM = this.getHandoff(), EO = JO(PM), yO = hO(), void LM.d.handOffHeldInput();
```

#### 295. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3521` → after: `L3831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3831) · [Before (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3521)

```diff
-         this.restoredFromMemory = null !== ZG, this.setFocus(null !== ZG && void 0 !== ZG ? ZG : this.pickInitial(GG, {
+         this.restoredFromMemory = null !== iM, this.setFocus(null !== iM && void 0 !== iM ? iM : this.pickInitial(MM, {
```

#### 296. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3533` → after: `L3843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3843) · [Before (L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3533)

```diff
-         wG && Bw(wG, GG) ? this.takeOver(GG, wG, bG) : null !== (ZG = this.focused) && void 0 !== ZG && ZG.isConnected && Nw(null, this.focused, (0, RG.y)(this.focused))
+         OM && MS(OM, MM) ? this.takeOver(MM, OM, rM) : null !== (iM = this.focused) && void 0 !== iM && iM.isConnected && TO(null, this.focused, (0, FM.z)(this.focused))
```

#### 297. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3537` → after: `L3847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3847) · [Before (L3537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3537)

```diff
-         return null !== (bG = this.layerKey ? this.findRemembered(GG, this.layerKey) : null) && void 0 !== bG ? bG : this.pickInitial(GG, {
+         return null !== (rM = this.layerKey ? this.findRemembered(MM, this.layerKey) : null) && void 0 !== rM ? rM : this.pickInitial(MM, {
```

#### 298. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3549` → after: `L3859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3859) · [Before (L3549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3549)

```diff
-           point: wG ? (0, RG.y)(wG) : null !== (ZG = this.lastFocusedCentre) && void 0 !== ZG ? ZG : this.getLayerStartPoint(SG),
+           point: OM ? (0, FM.z)(OM) : null !== (iM = this.lastFocusedCentre) && void 0 !== iM ? iM : this.getLayerStartPoint(SM),
```

#### 299. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3562` → after: `L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3872) · [Before (L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3562)

```diff
-         return (0, RG.y)(null !== bG && void 0 !== bG ? bG : GG)
+         return (0, FM.z)(null !== rM && void 0 !== rM ? rM : MM)
```

#### 300. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3569` → after: `L3879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3879) · [Before (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3569)

```diff
-         } = bG, yG = wG instanceof HTMLElement && (0, xG.p)(wG, GG) ? wG : null;
+         } = rM, aM = OM instanceof HTMLElement && (0, VM.p)(OM, MM) ? OM : null;
```

#### 301. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3575` → after: `L3885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3885) · [Before (L3575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3575)

```diff
-           }) : this.focusNearest(GG, LG), void(this.focused && this.focused === bG && this.focused.isConnected && Nw(null, this.focused, (0, RG.y)(this.focused)))
+           }) : this.focusNearest(MM, jM), void(this.focused && this.focused === rM && this.focused.isConnected && TO(null, this.focused, (0, FM.z)(this.focused)))
```

#### 302. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3584` → after: `L3894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3894) · [Before (L3584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3584)

```diff
-           VG = YG >= 0 ? YG : iZ(LG, UG);
+           zM = QM >= 0 ? QM : wi(jM, nM);
```

#### 303. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3601` → after: `L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3911) · [Before (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3601)

```diff
-         const wG = [...GG.querySelectorAll(ew)].filter((wG => (null === ZG || void 0 === ZG || !ZG.has(wG)) && (bG ? (0, xG.u)(wG, GG) : (0, xG.p)(wG, GG)))),
+         const OM = [...MM.querySelectorAll(FO)].filter((OM => (null === iM || void 0 === iM || !iM.has(OM)) && (rM ? (0, VM.t)(OM, MM) : (0, VM.p)(OM, MM)))),
```

#### 304. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3607` → after: `L3917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3917) · [Before (L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3607)

```diff
-         for (const wG of [...(0, xG.f)(GG), ...ZG]) {
+         for (const OM of [...(0, VM.i)(MM), ...iM]) {
```

#### 305. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3625` → after: `L3935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3935) · [Before (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3625)

```diff
-         const LG = GG => bG ? (0, xG.d)(GG) : this.getEnabledCandidates(GG);
+         const jM = MM => rM ? (0, VM.g)(MM) : this.getEnabledCandidates(MM);
```

#### 306. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3627` → after: `L3937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3937) · [Before (L3627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3627)

```diff
-         for (const fG of (0, xG.f)(GG))
+         for (const mM of (0, VM.i)(MM))
```

#### 307. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3630` → after: `L3940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3940) · [Before (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3630)

```diff
-           if (ZG && performance.now() - wG < 1e4 && (0, xG.k)(GG)) return null;
+           if (iM && performance.now() - OM < 1e4 && (0, VM.m)(MM)) return null;
```

#### 308. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3636` → after: `L3946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3946) · [Before (L3636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3636)

```diff
-           VG = YG.length > 0 ? YG : yG,
+           zM = QM.length > 0 ? QM : aM,
```

#### 309. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3656` → after: `L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3966) · [Before (L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3656)

```diff
-                 wG = null !== ZG && void 0 !== ZG ? ZG : this.restoredFromMemory ? null : this.pickDefault(GG.root);
+                 OM = null !== iM && void 0 !== iM ? iM : this.restoredFromMemory ? null : this.pickDefault(MM.root);
```

#### 310. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3668-L3669` → after: `L3978-L3979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3978-L3979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3978-L3979) · [Before (L3668-L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3668-L3669)

```diff
-         if (GG.wasPressed((0, VG.j)("menuToggleCursor"))) return ow(this.getHandoff()), !0;
-         if (GG.wasPressed((0, VG.j)("menuBack"))) {
+         if (MM.wasPressed((0, zM.m)("menuToggleCursor"))) return eO(this.getHandoff()), !0;
+         if (MM.wasPressed((0, zM.m)("menuBack"))) {
```

#### 311. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3673` → after: `L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3983) · [Before (L3673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3673)

```diff
-           }) : eZ(this, bG.root) || ((0, RG.f)(bG.root) ? this.returnToOpener(bG.root) : this.backToStrip(bG.root) || pw()), !0
+           }) : Bi(this, rM.root) || ((0, FM.g)(rM.root) ? this.returnToOpener(rM.root) : this.backToStrip(rM.root) || HO()), !0
```

#### 312. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3675` → after: `L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3985) · [Before (L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3675)

```diff
-         const ZG = (0, VG.j)("menuConfirm");
+         const iM = (0, zM.m)("menuConfirm");
```

#### 313. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3677` → after: `L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L3987) · [Before (L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3677)

```diff
-         GG.wasPressed(ZG) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (wG = null === (SG = this.focused) || void 0 === SG ? void 0 : SG.getAttribute("data-pad-repeat")) && void 0 !== wG ? wG : null, this.confirmRepeated = GG.wokeDevice, this.confirm … [truncated]
+         MM.wasPressed(iM) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (OM = null === (SM = this.focused) || void 0 === SM ? void 0 : SM.getAttribute("data-pad-repeat")) && void 0 !== OM ? OM : null, this.confirmRepeated = MM.wokeDevice, this.confirm … [truncated]
```

#### 314. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3694` → after: `L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4004) · [Before (L3694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3694)

```diff
-         if (!(0, fG.i)().menuBackToCategories) return !1;
+         if (!(0, mM.j)().menuBackToCategories) return !1;
```

#### 315. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3704` → after: `L4014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4014) · [Before (L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3704)

```diff
-           return null !== (ZG = this.getEnabledCandidates(GG).find((GG => (0, RG.z)(GG) === bG))) && void 0 !== ZG ? ZG : null
+           return null !== (iM = this.getEnabledCandidates(MM).find((MM => (0, FM.A)(MM) === rM))) && void 0 !== iM ? iM : null
```

#### 316. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3709-L3710` → after: `L4019-L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4019-L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4019-L4020) · [Before (L3709-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3709-L3710)

```diff
-         if ((0, vw.d)(GG) || (0, RG.C)(GG)) return;
-         this.lastActivatedKey = null !== (bG = (0, RG.z)(GG)) && void 0 !== bG ? bG : this.lastActivatedKey, this.lastActivated = GG, this.lastActivatedAtMs = performance.now(), this.rememberFocus(GG);
+         if ((0, sO.b)(MM) || (0, FM.B)(MM)) return;
+         this.lastActivatedKey = null !== (rM = (0, FM.A)(MM)) && void 0 !== rM ? rM : this.lastActivatedKey, this.lastActivated = MM, this.lastActivatedAtMs = performance.now(), this.rememberFocus(MM);
```

#### 317. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3714` → after: `L4024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4024) · [Before (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3714)

```diff
-             wG = new Set(ZG.querySelectorAll(`[data-pad-initial-area], ${tw}`)),
+             OM = new Set(iM.querySelectorAll(`[data-pad-initial-area], ${KO}`)),
```

#### 318. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3720` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4030) · [Before (L3720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3720)

```diff
-             })) && void 0 !== SG ? SG : this.pickNewAreaStart(ZG, wG)
+             })) && void 0 !== SM ? SM : this.pickNewAreaStart(iM, OM)
```

#### 319. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3722` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4032) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3722)

```diff
-         }(0, RG.e)(GG), (0, RG.i)(GG)
+         }(0, FM.d)(MM), (0, FM.j)(MM)
```

#### 320. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3725-L3726` → after: `L4035-L4036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4035-L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4035-L4036) · [Before (L3725-L3726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3725-L3726)

```diff
-         const SG = vZ(bG.layer.kind) ? (0, VG.j)("chat") : null;
-         for (const kG of KG.z) {
+         const SM = si(rM.layer.kind) ? (0, zM.m)("chat") : null;
+         for (const PM of hM.A) {
```

#### 321. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3729` → after: `L4039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4039) · [Before (L3729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3729)

```diff
-         const LG = wG ? (0, KG.i)(GG.leftStick, (0, fG.i)().moveDeadzone) : {
+         const jM = OM ? (0, hM.i)(MM.leftStick, (0, mM.j)().moveDeadzone) : {
```

#### 322. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3733` → after: `L4043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4043) · [Before (L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3733)

```diff
-           yG = this.stickRepeat.update((0, KG.gb)(LG), ZG);
+           aM = this.stickRepeat.update((0, hM.hb)(jM), iM);
```

#### 323. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3754` → after: `L4064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4064) · [Before (L3754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3754)

```diff
-           UG = kG ? (0, vw.d)(yG) : null;
+           nM = PM ? (0, sO.b)(aM) : null;
```

#### 324. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3848` → after: `L4158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4158) · [Before (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3848)

```diff
-         (0, RG.e)(GG), this.focusWhenFound((() => "true" !== GG.dataset.padSelected ? null : bG.isConnected ? this.tabStripNav.pickContentStart(bG, this.getEnabledCandidates(ZG), ZG) : SG ? this.tabStripNav.pickReplacedContentStart(GG, SG, this.getEnabledCandidates(ZG), ZG) : nul … [truncated]
+         (0, FM.d)(MM), this.focusWhenFound((() => "true" !== MM.dataset.padSelected ? null : rM.isConnected ? this.tabStripNav.pickContentStart(rM, this.getEnabledCandidates(iM), iM) : SM ? this.tabStripNav.pickReplacedContentStart(MM, SM, this.getEnabledCandidates(iM), iM) : nul … [truncated]
```

#### 325. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3876` → after: `L4186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4186) · [Before (L3876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3876)

```diff
-           const yG = null !== (SG = mG(this.focused, LG, bG.root)) && void 0 !== SG ? SG : FG(bG.root, LG);
+           const aM = null !== (SM = gM(this.focused, jM, rM.root)) && void 0 !== SM ? SM : RM(rM.root, jM);
```

#### 326. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3884-L3885` → after: `L4194-L4195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4194-L4195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4194-L4195) · [Before (L3884-L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3884-L3885)

```diff
-     var bS = ZG(8254);
-     var ZS = ZG(8768);
+     var iS = iM(8792);
+     var OS = iM(9337);
```

#### 327. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3956-L3959` → after: `L4266-L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4266-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4266-L4269) · [Before (L3956-L3959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3956-L3959)

```diff
-           return "function" === typeof(null === bG || void 0 === bG ? void 0 : bG.playEffect) ? bG : null
-         })(yG.d.getActiveGamepad()),
-         isVibrationOn: () => (0, fG.i)().vibration,
-         isPadInUse: QG.l
+           return "function" === typeof(null === rM || void 0 === rM ? void 0 : rM.playEffect) ? rM : null
+         })(aM.g.getActiveGamepad()),
+         isVibrationOn: () => (0, mM.j)().vibration,
+         isPadInUse: HM.g
```

#### 328. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3964-L3968` → after: `L4274-L4278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4274-L4278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4274-L4278) · [Before (L3964-L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3964-L3968)

```diff
-     var kS = ZG(8256),
-       US = ZG(2897),
-       YS = ZG(95),
-       VS = ZG(29),
-       pS = ZG(647);
+     var nS = iM(8800),
+       QS = iM(3241),
+       zS = iM(103),
+       LS = iM(30),
+       mS = iM(673);
```

#### 329. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3978` → after: `L4288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4288) · [Before (L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3978)

```diff
-         return null === ZG || this.deps.readReportedVisitId() === ZG ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(ZG), this.deps.NQ(bG, this.deps.getInputType()), "reported") : "notReady"
+         return null === iM || this.deps.readReportedVisitId() === iM ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(iM), this.deps.aL(rM, this.deps.getInputType()), "reported") : "notReady"
```

#### 330. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3982-L3986` → after: `L4292-L4296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4292-L4296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4292-L4296) · [Before (L3982-L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3982-L3986)

```diff
-     var KS = ZG(1311),
-       hS = ZG(1702),
-       dS = ZG(631),
-       JS = ZG(1389),
-       rS = ZG(1204);
+     var JS = iM(1429),
+       dS = iM(1830),
+       yS = iM(656),
+       lS = iM(1516),
+       ES = iM(1258);
```

#### 331. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L3988` → after: `L4298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4298) · [Before (L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L3988)

```diff
-         translationKey: `controller:${GG}`
+         translationKey: `controller:${MM}`
```

#### 332. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4050-L4051` → after: `L4360-L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4360-L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4360-L4361) · [Before (L4050-L4051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4050-L4051)

```diff
-         const wG = null !== (ZG = oS[GG][bG]) && void 0 !== ZG ? ZG : ES[bG];
-         return "string" === typeof wG ? wG : (0, SG.r)(rS.d.get().getCurrentLanguageCode(), wG.translationKey)
+         const OM = null !== (iM = CS[MM][rM]) && void 0 !== iM ? iM : GS[rM];
+         return "string" === typeof OM ? OM : (0, SM.x)(ES.e.get().getCurrentLanguageCode(), OM.translationKey)
```

#### 333. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4059-L4061` → after: `L4369-L4371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4369-L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4369-L4371) · [Before (L4059-L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4059-L4061)

```diff
-         const SG = (0, QG.F)(),
-           LG = null !== ZG && void 0 !== ZG ? ZG : SG,
-           yG = (0, kS.i)(LG, bG);
+         const SM = (0, HM.y)(),
+           jM = null !== iM && void 0 !== iM ? iM : SM,
+           aM = (0, nS.f)(jM, rM);
```

#### 334. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4067` → after: `L4377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4377) · [Before (L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4067)

```diff
-             "--pad-glyph-mask": `url(${yG})`,
+             "--pad-glyph-mask": `url(${aM})`,
```

#### 335. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4072` → after: `L4382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4382) · [Before (L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4072)

```diff
-     var iS = ZG(1876);
+     var wS = iM(2006);
```

#### 336. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4079` → after: `L4389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4389) · [Before (L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4079)

```diff
-       } = (0, SG.w)();
+       } = (0, SM.A)();
```

#### 337. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4088` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4398) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4088)

```diff
-           return (0, sG.jsx)(iS.c, {
+           return (0, YM.jsx)(wS.b, {
```

#### 338. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4091` → after: `L4401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4401) · [Before (L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4091)

```diff
-             }, ` ${bG.description}`] : [{
+             }, ` ${rM.description}`] : [{
```

#### 339. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4096` → after: `L4406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4406) · [Before (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4096)

```diff
-           return (0, sG.jsx)(iS.c, {
+           return (0, YM.jsx)(wS.b, {
```

#### 340. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4101` → after: `L4411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4411) · [Before (L4101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4101)

```diff
-     var WS = ZG(8776);
+     var gS = iM(9339);
```

#### 341. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4109` → after: `L4419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4419) · [Before (L4109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4109)

```diff
-           "--pad-drop-stack-hold": `${bG.holdMs}ms`
+           "--pad-drop-stack-hold": `${rM.holdMs}ms`
```

#### 342. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4116-L4119` → after: `L4426-L4429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4426-L4429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4426-L4429) · [Before (L4116-L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4116-L4119)

```diff
-     var IS = ZG(8809),
-       FS = ZG(8816),
-       vS = ZG(8823),
-       aS = ZG(8800);
+     var RS = iM(9357),
+       pS = iM(9362),
+       WS = iM(9364),
+       sS = iM(9353);
```

#### 343. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4123` → after: `L4433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4433) · [Before (L4123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4123)

```diff
-         } = (0, UG.o)(["gameState"]), bG = (0, QG.B)(), [wG, SG] = (0, PG.useState)(!1), [LG, yG] = (0, PG.useState)(!1);
+         } = (0, nM.m)(["gameState"]), rM = (0, HM.v)(), [OM, SM] = (0, ZM.useState)(!1), [jM, aM] = (0, ZM.useState)(!1);
```

#### 344. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4130` → after: `L4440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4440) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4130)

```diff
-           return (dS.B ? Promise.all([ZG.e(73), ZG.e(90), ZG.e(273), ZG.e(191), ZG.e(229), ZG.e(228), ZG.e(89)]).then((() => ZG(40920))).then((GG => GG.startWasmPadGameplay)) : Promise.all([ZG.e(73), ZG.e(237), ZG.e(236), ZG.e(98), ZG.e(76), ZG.e(75), ZG.e(74), ZG.e(187), ZG.e(23 … [truncated]
+           return (yS.H ? Promise.all([iM.e(84), iM.e(103), iM.e(296), iM.e(205), iM.e(247), iM.e(246), iM.e(102)]).then((() => iM(41634))).then((MM => MM.startWasmPadGameplay)) : Promise.all([iM.e(84), iM.e(255), iM.e(254), iM.e(111), iM.e(87), iM.e(85), iM.e(86), iM.e(201), iM.e … [truncated]
```

#### 345. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4156` → after: `L4466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4466) · [Before (L4156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4156)

```diff
-         } = (0, SG.w)(), bG = (0, QG.B)(), {
+         } = (0, SM.A)(), rM = (0, HM.v)(), {
```

#### 346. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4159` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4469) · [Before (L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4159)

```diff
-         } = (0, UG.o)(["gameState", "isUiHidden"]), {
+         } = (0, nM.m)(["gameState", "isUiHidden"]), {
```

#### 347. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4161-L4162` → after: `L4471-L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4471-L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4471-L4472) · [Before (L4161-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4161-L4162)

```diff
-         } = (0, fG.r)(), yG = (0, WS.g)(), kG = (0, WS.k)(), [YG, pG] = (0, PG.useState)(vS.c);
-         return (0, JS.g)(aS.u, pG), !bG || LG || wG || "inGame" !== ZG || !yG && !YG ? null : (0, sG.jsxs)("div", {
+         } = (0, mM.q)(), aM = (0, gS.j)(), PM = (0, gS.l)(), [QM, LM] = (0, ZM.useState)(WS.b);
+         return (0, lS.d)(sS.q, LM), !rM || jM || OM || "inGame" !== iM || !aM && !QM ? null : (0, YM.jsxs)("div", {
```

#### 348. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4167` → after: `L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4477) · [Before (L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4167)

```diff
-               glyph: (0, VG.j)("actionButton")
+               glyph: (0, zM.m)("actionButton")
```

#### 349. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4177` → after: `L4487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4487) · [Before (L4177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4177)

```diff
-               glyph: (0, VG.j)("pickBlock")
+               glyph: (0, zM.m)("pickBlock")
```

#### 350. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4187` → after: `L4497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4497) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4187)

```diff
-         } = (0, SG.w)(), bG = (0, QG.B)(), {
+         } = (0, SM.A)(), rM = (0, HM.v)(), {
```

#### 351. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4190-L4191` → after: `L4500-L4501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4500-L4501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4500-L4501) · [Before (L4190-L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4190-L4191)

```diff
-         } = (0, UG.o)(["gameState", "isUiHidden"]), [LG, yG] = (0, PG.useState)(IS.c);
-         return (0, JS.g)(aS.q, yG), bG && !wG && "inGame" === ZG && LG ? (0, sG.jsxs)("div", {
+         } = (0, nM.m)(["gameState", "isUiHidden"]), [jM, aM] = (0, ZM.useState)(RS.c);
+         return (0, lS.d)(sS.o, aM), rM && !OM && "inGame" === iM && jM ? (0, YM.jsxs)("div", {
```

#### 352. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4203` → after: `L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4513) · [Before (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4203)

```diff
-         } = (0, SG.w)(), bG = (0, QG.B)(), {
+         } = (0, SM.A)(), rM = (0, HM.v)(), {
```

#### 353. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4206` → after: `L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4516) · [Before (L4206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4206)

```diff
-         } = (0, UG.o)(["gameState", "isUiHidden"]), {
+         } = (0, nM.m)(["gameState", "isUiHidden"]), {
```

#### 354. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4208-L4209` → after: `L4518-L4519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4518-L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4518-L4519) · [Before (L4208-L4209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4208-L4209)

```diff
-         } = (0, fG.r)(), [yG, kG] = (0, PG.useState)(FS.b);
-         return (0, JS.g)(aS.n, kG), bG && !wG && "inGame" === ZG && yG ? (0, sG.jsxs)("div", {
+         } = (0, mM.q)(), [aM, PM] = (0, ZM.useState)(pS.c);
+         return (0, lS.d)(sS.k, PM), rM && !OM && "inGame" === iM && aM ? (0, YM.jsxs)("div", {
```

#### 355. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4212` → after: `L4522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4522) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4212)

```diff
-             glyph: (0, VG.j)("attack")
+             glyph: (0, zM.m)("attack")
```

#### 356. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4218-L4222` → after: `L4528-L4532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4528-L4532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4528-L4532) · [Before (L4218-L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4218-L4222)

```diff
-     var MS = ZG(8825),
-       AS = ZG(1923),
-       sS = ZG(2409),
-       qS = ZG(8241);
-     const nS = GG => GG && !(0, MS.b)(AS.c.get("shopInfo")),
+     var fS = iM(9366),
+       YS = iM(2067),
+       NS = iM(2640),
+       AS = iM(8767);
+     const xS = MM => MM && !(0, fS.d)(YS.d.get("shopInfo")),
```

#### 357. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4224-L4226` → after: `L4534-L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4534-L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4534-L4536) · [Before (L4224-L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4224-L4226)

```diff
-         const GG = "inGame" === (0, UG.o)(["gameState"]).gameState;
-         return (0, sS.h)("shopInfo", (() => {
-           (0, qS.f)(nS(GG))
+         const MM = "inGame" === (0, nM.m)(["gameState"]).gameState;
+         return (0, NS.c)("shopInfo", (() => {
+           (0, AS.i)(xS(MM))
```

#### 358. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4228` → after: `L4538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4538) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4228)

```diff
-           (0, qS.f)(nS(GG))
+           (0, AS.i)(xS(MM))
```

#### 359. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4234` → after: `L4544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4544) · [Before (L4234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4234)

```diff
-         } = (0, SG.w)(), {
+         } = (0, SM.A)(), {
```

#### 360. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4236-L4237` → after: `L4546-L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4546-L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4546-L4547) · [Before (L4236-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4236-L4237)

```diff
-         } = (0, fG.r)();
-         (0, QG.F)();
+         } = (0, mM.q)();
+         (0, HM.y)();
```

#### 361. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4240` → after: `L4550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4550) · [Before (L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4240)

```diff
-           const GG = pG.b.register({
+           const MM = LM.d.register({
```

#### 362. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4251-L4252` → after: `L4561-L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4561-L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4561-L4562) · [Before (L4251-L4252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4251-L4252)

```diff
-           const ZG = (0, OG.k)((() => {
-               "inventory" !== pG.b.getActiveConsumerName() && SZ.forgetSurface()
+           const iM = (0, TM.l)((() => {
+               "inventory" !== LM.d.getActiveConsumerName() && Si.forgetSurface()
```

#### 363. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4256` → after: `L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4566) · [Before (L4256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4256)

```diff
-               (0, QG.l)() && (0, tG.e)(bG) && bG.closest(ob) && (0, OG.i)() && (0, OG.q)(bG)
+               (0, HM.g)() && (0, IM.i)(rM) && rM.closest(Gr) && (0, TM.i)() && (0, TM.r)(rM)
```

#### 364. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4282` → after: `L4592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4592) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4282)

```diff
-                   glyph: (0, VG.j)(GG)
+                   glyph: (0, zM.m)(MM)
```

#### 365. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4284` → after: `L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4594) · [Before (L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4284)

```diff
-                   children: GG(`controller:${SG}`)
+                   children: MM(`controller:${SM}`)
```

#### 366. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4369` → after: `L4679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4679) · [Before (L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4369)

```diff
-         const ZG = ((GG, bG) => [...xS[GG], bG ? DS : tS])(GG, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
+         const iM = ((MM, rM) => [...cS[MM], rM ? qS : KS])(MM, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
```

#### 367. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4412` → after: `L4722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4722) · [Before (L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4412)

```diff
-         return 1 === wG.length ? wG : GG
+         return 1 === OM.length ? OM : MM
```

#### 368. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4414` → after: `L4724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4724) · [Before (L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4414)

```diff
-     var VL = ZG(8698);
+     var Lj = iM(9255);
```

#### 369. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4439` → after: `L4749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4749) · [Before (L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4439)

```diff
-       KL = ["Ny", "nameTag"],
+       Jj = ["nQ", "nameTag"],
```

#### 370. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4455` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4765) · [Before (L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4455)

```diff
-         (0, mZ.d)(GG) ? (0, mZ.b)().close(): (GS.noteChosenStop(GG), GG.blur())
+         (0, ui.j)(MM) ? (0, ui.e)().close(): (rS.noteChosenStop(MM), MM.blur())
```

#### 371. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4481` → after: `L4791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4791) · [Before (L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4481)

```diff
-             (0, tG.d)(bG.target, " ");
+             (0, IM.g)(rM.target, " ");
```

#### 372. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4484` → after: `L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4794) · [Before (L4484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4484)

```diff
-             (0, tG.d)(bG.target, "\n");
+             (0, IM.g)(rM.target, "\n");
```

#### 373. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4487` → after: `L4797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4797) · [Before (L4487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4487)

```diff
-             (0, tG.i)(bG.target, -1);
+             (0, IM.m)(rM.target, -1);
```

#### 374. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4490` → after: `L4800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4800) · [Before (L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4490)

```diff
-             (0, tG.i)(bG.target, 1);
+             (0, IM.m)(rM.target, 1);
```

#### 375. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4520` → after: `L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4830) · [Before (L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4520)

```diff
-             (0, mZ.d)(bG.target) && (0, mZ.b)().selectNextChannel()
+             (0, ui.j)(rM.target) && (0, ui.e)().selectNextChannel()
```

#### 376. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4528` → after: `L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4838) · [Before (L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4528)

```diff
-         this.host.hide(), (0, mZ.d)(ZG) ? (0, mZ.b)().submit() : (GS.noteChosenStop(ZG), null === (GG = (bG = (0, mZ.c)(ZG)).submit) || void 0 === GG || GG.call(bG), document.activeElement === ZG && ZG.blur())
+         this.host.hide(), (0, ui.j)(iM) ? (0, ui.e)().submit() : (rS.noteChosenStop(iM), null === (MM = (rM = (0, ui.f)(iM)).submit) || void 0 === MM || MM.call(rM), document.activeElement === iM && iM.blur())
```

#### 377. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4542` → after: `L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4852) · [Before (L4542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4542)

```diff
-         (0, tG.d)(bG, YL(GG, ZG, wG)), this.host.setState({
+         (0, IM.g)(rM, zj(MM, iM, OM)), this.host.setState({
```

#### 378. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4552-L4553` → after: `L4862-L4863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4862-L4863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4862-L4863) · [Before (L4552-L4553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4552-L4553)

```diff
-           ZG && (bG.setSelectionRange(0, bG.value.length), (0, tG.d)(bG, ZG))
-         } else fL.claim(performance.now()) && (this.host.hide(), (0, mZ.b)().sendLine(this.phraseTexts[GG]))
+           iM && (rM.setSelectionRange(0, rM.value.length), (0, IM.g)(rM, iM))
+         } else Hj.claim(performance.now()) && (this.host.hide(), (0, ui.e)().sendLine(this.phraseTexts[MM]))
```

#### 379. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4556` → after: `L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4866) · [Before (L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4556)

```diff
-     var zL = ZG(8719);
+     var Uj = iM(9279);
```

#### 380. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4567` → after: `L4877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4877) · [Before (L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4567)

```diff
-         this.host = GG, this.editor = bG, this.lastDirection = null, this.navRepeat = new KG.d((0, hG.d)(EL)), this.commandRepeats = new Map(RS.filter((GG => {
+         this.host = MM, this.editor = rM, this.lastDirection = null, this.navRepeat = new hM.b((0, JM.d)(Gj)), this.commandRepeats = new Map(BS.filter((MM => {
```

#### 381. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4590` → after: `L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4900) · [Before (L4590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4590)

```diff
-           const ZG = (0, VG.j)(LG),
+           const iM = (0, zM.m)(jM),
```

#### 382. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4594` → after: `L4904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4904) · [Before (L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4594)

```diff
-         if (GG.wasPressed((0, VG.j)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
+         if (MM.wasPressed((0, zM.m)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
```

#### 383. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4602-L4604` → after: `L4912-L4914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4912-L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4912-L4914) · [Before (L4602-L4604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4602-L4604)

```diff
-         if (GG.wasPressed((0, VG.j)("keyboardClose"))) return void JL(bG);
-         const wG = (0, VG.j)("keyboardType");
-         if (GG.wasPressed(wG)) return pG.b.consumeButton(wG), void this.host.open(bG);
+         if (MM.wasPressed((0, zM.m)("keyboardClose"))) return void lj(rM);
+         const OM = (0, zM.m)("keyboardType");
+         if (MM.wasPressed(OM)) return LM.d.consumeButton(OM), void this.host.open(rM);
```

#### 384. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4607` → after: `L4917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4917) · [Before (L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4607)

```diff
-         if (this.lastDirection = SG, !LG || (0, mZ.d)(bG)) return;
+         if (this.lastDirection = SM, !jM || (0, ui.j)(rM)) return;
```

#### 385. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4609` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4919) · [Before (L4609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4609)

```diff
-         JL(bG), yG && pG.b.handOffHeldInput()
+         lj(rM), aM && LM.d.handOffHeldInput()
```

#### 386. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4613` → after: `L4923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4923) · [Before (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4613)

```diff
-         if ("Up" === GG && 0 === bG.focus.row && "chat" === bG.kind) return (0, mZ.b)().stepHistory(), void this.host.setState({
+         if ("Up" === MM && 0 === rM.focus.row && "chat" === rM.kind) return (0, ui.e)().stepHistory(), void this.host.setState({
```

#### 387. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4645` → after: `L4955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4955) · [Before (L4645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4645)

```diff
-         for (const bG of KG.z)
+         for (const rM of hM.A)
```

#### 388. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4647` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4957) · [Before (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4647)

```diff
-         return (0, KG.gb)((0, KG.i)(GG.leftStick, (0, fG.i)().moveDeadzone))
+         return (0, hM.hb)((0, hM.i)(MM.leftStick, (0, mM.j)().moveDeadzone))
```

#### 389. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4663` → after: `L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4973) · [Before (L4663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4663)

```diff
-         bG && YG.l.xh(zL.b, GG.visible)
+         rM && QM.i.Tz(Uj.e, MM.visible)
```

#### 390. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4671` → after: `L4981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4981) · [Before (L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4671)

```diff
-         const GG = pG.b.register({
+         const MM = LM.d.register({
```

#### 391. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4673` → after: `L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4983) · [Before (L4673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4673)

```diff
-             isActive: () => this.state.visible || (0, tG.e)(document.activeElement),
+             isActive: () => this.state.visible || (0, IM.i)(document.activeElement),
```

#### 392. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4680` → after: `L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4990) · [Before (L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4680)

```diff
-             wakePressActs: GG => uL.includes(GG) || !this.state.visible && GG === (0, VG.j)("keyboardType")
+             wakePressActs: MM => bj.includes(MM) || !this.state.visible && MM === (0, zM.m)("keyboardType")
```

#### 393. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4684` → after: `L4994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L4994) · [Before (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4684)

```diff
-             (0, tG.e)(bG) && (bG === this.pendingChatInput || (0, QG.l)() ? this.open(bG) : this.state.visible && bG !== this.state.target && (this.ownedField = null, this.hide()))
+             (0, IM.i)(rM) && (rM === this.pendingChatInput || (0, HM.g)() ? this.open(rM) : this.state.visible && rM !== this.state.target && (this.ownedField = null, this.hide()))
```

#### 394. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4692` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5002) · [Before (L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4692)

```diff
-             GG.isTrusted && this.state.visible && (GG => !GG.repeat && !iL.has(GG.key) && !(0, VL.c)(GG.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(GG.key))(GG) && this.hide()
+             MM.isTrusted && this.state.visible && (MM => !MM.repeat && !wj.has(MM.key) && !(0, Lj.e)(MM.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(MM.key))(MM) && this.hide()
```

#### 395. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4701` → after: `L5011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5011) · [Before (L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4701)

```diff
-         const LG = YG.l.subscribe(aS.d, (() => {
+         const jM = QM.i.subscribe(sS.d, (() => {
```

#### 396. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4704` → after: `L5014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5014) · [Before (L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4704)

```diff
-           yG = YG.l.subscribe(zL.c, (GG => {
+           aM = QM.i.subscribe(Uj.g, (MM => {
```

#### 397. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4708` → after: `L5018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5018) · [Before (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4708)

```diff
-           GG(), document.removeEventListener("focusin", bG, !0), document.removeEventListener("focusout", ZG, !0), window.removeEventListener("keydown", wG, !0), window.removeEventListener("resize", SG), YG.l.unsubscribe(LG), YG.l.unsubscribe(yG), this.clearPendingChat(), this.hi … [truncated]
+           MM(), document.removeEventListener("focusin", rM, !0), document.removeEventListener("focusout", iM, !0), window.removeEventListener("keydown", OM, !0), window.removeEventListener("resize", SM), QM.i.unsubscribe(jM), QM.i.unsubscribe(aM), this.clearPendingChat(), this.hi … [truncated]
```

#### 398. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4712` → after: `L5022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5022) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4712)

```diff
-         const GG = (0, mZ.b)();
+         const MM = (0, ui.e)();
```

#### 399. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4718` → after: `L5028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5028) · [Before (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4718)

```diff
-         (0, tG.e)(GG) ? (document.activeElement !== GG && GG.focus(), document.activeElement === GG && this.open(GG)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", GG)
+         (0, IM.i)(MM) ? (document.activeElement !== MM && MM.focus(), document.activeElement === MM && this.open(MM)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", MM)
```

#### 400. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4723` → after: `L5033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5033) · [Before (L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4723)

```diff
-         this.restoreInputMode(), (0, tG.j)(GG), this.savedInputMode = GG.getAttribute("inputmode"), GG.setAttribute("inputmode", "none");
+         this.restoreInputMode(), (0, IM.o)(MM), this.savedInputMode = MM.getAttribute("inputmode"), MM.setAttribute("inputmode", "none");
```

#### 401. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4728-L4729` → after: `L5038-L5039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5038-L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5038-L5039) · [Before (L4728-L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4728-L4729)

```diff
-           kind: (0, mZ.d)(GG) ? "chat" : null !== (bG = (0, mZ.c)(GG).kind) && void 0 !== bG ? bG : null,
-           accentsFirst: (wG = rS.d.get().getCurrentLanguageCode(), BS.has(wG)),
+           kind: (0, ui.j)(MM) ? "chat" : null !== (rM = (0, ui.f)(MM).kind) && void 0 !== rM ? rM : null,
+           accentsFirst: (OM = ES.e.get().getCurrentLanguageCode(), Mj.has(OM)),
```

#### 402. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4756` → after: `L5066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5066) · [Before (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4756)

```diff
-         this.state.visible ? this.padInput.onVisibleFrame(GG) : (0, tG.e)(bG) && this.padInput.onHiddenFrame(GG, bG)
+         this.state.visible ? this.padInput.onVisibleFrame(MM) : (0, IM.i)(rM) && this.padInput.onHiddenFrame(MM, rM)
```

#### 403. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4772` → after: `L5082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5082) · [Before (L4772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4772)

```diff
-     var WL = ZG(3617);
+     var gj = iM(3009);
```

#### 404. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4790` → after: `L5100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5100) · [Before (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4790)

```diff
-         Ny: "controller:keyboardTargetBookTitle"
+         nQ: "controller:keyboardTargetBookTitle"
```

#### 405. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4822` → after: `L5132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5132) · [Before (L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4822)

```diff
-         } = (0, SG.w)(), ZG = (() => {
+         } = (0, SM.A)(), iM = (() => {
```

#### 406. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4827-L4828` → after: `L5137-L5138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5137-L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5137-L5138) · [Before (L4827-L4828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4827-L4828)

```diff
-         })(), wG = (0, QG.B)(), LG = (0, PG.useRef)(null);
-         (0, fG.r)(), (0, QG.F)(), (0, PG.useEffect)((() => {
+         })(), OM = (0, HM.v)(), jM = (0, ZM.useRef)(null);
+         (0, mM.q)(), (0, HM.y)(), (0, ZM.useEffect)((() => {
```

#### 407. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4838` → after: `L5148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5148) · [Before (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4838)

```diff
-         const UG = null !== (GG = null === kG || void 0 === kG ? void 0 : kG.value) && void 0 !== GG ? GG : "",
+         const nM = null !== (MM = null === PM || void 0 === PM ? void 0 : PM.value) && void 0 !== MM ? MM : "",
```

#### 408. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4847` → after: `L5157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5157) · [Before (L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4847)

```diff
-           })(UG, UG.startsWith("/") ? (0, WL.g)() : [], pL.length),
+           })(nM, nM.startsWith("/") ? (0, gj.c)() : [], mj.length),
```

#### 409. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4851` → after: `L5161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5161) · [Before (L4851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4851)

```diff
-             return null !== (ZG = YG[bG]) && void 0 !== ZG ? ZG : ""
+             return null !== (iM = QM[rM]) && void 0 !== iM ? iM : ""
```

#### 410. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4895` → after: `L5205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5205) · [Before (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4895)

```diff
-           className: AG()(mZ.j, "top" === ZG.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
+           className: fM()(ui.p, "top" === iM.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
```

#### 411. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4900` → after: `L5210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5210) · [Before (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4900)

```diff
-             "--pad-keyboard-height": `${ZG.maxHeightPx}px`
+             "--pad-keyboard-height": `${iM.maxHeightPx}px`
```

#### 412. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4948` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5258) · [Before (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4948)

```diff
-                       glyph: (0, VG.j)(yG)
+                       glyph: (0, zM.m)(aM)
```

#### 413. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4975` → after: `L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5285) · [Before (L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L4975)

```diff
-         } = (0, tG.n)(bG), YG = "password" === bG.type ? "\u2022".repeat(yG.length) : yG;
+         } = (0, IM.p)(rM), QM = "password" === rM.type ? "\u2022".repeat(aM.length) : aM;
```

#### 414. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5003-L5004` → after: `L5313-L5314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5313-L5314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5313-L5314) · [Before (L5003-L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5003-L5004)

```diff
-     var PL = ZG(1343),
-       ML = ZG(3406);
+     var oj = iM(1464),
+       fj = iM(3831);
```

#### 415. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5007` → after: `L5317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5317) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5007)

```diff
-         return bG.map(VG.j)
+         return rM.map(zM.m)
```

#### 416. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5032` → after: `L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5342) · [Before (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5032)

```diff
-         if (((0, ML.k)(null === bG || void 0 === bG ? void 0 : bG.layer.kind, (0, ML.n)()) || wG) && ZG.push(...eL(document.querySelectorAll(qL.join(",")))), 0 === ZG.length) return null;
+         if (((0, fj.g)(null === rM || void 0 === rM ? void 0 : rM.layer.kind, (0, fj.i)()) || OM) && iM.push(...Fj(document.querySelectorAll(Aj.join(",")))), 0 === iM.length) return null;
```

#### 417. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5036` → after: `L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5346) · [Before (L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5036)

```diff
-         } = GG.getBoundingClientRect(), yG = window.innerHeight - 8, kG = (0, ML.t)(yG, {
+         } = MM.getBoundingClientRect(), aM = window.innerHeight - 8, PM = (0, fj.m)(aM, {
```

#### 418. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5044` → after: `L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5354) · [Before (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5044)

```diff
-           ZG = GG ? `${Math.round(window.innerHeight-GG.getBoundingClientRect().top)}px` : "";
+           iM = MM ? `${Math.round(window.innerHeight-MM.getBoundingClientRect().top)}px` : "";
```

#### 419. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5050` → after: `L5360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5360) · [Before (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5050)

```diff
-         } = (0, SG.w)(), {
+         } = (0, SM.A)(), {
```

#### 420. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5052-L5053` → after: `L5362-L5363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5362-L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5362-L5363) · [Before (L5052-L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5052-L5053)

```diff
-         } = (0, fG.r)(), ZG = (0, QG.B)(), [wG, LG] = (0, PG.useState)(!1), [yG, YG] = (0, PG.useState)([]), [hG, dG] = (0, PG.useState)(null), JG = (0, PG.useRef)(null), rG = (0, PG.useRef)(null);
-         (0, JS.g)(zL.b, (GG => {
+         } = (0, mM.q)(), iM = (0, HM.v)(), [OM, jM] = (0, ZM.useState)(!1), [aM, QM] = (0, ZM.useState)([]), [JM, dM] = (0, ZM.useState)(null), yM = (0, ZM.useRef)(null), lM = (0, ZM.useRef)(null);
+         (0, lS.d)(Uj.e, (MM => {
```

#### 421. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5055` → after: `L5365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5365) · [Before (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5055)

```diff
-         })), (0, JS.g)(ML.r, (() => {
+         })), (0, lS.d)(fj.l, (() => {
```

#### 422. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5066-L5067` → after: `L5376-L5377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5376-L5377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5376-L5377) · [Before (L5066-L5067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5066-L5067)

```diff
-                 const bG = pG.b.getActiveConsumerName(),
-                   ZG = (0, ML.g)();
+                 const rM = LM.d.getActiveConsumerName(),
+                   iM = (0, fj.e)();
```

#### 423. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5069-L5070` → after: `L5379-L5380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5379-L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5379-L5380) · [Before (L5069-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5069-L5070)

```diff
-                   const GG = (0, VG.j)(ZG),
-                     bG = "emoteWheel" === ZG && "wheel" === (0, fG.i)().emoteButton || !(0, KG.F)(pG.b.getLastFrame().values, GG) ? {
+                   const MM = (0, zM.m)(iM),
+                     rM = "emoteWheel" === iM && "wheel" === (0, mM.j)().emoteButton || !(0, hM.J)(LM.d.getLastFrame().values, MM) ? {
```

#### 424. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5078` → after: `L5388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5388) · [Before (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5078)

```diff
-                     glyphs: [(0, VG.v)(GG)],
+                     glyphs: [(0, zM.E)(MM)],
```

#### 425. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5086` → after: `L5396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5396) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5086)

```diff
-                 if (!wG || "focus" !== bG && "cursor" !== bG) return (0, ML.c)(VG.j);
+                 if (!OM || "focus" !== rM && "cursor" !== rM) return (0, fj.c)(zM.m);
```

#### 426. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5092` → after: `L5402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5402) · [Before (L5092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5092)

```diff
-                   yG = (0, RG.u)(wG.root),
+                   aM = (0, FM.y)(OM.root),
```

#### 427. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5117` → after: `L5427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5427) · [Before (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5117)

```diff
-                 dG && (0, vw.d)(dG) ? SG.push({
+                 dM && (0, sO.b)(dM) ? SM.push({
```

#### 428. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5120` → after: `L5430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5430) · [Before (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5120)

```diff
-                 }) : dG && (0, RG.C)(dG) ? SG.push({
+                 }) : dM && (0, FM.B)(dM) ? SM.push({
```

#### 429. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5143-L5144` → after: `L5453-L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5453-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5453-L5454) · [Before (L5143-L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5143-L5144)

```diff
-                 const zG = UG.e.get("openEverythingMenuName");
-                 return "inGame" === UG.e.get("gameState") && "popup" !== wG.layer.kind && null !== zG && ((0, UZ.m)(zG) ? SG.push(...sL("leaderboard", "controller:menusClose")) : zG !== kZ.u.LOBBY_LEADERBOARD && SG.push(...sL("leaderboard", "controller:menusLobby"))), SG.push({
+                 const EM = nM.d.get("openEverythingMenuName");
+                 return "inGame" === nM.d.get("gameState") && "popup" !== OM.layer.kind && null !== EM && ((0, ni.m)(EM) ? SM.push(...Nj("leaderboard", "controller:menusClose")) : EM !== Pi.m.LOBBY_LEADERBOARD && SM.push(...Nj("leaderboard", "controller:menusLobby"))), SM.push({
```

#### 430. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5150` → after: `L5460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5460) · [Before (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5150)

```diff
-               wG = ((GG, bG) => `${GG.map((GG=>`${GG.glyphs.join("+")}:${GG.labelKey}`)).join("|")}@${bG}`)(bG, ZG);
+               OM = ((MM, rM) => `${MM.map((MM=>`${MM.glyphs.join("+")}:${MM.labelKey}`)).join("|")}@${rM}`)(rM, iM);
```

#### 431. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5184-L5185` → after: `L5494-L5495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5494-L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5494-L5495) · [Before (L5184-L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5184-L5185)

```diff
-     var tL = ZG(1709);
-     const DL = [xG.b, "label", "[data-pad-slider]"].join(","),
+     var Kj = iM(1835);
+     const qj = [VM.c, "label", "[data-pad-slider]"].join(","),
```

#### 432. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5192` → after: `L5502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5502) · [Before (L5192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5192)

```diff
-           const ZG = document.documentElement.classList.contains(QG.t) ? bG[bG.length - 1] : void 0;
+           const iM = document.documentElement.classList.contains(HM.m) ? rM[rM.length - 1] : void 0;
```

#### 433. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5220` → after: `L5530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5530) · [Before (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5220)

```diff
-           })) && aG(ZG, GG, bG) ? ZG : null
+           })) && WM(iM, MM, rM) ? iM : null
```

#### 434. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5229` → after: `L5539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5539) · [Before (L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5229)

```diff
-           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
+           }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this … [truncated]
```

#### 435. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5235` → after: `L5545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5545) · [Before (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5235)

```diff
-           const GG = pG.b.register({
+           const MM = LM.d.register({
```

#### 436. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5244` → after: `L5554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5554) · [Before (L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5244)

```diff
-               wakePressActs: GG => (0, pG.d)(GG) || GG === (0, VG.j)("menuConfirm") && (0, RG.G)((0, QG.d)())
+               wakePressActs: MM => (0, LM.g)(MM) || MM === (0, zM.m)("menuConfirm") && (0, FM.C)((0, HM.d)())
```

#### 437. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5246` → after: `L5556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5556) · [Before (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5246)

```diff
-             bG = (0, Zw.k)((GG => {
+             rM = (0, SO.m)((MM => {
```

#### 438. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5250` → after: `L5560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5560) · [Before (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5250)

```diff
-             ZG = YG.l.subscribe("appManagerUpdated|activeInputDevice", (GG => {
+             iM = QM.i.subscribe("appManagerUpdated|activeInputDevice", (MM => {
```

#### 439. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5254` → after: `L5564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5564) · [Before (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5254)

```diff
-             GG(), bG(), YG.l.unsubscribe(ZG), this.deactivate()
+             MM(), rM(), QM.i.unsubscribe(iM), this.deactivate()
```

#### 440. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5261` → after: `L5571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5571) · [Before (L5261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5261)

```diff
-           return this.active && !this.hidden && (0, QG.l)()
+           return this.active && !this.hidden && (0, HM.g)()
```

#### 441. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5270` → after: `L5580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5580) · [Before (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5270)

```diff
-           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.xh()
+           this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Tz()
```

#### 442. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5291` → after: `L5601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5601) · [Before (L5291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5291)

```diff
-           }, this.xh())
+           }, this.Tz())
```

#### 443. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5299-L5301` → after: `L5609-L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5609-L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5609-L5611) · [Before (L5299-L5301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5299-L5301)

```diff
-           if (ZG && this.jumpTo(ZG), !(0, QG.l)()) return void this.hide();
-           const wG = (0, VG.j)("menuToggleCursor");
-           if (GG.wasPressed(wG)) return pG.b.consumeButton(wG), void ow(this.getHandoff(null));
+           if (iM && this.jumpTo(iM), !(0, HM.g)()) return void this.hide();
+           const OM = (0, zM.m)("menuToggleCursor");
+           if (MM.wasPressed(OM)) return LM.d.consumeButton(OM), void eO(this.getHandoff(null));
```

#### 444. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5303-L5306` → after: `L5613-L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5613-L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5613-L5616) · [Before (L5303-L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5303-L5306)

```diff
-           const SG = (0, VG.j)("menuConfirm"),
-             LG = (0, VG.j)("menuSecondary");
-           if (GG.wasPressed((0, VG.j)("menuBack"))) return (0, RG.m)(bG.root) || (0, RG.f)(bG.root) || pw(), void this.xh();
-           if (xZ(null, GG, bG)) return GG.wasReleased(SG) && this.press && (this.updateHit(!1), this.updateConfirm(GG, SG)), void this.xh();
+           const SM = (0, zM.m)("menuConfirm"),
+             jM = (0, zM.m)("menuSecondary");
+           if (MM.wasPressed((0, zM.m)("menuBack"))) return (0, FM.m)(rM.root) || (0, FM.g)(rM.root) || HO(), void this.Tz();
+           if (MO(null, MM, rM)) return MM.wasReleased(SM) && this.press && (this.updateHit(!1), this.updateConfirm(MM, SM)), void this.Tz();
```

#### 445. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5318` → after: `L5628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5628) · [Before (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5318)

```diff
-             kG = (0, fG.i)().moveDeadzone,
+             PM = (0, mM.j)().moveDeadzone,
```

#### 446. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5326` → after: `L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5636) · [Before (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5326)

```diff
-             if (!UG && !uG(GG.rightStick) && !bG && !ZG && !GG.wokeDevice) return void this.xh();
+             if (!nM && !eM(MM.rightStick) && !rM && !iM && !MM.wokeDevice) return void this.Tz();
```

#### 447. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5329` → after: `L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5639) · [Before (L5329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5329)

```diff
-             }, GG.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.xh()
+             }, MM.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Tz()
```

#### 448. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5338` → after: `L5648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5648) · [Before (L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5338)

```diff
-             cursorSpeedPercent: (0, fG.i)().cursorSpeed,
+             cursorSpeedPercent: (0, mM.j)().cursorSpeed,
```

#### 449. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5347` → after: `L5657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5657) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5347)

```diff
-           (hG || dG || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(hG), this.updateConfirm(GG, SG), this.updateSecondary(GG, LG), this.updateScroll(GG, bG), this.xh()
+           (JM || dM || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(JM), this.updateConfirm(MM, SM), this.updateSecondary(MM, jM), this.updateScroll(MM, rM), this.Tz()
```

#### 450. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5353` → after: `L5663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5663) · [Before (L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5353)

```diff
-               key: (0, Zw.s)(GG.layer),
+               key: (0, SO.r)(MM.layer),
```

#### 451. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5373` → after: `L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5683) · [Before (L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5373)

```diff
-           const wG = null !== ZG && void 0 !== ZG ? ZG : GS.pickInitial(bG.root, {
+           const OM = null !== iM && void 0 !== iM ? iM : rS.pickInitial(rM.root, {
```

#### 452. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5378` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5688) · [Before (L5378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5378)

```diff
-           wG && (this.pendingPageStart = null, this.jumpTo((0, RG.y)(wG)))
+           OM && (this.pendingPageStart = null, this.jumpTo((0, FM.z)(OM)))
```

#### 453. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5388` → after: `L5698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5698) · [Before (L5388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5388)

```diff
-             wG = ZG && GG.order <= this.layerOrder ? ZG : GS.getLayerStartPoint(GG.root);
+             OM = iM && MM.order <= this.layerOrder ? iM : rS.getLayerStartPoint(MM.root);
```

#### 454. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5395` → after: `L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5705) · [Before (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5395)

```diff
-             element: null !== (bG = this.interactive) && void 0 !== bG ? bG : this.findDraggedSliderNearby(),
+             element: null !== (rM = this.interactive) && void 0 !== rM ? rM : this.findDraggedSliderNearby(),
```

#### 455. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5406` → after: `L5716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5716) · [Before (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5406)

```diff
-           return ZG >= bG.top - 40 && ZG <= bG.bottom + 40 ? GG : null
+           return iM >= rM.top - 40 && iM <= rM.bottom + 40 ? MM : null
```

#### 456. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5410-L5411` → after: `L5720-L5721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5720-L5721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5720-L5721) · [Before (L5410-L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5410-L5411)

```diff
-           const bG = KG.z.find((bG => GG.wasPressed(bG)));
-           return !!bG && (ZG = this.getHandoff(bG), Jw = Qw(ZG), hw = null, rw.lock(), pG.b.handOffHeldInput(), !0);
+           const rM = hM.A.find((rM => MM.wasPressed(rM)));
+           return !!rM && (iM = this.getHandoff(rM), EO = JO(iM), yO = null, UO.lock(), LM.d.handOffHeldInput(), !0);
```

#### 457. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5425` → after: `L5735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5735) · [Before (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5425)

```diff
-           const ZG = (0, fG.i)().cursorMagnetism && !(0, tL.d)(GG) && !GG.closest("[data-pad-slider]"),
+           const iM = (0, mM.j)().cursorMagnetism && !(0, Kj.e)(MM) && !MM.closest("[data-pad-slider]"),
```

#### 458. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5439` → after: `L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5749) · [Before (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5439)

```diff
-             wG = ZG && !(0, JG.q)(ZG) && (GG => {
+             OM = iM && !(0, yM.p)(iM) && (MM => {
```

#### 459. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5443-L5444` → after: `L5753-L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5753-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5753-L5754) · [Before (L5443-L5444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5443-L5444)

```diff
-             })(ZG) ? ZG : null;
-           if (wG !== this.hit) return (0, RG.o)(this.hit, wG, bG), this.hit = wG, void this.setInteractive(wG ? (GG => {
+             })(iM) ? iM : null;
+           if (OM !== this.hit) return (0, FM.t)(this.hit, OM, rM), this.hit = OM, void this.setInteractive(OM ? (MM => {
```

#### 460. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5448` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5758) · [Before (L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5448)

```diff
-               const GG = null !== (ZG = null === (wG = bG.parentElement) || void 0 === wG ? void 0 : wG.closest("[data-pad-focusable]")) && void 0 !== ZG ? ZG : bG;
+               const MM = null !== (iM = null === (OM = rM.parentElement) || void 0 === OM ? void 0 : OM.closest("[data-pad-focusable]")) && void 0 !== iM ? iM : rM;
```

#### 461. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5466` → after: `L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5776) · [Before (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5466)

```diff
-           GG && wG && (0, RG.o)(wG, wG, bG)
+           MM && OM && (0, FM.t)(OM, OM, rM)
```

#### 462. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5476` → after: `L5786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5786) · [Before (L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5476)

```diff
-           this.hit && (0, RG.o)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
+           this.hit && (0, FM.t)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
```

#### 463. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5483` → after: `L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5793) · [Before (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5483)

```diff
-           if (!GG || (0, RG.C)(GG)) return {
+           if (!MM || (0, FM.B)(MM)) return {
```

#### 464. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5486` → after: `L5796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5796) · [Before (L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5486)

```diff
-           const bG = (0, vw.d)(GG),
+           const rM = (0, sO.b)(MM),
```

#### 465. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5492` → after: `L5802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5802) · [Before (L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5492)

```diff
-           } : ((0, RG.q)(GG, this.getPoint()), {
+           } : ((0, FM.w)(MM, this.getPoint()), {
```

#### 466. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5521-L5522` → after: `L5831-L5832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5831-L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5831-L5832) · [Before (L5521-L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5521-L5522)

```diff
-             const GG = null !== LG && void 0 !== LG ? LG : ZG.target.isConnected ? ZG.target : null;
-             GG && (0, RG.r)(GG, SG);
+             const MM = null !== jM && void 0 !== jM ? jM : iM.target.isConnected ? iM.target : null;
+             MM && (0, FM.x)(MM, SM);
```

#### 467. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5528` → after: `L5838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5838) · [Before (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5528)

```diff
-             bG && (GS.noteCursorActivation(bG), (0, JG.g)(bG, new MouseEvent("click", (0, RG.N)(SG, 0, 0))), (0, RG.i)(bG), (0, RG.L)(bG) && (0, RG.J)(bG))
+             rM && (rS.noteCursorActivation(rM), (0, yM.f)(rM, new MouseEvent("click", (0, FM.J)(SM, 0, 0))), (0, FM.j)(rM), (0, FM.F)(rM) && (0, FM.E)(rM))
```

#### 468. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5533-L5534` → after: `L5843-L5844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5843-L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5843-L5844) · [Before (L5533-L5534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5533-L5534)

```diff
-           const wG = null !== (GG = null === (bG = this.hit) || void 0 === bG ? void 0 : bG.closest("[data-pad-repeat]")) && void 0 !== GG ? GG : null;
-           this.repeatStop = wG, this.repeatKey = null !== (ZG = null === wG || void 0 === wG ? void 0 : wG.getAttribute("data-pad-repeat")) && void 0 !== ZG ? ZG : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
+           const OM = null !== (MM = null === (rM = this.hit) || void 0 === rM ? void 0 : rM.closest("[data-pad-repeat]")) && void 0 !== MM ? MM : null;
+           this.repeatStop = OM, this.repeatKey = null !== (iM = null === OM || void 0 === OM ? void 0 : OM.getAttribute("data-pad-repeat")) && void 0 !== iM ? iM : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
```

#### 469. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5540` → after: `L5850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5850) · [Before (L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5540)

```diff
-           GG.isConnected && !(0, xG.s)(GG) && GG.getAttribute("data-pad-repeat") === this.repeatKey && bG && GG.contains(bG) ? GG.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, GS.noteCursorActivation(GG), (0, JG.g … [truncated]
+           MM.isConnected && !(0, VM.s)(MM) && MM.getAttribute("data-pad-repeat") === this.repeatKey && rM && MM.contains(rM) ? MM.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, rS.noteCursorActivation(MM), (0, yM.f … [truncated]
```

#### 470. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5546` → after: `L5856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5856) · [Before (L5546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5546)

```diff
-           "slider" === GG.kind && GG.adjuster.endDrag(), "pointer" === GG.kind && GG.target.isConnected && (0, RG.r)(GG.target, this.getPoint())
+           "slider" === MM.kind && MM.adjuster.endDrag(), "pointer" === MM.kind && MM.target.isConnected && (0, FM.x)(MM.target, this.getPoint())
```

#### 471. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5552` → after: `L5862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5862) · [Before (L5552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5552)

```diff
-           GG.wasPressed(bG) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !GG.isHeld(bG) && (this.secondaryArmed = !1, GG.wasReleased(bG) && this.hit && (0, RG.n)(this.hit, this.getPoint(), 2))
+           MM.wasPressed(rM) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !MM.isHeld(rM) && (this.secondaryArmed = !1, MM.wasReleased(rM) && this.hit && (0, FM.q)(this.hit, this.getPoint(), 2))
```

#### 472. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5600` → after: `L5910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5910) · [Before (L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5600)

```diff
-           bG = (0, QG.B)();
+           rM = (0, HM.v)();
```

#### 473. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5620` → after: `L5930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5930) · [Before (L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5620)

```diff
-                 return null !== bG && void 0 !== bG && bG.isConnected ? bG : null
+                 return null !== rM && void 0 !== rM && rM.isConnected ? rM : null
```

#### 474. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5623` → after: `L5933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5933) · [Before (L5623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5623)

```diff
-               const kG = null !== (bG = null === SG || void 0 === SG ? void 0 : SG.closest("[data-pad-reticle-box]")) && void 0 !== bG ? bG : SG;
+               const PM = null !== (rM = null === SM || void 0 === SM ? void 0 : SM.closest("[data-pad-reticle-box]")) && void 0 !== rM ? rM : SM;
```

#### 475. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5658` → after: `L5968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R5968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L5968) · [Before (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5658)

```diff
-         GG.style.transform = `translate3d(${bG.x}px, ${bG.y}px, 0)`, GG.classList.toggle("Visible", bG.visible), GG.classList.toggle("Pressed", bG.pressed)
+         MM.style.transform = `translate3d(${rM.x}px, ${rM.y}px, 0)`, MM.classList.toggle("Visible", rM.visible), MM.classList.toggle("Pressed", rM.pressed)
```

#### 476. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5700` → after: `L6010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6010) · [Before (L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5700)

```diff
-             return (0, Zw.o)({
+             return (0, SO.p)({
```

#### 477. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5711` → after: `L6021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6021) · [Before (L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5711)

```diff
-                     return null !== (ZG = [...GG.querySelectorAll("button")].find((GG => !GG.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== ZG ? ZG : null
+                     return null !== (iM = [...MM.querySelectorAll("button")].find((MM => !MM.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== iM ? iM : null
```

#### 478. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5729-L5730` → after: `L6039-L6040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6039-L6040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6039-L6040) · [Before (L5729-L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5729-L5730)

```diff
-           ZG = yG.d.onFrame((() => {
-             const GG = (0, QG.l)() ? Vw() : null,
+           iM = aM.g.onFrame((() => {
+             const MM = (0, HM.g)() ? mO() : null,
```

#### 479. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5743` → after: `L6053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6053) · [Before (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5743)

```diff
-           const GG = (0, JG.i)(document.body),
+           const MM = (0, yM.n)(document.body),
```

#### 480. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5753` → after: `L6063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6063) · [Before (L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5753)

```diff
-         } = (0, fG.r)(), bG = (0, PL.w)() && GG;
+         } = (0, mM.q)(), rM = (0, oj.y)() && MM;
```

#### 481. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5762-L5765` → after: `L6072-L6075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6072-L6075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6072-L6075) · [Before (L5762-L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5762-L5765)

```diff
-     var Vy = ZG(8837),
-       py = ZG(8854),
-       fy = ZG(8842);
-     ZG(8860);
+     var La = iM(9383),
+       ma = iM(9408),
+       Ha = iM(9400);
+     iM(9410);
```

#### 482. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5774` → after: `L6084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6084) · [Before (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5774)

```diff
-           kG((0, fy.E)(GG, bG, yG.current))
+           PM((0, Ha.I)(MM, rM, aM.current))
```

#### 483. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5776-L5778` → after: `L6086-L6088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6086-L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6086-L6088) · [Before (L5776-L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5776-L5778)

```diff
-         (0, PG.useLayoutEffect)((() => (bG(ZG), (0, ML.z)(GG, ZG), YG.l.xh(ML.r), () => {
-           bG(!1), (0, ML.z)(GG, !1), YG.l.xh(ML.r)
-         })), [ZG, GG, bG]), (0, JS.g)("appManagerUpdated|activeInputDevice", (GG => {
+         (0, ZM.useLayoutEffect)((() => (rM(iM), (0, fj.q)(MM, iM), QM.i.Tz(fj.l), () => {
+           rM(!1), (0, fj.q)(MM, !1), QM.i.Tz(fj.l)
+         })), [iM, MM, rM]), (0, lS.d)("appManagerUpdated|activeInputDevice", (MM => {
```

#### 484. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5780` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6090) · [Before (L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5780)

```diff
-         })), (0, JS.g)("appManagerUpdated|gameState", (GG => {
+         })), (0, lS.d)("appManagerUpdated|gameState", (MM => {
```

#### 485. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5784` → after: `L6094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6094) · [Before (L5784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5784)

```diff
-           (0, UZ.t)() && UG()
+           (0, ni.r)() && nM()
```

#### 486. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5786` → after: `L6096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6096) · [Before (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5786)

```diff
-         return (0, JS.g)("appManagerUpdated|openEverythingMenuName", fG), (0, JS.g)("appManagerUpdated|openInGameMenuName", fG), {
+         return (0, lS.d)("appManagerUpdated|openEverythingMenuName", mM), (0, lS.d)("appManagerUpdated|openInGameMenuName", mM), {
```

#### 487. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5812-L5813` → after: `L6122-L6123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6122-L6123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6122-L6123) · [Before (L5812-L5813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5812-L5813)

```diff
-               width: 2 * fy.r + "rem",
-               height: 2 * fy.r + "rem"
+               width: 2 * Ha.u + "rem",
+               height: 2 * Ha.u + "rem"
```

#### 488. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5817` → after: `L6127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6127) · [Before (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5817)

```diff
-               viewBox: `0 0 ${fy.m} ${fy.m}`,
+               viewBox: `0 0 ${Ha.n} ${Ha.n}`,
```

#### 489. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5819` → after: `L6129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6129) · [Before (L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5819)

```diff
-                 d: (0, fy.v)(GG, ZG, fy.e, fy.i, fy.l),
+                 d: (0, Ha.x)(MM, iM, Ha.h, Ha.j, Ha.l),
```

#### 490. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5826-L5827` → after: `L6136-L6137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6136-L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6136-L6137) · [Before (L5826-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5826-L5827)

```diff
-                 cx: fy.e,
-                 cy: fy.e,
+                 cx: Ha.h,
+                 cy: Ha.h,
```

#### 491. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5831-L5833` → after: `L6141-L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6141-L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6141-L6143) · [Before (L5831-L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5831-L5833)

```diff
-                 cx: fy.e,
-                 cy: fy.e,
-                 r: fy.i
+                 cx: Ha.h,
+                 cy: Ha.h,
+                 r: Ha.j
```

#### 492. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5836` → after: `L6146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6146) · [Before (L5836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5836)

```diff
-                 d: (0, fy.v)(wG, ZG, fy.e, fy.i, fy.l)
+                 d: (0, Ha.x)(OM, iM, Ha.h, Ha.j, Ha.l)
```

#### 493. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5839` → after: `L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6149) · [Before (L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5839)

```diff
-               const bG = (0, fy.B)(GG, ZG);
+               const rM = (0, Ha.C)(MM, iM);
```

#### 494. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5845-L5846` → after: `L6155-L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6155-L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6155-L6156) · [Before (L5845-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5845-L5846)

```diff
-                   left: `calc(50% + ${fy.c*Math.cos(bG)}rem)`,
-                   top: `calc(50% + ${fy.c*Math.sin(bG)}rem)`
+                   left: `calc(50% + ${Ha.e*Math.cos(rM)}rem)`,
+                   top: `calc(50% + ${Ha.e*Math.sin(rM)}rem)`
```

#### 495. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5862-L5865` → after: `L6172-L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6172-L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6172-L6175) · [Before (L5862-L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5862-L5865)

```diff
-         } = (0, SG.w)(), bG = Qy("chat", FZ.m), ZG = (0, PG.useMemo)((() => pL.map((bG => GG(bG)))), [GG]);
-         return (0, JS.g)(FZ.l, (() => {
-           bG.open || (0, Vy.g)() || (0, py.m)() || "inGame" !== UG.e.get("gameState") || (0, UZ.t)() || !(0, mZ.b)() || bG.show()
-         })), (0, JS.g)(FZ.f, (GG => {
+         } = (0, SM.A)(), rM = ha("chat", Wi.m), iM = (0, ZM.useMemo)((() => mj.map((rM => MM(rM)))), [MM]);
+         return (0, lS.d)(Wi.k, (() => {
+           rM.open || (0, La.g)() || (0, ma.s)() || "inGame" !== nM.d.get("gameState") || (0, ni.r)() || !(0, ui.e)() || rM.show()
+         })), (0, lS.d)(Wi.e, (MM => {
```

#### 496. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5867` → after: `L6177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6177) · [Before (L5867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5867)

```diff
-         })), (0, JS.g)(FZ.j, (() => {
+         })), (0, lS.d)(Wi.j, (() => {
```

#### 497. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5871-L5872` → after: `L6181-L6182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6181-L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6181-L6182) · [Before (L5871-L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5871-L5872)

```diff
-           null !== wG ? fL.claim(performance.now()) && (bG.close(), null === (GG = (0, mZ.b)()) || void 0 === GG || GG.sendLine(ZG[wG])) : bG.close()
-         })), (0, JS.g)(FZ.i, bG.close), bG.open ? (0, sG.jsx)(Ky, {
+           null !== OM ? Hj.claim(performance.now()) && (rM.close(), null === (MM = (0, ui.e)()) || void 0 === MM || MM.sendLine(iM[OM])) : rM.close()
+         })), (0, lS.d)(Wi.h, rM.close), rM.open ? (0, YM.jsx)(Ja, {
```

#### 498. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5884-L5887` → after: `L6194-L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6194-L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6194-L6197) · [Before (L5884-L5887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5884-L5887)

```diff
-         } = (0, SG.w)(), bG = Qy("actionButton", py.q), [ZG, wG] = (0, PG.useState)([]);
-         if ((0, JS.g)(py.g, (GG => {
-             bG.open || (0, Vy.g)() || (0, FZ.c)() || "inGame" !== UG.e.get("gameState") || (0, UZ.t)() || (wG(GG), bG.show())
-           })), (0, JS.g)(py.b, (GG => {
+         } = (0, SM.A)(), rM = ha("actionButton", ma.w), [iM, OM] = (0, ZM.useState)([]);
+         if ((0, lS.d)(ma.l, (MM => {
+             rM.open || (0, La.g)() || (0, Wi.c)() || "inGame" !== nM.d.get("gameState") || (0, ni.r)() || (OM(MM), rM.show())
+           })), (0, lS.d)(ma.b, (MM => {
```

#### 499. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5889` → after: `L6199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6199) · [Before (L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5889)

```diff
-           })), (0, JS.g)(py.e, (() => {
+           })), (0, lS.d)(ma.j, (() => {
```

#### 500. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5892-L5893` → after: `L6202-L6203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6202-L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6202-L6203) · [Before (L5892-L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5892-L5893)

```diff
-             bG.close(), null !== GG && YG.l.xh(py.j, ZG[GG])
-           })), (0, JS.g)(py.c, bG.close), !bG.open) return null;
+             rM.close(), null !== MM && QM.i.Tz(ma.p, iM[MM])
+           })), (0, lS.d)(ma.f, rM.close), !rM.open) return null;
```

#### 501. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5911` → after: `L6221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6221) · [Before (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5911)

```diff
-     var ry = ZG(80);
+     var Ea = iM(83);
```

#### 502. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5914-L5915` → after: `L6224-L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6224-L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6224-L6225) · [Before (L5914-L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5914-L5915)

```diff
-         const ZG = (0, JG.i)(document.getElementById("root")),
-           wG = (0, QG.f)(),
+         const iM = (0, yM.n)(document.getElementById("root")),
+           OM = (0, HM.e)(),
```

#### 503. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5917` → after: `L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6227) · [Before (L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5917)

```diff
-             const GG = [YG.l.subscribe(ZS.i, (() => {
+             const MM = [QM.i.subscribe(OS.h, (() => {
```

#### 504. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5919` → after: `L6229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6229) · [Before (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5919)

```diff
-               })), YG.l.subscribe("damagedByOtherPlayer", (() => {
+               })), QM.i.subscribe("damagedByOtherPlayer", (() => {
```

#### 505. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5921` → after: `L6231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6231) · [Before (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5921)

```diff
-               })), YG.l.subscribe("yourAttackHit", (GG => {
+               })), QM.i.subscribe("yourAttackHit", (MM => {
```

#### 506. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5927` → after: `L6237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6237) · [Before (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5927)

```diff
-               bG = yG.d.onActivePadChanged((GG => {
+               rM = aM.g.onActivePadChanged((MM => {
```

#### 507. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5931` → after: `L6241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6241) · [Before (L5931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5931)

```diff
-               for (const bG of GG) YG.l.unsubscribe(bG);
+               for (const rM of MM) QM.i.unsubscribe(rM);
```

#### 508. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5937` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6247) · [Before (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5937)

```diff
-               getVisitId: pS.f,
+               getVisitId: mS.e,
```

#### 509. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5940-L5941` → after: `L6250-L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6250-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6250-L6251) · [Before (L5940-L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5940-L5941)

```diff
-                 const GG = VS.l.getItem(QS);
-                 return "string" === typeof GG ? GG : null
+                 const MM = LS.k.getItem(hS);
+                 return "string" === typeof MM ? MM : null
```

#### 510. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5944` → after: `L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6254) · [Before (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5944)

```diff
-                 VS.l.setItem(QS, GG)
+                 LS.k.setItem(hS, MM)
```

#### 511. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5946` → after: `L6256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6256) · [Before (L5946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5946)

```diff
-               isPadActive: QG.l,
+               isPadActive: HM.g,
```

#### 512. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5949` → after: `L6259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6259) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5949)

```diff
-                 return null !== (GG = null === (bG = yG.d.getActivePad()) || void 0 === bG ? void 0 : bG.family) && void 0 !== GG ? GG : null
+                 return null !== (MM = null === (rM = aM.g.getActivePad()) || void 0 === rM ? void 0 : rM.family) && void 0 !== MM ? MM : null
```

#### 513. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5952-L5953` → after: `L6262-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6262-L6263) · [Before (L5952-L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5952-L5953)

```diff
-               getInputType: YS.d,
-               NQ: US.logControllerUsedToGtag
+               getInputType: zS.c,
+               aL: QS.logControllerUsedToGtag
```

#### 514. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5962` → after: `L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6272) · [Before (L5962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5962)

```diff
-               SG = YG.l.subscribe("appManagerUpdated|activeInputDevice", (() => {
+               SM = QM.i.subscribe("appManagerUpdated|activeInputDevice", (() => {
```

#### 515. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5965` → after: `L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6275) · [Before (L5965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5965)

```diff
-               LG = (0, pS.j)((() => {
+               jM = (0, mS.i)((() => {
```

#### 516. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5969` → after: `L6279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6279) · [Before (L5969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5969)

```diff
-               YG.l.unsubscribe(SG), LG(), null !== ZG && clearTimeout(ZG)
+               QM.i.unsubscribe(SM), jM(), null !== iM && clearTimeout(iM)
```

#### 517. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5972-L5974` → after: `L6282-L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6282-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6282-L6284) · [Before (L5972-L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5972-L5974)

```diff
-           kG = yG.d.onFrame(((GG, bG, ZG) => {
-             const wG = (0, QG.s)(GG, ZG);
-             pG.b.dispatch(GG, bG, wG)
+           PM = aM.g.onFrame(((MM, rM, iM) => {
+             const OM = (0, HM.k)(MM, iM);
+             LM.d.dispatch(MM, rM, OM)
```

#### 518. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5976-L5977` → after: `L6286-L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6286-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6286-L6287) · [Before (L5976-L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5976-L5977)

```diff
-         let VG = null !== (GG = null === (bG = yG.d.getActivePad()) || void 0 === bG ? void 0 : bG.family) && void 0 !== GG ? GG : null;
-         const KG = yG.d.onActivePadChanged((GG => {
+         let zM = null !== (MM = null === (rM = aM.g.getActivePad()) || void 0 === rM ? void 0 : rM.family) && void 0 !== MM ? MM : null;
+         const hM = aM.g.onActivePadChanged((MM => {
```

#### 519. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5979-L5980` → after: `L6289-L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6289-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6289-L6290) · [Before (L5979-L5980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5979-L5980)

```diff
-             (pG.b.reset(), (0, QG.x)(), YG.l.xh(yG.c, GG), (null !== (bG = null === GG || void 0 === GG ? void 0 : GG.family) && void 0 !== bG ? bG : null) !== VG) && (VG = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.family) && void 0 !== ZG ? ZG : null, YG.l.xh(fG. … [truncated]
-             !GG && (0, QG.l)() && (0, QG.y)(UG.e.get("isTouchScreen") ? "touch" : "keyboardMouse")
+             (LM.d.reset(), (0, HM.q)(), QM.i.Tz(aM.c, MM), (null !== (rM = null === MM || void 0 === MM ? void 0 : MM.family) && void 0 !== rM ? rM : null) !== zM) && (zM = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.family) && void 0 !== iM ? iM : null, QM.i.Tz(mM. … [truncated]
+             !MM && (0, HM.g)() && (0, HM.u)(nM.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
```

#### 520. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5983` → after: `L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6293) · [Before (L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5983)

```diff
-             "visible" !== document.visibilityState && pG.b.clear()
+             "visible" !== document.visibilityState && LM.d.clear()
```

#### 521. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5986` → after: `L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6296) · [Before (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5986)

```diff
-             pG.b.clear()
+             LM.d.clear()
```

#### 522. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5988` → after: `L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6298) · [Before (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5988)

```diff
-         document.addEventListener("visibilitychange", hG), window.addEventListener("blur", dG), yG.d.start(), (0, kS.l)();
+         document.addEventListener("visibilitychange", JM), window.addEventListener("blur", dM), aM.g.start(), (0, nS.m)();
```

#### 523. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5991` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6301) · [Before (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5991)

```diff
-           ZG(), wG(), SG(), LG(), kG(), KG(), document.removeEventListener("visibilitychange", hG), window.removeEventListener("blur", dG), yG.d.stop(), null === rG || void 0 === rG || rG()
+           iM(), OM(), SM(), jM(), PM(), hM(), document.removeEventListener("visibilitychange", JM), window.removeEventListener("blur", dM), aM.g.stop(), null === lM || void 0 === lM || lM()
```

#### 524. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L5998-L6001` → after: `L6308-L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6308-L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6308-L6311) · [Before (L5998-L6001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L5998-L6001)

```diff
-     var oy = ZG(8224),
-       Xy = ZG(8862);
-     const uy = new Set(kS.j),
-       iy = GG => `${Xy.h}${(0,fG.m)()}/${GG}`,
+     var Ca = iM(8752),
+       ea = iM(9419);
+     const ba = new Set(nS.i),
+       wa = MM => `${ea.o}${(0,mM.l)()}/${MM}`,
```

#### 525. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6003-L6005` → after: `L6313-L6315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6313-L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6313-L6315) · [Before (L6003-L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L6003-L6005)

```diff
-         if (!(0, Xy.g)(GG)) return null;
-         const [bG, ZG] = GG.slice(Xy.h.length).split("/");
-         return (0, oy.h)(bG) && uy.has(ZG) ? (0, kS.i)(bG, ZG) : null
+         if (!(0, ea.m)(MM)) return null;
+         const [rM, iM] = MM.slice(ea.o.length).split("/");
+         return (0, Ca.e)(rM) && ba.has(iM) ? (0, nS.f)(rM, iM) : null
```

#### 526. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6007` → after: `L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6317) · [Before (L6007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L6007)

```diff
-     var Wy = ZG(8866);
+     var ga = iM(9425);
```

#### 527. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6011` → after: `L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6321) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L6011)

```diff
-         } = (0, SG.w)(), bG = (0, QG.B)(), {
+         } = (0, SM.A)(), rM = (0, HM.v)(), {
```

#### 528. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6014` → after: `L6324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6324) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L6014)

```diff
-         } = (0, UG.o)(["gameState", "isUiHidden"]), {
+         } = (0, nM.m)(["gameState", "isUiHidden"]), {
```

#### 529. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6017-L6018` → after: `L6327-L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6327-L6328) · [Before (L6017-L6018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L6017-L6018)

```diff
-         } = (0, fG.r)(), [kG, YG] = (0, PG.useState)(Wy.e);
-         return (0, JS.g)(aS.w, YG), bG && !wG && "inGame" === ZG && kG ? (0, sG.jsxs)("div", {
+         } = (0, mM.q)(), [PM, QM] = (0, ZM.useState)(ga.c);
+         return (0, lS.d)(sS.t, QM), rM && !OM && "inGame" === iM && PM ? (0, YM.jsxs)("div", {
```

#### 530. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6021` → after: `L6331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/controller.js#L6331) · [Before (L6021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/controller.js#L6021)

```diff
-             glyph: (0, VG.j)("toggle" === yG ? "sneak" : "sneakToggle")
+             glyph: (0, zM.m)("toggle" === aM ? "sneak" : "sneakToggle")
```
