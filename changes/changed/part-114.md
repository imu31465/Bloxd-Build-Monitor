# Changed — Bundle Modifications Report (Part 114 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `114 / 142` (**423** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 113](part-113.md) · [Part 115 →](part-115.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (232 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2)

#### 154. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2110` → after: `L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2110) · [Before (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2110)

```diff
-       } = (0, Dp.H)(), xp = (0, Lp.i)(lp, ip.getPages()), Yp = (0, Lp.i)(Oi, cp.getGuide()), Ap = xp.find((pp => pp.active)), Wp = (yp = Yp, Up = void 0 === Ap ? null : Ap.id, "active" === yp[0] && null === Up);
+       } = (0, jT.z)(), nT = (0, HT.j)(yT, UT.getPages()), kT = (0, HT.j)(UU, mT.getGuide()), lT = nT.find((TT => TT.active)), pT = (BT = kT, ZT = void 0 === lT ? null : lT.id, "active" === BT[0] && null === ZT);
```

#### 155. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2123` → after: `L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2123) · [Before (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2123)

```diff
-           return -1 !== ip ? ip : Math.max(0, pp.findIndex((pp => "open" === pp.state)))
+           return -1 !== UT ? UT : Math.max(0, TT.findIndex((TT => "open" === TT.state)))
```

#### 156. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2127` → after: `L2127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2127) · [Before (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2127)

```diff
-       }), [ip]), (0, tp.b)((pp => !Wp && ("ArrowLeft" === pp.code || "ArrowRight" === pp.code) && !(0, Hp.isTypingInInput)()), (pp => {
+       }), [UT]), (0, fT.c)((TT => !pT && ("ArrowLeft" === TT.code || "ArrowRight" === TT.code) && !(0, qT.isTypingInInput)()), (TT => {
```

#### 157. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2138-L2139` → after: `L2138-L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2138-L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2138-L2139) · [Before (L2138-L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2138-L2139)

```diff
-       return (0, Jp.jsx)(Mc.c, {
-         close: Sp.l,
+       return (0, IT.jsx)(xm.e, {
+         close: gT.f,
```

#### 158. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2149` → after: `L2149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2149) · [Before (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2149)

```diff
-           children: [(0, Jp.jsx)(qc.l, {
+           children: [(0, IT.jsx)(Jm.k, {
```

#### 159. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2151` → after: `L2151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2151) · [Before (L2151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2151)

```diff
-             onClick: Sp.l
+             onClick: gT.f
```

#### 160. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2197` → after: `L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2197) · [Before (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2197)

```diff
-       } = ip, Yp = [ip.dir[0] / Ip, ip.dir[1] / Ip, ip.dir[2] / Ip], Dp = null === Lp ? xp : Math.min(xp, function(pp, ip, cp) {
+       } = UT, kT = [UT.dir[0] / MT, UT.dir[1] / MT, UT.dir[2] / MT], jT = null === HT ? nT : Math.min(nT, function(TT, UT, mT) {
```

#### 161. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2207` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2207) · [Before (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2207)

```diff
-           Ip = op(yp) ? xp : Dp;
+           MT = zT(BT) ? nT : jT;
```

#### 162. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2232` → after: `L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2232) · [Before (L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2232)

```diff
-       return Op <= op ? Op : 1 / 0
+       return WT <= zT ? WT : 1 / 0
```

#### 163. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2234-L2235` → after: `L2234-L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2234-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2234-L2235) · [Before (L2234-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2234-L2235)

```diff
-     var Kc = cp(37099),
-       Vc = cp(38281);
+     var Dm = mT(36991),
+       om = mT(38198);
```

#### 164. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2242` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2242) · [Before (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2242)

```diff
-         if (!(0, Kc.i)(pp, this.shown))
+         if (!(0, Dm.h)(TT, this.shown))
```

#### 165. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2251-L2252` → after: `L2251-L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2251-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2251-L2252) · [Before (L2251-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2251-L2252)

```diff
-           const ip = [Vc.h, Vc.h, Vc.h, 0, 0, 0];
-           this.meshes = [this.build([ip], Vc.i, pp), this.build((0, Vc.e)(), Vc.o, pp)]
+           const UT = [om.f, om.f, om.f, 0, 0, 0];
+           this.meshes = [this.build([UT], om.h, TT), this.build((0, om.e)(), om.m, TT)]
```

#### 166. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2256` → after: `L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2256) · [Before (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2256)

```diff
-         for (const ip of null !== (pp = this.meshes) && void 0 !== pp ? pp : []) {
+         for (const UT of null !== (TT = this.meshes) && void 0 !== TT ? TT : []) {
```

#### 167. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2278-L2279` → after: `L2278-L2279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2278-L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2278-L2279) · [Before (L2278-L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2278-L2279)

```diff
-       const cp = ri.g.Kw / 2;
-       return pp[0] < ip[0] + cp && pp[0] + 1 > ip[0] - cp && pp[1] < ip[1] + ri.g.Vw && pp[1] + 1 > ip[1] && pp[2] < ip[2] + cp && pp[2] + 1 > ip[2] - cp
+       const mT = SU.f.sc / 2;
+       return TT[0] < UT[0] + mT && TT[0] + 1 > UT[0] - mT && TT[1] < UT[1] + SU.f.Fc && TT[1] + 1 > UT[1] && TT[2] < UT[2] + mT && TT[2] + 1 > UT[2] - mT
```

#### 168. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2304` → after: `L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2304) · [Before (L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2304)

```diff
-           Op = [cp[0], cp[1] + ri.g.Vw * ri.g.playerEyeToHeightRatio, cp[2]],
+           WT = [mT[0], mT[1] + SU.f.Fc * SU.f.playerEyeToHeightRatio, mT[2]],
```

#### 169. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2333-L2334` → after: `L2333-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2333-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2333-L2334) · [Before (L2333-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2333-L2334)

```diff
-       const op = ri.g.Kw / 2;
-       return [Math.floor(ip), Math.floor(cp), Math.floor(Op), Math.floor(ip - op), Math.floor(ip + op), Math.floor(cp + ri.g.Vw), Math.floor(Op - op), Math.floor(Op + op)]
+       const zT = SU.f.sc / 2;
+       return [Math.floor(UT), Math.floor(mT), Math.floor(WT), Math.floor(UT - zT), Math.floor(UT + zT), Math.floor(mT + SU.f.Fc), Math.floor(WT - zT), Math.floor(WT + zT)]
```

#### 170. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2369` → after: `L2369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2369) · [Before (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2369)

```diff
-         return (0, Kc.i)(cp.next, pp) || cp.lines.some((pp => {
+         return (0, Dm.h)(mT.next, TT) || mT.lines.some((TT => {
```

#### 171. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2393` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2393) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2393)

```diff
-         const cp = this.pickNext((0, Kc.e)(ip.from), (pp => (0, Kc.i)(pp, ip.from)));
+         const mT = this.pickNext((0, Dm.e)(UT.from), (TT => (0, Dm.h)(TT, UT.from)));
```

#### 172. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2399` → after: `L2399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2399) · [Before (L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2399)

```diff
-         if (null !== Op && pp < Op.endMs && (0, Kc.i)(Op.to, cp)) return;
+         if (null !== WT && TT < WT.endMs && (0, Dm.h)(WT.to, mT)) return;
```

#### 173. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2418` → after: `L2418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2418) · [Before (L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2418)

```diff
-         const ip = "active" === pp[0] ? `${pp[1]}|${pp[3]}|${pp[4]}|${pp[5]}|${pp[6]}` : "";
+         const UT = "active" === TT[0] ? `${TT[1]}|${TT[3]}|${TT[4]}|${TT[5]}|${TT[6]}` : "";
```

#### 174. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2446` → after: `L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2446) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2446)

```diff
-         for (let op = 0; op < pp.length; op += 4) ip.add(`${pp[op]},${pp[op+1]},${pp[op+2]}`);
+         for (let zT = 0; zT < TT.length; zT += 4) UT.add(`${TT[zT]},${TT[zT+1]},${TT[zT+2]}`);
```

#### 175. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2452` → after: `L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2452) · [Before (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2452)

```diff
-           const pp = `${Op[op]},${Op[op+1]},${Op[op+2]}`;
+           const TT = `${WT[zT]},${WT[zT+1]},${WT[zT+2]}`;
```

#### 176. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2465` → after: `L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2465) · [Before (L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2465)

```diff
-           const [cp, Yp, Dp, Ap] = [pp[Lp], pp[Lp + 1], pp[Lp + 2], pp[Lp + 3]], Pp = this.api.getBlockId(cp, Yp, Dp), Wp = `${cp},${Yp},${Dp}`, yp = Qi(this.blockIds[Ap], Pp);
+           const [mT, kT, jT, lT] = [TT[HT], TT[HT + 1], TT[HT + 2], TT[HT + 3]], LT = this.api.getBlockId(mT, kT, jT), pT = `${mT},${kT},${jT}`, BT = yU(this.blockIds[lT], LT);
```

#### 177. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2498` → after: `L2498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2498) · [Before (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2498)

```diff
-         this.outline.show(null !== (pp = this.aimed) && void 0 !== pp ? pp : this.nextCell.SW(this.lastFilled))
+         this.outline.show(null !== (TT = this.aimed) && void 0 !== TT ? TT : this.nextCell.VL(this.lastFilled))
```

#### 178. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2504` → after: `L2504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2504) · [Before (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2504)

```diff
-         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === cp ? null : cp.position), this.outline.show(null !== (ip = this.aimed) && void 0 !== ip ? ip : this.nextCell.get())
+         this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === mT ? null : mT.position), this.outline.show(null !== (UT = this.aimed) && void 0 !== UT ? UT : this.nextCell.get())
```

#### 179. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2525` → after: `L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2525) · [Before (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2525)

```diff
-           const xp = pp.Acp(ip),
+           const nT = TT.RUT(UT),
```

#### 180. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2563` → after: `L2563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2563) · [Before (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2563)

```diff
-         this.sent || xp.c.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
+         this.sent || nT.b.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
```

#### 181. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2566-L2567` → after: `L2566-L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2566-L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2566-L2567) · [Before (L2566-L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2566-L2567)

```diff
-     var DO = cp(4341),
-       AO = cp(39330);
+     var HW = mT(4328),
+       kW = mT(39281);
```

#### 182. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2574-L2576` → after: `L2574-L2576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2574-L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2574-L2576) · [Before (L2574-L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2574-L2576)

```diff
-         TA: 48,
-         minLifeTime: .3 / AO.e,
-         maxLifeTime: .55 / AO.e,
+         fl: 48,
+         minLifeTime: .3 / kW.b,
+         maxLifeTime: .55 / kW.b,
```

#### 183. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2582` → after: `L2582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2582) · [Before (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2582)

```diff
-         gravity: [0, -14 * AO.e * AO.e, 0],
+         gravity: [0, -14 * kW.b * kW.b, 0],
```

#### 184. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2592` → after: `L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2592) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2592)

```diff
-         blendMode: DO.g.Standard
+         blendMode: HW.e.Standard
```

#### 185. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2598-L2600` → after: `L2598-L2600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2598-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2598-L2600) · [Before (L2598-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2598-L2600)

```diff
-       TA: 96,
-       minLifeTime: .5 / AO.e,
-       maxLifeTime: .9 / AO.e,
+       fl: 96,
+       minLifeTime: .5 / kW.b,
+       maxLifeTime: .9 / kW.b,
```

#### 186. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2606` → after: `L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2606) · [Before (L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2606)

```diff
-       gravity: [0, 2 * AO.e * AO.e, 0],
+       gravity: [0, 2 * kW.b * kW.b, 0],
```

#### 187. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2615` → after: `L2615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2615) · [Before (L2615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2615)

```diff
-       blendMode: DO.g.OneOne
+       blendMode: HW.e.OneOne
```

#### 188. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2624` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2624) · [Before (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2624)

```diff
-             const pp = `${op},${Ip},${Sp}`;
+             const TT = `${zT},${MT},${gT}`;
```

#### 189. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2666` → after: `L2666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2666) · [Before (L2666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2666)

```diff
-       const cp = (0, Lp.i)(Dc, ip.getView()),
+       const mT = (0, HT.j)(nm, UT.getView()),
```

#### 190. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2669` → after: `L2669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2669) · [Before (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2669)

```diff
-         } = (0, Dp.H)(),
+         } = (0, jT.z)(),
```

#### 191. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2672` → after: `L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2672) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2672)

```diff
-         } = (0, xp.o)(["isTouchScreen"]),
+         } = (0, nT.h)(["isTouchScreen"]),
```

#### 192. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2676` → after: `L2676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2676) · [Before (L2676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2676)

```diff
-       if ((0, tp.b)((pp => Ap && !pp.repeat && !(0, Hp.isTypingInInput)() && !(0, Wp.l)() && !op), (pp => {
+       if ((0, fT.c)((TT => lT && !TT.repeat && !(0, qT.isTypingInInput)() && !(0, pT.l)() && !zT), (TT => {
```

#### 193. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2680` → after: `L2680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2680) · [Before (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2680)

```diff
-             return Yp.t[UO].includes(pp) ? ip.rotate : null
+             return kT.v[pW].includes(TT) ? UT.rotate : null
```

#### 194. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2685` → after: `L2685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2685) · [Before (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2685)

```diff
-       return cp.blocked ? wp = "plotsGame:placementOffPlot" : cp.toClear > 0 ? wp = "plotsGame:placementClear" : "placeSpot" !== Sp.hint && "placeBuild" !== Sp.hint || (wp = null), (0, Jp.jsx)(yp.h, {
+       return mT.blocked ? cT = "plotsGame:placementOffPlot" : mT.toClear > 0 ? cT = "plotsGame:placementClear" : "placeSpot" !== gT.hint && "placeBuild" !== gT.hint || (cT = null), (0, IT.jsx)(BT.d, {
```

#### 195. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2700` → after: `L2700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2700) · [Before (L2700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2700)

```diff
-             children: [(0, Jp.jsxs)(qc.f, {
+             children: [(0, IT.jsxs)(Jm.e, {
```

#### 196. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2705` → after: `L2705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2705) · [Before (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2705)

```diff
-             }), (0, Jp.jsxs)(qc.K, {
+             }), (0, IT.jsxs)(Jm.I, {
```

#### 197. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2715` → after: `L2715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2715) · [Before (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2715)

```diff
-               children: (0, Jp.jsxs)(qc.o, {
+               children: (0, IT.jsxs)(Jm.l, {
```

#### 198. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2729` → after: `L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2729) · [Before (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2729)

```diff
-       return (0, Jp.jsx)(vp.d, {
+       return (0, IT.jsx)(vT.c, {
```

#### 199. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2736-L2739` → after: `L2736-L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2736-L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2736-L2739) · [Before (L2736-L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2736-L2739)

```diff
-     var eO = cp(2429),
-       uO = cp(36879),
-       jO = cp(2004),
-       kO = cp(1276);
+     var qW = mT(2493),
+       iW = mT(36776),
+       bW = mT(2089),
+       OW = mT(1360);
```

#### 200. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2750` → after: `L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2750) · [Before (L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2750)

```diff
-       const cp = (0, Lp.i)(ci, ip.getPlot()),
+       const mT = (0, HT.j)(TU, UT.getPlot()),
```

#### 201. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2752` → after: `L2752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2752) · [Before (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2752)

```diff
-         Sp = (0, uO.m)(Op);
+         gT = (0, iW.j)(WT);
```

#### 202. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2766` → after: `L2766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2766) · [Before (L2766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2766)

```diff
-         }, `${xp},${Yp}`)
+         }, `${nT},${kT}`)
```

#### 203. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2782` → after: `L2782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2782) · [Before (L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2782)

```diff
-       } = (0, Dp.H)(), Ap = (0, jO.g)("hiddenPlayerNames"), Wp = (0, jO.g)("players"), yp = null === Sp ? null : null !== (ip = null === (cp = Wp.byId[Sp]) || void 0 === cp ? void 0 : cp.cosmetics) && void 0 !== ip ? ip : null, wp = Yp("plotsGame:plotBannerCoords", {
+       } = (0, jT.z)(), lT = (0, bW.i)("hiddenPlayerNames"), pT = (0, bW.i)("players"), BT = null === gT ? null : null !== (UT = null === (mT = pT.byId[gT]) || void 0 === mT ? void 0 : mT.cosmetics) && void 0 !== UT ? UT : null, cT = kT("plotsGame:plotBannerCoords", {
```

#### 204. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2797` → after: `L2797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2797) · [Before (L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2797)

```diff
-           children: [null !== yp && (0, Jp.jsx)(eO.c, {
+           children: [null !== BT && (0, IT.jsx)(qW.e, {
```

#### 205. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2799` → after: `L2799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2799) · [Before (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2799)

```diff
-           }), null === yp && (0, Jp.jsx)(Up.d, {
+           }), null === BT && (0, IT.jsx)(ZT.c, {
```

#### 206. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2807` → after: `L2807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2807) · [Before (L2807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2807)

```diff
-               name: (0, kO.e)(Ip, Ap)
+               name: (0, OW.f)(MT, lT)
```

#### 207. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2835` → after: `L2835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2835) · [Before (L2835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2835)

```diff
-           Yp = new xO(pp, op, Lp, ip), Dp = new Pc(pp, op), Ap = new Qp(pp, Dp), Pp = new Rc(pp, op, Yp.nextCell), Wp = new YO(pp), yp.push((0, Sp.A)((0, Ip.createElement)(jc, {
+           kT = new MW(TT, zT, HT, UT), jT = new km(TT, zT), lT = new XT(TT, jT), LT = new Ym(TT, zT, kT.nextCell), pT = new nW(TT), BT.push((0, gT.q)((0, MT.createElement)(bm, {
```

#### 208. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2856-L2857` → after: `L2856-L2857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2856-L2857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2856-L2857) · [Before (L2856-L2857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2856-L2857)

```diff
-         LP: () => {
-           Wp.LP(), Yp.LP(), Dp.LP(), Ap.LP()
+         Cl: () => {
+           pT.Cl(), kT.Cl(), jT.Cl(), lT.Cl()
```

#### 209. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2878-L2879` → after: `L2878-L2879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2878-L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2878-L2879) · [Before (L2878-L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2878-L2879)

```diff
-             Yp.Ey(pp), Dp.Ey(pp)
-           } else "plotsJournal" === pp ? Ap.Ey(ip) : "plotsJournalOpen" === pp ? Ap.openFromServer(ip) : "plotsPreviewEnd" === pp ? Dp.endFromServer() : "plotsGuide" === pp ? xp.receiveGuide(ip) : "plotsGuideDone" === pp && xp.receiveGuideDone()
+             kT.pB(TT), jT.pB(TT)
+           } else "plotsJournal" === TT ? lT.pB(UT) : "plotsJournalOpen" === TT ? lT.openFromServer(UT) : "plotsPreviewEnd" === TT ? jT.endFromServer() : "plotsGuide" === TT ? nT.receiveGuide(UT) : "plotsGuideDone" === TT && nT.receiveGuideDone()
```

#### 210. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2884` → after: `L2884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2884) · [Before (L2884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2884)

```diff
-   38719: (pp, ip, cp) => {
+   38624: (TT, UT, mT) => {
```

#### 211. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2886` → after: `L2886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2886) · [Before (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2886)

```diff
-       e: () => xp
+       c: () => nT
```

#### 212. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2888` → after: `L2888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2888) · [Before (L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2888)

```diff
-     var Op = cp(38712);
+     var WT = mT(38622);
```

#### 213. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2903` → after: `L2903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2903) · [Before (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2903)

```diff
-       return (0, Op.d)(pp, !Up), Up ? (Sp.x = yp.x, Sp.y = yp.y, Sp.distSq = Wp, Sp) : null
+       return (0, WT.h)(TT, !ZT), ZT ? (gT.x = BT.x, gT.y = BT.y, gT.distSq = pT, gT) : null
```

#### 214. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2906` → after: `L2906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2906) · [Before (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2906)

```diff
-   39330: (pp, ip, cp) => {
+   39281: (TT, UT, mT) => {
```

#### 215. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2908-L2909` → after: `L2908-L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2908-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2908-L2909) · [Before (L2908-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2908-L2909)

```diff
-       e: () => Op,
-       i: () => Ip
+       b: () => WT,
+       e: () => MT
```

#### 216. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2917` → after: `L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2917) · [Before (L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2917)

```diff
-         this.style = pp, this.TA = ip, this.half = cp, this.particles = null, this.lastFrame = -1
+         this.style = TT, this.fl = UT, this.half = mT, this.particles = null, this.lastFrame = -1
```

#### 217. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2927-L2928` → after: `L2927-L2928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2927-L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2927-L2928) · [Before (L2927-L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2927-L2928)

```diff
-             texture: pp.soft ? op : "square_particle",
-             TA: ip,
+             texture: TT.soft ? zT : "square_particle",
+             fl: UT,
```

#### 218. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2950` → after: `L2950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2950) · [Before (L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2950)

```diff
-         }(this.style, this.TA), {
+         }(this.style, this.fl), {
```

#### 219. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2961` → after: `L2961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2961) · [Before (L2961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2961)

```diff
-   38712: (pp, ip, cp) => {
+   38622: (TT, UT, mT) => {
```

#### 220. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2963-L2964` → after: `L2963-L2964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2963-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2963-L2964) · [Before (L2963-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2963-L2964)

```diff
-       b: () => Sp,
-       d: () => Ip
+       d: () => gT,
+       h: () => MT
```

#### 221. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2984` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2984) · [Before (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2984)

```diff
-       Op.x === ip && Op.y === cp || (Op.x = ip, Op.y = cp, pp.style.translate = `${ip}vw ${cp}vh`)
+       WT.x === UT && WT.y === mT || (WT.x = UT, WT.y = mT, TT.style.translate = `${UT}vw ${mT}vh`)
```

#### 222. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2987` → after: `L2987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2987) · [Before (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2987)

```diff
-   37099: (pp, ip, cp) => {
+   36991: (TT, UT, mT) => {
```

#### 223. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2989` → after: `L2989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2989) · [Before (L2989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2989)

```diff
-       return null === pp || null === ip ? pp === ip : pp[0] === ip[0] && pp[1] === ip[1] && pp[2] === ip[2]
+       return null === TT || null === UT ? TT === UT : TT[0] === UT[0] && TT[1] === UT[1] && TT[2] === UT[2]
```

#### 224. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L2997` → after: `L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2997) · [Before (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L2997)

```diff
-       i: () => Op
+       h: () => WT
```

#### 225. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3000` → after: `L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3000) · [Before (L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3000)

```diff
-   37146: (pp, ip, cp) => {
+   37032: (TT, UT, mT) => {
```

#### 226. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3017-L3018` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3017) · [Before (L3017-L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3017-L3018)

```diff
-       b: () => Sp,
-       f: () => Op,
+       c: () => gT,
```

#### 227. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3020` → after: `L3019-L3020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3019-L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3019-L3020) · [Before (L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3020)

```diff
-       h: () => op
+       j: () => MT,
+       l: () => zT
```

#### 228. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3023` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3023) · [Before (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3023)

```diff
-   37142: (pp, ip, cp) => {
+   37030: (TT, UT, mT) => {
```

#### 229. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3025` → after: `L3025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3025) · [Before (L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3025)

```diff
-       c: () => Yp
+       e: () => kT
```

#### 230. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3027-L3028` → after: `L3027-L3028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3027-L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3027-L3028) · [Before (L3027-L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3027-L3028)

```diff
-     var Op = cp(37146),
-       op = cp(9338);
+     var WT = mT(37032),
+       zT = mT(9330);
```

#### 231. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3033` → after: `L3033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3033) · [Before (L3033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3033)

```diff
-     for (const Dp of Object.keys(op.h))(0, Op.f)(Dp) ? Ip.push(Dp) : (0, Op.h)(Dp) && Sp.push(Dp), (0, Op.g)(Dp) && xp.push(Dp), (Dp.includes(" Bed Head") || Dp.includes(" Strongbed Head")) && Lp.push(Dp);
+     for (const jT of Object.keys(zT.k))(0, WT.g)(jT) ? MT.push(jT) : (0, WT.l)(jT) && gT.push(jT), (0, WT.j)(jT) && nT.push(jT), (jT.includes(" Bed Head") || jT.includes(" Strongbed Head")) && HT.push(jT);
```

#### 232. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L3043` → after: `L3043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R3043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3043) · [Before (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L3043)

```diff
-   38756: pp => {
+   38676: TT => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f51da8c88e155ca83c1f2009e60354ea2996c43ac0e91343d9632e1fc652451a)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f51da8c88e155ca83c1f2009e60354ea2996c43ac0e91343d9632e1fc652451aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f51da8c88e155ca83c1f2009e60354ea2996c43ac0e91343d9632e1fc652451a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-pvpCiv-pvpCivClient.js#L4)

```diff
-   39735: (pp, ip, cp) => {
+   39651: (TT, UT, mT) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5c6793528ff932ad815182c8147cd3f4fb9ac1d11848997b2c28cdf5db120774)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5c6793528ff932ad815182c8147cd3f4fb9ac1d11848997b2c28cdf5db120774R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-5c6793528ff932ad815182c8147cd3f4fb9ac1d11848997b2c28cdf5db120774) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyIslands-skyIslandsClient.js#L4)

```diff
-   39744: (pp, ip, cp) => {
+   39659: (TT, UT, mT) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L4)

```diff
-   36791: (pp, ip, cp) => {
+   36687: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L8-L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L8-L9)

```diff
-       i: () => Pp,
-       k: () => Ap
+       i: () => lT
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L11-L13` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L11-L13) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L11-L13)

```diff
-     var Op = cp(34430),
-       op = cp(36799),
-       Ip = cp(36804),
+     var WT = mT(34270),
+       zT = mT(36693),
+       MT = mT(36698),
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L15-L18` → after: `L15-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L15-L18) · [Before (L15-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L15-L18)

```diff
-       xp = cp(1476),
-       Lp = cp(62),
-       Yp = cp(82),
-       Dp = cp(1112);
+       nT = mT(1567),
+       HT = mT(63),
+       kT = mT(85),
+       jT = mT(1188);
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L22-L23)

```diff
-       return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
-         children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
+       return (0, nT.j)(zT.b, (0, zT.j)()), (0, jT.jsx)(jT.Fragment, {
+         children: null === (TT = (0, zT.j)()) || void 0 === TT ? void 0 : TT.content
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L32-L33)

```diff
-       (0, xp.i)(op.d, (0, op.s)());
-       const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
+       (0, nT.j)(zT.b, (0, zT.j)());
+       const kT = null === (UT = (0, zT.j)()) || void 0 === UT ? void 0 : UT.menu;
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L36-L37)

```diff
-         cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
-       }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
+         mT || (null === kT || void 0 === kT || null === (TT = kT.onClose) || void 0 === TT || TT.call(kT), (0, MT.n)())
+       }), [mT, kT]), (0, HT.useEffect)((() => mT ? (0, gT.f)(MT.s, MT.d) : void 0), [mT]), (0, jT.jsx)(WT.e, {
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L49)

```diff
-         id: `clientGameHud-${ip}`,
+         id: `clientGameHud-${UT}`,
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L63)

```diff
-         op(document.getElementById(`clientGameHud-${cp}`))
+         zT(document.getElementById(`clientGameHud-${mT}`))
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L67)

```diff
-   4950: (pp, ip, cp) => {
+   4932: (TT, UT, mT) => {
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L69-L70` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L69-L70) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L69-L70)

```diff
-       e: () => wp,
-       i: () => vp
+       d: () => cT,
+       f: () => vT
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L72)

```diff
-     var Op = cp(1049),
+     var WT = mT(1126),
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L74-L80` → after: `L74-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L74-L80) · [Before (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L74-L80)

```diff
-       Ip = cp(62),
-       Sp = cp(1201),
-       xp = cp(4956),
-       Lp = cp(1929),
-       Yp = cp(2492),
-       Dp = cp(4964),
-       Ap = cp(1112);
+       MT = mT(63),
+       gT = mT(1288),
+       nT = mT(4936),
+       HT = mT(2023),
+       kT = mT(2552),
+       jT = mT(4939),
+       lT = mT(1188);
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L98)

```diff
-           "--word-delay": `${ip.delayMs}ms`
+           "--word-delay": `${UT.delayMs}ms`
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L100-L101` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L100-L101) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L100-L101)

```diff
-         children: (0, Ap.jsx)(xp.d, {
-           text: "icon" === ip.kind ? `[[${ip.icon}]]` : ip.text
+         children: (0, lT.jsx)(nT.b, {
+           text: "icon" === UT.kind ? `[[${UT.icon}]]` : UT.text
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L112)

```diff
-       } = (0, Sp.H)(), Op = (0, Ip.useMemo)((() => (0, Dp.e)((0, Dp.h)(ip).plan.pieces)), [ip, cp.code]);
+       } = (0, gT.z)(), WT = (0, MT.useMemo)((() => (0, jT.d)((0, jT.e)(UT).plan.pieces)), [UT, mT.code]);
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L132)

```diff
-       const pp = (0, Yp.i)("dialogue");
+       const TT = (0, kT.f)("dialogue");
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L145)

```diff
-   4956: (pp, ip, cp) => {
+   4936: (TT, UT, mT) => {
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L147)

```diff
-       d: () => xp
+       b: () => nT
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L149-L152` → after: `L149-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L149-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L149-L152) · [Before (L149-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L149-L152)

```diff
-     var Op = cp(62),
-       op = cp(322),
-       Ip = cp(1941),
-       Sp = cp(1112);
+     var WT = mT(63),
+       zT = mT(351),
+       MT = mT(2034),
+       gT = mT(1188);
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L160-L161` → after: `L160-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L160-L161) · [Before (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L160-L161)

```diff
-       return (0, op.nc)(ip).forEach(((pp, ip) => {
-         if ("string" === typeof pp || !(0, Ip.f)(pp.icon)) return void(xp += "string" === typeof pp ? pp : pp.icon);
+       return (0, zT.Wb)(UT).forEach(((TT, UT) => {
+         if ("string" === typeof TT || !(0, MT.e)(TT.icon)) return void(nT += "string" === typeof TT ? TT : TT.icon);
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L170)

```diff
-               children: (0, Sp.jsx)(Ip.d, {
+               children: (0, gT.jsx)(MT.b, {
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L182)

```diff
-   34430: (pp, ip, cp) => {
+   34270: (TT, UT, mT) => {
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L184)

```diff
-       b: () => Ip
+       e: () => MT
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L186-L187` → after: `L186-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L186-L187) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L186-L187)

```diff
-     var Op = cp(4628),
-       op = cp(4635);
+     var WT = mT(4641),
+       zT = mT(4650);
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L198)

```diff
-       return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
+       return (0, zT.d)(!0, mT, MT, HT), (0, WT.c)(nT, mT), mT || gT ? UT : null
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L201` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L201) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L201)

```diff
-   4964: (pp, ip, cp) => {
+   4939: (TT, UT, mT) => {
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L203-L204` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L203-L204) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L203-L204)

```diff
-       e: () => Jp,
-       h: () => Qp
+       d: () => IT,
+       e: () => XT
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L206-L207` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L206-L207) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L206-L207)

```diff
-     var Op = cp(4970),
-       op = cp(322);
+     var WT = mT(4948),
+       zT = mT(351);
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L218-L220` → after: `L218-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L218-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L218-L220) · [Before (L218-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L218-L220)

```diff
-       Up = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yp}$`),
-       wp = new RegExp(`[?\uff1f]${yp}$`),
-       vp = new RegExp(`[!\uff01]${yp}$`),
+       ZT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${BT}$`),
+       cT = new RegExp(`[?\uff1f]${BT}$`),
+       vT = new RegExp(`[!\uff01]${BT}$`),
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L223-L224` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L223-L224) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L223-L224)

```diff
-       dp = new RegExp(`[${Hp}]`),
-       ep = new RegExp(`[${Hp}]|[^${Hp}]+`, "g"),
+       iT = new RegExp(`[${qT}]`),
+       bT = new RegExp(`[${qT}]|[^${qT}]+`, "g"),
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L239` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L239) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L239)

```diff
-       const op = null !== (ip = cp.match(jp)) && void 0 !== ip ? ip : [];
+       const zT = null !== (UT = mT.match(OT)) && void 0 !== UT ? UT : [];
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L242)

```diff
-         const pp = null !== (Ip = null === (Sp = cp.match(/\p{L}/gu)) || void 0 === Sp ? void 0 : Sp.length) && void 0 !== Ip ? Ip : 0;
+         const TT = null !== (MT = null === (gT = mT.match(/\p{L}/gu)) || void 0 === gT ? void 0 : gT.length) && void 0 !== MT ? MT : 0;
```

#### 34. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L261-L262` → after: `L261-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L261-L262) · [Before (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L261-L262)

```diff
-       const Wp = ip && (0, Op.m)(ip),
-         yp = null !== (cp = null === Wp || void 0 === Wp ? void 0 : Wp.syllableMs) && void 0 !== cp ? cp : Op.d,
+       const pT = UT && (0, WT.k)(UT),
+         BT = null !== (mT = null === pT || void 0 === pT ? void 0 : pT.syllableMs) && void 0 !== mT ? mT : WT.d,
```

#### 35. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L265)

```diff
-           for (const Op of (0, op.nc)(pp))
+           for (const WT of (0, zT.Wb)(TT))
```

#### 36. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L285)

```diff
-                 for (const op of null !== (cp = pp.match(ep)) && void 0 !== cp ? cp : []) {
+                 for (const zT of null !== (mT = TT.match(bT)) && void 0 !== mT ? mT : []) {
```

#### 37. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L312)

```diff
-         const pp = null !== (Xp = null === (lp = Op.at(-1)) || void 0 === lp ? void 0 : lp.text) && void 0 !== Xp ? Xp : "",
+         const TT = null !== (aT = null === (yT = WT.at(-1)) || void 0 === yT ? void 0 : yT.text) && void 0 !== aT ? aT : "",
```

#### 38. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L326)

```diff
-             Sp += kp(`${Rp(vp.text)}|${op}`) * Ip.variationSemitones;
+             gT += eT(`${JT(vT.text)}|${zT}`) * MT.variationSemitones;
```

#### 39. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L338)

```diff
-           Ep += Op * yp + (Up.test(vp.text) ? Sp : tp.test(vp.text) ? Ip : 0)
+           tT += WT * BT + (ZT.test(vT.text) ? gT : fT.test(vT.text) ? MT : 0)
```

#### 40. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L342)

```diff
-         pieces: Hp.map((pp => "space" === pp.kind ? pp : "icon" === pp.kind ? {
+         pieces: qT.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
```

#### 41. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L354-L356` → after: `L354-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L354-L356) · [Before (L354-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L354-L356)

```diff
-     var Cp = cp(1201),
-       Ep = cp(1260),
-       Xp = cp(1963);
+     var wT = mT(1288),
+       tT = mT(1345),
+       aT = mT(2054);
```

#### 42. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L360-L361` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L360-L361) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L360-L361)

```diff
-       const ip = Ep.g.get().getCurrentLanguageCode();
-       return (0, Cp.w)(ip, pp.translationKey, (0, Cp.t)(pp.params, Xp.d.shown))
+       const UT = tT.f.get().getCurrentLanguageCode();
+       return (0, wT.r)(UT, TT.translationKey, (0, wT.o)(TT.params, aT.d.shown))
```

#### 43. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L365-L366` → after: `L365-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L365-L366) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L365-L366)

```diff
-       const ip = void 0 === pp.voice ? null : (0, Op.o)(pp.voice),
-         cp = ip && (0, Op.m)(ip);
+       const UT = void 0 === TT.voice ? null : (0, WT.l)(TT.voice),
+         mT = UT && (0, WT.k)(UT);
```

#### 44. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L385-L386` → after: `L385-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L385-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L385-L386) · [Before (L385-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L385-L386)

```diff
-       b: () => Ip,
-       e: () => op
+       e: () => MT,
+       f: () => zT
```

#### 45. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L403` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L403) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L403)

```diff
-   36804: (pp, ip, cp) => {
+   36698: (TT, UT, mT) => {
```

#### 46. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L405-L407` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L405) · [Before (L405-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L405-L407)

```diff
-       A: () => yp,
-       E: () => tp,
-       b: () => Ip,
+       c: () => MT,
```

#### 47. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L409` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L407) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L409)

```diff
-       f: () => wp,
+       h: () => cT,
```

#### 48. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L412-L414` → after: `L411-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L411-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L411-L414) · [Before (L412-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L412-L414)

```diff
-       q: () => vp,
-       u: () => Ap,
-       w: () => Hp
+       p: () => lT,
+       r: () => qT,
+       s: () => BT,
+       v: () => fT
```

#### 49. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L417)

```diff
-       op = cp(34);
+       zT = mT(31);
```

#### 50. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L424)

```diff
-         return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
+         return (null !== (mT = TT.order) && void 0 !== mT ? mT : 0) - (null !== (WT = UT.order) && void 0 !== WT ? WT : 0)
```

#### 51. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L441` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L441) · [Before (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L441)

```diff
-       pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
+       TT.panel && "clientGame" === WT.b.get("openInGameMenuName") && kT(TT.id)
```

#### 52. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L467)

```diff
-       "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
+       "inventory" !== WT.b.get("openInGameMenuName") && kT(null)
```

#### 53. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L476-L477` → after: `L476-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L476-L477) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L476-L477)

```diff
-       return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
-         Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
+       return gT.set(TT.id, TT), zT.j.EZ(MT, nT(), !0), () => {
+         gT.get(TT.id) === TT && (gT.delete(TT.id), zT.j.EZ(MT, nT()))
```

#### 54. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L481)

```diff
-   36799: (pp, ip, cp) => {
+   36693: (TT, UT, mT) => {
```

#### 55. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L483` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L483) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L483)

```diff
-       A: () => Dp,
+       b: () => nT,
```

#### 56. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L485` → after: `L485-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L485-L487) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L485)

```diff
-       h: () => wp,
+       f: () => vT,
+       i: () => LT,
+       j: () => kT,
```

#### 57. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L487-L490` → after: `L489-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L489-L490) · [Before (L487-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L487-L490)

```diff
-       o: () => Pp,
-       s: () => Yp,
-       t: () => Up,
-       x: () => Wp
+       n: () => pT,
+       q: () => jT
```

#### 58. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L493-L495` → after: `L493-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L493-L495) · [Before (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L493-L495)

```diff
-       op = cp(34),
-       Ip = cp(1308),
-       Sp = cp(36804);
+       zT = mT(31),
+       MT = mT(1388),
+       gT = mT(36698);
```

#### 59. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L508-L509` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L508-L509) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L508-L509)

```diff
-       return Lp = cp, op.m.GA(xp, Lp, !0), () => {
-         Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
+       return HT = mT, zT.j.EZ(nT, HT, !0), () => {
+         HT === mT && (HT = null, BT = !1, cT(), zT.j.EZ(nT, null))
```

#### 60. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L526-L527` → after: `L526-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L526-L527) · [Before (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L526-L527)

```diff
-       const pp = Op.c.get("openInGameMenuName");
-       "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
+       const TT = WT.b.get("openInGameMenuName");
+       "clientGame" !== TT && (BT = "inventory" === TT), (0, gT.l)() || (0, gT.h)(), (0, MT.s)(MT.d), WT.b.set({
```

#### 61. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L542` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L542) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L542)

```diff
-       "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
+       "clientGame" === WT.b.get("openInGameMenuName") && WT.b.set({
```

#### 62. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L544` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L544) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L544)

```diff
-       }), pp || (0, Sp.f)(), yp = !1
+       }), TT || (0, gT.h)(), BT = !1
```

#### 63. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L547)

```diff
-   38729: (pp, ip, cp) => {
+   38649: (TT, UT, mT) => {
```

#### 64. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L586)

```diff
-   9002: (pp, ip, cp) => {
+   8986: (TT, UT, mT) => {
```

#### 65. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L589)

```diff
-       f: () => Lp
+       g: () => HT
```

#### 66. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L592-L593` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L592-L593) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L592-L593)

```diff
-       op = cp(1349),
-       Ip = cp(104);
+       zT = mT(1429),
+       MT = mT(102);
```

#### 67. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L648` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L648) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L648)

```diff
-           op = null !== ip && void 0 !== ip ? ip : Op.pattern;
+           zT = null !== UT && void 0 !== UT ? UT : WT.pattern;
```

#### 68. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L651)

```diff
-         Ip - this.lastAnyAt < 40 && Op.priority < this.playingPriority || Ip - (null !== (cp = this.lastAt.get(pp)) && void 0 !== cp ? cp : -1 / 0) < Op.minGapMs || Ip < this.playingUntil && Op.priority < this.playingPriority || (this.lastAt.set(pp, Ip), this.lastAnyAt = Ip, this … [truncated]
+         MT - this.lastAnyAt < 40 && WT.priority < this.playingPriority || MT - (null !== (mT = this.lastAt.get(TT)) && void 0 !== mT ? mT : -1 / 0) < WT.minGapMs || MT < this.playingUntil && WT.priority < this.playingPriority || (this.lastAt.set(TT, MT), this.lastAnyAt = MT, this … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L658` → after: `L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L658) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L658)

```diff
-       enabled: () => xp() && Op.c.get("isTouchScreen") && Op.c.get("clientEscMenuOptions").vibration && !(0, op.e)()
+       enabled: () => nT() && WT.b.get("isTouchScreen") && WT.b.get("clientEscMenuOptions").vibration && !(0, zT.e)()
```

#### 70. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L661` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L661) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L661)

```diff
-   4970: (pp, ip, cp) => {
+   4948: (TT, UT, mT) => {
```

#### 71. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L664-L667` → after: `L664-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L664-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L664-L667) · [Before (L664-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L664-L667)

```diff
-       f: () => Op,
-       i: () => Ip,
-       m: () => Lp,
-       o: () => Sp
+       e: () => WT,
+       h: () => MT,
+       k: () => HT,
+       l: () => gT
```

#### 72. `bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L811` → after: `L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90R811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-1cc96937428652b95025cb2147ac158edbaa814532069d3a33a4eed6eb26dd90) · [After (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L811) · [Before (L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L811)

```diff
-       return "string" !== typeof pp ? pp : Object.hasOwn(Ip, pp) ? Ip[pp] : null
+       return "string" !== typeof TT ? TT : Object.hasOwn(MT, TT) ? MT[TT] : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L4)

```diff
-   39753: (pp, ip, cp) => {
+   39666: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L8)

```diff
-     var Op = cp(34453);
+     var WT = mT(34298);
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L12-L14` → after: `L12-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L12-L14) · [Before (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L12-L14)

```diff
-       if ("parenthetical-seconds" === ip) return ` (${pp}s)`;
-       const Op = `${Math.floor(pp/60)}:${(pp%60).toString().padStart(2,"0")}`;
-       return cp ? `${cp}${Op}` : Op
+       if ("parenthetical-seconds" === UT) return ` (${TT}s)`;
+       const WT = `${Math.floor(TT/60)}:${(TT%60).toString().padStart(2,"0")}`;
+       return mT ? `${mT}${WT}` : WT
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L22)

```diff
-       xp.content = [...null !== (Sp = op.baseNametag.content) && void 0 !== Sp ? Sp : [], {
+       nT.content = [...null !== (gT = zT.baseNametag.content) && void 0 !== gT ? gT : [], {
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L27)

```diff
-         str: `: ${(0,Op.e)(Ip)}`
+         str: `: ${(0,WT.d)(MT)}`
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L42)

```diff
-         LP: pp => {
+         Cl: TT => {
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L57)

```diff
-             if ("content" === op.location) Ap.content = [...null !== (cp = op.baseNametag.content) && void 0 !== cp ? cp : [], Dp];
+             if ("content" === zT.location) lT.content = [...null !== (mT = zT.baseNametag.content) && void 0 !== mT ? mT : [], jT];
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L108)

```diff
-   34453: (pp, ip, cp) => {
+   34298: (TT, UT, mT) => {
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L110-L111` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L110-L111) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L110-L111)

```diff
-       e: () => op,
-       g: () => Sp
+       d: () => zT,
+       h: () => gT
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L302)

```diff
-           return cp >= 10 ? `${ip}${cp.toFixed(1).replace(/\.0$/,"")}` : `${ip}${cp.toFixed(2).replace(/\.?0+$/,"")}`
+           return mT >= 10 ? `${UT}${mT.toFixed(1).replace(/\.0$/,"")}` : `${UT}${mT.toFixed(2).replace(/\.?0+$/,"")}`
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L306)

```diff
-       const op = ip < 0n ? -ip : ip,
+       const zT = UT < 0n ? -UT : UT,
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L309)

```diff
-       if (Sp.length <= cp) return `${Ip}${Sp}`;
+       if (gT.length <= mT) return `${MT}${gT}`;
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L311)

```diff
-       if (xp < 3) return `${Ip}${Sp}`;
+       if (nT < 3) return `${MT}${gT}`;
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L315)

```diff
-         return `${Ip}${ip?`${pp}.${ip}`:pp}e${Sp.length-1}`
+         return `${MT}${UT?`${TT}.${UT}`:TT}e${gT.length-1}`
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L322)

```diff
-       return Wp = Pp >= 100 ? Math.floor(Pp).toString() : Pp >= 10 ? Pp.toFixed(1).replace(/\.0$/, "") : Pp.toFixed(2).replace(/\.?0+$/, ""), `${Ip}${Wp}${Yp}`
+       return pT = LT >= 100 ? Math.floor(LT).toString() : LT >= 10 ? LT.toFixed(1).replace(/\.0$/, "") : LT.toFixed(2).replace(/\.?0+$/, ""), `${MT}${pT}${kT}`
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L350)

```diff
-           if (pp >= 1e3) return `${cp}${ip.toExponential(2).replace("e+","e")}`;
+           if (TT >= 1e3) return `${mT}${UT.toExponential(2).replace("e+","e")}`;
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L352-L353` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-416ba20e9cce8ac3c3993d9eb6b578abd515142ad67885709d12d7b5741c53f4) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L352-L353) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L352-L353)

```diff
-           return Ip = pp >= 100 ? Math.floor(pp).toString() : pp >= 10 ? pp.toFixed(1).replace(/\.0$/, "") : pp.toFixed(2).replace(/\.?0+$/, ""), `${cp}${Ip}${op}`
-         } return `${cp}${ip}`
+           return MT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${mT}${MT}${zT}`
+         } return `${mT}${UT}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844)

#### 1. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L4)

```diff
-   4964: (pp, ip, cp) => {
+   4939: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L6-L7)

```diff
-       e: () => Jp,
-       h: () => Qp
+       d: () => IT,
+       e: () => XT
```

#### 3. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L9-L10)

```diff
-     var Op = cp(4970),
-       op = cp(322);
+     var WT = mT(4948),
+       zT = mT(351);
```

#### 4. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L21-L23` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L21-L23) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L21-L23)

```diff
-       Up = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yp}$`),
-       wp = new RegExp(`[?\uff1f]${yp}$`),
-       vp = new RegExp(`[!\uff01]${yp}$`),
+       ZT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${BT}$`),
+       cT = new RegExp(`[?\uff1f]${BT}$`),
+       vT = new RegExp(`[!\uff01]${BT}$`),
```

#### 5. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L26-L27` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L26-L27) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L26-L27)

```diff
-       dp = new RegExp(`[${Hp}]`),
-       ep = new RegExp(`[${Hp}]|[^${Hp}]+`, "g"),
+       iT = new RegExp(`[${qT}]`),
+       bT = new RegExp(`[${qT}]|[^${qT}]+`, "g"),
```

#### 6. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L42)

```diff
-       const op = null !== (ip = cp.match(jp)) && void 0 !== ip ? ip : [];
+       const zT = null !== (UT = mT.match(OT)) && void 0 !== UT ? UT : [];
```

#### 7. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L45)

```diff
-         const pp = null !== (Ip = null === (Sp = cp.match(/\p{L}/gu)) || void 0 === Sp ? void 0 : Sp.length) && void 0 !== Ip ? Ip : 0;
+         const TT = null !== (MT = null === (gT = mT.match(/\p{L}/gu)) || void 0 === gT ? void 0 : gT.length) && void 0 !== MT ? MT : 0;
```

#### 8. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L64-L65` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L64-L65) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L64-L65)

```diff
-       const Wp = ip && (0, Op.m)(ip),
-         yp = null !== (cp = null === Wp || void 0 === Wp ? void 0 : Wp.syllableMs) && void 0 !== cp ? cp : Op.d,
+       const pT = UT && (0, WT.k)(UT),
+         BT = null !== (mT = null === pT || void 0 === pT ? void 0 : pT.syllableMs) && void 0 !== mT ? mT : WT.d,
```

#### 9. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L68)

```diff
-           for (const Op of (0, op.nc)(pp))
+           for (const WT of (0, zT.Wb)(TT))
```

#### 10. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L88)

```diff
-                 for (const op of null !== (cp = pp.match(ep)) && void 0 !== cp ? cp : []) {
+                 for (const zT of null !== (mT = TT.match(bT)) && void 0 !== mT ? mT : []) {
```

#### 11. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L115)

```diff
-         const pp = null !== (Xp = null === (lp = Op.at(-1)) || void 0 === lp ? void 0 : lp.text) && void 0 !== Xp ? Xp : "",
+         const TT = null !== (aT = null === (yT = WT.at(-1)) || void 0 === yT ? void 0 : yT.text) && void 0 !== aT ? aT : "",
```

#### 12. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L129)

```diff
-             Sp += kp(`${Rp(vp.text)}|${op}`) * Ip.variationSemitones;
+             gT += eT(`${JT(vT.text)}|${zT}`) * MT.variationSemitones;
```

#### 13. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L141)

```diff
-           Ep += Op * yp + (Up.test(vp.text) ? Sp : tp.test(vp.text) ? Ip : 0)
+           tT += WT * BT + (ZT.test(vT.text) ? gT : fT.test(vT.text) ? MT : 0)
```

#### 14. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L145)

```diff
-         pieces: Hp.map((pp => "space" === pp.kind ? pp : "icon" === pp.kind ? {
+         pieces: qT.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
```

#### 15. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L157-L159` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L157-L159) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L157-L159)

```diff
-     var Cp = cp(1201),
-       Ep = cp(1260),
-       Xp = cp(1963);
+     var wT = mT(1288),
+       tT = mT(1345),
+       aT = mT(2054);
```

#### 16. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L163-L164` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L163-L164) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L163-L164)

```diff
-       const ip = Ep.g.get().getCurrentLanguageCode();
-       return (0, Cp.w)(ip, pp.translationKey, (0, Cp.t)(pp.params, Xp.d.shown))
+       const UT = tT.f.get().getCurrentLanguageCode();
+       return (0, wT.r)(UT, TT.translationKey, (0, wT.o)(TT.params, aT.d.shown))
```

#### 17. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L168-L169` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L168-L169) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L168-L169)

```diff
-       const ip = void 0 === pp.voice ? null : (0, Op.o)(pp.voice),
-         cp = ip && (0, Op.m)(ip);
+       const UT = void 0 === TT.voice ? null : (0, WT.l)(TT.voice),
+         mT = UT && (0, WT.k)(UT);
```

#### 18. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L186)

```diff
-   4972: (pp, ip, cp) => {
+   4956: (TT, UT, mT) => {
```

#### 19. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L188)

```diff
-       e: () => Dp,
+       c: () => jT,
```

#### 20. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L191)

```diff
-     var Op = cp(4974),
+     var WT = mT(4959),
```

#### 21. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L249)

```diff
-       if (!Ip || !Sp || !op.c.get("soundOnFromAd")) return () => {};
+       if (!MT || !gT || !zT.b.get("soundOnFromAd")) return () => {};
```

#### 22. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L251)

```diff
-       return null === (cp = xp._autoResume) || void 0 === cp || cp.call(xp), Dp(Ip, Sp, pp, ip, op.c.get("soundVolume"), (() => {
+       return null === (mT = nT._autoResume) || void 0 === mT || mT.call(nT), jT(MT, gT, TT, UT, zT.b.get("soundVolume"), (() => {
```

#### 23. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L257)

```diff
-   39324: (pp, ip, cp) => {
+   39278: (TT, UT, mT) => {
```

#### 24. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L262)

```diff
-     var Op = cp(337);
+     var WT = mT(366);
```

#### 25. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L281)

```diff
-               color: Op.N.redUiText
+               color: WT.R.redUiText
```

#### 26. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L287-L288` → after: `L287-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L287-L288) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L287-L288)

```diff
-     var Ip = cp(4341),
-       Sp = cp(1251);
+     var MT = mT(4328),
+       gT = mT(1336);
```

#### 27. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L298)

```diff
-         TA: 1,
+         fl: 1,
```

#### 28. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L313` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L313) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L313)

```diff
-         blendMode: Ip.g.Standard
+         blendMode: MT.e.Standard
```

#### 29. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L318)

```diff
-         TA: 96,
+         fl: 96,
```

#### 30. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L339)

```diff
-         blendMode: Ip.g.Standard
+         blendMode: MT.e.Standard
```

#### 31. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L400)

```diff
-           if (pp !== Sp.z) return;
+           if (TT !== gT.w) return;
```

#### 32. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L422-L423)

```diff
-     var tp = cp(4972),
-       Hp = cp(4964);
+     var fT = mT(4956),
+       qT = mT(4939);
```

#### 33. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L444)

```diff
-           } = (0, Hp.h)(Ip);
+           } = (0, qT.e)(MT);
```

#### 34. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L450)

```diff
-     var ep = cp(39330);
+     var bT = mT(39281);
```

#### 35. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L464)

```diff
-       const xp = ((null !== (Op = pp.getMetaInfo(cp).rot) && void 0 !== Op ? Op : 1) - 1) * Math.PI / 2,
+       const nT = ((null !== (WT = TT.getMetaInfo(mT).rot) && void 0 !== WT ? WT : 1) - 1) * Math.PI / 2,
```

#### 36. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L504)

```diff
-           blendMode: Ip.g.Standard,
+           blendMode: MT.e.Standard,
```

#### 37. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L521)

```diff
-           blendMode: Ip.g.Add,
+           blendMode: MT.e.Add,
```

#### 38. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L534` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L534) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L534)

```diff
-         let op = this.smokes.find((pp => pp.pos[0] === ip[0] && pp.pos[1] === ip[1] && pp.pos[2] === ip[2] && pp.tx === cp));
+         let zT = this.smokes.find((TT => TT.pos[0] === UT[0] && TT.pos[1] === UT[1] && TT.pos[2] === UT[2] && TT.Gg === mT));
```

#### 39. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L537)

```diff
-             tx: cp,
+             Gg: mT,
```

#### 40. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L543` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L543) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L543)

```diff
-           const ip = this.smokes.reduce(((pp, ip) => ip.endMs < pp.endMs ? ip : pp));
+           const UT = this.smokes.reduce(((TT, UT) => UT.endMs < TT.endMs ? UT : TT));
```

#### 41. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L555)

```diff
-           const [Op, op, Ip] = ip.pos, Sp = cp < ip.endMs && pp.getBlockId(Op, op, Ip) === ip.tx;
+           const [WT, zT, MT] = UT.pos, gT = mT < UT.endMs && TT.getBlockId(WT, zT, MT) === UT.Gg;
```

#### 42. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L586)

```diff
-         for (const cp of null !== (ip = this.puffers) && void 0 !== ip ? ip : []) {
+         for (const mT of null !== (UT = this.puffers) && void 0 !== UT ? UT : []) {
```

#### 43. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L599` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L599) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L599)

```diff
-           return new ep.i(ip, Math.ceil(4 * Op), Cp)
+           return new bT.e(UT, Math.ceil(4 * WT), wT)
```

#### 44. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L616)

```diff
-           cp === Sp.C && ip.start(pp, Op)
+           mT === gT.A && UT.start(TT, WT)
```

#### 45. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L637` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L637) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L637)

```diff
-       for (const op of [pp, ...null !== ip && void 0 !== ip ? ip : []]) try {
+       for (const zT of [TT, ...null !== UT && void 0 !== UT ? UT : []]) try {
```

#### 46. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L645)

```diff
-   39330: (pp, ip, cp) => {
+   39281: (TT, UT, mT) => {
```

#### 47. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L647-L648` → after: `L647-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L647-L648) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L647-L648)

```diff
-       e: () => Op,
-       i: () => Ip
+       b: () => WT,
+       e: () => MT
```

#### 48. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L656` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L656) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L656)

```diff
-         this.style = pp, this.TA = ip, this.half = cp, this.particles = null, this.lastFrame = -1
+         this.style = TT, this.fl = UT, this.half = mT, this.particles = null, this.lastFrame = -1
```

#### 49. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L666-L667` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L666-L667) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L666-L667)

```diff
-             texture: pp.soft ? op : "square_particle",
-             TA: ip,
+             texture: TT.soft ? zT : "square_particle",
+             fl: UT,
```

#### 50. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L689)

```diff
-         }(this.style, this.TA), {
+         }(this.style, this.fl), {
```

#### 51. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L700)

```diff
-   4970: (pp, ip, cp) => {
+   4948: (TT, UT, mT) => {
```

#### 52. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L703-L706` → after: `L703-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L703-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L703-L706) · [Before (L703-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L703-L706)

```diff
-       f: () => Op,
-       i: () => Ip,
-       m: () => Lp,
-       o: () => Sp
+       e: () => WT,
+       h: () => MT,
+       k: () => HT,
+       l: () => gT
```

#### 53. `bundles/bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L850` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-028a12188e43baefbd7cb1ca83463ba0d309df4e2aca472030bf9e5a2e5ff844) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L850) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/clientGamePlugins.js#L850)

```diff
-       return "string" !== typeof pp ? pp : Object.hasOwn(Ip, pp) ? Ip[pp] : null
+       return "string" !== typeof TT ? TT : Object.hasOwn(MT, TT) ? MT[TT] : null
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (1012 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 1. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L4-L100` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L4) · [Before (L4-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L4-L100)

```diff
-   8356: (pp, ip, cp) => {
-     var Op = {
-       "./nintendo/A.svg": 8358,
-       "./nintendo/B.svg": 8366,
-       "./nintendo/Down.svg": 8374,
-       "./nintendo/Home.svg": 8378,
-       "./nintendo/LB.svg": 8382,
-       "./nintendo/LS.svg": 8389,
-       "./nintendo/LT.svg": 8394,
-       "./nintendo/Left.svg": 8399,
-       "./nintendo/LeftStick.svg": 8402,
-       "./nintendo/Menu.svg": 8408,
-       "./nintendo/RB.svg": 8411,
-       "./nintendo/RS.svg": 8414,
-       "./nintendo/RT.svg": 8420,
-       "./nintendo/Right.svg": 8427,
- ... (81 more removed lines; see GitHub link above)
+   8903: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L103-L104` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L7-L8) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L103-L104)

```diff
-       f: () => qp,
-       h: () => Mp
+       e: () => xT,
+       i: () => dT
```

#### 3. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L106-L117` → after: `L10-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L10-L21) · [Before (L106-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L106-L117)

```diff
-     var Op = cp(62),
-       op = cp(4635),
-       Ip = cp(1141),
-       Sp = cp(1476),
-       xp = cp(34),
-       Lp = cp(3532),
-       Yp = cp(2281),
-       Dp = cp(1251),
-       Ap = cp(2638),
-       Pp = cp(1956),
-       Wp = cp(2004),
-       yp = cp(1201),
+     var WT = mT(63),
+       zT = mT(4650),
+       MT = mT(1225),
+       gT = mT(1567),
+       nT = mT(31),
+       HT = mT(3524),
+       kT = mT(2355),
+       jT = mT(1336),
+       lT = mT(2685),
+       LT = mT(2046),
+       pT = mT(2089),
+       BT = mT(1288),
```

#### 4. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L119-L120` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L23-L24) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L119-L120)

```diff
-       wp = cp(1650),
-       vp = cp(1049),
+       cT = mT(1752),
+       vT = mT(1126),
```

#### 5. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L122-L127` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L26-L31) · [Before (L122-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L122-L127)

```diff
-       Hp = cp(8909),
-       dp = cp(8917),
-       ep = cp(8919),
-       jp = cp(8843),
-       kp = cp(8928),
-       mp = (cp(8937), cp(1112));
+       qT = mT(8912),
+       iT = mT(8918),
+       bT = mT(8923),
+       OT = mT(8847),
+       eT = mT(8925),
+       YT = (mT(8933), mT(1188));
```

#### 6. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L139` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L43) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L139)

```diff
-       return "inGame" === Up.c.get("gameState") && !(0, wp.l)()
+       return "inGame" === ZT.b.get("gameState") && !(0, cT.l)()
```

#### 7. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L143` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L47) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L143)

```diff
-       return (0, dp.t)(pp, Dp.n, dp.f, dp.h, dp.k)
+       return (0, iT.y)(TT, jT.j, iT.i, iT.l, iT.o)
```

#### 8. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L148` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L52) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L148)

```diff
-       } = (0, yp.H)(), {
+       } = (0, BT.z)(), {
```

#### 9. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L150` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L54) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L150)

```diff
-       } = (0, Ip.b)(), [cp, Up] = (0, Op.useState)(null), [vp, qp] = (0, Op.useState)(null), Mp = (0, Op.useRef)(null), Xp = (0, Op.useCallback)((pp => {
+       } = (0, MT.d)(), [mT, ZT] = (0, WT.useState)(null), [vT, xT] = (0, WT.useState)(null), dT = (0, WT.useRef)(null), aT = (0, WT.useCallback)((TT => {
```

#### 10. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L157` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L61) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L157)

```diff
-         for (let Op = 0; Op < Dp.n; Op++) {
+         for (let WT = 0; WT < jT.j; WT++) {
```

#### 11. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L159` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L63) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L159)

```diff
-           ip.push(null !== (cp = pp[Op]) && void 0 !== cp ? cp : null)
+           UT.push(null !== (mT = TT[WT]) && void 0 !== mT ? mT : null)
```

#### 12. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L162-L164` → after: `L66-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L66-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L66-L68) · [Before (L162-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L162-L164)

```diff
-       }((0, Ap.i)(ip.getPlayerCosmetics().emote))), [ip, Bp]);
-       (0, Wp.b)("cosmeticsUpdated", (pp => {
-         pp.some((pp => pp.local && "emote" === pp.KI)) && Np((pp => pp + 1))
+       }((0, lT.l)(UT.getPlayerCosmetics().emote))), [UT, QT]);
+       (0, pT.e)("cosmeticsUpdated", (TT => {
+         TT.some((TT => TT.local && "emote" === TT.wM)) && sT((TT => TT + 1))
```

#### 13. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L169` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L73) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L169)

```diff
-           "pad" === pp && (0, ep.f)(), fp.current = ip, Jp.current = {
+           "pad" === TT && (0, bT.h)(), PT.current = UT, IT.current = {
```

#### 14. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L182` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L86) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L182)

```diff
-           const ip = (0, Yp.g)(pp),
+           const UT = (0, kT.h)(TT),
```

#### 15. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L189` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L93) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L189)

```diff
-       (0, Sp.f)("requestToggleEmoteWheel", (() => {
+       (0, gT.g)("requestToggleEmoteWheel", (() => {
```

#### 16. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L191-L196` → after: `L95-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L95-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L95-L100) · [Before (L191-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L191-L196)

```diff
-       })), (0, Sp.f)("requestEmoteWheelHoldOpen", (() => {
-         null === cp && Cp() && bp((0, Hp.b)() ? "hold" : "click")
-       })), (0, Sp.f)("requestEmoteWheelPadOpen", (pp => {
-         null !== cp || !Cp() || (0, jp.d)() || (0, kp.x)() || bp("pad", pp)
-       })), (0, Sp.f)("requestEmoteRepeatLast", (() => {
-         if (null !== cp || !Cp() || (0, jp.d)() || (0, kp.x)()) return;
+       })), (0, gT.g)("requestEmoteWheelHoldOpen", (() => {
+         null === mT && wT() && VT((0, qT.e)() ? "hold" : "click")
+       })), (0, gT.g)("requestEmoteWheelPadOpen", (TT => {
+         null !== mT || !wT() || (0, OT.c)() || (0, eT.o)() || VT("pad", TT)
+       })), (0, gT.g)("requestEmoteRepeatLast", (() => {
+         if (null !== mT || !wT() || (0, OT.c)() || (0, eT.o)()) return;
```

#### 17. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L205` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L109) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L205)

```diff
-       (0, Sp.f)("emoteWheelPadAim", (pp => {
+       (0, gT.g)("emoteWheelPadAim", (TT => {
```

#### 18. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L207-L209` → after: `L111-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L111-L113) · [Before (L207-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L207-L209)

```diff
-         const ip = (0, dp.A)(pp, Dp.n, Mp.current);
-         Xp(null !== ip && null !== Tp[ip] ? ip : null)
-       })), (0, Sp.f)("requestEmoteWheelPadCommit", (pp => {
+         const UT = (0, iT.F)(TT, jT.j, dT.current);
+         aT(null !== UT && null !== FT[UT] ? UT : null)
+       })), (0, gT.g)("requestEmoteWheelPadCommit", (TT => {
```

#### 19. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L211` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L115) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L211)

```diff
-       })), (0, Sp.f)("appManagerUpdated|activeInputDevice", (pp => {
+       })), (0, gT.g)("appManagerUpdated|activeInputDevice", (TT => {
```

#### 20. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L213-L215` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L117-L119) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L213-L215)

```diff
-       })), (0, Op.useLayoutEffect)((() => (Rp = cp, (0, Lp.y)("emoteWheel", "pad" === cp), xp.m.GA(Lp.r), () => {
-         Rp = null, (0, Lp.y)("emoteWheel", !1), xp.m.GA(Lp.r)
-       })), [cp]), (0, Sp.f)("requestEmoteWheelHoldRelease", (() => {
+       })), (0, WT.useLayoutEffect)((() => (JT = mT, (0, HT.q)("emoteWheel", "pad" === mT), nT.j.EZ(HT.n), () => {
+         JT = null, (0, HT.q)("emoteWheel", !1), nT.j.EZ(HT.n)
+       })), [mT]), (0, gT.g)("requestEmoteWheelHoldRelease", (() => {
```

#### 21. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L217` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L121) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L217)

```diff
-       })), (0, Sp.f)("requestEmoteWheelClose", (() => {
+       })), (0, gT.g)("requestEmoteWheelClose", (() => {
```

#### 22. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L219` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L123) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L219)

```diff
-       })), (0, Sp.f)("appManagerUpdated|gameState", (pp => {
+       })), (0, gT.g)("appManagerUpdated|gameState", (TT => {
```

#### 23. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L225` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L129) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L225)

```diff
-       if ((0, Sp.f)("appManagerUpdated|openEverythingMenuName", Fp), (0, Sp.f)("appManagerUpdated|openInGameMenuName", Fp), (0, Sp.f)("pointerLockUpdate", (pp => {
+       if ((0, gT.g)("appManagerUpdated|openEverythingMenuName", KT), (0, gT.g)("appManagerUpdated|openInGameMenuName", KT), (0, gT.g)("pointerLockUpdate", (TT => {
```

#### 24. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L235` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L139) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L235)

```diff
-         }), [cp, hp]), (0, op.e)(!0, "click" === cp, "EmoteWheelOverlay"), (0, Op.useEffect)((() => {
+         }), [mT, uT]), (0, zT.d)(!0, "click" === mT, "EmoteWheelOverlay"), (0, WT.useEffect)((() => {
```

#### 25. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L242-L243` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L146-L147) · [Before (L242-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L242-L243)

```diff
-             ip = dp.r * pp,
-             Op = dp.p * pp,
+             UT = iT.u * TT,
+             WT = iT.t * TT,
```

#### 26. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L257` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L161) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L257)

```diff
-                 const op = (0, dp.v)(pp, ip, Dp.n);
+                 const zT = (0, iT.A)(TT, UT, jT.j);
```

#### 27. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L267` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L171) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L267)

```diff
-         rp = null !== Gp ? (0, Yp.g)(Gp).displayName : pp("emotes:pickEmote");
+         NT = null !== GT ? (0, kT.h)(GT).displayName : TT("emotes:pickEmote");
```

#### 28. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L278-L279` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L182-L183) · [Before (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L278-L279)

```diff
-             width: 2 * dp.r + "rem",
-             height: 2 * dp.r + "rem"
+             width: 2 * iT.u + "rem",
+             height: 2 * iT.u + "rem"
```

#### 29. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L283` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L187) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L283)

```diff
-             viewBox: `0 0 ${dp.m} ${dp.m}`,
+             viewBox: `0 0 ${iT.p} ${iT.p}`,
```

#### 30. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L298` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L202) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L298)

```diff
-                 "aria-label": null !== ip ? (0, Yp.g)(ip).displayName : pp("emotes:emptySlot")
+                 "aria-label": null !== UT ? (0, kT.h)(UT).displayName : TT("emotes:emptySlot")
```

#### 31. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L302-L304` → after: `L206-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L206-L208) · [Before (L302-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L302-L304)

```diff
-               cx: dp.f,
-               cy: dp.f,
-               r: dp.k
+               cx: iT.i,
+               cy: iT.i,
+               r: iT.o
```

#### 32. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L307-L309` → after: `L211-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L211-L213) · [Before (L307-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L307-L309)

```diff
-               cx: dp.f,
-               cy: dp.f,
-               r: dp.h
+               cx: iT.i,
+               cy: iT.i,
+               r: iT.l
```

#### 33. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L317-L319` → after: `L221-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L221-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L221-L223) · [Before (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L317-L319)

```diff
-               op = (0, dp.w)(ip, Dp.n),
-               Ip = dp.c * Math.cos(op),
-               Sp = dp.c * Math.sin(op);
+               zT = (0, iT.D)(UT, jT.j),
+               MT = iT.e * Math.cos(zT),
+               gT = iT.e * Math.sin(zT);
```

#### 34. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L326-L328` → after: `L230-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L230-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L230-L232) · [Before (L326-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L326-L328)

```diff
-                 left: `calc(50% + ${Ip}rem)`,
-                 top: `calc(50% + ${Sp}rem)`,
-                 backgroundImage: cp ? `url(/textures/charSkins/previews/emote_${pp}_preview.png)` : void 0
+                 left: `calc(50% + ${MT}rem)`,
+                 top: `calc(50% + ${gT}rem)`,
+                 backgroundImage: mT ? `url(/textures/charSkins/previews/emote_${TT}_preview.png)` : void 0
```

#### 35. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L340` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L244) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L340)

```diff
-   9024: (pp, ip, cp) => {
+   9011: (TT, UT, mT) => {
```

#### 36. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L342-L343` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L246-L247) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L342-L343)

```diff
-       b: () => vp,
-       d: () => dp
+       e: () => vT,
+       h: () => iT
```

#### 37. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L345-L348` → after: `L249-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L249-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L249-L252) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L345-L348)

```diff
-     var Op = cp(62),
-       op = cp(34),
-       Ip = cp(2543),
-       Sp = cp(3520);
+     var WT = mT(63),
+       zT = mT(31),
+       MT = mT(2608),
+       gT = mT(3511);
```

#### 38. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L445` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L349) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L445)

```diff
-         Ep = `${null===Cp||void 0===Cp?void 0:Cp.innerWidth}x${null===Cp||void 0===Cp?void 0:Cp.innerHeight}:${Mp.shift}:${Math.round(dp.width)}:${Math.round(kp)}`,
+         tT = `${null===wT||void 0===wT?void 0:wT.innerWidth}x${null===wT||void 0===wT?void 0:wT.innerHeight}:${dT.shift}:${Math.round(iT.width)}:${Math.round(eT)}`,
```

#### 39. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L447` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L351) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L447)

```diff
-         lp = (null === Xp || void 0 === Xp ? void 0 : Xp.at) === Ep ? (Qp = Xp.rise, Jp = Mp.rise, null === Qp ? Jp : null === Jp ? Qp : Math.max(Qp, Jp)) : Mp.rise;
+         yT = (null === aT || void 0 === aT ? void 0 : aT.at) === tT ? (XT = aT.rise, IT = dT.rise, null === XT ? IT : null === IT ? XT : Math.max(XT, IT)) : dT.rise;
```

#### 40. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L455` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L359) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L455)

```diff
-           rise: null !== (op = Bp.rise) && void 0 !== op ? op : lp
+           rise: null !== (zT = QT.rise) && void 0 !== zT ? zT : yT
```

#### 41. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L458` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L362) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L458)

```diff
-       return (null !== (Ip = null === Tp || void 0 === Tp ? void 0 : Tp.shift) && void 0 !== Ip ? Ip : 0) === Np.shift && wp.set(vp, {
+       return (null !== (MT = null === FT || void 0 === FT ? void 0 : FT.shift) && void 0 !== MT ? MT : 0) === sT.shift && cT.set(vT, {
```

#### 42. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L461` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L365) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L461)

```diff
-       }), (null === Tp || void 0 === Tp ? void 0 : Tp.shift) !== Np.shift && vp.style.setProperty("--touch-shop-above-shift", `${Np.shift}px`), (null === Tp || void 0 === Tp ? void 0 : Tp.rise) !== Np.rise && (vp.classList.toggle("ShopAboveUp", null !== Np.rise), null === Np.rise … [truncated]
+       }), (null === FT || void 0 === FT ? void 0 : FT.shift) !== sT.shift && vT.style.setProperty("--touch-shop-above-shift", `${sT.shift}px`), (null === FT || void 0 === FT ? void 0 : FT.rise) !== sT.rise && (vT.classList.toggle("ShopAboveUp", null !== sT.rise), null === sT.rise … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L499` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L403) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L499)

```diff
-           wp = [(0, op.n)(Ip.e, Up), (0, op.n)(Sp.e, Up)];
+           cT = [(0, zT.k)(MT.d, ZT), (0, zT.k)(gT.c, ZT)];
```

#### 44. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L507` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L411) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L507)

```diff
-   5113: (pp, ip, cp) => {
+   5090: (TT, UT, mT) => {
```

#### 45. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L511` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L415) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L511)

```diff
-       i: () => Up,
+       j: () => ZT,
```

#### 46. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L514-L519` → after: `L418-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L418-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L418-L423) · [Before (L514-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L514-L519)

```diff
-     var Op = cp(62),
-       op = cp(5122),
-       Ip = cp(4462),
-       Sp = cp(1387),
-       xp = cp(5146),
-       Lp = cp(1049),
+     var WT = mT(63),
+       zT = mT(5095),
+       MT = mT(4468),
+       gT = mT(1475),
+       nT = mT(5116),
+       HT = mT(1126),
```

#### 47. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L521-L524` → after: `L425-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L425-L428) · [Before (L521-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L521-L524)

```diff
-       Dp = cp(1372),
-       Ap = cp(1765),
-       Pp = cp(5149),
-       Wp = cp(1112);
+       jT = mT(1457),
+       lT = mT(1863),
+       LT = mT(5123),
+       pT = mT(1188);
```

#### 48. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L550` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L454) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L550)

```diff
-             children: (0, Wp.jsx)(Ip.b, {
+             children: (0, pT.jsx)(MT.d, {
```

#### 49. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L560` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L464) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L560)

```diff
-               children: (0, Wp.jsx)(Sp.d, {
+               children: (0, pT.jsx)(gT.c, {
```

#### 50. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L607` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L511) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L607)

```diff
-           children: [`${ip}: ${Ap?Ap(dp):dp}`, Dp && (0, Wp.jsx)(Sp.d, {
+           children: [`${UT}: ${lT?lT(iT):iT}`, jT && (0, pT.jsx)(gT.c, {
```

#### 51. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L662` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L566) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L662)

```diff
-         const Op = null !== (pp = null === (ip = kp.current) || void 0 === ip ? void 0 : ip.querySelector(".rangeslider")) && void 0 !== pp ? pp : null;
+         const WT = null !== (TT = null === (UT = eT.current) || void 0 === UT ? void 0 : UT.querySelector(".rangeslider")) && void 0 !== TT ? TT : null;
```

#### 52. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L668` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L572) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L668)

```diff
-       const Rp = (null !== (ip = String(xp).split(".")[1]) && void 0 !== ip ? ip : "").length,
+       const JT = (null !== (UT = String(nT).split(".")[1]) && void 0 !== UT ? UT : "").length,
```

#### 53. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L686` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L590) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L686)

```diff
-       return (0, Pp.h)(mp, {
+       return (0, LT.g)(YT, {
```

#### 54. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L689` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L593) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L689)

```diff
-           const ip = null !== ep && void 0 !== ep ? ep : Math.max(xp, Math.round((Sp - Ip) / 20 / xp) * xp),
+           const UT = null !== bT && void 0 !== bT ? bT : Math.max(nT, Math.round((gT - MT) / 20 / nT) * nT),
```

#### 55. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L695` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L599) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L695)

```diff
-           const ip = qp(Ip + (Dp ? 1 - pp : pp) * (Sp - Ip));
+           const UT = xT(MT + (jT ? 1 - TT : TT) * (gT - MT));
```

#### 56. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L706` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L610) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L706)

```diff
-         children: (0, Wp.jsx)(op.b, {
+         children: (0, pT.jsx)(zT.d, {
```

#### 57. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L751` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L655) · [Before (L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L751)

```diff
-           children: [ip, Ip && (0, Wp.jsx)(Sp.d, {
+           children: [UT, MT && (0, pT.jsx)(gT.c, {
```

#### 58. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L755` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L659) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L755)

```diff
-         }), (0, Wp.jsx)(xp.b, {
+         }), (0, pT.jsx)(nT.c, {
```

#### 59. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L764` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L668) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L764)

```diff
-   5146: (pp, ip, cp) => {
+   5116: (TT, UT, mT) => {
```

#### 60. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L766` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L670) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L766)

```diff
-       b: () => Sp
+       c: () => gT
```

#### 61. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L768` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L672) · [Before (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L768)

```diff
-     var Op = cp(1049),
+     var WT = mT(1126),
```

#### 62. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L770` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L674) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L770)

```diff
-       Ip = cp(1112);
+       MT = mT(1188);
```

#### 63. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L814` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L718) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L814)

```diff
-   8877: (pp, ip, cp) => {
+   8874: (TT, UT, mT) => {
```

#### 64. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L817` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L721) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L817)

```diff
-       f: () => Ip
+       g: () => MT
```

#### 65. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L819` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L723) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L819)

```diff
-     var Op = cp(2028);
+     var WT = mT(2111);
```

#### 66. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L824` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L728) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L824)

```diff
-   8909: (pp, ip, cp) => {
+   8912: (TT, UT, mT) => {
```

#### 67. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L826` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L730) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L826)

```diff
-       b: () => op
+       e: () => zT
```

#### 68. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L831` → after: `L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L735) · [Before (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L831)

```diff
-       return !Op.c.get("isTouchScreen") && null !== document.pointerLockElement
+       return !WT.b.get("isTouchScreen") && null !== document.pointerLockElement
```

#### 69. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L834` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L738) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L834)

```diff
-   9015: (pp, ip, cp) => {
+   8996: (TT, UT, mT) => {
```

#### 70. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L836-L838` → after: `L740-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L740-L741) · [Before (L836-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L836-L838)

```diff
-       B: () => Lp,
-       D: () => Pp,
-       H: () => Yp,
+       A: () => gT,
+       E: () => cT,
```

#### 71. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L841-L843` → after: `L744-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L744-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L744-L749) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L841-L843)

```diff
-       d: () => op,
-       h: () => xp,
-       j: () => Op,
+       L: () => LT,
+       N: () => kT,
+       Q: () => BT,
+       T: () => MT,
+       e: () => zT,
+       i: () => nT,
```

#### 72. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L845-L849` → after: `L751-L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L751-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L751-L753) · [Before (L845-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L845-L849)

```diff
-       n: () => Wp,
-       o: () => Dp,
-       r: () => Sp,
-       u: () => wp,
-       y: () => Ap
+       q: () => ZT,
+       t: () => pT,
+       x: () => jT
```

#### 73. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L951` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L855) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L951)

```diff
-       const cp = (pp, ip, cp, Op) => ip - pp > Op - cp ? cp - pp > ip - Op ? Op - ip : cp - pp : pp < cp ? cp - pp : ip > Op ? Op - ip : 0;
+       const mT = (TT, UT, mT, WT) => UT - TT > WT - mT ? mT - TT > UT - WT ? WT - UT : mT - TT : TT < mT ? mT - TT : UT > WT ? WT - UT : 0;
```

#### 74. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L980` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L884) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L980)

```diff
-   9019: (pp, ip, cp) => {
+   9003: (TT, UT, mT) => {
```

#### 75. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L985-L986` → after: `L887-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L887-L888) · [Before (L985-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L985-L986)

```diff
-       f: () => Sp,
-       j: () => Ap,
+       g: () => MT,
+       k: () => zT,
```

#### 76. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L988-L989` → after: `L890-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L890-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L890-L893) · [Before (L988-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L988-L989)

```diff
-       r: () => Yp,
-       s: () => Lp
+       p: () => lT,
+       s: () => jT,
+       w: () => kT,
+       x: () => HT
```

#### 77. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L991` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L895) · [Before (L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L991)

```diff
-     var Op = cp(2525);
+     var WT = mT(2589);
```

#### 78. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1013` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L917) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1013)

```diff
-       rowIcons: Op.A,
+       rowIcons: WT.B,
```

#### 79. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1026` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L930) · [Before (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1026)

```diff
-         const pp = Op.querySelector(`.TouchSlot${xp} > .TouchKey`);
+         const TT = WT.querySelector(`.TouchSlot${nT} > .TouchKey`);
```

#### 80. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1030` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L934) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1030)

```diff
-           const ip = (null !== (Lp = null === (Yp = pp.querySelector(".TouchKeyLabel")) || void 0 === Yp ? void 0 : Yp.textContent) && void 0 !== Lp ? Lp : "").split(/\s+/).filter((pp => !/[\d\xd7]/.test(pp))).join(" ");
+           const UT = (null !== (HT = null === (kT = TT.querySelector(".TouchKeyLabel")) || void 0 === kT ? void 0 : kT.textContent) && void 0 !== HT ? HT : "").split(/\s+/).filter((TT => !/[\d\xd7]/.test(TT))).join(" ");
```

#### 81. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1035` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L939) · [Before (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1035)

```diff
-           const cp = pp.querySelector(`.InGameUi ${ip}`);
+           const mT = TT.querySelector(`.InGameUi ${UT}`);
```

#### 82. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1040` → after: `L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L944) · [Before (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1040)

```diff
-         faces: Object.keys(Ip).length > 0 ? Ip : null,
+         faces: Object.keys(MT).length > 0 ? MT : null,
```

#### 83. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1045` → after: `L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L949) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1045)

```diff
-         items: Ap.length > 0 ? Ap : null,
+         items: lT.length > 0 ? lT : null,
```

#### 84. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1073` → after: `L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L977) · [Before (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1073)

```diff
-   8917: (pp, ip, cp) => {
+   8918: (TT, UT, mT) => {
```

#### 85. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1076-L1080` → after: `L980-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L980-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L980-L986) · [Before (L1076-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1076-L1080)

```diff
-       c: () => Ip,
-       f: () => xp,
-       h: () => Yp,
-       k: () => Lp,
-       m: () => Sp,
+       D: () => jT,
+       E: () => LT,
+       F: () => pT,
+       e: () => MT,
+       i: () => nT,
+       l: () => kT,
+       o: () => HT,
```

#### 86. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1084-L1086` → after: `L989-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L989-L990) · [Before (L1084-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1084-L1086)

```diff
-       v: () => Ap,
-       w: () => Dp,
-       z: () => Pp
+       u: () => WT,
+       y: () => BT
```

#### 87. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1101` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1005) · [Before (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1101)

```diff
-       Wp = (pp, ip, cp) => Math.hypot(pp.x, pp.y) < Pp ? cp : Ap(pp.x, pp.y, ip),
+       pT = (TT, UT, mT) => Math.hypot(TT.x, TT.y) < LT ? mT : lT(TT.x, TT.y, UT),
```

#### 88. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1107-L1108` → after: `L1011-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1011-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1011-L1012) · [Before (L1107-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1107-L1108)

```diff
-           Yp = (pp, ip) => `${cp+pp*Math.cos(ip)} ${cp+pp*Math.sin(ip)}`;
-         return [`M ${Yp(Op,xp)}`, `L ${Yp(op,xp)}`, `A ${op} ${op} 0 0 1 ${Yp(op,Lp)}`, `L ${Yp(Op,Lp)}`, `A ${Op} ${Op} 0 0 0 ${Yp(Op,xp)}`, "Z"].join(" ")
+           kT = (TT, UT) => `${mT+TT*Math.cos(UT)} ${mT+TT*Math.sin(UT)}`;
+         return [`M ${kT(WT,nT)}`, `L ${kT(zT,nT)}`, `A ${zT} ${zT} 0 0 1 ${kT(zT,HT)}`, `L ${kT(WT,HT)}`, `A ${WT} ${WT} 0 0 0 ${kT(WT,nT)}`, "Z"].join(" ")
```

#### 89. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1111` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1015) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1111)

```diff
-   8961: (pp, ip, cp) => {
+   8953: (TT, UT, mT) => {
```

#### 90. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1115-L1117` → after: `L1019-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1019-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1019-L1021) · [Before (L1115-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1115-L1117)

```diff
-     var Op = cp(62),
-       op = cp(8895),
-       Ip = cp(2492);
+     var WT = mT(63),
+       zT = mT(8894),
+       MT = mT(2552);
```

#### 91. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1120` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1024) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1120)

```diff
-       const pp = (0, Ip.i)("shopInfo"),
+       const TT = (0, MT.f)("shopInfo"),
```

#### 92. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1122` → after: `L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1026) · [Before (L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1122)

```diff
-       return (0, Ip.e)("shopInfo", ip), !(0, op.b)(pp)
+       return (0, MT.d)("shopInfo", UT), !(0, zT.d)(TT)
```

#### 93. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1125` → after: `L1029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1029) · [Before (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1125)

```diff
-   8318: (pp, ip, cp) => {
+   8300: (TT, UT, mT) => {
```

#### 94. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1127` → after: `L1031-L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1031-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1031-L1032) · [Before (L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1127)

```diff
-       e: () => op,
+       d: () => zT,
+       g: () => MT,
```

#### 95. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1129` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1034) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1129)

```diff
-       k: () => Pp,
+       i: () => lT,
```

#### 96. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1131` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1036) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1131)

```diff
-       p: () => Yp,
+       q: () => nT,
```

#### 97. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1133-L1135` → after: `L1038-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1038-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1038-L1039) · [Before (L1133-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1133-L1135)

```diff
-       s: () => Op,
-       w: () => Wp,
-       x: () => yp
+       u: () => pT,
+       w: () => BT
```

#### 98. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1197` → after: `L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1101) · [Before (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1197)

```diff
-       xp = pp => Sp.includes(pp) ? Sp : [pp],
+       nT = TT => gT.includes(TT) ? gT : [TT],
```

#### 99. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1215` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1119) · [Before (L1215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1215)

```diff
-         return [Yp(pp), ...null !== (ip = Dp[pp]) && void 0 !== ip ? ip : []]
+         return [kT(TT), ...null !== (UT = jT[TT]) && void 0 !== UT ? UT : []]
```

#### 100. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1238` → after: `L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1142) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1238)

```diff
-   8310: (pp, ip, cp) => {
+   8295: (TT, UT, mT) => {
```

#### 101. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1240` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1144) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1240)

```diff
-       A: () => qp,
+       C: () => YT,
```

#### 102. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1242-L1244` → after: `L1146-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1146-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1146-L1149) · [Before (L1242-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1242-L1244)

```diff
-       H: () => Rp,
-       K: () => Ep,
-       c: () => tp,
+       F: () => xT,
+       G: () => jT,
+       J: () => JT,
+       M: () => tT,
```

#### 103. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1246-L1250` → after: `L1151-L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1151-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1151-L1153) · [Before (L1246-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1246-L1250)

```diff
-       g: () => Pp,
-       j: () => Wp,
-       n: () => lp,
-       o: () => Cp,
-       p: () => Mp,
+       h: () => bT,
+       i: () => LT,
+       m: () => pT,
```

#### 104. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1253` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1157) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1253)

```diff
-       v: () => mp,
+       u: () => iT,
```

#### 105. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1256-L1259` → after: `L1160-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1160-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1160-L1163) · [Before (L1256-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1256-L1259)

```diff
-     var Op = cp(8318),
-       op = cp(8320),
-       Ip = cp(8298),
-       Sp = cp(8334);
+     var WT = mT(8300),
+       zT = mT(8305),
+       MT = mT(8282),
+       gT = mT(8325);
```

#### 106. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1264` → after: `L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1168) · [Before (L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1264)

```diff
-         return null !== (cp = pp[op]) && void 0 !== cp ? cp : Op.h[op]
+         return null !== (mT = TT[zT]) && void 0 !== mT ? mT : WT.g[zT]
```

#### 107. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1277-L1282` → after: `L1181-L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1181-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1181-L1186) · [Before (L1277-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1277-L1282)

```diff
-       Dp = (pp, ip) => null !== pp && void 0 !== pp ? pp : "nintendo" === ip,
-       Ap = pp => Dp((0, op.h)().swapConfirmBack, (0, op.k)()) && Yp.get(pp) || pp,
-       Pp = pp => Lp((0, op.h)().bindings, Ap(pp)),
-       Wp = pp => Op.h[Ap(pp)],
-       yp = Object.keys(Op.h),
-       Up = pp => "gameplay" === (0, Op.p)(pp) ? ["gameplay"] : (0, Op.m)(pp),
+       jT = (TT, UT) => null !== TT && void 0 !== TT ? TT : "nintendo" === UT,
+       lT = TT => jT((0, zT.k)().swapConfirmBack, (0, zT.l)()) && kT.get(TT) || TT,
+       LT = TT => HT((0, zT.k)().bindings, lT(TT)),
+       pT = TT => WT.g[lT(TT)],
+       BT = Object.keys(WT.g),
+       ZT = TT => "gameplay" === (0, WT.m)(TT) ? ["gameplay"] : (0, WT.i)(TT),
```

#### 108. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1289` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1193) · [Before (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1289)

```diff
-           Sp = new Set((0, Op.r)(ip)),
+           gT = new Set((0, WT.q)(UT)),
```

#### 109. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1300-L1302` → after: `L1204-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1204-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1204-L1206) · [Before (L1300-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1300-L1302)

```diff
-           const ip = Lp(pp, Ap) === op ? cp : op,
-             Sp = (0, Op.m)(Ap).some((pp => Op.k.has(pp)));
-           if ((0, Ip.C)(ip) && Sp) return null;
+           const UT = HT(TT, lT) === zT ? mT : zT,
+             gT = (0, WT.i)(lT).some((TT => WT.h.has(TT)));
+           if ((0, MT.D)(UT) && gT) return null;
```

#### 110. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1305` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1209) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1305)

```diff
-         for (const Ip of Object.keys(Dp)) Dp[Ip] === Op.h[Ip] && delete Dp[Ip];
+         for (const MT of Object.keys(jT)) jT[MT] === WT.g[MT] && delete jT[MT];
```

#### 111. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1308` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1212) · [Before (L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1308)

```diff
-       tp = (pp, ip) => null !== vp((0, op.h)().bindings, Ap(pp), ip),
+       fT = (TT, UT) => null !== vT((0, zT.k)().bindings, lT(TT), UT),
```

#### 112. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1311-L1312` → after: `L1215-L1216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1215-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1215-L1216) · [Before (L1311-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1311-L1312)

```diff
-         const cp = vp((0, op.h)().bindings, Ap(pp), ip);
-         return !!cp && ((0, op.o)({
+         const mT = vT((0, zT.k)().bindings, lT(TT), UT);
+         return !!mT && ((0, zT.m)({
```

#### 113. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1317` → after: `L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1221) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1317)

```diff
-         const cp = (0, Op.r)(ip);
+         const mT = (0, WT.q)(UT);
```

#### 114. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1334` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1238) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1334)

```diff
-         const cp = (0, op.h)();
+         const mT = (0, zT.k)();
```

#### 115. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1337` → after: `L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1241) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1337)

```diff
-           const cp = ip ? jp[pp][op] : Op.h[op];
+           const mT = UT ? OT[TT][zT] : WT.g[zT];
```

#### 116. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1340-L1341` → after: `L1244-L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1244-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1244-L1245) · [Before (L1340-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1340-L1341)

```diff
-         return (0, op.o)({
-           swapSticks: "southpaw" === pp ? ip : cp.swapSticks,
+         return (0, zT.m)({
+           swapSticks: "southpaw" === TT ? UT : mT.swapSticks,
```

#### 117. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1346` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1250) · [Before (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1346)

```diff
-         (0, op.o)({
+         (0, zT.m)({
```

#### 118. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1351-L1353` → after: `L1255-L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1255-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1255-L1257) · [Before (L1351-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1351-L1353)

```diff
-       Mp = () => (0, op.h)().swapSticks ? "RightStick" : "LeftStick",
-       Cp = () => (0, op.h)().swapSticks ? "LeftStick" : "RightStick",
-       Ep = pp => (0, op.h)().swapSticks && (0, Ip.C)(pp),
+       dT = () => (0, zT.k)().swapSticks ? "RightStick" : "LeftStick",
+       wT = () => (0, zT.k)().swapSticks ? "LeftStick" : "RightStick",
+       tT = TT => (0, zT.k)().swapSticks && (0, MT.D)(TT),
```

#### 119. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1356-L1357` → after: `L1260-L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1260-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1260-L1261) · [Before (L1356-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1356-L1357)

```diff
-         if (Op.x.has(pp)) return Mp();
-         const ip = Op.w[pp];
+         if (WT.w.has(TT)) return dT();
+         const UT = WT.u[TT];
```

#### 120. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1361` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1265) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1361)

```diff
-   8288: (pp, ip, cp) => {
+   8268: (TT, UT, mT) => {
```

#### 121. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1370-L1372` → after: `L1274-L1276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1274-L1276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1274-L1276) · [Before (L1370-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1370-L1372)

```diff
-       getBoundButton: () => Dp.g,
-       getControllerSettings: () => Pp.h,
-       getGlyphForNoaAction: () => Dp.n,
+       getBoundButton: () => jT.i,
+       getControllerSettings: () => LT.k,
+       getGlyphForNoaAction: () => jT.q,
```

#### 122. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1377` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1281) · [Before (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1377)

```diff
-       getPadRepeatTiming: () => Up.g,
+       getPadRepeatTiming: () => ZT.f,
```

#### 123. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1383-L1386` → after: `L1287-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1287-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1287-L1290) · [Before (L1383-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1383-L1386)

```diff
-     var op = cp(1201),
-       Ip = cp(1432),
-       Sp = cp(8290),
-       xp = cp(82),
+     var zT = mT(1288),
+       MT = mT(1526),
+       gT = mT(8277),
+       nT = mT(85),
```

#### 124. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1388-L1391` → after: `L1292-L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1292-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1292-L1295) · [Before (L1388-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1388-L1391)

```diff
-       Yp = cp(34),
-       Dp = cp(8310),
-       Ap = cp(8336),
-       Pp = cp(8320),
+       kT = mT(31),
+       jT = mT(8295),
+       lT = mT(8331),
+       LT = mT(8305),
```

#### 125. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1393` → after: `L1297-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1297-L1298) · [Before (L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1393)

```diff
-       yp = cp(8298),
+       BT = mT(8282),
+       ZT = mT(8790),
```

#### 126. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1395-L1396` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1300) · [Before (L1395-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1395-L1396)

```diff
-       wp = cp(8801),
-       vp = cp(1677);
+       vT = mT(1783);
```

#### 127. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1416` → after: `L1320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1320) · [Before (L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1416)

```diff
-           Ip = (0, yp.h)(ip.stick, dp(ip.moveDeadzone)),
+           MT = (0, BT.j)(UT.stick, iT(UT.moveDeadzone)),
```

#### 128. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1475` → after: `L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1379) · [Before (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1475)

```diff
-         const ip = (0, yp.h)(pp, .2);
+         const UT = (0, BT.j)(TT, .2);
```

#### 129. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1479` → after: `L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1383) · [Before (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1479)

```diff
-         const cp = (0, yp.h)(pp, .2),
+         const mT = (0, BT.j)(TT, .2),
```

#### 130. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1500` → after: `L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1404) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1500)

```diff
-         for (let Ip = pp instanceof HTMLElement ? pp : null !== (Op = null === pp || void 0 === pp ? void 0 : pp.parentElement) && void 0 !== Op ? Op : null; Ip; Ip = Ip.parentElement) {
+         for (let MT = TT instanceof HTMLElement ? TT : null !== (WT = null === TT || void 0 === TT ? void 0 : TT.parentElement) && void 0 !== WT ? WT : null; MT; MT = MT.parentElement) {
```

#### 131. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1507` → after: `L1411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1411) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1507)

```diff
-         return op instanceof HTMLElement && Rp(op, ip) ? op : null
+         return zT instanceof HTMLElement && JT(zT, UT) ? zT : null
```

#### 132. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1522` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1426) · [Before (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1522)

```diff
-         let cp = qp(pp, ip) ? pp : null,
+         let mT = xT(TT, UT) ? TT : null,
```

#### 133. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1548-L1549` → after: `L1452-L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1452-L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1452-L1453) · [Before (L1548-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1548-L1549)

```diff
-     var Np = cp(62),
-       Tp = cp(1049),
+     var sT = mT(63),
+       FT = mT(1126),
```

#### 134. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1551` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1455) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1551)

```diff
-       bp = cp(1112);
+       VT = mT(1188);
```

#### 135. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1565` → after: `L1469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1469) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1565)

```diff
-           Op = cp ? `${cp.left},${cp.top},${cp.width},${cp.height}` : "";
+           WT = mT ? `${mT.left},${mT.top},${mT.width},${mT.height}` : "";
```

#### 136. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1568` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1472) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1568)

```diff
-         this.shownKey = Op, ip.classList.toggle("Visible", null !== cp), cp && (ip.classList.toggle("Snap", op), ip.style.width = `${cp.width}px`, ip.style.height = `${cp.height}px`, ip.style.transform = `translate(${cp.left}px, ${cp.top}px)`, op && (ip.offsetWidth, ip.classList. … [truncated]
+         this.shownKey = WT, UT.classList.toggle("Visible", null !== mT), mT && (UT.classList.toggle("Snap", zT), UT.style.width = `${mT.width}px`, UT.style.height = `${mT.height}px`, UT.style.transform = `translate(${mT.left}px, ${mT.top}px)`, zT && (UT.offsetWidth, UT.classList. … [truncated]
```

#### 137. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1575` → after: `L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1479) · [Before (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1575)

```diff
-         const Op = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!ap){ap=!0;const pp=document.createElement("div");pp.setAttribute("aria-hidden","true"),pp.style.cssText="po … [truncated]
+         const WT = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!CT){CT=!0;const TT=document.createElement("div");TT.setAttribute("aria-hidden","true"),TT.style.cssText="po … [truncated]
```

#### 138. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1585` → after: `L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1489) · [Before (L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1585)

```diff
-         return xp <= Ip || Lp <= Sp ? ip : {
+         return nT <= MT || HT <= gT ? UT : {
```

#### 139. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1607` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1511) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1607)

```diff
-     var gp = cp(8803);
+     var ST = mT(8799);
```

#### 140. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1637` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1541) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1637)

```diff
-     var Zp = cp(8809);
+     var ET = mT(8812);
```

#### 141. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1741-L1742` → after: `L1645-L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1645-L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1645-L1646) · [Before (L1741-L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1741-L1742)

```diff
-     var Kp = cp(8821),
-       Vp = cp(8816);
+     var oT = mT(8817),
+       AT = mT(8815);
```

#### 142. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1839` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1743) · [Before (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1839)

```diff
-         return null !== op && void 0 !== op ? op : Op
+         return null !== zT && void 0 !== zT ? zT : WT
```

#### 143. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1914` → after: `L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1818) · [Before (L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1914)

```diff
-       Mi = pp => pp.hasAttribute("data-inven-idx") ? "slot" : pp.hasAttribute("data-recipe-key") ? "recipe" : pp.hasAttribute("data-craft-ingredient") || (0, Vp.z)(pp) ? "info" : (0, gp.B)(pp) ? "textField" : "button",
+       xU = TT => TT.hasAttribute("data-inven-idx") ? "slot" : TT.hasAttribute("data-recipe-key") ? "recipe" : TT.hasAttribute("data-craft-ingredient") || (0, AT.t)(TT) ? "info" : (0, ST.J)(TT) ? "textField" : "button",
```

#### 144. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1921` → after: `L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1825) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1921)

```diff
-           recipe: null !== (ip = pp && (null === (cp = Ei(pp)) || void 0 === cp ? void 0 : cp.getAttribute("data-recipe-key"))) && void 0 !== ip ? ip : null
+           recipe: null !== (UT = TT && (null === (mT = wU(TT)) || void 0 === mT ? void 0 : mT.getAttribute("data-recipe-key"))) && void 0 !== UT ? UT : null
```

#### 145. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1977` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1881) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1977)

```diff
-           vp = null !== (tp = xp.get(pp)) && void 0 !== tp ? tp : null, vp || (vp = {
+           vT = null !== (fT = nT.get(TT)) && void 0 !== fT ? fT : null, vT || (vT = {
```

#### 146. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L1998` → after: `L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1902) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L1998)

```diff
-             scrollGroup: null !== (dp = null === wp || void 0 === wp ? void 0 : wp.group) && void 0 !== dp ? dp : null,
+             scrollGroup: null !== (iT = null === cT || void 0 === cT ? void 0 : cT.group) && void 0 !== iT ? iT : null,
```

#### 147. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2000` → after: `L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1904) · [Before (L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2000)

```diff
-             clip: null !== (ep = null === wp || void 0 === wp ? void 0 : wp.box) && void 0 !== ep ? ep : null,
+             clip: null !== (bT = null === cT || void 0 === cT ? void 0 : cT.box) && void 0 !== bT ? bT : null,
```

#### 148. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2004` → after: `L1908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1908) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2004)

```diff
-             scrollContainer: null !== (jp = null === wp || void 0 === wp ? void 0 : wp.container) && void 0 !== jp ? jp : null
+             scrollContainer: null !== (OT = null === cT || void 0 === cT ? void 0 : cT.container) && void 0 !== OT ? OT : null
```

#### 149. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2032` → after: `L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1936) · [Before (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2032)

```diff
-         return null !== (pp = null === (ip = this.latched) || void 0 === ip ? void 0 : ip.hold) && void 0 !== pp ? pp : null
+         return null !== (TT = null === (UT = this.latched) || void 0 === UT ? void 0 : UT.hold) && void 0 !== TT ? TT : null
```

#### 150. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2038` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1942) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2038)

```diff
-     var bi = cp(8826);
+     var PU = mT(8823);
```

#### 151. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2062` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1966) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2062)

```diff
-           Sp = `${op}|${Math.round(Op.clientX)},${Math.round(Op.clientY)}`,
+           gT = `${zT}|${Math.round(WT.clientX)},${Math.round(WT.clientY)}`,
```

#### 152. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2070` → after: `L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1974) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2070)

```diff
-         if (xp) return void("element" === Ip.kind ? (0, gp.m)(Ip.element, Ip.element, ni(Op)) : pp.hover(null, Op));
+         if (nT) return void("element" === MT.kind ? (0, ST.r)(MT.element, MT.element, uU(WT)) : TT.hover(null, WT));
```

#### 153. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2073` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1977) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2073)

```diff
-         "element" === Ap.kind ? (0, gp.m)(Ap.element, Pp, ni(Op)) : Pp && (0, gp.m)(null, Pp, ni(Op))
+         "element" === lT.kind ? (0, ST.r)(lT.element, LT, uU(WT)) : LT && (0, ST.r)(null, LT, uU(WT))
```

#### 154. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2083` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L1987) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2083)

```diff
-         "element" === pp.kind && (0, gp.m)(pp.element, ip, ni(cp))
+         "element" === TT.kind && (0, ST.r)(TT.element, UT, uU(mT))
```

#### 155. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2102` → after: `L2006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2006) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2102)

```diff
-         return 0 !== (0, yp.h)(pp, .2).y
+         return 0 !== (0, BT.j)(TT, .2).y
```

#### 156. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2122` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2026) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2122)

```diff
-     var Zi = cp(8828);
+     var GU = mT(8832);
```

#### 157. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2155` → after: `L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2059) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2155)

```diff
-         return pp = (0, Dp.g)("inventory"), !cc.map(Dp.g).includes(pp) && !(0, yp.C)(pp);
+         return TT = (0, jT.i)("inventory"), !RU.map(jT.i).includes(TT) && !(0, BT.D)(TT);
```

#### 158. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2202` → after: `L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2106) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2202)

```diff
-               for (const cp of Ap.querySelectorAll(`${ki}:first-child`)) {
+               for (const mT of lT.querySelectorAll(`${OU}:first-child`)) {
```

#### 159. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2220` → after: `L2124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2124) · [Before (L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2220)

```diff
-                   vp = wp && !op.has(wp.container) ? wp : null;
+                   vT = cT && !zT.has(cT.container) ? cT : null;
```

#### 160. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2225` → after: `L2129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2129) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2225)

```diff
-                   scrollGroup: null !== (xp = null === vp || void 0 === vp ? void 0 : vp.group) && void 0 !== xp ? xp : null,
+                   scrollGroup: null !== (nT = null === vT || void 0 === vT ? void 0 : vT.group) && void 0 !== nT ? nT : null,
```

#### 161. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2227` → after: `L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2131) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2227)

```diff
-                   clip: null !== (Lp = null === vp || void 0 === vp ? void 0 : vp.box) && void 0 !== Lp ? Lp : null,
+                   clip: null !== (HT = null === vT || void 0 === vT ? void 0 : vT.box) && void 0 !== HT ? HT : null,
```

#### 162. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2231` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2135) · [Before (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2231)

```diff
-                   scrollContainer: null !== (Yp = null === vp || void 0 === vp ? void 0 : vp.container) && void 0 !== Yp ? Yp : null
+                   scrollContainer: null !== (kT = null === vT || void 0 === vT ? void 0 : vT.container) && void 0 !== kT ? kT : null
```

#### 163. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2279-L2280` → after: `L2183-L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2183-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2183-L2184) · [Before (L2279-L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2279-L2280)

```diff
-           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(yp.w.map((pp => [pp, (0, Up.e)(yp.y)]))), this.stickRepeat = new yp.b((0, Up.e)(yp.W)), this.pageUpTimer = (0, Up.e)(yp.R … [truncated]
-             this.endInteraction((0, Kp.c)()), (0, Kp.e)() || this.forgetSurface()
+           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(BT.y.map((TT => [TT, (0, ZT.e)(BT.B)]))), this.stickRepeat = new BT.d((0, ZT.e)(BT.cb)), this.pageUpTimer = (0, ZT.e)(BT. … [truncated]
+             this.endInteraction((0, oT.f)()), (0, oT.i)() || this.forgetSurface()
```

#### 164. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2283` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2187) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2283)

```diff
-             this.reopenSlotIdx = null !== (pp = this.focused ? li(this.focused).idx : null) && void 0 !== pp ? pp : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Kp.r)(), this.panelMemory.clear(), this. … [truncated]
+             this.reopenSlotIdx = null !== (TT = this.focused ? aU(this.focused).idx : null) && void 0 !== TT ? TT : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, oT.r)(), this.panelMemory.clear(), this. … [truncated]
```

#### 165. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2288-L2289` → after: `L2192-L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2192-L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2192-L2193) · [Before (L2288-L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2288-L2289)

```diff
-           }, this.shouldBlockRealPointer = pp => pp.isTrusted && !(0, vp.v)(pp) && this.isShowing(), this.noteRealPointer = pp => {
-             pp instanceof MouseEvent && pp.isTrusted && !(0, vp.v)(pp) && (this.lastRealPointer ??= {
+           }, this.shouldBlockRealPointer = TT => TT.isTrusted && !(0, vT.u)(TT) && this.isShowing(), this.noteRealPointer = TT => {
+             TT instanceof MouseEvent && TT.isTrusted && !(0, vT.u)(TT) && (this.lastRealPointer ??= {
```

#### 166. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2295` → after: `L2199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2199) · [Before (L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2295)

```diff
-             return pp === (0, Dp.g)("inventoryClose") ? !(null !== (ip = (0, Kp.c)()) && void 0 !== ip && ip.isHolding()) : !(pp !== (0, Dp.g)("inventory") || !Oc()) || ((0, yp.C)(pp) ? this.isNavButton(pp) : ic.some((ip => (0, Dp.g)(ip) === pp)))
+             return TT === (0, jT.i)("inventoryClose") ? !(null !== (UT = (0, oT.f)()) && void 0 !== UT && UT.isHolding()) : !(TT !== (0, jT.i)("inventory") || !Tm()) || ((0, BT.D)(TT) ? this.isNavButton(TT) : AU.some((UT => (0, jT.i)(UT) === TT)))
```

#### 167. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2300-L2302` → after: `L2204-L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2204-L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2204-L2206) · [Before (L2300-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2300-L2302)

```diff
-           const Sp = (0, Kp.c)();
-           if (!(0, Wp.n)()) return void(this.wasShowing && (this.endInteraction(Sp), this.rehoverRealPointer()));
-           this.wasShowing = !0, this.applyFocusRequest(), pp.wokeDevice && this.focusWakePointer(!(null === Sp || void 0 === Sp || !Sp.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Pp.h)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
+           const gT = (0, oT.f)();
+           if (!(0, pT.m)()) return void(this.wasShowing && (this.endInteraction(gT), this.rehoverRealPointer()));
+           this.wasShowing = !0, this.applyFocusRequest(), TT.wokeDevice && this.focusWakePointer(!(null === gT || void 0 === gT || !gT.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, LT.k)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
```

#### 168. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2309` → after: `L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2213) · [Before (L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2309)

```diff
-             yp = null !== (ip = null === (cp = Yp.actionElement) || void 0 === cp ? void 0 : cp.querySelector(".DoCraftItem")) && void 0 !== ip ? ip : Yp.actionElement;
+             BT = null !== (UT = null === (mT = kT.actionElement) || void 0 === mT ? void 0 : mT.querySelector(".DoCraftItem")) && void 0 !== UT ? UT : kT.actionElement;
```

#### 169. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2320` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2224) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2320)

```diff
-             pressed: pp.isHeld((0, Dp.g)("inventoryPrimary"))
+             pressed: TT.isHeld((0, jT.i)("inventoryPrimary"))
```

#### 170. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2336` → after: `L2240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2240) · [Before (L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2336)

```diff
-             pressHints: null !== (Op = null === (op = Yp.press) || void 0 === op ? void 0 : op.hints) && void 0 !== Op ? Op : null,
+             pressHints: null !== (WT = null === (zT = kT.press) || void 0 === zT ? void 0 : zT.hints) && void 0 !== WT ? WT : null,
```

#### 171. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2348` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2252) · [Before (L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2348)

```diff
-           const cp = (0, Wp.d)();
+           const mT = (0, pT.e)();
```

#### 172. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2352` → after: `L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2256) · [Before (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2352)

```diff
-           this.setFocus(null !== (ip = di(cp, Op)) && void 0 !== ip ? ip : pp ? vi(cp, Op, (pp => {
+           this.setFocus(null !== (UT = fU(mT, WT)) && void 0 !== UT ? UT : TT ? ZU(mT, WT, (TT => {
```

#### 173. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2359` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2263) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2359)

```diff
-           })) : null, !1), "cursor" === (0, Pp.h)().inventoryNavigation && (this.pointer = {
+           })) : null, !1), "cursor" === (0, LT.k)().inventoryNavigation && (this.pointer = {
```

#### 174. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2367` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2271) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2367)

```diff
-           if (!pp || "keyboardMouse" !== Lp.c.get("activeInputDevice")) return;
+           if (!TT || "keyboardMouse" !== HT.b.get("activeInputDevice")) return;
```

#### 175. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2369` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2273) · [Before (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2369)

```diff
-           ip && (0, gp.m)(null, ip, pp)
+           UT && (0, ST.r)(null, UT, TT)
```

#### 176. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2382` → after: `L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2286) · [Before (L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2382)

```diff
-           return this.focused && null !== (pp = this.getTargets().byElement.get(this.focused)) && void 0 !== pp ? pp : null
+           return this.focused && null !== (TT = this.getTargets().byElement.get(this.focused)) && void 0 !== TT ? TT : null
```

#### 177. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2410` → after: `L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2314) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2410)

```diff
-               })(ip, (0, Kp.c)()),
+               })(UT, (0, oT.f)()),
```

#### 178. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2413` → after: `L2317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2317) · [Before (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2413)

```diff
-             op = null !== pp || void 0 !== xp, Op = null !== (Ip = null !== (Sp = null !== pp && void 0 !== pp ? pp : xp) && void 0 !== Sp ? Sp : Lp && cp.get(Lp)) && void 0 !== Ip ? Ip : ei(ip)
+             zT = null !== TT || void 0 !== nT, WT = null !== (MT = null !== (gT = null !== TT && void 0 !== TT ? TT : nT) && void 0 !== gT ? gT : HT && mT.get(HT)) && void 0 !== MT ? MT : qU(UT)
```

#### 179. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2428` → after: `L2332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2332) · [Before (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2428)

```diff
-             if ("cursor" === (0, Pp.h)().inventoryNavigation) {
+             if ("cursor" === (0, LT.k)().inventoryNavigation) {
```

#### 180. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2456` → after: `L2360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2360) · [Before (L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2456)

```diff
-           this.focusTarget = ip, (null === ip || void 0 === ip ? void 0 : ip.element) !== this.focused && (this.focused = null !== (pp = null === ip || void 0 === ip ? void 0 : ip.element) && void 0 !== pp ? pp : null, ip && (this.panelMemory.set(ip.panel, ip.element), this.lastR … [truncated]
+           this.focusTarget = UT, (null === UT || void 0 === UT ? void 0 : UT.element) !== this.focused && (this.focused = null !== (TT = null === UT || void 0 === UT ? void 0 : UT.element) && void 0 !== TT ? TT : null, UT && (this.panelMemory.set(UT.panel, UT.element), this.lastR … [truncated]
```

#### 181. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2460` → after: `L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2364) · [Before (L2460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2460)

```diff
-             Op = cp && (0, Pp.h)().cursorMagnetism ? Yi(ti(cp)) : null;
+             WT = mT && (0, LT.k)().cursorMagnetism ? nU(cU(mT)) : null;
```

#### 182. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2463` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2367) · [Before (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2463)

```diff
-             moveDeadzone: (0, Pp.h)().moveDeadzone,
+             moveDeadzone: (0, LT.k)().moveDeadzone,
```

#### 183. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2466` → after: `L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2370) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2466)

```diff
-             cursorSpeedPercent: (0, Pp.h)().cursorSpeed,
+             cursorSpeedPercent: (0, LT.k)().cursorSpeed,
```

#### 184. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2499` → after: `L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2403) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2499)

```diff
-             return null !== (Op = wi(op, ip, cp)) && void 0 !== Op ? Op : vi(pp, ip)
+             return null !== (WT = BU(zT, UT, mT)) && void 0 !== WT ? WT : ZU(TT, UT)
```

#### 185. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2504` → after: `L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2408) · [Before (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2504)

```diff
-           return !pc.some((ip => (0, Dp.g)(ip) === pp)) && !(pp === (0, Dp.g)("inventory") && Oc())
+           return !oU.some((UT => (0, jT.i)(UT) === TT)) && !(TT === (0, jT.i)("inventory") && Tm())
```

#### 186. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2507` → after: `L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2411) · [Before (L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2507)

```diff
-           const cp = (0, Pp.h)().inventoryNavigation,
+           const mT = (0, LT.k)().inventoryNavigation,
```

#### 187. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2513` → after: `L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2417) · [Before (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2513)

```diff
-           for (const Lp of yp.w) {
+           for (const HT of BT.y) {
```

#### 188. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2517` → after: `L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2421) · [Before (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2517)

```diff
-           const Ip = this.stickGate.update(pp.leftStick, (0, Pp.h)().moveDeadzone);
+           const MT = this.stickGate.update(TT.leftStick, (0, LT.k)().moveDeadzone);
```

#### 189. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2519-L2520` → after: `L2423-L2424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2423-L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2423-L2424) · [Before (L2519-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2519-L2520)

```diff
-             const ip = ((pp, ip, cp, Op) => "hybrid" !== pp ? "cursor" === pp : !Op && (ip || cp))(cp, null !== this.pointer, Ip, null !== op);
-             return ip && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(pp, "cursor" === cp ? Op : {
+             const UT = ((TT, UT, mT, WT) => "hybrid" !== TT ? "cursor" === TT : !WT && (UT || mT))(mT, null !== this.pointer, MT, null !== zT);
+             return UT && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(TT, "cursor" === mT ? WT : {
```

#### 190. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2525-L2526` → after: `L2429-L2430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2429-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2429-L2430) · [Before (L2525-L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2525-L2526)

```diff
-           const Sp = (0, yp.h)(pp.leftStick, (0, Pp.h)().moveDeadzone),
-             xp = this.stickRepeat.update(Ip ? (0, yp._)(Sp) : null, ip);
+           const gT = (0, BT.j)(TT.leftStick, (0, LT.k)().moveDeadzone),
+             nT = this.stickRepeat.update(MT ? (0, BT.fb)(gT) : null, UT);
```

#### 191. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2538` → after: `L2442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2442) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2538)

```diff
-           pp && (this.targets.invalidate(), this.setFocus((0, Kp.b)(this.getTargets().targets, pp)))
+           TT && (this.targets.invalidate(), this.setFocus((0, oT.d)(this.getTargets().targets, TT)))
```

#### 192. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2542-L2543` → after: `L2446-L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2446-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2446-L2447) · [Before (L2542-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2542-L2543)

```diff
-           const op = pp.wasPressed((0, Dp.g)("inventoryPanelPrevious")),
-             Ip = pp.wasPressed((0, Dp.g)("inventoryPanelNext"));
+           const zT = TT.wasPressed((0, jT.i)("inventoryPanelPrevious")),
+             MT = TT.wasPressed((0, jT.i)("inventoryPanelNext"));
```

#### 193. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2555` → after: `L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2459) · [Before (L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2555)

```diff
-           })(Sp, qi), Yp = null !== (ip = null === (cp = this.focusTarget) || void 0 === cp ? void 0 : cp.panel) && void 0 !== ip ? ip : null, Ap = Ip ? 1 : -1, 0 === Lp.length ? null : Lp[Di(null === Yp ? -1 : Lp.indexOf(Yp), Lp.length, Ap)]);
+           })(gT, JU), kT = null !== (UT = null === (mT = this.focusTarget) || void 0 === mT ? void 0 : mT.panel) && void 0 !== UT ? UT : null, lT = MT ? 1 : -1, 0 === HT.length ? null : HT[HU(null === kT ? -1 : HT.indexOf(kT), HT.length, lT)]);
```

#### 194. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2560` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2464) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2560)

```diff
-             yp = null !== (Op = Wp.find((pp => pp.element === Pp && pp.visible))) && void 0 !== Op ? Op : Ic(Wp, (0, Kp.c)());
+             BT = null !== (WT = pT.find((TT => TT.element === LT && TT.visible))) && void 0 !== WT ? WT : mm(pT, (0, oT.f)());
```

#### 195. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2564-L2565` → after: `L2468-L2469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2468-L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2468-L2469) · [Before (L2564-L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2564-L2565)

```diff
-           const cp = (0, Dp.g)("menuPageUp"),
-             Op = (0, Dp.g)("menuPageDown"),
+           const mT = (0, jT.i)("menuPageUp"),
+             WT = (0, jT.i)("menuPageDown"),
```

#### 196. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2570` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2474) · [Before (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2570)

```diff
-           if (!pp.wasPressed(Ip ? Op : cp) && this.hasCategories) return;
+           if (!TT.wasPressed(MT ? WT : mT) && this.hasCategories) return;
```

#### 197. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2576` → after: `L2480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2480) · [Before (L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2576)

```diff
-               return (0, gp.k)(Op, (0, gp.q)(Op)), !0
+               return (0, ST.p)(WT, (0, ST.x)(WT)), !0
```

#### 198. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2580` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2484) · [Before (L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2580)

```diff
-             const pp = null !== (xp = null === (Lp = this.focusTarget) || void 0 === Lp ? void 0 : Lp.scrollGroup) && void 0 !== xp ? xp : null,
+             const TT = null !== (nT = null === (HT = this.focusTarget) || void 0 === HT ? void 0 : HT.scrollGroup) && void 0 !== nT ? nT : null,
```

#### 199. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2589` → after: `L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2493) · [Before (L2589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2589)

```diff
-           } = this.getTargets(), Ap = this.currentTarget(), Pp = Ap && Ti(Ap) ? Ap : Yp.find((pp => Ti(pp) && pp.visible));
+           } = this.getTargets(), lT = this.currentTarget(), LT = lT && sU(lT) ? lT : kT.find((TT => sU(TT) && TT.visible));
```

#### 200. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L2595` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/controller.js#L2499) · [Before (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/controller.js#L2595)

```diff
-               Sp = op.y + ("Down" === cp ? Op : -Op);
+               gT = zT.y + ("Down" === mT ? WT : -WT);
```
