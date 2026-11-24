# Changed — Bundle Modifications Report (Part 109 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `109 / 137` (**399** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 108](part-108.md) · [Part 110 →](part-110.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (150 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0)

#### 5. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L117` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L77) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L117)

```diff
-       c: () => QB
+       e: () => TB
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L121-L122` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L81-L82) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L121-L122)

```diff
-         this.Ly = BB, this.beforeOpen = jB, this.afterClose = zB, this.open = !1, this.HJ = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
-           this.isEnabled() && !this.HJ && (this.open = !0, this.beforeOpen(this), this.emit())
+         this.Gq = BB, this.beforeOpen = IB, this.afterClose = ZB, this.open = !1, this.WN = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
+           this.isEnabled() && !this.WN && (this.open = !0, this.beforeOpen(this), this.emit())
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L140` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L100) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L140)

```diff
-         this.open = !1, this.emit(), this.HJ = !0
+         this.open = !1, this.emit(), this.WN = !0
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L146` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L106) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L146)

```diff
-         this.HJ || (this.snapshot = this.buildSnapshot(), this.Ly(this.snapshot))
+         this.WN || (this.snapshot = this.buildSnapshot(), this.Gq(this.snapshot))
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L150` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L110) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L150)

```diff
-   39378: (BB, jB, zB) => {
+   39363: (BB, IB, ZB) => {
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L154-L158` → after: `L114-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L114-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L114-L118) · [Before (L154-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L154-L158)

```diff
-     var QB = zB(62);
-     var nB = zB(28),
-       dB = zB(1964),
-       IB = zB(31),
-       NB = zB(36682),
+     var TB = ZB(63);
+     var JB = ZB(20),
+       oB = ZB(1972),
+       GB = ZB(24),
+       vB = ZB(36619),
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L161-L171` → after: `L121-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L121-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L121-L131) · [Before (L161-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L161-L171)

```diff
-       aB = zB(1471),
-       pB = zB(1240),
-       rB = zB(4653),
-       sB = zB(1378),
-       JB = zB(1478),
-       mB = zB(1971),
-       yB = zB(1388),
-       kB = zB(1952),
-       GB = zB(2025),
-       LB = zB(225);
-     const gB = zB(39385),
+       nB = ZB(1507),
+       hB = ZB(1248),
+       zB = ZB(4714),
+       FB = ZB(1399),
+       NB = ZB(1516),
+       gB = ZB(1979),
+       qB = ZB(1421),
+       yB = ZB(1960),
+       UB = ZB(2054),
+       WB = ZB(212);
+     const dB = ZB(39370),
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L177-L178` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L137-L138) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L177-L178)

```diff
-         QB = (0, LB.b)(tB, zB);
-       return void 0 !== QB || SB.has(zB) || (SB.add(zB), console.warn(`Containment Breach has no mugshot ${zB}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), QB
+         TB = (0, WB.e)(CB, ZB);
+       return void 0 !== TB || QB.has(ZB) || (QB.add(ZB), console.warn(`Containment Breach has no mugshot ${ZB}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), TB
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L180` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L140) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L180)

```diff
-     var EB = zB(1148);
+     var wB = ZB(1153);
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L196-L197` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L156-L157) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L196-L197)

```diff
-       const pB = `${nB}Title`;
-       return (0, EB.jsx)(rB.d, {
+       const hB = `${JB}Title`;
+       return (0, wB.jsx)(zB.c, {
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L217` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L177) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L217)

```diff
-             }), IB, (0, EB.jsx)(JB.j, {
+             }), GB, (0, wB.jsx)(NB.l, {
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L237` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L197) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L237)

```diff
-       return (0, EB.jsx)(mB.c, {
+       return (0, wB.jsx)(gB.e, {
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L249` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L209) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L249)

```diff
-       return (0, sB.b)(nB, !zB), (0, EB.jsx)("span", {
+       return (0, FB.e)(JB, !ZB), (0, wB.jsx)("span", {
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L266` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L226) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L266)

```diff
-         DN: QB,
+         sv: TB,
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L269` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L229) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L269)

```diff
-       return (0, EB.jsx)(yB.g, {
+       return (0, wB.jsx)(qB.e, {
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L277` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L237) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L277)

```diff
-           DN: QB
+           sv: TB
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L299` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L259) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L299)

```diff
-         DN: nB
+         sv: JB
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L303` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L263) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L303)

```diff
-       } = (0, pB.D)(), IB = (0, GB.h)("itemInfo", (BB => BB[zB])), {
+       } = (0, hB.G)(), GB = (0, UB.g)("itemInfo", (BB => BB[ZB])), {
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L330` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L290) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L330)

```diff
-             text: null !== (jB = null === IB || void 0 === IB ? void 0 : IB.displayName) && void 0 !== jB ? jB : zB,
+             text: null !== (IB = null === GB || void 0 === GB ? void 0 : GB.displayName) && void 0 !== IB ? IB : ZB,
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L342` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L302) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L342)

```diff
-               children: dB(`${iB}:chipDroppedBy`)
+               children: oB(`${OB}:chipDroppedBy`)
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L351` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L311) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L351)

```diff
-             children: dB(`${iB}:chipYouHave`)
+             children: oB(`${OB}:chipYouHave`)
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L357` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L317) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L357)

```diff
-             }), ` / ${QB.toLocaleString()}`]
+             }), ` / ${TB.toLocaleString()}`]
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L435` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L395) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L435)

```diff
-     var ZB = zB(38618);
+     var mB = ZB(38573);
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L437` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L397) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L437)

```diff
-     class TB extends ZB.c {
+     class LB extends mB.e {
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L455-L457` → after: `L415-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L415-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L415-L417) · [Before (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L455-L457)

```diff
-         codexAnyDifficulty: `${iB}:codexNeedsAny`,
-         codexNormalOnly: `${iB}:codexNeedsNormal`,
-         codexHardOnly: `${iB}:codexNeedsHard`
+         codexAnyDifficulty: `${OB}:codexNeedsAny`,
+         codexNormalOnly: `${OB}:codexNeedsNormal`,
+         codexHardOnly: `${OB}:codexNeedsHard`
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L465-L467` → after: `L425-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L425-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L425-L427) · [Before (L465-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L465-L467)

```diff
-         codexContained: `${iB}:codexContainedBadge`,
-         codexEncountered: `${iB}:codexEncounteredBadge`,
-         codexUnidentified: `${iB}:codexUnidentifiedBadge`
+         codexContained: `${OB}:codexContainedBadge`,
+         codexEncountered: `${OB}:codexEncounteredBadge`,
+         codexUnidentified: `${OB}:codexUnidentifiedBadge`
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L477` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L437) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L477)

```diff
-       } = (0, pB.D)();
+       } = (0, hB.G)();
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L487-L488` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L447-L448) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L487-L488)

```diff
-       } = (0, pB.D)();
-       return "codexUnidentified" === BB.codexEntryState ? jB(`${iB}:codexUnidentifiedName`) : BB.codexEntryName
+       } = (0, hB.G)();
+       return "codexUnidentified" === BB.codexEntryState ? IB(`${OB}:codexUnidentifiedName`) : BB.codexEntryName
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L569` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L529) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L569)

```diff
-       } = (0, pB.D)();
+       } = (0, hB.G)();
```

#### 34. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L572` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L532) · [Before (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L572)

```diff
-         children: [QB(`${iB}:codexProgress`, {
+         children: [TB(`${OB}:codexProgress`, {
```

#### 35. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L593` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L553) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L593)

```diff
-       } = (0, pB.D)(), nB = "codexContained" === jB.codexEntryState;
+       } = (0, hB.G)(), JB = "codexContained" === IB.codexEntryState;
```

#### 36. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L600` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L560) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L600)

```diff
-             children: QB(`${iB}:codexFileNumber`, {
+             children: TB(`${OB}:codexFileNumber`, {
```

#### 37. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L617` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L577) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L617)

```diff
-               children: [QB(`${iB}:codexContainments`, {
+               children: [TB(`${OB}:codexContainments`, {
```

#### 38. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L625` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L585) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L625)

```diff
-               children: QB(`${iB}:codexContainedBadge`)
+               children: TB(`${OB}:codexContainedBadge`)
```

#### 39. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L637` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L597) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L637)

```diff
-                 children: QB(`${iB}:codexRedacted`)
+                 children: TB(`${OB}:codexRedacted`)
```

#### 40. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L642` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L602) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L642)

```diff
-                 children: QB(`${iB}:codexHintLabel`)
+                 children: TB(`${OB}:codexHintLabel`)
```

#### 41. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L662` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L622) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L662)

```diff
-         } = (0, pB.D)();
+         } = (0, hB.G)();
```

#### 42. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L670` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L630) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L670)

```diff
-         title: QB(`${iB}:codexTitle`),
+         title: TB(`${OB}:codexTitle`),
```

#### 43. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L689-L690` → after: `L649-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L649-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L649-L650) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L689-L690)

```diff
-     var OB = zB(376);
-     class Bj extends ZB.c {
+     var SB = ZB(360);
+     class BI extends mB.e {
```

#### 44. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L695` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L655) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L695)

```diff
-           if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${BB} ${jB}`, this.rollBack)) return;
+           if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${BB} ${IB}`, this.rollBack)) return;
```

#### 45. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L814` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L774) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L814)

```diff
-         loadoutSlotOptions: jB.loadoutSlotOptions.map((BB => null !== QB && BB.loadoutOptionId === QB.loadoutOptionId ? QB : BB))
+         loadoutSlotOptions: IB.loadoutSlotOptions.map((BB => null !== TB && BB.loadoutOptionId === TB.loadoutOptionId ? TB : BB))
```

#### 46. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L818` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L778) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L818)

```diff
-         loadoutSlots: BB.loadoutSlots.map((BB => BB === jB ? nB : BB))
+         loadoutSlots: BB.loadoutSlots.map((BB => BB === IB ? JB : BB))
```

#### 47. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L825` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L785) · [Before (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L825)

```diff
-         loadoutPerks: BB.loadoutPerks.map((BB => BB.loadoutPerkId === jB.loadoutPerkId ? jB : BB))
+         loadoutPerks: BB.loadoutPerks.map((BB => BB.loadoutPerkId === IB.loadoutPerkId ? IB : BB))
```

#### 48. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L883` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L843) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L883)

```diff
-         return (null !== (zB = jB.find((BB => BB.loadoutPerkEquipped))) && void 0 !== zB ? zB : jB[0]).loadoutPerkId
+         return (null !== (ZB = IB.find((BB => BB.loadoutPerkEquipped))) && void 0 !== ZB ? ZB : IB[0]).loadoutPerkId
```

#### 49. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L888-L889` → after: `L848-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L848-L849) · [Before (L888-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L888-L889)

```diff
-     var yj = zB(36946),
-       kj = zB(1306);
+     var qI = ZB(36909),
+       yI = ZB(1343);
```

#### 50. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L891-L896` → after: `L851-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L851-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L851-L856) · [Before (L891-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L891-L896)

```diff
-         loadoutPrimary: `${iB}:loadoutSlotPrimary`,
-         loadoutSecondary: `${iB}:loadoutSlotSecondary`,
-         loadoutOffensive: `${iB}:loadoutSlotOffensive`,
-         loadoutSelfHelp: `${iB}:loadoutSlotSelfHelp`,
-         loadoutArmour: `${iB}:loadoutSlotArmour`,
-         loadoutPerks: `${iB}:loadoutSlotPerks`
+         loadoutPrimary: `${OB}:loadoutSlotPrimary`,
+         loadoutSecondary: `${OB}:loadoutSlotSecondary`,
+         loadoutOffensive: `${OB}:loadoutSlotOffensive`,
+         loadoutSelfHelp: `${OB}:loadoutSlotSelfHelp`,
+         loadoutArmour: `${OB}:loadoutSlotArmour`,
+         loadoutPerks: `${OB}:loadoutSlotPerks`
```

#### 51. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L900` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L860) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L900)

```diff
-         zs: "bottom",
+         TF: "bottom",
```

#### 52. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L913` → after: `L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L873) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L913)

```diff
-       return (zB, QB) => (null === BB || void 0 === BB ? void 0 : BB.kind) === zB && BB.id === QB ? jB : void 0
+       return (ZB, TB) => (null === BB || void 0 === BB ? void 0 : BB.kind) === ZB && BB.id === TB ? IB : void 0
```

#### 53. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L936` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L896) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L936)

```diff
-       const [nB, dB] = BB(`${iB}:${jB}`, {
+       const [JB, oB] = BB(`${OB}:${IB}`, {
```

#### 54. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L955` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L915) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L955)

```diff
-       } = (0, pB.D)(), IB = jB.loadout, NB = jB.open ? IB.loadoutWalkthrough.map((BB => ({
+       } = (0, hB.G)(), GB = IB.loadout, vB = IB.open ? GB.loadoutWalkthrough.map((BB => ({
```

#### 55. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L975` → after: `L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L935) · [Before (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L975)

```diff
-           kind: "zs",
+           kind: "TF",
```

#### 56. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1016-L1017` → after: `L976-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L976-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L976-L977) · [Before (L1016-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1016-L1017)

```diff
-       } = (0, pB.D)(), NB = (0, QB.useRef)(jB);
-       return NB.current = jB, (0, kj.v)("popup", NB, nB), (0, EB.jsxs)(yj.f, {
+       } = (0, hB.G)(), vB = (0, TB.useRef)(IB);
+       return vB.current = IB, (0, yI.t)("popup", vB, JB), (0, wB.jsxs)(qI.e, {
```

#### 57. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1031-L1032` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L991-L992) · [Before (L1031-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1031-L1032)

```diff
-             children: IB(`${iB}:operatorName`)
-           }), (0, EB.jsx)(JB.j, {
+             children: GB(`${OB}:operatorName`)
+           }), (0, wB.jsx)(NB.l, {
```

#### 58. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1034` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L994) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1034)

```diff
-             ariaLabel: IB(`${iB}:loadoutWalkthroughClose`),
+             ariaLabel: GB(`${OB}:loadoutWalkthroughClose`),
```

#### 59. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1052` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1012) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1052)

```diff
-       } = (0, pB.D)();
+       } = (0, hB.G)();
```

#### 60. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1055` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1015) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1055)

```diff
-         children: QB(`${iB}:loadoutFree`)
+         children: TB(`${OB}:loadoutFree`)
```

#### 61. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1061` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1021) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1061)

```diff
-           DN: zB.loadoutCoins
+           sv: ZB.loadoutCoins
```

#### 62. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1067` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1027) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1067)

```diff
-             DN: jB.loadoutHeldPartAmount
+             sv: IB.loadoutHeldPartAmount
```

#### 63. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1073-L1075` → after: `L1033-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1033-L1035) · [Before (L1073-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1073-L1075)

```diff
-       loadoutStatFireRate: `${iB}:loadoutUnitPerMinute`,
-       loadoutStatReload: `${iB}:loadoutUnitSeconds`,
-       loadoutStatResupply: `${iB}:loadoutUnitSeconds`
+       loadoutStatFireRate: `${OB}:loadoutUnitPerMinute`,
+       loadoutStatReload: `${OB}:loadoutUnitSeconds`,
+       loadoutStatResupply: `${OB}:loadoutUnitSeconds`
```

#### 64. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1079` → after: `L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1039) · [Before (L1079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1079)

```diff
-       return "loadoutStatPotency" === BB.loadoutStatKind ? (0, OB.O)(BB.loadoutStatValue) : String(BB.loadoutStatValue)
+       return "loadoutStatPotency" === BB.loadoutStatKind ? (0, SB.Y)(BB.loadoutStatValue) : String(BB.loadoutStatValue)
```

#### 65. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1089` → after: `L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1049) · [Before (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1089)

```diff
-       } = (0, pB.D)(), nB = zB.loadoutOptionTiers, dB = null === (jB = nB[0]) || void 0 === jB ? void 0 : jB.loadoutTierStats.map((BB => BB.loadoutStatKind));
+       } = (0, hB.G)(), JB = ZB.loadoutOptionTiers, oB = null === (IB = JB[0]) || void 0 === IB ? void 0 : IB.loadoutTierStats.map((BB => BB.loadoutStatKind));
```

#### 66. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1105-L1106` → after: `L1065-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1065-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1065-L1066) · [Before (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1105-L1106)

```diff
-               children: QB(`${iB}:loadoutTier`, {
-                 tier: (0, OB.O)(jB + 1)
+               children: TB(`${OB}:loadoutTier`, {
+                 tier: (0, SB.Y)(IB + 1)
```

#### 67. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1116` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1076) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1116)

```diff
-                 children: [QB(`${iB}:${BB}`), jB && (0, EB.jsx)("span", {
+                 children: [TB(`${OB}:${BB}`), IB && (0, wB.jsx)("span", {
```

#### 68. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1155` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1115) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1155)

```diff
-       } = (0, pB.D)(), IB = jB.loadout, NB = nB.loadoutOptionOwnedTier, uB = nB.loadoutOptionTiers.length, UB = QB.loadoutSlotEquippedId === nB.loadoutOptionId, aB = NB < uB ? nB.loadoutOptionTiers[NB].loadoutTierCost : null, rB = null !== aB && jj(IB, aB), sB = nB.loadoutOptionI … [truncated]
+       } = (0, hB.G)(), GB = IB.loadout, vB = JB.loadoutOptionOwnedTier, kB = JB.loadoutOptionTiers.length, cB = TB.loadoutSlotEquippedId === JB.loadoutOptionId, nB = vB < kB ? JB.loadoutOptionTiers[vB].loadoutTierCost : null, zB = null !== nB && II(GB, nB), FB = JB.loadoutOptionI … [truncated]
```

#### 69. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1160-L1161` → after: `L1120-L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1120-L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1120-L1121) · [Before (L1160-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1160-L1161)

```diff
-           status: 0 === NB ? dB(`${iB}:loadoutLocked`) : uB > 1 ? dB(`${iB}:loadoutTier`, {
-             tier: (0, OB.O)(NB)
+           status: 0 === vB ? oB(`${OB}:loadoutLocked`) : kB > 1 ? oB(`${OB}:loadoutTier`, {
+             tier: (0, SB.Y)(vB)
```

#### 70. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1178` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1138) · [Before (L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1178)

```diff
-             }), (0, EB.jsx)(JB.m, {
+             }), (0, wB.jsx)(NB.p, {
```

#### 71. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1183-L1184` → after: `L1143-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1143-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1143-L1144) · [Before (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1183-L1184)

```diff
-               children: 0 === NB ? dB(`${iB}:loadoutUnlock`) : dB(`${iB}:loadoutUpgrade`, {
-                 tier: (0, OB.O)(NB + 1)
+               children: 0 === vB ? oB(`${OB}:loadoutUnlock`) : oB(`${OB}:loadoutUpgrade`, {
+                 tier: (0, SB.Y)(vB + 1)
```

#### 72. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1189-L1190` → after: `L1149-L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1149-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1149-L1150) · [Before (L1189-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1189-L1190)

```diff
-             children: dB(`${iB}:loadoutMaxed`)
-           }), NB > 0 && !UB && (0, EB.jsx)(JB.f, {
+             children: oB(`${OB}:loadoutMaxed`)
+           }), vB > 0 && !cB && (0, wB.jsx)(NB.g, {
```

#### 73. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1195` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1155) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1195)

```diff
-             children: dB(`${iB}:loadoutEquip`)
+             children: oB(`${OB}:loadoutEquip`)
```

#### 74. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1209` → after: `L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1169) · [Before (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1209)

```diff
-       } = (0, pB.D)(), dB = jB.loadout, IB = nj(dB), NB = QB.loadoutPerkId, uB = tj();
+       } = (0, hB.G)(), oB = IB.loadout, GB = JI(oB), vB = TB.loadoutPerkId, kB = CI();
```

#### 75. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1214` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1174) · [Before (L1214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1214)

```diff
-           status: QB.loadoutPerkOwned ? null : nB(`${iB}:loadoutLocked`),
+           status: TB.loadoutPerkOwned ? null : JB(`${OB}:loadoutLocked`),
```

#### 76. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1228` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1188) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1228)

```diff
-             }), (0, EB.jsx)(JB.m, {
+             }), (0, wB.jsx)(NB.p, {
```

#### 77. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1233` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1193) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1233)

```diff
-               children: nB(`${iB}:loadoutUnlock`)
+               children: JB(`${OB}:loadoutUnlock`)
```

#### 78. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1235` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1195) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1235)

```diff
-           }), QB.loadoutPerkOwned && !QB.loadoutPerkEquipped && (0, EB.jsx)(JB.f, {
+           }), TB.loadoutPerkOwned && !TB.loadoutPerkEquipped && (0, wB.jsx)(NB.g, {
```

#### 79. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1240` → after: `L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1200) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1240)

```diff
-             children: nB(`${iB}:loadoutEquip`)
+             children: JB(`${OB}:loadoutEquip`)
```

#### 80. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1243-L1244` → after: `L1203-L1204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1203-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1203-L1204) · [Before (L1243-L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1243-L1244)

```diff
-             children: nB(`${iB}:loadoutSocketsFullHint`)
-           }), QB.loadoutPerkEquipped && (0, EB.jsx)(JB.M, {
+             children: JB(`${OB}:loadoutSocketsFullHint`)
+           }), TB.loadoutPerkEquipped && (0, wB.jsx)(NB.V, {
```

#### 81. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1249` → after: `L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1209) · [Before (L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1249)

```diff
-             children: nB(`${iB}:loadoutUnequip`)
+             children: JB(`${OB}:loadoutUnequip`)
```

#### 82. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1265` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1225) · [Before (L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1265)

```diff
-       } = (0, pB.D)();
+       } = (0, hB.G)();
```

#### 83. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1278` → after: `L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1238) · [Before (L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1278)

```diff
-           children: IB(`${iB}:loadoutEquippedBadge`)
+           children: GB(`${OB}:loadoutEquippedBadge`)
```

#### 84. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1337` → after: `L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1297) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1337)

```diff
-       } = (0, pB.D)(), nB = jB.loadout, dB = tj();
+       } = (0, hB.G)(), JB = IB.loadout, oB = CI();
```

#### 85. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1340` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1300) · [Before (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1340)

```diff
-         "aria-label": QB(`${iB}:loadoutKit`),
+         "aria-label": TB(`${OB}:loadoutKit`),
```

#### 86. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1388` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1348) · [Before (L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1388)

```diff
-       } = (0, pB.D)(), nB = jB.loadout, dB = nB.loadoutPerks.filter((BB => BB.loadoutPerkEquipped)), IB = tj();
+       } = (0, hB.G)(), JB = IB.loadout, oB = JB.loadoutPerks.filter((BB => BB.loadoutPerkEquipped)), GB = CI();
```

#### 87. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1405` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1365) · [Before (L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1405)

```diff
-             children: QB(`${iB}:loadoutPerkCount`, {
+             children: TB(`${OB}:loadoutPerkCount`, {
```

#### 88. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1428` → after: `L1388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1388) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1428)

```diff
-                 children: zB ? zB.loadoutPerkName : QB(`${iB}:loadoutPerkSocketEmpty`)
+                 children: ZB ? ZB.loadoutPerkName : TB(`${OB}:loadoutPerkSocketEmpty`)
```

#### 89. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1450` → after: `L1410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1410) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1450)

```diff
-       } = (0, pB.D)();
+       } = (0, hB.G)();
```

#### 90. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1462` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1422) · [Before (L1462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1462)

```diff
-           children: aB(`${iB}:loadoutEquippedBadge`)
+           children: nB(`${OB}:loadoutEquippedBadge`)
```

#### 91. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1465` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1425) · [Before (L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1465)

```diff
-           children: aB(`${iB}:loadoutLocked`)
+           children: nB(`${OB}:loadoutLocked`)
```

#### 92. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1490` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1450) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1490)

```diff
-           buttonRef: nB("zs", BB.loadoutPerkId),
+           buttonRef: JB("TF", BB.loadoutPerkId),
```

#### 93. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1507` → after: `L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1467) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1507)

```diff
-           buttonRef: nB("zs", BB.loadoutOptionId),
+           buttonRef: JB("TF", BB.loadoutOptionId),
```

#### 94. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1535` → after: `L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1495) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1535)

```diff
-         } = (0, pB.D)();
+         } = (0, hB.G)();
```

#### 95. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1544` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1504) · [Before (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1544)

```diff
-           title: QB(`${iB}:loadoutTitle`),
+           title: TB(`${OB}:loadoutTitle`),
```

#### 96. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1553-L1554` → after: `L1513-L1514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1513-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1513-L1514) · [Before (L1553-L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1553-L1554)

```diff
-               children: QB(`${iB}:loadoutRadioBadge`)
-             }), null !== nB && QB(`${iB}:${nB.loadoutNoticeKey}`, {
+               children: TB(`${OB}:loadoutRadioBadge`)
+             }), null !== JB && TB(`${OB}:${JB.loadoutNoticeKey}`, {
```

#### 97. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1556` → after: `L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1516) · [Before (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1556)

```diff
-               tier: (0, OB.O)(nB.loadoutNoticeTier),
+               tier: (0, SB.Y)(JB.loadoutNoticeTier),
```

#### 98. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1637` → after: `L1597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1597) · [Before (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1637)

```diff
-         return (null !== (jB = zB.find((BB => BB.locatorEntryArmed))) && void 0 !== jB ? jB : zB[0]).locatorEntryId
+         return (null !== (IB = ZB.find((BB => BB.locatorEntryArmed))) && void 0 !== IB ? IB : ZB[0]).locatorEntryId
```

#### 99. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1650-L1652` → after: `L1610-L1612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1610-L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1610-L1612) · [Before (L1650-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1650-L1652)

```diff
-         locatorContained: `${iB}:locatorFlavourContained`,
-         locatorEncountered: `${iB}:locatorFlavourEncountered`,
-         locatorUnseen: `${iB}:locatorFlavourUnseen`
+         locatorContained: `${OB}:locatorFlavourContained`,
+         locatorEncountered: `${OB}:locatorFlavourEncountered`,
+         locatorUnseen: `${OB}:locatorFlavourUnseen`
```

#### 100. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1656-L1657` → after: `L1616-L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1616-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1616-L1617) · [Before (L1656-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1656-L1657)

```diff
-         codexNormalOnly: `${iB}:locatorAttunedNormal`,
-         codexHardOnly: `${iB}:locatorAttunedHard`
+         codexNormalOnly: `${OB}:locatorAttunedNormal`,
+         codexHardOnly: `${OB}:locatorAttunedHard`
```

#### 101. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1681` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1641) · [Before (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1681)

```diff
-       } = (0, pB.D)();
+       } = (0, hB.G)();
```

#### 102. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1684` → after: `L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1644) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1684)

```diff
-         children: zB(`${iB}:locatorArmedBadge`)
+         children: ZB(`${OB}:locatorArmedBadge`)
```

#### 103. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1687` → after: `L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1647) · [Before (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1687)

```diff
-         children: zB(`${iB}:locatorOwnedBadge`)
+         children: ZB(`${OB}:locatorOwnedBadge`)
```

#### 104. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1700` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1660) · [Before (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1700)

```diff
-         DN: zB,
+         sv: ZB,
```

#### 105. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1713` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1673) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1713)

```diff
-       } = (0, pB.D)(), dB = QB.locatorEntryId, IB = jB.locators.locatorEntries.find((BB => BB.locatorEntryArmed && BB !== QB));
+       } = (0, hB.G)(), oB = TB.locatorEntryId, GB = IB.locators.locatorEntries.find((BB => BB.locatorEntryArmed && BB !== TB));
```

#### 106. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1716` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1676) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1716)

```diff
-         children: [QB.locatorEntryArmed && (0, EB.jsx)(JB.M, {
+         children: [TB.locatorEntryArmed && (0, wB.jsx)(NB.V, {
```

#### 107. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1721-L1722` → after: `L1681-L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1681-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1681-L1682) · [Before (L1721-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1721-L1722)

```diff
-           children: nB(`${iB}:locatorDisarm`)
-         }), QB.locatorEntryOwned && !QB.locatorEntryArmed && (0, EB.jsx)(JB.f, {
+           children: JB(`${OB}:locatorDisarm`)
+         }), TB.locatorEntryOwned && !TB.locatorEntryArmed && (0, wB.jsx)(NB.g, {
```

#### 108. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1727` → after: `L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1687) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1727)

```diff
-           children: nB(`${iB}:locatorArm`)
+           children: JB(`${OB}:locatorArm`)
```

#### 109. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1733` → after: `L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1693) · [Before (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1733)

```diff
-           }), (0, EB.jsx)(JB.m, {
+           }), (0, wB.jsx)(NB.p, {
```

#### 110. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1738` → after: `L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1698) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1738)

```diff
-             children: nB(`${iB}:locatorBuy`)
+             children: JB(`${OB}:locatorBuy`)
```

#### 111. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1742` → after: `L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1702) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1742)

```diff
-           children: nB(`${iB}:locatorReplacesHint`, {
+           children: JB(`${OB}:locatorReplacesHint`, {
```

#### 112. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1769` → after: `L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1729) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1769)

```diff
-       } = (0, pB.D)(), dB = bj[QB.locatorEntryDifficulty];
+       } = (0, hB.G)(), oB = DI[TB.locatorEntryDifficulty];
```

#### 113. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1780` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1740) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1780)

```diff
-             name: nB(`${iB}:locatorName`, {
+             name: JB(`${OB}:locatorName`, {
```

#### 114. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1788` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1748) · [Before (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1788)

```diff
-             children: nB(QB.locatorEntryArmed ? `${iB}:locatorFlavourArmed` : cj[QB.locatorEntryStanding])
+             children: JB(TB.locatorEntryArmed ? `${OB}:locatorFlavourArmed` : EI[TB.locatorEntryStanding])
```

#### 115. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1794` → after: `L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1754) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1794)

```diff
-             children: nB(`${iB}:locatorUsage`)
+             children: JB(`${OB}:locatorUsage`)
```

#### 116. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1811` → after: `L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1771) · [Before (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1811)

```diff
-         } = (0, pB.D)(),
+         } = (0, hB.G)(),
```

#### 117. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1819` → after: `L1779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1779) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1819)

```diff
-         title: QB(`${iB}:locatorTitle`),
+         title: TB(`${OB}:locatorTitle`),
```

#### 118. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1829-L1830` → after: `L1789-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1789-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1789-L1790) · [Before (L1829-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1829-L1830)

```diff
-             children: QB(`${iB}:locatorKeeperName`)
-           }), null !== IB && QB(`${iB}:${IB.locatorNoticeKey}`, {
+             children: TB(`${OB}:locatorKeeperName`)
+           }), null !== GB && TB(`${OB}:${GB.locatorNoticeKey}`, {
```

#### 119. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1881` → after: `L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1841) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1881)

```diff
-     var dz = zB(38645);
+     var oZ = ZB(38593);
```

#### 120. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1885` → after: `L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1845) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1885)

```diff
-         this.sendCommand = BB, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new dz.b({
+         this.sendCommand = BB, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new oZ.e({
```

#### 121. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1918` → after: `L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1878) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1918)

```diff
-     var Nz = zB(38640);
+     var vZ = ZB(38590);
```

#### 122. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1937` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1897) · [Before (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1937)

```diff
-           (0, NB.o)()
+           (0, vB.t)()
```

#### 123. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1940` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1900) · [Before (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1940)

```diff
-           BB && (0, NB.f)()
+           BB && (0, vB.i)()
```

#### 124. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1946` → after: `L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1906) · [Before (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1946)

```diff
-           IB.n.Ly(rj, BB, !0)
+           GB.l.Gq(zI, BB, !0)
```

#### 125. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1949` → after: `L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1909) · [Before (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1949)

```diff
-           IB.n.Ly(AB, BB, !0)
+           GB.l.Gq(XB, BB, !0)
```

#### 126. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1952` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1912) · [Before (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1952)

```diff
-           IB.n.Ly(Kj, BB, !0)
+           GB.l.Gq(bI, BB, !0)
```

#### 127. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1957` → after: `L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1917) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1957)

```diff
-           BB = jB, zB = (0, NB.t)(null, {
+           BB = IB, ZB = (0, vB.x)(null, {
```

#### 128. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1969` → after: `L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1929) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1969)

```diff
-           "containmentLoadout" === BB ? sB.VJ(jB) : "containmentLoadoutClose" === BB ? sB.isOpen() && (sB.close(), (0, NB.d)()) : "containmentCodex" === BB ? JB.VJ(jB) : "containmentLocator" === BB && mB.VJ(jB)
+           "containmentLoadout" === BB ? FB.sN(IB) : "containmentLoadoutClose" === BB ? FB.isOpen() && (FB.close(), (0, vB.f)()) : "containmentCodex" === BB ? NB.sN(IB) : "containmentLocator" === BB && gB.sN(IB)
```

#### 129. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1971-L1972` → after: `L1931-L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1931-L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1931-L1932) · [Before (L1971-L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1971-L1972)

```diff
-         vp: () => {
-           jB || nB.c.get("loadingOverlayVisible") || (jB = !0, BB.sendCommand("containmentEntered"))
+         Iz: () => {
+           IB || JB.d.get("loadingOverlayVisible") || (IB = !0, BB.sendCommand("containmentEntered"))
```

#### 130. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1983` → after: `L1943-L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1943-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1943-L1983) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1983)

```diff
-   39388: (BB, jB, zB) => {
+   39370: (BB, IB, ZB) => {
+     var TB = {
+       "./breach-zero-uncaught.webp": 39373,
+       "./breach-zero.webp": 39379,
+       "./brood-father-uncaught.webp": 39382,
+       "./brood-father.webp": 39390,
+       "./carousel-uncaught.webp": 39392,
+       "./carousel.webp": 39400,
+       "./deadlock-uncaught.webp": 39407,
+       "./deadlock.webp": 39416,
+       "./frost-revenant-uncaught.webp": 39421,
+       "./frost-revenant.webp": 39429,
+       "./hollow-choir-uncaught.webp": 39433,
+       "./hollow-choir.webp": 39438,
+       "./magma-warden-uncaught.webp": 39441,
+       "./magma-warden.webp": 39450,
+ ... (25 more added lines; see GitHub link above)
```

#### 131. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1986` → after: `L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1986) · [Before (L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1986)

```diff
-   39397: (BB, jB, zB) => {
+   39379: (BB, IB, ZB) => {
```

#### 132. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1989` → after: `L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1989) · [Before (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1989)

```diff
-   39405: (BB, jB, zB) => {
+   39382: (BB, IB, ZB) => {
```

#### 133. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1992` → after: `L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1992) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1992)

```diff
-   39407: (BB, jB, zB) => {
+   39390: (BB, IB, ZB) => {
```

#### 134. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1995` → after: `L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1995) · [Before (L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1995)

```diff
-   39415: (BB, jB, zB) => {
+   39392: (BB, IB, ZB) => {
```

#### 135. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L1998)

```diff
-   39418: (BB, jB, zB) => {
+   39400: (BB, IB, ZB) => {
```

#### 136. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2001` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2001) · [Before (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2001)

```diff
-   39422: (BB, jB, zB) => {
+   39407: (BB, IB, ZB) => {
```

#### 137. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2004` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2004) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2004)

```diff
-   39428: (BB, jB, zB) => {
+   39416: (BB, IB, ZB) => {
```

#### 138. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2007` → after: `L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2007) · [Before (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2007)

```diff
-   39436: (BB, jB, zB) => {
+   39421: (BB, IB, ZB) => {
```

#### 139. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2010` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2010) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2010)

```diff
-   39439: (BB, jB, zB) => {
+   39429: (BB, IB, ZB) => {
```

#### 140. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2013` → after: `L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2013) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2013)

```diff
-   39445: (BB, jB, zB) => {
+   39433: (BB, IB, ZB) => {
```

#### 141. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2016)

```diff
-   39447: (BB, jB, zB) => {
+   39438: (BB, IB, ZB) => {
```

#### 142. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2019` → after: `L2019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2019) · [Before (L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2019)

```diff
-   39451: (BB, jB, zB) => {
+   39441: (BB, IB, ZB) => {
```

#### 143. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2022)

```diff
-   39456: (BB, jB, zB) => {
+   39450: (BB, IB, ZB) => {
```

#### 144. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2025` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2025) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2025)

```diff
-   39464: (BB, jB, zB) => {
+   39453: (BB, IB, ZB) => {
```

#### 145. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2028` → after: `L2028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2028) · [Before (L2028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2028)

```diff
-   39469: (BB, jB, zB) => {
+   39461: (BB, IB, ZB) => {
```

#### 146. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2031` → after: `L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2031) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2031)

```diff
-   39471: (BB, jB, zB) => {
+   39470: (BB, IB, ZB) => {
```

#### 147. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2034` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2034) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2034)

```diff
-   39478: (BB, jB, zB) => {
+   39473: (BB, IB, ZB) => {
```

#### 148. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2037` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2037) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2037)

```diff
-   39481: (BB, jB, zB) => {
+   39479: (BB, IB, ZB) => {
```

#### 149. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2040` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2040) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2040)

```diff
-   39489: (BB, jB, zB) => {
+   39481: (BB, IB, ZB) => {
```

#### 150. `bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js` (Changed code · before: `L2043` → after: `L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-87d4a8d807e725a4f6f2ac16b0d4ac9014ebdcd4bccbfbf3b8c4076d9dbd7dd0) · [After (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2043) · [Before (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-containmentBreach-containmentBreachClient.js#L2043)

```diff
-   38640: BB => {
+   38590: BB => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1ecb862d068eab8e0623e405216239fed956e0342ef06cf37286c14a82e62819)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1ecb862d068eab8e0623e405216239fed956e0342ef06cf37286c14a82e62819R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-1ecb862d068eab8e0623e405216239fed956e0342ef06cf37286c14a82e62819) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-cooking-cookingClient.js#L4)

```diff
-   39497: (BB, jB, zB) => {
+   39485: (BB, IB, ZB) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-adda92567445c3b15ddea338f159d025976957a58e919b05512cd360a9bcccf3)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-adda92567445c3b15ddea338f159d025976957a58e919b05512cd360a9bcccf3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-adda92567445c3b15ddea338f159d025976957a58e919b05512cd360a9bcccf3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-defusal-defusalClient.js#L4)

```diff
-   39505: (BB, jB, zB) => {
+   39492: (BB, IB, ZB) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (107 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L4)

```diff
-   36677: (BB, jB, zB) => {
+   36613: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L8-L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L7-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L8-L9)

```diff
-       g: () => rB,
-       h: () => pB
+       h: () => NB,
+       l: () => zB,
+       n: () => hB
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L11-L18)

```diff
-     var QB = zB(34242),
-       nB = zB(36682),
-       dB = zB(36687),
-       IB = zB(8722),
-       NB = zB(1471),
-       uB = zB(62),
-       UB = zB(83),
-       aB = zB(1148);
+     var TB = ZB(34184),
+       JB = ZB(36619),
+       oB = ZB(36625),
+       GB = ZB(8840),
+       vB = ZB(1507),
+       kB = ZB(63),
+       cB = ZB(82),
+       nB = ZB(1153);
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L22-L23)

```diff
-       return (0, NB.h)(nB.c, (0, nB.n)()), (0, aB.jsx)(aB.Fragment, {
-         children: null === (BB = (0, nB.n)()) || void 0 === BB ? void 0 : BB.content
+       return (0, vB.h)(JB.d, (0, JB.q)()), (0, nB.jsx)(nB.Fragment, {
+         children: null === (BB = (0, JB.q)()) || void 0 === BB ? void 0 : BB.content
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L32-L33)

```diff
-       (0, NB.h)(nB.c, (0, nB.n)());
-       const UB = null === (jB = (0, nB.n)()) || void 0 === jB ? void 0 : jB.menu;
+       (0, vB.h)(JB.d, (0, JB.q)());
+       const cB = null === (IB = (0, JB.q)()) || void 0 === IB ? void 0 : IB.menu;
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L36-L37)

```diff
-         zB || (null === UB || void 0 === UB || null === (BB = UB.onClose) || void 0 === BB || BB.call(UB), (0, dB.n)())
-       }), [zB, UB]), (0, uB.useEffect)((() => zB ? (0, IB.f)(dB.w, dB.f) : void 0), [zB]), (0, aB.jsx)(QB.b, {
+         ZB || (null === cB || void 0 === cB || null === (BB = cB.onClose) || void 0 === BB || BB.call(cB), (0, oB.p)())
+       }), [ZB, cB]), (0, kB.useEffect)((() => ZB ? (0, GB.g)(oB.t, oB.c) : void 0), [ZB]), (0, nB.jsx)(TB.e, {
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L49)

```diff
-         id: `clientGameHud-${jB}`,
+         id: `clientGameHud-${IB}`,
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L63)

```diff
-         nB(document.getElementById(`clientGameHud-${zB}`))
+         JB(document.getElementById(`clientGameHud-${ZB}`))
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L67)

```diff
-   34242: (BB, jB, zB) => {
+   34184: (BB, IB, ZB) => {
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L69)

```diff
-       b: () => dB
+       e: () => oB
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L71-L72)

```diff
-     var QB = zB(4657),
-       nB = zB(4664);
+     var TB = ZB(4721),
+       JB = ZB(4728);
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L83)

```diff
-       return (0, nB.c)(!0, zB, dB, uB), (0, QB.d)(NB, zB), zB || IB ? jB : null
+       return (0, JB.e)(!0, ZB, oB, kB), (0, TB.e)(vB, ZB), ZB || GB ? IB : null
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L86)

```diff
-   36762: (BB, jB, zB) => {
+   36708: (BB, IB, ZB) => {
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L89-L91` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L89-L91) · [Before (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L89-L91)

```diff
-       h: () => IB,
-       l: () => NB,
-       o: () => uB
+       f: () => GB,
+       i: () => vB,
+       k: () => kB
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L93-L94)

```diff
-     var QB = zB(62),
-       nB = zB(3219);
+     var TB = ZB(63),
+       JB = ZB(3272);
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L100)

```diff
-       const [jB] = (0, nB.d)(), [zB, uB] = (0, QB.useState)(!1);
+       const [IB] = (0, JB.b)(), [ZB, kB] = (0, TB.useState)(!1);
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L103-L104` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L103-L104) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L103-L104)

```diff
-         const jB = document.querySelector(`.${IB}`),
-           zB = document.querySelector(`.${NB}`),
+         const IB = document.querySelector(`.${GB}`),
+           ZB = document.querySelector(`.${vB}`),
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L121)

```diff
-   36757: (BB, jB, zB) => {
+   36706: (BB, IB, ZB) => {
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L123)

```diff
-       c: () => nB
+       e: () => JB
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L150)

```diff
-   8722: (BB, jB, zB) => {
+   8840: (BB, IB, ZB) => {
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L153)

```diff
-       f: () => nB
+       g: () => JB
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L170)

```diff
-   38627: (BB, jB, zB) => {
+   38578: (BB, IB, ZB) => {
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L176)

```diff
-       } = zB, IB = null !== (QB = BB.text) && void 0 !== QB ? QB : BB, NB = (IB.x / 100 - .5) * nB, uB = (IB.y / 100 - .5) * dB, UB = nB / 2 - jB.x;
+       } = ZB, GB = null !== (TB = BB.text) && void 0 !== TB ? TB : BB, vB = (GB.x / 100 - .5) * JB, kB = (GB.y / 100 - .5) * oB, cB = JB / 2 - IB.x;
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L181)

```diff
-       const aB = Math.min(0 === NB ? 1 / 0 : UB / Math.abs(NB), uB > 0 ? (dB / 2 - jB.bottom) / uB : uB < 0 ? (jB.top - dB / 2) / uB : 1 / 0);
+       const nB = Math.min(0 === vB ? 1 / 0 : cB / Math.abs(vB), kB > 0 ? (oB / 2 - IB.bottom) / kB : kB < 0 ? (IB.top - oB / 2) / kB : 1 / 0);
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L191)

```diff
-       d: () => QB
+       e: () => TB
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L194)

```diff
-   36687: (BB, jB, zB) => {
+   36625: (BB, IB, ZB) => {
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L196-L199` → after: `L196-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L196-L199) · [Before (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L196-L199)

```diff
-       A: () => GB,
-       e: () => dB,
-       f: () => mB,
-       i: () => yB,
+       b: () => oB,
+       c: () => gB,
+       g: () => qB,
+       h: () => vB,
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L201-L203` → after: `L201-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L201-L203) · [Before (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L201-L203)

```diff
-       m: () => rB,
-       n: () => kB,
-       r: () => pB,
+       p: () => yB,
+       q: () => hB,
+       s: () => WB,
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L207-L208` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L207-L208) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L207-L208)

```diff
-     var QB = zB(28),
-       nB = zB(31);
+     var TB = ZB(20),
+       JB = ZB(24);
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L215)

```diff
-         return (null !== (zB = BB.order) && void 0 !== zB ? zB : 0) - (null !== (QB = jB.order) && void 0 !== QB ? QB : 0)
+         return (null !== (ZB = BB.order) && void 0 !== ZB ? ZB : 0) - (null !== (TB = IB.order) && void 0 !== TB ? TB : 0)
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L232)

```diff
-       BB.panel && "clientGame" === QB.c.get("openInGameMenuName") && UB(BB.id)
+       BB.panel && "clientGame" === TB.d.get("openInGameMenuName") && cB(BB.id)
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L258)

```diff
-       "inventory" !== QB.c.get("openInGameMenuName") && UB(null)
+       "inventory" !== TB.d.get("openInGameMenuName") && cB(null)
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L267-L268)

```diff
-       return IB.set(BB.id, BB), nB.n.Ly(dB, NB(), !0), () => {
-         IB.get(BB.id) === BB && (IB.delete(BB.id), nB.n.Ly(dB, NB()))
+       return GB.set(BB.id, BB), JB.l.Gq(oB, vB(), !0), () => {
+         GB.get(BB.id) === BB && (GB.delete(BB.id), JB.l.Gq(oB, vB()))
```

#### 34. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L272)

```diff
-   36682: (BB, jB, zB) => {
+   36619: (BB, IB, ZB) => {
```

#### 35. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L277-L281` → after: `L276-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L276-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L276-L281) · [Before (L277-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L277-L281)

```diff
-       j: () => rB,
-       n: () => UB,
-       o: () => mB,
-       r: () => sB,
-       t: () => aB
+       i: () => yB,
+       m: () => zB,
+       q: () => cB,
+       t: () => gB,
+       v: () => FB,
+       x: () => nB
```

#### 36. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L283-L286` → after: `L283-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L283-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L283-L286) · [Before (L283-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L283-L286)

```diff
-     var QB = zB(28),
-       nB = zB(31),
-       dB = zB(1316),
-       IB = zB(36687);
+     var TB = ZB(20),
+       JB = ZB(24),
+       oB = ZB(1353),
+       GB = ZB(36625);
```

#### 37. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L299-L300` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L299-L300) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L299-L300)

```diff
-       return uB = zB, nB.n.Ly(NB, uB, !0), () => {
-         uB === zB && (uB = null, JB = !1, yB(), nB.n.Ly(NB, null))
+       return kB = ZB, JB.l.Gq(vB, kB, !0), () => {
+         kB === ZB && (kB = null, NB = !1, qB(), JB.l.Gq(vB, null))
```

#### 38. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L317-L318` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L317-L318) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L317-L318)

```diff
-       const BB = QB.c.get("openInGameMenuName");
-       "clientGame" !== BB && (JB = "inventory" === BB), (0, IB.m)() || (0, IB.i)(), (0, dB.u)(dB.e), QB.c.set({
+       const BB = TB.d.get("openInGameMenuName");
+       "clientGame" !== BB && (NB = "inventory" === BB), (0, GB.l)() || (0, GB.g)(), (0, oB.t)(oB.e), TB.d.set({
```

#### 39. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L333)

```diff
-       "clientGame" === QB.c.get("openInGameMenuName") && QB.c.set({
+       "clientGame" === TB.d.get("openInGameMenuName") && TB.d.set({
```

#### 40. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L335)

```diff
-       }), BB || (0, IB.i)(), JB = !1
+       }), BB || (0, GB.g)(), NB = !1
```

#### 41. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L338)

```diff
-   39509: (BB, jB, zB) => {
+   39495: (BB, IB, ZB) => {
```

#### 42. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L343-L348` → after: `L343-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L343-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L343-L348) · [Before (L343-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L343-L348)

```diff
-     var nB = zB(62),
-       dB = zB(36682),
-       IB = zB(37109),
-       NB = zB(36699),
-       uB = zB(1778),
-       UB = zB(31);
+     var JB = ZB(63),
+       oB = ZB(36619),
+       GB = ZB(37060),
+       vB = ZB(36636),
+       kB = ZB(1805),
+       cB = ZB(24);
```

#### 43. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L442)

```diff
-         for (let IB = 0; IB < 4; IB++) zB.push((nB = IB * jB + .35, dB = (IB + 1) * jB - .35, JB(`M${pB+(QB=6+BB)*Math.cos(nB)} ${pB+QB*Math.sin(nB)} A${QB} ${QB} 0 0 1 ${pB+QB*Math.cos(dB)} ${pB+QB*Math.sin(dB)}`, 2)));
+         for (let GB = 0; GB < 4; GB++) ZB.push((JB = GB * IB + .35, oB = (GB + 1) * IB - .35, NB(`M${hB+(TB=6+BB)*Math.cos(JB)} ${hB+TB*Math.sin(JB)} A${TB} ${TB} 0 0 1 ${hB+TB*Math.cos(oB)} ${hB+TB*Math.sin(oB)}`, 2)));
```

#### 44. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L456)

```diff
-           ]) zB.push(JB(`M${pB+QB*jB} ${pB+nB*(jB-5)} L${pB+QB*jB} ${pB+nB*jB} L${pB+QB*(jB-5)} ${pB+nB*jB}`, 2));
+           ]) ZB.push(NB(`M${hB+TB*IB} ${hB+JB*(IB-5)} L${hB+TB*IB} ${hB+JB*IB} L${hB+TB*(IB-5)} ${hB+JB*IB}`, 2));
```

#### 45. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L469-L471` → after: `L469-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L469-L471) · [Before (L469-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L469-L471)

```diff
-       } = BB, nB = `<${jB}`;
-       for (const [dB, IB] of Object.entries(zB)) nB += ` ${dB}="${IB}"`;
-       return void 0 === QB ? `${nB}/>` : `${nB}>${QB}</${jB}>`
+       } = BB, JB = `<${IB}`;
+       for (const [oB, GB] of Object.entries(ZB)) JB += ` ${oB}="${GB}"`;
+       return void 0 === TB ? `${JB}/>` : `${JB}>${TB}</${IB}>`
```

#### 46. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L479)

```diff
-         }, this.tokens = [UB.n.subscribe("aimingOverlay", (BB => {
+         }, this.tokens = [cB.l.subscribe("aimingOverlay", (BB => {
```

#### 47. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L481)

```diff
-         })), UB.n.subscribe("mouseState", (BB => {
+         })), cB.l.subscribe("mouseState", (BB => {
```

#### 48. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L496)

```diff
-         } = this, dB = nB.isAlive(this.localPlayerId) && null !== (zB = null === (QB = nB.ZjB(this.localPlayerId)) || void 0 === QB ? void 0 : QB.name) && void 0 !== zB ? zB : null, IB = (NB = dB) && aB[NB] || null;
+         } = this, oB = JB.isAlive(this.localPlayerId) && null !== (ZB = null === (TB = JB.FZB(this.localPlayerId)) || void 0 === TB ? void 0 : TB.name) && void 0 !== ZB ? ZB : null, GB = (vB = oB) && nB[vB] || null;
```

#### 49. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L506)

```diff
-           sB = null !== uB && void 0 !== uB ? uB : 0;
+           FB = null !== kB && void 0 !== kB ? kB : 0;
```

#### 50. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L512)

```diff
-         for (const BB of this.tokens) UB.n.unsubscribe(BB);
+         for (const BB of this.tokens) cB.l.unsubscribe(BB);
```

#### 51. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L518-L519` → after: `L518-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L518-L519) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L518-L519)

```diff
-           return `<svg viewBox="0 0 64 64">${kB[BB](jB).map(GB).join("")}</svg>`
-         }(BB, jB), this.shapes = Array.from(null !== (zB = null === (QB = this.element.firstElementChild) || void 0 === QB ? void 0 : QB.children) && void 0 !== zB ? zB : [])) : jB !== this.drawnGap && (this.drawnGap = jB, function(BB, jB, zB) {
+           return `<svg viewBox="0 0 64 64">${yB[BB](IB).map(UB).join("")}</svg>`
+         }(BB, IB), this.shapes = Array.from(null !== (ZB = null === (TB = this.element.firstElementChild) || void 0 === TB ? void 0 : TB.children) && void 0 !== ZB ? ZB : [])) : IB !== this.drawnGap && (this.drawnGap = IB, function(BB, IB, ZB) {
```

#### 52. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L533` → after: `L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L533) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L533)

```diff
-         const zB = BB * IB.g / 2;
+         const ZB = BB * GB.e / 2;
```

#### 53. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L537)

```diff
-         const jB = 2 + ((0, NB.h)(BB) - 1) * this.gapPerVh;
+         const IB = 2 + ((0, vB.f)(BB) - 1) * this.gapPerVh;
```

#### 54. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L552` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L552) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L552)

```diff
-         }, this.maxHealth = null, this.YB = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = BB => {
+         }, this.maxHealth = null, this.jB = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = BB => {
```

#### 55. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L554-L555` → after: `L554-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L554-L555) · [Before (L554-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L554-L555)

```diff
-           this.clearHits(), this.root = BB, this.lowLayer = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".FrontlineDamageLow")) && void 0 !== jB ? jB : null, this.arcLayer = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".Fron … [truncated]
-         }, this.token = UB.n.subscribe("damagedByOtherPlayer", (BB => {
+           this.clearHits(), this.root = BB, this.lowLayer = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".FrontlineDamageLow")) && void 0 !== IB ? IB : null, this.arcLayer = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".Fron … [truncated]
+         }, this.token = cB.l.subscribe("damagedByOtherPlayer", (BB => {
```

#### 56. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L558)

```diff
-             DB: zB
+             aB: ZB
```

#### 57. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L571)

```diff
-         UB.n.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(gB)
+         cB.l.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(dB)
```

#### 58. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L581-L582)

```diff
-         if (this.readHealth = BB, this.readShield = jB, this.readMaxHealth = zB, null === BB || void 0 === BB || !zB) return this.lastHealthPool = null, this.maxHealth = null, this.YB = 1, this.dead = !1, void this.drawLow();
-         const QB = BB + (null !== jB && void 0 !== jB ? jB : 0);
+         if (this.readHealth = BB, this.readShield = IB, this.readMaxHealth = ZB, null === BB || void 0 === BB || !ZB) return this.lastHealthPool = null, this.maxHealth = null, this.jB = 1, this.dead = !1, void this.drawLow();
+         const TB = BB + (null !== IB && void 0 !== IB ? IB : 0);
```

#### 59. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L594)

```diff
-         this.dead = BB <= 0, this.dead && this.clearHits(), this.lastHealthPool = QB, this.maxHealth = zB, this.YB = BB > 0 ? BB / zB : 1, this.drawLow()
+         this.dead = BB <= 0, this.dead && this.clearHits(), this.lastHealthPool = TB, this.maxHealth = ZB, this.jB = BB > 0 ? BB / ZB : 1, this.drawLow()
```

#### 60. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L614-L617` → after: `L614-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L614-L617) · [Before (L614-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L614-L617)

```diff
-         const BB = iB((tB - this.YB) / .25),
-           jB = iB((SB - this.YB) / .15000000000000002),
-           zB = this.YB < tB;
-         this.lowLayer.classList.toggle("Active", zB), this.lowLayer.classList.toggle("Critical", this.YB < SB), this.lowLayer.style.opacity = String(zB ? .55 + .3 * BB + .15 * jB : 0)
+         const BB = OB((CB - this.jB) / .25),
+           IB = OB((QB - this.jB) / .15000000000000002),
+           ZB = this.jB < CB;
+         this.lowLayer.classList.toggle("Active", ZB), this.lowLayer.classList.toggle("Critical", this.jB < QB), this.lowLayer.style.opacity = String(ZB ? .55 + .3 * BB + .15 * IB : 0)
```

#### 61. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L669` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L669) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L669)

```diff
-         (null === BB.drawnAngle || Math.abs(jB - BB.drawnAngle) > .005) && (BB.drawnAngle = jB, BB.element.style.rotate = `${jB}rad`)
+         (null === BB.drawnAngle || Math.abs(IB - BB.drawnAngle) > .005) && (BB.drawnAngle = IB, BB.element.style.rotate = `${IB}rad`)
```

#### 62. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L724)

```diff
-         dB.glow.classList.toggle("Everywhere", null === BB), rB.setProperty("--glowX", `${uB}px`), rB.setProperty("--glowY", `${UB}px`), rB.setProperty("--glowRx", `${aB}px`), rB.setProperty("--glowRy", `${pB}px`), dB.element.style.transformOrigin = `${uB}px ${UB}px`, null === (n … [truncated]
+         oB.glow.classList.toggle("Everywhere", null === BB), zB.setProperty("--glowX", `${kB}px`), zB.setProperty("--glowY", `${cB}px`), zB.setProperty("--glowRx", `${nB}px`), zB.setProperty("--glowRy", `${hB}px`), oB.element.style.transformOrigin = `${kB}px ${cB}px`, null === (J … [truncated]
```

#### 63. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L777-L780` → after: `L777-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L777-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L777-L780) · [Before (L777-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L777-L780)

```diff
-       HB = zB(36677),
-       DB = zB(36762),
-       FB = zB(1240),
-       YB = zB(1471);
+       aB = ZB(36613),
+       HB = ZB(36708),
+       MB = ZB(1248),
+       jB = ZB(1507);
```

#### 64. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L797)

```diff
-         this.wire = BB, UB.n.Ly(VB, BB, !0)
+         this.wire = BB, cB.l.Gq(PB, BB, !0)
```

#### 65. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L805)

```diff
-         }, UB.n.Ly(hB, this.scoreboard, !0)
+         }, cB.l.Gq(RB, this.scoreboard, !0)
```

#### 66. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L808` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L808) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L808)

```diff
-     var ZB = zB(1148);
+     var mB = ZB(1153);
```

#### 67. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L836` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L836) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L836)

```diff
-         className: oB()(jB, `Owner-${nB||"None"}`, `Leader-${IB||"None"}`, {
+         className: pB()(IB, `Owner-${JB||"None"}`, `Leader-${GB||"None"}`, {
```

#### 68. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L846)

```diff
-             width: `${dB}%`
+             width: `${oB}%`
```

#### 69. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L858)

```diff
-         } = (0, FB.D)();
+         } = (0, MB.G)();
```

#### 70. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L872` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L872) · [Before (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L872)

```diff
-                   className: oB()("FrontlinePointMarkerHomeTurf", `Team-${nB}`),
+                   className: pB()("FrontlinePointMarkerHomeTurf", `Team-${JB}`),
```

#### 71. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L918` → after: `L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L918) · [Before (L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L918)

```diff
-         }), (0, ZB.jsx)(HB.e, {
+         }), (0, mB.jsx)(aB.h, {
```

#### 72. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L948` → after: `L948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L948) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L948)

```diff
-         } = (0, FB.D)();
+         } = (0, MB.G)();
```

#### 73. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L952` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L952) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L952)

```diff
-             className: oB()("FrontlinePlate", `Status-${QB}`, `Leader-${dB||"None"}`),
+             className: pB()("FrontlinePlate", `Status-${TB}`, `Leader-${oB||"None"}`),
```

#### 74. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L986)

```diff
-             className: oB()("FrontlinePlate", "FrontlineAlert", `Tone-${nB}`),
+             className: pB()("FrontlinePlate", "FrontlineAlert", `Tone-${JB}`),
```

#### 75. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1004` → after: `L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1004) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1004)

```diff
-         } = (0, FB.D)(), QB = (0, nB.useRef)(null), dB = function(BB, jB) {
+         } = (0, MB.G)(), TB = (0, JB.useRef)(null), oB = function(BB, IB) {
```

#### 76. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1009-L1010` → after: `L1009-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1009-L1010) · [Before (L1009-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1009-L1010)

```diff
-             const zB = document.querySelector(`.${DB.h}`),
-               nB = document.querySelector(`.${DB.l}`),
+             const ZB = document.querySelector(`.${HB.f}`),
+               JB = document.querySelector(`.${HB.i}`),
```

#### 77. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1022` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1022) · [Before (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1022)

```diff
-                 jB.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(JB,14*IB)))}px`), QB(sB)
+                 IB.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(NB,14*GB)))}px`), TB(FB)
```

#### 78. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1081` → after: `L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1081) · [Before (L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1081)

```diff
-       } = (0, FB.D)(), IB = String(zB).padStart(3, "0"), NB = IB.search(/[1-9]/), uB = -1 === NB ? IB : IB.slice(0, NB), UB = Math.min(20, Math.floor(zB / QB * 20));
+       } = (0, MB.G)(), GB = String(ZB).padStart(3, "0"), vB = GB.search(/[1-9]/), kB = -1 === vB ? GB : GB.slice(0, vB), cB = Math.min(20, Math.floor(ZB / TB * 20));
```

#### 79. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1083` → after: `L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1083) · [Before (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1083)

```diff
-         className: oB()("FrontlineTeamScore", nB, `Team-${jB}`),
+         className: pB()("FrontlineTeamScore", JB, `Team-${IB}`),
```

#### 80. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1142-L1145` → after: `L1142-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1142-L1145) · [Before (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1142-L1145)

```diff
-     var OB = zB(36757),
-       Bj = zB(1284),
-       jj = zB(38581),
-       zj = zB(38627);
+     var SB = ZB(36706),
+       BI = ZB(1310),
+       II = ZB(38532),
+       ZI = ZB(38578);
```

#### 81. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1152` → after: `L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1152) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1152)

```diff
-         }, this.render = null, this.HJ = !1, this.rG = () => {
+         }, this.render = null, this.WN = !1, this.kU = () => {
```

#### 82. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1157)

```diff
-         }, window.addEventListener("resize", this.rG), null === (jB = window.visualViewport) || void 0 === jB || jB.addEventListener("resize", this.rG)
+         }, window.addEventListener("resize", this.kU), null === (IB = window.visualViewport) || void 0 === IB || IB.addEventListener("resize", this.kU)
```

#### 83. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1163` → after: `L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1163) · [Before (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1163)

```diff
-           null === (zB = this.markers.get(BB)) || void 0 === zB || zB.stopObserving(), this.markers.delete(BB), jB && !this.HJ && this.markers.set(BB, this.mount(jB))
+           null === (ZB = this.markers.get(BB)) || void 0 === ZB || ZB.stopObserving(), this.markers.delete(BB), IB && !this.WN && this.markers.set(BB, this.mount(IB))
```

#### 84. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1172)

```diff
-             BB && nB && (BB.target ??= [0, 0, 0], BB.target[0] = nB[0], BB.target[1] = nB[1] + 2.5, BB.target[2] = nB[2], this.place(BB), this.hj(BB, jB && Math.hypot(nB[0] - jB[0], nB[1] - jB[1], nB[2] - jB[2])))
+             BB && JB && (BB.target ??= [0, 0, 0], BB.target[0] = JB[0], BB.target[1] = JB[1] + 2.5, BB.target[2] = JB[2], this.place(BB), this.RI(BB, IB && Math.hypot(JB[0] - IB[0], JB[1] - IB[1], JB[2] - IB[2])))
```

#### 85. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1177` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1177) · [Before (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1177)

```diff
-         this.HJ = !0, window.removeEventListener("resize", this.rG), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", this.rG);
+         this.WN = !0, window.removeEventListener("resize", this.kU), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", this.kU);
```

#### 86. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1194-L1195` → after: `L1194-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1194-L1195) · [Before (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1194-L1195)

```diff
-           IB = null !== dB && void 0 !== dB ? dB : jB.projectWorldPosToScreenPos(BB.target),
-           NB = (0, zj.d)({
+           GB = null !== oB && void 0 !== oB ? oB : IB.projectWorldPosToScreenPos(BB.target),
+           vB = (0, ZI.e)({
```

#### 87. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1205)

```diff
-         (null === BB.metres || (0, OB.c)(jB, BB.metres, BB.metresShownAt)) && (BB.metres = Math.round(jB), BB.metresShownAt = zB, BB.distance.textContent = (0, FB.z)(Bj.c.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
+         (null === BB.metres || (0, SB.e)(IB, BB.metres, BB.metresShownAt)) && (BB.metres = Math.round(IB), BB.metresShownAt = ZB, BB.distance.textContent = (0, MB.C)(BI.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
```

#### 88. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1239-L1240` → after: `L1239-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1239-L1240) · [Before (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1239-L1240)

```diff
-     var nj = zB(6401),
-       dj = zB(2733);
+     var JI = ZB(6595),
+       oI = ZB(2763);
```

#### 89. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1259` → after: `L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1259) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1259)

```diff
-         }, UB.n.Ly(Ij, this.view, !0)
+         }, cB.l.Gq(GI, this.view, !0)
```

#### 90. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1262` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1262) · [Before (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1262)

```diff
-     const uj = (0, nB.lazy)((() => (0, dj.d)(Promise.all([zB.e(239), zB.e(202)]).then((() => zB(41846))), (BB => BB.FrontlineMvpLineup)))),
+     const kI = (0, JB.lazy)((() => (0, oI.b)(Promise.all([ZB.e(239), ZB.e(202)]).then((() => ZB(41783))), (BB => BB.FrontlineMvpLineup)))),
```

#### 91. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1290` → after: `L1290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1290) · [Before (L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1290)

```diff
-       } = (0, FB.D)(), [, IB, NB, uB, UB, , aB, pB] = jB, rB = (0, nB.useMemo)((() => aj.filter((BB => BB < pB.length))), [pB]), sB = (0, nB.useMemo)((() => rB.map((BB => {
+       } = (0, MB.G)(), [, GB, vB, kB, cB, , nB, hB] = IB, zB = (0, JB.useMemo)((() => nI.filter((BB => BB < hB.length))), [hB]), FB = (0, JB.useMemo)((() => zB.map((BB => {
```

#### 92. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1303` → after: `L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1303) · [Before (L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1303)

```diff
-         className: oB()("FrontlineRoundEnd", `Result-${IB}`),
+         className: pB()("FrontlineRoundEnd", `Result-${GB}`),
```

#### 93. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1317` → after: `L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1317) · [Before (L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1317)

```diff
-             }), (JB = dB(pj[IB]), /\p{Script=Arabic}/u.test(JB) ? [JB] : (0, nj.e)(JB)).map(((BB, jB) => (0, ZB.jsx)("span", {
+             }), (NB = oB(hI[GB]), /\p{Script=Arabic}/u.test(NB) ? [NB] : (0, JI.b)(NB)).map(((BB, IB) => (0, mB.jsx)("span", {
```

#### 94. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1372` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1372) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1372)

```diff
-       } = (0, FB.D)(), [nB, dB, IB, NB, uB] = jB, [UB, aB] = QB(function(BB, jB) {
+       } = (0, MB.G)(), [JB, oB, GB, vB, kB] = IB, [cB, nB] = TB(function(BB, IB) {
```

#### 95. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1379` → after: `L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1379) · [Before (L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1379)

```diff
-         className: oB()("FrontlineMvpCard", `Place-${zB+1}`, `Team-${dB}`),
+         className: pB()("FrontlineMvpCard", `Place-${ZB+1}`, `Team-${oB}`),
```

#### 96. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1381` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1381) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1381)

```diff
-           "--revealMs": `${Uj[zB]}ms`
+           "--revealMs": `${cI[ZB]}ms`
```

#### 97. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1417` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1417) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1417)

```diff
-         null === (BB = aB) || void 0 === BB || BB.mH(!zB), null === (jB = pB) || void 0 === jB || jB.mH(!QB)
+         null === (BB = nB) || void 0 === BB || BB.qY(!ZB), null === (IB = hB) || void 0 === IB || IB.qY(!TB)
```

#### 98. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1421)

```diff
-           UB = BB, aB = new LB(BB, IB), pB = new MB(BB, IB), rB = new Qj(NB), mB(), sB = (0, dB.t)((0, nB.createElement)(nB.Fragment, null, (0, nB.createElement)(wB, {
+           cB = BB, nB = new WB(BB, GB), hB = new sB(BB, GB), zB = new TI(vB), gB(), FB = (0, oB.x)((0, JB.createElement)(JB.Fragment, null, (0, JB.createElement)(AB, {
```

#### 99. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1436)

```diff
-           null === (zB = aB) || void 0 === zB || zB.frame(BB, jB.tanHalfFovY), null === (QB = pB) || void 0 === QB || QB.frame(jB.cameraHeading), null === (nB = rB) || void 0 === nB || nB.frame(jB, null !== (dB = UB) && void 0 !== dB && dB.checkValid(IB) ? UB.iG(IB) : null)
+           null === (ZB = nB) || void 0 === ZB || ZB.frame(BB, IB.tanHalfFovY), null === (TB = hB) || void 0 === TB || TB.frame(IB.cameraHeading), null === (JB = zB) || void 0 === JB || JB.frame(IB, null !== (oB = cB) && void 0 !== oB && oB.checkValid(GB) ? cB.aU(GB) : null)
```

#### 100. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1439` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1439) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1439)

```diff
-           "frontlineHud" === BB ? NB.VJ(jB) : "frontlineScoreboard" === BB ? NB.receiveScoreboard(jB) : "frontlineRoundEnd" === BB ? uB.VJ(jB) : "frontlinePrefs" === BB && (JB = jB, mB())
+           "frontlineHud" === BB ? vB.sN(IB) : "frontlineScoreboard" === BB ? vB.receiveScoreboard(IB) : "frontlineRoundEnd" === BB ? kB.sN(IB) : "frontlinePrefs" === BB && (NB = IB, gB())
```

#### 101. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1444` → after: `L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1444) · [Before (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1444)

```diff
-   6401: (BB, jB, zB) => {
+   6595: (BB, IB, ZB) => {
```

#### 102. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1446` → after: `L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1446) · [Before (L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1446)

```diff
-       e: () => nB
+       b: () => JB
```

#### 103. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1461` → after: `L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1461) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1461)

```diff
-   38581: (BB, jB, zB) => {
+   38532: (BB, IB, ZB) => {
```

#### 104. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1464` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1464) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1464)

```diff
-       g: () => dB
+       f: () => oB
```

#### 105. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1484` → after: `L1484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1484) · [Before (L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1484)

```diff
-       QB.x === jB && QB.y === zB || (QB.x = jB, QB.y = zB, BB.style.translate = `${jB}vw ${zB}vh`)
+       TB.x === IB && TB.y === ZB || (TB.x = IB, TB.y = ZB, BB.style.translate = `${IB}vw ${ZB}vh`)
```

#### 106. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1487` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1487) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1487)

```diff
-   37148: (BB, jB, zB) => {
+   37093: (BB, IB, ZB) => {
```

#### 107. `bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js` (Changed code · before: `L1489` → after: `L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bcR1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-c3de35264da1d1a247d8599e62154628f8332d423a08d9d6b057d9c3a8e5d6bc) · [After (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1489) · [Before (L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-frontline-frontlineClient.js#L1489)

```diff
-       e: () => QB
+       b: () => TB
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L4)

```diff
-   39518: (BB, jB, zB) => {
+   39497: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L63)

```diff
-             "ballState" === BB ? (uB = null !== (zB = jB.eId) && void 0 !== zB ? zB : null, uB || mB()) : "frozen" === BB ? NB = jB.frozen : "pitchInfo" === BB && (UB = jB.goalZRed, aB = jB.goalZBlue, pB = Math.abs(aB - UB) / 2)
+             "ballState" === BB ? (kB = null !== (ZB = IB.eId) && void 0 !== ZB ? ZB : null, kB || gB()) : "frozen" === BB ? vB = IB.frozen : "pitchInfo" === BB && (cB = IB.goalZRed, nB = IB.goalZBlue, hB = Math.abs(nB - cB) / 2)
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8024f1096aa3987cffee4f64e94a6d99aaabf2d5e497ff8bb80d97b3f95af2e0) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-goalRush-goalRushClient.js#L65)

```diff
-           vp: BB => {
+           Iz: BB => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L4)

```diff
-   36677: (BB, jB, zB) => {
+   36613: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L8-L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L7-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L8-L9)

```diff
-       g: () => rB,
-       h: () => pB
+       h: () => NB,
+       l: () => zB,
+       n: () => hB
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L11-L18)

```diff
-     var QB = zB(34242),
-       nB = zB(36682),
-       dB = zB(36687),
-       IB = zB(8722),
-       NB = zB(1471),
-       uB = zB(62),
-       UB = zB(83),
-       aB = zB(1148);
+     var TB = ZB(34184),
+       JB = ZB(36619),
+       oB = ZB(36625),
+       GB = ZB(8840),
+       vB = ZB(1507),
+       kB = ZB(63),
+       cB = ZB(82),
+       nB = ZB(1153);
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L22-L23)

```diff
-       return (0, NB.h)(nB.c, (0, nB.n)()), (0, aB.jsx)(aB.Fragment, {
-         children: null === (BB = (0, nB.n)()) || void 0 === BB ? void 0 : BB.content
+       return (0, vB.h)(JB.d, (0, JB.q)()), (0, nB.jsx)(nB.Fragment, {
+         children: null === (BB = (0, JB.q)()) || void 0 === BB ? void 0 : BB.content
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L32-L33)

```diff
-       (0, NB.h)(nB.c, (0, nB.n)());
-       const UB = null === (jB = (0, nB.n)()) || void 0 === jB ? void 0 : jB.menu;
+       (0, vB.h)(JB.d, (0, JB.q)());
+       const cB = null === (IB = (0, JB.q)()) || void 0 === IB ? void 0 : IB.menu;
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L36-L37)

```diff
-         zB || (null === UB || void 0 === UB || null === (BB = UB.onClose) || void 0 === BB || BB.call(UB), (0, dB.n)())
-       }), [zB, UB]), (0, uB.useEffect)((() => zB ? (0, IB.f)(dB.w, dB.f) : void 0), [zB]), (0, aB.jsx)(QB.b, {
+         ZB || (null === cB || void 0 === cB || null === (BB = cB.onClose) || void 0 === BB || BB.call(cB), (0, oB.p)())
+       }), [ZB, cB]), (0, kB.useEffect)((() => ZB ? (0, GB.g)(oB.t, oB.c) : void 0), [ZB]), (0, nB.jsx)(TB.e, {
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L49)

```diff
-         id: `clientGameHud-${jB}`,
+         id: `clientGameHud-${IB}`,
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L63)

```diff
-         nB(document.getElementById(`clientGameHud-${zB}`))
+         JB(document.getElementById(`clientGameHud-${ZB}`))
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L67)

```diff
-   34242: (BB, jB, zB) => {
+   34184: (BB, IB, ZB) => {
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L69)

```diff
-       b: () => dB
+       e: () => oB
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L71-L72)

```diff
-     var QB = zB(4657),
-       nB = zB(4664);
+     var TB = ZB(4721),
+       JB = ZB(4728);
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L83)

```diff
-       return (0, nB.c)(!0, zB, dB, uB), (0, QB.d)(NB, zB), zB || IB ? jB : null
+       return (0, JB.e)(!0, ZB, oB, kB), (0, TB.e)(vB, ZB), ZB || GB ? IB : null
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L86)

```diff
-   8722: (BB, jB, zB) => {
+   8840: (BB, IB, ZB) => {
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L89)

```diff
-       f: () => nB
+       g: () => JB
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L106)

```diff
-   36687: (BB, jB, zB) => {
+   36625: (BB, IB, ZB) => {
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L108-L111` → after: `L108-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L108-L111) · [Before (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L108-L111)

```diff
-       A: () => GB,
-       e: () => dB,
-       f: () => mB,
-       i: () => yB,
+       b: () => oB,
+       c: () => gB,
+       g: () => qB,
+       h: () => vB,
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L113-L115` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L113-L115) · [Before (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L113-L115)

```diff
-       m: () => rB,
-       n: () => kB,
-       r: () => pB,
+       p: () => yB,
+       q: () => hB,
+       s: () => WB,
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L119-L120` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L119-L120) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L119-L120)

```diff
-     var QB = zB(28),
-       nB = zB(31);
+     var TB = ZB(20),
+       JB = ZB(24);
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L127)

```diff
-         return (null !== (zB = BB.order) && void 0 !== zB ? zB : 0) - (null !== (QB = jB.order) && void 0 !== QB ? QB : 0)
+         return (null !== (ZB = BB.order) && void 0 !== ZB ? ZB : 0) - (null !== (TB = IB.order) && void 0 !== TB ? TB : 0)
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L144)

```diff
-       BB.panel && "clientGame" === QB.c.get("openInGameMenuName") && UB(BB.id)
+       BB.panel && "clientGame" === TB.d.get("openInGameMenuName") && cB(BB.id)
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L170)

```diff
-       "inventory" !== QB.c.get("openInGameMenuName") && UB(null)
+       "inventory" !== TB.d.get("openInGameMenuName") && cB(null)
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L179-L180` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L179-L180) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L179-L180)

```diff
-       return IB.set(BB.id, BB), nB.n.Ly(dB, NB(), !0), () => {
-         IB.get(BB.id) === BB && (IB.delete(BB.id), nB.n.Ly(dB, NB()))
+       return GB.set(BB.id, BB), JB.l.Gq(oB, vB(), !0), () => {
+         GB.get(BB.id) === BB && (GB.delete(BB.id), JB.l.Gq(oB, vB()))
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L184)

```diff
-   36682: (BB, jB, zB) => {
+   36619: (BB, IB, ZB) => {
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L189-L193` → after: `L188-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L188-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L188-L193) · [Before (L189-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L189-L193)

```diff
-       j: () => rB,
-       n: () => UB,
-       o: () => mB,
-       r: () => sB,
-       t: () => aB
+       i: () => yB,
+       m: () => zB,
+       q: () => cB,
+       t: () => gB,
+       v: () => FB,
+       x: () => nB
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L195-L198` → after: `L195-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L195-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L195-L198) · [Before (L195-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L195-L198)

```diff
-     var QB = zB(28),
-       nB = zB(31),
-       dB = zB(1316),
-       IB = zB(36687);
+     var TB = ZB(20),
+       JB = ZB(24),
+       oB = ZB(1353),
+       GB = ZB(36625);
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L211-L212)

```diff
-       return uB = zB, nB.n.Ly(NB, uB, !0), () => {
-         uB === zB && (uB = null, JB = !1, yB(), nB.n.Ly(NB, null))
+       return kB = ZB, JB.l.Gq(vB, kB, !0), () => {
+         kB === ZB && (kB = null, NB = !1, qB(), JB.l.Gq(vB, null))
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L229-L230` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L229-L230) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L229-L230)

```diff
-       const BB = QB.c.get("openInGameMenuName");
-       "clientGame" !== BB && (JB = "inventory" === BB), (0, IB.m)() || (0, IB.i)(), (0, dB.u)(dB.e), QB.c.set({
+       const BB = TB.d.get("openInGameMenuName");
+       "clientGame" !== BB && (NB = "inventory" === BB), (0, GB.l)() || (0, GB.g)(), (0, oB.t)(oB.e), TB.d.set({
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L245)

```diff
-       "clientGame" === QB.c.get("openInGameMenuName") && QB.c.set({
+       "clientGame" === TB.d.get("openInGameMenuName") && TB.d.set({
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L247)

```diff
-       }), BB || (0, IB.i)(), JB = !1
+       }), BB || (0, GB.g)(), NB = !1
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L250)

```diff
-   39521: (BB, jB, zB) => {
+   39500: (BB, IB, ZB) => {
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L264-L266` → after: `L264-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L264-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L264-L266) · [Before (L264-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L264-L266)

```diff
-     var nB = zB(62),
-       dB = zB(38120),
-       IB = zB(376);
+     var JB = ZB(63),
+       oB = ZB(38094),
+       GB = ZB(360);
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L270)

```diff
-       return `${"Basic"===jB?"":`${jB} `}${"Simple"===BB?"":`${BB} `}Lucky Block`
+       return `${"Basic"===IB?"":`${IB} `}${"Simple"===BB?"":`${BB} `}Lucky Block`
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L283)

```diff
-       sB = [...["Red", "Blue", "Green", "Yellow"].map((BB => `${(0,IB.Y)(BB)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", pB, ...rB];
+       FB = [...["Red", "Blue", "Green", "Yellow"].map((BB => `${(0,GB.eb)(BB)} Wool`)), "Maple Wood Planks", "Cracked Stone Bricks", "Baked Clay", hB, ...zB];
```

#### 34. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L288)

```diff
-     var mB = zB(658);
+     var gB = ZB(665);
```

#### 35. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L304-L306` → after: `L304-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L304-L306) · [Before (L304-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L304-L306)

```diff
-       length: mB.o - mB.n
-     }, ((BB, jB) => mB.n + jB)), ...Array.from({
-       length: mB.n
+       length: gB.q - gB.m
+     }, ((BB, IB) => gB.m + IB)), ...Array.from({
+       length: gB.m
```

#### 36. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L316)

```diff
-         (null === QB || void 0 === QB ? void 0 : QB.name) === BB && (null !== (jB = QB.amount) && void 0 !== jB ? jB : 1) <= 1 && LB(BB) && this.pending.set(zB, BB)
+         (null === TB || void 0 === TB ? void 0 : TB.name) === BB && (null !== (IB = TB.amount) && void 0 !== IB ? IB : 1) <= 1 && WB(BB) && this.pending.set(ZB, BB)
```

#### 37. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L319)

```diff
-         jB < mB.n && null === this.inventory.itemAt(jB) && LB(BB) && this.refill(jB, BB)
+         IB < gB.m && null === this.inventory.itemAt(IB) && WB(BB) && this.refill(IB, BB)
```

#### 38. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L332)

```diff
-             if (!NB || IB < mB.n && jB !== zB) continue;
+             if (!vB || GB < gB.m && IB !== ZB) continue;
```

#### 39. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L345-L346` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L345-L346) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L345-L346)

```diff
-     var gB = zB(36682),
-       tB = zB(83),
+     var dB = ZB(36619),
+       CB = ZB(82),
```

#### 40. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L363-L370` → after: `L363-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L363-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L363-L370) · [Before (L363-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L363-L370)

```diff
-     var oB = zB(363),
-       HB = zB(2516),
-       DB = zB(28),
-       FB = zB(2690),
-       YB = zB(1971),
-       VB = zB(36677),
-       hB = zB(1108);
-     var XB = zB(1148);
+     var pB = ZB(342),
+       aB = ZB(2526),
+       HB = ZB(20),
+       MB = ZB(2719),
+       jB = ZB(1979),
+       PB = ZB(36613),
+       RB = ZB(1102);
+     var rB = ZB(1153);
```

#### 41. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L372-L374` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L372-L374) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L372-L374)

```diff
-       Basic: IB.E.whiteUiText,
-       Rare: IB.E.goldUiText,
-       Super: IB.E.cyanUiText
+       Basic: GB.P.whiteUiText,
+       Rare: GB.P.goldUiText,
+       Super: GB.P.cyanUiText
```

#### 42. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L379)

```diff
-       const BB = (0, HB.i)("currencyAmounts"),
+       const BB = (0, aB.d)("currencyAmounts"),
```

#### 43. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L381` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L381) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L381)

```diff
-       return !jB || jB.hidden ? null : (0, XB.jsx)(VB.e, {
+       return !IB || IB.hidden ? null : (0, rB.jsx)(PB.h, {
```

#### 44. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L395)

```diff
-       } = (0, DB.m)(["openEverythingMenuName"]), UB = (0, FB.c)(), [aB, pB] = (0, nB.useState)(dB), [rB, sB] = (0, nB.useState)(null), [JB, mB] = (0, nB.useState)(0), [yB, kB] = (0, nB.useState)([]), GB = (0, nB.useRef)(dB), LB = (0, nB.useRef)(!1), gB = (0, nB.useRef)(null), SB  … [truncated]
+       } = (0, HB.o)(["openEverythingMenuName"]), cB = (0, MB.b)(), [nB, hB] = (0, JB.useState)(oB), [zB, FB] = (0, JB.useState)(null), [NB, gB] = (0, JB.useState)(0), [qB, yB] = (0, JB.useState)([]), UB = (0, JB.useRef)(oB), WB = (0, JB.useRef)(!1), dB = (0, JB.useRef)(null), QB  … [truncated]
```

#### 45. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L419)

```diff
-           const zB = IB.b.clamp((jB - NB) / 600, 0, 1);
+           const ZB = GB.e.clamp((IB - vB) / 600, 0, 1);
```

#### 46. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L428` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L428) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L428)

```diff
-           const zB = null !== (jB = NB.find((jB => BB < qB(jB)))) && void 0 !== jB ? jB : "Super";
+           const ZB = null !== (IB = vB.find((IB => BB < YB(IB)))) && void 0 !== IB ? IB : "Super";
```

#### 47. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L431)

```diff
-             progress: IB.b.clamp(BB / qB(zB), 0, 1)
+             progress: GB.e.clamp(BB / YB(ZB), 0, 1)
```

#### 48. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L448)

```diff
-                 transform: `scaleX(${iB.progress})`
+                 transform: `scaleX(${OB.progress})`
```

#### 49. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L453)

```diff
-                 animationDelay: `${null!==(jB=null===rB||void 0===rB?void 0:rB.delayMs)&&void 0!==jB?jB:0}ms`
+                 animationDelay: `${null!==(IB=null===zB||void 0===zB?void 0:zB.delayMs)&&void 0!==IB?IB:0}ms`
```

#### 50. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L459)

```diff
-                 animationDelay: `${null!==(QB=null===rB||void 0===rB?void 0:rB.delayMs)&&void 0!==QB?QB:0}ms`
+                 animationDelay: `${null!==(TB=null===zB||void 0===zB?void 0:zB.delayMs)&&void 0!==TB?TB:0}ms`
```

#### 51. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L461)

```diff
-               children: (0, XB.jsx)(YB.c, {
+               children: (0, rB.jsx)(jB.e, {
```

#### 52. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L465)

```diff
-             }, null !== (zB = null === rB || void 0 === rB ? void 0 : rB.id) && void 0 !== zB ? zB : 0), (0, XB.jsx)("span", {
+             }, null !== (ZB = null === zB || void 0 === zB ? void 0 : zB.id) && void 0 !== ZB ? ZB : 0), (0, rB.jsx)("span", {
```

#### 53. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L468)

```diff
-             }), HB && (0, XB.jsx)(hB.c, {
+             }), aB && (0, rB.jsx)(RB.d, {
```

#### 54. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L498` → after: `L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L498) · [Before (L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L498)

```diff
-           transform: `translate(${IB}px, ${NB}px) scale(0.3)`,
+           transform: `translate(${GB}px, ${vB}px) scale(0.3)`,
```

#### 55. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L501)

```diff
-           transform: `translate(${uB}px, ${UB}px) scale(1.3)`,
+           transform: `translate(${kB}px, ${cB}px) scale(1.3)`,
```

#### 56. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L505)

```diff
-           transform: `translate(${nB.left}px, ${nB.top}px) scale(0.8)`,
+           transform: `translate(${JB.left}px, ${JB.top}px) scale(0.8)`,
```

#### 57. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L519` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L519) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L519)

```diff
-         children: (0, XB.jsx)(YB.c, {
+         children: (0, rB.jsx)(jB.e, {
```

#### 58. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L525)

```diff
-     var eB = zB(31);
+     var fB = ZB(24);
```

#### 59. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L537)

```diff
-       return null !== (jB = wB[BB.split(" ")[0]]) && void 0 !== jB ? jB : "#e07bff"
+       return null !== (IB = AB[BB.split(" ")[0]]) && void 0 !== IB ? IB : "#e07bff"
```

#### 60. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L560)

```diff
-         this.Ly()
+         this.Gq()
```

#### 61. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L575)

```diff
-         zB && this.Ly()
+         ZB && this.Gq()
```

#### 62. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L581-L584` → after: `L581-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L581-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L581-L584) · [Before (L581-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L581-L584)

```diff
-         }, eB.n.Ly(lB, this.view)
-       }
-     }
-     var CB = zB(1471);
+         }, fB.l.Gq(lB, this.view)
+       }
+     }
+     var xB = ZB(1507);
```

#### 63. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L665` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L665) · [Before (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L665)

```diff
-           placeAgainstBeds: (0, dB.b)()
+           placeAgainstBeds: (0, oB.d)()
```

#### 64. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L668` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L668) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L668)

```diff
-           NB = BB, UB = (0, gB.t)((0, nB.createElement)(nB.Fragment, null, (0, nB.createElement)(TB), (0, nB.createElement)(RB, {
+           vB = BB, cB = (0, dB.x)((0, JB.createElement)(JB.Fragment, null, (0, JB.createElement)(LB), (0, JB.createElement)(VB, {
```

#### 65. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L676-L677` → after: `L676-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L676-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L676-L677) · [Before (L676-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L676-L677)

```diff
-         vp: () => {
-           aB.vp(), pB.vp()
+         Iz: () => {
+           nB.Iz(), hB.Iz()
```

#### 66. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L680` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L680) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L680)

```diff
-           "luckyGearUpgrade" === BB && pB.VJ(jB)
+           "luckyGearUpgrade" === BB && hB.sN(IB)
```

#### 67. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L697` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L697) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L697)

```diff
-   38120: (BB, jB, zB) => {
+   38094: (BB, IB, ZB) => {
```

#### 68. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L699` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L699) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L699)

```diff
-       b: () => NB
+       d: () => vB
```

#### 69. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L701-L703` → after: `L701-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L701-L703) · [Before (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L701-L703)

```diff
-     var QB = zB(376),
-       nB = zB(37002),
-       dB = zB(4597);
+     var TB = ZB(360),
+       JB = ZB(36964),
+       oB = ZB(4665);
```

#### 70. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L715)

```diff
-           if ((0, nB.b)(BB.getMetaInfo(NB).rootName) && !BB.isEntityInteractable(uB) && (0, dB.c)(null === (UB = BB.ZjB(jB)) || void 0 === UB ? void 0 : UB.typeObj.type)) return "preventAction"
+           if ((0, JB.d)(BB.getMetaInfo(vB).rootName) && !BB.isEntityInteractable(kB) && (0, oB.f)(null === (cB = BB.FZB(IB)) || void 0 === cB ? void 0 : cB.typeObj.type)) return "preventAction"
```

#### 71. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L720` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L720) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L720)

```diff
-   37002: (BB, jB, zB) => {
+   36964: (BB, IB, ZB) => {
```

#### 72. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L737-L738` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L737) · [Before (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L737-L738)

```diff
-       b: () => IB,
-       f: () => QB,
+       d: () => GB,
```

#### 73. `bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js` (Changed code · before: `L740` → after: `L739-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-4719f516274ca0a82a1c3dc683100feb696fc34189422449db47f9d4db1c2c55) · [After (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L739-L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-luckyBedwars-luckyBedwarsClient.js#L740)

```diff
-       i: () => nB
+       i: () => oB,
+       k: () => JB
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L4)

```diff
-   39529: (BB, jB, zB) => {
+   39507: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L8)

```diff
-     var QB = zB(31);
+     var TB = ZB(24);
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8c03526af80e1f08abc0c54d2f713d8f89979689c8cdb1bfde429767bdaa9e33) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-ninetyNineNights-ninetyNineNightsClient.js#L16)

```diff
-           jB || "Workbench" !== nB.getMetaInfo(NB).rootName || QB.n.Ly("toggleMenu", "inventory|Workbench")
+           IB || "Workbench" !== JB.getMetaInfo(vB).rootName || TB.l.Gq("toggleMenu", "inventory|Workbench")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729d)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L4)

```diff
-   39537: (BB, jB, zB) => {
+   39515: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bf05d69786149dbe3304ece56a7b181c5f75b7190195e114a2cb564902b729d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-oneBlock-oneBlockClient.js#L30)

```diff
-         vp: () => {
+         Iz: () => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (224 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2)

#### 1. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L4)

```diff
-   36677: (BB, jB, zB) => {
+   36613: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L8-L9` → after: `L7-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L7-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L8-L9)

```diff
-       g: () => rB,
-       h: () => pB
+       h: () => NB,
+       l: () => zB,
+       n: () => hB
```

#### 3. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L11-L18` → after: `L11-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L11-L18) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L11-L18)

```diff
-     var QB = zB(34242),
-       nB = zB(36682),
-       dB = zB(36687),
-       IB = zB(8722),
-       NB = zB(1471),
-       uB = zB(62),
-       UB = zB(83),
-       aB = zB(1148);
+     var TB = ZB(34184),
+       JB = ZB(36619),
+       oB = ZB(36625),
+       GB = ZB(8840),
+       vB = ZB(1507),
+       kB = ZB(63),
+       cB = ZB(82),
+       nB = ZB(1153);
```

#### 4. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L22-L23)

```diff
-       return (0, NB.h)(nB.c, (0, nB.n)()), (0, aB.jsx)(aB.Fragment, {
-         children: null === (BB = (0, nB.n)()) || void 0 === BB ? void 0 : BB.content
+       return (0, vB.h)(JB.d, (0, JB.q)()), (0, nB.jsx)(nB.Fragment, {
+         children: null === (BB = (0, JB.q)()) || void 0 === BB ? void 0 : BB.content
```

#### 5. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L32-L33` → after: `L32-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L32-L33) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L32-L33)

```diff
-       (0, NB.h)(nB.c, (0, nB.n)());
-       const UB = null === (jB = (0, nB.n)()) || void 0 === jB ? void 0 : jB.menu;
+       (0, vB.h)(JB.d, (0, JB.q)());
+       const cB = null === (IB = (0, JB.q)()) || void 0 === IB ? void 0 : IB.menu;
```

#### 6. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L36-L37)

```diff
-         zB || (null === UB || void 0 === UB || null === (BB = UB.onClose) || void 0 === BB || BB.call(UB), (0, dB.n)())
-       }), [zB, UB]), (0, uB.useEffect)((() => zB ? (0, IB.f)(dB.w, dB.f) : void 0), [zB]), (0, aB.jsx)(QB.b, {
+         ZB || (null === cB || void 0 === cB || null === (BB = cB.onClose) || void 0 === BB || BB.call(cB), (0, oB.p)())
+       }), [ZB, cB]), (0, kB.useEffect)((() => ZB ? (0, GB.g)(oB.t, oB.c) : void 0), [ZB]), (0, nB.jsx)(TB.e, {
```

#### 7. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L49)

```diff
-         id: `clientGameHud-${jB}`,
+         id: `clientGameHud-${IB}`,
```

#### 8. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L63)

```diff
-         nB(document.getElementById(`clientGameHud-${zB}`))
+         JB(document.getElementById(`clientGameHud-${ZB}`))
```

#### 9. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L67)

```diff
-   34242: (BB, jB, zB) => {
+   34184: (BB, IB, ZB) => {
```

#### 10. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L69)

```diff
-       b: () => dB
+       e: () => oB
```

#### 11. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L71-L72)

```diff
-     var QB = zB(4657),
-       nB = zB(4664);
+     var TB = ZB(4721),
+       JB = ZB(4728);
```

#### 12. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L83)

```diff
-       return (0, nB.c)(!0, zB, dB, uB), (0, QB.d)(NB, zB), zB || IB ? jB : null
+       return (0, JB.e)(!0, ZB, oB, kB), (0, TB.e)(vB, ZB), ZB || GB ? IB : null
```

#### 13. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L86)

```diff
-   36762: (BB, jB, zB) => {
+   36708: (BB, IB, ZB) => {
```

#### 14. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L89-L91` → after: `L89-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L89-L91) · [Before (L89-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L89-L91)

```diff
-       h: () => IB,
-       l: () => NB,
-       o: () => uB
+       f: () => GB,
+       i: () => vB,
+       k: () => kB
```

#### 15. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L93-L94)

```diff
-     var QB = zB(62),
-       nB = zB(3219);
+     var TB = ZB(63),
+       JB = ZB(3272);
```

#### 16. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L100)

```diff
-       const [jB] = (0, nB.d)(), [zB, uB] = (0, QB.useState)(!1);
+       const [IB] = (0, JB.b)(), [ZB, kB] = (0, TB.useState)(!1);
```

#### 17. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L103-L104` → after: `L103-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L103-L104) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L103-L104)

```diff
-         const jB = document.querySelector(`.${IB}`),
-           zB = document.querySelector(`.${NB}`),
+         const IB = document.querySelector(`.${GB}`),
+           ZB = document.querySelector(`.${vB}`),
```

#### 18. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L121)

```diff
-   8722: (BB, jB, zB) => {
+   8840: (BB, IB, ZB) => {
```

#### 19. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L124)

```diff
-       f: () => nB
+       g: () => JB
```

#### 20. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L141)

```diff
-   38605: (BB, jB, zB) => {
+   38562: (BB, IB, ZB) => {
```

#### 21. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L144-L145` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L144-L145) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L144-L145)

```diff
-       g: () => NB,
-       j: () => uB
+       f: () => vB,
+       i: () => kB
```

#### 22. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L185)

```diff
-   39545: (BB, jB, zB) => {
+   39520: (BB, IB, ZB) => {
```

#### 23. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L191-L196` → after: `L191-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L191-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L191-L196) · [Before (L191-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L191-L196)

```diff
-     var dB = zB(62),
-       IB = zB(36682),
-       NB = zB(28),
-       uB = zB(1471),
-       UB = zB(2033),
-       aB = zB(1240),
+     var oB = ZB(63),
+       GB = ZB(36619),
+       vB = ZB(20),
+       kB = ZB(1507),
+       cB = ZB(2066),
+       nB = ZB(1248),
```

#### 24. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L199-L205` → after: `L199-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L199-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L199-L205) · [Before (L199-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L199-L205)

```diff
-       sB = zB(1664),
-       JB = zB(36677),
-       mB = zB(1108),
-       yB = zB(1971),
-       kB = zB(2027),
-       GB = zB(3525),
-       LB = zB(1778);
+       FB = ZB(1711),
+       NB = ZB(36613),
+       gB = ZB(1102),
+       qB = ZB(1979),
+       yB = ZB(2060),
+       UB = ZB(3595),
+       WB = ZB(1805);
```

#### 25. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L214)

```diff
-     var SB = zB(31);
+     var QB = ZB(24);
```

#### 26. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L304)

```diff
-       return null !== (jB = fB.get(BB)) && void 0 !== jB ? jB : null
+       return null !== (IB = iB.get(BB)) && void 0 !== IB ? IB : null
```

#### 27. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L368)

```diff
-           this.placement.stop(), this.JJ(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
+           this.placement.stop(), this.JN(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
```

#### 28. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L370)

```diff
-           this.placement.start(BB), (0, IB.d)()
+           this.placement.start(BB), (0, GB.f)()
```

#### 29. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L372` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L372) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L372)

```diff
-           this.api.sendCommand(`${nB} cancel`)
+           this.api.sendCommand(`${JB} cancel`)
```

#### 30. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L380` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L380) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L380)

```diff
-         this.pages = DB(jB, zB), SB.n.Ly(FB, this.pages, !0)
+         this.pages = HB(IB, ZB), QB.l.Gq(MB, this.pages, !0)
```

#### 31. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L384)

```diff
-         this.openRequested = jB, this.vp()
+         this.openRequested = IB, this.Iz()
```

#### 32. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L388)

```diff
-         null === BB || NB.c.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, sB.m)() || (0, LB.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = BB, (0, IB.o)()))
+         null === BB || vB.d.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, FB.n)() || (0, WB.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = BB, (0, GB.t)()))
```

#### 33. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L391)

```diff
-         this.reported.has(BB) || (this.reported.add(BB), this.api.sendCommand(`${nB} report ${BB}`))
+         this.reported.has(BB) || (this.reported.add(BB), this.api.sendCommand(`${JB} report ${BB}`))
```

#### 34. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L394)

```diff
-     var VB = zB(1148);
+     var PB = ZB(1153);
```

#### 35. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L404)

```diff
-         } = (0, NB.m)(["isTouchScreen"]),
+         } = (0, vB.o)(["isTouchScreen"]),
```

#### 36. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L407)

```diff
-         } = (0, aB.D)(),
+         } = (0, nB.G)(),
```

#### 37. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L409-L411` → after: `L409-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L409-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L409-L411) · [Before (L409-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L409-L411)

```diff
-       return (0, GB.c)((BB => null !== zB && BB.code === hB && !BB.repeat && !(0, LB.isTypingInInput)()), (BB => {
-         (0, sB.v)(BB, !0, IB.o)
-       })), null === zB ? null : (0, VB.jsx)(JB.e, {
+       return (0, UB.e)((BB => null !== ZB && BB.code === RB && !BB.repeat && !(0, WB.isTypingInInput)()), (BB => {
+         (0, FB.C)(BB, !0, GB.t)
+       })), null === ZB ? null : (0, PB.jsx)(NB.h, {
```

#### 38. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L421)

```diff
-             onClick: IB.o,
+             onClick: GB.t,
```

#### 39. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L424)

```diff
-               children: (0, VB.jsx)(yB.c, {
+               children: (0, PB.jsx)(qB.e, {
```

#### 40. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L428` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L428) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L428)

```diff
-             }), nB("plotsGame:journalButton"), !QB && (0, VB.jsx)(kB.b, {
+             }), JB("plotsGame:journalButton"), !TB && (0, PB.jsx)(yB.d, {
```

#### 41. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L431)

```diff
-             }), "openJournal" === UB.hint && (0, VB.jsx)(mB.c, {
+             }), "openJournal" === cB.hint && (0, PB.jsx)(gB.d, {
```

#### 42. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L439)

```diff
-     var ZB = zB(9266);
+     var mB = ZB(9296);
```

#### 43. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L470` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L470) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L470)

```diff
-         return `r${BB}|m${Number(jB)}`
+         return `r${BB}|m${Number(IB)}`
```

#### 44. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L504)

```diff
-         const [, sB, JB] = null !== (nB = WB.exec(pB)) && void 0 !== nB ? nB : [];
+         const [, FB, NB] = null !== (JB = uB.exec(hB)) && void 0 !== JB ? JB : [];
```

#### 45. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L507)

```diff
-           rB = null !== (mB = null === (yB = dB[`${aB}|meta|${[PB.split("").filter(((BB,jB)=>sB.split("").some((BB=>{const zB=PB.indexOf(BB);return((QB?3-zB:zB)+IB)%4===jB})))).join(""),JB].filter(Boolean).join("|")}`]) || void 0 === yB ? void 0 : yB.id) && void 0 !== mB ? mB : N … [truncated]
+           zB = null !== (gB = null === (qB = oB[`${nB}|meta|${[eB.split("").filter(((BB,IB)=>FB.split("").some((BB=>{const ZB=eB.indexOf(BB);return((TB?3-ZB:ZB)+GB)%4===IB})))).join(""),NB].filter(Boolean).join("|")}`]) || void 0 === qB ? void 0 : qB.id) && void 0 !== gB ? gB : v … [truncated]
```

#### 46. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L512)

```diff
-           let jB = pB.replace(`rot${UB}`, `rot${BB}`);
+           let IB = hB.replace(`rot${cB}`, `rot${BB}`);
```

#### 47. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L517)

```diff
-             jB = `${nB[1]}|${BB.join("")}`
+             IB = `${JB[1]}|${BB.join("")}`
```

#### 48. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L519-L520` → after: `L519-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L519-L520) · [Before (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L519-L520)

```diff
-           const IB = `${aB}|${jB}`;
-           if (rB = null !== (kB = null === (GB = dB[IB]) || void 0 === GB ? void 0 : GB.id) && void 0 !== kB ? kB : null, null === rB) {
+           const GB = `${nB}|${IB}`;
+           if (zB = null !== (yB = null === (UB = oB[GB]) || void 0 === UB ? void 0 : UB.id) && void 0 !== yB ? yB : null, null === zB) {
```

#### 49. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L534-L535` → after: `L534-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L534-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L534-L535) · [Before (L534-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L534-L535)

```diff
-       const dB = nB ? jB : BB;
-       return null === QB ? dB : QB - dB
+       const oB = JB ? IB : BB;
+       return null === TB ? oB : TB - oB
```

#### 50. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L544` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L544) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L544)

```diff
-       return null === QB ? dB : QB - dB
+       return null === TB ? oB : TB - oB
```

#### 51. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L611` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L611) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L611)

```diff
-       const zB = `${BB}|${jB}`;
+       const ZB = `${BB}|${IB}`;
```

#### 52. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L642)

```diff
-         }(jB, uB, UB), pB = lB.for(ZB.i), rB = dB.map((BB => (0, ZB.g)(pB.turnBlockId((0, ZB.k)(BB), jB, !1)))), sB = [];
+         }(IB, kB, cB), hB = lB.for(mB.f), zB = oB.map((BB => (0, mB.e)(hB.turnBlockId((0, mB.g)(BB), IB, !1)))), FB = [];
```

#### 53. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L676` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L676) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L676)

```diff
-             QB[jB[1]] = (null !== (zB = QB[jB[1]]) && void 0 !== zB ? zB : 0) + 1
+             TB[IB[1]] = (null !== (ZB = TB[IB[1]]) && void 0 !== ZB ? ZB : 0) + 1
```

#### 54. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L697` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L697) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L697)

```diff
-         this.shown = BB, this.topOpen = 0, null === BB && this.Ly(null)
+         this.shown = BB, this.topOpen = 0, null === BB && this.Gq(null)
```

#### 55. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L701)

```diff
-         null !== QB && (BB >= jB && (this.topOpen = zB), this.Ly(RB(QB.id, jB - QB.y, BB >= jB ? zB : this.topOpen + zB)))
+         null !== TB && (BB >= IB && (this.topOpen = ZB), this.Gq(VB(TB.id, IB - TB.y, BB >= IB ? ZB : this.topOpen + ZB)))
```

#### 56. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L705)

```diff
-         (null === BB || void 0 === BB ? void 0 : BB.id) === (null === jB || void 0 === jB ? void 0 : jB.id) && (null === BB || void 0 === BB ? void 0 : BB.filled) === (null === jB || void 0 === jB ? void 0 : jB.filled) && (null === BB || void 0 === BB ? void 0 : BB.total) === (nu … [truncated]
+         (null === BB || void 0 === BB ? void 0 : BB.id) === (null === IB || void 0 === IB ? void 0 : IB.id) && (null === BB || void 0 === BB ? void 0 : BB.filled) === (null === IB || void 0 === IB ? void 0 : IB.filled) && (null === BB || void 0 === BB ? void 0 : BB.total) === (nu … [truncated]
```

#### 57. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L719)

```diff
-         this.plot = BB, SB.n.Ly(Bj, BB, !0)
+         this.plot = BB, QB.l.Gq(BI, BB, !0)
```

#### 58. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L725)

```diff
-         this.guide = BB, SB.n.Ly(jj, BB, !0)
+         this.guide = BB, QB.l.Gq(II, BB, !0)
```

#### 59. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L728)

```diff
-         SB.n.Ly(zj, void 0, !0)
+         QB.l.Gq(ZI, void 0, !0)
```

#### 60. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L731-L734` → after: `L731-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L731-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L731-L734) · [Before (L731-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L731-L734)

```diff
-     var nj = zB(1306),
-       dj = zB(38635),
-       Ij = zB(36946),
-       Nj = zB(1507);
+     var JI = ZB(1343),
+       oI = ZB(38583),
+       GI = ZB(36909),
+       vI = ZB(1538);
```

#### 61. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L743` → after: `L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L743) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L743)

```diff
-       } = (0, aB.D)();
+       } = (0, nB.G)();
```

#### 62. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L747)

```diff
-         ...(0, Nj.f)(jB, "pointerup"),
+         ...(0, vI.h)(IB, "pointerup"),
```

#### 63. `bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js` (Changed code · before: `L761-L762` → after: `L761-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-0f7f1cef101145dff230a9c7ea3d1a88381aa229cc14c2bbd93a9158416ebaf2) · [After (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L761-L762) · [Before (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/clientGame-plots-plotsClient.js#L761-L762)

```diff
-       } = (0, aB.D)(), NB = (0, dB.useRef)(jB);
-       return NB.current = jB, (0, nj.v)("popup", NB, null === QB ? null : QB.onSkip, null !== QB, null, "controller:menusSkipTutorial"), (0, VB.jsxs)(Ij.f, {
+       } = (0, nB.G)(), vB = (0, oB.useRef)(IB);
+       return vB.current = IB, (0, JI.t)("popup", vB, null === TB ? null : TB.onSkip, null !== TB, null, "controller:menusSkipTutorial"), (0, PB.jsxs)(GI.e, {
```
