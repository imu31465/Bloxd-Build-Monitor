# Changed — Bundle Modifications Report (Part 004 / 133)

- **Updated at**: `2026-11-21T12:06 JST`
- **Part**: `4 / 133` (**375** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 003](part-003.md) · [Part 005 →](part-005.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/103.js` (x17cru.159bd7ce → bqoxjr.2558012f · continued)

- **File**: `bundles/bloxd.io/chunks/js/103.js` (2763 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e)

#### 1071. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14080-L14097` → after: `L14080-L14097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14080-L14097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14080-L14097) · [Before (L14080-L14097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14080-L14097)

```diff
-             markdown: Nd.filter(((dd, Jd) => !Pd.some((dd => Jd >= dd.start && Jd < dd.end)))).join("\n"),
-             hidden: Zd
-           }
-         }
- 
-         function SG(dd, Jd, kd) {
-           const pd = jI(dd);
-           if (null === pd.nextChange) return bG(dd, Jd, kd);
-           const Nd = dd => dd.replace(/\s+/g, " ").trim(),
-             Wd = new Set(pd.rest.flatMap((dd => "list" !== dd.kind || dd.ordered ? [] : dd.items.map((dd => Nd(dd.text)))))),
-             Pd = dd.split("\n"),
-             Zd = [],
-             gd = [];
-           for (let Cd = 0; Cd < Pd.length;) {
-             const dd = /^[-*+]\s+(.*)$/.exec(Pd[Cd]),
-               pd = null === dd ? Cd + 1 : kG(Pd, Cd).textEnd;
- ... (2 more removed lines; see GitHub link above)
+             markdown: qQ.filter(((QQ, FQ) => !DQ.some((QQ => FQ >= QQ.start && FQ < QQ.end)))).join("\n"),
+             hidden: kQ
+           }
+         }
+ 
+         function TG(QQ, FQ, wQ) {
+           const LQ = KM(QQ);
+           if (null === LQ.nextChange) return NG(QQ, FQ, wQ);
+           const qQ = QQ => QQ.replace(/\s+/g, " ").trim(),
+             oQ = new Set(LQ.rest.flatMap((QQ => "list" !== QQ.kind || QQ.ordered ? [] : QQ.items.map((QQ => qQ(QQ.text)))))),
+             DQ = QQ.split("\n"),
+             kQ = [],
+             vQ = [];
+           for (let mQ = 0; mQ < DQ.length;) {
+             const QQ = /^[-*+]\s+(.*)$/.exec(DQ[mQ]),
+               LQ = null === QQ ? mQ + 1 : LG(DQ, mQ).textEnd;
+ ... (2 more added lines; see GitHub link above)
```

#### 1072. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14100-L14105` → after: `L14100-L14105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14100-L14105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14100-L14105) · [Before (L14100-L14105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14100-L14105)

```diff
-             const Kd = Pd.slice(Cd, pd).join("\n"),
-               od = mG(Kd.replace(uI, ""), Jd, kd);
-             null === od.reason ? gd.push(...Pd.slice(Cd, pd)) : Zd.push({
-               markdown: Kd,
-               reason: od.reason
-             }), Cd = pd
+             const uQ = DQ.slice(mQ, LQ).join("\n"),
+               HQ = UG(uQ.replace(gM, ""), FQ, wQ);
+             null === HQ.reason ? vQ.push(...DQ.slice(mQ, LQ)) : kQ.push({
+               markdown: uQ,
+               reason: HQ.reason
+             }), mQ = LQ
```

#### 1073. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14108-L14109` → after: `L14108-L14109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14108-L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14108-L14109) · [Before (L14108-L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14108-L14109)

```diff
-             markdown: gd.join("\n"),
-             hidden: Zd
+             markdown: vQ.join("\n"),
+             hidden: kQ
```

#### 1074. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14113-L14114` → after: `L14113-L14114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14113-L14114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14113-L14114) · [Before (L14113-L14114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14113-L14114)

```diff
-         function jG(dd, Jd, kd) {
-           return FG(dd, Jd, kd.places) || MG(dd, Jd, kd.codeLines)
+         function KG(QQ, FQ, wQ) {
+           return rG(QQ, FQ, wQ.places) || sG(QQ, FQ, wQ.codeLines)
```

#### 1075. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14116` → after: `L14116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14116) · [Before (L14116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14116)

```diff
-         const XG = .02, fG = 5, nG = 20;
+         const zG = .02, lG = 5, jG = 20;
```

#### 1076. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14118-L14120` → after: `L14118-L14120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14118-L14120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14118-L14120) · [Before (L14118-L14120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14118-L14120)

```diff
-         function UG(dd) {
-           const Jd = [],
-             kd = dd => {
+         function aG(QQ) {
+           const FQ = [],
+             wQ = QQ => {
```

#### 1077. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14122-L14124` → after: `L14122-L14124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14122-L14124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14122-L14124) · [Before (L14122-L14124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14122-L14124)

```diff
-                 areas: Jd,
-                 total: kd
-               } = me(dd);
+                 areas: FQ,
+                 total: wQ
+               } = It(QQ);
```

#### 1078. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14126-L14132` → after: `L14126-L14132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14126-L14132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14126-L14132) · [Before (L14126-L14132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14126-L14132)

```diff
-                 spots: kd <= 0 ? [] : Jd.filter((dd => dd.count / kd >= XG)).slice(0, fG).map((dd => ({
-                   x: dd.x,
-                   z: dd.z,
-                   share: Math.round(dd.count / kd * 1e3) / 10,
-                   centreX: dd.centreX,
-                   centreZ: dd.centreZ,
-                   y: dd.busiestY
+                 spots: wQ <= 0 ? [] : FQ.filter((QQ => QQ.count / wQ >= zG)).slice(0, lG).map((QQ => ({
+                   x: QQ.x,
+                   z: QQ.z,
+                   share: Math.round(QQ.count / wQ * 1e3) / 10,
+                   centreX: QQ.centreX,
+                   centreZ: QQ.centreZ,
+                   y: QQ.busiestY
```

#### 1079. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14134` → after: `L14134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14134) · [Before (L14134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14134)

```diff
-                 total: kd
+                 total: wQ
```

#### 1080. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14137-L14140` → after: `L14137-L14140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14137-L14140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14137-L14140) · [Before (L14137-L14140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14137-L14140)

```diff
-           for (const Nd of dd.heatmaps) {
-             const Wd = kd(Nd.players);
-             Wd.spots.length > 0 && Jd.push({
-               category: Nd.gameCategoryId,
+           for (const qQ of QQ.heatmaps) {
+             const oQ = wQ(qQ.players);
+             oQ.spots.length > 0 && FQ.push({
+               category: qQ.gameCategoryId,
```

#### 1081. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14145` → after: `L14145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14145) · [Before (L14145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14145)

```diff
-               ...Wd
+               ...oQ
```

#### 1082. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14148-L14150` → after: `L14148-L14150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14148-L14150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14148-L14150) · [Before (L14148-L14150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14148-L14150)

```diff
-                 eventType: Pd,
-                 eventValue: Zd,
-                 heatmap: gd
+                 eventType: DQ,
+                 eventValue: kQ,
+                 heatmap: vQ
```

#### 1083. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14152-L14153` → after: `L14152-L14153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14152-L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14152-L14153) · [Before (L14152-L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14152-L14153)

```diff
-               of Nd.events) {
-               var pd;
+               of qQ.events) {
+               var LQ;
```

#### 1084. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14155-L14165` → after: `L14155-L14165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14155-L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14155-L14165) · [Before (L14155-L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14155-L14165)

```diff
-                 spots: Wd,
-                 total: Cd
-               } = kd(gd);
-               0 === Wd.length || Cd < nG || Jd.push({
-                 category: Nd.gameCategoryId,
-                 event: "" === Zd ? Pd : `${Pd}: ${Zd}`,
-                 words: [...(0, LP.E)(Pd), ...(0, LP.E)(Zd)].map(yG),
-                 isDeath: MQ(Pd),
-                 isLoggingOnly: null !== DK(Pd, Zd, null !== (pd = dd.worldCode) && void 0 !== pd ? pd : null),
-                 spots: Wd,
-                 total: Cd
+                 spots: oQ,
+                 total: mQ
+               } = wQ(vQ);
+               0 === oQ.length || mQ < jG || FQ.push({
+                 category: qQ.gameCategoryId,
+                 event: "" === kQ ? DQ : `${DQ}: ${kQ}`,
+                 words: [...(0, xD.B)(DQ), ...(0, xD.B)(kQ)].map(XG),
+                 isDeath: OY(DQ),
+                 isLoggingOnly: null !== Vu(DQ, kQ, null !== (LQ = QQ.worldCode) && void 0 !== LQ ? LQ : null),
+                 spots: oQ,
+                 total: mQ
```

#### 1085. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14169` → after: `L14169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14169) · [Before (L14169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14169)

```diff
-           return Jd
+           return FQ
```

#### 1086. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14172-L14174` → after: `L14172-L14174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14172-L14174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14172-L14174) · [Before (L14172-L14174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14172-L14174)

```diff
-         function yG(dd) {
-           const Jd = dd.toLowerCase();
-           return /^(?:die|dies|died|dying|dead|death|deaths|killed)$/.test(Jd) ? "death" : /^(?:fall|falls|fell|falling|fallen)$/.test(Jd) ? "fall" : /^(?:explosions?|explodes?|exploded|exploding|explosives?)$/.test(Jd) ? "explosion" : Jd.length > 3 && Jd.endsWith("s") && !Jd.end … [truncated]
+         function XG(QQ) {
+           const FQ = QQ.toLowerCase();
+           return /^(?:die|dies|died|dying|dead|death|deaths|killed)$/.test(FQ) ? "death" : /^(?:fall|falls|fell|falling|fallen)$/.test(FQ) ? "fall" : /^(?:explosions?|explodes?|exploded|exploding|explosives?)$/.test(FQ) ? "explosion" : FQ.length > 3 && FQ.endsWith("s") && !FQ.end … [truncated]
```

#### 1087. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14176` → after: `L14176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14176) · [Before (L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14176)

```diff
-         const DG = /\b(?:die|dies|died|dying|death|deaths|dead|killed|zombies?|falls?|fell|falling|void|lava|danger(?:ous)?|explosions?|traps?|hazards?|respawn(?:s|ing)?)\b/i, TG = /\b(?:checkpoints?|(?:re)?spawns?(?:\s+(?:points?|pads?|areas?|locations?|positions?))?|safe\s+(?:z … [truncated]
+         const fG = /\b(?:die|dies|died|dying|death|deaths|dead|killed|zombies?|falls?|fell|falling|void|lava|danger(?:ous)?|explosions?|traps?|hazards?|respawn(?:s|ing)?)\b/i, VG = /\b(?:checkpoints?|(?:re)?spawns?(?:\s+(?:points?|pads?|areas?|locations?|positions?))?|safe\s+(?:z … [truncated]
```

#### 1088. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14178-L14185` → after: `L14178-L14185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14178-L14185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14178-L14185) · [Before (L14178-L14185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14178-L14185)

```diff
-         function VG(dd) {
-           const Jd = [];
-           for (const Nd of dd.matchAll(hG)) Jd.push({
-             x: Number(Nd[1]),
-             z: Number(Nd[2]),
-             start: Nd.index,
-             end: Nd.index + Nd[0].length,
-             isRange: /\bto\b|\d\s*-\s*\d/.test(Nd[0])
+         function ZG(QQ) {
+           const FQ = [];
+           for (const qQ of QQ.matchAll(EG)) FQ.push({
+             x: Number(qQ[1]),
+             z: Number(qQ[2]),
+             start: qQ.index,
+             end: qQ.index + qQ[0].length,
+             isRange: /\bto\b|\d\s*-\s*\d/.test(qQ[0])
```

#### 1089. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14187-L14196` → after: `L14187-L14196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14187-L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14187-L14196) · [Before (L14187-L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14187-L14196)

```diff
-           for (const Nd of dd.matchAll(rG)) {
-             var kd, pd;
-             const dd = null !== (kd = Nd[1]) && void 0 !== kd ? kd : Nd[3],
-               Wd = null !== (pd = Nd[2]) && void 0 !== pd ? pd : Nd[4],
-               Pd = Nd.index + Nd[0].search(/[(\-\d]/);
-             Jd.some((dd => Pd < dd.end && Nd.index + Nd[0].length > dd.start)) || Jd.push({
-               x: Number(dd),
-               z: Number(Wd),
-               start: Pd,
-               end: Nd.index + Nd[0].length,
+           for (const qQ of QQ.matchAll(nG)) {
+             var wQ, LQ;
+             const QQ = null !== (wQ = qQ[1]) && void 0 !== wQ ? wQ : qQ[3],
+               oQ = null !== (LQ = qQ[2]) && void 0 !== LQ ? LQ : qQ[4],
+               DQ = qQ.index + qQ[0].search(/[(\-\d]/);
+             FQ.some((QQ => DQ < QQ.end && qQ.index + qQ[0].length > QQ.start)) || FQ.push({
+               x: Number(QQ),
+               z: Number(oQ),
+               start: DQ,
+               end: qQ.index + qQ[0].length,
```

#### 1090. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14200` → after: `L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14200) · [Before (L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14200)

```diff
-           return Jd.sort(((dd, Jd) => dd.start - Jd.start))
+           return FQ.sort(((QQ, FQ) => QQ.start - FQ.start))
```

#### 1091. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14203-L14204` → after: `L14203-L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14203-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14203-L14204) · [Before (L14203-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14203-L14204)

```diff
-         function zG(dd, Jd, kd) {
-           return dd >= kd.x && dd < kd.x + ae && Jd >= kd.z && Jd < kd.z + ae
+         function yG(QQ, FQ, wQ) {
+           return QQ >= wQ.x && QQ < wQ.x + Rt && FQ >= wQ.z && FQ < wQ.z + Rt
```

#### 1092. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14207-L14208` → after: `L14207-L14208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14207-L14208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14207-L14208) · [Before (L14207-L14208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14207-L14208)

```diff
-         function HG(dd) {
-           return new Set(dd.toLowerCase().split(/[^a-z\d]+/).filter((dd => "" !== dd)).map(yG))
+         function BG(QQ) {
+           return new Set(QQ.toLowerCase().split(/[^a-z\d]+/).filter((QQ => "" !== QQ)).map(XG))
```

#### 1093. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14211-L14212` → after: `L14211-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14211-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14211-L14212) · [Before (L14211-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14211-L14212)

```diff
-         function wG(dd, Jd) {
-           return Jd.words.some((Jd => Jd.length >= 3 && !EG.has(Jd) && dd.has(Jd)))
+         function dG(QQ, FQ) {
+           return FQ.words.some((FQ => FQ.length >= 3 && !hG.has(FQ) && QQ.has(FQ)))
```

#### 1094. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14215-L14217` → after: `L14215-L14217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14215-L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14215-L14217) · [Before (L14215-L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14215-L14217)

```diff
-         function AG(dd, Jd) {
-           const kd = new Set(Jd.flatMap((Jd => "" !== Jd.category && dd.has(yG(Jd.category)) ? [Jd.category] : [])));
-           return 1 === kd.size ? [...kd][0] : null
+         function Qp(QQ, FQ) {
+           const wQ = new Set(FQ.flatMap((FQ => "" !== FQ.category && QQ.has(XG(FQ.category)) ? [FQ.category] : [])));
+           return 1 === wQ.size ? [...wQ][0] : null
```

#### 1095. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14220-L14222` → after: `L14220-L14222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14220-L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14220-L14222) · [Before (L14220-L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14220-L14222)

```diff
-         function dv(dd) {
-           const Jd = "" === dd.category ? "" : ` in ${dd.category}`;
-           return null === dd.event ? `players spend time${Jd}` : `\`${dd.event}\` events${Jd} happen`
+         function Fp(QQ) {
+           const FQ = "" === QQ.category ? "" : ` in ${QQ.category}`;
+           return null === QQ.event ? `players spend time${FQ}` : `\`${QQ.event}\` events${FQ} happen`
```

#### 1096. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14225-L14226` → after: `L14225-L14226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14225-L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14225-L14226) · [Before (L14225-L14226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14225-L14226)

```diff
-         function Jv(dd) {
-           return `x ${dd.x} to ${dd.x+ae-1}, z ${dd.z} to ${dd.z+ae-1}`
+         function wp(QQ) {
+           return `x ${QQ.x} to ${QQ.x+Rt-1}, z ${QQ.z} to ${QQ.z+Rt-1}`
```

#### 1097. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14228` → after: `L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14228) · [Before (L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14228)

```diff
-         const kv = 4e3;
+         const Lp = 4e3;
```

#### 1098. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14230-L14238` → after: `L14230-L14238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14230-L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14230-L14238) · [Before (L14230-L14238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14230-L14238)

```diff
-         function pv(dd) {
-           const Jd = [];
-           let kd = 0;
-           for (const pd of dd.matchAll(/[.!?](?=\s+[A-Z*_`[]|\s*$)/g)) {
-             const Nd = pd.index + 1;
-             Jd.push({
-               sentence: dd.slice(kd, Nd),
-               start: kd
-             }), kd = Nd
+         function qp(QQ) {
+           const FQ = [];
+           let wQ = 0;
+           for (const LQ of QQ.matchAll(/[.!?](?=\s+[A-Z*_`[]|\s*$)/g)) {
+             const qQ = LQ.index + 1;
+             FQ.push({
+               sentence: QQ.slice(wQ, qQ),
+               start: wQ
+             }), wQ = qQ
```

#### 1099. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14240-L14243` → after: `L14240-L14243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14240-L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14240-L14243) · [Before (L14240-L14243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14240-L14243)

```diff
-           return kd < dd.length && Jd.push({
-             sentence: dd.slice(kd),
-             start: kd
-           }), Jd
+           return wQ < QQ.length && FQ.push({
+             sentence: QQ.slice(wQ),
+             start: wQ
+           }), FQ
```

#### 1100. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14246-L14249` → after: `L14246-L14249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14246-L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14246-L14249) · [Before (L14246-L14249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14246-L14249)

```diff
-         function Nv(dd, Jd, kd) {
-           if (dd.length > kv || 0 === Jd.length) return [];
-           const pd = [...dd.matchAll(/`[^`\n]*`/g)].map((dd => [dd.index, dd.index + dd[0].length])),
-             Nd = [];
+         function op(QQ, FQ, wQ) {
+           if (QQ.length > Lp || 0 === FQ.length) return [];
+           const LQ = [...QQ.matchAll(/`[^`\n]*`/g)].map((QQ => [QQ.index, QQ.index + QQ[0].length])),
+             qQ = [];
```

#### 1101. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14251-L14252` → after: `L14251-L14252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14251-L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14251-L14252) · [Before (L14251-L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14251-L14252)

```diff
-               sentence: Wd,
-               start: Pd
+               sentence: oQ,
+               start: DQ
```

#### 1102. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14254-L14265` → after: `L14254-L14265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14254-L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14254-L14265) · [Before (L14254-L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14254-L14265)

```diff
-             of pv(dd)) {
-             const dd = VG(Wd);
-             if (0 === dd.length) continue;
-             const Zd = HG(Wd.replace(/\[\[[^\]\n]*\]\]/g, " ")),
-               gd = DG.test(Wd),
-               Cd = AG(Zd, Jd),
-               Kd = Pd + Wd.replace(/[\s*_]+$/, "").length;
-             for (const od of dd) {
-               const dd = Pd + od.start;
-               if (pd.some((Jd => {
-                   let [kd, pd] = Jd;
-                   return dd >= kd && dd < pd
+             of qp(QQ)) {
+             const QQ = ZG(oQ);
+             if (0 === QQ.length) continue;
+             const kQ = BG(oQ.replace(/\[\[[^\]\n]*\]\]/g, " ")),
+               vQ = fG.test(oQ),
+               mQ = Qp(kQ, FQ),
+               uQ = DQ + oQ.replace(/[\s*_]+$/, "").length;
+             for (const HQ of QQ) {
+               const QQ = DQ + HQ.start;
+               if (LQ.some((FQ => {
+                   let [wQ, LQ] = FQ;
+                   return QQ >= wQ && QQ < LQ
```

#### 1103. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14267-L14272` → after: `L14267-L14272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14267-L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14267-L14272) · [Before (L14267-L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14267-L14272)

```diff
-               const ld = Pv(od, Zd, gd && !Wv(Wd.slice(0, od.start)), Cd, Jd, kd);
-               null !== ld && Nd.push({
-                 claim: ld,
-                 start: dd,
-                 end: Pd + od.end,
-                 at: Kd
+               const bQ = kp(HQ, kQ, vQ && !Dp(oQ.slice(0, HQ.start)), mQ, FQ, wQ);
+               null !== bQ && qQ.push({
+                 claim: bQ,
+                 start: QQ,
+                 end: DQ + HQ.end,
+                 at: uQ
```

#### 1104. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14276` → after: `L14276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14276) · [Before (L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14276)

```diff
-           return Nd
+           return qQ
```

#### 1105. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14279-L14281` → after: `L14279-L14281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14279-L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14279-L14281) · [Before (L14279-L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14279-L14281)

```diff
-         function Wv(dd) {
-           const Jd = TG.exec(dd);
-           return null !== Jd && !DG.test(Jd[0].replace(/^\S+/, ""))
+         function Dp(QQ) {
+           const FQ = VG.exec(QQ);
+           return null !== FQ && !fG.test(FQ[0].replace(/^\S+/, ""))
```

#### 1106. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14284` → after: `L14284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14284) · [Before (L14284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14284)

```diff
-         function Pv(dd, Jd, kd, pd, Nd, Wd) {
+         function kp(QQ, FQ, wQ, LQ, qQ, oQ) {
```

#### 1107. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14286-L14293` → after: `L14286-L14293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14286-L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14286-L14293) · [Before (L14286-L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14286-L14293)

```diff
-             x: Pd,
-             z: Zd
-           } = dd, gd = function(dd, Jd, kd) {
-             return kd.flatMap((kd => {
-               const pd = kd.spots.find((kd => zG(dd, Jd, kd)));
-               return void 0 === pd ? [] : [{
-                 layer: kd,
-                 share: pd.share
+             x: DQ,
+             z: kQ
+           } = QQ, vQ = function(QQ, FQ, wQ) {
+             return wQ.flatMap((wQ => {
+               const LQ = wQ.spots.find((wQ => yG(QQ, FQ, wQ)));
+               return void 0 === LQ ? [] : [{
+                 layer: wQ,
+                 share: LQ.share
```

#### 1108. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14295-L14297` → after: `L14295-L14297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14295-L14297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14295-L14297) · [Before (L14295-L14297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14295-L14297)

```diff
-             })).sort(((dd, Jd) => Jd.share - dd.share))
-           }(Pd, Zd, Nd);
-           if (0 === gd.length) return null === Wd || jG(Pd, Zd, Wd) ? null : {
+             })).sort(((QQ, FQ) => FQ.share - QQ.share))
+           }(DQ, kQ, qQ);
+           if (0 === vQ.length) return null === oQ || KG(DQ, kQ, oQ) ? null : {
```

#### 1109. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14300` → after: `L14300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14300) · [Before (L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14300)

```diff
-           const Cd = gd.filter((dd => {
+           const mQ = vQ.filter((QQ => {
```

#### 1110. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14302-L14304` → after: `L14302-L14304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14302-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14302-L14304) · [Before (L14302-L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14302-L14304)

```diff
-               layer: Jd
-             } = dd;
-             return !Jd.isLoggingOnly
+               layer: FQ
+             } = QQ;
+             return !FQ.isLoggingOnly
```

#### 1111. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14306` → after: `L14306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14306) · [Before (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14306)

```diff
-           if (0 === Cd.length) return {
+           if (0 === mQ.length) return {
```

#### 1112. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14308` → after: `L14308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14308) · [Before (L14308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14308)

```diff
-             event: gd[0].layer.event
+             event: vQ[0].layer.event
```

#### 1113. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14310-L14311` → after: `L14310-L14311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14310-L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14310-L14311) · [Before (L14310-L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14310-L14311)

```diff
-           if (!kd) return null;
-           if (Cd.some((dd => {
+           if (!wQ) return null;
+           if (mQ.some((QQ => {
```

#### 1114. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14313-L14315` → after: `L14313-L14315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14313-L14315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14313-L14315) · [Before (L14313-L14315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14313-L14315)

```diff
-                 layer: kd
-               } = dd;
-               return null !== kd.event && wG(Jd, kd)
+                 layer: wQ
+               } = QQ;
+               return null !== wQ.event && dG(FQ, wQ)
```

#### 1115. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14317-L14320` → after: `L14317-L14320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14317-L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14317-L14320) · [Before (L14317-L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14317-L14320)

```diff
-           const Kd = Nd.filter((dd => dd.isDeath && !dd.isLoggingOnly)),
-             od = Kd.filter((dd => wG(Jd, dd))),
-             ld = od.length > 0 ? od : Kd;
-           if (Cd.some((dd => {
+           const uQ = qQ.filter((QQ => QQ.isDeath && !QQ.isLoggingOnly)),
+             HQ = uQ.filter((QQ => dG(FQ, QQ))),
+             bQ = HQ.length > 0 ? HQ : uQ;
+           if (mQ.some((QQ => {
```

#### 1116. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14322-L14324` → after: `L14322-L14324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14322-L14324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14322-L14324) · [Before (L14322-L14324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14322-L14324)

```diff
-                 layer: Jd
-               } = dd;
-               return ld.includes(Jd)
+                 layer: FQ
+               } = QQ;
+               return bQ.includes(FQ)
```

#### 1117. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14326-L14329` → after: `L14326-L14329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14326-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14326-L14329) · [Before (L14326-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14326-L14329)

```diff
-           const Qd = Cd[0].layer,
-             Ld = (dd, Jd) => null === Jd ? [] : dd.filter((dd => dd.category === Jd)),
-             Od = [Ld(ld, pd), Ld(ld, Qd.category), ld].find((dd => dd.length > 0)),
-             ed = void 0 === Od ? null : Od.reduce(((dd, Jd) => Jd.total > dd.total ? Jd : dd));
+           const YQ = mQ[0].layer,
+             xQ = (QQ, FQ) => null === FQ ? [] : QQ.filter((QQ => QQ.category === FQ)),
+             AQ = [xQ(bQ, LQ), xQ(bQ, YQ.category), bQ].find((QQ => QQ.length > 0)),
+             tQ = void 0 === AQ ? null : AQ.reduce(((QQ, FQ) => FQ.total > QQ.total ? FQ : QQ));
```

#### 1118. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14332-L14336` → after: `L14332-L14336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14332-L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14332-L14336) · [Before (L14332-L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14332-L14336)

```diff
-             other: dv(Qd),
-             subject: null === ed ? null : {
-               event: ed.event,
-               category: ed.category,
-               text: (Rd = ed.spots[0], Id = dd.isRange, Id ? Jv(Rd) : `x ${Rd.x}, z ${Rd.z}`),
+             other: Fp(YQ),
+             subject: null === tQ ? null : {
+               event: tQ.event,
+               category: tQ.category,
+               text: (eQ = tQ.spots[0], MQ = QQ.isRange, MQ ? wp(eQ) : `x ${eQ.x}, z ${eQ.z}`),
```

#### 1119. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14338-L14339` → after: `L14338-L14339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14338-L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14338-L14339) · [Before (L14338-L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14338-L14339)

```diff
-                 x: ed.spots[0].x,
-                 z: ed.spots[0].z
+                 x: tQ.spots[0].x,
+                 z: tQ.spots[0].z
```

#### 1120. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14343` → after: `L14343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14343) · [Before (L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14343)

```diff
-           var Rd, Id
+           var eQ, MQ
```

#### 1121. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14346-L14349` → after: `L14346-L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14346-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14346-L14349) · [Before (L14346-L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14346-L14349)

```diff
-         function Zv(dd) {
-           var Jd, kd, pd;
-           const Nd = null === (Jd = /\bbetween\s+[^.!?]*\d\)?(\s+and\s+)$/i.exec(dd)) || void 0 === Jd ? void 0 : Jd[1];
-           return null !== (kd = null !== Nd && void 0 !== Nd ? Nd : null === (pd = /\s*(?:\(|\b(?:at|near|around|by|to|from|between)\s+(?:the\s+)?(?:(?:spot|place|position|coordinates|location|area)\s+)?)$/i.exec(dd)) || void 0 === pd ? void 0 : pd[0]) && void 0 !== kd ? kd : nul … [truncated]
+         function vp(QQ) {
+           var FQ, wQ, LQ;
+           const qQ = null === (FQ = /\bbetween\s+[^.!?]*\d\)?(\s+and\s+)$/i.exec(QQ)) || void 0 === FQ ? void 0 : FQ[1];
+           return null !== (wQ = null !== qQ && void 0 !== qQ ? qQ : null === (LQ = /\s*(?:\(|\b(?:at|near|around|by|to|from|between)\s+(?:the\s+)?(?:(?:spot|place|position|coordinates|location|area)\s+)?)$/i.exec(QQ)) || void 0 === LQ ? void 0 : LQ[0]) && void 0 !== wQ ? wQ : nul … [truncated]
```

#### 1122. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14352-L14354` → after: `L14352-L14354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14352-L14354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14352-L14354) · [Before (L14352-L14354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14352-L14354)

```diff
-         function gv(dd, Jd, kd, pd) {
-           if (0 === Jd.length) return {
-             markdown: dd,
+         function mp(QQ, FQ, wQ, LQ) {
+           if (0 === FQ.length) return {
+             markdown: QQ,
```

#### 1123. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14357-L14367` → after: `L14357-L14367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14357-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14357-L14367) · [Before (L14357-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14357-L14367)

```diff
-           const Nd = [],
-             Wd = JG(dd, (dd => function(dd, Jd, kd, pd, Nd) {
-               const Wd = Nv(dd, Jd, kd);
-               if (0 === Wd.length) return dd;
-               let Pd = dd;
-               const Zd = [],
-                 gd = (dd, Jd, kd) => {
-                   Zd.push({
-                     start: dd,
-                     shift: kd.length - (Jd - dd)
-                   }), Pd = Pd.slice(0, dd) + kd + Pd.slice(Jd)
+           const qQ = [],
+             oQ = wG(QQ, (QQ => function(QQ, FQ, wQ, LQ, qQ) {
+               const oQ = op(QQ, FQ, wQ);
+               if (0 === oQ.length) return QQ;
+               let DQ = QQ;
+               const kQ = [],
+                 vQ = (QQ, FQ, wQ) => {
+                   kQ.push({
+                     start: QQ,
+                     shift: wQ.length - (FQ - QQ)
+                   }), DQ = DQ.slice(0, QQ) + wQ + DQ.slice(FQ)
```

#### 1124. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14369-L14370` → after: `L14369-L14370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14369-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14369-L14370) · [Before (L14369-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14369-L14370)

```diff
-               for (const Qd of [...Wd].reverse()) {
-                 var Cd, Kd, od;
+               for (const YQ of [...oQ].reverse()) {
+                 var mQ, uQ, HQ;
```

#### 1125. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14372-L14377` → after: `L14372-L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14372-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14372-L14377) · [Before (L14372-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14372-L14377)

```diff
-                   claim: dd
-                 } = Qd, Jd = Pd.slice(Qd.end), kd = null !== (Cd = null === (Kd = uG.exec(Jd)) || void 0 === Kd ? void 0 : Kd[0]) && void 0 !== Cd ? Cd : "", Wd = tG.exec(Jd.slice(kd.length)), Ld = null !== (od = null === Wd || void 0 === Wd ? void 0 : Wd[0]) && void 0 !== od ? o … [truncated]
-                 if ("otherLayer" === dd.kind) {
-                   var ld;
-                   if (null === dd.subject) continue;
-                   const Jd = Zd.reduce(((dd, Jd) => {
+                   claim: QQ
+                 } = YQ, FQ = DQ.slice(YQ.end), wQ = null !== (mQ = null === (uQ = gG.exec(FQ)) || void 0 === uQ ? void 0 : uQ[0]) && void 0 !== mQ ? mQ : "", oQ = PG.exec(FQ.slice(wQ.length)), xQ = null !== (HQ = null === oQ || void 0 === oQ ? void 0 : oQ[0]) && void 0 !== HQ ? H … [truncated]
+                 if ("otherLayer" === QQ.kind) {
+                   var bQ;
+                   if (null === QQ.subject) continue;
+                   const FQ = kQ.reduce(((QQ, FQ) => {
```

#### 1126. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14379-L14403` → after: `L14379-L14403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14379-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14379-L14403) · [Before (L14379-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14379-L14403)

```diff
-                         start: kd,
-                         shift: pd
-                       } = Jd;
-                       return kd < Qd.at ? dd + pd : dd
-                     }), Qd.at),
-                     kd = Pd.slice(0, Jd),
-                     pd = kd.slice(0, Qd.start) + kd.slice(Qd.end + Od);
-                   if (/\d%\s+of\s+(?:all\s+|the\s+|their\s+)?(?:[\w-]+\s+)?(?:play ?time|time)\b/i.test(pd) || cG.test(pd)) continue;
-                   const Cd = "" === dd.subject.category ? "" : ` in ${dd.subject.category}`,
-                     Kd = void 0 !== (null === Wd || void 0 === Wd ? void 0 : Wd[3]),
-                     od = null === Wd ? "" : `${null!==(ld=Wd[1])&&void 0!==ld?ld:""}${Kd?" (":", "}where the most \`${dd.subject.event}\` events${Cd} happen${Kd&&Wd[0].endsWith(")")?")":""}`,
-                     Ld = null !== Wd && !Kd && /^\s+[a-z]/i.test(Pd.slice(Qd.end + Od)),
-                     ed = dd.subject.text + od + (Ld ? "," : "");
-                   Nd.push({
-                     from: Pd.slice(Qd.start, Qd.end + Od),
-                     to: ed,
- ... (9 more removed lines; see GitHub link above)
+                         start: wQ,
+                         shift: LQ
+                       } = FQ;
+                       return wQ < YQ.at ? QQ + LQ : QQ
+                     }), YQ.at),
+                     wQ = DQ.slice(0, FQ),
+                     LQ = wQ.slice(0, YQ.start) + wQ.slice(YQ.end + AQ);
+                   if (/\d%\s+of\s+(?:all\s+|the\s+|their\s+)?(?:[\w-]+\s+)?(?:play ?time|time)\b/i.test(LQ) || JG.test(LQ)) continue;
+                   const mQ = "" === QQ.subject.category ? "" : ` in ${QQ.subject.category}`,
+                     uQ = void 0 !== (null === oQ || void 0 === oQ ? void 0 : oQ[3]),
+                     HQ = null === oQ ? "" : `${null!==(bQ=oQ[1])&&void 0!==bQ?bQ:""}${uQ?" (":", "}where the most \`${QQ.subject.event}\` events${mQ} happen${uQ&&oQ[0].endsWith(")")?")":""}`,
+                     xQ = null !== oQ && !uQ && /^\s+[a-z]/i.test(DQ.slice(YQ.end + AQ)),
+                     tQ = QQ.subject.text + HQ + (xQ ? "," : "");
+                   qQ.push({
+                     from: DQ.slice(YQ.start, YQ.end + AQ),
+                     to: tQ,
+ ... (9 more added lines; see GitHub link above)
```

#### 1127. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14406` → after: `L14406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14406) · [Before (L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14406)

```diff
-                   }), gd(Jd, Qd.end + Od + kd, "")
+                   }), vQ(FQ, YQ.end + AQ + wQ, "")
```

#### 1128. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14409-L14410` → after: `L14409-L14410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14409-L14410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14409-L14410) · [Before (L14409-L14410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14409-L14410)

```diff
-               return Pd
-             }(dd, Jd, kd, pd, Nd)));
+               return DQ
+             }(QQ, FQ, wQ, LQ, qQ)));
```

#### 1129. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14412-L14413` → after: `L14412-L14413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14412-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14412-L14413) · [Before (L14412-L14413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14412-L14413)

```diff
-             markdown: 0 === Nd.length ? dd : Wd,
-             repairs: Nd
+             markdown: 0 === qQ.length ? QQ : oQ,
+             repairs: qQ
```

#### 1130. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14416` → after: `L14416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14416) · [Before (L14416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14416)

```diff
-         const Cv = "\\d{1,3}(?:,\\d{3})+|\\d+", Kv = new RegExp(`\\bof (${Cv}) players(?: \\([^)]*\\))? at (.+?), (${Cv}) reached (.+?)(?: or a later one)? \\(`, "g"), ov = new RegExp(`^- (.+?) \u2192 (.+?): (${Cv}) of (${Cv}) players\\b`), lv = /\bsince logging began\b|\ball[- ] … [truncated]
+         const Hp = "\\d{1,3}(?:,\\d{3})+|\\d+", bp = new RegExp(`\\bof (${Hp}) players(?: \\([^)]*\\))? at (.+?), (${Hp}) reached (.+?)(?: or a later one)? \\(`, "g"), Yp = new RegExp(`^- (.+?) \u2192 (.+?): (${Hp}) of (${Hp}) players\\b`), xp = /\bsince logging began\b|\ball[- ] … [truncated]
```

#### 1131. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14418-L14419` → after: `L14418-L14419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14418-L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14418-L14419) · [Before (L14418-L14419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14418-L14419)

```diff
-         function Ov(dd) {
-           return Number(dd.replace(/,/g, ""))
+         function ep(QQ) {
+           return Number(QQ.replace(/,/g, ""))
```

#### 1132. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14422-L14423` → after: `L14422-L14423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14422-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14422-L14423) · [Before (L14422-L14423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14422-L14423)

```diff
-         function ev(dd) {
-           return ig(dd).trim().toLowerCase()
+         function Mp(QQ) {
+           return Rv(QQ).trim().toLowerCase()
```

#### 1133. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14426-L14431` → after: `L14426-L14431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14426-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14426-L14431) · [Before (L14426-L14431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14426-L14431)

```diff
-         function Rv(dd, Jd) {
-           var kd, pd, Nd, Wd, Pd;
-           const Zd = null === (kd = dd[Jd.event]) || void 0 === kd ? void 0 : kd.trim(),
-             gd = -1 === Jd.value ? "" : null !== (pd = null === (Nd = dd[Jd.value]) || void 0 === Nd ? void 0 : Nd.trim()) && void 0 !== pd ? pd : "",
-             Cd = new RegExp(`^(${Cv})\\b`).exec(null !== (Wd = null === (Pd = dd[Jd.players]) || void 0 === Pd ? void 0 : Pd.trim()) && void 0 !== Wd ? Wd : "");
-           return void 0 === Zd || "" === Zd || null === Cd ? null : [Ov(Cd[1]), "" === gd ? Zd : `${Zd}: ${gd}`]
+         function Gp(QQ, FQ) {
+           var wQ, LQ, qQ, oQ, DQ;
+           const kQ = null === (wQ = QQ[FQ.event]) || void 0 === wQ ? void 0 : wQ.trim(),
+             vQ = -1 === FQ.value ? "" : null !== (LQ = null === (qQ = QQ[FQ.value]) || void 0 === qQ ? void 0 : qQ.trim()) && void 0 !== LQ ? LQ : "",
+             mQ = new RegExp(`^(${Hp})\\b`).exec(null !== (oQ = null === (DQ = QQ[FQ.players]) || void 0 === DQ ? void 0 : DQ.trim()) && void 0 !== oQ ? oQ : "");
+           return void 0 === kQ || "" === kQ || null === mQ ? null : [ep(mQ[1]), "" === vQ ? kQ : `${kQ}: ${vQ}`]
```

#### 1134. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14434-L14441` → after: `L14434-L14441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14434-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14434-L14441) · [Before (L14434-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14434-L14441)

```diff
-         function Iv(dd) {
-           const Jd = new Map,
-             kd = new Map,
-             pd = new Set,
-             Nd = (dd, Jd) => {
-               var pd;
-               const Nd = null !== (pd = kd.get(dd)) && void 0 !== pd ? pd : [];
-               Nd.includes(Jd) || kd.set(dd, [...Nd, Jd])
+         function pp(QQ) {
+           const FQ = new Map,
+             wQ = new Map,
+             LQ = new Set,
+             qQ = (QQ, FQ) => {
+               var LQ;
+               const qQ = null !== (LQ = wQ.get(QQ)) && void 0 !== LQ ? LQ : [];
+               qQ.includes(FQ) || wQ.set(QQ, [...qQ, FQ])
```

#### 1135. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14443-L14444` → after: `L14443-L14444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14443-L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14443-L14444) · [Before (L14443-L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14443-L14444)

```diff
-             Wd = dd => {
-               Jd.set(`${ev(dd.from)} > ${ev(dd.to)}`, dd)
+             oQ = QQ => {
+               FQ.set(`${Mp(QQ.from)} > ${Mp(QQ.to)}`, QQ)
```

#### 1136. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14446-L14457` → after: `L14446-L14457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14446-L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14446-L14457) · [Before (L14446-L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14446-L14457)

```diff
-           let Pd = null;
-           for (const Zd of dd.split(/\r?\n/)) {
-             for (const Jd of (0, OP.f)(Zd, Lv, OP.q)) pd.add(Number(Jd[1]));
-             if (Zd.startsWith("|")) {
-               const dd = Zd.split("|"),
-                 Jd = dd.findIndex((dd => lv.test(dd))),
-                 kd = dd.findIndex((dd => /^\s*event\s*$/i.test(dd)));
-               if (-1 !== Jd && -1 !== kd) {
-                 Pd = {
-                   event: kd,
-                   value: dd.findIndex((dd => /^\s*value\s*$/i.test(dd))),
-                   players: Jd
+           let DQ = null;
+           for (const kQ of QQ.split(/\r?\n/)) {
+             for (const FQ of (0, AD.d)(kQ, tp, AD.q)) LQ.add(Number(FQ[1]));
+             if (kQ.startsWith("|")) {
+               const QQ = kQ.split("|"),
+                 FQ = QQ.findIndex((QQ => xp.test(QQ))),
+                 wQ = QQ.findIndex((QQ => /^\s*event\s*$/i.test(QQ)));
+               if (-1 !== FQ && -1 !== wQ) {
+                 DQ = {
+                   event: wQ,
+                   value: QQ.findIndex((QQ => /^\s*value\s*$/i.test(QQ))),
+                   players: FQ
```

#### 1137. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14461-L14462` → after: `L14461-L14462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14461-L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14461-L14462) · [Before (L14461-L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14461-L14462)

```diff
-               const pd = null === Pd ? null : Rv(dd, Pd);
-               null !== pd && Nd(...pd);
+               const LQ = null === DQ ? null : Gp(QQ, DQ);
+               null !== LQ && qQ(...LQ);
```

#### 1138. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14465-L14471` → after: `L14465-L14471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14465-L14471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14465-L14471) · [Before (L14465-L14471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14465-L14471)

```diff
-             Pd = null;
-             const dd = ov.exec(Zd);
-             null !== dd && Wd({
-               from: dd[1],
-               to: dd[2],
-               fromPlayers: Ov(dd[4]),
-               toPlayers: Ov(dd[3])
+             DQ = null;
+             const QQ = Yp.exec(kQ);
+             null !== QQ && oQ({
+               from: QQ[1],
+               to: QQ[2],
+               fromPlayers: ep(QQ[4]),
+               toPlayers: ep(QQ[3])
```

#### 1139. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14473-L14477` → after: `L14473-L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14473-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14473-L14477) · [Before (L14473-L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14473-L14477)

```diff
-             for (const Jd of Zd.matchAll(Kv)) Wd({
-               from: Jd[2],
-               to: Jd[4],
-               fromPlayers: Ov(Jd[1]),
-               toPlayers: Ov(Jd[3])
+             for (const FQ of kQ.matchAll(bp)) oQ({
+               from: FQ[2],
+               to: FQ[4],
+               fromPlayers: ep(FQ[1]),
+               toPlayers: ep(FQ[3])
```

#### 1140. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14479-L14481` → after: `L14479-L14481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14479-L14481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14479-L14481) · [Before (L14479-L14481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14479-L14481)

```diff
-             for (const Jd of (0, OP.u)(Zd, /\s+(?=[A-Z])/g, (0, OP.r)(".;")))
-               if (lv.test(Jd))
-                 for (const dd of Jd.matchAll(Qv)) Nd(Ov(dd[2]), dd[1].trim())
+             for (const FQ of (0, AD.y)(kQ, /\s+(?=[A-Z])/g, (0, AD.u)(".;")))
+               if (xp.test(FQ))
+                 for (const QQ of FQ.matchAll(Ap)) qQ(ep(QQ[2]), QQ[1].trim())
```

#### 1141. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14484-L14486` → after: `L14484-L14486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14484-L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14484-L14486) · [Before (L14484-L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14484-L14486)

```diff
-             steps: [...Jd.values()],
-             allTimeEvents: kd,
-             ratios: pd
+             steps: [...FQ.values()],
+             allTimeEvents: wQ,
+             ratios: LQ
```

#### 1142. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14490-L14496` → after: `L14490-L14496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14490-L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14490-L14496) · [Before (L14490-L14496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14490-L14496)

```diff
-         function Gv(dd) {
-           const Jd = ig(dd).trim(),
-             kd = Jd.lastIndexOf(": ");
-           if (kd <= 0) return [Jd];
-           const pd = Jd.slice(0, kd),
-             Nd = Jd.slice(kd + 2);
-           return /^-?\d+$/.test(Nd) ? [Jd, ...(0, LP.L)(pd, Nd)] : /[a-z]{3}/i.test(Nd) ? [Jd, Nd] : [Jd]
+         function cp(QQ) {
+           const FQ = Rv(QQ).trim(),
+             wQ = FQ.lastIndexOf(": ");
+           if (wQ <= 0) return [FQ];
+           const LQ = FQ.slice(0, wQ),
+             qQ = FQ.slice(wQ + 2);
+           return /^-?\d+$/.test(qQ) ? [FQ, ...(0, xD.H)(LQ, qQ)] : /[a-z]{3}/i.test(qQ) ? [FQ, qQ] : [FQ]
```

#### 1143. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14499-L14500` → after: `L14499-L14500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14499-L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14499-L14500) · [Before (L14499-L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14499-L14500)

```diff
-         function vv(dd, Jd) {
-           return Gv(Jd).some((Jd => (0, OP.f)(dd, new RegExp(`\`?${(0,LP.G)(Jd)}(?![\\w]|\\.\\d)`, "i"), (0, OP.k)("\\w")).length > 0))
+         function Cp(QQ, FQ) {
+           return cp(FQ).some((FQ => (0, AD.d)(QQ, new RegExp(`\`?${(0,xD.C)(FQ)}(?![\\w]|\\.\\d)`, "i"), (0, AD.i)("\\w")).length > 0))
```

#### 1144. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14502` → after: `L14502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14502) · [Before (L14502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14502)

```diff
-         const xv = new RegExp(`(${Cv})(?![\\w%]|[.,:]\\d|\\s*%)`, "g"), qv = (0, OP.k)("\\w.,:%$#-"), Bv = new RegExp(`\\s*\\((?:about |around |over |nearly )?(?:${Cv})(?:\\s+[a-z]+){0,2}(?:,\\s*all[- ]time)?\\)$`, "i"), sv = /^\s+(?:[A-Za-z_:`]+\s+){0,2}?(?:players?|people|kids| … [truncated]
+         const Sp = new RegExp(`(${Hp})(?![\\w%]|[.,:]\\d|\\s*%)`, "g"), ip = (0, AD.i)("\\w.,:%$#-"), Wp = new RegExp(`\\s*\\((?:about |around |over |nearly )?(?:${Hp})(?:\\s+[a-z]+){0,2}(?:,\\s*all[- ]time)?\\)$`, "i"), Rp = /^\s+(?:[A-Za-z_:`]+\s+){0,2}?(?:players?|people|kids| … [truncated]
```

#### 1145. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14504-L14511` → after: `L14504-L14511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14504-L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14504-L14511) · [Before (L14504-L14511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14504-L14511)

```diff
-         function av(dd, Jd, kd, pd) {
-           return 0 === Jd.size || 0 === kd.steps.length ? [] : (0, OP.f)(dd, xv, qv).flatMap((Nd => {
-             const Wd = Nd.index,
-               Pd = Wd + Nd[0].length,
-               Zd = Ov(Nd[1]),
-               gd = pd.every((dd => {
-                 let [Jd, kd] = dd;
-                 return kd <= Wd || Jd >= Pd
+         function sp(QQ, FQ, wQ, LQ) {
+           return 0 === FQ.size || 0 === wQ.steps.length ? [] : (0, AD.d)(QQ, Sp, ip).flatMap((qQ => {
+             const oQ = qQ.index,
+               DQ = oQ + qQ[0].length,
+               kQ = ep(qQ[1]),
+               vQ = LQ.every((QQ => {
+                 let [FQ, wQ] = QQ;
+                 return wQ <= oQ || FQ >= DQ
```

#### 1146. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14513-L14519` → after: `L14513-L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14513-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14513-L14519) · [Before (L14513-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14513-L14519)

```diff
-               Cd = kd.allTimeEvents.get(Zd);
-             if (!gd || !Jd.has(Zd) || void 0 === Cd) return [];
-             const Kd = dd.slice(...(0, LP.M)(dd, Wd)),
-               od = new Set((0, OP.f)(Kd, xv, qv).flatMap((dd => {
-                 var pd;
-                 const Nd = Ov(dd[1]);
-                 return Jd.has(Nd) ? (null !== (pd = kd.allTimeEvents.get(Nd)) && void 0 !== pd ? pd : []).map(ev) : []
+               mQ = wQ.allTimeEvents.get(kQ);
+             if (!vQ || !FQ.has(kQ) || void 0 === mQ) return [];
+             const uQ = QQ.slice(...(0, xD.K)(QQ, oQ)),
+               HQ = new Set((0, AD.d)(uQ, Sp, ip).flatMap((QQ => {
+                 var LQ;
+                 const qQ = ep(QQ[1]);
+                 return FQ.has(qQ) ? (null !== (LQ = wQ.allTimeEvents.get(qQ)) && void 0 !== LQ ? LQ : []).map(Mp) : []
```

#### 1147. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14521-L14524` → after: `L14521-L14524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14521-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14521-L14524) · [Before (L14521-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14521-L14524)

```diff
-               ld = new Set(Cd.map(ev)),
-               Qd = kd.steps.find((dd => {
-                 const Jd = vv(Kd, dd.to) && !od.has(ev(dd.to));
-                 return ld.has(ev(dd.from)) && (Jd || (0, OP.f)(Kd, new RegExp(`${dd.toPlayers.toLocaleString("en-US")}(?!\\d|,\\d)`), (0, OP.k)("\\d,")).length > 0)
+               bQ = new Set(mQ.map(Mp)),
+               YQ = wQ.steps.find((QQ => {
+                 const FQ = Cp(uQ, QQ.to) && !HQ.has(Mp(QQ.to));
+                 return bQ.has(Mp(QQ.from)) && (FQ || (0, AD.d)(uQ, new RegExp(`${QQ.toPlayers.toLocaleString("en-US")}(?!\\d|,\\d)`), (0, AD.i)("\\d,")).length > 0)
```

#### 1148. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14526-L14529` → after: `L14526-L14529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14526-L14529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14526-L14529) · [Before (L14526-L14529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14526-L14529)

```diff
-             if (void 0 !== Qd) return Qd.fromPlayers === Zd ? [] : [{
-               start: Wd,
-               end: Pd,
-               text: Qd.fromPlayers.toLocaleString("en-US")
+             if (void 0 !== YQ) return YQ.fromPlayers === kQ ? [] : [{
+               start: oQ,
+               end: DQ,
+               text: YQ.fromPlayers.toLocaleString("en-US")
```

#### 1149. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14531-L14543` → after: `L14531-L14543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14531-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14531-L14543) · [Before (L14531-L14543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14531-L14543)

```diff
-             const Ld = kd.steps.some((dd => [dd.from, dd.to].some((dd => function(dd, Jd) {
-                 return Gv(Jd).some((Jd => new RegExp(`\\b(?:before|between|after|at|during|until|reaching|reach|reached|past|from|to|on)\\s+(?:the\\s+)?\`?${(0,LP.G)(Jd)}(?![\\w]|\\.\\d)`, "i").test(dd)))
-               }(Kd, dd))))),
-               Od = kd.steps.some((dd => [dd.from, dd.to].some((dd => od.has(ev(dd)) && vv(Kd, dd)))));
-             if (!Ld || Od || /\bthan\b/i.test(Kd)) return [];
-             const ed = function(dd, Jd, kd) {
-               const pd = dd.lastIndexOf("(", Jd),
-                 Nd = dd.indexOf(")", kd);
-               if (-1 !== pd && -1 !== Nd && !dd.slice(pd, Nd).includes(")")) {
-                 const Jd = Bv.exec(dd.slice(0, Nd + 1));
-                 if (null !== Jd && Jd.index <= pd && Jd.index + Jd[0].length === Nd + 1) return {
-                   start: Jd.index,
-                   end: Nd + 1,
+             const xQ = wQ.steps.some((QQ => [QQ.from, QQ.to].some((QQ => function(QQ, FQ) {
+                 return cp(FQ).some((FQ => new RegExp(`\\b(?:before|between|after|at|during|until|reaching|reach|reached|past|from|to|on)\\s+(?:the\\s+)?\`?${(0,xD.C)(FQ)}(?![\\w]|\\.\\d)`, "i").test(QQ)))
+               }(uQ, QQ))))),
+               AQ = wQ.steps.some((QQ => [QQ.from, QQ.to].some((QQ => HQ.has(Mp(QQ)) && Cp(uQ, QQ)))));
+             if (!xQ || AQ || /\bthan\b/i.test(uQ)) return [];
+             const tQ = function(QQ, FQ, wQ) {
+               const LQ = QQ.lastIndexOf("(", FQ),
+                 qQ = QQ.indexOf(")", wQ);
+               if (-1 !== LQ && -1 !== qQ && !QQ.slice(LQ, qQ).includes(")")) {
+                 const FQ = Wp.exec(QQ.slice(0, qQ + 1));
+                 if (null !== FQ && FQ.index <= LQ && FQ.index + FQ[0].length === qQ + 1) return {
+                   start: FQ.index,
+                   end: qQ + 1,
```

#### 1150. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14547-L14556` → after: `L14547-L14556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14547-L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14547-L14556) · [Before (L14547-L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14547-L14556)

```diff
-               if (!sv.test(dd.slice(kd))) return null;
-               const Wd = iv.exec(dd.slice(0, Jd)),
-                 Pd = null === Wd ? Jd : Wd.index,
-                 Zd = /(?:^|[.!?:]\s+|^\s*(?:[-*]|\d+\.)\s+)$/.test(dd.slice(0, Pd)),
-                 gd = dd.slice(kd).replace(/^\s+(?:of\s+)?/i, ""),
-                 Cd = dd.length - gd.length;
-               return Zd ? {
-                 start: Pd,
-                 end: Cd + 1,
-                 text: gd.charAt(0).toUpperCase()
+               if (!Rp.test(QQ.slice(wQ))) return null;
+               const oQ = Op.exec(QQ.slice(0, FQ)),
+                 DQ = null === oQ ? FQ : oQ.index,
+                 kQ = /(?:^|[.!?:]\s+|^\s*(?:[-*]|\d+\.)\s+)$/.test(QQ.slice(0, DQ)),
+                 vQ = QQ.slice(wQ).replace(/^\s+(?:of\s+)?/i, ""),
+                 mQ = QQ.length - vQ.length;
+               return kQ ? {
+                 start: DQ,
+                 end: mQ + 1,
+                 text: vQ.charAt(0).toUpperCase()
```

#### 1151. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14558-L14559` → after: `L14558-L14559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14558-L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14558-L14559) · [Before (L14558-L14559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14558-L14559)

```diff
-                 start: Pd,
-                 end: Cd,
+                 start: DQ,
+                 end: mQ,
```

#### 1152. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14562-L14563` → after: `L14562-L14563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14562-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14562-L14563) · [Before (L14562-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14562-L14563)

```diff
-             }(dd, Wd, Pd);
-             return null === ed ? [] : [ed]
+             }(QQ, oQ, DQ);
+             return null === tQ ? [] : [tQ]
```

#### 1153. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14566` → after: `L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14566) · [Before (L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14566)

```diff
-         const Mv = /^(\s+times\s+)more(\s+[a-z]+)?(\s+than)\b/i, Fv = /\b(?:plays|players|sessions|visits)\b[^.;:!?]*?(?:,\s*which\s+is|\bis|\bthat's|\bthat\s+is)\s+$/i;
+         const rp = /^(\s+times\s+)more(\s+[a-z]+)?(\s+than)\b/i, Ip = /\b(?:plays|players|sessions|visits)\b[^.;:!?]*?(?:,\s*which\s+is|\bis|\bthat's|\bthat\s+is)\s+$/i;
```

#### 1154. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14568-L14575` → after: `L14568-L14575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14568-L14575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14568-L14575) · [Before (L14568-L14575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14568-L14575)

```diff
-         function Yv(dd, Jd, kd) {
-           return 0 === Jd.ratios.size ? [] : (0, OP.f)(dd, /(\d+(?:\.\d+)?)(?=\s+times\s+more\b)/g, OP.q).flatMap((pd => {
-             var Nd;
-             const Wd = pd.index + pd[0].length,
-               Pd = Mv.exec(dd.slice(Wd)),
-               Zd = kd.every((dd => {
-                 let [Jd, kd] = dd;
-                 return kd <= pd.index || Jd >= Wd
+         function Up(QQ, FQ, wQ) {
+           return 0 === FQ.ratios.size ? [] : (0, AD.d)(QQ, /(\d+(?:\.\d+)?)(?=\s+times\s+more\b)/g, AD.q).flatMap((LQ => {
+             var qQ;
+             const oQ = LQ.index + LQ[0].length,
+               DQ = rp.exec(QQ.slice(oQ)),
+               kQ = wQ.every((QQ => {
+                 let [FQ, wQ] = QQ;
+                 return wQ <= LQ.index || FQ >= oQ
```

#### 1155. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14577-L14582` → after: `L14577-L14582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14577-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14577-L14582) · [Before (L14577-L14582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14577-L14582)

```diff
-             if (null === Pd || !Zd || !Jd.ratios.has(Number(pd[1]))) return [];
-             const gd = null !== (Nd = Pd[2]) && void 0 !== Nd ? Nd : "";
-             return ("" === gd || /^\s+(?:players|plays|sessions|people|visits|visitors|users|joins)$/i.test(gd)) && ("" !== gd || Fv.test(dd.slice(Math.max(0, pd.index - 80), pd.index))) ? [{
-               start: Wd,
-               end: Wd + Pd[0].length,
-               text: `${Pd[1]}as many${gd} as`
+             if (null === DQ || !kQ || !FQ.ratios.has(Number(LQ[1]))) return [];
+             const vQ = null !== (qQ = DQ[2]) && void 0 !== qQ ? qQ : "";
+             return ("" === vQ || /^\s+(?:players|plays|sessions|people|visits|visitors|users|joins)$/i.test(vQ)) && ("" !== vQ || Ip.test(QQ.slice(Math.max(0, LQ.index - 80), LQ.index))) ? [{
+               start: oQ,
+               end: oQ + DQ[0].length,
+               text: `${DQ[1]}as many${vQ} as`
```

#### 1156. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14586-L14602` → after: `L14586-L14602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14586-L14602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14586-L14602) · [Before (L14586-L14602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14586-L14602)

```diff
-         const mv = 50, bv = eo, Sv = 3, jv = .1, Xv = .05, fv = 2, nv = 7, Uv = 7, yv = 14, Dv = 7, Tv = 2;
- 
-         function Ev(dd) {
-           var Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld;
-           const Qd = Ge(dd),
-             Ld = dd.stats,
-             Od = null === Ld ? null : rJ(Ld.rankingWindow),
-             ed = null !== (Jd = null === (kd = dd.baseline) || void 0 === kd ? void 0 : kd.rankingWindow) && void 0 !== Jd ? Jd : null,
-             Rd = null !== (pd = null === Ld || void 0 === Ld ? void 0 : Ld.sessionDurationHistogram) && void 0 !== pd ? pd : null,
-             Id = null === Rd ? null : fJ(Rd.sessionCounts, Rd.maxBucketMinute),
-             Gd = Qd.biggestProblem,
-             vd = (null !== (Nd = null === (Wd = Qd.flow) || void 0 === Wd ? void 0 : Wd.steps) && void 0 !== Nd ? Nd : []).flatMap((dd => dd.isPastNearer ? [] : [{
-               from: ig(dd.from),
-               to: ig(dd.to),
-               fromPlayers: dd.fromPlayers,
-               toPlayers: dd.players,
- ... (1 more removed lines; see GitHub link above)
+         const Np = 50, Tp = tH, Kp = 3, zp = .1, lp = .05, jp = 2, ap = 7, Xp = 7, fp = 14, Vp = 7, hp = 2;
+ 
+         function Jp(QQ) {
+           var FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ;
+           const YQ = Gt(QQ),
+             xQ = QQ.stats,
+             AQ = null === xQ ? null : JF(xQ.rankingWindow),
+             tQ = null !== (FQ = null === (wQ = QQ.baseline) || void 0 === wQ ? void 0 : wQ.rankingWindow) && void 0 !== FQ ? FQ : null,
+             eQ = null !== (LQ = null === xQ || void 0 === xQ ? void 0 : xQ.sessionDurationHistogram) && void 0 !== LQ ? LQ : null,
+             MQ = null === eQ ? null : KF(eQ.sessionCounts, eQ.maxBucketMinute),
+             GQ = YQ.biggestProblem,
+             pQ = (null !== (qQ = null === (oQ = YQ.flow) || void 0 === oQ ? void 0 : oQ.steps) && void 0 !== qQ ? qQ : []).flatMap((QQ => QQ.isPastNearer ? [] : [{
+               from: Rv(QQ.from),
+               to: Rv(QQ.to),
+               fromPlayers: QQ.fromPlayers,
+               toPlayers: QQ.players,
+ ... (1 more added lines; see GitHub link above)
```

#### 1157. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14604-L14605` → after: `L14604-L14605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14604-L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14604-L14605) · [Before (L14604-L14605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14604-L14605)

```diff
-               isBranch: !dd.isChain,
-               isOrLater: dd.isOrLater,
+               isBranch: !QQ.isChain,
+               isOrLater: QQ.isOrLater,
```

#### 1158. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14608-L14616` → after: `L14608-L14616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14608-L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14608-L14616) · [Before (L14608-L14616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14608-L14616)

```diff
-             xd = Qd.progressions.flatMap((dd => {
-               const Jd = Jd => ag(dd.eventType, Jd);
-               return dd.steps.flatMap((kd => kd.reached !== kd.to.players ? [] : [{
-                 from: Jd(kd.from.value),
-                 to: Jd(kd.to.value),
-                 fromPlayers: kd.from.players,
-                 toPlayers: kd.to.players,
-                 share: 100 * kd.share,
-                 group: `${dd.gameCategory}/${dd.eventType}`,
+             cQ = YQ.progressions.flatMap((QQ => {
+               const FQ = FQ => Ov(QQ.eventType, FQ);
+               return QQ.steps.flatMap((wQ => wQ.reached !== wQ.to.players ? [] : [{
+                 from: FQ(wQ.from.value),
+                 to: FQ(wQ.to.value),
+                 fromPlayers: wQ.from.players,
+                 toPlayers: wQ.to.players,
+                 share: 100 * wQ.share,
+                 group: `${QQ.gameCategory}/${QQ.eventType}`,
```

#### 1159. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14620-L14621` → after: `L14620-L14621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14620-L14621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14620-L14621) · [Before (L14620-L14621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14620-L14621)

```diff
-                   gameCategory: dd.gameCategory,
-                   eventType: dd.eventType,
+                   gameCategory: QQ.gameCategory,
+                   eventType: QQ.eventType,
```

#### 1160. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14626-L14627` → after: `L14626-L14627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14626-L14627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14626-L14627) · [Before (L14626-L14627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14626-L14627)

```diff
-           let qd = null;
-           if ("dropoff" === (null === Gd || void 0 === Gd ? void 0 : Gd.kind)) qd = {
+           let CQ = null;
+           if ("dropoff" === (null === GQ || void 0 === GQ ? void 0 : GQ.kind)) CQ = {
```

#### 1161. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14629` → after: `L14629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14629) · [Before (L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14629)

```diff
-             minute: Gd.minute.minute
+             minute: GQ.minute.minute
```

#### 1162. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14631` → after: `L14631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14631) · [Before (L14631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14631)

```diff
-           else if ("flowStep" === (null === Gd || void 0 === Gd ? void 0 : Gd.kind)) qd = {
+           else if ("flowStep" === (null === GQ || void 0 === GQ ? void 0 : GQ.kind)) CQ = {
```

#### 1163. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14633-L14634` → after: `L14633-L14634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14633-L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14633-L14634) · [Before (L14633-L14634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14633-L14634)

```diff
-             from: ig(Gd.step.from),
-             to: ig(Gd.step.to)
+             from: Rv(GQ.step.from),
+             to: Rv(GQ.step.to)
```

#### 1164. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14636` → after: `L14636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14636) · [Before (L14636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14636)

```diff
-           else if ("progressStep" === (null === Gd || void 0 === Gd ? void 0 : Gd.kind)) {
+           else if ("progressStep" === (null === GQ || void 0 === GQ ? void 0 : GQ.kind)) {
```

#### 1165. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14638-L14640` → after: `L14638-L14640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14638-L14640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14638-L14640) · [Before (L14638-L14640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14638-L14640)

```diff
-               eventType: dd
-             } = Gd.progression;
-             qd = {
+               eventType: QQ
+             } = GQ.progression;
+             CQ = {
```

#### 1166. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14642-L14643` → after: `L14642-L14643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14642-L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14642-L14643) · [Before (L14642-L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14642-L14643)

```diff
-               from: ag(dd, Gd.step.from.value),
-               to: ag(dd, Gd.step.to.value)
+               from: Ov(QQ, GQ.step.from.value),
+               to: Ov(QQ, GQ.step.to.value)
```

#### 1167. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14645` → after: `L14645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14645) · [Before (L14645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14645)

```diff
-           } else "playsFalling" === (null === Gd || void 0 === Gd ? void 0 : Gd.kind) && (qd = {
+           } else "playsFalling" === (null === GQ || void 0 === GQ ? void 0 : GQ.kind) && (CQ = {
```

#### 1168. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14648-L14651` → after: `L14648-L14651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14648-L14651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14648-L14651) · [Before (L14648-L14651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14648-L14651)

```diff
-           const Bd = null === Ld ? [] : qJ(Ld).slice(-yv),
-             sd = null !== (Pd = null === Od || void 0 === Od ? void 0 : Od.avgSessionMs) && void 0 !== Pd ? Pd : null,
-             ad = null !== (Zd = null === Od || void 0 === Od ? void 0 : Od.sessionsPerPlayer) && void 0 !== Zd ? Zd : null,
-             Md = null !== (gd = null === Od || void 0 === Od ? void 0 : Od.avgDailyPlays) && void 0 !== gd ? gd : null;
+           const SQ = null === xQ ? [] : cF(xQ).slice(-fp),
+             iQ = null !== (DQ = null === AQ || void 0 === AQ ? void 0 : AQ.avgSessionMs) && void 0 !== DQ ? DQ : null,
+             WQ = null !== (kQ = null === AQ || void 0 === AQ ? void 0 : AQ.sessionsPerPlayer) && void 0 !== kQ ? kQ : null,
+             RQ = null !== (vQ = null === AQ || void 0 === AQ ? void 0 : AQ.avgDailyPlays) && void 0 !== vQ ? vQ : null;
```

#### 1169. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14653-L14658` → after: `L14653-L14658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14653-L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14653-L14658) · [Before (L14653-L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14653-L14658)

```diff
-             dailyPlays: Md,
-             weeklyPlayers: null === Ld || Ld.rankingWindow.days !== Uv ? null : Ld.rankingWindow.uniquePlayers,
-             sessions: null === Rd || null === Id ? null : {
-               days: Rd.days,
-               percents: Id.points.map((dd => dd.percent)),
-               typicalPercents: null !== (Cd = null === (Kd = dd.baseline) || void 0 === Kd ? void 0 : Kd.dropoffCurve.survivalPercents.map((dd => dd.p50))) && void 0 !== Cd ? Cd : []
+             dailyPlays: RQ,
+             weeklyPlayers: null === xQ || xQ.rankingWindow.days !== Xp ? null : xQ.rankingWindow.uniquePlayers,
+             sessions: null === eQ || null === MQ ? null : {
+               days: eQ.days,
+               percents: MQ.points.map((QQ => QQ.percent)),
+               typicalPercents: null !== (mQ = null === (uQ = QQ.baseline) || void 0 === uQ ? void 0 : uQ.dropoffCurve.survivalPercents.map((QQ => QQ.p50))) && void 0 !== mQ ? mQ : []
```

#### 1170. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14660-L14662` → after: `L14660-L14662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14660-L14662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14660-L14662) · [Before (L14660-L14662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14660-L14662)

```diff
-             averageSessionMinutes: null === sd ? null : {
-               now: sd / 6e4,
-               typical: null === ed ? null : ed.sessionMs.p50 / 6e4
+             averageSessionMinutes: null === iQ ? null : {
+               now: iQ / 6e4,
+               typical: null === tQ ? null : tQ.sessionMs.p50 / 6e4
```

#### 1171. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14664-L14667` → after: `L14664-L14667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14664-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14664-L14667) · [Before (L14664-L14667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14664-L14667)

```diff
-             sessionsPerPlayer: null === ad || null === Ld ? null : {
-               now: ad,
-               typical: null !== (od = null === ed || void 0 === ed ? void 0 : ed.sessionsPerPlayer.p50) && void 0 !== od ? od : null,
-               days: Ld.sessionsPerPlayerWindowDays
+             sessionsPerPlayer: null === WQ || null === xQ ? null : {
+               now: WQ,
+               typical: null !== (HQ = null === tQ || void 0 === tQ ? void 0 : tQ.sessionsPerPlayer.p50) && void 0 !== HQ ? HQ : null,
+               days: xQ.sessionsPerPlayerWindowDays
```

#### 1172. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14669-L14671` → after: `L14669-L14671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14669-L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14669-L14671) · [Before (L14669-L14671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14669-L14671)

```diff
-             playsPerDay: null === Md ? null : {
-               now: Md,
-               typical: "playsFalling" === (null === Gd || void 0 === Gd ? void 0 : Gd.kind) ? Gd.previous : null !== (ld = null === ed || void 0 === ed ? void 0 : ed.dailyPlays.p50) && void 0 !== ld ? ld : null
+             playsPerDay: null === RQ ? null : {
+               now: RQ,
+               typical: "playsFalling" === (null === GQ || void 0 === GQ ? void 0 : GQ.kind) ? GQ.previous : null !== (bQ = null === tQ || void 0 === tQ ? void 0 : tQ.dailyPlays.p50) && void 0 !== bQ ? bQ : null
```

#### 1173. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14674-L14675` → after: `L14674-L14675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14674-L14675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14674-L14675) · [Before (L14674-L14675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14674-L14675)

```diff
-               plays: Bd.flatMap((dd => null === dd.plays ? [] : [dd.plays])),
-               sessionMinutes: Bd.flatMap((dd => null === dd.avgSessionMs ? [] : [dd.avgSessionMs / 6e4]))
+               plays: SQ.flatMap((QQ => null === QQ.plays ? [] : [QQ.plays])),
+               sessionMinutes: SQ.flatMap((QQ => null === QQ.avgSessionMs ? [] : [QQ.avgSessionMs / 6e4]))
```

#### 1174. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14677-L14683` → after: `L14677-L14683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14677-L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14677-L14683) · [Before (L14677-L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14677-L14683)

```diff
-             flowSteps: vd,
-             progressSteps: xd,
-             problem: qd,
-             deaths: MO(dd),
-             heatmapEvents: dd.heatmaps.map((dd => ({
-               gameCategory: dd.gameCategoryId,
-               eventTypes: [...new Set(dd.events.map((dd => dd.eventType)))]
+             flowSteps: pQ,
+             progressSteps: cQ,
+             problem: CQ,
+             deaths: OA(QQ),
+             heatmapEvents: QQ.heatmaps.map((QQ => ({
+               gameCategory: QQ.gameCategoryId,
+               eventTypes: [...new Set(QQ.events.map((QQ => QQ.eventType)))]
```

#### 1175. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14685-L14686` → after: `L14685-L14686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14685-L14686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14685-L14686) · [Before (L14685-L14686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14685-L14686)

```diff
-             places: UG(dd),
-             loggedValues: RP(dd)
+             places: aG(QQ),
+             loggedValues: eD(QQ)
```

#### 1176. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14690-L14693` → after: `L14690-L14693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14690-L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14690-L14693) · [Before (L14690-L14693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14690-L14693)

```diff
-         function cv(dd) {
-           return [...dd.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((dd => {
-             const Jd = Zp(dd[1]);
-             return null === Jd ? [] : [Jd.key]
+         function Ep(QQ) {
+           return [...QQ.matchAll(/\[\[([^[\]\n]{1,60})\]\]/g)].flatMap((QQ => {
+             const FQ = DL(QQ[1]);
+             return null === FQ ? [] : [FQ.key]
```

#### 1177. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14697-L14699` → after: `L14697-L14699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14697-L14699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14697-L14699) · [Before (L14697-L14699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14697-L14699)

```diff
-         function hv(dd) {
-           const Jd = dd => dd.flatMap((dd => [dd.text, ...Jd(dd.children)]));
-           return dd.blocks.flatMap((dd => "paragraph" === dd.kind ? [dd.text] : "list" === dd.kind ? Jd(dd.items) : []))
+         function np(QQ) {
+           const FQ = QQ => QQ.flatMap((QQ => [QQ.text, ...FQ(QQ.children)]));
+           return QQ.blocks.flatMap((QQ => "paragraph" === QQ.kind ? [QQ.text] : "list" === QQ.kind ? FQ(QQ.items) : []))
```

#### 1178. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14702-L14704` → after: `L14702-L14704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14702-L14704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14702-L14704) · [Before (L14702-L14704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14702-L14704)

```diff
-         function rv(dd, Jd) {
-           const kd = (0, LP.h)(Jd.toLowerCase());
-           return (0, OP.f)(dd.toLowerCase(), new RegExp(`${kd}(?![\\w])`), (0, OP.k)("\\w")).length > 0
+         function gp(QQ, FQ) {
+           const wQ = (0, xD.j)(FQ.toLowerCase());
+           return (0, AD.d)(QQ.toLowerCase(), new RegExp(`${wQ}(?![\\w])`), (0, AD.i)("\\w")).length > 0
```

#### 1179. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14707-L14711` → after: `L14707-L14711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14707-L14711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14707-L14711) · [Before (L14707-L14711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14707-L14711)

```diff
-         function uv(dd, Jd, kd) {
-           var pd;
-           const Nd = dd.filter((dd => rv(Jd, dd.from) && rv(Jd, dd.to))).sort(((dd, Jd) => Jd.fromPlayers - dd.fromPlayers)),
-             Wd = null === kd || "flowStep" !== kd.kind && "progressStep" !== kd.kind ? void 0 : dd.find((dd => dd.from === kd.from && dd.to === kd.to));
-           return void 0 === Wd || 0 !== Nd.length && !Nd.includes(Wd) ? null !== (pd = Nd[0]) && void 0 !== pd ? pd : null : Wd
+         function Pp(QQ, FQ, wQ) {
+           var LQ;
+           const qQ = QQ.filter((QQ => gp(FQ, QQ.from) && gp(FQ, QQ.to))).sort(((QQ, FQ) => FQ.fromPlayers - QQ.fromPlayers)),
+             oQ = null === wQ || "flowStep" !== wQ.kind && "progressStep" !== wQ.kind ? void 0 : QQ.find((QQ => QQ.from === wQ.from && QQ.to === wQ.to));
+           return void 0 === oQ || 0 !== qQ.length && !qQ.includes(oQ) ? null !== (LQ = qQ[0]) && void 0 !== LQ ? LQ : null : oQ
```

#### 1180. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14714-L14715` → after: `L14714-L14715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14714-L14715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14714-L14715) · [Before (L14714-L14715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14714-L14715)

```diff
-         function tv(dd) {
-           return dd < 100 ? Math.max(10, 10 * Math.round(dd / 10)) : Number(dd.toPrecision(2))
+         function Zp(QQ) {
+           return QQ < 100 ? Math.max(10, 10 * Math.round(QQ / 10)) : Number(QQ.toPrecision(2))
```

#### 1181. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14718-L14719` → after: `L14718-L14719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14718-L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14718-L14719) · [Before (L14718-L14719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14718-L14719)

```diff
-         function Vv(dd) {
-           return dd < 1e3 ? Math.round(dd) : Number(dd.toPrecision(2))
+         function yp(QQ) {
+           return QQ < 1e3 ? Math.round(QQ) : Number(QQ.toPrecision(2))
```

#### 1182. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14722-L14724` → after: `L14722-L14724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14722-L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14722-L14724) · [Before (L14722-L14724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14722-L14724)

```diff
-         function zv(dd, Jd) {
-           const kd = Math.max(Sv, null === Jd ? 0 : (Jd - dd) * jv);
-           return Math.min(99, Math.round(dd + kd))
+         function Bp(QQ, FQ) {
+           const wQ = Math.max(Kp, null === FQ ? 0 : (FQ - QQ) * zp);
+           return Math.min(99, Math.round(QQ + wQ))
```

#### 1183. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14727-L14728` → after: `L14727-L14728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14727-L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14727-L14728) · [Before (L14727-L14728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14727-L14728)

```diff
-         function Hv(dd, Jd, kd) {
-           return dd + Math.max(dd * Xv, null === Jd ? 0 : (Jd - dd) * jv, kd)
+         function dp(QQ, FQ, wQ) {
+           return QQ + Math.max(QQ * lp, null === FQ ? 0 : (FQ - QQ) * zp, wQ)
```

#### 1184. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14730` → after: `L14730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14730) · [Before (L14730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14730)

```diff
-         const wv = {
+         const Qc = {
```

#### 1185. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14740` → after: `L14740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14740) · [Before (L14740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14740)

```diff
-         }, Av = `(\\d{1,2}|${Object.keys(wv).join("|")})`, dx = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${Av}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${Av}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
+         }, Fc = `(\\d{1,2}|${Object.keys(Qc).join("|")})`, wc = [new RegExp(`\\b(?:at|after|(?:for|when|on|upon)\\s+reaching)\\s+(?:the\\s+)?${Fc}[\\s-]*min(?:ute)?s?\\b`, "i"), new RegExp(`\\b${Fc}[\\s-]*minutes?\\s+(?:reward|message|bonus|boost|tip|hint|reminder|goal|prize|gift … [truncated]
```

#### 1186. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14742-L14744` → after: `L14742-L14744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14742-L14744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14742-L14744) · [Before (L14742-L14744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14742-L14744)

```diff
-         function Nx(dd) {
-           var Jd;
-           return null !== (Jd = wv[dd.toLowerCase()]) && void 0 !== Jd ? Jd : Number(dd)
+         function Dc(QQ) {
+           var FQ;
+           return null !== (FQ = Qc[QQ.toLowerCase()]) && void 0 !== FQ ? FQ : Number(QQ)
```

#### 1187. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14747-L14748` → after: `L14747-L14748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14747-L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14747-L14748) · [Before (L14747-L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14747-L14748)

```diff
-         function Wx(dd, Jd) {
-           return null === Jd || Jd * dd < mv ? null : {
+         function kc(QQ, FQ) {
+           return null === FQ || FQ * QQ < Np ? null : {
```

#### 1188. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14750-L14751` → after: `L14750-L14751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14750-L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14750-L14751) · [Before (L14750-L14751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14750-L14751)

```diff
-             days: dd,
-             count: tv(Jd * dd),
+             days: QQ,
+             count: Zp(FQ * QQ),
```

#### 1189. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14756-L14759` → after: `L14756-L14759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14756-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14756-L14759) · [Before (L14756-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14756-L14759)

```diff
-         function Px(dd) {
-           if (dd.length < Dv) return null;
-           const Jd = dd.slice(1).reduce(((Jd, kd, pd) => Jd + (kd - dd[pd]) ** 2), 0) / (2 * (dd.length - 1)),
-             kd = dd.slice(-nv);
+         function vc(QQ) {
+           if (QQ.length < Vp) return null;
+           const FQ = QQ.slice(1).reduce(((FQ, wQ, LQ) => FQ + (wQ - QQ[LQ]) ** 2), 0) / (2 * (QQ.length - 1)),
+             wQ = QQ.slice(-ap);
```

#### 1190. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14761-L14763` → after: `L14761-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14761-L14763) · [Before (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14761-L14763)

```diff
-             low: Math.min(...kd),
-             high: Math.max(...kd),
-             averageMargin: Tv * Math.sqrt(Jd / nv)
+             low: Math.min(...wQ),
+             high: Math.max(...wQ),
+             averageMargin: hp * Math.sqrt(FQ / ap)
```

#### 1191. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14767-L14768` → after: `L14767-L14768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14767-L14768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14767-L14768) · [Before (L14767-L14768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14767-L14768)

```diff
-         function Zx(dd, Jd) {
-           return null === dd || dd <= 0 || dd * nv < mv ? null : null !== Jd ? {
+         function mc(QQ, FQ) {
+           return null === QQ || QQ <= 0 || QQ * ap < Np ? null : null !== FQ ? {
```

#### 1192. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14770` → after: `L14770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14770) · [Before (L14770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14770)

```diff
-             days: nv,
+             days: ap,
```

#### 1193. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14772-L14773` → after: `L14772-L14773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14772-L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14772-L14773) · [Before (L14772-L14773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14772-L14773)

```diff
-               low: Jd.low,
-               high: Jd.high
+               low: FQ.low,
+               high: FQ.high
```

#### 1194. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14777` → after: `L14777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14777) · [Before (L14777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14777)

```diff
-             days: Math.min(nv, Math.max(fv, Math.ceil(mv / dd))),
+             days: Math.min(ap, Math.max(jp, Math.ceil(Np / QQ))),
```

#### 1195. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14782-L14792` → after: `L14782-L14792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14782-L14792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14782-L14792) · [Before (L14782-L14792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14782-L14792)

```diff
-         function gx(dd, Jd) {
-           var kd, pd;
-           const Nd = (null !== dd && void 0 !== dd ? dd : "").split("\n").filter((dd => "" !== dd.trim())),
-             Wd = 1 === Nd.length ? wC(Nd[0]) : null;
-           if (null === Wd || null === Jd) return null;
-           let Pd = Wd.path,
-             Zd = null !== (kd = Jd.get(Pd)) && void 0 !== kd ? kd : null;
-           if (null === Zd && !Pd.includes(".")) {
-             const dd = [...Jd].filter((dd => {
-               let [Jd] = dd;
-               return Jd.endsWith(`.${Wd.path}`)
+         function uc(QQ, FQ) {
+           var wQ, LQ;
+           const qQ = (null !== QQ && void 0 !== QQ ? QQ : "").split("\n").filter((QQ => "" !== QQ.trim())),
+             oQ = 1 === qQ.length ? Qu(qQ[0]) : null;
+           if (null === oQ || null === FQ) return null;
+           let DQ = oQ.path,
+             kQ = null !== (wQ = FQ.get(DQ)) && void 0 !== wQ ? wQ : null;
+           if (null === kQ && !DQ.includes(".")) {
+             const QQ = [...FQ].filter((QQ => {
+               let [FQ] = QQ;
+               return FQ.endsWith(`.${oQ.path}`)
```

#### 1196. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14794` → after: `L14794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14794) · [Before (L14794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14794)

```diff
-             Pd = 1 === dd.length ? dd[0][0] : Pd, Zd = 1 === dd.length ? dd[0][1] : null
+             DQ = 1 === QQ.length ? QQ[0][0] : DQ, kQ = 1 === QQ.length ? QQ[0][1] : null
```

#### 1197. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14796-L14799` → after: `L14796-L14799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14796-L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14796-L14799) · [Before (L14796-L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14796-L14799)

```diff
-           const gd = null === Zd ? null : null === (pd = wC(Zd)) || void 0 === pd ? void 0 : pd.value,
-             Cd = dd => dd.replace(/\s+/g, "");
-           if (null === Zd || void 0 === gd || null === gd || Cd(gd) === Cd(Wd.value)) return null;
-           const Kd = Pd.lastIndexOf(".");
+           const vQ = null === kQ ? null : null === (LQ = Qu(kQ)) || void 0 === LQ ? void 0 : LQ.value,
+             mQ = QQ => QQ.replace(/\s+/g, "");
+           if (null === kQ || void 0 === vQ || null === vQ || mQ(vQ) === mQ(oQ.value)) return null;
+           const uQ = DQ.lastIndexOf(".");
```

#### 1198. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14801-L14802` → after: `L14801-L14802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14801-L14802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14801-L14802) · [Before (L14801-L14802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14801-L14802)

```diff
-             line: Zd,
-             inside: -1 === Kd ? null : Pd.slice(0, Kd)
+             line: kQ,
+             inside: -1 === uQ ? null : DQ.slice(0, uQ)
```

#### 1199. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14806-L14811` → after: `L14806-L14811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14806-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14806-L14811) · [Before (L14806-L14811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14806-L14811)

```diff
-         function Cx(dd) {
-           var Jd, kd;
-           const pd = null === dd ? null : null !== (Jd = null !== (kd = (0, OP.f)(dd, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, OP.k)("\\w.,"))[0]) && void 0 !== kd ? kd : (0, OP.f)(dd, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
-           return null === pd ? null : {
-             now: Number(pd[1].replace(/,/g, "")),
-             target: Number(pd[2].replace(/,/g, ""))
+         function Hc(QQ) {
+           var FQ, wQ;
+           const LQ = null === QQ ? null : null !== (FQ = null !== (wQ = (0, AD.d)(QQ, /(\d[\d,]*(?:\.\d+)?)%\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%/, (0, AD.i)("\\w.,"))[0]) && void 0 !== wQ ? wQ : (0, AD.d)(QQ, /(\d[\d,]*(?:\.\d+)?)%?\s*(?:->|\u2192)\s*(\d[\d,]*(?:\.\d+)?)%?/,  … [truncated]
+           return null === LQ ? null : {
+             now: Number(LQ[1].replace(/,/g, "")),
+             target: Number(LQ[2].replace(/,/g, ""))
```

#### 1200. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14815-L14816` → after: `L14815-L14816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14815-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14815-L14816) · [Before (L14815-L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14815-L14816)

```diff
-         function Kx(dd) {
-           return "playersStillPlaying" === dd ? "sessionDropoff" : dd
+         function bc(QQ) {
+           return "playersStillPlaying" === QQ ? "sessionDropoff" : QQ
```

#### 1201. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14819-L14821` → after: `L14819-L14821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14819-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14819-L14821) · [Before (L14819-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14819-L14821)

```diff
-         function ox(dd, Jd, kd, pd) {
-           let Nd = null;
-           if (null !== Jd) Nd = Kx(Jd.statKey) === Kx(kd) ? Cx(Jd.change) : null;
+         function Yc(QQ, FQ, wQ, LQ) {
+           let qQ = null;
+           if (null !== FQ) qQ = bc(FQ.statKey) === bc(wQ) ? Hc(FQ.change) : null;
```

#### 1202. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14823-L14843` → after: `L14823-L14843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14823-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14823-L14843) · [Before (L14823-L14843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14823-L14843)

```diff
-             var Wd;
-             const Jd = hv(dd).find((dd => /\b(check|target|aim)\b/i.test(dd) && null !== Cx(dd)));
-             Nd = null !== (Wd = Cx(dd.target)) && void 0 !== Wd ? Wd : Cx(null !== Jd && void 0 !== Jd ? Jd : null)
-           }
-           return null === Nd || ! function(dd, Jd) {
-             return Math.abs(dd - Jd) <= (Jd >= 10 ? Math.max(.5, .01 * Jd) : .05) + 1e-9
-           }(Nd.now, pd) || Nd.target <= pd ? null : Nd.target
-         }
- 
-         function lx(dd, Jd, kd, pd) {
-           var Nd, Wd, Pd;
-           const Zd = function(dd, Jd) {
-             const kd = null === dd.target ? void 0 : cv(dd.target)[0];
-             if (void 0 !== kd) return kd;
-             if (null !== Jd) return Jd.statKey;
-             const pd = hv(dd).find((dd => /\b(check|target|aim)\b/i.test(dd) && cv(dd).length > 0));
- ... (5 more removed lines; see GitHub link above)
+             var oQ;
+             const FQ = np(QQ).find((QQ => /\b(check|target|aim)\b/i.test(QQ) && null !== Hc(QQ)));
+             qQ = null !== (oQ = Hc(QQ.target)) && void 0 !== oQ ? oQ : Hc(null !== FQ && void 0 !== FQ ? FQ : null)
+           }
+           return null === qQ || ! function(QQ, FQ) {
+             return Math.abs(QQ - FQ) <= (FQ >= 10 ? Math.max(.5, .01 * FQ) : .05) + 1e-9
+           }(qQ.now, LQ) || qQ.target <= LQ ? null : qQ.target
+         }
+ 
+         function xc(QQ, FQ, wQ, LQ) {
+           var qQ, oQ, DQ;
+           const kQ = function(QQ, FQ) {
+             const wQ = null === QQ.target ? void 0 : Ep(QQ.target)[0];
+             if (void 0 !== wQ) return wQ;
+             if (null !== FQ) return FQ.statKey;
+             const LQ = np(QQ).find((QQ => /\b(check|target|aim)\b/i.test(QQ) && Ep(QQ).length > 0));
+ ... (5 more added lines; see GitHub link above)
```

#### 1203. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14846-L14865` → after: `L14846-L14865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14846-L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14846-L14865) · [Before (L14846-L14865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14846-L14865)

```diff
-                 var Nd, Wd, Pd;
-                 const dd = pd.sessions;
-                 if (null === dd) return null;
-                 const kd = function(dd) {
-                     var Jd;
-                     if (null === dd) return null;
-                     if (/\bfirst minute\b/i.test(dd)) return 1;
-                     const kd = dd.replace(/\[\[[^\]]*\]\]/g, ""),
-                       pd = null !== (Jd = (0, OP.f)(kd, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, OP.k)("\\w."))[0]) && void 0 !== Jd ? Jd : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(kd);
-                     return null === pd ? null : Number(pd[1])
-                   }(Jd.target),
-                   Zd = null === kd ? function(dd, Jd) {
-                     var kd;
-                     if (null === dd) return null;
-                     const pd = dd => dd >= 1 && void 0 !== Jd[dd],
-                       Nd = kx.exec(dd);
- ... (4 more removed lines; see GitHub link above)
+                 var qQ, oQ, DQ;
+                 const QQ = LQ.sessions;
+                 if (null === QQ) return null;
+                 const wQ = function(QQ) {
+                     var FQ;
+                     if (null === QQ) return null;
+                     if (/\bfirst minute\b/i.test(QQ)) return 1;
+                     const wQ = QQ.replace(/\[\[[^\]]*\]\]/g, ""),
+                       LQ = null !== (FQ = (0, AD.d)(wQ, /(\d{1,2})(?:\s*|-)(?:mins?|minutes?)\b/i, (0, AD.i)("\\w."))[0]) && void 0 !== FQ ? FQ : /\bminute\s+(\d{1,2})(?![\w.])/i.exec(wQ);
+                     return null === LQ ? null : Number(LQ[1])
+                   }(FQ.target),
+                   kQ = null === wQ ? function(QQ, FQ) {
+                     var wQ;
+                     if (null === QQ) return null;
+                     const LQ = QQ => QQ >= 1 && void 0 !== FQ[QQ],
+                       qQ = qc.exec(QQ);
+ ... (4 more added lines; see GitHub link above)
```

#### 1204. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14869-L14876` → after: `L14869-L14876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14869-L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14869-L14876) · [Before (L14869-L14876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14869-L14876)

```diff
-                     for (const Zd of dx) {
-                       const Jd = Zd.exec(dd);
-                       if (null !== Jd) {
-                         const dd = Nx(Jd[1]),
-                           kd = px.find((Jd => Jd > dd && pd(Jd)));
-                         return void 0 === kd ? null : {
-                           minutes: kd,
-                           after: dd
+                     for (const kQ of wc) {
+                       const FQ = kQ.exec(QQ);
+                       if (null !== FQ) {
+                         const QQ = Dc(FQ[1]),
+                           wQ = oc.find((FQ => FQ > QQ && LQ(FQ)));
+                         return void 0 === wQ ? null : {
+                           minutes: wQ,
+                           after: QQ
```

#### 1205. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14880-L14883` → after: `L14880-L14883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14880-L14883) · [Before (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14880-L14883)

```diff
-                     const Wd = Jx.exec(dd),
-                       Pd = null === Wd ? null : Nx(null !== (kd = Wd[1]) && void 0 !== kd ? kd : Wd[2]);
-                     return null !== Pd && pd(Pd) ? {
-                       minutes: Pd,
+                     const oQ = Lc.exec(QQ),
+                       DQ = null === oQ ? null : Dc(null !== (wQ = oQ[1]) && void 0 !== wQ ? wQ : oQ[2]);
+                     return null !== DQ && LQ(DQ) ? {
+                       minutes: DQ,
```

#### 1206. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14886-L14891` → after: `L14886-L14891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14886-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14886-L14891) · [Before (L14886-L14891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14886-L14891)

```diff
-                   }(Jd.title, dd.percents) : null,
-                   gd = null !== (Nd = null !== kd && void 0 !== kd ? kd : null === Zd || void 0 === Zd ? void 0 : Zd.minutes) && void 0 !== Nd ? Nd : "dropoff" === (null === (Wd = pd.problem) || void 0 === Wd ? void 0 : Wd.kind) ? pd.problem.minute : nJ,
-                   Cd = dd.percents[gd],
-                   Kd = Wx(dd.days, pd.dailyPlays);
-                 return void 0 === Cd || gd < 1 || null === Kd ? null : {
-                   measure: null === Zd || null === Zd.after ? {
+                   }(FQ.title, QQ.percents) : null,
+                   vQ = null !== (qQ = null !== wQ && void 0 !== wQ ? wQ : null === kQ || void 0 === kQ ? void 0 : kQ.minutes) && void 0 !== qQ ? qQ : "dropoff" === (null === (oQ = LQ.problem) || void 0 === oQ ? void 0 : oQ.kind) ? LQ.problem.minute : zF,
+                   mQ = QQ.percents[vQ],
+                   uQ = kc(QQ.days, LQ.dailyPlays);
+                 return void 0 === mQ || vQ < 1 || null === uQ ? null : {
+                   measure: null === kQ || null === kQ.after ? {
```

#### 1207. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14893` → after: `L14893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14893) · [Before (L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14893)

```diff
-                     minutes: gd
+                     minutes: vQ
```

#### 1208. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14896-L14897` → after: `L14896-L14897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14896-L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14896-L14897) · [Before (L14896-L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14896-L14897)

```diff
-                     minutes: gd,
-                     after: Zd.after
+                     minutes: vQ,
+                     after: kQ.after
```

#### 1209. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14899-L14901` → after: `L14899-L14901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14899-L14901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14899-L14901) · [Before (L14899-L14901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14899-L14901)

```diff
-                   now: Math.round(Cd),
-                   helped: zv(Cd, null !== (Pd = dd.typicalPercents[gd]) && void 0 !== Pd ? Pd : null),
-                   wait: Kd
+                   now: Math.round(mQ),
+                   helped: Bp(mQ, null !== (DQ = QQ.typicalPercents[vQ]) && void 0 !== DQ ? DQ : null),
+                   wait: uQ
```

#### 1210. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14905-L14910` → after: `L14905-L14910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14905-L14910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14905-L14910) · [Before (L14905-L14910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14905-L14910)

```diff
-                 const dd = uv(pd.flowSteps, kd, pd.problem);
-                 if (null === dd || dd.fromPlayers < bv) return null;
-                 const Jd = function(dd, Jd, kd) {
-                     const pd = Math.max(Jd.fromPlayers, ...dd.filter((dd => dd.group === Jd.group)).map((dd => dd.fromPlayers)));
-                     return null === kd || kd <= 0 || pd <= kd ? {
-                       players: Jd.fromPlayers,
+                 const QQ = Pp(LQ.flowSteps, wQ, LQ.problem);
+                 if (null === QQ || QQ.fromPlayers < Tp) return null;
+                 const FQ = function(QQ, FQ, wQ) {
+                     const LQ = Math.max(FQ.fromPlayers, ...QQ.filter((QQ => QQ.group === FQ.group)).map((QQ => QQ.fromPlayers)));
+                     return null === wQ || wQ <= 0 || LQ <= wQ ? {
+                       players: FQ.fromPlayers,
```

#### 1211. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14913` → after: `L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14913) · [Before (L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14913)

```diff
-                       players: Jd.fromPlayers * kd / pd,
+                       players: FQ.fromPlayers * wQ / LQ,
```

#### 1212. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14916-L14918` → after: `L14916-L14918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14916-L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14916-L14918) · [Before (L14916-L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14916-L14918)

```diff
-                   }(pd.flowSteps, dd, pd.weeklyPlayers),
-                   Nd = Jd.isScaled && Jd.players < 100 ? Math.round(Jd.players) : tv(Jd.players),
-                   Wd = {
+                   }(LQ.flowSteps, QQ, LQ.weeklyPlayers),
+                   qQ = FQ.isScaled && FQ.players < 100 ? Math.round(FQ.players) : Zp(FQ.players),
+                   oQ = {
```

#### 1213. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14920-L14921` → after: `L14920-L14921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14920-L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14920-L14921) · [Before (L14920-L14921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14920-L14921)

```diff
-                     days: Uv,
-                     count: Nd,
+                     days: Xp,
+                     count: qQ,
```

#### 1214. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14927-L14929` → after: `L14927-L14929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14927-L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14927-L14929) · [Before (L14927-L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14927-L14929)

```diff
-                     from: dd.from,
-                     to: dd.to,
-                     isOrLater: dd.isOrLater
+                     from: QQ.from,
+                     to: QQ.to,
+                     isOrLater: QQ.isOrLater
```

#### 1215. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14931-L14933` → after: `L14931-L14933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14931-L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14931-L14933) · [Before (L14931-L14933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14931-L14933)

```diff
-                   now: Math.round(dd.share),
-                   helped: zv(dd.share, Lx(pd.flowSteps, dd)),
-                   wait: Wd
+                   now: Math.round(QQ.share),
+                   helped: Bp(QQ.share, tc(LQ.flowSteps, QQ)),
+                   wait: oQ
```

#### 1216. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14937-L14941` → after: `L14937-L14941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14937-L14941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14937-L14941) · [Before (L14937-L14941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14937-L14941)

```diff
-                 const dd = uv(pd.progressSteps, kd, pd.problem);
-                 if (null === dd || dd.fromPlayers < bv) return null;
-                 const Jd = zv(dd.share, Lx(pd.progressSteps, dd)),
-                   Nd = null !== pd.weeklyPlayers ? 2 * pd.weeklyPlayers / Uv : null === pd.dailyPlays ? 1 / 0 : 2 * pd.dailyPlays,
-                   Wd = tv(Math.max(mv, Math.min(.1 * dd.fromPlayers, Nd)));
+                 const QQ = Pp(LQ.progressSteps, wQ, LQ.problem);
+                 if (null === QQ || QQ.fromPlayers < Tp) return null;
+                 const FQ = Bp(QQ.share, tc(LQ.progressSteps, QQ)),
+                   qQ = null !== LQ.weeklyPlayers ? 2 * LQ.weeklyPlayers / Xp : null === LQ.dailyPlays ? 1 / 0 : 2 * LQ.dailyPlays,
+                   oQ = Zp(Math.max(Np, Math.min(.1 * QQ.fromPlayers, qQ)));
```

#### 1217. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14945-L14948` → after: `L14945-L14948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14945-L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14945-L14948) · [Before (L14945-L14948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14945-L14948)

```diff
-                     from: dd.from,
-                     to: dd.to,
-                     fromPlayers: dd.fromPlayers,
-                     toPlayers: dd.toPlayers
+                     from: QQ.from,
+                     to: QQ.to,
+                     fromPlayers: QQ.fromPlayers,
+                     toPlayers: QQ.toPlayers
```

#### 1218. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14950-L14952` → after: `L14950-L14952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14950-L14952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14950-L14952) · [Before (L14950-L14952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14950-L14952)

```diff
-                   selection: dd.selection,
-                   now: Math.round(dd.share),
-                   helped: Jd,
+                   selection: QQ.selection,
+                   now: Math.round(QQ.share),
+                   helped: FQ,
```

#### 1219. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14955-L14959` → after: `L14955-L14959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14955-L14959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14955-L14959) · [Before (L14955-L14959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14955-L14959)

```diff
-                     at: dd.from,
-                     players: dd.fromPlayers + Wd,
-                     more: Wd,
-                     helpedAt: dd.to,
-                     helpedPlayers: Qx(dd.toPlayers, Jd, Wd)
+                     at: QQ.from,
+                     players: QQ.fromPlayers + oQ,
+                     more: oQ,
+                     helpedAt: QQ.to,
+                     helpedPlayers: Ac(QQ.toPlayers, FQ, oQ)
```

#### 1220. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14964-L14969` → after: `L14964-L14969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14964-L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14964-L14969) · [Before (L14964-L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14964-L14969)

```diff
-                 var Zd;
-                 const dd = pd.playsPerDay,
-                   Jd = Px(pd.dailySeries.plays),
-                   kd = Zx(pd.dailyPlays, Jd);
-                 if (null === dd || null === kd) return null;
-                 const Nd = Math.max(Hv(dd.now, dd.typical, 1), dd.now + (null !== (Zd = null === Jd || void 0 === Jd ? void 0 : Jd.averageMargin) && void 0 !== Zd ? Zd : 0));
+                 var kQ;
+                 const QQ = LQ.playsPerDay,
+                   FQ = vc(LQ.dailySeries.plays),
+                   wQ = mc(LQ.dailyPlays, FQ);
+                 if (null === QQ || null === wQ) return null;
+                 const qQ = Math.max(dp(QQ.now, QQ.typical, 1), QQ.now + (null !== (kQ = null === FQ || void 0 === FQ ? void 0 : FQ.averageMargin) && void 0 !== kQ ? kQ : 0));
```

#### 1221. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14974-L14977` → after: `L14974-L14977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14974-L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14974-L14977) · [Before (L14974-L14977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14974-L14977)

```diff
-                   now: Math.round(dd.now),
-                   helped: Nd < 1e3 ? Math.round(Nd) : Number(Nd.toPrecision(3)),
-                   wait: "days" === kd.kind && null !== kd.swing ? {
-                     ...kd,
+                   now: Math.round(QQ.now),
+                   helped: qQ < 1e3 ? Math.round(qQ) : Number(qQ.toPrecision(3)),
+                   wait: "days" === wQ.kind && null !== wQ.swing ? {
+                     ...wQ,
```

#### 1222. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14979-L14980` → after: `L14979-L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14979-L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14979-L14980) · [Before (L14979-L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14979-L14980)

```diff
-                       low: Vv(kd.swing.low),
-                       high: Vv(kd.swing.high)
+                       low: yp(wQ.swing.low),
+                       high: yp(wQ.swing.high)
```

#### 1223. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14982` → after: `L14982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14982) · [Before (L14982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14982)

```diff
-                   } : kd
+                   } : wQ
```

#### 1224. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14986-L14991` → after: `L14986-L14991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14986-L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14986-L14991) · [Before (L14986-L14991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14986-L14991)

```diff
-                 var gd;
-                 const dd = pd.averageSessionMinutes,
-                   Jd = Px(pd.dailySeries.sessionMinutes),
-                   kd = Zx(pd.dailyPlays, Jd);
-                 if (null === dd || null === kd) return null;
-                 const Nd = dd => Math.round(10 * dd) / 10;
+                 var vQ;
+                 const QQ = LQ.averageSessionMinutes,
+                   FQ = vc(LQ.dailySeries.sessionMinutes),
+                   wQ = mc(LQ.dailyPlays, FQ);
+                 if (null === QQ || null === wQ) return null;
+                 const qQ = QQ => Math.round(10 * QQ) / 10;
```

#### 1225. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L14996-L14999` → after: `L14996-L14999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L14996-L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L14996-L14999) · [Before (L14996-L14999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L14996-L14999)

```diff
-                   now: Nd(dd.now),
-                   helped: Nd(Math.max(Hv(dd.now, dd.typical, .1), dd.now + (null !== (gd = null === Jd || void 0 === Jd ? void 0 : Jd.averageMargin) && void 0 !== gd ? gd : 0))),
-                   wait: "days" === kd.kind && null !== kd.swing ? {
-                     ...kd,
+                   now: qQ(QQ.now),
+                   helped: qQ(Math.max(dp(QQ.now, QQ.typical, .1), QQ.now + (null !== (vQ = null === FQ || void 0 === FQ ? void 0 : FQ.averageMargin) && void 0 !== vQ ? vQ : 0))),
+                   wait: "days" === wQ.kind && null !== wQ.swing ? {
+                     ...wQ,
```

#### 1226. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15001-L15002` → after: `L15001-L15002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15001-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15001-L15002) · [Before (L15001-L15002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15001-L15002)

```diff
-                       low: Nd(kd.swing.low),
-                       high: Nd(kd.swing.high)
+                       low: qQ(wQ.swing.low),
+                       high: qQ(wQ.swing.high)
```

#### 1227. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15004` → after: `L15004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15004) · [Before (L15004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15004)

```diff
-                   } : kd
+                   } : wQ
```

#### 1228. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15008-L15011` → after: `L15008-L15011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15008-L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15008-L15011) · [Before (L15008-L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15008-L15011)

```diff
-                 const dd = pd.sessionsPerPlayer,
-                   Jd = null === dd ? null : Wx(dd.days, pd.dailyPlays);
-                 if (null === dd || null === Jd) return null;
-                 const kd = dd => Math.round(100 * dd) / 100;
+                 const QQ = LQ.sessionsPerPlayer,
+                   FQ = null === QQ ? null : kc(QQ.days, LQ.dailyPlays);
+                 if (null === QQ || null === FQ) return null;
+                 const wQ = QQ => Math.round(100 * QQ) / 100;
```

#### 1229. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15015` → after: `L15015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15015) · [Before (L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15015)

```diff
-                     days: dd.days
+                     days: QQ.days
```

#### 1230. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15017-L15019` → after: `L15017-L15019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15017-L15019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15017-L15019) · [Before (L15017-L15019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15017-L15019)

```diff
-                   now: kd(dd.now),
-                   helped: kd(dd.now + Math.max(.05, null === dd.typical ? 0 : (dd.typical - dd.now) * jv)),
-                   wait: Jd
+                   now: wQ(QQ.now),
+                   helped: wQ(QQ.now + Math.max(.05, null === QQ.typical ? 0 : (QQ.typical - QQ.now) * zp)),
+                   wait: FQ
```

#### 1231. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15025-L15029` → after: `L15025-L15029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15025-L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15025-L15029) · [Before (L15025-L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15025-L15029)

```diff
-           }(Zd, dd, [null !== (Nd = dd.title) && void 0 !== Nd ? Nd : "", ...hv(dd), null !== (Wd = dd.target) && void 0 !== Wd ? Wd : ""].join("\n"), Jd);
-           if (null === gd) return null;
-           const Cd = ox(dd, kd, Zd, gd.now);
-           let Kd = null === Cd ? gd.helped : Math.min(gd.helped, Cd);
-           if (null !== Cd && Cd - Kd < (Kd - gd.now) / 2 && (Kd = Cd), Kd <= gd.now) return null;
+           }(kQ, QQ, [null !== (qQ = QQ.title) && void 0 !== qQ ? qQ : "", ...np(QQ), null !== (oQ = QQ.target) && void 0 !== oQ ? oQ : ""].join("\n"), FQ);
+           if (null === vQ) return null;
+           const mQ = Yc(QQ, wQ, kQ, vQ.now);
+           let uQ = null === mQ ? vQ.helped : Math.min(vQ.helped, mQ);
+           if (null !== mQ && mQ - uQ < (uQ - vQ.now) / 2 && (uQ = mQ), uQ <= vQ.now) return null;
```

#### 1232. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15031-L15035` → after: `L15031-L15035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15031-L15035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15031-L15035) · [Before (L15031-L15035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15031-L15035)

```diff
-             measure: od
-           } = gd, ld = "players" === gd.wait.kind && "progressStep" === od.kind ? {
-             ...gd.wait,
-             helpedPlayers: Qx(od.toPlayers, Kd, gd.wait.more)
-           } : gd.wait;
+             measure: HQ
+           } = vQ, bQ = "players" === vQ.wait.kind && "progressStep" === HQ.kind ? {
+             ...vQ.wait,
+             helpedPlayers: Ac(HQ.toPlayers, uQ, vQ.wait.more)
+           } : vQ.wait;
```

#### 1233. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15037-L15043` → after: `L15037-L15043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15037-L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15037-L15043) · [Before (L15037-L15043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15037-L15043)

```diff
-             statKey: Zd,
-             ...gd,
-             selection: null !== (Pd = gd.selection) && void 0 !== Pd ? Pd : null,
-             helped: Kd,
-             goal: Cd,
-             wait: ld,
-             undo: gx(dd.code, pd)
+             statKey: kQ,
+             ...vQ,
+             selection: null !== (DQ = vQ.selection) && void 0 !== DQ ? DQ : null,
+             helped: uQ,
+             goal: mQ,
+             wait: bQ,
+             undo: uc(QQ.code, LQ)
```

#### 1234. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15047-L15048` → after: `L15047-L15048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15047-L15048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15047-L15048) · [Before (L15047-L15048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15047-L15048)

```diff
-         function Qx(dd, Jd, kd) {
-           return Math.round(dd + Jd / 100 * kd)
+         function Ac(QQ, FQ, wQ) {
+           return Math.round(QQ + FQ / 100 * wQ)
```

#### 1235. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15051-L15057` → after: `L15051-L15057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15051-L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15051-L15057) · [Before (L15051-L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15051-L15057)

```diff
-         function Lx(dd, Jd) {
-           return function(dd) {
-             if (0 === dd.length) return null;
-             const Jd = [...dd].sort(((dd, Jd) => dd - Jd)),
-               kd = Math.floor(Jd.length / 2);
-             return Jd.length % 2 === 1 ? Jd[kd] : (Jd[kd - 1] + Jd[kd]) / 2
-           }(dd.filter((dd => dd !== Jd && dd.group === Jd.group && !dd.isBranch && dd.fromPlayers >= bv)).map((dd => dd.share)))
+         function tc(QQ, FQ) {
+           return function(QQ) {
+             if (0 === QQ.length) return null;
+             const FQ = [...QQ].sort(((QQ, FQ) => QQ - FQ)),
+               wQ = Math.floor(FQ.length / 2);
+             return FQ.length % 2 === 1 ? FQ[wQ] : (FQ[wQ - 1] + FQ[wQ]) / 2
+           }(QQ.filter((QQ => QQ !== FQ && QQ.group === FQ.group && !QQ.isBranch && QQ.fromPlayers >= Tp)).map((QQ => QQ.share)))
```

#### 1236. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15060-L15061` → after: `L15060-L15061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15060-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15060-L15061) · [Before (L15060-L15061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15060-L15061)

```diff
-         function Ox(dd) {
-           return dd.toLocaleString("en-US", {
+         function ec(QQ) {
+           return QQ.toLocaleString("en-US", {
```

#### 1237. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15066-L15067` → after: `L15066-L15067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15066-L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15066-L15067) · [Before (L15066-L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15066-L15067)

```diff
-         function ex(dd, Jd) {
-           return 1 === dd ? Jd("last 1 minute or more") : `${Jd("last")} ${dd} ${Jd("minutes or more")}`
+         function Mc(QQ, FQ) {
+           return 1 === QQ ? FQ("last 1 minute or more") : `${FQ("last")} ${QQ} ${FQ("minutes or more")}`
```

#### 1238. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15070` → after: `L15070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15070) · [Before (L15070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15070)

```diff
-         function Rx(dd) {
+         function Gc(QQ) {
```

#### 1239. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15072-L15073` → after: `L15072-L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15072-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15072-L15073) · [Before (L15072-L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15072-L15073)

```diff
-             stat: dd.statKey,
-             selection: dd.selection
+             stat: QQ.statKey,
+             selection: QQ.selection
```

#### 1240. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15077` → after: `L15077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15077) · [Before (L15077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15077)

```diff
-         function Ix(dd, Jd) {
+         function pc(QQ, FQ) {
```

#### 1241. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15079-L15084` → after: `L15079-L15084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15079-L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15079-L15084) · [Before (L15079-L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15079-L15084)

```diff
-             measure: kd,
-             now: pd,
-             wait: Nd
-           } = dd, Wd = "players" === Nd.kind || 7 === Nd.days ? Jd("in a week") : `${Jd("in")} ${Nd.days} ${Jd("days")}`;
-           let Pd;
-           switch (kd.kind) {
+             measure: wQ,
+             now: LQ,
+             wait: qQ
+           } = QQ, oQ = "players" === qQ.kind || 7 === qQ.days ? FQ("in a week") : `${FQ("in")} ${qQ.days} ${FQ("days")}`;
+           let DQ;
+           switch (wQ.kind) {
```

#### 1242. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15086` → after: `L15086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15086) · [Before (L15086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15086)

```diff
-               Pd = [`${Jd("if more than")} ${pd} ${Jd("in 100")} ${Jd("sessions")} ${ex(kd.minutes,Jd)}`];
+               DQ = [`${FQ("if more than")} ${LQ} ${FQ("in 100")} ${FQ("sessions")} ${Mc(wQ.minutes,FQ)}`];
```

#### 1243. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15089-L15093` → after: `L15089-L15093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15089-L15093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15089-L15093) · [Before (L15089-L15093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15089-L15093)

```diff
-               Pd = [`${Jd("if more players at")} `, {
-                 code: kd.from
-               }, ` ${Jd("reach")} `, {
-                 code: kd.to
-               }, kd.isOrLater ? ` ${Jd("or a later one")}` : "", ` ${Jd("than now")} (${pd} ${Jd("in 100")})`];
+               DQ = [`${FQ("if more players at")} `, {
+                 code: wQ.from
+               }, ` ${FQ("reach")} `, {
+                 code: wQ.to
+               }, wQ.isOrLater ? ` ${FQ("or a later one")}` : "", ` ${FQ("than now")} (${LQ} ${FQ("in 100")})`];
```

#### 1244. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15096` → after: `L15096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15096) · [Before (L15096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15096)

```diff
-               Pd = [`${Jd("if more players at")} ${kd.from} ${Jd("reach")} ${kd.to} ${Jd("than now")} (${pd} ${Jd("in 100")})`];
+               DQ = [`${FQ("if more players at")} ${wQ.from} ${FQ("reach")} ${wQ.to} ${FQ("than now")} (${LQ} ${FQ("in 100")})`];
```

#### 1245. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15099` → after: `L15099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15099) · [Before (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15099)

```diff
-               Pd = [Jd("if most days have more plays than now")];
+               DQ = [FQ("if most days have more plays than now")];
```

#### 1246. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15102` → after: `L15102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15102) · [Before (L15102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15102)

```diff
-               Pd = [`${Jd("if sessions last longer than now")} (${Ox(pd)} ${Jd("minutes")})`];
+               DQ = [`${FQ("if sessions last longer than now")} (${ec(LQ)} ${FQ("minutes")})`];
```

#### 1247. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15105` → after: `L15105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15105) · [Before (L15105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15105)

```diff
-               Pd = [Jd("if players come back more often than now")]
+               DQ = [FQ("if players come back more often than now")]
```

#### 1248. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15107` → after: `L15107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15107) · [Before (L15107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15107)

```diff
-           return [`${Jd("Check")} `, Rx(dd), ` ${Wd}: `, ...Pd, `, ${Jd("it helped")}.`]
+           return [`${FQ("Check")} `, Gc(QQ), ` ${oQ}: `, ...DQ, `, ${FQ("it helped")}.`]
```

#### 1249. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15109` → after: `L15109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15109) · [Before (L15109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15109)

```diff
-         const Gx = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, vx = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, xx = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
+         const cc = /^[\s*_]*(?:check|see)\s+(?:if\s+|that\s+|whether\s+)?it\s+(?:worked|works|helped)\b/i, Cc = /^[\s*_]*(?:check|see|watch)\b[^\n]*\[\[[^\]\n]+\]\]/i, Sc = /\b(?:then|and)\s+(?:move|add|place|put|change|raise|lower|make|give|build|set|remove|shorten|lengthen|incr … [truncated]
```

#### 1250. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15111-L15112` → after: `L15111-L15112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15111-L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15111-L15112) · [Before (L15111-L15112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15111-L15112)

```diff
-         function qx(dd) {
-           return Gx.test(dd) || vx.test(dd) && !xx.test(dd)
+         function ic(QQ) {
+           return cc.test(QQ) || Cc.test(QQ) && !Sc.test(QQ)
```

#### 1251. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15115-L15126` → after: `L15115-L15126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15115-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15115-L15126) · [Before (L15115-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15115-L15126)

```diff
-         function Bx(dd) {
-           let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           const kd = dd.steps.filter((dd => qx(dd.text))),
-             pd = new Set(Jd ? kd.slice(1) : kd);
-           if (0 === pd.size) return dd;
-           const Nd = dd => !pd.has(dd),
-             Wd = dd.blocks.flatMap((dd => {
-               if ("list" !== dd.kind) return [dd];
-               const Jd = dd.items.filter(Nd);
-               return 0 === Jd.length ? [] : [{
-                 ...dd,
-                 items: Jd
+         function Wc(QQ) {
+           let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           const wQ = QQ.steps.filter((QQ => ic(QQ.text))),
+             LQ = new Set(FQ ? wQ.slice(1) : wQ);
+           if (0 === LQ.size) return QQ;
+           const qQ = QQ => !LQ.has(QQ),
+             oQ = QQ.blocks.flatMap((QQ => {
+               if ("list" !== QQ.kind) return [QQ];
+               const FQ = QQ.items.filter(qQ);
+               return 0 === FQ.length ? [] : [{
+                 ...QQ,
+                 items: FQ
```

#### 1252. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15130-L15132` → after: `L15130-L15132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15130-L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15130-L15132) · [Before (L15130-L15132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15130-L15132)

```diff
-             ...dd,
-             blocks: Wd,
-             steps: dd.steps.filter(Nd)
+             ...QQ,
+             blocks: oQ,
+             steps: QQ.steps.filter(qQ)
```

#### 1253. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15135` → after: `L15135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15135) · [Before (L15135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15135)

```diff
-         const sx = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, ix = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, ax = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, Mx = new Set(["Math", "Date", "JSON", "cons … [truncated]
+         const Rc = /[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*/g, Oc = /(?:[A-Z][A-Z0-9_]+(?:\.[A-Za-z_$][\w$]*)+|[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+|api\.[A-Za-z_$][\w$]*)(?![\w$])/g, sc = /^([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)(?:\(\))?$/, rc = new Set(["Math", "Date", "JSON", "cons … [truncated]
```

#### 1254. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15137-L15140` → after: `L15137-L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15137-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15137-L15140) · [Before (L15137-L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15137-L15140)

```diff
-         function Yx(dd, Jd) {
-           for (const [kd] of(null !== Jd && void 0 !== Jd ? Jd : "").matchAll(sx)) {
-             dd.add(kd);
-             for (const Jd of kd.split(".")) dd.add(Jd)
+         function Uc(QQ, FQ) {
+           for (const [wQ] of(null !== FQ && void 0 !== FQ ? FQ : "").matchAll(Rc)) {
+             QQ.add(wQ);
+             for (const FQ of wQ.split(".")) QQ.add(FQ)
```

#### 1255. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15144-L15150` → after: `L15144-L15150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15144-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15144-L15150) · [Before (L15144-L15150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15144-L15150)

```diff
-         function mx(dd) {
-           if (null === dd.worldCode || void 0 === dd.worldCode) return null;
-           const Jd = [];
-           for (const Nd of [null === (kd = dd.customEvents) || void 0 === kd ? void 0 : kd.byEvent, null === (pd = dd.playerTotals) || void 0 === pd ? void 0 : pd.playerTotals]) {
-             var kd, pd;
-             Mg(null !== Nd && void 0 !== Nd ? Nd : {}, ((dd, kd, pd) => {
-               Jd.push(kd, ...Object.keys(pd))
+         function Nc(QQ) {
+           if (null === QQ.worldCode || void 0 === QQ.worldCode) return null;
+           const FQ = [];
+           for (const qQ of [null === (wQ = QQ.customEvents) || void 0 === wQ ? void 0 : wQ.byEvent, null === (LQ = QQ.playerTotals) || void 0 === LQ ? void 0 : LQ.playerTotals]) {
+             var wQ, LQ;
+             sv(null !== qQ && void 0 !== qQ ? qQ : {}, ((QQ, wQ, LQ) => {
+               FQ.push(wQ, ...Object.keys(LQ))
```

#### 1256. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15153-L15163` → after: `L15153-L15163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15153-L15163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15153-L15163) · [Before (L15153-L15163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15153-L15163)

```diff
-           return function(dd) {
-             let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-             const kd = new Set(FK.keys());
-             for (const Wd of [...TC, ...Fx]) kd.add(`api.${Wd}`);
-             for (const Wd of dd.constants)
-               for (const dd of [Wd.name, Wd.value, Wd.where, Wd.usedIn]) Yx(kd, dd);
-             for (const Wd of dd.callbacks) {
-               Yx(kd, Wd.name);
-               for (const dd of null !== (pd = Wd.params) && void 0 !== pd ? pd : []) {
-                 var pd;
-                 Yx(kd, dd)
+           return function(QQ) {
+             let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+             const wQ = new Set(Iu.keys());
+             for (const oQ of [...hm, ...Ic]) wQ.add(`api.${oQ}`);
+             for (const oQ of QQ.constants)
+               for (const QQ of [oQ.name, oQ.value, oQ.where, oQ.usedIn]) Uc(wQ, QQ);
+             for (const oQ of QQ.callbacks) {
+               Uc(wQ, oQ.name);
+               for (const QQ of null !== (LQ = oQ.params) && void 0 !== LQ ? LQ : []) {
+                 var LQ;
+                 Uc(wQ, QQ)
```

#### 1257. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15166-L15169` → after: `L15166-L15169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15166-L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15166-L15169) · [Before (L15166-L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15166-L15169)

```diff
-             for (const Wd of dd.analyticsHelpers) Yx(kd, Wd);
-             for (const Wd of null !== (Nd = dd.messages) && void 0 !== Nd ? Nd : []) {
-               var Nd;
-               Yx(kd, Wd.where), Yx(kd, Wd.line)
+             for (const oQ of QQ.analyticsHelpers) Uc(wQ, oQ);
+             for (const oQ of null !== (qQ = QQ.messages) && void 0 !== qQ ? qQ : []) {
+               var qQ;
+               Uc(wQ, oQ.where), Uc(wQ, oQ.line)
```

#### 1258. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15171-L15175` → after: `L15171-L15175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15171-L15175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15171-L15175) · [Before (L15171-L15175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15171-L15175)

```diff
-             for (const Wd of dd.events)
-               for (const dd of [Wd.eventType, Wd.valueExpression, Wd.numberExpression, Wd.where, Wd.guard, ...Wd.values]) Yx(kd, dd);
-             for (const Wd of Jd) Yx(kd, Wd);
-             return kd
-           }(dd.worldCode, Jd)
+             for (const oQ of QQ.events)
+               for (const QQ of [oQ.eventType, oQ.valueExpression, oQ.numberExpression, oQ.where, oQ.guard, ...oQ.values]) Uc(wQ, QQ);
+             for (const oQ of FQ) Uc(wQ, oQ);
+             return wQ
+           }(QQ.worldCode, FQ)
```

#### 1259. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15178-L15180` → after: `L15178-L15180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15178-L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15178-L15180) · [Before (L15178-L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15178-L15180)

```diff
-         function bx(dd, Jd, kd, pd) {
-           const Nd = dd.split(".");
-           return "api" === Nd[0] && Nd.length > 1 ? null !== pd ? pd.has(Nd[1]) : "pasteCode" !== kd || Jd.has(`api.${Nd[1]}`) : !(!Mx.has(Nd[0]) && !Jd.has(dd)) || Nd.length > 1 && Nd.every((dd => Jd.has(dd)))
+         function Tc(QQ, FQ, wQ, LQ) {
+           const qQ = QQ.split(".");
+           return "api" === qQ[0] && qQ.length > 1 ? null !== LQ ? LQ.has(qQ[1]) : "pasteCode" !== wQ || FQ.has(`api.${qQ[1]}`) : !(!rc.has(qQ[0]) && !FQ.has(QQ)) || qQ.length > 1 && qQ.every((QQ => FQ.has(QQ)))
```

#### 1260. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15183-L15184` → after: `L15183-L15184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15183-L15184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15183-L15184) · [Before (L15183-L15184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15183-L15184)

```diff
-         function Sx(dd) {
-           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(dd)
+         function Kc(QQ) {
+           return /[_.]|[a-z][A-Z]|^[A-Z][A-Z0-9]+$/.test(QQ)
```

#### 1261. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15187-L15189` → after: `L15187-L15189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15187-L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15187-L15189) · [Before (L15187-L15189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15187-L15189)

```diff
-         function jx(dd, Jd) {
-           return Jd.startsWith("api.") ? {
-             text: dd,
+         function zc(QQ, FQ) {
+           return FQ.startsWith("api.") ? {
+             text: QQ,
```

#### 1262. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15193` → after: `L15193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15193) · [Before (L15193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15193)

```diff
-             text: dd,
+             text: QQ,
```

#### 1263. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15197` → after: `L15197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15197) · [Before (L15197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15197)

```diff
-         const Xx = ro, fx = 10, nx = 3, Ux = 8, yx = /tutorial|onboarding/i, Dx = /event|flow|heatmap|order players/i, Tx = .15, Ex = .1, cx = 3, hx = .25, rx = .1, ux = 2, tx = 3, Vx = .7, zx = 5;
+         const lc = EH, jc = 10, ac = 3, Xc = 8, fc = /tutorial|onboarding/i, Vc = /event|flow|heatmap|order players/i, hc = .15, Jc = .1, Ec = 3, nc = .25, gc = .1, Pc = 2, Zc = 3, yc = .7, Bc = 5;
```

#### 1264. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15199-L15200` → after: `L15199-L15200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15199-L15200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15199-L15200) · [Before (L15199-L15200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15199-L15200)

```diff
-         function Hx(dd, Jd) {
-           return "" === Jd ? dd : /^-?\d+$/.test(Jd) ? `${dd} ${Jd}` : /\d/.test(Jd) ? Jd : `${dd}: ${Jd}`
+         function dc(QQ, FQ) {
+           return "" === FQ ? QQ : /^-?\d+$/.test(FQ) ? `${QQ} ${FQ}` : /\d/.test(FQ) ? FQ : `${QQ}: ${FQ}`
```

#### 1265. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15203-L15206` → after: `L15203-L15206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15203-L15206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15203-L15206) · [Before (L15203-L15206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15203-L15206)

```diff
-         function wx(dd) {
-           const Jd = ig(dd),
-             kd = Jd.lastIndexOf(": ");
-           return -1 === kd ? Jd : Hx(Jd.slice(0, kd), Jd.slice(kd + 2))
+         function QC(QQ) {
+           const FQ = Rv(QQ),
+             wQ = FQ.lastIndexOf(": ");
+           return -1 === wQ ? FQ : dc(FQ.slice(0, wQ), FQ.slice(wQ + 2))
```

#### 1266. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15209-L15218` → after: `L15209-L15218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15209-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15209-L15218) · [Before (L15209-L15218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15209-L15218)

```diff
-         function Ax(dd, Jd, kd) {
-           var pd, Nd;
-           const Wd = BO(Jd.flow, Jd.progressions, null, null, kd),
-             Pd = null !== (pd = null === (Nd = dd.stats) || void 0 === Nd ? void 0 : Nd.rankingWindow.uniquePlayers) && void 0 !== pd ? pd : 0;
-           if ("flowStep" === (null === Wd || void 0 === Wd ? void 0 : Wd.kind)) {
-             const dd = Jd.flow,
-               kd = Math.max(0, ...dd.steps.map((dd => dd.fromPlayers))),
-               pd = dd.steps.filter((dd => {
-                 var Jd, pd;
-                 return dd.isChain && dd.fromPlayers >= (null !== (Jd = null === (pd = dd.start) || void 0 === pd ? void 0 : pd.players) && void 0 !== Jd ? Jd : kd) * Ex
+         function FC(QQ, FQ, wQ) {
+           var LQ, qQ;
+           const oQ = SA(FQ.flow, FQ.progressions, null, null, wQ),
+             DQ = null !== (LQ = null === (qQ = QQ.stats) || void 0 === qQ ? void 0 : qQ.rankingWindow.uniquePlayers) && void 0 !== LQ ? LQ : 0;
+           if ("flowStep" === (null === oQ || void 0 === oQ ? void 0 : oQ.kind)) {
+             const QQ = FQ.flow,
+               wQ = Math.max(0, ...QQ.steps.map((QQ => QQ.fromPlayers))),
+               LQ = QQ.steps.filter((QQ => {
+                 var FQ, LQ;
+                 return QQ.isChain && QQ.fromPlayers >= (null !== (FQ = null === (LQ = QQ.start) || void 0 === LQ ? void 0 : LQ.players) && void 0 !== FQ ? FQ : wQ) * Jc
```

#### 1267. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15220` → after: `L15220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15220) · [Before (L15220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15220)

```diff
-               Nd = (dd, Jd) => {
+               qQ = (QQ, FQ) => {
```

#### 1268. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15222-L15226` → after: `L15222-L15226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15222-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15222-L15226) · [Before (L15222-L15226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15222-L15226)

```diff
-                   from: wx(dd.from),
-                   to: wx(dd.to),
-                   isOrLater: dd.isOrLater,
-                   fromPlayers: dd.fromPlayers,
-                   lost: dd.lost,
+                   from: QC(QQ.from),
+                   to: QC(QQ.to),
+                   isOrLater: QQ.isOrLater,
+                   fromPlayers: QQ.fromPlayers,
+                   lost: QQ.lost,
```

#### 1269. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15230-L15232` → after: `L15230-L15232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15230-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15230-L15232) · [Before (L15230-L15232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15230-L15232)

```diff
-                   share: dd.share,
-                   players: (kd = dd.fromPlayers, Pd > 0 ? Math.min(kd, Pd) : kd),
-                   later: Jd
+                   share: QQ.share,
+                   players: (wQ = QQ.fromPlayers, DQ > 0 ? Math.min(wQ, DQ) : wQ),
+                   later: FQ
```

#### 1270. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15234` → after: `L15234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15234) · [Before (L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15234)

```diff
-                 var kd
+                 var wQ
```

#### 1271. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15236-L15243` → after: `L15236-L15243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15236-L15243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15236-L15243) · [Before (L15236-L15243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15236-L15243)

```diff
-               Zd = [Wd.step, Wd.mostLost, dd.lowestShare].filter((dd => null !== dd && pd.includes(dd)));
-             return [...new Set(Zd)].map((Jd => {
-               const kd = function(dd, Jd) {
-                   const kd = new Set([Jd]),
-                     pd = [Jd];
-                   for (; pd.length > 0;) {
-                     const Jd = pd.shift();
-                     for (const Nd of dd) Nd.from !== Jd || kd.has(Nd.to) || (kd.add(Nd.to), pd.push(Nd.to))
+               kQ = [oQ.step, oQ.mostLost, QQ.lowestShare].filter((QQ => null !== QQ && LQ.includes(QQ)));
+             return [...new Set(kQ)].map((FQ => {
+               const wQ = function(QQ, FQ) {
+                   const wQ = new Set([FQ]),
+                     LQ = [FQ];
+                   for (; LQ.length > 0;) {
+                     const FQ = LQ.shift();
+                     for (const qQ of QQ) qQ.from !== FQ || wQ.has(qQ.to) || (wQ.add(qQ.to), LQ.push(qQ.to))
```

#### 1272. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15245-L15248` → after: `L15245-L15248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15245-L15248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15245-L15248) · [Before (L15245-L15248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15245-L15248)

```diff
-                   return kd
-                 }(dd.steps, Jd.to),
-                 Wd = pd.filter((dd => dd !== Jd && kd.has(dd.from)));
-               return Nd(Jd, Wd.map((dd => Nd(dd, []))))
+                   return wQ
+                 }(QQ.steps, FQ.to),
+                 oQ = LQ.filter((QQ => QQ !== FQ && wQ.has(QQ.from)));
+               return qQ(FQ, oQ.map((QQ => qQ(QQ, []))))
```

#### 1273. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15251` → after: `L15251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15251) · [Before (L15251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15251)

```diff
-           if ("progressStep" === (null === Wd || void 0 === Wd ? void 0 : Wd.kind)) {
+           if ("progressStep" === (null === oQ || void 0 === oQ ? void 0 : oQ.kind)) {
```

#### 1274. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15253-L15259` → after: `L15253-L15259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15253-L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15253-L15259) · [Before (L15253-L15259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15253-L15259)

```diff
-               progression: dd
-             } = Wd, Jd = dd.values[0].players, kd = dd.steps.filter((dd => dd.from.players >= Jd * Ex)), pd = (kd, pd) => ({
-               from: Hx(dd.eventType, kd.from.value),
-               to: Hx(dd.eventType, kd.to.value),
-               isOrLater: kd.reached > kd.to.players,
-               fromPlayers: kd.from.players,
-               lost: kd.lost,
+               progression: QQ
+             } = oQ, FQ = QQ.values[0].players, wQ = QQ.steps.filter((QQ => QQ.from.players >= FQ * Jc)), LQ = (wQ, LQ) => ({
+               from: dc(QQ.eventType, wQ.from.value),
+               to: dc(QQ.eventType, wQ.to.value),
+               isOrLater: wQ.reached > wQ.to.players,
+               fromPlayers: wQ.from.players,
+               lost: wQ.lost,
```

#### 1275. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15263-L15264` → after: `L15263-L15264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15263-L15264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15263-L15264) · [Before (L15263-L15264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15263-L15264)

```diff
-                 gameCategory: dd.gameCategory,
-                 eventType: dd.eventType,
+                 gameCategory: QQ.gameCategory,
+                 eventType: QQ.eventType,
```

#### 1276. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15267-L15271` → after: `L15267-L15271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15267-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15267-L15271) · [Before (L15267-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15267-L15271)

```diff
-               share: kd.share,
-               players: kd.from.players * Math.min(1, Jd > 0 && Pd > 0 ? Pd / Jd : 1),
-               later: pd
-             }), Nd = [Wd.step, Wd.mostLost, dd.lowestShare].filter((dd => null !== dd && kd.includes(dd)));
-             return [...new Set(Nd)].map((dd => pd(dd, kd.slice(kd.indexOf(dd) + 1).map((dd => pd(dd, []))))))
+               share: wQ.share,
+               players: wQ.from.players * Math.min(1, FQ > 0 && DQ > 0 ? DQ / FQ : 1),
+               later: LQ
+             }), qQ = [oQ.step, oQ.mostLost, QQ.lowestShare].filter((QQ => null !== QQ && wQ.includes(QQ)));
+             return [...new Set(qQ)].map((QQ => LQ(QQ, wQ.slice(wQ.indexOf(QQ) + 1).map((QQ => LQ(QQ, []))))))
```

#### 1277. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15276-L15293` → after: `L15276-L15293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15276-L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15276-L15293) · [Before (L15276-L15293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15276-L15293)

```diff
-         function dq(dd, Jd) {
-           const kd = ig(dd);
-           return kd.startsWith(`${Jd}: `) ? kd.slice(Jd.length + 2) : null
-         }
- 
-         function Jq(dd, Jd) {
-           var kd, pd;
-           const Nd = function(dd) {
-             var Jd, kd, pd, Nd;
-             const Wd = null !== (Jd = null === (kd = dd.playerTotals) || void 0 === kd ? void 0 : kd.playerTotals) && void 0 !== Jd ? Jd : {},
-               Pd = null !== (pd = null === (Nd = dd.flow) || void 0 === Nd ? void 0 : Nd.edges) && void 0 !== pd ? pd : [];
-             let Zd = null;
-             return Mg(Wd, ((Jd, kd, pd) => {
-               var Nd;
-               const Wd = null === (Nd = dd.worldCode) || void 0 === Nd ? void 0 : Nd.events.find((dd => dd.isLiteralType && dd.eventType === kd));
-               if (!yx.test(kd) || void 0 === Wd || null !== Wd.valueExpression) return;
- ... (2 more removed lines; see GitHub link above)
+         function wC(QQ, FQ) {
+           const wQ = Rv(QQ);
+           return wQ.startsWith(`${FQ}: `) ? wQ.slice(FQ.length + 2) : null
+         }
+ 
+         function LC(QQ, FQ) {
+           var wQ, LQ;
+           const qQ = function(QQ) {
+             var FQ, wQ, LQ, qQ;
+             const oQ = null !== (FQ = null === (wQ = QQ.playerTotals) || void 0 === wQ ? void 0 : wQ.playerTotals) && void 0 !== FQ ? FQ : {},
+               DQ = null !== (LQ = null === (qQ = QQ.flow) || void 0 === qQ ? void 0 : qQ.edges) && void 0 !== LQ ? LQ : [];
+             let kQ = null;
+             return sv(oQ, ((FQ, wQ, LQ) => {
+               var qQ;
+               const oQ = null === (qQ = QQ.worldCode) || void 0 === qQ ? void 0 : qQ.events.find((QQ => QQ.isLiteralType && QQ.eventType === wQ));
+               if (!fc.test(wQ) || void 0 === oQ || null !== oQ.valueExpression) return;
+ ... (2 more added lines; see GitHub link above)
```

#### 1278. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15295-L15296` → after: `L15295-L15296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15295-L15296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15295-L15296) · [Before (L15295-L15296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15295-L15296)

```diff
-                     value: Jd,
-                     players: kd
+                     value: FQ,
+                     players: wQ
```

#### 1279. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15298-L15299` → after: `L15298-L15299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15298-L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15298-L15299) · [Before (L15298-L15299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15298-L15299)

```diff
-                 })).sort(((dd, Jd) => Jd.players - dd.players)),
-                 Cd = new Map(gd.map(((dd, Jd) => {
+                 })).sort(((QQ, FQ) => FQ.players - QQ.players)),
+                 mQ = new Map(vQ.map(((QQ, FQ) => {
```

#### 1280. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15301-L15303` → after: `L15301-L15303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15301-L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15301-L15303) · [Before (L15301-L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15301-L15303)

```diff
-                     value: kd
-                   } = dd;
-                   return [kd, Jd]
+                     value: wQ
+                   } = QQ;
+                   return [wQ, FQ]
```

#### 1281. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15305` → after: `L15305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15305) · [Before (L15305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15305)

```diff
-                 Kd = gd.every((dd => {
+                 uQ = vQ.every((QQ => {
```

#### 1282. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15307-L15309` → after: `L15307-L15309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15307-L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15307-L15309) · [Before (L15307-L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15307-L15309)

```diff
-                     value: Jd
-                   } = dd;
-                   return Wd.values.includes(Jd)
+                     value: FQ
+                   } = QQ;
+                   return oQ.values.includes(FQ)
```

#### 1283. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15311` → after: `L15311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15311) · [Before (L15311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15311)

```diff
-                 od = gd.slice(1).every(((dd, Jd) => {
+                 HQ = vQ.slice(1).every(((QQ, FQ) => {
```

#### 1284. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15313-L15315` → after: `L15313-L15315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15313-L15315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15313-L15315) · [Before (L15313-L15315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15313-L15315)

```diff
-                     players: kd
-                   } = dd;
-                   return kd < gd[Jd].players
+                     players: wQ
+                   } = QQ;
+                   return wQ < vQ[FQ].players
```

#### 1285. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15317-L15321` → after: `L15317-L15321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15317-L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15317-L15321) · [Before (L15317-L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15317-L15321)

```diff
-                 ld = Pd.some((dd => {
-                   var Jd, pd;
-                   const Nd = Cd.get(null !== (Jd = dq(dd.from, kd)) && void 0 !== Jd ? Jd : ""),
-                     Wd = Cd.get(null !== (pd = dq(dd.to, kd)) && void 0 !== pd ? pd : "");
-                   return void 0 !== Nd && void 0 !== Wd && Nd > Wd
+                 bQ = DQ.some((QQ => {
+                   var FQ, LQ;
+                   const qQ = mQ.get(null !== (FQ = wC(QQ.from, wQ)) && void 0 !== FQ ? FQ : ""),
+                     oQ = mQ.get(null !== (LQ = wC(QQ.to, wQ)) && void 0 !== LQ ? LQ : "");
+                   return void 0 !== qQ && void 0 !== oQ && qQ > oQ
```

#### 1286. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15323-L15327` → after: `L15323-L15327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15323-L15327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15323-L15327) · [Before (L15323-L15327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15323-L15327)

```diff
-                 Qd = null === Zd || gd[0].players > Zd.values[0].players;
-               gd.length >= nx && Kd && od && !ld && Qd && (Zd = {
-                 gameCategory: Jd,
-                 eventType: kd,
-                 values: gd
+                 YQ = null === kQ || vQ[0].players > kQ.values[0].players;
+               vQ.length >= ac && uQ && HQ && !bQ && YQ && (kQ = {
+                 gameCategory: FQ,
+                 eventType: wQ,
+                 values: vQ
```

#### 1287. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15329-L15332` → after: `L15329-L15332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15329-L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15329-L15332) · [Before (L15329-L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15329-L15332)

```diff
-             })), Zd
-           }(dd);
-           if (null === Nd) return [];
-           const Wd = null !== (kd = null === (pd = dd.stats) || void 0 === pd ? void 0 : pd.rankingWindow.uniquePlayers) && void 0 !== kd ? kd : 0,
+             })), kQ
+           }(QQ);
+           if (null === qQ) return [];
+           const oQ = null !== (wQ = null === (LQ = QQ.stats) || void 0 === LQ ? void 0 : LQ.rankingWindow.uniquePlayers) && void 0 !== wQ ? wQ : 0,
```

#### 1288. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15334-L15340` → after: `L15334-L15340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15334-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15334-L15340) · [Before (L15334-L15340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15334-L15340)

```diff
-               values: Pd,
-               eventType: Zd
-             } = Nd,
-             gd = Pd[0].players,
-             Cd = {
-               gameCategory: Nd.gameCategory,
-               eventType: Zd,
+               values: DQ,
+               eventType: kQ
+             } = qQ,
+             vQ = DQ[0].players,
+             mQ = {
+               gameCategory: qQ.gameCategory,
+               eventType: kQ,
```

#### 1289. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15343-L15348` → after: `L15343-L15348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15343-L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15343-L15348) · [Before (L15343-L15348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15343-L15348)

```diff
-             Kd = Pd.slice(1).flatMap(((dd, kd) => {
-               const pd = Pd[kd];
-               return pd.players >= Jd && pd.players >= gd * Ex ? [{
-                 from: pd,
-                 to: dd,
-                 lost: pd.players - dd.players
+             uQ = DQ.slice(1).flatMap(((QQ, wQ) => {
+               const LQ = DQ[wQ];
+               return LQ.players >= FQ && LQ.players >= vQ * Jc ? [{
+                 from: LQ,
+                 to: QQ,
+                 lost: LQ.players - QQ.players
```

#### 1290. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15351-L15353` → after: `L15351-L15353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15351-L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15351-L15353) · [Before (L15351-L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15351-L15353)

```diff
-             od = (dd, Jd) => ({
-               from: dd.from.value,
-               to: dd.to.value,
+             HQ = (QQ, FQ) => ({
+               from: QQ.from.value,
+               to: QQ.to.value,
```

#### 1291. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15355-L15356` → after: `L15355-L15356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15355-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15355-L15356) · [Before (L15355-L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15355-L15356)

```diff
-               fromPlayers: dd.from.players,
-               lost: dd.lost,
+               fromPlayers: QQ.from.players,
+               lost: QQ.lost,
```

#### 1292. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15359-L15363` → after: `L15359-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15359-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15359-L15363) · [Before (L15359-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15359-L15363)

```diff
-               selection: Cd,
-               group: Zd,
-               share: dd.to.players / dd.from.players,
-               players: dd.from.players * Math.min(1, gd > 0 && Wd > 0 ? Wd / gd : 1),
-               later: Jd
+               selection: mQ,
+               group: kQ,
+               share: QQ.to.players / QQ.from.players,
+               players: QQ.from.players * Math.min(1, vQ > 0 && oQ > 0 ? oQ / vQ : 1),
+               later: FQ
```

#### 1293. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15365-L15370` → after: `L15365-L15370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15365-L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15365-L15370) · [Before (L15365-L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15365-L15370)

```diff
-             ld = [...Kd].sort(((dd, Jd) => Jd.lost - dd.lost))[0],
-             Qd = [...Kd].sort(((dd, Jd) => dd.to.players / dd.from.players - Jd.to.players / Jd.from.players))[0];
-           return [...new Set([ld, Qd])].flatMap((dd => {
-             if (void 0 === dd) return [];
-             const Jd = Kd.slice(Kd.indexOf(dd) + 1).map((dd => od(dd, [])));
-             return [od(dd, Jd)]
+             bQ = [...uQ].sort(((QQ, FQ) => FQ.lost - QQ.lost))[0],
+             YQ = [...uQ].sort(((QQ, FQ) => QQ.to.players / QQ.from.players - FQ.to.players / FQ.from.players))[0];
+           return [...new Set([bQ, YQ])].flatMap((QQ => {
+             if (void 0 === QQ) return [];
+             const FQ = uQ.slice(uQ.indexOf(QQ) + 1).map((QQ => HQ(QQ, [])));
+             return [HQ(QQ, FQ)]
```

#### 1294. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15374` → after: `L15374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15374) · [Before (L15374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15374)

```diff
-         function kq(dd, Jd) {
+         function qC(QQ, FQ) {
```

#### 1295. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15376-L15382` → after: `L15376-L15382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15376-L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15376-L15382) · [Before (L15376-L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15376-L15382)

```diff
-             share: kd,
-             players: pd,
-             later: Nd,
-             ...Wd
-           } = dd, Pd = 1 - kd - Tx;
-           return Pd > 0 && pd >= Jd && Wd.fromPlayers >= Jd ? {
-             ...Wd,
+             share: wQ,
+             players: LQ,
+             later: qQ,
+             ...oQ
+           } = QQ, DQ = 1 - wQ - hc;
+           return DQ > 0 && LQ >= FQ && oQ.fromPlayers >= FQ ? {
+             ...oQ,
```

#### 1296. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15384` → after: `L15384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15384) · [Before (L15384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15384)

```diff
-             score: Pd * pd
+             score: DQ * LQ
```

#### 1297. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15388-L15393` → after: `L15388-L15393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15388-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15388-L15393) · [Before (L15388-L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15388-L15393)

```diff
-         function pq(dd, Jd, kd, pd, Nd, Wd) {
-           if (kd.length < nx || kd[0].players < pd) return null;
-           const Pd = kd.slice(1).flatMap(((dd, Jd) => {
-             const Wd = kd[Jd],
-               Pd = Nd > 0 ? Math.min(Wd.players, Nd) : Wd.players;
-             return Wd.players >= pd ? [(1 - Math.min(1, dd.players / Wd.players) - Tx) * Pd] : []
+         function oC(QQ, FQ, wQ, LQ, qQ, oQ) {
+           if (wQ.length < ac || wQ[0].players < LQ) return null;
+           const DQ = wQ.slice(1).flatMap(((QQ, FQ) => {
+             const oQ = wQ[FQ],
+               DQ = qQ > 0 ? Math.min(oQ.players, qQ) : oQ.players;
+             return oQ.players >= LQ ? [(1 - Math.min(1, QQ.players / oQ.players) - hc) * DQ] : []
```

#### 1298. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15397-L15414` → after: `L15397-L15414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15397-L15414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15397-L15414) · [Before (L15397-L15414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15397-L15414)

```diff
-             eventType: dd,
-             order: Jd,
-             values: kd.slice(0, Ux),
-             hasMore: kd.length > Ux,
-             selection: Wd,
-             score: Math.max(0, ...Pd)
-           }
-         }
- 
-         function Nq(dd, Jd, kd) {
-           var pd, Nd, Wd, Pd;
-           const Zd = null !== (pd = null === (Nd = dd.stats) || void 0 === Nd ? void 0 : Nd.rankingWindow.uniquePlayers) && void 0 !== pd ? pd : 0,
-             gd = null !== (Wd = null === (Pd = Jd.dropoff) || void 0 === Pd ? void 0 : Pd.mostAboveMedian) && void 0 !== Wd ? Wd : null;
-           if (null === gd || Zd < kd) return null;
-           const Cd = oO(gd);
-           if (null === Cd.medianEndedPercent) return null;
- ... (2 more removed lines; see GitHub link above)
+             eventType: QQ,
+             order: FQ,
+             values: wQ.slice(0, Xc),
+             hasMore: wQ.length > Xc,
+             selection: oQ,
+             score: Math.max(0, ...DQ)
+           }
+         }
+ 
+         function DC(QQ, FQ, wQ) {
+           var LQ, qQ, oQ, DQ;
+           const kQ = null !== (LQ = null === (qQ = QQ.stats) || void 0 === qQ ? void 0 : qQ.rankingWindow.uniquePlayers) && void 0 !== LQ ? LQ : 0,
+             vQ = null !== (oQ = null === (DQ = FQ.dropoff) || void 0 === DQ ? void 0 : DQ.mostAboveMedian) && void 0 !== oQ ? oQ : null;
+           if (null === vQ || kQ < wQ) return null;
+           const mQ = HA(vQ);
+           if (null === mQ.medianEndedPercent) return null;
+ ... (2 more added lines; see GitHub link above)
```

#### 1299. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15416-L15419` → after: `L15416-L15419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15416-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15416-L15419) · [Before (L15416-L15419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15416-L15419)

```diff
-             minute: Cd.minute,
-             ended: Cd.endedPercent,
-             typicalEnded: Cd.medianEndedPercent,
-             score: Kd / 100 * Zd
+             minute: mQ.minute,
+             ended: mQ.endedPercent,
+             typicalEnded: mQ.medianEndedPercent,
+             score: uQ / 100 * kQ
```

#### 1300. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15423-L15424` → after: `L15423-L15424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15423-L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15423-L15424) · [Before (L15423-L15424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15423-L15424)

```diff
-         function Wq(dd, Jd) {
-           const kd = 1 === dd.events.filter((dd => dd.eventType === Jd.eventType)).length;
+         function kC(QQ, FQ) {
+           const wQ = 1 === QQ.events.filter((QQ => QQ.eventType === FQ.eventType)).length;
```

#### 1301. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15426-L15428` → after: `L15426-L15428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15426-L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15426-L15428) · [Before (L15426-L15428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15426-L15428)

```diff
-             gameCategory: dd.gameCategoryId,
-             eventType: Jd.eventType,
-             eventValue: kd ? null : Jd.eventValue
+             gameCategory: QQ.gameCategoryId,
+             eventType: FQ.eventType,
+             eventValue: wQ ? null : FQ.eventValue
```

#### 1302. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15432-L15436` → after: `L15432-L15436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15432-L15436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15432-L15436) · [Before (L15432-L15436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15432-L15436)

```diff
-         function Pq(dd, Jd) {
-           var kd, pd;
-           const Nd = null !== (kd = null === (pd = dd.stats) || void 0 === pd ? void 0 : pd.rankingWindow.uniquePlayers) && void 0 !== kd ? kd : 0,
-             Wd = [...dd.heatmaps].sort(((dd, Jd) => Jd.players.totalCount - dd.players.totalCount))[0];
-           if (void 0 === Wd || Nd < Jd) return null;
+         function vC(QQ, FQ) {
+           var wQ, LQ;
+           const qQ = null !== (wQ = null === (LQ = QQ.stats) || void 0 === LQ ? void 0 : LQ.rankingWindow.uniquePlayers) && void 0 !== wQ ? wQ : 0,
+             oQ = [...QQ.heatmaps].sort(((QQ, FQ) => FQ.players.totalCount - QQ.players.totalCount))[0];
+           if (void 0 === oQ || qQ < FQ) return null;
```

#### 1303. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15438-L15445` → after: `L15438-L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15438-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15438-L15445) · [Before (L15438-L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15438-L15445)

```diff
-             areas: Pd,
-             total: Zd
-           } = me(Wd.players), gd = Pd[0];
-           if (void 0 === gd || Zd <= 0 || gd.count / Zd < hx) return null;
-           const Cd = dd => ({
-               x: dd.x,
-               z: dd.z,
-               y: dd.busiestY
+             areas: DQ,
+             total: kQ
+           } = It(oQ.players), vQ = DQ[0];
+           if (void 0 === vQ || kQ <= 0 || vQ.count / kQ < nc) return null;
+           const mQ = QQ => ({
+               x: QQ.x,
+               z: QQ.z,
+               y: QQ.busiestY
```

#### 1304. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15447` → after: `L15447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15447) · [Before (L15447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15447)

```diff
-             Kd = gd.count / Zd;
+             uQ = vQ.count / kQ;
```

#### 1305. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15450-L15455` → after: `L15450-L15455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15450-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15450-L15455) · [Before (L15450-L15455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15450-L15455)

```diff
-             category: Wd.gameCategoryId,
-             square: Cd(gd),
-             share: Kd,
-             next: Pd.slice(1, 1 + ux).filter((dd => dd.count / Zd >= rx)).map((dd => ({
-               square: Cd(dd),
-               share: dd.count / Zd
+             category: oQ.gameCategoryId,
+             square: mQ(vQ),
+             share: uQ,
+             next: DQ.slice(1, 1 + Pc).filter((QQ => QQ.count / kQ >= gc)).map((QQ => ({
+               square: mQ(QQ),
+               share: QQ.count / kQ
```

#### 1306. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15458` → after: `L15458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15458) · [Before (L15458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15458)

```diff
-               gameCategory: Wd.gameCategoryId,
+               gameCategory: oQ.gameCategoryId,
```

#### 1307. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15462-L15477` → after: `L15462-L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15462-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15462-L15477) · [Before (L15462-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15462-L15477)

```diff
-             score: (Kd - hx) * Nd
-           }
-         }
-         const Zq = /^(?:checkpoint|wave|island|zone|level)s?$/, gq = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
- 
-         function Cq(dd, Jd) {
-           var kd, pd, Nd, Wd;
-           if (! function(dd) {
-               var Jd, kd, pd, Nd;
-               const Wd = dd.worldCode;
-               return [...(null !== (Jd = null === Wd || void 0 === Wd ? void 0 : Wd.functions) && void 0 !== Jd ? Jd : []).map((dd => dd.name)), ...(null !== (kd = null === Wd || void 0 === Wd ? void 0 : Wd.constants) && void 0 !== kd ? kd : []).map((dd => dd.name)), ...(null !== … [truncated]
-             }(dd)) return null;
-           const Pd = dd.heatmaps.some((dd => dd.players.totalCount > 0 || dd.events.some((dd => dd.heatmap.totalCount > 0)))),
-             Zd = dd.missing.some((dd => Dx.test(dd)));
-           if ((null !== (kd = null === (pd = dd.flow) || void 0 === pd ? void 0 : pd.edges.length) && void 0 !== kd ? kd : 0) > 0 || Jd.progressions.length > 0 || Pd || Zd) return null;
-           const gd = Object.values(null !== (Nd = null === (Wd = dd.playerTotals) || void 0 === Wd ? void 0 : Wd.playerTotals) && void 0 !== Nd ? Nd : {}).flatMap((dd => Object.keys(dd)));
+             score: (uQ - nc) * qQ
+           }
+         }
+         const mC = /^(?:checkpoint|wave|island|zone|level)s?$/, uC = /\b(?:checkpoint|wave|island|zone|level)s?\b/i;
+ 
+         function HC(QQ, FQ) {
+           var wQ, LQ, qQ, oQ;
+           if (! function(QQ) {
+               var FQ, wQ, LQ, qQ;
+               const oQ = QQ.worldCode;
+               return [...(null !== (FQ = null === oQ || void 0 === oQ ? void 0 : oQ.functions) && void 0 !== FQ ? FQ : []).map((QQ => QQ.name)), ...(null !== (wQ = null === oQ || void 0 === oQ ? void 0 : oQ.constants) && void 0 !== wQ ? wQ : []).map((QQ => QQ.name)), ...(null !== … [truncated]
+             }(QQ)) return null;
+           const DQ = QQ.heatmaps.some((QQ => QQ.players.totalCount > 0 || QQ.events.some((QQ => QQ.heatmap.totalCount > 0)))),
+             kQ = QQ.missing.some((QQ => Vc.test(QQ)));
+           if ((null !== (wQ = null === (LQ = QQ.flow) || void 0 === LQ ? void 0 : LQ.edges.length) && void 0 !== wQ ? wQ : 0) > 0 || FQ.progressions.length > 0 || DQ || kQ) return null;
+           const vQ = Object.values(null !== (qQ = null === (oQ = QQ.playerTotals) || void 0 === oQ ? void 0 : oQ.playerTotals) && void 0 !== qQ ? qQ : {}).flatMap((QQ => Object.keys(QQ)));
```

#### 1308. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15480` → after: `L15480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15480) · [Before (L15480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15480)

```diff
-             line: rL(dd.worldCode, gd),
+             line: Ex(QQ.worldCode, vQ),
```

#### 1309. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15485-L15498` → after: `L15485-L15498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15485-L15498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15485-L15498) · [Before (L15485-L15498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15485-L15498)

```diff
-         function Kq(dd) {
-           var Jd, kd, pd, Nd;
-           const Wd = Ge(dd),
-             Pd = null !== (Jd = null === (kd = dd.stats) || void 0 === kd ? void 0 : kd.rankingWindow.uniquePlayers) && void 0 !== Jd ? Jd : 0,
-             Zd = Pd >= fx && Pd < Xx,
-             gd = Zd ? fx : Xx,
-             Cd = function(dd, Jd) {
-               return dd.flatMap((dd => {
-                 const kd = kq(dd, Jd);
-                 if (null === kd) return [];
-                 const pd = dd.later.map((dd => kq(dd, Jd))).filter((dd => null !== dd && dd.lost >= kd.lost * Vx)).sort(((dd, Jd) => Jd.lost - dd.lost))[0];
-                 return [void 0 === pd ? kd : {
-                   ...kd,
-                   next: pd
+         function bC(QQ) {
+           var FQ, wQ, LQ, qQ;
+           const oQ = Gt(QQ),
+             DQ = null !== (FQ = null === (wQ = QQ.stats) || void 0 === wQ ? void 0 : wQ.rankingWindow.uniquePlayers) && void 0 !== FQ ? FQ : 0,
+             kQ = DQ >= jc && DQ < lc,
+             vQ = kQ ? jc : lc,
+             mQ = function(QQ, FQ) {
+               return QQ.flatMap((QQ => {
+                 const wQ = qC(QQ, FQ);
+                 if (null === wQ) return [];
+                 const LQ = QQ.later.map((QQ => qC(QQ, FQ))).filter((QQ => null !== QQ && QQ.lost >= wQ.lost * yc)).sort(((QQ, FQ) => FQ.lost - QQ.lost))[0];
+                 return [void 0 === LQ ? wQ : {
+                   ...wQ,
+                   next: LQ
```

#### 1310. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15500-L15505` → after: `L15500-L15505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15500-L15505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15500-L15505) · [Before (L15500-L15505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15500-L15505)

```diff
-               })).sort(((dd, Jd) => Jd.score - dd.score)).slice(0, tx)
-             }([...Ax(dd, Wd, gd), ...Jq(dd, gd)], gd),
-             Kd = null !== (pd = Zd ? function(dd, Jd, kd) {
-               var pd, Nd;
-               const Wd = KO(null !== (pd = null === (Nd = dd.playerTotals) || void 0 === Nd ? void 0 : Nd.playerTotals) && void 0 !== pd ? pd : {}, Jd)[0];
-               if (void 0 === Wd) return null;
+               })).sort(((QQ, FQ) => FQ.score - QQ.score)).slice(0, Zc)
+             }([...FC(QQ, oQ, vQ), ...LC(QQ, vQ)], vQ),
+             uQ = null !== (LQ = kQ ? function(QQ, FQ, wQ) {
+               var LQ, qQ;
+               const oQ = uA(null !== (LQ = null === (qQ = QQ.playerTotals) || void 0 === qQ ? void 0 : qQ.playerTotals) && void 0 !== LQ ? LQ : {}, FQ)[0];
+               if (void 0 === oQ) return null;
```

#### 1311. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15507-L15508` → after: `L15507-L15508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15507-L15508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15507-L15508) · [Before (L15507-L15508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15507-L15508)

```diff
-                 eventType: Pd
-               } = Wd, Zd = Wd.values.map((dd => {
+                 eventType: DQ
+               } = oQ, kQ = oQ.values.map((QQ => {
```

#### 1312. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15510-L15512` → after: `L15510-L15512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15510-L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15510-L15512) · [Before (L15510-L15512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15510-L15512)

```diff
-                   value: Jd,
-                   players: kd
-                 } = dd;
+                   value: FQ,
+                   players: wQ
+                 } = QQ;
```

#### 1313. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15514-L15515` → after: `L15514-L15515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15514-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15514-L15515) · [Before (L15514-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15514-L15515)

```diff
-                   name: Hx(Pd, Jd),
-                   players: kd
+                   name: dc(DQ, FQ),
+                   players: wQ
```

#### 1314. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15517-L15519` → after: `L15517-L15519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15517-L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15517-L15519) · [Before (L15517-L15519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15517-L15519)

```diff
-               })), gd = {
-                 gameCategory: Wd.gameCategory,
-                 eventType: Pd,
+               })), vQ = {
+                 gameCategory: oQ.gameCategory,
+                 eventType: DQ,
```

#### 1315. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15521-L15523` → after: `L15521-L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15521-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15521-L15523) · [Before (L15521-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15521-L15523)

```diff
-               }, Cd = pq(Pd, "number", Zd, Jd, kd, gd), Kd = Wd.steps.filter((dd => dd.from.players >= zx && 1 - dd.share > Tx)).sort(((dd, Jd) => dd.share - Jd.share || Jd.lost - dd.lost))[0];
-               return "ladder" !== (null === Cd || void 0 === Cd ? void 0 : Cd.kind) || void 0 === Kd ? Cd : {
-                 ...Cd,
+               }, mQ = oC(DQ, "number", kQ, FQ, wQ, vQ), uQ = oQ.steps.filter((QQ => QQ.from.players >= Bc && 1 - QQ.share > hc)).sort(((QQ, FQ) => QQ.share - FQ.share || FQ.lost - QQ.lost))[0];
+               return "ladder" !== (null === mQ || void 0 === mQ ? void 0 : mQ.kind) || void 0 === uQ ? mQ : {
+                 ...mQ,
```

#### 1316. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15525-L15529` → after: `L15525-L15529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15525-L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15525-L15529) · [Before (L15525-L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15525-L15529)

```diff
-                   from: Hx(Pd, Kd.from.value),
-                   to: Hx(Pd, Kd.to.value),
-                   fromPlayers: Kd.from.players,
-                   reached: Kd.reached,
-                   isOrLater: Kd.reached > Kd.to.players
+                   from: dc(DQ, uQ.from.value),
+                   to: dc(DQ, uQ.to.value),
+                   fromPlayers: uQ.from.players,
+                   reached: uQ.reached,
+                   isOrLater: uQ.reached > uQ.to.players
```

#### 1317. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15532-L15538` → after: `L15532-L15538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15532-L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15532-L15538) · [Before (L15532-L15538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15532-L15538)

```diff
-             }(dd, gd, Pd) : null) && void 0 !== pd ? pd : 0 === Cd.length ? function(dd, Jd, kd) {
-               var pd, Nd;
-               let Wd = null;
-               return Mg(null !== (pd = null === (Nd = dd.playerTotals) || void 0 === Nd ? void 0 : Nd.playerTotals) && void 0 !== pd ? pd : {}, ((dd, pd, Nd) => {
-                 if (!yx.test(pd)) return;
-                 const Pd = pq(pd, "players", Object.entries(Nd).map((dd => {
-                   let [Jd, kd] = dd;
+             }(QQ, vQ, DQ) : null) && void 0 !== LQ ? LQ : 0 === mQ.length ? function(QQ, FQ, wQ) {
+               var LQ, qQ;
+               let oQ = null;
+               return sv(null !== (LQ = null === (qQ = QQ.playerTotals) || void 0 === qQ ? void 0 : qQ.playerTotals) && void 0 !== LQ ? LQ : {}, ((QQ, LQ, qQ) => {
+                 if (!fc.test(LQ)) return;
+                 const DQ = oC(LQ, "players", Object.entries(qQ).map((QQ => {
+                   let [FQ, wQ] = QQ;
```

#### 1318. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15540-L15541` → after: `L15540-L15541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15540-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15540-L15541) · [Before (L15540-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15540-L15541)

```diff
-                     name: Jd,
-                     players: kd
+                     name: FQ,
+                     players: wQ
```

#### 1319. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15543-L15545` → after: `L15543-L15545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15543-L15545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15543-L15545) · [Before (L15543-L15545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15543-L15545)

```diff
-                 })).sort(((dd, Jd) => Jd.players - dd.players)), Jd, kd, {
-                   gameCategory: dd,
-                   eventType: pd,
+                 })).sort(((QQ, FQ) => FQ.players - QQ.players)), FQ, wQ, {
+                   gameCategory: QQ,
+                   eventType: LQ,
```

#### 1320. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15548-L15560` → after: `L15548-L15560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15548-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15548-L15560) · [Before (L15548-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15548-L15560)

```diff
-                 "ladder" === (null === Pd || void 0 === Pd ? void 0 : Pd.kind) && (null === Wd || Pd.values[0].players > Wd.values[0].players) && (Wd = Pd)
-               })), Wd
-             }(dd, gd, Pd) : null,
-             od = null === Kd ? Cd : [Kd],
-             ld = Nq(dd, Wd, gd),
-             Qd = null !== (Nd = function(dd, Jd) {
-               var kd, pd;
-               const Nd = null !== (kd = null === (pd = dd.stats) || void 0 === pd ? void 0 : pd.rankingWindow.uniquePlayers) && void 0 !== kd ? kd : 0;
-               if (Nd < Jd) return null;
-               let Wd = null;
-               for (const Pd of dd.heatmaps)
-                 for (const kd of Pd.events) {
-                   if (!MQ(kd.eventType) || null !== DK(kd.eventType, kd.eventValue, dd.worldCode)) continue;
+                 "ladder" === (null === DQ || void 0 === DQ ? void 0 : DQ.kind) && (null === oQ || DQ.values[0].players > oQ.values[0].players) && (oQ = DQ)
+               })), oQ
+             }(QQ, vQ, DQ) : null,
+             HQ = null === uQ ? mQ : [uQ],
+             bQ = DC(QQ, oQ, vQ),
+             YQ = null !== (qQ = function(QQ, FQ) {
+               var wQ, LQ;
+               const qQ = null !== (wQ = null === (LQ = QQ.stats) || void 0 === LQ ? void 0 : LQ.rankingWindow.uniquePlayers) && void 0 !== wQ ? wQ : 0;
+               if (qQ < FQ) return null;
+               let oQ = null;
+               for (const DQ of QQ.heatmaps)
+                 for (const wQ of DQ.events) {
+                   if (!OY(wQ.eventType) || null !== Vu(wQ.eventType, wQ.eventValue, QQ.worldCode)) continue;
```

#### 1321. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15562-L15565` → after: `L15562-L15565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15562-L15565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15562-L15565) · [Before (L15562-L15565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15562-L15565)

```diff
-                     areas: pd,
-                     total: Nd
-                   } = me(kd.heatmap), Zd = pd[0];
-                   void 0 === Zd || Nd < Jd || Zd.count / Nd < hx || null !== Wd && Zd.count <= Wd.count || (Wd = {
+                     areas: LQ,
+                     total: qQ
+                   } = It(wQ.heatmap), kQ = LQ[0];
+                   void 0 === kQ || qQ < FQ || kQ.count / qQ < nc || null !== oQ && kQ.count <= oQ.count || (oQ = {
```

#### 1322. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15567` → after: `L15567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15567) · [Before (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15567)

```diff
-                     category: Pd.gameCategoryId,
+                     category: DQ.gameCategoryId,
```

#### 1323. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15569-L15571` → after: `L15569-L15571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15569-L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15569-L15571) · [Before (L15569-L15571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15569-L15571)

```diff
-                       x: Zd.x,
-                       z: Zd.z,
-                       y: Zd.busiestY
+                       x: kQ.x,
+                       z: kQ.z,
+                       y: kQ.busiestY
```

#### 1324. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15573-L15576` → after: `L15573-L15576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15573-L15576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15573-L15576) · [Before (L15573-L15576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15573-L15576)

```diff
-                     count: Zd.count,
-                     total: Nd,
-                     death: "" === kd.eventValue ? null : `${kd.eventType}: ${kd.eventValue}`,
-                     selection: Wq(Pd, kd)
+                     count: kQ.count,
+                     total: qQ,
+                     death: "" === wQ.eventValue ? null : `${wQ.eventType}: ${wQ.eventValue}`,
+                     selection: kC(DQ, wQ)
```

#### 1325. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15579-L15581` → after: `L15579-L15581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15579-L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15579-L15581) · [Before (L15579-L15581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15579-L15581)

```diff
-               return null === Wd ? null : {
-                 ...Wd,
-                 score: (Wd.count / Wd.total - hx) * Nd
+               return null === oQ ? null : {
+                 ...oQ,
+                 score: (oQ.count / oQ.total - nc) * qQ
```

#### 1326. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15583-L15594` → after: `L15583-L15594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15583-L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15583-L15594) · [Before (L15583-L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15583-L15594)

```diff
-             }(dd, gd)) && void 0 !== Nd ? Nd : Pq(dd, gd),
-             Ld = null !== ld && (0 === od.length || ld.score > od[0].score) ? [ld, ...od] : od,
-             Od = (null === Qd ? Ld : [...Ld, Qd]).map((dd => Zd ? {
-               ...dd,
-               fewPlayers: Pd
-             } : dd)),
-             ed = Cq(dd, Wd);
-           return null === ed ? Od : [...Od, ed]
-         }
- 
-         function oq(dd) {
-           return ` ${dd.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const lq=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function Qq(dd,Jd){const kd=oq(Jd);switch(dd.kind){case"step":{const Jd=function(dd){var Jd,kd;return null!==(Jd … [truncated]
+             }(QQ, vQ)) && void 0 !== qQ ? qQ : vC(QQ, vQ),
+             xQ = null !== bQ && (0 === HQ.length || bQ.score > HQ[0].score) ? [bQ, ...HQ] : HQ,
+             AQ = (null === YQ ? xQ : [...xQ, YQ]).map((QQ => kQ ? {
+               ...QQ,
+               fewPlayers: DQ
+             } : QQ)),
+             tQ = HC(QQ, oQ);
+           return null === tQ ? AQ : [...AQ, tQ]
+         }
+ 
+         function YC(QQ) {
+           return ` ${QQ.toLowerCase().replace(/[`*_:\u2192>()[\],.!?"']/g," ").replace(/\s+/g," ")} `}const xC=/\[\[\s*(session dropoff|players still playing)\s*\]\]/i;function AC(QQ,FQ){const wQ=YC(FQ);switch(QQ.kind){case"step":{const FQ=function(QQ){var FQ,wQ;return null!==(FQ … [truncated]
```

#### 1327. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15596` → after: `L15596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15596) · [Before (L15596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15596)

```diff
-             Jd[1]
+             FQ[1]
```

#### 1328. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15599` → after: `L15599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15599) · [Before (L15599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15599)

```diff
-             Jd[2]
+             FQ[2]
```

#### 1329. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15601` → after: `L15601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15601) · [Before (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15601)

```diff
-           `]}(dd).some((dd=>function(dd,Jd){const kd=oq(Jd).trim();return""!==kd&&dd.includes(`
+           `]}(QQ).some((QQ=>function(QQ,FQ){const wQ=YC(FQ).trim();return""!==wQ&&QQ.includes(`
```

#### 1330. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15603` → after: `L15603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15603) · [Before (L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15603)

```diff
-             kd
+             wQ
```

#### 1331. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15605` → after: `L15605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15605) · [Before (L15605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15605)

```diff
-           `)}(kd,dd)));return pd(dd.to)||pd(dd.from)&&null!==Jd&&kd.includes(`
+           `)}(wQ,QQ)));return LQ(QQ.to)||LQ(QQ.from)&&null!==FQ&&wQ.includes(`
```

#### 1332. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15607` → after: `L15607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15607) · [Before (L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15607)

```diff
-             Jd
+             FQ
```

#### 1333. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15609` → after: `L15609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15609) · [Before (L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15609)

```diff
-           `)}case"deaths":case"place":{const{square:kd}=dd;return function(dd){return[...dd.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((dd=>({x:Number(dd[1]),z:Number(dd[2])})))}(Jd).some((dd=>function(dd,Jd){return dd.x>=Jd.x&&dd.x<Jd.x+ae&&dd.z>=J … [truncated]
+           `)}case"deaths":case"place":{const{square:wQ}=QQ;return function(QQ){return[...QQ.matchAll(/\bx\s*[=:]?\s*(-?\d+)[^\n]{0,24}?\bz\s*[=:]?\s*(-?\d+)/gi)].map((QQ=>({x:Number(QQ[1]),z:Number(QQ[2])})))}(FQ).some((QQ=>function(QQ,FQ){return QQ.x>=FQ.x&&QQ.x<FQ.x+Rt&&QQ.z>=F … [truncated]
```

#### 1334. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15611` → after: `L15611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15611) · [Before (L15611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15611)

```diff
-             pd
+             LQ
```

#### 1335. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15615` → after: `L15615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15615) · [Before (L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15615)

```diff
-             pd
+             LQ
```

#### 1336. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15619` → after: `L15619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15619) · [Before (L15619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15619)

```diff
-             pd
+             LQ
```

#### 1337. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15623` → after: `L15623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15623) · [Before (L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15623)

```diff
-             pd
+             LQ
```

#### 1338. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15627` → after: `L15627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15627) · [Before (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15627)

```diff
-             dd
+             QQ
```

#### 1339. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15629` → after: `L15629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15629) · [Before (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15629)

```diff
-           `)))}}}function Lq(dd,Jd,kd){if("young"===kd){var pd;const kd=[dd.reduce(((dd,Jd)=>"unseen"!==Jd.kind&&(null===dd||Jd.score>dd.score)?Jd:dd),null),null!==(pd=dd.find((dd=>"unseen"===dd.kind)))&&void 0!==pd?pd:null].find((dd=>null!==dd&&!Qq(dd,Jd)));return void 0===kd||n … [truncated]
+           `)))}}}function tC(QQ,FQ,wQ){if("young"===wQ){var LQ;const wQ=[QQ.reduce(((QQ,FQ)=>"unseen"!==FQ.kind&&(null===QQ||FQ.score>QQ.score)?FQ:QQ),null),null!==(LQ=QQ.find((QQ=>"unseen"===QQ.kind)))&&void 0!==LQ?LQ:null].find((QQ=>null!==QQ&&!AC(QQ,FQ)));return void 0===wQ||n … [truncated]
```

#### 1340. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15631` → after: `L15631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15631) · [Before (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15631)

```diff
-             dd
+             QQ
```

#### 1341. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15634` → after: `L15634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15634) · [Before (L15634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15634)

```diff
-             pd[2]
+             LQ[2]
```

#### 1342. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15638` → after: `L15638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15638) · [Before (L15638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15638)

```diff
-             dd
+             QQ
```

#### 1343. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15641` → after: `L15641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15641) · [Before (L15641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15641)

```diff
-             Jd
+             FQ
```

#### 1344. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15645` → after: `L15645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15645) · [Before (L15645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15645)

```diff
-             dd.x
+             QQ.x
```

#### 1345. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15648` → after: `L15648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15648) · [Before (L15648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15648)

```diff
-             dd.x + kd
+             QQ.x + wQ
```

#### 1346. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15650` → after: `L15650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15650) · [Before (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15650)

```diff
-             dd.z
+             QQ.z
```

#### 1347. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15653` → after: `L15653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15653) · [Before (L15653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15653)

```diff
-             dd.z + kd
+             QQ.z + wQ
```

#### 1348. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15656` → after: `L15656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15656) · [Before (L15656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15656)

```diff
-             Jd ? ` (height y ${dd.y})` : ""
+             FQ ? ` (height y ${QQ.y})` : ""
```

#### 1349. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15660` → after: `L15660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15660) · [Before (L15660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15660)

```diff
-             dd.x + Jd
+             QQ.x + FQ
```

#### 1350. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15662` → after: `L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15662) · [Before (L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15662)

```diff
-             dd.z + Jd
+             QQ.z + FQ
```

#### 1351. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15666` → after: `L15666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15666) · [Before (L15666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15666)

```diff
-             Jd("deaths")
+             FQ("deaths")
```

#### 1352. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15668` → after: `L15668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15668) · [Before (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15668)

```diff
-           `];const kd=dd.indexOf(": "),pd=-1===kd?null:function(dd){const Jd=dd.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((dd=>""!==dd));return Jd.length>0&&Jd.length<=3&&Jd.every((dd=>/^[A-Za-z]+$/.test(dd)&&!/^[a-z]{3,}ed$/i.test(dd)&&!Gq.test(dd.toLowerCase()) … [truncated]
+           `];const wQ=QQ.indexOf(": "),LQ=-1===wQ?null:function(QQ){const FQ=QQ.replace(/([a-z])([A-Z])/g,"$1 $2").split(/[\s_-]+/).filter((QQ=>""!==QQ));return FQ.length>0&&FQ.length<=3&&FQ.every((QQ=>/^[A-Za-z]+$/.test(QQ)&&!/^[a-z]{3,}ed$/i.test(QQ)&&!cC.test(QQ.toLowerCase()) … [truncated]
```

#### 1353. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15670` → after: `L15670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15670) · [Before (L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15670)

```diff
-             Jd("deaths logged as")
+             FQ("deaths logged as")
```

#### 1354. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15674` → after: `L15674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15674) · [Before (L15674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15674)

```diff
-             pd
+             LQ
```

#### 1355. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15677` → after: `L15677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15677) · [Before (L15677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15677)

```diff
-             Jd("deaths")
+             FQ("deaths")
```

#### 1356. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15681` → after: `L15681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15681) · [Before (L15681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15681)

```diff
-             dd.to
+             QQ.to
```

#### 1357. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15684` → after: `L15684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15684) · [Before (L15684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15684)

```diff
-             kd("or later")
+             wQ("or later")
```

#### 1358. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15688` → after: `L15688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15688) · [Before (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15688)

```diff
-             (0, LP.d)(dd.group)
+             (0, xD.e)(QQ.group)
```

#### 1359. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15690` → after: `L15690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15690) · [Before (L15690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15690)

```diff
-             dd.from
+             QQ.from
```

#### 1360. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15693` → after: `L15693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15693) · [Before (L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15693)

```diff
-             dd.to
+             QQ.to
```

#### 1361. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15697` → after: `L15697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15697) · [Before (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15697)

```diff
-             (0, LP.l)(dd.lost)
+             (0, xD.m)(QQ.lost)
```

#### 1362. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15700` → after: `L15700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15700) · [Before (L15700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15700)

```diff
-             kd("of the")
+             wQ("of the")
```

#### 1363. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15703` → after: `L15703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15703) · [Before (L15703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15703)

```diff
-             (0, LP.l)(dd.fromPlayers)
+             (0, xD.m)(QQ.fromPlayers)
```

#### 1364. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15706` → after: `L15706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15706) · [Before (L15706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15706)

```diff
-             kd("players who reached")
+             wQ("players who reached")
```

#### 1365. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15709` → after: `L15709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15709) · [Before (L15709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15709)

```diff
-             dd.from
+             QQ.from
```

#### 1366. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15712` → after: `L15712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15712) · [Before (L15712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15712)

```diff
-             kd("didn't reach")
+             wQ("didn't reach")
```

#### 1367. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15715` → after: `L15715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15715) · [Before (L15715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15715)

```diff
-             Nd
+             qQ
```

#### 1368. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15717` → after: `L15717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15717) · [Before (L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15717)

```diff
-             gd
+             vQ
```

#### 1369. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15720` → after: `L15720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15720) · [Before (L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15720)

```diff
-             Wd
+             oQ
```

#### 1370. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15723` → after: `L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15723) · [Before (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15723)

```diff
-             kd("in 100 players who get to")
+             wQ("in 100 players who get to")
```

#### 1371. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15726` → after: `L15726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15726) · [Before (L15726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15726)

```diff
-             dd.from
+             QQ.from
```

#### 1372. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15729` → after: `L15729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15729) · [Before (L15729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15729)

```diff
-             kd("don't get to")
+             wQ("don't get to")
```

#### 1373. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15732` → after: `L15732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15732) · [Before (L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15732)

```diff
-             Nd
+             qQ
```

#### 1374. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15736` → after: `L15736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15736) · [Before (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15736)

```diff
-             Wd
+             oQ
```

#### 1375. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15739` → after: `L15739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15739) · [Before (L15739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15739)

```diff
-             kd("of every 100 players who reach")
+             wQ("of every 100 players who reach")
```

#### 1376. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15742` → after: `L15742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15742) · [Before (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15742)

```diff
-             dd.from
+             QQ.from
```

#### 1377. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15744` → after: `L15744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15744) · [Before (L15744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15744)

```diff
-             (0, LP.l)(dd.fromPlayers)
+             (0, xD.m)(QQ.fromPlayers)
```

#### 1378. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15746` → after: `L15746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15746) · [Before (L15746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15746)

```diff
-             kd("don't reach")
+             wQ("don't reach")
```

#### 1379. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15749` → after: `L15749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15749) · [Before (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15749)

```diff
-             Nd
+             qQ
```

#### 1380. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15751` → after: `L15751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15751) · [Before (L15751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15751)

```diff
-             (0, LP.l)(dd.fromPlayers - dd.lost)
+             (0, xD.m)(QQ.fromPlayers - QQ.lost)
```

#### 1381. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15753` → after: `L15753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15753) · [Before (L15753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15753)

```diff
-             gd
+             vQ
```

#### 1382. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15757` → after: `L15757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15757) · [Before (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15757)

```diff
-             Wd
+             oQ
```

#### 1383. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15760` → after: `L15760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15760) · [Before (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15760)

```diff
-             kd("of every 100 players who reach")
+             wQ("of every 100 players who reach")
```

#### 1384. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15763` → after: `L15763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15763) · [Before (L15763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15763)

```diff
-             dd.from
+             QQ.from
```

#### 1385. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15766` → after: `L15766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15766) · [Before (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15766)

```diff
-             kd("don't reach")
+             wQ("don't reach")
```

#### 1386. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15769` → after: `L15769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15769) · [Before (L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15769)

```diff
-             Nd
+             qQ
```

#### 1387. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15771` → after: `L15771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15771) · [Before (L15771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15771)

```diff
-               (0, LP.l)(dd.lost)
+               (0, xD.m)(QQ.lost)
```

#### 1388. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15774` → after: `L15774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15774) · [Before (L15774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15774)

```diff
-               kd("of")
+               wQ("of")
```

#### 1389. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15777` → after: `L15777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15777) · [Before (L15777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15777)

```diff
-               (0, LP.l)(dd.fromPlayers)
+               (0, xD.m)(QQ.fromPlayers)
```

#### 1390. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15779` → after: `L15779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15779) · [Before (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15779)

```diff
-               gd
+               vQ
```

#### 1391. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15782` → after: `L15782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15782) · [Before (L15782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15782)

```diff
-             kd("in")
+             wQ("in")
```

#### 1392. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15785` → after: `L15785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15785) · [Before (L15785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15785)

```diff
-             dd.category
+             QQ.category
```

#### 1393. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15789` → after: `L15789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15789) · [Before (L15789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15789)

```diff
-             (0, LP.l)(dd.count)
+             (0, xD.m)(QQ.count)
```

#### 1394. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15792` → after: `L15792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15792) · [Before (L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15792)

```diff
-             kd("of")
+             wQ("of")
```

#### 1395. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15795` → after: `L15795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15795) · [Before (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15795)

```diff
-             (0, LP.l)(dd.total)
+             (0, xD.m)(QQ.total)
```

#### 1396. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15797` → after: `L15797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15797) · [Before (L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15797)

```diff
-           `:null,Pd=Oq(dd.count,dd.total),Zd=vq(dd.death,kd);return Jd?{label:2*dd.count>dd.total?kd("Most deaths"):kd("Many deaths"),parts:[null!==Wd&&void 0!==Wd?Wd:`
+           `:null,DQ=eC(QQ.count,QQ.total),kQ=CC(QQ.death,wQ);return FQ?{label:2*QQ.count>QQ.total?wQ("Most deaths"):wQ("Many deaths"),parts:[null!==oQ&&void 0!==oQ?oQ:`
```

#### 1397. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15799` → after: `L15799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15799) · [Before (L15799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15799)

```diff
-             Pd
+             DQ
```

#### 1398. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15802` → after: `L15802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15802) · [Before (L15802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15802)

```diff
-             kd("in 100")
+             wQ("in 100")
```

#### 1399. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15806` → after: `L15806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15806) · [Before (L15806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15806)

```diff
-             kd("happen near")
+             wQ("happen near")
```

#### 1400. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15809` → after: `L15809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15809) · [Before (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15809)

```diff
-             Iq(dd.square)
+             pC(QQ.square)
```

#### 1401. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15812` → after: `L15812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15812) · [Before (L15812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15812)

```diff
-             Nd
+             qQ
```

#### 1402. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15816` → after: `L15816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15816) · [Before (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15816)

```diff
-             kd("Death hotspot")
+             wQ("Death hotspot")
```

#### 1403. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15819` → after: `L15819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15819) · [Before (L15819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15819)

```diff
-             Nd
+             qQ
```

#### 1404. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15821` → after: `L15821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15821) · [Before (L15821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15821)

```diff
-           `,parts:[null!==Wd&&void 0!==Wd?Wd:`
+           `,parts:[null!==oQ&&void 0!==oQ?oQ:`
```

#### 1405. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15823` → after: `L15823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15823) · [Before (L15823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15823)

```diff
-             Pd
+             DQ
```

#### 1406. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15826` → after: `L15826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15826) · [Before (L15826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15826)

```diff
-             kd("of every 100")
+             wQ("of every 100")
```

#### 1407. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15830` → after: `L15830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15830) · [Before (L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15830)

```diff
-             Nd
+             qQ
```

#### 1408. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15833` → after: `L15833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15833) · [Before (L15833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15833)

```diff
-             kd("in the past week happened at")
+             wQ("in the past week happened at")
```

#### 1409. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15836` → after: `L15836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15836) · [Before (L15836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15836)

```diff
-             Rq(dd.square)
+             GC(QQ.square)
```

#### 1410. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15840` → after: `L15840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15840) · [Before (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15840)

```diff
-             kd("in")
+             wQ("in")
```

#### 1411. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15843` → after: `L15843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15843) · [Before (L15843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15843)

```diff
-             dd.category
+             QQ.category
```

#### 1412. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15847` → after: `L15847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15847) · [Before (L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15847)

```diff
-             kd("near")
+             wQ("near")
```

#### 1413. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15850` → after: `L15850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15850) · [Before (L15850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15850)

```diff
-             Iq(dd.square)
+             pC(QQ.square)
```

#### 1414. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15853` → after: `L15853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15853) · [Before (L15853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15853)

```diff
-             pd
+             LQ
```

#### 1415. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15855` → after: `L15855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15855) · [Before (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15855)

```diff
-             Nd
+             qQ
```

#### 1416. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15858` → after: `L15858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15858) · [Before (L15858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15858)

```diff
-             kd("in 100 minutes of play")
+             wQ("in 100 minutes of play")
```

#### 1417. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15862` → after: `L15862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15862) · [Before (L15862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15862)

```diff
-             Rq(Jd, !1)
+             GC(FQ, !1)
```

#### 1418. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15864` → after: `L15864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15864) · [Before (L15864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15864)

```diff
-               Oq(pd, 1)
+               eC(LQ, 1)
```

#### 1419. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15867` → after: `L15867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15867) · [Before (L15867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15867)

```diff
-               kd("of 100")
+               wQ("of 100")
```

#### 1420. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15870` → after: `L15870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15870) · [Before (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15870)

```diff
-             kd("Busiest place")
+             wQ("Busiest place")
```

#### 1421. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15873` → after: `L15873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15873) · [Before (L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15873)

```diff
-             pd
+             LQ
```

#### 1422. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15877` → after: `L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15877) · [Before (L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15877)

```diff
-             Rq(dd.square)
+             GC(QQ.square)
```

#### 1423. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15879` → after: `L15879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15879) · [Before (L15879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15879)

```diff
-             kd("with")
+             wQ("with")
```

#### 1424. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15882` → after: `L15882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15882) · [Before (L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15882)

```diff
-             Nd
+             qQ
```

#### 1425. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15885` → after: `L15885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15885) · [Before (L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15885)

```diff
-             kd("of every 100 minutes played")
+             wQ("of every 100 minutes played")
```

#### 1426. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15888` → after: `L15888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15888) · [Before (L15888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15888)

```diff
-             0 === Wd.length ? "" : `; ${kd("next busiest")}: ${Wd.join(", ")}`
+             0 === oQ.length ? "" : `; ${wQ("next busiest")}: ${oQ.join(", ")}`
```

#### 1427. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15892` → after: `L15892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15892) · [Before (L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15892)

```diff
-             pd
+             LQ
```

#### 1428. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15894` → after: `L15894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15894) · [Before (L15894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15894)

```diff
-             (0, LP.l)(Nd)
+             (0, xD.m)(qQ)
```

#### 1429. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15897` → after: `L15897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15897) · [Before (L15897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15897)

```diff
-             0 === Jd ? ` ${kd("players")}` : ""
+             0 === FQ ? ` ${wQ("players")}` : ""
```

#### 1430. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15901` → after: `L15901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15901) · [Before (L15901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15901)

```diff
-             kd("Players per")
+             wQ("Players per")
```

#### 1431. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15904` → after: `L15904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15904) · [Before (L15904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15904)

```diff
-             dd.eventType
+             QQ.eventType
```

#### 1432. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15907` → after: `L15907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15907) · [Before (L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15907)

```diff
-             kd("event")
+             wQ("event")
```

#### 1433. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15911` → after: `L15911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15911) · [Before (L15911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15911)

```diff
-             kd("Players at each")
+             wQ("Players at each")
```

#### 1434. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15914` → after: `L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15914) · [Before (L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15914)

```diff
-             dd.eventType
+             QQ.eventType
```

#### 1435. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15917` → after: `L15917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15917) · [Before (L15917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15917)

```diff
-             eq(Wd.from, Wd.to)
+             MC(oQ.from, oQ.to)
```

#### 1436. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15920` → after: `L15920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15920) · [Before (L15920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15920)

```diff
-             Wd.isOrLater ? ` ${kd("or later")}` : ""
+             oQ.isOrLater ? ` ${wQ("or later")}` : ""
```

#### 1437. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15923` → after: `L15923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15923) · [Before (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15923)

```diff
-             kd("loses the most")
+             wQ("loses the most")
```

#### 1438. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15925` → after: `L15925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15925) · [Before (L15925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15925)

```diff
-             (0, LP.l)(Wd.fromPlayers)
+             (0, xD.m)(oQ.fromPlayers)
```

#### 1439. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15928` → after: `L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15928) · [Before (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15928)

```diff
-             (0, LP.l)(Wd.reached)
+             (0, xD.m)(oQ.reached)
```

#### 1440. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15931` → after: `L15931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15931) · [Before (L15931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15931)

```diff
-             kd("players")
+             wQ("players")
```

#### 1441. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15935` → after: `L15935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15935) · [Before (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15935)

```diff
-             Nd
+             qQ
```

#### 1442. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15937` → after: `L15937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15937) · [Before (L15937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15937)

```diff
-             Jd.join(", ")
+             FQ.join(", ")
```

#### 1443. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15940` → after: `L15940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15940) · [Before (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15940)

```diff
-             dd.hasMore ? ", \u2026" : ""
+             QQ.hasMore ? ", \u2026" : ""
```

#### 1444. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15943` → after: `L15943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15943) · [Before (L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15943)

```diff
-             Pd
+             DQ
```

#### 1445. `bundles/bloxd.io/chunks/js/103.js` (Changed code · before: `L15947` → after: `L15947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4eR15947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-4be28ecaad83aac00c9bdb493b6f2ea515737b1089d0d91a0f97ceab6395ca4e) · [After (L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/103.js#L15947) · [Before (L15947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/103.js#L15947)

```diff
-             Nd
+             qQ
```
