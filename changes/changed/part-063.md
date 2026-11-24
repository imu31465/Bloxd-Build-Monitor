# Changed — Bundle Modifications Report (Part 063 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `63 / 65` (**436** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 062](part-062.md) · [Part 064 →](part-064.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/main.js` (1137 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L404-L407` → after: `L377-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L377-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L377-L381) · [Before (L404-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L404-L407)

```diff
-               let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, BD.l)(),
-                 zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-               const wD = (0, BD.q)(DD, zD);
-               return (0, BD.A)() && !0 === rD.h.getItem(sD.Zb) && rD.h.removeItem(sD.Zb), wD
+               let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Kp.i)(),
+                 ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+                 cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+               const Op = (0, Kp.w)(pp, ip, cp);
+               return (0, Kp.y)() && !0 === ap.h.getItem(bp.tc) && ap.h.removeItem(bp.tc), Op
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L410` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L384) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L410)

```diff
-               (0, BD.e)(DD) && (0, BD.A)() && fz && Iz.clientEscMenuOptions.useWebGpu && (Az = Rz(), this.setEscMenuOptionsUnstored({
+               (0, Vp.d)(pp) && (0, Kp.y)() && Wi && yi.clientEscMenuOptions.useWebGpu && (Ai = Yi(), this.setEscMenuOptionsUnstored({
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L415` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L392) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L415)

```diff
-               return (0, BD.G)() || !0 === rD.h.getItem(GD.G)
+               return (0, Kp.E)() || !0 === ap.h.getItem(ii.D)
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L418` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L395) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L418)

```diff
-               return (0, BD.A)()
+               return (0, Kp.y)()
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L421` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L398) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L421)

```diff
-               return fz ? Az : null
+               return Wi ? Ai : null
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L424` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L401) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L424)

```diff
-               !0 === rD.h.getItem(GD.G) && (0, UD.hasUsableWebGpuAdapter)()
+               !0 === ap.h.getItem(ii.D) && (0, Zp.hasUsableWebGpuAdapter)()
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L468` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L445) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L468)

```diff
-         }, , , , , (DD, zD, wD) => {
+         }, , , , , , , , , (pp, ip, cp) => {
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L470-L471` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L447) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L470-L471)

```diff
-             d: () => LD,
-             g: () => KD,
+             e: () => xp,
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L473-L474` → after: `L449-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L449-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L449-L451) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L473-L474)

```diff
-             l: () => gD,
-             o: () => AD
+             k: () => Dp,
+             m: () => Yp,
+             n: () => Ap
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L476` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L453) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L476)

```diff
-           var pD = wD(28),
+           var Op = cp(42),
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L486` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L463) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L486)

```diff
-               super(...arguments), this.YG = !1, this.fn = [], this.pM = {}
+               super(...arguments), this.Dv = !1, this.Av = [], this.Qv = {}
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L490` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L467) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L490)

```diff
-               this.YG || !wD ? this.emit(DD, zD) : this.fn.push({
+               this.Dv || !cp ? this.emit(pp, ip) : this.Av.push({
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L497-L498` → after: `L474-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L474-L475) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L497-L498)

```diff
-               const pD = this.rM(DD, zD);
-               return this.on(DD, pD), this.pM[DD] = (null !== (wD = this.pM[DD]) && void 0 !== wD ? wD : 0) + 1, {
+               const Op = this.Fv(pp, ip);
+               return this.on(pp, Op), this.Qv[pp] = (null !== (cp = this.Qv[pp]) && void 0 !== cp ? cp : 0) + 1, {
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L507` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L484) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L507)

```diff
-               const wD = this.rM(DD, zD);
+               const cp = this.Fv(pp, ip);
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L516-L517` → after: `L493-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L493-L494) · [Before (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L516-L517)

```diff
-                 wD = this.pM[zD];
-               wD > 1 ? this.pM[zD] = wD - 1 : 1 === wD && delete this.pM[zD]
+                 cp = this.Qv[ip];
+               cp > 1 ? this.Qv[ip] = cp - 1 : 1 === cp && delete this.Qv[ip]
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L524` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L501) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L524)

```diff
-                   console.error(`Error in PubSub listener for event ${DD}:`, pD)
+                   console.error(`Error in PubSub listener for event ${pp}:`, Op)
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L529` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L506) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L529)

```diff
-               this.YG = DD, DD && (this.fn.forEach((DD => {
+               this.Dv = pp, pp && (this.Av.forEach((pp => {
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L534-L535` → after: `L511-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L511-L512) · [Before (L534-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L534-L535)

```diff
-                 this.KG(zD, wD)
-               })), this.fn = [])
+                 this.GA(ip, cp)
+               })), this.Av = [])
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L538` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L515) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L538)

```diff
-               this.fn = []
+               this.Av = []
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L544` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L521) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L544)

```diff
-             gD.XM(!0)
+             Yp.IH(!0)
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L553` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L530) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L553)

```diff
-         }, , , DD => {
+         }, , , , , , , , pp => {
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L560` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L537) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L560)

```diff
-             this.LI = DD, this.context = zD, this.once = wD || !1
+             this.Py = pp, this.context = ip, this.once = cp || !1
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L566-L567` → after: `L543-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L543-L544) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L566-L567)

```diff
-               cD = wD ? wD + zD : zD;
-             return DD._events[cD] ? DD._events[cD].LI ? DD._events[cD] = [DD._events[cD], LD] : DD._events[cD].push(LD) : (DD._events[cD] = LD, DD._eventsCount++), DD
+               Lp = cp ? cp + ip : ip;
+             return pp._events[Lp] ? pp._events[Lp].Py ? pp._events[Lp] = [pp._events[Lp], xp] : pp._events[Lp].push(xp) : (pp._events[Lp] = xp, pp._eventsCount++), pp
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L571` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L548) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L571)

```diff
-             0 === --DD._eventsCount ? DD._events = new pD : delete DD._events[zD]
+             0 === --pp._eventsCount ? pp._events = new Op : delete pp._events[ip]
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L583` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L560) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L583)

```diff
-             var zD = wD ? wD + DD : DD,
+             var ip = cp ? cp + pp : pp,
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L586-L587` → after: `L563-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L563-L564) · [Before (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L586-L587)

```diff
-             if (pD.LI) return [pD.LI];
-             for (var sD = 0, KD = pD.length, rD = new Array(KD); sD < KD; sD++) rD[sD] = pD[sD].LI;
+             if (Op.Py) return [Op.Py];
+             for (var op = 0, Ip = Op.length, Sp = new Array(Ip); op < Ip; op++) Sp[op] = Op[op].Py;
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L590` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L567) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L590)

```diff
-             var zD = wD ? wD + DD : DD,
+             var ip = cp ? cp + pp : pp,
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L592` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L569) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L592)

```diff
-             return pD ? pD.LI ? 1 : pD.length : 0
+             return Op ? Op.Py ? 1 : Op.length : 0
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L594` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L571) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L594)

```diff
-             var LD = wD ? wD + DD : DD;
+             var xp = cp ? cp + pp : pp;
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L598-L599` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L575-L576) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L598-L599)

```diff
-             if (RD.LI) {
-               switch (RD.once && this.removeListener(DD, RD.LI, void 0, !0), AD) {
+             if (Dp.Py) {
+               switch (Dp.once && this.removeListener(pp, Dp.Py, void 0, !0), Ap) {
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L601` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L578) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L601)

```diff
-                   return RD.LI.call(RD.context), !0;
+                   return Dp.Py.call(Dp.context), !0;
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L603` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L580) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L603)

```diff
-                   return RD.LI.call(RD.context, zD), !0;
+                   return Dp.Py.call(Dp.context, ip), !0;
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L605` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L582) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L605)

```diff
-                   return RD.LI.call(RD.context, zD, pD), !0;
+                   return Dp.Py.call(Dp.context, ip, Op), !0;
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L607` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L584) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L607)

```diff
-                   return RD.LI.call(RD.context, zD, pD, sD), !0;
+                   return Dp.Py.call(Dp.context, ip, Op, op), !0;
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L609` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L586) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L609)

```diff
-                   return RD.LI.call(RD.context, zD, pD, sD, KD), !0;
+                   return Dp.Py.call(Dp.context, ip, Op, op, Ip), !0;
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L611` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L588) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L611)

```diff
-                   return RD.LI.call(RD.context, zD, pD, sD, KD, rD), !0
+                   return Dp.Py.call(Dp.context, ip, Op, op, Ip, Sp), !0
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L614` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L591) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L614)

```diff
-               RD.LI.apply(RD.context, cD)
+               Dp.Py.apply(Dp.context, Lp)
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L617` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L594) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L617)

```diff
-               for (gD = 0; gD < fD; gD++) switch (RD[gD].once && this.removeListener(DD, RD[gD].LI, void 0, !0), AD) {
+               for (Yp = 0; Yp < Wp; Yp++) switch (Dp[Yp].once && this.removeListener(pp, Dp[Yp].Py, void 0, !0), Ap) {
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L619` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L596) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L619)

```diff
-                   RD[gD].LI.call(RD[gD].context);
+                   Dp[Yp].Py.call(Dp[Yp].context);
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L622` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L599) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L622)

```diff
-                   RD[gD].LI.call(RD[gD].context, zD);
+                   Dp[Yp].Py.call(Dp[Yp].context, ip);
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L625` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L602) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L625)

```diff
-                   RD[gD].LI.call(RD[gD].context, zD, pD);
+                   Dp[Yp].Py.call(Dp[Yp].context, ip, Op);
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L628` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L605) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L628)

```diff
-                   RD[gD].LI.call(RD[gD].context, zD, pD, sD);
+                   Dp[Yp].Py.call(Dp[Yp].context, ip, Op, op);
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L633` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L610) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L633)

```diff
-                   RD[gD].LI.apply(RD[gD].context, cD)
+                   Dp[Yp].Py.apply(Dp[Yp].context, Lp)
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L642` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L619) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L642)

```diff
-             var KD = wD ? wD + DD : DD;
+             var Ip = cp ? cp + pp : pp;
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L646` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L623) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L646)

```diff
-             if (LD.LI) LD.LI !== zD || sD && !LD.once || pD && LD.context !== pD || rD(this, KD);
+             if (xp.Py) xp.Py !== ip || op && !xp.once || Op && xp.context !== Op || Sp(this, Ip);
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L648-L649` → after: `L625-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L625-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L625-L626) · [Before (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L648-L649)

```diff
-               for (var cD = 0, gD = [], RD = LD.length; cD < RD; cD++)(LD[cD].LI !== zD || sD && !LD[cD].once || pD && LD[cD].context !== pD) && gD.push(LD[cD]);
-               gD.length ? this._events[KD] = 1 === gD.length ? gD[0] : gD : rD(this, KD)
+               for (var Lp = 0, Yp = [], Dp = xp.length; Lp < Dp; Lp++)(xp[Lp].Py !== ip || op && !xp[Lp].once || Op && xp[Lp].context !== Op) && Yp.push(xp[Lp]);
+               Yp.length ? this._events[Ip] = 1 === Yp.length ? Yp[0] : Yp : Sp(this, Ip)
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L652` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L629) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L652)

```diff
-           }, LD.prototype.YM = function(DD) {
+           }, xp.prototype.YH = function(pp) {
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L654` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L631) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L654)

```diff
-             return DD ? (zD = wD ? wD + DD : DD, this._events[zD] && rD(this, zD)) : (this._events = new pD, this._eventsCount = 0), this
+             return pp ? (ip = cp ? cp + pp : pp, this._events[ip] && Sp(this, ip)) : (this._events = new Op, this._eventsCount = 0), this
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L656` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L633) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L656)

```diff
-         }, , , , , , , (DD, zD, wD) => {
+         }, , (pp, ip, cp) => {
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L658` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L635) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L658)

```diff
-             c: () => RD,
+             e: () => Dp,
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L665` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L642) · [Before (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L665)

```diff
-           var pD = wD(40),
+           var Op = cp(48),
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L667` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L644) · [Before (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L667)

```diff
-             KD = wD(49),
+             Ip = cp(50),
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L671` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L648) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L671)

```diff
-               return `bloxd-${DD}`
+               return `bloxd-${pp}`
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L702` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L679) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L702)

```diff
-                 return console.error("Caught error", wD, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (zD = this._cachedVals[DD]) && void 0 !== zD ? zD : null
+                 return console.error("Caught error", cp, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (ip = this._cachedVals[pp]) && void 0 !== ip ? ip : null
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L736` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L713) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L736)

```diff
-                 return console.error("Caught error", wD, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", cp, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L767` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L744) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L767)

```diff
-                 return console.error("Caught error", wD, "when attempting to read from sessionStorage."), null !== (zD = this._cachedVals[DD]) && void 0 !== zD ? zD : null
+                 return console.error("Caught error", cp, "when attempting to read from sessionStorage."), null !== (ip = this._cachedVals[pp]) && void 0 !== ip ? ip : null
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L794` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L771) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L794)

```diff
-                 return null !== (pD = this._cachedVals[DD]) && void 0 !== pD ? pD : null
+                 return null !== (Op = this._cachedVals[pp]) && void 0 !== Op ? Op : null
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L816` → after: `L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L793) · [Before (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L816)

```diff
-                   for (let pD, sD, KD = 0, rD = 0; sD = DD.charAt(rD++); ~sD && (pD = KD % 4 ? 64 * pD + sD : sD, KD++ % 4) ? zD += String.fromCharCode(255 & pD >> (-2 * KD & 6)) : 0) sD = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(sD);
+                   for (let Op, op, Ip = 0, Sp = 0; op = pp.charAt(Sp++); ~op && (Op = Ip % 4 ? 64 * Op + op : op, Ip++ % 4) ? ip += String.fromCharCode(255 & Op >> (-2 * Ip & 6)) : 0) op = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(op);
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L823` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L800) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L823)

```diff
-               return rD ? sD = rD : (sD = BD.FZAkcO(sD), DD[KD] = sD), sD
+               return Sp ? op = Sp : (op = Up.FZAkcO(op), pp[Ip] = op), op
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L865` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L842) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L865)

```diff
-         }, , , , , (DD, zD, wD) => {
+         }, , , , (pp, ip, cp) => {
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L997` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L974) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L997)

```diff
-                 return DD instanceof this ? DD : KD.resolve(new this(sD), DD)
+                 return pp instanceof this ? pp : Ip.resolve(new this(op), pp)
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L1046` → after: `L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1023) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1046)

```diff
-                 return this.state !== cD ? AD(wD, this.state === LD ? DD : zD, this.outcome) : this.queue.push(new RD(wD, DD, zD)), wD
+                 return this.state !== Lp ? Ap(cp, this.state === xp ? pp : ip, this.outcome) : this.queue.push(new Dp(cp, pp, ip)), cp
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L1419` → after: `L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1396) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1419)

```diff
-                       return DD ? zD : bD(zD)
+                       return pp ? ip : Xp(ip)
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L1695` → after: `L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1672) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1695)

```diff
-                   DD instanceof ArrayBuffer ? (pD = DD, sD += wz) : (pD = DD.buffer, "[object Int8Array]" === wD ? sD += sz : "[object Uint8Array]" === wD ? sD += Kz : "[object Uint8ClampedArray]" === wD ? sD += rz : "[object Int16Array]" === wD ? sD += Lz : "[object Uint16Array] … [truncated]
+                   pp instanceof ArrayBuffer ? (Op = pp, op += oi) : (Op = pp.buffer, "[object Int8Array]" === cp ? op += Si : "[object Uint8Array]" === cp ? op += xi : "[object Uint8ClampedArray]" === cp ? op += Li : "[object Int16Array]" === cp ? op += Yi : "[object Uint16Array] … [truncated]
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L1719` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1696) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1719)

```diff
-                   case wz:
+                   case oi:
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1721` → after: `L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1698) · [Before (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1721)

```diff
-                   case pz:
+                   case Ii:
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1725` → after: `L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1702) · [Before (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1725)

```diff
-                   case sz:
+                   case Si:
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1727` → after: `L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1704) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1727)

```diff
-                   case Kz:
+                   case xi:
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1729` → after: `L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1706) · [Before (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1729)

```diff
-                   case rz:
+                   case Li:
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1731` → after: `L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1708) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1731)

```diff
-                   case Lz:
+                   case Yi:
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1733` → after: `L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1710) · [Before (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1733)

```diff
-                   case gz:
+                   case Ai:
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1735` → after: `L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1712) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1735)

```diff
-                   case cz:
+                   case Di:
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1737` → after: `L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1714) · [Before (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1737)

```diff
-                   case Rz:
+                   case Pi:
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1739` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1716) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1739)

```diff
-                   case Az:
+                   case Wi:
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1741` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1718) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1741)

```diff
-                   case Uz:
+                   case yi:
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1779` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1756) · [Before (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1779)

```diff
-                 return wD.LO = Mz, sD
+                 return cp.DH = ei, op
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1801` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1778) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1801)

```diff
-                         pD && (pD = sD.LO.deserialize(pD)), zD(pD)
+                         Op && (Op = op.DH.deserialize(Op)), ip(Op)
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1821` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1798) · [Before (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1821)

```diff
-                             if (gD && (gD = sD.LO.deserialize(gD)), void 0 !== (gD = DD(gD, cD.key, LD + 1))) return void zD(gD)
+                             if (Yp && (Yp = op.DH.deserialize(Yp)), void 0 !== (Yp = pp(Yp, Lp.key, xp + 1))) return void ip(Yp)
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1841` → after: `L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L1818) · [Before (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L1841)

```diff
-                     cD.LO.serialize(zD, (function(zD, gD) {
+                     Lp.DH.serialize(ip, (function(ip, Yp) {
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L2052` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2029) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2052)

```diff
-                 return wD.keyPrefix = Wz(DD, zD._defaultConfig), Zz() ? (zD._dbInfo = wD, wD.LO = Mz, gD.resolve()) : gD.reject()
+                 return cp.keyPrefix = fi(pp, ip._defaultConfig), ai() ? (ip._dbInfo = cp, cp.DH = ei, Yp.resolve()) : Yp.reject()
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L2072` → after: `L2049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2049) · [Before (L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2072)

```diff
-                   return pD && (pD = zD.LO.deserialize(pD)), pD
+                   return Op && (Op = ip.DH.deserialize(Op)), Op
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L2084` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2061) · [Before (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2084)

```diff
-                         if (gD && (gD = zD.LO.deserialize(gD)), void 0 !== (gD = DD(gD, cD.substring(sD), rD++))) return gD
+                         if (Yp && (Yp = ip.DH.deserialize(Yp)), void 0 !== (Yp = pp(Yp, Lp.substring(op), Sp++))) return Yp
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L2142` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2119) · [Before (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2142)

```diff
-                     rD.LO.serialize(zD, (function(zD, pD) {
+                     Sp.DH.serialize(ip, (function(ip, Op) {
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L2362` → after: `L2339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2339) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2362)

```diff
-         }, , , , , , , , , (DD, zD, wD) => {
+         }, , (pp, ip, cp) => {
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L2431` → after: `L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2408) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2431)

```diff
-         }, , (DD, zD, wD) => {
+         }, , , , , (pp, ip, cp) => {
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2433` → after: `L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2410) · [Before (L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2433)

```diff
-             b: () => sD
+             c: () => op
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2435` → after: `L2412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2412) · [Before (L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2435)

```diff
-           var pD = wD(35);
+           var Op = cp(44);
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2439` → after: `L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2416) · [Before (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2439)

```diff
-             return null !== (DD = pD.h.getItem("soundVol")) && void 0 !== DD ? DD : .5
+             return null !== (pp = Op.h.getItem("soundVol")) && void 0 !== pp ? pp : .5
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2443-L2444` → after: `L2420-L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2420-L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2420-L2421) · [Before (L2443-L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2443-L2444)

```diff
-         }, , , , , , , , (DD, zD, wD) => {
-           var pD = wD(72),
+         }, , , , (pp, ip, cp) => {
+           var Op = cp(73),
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2555-L2556` → after: `L2532-L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2532-L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2532-L2533) · [Before (L2555-L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2555-L2556)

```diff
-                   case sD:
-                   case KD:
+                   case op:
+                   case Ip:
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2577` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2554) · [Before (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2577)

```diff
-                   return null === DD || "object" !== typeof DD ? null : "function" === typeof(DD = UD && DD[UD] || DD["@@iterator"]) ? DD : null
+                   return null === pp || "object" !== typeof pp ? null : "function" === typeof(pp = Pp && pp[Pp] || pp["@@iterator"]) ? pp : null
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2731` → after: `L2708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2708) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2731)

```diff
-         }, , , , , , DD => {
+         }, , , , , , , pp => {
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2764` → after: `L2741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2741) · [Before (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2764)

```diff
-         }, , , , , , , (DD, zD, wD) => {
+         }, , , , , , , , , (pp, ip, cp) => {
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L2772-L2774` → after: `L2749-L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2749-L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2749-L2751) · [Before (L2772-L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2772-L2774)

```diff
-         }, , , , , , (DD, zD, wD) => {
-           var pD = wD(58),
-             sD = wD(72),
+         }, , , (pp, ip, cp) => {
+           var Op = cp(62),
+             op = cp(73),
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L2862` → after: `L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2839) · [Before (L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2862)

```diff
-             }(zD) && (null === wD ? DD.removeAttribute(zD) : DD.setAttribute(zD, "" + wD)) : sD.mustUseProperty ? DD[sD.propertyName] = null === wD ? 3 !== sD.type && "" : wD : (zD = sD.attributeName, pD = sD.attributeNamespace, null === wD ? DD.removeAttribute(zD) : (wD = 3 ===  … [truncated]
+             }(ip) && (null === cp ? pp.removeAttribute(ip) : pp.setAttribute(ip, "" + cp)) : op.mustUseProperty ? pp[op.propertyName] = null === cp ? 3 !== op.type && "" : cp : (ip = op.attributeName, Op = op.attributeNamespace, null === cp ? pp.removeAttribute(ip) : (cp = 3 ===  … [truncated]
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L2903` → after: `L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2880) · [Before (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L2903)

```diff
-             return null === DD || "object" !== typeof DD ? null : "function" === typeof(DD = mD && DD[mD] || DD["@@iterator"]) ? DD : null
+             return null === pp || "object" !== typeof pp ? null : "function" === typeof(pp = np && pp[np] || pp["@@iterator"]) ? pp : null
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L3001` → after: `L2978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2978) · [Before (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3001)

```diff
-               case XD:
+               case mp:
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L3003` → after: `L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2980) · [Before (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3003)

```diff
-               case QD:
+               case kp:
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L3005` → after: `L2982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2982) · [Before (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3005)

```diff
-               case PD:
+               case qp:
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L3007` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2984) · [Before (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3007)

```diff
-               case VD:
+               case Rp:
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L3009` → after: `L2986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2986) · [Before (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3009)

```diff
-               case bD:
+               case Xp:
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L3011` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2988) · [Before (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3011)

```diff
-               case jD:
+               case lp:
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L3015` → after: `L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2992) · [Before (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3015)

```diff
-               case xD:
+               case Cp:
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L3017` → after: `L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2994) · [Before (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3017)

```diff
-               case CD:
+               case Mp:
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L3019` → after: `L2996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2996) · [Before (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3019)

```diff
-               case TD:
+               case Ep:
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L3022` → after: `L2999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L2999) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3022)

```diff
-               case dD:
+               case Qp:
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L3024` → after: `L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3001) · [Before (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3024)

```diff
-               case iD:
+               case Bp:
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L3026` → after: `L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3003) · [Before (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3026)

```diff
-               case SD:
+               case Jp:
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L3110` → after: `L3087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3087) · [Before (L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3110)

```diff
-               checked: null != wD ? wD : DD._wrapperState.initialChecked
+               checked: null != cp ? cp : pp._wrapperState.initialChecked
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L3410` → after: `L3387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3387) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3410)

```diff
-             DD: switch (zD) {
+             pp: switch (ip) {
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L3476` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3453) · [Before (L3476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3476)

```diff
-             return 3 === zD.tag ? wD : null
+             return 3 === ip.tag ? cp : null
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L3548` → after: `L3525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3525) · [Before (L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3548)

```diff
-                 return wD.stateNode.current === wD ? DD : zD
+                 return cp.stateNode.current === cp ? pp : ip
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L3760` → after: `L3737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3737) · [Before (L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3760)

```diff
-             return 0 !== (DD = -1073741825 & DD.pendingLanes) ? DD : 1073741824 & DD ? 1073741824 : 0
+             return 0 !== (pp = -1073741825 & pp.pendingLanes) ? pp : 1073741824 & pp ? 1073741824 : 0
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L3884` → after: `L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3861) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3884)

```diff
-             return gp = sD.slice(DD, 1 < zD ? 1 - zD : void 0)
+             return AO = op.slice(pp, 1 < ip ? 1 - ip : void 0)
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L3889` → after: `L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3866) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3889)

```diff
-             return "charCode" in DD ? 0 === (DD = DD.charCode) && 13 === zD && (DD = 13) : DD = zD, 10 === DD && (DD = 13), 32 <= DD || 13 === DD ? DD : 0
+             return "charCode" in pp ? 0 === (pp = pp.charCode) && 13 === ip && (pp = 13) : pp = ip, 10 === pp && (pp = 13), 32 <= pp || 13 === pp ? pp : 0
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L3903` → after: `L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L3880) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L3903)

```diff
-               return this.isDefaultPrevented = (null != sD.defaultPrevented ? sD.defaultPrevented : !1 === sD.returnValue) ? Up : fp, this.isPropagationStopped = fp, this
+               return this.isDefaultPrevented = (null != op.defaultPrevented ? op.defaultPrevented : !1 === op.returnValue) ? yO : UO, this.isPropagationStopped = UO, this
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L4263` → after: `L4240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4240) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4263)

```diff
-               DD: {
+               pp: {
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L4305` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4282) · [Before (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4305)

```diff
-             var pD = wD.window === wD ? wD.document : 9 === wD.nodeType ? wD : wD.ownerDocument;
+             var Op = cp.window === cp ? cp.document : 9 === cp.nodeType ? cp : cp.ownerDocument;
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L4343` → after: `L4320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4320) · [Before (L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4343)

```diff
-               DD: {
+               pp: {
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L4371` → after: `L4348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4348) · [Before (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4371)

```diff
-               Zs.has(zD) || as(zD, !1, DD, null), as(zD, !0, DD, null)
+               bo.has(ip) || Go(ip, !1, pp, null), Go(ip, !0, pp, null)
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L4375` → after: `L4352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4352) · [Before (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4375)

```diff
-           function as(DD, zD, wD, pD) {
+           function Go(pp, ip, cp, Op) {
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L4409` → after: `L4386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4386) · [Before (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4409)

```diff
-             if (0 === (1 & zD) && 0 === (2 & zD) && null !== pD) DD: for (;;) {
+             if (0 === (1 & ip) && 0 === (2 & ip) && null !== Op) pp: for (;;) {
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L4443` → after: `L4420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4420) · [Before (L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4443)

```diff
-               DD: {
+               pp: {
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L4493-L4495` → after: `L4470-L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4470-L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4470-L4472) · [Before (L4493-L4495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4493-L4495)

```diff
-                     case Sw:
-                     case iw:
-                     case lw:
+                     case Bc:
+                     case Nc:
+                     case Tc:
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L4498` → after: `L4475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4475) · [Before (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4498)

```diff
-                     case Ww:
+                     case fc:
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L4538-L4539` → after: `L4515-L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4515-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4515-L4516) · [Before (L4538-L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4538-L4539)

```diff
-                 if (cD = "mouseout" === DD || "pointerout" === DD, (!(LD = "mouseover" === DD || "pointerover" === DD) || 0 !== (16 & zD) || !(gD = wD.relatedTarget || wD.fromElement) || !BK(gD) && !gD[fK]) && (cD || LD) && (LD = sD.window === sD ? sD : (LD = sD.ownerDocument) ?  … [truncated]
-                   if (RD = Qp, BD = "onMouseLeave", UD = "onMouseEnter", ID = "mouse", "pointerout" !== DD && "pointerover" !== DD || (RD = Np, BD = "onPointerLeave", UD = "onPointerEnter", ID = "pointer"), AD = null == cD ? LD : hK(cD), fD = null == gD ? LD : hK(gD), (LD = new R … [truncated]
+                 if (Lp = "mouseout" === pp || "pointerout" === pp, (!(xp = "mouseover" === pp || "pointerover" === pp) || 0 !== (16 & ip) || !(Yp = cp.relatedTarget || cp.fromElement) || !wI(Yp) && !Yp[yI]) && (Lp || xp) && (xp = op.window === op ? op : (xp = op.ownerDocument) ?  … [truncated]
+                   if (Dp = mO, Up = "onMouseLeave", Pp = "onMouseEnter", yp = "mouse", "pointerout" !== pp && "pointerover" !== pp || (Dp = bO, Up = "onPointerLeave", Pp = "onPointerEnter", yp = "pointer"), Ap = null == Lp ? xp : tI(Lp), Wp = null == Yp ? xp : tI(Yp), (xp = new D … [truncated]
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L4585` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4562) · [Before (L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4585)

```diff
-                 if (op) DD: {
+                 if (GO) pp: {
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L4603` → after: `L4580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4580) · [Before (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4603)

```diff
-                 }), nD ? MD.data = nD : null !== (nD = qp(wD)) && (MD.data = nD))), (nD = vp ? function(DD, zD) {
+                 }), tp ? Hp.data = tp : null !== (tp = po(cp)) && (Hp.data = tp))), (tp = ZO ? function(pp, ip) {
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L4841` → after: `L4818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4818) · [Before (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4841)

```diff
-             qK = void 0 !== eK ? eK : function() {},
+             pS = void 0 !== FI ? FI : function() {},
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L4846` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4823) · [Before (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4846)

```diff
-             sr = 1e4 > pr ? oK : function() {
+             IS = 1e4 > oS ? gI : function() {
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L4852` → after: `L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4829) · [Before (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4852)

```diff
-               case uK:
+               case rI:
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L4854` → after: `L4831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4831) · [Before (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4854)

```diff
-               case vK:
+               case ZI:
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L4856` → after: `L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4833) · [Before (L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4856)

```diff
-               case tK:
+               case zI:
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L4858` → after: `L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4835) · [Before (L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4858)

```diff
-               case FK:
+               case sI:
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L4860` → after: `L4837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4837) · [Before (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L4860)

```diff
-               case YK:
+               case KI:
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L5013` → after: `L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L4990) · [Before (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5013)

```diff
-               null === wD ? zD.next = zD : (zD.next = wD.next, wD.next = zD), DD.pending = zD
+               null === cp ? ip.next = ip : (ip.next = cp.next, cp.next = ip), pp.pending = ip
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L5033` → after: `L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5010) · [Before (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5033)

```diff
-                   null === KD ? sD = KD = rD : KD = KD.next = rD, wD = wD.next
+                   null === Ip ? op = Ip = Sp : Ip = Ip.next = Sp, cp = cp.next
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L5035` → after: `L5012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5012) · [Before (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5035)

```diff
-                 null === KD ? sD = KD = zD : KD = KD.next = zD
+                 null === Ip ? op = Ip = ip : Ip = Ip.next = ip
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L5045` → after: `L5022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5022) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5045)

```diff
-             null === (DD = wD.lastBaseUpdate) ? wD.firstBaseUpdate = zD : DD.next = zD, wD.lastBaseUpdate = zD
+             null === (pp = cp.lastBaseUpdate) ? cp.firstBaseUpdate = ip : pp.next = ip, cp.lastBaseUpdate = ip
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L5058` → after: `L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5035) · [Before (L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5058)

```diff
-               gD.next = null, null === LD ? rD = RD : LD.next = RD, LD = gD;
+               Yp.next = null, null === xp ? Sp = Dp : xp.next = Dp, xp = Yp;
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L5062` → after: `L5039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5039) · [Before (L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5062)

```diff
-                 UD !== LD && (null === UD ? AD.firstBaseUpdate = RD : UD.next = RD, AD.lastBaseUpdate = gD)
+                 Pp !== xp && (null === Pp ? Ap.firstBaseUpdate = Dp : Pp.next = Dp, Ap.lastBaseUpdate = Yp)
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L5078` → after: `L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5055) · [Before (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5078)

```diff
-                   DD: {
+                   pp: {
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L5131` → after: `L5108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5108) · [Before (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5131)

```diff
-             wD = null === (wD = wD(pD, zD = DD.memoizedState)) || void 0 === wD ? zD : sD({}, zD, wD), DD.memoizedState = wD, 0 === DD.lanes && (DD.updateQueue.baseState = wD)
+             cp = null === (cp = cp(Op, ip = pp.memoizedState)) || void 0 === cp ? ip : op({}, ip, cp), pp.memoizedState = cp, 0 === pp.lanes && (pp.updateQueue.baseState = cp)
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L5168` → after: `L5145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5145) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5168)

```diff
-             return "object" === typeof KD && null !== KD ? KD = Jr(KD) : (sD = bK(zD) ? xK : PK.current, KD = (pD = null !== (pD = zD.contextTypes) && void 0 !== pD) ? TK(DD, sD) : VK), zD = new zD(wD, KD), DD.memoizedState = null !== zD.state && void 0 !== zD.state ? zD.state :  … [truncated]
+             return "object" === typeof Ip && null !== Ip ? Ip = uS(Ip) : (op = XI(ip) ? CI : qI.current, Ip = (Op = null !== (Op = ip.contextTypes) && void 0 !== Op) ? EI(pp, op) : RI), ip = new ip(cp, Ip), pp.memoizedState = null !== ip.state && void 0 !== ip.state ? ip.state :  … [truncated]
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L5179` → after: `L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5156) · [Before (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5179)

```diff
-             "object" === typeof KD && null !== KD ? sD.context = Jr(KD) : (KD = bK(zD) ? xK : PK.current, sD.context = TK(DD, KD)), xr(DD, wD, sD, pD), sD.state = DD.memoizedState, "function" === typeof(KD = zD.getDerivedStateFromProps) && (jr(DD, zD, KD, wD), sD.state = DD.memoi … [truncated]
+             "object" === typeof Ip && null !== Ip ? op.context = uS(Ip) : (Ip = XI(ip) ? CI : qI.current, op.context = EI(pp, Ip)), CS(pp, cp, op, Op), op.state = pp.memoizedState, "function" === typeof(Ip = ip.getDerivedStateFromProps) && (lS(pp, ip, Ip, cp), op.state = pp.memoi … [truncated]
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L5231` → after: `L5208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5208) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5231)

```diff
-               return zD.index = pD, DD ? null !== (pD = zD.alternate) ? (pD = pD.index) < wD ? (zD.flags = 2, wD) : pD : (zD.flags = 2, wD) : wD
+               return ip.index = Op, pp ? null !== (Op = ip.alternate) ? (Op = Op.index) < cp ? (ip.flags = 2, cp) : Op : (ip.flags = 2, cp) : cp
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L5258` → after: `L5235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5235) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5258)

```diff
-                   case ED:
+                   case jp:
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L5260` → after: `L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5237) · [Before (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5260)

```diff
-                   case QD:
+                   case kp:
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L5274` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5251) · [Before (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5274)

```diff
-                   case ED:
+                   case jp:
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L5276` → after: `L5253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5253) · [Before (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5276)

```diff
-                   case QD:
+                   case kp:
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L5289-L5292` → after: `L5266-L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5266-L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5266-L5269) · [Before (L5289-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5289-L5292)

```diff
-                   case ED:
-                     return DD = DD.get(null === pD.key ? wD : pD.key) || null, pD.type === XD ? AD(zD, DD, pD.props.children, sD, pD.key) : gD(zD, DD, pD, sD);
-                   case QD:
-                     return RD(zD, DD = DD.get(null === pD.key ? wD : pD.key) || null, pD, sD)
+                   case jp:
+                     return pp = pp.get(null === Op.key ? cp : Op.key) || null, Op.type === mp ? Ap(ip, pp, Op.props.children, op, Op.key) : Yp(ip, pp, Op, op);
+                   case kp:
+                     return Dp(ip, pp = pp.get(null === Op.key ? cp : Op.key) || null, Op, op)
```

#### 186. `bundles/bloxd.io/main.js` (Changed code · before: `L5308` → after: `L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5285) · [Before (L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5308)

```diff
-                 DD && AD && null === hD.alternate && zD(sD, AD), rD = KD(hD, rD, BD), null === RD ? gD = hD : RD.sibling = hD, RD = hD, AD = GD
+                 pp && Ap && null === vp.alternate && ip(op, Ap), Sp = Ip(vp, Sp, Up), null === Dp ? Yp = vp : Dp.sibling = vp, Dp = vp, Ap = wp
```

#### 187. `bundles/bloxd.io/main.js` (Changed code · before: `L5312` → after: `L5289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5289) · [Before (L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5312)

```diff
-                 for (; BD < LD.length; BD++) null !== (AD = UD(sD, LD[BD], cD)) && (rD = KD(AD, rD, BD), null === RD ? gD = AD : RD.sibling = AD, RD = AD);
+                 for (; Up < xp.length; Up++) null !== (Ap = Pp(op, xp[Up], Lp)) && (Sp = Ip(Ap, Sp, Up), null === Dp ? Yp = Ap : Dp.sibling = Ap, Dp = Ap);
```

#### 188. `bundles/bloxd.io/main.js` (Changed code · before: `L5315` → after: `L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5292) · [Before (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5315)

```diff
-               for (AD = pD(sD, AD); BD < LD.length; BD++) null !== (GD = ID(AD, sD, BD, LD[BD], cD)) && (DD && null !== GD.alternate && AD.delete(null === GD.key ? BD : GD.key), rD = KD(GD, rD, BD), null === RD ? gD = GD : RD.sibling = GD, RD = GD);
+               for (Ap = Op(op, Ap); Up < xp.length; Up++) null !== (wp = yp(Ap, op, Up, xp[Up], Lp)) && (pp && null !== wp.alternate && Ap.delete(null === wp.key ? Up : wp.key), Sp = Ip(wp, Sp, Up), null === Dp ? Yp = wp : Dp.sibling = wp, Dp = wp);
```

#### 189. `bundles/bloxd.io/main.js` (Changed code · before: `L5332` → after: `L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5309) · [Before (L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5332)

```diff
-                 DD && BD && null === MD.alternate && zD(sD, BD), LD = KD(MD, LD, GD), null === AD ? RD = MD : AD.sibling = MD, AD = MD, BD = hD
+                 pp && Up && null === Hp.alternate && ip(op, Up), xp = Ip(Hp, xp, wp), null === Ap ? Dp = Hp : Ap.sibling = Hp, Ap = Hp, Up = vp
```

#### 190. `bundles/bloxd.io/main.js` (Changed code · before: `L5336` → after: `L5313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5313) · [Before (L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5336)

```diff
-                 for (; !nD.done; GD++, nD = cD.next()) null !== (nD = UD(sD, nD.value, gD)) && (LD = KD(nD, LD, GD), null === AD ? RD = nD : AD.sibling = nD, AD = nD);
+                 for (; !tp.done; wp++, tp = Lp.next()) null !== (tp = Pp(op, tp.value, Yp)) && (xp = Ip(tp, xp, wp), null === Ap ? Dp = tp : Ap.sibling = tp, Ap = tp);
```

#### 191. `bundles/bloxd.io/main.js` (Changed code · before: `L5339` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5316) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5339)

```diff
-               for (BD = pD(sD, BD); !nD.done; GD++, nD = cD.next()) null !== (nD = ID(BD, sD, GD, nD.value, gD)) && (DD && null !== nD.alternate && BD.delete(null === nD.key ? GD : nD.key), LD = KD(nD, LD, GD), null === AD ? RD = nD : AD.sibling = nD, AD = nD);
+               for (Up = Op(op, Up); !tp.done; wp++, tp = Lp.next()) null !== (tp = yp(Up, op, wp, tp.value, Yp)) && (pp && null !== tp.alternate && Up.delete(null === tp.key ? wp : tp.key), xp = Ip(tp, xp, wp), null === Ap ? Dp = tp : Ap.sibling = tp, Ap = tp);
```

#### 192. `bundles/bloxd.io/main.js` (Changed code · before: `L5349-L5350` → after: `L5326-L5327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5326-L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5326-L5327) · [Before (L5349-L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5349-L5350)

```diff
-                 case ED:
-                   DD: {
+                 case jp:
+                   pp: {
```

#### 193. `bundles/bloxd.io/main.js` (Changed code · before: `L5370-L5371` → after: `L5347-L5348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5347-L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5347-L5348) · [Before (L5370-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5370-L5371)

```diff
-                 case QD:
-                   DD: {
+                 case kp:
+                   pp: {
```

#### 194. `bundles/bloxd.io/main.js` (Changed code · before: `L5509` → after: `L5486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5486) · [Before (L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5509)

```diff
-               DD: {
+               pp: {
```

#### 195. `bundles/bloxd.io/main.js` (Changed code · before: `L5559` → after: `L5536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5536) · [Before (L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5559)

```diff
-             if (BL = KD, GL = zD, zD.memoizedState = null, zD.updateQueue = null, zD.lanes = 0, fL.current = null === DD || null === DD.memoizedState ? YL : HL, DD = wD(pD, sD), OL) {
+             if (wx = Ip, vx = ip, ip.memoizedState = null, ip.updateQueue = null, ip.lanes = 0, yx.current = null === pp || null === pp.memoizedState ? Kx : Vx, pp = cp(Op, op), ex) {
```

#### 196. `bundles/bloxd.io/main.js` (Changed code · before: `L5578` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5555) · [Before (L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5578)

```diff
-             return null === nL ? GL.memoizedState = nL = DD : nL = nL.next = DD, nL
+             return null === Hx ? vx.memoizedState = Hx = pp : Hx = Hx.next = pp, Hx
```

#### 197. `bundles/bloxd.io/main.js` (Changed code · before: `L5596` → after: `L5573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5573) · [Before (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5596)

```diff
-               }, null === nL ? GL.memoizedState = nL = DD : nL = nL.next = DD
+               }, null === Hx ? vx.memoizedState = Hx = pp : Hx = Hx.next = pp
```

#### 198. `bundles/bloxd.io/main.js` (Changed code · before: `L5645` → after: `L5622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5622) · [Before (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5645)

```diff
-               null === cD ? KD = pD : cD.next = LD, Ms(pD, zD.memoizedState) || (zc = !0), zD.memoizedState = pD, zD.baseState = KD, zD.baseQueue = cD, wD.lastRenderedState = pD
+               null === Lp ? Ip = Op : Lp.next = xp, eo(Op, ip.memoizedState) || (cL = !0), ip.memoizedState = Op, ip.baseState = Ip, ip.baseQueue = Lp, cp.lastRenderedState = Op
```

#### 199. `bundles/bloxd.io/main.js` (Changed code · before: `L5673` → after: `L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5650) · [Before (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5673)

```diff
-             if (null !== sD ? DD = sD === pD : (DD = DD.mutableReadLanes, (DD = (BL & DD) === DD) && (zD._workInProgressVersionPrimary = pD, AL.push(zD))), DD) return wD(zD._source);
+             if (null !== op ? pp = op === Op : (pp = pp.mutableReadLanes, (pp = (wx & pp) === pp) && (ip._workInProgressVersionPrimary = Op, Px.push(ip))), pp) return cp(ip._source);
```

#### 200. `bundles/bloxd.io/main.js` (Changed code · before: `L5755` → after: `L5732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5732) · [Before (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5755)

```diff
-             }, GL.updateQueue = zD, zD.lastEffect = DD.next = DD) : null === (wD = zD.lastEffect) ? zD.lastEffect = DD.next = DD : (pD = wD.next, wD.next = DD, DD.next = pD, zD.lastEffect = DD), DD
+             }, vx.updateQueue = ip, ip.lastEffect = pp.next = pp) : null === (cp = ip.lastEffect) ? ip.lastEffect = pp.next = pp : (Op = cp.next, cp.next = pp, pp.next = Op, ip.lastEffect = pp), pp
```

#### 201. `bundles/bloxd.io/main.js` (Changed code · before: `L5850` → after: `L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L5827) · [Before (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L5850)

```diff
-             if (null === rD ? KD.next = KD : (KD.next = rD.next, rD.next = KD), zD.pending = KD, rD = DD.alternate, DD === GL || null !== rD && rD === GL) OL = ML = !0;
+             if (null === Sp ? Ip.next = Ip : (Ip.next = Sp.next, Sp.next = Ip), ip.pending = Ip, Sp = pp.alternate, pp === vx || null !== Sp && Sp === vx) ex = dx = !0;
```

#### 202. `bundles/bloxd.io/main.js` (Changed code · before: `L6052` → after: `L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6029) · [Before (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6052)

```diff
-             return rD = DD.child, 0 === (sD & KD) && (sD = rD.memoizedProps, (wD = null !== (wD = wD.compare) ? wD : Es)(sD, pD) && DD.ref === zD.ref) ? Xc(DD, zD, KD) : (zD.flags |= 1, (DD = BR(rD, pD)).ref = zD.ref, DD.return = zD, zD.child = DD)
+             return Sp = pp.child, 0 === (op & Ip) && (op = Sp.memoizedProps, (cp = null !== (cp = cp.compare) ? cp : jo)(op, Op) && pp.ref === ip.ref) ? mL(pp, ip, Ip) : (ip.flags |= 1, (pp = wD(Sp, Op)).ref = ip.ref, pp.return = ip, ip.child = pp)
```

#### 203. `bundles/bloxd.io/main.js` (Changed code · before: `L6072` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6049) · [Before (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6072)

```diff
-                 if (0 === (1073741824 & wD)) return DD = null !== KD ? KD.baseLanes | wD : wD, zD.lanes = zD.childLanes = 1073741824, zD.memoizedState = {
+                 if (0 === (1073741824 & cp)) return pp = null !== Ip ? Ip.baseLanes | cp : cp, ip.lanes = ip.childLanes = 1073741824, ip.memoizedState = {
```

#### 204. `bundles/bloxd.io/main.js` (Changed code · before: `L6089` → after: `L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6066) · [Before (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6089)

```diff
-             var KD = bK(wD) ? xK : PK.current;
+             var Ip = XI(cp) ? CI : qI.current;
```

#### 205. `bundles/bloxd.io/main.js` (Changed code · before: `L6105` → after: `L6082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6082) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6105)

```diff
-               "object" === typeof gD && null !== gD ? gD = Jr(gD) : gD = TK(zD, gD = bK(wD) ? xK : PK.current);
+               "object" === typeof Yp && null !== Yp ? Yp = uS(Yp) : Yp = EI(ip, Yp = XI(cp) ? CI : qI.current);
```

#### 206. `bundles/bloxd.io/main.js` (Changed code · before: `L6112` → after: `L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6089) · [Before (L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6112)

```diff
-               rD = zD.stateNode, Xr(DD, zD), LD = zD.memoizedProps, gD = zD.type === zD.elementType ? LD : Ur(zD.type, LD), rD.props = gD, AD = zD.pendingProps, UD = rD.context, "object" === typeof(cD = wD.contextType) && null !== cD ? cD = Jr(cD) : cD = TK(zD, cD = bK(wD) ? xK : … [truncated]
+               Sp = ip.stateNode, mS(pp, ip), xp = ip.memoizedProps, Yp = ip.type === ip.elementType ? xp : WS(ip.type, xp), Sp.props = Yp, Ap = ip.pendingProps, Pp = Sp.context, "object" === typeof(Lp = cp.contextType) && null !== Lp ? Lp = uS(Lp) : Lp = EI(ip, Lp = XI(cp) ? CI : … [truncated]
```

#### 207. `bundles/bloxd.io/main.js` (Changed code · before: `L6195` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6172) · [Before (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6195)

```diff
-               wB: null,
+               WU: null,
```

#### 208. `bundles/bloxd.io/main.js` (Changed code · before: `L6201` → after: `L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6178) · [Before (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6201)

```diff
-             } : (rD.isBackwards = zD, rD.wB = null, rD.renderingStartTime = 0, rD.last = pD, rD.tail = wD, rD.tailMode = sD, rD.lastEffect = KD)
+             } : (Sp.isBackwards = ip, Sp.WU = null, Sp.renderingStartTime = 0, Sp.last = Op, Sp.tail = cp, Sp.tailMode = op, Sp.lastEffect = Ip)
```

#### 209. `bundles/bloxd.io/main.js` (Changed code · before: `L6210` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6187) · [Before (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6210)

```diff
-               if (null !== DD && 0 !== (64 & DD.flags)) DD: for (DD = zD.child; null !== DD;) {
+               if (null !== pp && 0 !== (64 & pp.flags)) pp: for (pp = ip.child; null !== pp;) {
```

#### 210. `bundles/bloxd.io/main.js` (Changed code · before: `L6359` → after: `L6336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6336) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6359)

```diff
-                     switch (gD = 9 === KD.nodeType ? KD : KD.ownerDocument, DD === fz && (DD = Bz(wD)), DD === fz ? "script" === wD ? ((DD = gD.createElement("div")).innerHTML = "<script><\/script>", DD = DD.removeChild(DD.firstChild)) : "string" === typeof pD.is ? DD = gD.create … [truncated]
+                     switch (Yp = 9 === Ip.nodeType ? Ip : Ip.ownerDocument, pp === Ui && (pp = vi(cp)), pp === Ui ? "script" === cp ? ((pp = Yp.createElement("div")).innerHTML = "<script><\/script>", pp = pp.removeChild(pp.firstChild)) : "string" === typeof Op.is ? pp = Yp.create … [truncated]
```

#### 211. `bundles/bloxd.io/main.js` (Changed code · before: `L6436` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6413) · [Before (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6436)

```diff
-                   wD = tr(vr.current), tr(ar.current), gL(zD) ? (pD = zD.stateNode, wD = zD.memoizedProps, pD[AK] = zD, pD.nodeValue !== wD && (zD.flags |= 4)) : ((pD = (9 === wD.nodeType ? wD : wD.ownerDocument).createTextNode(pD))[AK] = zD, zD.stateNode = pD)
+                   cp = zS(ZS.current), zS(GS.current), Dx(ip) ? (Op = ip.stateNode, cp = ip.memoizedProps, Op[PI] = ip, Op.nodeValue !== cp && (ip.flags |= 4)) : ((Op = (9 === cp.nodeType ? cp : cp.ownerDocument).createTextNode(Op))[PI] = ip, ip.stateNode = Op)
```

#### 212. `bundles/bloxd.io/main.js` (Changed code · before: `L6447` → after: `L6424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6424) · [Before (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6447)

```diff
-                 if (LD = 0 !== (64 & zD.flags), null === (gD = pD.wB))
+                 if (xp = 0 !== (64 & ip.flags), null === (Yp = Op.WU))
```

#### 213. `bundles/bloxd.io/main.js` (Changed code · before: `L6468` → after: `L6445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6445) · [Before (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6468)

```diff
-                   pD.isBackwards ? (gD.sibling = zD.child, zD.child = gD) : (null !== (wD = pD.last) ? wD.sibling = gD : zD.child = gD, pD.last = gD)
+                   Op.isBackwards ? (Yp.sibling = ip.child, ip.child = Yp) : (null !== (cp = Op.last) ? cp.sibling = Yp : ip.child = Yp, Op.last = Yp)
```

#### 214. `bundles/bloxd.io/main.js` (Changed code · before: `L6470` → after: `L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6447) · [Before (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6470)

```diff
-                 return null !== pD.tail ? (wD = pD.tail, pD.wB = wD, pD.tail = wD.sibling, pD.lastEffect = zD.lastEffect, pD.renderingStartTime = sr(), wD.sibling = null, zD = DL.current, XK(DL, LD ? 1 & zD | 2 : 1 & zD), wD) : null;
+                 return null !== Op.tail ? (cp = Op.tail, Op.WU = cp, Op.tail = cp.sibling, Op.lastEffect = ip.lastEffect, Op.renderingStartTime = IS(), cp.sibling = null, ip = ix.current, mI(ix, xp ? 1 & ip | 2 : 1 & ip), cp) : null;
```

#### 215. `bundles/bloxd.io/main.js` (Changed code · before: `L6620` → after: `L6597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6597) · [Before (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6620)

```diff
-                 componentStack: null !== DD ? DD : ""
+                 componentStack: null !== pp ? pp : ""
```

#### 216. `bundles/bloxd.io/main.js` (Changed code · before: `L6651` → after: `L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6628) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6651)

```diff
-                   zD = (DD = zD.stateNode).getSnapshotBeforeUpdate(zD.elementType === zD.type ? wD : Ur(zD.type, wD), pD), DD.__reactInternalSnapshotBeforeUpdate = zD
+                   ip = (pp = ip.stateNode).getSnapshotBeforeUpdate(ip.elementType === ip.type ? cp : WS(ip.type, cp), Op), pp.__reactInternalSnapshotBeforeUpdate = ip
```

#### 217. `bundles/bloxd.io/main.js` (Changed code · before: `L6790` → after: `L6767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6767) · [Before (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6790)

```diff
-             DD: {
+             pp: {
```

#### 218. `bundles/bloxd.io/main.js` (Changed code · before: `L6809` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6786) · [Before (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6809)

```diff
-             16 & wD.flags && (Oz(zD, ""), wD.flags &= -17);DD: zD: for (wD = DD;;) {
+             16 & cp.flags && (ui(ip, ""), cp.flags &= -17);pp: ip: for (cp = pp;;) {
```

#### 219. `bundles/bloxd.io/main.js` (Changed code · before: `L6850` → after: `L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6827) · [Before (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6850)

```diff
-                 DD: for (;;) {
+                 pp: for (;;) {
```

#### 220. `bundles/bloxd.io/main.js` (Changed code · before: `L6866` → after: `L6843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6843) · [Before (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L6866)

```diff
-                 DD: for (var LD = DD, cD = sD, gD = cD;;)
+                 pp: for (var xp = pp, Lp = op, Yp = Lp;;)
```

#### 221. `bundles/bloxd.io/main.js` (Changed code · before: `L7011` → after: `L6988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L6988) · [Before (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7011)

```diff
-             return 0 !== (48 & qc) ? sr() : -1 !== xg ? xg : xg = sr()
+             return 0 !== (48 & pY) ? IS() : -1 !== CY ? CY : CY = IS()
```

#### 222. `bundles/bloxd.io/main.js` (Changed code · before: `L7068` → after: `L7045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7045) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7068)

```diff
-             if (pD = ow(DD, DD === Dg ? wg : 0), zD = mw, 0 === pD) null !== wD && (wD !== HK && kK(wD), DD.callbackNode = null, DD.callbackPriority = 0);
+             if (Op = Gc(pp, pp === iY ? OY : 0), ip = Fc, 0 === Op) null !== cp && (cp !== VI && aI(cp), pp.callbackNode = null, pp.callbackPriority = 0);
```

#### 223. `bundles/bloxd.io/main.js` (Changed code · before: `L7108` → after: `L7085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7085) · [Before (L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7108)

```diff
-             var wD = ow(DD, DD === Dg ? wg : 0);
+             var cp = Gc(pp, pp === iY ? OY : 0);
```

#### 224. `bundles/bloxd.io/main.js` (Changed code · before: `L7259` → after: `L7236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7236) · [Before (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7259)

```diff
-                 DD: {
+                 pp: {
```

#### 225. `bundles/bloxd.io/main.js` (Changed code · before: `L7341` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7318) · [Before (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7341)

```diff
-             return Yc.current = FL, null === DD ? FL : DD
+             return KL.current = sx, null === pp ? sx : pp
```

#### 226. `bundles/bloxd.io/main.js` (Changed code · before: `L7381` → after: `L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7358) · [Before (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7381)

```diff
-                 null !== DD && 0 === (2048 & DD.flags) && (null === DD.firstEffect && (DD.firstEffect = zD.firstEffect), null !== zD.lastEffect && (null !== DD.lastEffect && (DD.lastEffect.nextEffect = zD.firstEffect), DD.lastEffect = zD.lastEffect), 1 < zD.flags && (null !== DD. … [truncated]
+                 null !== pp && 0 === (2048 & pp.flags) && (null === pp.firstEffect && (pp.firstEffect = ip.firstEffect), null !== ip.lastEffect && (null !== pp.lastEffect && (pp.lastEffect.nextEffect = ip.firstEffect), pp.lastEffect = ip.lastEffect), 1 < ip.flags && (null !== pp. … [truncated]
```

#### 227. `bundles/bloxd.io/main.js` (Changed code · before: `L7415` → after: `L7392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7392) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7415)

```diff
-             if (null !== Vg && 0 === (24 & pD) && Vg.has(DD) && Vg.delete(DD), DD === Dg && (zg = Dg = null, wg = 0), 1 < wD.flags ? null !== wD.lastEffect ? (wD.lastEffect.nextEffect = wD, pD = wD.firstEffect) : pD = wD : pD = wD.firstEffect, null !== pD) {
+             if (null !== RY && 0 === (24 & Op) && RY.has(pp) && RY.delete(pp), pp === iY && (cY = iY = null, OY = 0), 1 < cp.flags ? null !== cp.lastEffect ? (cp.lastEffect.nextEffect = cp, Op = cp.firstEffect) : Op = cp : Op = cp.firstEffect, null !== Op) {
```

#### 228. `bundles/bloxd.io/main.js` (Changed code · before: `L7421` → after: `L7398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7398) · [Before (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7421)

```diff
-                 else DD: if (cD = (cD = LD.ownerDocument) && cD.defaultView || window, (RD = cD.getSelection && cD.getSelection()) && 0 !== RD.rangeCount) {
+                 else pp: if (Lp = (Lp = xp.ownerDocument) && Lp.defaultView || window, (Dp = Lp.getSelection && Lp.getSelection()) && 0 !== Dp.rangeCount) {
```

#### 229. `bundles/bloxd.io/main.js` (Changed code · before: `L7436` → after: `L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7413) · [Before (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7436)

```diff
-                   zD: for (;;) {
+                   ip: for (;;) {
```

#### 230. `bundles/bloxd.io/main.js` (Changed code · before: `L7508` → after: `L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7485) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7508)

```diff
-                 null !== LD && Cs(MD) && (OD = LD.start, void 0 === (JD = LD.end) && (JD = OD), "selectionStart" in MD ? (MD.selectionStart = OD, MD.selectionEnd = Math.min(JD, MD.value.length)) : (JD = (OD = MD.ownerDocument || document) && OD.defaultView || window).getSelection … [truncated]
+                 null !== xp && Mo(Hp) && (dp = xp.start, void 0 === (ep = xp.end) && (ep = dp), "selectionStart" in Hp ? (Hp.selectionStart = dp, Hp.selectionEnd = Math.min(ep, Hp.value.length)) : (ep = (dp = Hp.ownerDocument || document) && dp.defaultView || window).getSelection … [truncated]
```

#### 231. `bundles/bloxd.io/main.js` (Changed code · before: `L7673-L7674` → after: `L7650-L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7650-L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7650-L7651) · [Before (L7673-L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7673-L7674)

```diff
-             else DD: switch (DD) {
-               case XD:
+             else pp: switch (pp) {
+               case mp:
```

#### 232. `bundles/bloxd.io/main.js` (Changed code · before: `L7676` → after: `L7653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7653) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7676)

```diff
-               case WD:
+               case Tp:
```

#### 233. `bundles/bloxd.io/main.js` (Changed code · before: `L7679` → after: `L7656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7656) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7679)

```diff
-               case VD:
+               case Rp:
```

#### 234. `bundles/bloxd.io/main.js` (Changed code · before: `L7682` → after: `L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7659) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7682)

```diff
-               case PD:
+               case qp:
```

#### 235. `bundles/bloxd.io/main.js` (Changed code · before: `L7684` → after: `L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7661) · [Before (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7684)

```diff
-               case bD:
+               case Xp:
```

#### 236. `bundles/bloxd.io/main.js` (Changed code · before: `L7686` → after: `L7663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7663) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7686)

```diff
-               case jD:
+               case lp:
```

#### 237. `bundles/bloxd.io/main.js` (Changed code · before: `L7688` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7665) · [Before (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7688)

```diff
-               case ND:
+               case fp:
```

#### 238. `bundles/bloxd.io/main.js` (Changed code · before: `L7690` → after: `L7667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7667) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7690)

```diff
-               case ZD:
+               case bp:
```

#### 239. `bundles/bloxd.io/main.js` (Changed code · before: `L7694` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7671) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7694)

```diff
-                   case CD:
+                   case Mp:
```

#### 240. `bundles/bloxd.io/main.js` (Changed code · before: `L7697` → after: `L7674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7674) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7697)

```diff
-                   case xD:
+                   case Cp:
```

#### 241. `bundles/bloxd.io/main.js` (Changed code · before: `L7700` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7677) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7700)

```diff
-                   case TD:
+                   case Ep:
```

#### 242. `bundles/bloxd.io/main.js` (Changed code · before: `L7703` → after: `L7680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7680) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7703)

```diff
-                   case dD:
+                   case Qp:
```

#### 243. `bundles/bloxd.io/main.js` (Changed code · before: `L7706` → after: `L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7683) · [Before (L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7706)

```diff
-                   case SD:
+                   case Jp:
```

#### 244. `bundles/bloxd.io/main.js` (Changed code · before: `L7709` → after: `L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7686) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7709)

```diff
-                   case iD:
+                   case Bp:
```

#### 245. `bundles/bloxd.io/main.js` (Changed code · before: `L7713` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7690) · [Before (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7713)

```diff
-                 throw Error(rD(130, null == DD ? DD : typeof DD, ""))
+                 throw Error(Sp(130, null == pp ? pp : typeof pp, ""))
```

#### 246. `bundles/bloxd.io/main.js` (Changed code · before: `L7746-L7747` → after: `L7723-L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7723-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7723-L7724) · [Before (L7746-L7747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7746-L7747)

```diff
-             DD: if (wD) {
-               zD: {
+             pp: if (cp) {
+               ip: {
```

#### 247. `bundles/bloxd.io/main.js` (Changed code · before: `L7774` → after: `L7751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7751) · [Before (L7774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7774)

```diff
-             return null === zD.context ? zD.context = wD : zD.pendingContext = wD, (zD = Vr(KD, LD)).payload = {
+             return null === ip.context ? ip.context = cp : ip.pendingContext = cp, (ip = RS(Ip, xp)).payload = {
```

#### 248. `bundles/bloxd.io/main.js` (Changed code · before: `L7786` → after: `L7763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7763) · [Before (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7786)

```diff
-               DD.retryLane = 0 !== wD && wD < zD ? wD : zD
+               pp.retryLane = 0 !== cp && cp < ip ? cp : ip
```

#### 249. `bundles/bloxd.io/main.js` (Changed code · before: `L7888` → after: `L7865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7865) · [Before (L7888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7888)

```diff
-                       if (null !== (sD = zD.memoizedState) && (sD.wB = null, sD.tail = null, sD.lastEffect = null), XK(DL, DL.current), pD) break;
+                       if (null !== (op = ip.memoizedState) && (op.WU = null, op.tail = null, op.lastEffect = null), mI(ix, ix.current), Op) break;
```

#### 250. `bundles/bloxd.io/main.js` (Changed code · before: `L7913` → after: `L7890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7890) · [Before (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7913)

```diff
-                 DD: {
+                 pp: {
```

#### 251. `bundles/bloxd.io/main.js` (Changed code · before: `L7939` → after: `L7916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7916) · [Before (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7939)

```diff
-                 return pD = zD.type, sD = zD.pendingProps, cc(DD, zD, pD, sD = zD.elementType === pD ? sD : Ur(pD, sD), wD);
+                 return Op = ip.type, op = ip.pendingProps, YL(pp, ip, Op, op = ip.elementType === Op ? op : WS(Op, op), cp);
```

#### 252. `bundles/bloxd.io/main.js` (Changed code · before: `L7941` → after: `L7918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7918) · [Before (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7941)

```diff
-                 return pD = zD.type, sD = zD.pendingProps, gc(DD, zD, pD, sD = zD.elementType === pD ? sD : Ur(pD, sD), wD);
+                 return Op = ip.type, op = ip.pendingProps, DL(pp, ip, Op, op = ip.elementType === Op ? op : WS(Op, op), cp);
```

#### 253. `bundles/bloxd.io/main.js` (Changed code · before: `L7963` → after: `L7940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7940) · [Before (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7963)

```diff
-                 return pD = zD.type, sD = zD.pendingProps, pc(DD, zD, pD, sD = zD.elementType === pD ? sD : Ur(pD, sD), wD);
+                 return Op = ip.type, op = ip.pendingProps, oL(pp, ip, Op, op = ip.elementType === Op ? op : WS(Op, op), cp);
```

#### 254. `bundles/bloxd.io/main.js` (Changed code · before: `L7970` → after: `L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7947) · [Before (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L7970)

```diff
-                 DD: {
+                 pp: {
```

#### 255. `bundles/bloxd.io/main.js` (Changed code · before: `L8021` → after: `L7998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L7998) · [Before (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8021)

```diff
-                 return pD = zD.type, sD = zD.pendingProps, sD = zD.elementType === pD ? sD : Ur(pD, sD), null !== DD && (DD.alternate = null, zD.alternate = null, zD.flags |= 2), zD.tag = 1, bK(pD) ? (DD = !0, iK(zD)) : DD = !1, Or(zD, wD), ir(zD, pD, sD), Wr(zD, pD, sD, wD), Rc( … [truncated]
+                 return Op = ip.type, op = ip.pendingProps, op = ip.elementType === Op ? op : WS(Op, op), null !== pp && (pp.alternate = null, ip.alternate = null, ip.flags |= 2), ip.tag = 1, XI(Op) ? (pp = !0, BI(ip)) : pp = !1, eS(ip, cp), BS(ip, Op, op), TS(ip, Op, op, cp), AL( … [truncated]
```

#### 256. `bundles/bloxd.io/main.js` (Changed code · before: `L8179-L8180` → after: `L8156-L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8156-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8156-L8157) · [Before (L8179-L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8179-L8180)

```diff
-           DD.exports = wD(94)
-         }, , , (DD, zD) => {
+           pp.exports = cp(95)
+         }, , , , (pp, ip) => {
```

#### 257. `bundles/bloxd.io/main.js` (Changed code · before: `L8257` → after: `L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8234) · [Before (L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8257)

```diff
-             DD: for (;;) {
+             pp: for (;;) {
```

#### 258. `bundles/bloxd.io/main.js` (Changed code · before: `L8275` → after: `L8252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8252) · [Before (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8275)

```diff
-                 DD: for (var pD = 0, sD = DD.length; pD < sD;) {
+                 pp: for (var Op = 0, op = pp.length; Op < op;) {
```

#### 259. `bundles/bloxd.io/main.js` (Changed code · before: `L8294` → after: `L8271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8271) · [Before (L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8294)

```diff
-             return 0 !== wD ? wD : DD.id - zD.id
+             return 0 !== cp ? cp : pp.id - ip.id
```

#### 260. `bundles/bloxd.io/main.js` (Changed code · before: `L8334` → after: `L8311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8311) · [Before (L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8334)

```diff
-                   wD = zD.unstable_now(), "function" === typeof LD ? TD.callback = LD : TD === QD(PD) && XD(PD), iD(wD)
+                   cp = ip.unstable_now(), "function" === typeof xp ? Ep.callback = xp : Ep === kp(qp) && mp(qp), Bp(cp)
```

#### 261. `bundles/bloxd.io/main.js` (Changed code · before: `L8394` → after: `L8371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8371) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8394)

```diff
-             switch ("object" === typeof rD && null !== rD ? rD = "number" === typeof(rD = rD.delay) && 0 < rD ? LD + rD : LD : rD = LD, DD) {
+             switch ("object" === typeof Sp && null !== Sp ? Sp = "number" === typeof(Sp = Sp.delay) && 0 < Sp ? xp + Sp : xp : Sp = xp, pp) {
```

#### 262. `bundles/bloxd.io/main.js` (Changed code · before: `L8470-L8472` → after: `L8447-L8448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8447-L8448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8447-L8448) · [Before (L8470-L8472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8470-L8472)

```diff
-           var pD = wD(182),
-             sD = wD(186),
-             KD = wD(197),
+           var Op = cp(185),
+             op = cp(195),
```

#### 263. `bundles/bloxd.io/main.js` (Changed code · before: `L8475` → after: `L8451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8451) · [Before (L8475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8475)

```diff
-             cD = wD(113),
+             xp = cp(108),
```

#### 264. `bundles/bloxd.io/main.js` (Changed code · before: `L8477-L8480` → after: `L8453-L8455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8453-L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8453-L8455) · [Before (L8477-L8480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8477-L8480)

```diff
-             RD = wD(119),
-             AD = wD(35),
-             UD = wD(128),
-             fD = wD(161),
+             Yp = cp(118),
+             Dp = cp(44),
+             Ap = cp(131),
```

#### 265. `bundles/bloxd.io/main.js` (Changed code · before: `L8482-L8483` → after: `L8457-L8459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8457-L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8457-L8459) · [Before (L8482-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8482-L8483)

```diff
-             BD = wD(125);
-           UD.D && !UD.z[UD.D].enabled && console.error(`Selected subsiteUsed ${UD.D} but it is not enabled`);
+             Wp = cp(172),
+             yp = cp(129);
+           Ap.subsiteUsed && !Ap.subsiteUsedData[Ap.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${Ap.subsiteUsed} but it is not enabled`);
```

#### 266. `bundles/bloxd.io/main.js` (Changed code · before: `L8491` → after: `L8467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8467) · [Before (L8491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8491)

```diff
-             return [`Browser: ${MD()}`, `Version: ${OD()}`, `Platform: ${navigator.platform}`, `Platform Type: ${CD()}`, `Input Type: ${(0,gD.e)()}`].join(DD)
+             return [`Browser: ${tp()}`, `Version: ${Hp()}`, `Platform: ${navigator.platform}`, `Platform Type: ${qp()}`, `Input Type: ${(0,Lp.c)()}`].join(pp)
```

#### 267. `bundles/bloxd.io/main.js` (Changed code · before: `L8519` → after: `L8495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8495) · [Before (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8519)

```diff
-             return hD().getPlatformType() || ("touchOnly" === (0, gD.e)() ? "tablet" : "desktop")
+             return wp().getPlatformType() || ("touchOnly" === (0, Lp.c)() ? "tablet" : "desktop")
```

#### 268. `bundles/bloxd.io/main.js` (Changed code · before: `L8538` → after: `L8514-L8522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8514-L8522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8514-L8522) · [Before (L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8538)

```diff
-             return "macos" === DD && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== DD || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, gD.e)() ? pD.z.includes(DD) ? DD : "other" : "android"
+             return "macos" === pp && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== pp || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, Lp.c)() ? Op.F.includes(pp) ? pp : "other" : "android"
+           }
+ 
+           function Cp() {
+             try {
+               return Mp()
+             } catch {
+               return null
+             }
```

#### 269. `bundles/bloxd.io/main.js` (Changed code · before: `L8543` → after: `L8527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8527) · [Before (L8543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8543)

```diff
-             return pD.H.includes(DD) ? DD : "other"
+             return Op.P.includes(pp) ? pp : "other"
```

#### 270. `bundles/bloxd.io/main.js` (Changed code · before: `L8548` → after: `L8532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8532) · [Before (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8548)

```diff
-             return !WD() && ("mobile" === DD || "tablet" === DD || "touchOnly" === (0, gD.e)() || cD.currentUrl.hasSearchParam("mobile"))
+             return !Np() && ("mobile" === pp || "tablet" === pp || "touchOnly" === (0, Lp.c)() || xp.currentUrl.hasSearchParam("mobile"))
```

#### 271. `bundles/bloxd.io/main.js` (Changed code · before: `L8564` → after: `L8544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8544) · [Before (L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8564)

```diff
-             return SD(UD.v)
+             return (0, Op.w)(Ap.siteUsed)
```

#### 272. `bundles/bloxd.io/main.js` (Changed code · before: `L8568` → after: `L8548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8548) · [Before (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8568)

```diff
-             return bD() || "mouseOnly" !== (0, gD.e)() || navigator.maxTouchPoints > 0
+             return Xp() || "mouseOnly" !== (0, Lp.c)() || navigator.maxTouchPoints > 0
```

#### 273. `bundles/bloxd.io/main.js` (Changed code · before: `L8574` → after: `L8554-L8555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8554-L8555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8554-L8555) · [Before (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8574)

```diff
-           const ND = "bloxd" === UD.v && "bloxd" === UD.D && !cD.currentUrl.hasSearchParam("portal"),
+           const Tp = "bloxd" === Ap.siteUsed && "bloxd" === Ap.subsiteUsed && !xp.currentUrl.hasSearchParam("portal"),
+             fp = Tp && !Ap.isIframed,
```

#### 274. `bundles/bloxd.io/main.js` (Changed code · before: `L8577-L8578` → after: `L8558-L8559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8558-L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8558-L8559) · [Before (L8577-L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8577-L8578)

```diff
-               useSocialFeatures: "coolmathgames" !== UD.v,
-               useDiscord: "coolmathgames" !== UD.v,
+               useSocialFeatures: "coolmathgames" !== Ap.siteUsed,
+               useDiscord: "coolmathgames" !== Ap.siteUsed,
```

#### 275. `bundles/bloxd.io/main.js` (Changed code · before: `L8580-L8594` → after: `L8561-L8576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8561-L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8561-L8576) · [Before (L8580-L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8580-L8594)

```diff
-               useForceRotateForceFullscreenOverlay: "crazygames" !== UD.v && "minijuegos" !== UD.D && "coolmathgames" !== UD.v && "msnPlay" !== UD.v && "desktopMicrosoftStore" !== UD.v && !(0, UD.d)(),
-               useLogin: "coolmathgames" !== UD.v && (0, UD.e)(),
-               useRecaptcha: !KD.f.recaptchaDisabled && !(0, UD.d)(),
-               useTurnstile: !KD.f.turnstileDisabled && !(0, UD.d)() && "mobileIos" !== UD.v && !fD.e,
-               canChangeName: "coolmathgames" !== UD.v,
-               canUseInviteLinks: ("bloxd" === UD.v || "crazygames" === UD.v) && !(0, UD.d)(),
-               canUseFriendLinks: "bloxd" === UD.v && "bloxd" === UD.D && !(0, UD.d)(),
-               canSeePlayerWrittenText: "coolmathgames" !== UD.v,
-               canSeeRealPlayerNames: "coolmathgames" !== UD.v,
-               canUseCustomLobbies: "coolmathgames" !== UD.v,
-               canUseCustomGames: "coolmathgames" !== UD.v && !(0, UD.m)(),
-               canUseYoutubeHomepage: "bloxd" === UD.v,
-               canShowBrowserTips: "coolmathgames" !== UD.v && !iD() && "desktopMicrosoftStore" !== UD.v && !(0, UD.d)(),
-               isOwnTopLevelSite: ND && !UD.i,
-               sanitizeShopInput: "coolmathgames" === UD.v,
+               useForceRotateForceFullscreenOverlay: "crazygames" !== Ap.siteUsed && "minijuegos" !== Ap.subsiteUsed && "coolmathgames" !== Ap.siteUsed && "msnPlay" !== Ap.siteUsed && "desktopMicrosoftStore" !== Ap.siteUsed && !(0, Ap.isDiscordClient)(),
+               useLogin: "coolmathgames" !== Ap.siteUsed && (0, Ap.isFirebaseEnabled)(),
+               useRecaptcha: !op.g.recaptchaDisabled && !(0, Ap.isDiscordClient)(),
+               useTurnstile: !op.g.turnstileDisabled && !(0, Ap.isDiscordClient)() && "mobileIos" !== Ap.siteUsed && !Pp.c,
+               canChangeName: "coolmathgames" !== Ap.siteUsed,
+               canUseInviteLinks: ("bloxd" === Ap.siteUsed || "crazygames" === Ap.siteUsed) && !(0, Ap.isDiscordClient)(),
+               canUseFriendLinks: "bloxd" === Ap.siteUsed && "bloxd" === Ap.subsiteUsed && !(0, Ap.isDiscordClient)(),
+               canSeePlayerWrittenText: "coolmathgames" !== Ap.siteUsed,
+               canSeeRealPlayerNames: "coolmathgames" !== Ap.siteUsed,
+               canUseCustomLobbies: "coolmathgames" !== Ap.siteUsed,
+               canUseCustomGames: "coolmathgames" !== Ap.siteUsed && !(0, Ap.is99NightsCrazyGamesBundle)(),
+               canUseYoutubeHomepage: "bloxd" === Ap.siteUsed,
+               canShowBrowserTips: "coolmathgames" !== Ap.siteUsed && !Jp() && "desktopMicrosoftStore" !== Ap.siteUsed && !(0, Ap.isDiscordClient)(),
+               isOwnTopLevelSite: fp,
+               tellsNewPlayers: "mobileIos" === Ap.siteUsed || "mobileAndroid" === Ap.siteUsed || fp,
+               sanitizeShopInput: "coolmathgames" === Ap.siteUsed,
```

#### 276. `bundles/bloxd.io/main.js` (Changed code · before: `L8596-L8597` → after: `L8578-L8579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8578-L8579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8578-L8579) · [Before (L8596-L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8596-L8597)

```diff
-                 canChangeTexturePack: "coolmathgames" !== UD.v,
-                 canUseShaderPacks: "coolmathgames" !== UD.v
+                 canChangeTexturePack: "coolmathgames" !== Ap.siteUsed,
+                 canUseShaderPacks: "coolmathgames" !== Ap.siteUsed
```

#### 277. `bundles/bloxd.io/main.js` (Changed code · before: `L8634-L8635` → after: `L8616-L8617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8616-L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8616-L8617) · [Before (L8634-L8635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8634-L8635)

```diff
-               const DD = (0, BD.l)();
-               return void 0 === DD ? "not_probed" : (0, ID.d)(DD)
+               const pp = (0, yp.n)();
+               return void 0 === pp ? "not_probed" : (0, Wp.e)(pp)
```

#### 278. `bundles/bloxd.io/main.js` (Changed code · before: `L8637` → after: `L8619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8619) · [Before (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8637)

```diff
-             return HD ??= (0, ID.d)((0, BD.t)()), HD
+             return Vp ??= (0, Wp.e)((0, yp.v)()), Vp
```

#### 279. `bundles/bloxd.io/main.js` (Changed code · before: `L8666` → after: `L8648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8648) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8666)

```diff
-             const pD = null !== (DD = null !== (zD = mD) && void 0 !== zD ? zD : null === (wD = (0, BD.t)()) || void 0 === wD ? void 0 : wD.vendor) && void 0 !== DD ? DD : null;
+             const Op = null !== (pp = null !== (ip = np) && void 0 !== ip ? ip : null === (cp = (0, yp.v)()) || void 0 === cp ? void 0 : cp.vendor) && void 0 !== pp ? pp : null;
```

#### 280. `bundles/bloxd.io/main.js` (Changed code · before: `L8673` → after: `L8655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8655) · [Before (L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8673)

```diff
-               const pD = null !== (DD = null !== (zD = mD) && void 0 !== zD ? zD : null === (wD = (0, BD.l)()) || void 0 === wD ? void 0 : wD.vendor) && void 0 !== DD ? DD : null;
+               const Op = null !== (pp = null !== (ip = np) && void 0 !== ip ? ip : null === (cp = (0, yp.n)()) || void 0 === cp ? void 0 : cp.vendor) && void 0 !== pp ? pp : null;
```

#### 281. `bundles/bloxd.io/main.js` (Changed code · before: `L8704` → after: `L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8686) · [Before (L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8704)

```diff
-               const zD = await (0, RD.y)(DD);
+               const ip = await (0, Yp.u)(pp);
```

#### 282. `bundles/bloxd.io/main.js` (Changed code · before: `L8706` → after: `L8688-L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8688-L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8688-L8691) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8706)

```diff
-               return AD.h.setItem(RD.G, (0, RD.e)(zD)), AD.h.setItem(RD.D, (0, RD.l)(zD)), "usable"
+               const {
+                 adapter: cp
+               } = ip;
+               return Dp.h.setItem(Yp.D, (0, Yp.g)(cp)), Dp.h.setItem(Yp.A, (0, Yp.o)(cp)), "usable"
```

#### 283. `bundles/bloxd.io/main.js` (Changed code · before: `L8720` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8705) · [Before (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8720)

```diff
-                     for (let pD, sD, KD = 0, rD = 0; sD = DD.charAt(rD++); ~sD && (pD = KD % 4 ? 64 * pD + sD : sD, KD++ % 4) ? zD += String.fromCharCode(255 & pD >> (-2 * KD & 6)) : 0) sD = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(sD);
+                     for (let Op, op, Ip = 0, Sp = 0; op = pp.charAt(Sp++); ~op && (Op = Ip % 4 ? 64 * Op + op : op, Ip++ % 4) ? ip += String.fromCharCode(255 & Op >> (-2 * Ip & 6)) : 0) op = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(op);
```

#### 284. `bundles/bloxd.io/main.js` (Changed code · before: `L8727` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8712) · [Before (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8727)

```diff
-                 return rD ? sD = rD : (sD = Uz.kGdYVv(sD), DD[KD] = sD), sD
+                 return Sp ? op = Sp : (op = yi.kGdYVv(op), pp[Ip] = op), op
```

#### 285. `bundles/bloxd.io/main.js` (Changed code · before: `L8748` → after: `L8733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8733) · [Before (L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8748)

```diff
-                 DD = null !== (zD = DD) && void 0 !== zD ? zD : "";
+                 pp = null !== (ip = pp) && void 0 !== ip ? ip : "";
```

#### 286. `bundles/bloxd.io/main.js` (Changed code · before: `L8752` → after: `L8737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8737) · [Before (L8752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8752)

```diff
-                   wD += (null !== (pD = DD[sD]) && void 0 !== pD ? pD : sD.toString()).charCodeAt(0).toString(32)
+                   cp += (null !== (Op = pp[op]) && void 0 !== Op ? Op : op.toString()).charCodeAt(0).toString(32)
```

#### 287. `bundles/bloxd.io/main.js` (Changed code · before: `L8756-L8757` → after: `L8741-L8742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8741-L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8741-L8742) · [Before (L8756-L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8756-L8757)

```diff
-               Bz = wD(236).shouldUseUkPrivacyPolicy;
-             yD = Iz(UD.v) + "_" + Iz(UD.D) + "_" + (Bz() ? "eu-gdpr" : "non-eu") + "_secure=" + window.isSecureContext
+               vi = cp(226).shouldUseUkPrivacyPolicy;
+             hp = wi(Ap.siteUsed) + "_" + wi(Ap.subsiteUsed) + "_" + (vi() ? "eu-gdpr" : "non-eu") + "_secure=" + window.isSecureContext
```

#### 288. `bundles/bloxd.io/main.js` (Changed code · before: `L8759` → after: `L8744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L8744) · [Before (L8759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L8759)

```diff
-         }, , , function(DD) {
+         }, , function(pp) {
```

#### 289. `bundles/bloxd.io/main.js` (Changed code · before: `L9041` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L9026) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L9041)

```diff
-               var pD, sD = (pD = wD(91)) && pD.__esModule ? pD : {
+               var Op, op = (Op = cp(91)) && Op.__esModule ? Op : {
```

#### 290. `bundles/bloxd.io/main.js` (Changed code · before: `L9093` → after: `L9078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L9078) · [Before (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L9093)

```diff
-                 return DD && DD.__esModule ? DD : {
+                 return pp && pp.__esModule ? pp : {
```

#### 291. `bundles/bloxd.io/main.js` (Changed code · before: `L9159` → after: `L9144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L9144) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L9159)

```diff
-                 }, zD.iI = function() {
+                 }, ip.gy = function() {
```

#### 292. `bundles/bloxd.io/main.js` (Changed code · before: `L9162` → after: `L9147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L9147) · [Before (L9162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L9162)

```diff
-                   return DD ? String(this.iI().name).toLowerCase() || "" : this.iI().name || ""
+                   return pp ? String(this.gy().name).toLowerCase() || "" : this.gy().name || ""
```

#### 293. `bundles/bloxd.io/main.js` (Changed code · before: `L9242` → after: `L9227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L9227) · [Before (L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L9242)

```diff
-               var pD, sD = (pD = wD(17)) && pD.__esModule ? pD : {
+               var Op, op = (Op = cp(17)) && Op.__esModule ? Op : {
```

#### 294. `bundles/bloxd.io/main.js` (Changed code · before: `L9642` → after: `L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L9627) · [Before (L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L9642)

```diff
-               var pD, sD = (pD = wD(17)) && pD.__esModule ? pD : {
+               var Op, op = (Op = cp(17)) && Op.__esModule ? Op : {
```

#### 295. `bundles/bloxd.io/main.js` (Changed code · before: `L9783` → after: `L9768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L9768) · [Before (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L9783)

```diff
-               var pD, sD = (pD = wD(17)) && pD.__esModule ? pD : {
+               var Op, op = (Op = cp(17)) && Op.__esModule ? Op : {
```

#### 296. `bundles/bloxd.io/main.js` (Changed code · before: `L9983` → after: `L9968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L9968) · [Before (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L9983)

```diff
-               var pD, sD = (pD = wD(17)) && pD.__esModule ? pD : {
+               var Op, op = (Op = cp(17)) && Op.__esModule ? Op : {
```

#### 297. `bundles/bloxd.io/main.js` (Changed code · before: `L10054` → after: `L10039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10039) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10054)

```diff
-         }, , , , , , , (DD, zD, wD) => {
+         }, , (pp, ip, cp) => {
```

#### 298. `bundles/bloxd.io/main.js` (Changed code · before: `L10093` → after: `L10078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10078) · [Before (L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10093)

```diff
-                 LD = sD.pathname + (rD ? `?${rD}` : "") + sD.hash;
+                 xp = op.pathname + (Sp ? `?${Sp}` : "") + op.hash;
```

#### 299. `bundles/bloxd.io/main.js` (Changed code · before: `L10110` → after: `L10095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10095) · [Before (L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10110)

```diff
-                     for (let pD, sD, KD = 0, rD = 0; sD = DD.charAt(rD++); ~sD && (pD = KD % 4 ? 64 * pD + sD : sD, KD++ % 4) ? zD += String.fromCharCode(255 & pD >> (-2 * KD & 6)) : 0) sD = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(sD);
+                     for (let Op, op, Ip = 0, Sp = 0; op = pp.charAt(Sp++); ~op && (Op = Ip % 4 ? 64 * Op + op : op, Ip++ % 4) ? ip += String.fromCharCode(255 & Op >> (-2 * Ip & 6)) : 0) op = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(op);
```

#### 300. `bundles/bloxd.io/main.js` (Changed code · before: `L10117` → after: `L10102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10102) · [Before (L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10117)

```diff
-                 return LD ? sD = LD : (sD = KD.TgIWQA(sD), DD[rD] = sD), sD
+                 return xp ? op = xp : (op = Ip.TgIWQA(op), pp[Sp] = op), op
```

#### 301. `bundles/bloxd.io/main.js` (Changed code · before: `L10129` → after: `L10114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10114) · [Before (L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10129)

```diff
-                 "string" === typeof(null === (zD = DD.data) || void 0 === zD ? void 0 : zD.type) && "updateSearchParam" === (null === (wD = DD.data) || void 0 === wD ? void 0 : wD.type) && (console.log(`Adding search param ${DD.data.name} with value ${DD.data.value}`), sD.setSear … [truncated]
+                 "string" === typeof(null === (ip = pp.data) || void 0 === ip ? void 0 : ip.type) && "updateSearchParam" === (null === (cp = pp.data) || void 0 === cp ? void 0 : cp.type) && (console.log(`Adding search param ${pp.data.name} with value ${pp.data.value}`), op.setSear … [truncated]
```

#### 302. `bundles/bloxd.io/main.js` (Changed code · before: `L10156` → after: `L10141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10141) · [Before (L10156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10156)

```diff
-         }, , , (DD, zD, wD) => {
+         }, , , , , , , , (pp, ip, cp) => {
```

#### 303. `bundles/bloxd.io/main.js` (Changed code · before: `L10158` → after: `L10143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10143) · [Before (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10158)

```diff
-             e: () => BD
+             c: () => Up
```

#### 304. `bundles/bloxd.io/main.js` (Changed code · before: `L10188` → after: `L10173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10173) · [Before (L10188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10188)

```diff
-         }, , , (DD, zD, wD) => {
+         }, , (pp, ip, cp) => {
```

#### 305. `bundles/bloxd.io/main.js` (Changed code · before: `L10190` → after: `L10175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10175) · [Before (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10190)

```diff
-             C: () => ID,
+             A: () => Wp,
```

#### 306. `bundles/bloxd.io/main.js` (Changed code · before: `L10193-L10196` → after: `L10178-L10179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10178-L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10178-L10179) · [Before (L10193-L10196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10193-L10196)

```diff
-             K: () => hD,
-             L: () => BD,
-             d: () => nD,
-             e: () => rD,
+             I: () => Up,
+             c: () => tp,
```

#### 307. `bundles/bloxd.io/main.js` (Changed code · before: `L10198-L10203` → after: `L10181-L10188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10181-L10188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10181-L10188) · [Before (L10198-L10203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10198-L10203)

```diff
-             j: () => RD,
-             l: () => LD,
-             p: () => cD,
-             t: () => UD,
-             x: () => KD.n,
-             y: () => KD.o,
+             k: () => Yp,
+             n: () => Dp,
+             o: () => xp,
+             q: () => Lp,
+             r: () => Pp,
+             s: () => Ip.n,
+             u: () => Ip.o,
+             x: () => wp,
```

#### 308. `bundles/bloxd.io/main.js` (Changed code · before: `L10208` → after: `L10193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10193) · [Before (L10208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10208)

```diff
-             KD = wD(121);
+             Ip = cp(120);
```

#### 309. `bundles/bloxd.io/main.js` (Changed code · before: `L10224` → after: `L10209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10209) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10224)

```diff
-             let pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zD = null === (wD = globalThis.navigator) || void 0 === wD ? void 0 : wD.userAgent) && void 0 !== zD ? zD : "";
+             let Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ip = null === (cp = globalThis.navigator) || void 0 === cp ? void 0 : cp.userAgent) && void 0 !== ip ? ip : "";
```

#### 310. `bundles/bloxd.io/main.js` (Changed code · before: `L10230` → after: `L10215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10215) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10230)

```diff
-             let pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zD = null === (wD = globalThis.navigator) || void 0 === wD ? void 0 : wD.userAgent) && void 0 !== zD ? zD : "";
+             let Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ip = null === (cp = globalThis.navigator) || void 0 === cp ? void 0 : cp.userAgent) && void 0 !== ip ? ip : "";
```

#### 311. `bundles/bloxd.io/main.js` (Changed code · before: `L10236` → after: `L10221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10221) · [Before (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10236)

```diff
-             let pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zD = null === (wD = globalThis.navigator) || void 0 === wD ? void 0 : wD.userAgent) && void 0 !== zD ? zD : "";
+             let Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ip = null === (cp = globalThis.navigator) || void 0 === cp ? void 0 : cp.userAgent) && void 0 !== ip ? ip : "";
```

#### 312. `bundles/bloxd.io/main.js` (Changed code · before: `L10249` → after: `L10234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10234) · [Before (L10249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10249)

```diff
-             d: () => rD,
+             c: () => Sp,
```

#### 313. `bundles/bloxd.io/main.js` (Changed code · before: `L10255` → after: `L10240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10240) · [Before (L10255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10255)

```diff
-           var pD = wD(125);
+           var Op = cp(129);
```

#### 314. `bundles/bloxd.io/main.js` (Changed code · before: `L10260` → after: `L10245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10245) · [Before (L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10260)

```diff
-               compatibility: cD = !1
+               compatibility: Lp
```

#### 315. `bundles/bloxd.io/main.js` (Changed code · before: `L10263-L10266` → after: `L10248-L10253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10248-L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10248-L10253) · [Before (L10263-L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10263-L10266)

```diff
-                 powerPreference: pD.b
-               }),
-               RD = null !== gD && void 0 !== gD ? gD : cD ? await DD.requestAdapter({
-                 powerPreference: pD.b,
+               powerPreference: Op.c
+             });
+             let Dp = Yp;
+             if (null === Yp && void 0 !== Lp) {
+               const ip = await pp.requestAdapter({
+                 powerPreference: Op.c,
```

#### 316. `bundles/bloxd.io/main.js` (Changed code · before: `L10268` → after: `L10255-L10257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10255-L10257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10255-L10257) · [Before (L10268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10268)

```diff
-               }) : null;
+               });
+               null !== ip && (await Ip(ip), Dp = Lp(ip) ? ip : null)
+             }
```

#### 317. `bundles/bloxd.io/main.js` (Changed code · before: `L10270` → after: `L10259-L10260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10259-L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10259-L10260) · [Before (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10270)

```diff
-             if (await KD(RD), null !== (zD = null !== (wD = null === (sD = RD.info) || void 0 === sD ? void 0 : sD.isFallbackAdapter) && void 0 !== wD ? wD : RD.isFallbackAdapter) && void 0 !== zD && zD) return "software_adapter";
+             if (await Ip(Dp), null !== (ip = null !== (cp = null === (op = Dp.info) || void 0 === op ? void 0 : op.isFallbackAdapter) && void 0 !== cp ? cp : Dp.isFallbackAdapter) && void 0 !== ip && ip) return "software_adapter";
+             const Ap = Dp !== Yp;
```

#### 318. `bundles/bloxd.io/main.js` (Changed code · before: `L10276` → after: `L10266-L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10266-L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10266-L10270) · [Before (L10276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10276)

```diff
-               (0, pD.z)(DD, zD)
+               (0, Op.C)(pp, ip, Ap)
+             }
+             return {
+               adapter: Dp,
+               compatibility: Ap
```

#### 319. `bundles/bloxd.io/main.js` (Changed code · before: `L10287-L10288` → after: `L10280-L10281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10280-L10281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10280-L10281) · [Before (L10287-L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10287-L10288)

```diff
-               vendor: null !== (zD = null === (wD = DD.info) || void 0 === wD ? void 0 : wD.vendor) && void 0 !== zD ? zD : "",
-               architecture: null !== (pD = null === (sD = DD.info) || void 0 === sD ? void 0 : sD.architecture) && void 0 !== pD ? pD : ""
+               vendor: null !== (ip = null === (cp = pp.info) || void 0 === cp ? void 0 : cp.vendor) && void 0 !== ip ? ip : "",
+               architecture: null !== (Op = null === (op = pp.info) || void 0 === op ? void 0 : op.architecture) && void 0 !== Op ? Op : ""
```

#### 320. `bundles/bloxd.io/main.js` (Changed code · before: `L10294` → after: `L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10287) · [Before (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10294)

```diff
-             return /swiftshader/i.test(`${null!==(zD=null===(wD=DD.info)||void 0===wD?void 0:wD.vendor)&&void 0!==zD?zD:""} ${null!==(pD=null===(sD=DD.info)||void 0===sD?void 0:sD.architecture)&&void 0!==pD?pD:""}`)
+             return /swiftshader/i.test(`${null!==(ip=null===(cp=pp.info)||void 0===cp?void 0:cp.vendor)&&void 0!==ip?ip:""} ${null!==(Op=null===(op=pp.info)||void 0===op?void 0:op.architecture)&&void 0!==Op?Op:""}`)
```

#### 321. `bundles/bloxd.io/main.js` (Changed code · before: `L10298` → after: `L10291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10291) · [Before (L10298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10298)

```diff
-             return "string" === typeof zD ? null : zD
+             return "string" === typeof ip ? null : ip.adapter
```

#### 322. `bundles/bloxd.io/main.js` (Changed code · before: `L10300` → after: `L10293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10293) · [Before (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10300)

```diff
-         }, , , , (DD, zD, wD) => {
+         }, , , , , , , , , (pp, ip, cp) => {
```

#### 323. `bundles/bloxd.io/main.js` (Changed code · before: `L10302-L10304` → after: `L10295-L10297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10295-L10297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10295-L10297) · [Before (L10302-L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10302-L10304)

```diff
-             B: () => RD,
-             b: () => hD,
-             d: () => GD,
+             C: () => Pp,
+             F: () => Ap,
+             c: () => Hp,
```

#### 324. `bundles/bloxd.io/main.js` (Changed code · before: `L10307-L10310` → after: `L10300-L10304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10300-L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10300-L10304) · [Before (L10307-L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10307-L10310)

```diff
-             l: () => rD,
-             p: () => fD,
-             t: () => KD,
-             w: () => BD,
+             i: () => Up,
+             j: () => Wp,
+             n: () => Sp,
+             r: () => yp,
+             v: () => Ip,
```

#### 325. `bundles/bloxd.io/main.js` (Changed code · before: `L10329` → after: `L10323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10323) · [Before (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10329)

```diff
-                     vendor: null !== (wD = DD.getParameter(null !== (pD = null === KD || void 0 === KD ? void 0 : KD.UNMASKED_VENDOR_WEBGL) && void 0 !== pD ? pD : DD.VENDOR)) && void 0 !== wD ? wD : "",
+                     vendor: null !== (cp = pp.getParameter(null !== (Op = null === Ip || void 0 === Ip ? void 0 : Ip.UNMASKED_VENDOR_WEBGL) && void 0 !== Op ? Op : pp.VENDOR)) && void 0 !== cp ? cp : "",
```

#### 326. `bundles/bloxd.io/main.js` (Changed code · before: `L10352` → after: `L10346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10346) · [Before (L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10352)

```diff
-             return sD ? pD : void 0
+             return op ? Op : void 0
```

#### 327. `bundles/bloxd.io/main.js` (Changed code · before: `L10365-L10366` → after: `L10360-L10361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10360-L10361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10360-L10361) · [Before (L10365-L10366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10365-L10366)

```diff
-           function AD(DD, zD) {
-             "" === DD && "" === zD || (cD ??= {
+           function Pp(pp, ip, cp) {
+             null !== Lp || "" === pp && "" === ip || (Lp = {
```

#### 328. `bundles/bloxd.io/main.js` (Changed code · before: `L10369` → after: `L10364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10364) · [Before (L10369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10369)

```diff
-             })
+             }, Yp = cp)
```

#### 329. `bundles/bloxd.io/main.js` (Changed code · before: `L10374` → after: `L10369-L10373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10369-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10369-L10373) · [Before (L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10374)

```diff
-             return sD && null !== (DD = pD) && void 0 !== DD && DD.renderer ? pD : LD
+             return op && null !== (pp = Op) && void 0 !== pp && pp.renderer ? Op : xp
+           }
+ 
+           function yp() {
+             return xp
```

#### 330. `bundles/bloxd.io/main.js` (Changed code · before: `L10387` → after: `L10386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10386) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10387)

```diff
-             gD ??= null !== (zD = null === (wD = DD.getSupportedExtensions()) || void 0 === wD ? void 0 : wD.includes("KHR_parallel_shader_compile")) && void 0 !== zD ? zD : null
+             Dp ??= null !== (ip = null === (cp = pp.getSupportedExtensions()) || void 0 === cp ? void 0 : cp.includes("KHR_parallel_shader_compile")) && void 0 !== ip ? ip : null
```

#### 331. `bundles/bloxd.io/main.js` (Changed code · before: `L10406-L10417` → after: `L10405-L10420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10405-L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10405-L10420) · [Before (L10406-L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10406-L10417)

```diff
-         }, , , (DD, zD, wD) => {
-           wD.d(zD, {
-             A: () => AD,
-             D: () => GD,
-             d: () => nD,
-             e: () => OD,
-             i: () => hD,
-             m: () => MD,
-             n: () => cD,
-             r: () => RD,
-             v: () => BD,
-             z: () => gD
+         }, , (pp, ip, cp) => {
+           cp.r(ip), cp.d(ip, {
+             enabledSites: () => Pp,
+             enabledSubsites: () => Wp,
+             getParentUrl: () => xp,
+             is99NightsCrazyGamesBundle: () => kp,
+             isDebugFrontendUrl: () => Yp,
+             isDiscordClient: () => jp,
+             isFirebaseEnabled: () => mp,
+             isIframed: () => ep,
+             siteUsed: () => Hp,
+             siteUsedData: () => Dp,
+             siteUsedSearchParamKey: () => yp,
+             subsiteUsed: () => dp,
+             subsiteUsedData: () => Ap,
+             subsiteUsedSearchParamKey: () => Up
```

#### 332. `bundles/bloxd.io/main.js` (Changed code · before: `L10419-L10422` → after: `L10422-L10425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10422-L10425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10422-L10425) · [Before (L10419-L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10419-L10422)

```diff
-           var pD = wD(157),
-             sD = wD(35),
-             KD = wD(113),
-             rD = wD(137);
+           var Op = cp(156),
+             op = cp(44),
+             Ip = cp(108),
+             Sp = cp(136);
```

#### 333. `bundles/bloxd.io/main.js` (Changed code · before: `L10590` → after: `L10606-L10608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10606-L10608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10606-L10608) · [Before (L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10590)

```diff
-             RD = (pD.R.filter((DD => cD[DD].enabled)), pD.T.filter((DD => gD[DD].enabled)), "siteUsed"),
+             Pp = Op.H.filter((pp => Dp[pp].enabled)),
+             Wp = Op.L.filter((pp => Ap[pp].enabled)),
+             yp = "siteUsed",
```

#### 334. `bundles/bloxd.io/main.js` (Changed code · before: `L10604` → after: `L10622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10622) · [Before (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10604)

```diff
-                 return sD.k.setItem(UD, DD), DD
+                 return op.l.setItem(wp, pp), pp
```

#### 335. `bundles/bloxd.io/main.js` (Changed code · before: `L10610` → after: `L10628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10628) · [Before (L10610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10610)

```diff
-                 if (null !== (wD = null === (pD = cD[DD]) || void 0 === pD ? void 0 : pD.enabled) && void 0 !== wD && wD) return ID(DD) ? sD.k.setItem(UD, DD) : sD.k.removeItem(UD), DD;
+                 if (null !== (cp = null === (Op = Dp[pp]) || void 0 === Op ? void 0 : Op.enabled) && void 0 !== cp && cp) return tp(pp) ? op.l.setItem(wp, pp) : op.l.removeItem(wp), pp;
```

#### 336. `bundles/bloxd.io/main.js` (Changed code · before: `L10613-L10614` → after: `L10631-L10632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10631-L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10631-L10632) · [Before (L10613-L10614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10613-L10614)

```diff
-               const gD = sD.k.getItem(UD);
-               if (ID(gD)) return console.info(`Site used is ${gD}, kept from this tab's entry URL`), gD;
+               const Lp = op.l.getItem(wp);
+               if (tp(Lp)) return console.info(`Site used is ${Lp}, kept from this tab's entry URL`), Lp;
```

#### 337. `bundles/bloxd.io/main.js` (Changed code · before: `L10620` → after: `L10638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10638) · [Before (L10620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10620)

```diff
-               return LD().includes("discord") && !LD().includes("/auth-callback/discord") && (DD = "discord"), (LD().includes("coolmathgames") || KD.currentUrl.hasSearchParam("coolmath")) && (DD = "coolmathgames"), LD().includes("gx.games") && (DD = "gxGames"), console.info(`Site … [truncated]
+               return xp().includes("discord") && !xp().includes("/auth-callback/discord") && (pp = "discord"), (xp().includes("coolmathgames") || Ip.currentUrl.hasSearchParam("coolmath")) && (pp = "coolmathgames"), xp().includes("gx.games") && (pp = "gxGames"), console.info(`Site … [truncated]
```

#### 338. `bundles/bloxd.io/main.js` (Changed code · before: `L10640` → after: `L10658-L10661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10658-L10661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10658-L10661) · [Before (L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10640)

```diff
-             hD = !(-1 !== LD().indexOf("localhost:") || -1 !== LD().indexOf("https://bloxdhop") || -1 !== LD().indexOf("https://www.bloxdhop") || -1 !== LD().indexOf("bloxd.io") || -1 !== LD().indexOf("192.168"));
+             ep = function() {
+               const pp = xp();
+               return !(Yp(pp) || -1 !== pp.indexOf("localhost:") || -1 !== pp.indexOf("https://bloxdhop") || -1 !== pp.indexOf("https://www.bloxdhop") || -1 !== pp.indexOf("bloxd.io") || -1 !== pp.indexOf("192.168"))
+             }();
```

#### 339. `bundles/bloxd.io/main.js` (Changed code · before: `L10653` → after: `L10674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10674) · [Before (L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10653)

```diff
-         }, , , , , , , , , (DD, zD, wD) => {
+         }, , , , , (pp, ip, cp) => {
```

#### 340. `bundles/bloxd.io/main.js` (Changed code · before: `L10656` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10677) · [Before (L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10656)

```diff
-             e: () => LD
+             g: () => xp
```

#### 341. `bundles/bloxd.io/main.js` (Changed code · before: `L10658-L10659` → after: `L10679-L10680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10679-L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10679-L10680) · [Before (L10658-L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10658-L10659)

```diff
-           var pD = wD(145),
-             sD = wD(149);
+           var Op = cp(139),
+             op = cp(145);
```

#### 342. `bundles/bloxd.io/main.js` (Changed code · before: `L10673-L10675` → after: `L10694-L10696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10694-L10696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10694-L10696) · [Before (L10673-L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10673-L10675)

```diff
-                 if ("object" !== typeof zD || null === zD || !Object.prototype.hasOwnProperty.call(zD, sD.d)) return null;
-                 const wD = sD.j.safeParse(zD[sD.d]);
-                 return wD.success ? wD.data : (console.warn(`App bridge: the app's injected hello is invalid: ${pD.C(wD.error)}`), null)
+                 if ("object" !== typeof ip || null === ip || !Object.prototype.hasOwnProperty.call(ip, op.b)) return null;
+                 const cp = op.i.safeParse(ip[op.b]);
+                 return cp.success ? cp.data : (console.warn(`App bridge: the app's injected hello is invalid: ${Op.H(cp.error)}`), null)
```

#### 343. `bundles/bloxd.io/main.js` (Changed code · before: `L10688` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10709) · [Before (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10688)

```diff
-         }, , , , , , , , (DD, zD, wD) => {
+         }, , , (pp, ip, cp) => {
```

#### 344. `bundles/bloxd.io/main.js` (Changed code · before: `L10691` → after: `L10713-L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10713-L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10713-L10714) · [Before (L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10691)

```diff
-             h: () => lz,
+             e: () => ai,
+             g: () => Hc,
```

#### 345. `bundles/bloxd.io/main.js` (Changed code · before: `L10699` → after: `L10720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10720) · [Before (L10699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10699)

```diff
-             u: () => Nz,
+             r: () => li,
```

#### 346. `bundles/bloxd.io/main.js` (Changed code · before: `L10701` → after: `L10722-L10723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10722-L10723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10722-L10723) · [Before (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10701)

```diff
-             y: () => Lw,
+             w: () => fi,
+             A: () => si,
```

#### 347. `bundles/bloxd.io/main.js` (Changed code · before: `L10703` → after: `L10725-L10726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10725-L10726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10725-L10726) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10703)

```diff
-             F: () => uz,
+             D: () => ec,
+             H: () => Jp,
```

#### 348. `bundles/bloxd.io/main.js` (Changed code · before: `L10705-L10707` → after: `L10728-L10731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10728-L10731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10728-L10731) · [Before (L10705-L10707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10705-L10707)

```diff
-             N: () => Zz,
-             Q: () => Vz,
-             S: () => qz,
+             M: () => jc,
+             O: () => Qi,
+             P: () => Ki,
+             R: () => Ni,
```

#### 349. `bundles/bloxd.io/main.js` (Changed code · before: `L10709` → after: `L10733-L10734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10733-L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10733-L10734) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10709)

```diff
-             W: () => jz
+             X: () => ic,
+             Z: () => Fi
```

#### 350. `bundles/bloxd.io/main.js` (Changed code · before: `L10738` → after: `L10763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10763) · [Before (L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10738)

```diff
-               const sD = wD?.Parent ? new KD : this;
+               const op = cp?.Parent ? new Ip : this;
```

#### 351. `bundles/bloxd.io/main.js` (Changed code · before: `L10761` → after: `L10786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10786) · [Before (L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10761)

```diff
-               super(`Encountered unidirectional transform during encode: ${DD}`), this.name = "ZodEncodeError"
+               super(`Encountered unidirectional transform during encode: ${pp}`), this.name = "ZodEncodeError"
```

#### 352. `bundles/bloxd.io/main.js` (Changed code · before: `L10905` → after: `L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10934) · [Before (L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10905)

```diff
-             return "string" === typeof DD ? DD : DD?.message
+             return "string" === typeof pp ? pp : pp?.message
```

#### 353. `bundles/bloxd.io/main.js` (Changed code · before: `L10939` → after: `L10972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10972) · [Before (L10939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10939)

```diff
-             for (const pD of wD) "number" === typeof pD ? zD.push(`[${pD}]`) : "symbol" === typeof pD ? zD.push(`[${JSON.stringify(String(pD))}]`) : /[^\w$]/.test(pD) ? zD.push(`[${JSON.stringify(pD)}]`) : (zD.length && zD.push("."), zD.push(pD));
+             for (const Op of cp) "number" === typeof Op ? ip.push(`[${Op}]`) : "symbol" === typeof Op ? ip.push(`[${JSON.stringify(String(Op))}]`) : /[^\w$]/.test(Op) ? ip.push(`[${JSON.stringify(Op)}]`) : (ip.length && ip.push("."), ip.push(Op));
```

#### 354. `bundles/bloxd.io/main.js` (Changed code · before: `L10946` → after: `L10979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L10979) · [Before (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L10946)

```diff
-             for (const pD of wD) zD.push(`\u2716 ${pD.message}`), pD.path?.length && zD.push(`  \u2192 at ${bD(pD.path)}`);
+             for (const Op of cp) ip.push(`\u2716 ${Op.message}`), Op.path?.length && ip.push(`  \u2192 at ${Qp(Op.path)}`);
```

#### 355. `bundles/bloxd.io/main.js` (Changed code · before: `L11145` → after: `L11224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11224) · [Before (L11145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11145)

```diff
-               vD.init(DD, zD), DD._zod.pattern = [...DD?._zod.bag?.patterns ?? []].pop() ?? (wD = DD._zod.bag, new RegExp(`^${wD?`[\\s\\S]{${wD?.minimum??0},${wD?.maximum??""}}`:"[\\s\\S]*"}$`)), DD._zod.parse = (wD, pD) => {
+               Vp.init(pp, ip), pp._zod.pattern = [...pp?._zod.bag?.patterns ?? []].pop() ?? (cp = pp._zod.bag, new RegExp(`^${cp?`[\\s\\S]{${cp?.minimum??0},${cp?.maximum??""}}`:"[\\s\\S]*"}$`)), pp._zod.parse = (cp, Op) => {
```

#### 356. `bundles/bloxd.io/main.js` (Changed code · before: `L11239` → after: `L11318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11318) · [Before (L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11239)

```diff
-               if (!DD.shape?.[sD]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${sD}": expected a Zod schema`);
+               if (!pp.shape?.[op]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${op}": expected a Zod schema`);
```

#### 357. `bundles/bloxd.io/main.js` (Changed code · before: `L11350` → after: `L11429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11429) · [Before (L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11350)

```diff
-                 return new RegExp(`^(${DD.map((DD=>AD(DD.source))).join("|")})$`)
+                 return new RegExp(`^(${pp.map((pp=>Pp(pp.source))).join("|")})$`)
```

#### 358. `bundles/bloxd.io/main.js` (Changed code · before: `L11380` → after: `L11459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11459) · [Before (L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11380)

```diff
-                 if (!pD || 0 === Object.keys(pD).length) throw new Error(`Invalid discriminated union option at index "${zD.options.indexOf(wD)}"`);
+                 if (!Op || 0 === Object.keys(Op).length) throw new Error(`Invalid discriminated union option at index "${ip.options.indexOf(cp)}"`);
```

#### 359. `bundles/bloxd.io/main.js` (Changed code · before: `L11393` → after: `L11472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11472) · [Before (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11393)

```diff
-                 if (!DD || 0 === DD.size) throw new Error(`Invalid discriminated union option at index "${zD.options.indexOf(pD)}"`);
+                 if (!pp || 0 === pp.size) throw new Error(`Invalid discriminated union option at index "${ip.options.indexOf(Op)}"`);
```

#### 360. `bundles/bloxd.io/main.js` (Changed code · before: `L11395` → after: `L11474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11474) · [Before (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11395)

```diff
-                   if (wD.has(zD)) throw new Error(`Duplicate discriminator value "${String(zD)}"`);
+                   if (cp.has(ip)) throw new Error(`Duplicate discriminator value "${String(ip)}"`);
```

#### 361. `bundles/bloxd.io/main.js` (Changed code · before: `L11497` → after: `L11576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11576) · [Before (L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11497)

```diff
-               DD._zod.values = pD, DD._zod.pattern = new RegExp(`^(${wD.filter((DD=>MD.has(typeof DD))).map((DD=>"string"===typeof DD?OD(DD):DD.toString())).join("|")})$`), DD._zod.parse = (zD, sD) => {
+               pp._zod.values = Op, pp._zod.pattern = new RegExp(`^(${cp.filter((pp=>dp.has(typeof pp))).map((pp=>"string"===typeof pp?ep(pp):pp.toString())).join("|")})$`), pp._zod.parse = (ip, op) => {
```

#### 362. `bundles/bloxd.io/main.js` (Changed code · before: `L11510` → after: `L11589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11589) · [Before (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11510)

```diff
-               DD._zod.values = wD, DD._zod.pattern = new RegExp(`^(${zD.values.map((DD=>"string"===typeof DD?OD(DD):DD?OD(DD.toString()):String(DD))).join("|")})$`), DD._zod.parse = (pD, sD) => {
+               pp._zod.values = cp, pp._zod.pattern = new RegExp(`^(${ip.values.map((pp=>"string"===typeof pp?ep(pp):pp?ep(pp.toString()):String(pp))).join("|")})$`), pp._zod.parse = (Op, op) => {
```

#### 363. `bundles/bloxd.io/main.js` (Changed code · before: `L11525` → after: `L11604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11604) · [Before (L11525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11525)

```diff
-                   return (rD instanceof Promise ? rD : Promise.resolve(rD)).then((DD => (wD.value = DD, wD)))
+                   return (Sp instanceof Promise ? Sp : Promise.resolve(Sp)).then((pp => (cp.value = pp, cp)))
```

#### 364. `bundles/bloxd.io/main.js` (Changed code · before: `L11541` → after: `L11620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11620) · [Before (L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11541)

```diff
-                 return DD ? new RegExp(`^(${AD(DD.source)})?$`) : void 0
+                 return pp ? new RegExp(`^(${Pp(pp.source)})?$`) : void 0
```

#### 365. `bundles/bloxd.io/main.js` (Changed code · before: `L11547` → after: `L11626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11626) · [Before (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11547)

```diff
-                 return void 0 === DD.value ? DD : zD.innerType._zod.run(DD, wD)
+                 return void 0 === pp.value ? pp : ip.innerType._zod.run(pp, cp)
```

#### 366. `bundles/bloxd.io/main.js` (Changed code · before: `L11553-L11554` → after: `L11632-L11633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11632-L11633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11632-L11633) · [Before (L11553-L11554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11553-L11554)

```diff
-                 return DD ? new RegExp(`^(${AD(DD.source)}|null)$`) : void 0
-               })), fD(DD._zod, "values", (() => zD.innerType._zod.values ? new Set([...zD.innerType._zod.values, null]) : void 0)), DD._zod.parse = (DD, wD) => null === DD.value ? DD : zD.innerType._zod.run(DD, wD)
+                 return pp ? new RegExp(`^(${Pp(pp.source)}|null)$`) : void 0
+               })), yp(pp._zod, "values", (() => ip.innerType._zod.values ? new Set([...ip.innerType._zod.values, null]) : void 0)), pp._zod.parse = (pp, cp) => null === pp.value ? pp : ip.innerType._zod.run(pp, cp)
```

#### 367. `bundles/bloxd.io/main.js` (Changed code · before: `L11568-L11572` → after: `L11647-L11663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11647-L11663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11647-L11663) · [Before (L11568-L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11568-L11572)

```diff
-           const nz = pD("$ZodPipe", ((DD, zD) => {
-             vD.init(DD, zD), fD(DD._zod, "values", (() => zD.in._zod.values)), fD(DD._zod, "optin", (() => zD.in._zod.optin)), fD(DD._zod, "optout", (() => zD.out._zod.optout)), fD(DD._zod, "propValues", (() => zD.in._zod.propValues)), DD._zod.parse = (DD, wD) => {
-               if ("backward" === wD.direction) {
-                 const pD = zD.out._zod.run(DD, wD);
-                 return pD instanceof Promise ? pD.then((DD => Mz(DD, zD.in, wD))) : Mz(pD, zD.in, wD)
+           const ki = Op("$ZodCatch", ((pp, ip) => {
+               Vp.init(pp, ip), yp(pp._zod, "optin", (() => ip.innerType._zod.optin)), yp(pp._zod, "optout", (() => ip.innerType._zod.optout)), yp(pp._zod, "values", (() => ip.innerType._zod.values)), pp._zod.parse = (pp, cp) => {
+                 if ("backward" === cp.direction) return ip.innerType._zod.run(pp, cp);
+                 const Op = ip.innerType._zod.run(pp, cp);
+                 return Op instanceof Promise ? Op.then((Op => (pp.value = Op.value, Op.issues.length && (pp.value = ip.catchValue({
+                   ...pp,
+                   error: {
+                     issues: Op.issues.map((pp => Mp(pp, cp, xp())))
+                   },
+                   input: pp.value
+                 }), pp.issues = []), pp))) : (pp.value = Op.value, Op.issues.length && (pp.value = ip.catchValue({
+                   ...pp,
+                   error: {
+                     issues: Op.issues.map((pp => Mp(pp, cp, xp())))
+                   },
+                   input: pp.value
+ ... (1 more added lines; see GitHub link above)
```

#### 368. `bundles/bloxd.io/main.js` (Changed code · before: `L11574-L11577` → after: `L11665-L11675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11665-L11675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11665-L11675) · [Before (L11574-L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11574-L11577)

```diff
-               const pD = zD.in._zod.run(DD, wD);
-               return pD instanceof Promise ? pD.then((DD => Mz(DD, zD.out, wD))) : Mz(pD, zD.out, wD)
-             }
-           }));
+             })),
+             mi = Op("$ZodPipe", ((pp, ip) => {
+               Vp.init(pp, ip), yp(pp._zod, "values", (() => ip.in._zod.values)), yp(pp._zod, "optin", (() => ip.in._zod.optin)), yp(pp._zod, "optout", (() => ip.out._zod.optout)), yp(pp._zod, "propValues", (() => ip.in._zod.propValues)), pp._zod.parse = (pp, cp) => {
+                 if ("backward" === cp.direction) {
+                   const Op = ip.out._zod.run(pp, cp);
+                   return Op instanceof Promise ? Op.then((pp => Ri(pp, ip.in, cp))) : Ri(Op, ip.in, cp)
+                 }
+                 const Op = ip.in._zod.run(pp, cp);
+                 return Op instanceof Promise ? Op.then((pp => Ri(pp, ip.out, cp))) : Ri(Op, ip.out, cp)
+               }
+             }));
```

#### 369. `bundles/bloxd.io/main.js` (Changed code · before: `L11585` → after: `L11683-L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11683-L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11683-L11715) · [Before (L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11585)

```diff
-           var Oz;
+           const qi = Op("$ZodCustom", ((pp, ip) => {
+             Gp.init(pp, ip), Vp.init(pp, ip), pp._zod.parse = (pp, ip) => pp, pp._zod.check = cp => {
+               const Op = cp.value,
+                 op = ip.Py(Op);
+               if (op instanceof Promise) return op.then((ip => Mi(ip, cp, Op, pp)));
+               Mi(op, cp, Op, pp)
+             }
+           }));
+ 
+           function Mi(pp, ip, cp, Op) {
+             if (!pp) {
+               const pp = {
+                 code: "custom",
+                 input: cp,
+                 inst: Op,
+                 path: [...Op._zod.def.path ?? []],
+ ... (17 more added lines; see GitHub link above)
```

#### 370. `bundles/bloxd.io/main.js` (Changed code · before: `L11613` → after: `L11743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11743) · [Before (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11613)

```diff
-                 return Object.keys(pD).length ? pD : void 0
+                 return Object.keys(Op).length ? Op : void 0
```

#### 371. `bundles/bloxd.io/main.js` (Changed code · before: `L11823` → after: `L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L11969) · [Before (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11823)

```diff
-               values: Array.isArray(DD) ? DD : [DD],
+               values: Array.isArray(pp) ? pp : [pp],
```

#### 372. `bundles/bloxd.io/main.js` (Changed code · before: `L11884` → after: `L12041-L12055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12041-L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12041-L12055) · [Before (L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11884)

```diff
-         }, , , , (DD, zD, wD) => {
+           const uc = Op("ZodMiniCustom", ((pp, ip) => {
+             qi.init(pp, ip), Ji.init(pp, ip)
+           }));
+ 
+           function jc(pp) {
+             return function(pp, ip, cp) {
+               return new pp({
+                 type: "custom",
+                 check: "custom",
+                 Py: ip,
+                 ...kp(cp)
+               })
+             }(uc, pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
+           }
+         }, , , , , , (pp, ip, cp) => {
```

#### 373. `bundles/bloxd.io/main.js` (Changed code · before: `L11886-L11890` → after: `L12057-L12061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12057-L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12057-L12061) · [Before (L11886-L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11886-L11890)

```diff
-             d: () => gD,
-             f: () => LD,
-             j: () => rD,
-             k: () => RD,
-             n: () => cD
+             b: () => Yp,
+             e: () => xp,
+             i: () => Sp,
+             m: () => Dp,
+             p: () => Lp
```

#### 374. `bundles/bloxd.io/main.js` (Changed code · before: `L11892-L11898` → after: `L12063-L12069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12063-L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12063-L12069) · [Before (L11892-L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11892-L11898)

```diff
-           var pD = wD(145),
-             sD = wD(152);
-           const KD = pD.u({
-               safeArea: sD.g,
-               notificationCanAsk: pD.i(),
-               pushToken: pD.o(pD.Q()),
-               privacyOptionsRequired: pD.o(pD.i())
+           var Op = cp(139),
+             op = cp(147);
+           const Ip = Op.A({
+               safeArea: op.h,
+               notificationCanAsk: Op.e(),
+               pushToken: Op.v(Op.R()),
+               privacyOptionsRequired: Op.v(Op.e())
```

#### 375. `bundles/bloxd.io/main.js` (Changed code · before: `L11900-L11905` → after: `L12071-L12076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12071-L12076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12071-L12076) · [Before (L11900-L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11900-L11905)

```diff
-             rD = pD.u({
-               protocol: pD.q(),
-               platform: pD.l(["ios", "android"]),
-               appVersion: pD.Q(),
-               build: pD.Q(),
-               capabilities: pD.F(pD.Q(), pD.q())
+             Sp = Op.A({
+               protocol: Op.w(),
+               platform: Op.k(["ios", "android"]),
+               appVersion: Op.R(),
+               build: Op.R(),
+               capabilities: Op.J(Op.R(), Op.w())
```

#### 376. `bundles/bloxd.io/main.js` (Changed code · before: `L11910-L11912` → after: `L12081-L12083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12081-L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12081-L12083) · [Before (L11910-L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11910-L11912)

```diff
-             cD = pD.u({
-               protocols: pD.h(pD.q()),
-               webVersion: pD.Q()
+             Lp = Op.A({
+               protocols: Op.d(Op.w()),
+               webVersion: Op.R()
```

#### 377. `bundles/bloxd.io/main.js` (Changed code · before: `L11920` → after: `L12091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12091) · [Before (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11920)

```diff
-         }, , , (DD, zD, wD) => {
+         }, , (pp, ip, cp) => {
```

#### 378. `bundles/bloxd.io/main.js` (Changed code · before: `L11924` → after: `L12095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12095) · [Before (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11924)

```diff
-             g: () => sD
+             h: () => op
```

#### 379. `bundles/bloxd.io/main.js` (Changed code · before: `L11926-L11931` → after: `L12097-L12102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12097-L12102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12097-L12102) · [Before (L11926-L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11926-L11931)

```diff
-           var pD = wD(145);
-           const sD = pD.u({
-               top: pD.q(),
-               right: pD.q(),
-               bottom: pD.q(),
-               left: pD.q()
+           var Op = cp(139);
+           const op = Op.A({
+               top: Op.w(),
+               right: Op.w(),
+               bottom: Op.w(),
+               left: Op.w()
```

#### 380. `bundles/bloxd.io/main.js` (Changed code · before: `L11934-L11935` → after: `L12105-L12106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12105-L12106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12105-L12106) · [Before (L11934-L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11934-L11935)

```diff
-               setOrientation: pD.u({
-                 orientation: pD.l(["portrait", "landscape", "default"])
+               setOrientation: Op.A({
+                 orientation: Op.k(["portrait", "landscape", "default"])
```

#### 381. `bundles/bloxd.io/main.js` (Changed code · before: `L11941` → after: `L12112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12112) · [Before (L11941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11941)

```diff
-         }, , , , , (DD, zD, wD) => {
+         }, , , , , , , , , (pp, ip, cp) => {
```

#### 382. `bundles/bloxd.io/main.js` (Changed code · before: `L11954` → after: `L12125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12125) · [Before (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11954)

```diff
-             A: () => sD,
+             C: () => Ap,
```

#### 383. `bundles/bloxd.io/main.js` (Changed code · before: `L11956-L11957` → after: `L12127-L12129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12127-L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12127-L12129) · [Before (L11956-L11957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11956-L11957)

```diff
-             G: () => AD,
-             J: () => UD,
+             F: () => Dp,
+             H: () => yp,
+             L: () => Up,
```

#### 384. `bundles/bloxd.io/main.js` (Changed code · before: `L11959-L11964` → after: `L12131-L12134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12131-L12134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12131-L12134) · [Before (L11959-L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L11959-L11964)

```diff
-             R: () => ID,
-             T: () => BD,
-             U: () => hD,
-             c: () => cD,
-             f: () => GD,
-             j: () => fD,
+             e: () => Lp,
+             h: () => wp,
+             i: () => Wp,
+             k: () => Yp,
```

#### 385. `bundles/bloxd.io/main.js` (Changed code · before: `L12025` → after: `L12196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12196) · [Before (L12025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12025)

```diff
-             return DD.CHAT_MSG = "default", DD.PLAYER_JOIN = "playerJoin", DD.PLAYER_REPORT = "playerReport", DD.PLAYER_NAME_CHANGE = "changeName", DD.ADMIN_ACTIVITY = "adminActivity", DD.MODERATION = "moderation", DD.LOBBY_INFO = "lobbyInfo", DD.TRIBE_NAME = "tribeName", DD.TRIB … [truncated]
+             return pp.CHAT_MSG = "default", pp.PLAYER_JOIN = "playerJoin", pp.PLAYER_REPORT = "playerReport", pp.PLAYER_NAME_CHANGE = "changeName", pp.ADMIN_ACTIVITY = "adminActivity", pp.MODERATION = "moderation", pp.LOBBY_INFO = "lobbyInfo", pp.TRIBE_NAME = "tribeName", pp.TRIB … [truncated]
```

#### 386. `bundles/bloxd.io/main.js` (Changed code · before: `L12031` → after: `L12202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12202) · [Before (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12031)

```diff
-         }, , , , (DD, zD, wD) => {
+         }, , , , , , , , , (pp, ip, cp) => {
```

#### 387. `bundles/bloxd.io/main.js` (Changed code · before: `L12033` → after: `L12204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12204) · [Before (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12033)

```diff
-             e: () => cD
+             c: () => Lp
```

#### 388. `bundles/bloxd.io/main.js` (Changed code · before: `L12035-L12038` → after: `L12206-L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12206-L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12206-L12209) · [Before (L12035-L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12035-L12038)

```diff
-           var pD = wD(149),
-             sD = wD(137),
-             KD = wD(35),
-             rD = wD(113);
+           var Op = cp(145),
+             op = cp(136),
+             Ip = cp(44),
+             Sp = cp(108);
```

#### 389. `bundles/bloxd.io/main.js` (Changed code · before: `L12043` → after: `L12214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12214) · [Before (L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12043)

```diff
-               rD.currentUrl.removeSearchParam(LD), DD ? KD.k.setItem(LD, "1") : KD.k.removeItem(LD)
+               Sp.currentUrl.removeSearchParam(xp), pp ? Ip.l.setItem(xp, "1") : Ip.l.removeItem(xp)
```

#### 390. `bundles/bloxd.io/main.js` (Changed code · before: `L12046` → after: `L12217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12217) · [Before (L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12046)

```diff
-             return null !== DD ? (0, pD.k)(DD, "appCheck") : !!(0, sD.e)() || "1" === KD.k.getItem(LD) && void 0 !== window.ReactNativeWebView
+             return null !== pp ? (0, Op.m)(pp, "appCheck") : !!(0, op.g)() || "1" === Ip.l.getItem(xp) && void 0 !== window.ReactNativeWebView
```

#### 391. `bundles/bloxd.io/main.js` (Changed code · before: `L12048` → after: `L12219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12219) · [Before (L12048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12048)

```diff
-         }, , , , (DD, zD, wD) => {
+         }, , , , , , , (pp, ip, cp) => {
```

#### 392. `bundles/bloxd.io/main.js` (Changed code · before: `L12050-L12054` → after: `L12221-L12225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12221-L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12221-L12225) · [Before (L12050-L12054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12050-L12054)

```diff
-             d: () => AD,
-             h: () => gD,
-             j: () => RD,
-             m: () => UD,
-             q: () => ID,
+             e: () => Ap,
+             g: () => Yp,
+             k: () => Dp,
+             n: () => Pp,
+             o: () => yp,
```

#### 393. `bundles/bloxd.io/main.js` (Changed code · before: `L12056` → after: `L12227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12227) · [Before (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12056)

```diff
-             t: () => fD
+             u: () => Wp
```

#### 394. `bundles/bloxd.io/main.js` (Changed code · before: `L12058` → after: `L12229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12229) · [Before (L12058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12058)

```diff
-           var pD = wD(173);
+           var Op = cp(176);
```

#### 395. `bundles/bloxd.io/main.js` (Changed code · before: `L12075` → after: `L12246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12246) · [Before (L12075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12075)

```diff
-             const zD = `${DD.vendor} ${DD.renderer}`;
+             const ip = `${pp.vendor} ${pp.renderer}`;
```

#### 396. `bundles/bloxd.io/main.js` (Changed code · before: `L12080` → after: `L12251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12251) · [Before (L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12080)

```diff
-             return "vm" === DD || pD.j.includes(DD)
+             return "vm" === pp || Op.f.includes(pp)
```

#### 397. `bundles/bloxd.io/main.js` (Changed code · before: `L12090-L12091` → after: `L12261-L12262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12261-L12262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12261-L12262) · [Before (L12090-L12091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12090-L12091)

```diff
-             (null !== (wD = DD.antiAliasing) && void 0 !== wD ? wD : zD.antiAliasing) && zD.antiAliasing && (sD.antiAliasing = DD.antiAliasing);
-             const KD = null !== (pD = DD.pixelScale) && void 0 !== pD ? pD : zD.pixelScale;
+             (null !== (cp = pp.antiAliasing) && void 0 !== cp ? cp : ip.antiAliasing) && ip.antiAliasing && (op.antiAliasing = pp.antiAliasing);
+             const Ip = null !== (Op = pp.pixelScale) && void 0 !== Op ? Op : ip.pixelScale;
```

#### 398. `bundles/bloxd.io/main.js` (Changed code · before: `L12098-L12099` → after: `L12269-L12270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12269-L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12269-L12270) · [Before (L12098-L12099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12098-L12099)

```diff
-             void 0 !== zD.antiAliasing && DD.antiAliasing === fD.antiAliasing && (pD.antiAliasing = null !== (sD = zD.antiAliasing) && void 0 !== sD ? sD : wD.antiAliasing);
-             void 0 !== zD.pixelScale && DD.pixelScale === fD.pixelScale && (pD.pixelScale = null !== (KD = zD.pixelScale) && void 0 !== KD ? KD : wD.pixelScale);
+             void 0 !== ip.antiAliasing && pp.antiAliasing === Wp.antiAliasing && (Op.antiAliasing = null !== (op = ip.antiAliasing) && void 0 !== op ? op : cp.antiAliasing);
+             void 0 !== ip.pixelScale && pp.pixelScale === Wp.pixelScale && (Op.pixelScale = null !== (Ip = ip.pixelScale) && void 0 !== Ip ? Ip : cp.pixelScale);
```

#### 399. `bundles/bloxd.io/main.js` (Changed code · before: `L12102` → after: `L12273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12273) · [Before (L12102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12102)

```diff
-         }, , , , , , , , (DD, zD, wD) => {
+         }, , , , (pp, ip, cp) => {
```

#### 400. `bundles/bloxd.io/main.js` (Changed code · before: `L12108` → after: `L12277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12277) · [Before (L12108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12108)

```diff
-             G: () => ID,
+             I: () => yp,
```

#### 401. `bundles/bloxd.io/main.js` (Changed code · before: `L12110` → after: `L12279-L12280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12279-L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12279-L12280) · [Before (L12110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12110)

```diff
-             e: () => UD,
+             b: () => Pp,
+             c: () => Ap,
```

#### 402. `bundles/bloxd.io/main.js` (Changed code · before: `L12112-L12115` → after: `L12282-L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12282-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12282-L12286) · [Before (L12112-L12115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12112-L12115)

```diff
-             j: () => hD,
-             m: () => cD,
-             p: () => gD,
-             t: () => RD,
+             i: () => Lp,
+             l: () => Yp,
+             n: () => Dp,
+             q: () => Op,
+             u: () => xp,
```

#### 403. `bundles/bloxd.io/main.js` (Changed code · before: `L12133` → after: `L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12304) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12133)

```diff
-             ID = ["none", "not_requested", "webgl_holdback", "off_after_loss", "old_intel_driver", "intel_gen9", "gpu_class_webgl", "gpu_wasm_arm", "safari_26", "no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "load_failed", "start_no_adapter", "device_failed", … [truncated]
+             yp = ["none", "compatibility_mode", "not_requested", "webgl_holdback", "off_after_loss", "old_intel_driver", "intel_gen9", "gpu_class_webgl", "gpu_wasm_arm", "safari_26", "no_webgpu_api", "no_adapter", "software_adapter", "adapter_error", "load_failed", "start_no_adap … [truncated]
```

#### 404. `bundles/bloxd.io/main.js` (Changed code · before: `L12140` → after: `L12311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12311) · [Before (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12140)

```diff
-             E: () => sD,
+             F: () => xp,
```

#### 405. `bundles/bloxd.io/main.js` (Changed code · before: `L12142-L12147` → after: `L12313-L12320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12313-L12320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12313-L12320) · [Before (L12142-L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12142-L12147)

```diff
-             H: () => LD,
-             b: () => AD,
-             f: () => pD,
-             h: () => UD,
-             j: () => cD,
-             n: () => fD,
+             I: () => Ip,
+             L: () => Up,
+             P: () => Lp,
+             d: () => Pp,
+             g: () => op,
+             k: () => Wp,
+             m: () => Yp,
+             p: () => yp,
```

#### 406. `bundles/bloxd.io/main.js` (Changed code · before: `L12165-L12166` → after: `L12339-L12345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12339-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12339-L12345) · [Before (L12165-L12166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12165-L12166)

```diff
-             BD = ["iphone_6gb", "iphone", "ipad_m", "ipad", "not_ios", "_unloaded"]
-         }, , , , (DD, zD, wD) => {
+             wp = ["iphone_6gb", "iphone", "ipad_m", "ipad", "not_ios", "_unloaded"],
+             vp = ["ad", "no_ad", "_unloaded"];
+ 
+           function tp(pp) {
+             return Op.C.some((ip => ip === pp))
+           }
+         }, , , (pp, ip, cp) => {
```

#### 407. `bundles/bloxd.io/main.js` (Changed code · before: `L12169-L12173` → after: `L12349-L12350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12349-L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12349-L12350) · [Before (L12169-L12173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12169-L12173)

```diff
-             F: () => gD,
-             G: () => XD,
-             I: () => QD,
-             J: () => CD,
-             K: () => ED,
+             E: () => Xp,
+             H: () => Ep,
```

#### 408. `bundles/bloxd.io/main.js` (Changed code · before: `L12181-L12182` → after: `L12360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12360) · [Before (L12181-L12182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12181-L12182)

```diff
-             bb: () => lD,
-             cb: () => OD,
+             db: () => qp,
```

#### 409. `bundles/bloxd.io/main.js` (Changed code · before: `L12185-L12188` → after: `L12363-L12370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12363-L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12363-L12370) · [Before (L12185-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12185-L12188)

```diff
-             i: () => LD,
-             ib: () => GD,
-             l: () => iD,
-             n: () => RD,
+             h: () => xp,
+             hb: () => yp,
+             j: () => ap,
+             kb: () => jp,
+             m: () => Dp,
+             mb: () => Sp,
+             pb: () => ep,
+             q: () => Lp,
```

#### 410. `bundles/bloxd.io/main.js` (Changed code · before: `L12190-L12191` → after: `L12372-L12373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12372-L12373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12372-L12373) · [Before (L12190-L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12190-L12191)

```diff
-             t: () => bD,
-             v: () => jD,
+             u: () => fp,
+             w: () => Bp,
```

#### 411. `bundles/bloxd.io/main.js` (Changed code · before: `L12194-L12196` → after: `L12376-L12378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12376-L12378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12376-L12378) · [Before (L12194-L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12194-L12196)

```diff
-           var pD = wD(157),
-             sD = wD(173),
-             KD = wD(193);
+           var Op = cp(156),
+             op = cp(176),
+             Ip = cp(190);
```

#### 412. `bundles/bloxd.io/main.js` (Changed code · before: `L12207` → after: `L12390-L12395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12390-L12395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12390-L12395) · [Before (L12207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12207)

```diff
-             RD = ["shop.buy_pack", "shop.gift_pack", "shop.buy_premium_currency", "auth.login_provider", "auth.login_done", "auth.login_failed", "home.create_game_cta", "home.browser_tip", "social.open_menu", "social.friend_join", "social.add_friend", "social.remove_friend", "soc … [truncated]
+             Dp = ["shop.buy_pack", "shop.gift_pack", "shop.buy_premium_currency", "auth.login_provider", "auth.login_done", "auth.login_failed", "home.create_game_cta", "home.browser_tip", "social.open_menu", "social.friend_join", "social.add_friend", "social.remove_friend", "soc … [truncated]
+             Ap = ["popup", "click", "popup_click"],
+             Pp = ["pending", "a", "a_b", "b", "appCheck", "appCheck_b"],
+             Wp = "shown",
+             yp = "nocode",
+             Up = Pp.flatMap((pp => [`${Wp}:${pp}:popup`, `${Wp}:${pp}:click`, `${yp}:${pp}`, ...Ap.map((ip => `${yp}:${pp}:${ip}`))])),
```

#### 413. `bundles/bloxd.io/main.js` (Changed code · before: `L12210` → after: `L12398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12398) · [Before (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12210)

```diff
-             fD = AD.flatMap((DD => UD.map((zD => `${DD}:${zD}`)))),
+             tp = wp.flatMap((pp => vp.map((ip => `${pp}:${ip}`)))),
```

#### 414. `bundles/bloxd.io/main.js` (Changed code · before: `L12214` → after: `L12402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12402) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12214)

```diff
-             }, ((DD, zD) => `queued_${zD}`));
+             }, ((pp, ip) => `queued_${ip}`));
```

#### 415. `bundles/bloxd.io/main.js` (Changed code · before: `L12217` → after: `L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12405) · [Before (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12217)

```diff
-             return `queued_${Math.min(DD,ID)}`
+             return `queued_${Math.min(pp,Hp)}`
```

#### 416. `bundles/bloxd.io/main.js` (Changed code · before: `L12219-L12221` → after: `L12407-L12410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12407-L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12407-L12410) · [Before (L12219-L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12219-L12221)

```diff
-           const hD = ["seat_timeout", "seat_lost", "socket_timeout_unopened", "socket_unopened", "socket_timeout", "socket_closed"],
-             nD = ["cached", "a", "b", "a_b", "appCheck", "appCheck_b", ...["blocked", "blocked_ipv6", "direct_reachable", "cf_unreachable", "cf_join", "cf_join_failed", ...hD.map((DD => `cf_join_failed:${DD}`)), "cf_join_refused", "cf_join_left"], "direct", "cf", "direct_failed", … [truncated]
-             MD = (KD.g, pD.T, sD.E, 20),
+           const jp = ["wait_link", "wait_terrain", "wait_held", "wait_other", "wait_gaps", "wait_gap_ms", "wait_startup", "wait_total"],
+             kp = ["seat_timeout", "seat_lost", "socket_timeout_unopened", "socket_unopened", "socket_timeout", "socket_closed"],
+             mp = ["cached", "a", "b", "a_b", "appCheck", "appCheck_b", ...Up, ...["blocked", "blocked_ipv6", "direct_reachable", "cf_unreachable", "cf_join", "cf_join_failed", ...kp.map((pp => `cf_join_failed:${pp}`)), "cf_join_refused", "cf_join_left", "alias_recovery_on", "alia … [truncated]
+             Rp = (Ip.f, Op.L, op.D, 20),
```

#### 417. `bundles/bloxd.io/main.js` (Changed code · before: `L12232` → after: `L12421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12421) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12232)

```diff
-             bD = new RegExp(`^[A-Za-z0-9_.:-]{0,${TD}}$`),
+             Tp = new RegExp(`^[A-Za-z0-9_.:-]{0,${Np}}$`),
```

#### 418. `bundles/bloxd.io/main.js` (Changed code · before: `L12240` → after: `L12429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12429) · [Before (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12240)

```diff
-         }, , , , , , , (DD, zD, wD) => {
+         }, , (pp, ip, cp) => {
```

#### 419. `bundles/bloxd.io/main.js` (Changed code · before: `L12243` → after: `L12432-L12433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12432-L12433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12432-L12433) · [Before (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12243)

```diff
-             g: () => pD,
+             f: () => Op,
+             h: () => op,
```

#### 420. `bundles/bloxd.io/main.js` (Changed code · before: `L12246-L12247` → after: `L12436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12436) · [Before (L12246-L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12246-L12247)

```diff
-             m: () => rD,
-             p: () => cD
+             n: () => Lp
```

#### 421. `bundles/bloxd.io/main.js` (Changed code · before: `L12251-L12264` → after: `L12440-L12453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12440-L12453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12440-L12453) · [Before (L12251-L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12251-L12264)

```diff
-               operatingSystem: "Cc",
-               platformType: "Qc",
-               gpuVendor: "Xc",
-               gpuFamily: "dc",
-               softwareRenderer: "ec",
-               iosDeviceClass: "Yc",
-               deviceMemory: "vc",
-               screenResolutionBand: "qc",
-               refreshHzBand: "Fc",
-               renderBackend: "Vc",
-               webgpuFallbackReason: "Zc",
-               antiAliasing: "Hc",
-               shaderPackActive: "Nc",
-               shaderPackShadows: "ac"
+               operatingSystem: "OD",
+               platformType: "VY",
+               gpuVendor: "pD",
+               gpuFamily: "YD",
+               softwareRenderer: "tD",
+               iosDeviceClass: "mD",
+               deviceMemory: "uD",
+               screenResolutionBand: "qD",
+               refreshHzBand: "kD",
+               renderBackend: "iD",
+               webgpuFallbackReason: "yD",
+               antiAliasing: "RD",
+               shaderPackActive: "WD",
+               shaderPackShadows: "dD"
```

#### 422. `bundles/bloxd.io/main.js` (Changed code · before: `L12270` → after: `L12459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12459) · [Before (L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12270)

```diff
-         }, , , , (DD, zD, wD) => {
+         }, , , , , (pp, ip, cp) => {
```

#### 423. `bundles/bloxd.io/main.js` (Changed code · before: `L12273-L12274` → after: `L12462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12462) · [Before (L12273-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12273-L12274)

```diff
-             f: () => rD,
-             h: () => gD,
+             g: () => Sp,
```

#### 424. `bundles/bloxd.io/main.js` (Changed code · before: `L12277` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12466) · [Before (L12277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12277)

```diff
-             o: () => cD
+             q: () => Lp
```

#### 425. `bundles/bloxd.io/main.js` (Changed code · before: `L12279-L12280` → after: `L12468-L12469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12468-L12469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12468-L12469) · [Before (L12279-L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12279-L12280)

```diff
-           var pD = wD(206),
-             sD = wD(225);
+           var Op = cp(203),
+             op = cp(214);
```

#### 426. `bundles/bloxd.io/main.js` (Changed code · before: `L12292-L12293` → after: `L12481-L12482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12481-L12482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12481-L12482) · [Before (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12292-L12293)

```diff
-               mG: .5,
-               eG: 1.8,
+               Kw: .5,
+               Vw: 1.8,
```

#### 427. `bundles/bloxd.io/main.js` (Changed code · before: `L12303` → after: `L12492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12492) · [Before (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12303)

```diff
-               CI: 32,
+               Qy: 32,
```

#### 428. `bundles/bloxd.io/main.js` (Changed code · before: `L12310` → after: `L12499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12499) · [Before (L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12310)

```diff
-               oG: !0,
+               pv: !0,
```

#### 429. `bundles/bloxd.io/main.js` (Changed code · before: `L12314` → after: `L12503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12503) · [Before (L12314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12314)

```diff
-               aG: 6,
+               iv: 6,
```

#### 430. `bundles/bloxd.io/main.js` (Changed code · before: `L12349` → after: `L12538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12538) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12349)

```diff
-               VU: 3,
+               QP: 3,
```

#### 431. `bundles/bloxd.io/main.js` (Changed code · before: `L12351` → after: `L12540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12540) · [Before (L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12351)

```diff
-               discordProductionId: sD.d,
+               discordProductionId: op.c,
```

#### 432. `bundles/bloxd.io/main.js` (Changed code · before: `L12354-L12355` → after: `L12543-L12544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12543-L12544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12543-L12544) · [Before (L12354-L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12354-L12355)

```diff
-               turnstileDisabled: !1 === pD.e.greenlightChecksEnabled,
-               recaptchaDisabled: !1 === pD.e.greenlightChecksEnabled,
+               turnstileDisabled: !1 === Op.b.greenlightChecksEnabled,
+               recaptchaDisabled: !1 === Op.b.greenlightChecksEnabled,
```

#### 433. `bundles/bloxd.io/main.js` (Changed code · before: `L12747` → after: `L12936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12936) · [Before (L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12747)

```diff
-             if (AD.has(DD)) throw new Error(`Duplicate leave code: ${DD}`);
+             if (Ap.has(pp)) throw new Error(`Duplicate leave code: ${pp}`);
```

#### 434. `bundles/bloxd.io/main.js` (Changed code · before: `L12750` → after: `L12939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12939) · [Before (L12750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12750)

```diff
-         }, , , , , , , , , (DD, zD, wD) => {
+         }, , , , , , , , (pp, ip, cp) => {
```

#### 435. `bundles/bloxd.io/main.js` (Changed code · before: `L12752` → after: `L12941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12941) · [Before (L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12752)

```diff
-             e: () => KD
+             b: () => Ip
```

#### 436. `bundles/bloxd.io/main.js` (Changed code · before: `L12754-L12755` → after: `L12943-L12944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12943-L12944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12943-L12944) · [Before (L12754-L12755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12754-L12755)

```diff
-           var pD = wD(212),
-             sD = wD(219);
+           var Op = cp(209),
+             op = cp(212);
```

#### 437. `bundles/bloxd.io/main.js` (Changed code · before: `L12770` → after: `L12960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12960) · [Before (L12770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12770)

```diff
-           (0, sD.j)() && function(DD) {
+           (0, op.h)() && function(pp) {
```

#### 438. `bundles/bloxd.io/main.js` (Changed code · before: `L12772` → after: `L12962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12962) · [Before (L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12772)

```diff
-               const wD = (0, pD.d)({
+               const cp = (0, Op.e)({
```

#### 439. `bundles/bloxd.io/main.js` (Changed code · before: `L12776` → after: `L12966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12966) · [Before (L12776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12776)

```diff
-               if (void 0 !== wD) throw new Error(`Rename ${zD} to ${wD} in packages/shared/src/localConfigValues.ts`);
+               if (void 0 !== cp) throw new Error(`Rename ${ip} to ${cp} in packages/shared/src/localConfigValues.ts`);
```

#### 440. `bundles/bloxd.io/main.js` (Changed code · before: `L12781` → after: `L12971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12971) · [Before (L12781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12781)

```diff
-               const DD = wD(227);
+               const pp = cp(222);
```

#### 441. `bundles/bloxd.io/main.js` (Changed code · before: `L12800` → after: `L12989-L12990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12989-L12990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12989-L12990) · [Before (L12800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12800)

```diff
-             i: () => KD
+             f: () => Op,
+             h: () => Ip
```

#### 442. `bundles/bloxd.io/main.js` (Changed code · before: `L12802` → after: `L12992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12992) · [Before (L12802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12802)

```diff
-         }, , , , , , , (DD, zD, wD) => {
+         }, , , (pp, ip, cp) => {
```

#### 443. `bundles/bloxd.io/main.js` (Changed code · before: `L12804-L12805` → after: `L12994-L12995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12994-L12995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12994-L12995) · [Before (L12804-L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12804-L12805)

```diff
-             c: () => sD,
-             e: () => rD,
+             d: () => op,
+             f: () => Sp,
```

#### 444. `bundles/bloxd.io/main.js` (Changed code · before: `L12807` → after: `L12997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12997) · [Before (L12807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12807)

```diff
-             j: () => KD
+             h: () => Ip
```

#### 445. `bundles/bloxd.io/main.js` (Changed code · before: `L12809` → after: `L12999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R12999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L12999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L12999) · [Before (L12809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12809)

```diff
-           var pD = wD(225);
+           var Op = cp(214);
```

#### 446. `bundles/bloxd.io/main.js` (Changed code · before: `L12831` → after: `L13021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13021) · [Before (L12831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12831)

```diff
-               if (!gD.includes(zD)) throw new Error(`Invalid port offset "${DD}". Must be one of: ${gD.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+               if (!Yp.includes(ip)) throw new Error(`Invalid port offset "${pp}". Must be one of: ${Yp.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 447. `bundles/bloxd.io/main.js` (Changed code · before: `L12909` → after: `L13099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13099) · [Before (L12909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12909)

```diff
-             const zD = rD() ? fD : ID;
+             const ip = Sp() ? Wp : yp;
```

#### 448. `bundles/bloxd.io/main.js` (Changed code · before: `L12921` → after: `L13111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13111) · [Before (L12921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12921)

```diff
-         }, , , , , , (DD, zD, wD) => {
+         }, , (pp, ip, cp) => {
```

#### 449. `bundles/bloxd.io/main.js` (Changed code · before: `L12924` → after: `L13114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13114) · [Before (L12924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12924)

```diff
-             d: () => pD
+             c: () => Op
```

#### 450. `bundles/bloxd.io/main.js` (Changed code · before: `L12928-L12937` → after: `L13118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13118) · [Before (L12928-L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12928-L12937)

```diff
-         }, , (DD, zD, wD) => {
-           var pD = {
-             "./localConfigValues.ts.clientRelease": 234
-           };
- 
-           function sD(DD) {
-             var zD = KD(DD);
-             return wD(zD)
-           }
- 
+         }, , , , , , , , pp => {
```

#### 451. `bundles/bloxd.io/main.js` (Changed code · before: `L12939-L12943` → after: `L13120-L13121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13120-L13121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13120-L13121) · [Before (L12939-L12943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12939-L12943)

```diff
-             if (!wD.o(pD, DD)) {
-               var zD = new Error("Cannot find module '" + DD + "'");
-               throw zD.code = "MODULE_NOT_FOUND", zD
-             }
-             return pD[DD]
+             var ip = new Error("Cannot find module '" + pp + "'");
+             throw ip.code = "MODULE_NOT_FOUND", ip
```

#### 452. `bundles/bloxd.io/main.js` (Changed code · before: `L12945-L12950` → after: `L13123-L13124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13123-L13124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13123-L13124) · [Before (L12945-L12950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12945-L12950)

```diff
-           sD.keys = function() {
-             return Object.keys(pD)
-           }, sD.resolve = KD, DD.exports = sD, sD.id = 227
-         }, , , , , , , (DD, zD, wD) => {
-           DD.exports = wD.p + "static/media/localConfigValues.ts.3f6ee800434514cb12b7.clientRelease"
-         }, , (DD, zD, wD) => {
+           ip.keys = () => [], ip.resolve = ip, ip.id = 222, pp.exports = ip
+         }, , , , (pp, ip, cp) => {
```

#### 453. `bundles/bloxd.io/main.js` (Changed code · before: `L12958` → after: `L13132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13132) · [Before (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12958)

```diff
-           var pD = wD(241),
+           var Op = cp(233),
```

#### 454. `bundles/bloxd.io/main.js` (Changed code · before: `L12960` → after: `L13134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13134) · [Before (L12960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12960)

```diff
-             KD = wD(247),
+             Ip = cp(235),
```

#### 455. `bundles/bloxd.io/main.js` (Changed code · before: `L12962` → after: `L13136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13136) · [Before (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12962)

```diff
-             LD = wD(255),
+             xp = cp(241),
```

#### 456. `bundles/bloxd.io/main.js` (Changed code · before: `L12964` → after: `L13138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13138) · [Before (L12964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L12964)

```diff
-             gD = wD(262);
+             Yp = cp(249);
```

#### 457. `bundles/bloxd.io/main.js` (Changed code · before: `L13068` → after: `L13242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13242) · [Before (L13068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13068)

```diff
-             return void 0 === wD && (wD = UD(zD), null === wD && console.error(`LocationDetection: "${zD}" (listed for ${DD}) is not a timezone this browser recognises`), ID.set(zD, wD)), wD
+             return void 0 === cp && (cp = Pp(ip), null === cp && console.error(`LocationDetection: "${ip}" (listed for ${pp}) is not a timezone this browser recognises`), yp.set(ip, cp)), cp
```

#### 458. `bundles/bloxd.io/main.js` (Changed code · before: `L13073` → after: `L13247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13247) · [Before (L13073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13073)

```diff
-             return (null !== (wD = fD[DD]) && void 0 !== wD ? wD : []).some((wD => BD(DD, wD) === zD))
+             return (null !== (cp = Wp[pp]) && void 0 !== cp ? cp : []).some((cp => Up(pp, cp) === ip))
```

#### 459. `bundles/bloxd.io/main.js` (Changed code · before: `L13083` → after: `L13257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13257) · [Before (L13083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13083)

```diff
-               return (null !== (zD = fD[DD]) && void 0 !== zD ? zD : []).map((zD => ({
+               return (null !== (ip = Wp[pp]) && void 0 !== ip ? ip : []).map((ip => ({
```

#### 460. `bundles/bloxd.io/main.js` (Changed code · before: `L13107` → after: `L13281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13281) · [Before (L13107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13107)

```diff
-         }, , , , , function(DD) {
+         }, , , , , , , function(pp) {
```

#### 461. `bundles/bloxd.io/main.js` (Changed code · before: `L13137` → after: `L13311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13311) · [Before (L13137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13137)

```diff
-                 return !pD || pD.length >= zD ? DD : "" + Array(zD + 1 - pD.length).join(wD) + DD
+                 return !Op || Op.length >= ip ? pp : "" + Array(ip + 1 - Op.length).join(cp) + pp
```

#### 462. `bundles/bloxd.io/main.js` (Changed code · before: `L13154` → after: `L13328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13328) · [Before (L13154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13154)

```diff
-                   return +(-(pD + (wD - sD) / (KD ? sD - rD : rD - sD)) || 0)
+                   return +(-(Op + (cp - op) / (Ip ? op - Sp : Sp - op)) || 0)
```

#### 463. `bundles/bloxd.io/main.js` (Changed code · before: `L13200` → after: `L13374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13374) · [Before (L13200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13200)

```diff
-                 var wD = "object" == typeof zD ? zD : {};
+                 var cp = "object" == typeof ip ? ip : {};
```

#### 464. `bundles/bloxd.io/main.js` (Changed code · before: `L13260` → after: `L13434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13434) · [Before (L13260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13260)

```diff
-                       return pD ? sD : sD.endOf(LD)
+                       return Op ? op : op.endOf(xp)
```

#### 465. `bundles/bloxd.io/main.js` (Changed code · before: `L13270` → after: `L13444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13444) · [Before (L13270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13270)

```diff
-                     case AD:
+                     case Ap:
```

#### 466. `bundles/bloxd.io/main.js` (Changed code · before: `L13272` → after: `L13446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13446) · [Before (L13272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13272)

```diff
-                     case gD:
+                     case Yp:
```

#### 467. `bundles/bloxd.io/main.js` (Changed code · before: `L13274` → after: `L13448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13448) · [Before (L13274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13274)

```diff
-                     case cD:
+                     case Lp:
```

#### 468. `bundles/bloxd.io/main.js` (Changed code · before: `L13277-L13279` → after: `L13451-L13453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13451-L13453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13451-L13453) · [Before (L13277-L13279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13277-L13279)

```diff
-                       return fD(pD ? hD - OD : hD + (6 - OD), GD);
-                     case LD:
-                     case UD:
+                       return Wp(Op ? vp - dp : vp + (6 - dp), wp);
+                     case xp:
+                     case Pp:
```

#### 469. `bundles/bloxd.io/main.js` (Changed code · before: `L13281` → after: `L13455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13455) · [Before (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13281)

```diff
-                     case rD:
+                     case Sp:
```

#### 470. `bundles/bloxd.io/main.js` (Changed code · before: `L13283` → after: `L13457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/main.js#L13457) · [Before (L13283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/main.js#L13283)

```diff
-                     case KD:
+                     case Ip:
```
