# Changed — Bundle Modifications Report (Part 022 / 056)

- **Updated at**: `2026-11-26T01:33 JST`
- **Part**: `22 / 56` (**396** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 021](part-021.md) · [Part 023 →](part-023.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (wp3j0a.a13381cf → fo1voe.f743fbcf · continued)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (156 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0)

#### 7. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L81-L82` → after: `L121-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L121-L122) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L81-L82)

```diff
-         this.xh = GG, this.beforeOpen = bG, this.afterClose = ZG, this.open = !1, this.pK = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
-           this.isEnabled() && !this.pK && (this.open = !0, this.beforeOpen(this), this.emit())
+         this.Tz = MM, this.beforeOpen = rM, this.afterClose = iM, this.open = !1, this.dh = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
+           this.isEnabled() && !this.dh && (this.open = !0, this.beforeOpen(this), this.emit())
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L100` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L140) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L100)

```diff
-         this.open = !1, this.emit(), this.pK = !0
+         this.open = !1, this.emit(), this.dh = !0
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L106` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L146) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L106)

```diff
-         this.pK || (this.snapshot = this.buildSnapshot(), this.xh(this.snapshot))
+         this.dh || (this.snapshot = this.buildSnapshot(), this.Tz(this.snapshot))
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L110` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L150) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L110)

```diff
-   39717: (GG, bG, ZG) => {
+   40388: (MM, rM, iM) => {
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L114-L119` → after: `L154-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L154-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L154-L159) · [Before (L114-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L114-L119)

```diff
-     var wG = ZG(51);
-     var SG = ZG(17),
-       LG = ZG(1887),
-       yG = ZG(19),
-       kG = ZG(36951),
-       UG = ZG(1006),
+     var OM = iM(44);
+     var SM = iM(19),
+       jM = iM(2022),
+       aM = iM(22),
+       PM = iM(37542),
+       nM = iM(1116),
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L121-L131` → after: `L161-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L161-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L161-L171) · [Before (L121-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L121-L131)

```diff
-       VG = ZG(1389),
-       pG = ZG(1151),
-       fG = ZG(4549),
-       QG = ZG(1304),
-       KG = ZG(1393),
-       hG = ZG(1889),
-       dG = ZG(1320),
-       JG = ZG(1876),
-       rG = ZG(1945),
-       zG = ZG(200);
-     const EG = ZG(39724),
+       zM = iM(1516),
+       LM = iM(1188),
+       mM = iM(4917),
+       HM = iM(1424),
+       hM = iM(1520),
+       JM = iM(2026),
+       dM = iM(1440),
+       yM = iM(2006),
+       lM = iM(2084),
+       EM = iM(187);
+     const UM = iM(40393),
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L136-L138` → after: `L176-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L176-L178) · [Before (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L136-L138)

```diff
-       const ZG = bG ? GG : `${GG}-uncaught`,
-         wG = (0, zG.c)(oG, ZG);
-       return void 0 !== wG || XG.has(ZG) || (XG.add(ZG), console.warn(`Containment Breach has no mugshot ${ZG}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), wG
+       const iM = rM ? MM : `${MM}-uncaught`,
+         OM = (0, EM.d)(GM, iM);
+       return void 0 !== OM || CM.has(iM) || (CM.add(iM), console.warn(`Containment Breach has no mugshot ${iM}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), OM
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L140` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L180) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L140)

```diff
-     var iG = ZG(1067);
+     var bM = iM(1303);
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L156-L157` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L196-L197) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L156-L157)

```diff
-       const pG = `${SG}Title`;
-       return (0, iG.jsx)(fG.b, {
+       const LM = `${SM}Title`;
+       return (0, bM.jsx)(mM.e, {
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L177` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L217) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L177)

```diff
-             }), yG, (0, iG.jsx)(KG.j, {
+             }), aM, (0, bM.jsx)(hM.l, {
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L226` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L266) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L226)

```diff
-         Ik: wG,
+         sQ: OM,
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L229` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L269) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L229)

```diff
-       return (0, iG.jsx)(dG.h, {
+       return (0, bM.jsx)(dM.i, {
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L237` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L277) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L237)

```diff
-           Ik: wG
+           sQ: OM
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L259` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L299) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L259)

```diff
-         Ik: SG
+         sQ: SM
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L263` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L303) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L263)

```diff
-       } = (0, pG.w)(), yG = (0, rG.c)("itemInfo", (GG => GG[ZG])), {
+       } = (0, LM.A)(), aM = (0, lM.f)("itemInfo", (MM => MM[iM])), {
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L289-L290` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L329-L330) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L289-L290)

```diff
-           }), (0, iG.jsx)(JG.c, {
-             text: null !== (bG = null === yG || void 0 === yG ? void 0 : yG.displayName) && void 0 !== bG ? bG : ZG,
+           }), (0, bM.jsx)(yM.b, {
+             text: null !== (rM = null === aM || void 0 === aM ? void 0 : aM.displayName) && void 0 !== rM ? rM : iM,
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L295` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L335) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L295)

```diff
-           children: [void 0 !== kG && (0, iG.jsx)(JG.c, {
+           children: [void 0 !== PM && (0, bM.jsx)(yM.b, {
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L302` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L342) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L302)

```diff
-               children: LG(`${CG}:chipDroppedBy`)
+               children: jM(`${wM}:chipDroppedBy`)
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L311` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L351) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L311)

```diff
-             children: LG(`${CG}:chipYouHave`)
+             children: jM(`${wM}:chipYouHave`)
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L317` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L357) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L317)

```diff
-             }), ` / ${wG.toLocaleString()}`]
+             }), ` / ${OM.toLocaleString()}`]
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L395` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L435) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L395)

```diff
-     var MG = ZG(38950);
+     var oM = iM(39536);
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L397` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L437) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L397)

```diff
-     class sG extends MG.c {
+     class YM extends oM.e {
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L415-L417` → after: `L455-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L455-L457) · [Before (L415-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L415-L417)

```diff
-         codexAnyDifficulty: `${CG}:codexNeedsAny`,
-         codexNormalOnly: `${CG}:codexNeedsNormal`,
-         codexHardOnly: `${CG}:codexNeedsHard`
+         codexAnyDifficulty: `${wM}:codexNeedsAny`,
+         codexNormalOnly: `${wM}:codexNeedsNormal`,
+         codexHardOnly: `${wM}:codexNeedsHard`
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L425-L427` → after: `L465-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L465-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L465-L467) · [Before (L425-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L425-L427)

```diff
-         codexContained: `${CG}:codexContainedBadge`,
-         codexEncountered: `${CG}:codexEncounteredBadge`,
-         codexUnidentified: `${CG}:codexUnidentifiedBadge`
+         codexContained: `${wM}:codexContainedBadge`,
+         codexEncountered: `${wM}:codexEncounteredBadge`,
+         codexUnidentified: `${wM}:codexUnidentifiedBadge`
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L437` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L477) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L437)

```diff
-       } = (0, pG.w)();
+       } = (0, LM.A)();
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L447-L448` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L487-L488) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L447-L448)

```diff
-       } = (0, pG.w)();
-       return "codexUnidentified" === GG.codexEntryState ? bG(`${CG}:codexUnidentifiedName`) : GG.codexEntryName
+       } = (0, LM.A)();
+       return "codexUnidentified" === MM.codexEntryState ? rM(`${wM}:codexUnidentifiedName`) : MM.codexEntryName
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L529` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L569) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L529)

```diff
-       } = (0, pG.w)();
+       } = (0, LM.A)();
```

#### 34. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L532` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L572) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L532)

```diff
-         children: [wG(`${CG}:codexProgress`, {
+         children: [OM(`${wM}:codexProgress`, {
```

#### 35. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L553` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L593) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L553)

```diff
-       } = (0, pG.w)(), SG = "codexContained" === bG.codexEntryState;
+       } = (0, LM.A)(), SM = "codexContained" === rM.codexEntryState;
```

#### 36. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L560` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L600) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L560)

```diff
-             children: wG(`${CG}:codexFileNumber`, {
+             children: OM(`${wM}:codexFileNumber`, {
```

#### 37. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L577` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L617) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L577)

```diff
-               children: [wG(`${CG}:codexContainments`, {
+               children: [OM(`${wM}:codexContainments`, {
```

#### 38. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L585` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L625) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L585)

```diff
-               children: wG(`${CG}:codexContainedBadge`)
+               children: OM(`${wM}:codexContainedBadge`)
```

#### 39. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L597` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L637) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L597)

```diff
-                 children: wG(`${CG}:codexRedacted`)
+                 children: OM(`${wM}:codexRedacted`)
```

#### 40. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L602` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L642) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L602)

```diff
-                 children: wG(`${CG}:codexHintLabel`)
+                 children: OM(`${wM}:codexHintLabel`)
```

#### 41. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L619` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L659) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L619)

```diff
-       const ZG = (0, VG.j)(AG, bG.getSnapshot()),
+       const iM = (0, zM.e)(fM, rM.getSnapshot()),
```

#### 42. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L622` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L662) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L622)

```diff
-         } = (0, pG.w)();
+         } = (0, LM.A)();
```

#### 43. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L630` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L670) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L630)

```diff
-         title: wG(`${CG}:codexTitle`),
+         title: OM(`${wM}:codexTitle`),
```

#### 44. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L649-L650` → after: `L689-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L689-L690) · [Before (L649-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L649-L650)

```diff
-     var BG = ZG(352);
-     class Gb extends MG.c {
+     var cM = iM(332);
+     class Mr extends oM.e {
```

#### 45. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L655` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L695) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L655)

```diff
-           if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${GG} ${bG}`, this.rollBack)) return;
+           if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${MM} ${rM}`, this.rollBack)) return;
```

#### 46. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L774` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L814) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L774)

```diff
-         loadoutSlotOptions: bG.loadoutSlotOptions.map((GG => null !== wG && GG.loadoutOptionId === wG.loadoutOptionId ? wG : GG))
+         loadoutSlotOptions: rM.loadoutSlotOptions.map((MM => null !== OM && MM.loadoutOptionId === OM.loadoutOptionId ? OM : MM))
```

#### 47. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L778` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L818) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L778)

```diff
-         loadoutSlots: GG.loadoutSlots.map((GG => GG === bG ? SG : GG))
+         loadoutSlots: MM.loadoutSlots.map((MM => MM === rM ? SM : MM))
```

#### 48. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L785` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L825) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L785)

```diff
-         loadoutPerks: GG.loadoutPerks.map((GG => GG.loadoutPerkId === bG.loadoutPerkId ? bG : GG))
+         loadoutPerks: MM.loadoutPerks.map((MM => MM.loadoutPerkId === rM.loadoutPerkId ? rM : MM))
```

#### 49. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L843` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L883) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L843)

```diff
-         return (null !== (ZG = bG.find((GG => GG.loadoutPerkEquipped))) && void 0 !== ZG ? ZG : bG[0]).loadoutPerkId
+         return (null !== (iM = rM.find((MM => MM.loadoutPerkEquipped))) && void 0 !== iM ? iM : rM[0]).loadoutPerkId
```

#### 50. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L848-L849` → after: `L888-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L888-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L888-L889) · [Before (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L848-L849)

```diff
-     var db = ZG(37224),
-       Jb = ZG(1239);
+     var dr = iM(37821),
+       yr = iM(1287);
```

#### 51. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L851-L856` → after: `L891-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L891-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L891-L896) · [Before (L851-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L851-L856)

```diff
-         loadoutPrimary: `${CG}:loadoutSlotPrimary`,
-         loadoutSecondary: `${CG}:loadoutSlotSecondary`,
-         loadoutOffensive: `${CG}:loadoutSlotOffensive`,
-         loadoutSelfHelp: `${CG}:loadoutSlotSelfHelp`,
-         loadoutArmour: `${CG}:loadoutSlotArmour`,
-         loadoutPerks: `${CG}:loadoutSlotPerks`
+         loadoutPrimary: `${wM}:loadoutSlotPrimary`,
+         loadoutSecondary: `${wM}:loadoutSlotSecondary`,
+         loadoutOffensive: `${wM}:loadoutSlotOffensive`,
+         loadoutSelfHelp: `${wM}:loadoutSlotSelfHelp`,
+         loadoutArmour: `${wM}:loadoutSlotArmour`,
+         loadoutPerks: `${wM}:loadoutSlotPerks`
```

#### 52. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L860` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L900) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L860)

```diff
-         Df: "bottom",
+         LH: "bottom",
```

#### 53. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L873` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L913) · [Before (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L873)

```diff
-       return (ZG, wG) => (null === GG || void 0 === GG ? void 0 : GG.kind) === ZG && GG.id === wG ? bG : void 0
+       return (iM, OM) => (null === MM || void 0 === MM ? void 0 : MM.kind) === iM && MM.id === OM ? rM : void 0
```

#### 54. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L896` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L936) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L896)

```diff
-       const [SG, LG] = GG(`${CG}:${bG}`, {
+       const [SM, jM] = MM(`${wM}:${rM}`, {
```

#### 55. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L915` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L955) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L915)

```diff
-       } = (0, pG.w)(), yG = bG.loadout, kG = bG.open ? yG.loadoutWalkthrough.map((GG => ({
+       } = (0, LM.A)(), aM = rM.loadout, PM = rM.open ? aM.loadoutWalkthrough.map((MM => ({
```

#### 56. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L935` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L975) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L935)

```diff
-           kind: "Df",
+           kind: "LH",
```

#### 57. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L943` → after: `L983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L983) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L943)

```diff
-           return `${GG.kind}:${GG.id}`
+           return `${MM.kind}:${MM.id}`
```

#### 58. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L976-L977` → after: `L1016-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1016-L1017) · [Before (L976-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L976-L977)

```diff
-       } = (0, pG.w)(), kG = (0, wG.useRef)(bG);
-       return kG.current = bG, (0, Jb.w)("popup", kG, SG), (0, iG.jsxs)(db.e, {
+       } = (0, LM.A)(), PM = (0, OM.useRef)(rM);
+       return PM.current = rM, (0, yr.v)("popup", PM, SM), (0, bM.jsxs)(dr.e, {
```

#### 59. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L991-L992` → after: `L1031-L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1031-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1031-L1032) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L991-L992)

```diff
-             children: yG(`${CG}:operatorName`)
-           }), (0, iG.jsx)(KG.j, {
+             children: aM(`${wM}:operatorName`)
+           }), (0, bM.jsx)(hM.l, {
```

#### 60. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L994` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1034) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L994)

```diff
-             ariaLabel: yG(`${CG}:loadoutWalkthroughClose`),
+             ariaLabel: aM(`${wM}:loadoutWalkthroughClose`),
```

#### 61. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1012` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1052) · [Before (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1012)

```diff
-       } = (0, pG.w)();
+       } = (0, LM.A)();
```

#### 62. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1015` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1055) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1015)

```diff
-         children: wG(`${CG}:loadoutFree`)
+         children: OM(`${wM}:loadoutFree`)
```

#### 63. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1021` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1061) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1021)

```diff
-           Ik: ZG.loadoutCoins
+           sQ: iM.loadoutCoins
```

#### 64. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1027` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1067) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1027)

```diff
-             Ik: bG.loadoutHeldPartAmount
+             sQ: rM.loadoutHeldPartAmount
```

#### 65. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1033-L1035` → after: `L1073-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1073-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1073-L1075) · [Before (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1033-L1035)

```diff
-       loadoutStatFireRate: `${CG}:loadoutUnitPerMinute`,
-       loadoutStatReload: `${CG}:loadoutUnitSeconds`,
-       loadoutStatResupply: `${CG}:loadoutUnitSeconds`
+       loadoutStatFireRate: `${wM}:loadoutUnitPerMinute`,
+       loadoutStatReload: `${wM}:loadoutUnitSeconds`,
+       loadoutStatResupply: `${wM}:loadoutUnitSeconds`
```

#### 66. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1039` → after: `L1079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1079) · [Before (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1039)

```diff
-       return "loadoutStatPotency" === GG.loadoutStatKind ? (0, BG.X)(GG.loadoutStatValue) : String(GG.loadoutStatValue)
+       return "loadoutStatPotency" === MM.loadoutStatKind ? (0, cM.T)(MM.loadoutStatValue) : String(MM.loadoutStatValue)
```

#### 67. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1049` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1089) · [Before (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1049)

```diff
-       } = (0, pG.w)(), SG = ZG.loadoutOptionTiers, LG = null === (bG = SG[0]) || void 0 === bG ? void 0 : bG.loadoutTierStats.map((GG => GG.loadoutStatKind));
+       } = (0, LM.A)(), SM = iM.loadoutOptionTiers, jM = null === (rM = SM[0]) || void 0 === rM ? void 0 : rM.loadoutTierStats.map((MM => MM.loadoutStatKind));
```

#### 68. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1065-L1066` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1105-L1106) · [Before (L1065-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1065-L1066)

```diff
-               children: wG(`${CG}:loadoutTier`, {
-                 tier: (0, BG.X)(bG + 1)
+               children: OM(`${wM}:loadoutTier`, {
+                 tier: (0, cM.T)(rM + 1)
```

#### 69. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1076` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1116) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1076)

```diff
-                 children: [wG(`${CG}:${GG}`), bG && (0, iG.jsx)("span", {
+                 children: [OM(`${wM}:${MM}`), rM && (0, bM.jsx)("span", {
```

#### 70. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1115` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1155) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1115)

```diff
-       } = (0, pG.w)(), yG = bG.loadout, kG = SG.loadoutOptionOwnedTier, UG = SG.loadoutOptionTiers.length, YG = wG.loadoutSlotEquippedId === SG.loadoutOptionId, VG = kG < UG ? SG.loadoutOptionTiers[kG].loadoutTierCost : null, fG = null !== VG && bb(yG, VG), QG = SG.loadoutOptionI … [truncated]
+       } = (0, LM.A)(), aM = rM.loadout, PM = SM.loadoutOptionOwnedTier, nM = SM.loadoutOptionTiers.length, QM = OM.loadoutSlotEquippedId === SM.loadoutOptionId, zM = PM < nM ? SM.loadoutOptionTiers[PM].loadoutTierCost : null, mM = null !== zM && rr(aM, zM), HM = SM.loadoutOptionI … [truncated]
```

#### 71. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1120-L1121` → after: `L1160-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1160-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1160-L1161) · [Before (L1120-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1120-L1121)

```diff
-           status: 0 === kG ? LG(`${CG}:loadoutLocked`) : UG > 1 ? LG(`${CG}:loadoutTier`, {
-             tier: (0, BG.X)(kG)
+           status: 0 === PM ? jM(`${wM}:loadoutLocked`) : nM > 1 ? jM(`${wM}:loadoutTier`, {
+             tier: (0, cM.T)(PM)
```

#### 72. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1138` → after: `L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1178) · [Before (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1138)

```diff
-             }), (0, iG.jsx)(KG.k, {
+             }), (0, bM.jsx)(hM.p, {
```

#### 73. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1143-L1144` → after: `L1183-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1183-L1184) · [Before (L1143-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1143-L1144)

```diff
-               children: 0 === kG ? LG(`${CG}:loadoutUnlock`) : LG(`${CG}:loadoutUpgrade`, {
-                 tier: (0, BG.X)(kG + 1)
+               children: 0 === PM ? jM(`${wM}:loadoutUnlock`) : jM(`${wM}:loadoutUpgrade`, {
+                 tier: (0, cM.T)(PM + 1)
```

#### 74. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1149-L1150` → after: `L1189-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1189-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1189-L1190) · [Before (L1149-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1149-L1150)

```diff
-             children: LG(`${CG}:loadoutMaxed`)
-           }), kG > 0 && !YG && (0, iG.jsx)(KG.d, {
+             children: jM(`${wM}:loadoutMaxed`)
+           }), PM > 0 && !QM && (0, bM.jsx)(hM.e, {
```

#### 75. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1155` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1195) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1155)

```diff
-             children: LG(`${CG}:loadoutEquip`)
+             children: jM(`${wM}:loadoutEquip`)
```

#### 76. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1169` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1209) · [Before (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1169)

```diff
-       } = (0, pG.w)(), LG = bG.loadout, yG = Sb(LG), kG = wG.loadoutPerkId, UG = ob();
+       } = (0, LM.A)(), jM = rM.loadout, aM = Sr(jM), PM = OM.loadoutPerkId, nM = Gr();
```

#### 77. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1174` → after: `L1214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1214) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1174)

```diff
-           status: wG.loadoutPerkOwned ? null : SG(`${CG}:loadoutLocked`),
+           status: OM.loadoutPerkOwned ? null : SM(`${wM}:loadoutLocked`),
```

#### 78. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1188` → after: `L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1228) · [Before (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1188)

```diff
-             }), (0, iG.jsx)(KG.k, {
+             }), (0, bM.jsx)(hM.p, {
```

#### 79. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1193` → after: `L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1233) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1193)

```diff
-               children: SG(`${CG}:loadoutUnlock`)
+               children: SM(`${wM}:loadoutUnlock`)
```

#### 80. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1195` → after: `L1235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1235) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1195)

```diff
-           }), wG.loadoutPerkOwned && !wG.loadoutPerkEquipped && (0, iG.jsx)(KG.d, {
+           }), OM.loadoutPerkOwned && !OM.loadoutPerkEquipped && (0, bM.jsx)(hM.e, {
```

#### 81. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1200` → after: `L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1240) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1200)

```diff
-             children: SG(`${CG}:loadoutEquip`)
+             children: SM(`${wM}:loadoutEquip`)
```

#### 82. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1203-L1204` → after: `L1243-L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1243-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1243-L1244) · [Before (L1203-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1203-L1204)

```diff
-             children: SG(`${CG}:loadoutSocketsFullHint`)
-           }), wG.loadoutPerkEquipped && (0, iG.jsx)(KG.K, {
+             children: SM(`${wM}:loadoutSocketsFullHint`)
+           }), OM.loadoutPerkEquipped && (0, bM.jsx)(hM.V, {
```

#### 83. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1209` → after: `L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1249) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1209)

```diff
-             children: SG(`${CG}:loadoutUnequip`)
+             children: SM(`${wM}:loadoutUnequip`)
```

#### 84. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1225` → after: `L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1265) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1225)

```diff
-       } = (0, pG.w)();
+       } = (0, LM.A)();
```

#### 85. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1238` → after: `L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1278) · [Before (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1238)

```diff
-           children: yG(`${CG}:loadoutEquippedBadge`)
+           children: aM(`${wM}:loadoutEquippedBadge`)
```

#### 86. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1297` → after: `L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1337) · [Before (L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1297)

```diff
-       } = (0, pG.w)(), SG = bG.loadout, LG = ob();
+       } = (0, LM.A)(), SM = rM.loadout, jM = Gr();
```

#### 87. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1300` → after: `L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1340) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1300)

```diff
-         "aria-label": wG(`${CG}:loadoutKit`),
+         "aria-label": OM(`${wM}:loadoutKit`),
```

#### 88. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1348` → after: `L1388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1388) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1348)

```diff
-       } = (0, pG.w)(), SG = bG.loadout, LG = SG.loadoutPerks.filter((GG => GG.loadoutPerkEquipped)), yG = ob();
+       } = (0, LM.A)(), SM = rM.loadout, jM = SM.loadoutPerks.filter((MM => MM.loadoutPerkEquipped)), aM = Gr();
```

#### 89. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1365` → after: `L1405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1405) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1365)

```diff
-             children: wG(`${CG}:loadoutPerkCount`, {
+             children: OM(`${wM}:loadoutPerkCount`, {
```

#### 90. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1388` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1428) · [Before (L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1388)

```diff
-                 children: ZG ? ZG.loadoutPerkName : wG(`${CG}:loadoutPerkSocketEmpty`)
+                 children: iM ? iM.loadoutPerkName : OM(`${wM}:loadoutPerkSocketEmpty`)
```

#### 91. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1410` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1450) · [Before (L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1410)

```diff
-       } = (0, pG.w)();
+       } = (0, LM.A)();
```

#### 92. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1422` → after: `L1462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1462) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1422)

```diff
-           children: VG(`${CG}:loadoutEquippedBadge`)
+           children: zM(`${wM}:loadoutEquippedBadge`)
```

#### 93. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1425` → after: `L1465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1465) · [Before (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1425)

```diff
-           children: VG(`${CG}:loadoutLocked`)
+           children: zM(`${wM}:loadoutLocked`)
```

#### 94. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1450` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1490) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1450)

```diff
-           buttonRef: SG("Df", GG.loadoutPerkId),
+           buttonRef: SM("LH", MM.loadoutPerkId),
```

#### 95. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1467` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1507) · [Before (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1467)

```diff
-           buttonRef: SG("Df", GG.loadoutOptionId),
+           buttonRef: SM("LH", MM.loadoutOptionId),
```

#### 96. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1492` → after: `L1532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1532) · [Before (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1492)

```diff
-       const ZG = (0, VG.j)(fb, bG.getSnapshot()),
+       const iM = (0, zM.e)(mr, rM.getSnapshot()),
```

#### 97. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1495` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1535) · [Before (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1495)

```diff
-         } = (0, pG.w)();
+         } = (0, LM.A)();
```

#### 98. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1504` → after: `L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1544) · [Before (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1504)

```diff
-           title: wG(`${CG}:loadoutTitle`),
+           title: OM(`${wM}:loadoutTitle`),
```

#### 99. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1513-L1514` → after: `L1553-L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1553-L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1553-L1554) · [Before (L1513-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1513-L1514)

```diff
-               children: wG(`${CG}:loadoutRadioBadge`)
-             }), null !== SG && wG(`${CG}:${SG.loadoutNoticeKey}`, {
+               children: OM(`${wM}:loadoutRadioBadge`)
+             }), null !== SM && OM(`${wM}:${SM.loadoutNoticeKey}`, {
```

#### 100. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1516` → after: `L1556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1556) · [Before (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1516)

```diff
-               tier: (0, BG.X)(SG.loadoutNoticeTier),
+               tier: (0, cM.T)(SM.loadoutNoticeTier),
```

#### 101. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1568` → after: `L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1608) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1568)

```diff
-           return GG.locatorEntryArmed === ZG ? GG : {
+           return MM.locatorEntryArmed === iM ? MM : {
```

#### 102. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1597` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1637) · [Before (L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1597)

```diff
-         return (null !== (bG = ZG.find((GG => GG.locatorEntryArmed))) && void 0 !== bG ? bG : ZG[0]).locatorEntryId
+         return (null !== (rM = iM.find((MM => MM.locatorEntryArmed))) && void 0 !== rM ? rM : iM[0]).locatorEntryId
```

#### 103. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1610-L1612` → after: `L1650-L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1650-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1650-L1652) · [Before (L1610-L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1610-L1612)

```diff
-         locatorContained: `${CG}:locatorFlavourContained`,
-         locatorEncountered: `${CG}:locatorFlavourEncountered`,
-         locatorUnseen: `${CG}:locatorFlavourUnseen`
+         locatorContained: `${wM}:locatorFlavourContained`,
+         locatorEncountered: `${wM}:locatorFlavourEncountered`,
+         locatorUnseen: `${wM}:locatorFlavourUnseen`
```

#### 104. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1616-L1617` → after: `L1656-L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1656-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1656-L1657) · [Before (L1616-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1616-L1617)

```diff
-         codexNormalOnly: `${CG}:locatorAttunedNormal`,
-         codexHardOnly: `${CG}:locatorAttunedHard`
+         codexNormalOnly: `${wM}:locatorAttunedNormal`,
+         codexHardOnly: `${wM}:locatorAttunedHard`
```

#### 105. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1641` → after: `L1681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1681) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1641)

```diff
-       } = (0, pG.w)();
+       } = (0, LM.A)();
```

#### 106. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1644` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1684) · [Before (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1644)

```diff
-         children: ZG(`${CG}:locatorArmedBadge`)
+         children: iM(`${wM}:locatorArmedBadge`)
```

#### 107. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1647` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1687) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1647)

```diff
-         children: ZG(`${CG}:locatorOwnedBadge`)
+         children: iM(`${wM}:locatorOwnedBadge`)
```

#### 108. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1660` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1700) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1660)

```diff
-         Ik: ZG,
+         sQ: iM,
```

#### 109. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1673` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1713) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1673)

```diff
-       } = (0, pG.w)(), LG = wG.locatorEntryId, yG = bG.locators.locatorEntries.find((GG => GG.locatorEntryArmed && GG !== wG));
+       } = (0, LM.A)(), jM = OM.locatorEntryId, aM = rM.locators.locatorEntries.find((MM => MM.locatorEntryArmed && MM !== OM));
```

#### 110. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1676` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1716) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1676)

```diff
-         children: [wG.locatorEntryArmed && (0, iG.jsx)(KG.K, {
+         children: [OM.locatorEntryArmed && (0, bM.jsx)(hM.V, {
```

#### 111. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1681-L1682` → after: `L1721-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1721-L1722) · [Before (L1681-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1681-L1682)

```diff
-           children: SG(`${CG}:locatorDisarm`)
-         }), wG.locatorEntryOwned && !wG.locatorEntryArmed && (0, iG.jsx)(KG.d, {
+           children: SM(`${wM}:locatorDisarm`)
+         }), OM.locatorEntryOwned && !OM.locatorEntryArmed && (0, bM.jsx)(hM.e, {
```

#### 112. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1687` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1727) · [Before (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1687)

```diff
-           children: SG(`${CG}:locatorArm`)
+           children: SM(`${wM}:locatorArm`)
```

#### 113. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1693` → after: `L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1733) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1693)

```diff
-           }), (0, iG.jsx)(KG.k, {
+           }), (0, bM.jsx)(hM.p, {
```

#### 114. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1698` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1738) · [Before (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1698)

```diff
-             children: SG(`${CG}:locatorBuy`)
+             children: SM(`${wM}:locatorBuy`)
```

#### 115. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1702` → after: `L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1742) · [Before (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1702)

```diff
-           children: SG(`${CG}:locatorReplacesHint`, {
+           children: SM(`${wM}:locatorReplacesHint`, {
```

#### 116. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1729` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1769) · [Before (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1729)

```diff
-       } = (0, pG.w)(), LG = Nb[wG.locatorEntryDifficulty];
+       } = (0, LM.A)(), jM = qr[OM.locatorEntryDifficulty];
```

#### 117. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1740` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1780) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1740)

```diff
-             name: SG(`${CG}:locatorName`, {
+             name: SM(`${wM}:locatorName`, {
```

#### 118. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1748` → after: `L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1788) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1748)

```diff
-             children: SG(wG.locatorEntryArmed ? `${CG}:locatorFlavourArmed` : Db[wG.locatorEntryStanding])
+             children: SM(OM.locatorEntryArmed ? `${wM}:locatorFlavourArmed` : Kr[OM.locatorEntryStanding])
```

#### 119. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1754` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1794) · [Before (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1754)

```diff
-             children: SG(`${CG}:locatorUsage`)
+             children: SM(`${wM}:locatorUsage`)
```

#### 120. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1768` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1808) · [Before (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1768)

```diff
-       const ZG = (0, VG.j)(Hb, bG.getSnapshot()),
+       const iM = (0, zM.e)(Xr, rM.getSnapshot()),
```

#### 121. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1771` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1811) · [Before (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1771)

```diff
-         } = (0, pG.w)(),
+         } = (0, LM.A)(),
```

#### 122. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1779` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1819) · [Before (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1779)

```diff
-         title: wG(`${CG}:locatorTitle`),
+         title: OM(`${wM}:locatorTitle`),
```

#### 123. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1789-L1790` → after: `L1829-L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1829-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1829-L1830) · [Before (L1789-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1789-L1790)

```diff
-             children: wG(`${CG}:locatorKeeperName`)
-           }), null !== yG && wG(`${CG}:${yG.locatorNoticeKey}`, {
+             children: OM(`${wM}:locatorKeeperName`)
+           }), null !== aM && OM(`${wM}:${aM.locatorNoticeKey}`, {
```

#### 124. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1841` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1881) · [Before (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1841)

```diff
-     var LZ = ZG(38975);
+     var ji = iM(39578);
```

#### 125. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1845` → after: `L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1885) · [Before (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1845)

```diff
-         this.sendCommand = GG, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new LZ.d({
+         this.sendCommand = MM, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new ji.e({
```

#### 126. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1878` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1918) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1878)

```diff
-     var kZ = ZG(38971);
+     var Pi = iM(39561);
```

#### 127. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1897` → after: `L1937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1937) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1897)

```diff
-           (0, kG.m)()
+           (0, PM.w)()
```

#### 128. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1900` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1940) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1900)

```diff
-           GG && (0, kG.i)()
+           MM && (0, PM.n)()
```

#### 129. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1906` → after: `L1946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1946) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1906)

```diff
-           yG.l.xh(fb, GG, !0)
+           aM.i.Tz(mr, MM, !0)
```

#### 130. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1909` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1949) · [Before (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1909)

```diff
-           yG.l.xh(AG, GG, !0)
+           aM.i.Tz(fM, MM, !0)
```

#### 131. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1912` → after: `L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1952) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1912)

```diff
-           yG.l.xh(Hb, GG, !0)
+           aM.i.Tz(Xr, MM, !0)
```

#### 132. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1917` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1957) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1917)

```diff
-           GG = bG, ZG = (0, kG.q)(null, {
+           MM = rM, iM = (0, PM.C)(null, {
```

#### 133. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1926` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1966) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1926)

```diff
-           }), UG = (0, LG.g)(YZ)
+           }), nM = (0, jM.e)(Qi)
```

#### 134. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1929` → after: `L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1969) · [Before (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1929)

```diff
-           "containmentLoadout" === GG ? QG.hK(bG) : "containmentLoadoutClose" === GG ? QG.isOpen() && (QG.close(), (0, kG.f)()) : "containmentCodex" === GG ? KG.hK(bG) : "containmentLocator" === GG && hG.hK(bG)
+           "containmentLoadout" === MM ? HM.GL(rM) : "containmentLoadoutClose" === MM ? HM.isOpen() && (HM.close(), (0, PM.k)()) : "containmentCodex" === MM ? hM.GL(rM) : "containmentLocator" === MM && JM.GL(rM)
```

#### 135. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1931-L1932` → after: `L1971-L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1971-L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1971-L1972) · [Before (L1931-L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1931-L1932)

```diff
-         Tp: () => {
-           bG || SG.e.get("loadingOverlayVisible") || (bG = !0, GG.sendCommand("containmentEntered"))
+         bL: () => {
+           rM || SM.d.get("loadingOverlayVisible") || (rM = !0, MM.sendCommand("containmentEntered"))
```

#### 136. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1943-L1983` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1983) · [Before (L1943-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1943-L1983)

```diff
-   39724: (GG, bG, ZG) => {
-     var wG = {
-       "./breach-zero-uncaught.webp": 39727,
-       "./breach-zero.webp": 39732,
-       "./brood-father-uncaught.webp": 39737,
-       "./brood-father.webp": 39741,
-       "./carousel-uncaught.webp": 39750,
-       "./carousel.webp": 39754,
-       "./deadlock-uncaught.webp": 39762,
-       "./deadlock.webp": 39764,
-       "./frost-revenant-uncaught.webp": 39769,
-       "./frost-revenant.webp": 39775,
-       "./hollow-choir-uncaught.webp": 39784,
-       "./hollow-choir.webp": 39790,
-       "./magma-warden-uncaught.webp": 39793,
-       "./magma-warden.webp": 39798,
- ... (25 more removed lines; see GitHub link above)
+   40398: (MM, rM, iM) => {
```

#### 137. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1986` → after: `L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1986) · [Before (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1986)

```diff
-   39732: (GG, bG, ZG) => {
+   40401: (MM, rM, iM) => {
```

#### 138. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1989` → after: `L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1989) · [Before (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1989)

```diff
-   39737: (GG, bG, ZG) => {
+   40405: (MM, rM, iM) => {
```

#### 139. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1992` → after: `L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1992) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1992)

```diff
-   39741: (GG, bG, ZG) => {
+   40408: (MM, rM, iM) => {
```

#### 140. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1995` → after: `L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1995) · [Before (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1995)

```diff
-   39750: (GG, bG, ZG) => {
+   40412: (MM, rM, iM) => {
```

#### 141. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1998)

```diff
-   39754: (GG, bG, ZG) => {
+   40419: (MM, rM, iM) => {
```

#### 142. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2001` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2001) · [Before (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2001)

```diff
-   39762: (GG, bG, ZG) => {
+   40427: (MM, rM, iM) => {
```

#### 143. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2004` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2004) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2004)

```diff
-   39764: (GG, bG, ZG) => {
+   40433: (MM, rM, iM) => {
```

#### 144. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2007` → after: `L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2007) · [Before (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2007)

```diff
-   39769: (GG, bG, ZG) => {
+   40435: (MM, rM, iM) => {
```

#### 145. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2010` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2010) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2010)

```diff
-   39775: (GG, bG, ZG) => {
+   40443: (MM, rM, iM) => {
```

#### 146. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2013` → after: `L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2013) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2013)

```diff
-   39784: (GG, bG, ZG) => {
+   40445: (MM, rM, iM) => {
```

#### 147. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2016)

```diff
-   39790: (GG, bG, ZG) => {
+   40451: (MM, rM, iM) => {
```

#### 148. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2019` → after: `L2019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2019) · [Before (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2019)

```diff
-   39793: (GG, bG, ZG) => {
+   40459: (MM, rM, iM) => {
```

#### 149. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2022)

```diff
-   39798: (GG, bG, ZG) => {
+   40464: (MM, rM, iM) => {
```

#### 150. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2025` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2025) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2025)

```diff
-   39801: (GG, bG, ZG) => {
+   40469: (MM, rM, iM) => {
```

#### 151. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2028` → after: `L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2028) · [Before (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2028)

```diff
-   39808: (GG, bG, ZG) => {
+   40471: (MM, rM, iM) => {
```

#### 152. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2031` → after: `L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2031) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2031)

```diff
-   39815: (GG, bG, ZG) => {
+   40478: (MM, rM, iM) => {
```

#### 153. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2034` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2034) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2034)

```diff
-   39820: (GG, bG, ZG) => {
+   40485: (MM, rM, iM) => {
```

#### 154. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2037` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2037) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2037)

```diff
-   39828: (GG, bG, ZG) => {
+   40489: (MM, rM, iM) => {
```

#### 155. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2040` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2040) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2040)

```diff
-   39830: (GG, bG, ZG) => {
+   40496: (MM, rM, iM) => {
```

#### 156. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2043` → after: `L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2043) · [Before (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2043)

```diff
-   38971: GG => {
+   39561: MM => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ecb862d068eab8e0623e405216239fed956e0342ef06cf37286c14a82e62819)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ecb862d068eab8e0623e405216239fed956e0342ef06cf37286c14a82e62819R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ecb862d068eab8e0623e405216239fed956e0342ef06cf37286c14a82e62819) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js#L1-L2)

```diff
- export const id = 15;
- export const ids = [15];
+ export const id = 16;
+ export const ids = [16];
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ecb862d068eab8e0623e405216239fed956e0342ef06cf37286c14a82e62819R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-1ecb862d068eab8e0623e405216239fed956e0342ef06cf37286c14a82e62819) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js#L4)

```diff
-   39835: (GG, bG, ZG) => {
+   40502: (MM, rM, iM) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adda92567445c3b15ddea338f159d025976957a58e919b05512cd360a9bcccf3)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adda92567445c3b15ddea338f159d025976957a58e919b05512cd360a9bcccf3R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adda92567445c3b15ddea338f159d025976957a58e919b05512cd360a9bcccf3) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js#L1-L2)

```diff
- export const id = 16;
- export const ids = [16];
+ export const id = 17;
+ export const ids = [17];
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adda92567445c3b15ddea338f159d025976957a58e919b05512cd360a9bcccf3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-adda92567445c3b15ddea338f159d025976957a58e919b05512cd360a9bcccf3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js#L4)

```diff
-   39844: (GG, bG, ZG) => {
+   40511: (MM, rM, iM) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (114 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1-L2)

```diff
- export const id = 17;
- export const ids = [17];
+ export const id = 18;
+ export const ids = [18];
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L4)

```diff
-   36946: (GG, bG, ZG) => {
+   37538: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L6-L9` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L6-L9) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L6-L9)

```diff
-       b: () => QG,
-       d: () => KG,
-       g: () => fG,
-       j: () => pG
+       e: () => HM,
+       i: () => hM,
+       m: () => mM,
+       p: () => LM
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L11-L18)

```diff
-     var wG = ZG(34472),
-       SG = ZG(36951),
-       LG = ZG(36955),
-       yG = ZG(8759),
-       kG = ZG(1389),
-       UG = ZG(51),
-       YG = ZG(59),
-       VG = ZG(1067);
+     var OM = iM(35017),
+       SM = iM(37542),
+       jM = iM(37544),
+       aM = iM(9328),
+       PM = iM(1516),
+       nM = iM(44),
+       QM = iM(65),
+       zM = iM(1303);
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L22-L23)

```diff
-       return (0, kG.j)(SG.c, (0, SG.l)()), (0, VG.jsx)(VG.Fragment, {
-         children: null === (GG = (0, SG.l)()) || void 0 === GG ? void 0 : GG.content
+       return (0, PM.e)(SM.e, (0, SM.t)()), (0, zM.jsx)(zM.Fragment, {
+         children: null === (MM = (0, SM.t)()) || void 0 === MM ? void 0 : MM.content
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L32-L33)

```diff
-       (0, kG.j)(SG.c, (0, SG.l)());
-       const YG = null === (bG = (0, SG.l)()) || void 0 === bG ? void 0 : bG.menu;
+       (0, PM.e)(SM.e, (0, SM.t)());
+       const QM = null === (rM = (0, SM.t)()) || void 0 === rM ? void 0 : rM.menu;
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L36-L37)

```diff
-         ZG || (null === YG || void 0 === YG || null === (GG = YG.onClose) || void 0 === GG || GG.call(YG), (0, LG.m)())
-       }), [ZG, YG]), (0, UG.useEffect)((() => ZG ? (0, yG.g)(LG.t, LG.f) : void 0), [ZG]), (0, VG.jsx)(wG.b, {
+         iM || (null === QM || void 0 === QM || null === (MM = QM.onClose) || void 0 === MM || MM.call(QM), (0, jM.q)())
+       }), [iM, QM]), (0, nM.useEffect)((() => iM ? (0, aM.e)(jM.y, jM.f) : void 0), [iM]), (0, zM.jsx)(OM.e, {
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L49)

```diff
-         id: `clientGameHud-${bG}`,
+         id: `clientGameHud-${rM}`,
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L63)

```diff
-         SG(document.getElementById(`clientGameHud-${ZG}`))
+         SM(document.getElementById(`clientGameHud-${iM}`))
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L67)

```diff
-   34472: (GG, bG, ZG) => {
+   35017: (MM, rM, iM) => {
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L69)

```diff
-       b: () => LG
+       e: () => jM
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L71-L72)

```diff
-     var wG = ZG(4558),
-       SG = ZG(4561);
+     var OM = iM(4919),
+       SM = iM(4923);
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L83)

```diff
-       return (0, SG.e)(!0, ZG, LG, UG), (0, wG.d)(kG, ZG), ZG || yG ? bG : null
+       return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L86)

```diff
-   37039: (GG, bG, ZG) => {
+   37629: (MM, rM, iM) => {
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L88)

```diff
-       d: () => LG,
+       c: () => jM,
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L90-L91` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L90-L91) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L90-L91)

```diff
-       f: () => kG,
-       i: () => UG
+       g: () => PM,
+       h: () => nM
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L93-L94)

```diff
-     var wG = ZG(51),
-       SG = ZG(3100);
+     var OM = iM(44),
+       SM = iM(3508);
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L100)

```diff
-       const [bG] = (0, SG.b)(), [ZG, UG] = (0, wG.useState)(!1);
+       const [rM] = (0, SM.d)(), [iM, nM] = (0, OM.useState)(!1);
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L103-L104` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L103-L104) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L103-L104)

```diff
-         const bG = document.querySelector(`.${yG}`),
-           ZG = document.querySelector(`.${kG}`),
+         const rM = document.querySelector(`.${aM}`),
+           iM = document.querySelector(`.${PM}`),
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L121)

```diff
-   37035: (GG, bG, ZG) => {
+   40515: (MM, rM, iM) => {
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L123` → after: `L123-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L123-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L123-L168) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L123)

```diff
-       d: () => SG
+       d: () => aM,
+       g: () => SM,
+       j: () => jM
+     });
+     var OM = iM(44);
+ 
+     function SM(MM) {
+       return PM(MM, nM)
+     }
+ 
+     function jM(MM) {
+       return PM(MM, QM)
+     }
+ 
+     function aM(MM) {
+       return `${Math.floor(MM/60)}:${String(MM%60).padStart(2,"0")}`
+ ... (30 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L150` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L195) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L150)

```diff
-   8759: (GG, bG, ZG) => {
+   9328: (MM, rM, iM) => {
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L153` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L198) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L153)

```diff
-       g: () => SG
+       e: () => SM
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L170` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L215) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L170)

```diff
-   38957: (GG, bG, ZG) => {
+   39543: (MM, rM, iM) => {
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L176` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L221) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L176)

```diff
-       } = ZG, yG = null !== (wG = GG.text) && void 0 !== wG ? wG : GG, kG = (yG.x / 100 - .5) * SG, UG = (yG.y / 100 - .5) * LG, YG = SG / 2 - bG.x;
+       } = iM, aM = null !== (OM = MM.text) && void 0 !== OM ? OM : MM, PM = (aM.x / 100 - .5) * SM, nM = (aM.y / 100 - .5) * jM, QM = SM / 2 - rM.x;
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L181` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L226) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L181)

```diff
-       const VG = Math.min(0 === kG ? 1 / 0 : YG / Math.abs(kG), UG > 0 ? (LG / 2 - bG.bottom) / UG : UG < 0 ? (bG.top - LG / 2) / UG : 1 / 0);
+       const zM = Math.min(0 === PM ? 1 / 0 : QM / Math.abs(PM), nM > 0 ? (jM / 2 - rM.bottom) / nM : nM < 0 ? (rM.top - jM / 2) / nM : 1 / 0);
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L194` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L239) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L194)

```diff
-   36955: (GG, bG, ZG) => {
+   37544: (MM, rM, iM) => {
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L198` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L244) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L198)

```diff
-       h: () => dG,
+       i: () => dM,
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L202-L205` → after: `L247-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L247-L250) · [Before (L202-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L202-L205)

```diff
-       p: () => pG,
-       r: () => zG,
-       t: () => KG,
-       x: () => rG
+       q: () => yM,
+       u: () => LM,
+       x: () => EM,
+       y: () => hM
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L207-L208` → after: `L252-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L252-L253) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L207-L208)

```diff
-     var wG = ZG(17),
-       SG = ZG(19);
+     var OM = iM(19),
+       SM = iM(22);
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L215` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L260) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L215)

```diff
-         return (null !== (ZG = GG.order) && void 0 !== ZG ? ZG : 0) - (null !== (wG = bG.order) && void 0 !== wG ? wG : 0)
+         return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L232` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L277) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L232)

```diff
-       GG.panel && "clientGame" === wG.e.get("openInGameMenuName") && YG(GG.id)
+       MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L258` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L303) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L258)

```diff
-       "inventory" !== wG.e.get("openInGameMenuName") && YG(null)
+       "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
```

#### 34. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L267-L268` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L312-L313) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L267-L268)

```diff
-       return yG.set(GG.id, GG), SG.l.xh(LG, kG(), !0), () => {
-         yG.get(GG.id) === GG && (yG.delete(GG.id), SG.l.xh(LG, kG()))
+       return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
+         aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
```

#### 35. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L272` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L317) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L272)

```diff
-   36951: (GG, bG, ZG) => {
+   37542: (MM, rM, iM) => {
```

#### 36. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L274-L279` → after: `L319-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L319-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L319-L323) · [Before (L274-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L274-L279)

```diff
-       c: () => kG,
-       f: () => dG,
-       i: () => JG,
-       j: () => fG,
-       l: () => YG,
-       m: () => hG,
+       A: () => HM,
+       C: () => zM,
+       e: () => PM,
+       g: () => lM,
+       k: () => dM,
```

#### 37. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L281` → after: `L325-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L325-L327) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L281)

```diff
-       q: () => VG
+       p: () => mM,
+       t: () => QM,
+       w: () => JM
```

#### 38. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L283-L286` → after: `L329-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L329-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L329-L332) · [Before (L283-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L283-L286)

```diff
-     var wG = ZG(17),
-       SG = ZG(19),
-       LG = ZG(1251),
-       yG = ZG(36955);
+     var OM = iM(19),
+       SM = iM(22),
+       jM = iM(1313),
+       aM = iM(37544);
```

#### 39. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L299-L300` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L345-L346) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L299-L300)

```diff
-       return UG = ZG, SG.l.xh(kG, UG, !0), () => {
-         UG === ZG && (UG = null, KG = !1, dG(), SG.l.xh(kG, null))
+       return nM = iM, SM.i.Tz(PM, nM, !0), () => {
+         nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
```

#### 40. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L317-L318` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L363-L364) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L317-L318)

```diff
-       const GG = wG.e.get("openInGameMenuName");
-       "clientGame" !== GG && (KG = "inventory" === GG), (0, yG.k)() || (0, yG.h)(), (0, LG.z)(LG.e), wG.e.set({
+       const MM = OM.d.get("openInGameMenuName");
+       "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
```

#### 41. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L333` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L383) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L333)

```diff
-       "clientGame" === wG.e.get("openInGameMenuName") && wG.e.set({
+       "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
```

#### 42. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L335` → after: `L385-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L385-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L385-L491) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L335)

```diff
-       }), GG || (0, yG.h)(), KG = !1
+       }), MM || (0, aM.i)(), hM = !1
+     }
+   },
+   40520: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => nM
+     });
+     var OM = iM(37624),
+       SM = iM(1188),
+       jM = iM(1258),
+       aM = iM(39491),
+       PM = iM(39543);
+     class nM {
+       constructor(MM, rM) {
+         var iM;
+         this.classes = MM, this.distanceKey = rM, this.markers = new Map, this.refs = new Map, this.viewport = {
+ ... (91 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L338` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L494) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L338)

```diff
-   39851: (GG, bG, ZG) => {
+   40513: (MM, rM, iM) => {
```

#### 44. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L343-L348` → after: `L499-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L499-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L499-L504) · [Before (L343-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L343-L348)

```diff
-     var SG = ZG(51),
-       LG = ZG(36951),
-       yG = ZG(37396),
-       kG = ZG(36965),
-       UG = ZG(1702),
-       YG = ZG(19);
+     var SM = iM(44),
+       jM = iM(37542),
+       aM = iM(37975),
+       PM = iM(37554),
+       nM = iM(1830),
+       QM = iM(22);
```

#### 45. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L442` → after: `L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L598) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L442)

```diff
-         for (let yG = 0; yG < 4; yG++) ZG.push((SG = yG * bG + .35, LG = (yG + 1) * bG - .35, KG(`M${pG+(wG=6+GG)*Math.cos(SG)} ${pG+wG*Math.sin(SG)} A${wG} ${wG} 0 0 1 ${pG+wG*Math.cos(LG)} ${pG+wG*Math.sin(LG)}`, 2)));
+         for (let aM = 0; aM < 4; aM++) iM.push((SM = aM * rM + .35, jM = (aM + 1) * rM - .35, hM(`M${LM+(OM=6+MM)*Math.cos(SM)} ${LM+OM*Math.sin(SM)} A${OM} ${OM} 0 0 1 ${LM+OM*Math.cos(jM)} ${LM+OM*Math.sin(jM)}`, 2)));
```

#### 46. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L447` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L603) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L447)

```diff
-       marksman: GG => [KG(`M${26-GG/2} ${39+GG/2} L32 33 L${38+GG/2} ${39+GG/2}`, 2), fG(14 - GG, pG, 24 - GG, pG, 1.5), fG(40 + GG, pG, 50 + GG, pG, 1.5), fG(14 - GG, 30, 14 - GG, 34, 1.5), fG(50 + GG, 30, 50 + GG, 34, 1.5)],
+       marksman: MM => [hM(`M${26-MM/2} ${39+MM/2} L32 33 L${38+MM/2} ${39+MM/2}`, 2), mM(14 - MM, LM, 24 - MM, LM, 1.5), mM(40 + MM, LM, 50 + MM, LM, 1.5), mM(14 - MM, 30, 14 - MM, 34, 1.5), mM(50 + MM, 30, 50 + MM, 34, 1.5)],
```

#### 47. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L456` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L612) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L456)

```diff
-           ]) ZG.push(KG(`M${pG+wG*bG} ${pG+SG*(bG-5)} L${pG+wG*bG} ${pG+SG*bG} L${pG+wG*(bG-5)} ${pG+SG*bG}`, 2));
+           ]) iM.push(hM(`M${LM+OM*rM} ${LM+SM*(rM-5)} L${LM+OM*rM} ${LM+SM*rM} L${LM+OM*(rM-5)} ${LM+SM*rM}`, 2));
```

#### 48. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L469-L471` → after: `L625-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L625-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L625-L627) · [Before (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L469-L471)

```diff
-       } = GG, SG = `<${bG}`;
-       for (const [LG, yG] of Object.entries(ZG)) SG += ` ${LG}="${yG}"`;
-       return void 0 === wG ? `${SG}/>` : `${SG}>${wG}</${bG}>`
+       } = MM, SM = `<${rM}`;
+       for (const [jM, aM] of Object.entries(iM)) SM += ` ${jM}="${aM}"`;
+       return void 0 === OM ? `${SM}/>` : `${SM}>${OM}</${rM}>`
```

#### 49. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L479` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L635) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L479)

```diff
-         }, this.tokens = [YG.l.subscribe("aimingOverlay", (GG => {
+         }, this.tokens = [QM.i.subscribe("aimingOverlay", (MM => {
```

#### 50. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L481` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L637) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L481)

```diff
-         })), YG.l.subscribe("mouseState", (GG => {
+         })), QM.i.subscribe("mouseState", (MM => {
```

#### 51. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L496` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L652) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L496)

```diff
-         } = this, LG = SG.isAlive(this.localPlayerId) && null !== (ZG = null === (wG = SG.YZG(this.localPlayerId)) || void 0 === wG ? void 0 : wG.name) && void 0 !== ZG ? ZG : null, yG = (kG = LG) && VG[kG] || null;
+         } = this, jM = SM.isAlive(this.localPlayerId) && null !== (iM = null === (OM = SM.TrM(this.localPlayerId)) || void 0 === OM ? void 0 : OM.name) && void 0 !== iM ? iM : null, aM = (PM = jM) && zM[PM] || null;
```

#### 52. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L506` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L662) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L506)

```diff
-           QG = null !== UG && void 0 !== UG ? UG : 0;
+           HM = null !== nM && void 0 !== nM ? nM : 0;
```

#### 53. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L512` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L668) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L512)

```diff
-         for (const GG of this.tokens) YG.l.unsubscribe(GG);
+         for (const MM of this.tokens) QM.i.unsubscribe(MM);
```

#### 54. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L518-L519` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L674-L675) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L518-L519)

```diff
-           return `<svg viewBox="0 0 64 64">${JG[GG](bG).map(rG).join("")}</svg>`
-         }(GG, bG), this.shapes = Array.from(null !== (ZG = null === (wG = this.element.firstElementChild) || void 0 === wG ? void 0 : wG.children) && void 0 !== ZG ? ZG : [])) : bG !== this.drawnGap && (this.drawnGap = bG, function(GG, bG, ZG) {
+           return `<svg viewBox="0 0 64 64">${yM[MM](rM).map(lM).join("")}</svg>`
+         }(MM, rM), this.shapes = Array.from(null !== (iM = null === (OM = this.element.firstElementChild) || void 0 === OM ? void 0 : OM.children) && void 0 !== iM ? iM : [])) : rM !== this.drawnGap && (this.drawnGap = rM, function(MM, rM, iM) {
```

#### 55. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L533` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L689) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L533)

```diff
-         const ZG = GG * yG.g / 2;
+         const iM = MM * aM.e / 2;
```

#### 56. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L552` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L708) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L552)

```diff
-         }, this.maxHealth = null, this.aG = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = GG => {
+         }, this.maxHealth = null, this.fj = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = MM => {
```

#### 57. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L554-L555` → after: `L710-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L710-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L710-L711) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L554-L555)

```diff
-           this.clearHits(), this.root = GG, this.lowLayer = null !== (bG = null === GG || void 0 === GG ? void 0 : GG.querySelector(".FrontlineDamageLow")) && void 0 !== bG ? bG : null, this.arcLayer = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.querySelector(".Fron … [truncated]
-         }, this.token = YG.l.subscribe("damagedByOtherPlayer", (GG => {
+           this.clearHits(), this.root = MM, this.lowLayer = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.querySelector(".FrontlineDamageLow")) && void 0 !== rM ? rM : null, this.arcLayer = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.querySelector(".Fron … [truncated]
+         }, this.token = QM.i.subscribe("damagedByOtherPlayer", (MM => {
```

#### 58. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L558` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L714) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L558)

```diff
-             FG: ZG
+             Zj: iM
```

#### 59. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L571` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L727) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L571)

```diff
-         YG.l.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(EG)
+         QM.i.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(UM)
```

#### 60. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L581-L582` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L737-L738) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L581-L582)

```diff
-         if (this.readHealth = GG, this.readShield = bG, this.readMaxHealth = ZG, null === GG || void 0 === GG || !ZG) return this.lastHealthPool = null, this.maxHealth = null, this.aG = 1, this.dead = !1, void this.drawLow();
-         const wG = GG + (null !== bG && void 0 !== bG ? bG : 0);
+         if (this.readHealth = MM, this.readShield = rM, this.readMaxHealth = iM, null === MM || void 0 === MM || !iM) return this.lastHealthPool = null, this.maxHealth = null, this.fj = 1, this.dead = !1, void this.drawLow();
+         const OM = MM + (null !== rM && void 0 !== rM ? rM : 0);
```

#### 61. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L594` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L750) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L594)

```diff
-         this.dead = GG <= 0, this.dead && this.clearHits(), this.lastHealthPool = wG, this.maxHealth = ZG, this.aG = GG > 0 ? GG / ZG : 1, this.drawLow()
+         this.dead = MM <= 0, this.dead && this.clearHits(), this.lastHealthPool = OM, this.maxHealth = iM, this.fj = MM > 0 ? MM / iM : 1, this.drawLow()
```

#### 62. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L614-L617` → after: `L770-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L770-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L770-L773) · [Before (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L614-L617)

```diff
-         const GG = CG((oG - this.aG) / .25),
-           bG = CG((XG - this.aG) / .15000000000000002),
-           ZG = this.aG < oG;
-         this.lowLayer.classList.toggle("Active", ZG), this.lowLayer.classList.toggle("Critical", this.aG < XG), this.lowLayer.style.opacity = String(ZG ? .55 + .3 * GG + .15 * bG : 0)
+         const MM = wM((GM - this.fj) / .25),
+           rM = wM((CM - this.fj) / .15000000000000002),
+           iM = this.fj < GM;
+         this.lowLayer.classList.toggle("Active", iM), this.lowLayer.classList.toggle("Critical", this.fj < CM), this.lowLayer.style.opacity = String(iM ? .55 + .3 * MM + .15 * rM : 0)
```

#### 63. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L669` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L825) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L669)

```diff
-         (null === GG.drawnAngle || Math.abs(bG - GG.drawnAngle) > .005) && (GG.drawnAngle = bG, GG.element.style.rotate = `${bG}rad`)
+         (null === MM.drawnAngle || Math.abs(rM - MM.drawnAngle) > .005) && (MM.drawnAngle = rM, MM.element.style.rotate = `${rM}rad`)
```

#### 64. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L674` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L830) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L674)

```diff
-         let LG = this.flashes.find((bG => null === bG.angle || null === GG ? bG.angle === GG : iG(bG.angle, GG) < .5));
+         let jM = this.flashes.find((rM => null === rM.angle || null === MM ? rM.angle === MM : bM(rM.angle, MM) < .5));
```

#### 65. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L724` → after: `L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L880) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L724)

```diff
-         LG.glow.classList.toggle("Everywhere", null === GG), fG.setProperty("--glowX", `${UG}px`), fG.setProperty("--glowY", `${YG}px`), fG.setProperty("--glowRx", `${VG}px`), fG.setProperty("--glowRy", `${pG}px`), LG.element.style.transformOrigin = `${UG}px ${YG}px`, null === (S … [truncated]
+         jM.glow.classList.toggle("Everywhere", null === MM), mM.setProperty("--glowX", `${nM}px`), mM.setProperty("--glowY", `${QM}px`), mM.setProperty("--glowRx", `${zM}px`), mM.setProperty("--glowRy", `${LM}px`), jM.element.style.transformOrigin = `${nM}px ${QM}px`, null === (S … [truncated]
```

#### 66. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L775` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L931) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L775)

```diff
-     var mG = ZG(1006),
+     var gM = iM(1116),
```

#### 67. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L777-L780` → after: `L933-L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L933-L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L933-L937) · [Before (L777-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L777-L780)

```diff
-       FG = ZG(36946),
-       vG = ZG(37039),
-       aG = ZG(1151),
-       cG = ZG(1389);
+       RM = iM(37538),
+       pM = iM(37629),
+       WM = iM(1188),
+       sM = iM(1516),
+       DM = iM(40515);
```

#### 68. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L797` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L954) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L797)

```diff
-         this.wire = GG, YG.l.xh(lG, GG, !0)
+         this.wire = MM, QM.i.Tz(kM, MM, !0)
```

#### 69. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L805` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L962) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L805)

```diff
-         }, YG.l.xh(jG, this.scoreboard, !0)
+         }, QM.i.Tz(ZM, this.scoreboard, !0)
```

#### 70. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L808` → after: `L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L965) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L808)

```diff
-     var MG = ZG(1067);
+     var fM = iM(1303);
```

#### 71. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L836` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L978) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L836)

```diff
-         className: IG()(bG, `Owner-${SG||"None"}`, `Leader-${yG||"None"}`, {
+         className: uM()(rM, `Owner-${SM||"None"}`, `Leader-${aM||"None"}`, {
```

#### 72. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L846` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L988) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L846)

```diff
-             width: `${LG}%`
+             width: `${jM}%`
```

#### 73. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L858` → after: `L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1000) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L858)

```diff
-         } = (0, aG.w)();
+         } = (0, WM.A)();
```

#### 74. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L864` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1006) · [Before (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L864)

```diff
-               ref: ZG.bindMarker(bG),
+               ref: iM.points.bindMarker(rM),
```

#### 75. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L872` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1014) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L872)

```diff
-                   className: IG()("FrontlinePointMarkerHomeTurf", `Team-${SG}`),
+                   className: uM()("FrontlinePointMarkerHomeTurf", `Team-${SM}`),
```

#### 76. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L905-L906` → after: `L1047-L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1047-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1047-L1048) · [Before (L905-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L905-L906)

```diff
-       const LG = (0, cG.j)(lG, bG.getWire()),
-         yG = (0, cG.j)(jG, bG.getScoreboard());
+       const jM = (0, sM.e)(kM, rM.getWire()),
+         aM = (0, sM.e)(ZM, rM.getScoreboard());
```

#### 77. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L918` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1060) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L918)

```diff
-         }), (0, MG.jsx)(FG.d, {
+         }), (0, fM.jsx)(RM.i, {
```

#### 78. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L948` → after: `L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1090) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L948)

```diff
-         } = (0, aG.w)();
+         } = (0, WM.A)();
```

#### 79. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L952` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1094) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L952)

```diff
-             className: IG()("FrontlinePlate", `Status-${wG}`, `Leader-${LG||"None"}`),
+             className: uM()("FrontlinePlate", `Status-${OM}`, `Leader-${jM||"None"}`),
```

#### 80. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L986` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1128) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L986)

```diff
-             className: IG()("FrontlinePlate", "FrontlineAlert", `Tone-${SG}`),
+             className: uM()("FrontlinePlate", "FrontlineAlert", `Tone-${SM}`),
```

#### 81. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1004` → after: `L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1146) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1004)

```diff
-         } = (0, aG.w)(), wG = (0, SG.useRef)(null), LG = function(GG, bG) {
+         } = (0, WM.A)(), OM = (0, SM.useRef)(null), jM = function(MM, rM) {
```

#### 82. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1009-L1010` → after: `L1151-L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1151-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1151-L1152) · [Before (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1009-L1010)

```diff
-             const ZG = document.querySelector(`.${vG.e}`),
-               SG = document.querySelector(`.${vG.f}`),
+             const iM = document.querySelector(`.${pM.e}`),
+               SM = document.querySelector(`.${pM.g}`),
```

#### 83. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1015` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1157) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1015)

```diff
-                   kG = bG.getBoundingClientRect().width - 2 * (null !== (GG = null === LG || void 0 === LG ? void 0 : LG.getBoundingClientRect().width) && void 0 !== GG ? GG : 0),
+                   PM = rM.getBoundingClientRect().width - 2 * (null !== (MM = null === jM || void 0 === jM ? void 0 : jM.getBoundingClientRect().width) && void 0 !== MM ? MM : 0),
```

#### 84. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1019` → after: `L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1161) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1019)

```diff
-                   fG = Math.min(YG - VG, pG - YG) - vG.d - kG / 2,
+                   mM = Math.min(QM - zM, LM - QM) - pM.c - PM / 2,
```

#### 85. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1021-L1022` → after: `L1163-L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1163-L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1163-L1164) · [Before (L1021-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1021-L1022)

```diff
-                   KG = QG ? (window.innerWidth - kG) / 2 - vG.d : fG;
-                 bG.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(KG,14*yG)))}px`), wG(QG)
+                   hM = HM ? (window.innerWidth - PM) / 2 - pM.c : mM;
+                 rM.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(hM,14*aM)))}px`), OM(HM)
```

#### 86. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1081` → after: `L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1223) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1081)

```diff
-       } = (0, aG.w)(), yG = String(ZG).padStart(3, "0"), kG = yG.search(/[1-9]/), UG = -1 === kG ? yG : yG.slice(0, kG), YG = Math.min(20, Math.floor(ZG / wG * 20));
+       } = (0, WM.A)(), aM = String(iM).padStart(3, "0"), PM = aM.search(/[1-9]/), nM = -1 === PM ? aM : aM.slice(0, PM), QM = Math.min(20, Math.floor(iM / OM * 20));
```

#### 87. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1083` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1225) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1083)

```diff
-         className: IG()("FrontlineTeamScore", SG, `Team-${bG}`),
+         className: uM()("FrontlineTeamScore", SM, `Team-${rM}`),
```

#### 88. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1124-L1125` → after: `L1266-L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1266-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1266-L1267) · [Before (L1124-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1124-L1125)

```diff
-       const ZG = Math.max(0, Math.ceil(sG(bG)));
-       return (0, MG.jsxs)("div", {
+       const iM = (0, DM.j)(rM);
+       return (0, fM.jsx)("div", {
```

#### 89. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1129` → after: `L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1271) · [Before (L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1129)

```diff
-         children: [Math.floor(ZG / 60), ":", String(ZG % 60).padStart(2, "0")]
+         children: (0, DM.d)(iM)
```

#### 90. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1142-L1145` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1284) · [Before (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1142-L1145)

```diff
-     var BG = ZG(37035),
-       Gb = ZG(1204),
-       bb = ZG(38901),
-       Zb = ZG(38957);
+     var cM = iM(40520);
```

#### 91. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1148-L1164` → after: `L1287-L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1287-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1287-L1290) · [Before (L1148-L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1148-L1164)

```diff
-         var bG;
-         this.hud = GG, this.markers = new Map, this.refs = new Map, this.viewport = {
-           width: window.innerWidth,
-           height: window.innerHeight
-         }, this.render = null, this.pK = !1, this.PJ = () => {
-           this.viewport = {
-             width: window.innerWidth,
-             height: window.innerHeight
-           }
-         }, window.addEventListener("resize", this.PJ), null === (bG = window.visualViewport) || void 0 === bG || bG.addEventListener("resize", this.PJ)
-       }
-       bindMarker(GG) {
-         let bG = this.refs.get(GG);
-         return bG || (bG = bG => {
-           var ZG;
-           null === (ZG = this.markers.get(GG)) || void 0 === ZG || ZG.stopObserving(), this.markers.delete(GG), bG && !this.pK && this.markers.set(GG, this.mount(bG))
- ... (1 more removed lines; see GitHub link above)
+         this.hud = MM, this.points = new cM.e({
+           labels: "FrontlinePointMarkerLabels",
+           distance: "FrontlinePointMarkerDistance"
+         }, "frontlineHud:markerDistance")
```

#### 92. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1167` → after: `L1293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1293) · [Before (L1167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1167)

```diff
-         this.render = GG;
+         this.points.setRender(MM);
```

#### 93. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1169-L1236` → after: `L1295-L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1295-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1295-L1296) · [Before (L1169-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1169-L1236)

```diff
-         if ("scoreboard" === ZG[0] && 0 !== this.markers.size)
-           for (const [wG, , , , , , SG] of ZG[6]) {
-             const GG = this.markers.get(wG);
-             GG && SG && (GG.target ??= [0, 0, 0], GG.target[0] = SG[0], GG.target[1] = SG[1] + 2.5, GG.target[2] = SG[2], this.place(GG), this.Mb(GG, bG && Math.hypot(SG[0] - bG[0], SG[1] - bG[1], SG[2] - bG[2])))
-           }
-       }
-       dispose() {
-         var GG;
-         this.pK = !0, window.removeEventListener("resize", this.PJ), null === (GG = window.visualViewport) || void 0 === GG || GG.removeEventListener("resize", this.PJ);
-         for (const bG of this.markers.values()) bG.stopObserving();
-         this.markers.clear(), this.refs.clear(), this.render = null
-       }
-       place(GG) {
-         const {
-           render: bG,
-           viewport: ZG
- ... (52 more removed lines; see GitHub link above)
+         if ("scoreboard" === iM[0] && this.points.hasMarkers())
+           for (const [OM, , , , , , SM] of iM[6]) SM && this.points.update(OM, SM[0], SM[1] + 2.5, SM[2], rM)
```

#### 94. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1239-L1240` → after: `L1299-L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1299-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1299-L1300) · [Before (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1239-L1240)

```diff
-     var Sb = ZG(6453),
-       Lb = ZG(2602);
+     var rr = iM(6897),
+       ir = iM(2843);
```

#### 95. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1259` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1319) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1259)

```diff
-         }, YG.l.xh(yb, this.view, !0)
+         }, QM.i.Tz(Or, this.view, !0)
```

#### 96. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1262` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1322) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1262)

```diff
-     const Ub = (0, SG.lazy)((() => (0, Lb.e)(Promise.all([ZG.e(239), ZG.e(202)]).then((() => ZG(42210))), (GG => GG.FrontlineMvpLineup)))),
+     const jr = (0, SM.lazy)((() => (0, ir.e)(Promise.all([iM.e(257), iM.e(225)]).then((() => iM(44401))), (MM => MM.FrontlineMvpLineup)))),
```

#### 97. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1276-L1277` → after: `L1336-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1336-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1336-L1337) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1276-L1277)

```diff
-       const ZG = (0, cG.j)(yb, bG.getView()),
-         wG = sG(ZG.endsAt);
+       const iM = (0, sM.e)(Or, rM.getView()),
+         OM = (0, DM.g)(iM.endsAt);
```

#### 98. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1290` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1350) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1290)

```diff
-       } = (0, aG.w)(), [, yG, kG, UG, YG, , VG, pG] = bG, fG = (0, SG.useMemo)((() => Vb.filter((GG => GG < pG.length))), [pG]), QG = (0, SG.useMemo)((() => fG.map((GG => {
+       } = (0, WM.A)(), [, aM, PM, nM, QM, , zM, LM] = rM, mM = (0, SM.useMemo)((() => Pr.filter((MM => MM < LM.length))), [LM]), HM = (0, SM.useMemo)((() => mM.map((MM => {
```

#### 99. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1303` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1363) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1303)

```diff
-         className: IG()("FrontlineRoundEnd", `Result-${yG}`),
+         className: uM()("FrontlineRoundEnd", `Result-${aM}`),
```

#### 100. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1317` → after: `L1377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1377) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1317)

```diff
-             }), (KG = LG(pb[yG]), /\p{Script=Arabic}/u.test(KG) ? [KG] : (0, Sb.d)(KG)).map(((GG, bG) => (0, MG.jsx)("span", {
+             }), (hM = jM(nr[aM]), /\p{Script=Arabic}/u.test(hM) ? [hM] : (0, rr.b)(hM)).map(((MM, rM) => (0, fM.jsx)("span", {
```

#### 101. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1372-L1373` → after: `L1432-L1433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1432-L1433) · [Before (L1372-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1372-L1373)

```diff
-       } = (0, aG.w)(), [SG, LG, yG, kG, UG] = bG, [YG, VG] = wG(function(GG, bG) {
-         return 1 === bG && "damage" !== GG ? `frontlineRoundEnd:${GG}One` : `frontlineRoundEnd:${GG}`
+       } = (0, WM.A)(), [SM, jM, aM, PM, nM] = rM, [QM, zM] = OM(function(MM, rM) {
+         return 1 === rM && "damage" !== MM ? `frontlineRoundEnd:${MM}One` : `frontlineRoundEnd:${MM}`
```

#### 102. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1379` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1439) · [Before (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1379)

```diff
-         className: IG()("FrontlineMvpCard", `Place-${ZG+1}`, `Team-${LG}`),
+         className: uM()("FrontlineMvpCard", `Place-${iM+1}`, `Team-${jM}`),
```

#### 103. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1381` → after: `L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1441) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1381)

```diff
-           "--revealMs": `${Yb[ZG]}ms`
+           "--revealMs": `${ar[iM]}ms`
```

#### 104. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1417` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1477) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1417)

```diff
-         null === (GG = VG) || void 0 === GG || GG.DW(!ZG), null === (bG = pG) || void 0 === bG || bG.DW(!wG)
+         null === (MM = zM) || void 0 === MM || MM.kR(!iM), null === (rM = LM) || void 0 === rM || rM.kR(!OM)
```

#### 105. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1421` → after: `L1481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1481) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1421)

```diff
-           YG = GG, VG = new zG(GG, yG), pG = new uG(GG, yG), fG = new wb(kG), hG(), QG = (0, LG.q)((0, SG.createElement)(SG.Fragment, null, (0, SG.createElement)(RG, {
+           QM = MM, zM = new EM(MM, aM), LM = new eM(MM, aM), mM = new Mr(PM), JM(), HM = (0, jM.C)((0, SM.createElement)(SM.Fragment, null, (0, SM.createElement)(FM, {
```

#### 106. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1432` → after: `L1492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1492) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1432)

```diff
-           null === (GG = QG) || void 0 === GG || GG(), null === (bG = VG) || void 0 === bG || bG.dispose(), VG = null, null === (ZG = pG) || void 0 === ZG || ZG.dispose(), pG = null, null === (wG = fG) || void 0 === wG || wG.dispose(), fG = null, YG = null
+           null === (MM = HM) || void 0 === MM || MM(), null === (rM = zM) || void 0 === rM || rM.dispose(), zM = null, null === (iM = LM) || void 0 === iM || iM.dispose(), LM = null, null === (OM = mM) || void 0 === OM || OM.points.dispose(), mM = null, QM = null
```

#### 107. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1435-L1436` → after: `L1495-L1496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1495-L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1495-L1496) · [Before (L1435-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1435-L1436)

```diff
-           var ZG, wG, SG, LG;
-           null === (ZG = VG) || void 0 === ZG || ZG.frame(GG, bG.tanHalfFovY), null === (wG = pG) || void 0 === wG || wG.frame(bG.cameraHeading), null === (SG = fG) || void 0 === SG || SG.frame(bG, null !== (LG = YG) && void 0 !== LG && LG.checkValid(yG) ? YG.HJ(yG) : null)
+           var iM, OM, SM, jM, PM;
+           null === (iM = zM) || void 0 === iM || iM.frame(MM, rM.tanHalfFovY), null === (OM = LM) || void 0 === OM || OM.frame(rM.cameraHeading), null === (SM = mM) || void 0 === SM || SM.frame(rM, null !== (jM = null === (PM = QM) || void 0 === PM ? void 0 : PM.getPositionView(a … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1439` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1499) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1439)

```diff
-           "frontlineHud" === GG ? kG.hK(bG) : "frontlineScoreboard" === GG ? kG.receiveScoreboard(bG) : "frontlineRoundEnd" === GG ? UG.hK(bG) : "frontlinePrefs" === GG && (KG = bG, hG())
+           "frontlineHud" === MM ? PM.GL(rM) : "frontlineScoreboard" === MM ? PM.receiveScoreboard(rM) : "frontlineRoundEnd" === MM ? nM.GL(rM) : "frontlinePrefs" === MM && (hM = rM, JM())
```

#### 109. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1444` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1504) · [Before (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1444)

```diff
-   6453: (GG, bG, ZG) => {
+   6897: (MM, rM, iM) => {
```

#### 110. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1446` → after: `L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1506) · [Before (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1446)

```diff
-       d: () => SG
+       b: () => SM
```

#### 111. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1461` → after: `L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1521) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1461)

```diff
-   38901: (GG, bG, ZG) => {
+   39491: (MM, rM, iM) => {
```

#### 112. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1463-L1464` → after: `L1523-L1524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1523-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1523-L1524) · [Before (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1463-L1464)

```diff
-       d: () => yG,
-       g: () => LG
+       b: () => aM,
+       e: () => jM
```

#### 113. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1484` → after: `L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1544) · [Before (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1484)

```diff
-       wG.x === bG && wG.y === ZG || (wG.x = bG, wG.y = ZG, GG.style.translate = `${bG}vw ${ZG}vh`)
+       OM.x === rM && OM.y === iM || (OM.x = rM, OM.y = iM, MM.style.translate = `${rM}vw ${iM}vh`)
```

#### 114. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1487` → after: `L1547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1547) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1487)

```diff
-   37420: (GG, bG, ZG) => {
+   38005: (MM, rM, iM) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L1-L2)

```diff
- export const id = 18;
- export const ids = [18];
+ export const id = 19;
+ export const ids = [19];
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L4)

```diff
-   39854: (GG, bG, ZG) => {
+   40528: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L63)

```diff
-             "ballState" === GG ? (UG = null !== (ZG = bG.eId) && void 0 !== ZG ? ZG : null, UG || hG()) : "frozen" === GG ? kG = bG.frozen : "pitchInfo" === GG && (YG = bG.goalZRed, VG = bG.goalZBlue, pG = Math.abs(VG - YG) / 2)
+             "ballState" === MM ? (nM = null !== (iM = rM.eId) && void 0 !== iM ? iM : null, nM || JM()) : "frozen" === MM ? PM = rM.frozen : "pitchInfo" === MM && (QM = rM.goalZRed, zM = rM.goalZBlue, LM = Math.abs(zM - QM) / 2)
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L65)

```diff
-           Tp: GG => {
+           bL: MM => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (74 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L1-L2)

```diff
- export const id = 19;
- export const ids = [19];
+ export const id = 22;
+ export const ids = [22];
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L4)

```diff
-   36946: (GG, bG, ZG) => {
+   37538: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L6-L9` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L6-L9) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L6-L9)

```diff
-       b: () => QG,
-       d: () => KG,
-       g: () => fG,
-       j: () => pG
+       e: () => HM,
+       i: () => hM,
+       m: () => mM,
+       p: () => LM
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L11-L18)

```diff
-     var wG = ZG(34472),
-       SG = ZG(36951),
-       LG = ZG(36955),
-       yG = ZG(8759),
-       kG = ZG(1389),
-       UG = ZG(51),
-       YG = ZG(59),
-       VG = ZG(1067);
+     var OM = iM(35017),
+       SM = iM(37542),
+       jM = iM(37544),
+       aM = iM(9328),
+       PM = iM(1516),
+       nM = iM(44),
+       QM = iM(65),
+       zM = iM(1303);
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L22-L23)

```diff
-       return (0, kG.j)(SG.c, (0, SG.l)()), (0, VG.jsx)(VG.Fragment, {
-         children: null === (GG = (0, SG.l)()) || void 0 === GG ? void 0 : GG.content
+       return (0, PM.e)(SM.e, (0, SM.t)()), (0, zM.jsx)(zM.Fragment, {
+         children: null === (MM = (0, SM.t)()) || void 0 === MM ? void 0 : MM.content
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L32-L33)

```diff
-       (0, kG.j)(SG.c, (0, SG.l)());
-       const YG = null === (bG = (0, SG.l)()) || void 0 === bG ? void 0 : bG.menu;
+       (0, PM.e)(SM.e, (0, SM.t)());
+       const QM = null === (rM = (0, SM.t)()) || void 0 === rM ? void 0 : rM.menu;
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L36-L37)

```diff
-         ZG || (null === YG || void 0 === YG || null === (GG = YG.onClose) || void 0 === GG || GG.call(YG), (0, LG.m)())
-       }), [ZG, YG]), (0, UG.useEffect)((() => ZG ? (0, yG.g)(LG.t, LG.f) : void 0), [ZG]), (0, VG.jsx)(wG.b, {
+         iM || (null === QM || void 0 === QM || null === (MM = QM.onClose) || void 0 === MM || MM.call(QM), (0, jM.q)())
+       }), [iM, QM]), (0, nM.useEffect)((() => iM ? (0, aM.e)(jM.y, jM.f) : void 0), [iM]), (0, zM.jsx)(OM.e, {
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L49)

```diff
-         id: `clientGameHud-${bG}`,
+         id: `clientGameHud-${rM}`,
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L63)

```diff
-         SG(document.getElementById(`clientGameHud-${ZG}`))
+         SM(document.getElementById(`clientGameHud-${iM}`))
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L67)

```diff
-   34472: (GG, bG, ZG) => {
+   35017: (MM, rM, iM) => {
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L69)

```diff
-       b: () => LG
+       e: () => jM
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L71-L72)

```diff
-     var wG = ZG(4558),
-       SG = ZG(4561);
+     var OM = iM(4919),
+       SM = iM(4923);
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L83)

```diff
-       return (0, SG.e)(!0, ZG, LG, UG), (0, wG.d)(kG, ZG), ZG || yG ? bG : null
+       return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L86)

```diff
-   8759: (GG, bG, ZG) => {
+   9328: (MM, rM, iM) => {
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L89)

```diff
-       g: () => SG
+       e: () => SM
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L106)

```diff
-   36955: (GG, bG, ZG) => {
+   37544: (MM, rM, iM) => {
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L110` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L111) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L110)

```diff
-       h: () => dG,
+       i: () => dM,
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L114-L117` → after: `L114-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L114-L117) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L114-L117)

```diff
-       p: () => pG,
-       r: () => zG,
-       t: () => KG,
-       x: () => rG
+       q: () => yM,
+       u: () => LM,
+       x: () => EM,
+       y: () => hM
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L119-L120` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L119-L120) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L119-L120)

```diff
-     var wG = ZG(17),
-       SG = ZG(19);
+     var OM = iM(19),
+       SM = iM(22);
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L127)

```diff
-         return (null !== (ZG = GG.order) && void 0 !== ZG ? ZG : 0) - (null !== (wG = bG.order) && void 0 !== wG ? wG : 0)
+         return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L144)

```diff
-       GG.panel && "clientGame" === wG.e.get("openInGameMenuName") && YG(GG.id)
+       MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L170)

```diff
-       "inventory" !== wG.e.get("openInGameMenuName") && YG(null)
+       "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L179-L180` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L179-L180) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L179-L180)

```diff
-       return yG.set(GG.id, GG), SG.l.xh(LG, kG(), !0), () => {
-         yG.get(GG.id) === GG && (yG.delete(GG.id), SG.l.xh(LG, kG()))
+       return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
+         aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L184)

```diff
-   36951: (GG, bG, ZG) => {
+   37542: (MM, rM, iM) => {
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L186-L191` → after: `L186-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L186-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L186-L190) · [Before (L186-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L186-L191)

```diff
-       c: () => kG,
-       f: () => dG,
-       i: () => JG,
-       j: () => fG,
-       l: () => YG,
-       m: () => hG,
+       A: () => HM,
+       C: () => zM,
+       e: () => PM,
+       g: () => lM,
+       k: () => dM,
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L193` → after: `L192-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L192-L194) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L193)

```diff
-       q: () => VG
+       p: () => mM,
+       t: () => QM,
+       w: () => JM
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L195-L198` → after: `L196-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L196-L199) · [Before (L195-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L195-L198)

```diff
-     var wG = ZG(17),
-       SG = ZG(19),
-       LG = ZG(1251),
-       yG = ZG(36955);
+     var OM = iM(19),
+       SM = iM(22),
+       jM = iM(1313),
+       aM = iM(37544);
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L211-L212` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L212-L213) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L211-L212)

```diff
-       return UG = ZG, SG.l.xh(kG, UG, !0), () => {
-         UG === ZG && (UG = null, KG = !1, dG(), SG.l.xh(kG, null))
+       return nM = iM, SM.i.Tz(PM, nM, !0), () => {
+         nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L229-L230` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L230-L231) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L229-L230)

```diff
-       const GG = wG.e.get("openInGameMenuName");
-       "clientGame" !== GG && (KG = "inventory" === GG), (0, yG.k)() || (0, yG.h)(), (0, LG.z)(LG.e), wG.e.set({
+       const MM = OM.d.get("openInGameMenuName");
+       "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L244-L245` → after: `L245-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L245-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L245-L250) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L244-L245)

```diff
-     function rG(GG) {
-       "clientGame" === wG.e.get("openInGameMenuName") && wG.e.set({
+     function lM() {
+       hM && EM(!1)
+     }
+ 
+     function EM(MM) {
+       "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L247` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L252) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L247)

```diff
-       }), GG || (0, yG.h)(), KG = !1
+       }), MM || (0, aM.i)(), hM = !1
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L250` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L255) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L250)

```diff
-   39859: (GG, bG, ZG) => {
+   40563: (MM, rM, iM) => {
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L264-L266` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L269-L271) · [Before (L264-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L264-L266)

```diff
-     var SG = ZG(51),
-       LG = ZG(38445),
-       yG = ZG(352);
+     var SM = iM(44),
+       jM = iM(39012),
+       aM = iM(332);
```

#### 34. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L270` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L275) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L270)

```diff
-       return `${"Basic"===bG?"":`${bG} `}${"Simple"===GG?"":`${GG} `}Lucky Block`
+       return `${"Basic"===rM?"":`${rM} `}${"Simple"===MM?"":`${MM} `}Lucky Block`
```

#### 35. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L283` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L288) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L283)

```diff
-       QG = [...["Red", "Blue", "Green", "Yellow"].map((GG => `${(0,yG.gb)(GG)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", pG, ...fG];
+       HM = [...["Red", "Blue", "Green", "Yellow"].map((MM => `${(0,aM.$)(MM)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", LM, ...mM];
```

#### 36. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L288` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L293) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L288)

```diff
-     var hG = ZG(604);
+     var JM = iM(625);
```

#### 37. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L304-L306` → after: `L309-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L309-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L309-L311) · [Before (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L304-L306)

```diff
-       length: hG.t - hG.s
-     }, ((GG, bG) => hG.s + bG)), ...Array.from({
-       length: hG.s
+       length: JM.r - JM.q
+     }, ((MM, rM) => JM.q + rM)), ...Array.from({
+       length: JM.q
```

#### 38. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L316` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L321) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L316)

```diff
-         (null === wG || void 0 === wG ? void 0 : wG.name) === GG && (null !== (bG = wG.amount) && void 0 !== bG ? bG : 1) <= 1 && zG(GG) && this.pending.set(ZG, GG)
+         (null === OM || void 0 === OM ? void 0 : OM.name) === MM && (null !== (rM = OM.amount) && void 0 !== rM ? rM : 1) <= 1 && EM(MM) && this.pending.set(iM, MM)
```

#### 39. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L319` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L324) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L319)

```diff
-         bG < hG.s && null === this.inventory.itemAt(bG) && zG(GG) && this.refill(bG, GG)
+         rM < JM.q && null === this.inventory.itemAt(rM) && EM(MM) && this.refill(rM, MM)
```

#### 40. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L332` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L337) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L332)

```diff
-             if (!kG || yG < hG.s && bG !== ZG) continue;
+             if (!PM || aM < JM.q && rM !== iM) continue;
```

#### 41. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L345-L347` → after: `L350-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L350-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L350-L352) · [Before (L345-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L345-L347)

```diff
-     var EG = ZG(36951),
-       oG = ZG(59),
-       XG = ZG(1006),
+     var UM = iM(37542),
+       GM = iM(65),
+       CM = iM(1116),
```

#### 42. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L363-L370` → after: `L368-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L368-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L368-L375) · [Before (L363-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L363-L370)

```diff
-     var IG = ZG(333),
-       FG = ZG(2409),
-       vG = ZG(17),
-       aG = ZG(2549),
-       cG = ZG(1889),
-       lG = ZG(36946),
-       jG = ZG(1016);
-     var PG = ZG(1067);
+     var uM = iM(313),
+       RM = iM(2640),
+       pM = iM(19),
+       WM = iM(2811),
+       sM = iM(2026),
+       DM = iM(37538),
+       kM = iM(1398);
+     var ZM = iM(1303);
```

#### 43. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L372-L374` → after: `L377-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L377-L379) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L372-L374)

```diff
-       Basic: yG.O.whiteUiText,
-       Rare: yG.O.goldUiText,
-       Super: yG.O.cyanUiText
+       Basic: aM.L.whiteUiText,
+       Rare: aM.L.goldUiText,
+       Super: aM.L.cyanUiText
```

#### 44. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L379` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L384) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L379)

```diff
-       const GG = (0, FG.i)("currencyAmounts"),
+       const MM = (0, RM.f)("currencyAmounts"),
```

#### 45. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L381` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L386) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L381)

```diff
-       return !bG || bG.hidden ? null : (0, PG.jsx)(lG.d, {
+       return !rM || rM.hidden ? null : (0, ZM.jsx)(DM.i, {
```

#### 46. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L395` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L400) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L395)

```diff
-       } = (0, vG.o)(["openEverythingMenuName"]), YG = (0, aG.e)(), [VG, pG] = (0, SG.useState)(LG), [fG, QG] = (0, SG.useState)(null), [KG, hG] = (0, SG.useState)(0), [dG, JG] = (0, SG.useState)([]), rG = (0, SG.useRef)(LG), zG = (0, SG.useRef)(!1), EG = (0, SG.useRef)(null), XG  … [truncated]
+       } = (0, pM.m)(["openEverythingMenuName"]), QM = (0, WM.b)(), [zM, LM] = (0, SM.useState)(jM), [mM, HM] = (0, SM.useState)(null), [hM, JM] = (0, SM.useState)(0), [dM, yM] = (0, SM.useState)([]), lM = (0, SM.useRef)(jM), EM = (0, SM.useRef)(!1), UM = (0, SM.useRef)(null), CM  … [truncated]
```

#### 47. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L419` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L424) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L419)

```diff
-           const ZG = yG.c.clamp((bG - kG) / 600, 0, 1);
+           const iM = aM.d.clamp((rM - PM) / 600, 0, 1);
```

#### 48. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L428` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L433) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L428)

```diff
-           const ZG = null !== (bG = kG.find((bG => GG < WG(bG)))) && void 0 !== bG ? bG : "Super";
+           const iM = null !== (rM = PM.find((rM => MM < tM(rM)))) && void 0 !== rM ? rM : "Super";
```

#### 49. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L431` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L436) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L431)

```diff
-             progress: yG.c.clamp(GG / WG(ZG), 0, 1)
+             progress: aM.d.clamp(MM / tM(iM), 0, 1)
```

#### 50. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L448` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L453) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L448)

```diff
-                 transform: `scaleX(${CG.progress})`
+                 transform: `scaleX(${wM.progress})`
```

#### 51. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L453` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L458) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L453)

```diff
-                 animationDelay: `${null!==(bG=null===fG||void 0===fG?void 0:fG.delayMs)&&void 0!==bG?bG:0}ms`
+                 animationDelay: `${null!==(rM=null===mM||void 0===mM?void 0:mM.delayMs)&&void 0!==rM?rM:0}ms`
```

#### 52. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L459` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L464) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L459)

```diff
-                 animationDelay: `${null!==(wG=null===fG||void 0===fG?void 0:fG.delayMs)&&void 0!==wG?wG:0}ms`
+                 animationDelay: `${null!==(OM=null===mM||void 0===mM?void 0:mM.delayMs)&&void 0!==OM?OM:0}ms`
```

#### 53. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L465` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L470) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L465)

```diff
-             }, null !== (ZG = null === fG || void 0 === fG ? void 0 : fG.id) && void 0 !== ZG ? ZG : 0), (0, PG.jsx)("span", {
+             }, null !== (iM = null === mM || void 0 === mM ? void 0 : mM.id) && void 0 !== iM ? iM : 0), (0, ZM.jsx)("span", {
```

#### 54. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L468` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L473) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L468)

```diff
-             }), FG && (0, PG.jsx)(jG.c, {
+             }), RM && (0, ZM.jsx)(kM.b, {
```

#### 55. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L498` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L503) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L498)

```diff
-           transform: `translate(${yG}px, ${kG}px) scale(0.3)`,
+           transform: `translate(${aM}px, ${PM}px) scale(0.3)`,
```

#### 56. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L501` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L506) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L501)

```diff
-           transform: `translate(${UG}px, ${YG}px) scale(1.3)`,
+           transform: `translate(${nM}px, ${QM}px) scale(1.3)`,
```

#### 57. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L505` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L510) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L505)

```diff
-           transform: `translate(${SG.left}px, ${SG.top}px) scale(0.8)`,
+           transform: `translate(${SM.left}px, ${SM.top}px) scale(0.8)`,
```

#### 58. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L525` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L530) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L525)

```diff
-     var gG = ZG(19);
+     var xM = iM(22);
```

#### 59. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L537` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L542) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L537)

```diff
-       return null !== (bG = RG[GG.split(" ")[0]]) && void 0 !== bG ? bG : "#e07bff"
+       return null !== (rM = FM[MM.split(" ")[0]]) && void 0 !== rM ? rM : "#e07bff"
```

#### 60. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L560` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L565) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L560)

```diff
-         this.xh()
+         this.Tz()
```

#### 61. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L575` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L580) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L575)

```diff
-         ZG && this.xh()
+         iM && this.Tz()
```

#### 62. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L581-L587` → after: `L586-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L586-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L586-L592) · [Before (L581-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L581-L587)

```diff
-         }, gG.l.xh(eG, this.view)
-       }
-     }
-     var tG = ZG(1389);
- 
-     function DG(GG) {
-       return document.querySelector(`.HotBar [data-inven-idx="${GG}"]`)
+         }, xM.i.Tz(vM, this.view)
+       }
+     }
+     var IM = iM(1516);
+ 
+     function KM(MM) {
+       return document.querySelector(`.HotBar [data-inven-idx="${MM}"]`)
```

#### 63. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L597` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L602) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L597)

```diff
-         wG(null !== (GG = null === (ZG = DG(bG.slot)) || void 0 === ZG ? void 0 : ZG.getBoundingClientRect()) && void 0 !== GG ? GG : null)
+         OM(null !== (MM = null === (iM = KM(rM.slot)) || void 0 === iM ? void 0 : iM.getBoundingClientRect()) && void 0 !== MM ? MM : null)
```

#### 64. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L638` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L643) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L638)

```diff
-       const ZG = (0, tG.j)(eG, bG.getView());
+       const iM = (0, IM.e)(vM, rM.getView());
```

#### 65. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L665` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L670) · [Before (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L665)

```diff
-           placeAgainstBeds: (0, LG.c)()
+           placeAgainstBeds: (0, jM.d)()
```

#### 66. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L668` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L673) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L668)

```diff
-           kG = GG, YG = (0, EG.q)((0, SG.createElement)(SG.Fragment, null, (0, SG.createElement)(sG), (0, SG.createElement)(xG, {
+           PM = MM, QM = (0, UM.C)((0, SM.createElement)(SM.Fragment, null, (0, SM.createElement)(YM), (0, SM.createElement)(VM, {
```

#### 67. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L676-L677` → after: `L681-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L681-L682) · [Before (L676-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L676-L677)

```diff
-         Tp: () => {
-           VG.Tp(), pG.Tp()
+         bL: () => {
+           zM.bL(), LM.bL()
```

#### 68. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L680` → after: `L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L685) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L680)

```diff
-           "luckyGearUpgrade" === GG && pG.hK(bG)
+           "luckyGearUpgrade" === MM && LM.GL(rM)
```

#### 69. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L697` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L702) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L697)

```diff
-   38445: (GG, bG, ZG) => {
+   39012: (MM, rM, iM) => {
```

#### 70. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L699` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L704) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L699)

```diff
-       c: () => kG
+       d: () => PM
```

#### 71. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L701-L704` → after: `L706-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L706-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L706-L709) · [Before (L701-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L701-L704)

```diff
-     var wG = ZG(352),
-       SG = ZG(37287),
-       LG = ZG(4492);
-     const yG = ["Leaf Bed", "_Leaf Bed Head", ...wG.Sc.flatMap((GG => [`${GG} Bed`, `_${GG} Bed Head`, `${GG} Strongbed`, `_${GG} Strongbed Head`]))];
+     var OM = iM(332),
+       SM = iM(37858),
+       jM = iM(4854);
+     const aM = ["Leaf Bed", "_Leaf Bed Head", ...OM.Ec.flatMap((MM => [`${MM} Bed`, `_${MM} Bed Head`, `${MM} Strongbed`, `_${MM} Strongbed Head`]))];
```

#### 72. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L715` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L720) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L715)

```diff
-           if ((0, SG.d)(GG.getMetaInfo(kG).rootName) && !GG.isEntityInteractable(UG) && (0, LG.d)(null === (YG = GG.YZG(bG)) || void 0 === YG ? void 0 : YG.typeObj.type)) return "preventAction"
+           if ((0, SM.e)(MM.getMetaInfo(PM).rootName) && !MM.isEntityInteractable(nM) && (0, jM.g)(null === (QM = MM.TrM(rM)) || void 0 === QM ? void 0 : QM.typeObj.type)) return "preventAction"
```

#### 73. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L720` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L725) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L720)

```diff
-   37287: (GG, bG, ZG) => {
+   37858: (MM, rM, iM) => {
```

#### 74. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L737-L740` → after: `L742-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L742-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L742-L745) · [Before (L737-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L737-L740)

```diff
-       d: () => yG,
-       f: () => wG,
-       j: () => LG,
-       n: () => SG
+       e: () => aM,
+       g: () => OM,
+       h: () => jM,
+       l: () => SM
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L1-L2)

```diff
- export const id = 20;
- export const ids = [20];
+ export const id = 24;
+ export const ids = [24];
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L4)

```diff
-   39862: (GG, bG, ZG) => {
+   40575: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L8)

```diff
-     var wG = ZG(19);
+     var OM = iM(22);
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L16)

```diff
-           bG || "Workbench" !== SG.getMetaInfo(kG).rootName || wG.l.xh("toggleMenu", "inventory|Workbench")
+           rM || "Workbench" !== SM.getMetaInfo(PM).rootName || OM.i.Tz("toggleMenu", "inventory|Workbench")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729d)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729dR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729d) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L1-L2)

```diff
- export const id = 21;
- export const ids = [21];
+ export const id = 25;
+ export const ids = [25];
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L4)

```diff
-   39864: (GG, bG, ZG) => {
+   40582: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L30)

```diff
-         Tp: () => {
+         bL: () => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (wp3j0a.a13381cf → fo1voe.f743fbcf)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (226 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L1-L2)

```diff
- export const id = 22;
- export const ids = [22];
+ export const id = 26;
+ export const ids = [26];
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4)

```diff
-   36946: (GG, bG, ZG) => {
+   37538: (MM, rM, iM) => {
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L6-L9` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L6-L9) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L6-L9)

```diff
-       b: () => QG,
-       d: () => KG,
-       g: () => fG,
-       j: () => pG
+       e: () => HM,
+       i: () => hM,
+       m: () => mM,
+       p: () => LM
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L11-L18)

```diff
-     var wG = ZG(34472),
-       SG = ZG(36951),
-       LG = ZG(36955),
-       yG = ZG(8759),
-       kG = ZG(1389),
-       UG = ZG(51),
-       YG = ZG(59),
-       VG = ZG(1067);
+     var OM = iM(35017),
+       SM = iM(37542),
+       jM = iM(37544),
+       aM = iM(9328),
+       PM = iM(1516),
+       nM = iM(44),
+       QM = iM(65),
+       zM = iM(1303);
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L22-L23)

```diff
-       return (0, kG.j)(SG.c, (0, SG.l)()), (0, VG.jsx)(VG.Fragment, {
-         children: null === (GG = (0, SG.l)()) || void 0 === GG ? void 0 : GG.content
+       return (0, PM.e)(SM.e, (0, SM.t)()), (0, zM.jsx)(zM.Fragment, {
+         children: null === (MM = (0, SM.t)()) || void 0 === MM ? void 0 : MM.content
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L32-L33)

```diff
-       (0, kG.j)(SG.c, (0, SG.l)());
-       const YG = null === (bG = (0, SG.l)()) || void 0 === bG ? void 0 : bG.menu;
+       (0, PM.e)(SM.e, (0, SM.t)());
+       const QM = null === (rM = (0, SM.t)()) || void 0 === rM ? void 0 : rM.menu;
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L36-L37)

```diff
-         ZG || (null === YG || void 0 === YG || null === (GG = YG.onClose) || void 0 === GG || GG.call(YG), (0, LG.m)())
-       }), [ZG, YG]), (0, UG.useEffect)((() => ZG ? (0, yG.g)(LG.t, LG.f) : void 0), [ZG]), (0, VG.jsx)(wG.b, {
+         iM || (null === QM || void 0 === QM || null === (MM = QM.onClose) || void 0 === MM || MM.call(QM), (0, jM.q)())
+       }), [iM, QM]), (0, nM.useEffect)((() => iM ? (0, aM.e)(jM.y, jM.f) : void 0), [iM]), (0, zM.jsx)(OM.e, {
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L49)

```diff
-         id: `clientGameHud-${bG}`,
+         id: `clientGameHud-${rM}`,
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L63)

```diff
-         SG(document.getElementById(`clientGameHud-${ZG}`))
+         SM(document.getElementById(`clientGameHud-${iM}`))
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L67)

```diff
-   34472: (GG, bG, ZG) => {
+   35017: (MM, rM, iM) => {
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L69)

```diff
-       b: () => LG
+       e: () => jM
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L71-L72)

```diff
-     var wG = ZG(4558),
-       SG = ZG(4561);
+     var OM = iM(4919),
+       SM = iM(4923);
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L83)

```diff
-       return (0, SG.e)(!0, ZG, LG, UG), (0, wG.d)(kG, ZG), ZG || yG ? bG : null
+       return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L86)

```diff
-   37039: (GG, bG, ZG) => {
+   37629: (MM, rM, iM) => {
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L88)

```diff
-       d: () => LG,
+       c: () => jM,
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L90-L91` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L90-L91) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L90-L91)

```diff
-       f: () => kG,
-       i: () => UG
+       g: () => PM,
+       h: () => nM
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L93-L94)

```diff
-     var wG = ZG(51),
-       SG = ZG(3100);
+     var OM = iM(44),
+       SM = iM(3508);
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L100)

```diff
-       const [bG] = (0, SG.b)(), [ZG, UG] = (0, wG.useState)(!1);
+       const [rM] = (0, SM.d)(), [iM, nM] = (0, OM.useState)(!1);
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L103-L104` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L103-L104) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L103-L104)

```diff
-         const bG = document.querySelector(`.${yG}`),
-           ZG = document.querySelector(`.${kG}`),
+         const rM = document.querySelector(`.${aM}`),
+           iM = document.querySelector(`.${PM}`),
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L121)

```diff
-   8759: (GG, bG, ZG) => {
+   9328: (MM, rM, iM) => {
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L124)

```diff
-       g: () => SG
+       e: () => SM
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L141)

```diff
-   38933: (GG, bG, ZG) => {
+   39511: (MM, rM, iM) => {
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L144-L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L145) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L144-L145)

```diff
-       g: () => kG,
-       i: () => UG
+       h: () => nM
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L185)

```diff
-   39868: (GG, bG, ZG) => {
+   40588: (MM, rM, iM) => {
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L191-L197` → after: `L191-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L191-L197) · [Before (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L191-L197)

```diff
-     var LG = ZG(51),
-       yG = ZG(36951),
-       kG = ZG(17),
-       UG = ZG(1389),
-       YG = ZG(1956),
-       VG = ZG(1151),
-       pG = ZG(1006),
+     var jM = iM(44),
+       aM = iM(37542),
+       PM = iM(19),
+       nM = iM(1516),
+       QM = iM(2093),
+       zM = iM(1188),
+       LM = iM(1116),
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L199-L205` → after: `L199-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L199-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L199-L206) · [Before (L199-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L199-L205)

```diff
-       QG = ZG(1579),
-       KG = ZG(36946),
-       hG = ZG(1016),
-       dG = ZG(1889),
-       JG = ZG(1953),
-       rG = ZG(3400),
-       zG = ZG(1702);
+       HM = iM(1717),
+       hM = iM(34831),
+       JM = iM(37538),
+       dM = iM(1398),
+       yM = iM(2026),
+       lM = iM(2088),
+       EM = iM(3821),
+       UM = iM(1830);
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L214` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L215) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L214)

```diff
-     var XG = ZG(19);
+     var eM = iM(22);
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L304` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L305) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L304)

```diff
-       return null !== (bG = mG.get(GG)) && void 0 !== bG ? bG : null
+       return null !== (rM = uM.get(MM)) && void 0 !== rM ? rM : null
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L368` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L369) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L368)

```diff
-           this.placement.stop(), this.NQ(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
+           this.placement.stop(), this.aL(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L370` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L371) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L370)

```diff
-           this.placement.start(GG), (0, yG.f)()
+           this.placement.start(MM), (0, aM.k)()
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L372` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L373) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L372)

```diff
-           this.api.sendCommand(`${SG} cancel`)
+           this.api.sendCommand(`${SM} cancel`)
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L380` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L381) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L380)

```diff
-         this.pages = vG(bG, ZG), XG.l.xh(aG, this.pages, !0)
+         this.pages = WM(rM, iM), eM.i.Tz(sM, this.pages, !0)
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L384` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L385) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L384)

```diff
-         this.openRequested = bG, this.Tp()
+         this.openRequested = rM, this.bL()
```

#### 34. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L388` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L389) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L388)

```diff
-         null === GG || kG.e.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, QG.t)() || (0, zG.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = GG, (0, yG.m)()))
+         null === MM || PM.d.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, HM.r)() || (0, UM.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = MM, (0, aM.w)()))
```

#### 35. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L391` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L392) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L391)

```diff
-         this.reported.has(GG) || (this.reported.add(GG), this.api.sendCommand(`${SG} report ${GG}`))
+         this.reported.has(MM) || (this.reported.add(MM), this.api.sendCommand(`${SM} report ${MM}`))
```

#### 36. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L394` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L395) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L394)

```diff
-     var lG = ZG(1067);
+     var kM = iM(1303);
```

#### 37. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L401` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L402) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L401)

```diff
-       const ZG = (0, UG.j)(aG, bG.getPages()),
+       const iM = (0, nM.e)(sM, rM.getPages()),
```

#### 38. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L404` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L405) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L404)

```diff
-         } = (0, kG.o)(["isTouchScreen"]),
+         } = (0, PM.m)(["isTouchScreen"]),
```

#### 39. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L407-L411` → after: `L408-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L408-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L408-L413) · [Before (L407-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L407-L411)

```diff
-         } = (0, VG.w)(),
-         YG = (0, LG.useContext)(oG);
-       return (0, rG.c)((GG => null !== ZG && GG.code === jG && !GG.repeat && !(0, zG.isTypingInInput)()), (GG => {
-         (0, QG.C)(GG, !0, yG.m)
-       })), null === ZG ? null : (0, lG.jsx)(KG.d, {
+         } = (0, zM.A)(),
+         QM = (0, jM.useContext)(CM),
+         LM = null !== iM;
+       return (0, jM.useEffect)((() => LM ? (0, hM.c)(ZM) : void 0), [LM]), (0, EM.d)((MM => LM && MM.code === ZM && !MM.repeat && !(0, UM.isTypingInInput)()), (MM => {
+         (0, HM.E)(MM, !0, aM.w)
+       })), null === iM ? null : (0, kM.jsx)(JM.i, {
```

#### 40. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L421` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L423) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L421)

```diff
-             onClick: yG.m,
+             onClick: aM.w,
```

#### 41. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L428` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L430) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L428)

```diff
-             }), SG("plotsGame:journalButton"), !wG && (0, lG.jsx)(JG.e, {
+             }), SM("plotsGame:journalButton"), !OM && (0, kM.jsx)(lM.d, {
```

#### 42. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L431` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L433) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L431)

```diff
-             }), "openJournal" === YG.hint && (0, lG.jsx)(hG.c, {
+             }), "openJournal" === QM.hint && (0, kM.jsx)(dM.b, {
```

#### 43. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L439` → after: `L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2eb501c872609fe46974378cbd1c0e2186e39744...build/bloxd.io/fo1voe.f743fbcf#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fo1voe.f743fbcf/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L441) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2eb501c872609fe46974378cbd1c0e2186e39744/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L439)

```diff
-     var MG = ZG(9249);
+     var fM = iM(9816);
```
