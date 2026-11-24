# Changed — Bundle Modifications Report (Part 067 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `67 / 137` (**409** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 066](part-066.md) · [Part 068 →](part-068.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/303.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/303.js` (4238 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a)

#### 4182. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124737` → after: `L124737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124737) · [Before (L124737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124737)

```diff
-             return this.logger.ha(`Unrecognized JSON command:${H6(BB)}`, "Err"), this.doOutput(void 0, "unknown", BB.seq, !1, void 0, `Unrecognized JSON command: ${BB.command}`), {
+             return this.logger.Xn(`Unrecognized JSON command:${H2(BB)}`, "Err"), this.doOutput(void 0, "unknown", BB.seq, !1, void 0, `Unrecognized JSON command: ${BB.command}`), {
```

#### 4183. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124747` → after: `L124747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124747) · [Before (L124747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124747)

```diff
-             this.logger.hasLevel(2) && (uB = this.hrtime(), this.logger.hasLevel(3) && this.logger.info(`request:${o6(this.toStringMessage(BB))}`));
+             this.logger.hasLevel(2) && (kB = this.hrtime(), this.logger.hasLevel(3) && this.logger.info(`request:${a2(this.toStringMessage(BB))}`));
```

#### 4184. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124763` → after: `L124763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124763) · [Before (L124763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124763)

```diff
-                 IB ? this.logger.perftrc(`${aB.seq}::${aB.command}: elapsed time (in milliseconds) ${BB}`) : this.logger.perftrc(`${aB.seq}::${aB.command}: async elapsed time (in milliseconds) ${BB}`)
+                 GB ? this.logger.perftrc(`${nB.seq}::${nB.command}: elapsed time (in milliseconds) ${BB}`) : this.logger.perftrc(`${nB.seq}::${nB.command}: async elapsed time (in milliseconds) ${BB}`)
```

#### 4185. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124807` → after: `L124807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124807) · [Before (L124807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124807)

```diff
-       function RSB(BB) {
+       function VQB(BB) {
```

#### 4186. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124821` → after: `L124821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124821) · [Before (L124821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124821)

```diff
-       function OSB(BB, jB) {
+       function SQB(BB, IB) {
```

#### 4187. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124828-L124830` → after: `L124828-L124830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124828-L124830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124828-L124830) · [Before (L124828-L124830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124828-L124830)

```diff
-       function BMB(BB, jB, zB) {
-         const QB = OSB(BB, zB),
-           nB = jB && OSB(jB, zB);
+       function BsB(BB, IB, ZB) {
+         const TB = SQB(BB, ZB),
+           JB = IB && SQB(IB, ZB);
```

#### 4188. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124838-L124839` → after: `L124838-L124839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124838-L124839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124838-L124839) · [Before (L124838-L124839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124838-L124839)

```diff
-       function jMB(BB, jB) {
-         return tSB(BB) ? {
+       function IsB(BB, IB) {
+         return CQB(BB) ? {
```

#### 4189. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124846` → after: `L124846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124846) · [Before (L124846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124846)

```diff
-       function zMB(BB, jB, zB, QB) {
+       function ZsB(BB, IB, ZB, TB) {
```

#### 4190. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124856` → after: `L124856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124856) · [Before (L124856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124856)

```diff
-                     qu: zB,
+                     Ck: ZB,
```

#### 4191. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124876` → after: `L124876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124876) · [Before (L124876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124876)

```diff
-       function QMB(BB, jB, zB) {
+       function TsB(BB, IB, ZB) {
```

#### 4192. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124887` → after: `L124887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124887) · [Before (L124887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124887)

```diff
-           aB = BMB(nB, dB, UB),
+           nB = BsB(JB, oB, cB),
```

#### 4193. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124901` → after: `L124901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124901) · [Before (L124901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124901)

```diff
-       function nMB(BB) {
+       function JsB(BB) {
```

#### 4194. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124904-L124905` → after: `L124904-L124905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124904-L124905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124904-L124905) · [Before (L124904-L124905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124904-L124905)

```diff
-       var dMB = (BB => (BB[BB.PreStart = 0] = "PreStart", BB[BB.Start = 1] = "Start", BB[BB.Entire = 2] = "Entire", BB[BB.Mid = 3] = "Mid", BB[BB.End = 4] = "End", BB[BB.PostEnd = 5] = "PostEnd", BB))(dMB || {}),
-         IMB = class {
+       var osB = (BB => (BB[BB.PreStart = 0] = "PreStart", BB[BB.Start = 1] = "Start", BB[BB.Entire = 2] = "Entire", BB[BB.Mid = 3] = "Mid", BB[BB.End = 4] = "End", BB[BB.PostEnd = 5] = "PostEnd", BB))(osB || {}),
+         GsB = class {
```

#### 4195. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124907` → after: `L124907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124907) · [Before (L124907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124907)

```diff
-             this.goSubtree = !0, this.lineIndex = new pMB, this.endBranch = [], this.state = 2, this.initialText = "", this.trailingText = "", this.lineIndex.root = new rMB, this.startPath = [this.lineIndex.root], this.stack = [this.lineIndex.root]
+             this.goSubtree = !0, this.lineIndex = new hsB, this.endBranch = [], this.state = 2, this.initialText = "", this.trailingText = "", this.lineIndex.root = new zsB, this.startPath = [this.lineIndex.root], this.stack = [this.lineIndex.root]
```

#### 4196. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124914` → after: `L124914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124914) · [Before (L124914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124914)

```diff
-             const zB = pMB.linesFromText(BB).lines;
+             const ZB = hsB.linesFromText(BB).lines;
```

#### 4197. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124924` → after: `L124924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124924) · [Before (L124924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124924)

```diff
-                 for (let dB = 1; dB < zB.length; dB++) BB[dB - 1] = new sMB(zB[dB]);
+                 for (let oB = 1; oB < ZB.length; oB++) BB[oB - 1] = new FsB(ZB[oB]);
```

#### 4198. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124932` → after: `L124932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124932) · [Before (L124932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124932)

```diff
-                   const jB = new rMB;
+                   const IB = new zsB;
```

#### 4199. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124952` → after: `L124952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124952) · [Before (L124952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124952)

```diff
-               return BB.isLeaf() ? new sMB("") : new rMB
+               return BB.isLeaf() ? new FsB("") : new zsB
```

#### 4200. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124979` → after: `L124979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124979) · [Before (L124979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124979)

```diff
-         NMB = class {
+         vsB = class {
```

#### 4201. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124987` → after: `L124987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124987) · [Before (L124987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124987)

```diff
-         uMB = class BB {
+         ksB = class BB {
```

#### 4202. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L124998` → after: `L124998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR124998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L124998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L124998) · [Before (L124998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L124998)

```diff
-             this.changes.push(new NMB(jB, zB, QB)), (this.changes.length > BB.changeNumberThreshold || zB > BB.changeLengthThreshold || QB && QB.length > BB.changeLengthThreshold) && this.getSnapshot()
+             this.changes.push(new vsB(IB, ZB, TB)), (this.changes.length > BB.changeNumberThreshold || ZB > BB.changeLengthThreshold || TB && TB.length > BB.changeLengthThreshold) && this.getSnapshot()
```

#### 4203. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125008` → after: `L125008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125008) · [Before (L125008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125008)

```diff
-               jB = new aMB(this.currentVersion + 1, this, zB, this.changes), this.currentVersion = jB.version, this.versions[this.currentVersionToIndex()] = jB, this.changes = [], this.currentVersion - this.minVersion >= BB.maxVersions && (this.minVersion = this.currentVersion -  … [truncated]
+               IB = new nsB(this.currentVersion + 1, this, ZB, this.changes), this.currentVersion = IB.version, this.versions[this.currentVersionToIndex()] = IB, this.changes = [], this.currentVersion - this.minVersion >= BB.maxVersions && (this.minVersion = this.currentVersion -  … [truncated]
```

#### 4204. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125048` → after: `L125048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125048) · [Before (L125048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125048)

```diff
-               QB = new aMB(0, zB, new pMB);
+               TB = new nsB(0, ZB, new hsB);
```

#### 4205. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125050` → after: `L125050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125050) · [Before (L125050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125050)

```diff
-             const nB = pMB.linesFromText(jB);
+             const JB = hsB.linesFromText(IB);
```

#### 4206. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125054-L125056` → after: `L125054-L125056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125054-L125056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125054-L125056) · [Before (L125054-L125056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125054-L125056)

```diff
-       uMB.changeNumberThreshold = 8, uMB.changeLengthThreshold = 256, uMB.maxVersions = 8;
-       var UMB = uMB,
-         aMB = class BB {
+       ksB.changeNumberThreshold = 8, ksB.changeLengthThreshold = 256, ksB.maxVersions = 8;
+       var csB = ksB,
+         nsB = class BB {
```

#### 4207. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125058` → after: `L125058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125058) · [Before (L125058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125058)

```diff
-             let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LgB;
+             let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WdB;
```

#### 4208. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125068` → after: `L125068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125068) · [Before (L125068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125068)

```diff
-             if (jB instanceof BB && this.cache === jB.cache) return this.version <= jB.version ? gU : this.cache.getTextChangesBetweenVersions(jB.version, this.version)
+             if (IB instanceof BB && this.cache === IB.cache) return this.version <= IB.version ? Uc : this.cache.getTextChangesBetweenVersions(IB.version, this.version)
```

#### 4209. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125071` → after: `L125071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125071) · [Before (L125071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125071)

```diff
-         pMB = class BB {
+         hsB = class BB {
```

#### 4210. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125113` → after: `L125113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125113) · [Before (L125113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125113)

```diff
-               for (let BB = 0; BB < jB.length; BB++) zB[BB] = new sMB(jB[BB]);
+               for (let BB = 0; BB < IB.length; BB++) ZB[BB] = new FsB(IB[BB]);
```

#### 4211. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125115` → after: `L125115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125115) · [Before (L125115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125115)

```diff
-             } else this.root = new rMB
+             } else this.root = new zsB
```

#### 4212. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125152` → after: `L125152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125152) · [Before (L125152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125152)

```diff
-               const nB = new IMB;
+               const JB = new GsB;
```

#### 4213. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125157` → after: `L125157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125157) · [Before (L125157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125157)

```diff
-                 QB = QB ? BB + QB : BB, zB = 0, dB = !0
+                 TB = TB ? BB + TB : BB, ZB = 0, oB = !0
```

#### 4214. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125164` → after: `L125164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125164) · [Before (L125164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125164)

```diff
-                 0 === nB && (zB += dB.length, QB = QB ? QB + dB : dB)
+                 0 === JB && (ZB += oB.length, TB = TB ? TB + oB : oB)
```

#### 4215. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125174` → after: `L125174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125174) · [Before (L125174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125174)

```diff
-             if (BB.length < 4) return new rMB(BB);
+             if (BB.length < 4) return new zsB(BB);
```

#### 4216. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125179` → after: `L125179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125179) · [Before (L125179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125179)

```diff
-               jB[QB] = new rMB(BB.slice(zB, nB)), zB = nB
+               IB[TB] = new zsB(BB.slice(ZB, JB)), ZB = JB
```

#### 4217. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125193` → after: `L125193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125193) · [Before (L125193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125193)

```diff
-             return nB.length > 0 ? zB[QB] = nB : zB.pop(), {
+             return JB.length > 0 ? ZB[TB] = JB : ZB.pop(), {
```

#### 4218. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125199` → after: `L125199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125199) · [Before (L125199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125199)

```diff
-         rMB = class BB {
+         zsB = class BB {
```

#### 4219. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125336` → after: `L125336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125336) · [Before (L125336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125336)

```diff
-         sMB = class {
+         FsB = class {
```

#### 4220. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125353` → after: `L125353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125353) · [Before (L125353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125353)

```diff
-         JMB = class BB {
+         NsB = class BB {
```

#### 4221. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125388-L125389` → after: `L125388-L125389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125388-L125389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125388-L125389) · [Before (L125388-L125389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125388-L125389)

```diff
-             const QB = tgB(BB, jB, zB);
-             this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Scheduling throttled operation:${H6(QB)}`), this.activeRequestCount < this.maxActiveRequestCount ? this.scheduleRequest(QB) : (this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Deferring request for: ${QB … [truncated]
+             const TB = CdB(BB, IB, ZB);
+             this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Scheduling throttled operation:${H2(TB)}`), this.activeRequestCount < this.maxActiveRequestCount ? this.scheduleRequest(TB) : (this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Deferring request for: ${TB … [truncated]
```

#### 4222. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125393-L125394` → after: `L125393-L125394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125393-L125394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125393-L125394) · [Before (L125393-L125394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125393-L125394)

```diff
-             switch (this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Received response:${H6(BB)}`), BB.kind) {
-               case L6:
+             switch (this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Received response:${H2(BB)}`), BB.kind) {
+               case d2:
```

#### 4223. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125397` → after: `L125397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125397) · [Before (L125397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125397)

```diff
-               case G6: {
+               case W2: {
```

#### 4224. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125404` → after: `L125404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125404) · [Before (L125404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125404)

```diff
-               case S6: {
+               case s2: {
```

#### 4225. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125412` → after: `L125412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125412) · [Before (L125412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125412)

```diff
-               case g6: {
+               case C2: {
```

#### 4226. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125421` → after: `L125421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125421) · [Before (L125421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125421)

```diff
-               case t6: {
+               case Q2: {
```

#### 4227. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125443` → after: `L125443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125443) · [Before (L125443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125443)

```diff
-               case k6:
+               case U2:
```

#### 4228. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125446-L125447` → after: `L125446-L125447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125446-L125447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125446-L125447) · [Before (L125446-L125447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125446-L125447)

```diff
-               case y6:
-                 for (this.activeRequestCount > 0 ? this.activeRequestCount-- : kQ.fail("TIAdapter:: Received too many responses"); !this.requestQueue.tJ();) {
+               case y2:
+                 for (this.activeRequestCount > 0 ? this.activeRequestCount-- : yT.fail("TIAdapter:: Received too many responses"); !this.requestQueue.hN();) {
```

#### 4229. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125457` → after: `L125457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125457) · [Before (L125457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125457)

```diff
-               case M6:
+               case w2:
```

#### 4230. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125462-L125464` → after: `L125462-L125464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125462-L125464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125462-L125464) · [Before (L125462-L125464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125462-L125464)

```diff
-             this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Scheduling request for: ${jB.projectName}`), this.activeRequestCount++, this.host.setTimeout((() => {
-               this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Sending request:${H6(jB)}`), this.installer.send(jB)
-             }), BB.requestDelayMillis, `${jB.projectName}::${jB.kind}`)
+             this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Scheduling request for: ${IB.projectName}`), this.activeRequestCount++, this.host.setTimeout((() => {
+               this.logger.hasLevel(3) && this.logger.info(`TIAdapter:: Sending request:${H2(IB)}`), this.installer.send(IB)
+             }), BB.requestDelayMillis, `${IB.projectName}::${IB.kind}`)
```

#### 4231. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125467-L125470` → after: `L125467-L125470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125467-L125470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125467-L125470) · [Before (L125467-L125470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125467-L125470)

```diff
-       JMB.requestDelayMillis = 100;
-       var mMB = JMB,
-         yMB = {};
-       nB(yMB, {
+       NsB.requestDelayMillis = 100;
+       var gsB = NsB,
+         qsB = {};
+       JB(qsB, {
```

#### 4232. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125476-L125486` → after: `L125476-L125486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125476-L125486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125476-L125486) · [Before (L125476-L125486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125476-L125486)

```diff
-         AutoImportProviderProject: () => UtB,
-         AuxiliaryProject: () => NtB,
-         CharRangeSection: () => dMB,
-         CloseFileWatcherEvent: () => HtB,
-         CommandNames: () => FSB,
-         ConfigFileDiagEvent: () => MtB,
-         ConfiguredProject: () => atB,
-         ConfiguredProjectLoadKind: () => OtB,
-         CreateDirectoryWatcherEvent: () => otB,
-         CreateFileWatcherEvent: () => ftB,
-         Errors: () => ygB,
+         AutoImportProviderProject: () => cCB,
+         AuxiliaryProject: () => vCB,
+         CharRangeSection: () => osB,
+         CloseFileWatcherEvent: () => aCB,
+         CommandNames: () => MQB,
+         ConfigFileDiagEvent: () => sCB,
+         ConfiguredProject: () => nCB,
+         ConfiguredProjectLoadKind: () => SCB,
+         CreateDirectoryWatcherEvent: () => pCB,
+         CreateFileWatcherEvent: () => iCB,
+         Errors: () => qdB,
```

#### 4233. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125491-L125530` → after: `L125491-L125530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125491-L125530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125491-L125530) · [Before (L125491-L125530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125491-L125530)

```diff
-         ExternalProject: () => ptB,
-         GcTimer: () => YgB,
-         InferredProject: () => ItB,
-         LargeFileReferencedEvent: () => StB,
-         LineIndex: () => pMB,
-         LineLeaf: () => sMB,
-         LineNode: () => rMB,
-         LogLevel: () => GgB,
-         Msg: () => ggB,
-         OpenFileInfoTelemetryEvent: () => qtB,
-         Project: () => dtB,
-         ProjectInfoTelemetryEvent: () => itB,
-         ProjectKind: () => RgB,
-         ProjectLanguageServiceStateEvent: () => EtB,
-         ProjectLoadingFinishEvent: () => ttB,
-         ProjectLoadingStartEvent: () => gtB,
- ... (24 more removed lines; see GitHub link above)
+         ExternalProject: () => hCB,
+         GcTimer: () => jdB,
+         InferredProject: () => GCB,
+         LargeFileReferencedEvent: () => QCB,
+         LineIndex: () => hsB,
+         LineLeaf: () => FsB,
+         LineNode: () => zsB,
+         LogLevel: () => UdB,
+         Msg: () => ddB,
+         OpenFileInfoTelemetryEvent: () => YCB,
+         Project: () => oCB,
+         ProjectInfoTelemetryEvent: () => OCB,
+         ProjectKind: () => VdB,
+         ProjectLanguageServiceStateEvent: () => wCB,
+         ProjectLoadingFinishEvent: () => CCB,
+         ProjectLoadingStartEvent: () => dCB,
+ ... (24 more added lines; see GitHub link above)
```

#### 4234. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125532-L125536` → after: `L125532-L125536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125532-L125536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125532-L125536) · [Before (L125532-L125536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125532-L125536)

```diff
-         formatDiagnosticToProtocol: () => DSB,
-         formatMessage: () => YSB,
-         getBaseConfigFileName: () => VgB,
-         getDetailWatchInfo: () => NSB,
-         getLocationInNewDocument: () => zMB,
+         formatDiagnosticToProtocol: () => HQB,
+         formatMessage: () => jQB,
+         getBaseConfigFileName: () => PdB,
+         getDetailWatchInfo: () => vQB,
+         getLocationInNewDocument: () => ZsB,
```

#### 4235. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125538` → after: `L125538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125538) · [Before (L125538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125538)

```diff
-         hasNoTypeScriptSource: () => ztB,
+         hasNoTypeScriptSource: () => ZCB,
```

#### 4236. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125540-L125553` → after: `L125540-L125553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125540-L125553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125540-L125553) · [Before (L125540-L125553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125540-L125553)

```diff
-         isBackgroundProject: () => mtB,
-         isConfigFile: () => tSB,
-         isConfiguredProject: () => stB,
-         isDynamicFileName: () => CgB,
-         isExternalProject: () => JtB,
-         isInferredProject: () => rtB,
-         isInferredProjectName: () => qgB,
-         isProjectDeferredClose: () => ytB,
-         makeAutoImportProviderProjectName: () => ogB,
-         makeAuxiliaryProjectName: () => HgB,
-         makeInferredProjectName: () => fgB,
-         maxFileSize: () => GtB,
-         maxProgramSizeForNonTsFiles: () => ktB,
-         normalizedPathToPath: () => MgB,
+         isBackgroundProject: () => gCB,
+         isConfigFile: () => CQB,
+         isConfiguredProject: () => FCB,
+         isDynamicFileName: () => xdB,
+         isExternalProject: () => NCB,
+         isInferredProject: () => zCB,
+         isInferredProjectName: () => YdB,
+         isProjectDeferredClose: () => qCB,
+         makeAutoImportProviderProjectName: () => pdB,
+         makeAuxiliaryProjectName: () => adB,
+         makeInferredProjectName: () => idB,
+         maxFileSize: () => UCB,
+         maxProgramSizeForNonTsFiles: () => yCB,
+         normalizedPathToPath: () => sdB,
```

#### 4237. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125555-L125559` → after: `L125555-L125559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125555-L125559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125555-L125559) · [Before (L125555-L125559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125555-L125559)

```diff
-         nullCancellationToken: () => iSB,
-         nullTypingsInstaller: () => CtB,
-         protocol: () => hgB,
-         scriptInfoIsContainedByBackgroundProject: () => bgB,
-         scriptInfoIsContainedByDeferredClosedProject: () => vgB,
+         nullCancellationToken: () => OQB,
+         nullTypingsInstaller: () => xCB,
+         protocol: () => RdB,
+         scriptInfoIsContainedByBackgroundProject: () => DdB,
+         scriptInfoIsContainedByDeferredClosedProject: () => KdB,
```

#### 4238. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L125561-L125565` → after: `L125561-L125565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR125561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L125561-L125565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/303.js#L125561-L125565) · [Before (L125561-L125565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/303.js#L125561-L125565)

```diff
-         toEvent: () => hSB,
-         toNormalizedPath: () => SgB,
-         tryConvertScriptKindName: () => WtB,
-         typingsInstaller: () => UgB,
-         updateProjectIfDirty: () => USB
+         toEvent: () => RQB,
+         toNormalizedPath: () => QdB,
+         tryConvertScriptKindName: () => uCB,
+         typingsInstaller: () => cdB,
+         updateProjectIfDirty: () => cQB
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/304.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/304.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc)

#### 1. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/304.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/304.js#L4)

```diff
-   41580: (BB, jB, zB) => {
+   41507: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/304.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/304.js#L8-L10)

```diff
-     var QB = zB(2509),
-       nB = zB(36932),
-       dB = zB(41506),
+     var TB = ZB(2518),
+       JB = ZB(36881),
+       oB = ZB(41435),
```

#### 3. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/304.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/304.js#L36-L37)

```diff
-       for (const NB of [IB, `${IB}.ts`, `${IB}.js`])
-         if (NB in zB && !(0, QB.l)(NB)) return NB
+       for (const vB of [GB, `${GB}.ts`, `${GB}.js`])
+         if (vB in ZB && !(0, TB.o)(vB)) return vB
```

#### 4. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/304.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/304.js#L42)

```diff
-         zB = (0, nB.e)(BB);
+         ZB = (0, JB.b)(BB);
```

#### 5. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/304.js#L53) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/304.js#L53)

```diff
-               rB = pB ? (0, nB.y)(pB) : null;
+               zB = hB ? (0, JB.p)(hB) : null;
```

#### 6. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L66` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/304.js#L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/304.js#L66)

```diff
-   41551: BB => {
+   41472: BB => {
```

#### 7. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/304.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/304.js#L71)

```diff
-     jB.keys = () => [], jB.resolve = jB, jB.id = 41551, BB.exports = jB
+     IB.keys = () => [], IB.resolve = IB, IB.id = 41472, BB.exports = IB
```

#### 8. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L73-L79` → after: `L73-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/304.js#L73-L79) · [Before (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/304.js#L73-L79)

```diff
-   41535: () => {},
-   41518: () => {},
-   41553: () => {},
-   41526: () => {},
-   41521: () => {},
-   41509: () => {},
-   41543: () => {}
+   41465: () => {},
+   41447: () => {},
+   41478: () => {},
+   41459: () => {},
+   41451: () => {},
+   41442: () => {},
+   41468: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/305.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/305.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e)

#### 1. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L4)

```diff
-   41571: (BB, jB, zB) => {
+   41493: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L8-L10)

```diff
-     var QB = zB(62),
-       nB = zB(4829),
-       dB = zB(1710),
+     var TB = ZB(63),
+       JB = ZB(4922),
+       oB = ZB(1746),
```

#### 3. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L13-L18` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L13-L18) · [Before (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L13-L18)

```diff
-       uB = zB(1478),
-       UB = zB(1240),
-       aB = zB(4808),
-       pB = zB(4817),
-       rB = zB(4821),
-       sB = zB(1148);
+       kB = ZB(1516),
+       cB = ZB(1248),
+       nB = ZB(4902),
+       hB = ZB(4908),
+       zB = ZB(4910),
+       FB = ZB(1153);
```

#### 4. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L23)

```diff
-     aB.c.registerLanguage("javascript", pB.c), aB.c.registerLanguage("typescript", rB.b);
+     nB.c.registerLanguage("javascript", hB.d), nB.c.registerLanguage("typescript", zB.c);
```

#### 5. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L27)

```diff
-       return `<button type="button" class="DocsCopyButton ${jB}" title="${zB}" aria-label="${zB}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+       return `<button type="button" class="DocsCopyButton ${IB}" title="${ZB}" aria-label="${ZB}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L48-L51` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L48-L51) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L48-L51)

```diff
-     var kB = zB(1108),
-       GB = zB(1388),
-       LB = zB(36946),
-       gB = zB(36955);
+     var yB = ZB(1102),
+       UB = ZB(1421),
+       WB = ZB(36909),
+       dB = ZB(36916);
```

#### 7. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L79)

```diff
-         const [fB, oB] = (0, QB.useState)(nB.c[0].id), HB = (0, QB.useRef)(null), DB = (0, QB.useRef)(null), [FB, YB] = (0, QB.useState)(""), [VB, hB] = (0, QB.useState)(0), [XB, ZB] = (0, QB.useState)(null), [AB, TB] = (0, QB.useState)(!1), [PB, WB] = (0, QB.useState)(160), eB = … [truncated]
+         const [iB, pB] = (0, TB.useState)(JB.b[0].id), aB = (0, TB.useRef)(null), HB = (0, TB.useRef)(null), [MB, jB] = (0, TB.useState)(""), [PB, RB] = (0, TB.useState)(0), [rB, mB] = (0, TB.useState)(null), [XB, LB] = (0, TB.useState)(!1), [eB, uB] = (0, TB.useState)(160), fB = … [truncated]
```

#### 8. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L88)

```diff
-             for (const QB of nB.c) {
+             for (const TB of JB.b) {
```

#### 9. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L107)

```diff
-           vB = cB ? null !== (jB = null !== (zB = null === (IB = bB.find((BB => BB.doc.id === fB))) || void 0 === IB ? void 0 : IB.doc) && void 0 !== zB ? zB : null === (pB = bB[0]) || void 0 === pB ? void 0 : pB.doc) && void 0 !== jB ? jB : null : null !== (rB = nB.c.find((BB => … [truncated]
+           KB = EB ? null !== (IB = null !== (ZB = null === (GB = DB.find((BB => BB.doc.id === iB))) || void 0 === GB ? void 0 : GB.doc) && void 0 !== ZB ? ZB : null === (hB = DB[0]) || void 0 === hB ? void 0 : hB.doc) && void 0 !== IB ? IB : null : null !== (zB = JB.b.find((BB => … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L110)

```diff
-           } = (0, UB.D)(),
+           } = (0, cB.G)(),
```

#### 11. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L126)

```diff
-               return dB.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${jB}"><code>${IB}</code></pre>${mB(zB,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${nB}\0`
+               return oB.push(`<div class="DocsCodeBlockRow"><pre class="DocsCodeBlock" data-lang="${IB}"><code>${GB}</code></pre>${gB(ZB,"DocsCopyBlock")}</div>`), `\0PLACEHOLDER_${JB}\0`
```

#### 12. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L138-L144` → after: `L138-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L138-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L138-L144) · [Before (L138-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L138-L144)

```diff
-               return dB.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${uB}</code>${mB(zB,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${IB}\0`
-             })), nB = JB(nB), nB = nB.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), nB = nB.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), nB = nB.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), nB = nB.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'),  … [truncated]
-               const zB = "*" === jB,
-                 QB = [];
-               for (const NB of BB.split("\n")) {
-                 const BB = NB.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
-                 BB && QB.push({
+               return oB.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${kB}</code>${gB(ZB,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${GB}\0`
+             })), JB = NB(JB), JB = JB.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), JB = JB.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), JB = JB.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), JB = JB.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'),  … [truncated]
+               const ZB = "*" === IB,
+                 TB = [];
+               for (const vB of BB.split("\n")) {
+                 const BB = vB.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
+                 BB && TB.push({
```

#### 13. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L149-L151` → after: `L149-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L149-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L149-L151) · [Before (L149-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L149-L151)

```diff
-               let nB = "";
-               const dB = [],
-                 IB = zB ? "ol" : "ul";
+               let JB = "";
+               const oB = [],
+                 GB = ZB ? "ol" : "ul";
```

#### 14. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L153-L154` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L153-L154) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L153-L154)

```diff
-                   indent: NB,
-                   content: uB
+                   indent: vB,
+                   content: kB
```

#### 15. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L156-L158` → after: `L156-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L156-L158) · [Before (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L156-L158)

```diff
-                 of QB) {
-                 for (; dB.length > 0 && NB < dB[dB.length - 1];) nB += `</${IB}></li>`, dB.pop();
-                 (0 === dB.length || NB > dB[dB.length - 1]) && (dB.length > 0 && (nB = nB.replace(/<\/li>$/, "")), nB += `<${IB} class="DocsList">`, dB.push(NB)), nB += `<li class="DocsListItem">${uB}</li>`
+                 of TB) {
+                 for (; oB.length > 0 && vB < oB[oB.length - 1];) JB += `</${GB}></li>`, oB.pop();
+                 (0 === oB.length || vB > oB[oB.length - 1]) && (oB.length > 0 && (JB = JB.replace(/<\/li>$/, "")), JB += `<${GB} class="DocsList">`, oB.push(vB)), JB += `<li class="DocsListItem">${kB}</li>`
```

#### 16. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L160)

```diff
-               for (; dB.length > 0;) nB += `</${IB}>`, dB.pop(), dB.length > 0 && (nB += "</li>");
+               for (; oB.length > 0;) JB += `</${GB}>`, oB.pop(), oB.length > 0 && (JB += "</li>");
```

#### 17. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L163)

```diff
-             for (let IB = 0; IB < dB.length; IB++) nB = nB.replace(`\0PLACEHOLDER_${IB}\0`, dB[IB]);
+             for (let GB = 0; GB < oB.length; GB++) JB = JB.replace(`\0PLACEHOLDER_${GB}\0`, oB[GB]);
```

#### 18. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L170)

```diff
-           }(vB.id, vB.content, OB, cB ? FB : void 0) : ""), [vB, OB, cB, FB]);
+           }(KB.id, KB.content, SB, EB ? MB : void 0) : ""), [KB, SB, EB, MB]);
```

#### 19. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L179)

```diff
-             const NB = null !== (QB = null === (nB = IB.parentElement) || void 0 === nB || null === (dB = nB.querySelector("code")) || void 0 === dB ? void 0 : dB.textContent) && void 0 !== QB ? QB : "";
+             const vB = null !== (TB = null === (JB = GB.parentElement) || void 0 === JB || null === (oB = JB.querySelector("code")) || void 0 === oB ? void 0 : oB.textContent) && void 0 !== TB ? TB : "";
```

#### 20. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L220)

```diff
-             zB && zB === wB && (0, gB.e)(zB), BB !== fB ? (TB(!0), oB(BB), hB(0), DB.current && (DB.current.scrollTop = 0), cB && ZB(0)) : TB(!AB)
+             ZB && ZB === AB && (0, dB.f)(ZB), BB !== iB ? (LB(!0), pB(BB), RB(0), HB.current && (HB.current.scrollTop = 0), EB && mB(0)) : LB(!XB)
```

#### 21. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L235)

```diff
-             const QB = null !== (jB = null === (zB = HB.current) || void 0 === zB ? void 0 : zB.clientWidth) && void 0 !== jB ? jB : window.innerWidth,
+             const TB = null !== (IB = null === (ZB = aB.current) || void 0 === ZB ? void 0 : ZB.clientWidth) && void 0 !== IB ? IB : window.innerWidth,
```

#### 22. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L281)

```diff
-         return (0, sB.jsx)(LB.h, {
+         return (0, FB.jsx)(WB.f, {
```

#### 23. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L283-L284` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L283-L284) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L283-L284)

```diff
-           step: null !== (SB = null === aj || void 0 === aj ? void 0 : aj.pageStep) && void 0 !== SB ? SB : "docsPanel",
-           text: RB(null !== (MB = null === aj || void 0 === aj ? void 0 : aj.pageText) && void 0 !== MB ? MB : "codeEditor:tutorialDocsPanel"),
+           step: null !== (QB = null === nI || void 0 === nI ? void 0 : nI.pageStep) && void 0 !== QB ? QB : "docsPanel",
+           text: VB(null !== (sB = null === nI || void 0 === nI ? void 0 : nI.pageText) && void 0 !== sB ? sB : "codeEditor:tutorialDocsPanel"),
```

#### 24. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L298)

```diff
-               children: [(0, sB.jsx)(dB.d, {
+               children: [(0, FB.jsx)(oB.c, {
```

#### 25. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L324)

```diff
-                 }, BB.doc.id))) : nB.c.map((BB => {
+                 }, BB.doc.id))) : JB.b.map((BB => {
```

#### 26. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L338)

```diff
-                         children: (0, sB.jsx)(kB.c, {
+                         children: (0, FB.jsx)(yB.d, {
```

#### 27. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L343)

```diff
-                         children: (0, sB.jsx)(kB.c, {
+                         children: (0, FB.jsx)(yB.d, {
```

#### 28. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L350)

```diff
-                     children: [zB && (0, sB.jsx)(LB.h, {
+                     children: [ZB && (0, FB.jsx)(WB.f, {
```

#### 29. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L370)

```diff
-                 children: (0, sB.jsx)(GB.g, {
+                 children: (0, FB.jsx)(UB.e, {
```

#### 30. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/305.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/305.js#L373)

```diff
-                   children: (0, sB.jsx)(uB.f, {
+                   children: (0, FB.jsx)(kB.g, {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/306.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/306.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2)

#### 1. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L4)

```diff
-   41585: (BB, jB, zB) => {
+   41515: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L8-L13` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L8-L13) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L8-L13)

```diff
-     var QB = zB(4853),
-       nB = zB(41486),
-       dB = zB(41480),
-       IB = zB(36929),
-       NB = zB(36932),
-       uB = zB(36938);
+     var TB = ZB(4937),
+       JB = ZB(41417),
+       oB = ZB(41409),
+       GB = ZB(36878),
+       vB = ZB(36881),
+       kB = ZB(36895);
```

#### 3. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L24)

```diff
-       return aB((0, NB.C)(BB.name, "")).replace(/\/$/, "")
+       return nB((0, vB.s)(BB.name, "")).replace(/\/$/, "")
```

#### 4. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L41)

```diff
-         const BB = jB ? `${jB}/${QB}` : QB;
+         const BB = IB ? `${IB}/${TB}` : TB;
```

#### 5. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L48)

```diff
-         nB = await (0, uB.i)(BB, QB);
+         JB = await (0, kB.j)(BB, TB);
```

#### 6. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L57)

```diff
-         await (0, uB.D)(BB, `${QB}/${pB}`);
+         await (0, kB.E)(BB, `${TB}/${hB}`);
```

#### 7. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L63)

```diff
-         await (0, uB.D)(BB, `${QB}/${pB}`)
+         await (0, kB.E)(BB, `${TB}/${hB}`)
```

#### 8. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L74)

```diff
-       for (const QB of Object.values(IB.e)) jB[QB.specifier] = [`.${QB.typesVfsPath}`];
+       for (const TB of Object.values(GB.e)) IB[TB.specifier] = [`.${TB.typesVfsPath}`];
```

#### 9. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L77)

```diff
-         for (const BB of Object.keys(QB.files)) zB.push(aB((0, NB.C)(QB.name, BB)));
+         for (const BB of Object.keys(TB.files)) ZB.push(nB((0, vB.s)(TB.name, BB)));
```

#### 10. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L101)

```diff
-             nB = `${pB(jB)}/package.json`;
+             JB = `${hB(IB)}/package.json`;
```

#### 11. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L104-L105` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L104-L105) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L104-L105)

```diff
-             return (0, uB.L)(BB, aB((0, NB.C)(jB.name, QB)), nB)
-           })) : [], (0, uB.L)(BB, QB, jB.types), (0, uB.L)(BB, nB, sB(jB))]
+             return (0, kB.N)(BB, nB((0, vB.s)(IB.name, TB)), JB)
+           })) : [], (0, kB.N)(BB, TB, IB.types), (0, kB.N)(BB, JB, FB(IB))]
```

#### 12. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/306.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/306.js#L107)

```diff
-       await Promise.all([(0, uB.L)(BB, "node_modules/@bloxd/index.d.ts", QB.default), (0, uB.L)(BB, "node_modules/@bloxd/globals.d.ts", dB.e), (0, uB.L)(BB, "node_modules/@bloxd/lib.d.ts", nB.c), (0, uB.L)(BB, "node_modules/@bloxd/package.json", UB), (0, uB.L)(BB, "tsconfig.json" … [truncated]
+       await Promise.all([(0, kB.N)(BB, "node_modules/@bloxd/index.d.ts", TB.default), (0, kB.N)(BB, "node_modules/@bloxd/globals.d.ts", oB.d), (0, kB.N)(BB, "node_modules/@bloxd/lib.d.ts", JB.b), (0, kB.N)(BB, "node_modules/@bloxd/package.json", cB), (0, kB.N)(BB, "tsconfig.json" … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/307.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/307.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a)

#### 1. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/307.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/307.js#L4)

```diff
-   41638: (BB, jB, zB) => {
+   41568: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/307.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/307.js#L8-L10)

```diff
-     var QB = zB(39958),
-       nB = zB(41640),
-       dB = zB(3310);
+     var TB = ZB(39926),
+       JB = ZB(41575),
+       oB = ZB(3372);
```

#### 3. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/307.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/307.js#L14-L15)

```diff
-         const zB = (0, dB.j)(BB);
-         return zB ? new Blob([(0, dB.c)(zB.base64)], {
+         const ZB = (0, oB.h)(BB);
+         return ZB ? new Blob([(0, oB.d)(ZB.base64)], {
```

#### 4. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/307.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/307.js#L62)

```diff
-         "pending" === uB && (uB = "concluded"), BB && (QB.e.loadImage = NB)
+         "pending" === kB && (kB = "concluded"), BB && (TB.c.loadImage = vB)
```

#### 5. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L66` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/307.js#L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/307.js#L66)

```diff
-   41640: (BB, jB, zB) => {
+   41575: (BB, IB, ZB) => {
```

#### 6. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L68-L69` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/307.js#L68-L69) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/307.js#L68-L69)

```diff
-       b: () => QB.j,
-       c: () => QB.r
+       b: () => TB.f,
+       c: () => TB.l
```

#### 7. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/307.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/307.js#L71-L72)

```diff
-     var QB = zB(40108);
-     (0, QB.y)()
+     var TB = ZB(40110);
+     (0, TB.q)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/308.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/308.js` (409 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e)

#### 1. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L4)

```diff
-   41701: (BB, jB, zB) => {
+   41627: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L8-L9)

```diff
-     var QB = zB(40171),
-       nB = zB(41709);
+     var TB = ZB(40163),
+       JB = ZB(41631);
```

#### 3. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L13)

```diff
-         this.maxDepth = zB, this.GQB = [], this._maxBlockCapacity = jB || 64, this._selectionContent = new QB.e(1024), this._creationFunc = BB
+         this.maxDepth = ZB, this.tTB = [], this._maxBlockCapacity = IB || 64, this._selectionContent = new TB.c(1024), this._creationFunc = BB
```

#### 4. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L16)

```diff
-         nB.d._CreateBlocks(BB, jB, zB, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+         JB.e._CreateBlocks(BB, IB, ZB, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
```

#### 5. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L18)

```diff
-       IQB(BB) {
+       jTB(BB) {
```

#### 6. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L33)

```diff
-         return jB ? this._selectionContent.concat(this.GQB) : this._selectionContent.concatWithNoDuplicate(this.GQB), this._selectionContent
+         return IB ? this._selectionContent.concat(this.tTB) : this._selectionContent.concatWithNoDuplicate(this.tTB), this._selectionContent
```

#### 7. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L40)

```diff
-         return zB ? this._selectionContent.concat(this.GQB) : this._selectionContent.concatWithNoDuplicate(this.GQB), this._selectionContent
+         return ZB ? this._selectionContent.concat(this.tTB) : this._selectionContent.concatWithNoDuplicate(this.tTB), this._selectionContent
```

#### 8. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L47)

```diff
-         return this._selectionContent.concatWithNoDuplicate(this.GQB), this._selectionContent
+         return this._selectionContent.concatWithNoDuplicate(this.tTB), this._selectionContent
```

#### 9. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L51-L52` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L51-L52) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L51-L52)

```diff
-       const zB = BB.rV();
-       !BB.isBlocked && zB.boundingBox.intersectsMinMax(jB.pQB, jB.aQB) && jB.entries.push(BB)
+       const ZB = BB.qm();
+       !BB.isBlocked && ZB.boundingBox.intersectsMinMax(IB.XTB, IB.mTB) && IB.entries.push(BB)
```

#### 10. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L54)

```diff
-       BB.rV().boundingBox.intersectsMinMax(jB.pQB, jB.aQB) && jB.entries.push(BB)
+       BB.qm().boundingBox.intersectsMinMax(IB.XTB, IB.mTB) && IB.entries.push(BB)
```

#### 11. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L57)

```diff
-   41709: (BB, jB, zB) => {
+   41631: (BB, IB, ZB) => {
```

#### 12. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L59)

```diff
-       d: () => dB
+       e: () => oB
```

#### 13. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L61-L62` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L61-L62) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L61-L62)

```diff
-     var QB = zB(37171),
-       nB = zB(40412);
+     var TB = ZB(37120),
+       JB = ZB(40354);
```

#### 14. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L65)

```diff
-         this.entries = [], this.LQB = new Array, this._capacity = zB, this._depth = QB, this._maxDepth = nB, this._creationFunc = dB, this._minPoint = BB, this._maxPoint = jB, this.LQB.push(BB.clone()), this.LQB.push(jB.clone()), this.LQB.push(BB.clone()), this.LQB[2].x = jB.x, t … [truncated]
+         this.entries = [], this.bTB = new Array, this._capacity = ZB, this._depth = TB, this._maxDepth = JB, this._creationFunc = oB, this._minPoint = BB, this._maxPoint = IB, this.bTB.push(BB.clone()), this.bTB.push(IB.clone()), this.bTB.push(BB.clone()), this.bTB[2].x = IB.x, t … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L70)

```diff
-       get pQB() {
+       get XTB() {
```

#### 16. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L73)

```diff
-       get aQB() {
+       get mTB() {
```

#### 17. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L80)

```diff
-           } else this._creationFunc(BB, this), this.entries.length > this.Ep && this._depth < this._maxDepth && this.createInnerBlocks()
+           } else this._creationFunc(BB, this), this.entries.length > this.ah && this._depth < this._maxDepth && this.createInnerBlocks()
```

#### 18. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L99` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L99) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L99)

```diff
-         if (nB.e.IsInFrustum(this.LQB, BB)) {
+         if (JB.d.IsInFrustum(this.bTB, BB)) {
```

#### 19. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L110)

```diff
-         if (nB.e.IntersectsSphere(this._minPoint, this._maxPoint, BB, jB)) {
+         if (JB.d.IntersectsSphere(this._minPoint, this._maxPoint, BB, IB)) {
```

#### 20. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L136)

```diff
-         const aB = new QB.m((jB.x - BB.x) / 2, (jB.y - BB.y) / 2, (jB.z - BB.z) / 2);
+         const nB = new TB.s((IB.x - BB.x) / 2, (IB.y - BB.y) / 2, (IB.z - BB.z) / 2);
```

#### 21. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L148)

```diff
-   41714: (BB, jB, zB) => {
+   41638: (BB, IB, ZB) => {
```

#### 22. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L150)

```diff
-       d: () => aB
+       c: () => nB
```

#### 23. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L152-L158` → after: `L152-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L152-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L152-L158) · [Before (L152-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L152-L158)

```diff
-     var QB = zB(40156),
-       nB = zB(37171),
-       dB = zB(40539),
-       IB = zB(41659),
-       NB = zB(40247),
-       uB = zB(37197),
-       UB = zB(41701);
+     var TB = ZB(40148),
+       JB = ZB(37120),
+       oB = ZB(40488),
+       GB = ZB(41584),
+       vB = ZB(40215),
+       kB = ZB(37147),
+       cB = ZB(41627);
```

#### 24. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L161)

```diff
-         this.name = NB.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new IB.y(nB.m.Zero(), new nB.m(1, 1, 1)), (BB = BB || uB.c.LastCreatedScene) && (this.ny = BB, this.ny.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.ny.getActiveSubMeshCandidat … [truncated]
+         this.name = vB.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new GB.A(JB.s.Zero(), new JB.s(1, 1, 1)), (BB = BB || kB.e.LastCreatedScene) && (this.lg = BB, this.lg.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.lg.getActiveSubMeshCandidat … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L164-L165` → after: `L164-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L164-L165) · [Before (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L164-L165)

```diff
-         this.ny.onMeshRemovedObservable.add((BB => {
-           const jB = this.ny.selectionOctree;
+         this.lg.onMeshRemovedObservable.add((BB => {
+           const IB = this.lg.selectionOctree;
```

#### 26. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L167)

```diff
-             const zB = jB.GQB.indexOf(BB); - 1 !== zB && jB.GQB.splice(zB, 1)
+             const ZB = IB.tTB.indexOf(BB); - 1 !== ZB && IB.tTB.splice(ZB, 1)
```

#### 27. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L169-L171` → after: `L169-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L169-L171) · [Before (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L169-L171)

```diff
-         })), this.ny.onMeshImportedObservable.add((BB => {
-           const jB = this.ny.selectionOctree;
-           void 0 !== jB && null !== jB && jB.IQB(BB)
+         })), this.lg.onMeshImportedObservable.add((BB => {
+           const IB = this.lg.selectionOctree;
+           void 0 !== IB && null !== IB && IB.jTB(BB)
```

#### 28. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L175)

```diff
-         return this.ny.iQB?.select(this.ny.frustumPlanes) || this.ny._getDefaultMeshCandidates()
+         return this.lg.BJB?.select(this.lg.frustumPlanes) || this.lg._getDefaultMeshCandidates()
```

#### 29. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L179)

```diff
-           return BB._submeshesOctree.select(this.ny.frustumPlanes)
+           return BB._submeshesOctree.select(this.lg.frustumPlanes)
```

#### 30. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L181)

```diff
-         return this.ny._getDefaultSubMeshCandidates(BB)
+         return this.lg._getDefaultSubMeshCandidates(BB)
```

#### 31. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L185)

```diff
-           IB.y.TransformToRef(jB, BB.getWorldMatrix(), this._tempRay);
+           GB.A.TransformToRef(IB, BB.getWorldMatrix(), this._tempRay);
```

#### 32. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L188)

```diff
-         return this.ny._getDefaultSubMeshCandidates(BB)
+         return this.lg._getDefaultSubMeshCandidates(BB)
```

#### 33. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L195)

```diff
-         return this.ny._getDefaultSubMeshCandidates(BB)
+         return this.lg._getDefaultSubMeshCandidates(BB)
```

#### 34. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L201` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L201) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L201)

```diff
-     pB || (pB = !0, QB.g.prototype.createOrUpdateSelectionOctree = function() {
+     hB || (hB = !0, TB.e.prototype.createOrUpdateSelectionOctree = function() {
```

#### 35. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L204-L205` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L204-L205) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L204-L205)

```diff
-         zB = this._getComponent(NB.b.NAME_OCTREE);
-       zB || (zB = new aB(this), this.wzB(zB)), this.iQB || (this.iQB = new UB.e(UB.e.CreationFuncForMeshes, BB, jB));
+         ZB = this._getComponent(vB.c.NAME_OCTREE);
+       ZB || (ZB = new nB(this), this.yTB(ZB)), this.BJB || (this.BJB = new cB.e(cB.e.CreationFuncForMeshes, BB, IB));
```

#### 36. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L207-L208` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L207-L208) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L207-L208)

```diff
-       return this.iQB.update(QB.min, QB.max, this.meshes), this.iQB
-     }, Object.defineProperty(QB.g.prototype, "selectionOctree", {
+       return this.BJB.update(TB.min, TB.max, this.meshes), this.BJB
+     }, Object.defineProperty(TB.e.prototype, "selectionOctree", {
```

#### 37. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L210)

```diff
-         return this.iQB
+         return this.BJB
```

#### 38. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L214)

```diff
-     }), dB.e.prototype.createOrUpdateSubmeshesOctree = function() {
+     }), oB.b.prototype.createOrUpdateSubmeshesOctree = function() {
```

#### 39. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L217-L221` → after: `L217-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L217-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L217-L221) · [Before (L217-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L217-L221)

```diff
-       const zB = this.aY();
-       let QB = zB._getComponent(NB.b.NAME_OCTREE);
-       QB || (QB = new aB(zB), zB.wzB(QB)), this._submeshesOctree || (this._submeshesOctree = new UB.e(UB.e.CreationFuncForSubMeshes, BB, jB)), this.computeWorldMatrix(!0);
-       const nB = this.rV().boundingBox;
-       return this._submeshesOctree.update(nB.minimumWorld, nB.maximumWorld, this.cL), this._submeshesOctree
+       const ZB = this.JR();
+       let TB = ZB._getComponent(vB.c.NAME_OCTREE);
+       TB || (TB = new nB(ZB), ZB.yTB(TB)), this._submeshesOctree || (this._submeshesOctree = new cB.e(cB.e.CreationFuncForSubMeshes, BB, IB)), this.computeWorldMatrix(!0);
+       const JB = this.qm().boundingBox;
+       return this._submeshesOctree.update(JB.minimumWorld, JB.maximumWorld, this.EW), this._submeshesOctree
```

#### 40. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L224)

```diff
-   41659: (BB, jB, zB) => {
+   41584: (BB, IB, ZB) => {
```

#### 41. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L226-L228` → after: `L226-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L226-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L226-L229) · [Before (L226-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L226-L228)

```diff
-       e: () => HB,
-       f: () => mB,
-       j: () => JB,
+       A: () => hB,
+       c: () => aB,
+       d: () => gB,
+       h: () => NB,
```

#### 42. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L230-L231` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L231-L232) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L230-L231)

```diff
-       n: () => fB,
-       q: () => qB,
+       o: () => iB,
+       p: () => YB,
```

#### 43. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L233-L235` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L234-L235) · [Before (L233-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L233-L235)

```diff
-       t: () => iB,
-       x: () => EB,
-       y: () => pB
+       w: () => OB,
+       z: () => wB
```

#### 44. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L237-L243` → after: `L237-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L237-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L237-L243) · [Before (L237-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L237-L243)

```diff
-     var QB = zB(37178),
-       nB = zB(37171),
-       dB = zB(37186),
-       IB = zB(40396),
-       NB = zB(40202),
-       uB = zB(37197),
-       UB = zB(40276);
+     var TB = ZB(37129),
+       JB = ZB(37120),
+       oB = ZB(37131),
+       GB = ZB(40343),
+       vB = ZB(40185),
+       kB = ZB(37147),
+       cB = ZB(40239);
```

#### 45. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L250)

```diff
-           nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QB.c;
+           JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TB.d;
```

#### 46. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L258-L259` → after: `L258-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L258-L259) · [Before (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L258-L259)

```diff
-         const QB = pB._TmpVector3[0].U3(BB.x - zB, BB.y - zB, BB.z - zB),
-           nB = pB._TmpVector3[1].U3(jB.x + zB, jB.y + zB, jB.z + zB);
+         const TB = hB._TmpVector3[0].cBB(BB.x - ZB, BB.y - ZB, BB.z - ZB),
+           JB = hB._TmpVector3[1].cBB(IB.x + ZB, IB.y + ZB, IB.z + ZB);
```

#### 47. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L296-L297` → after: `L296-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L296-L297) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L296-L297)

```diff
-         jB.subtractToRef(BB, QB), zB.subtractToRef(BB, dB), nB.m.CrossToRef(this.direction, dB, NB);
-         const aB = nB.m.Dot(QB, NB);
+         IB.subtractToRef(BB, TB), ZB.subtractToRef(BB, oB), JB.s.CrossToRef(this.direction, oB, vB);
+         const nB = JB.s.Dot(TB, vB);
```

#### 48. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L301)

```diff
-         const sB = nB.m.Dot(uB, NB) * rB;
+         const FB = JB.s.Dot(kB, vB) * zB;
```

#### 49. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L303-L304)

```diff
-         nB.m.CrossToRef(uB, QB, UB);
-         const JB = nB.m.Dot(this.direction, UB) * rB;
+         JB.s.CrossToRef(kB, TB, cB);
+         const NB = JB.s.Dot(this.direction, cB) * zB;
```

#### 50. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L306-L307` → after: `L306-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L306-L307) · [Before (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L306-L307)

```diff
-         const mB = nB.m.Dot(dB, UB) * rB;
-         return mB > this.length || mB < 0 ? null : new IB.d(1 - sB - JB, sB, mB)
+         const gB = JB.s.Dot(oB, cB) * zB;
+         return gB > this.length || gB < 0 ? null : new GB.c(1 - FB - NB, FB, gB)
```

#### 51. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L311)

```diff
-         const zB = nB.m.Dot(BB.normal, this.direction);
+         const ZB = JB.s.Dot(BB.normal, this.direction);
```

#### 52. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L314)

```diff
-           const QB = nB.m.Dot(BB.normal, this.origin);
+           const TB = JB.s.Dot(BB.normal, this.origin);
```

#### 53. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L323)

```diff
-             return BB > 0 ? null : new nB.m(this.origin.x + this.direction.x * -BB, jB, this.origin.z + this.direction.z * -BB)
+             return BB > 0 ? null : new JB.s(this.origin.x + this.direction.x * -BB, IB, this.origin.z + this.direction.z * -BB)
```

#### 54. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L327)

```diff
-             return BB > 0 ? null : new nB.m(jB, this.origin.y + this.direction.y * -BB, this.origin.z + this.direction.z * -BB)
+             return BB > 0 ? null : new JB.s(IB, this.origin.y + this.direction.y * -BB, this.origin.z + this.direction.z * -BB)
```

#### 55. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L331` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L331) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L331)

```diff
-             return BB > 0 ? null : new nB.m(this.origin.x + this.direction.x * -BB, this.origin.y + this.direction.y * -BB, jB)
+             return BB > 0 ? null : new JB.s(this.origin.x + this.direction.x * -BB, this.origin.y + this.direction.y * -BB, IB)
```

#### 56. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L337)

```diff
-       lQB(BB, jB, zB) {
+       yJB(BB, IB, ZB) {
```

#### 57. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L341)

```diff
-         const NB = nB.h.Matrix[0];
+         const vB = JB.m.Matrix[0];
```

#### 58. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L347)

```diff
-           const nB = this.lQB(BB[QB], jB);
+           const JB = this.yJB(BB[TB], IB);
```

#### 59. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L357-L360` → after: `L357-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L357-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L357-L360) · [Before (L357-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L357-L360)

```diff
-           dB = nB.h.KJ[0],
-           IB = nB.h.KJ[1],
-           NB = nB.h.KJ[2],
-           uB = nB.h.KJ[3];
+           oB = JB.m.rN[0],
+           GB = JB.m.rN[1],
+           vB = JB.m.rN[2],
+           kB = JB.m.rN[3];
```

#### 60. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L362-L366` → after: `L362-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L362-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L362-L366) · [Before (L362-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L362-L366)

```diff
-         const UB = nB.m.Dot(dB, dB),
-           aB = nB.m.Dot(dB, NB),
-           rB = nB.m.Dot(NB, NB),
-           sB = nB.m.Dot(dB, uB),
-           JB = nB.m.Dot(NB, uB),
+         const cB = JB.s.Dot(oB, oB),
+           nB = JB.s.Dot(oB, vB),
+           zB = JB.s.Dot(vB, vB),
+           FB = JB.s.Dot(oB, kB),
+           NB = JB.s.Dot(vB, kB),
```

#### 61. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L370)

```diff
-         mB < pB._Smallnum ? (yB = 0, GB = 1, kB = JB, LB = rB) : (yB = aB * JB - rB * sB, kB = UB * JB - aB * sB, yB < 0 ? (yB = 0, kB = JB, LB = rB) : yB > GB && (yB = GB, kB = JB + aB, LB = rB)), kB < 0 ? (kB = 0, -sB < 0 ? yB = 0 : -sB > UB ? yB = GB : (yB = -sB, GB = UB)) : k … [truncated]
+         gB < hB._Smallnum ? (qB = 0, UB = 1, yB = NB, WB = zB) : (qB = nB * NB - zB * FB, yB = cB * NB - nB * FB, qB < 0 ? (qB = 0, yB = NB, WB = zB) : qB > UB && (qB = UB, yB = NB + nB, WB = zB)), yB < 0 ? (yB = 0, -FB < 0 ? qB = 0 : -FB > cB ? qB = UB : (qB = -FB, UB = cB)) : y … [truncated]
```

#### 62. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L373)

```diff
-           SB = nB.h.KJ[4];
+           QB = JB.m.rN[4];
```

#### 63. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L375)

```diff
-         const MB = nB.h.KJ[5];
+         const sB = JB.m.rN[5];
```

#### 64. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L377)

```diff
-         const EB = nB.h.KJ[6];
+         const wB = JB.m.rN[6];
```

#### 65. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L383-L384` → after: `L383-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L383-L384) · [Before (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L383-L384)

```diff
-           pB._RayDistant || (pB._RayDistant = pB.Zero()), pB._RayDistant.unprojectRayToRef(BB, jB, zB, QB, nB.c.IdentityReadOnly, IB, NB);
-           const uB = nB.h.Matrix[0];
+           hB._RayDistant || (hB._RayDistant = hB.Zero()), hB._RayDistant.unprojectRayToRef(BB, IB, ZB, TB, JB.b.IdentityReadOnly, GB, vB);
+           const kB = JB.m.Matrix[0];
```

#### 66. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L390)

```diff
-         return new pB(nB.m.Zero(), nB.m.Zero())
+         return new hB(JB.s.Zero(), JB.s.Zero())
```

#### 67. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L396-L397` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L396-L397) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L396-L397)

```diff
-         let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nB.c.IdentityReadOnly;
-         const QB = new pB(new nB.m(0, 0, 0), new nB.m(0, 0, 0));
+         let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JB.b.IdentityReadOnly;
+         const TB = new hB(new JB.s(0, 0, 0), new JB.s(0, 0, 0));
```

#### 68. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L401-L402` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L401-L402) · [Before (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L401-L402)

```diff
-         let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nB.c.IdentityReadOnly;
-         zB.origin.jH(BB);
+         let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JB.b.IdentityReadOnly;
+         ZB.origin.TY(BB);
```

#### 69. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L408)

```diff
-         const zB = new pB(new nB.m(0, 0, 0), new nB.m(0, 0, 0));
+         const ZB = new hB(new JB.s(0, 0, 0), new JB.s(0, 0, 0));
```

#### 70. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L412)

```diff
-         nB.m.TransformCoordinatesToRef(BB.origin, jB, zB.origin), nB.m.TransformNormalToRef(BB.direction, jB, zB.direction), zB.length = BB.length, zB.epsilon = BB.epsilon;
+         JB.s.TransformCoordinatesToRef(BB.origin, IB, ZB.origin), JB.s.TransformNormalToRef(BB.direction, IB, ZB.direction), ZB.length = BB.length, ZB.epsilon = BB.epsilon;
```

#### 71. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L422)

```diff
-         const UB = nB.h.Matrix[0];
+         const cB = JB.m.Matrix[0];
```

#### 72. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L424-L430` → after: `L424-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L424-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L424-L430) · [Before (L424-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L424-L430)

```diff
-         const aB = uB.c.LastCreatedEngine,
-           pB = nB.h.KJ[0];
-         pB.x = BB / zB * 2 - 1, pB.y = -(jB / QB * 2 - 1), pB.z = aB?.jQB ? 1 : aB?.isNDCHalfZRange ? 0 : -1;
-         const rB = nB.h.KJ[1].U3(pB.x, pB.y, 1 - 1e-8),
-           sB = nB.h.KJ[2],
-           JB = nB.h.KJ[3];
-         nB.m.TransformCoordinatesToRef(pB, UB, sB), nB.m.TransformCoordinatesToRef(rB, UB, JB), this.origin.jH(sB), JB.subtractToRef(sB, this.direction), this.direction.normalize()
+         const nB = kB.e.LastCreatedEngine,
+           hB = JB.m.rN[0];
+         hB.x = BB / ZB * 2 - 1, hB.y = -(IB / TB * 2 - 1), hB.z = nB?.iTB ? 1 : nB?.isNDCHalfZRange ? 0 : -1;
+         const zB = JB.m.rN[1].cBB(hB.x, hB.y, 1 - 1e-8),
+           FB = JB.m.rN[2],
+           NB = JB.m.rN[3];
+         JB.s.TransformCoordinatesToRef(hB, cB, FB), JB.s.TransformCoordinatesToRef(zB, cB, NB), this.origin.TY(FB), NB.subtractToRef(FB, this.direction), this.direction.normalize()
```

#### 73. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L443)

```diff
-       const UB = BB.wJ();
+       const cB = BB.PN();
```

#### 74. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L454)

```diff
-       return jB = jB * yB - rB, zB = zB * yB - (pB - sB - mB), dB.update(jB, zB, JB, mB, QB || nB.c.IdentityReadOnly, NB ? nB.c.IdentityReadOnly : IB.getViewMatrix(), IB.getProjectionMatrix(), uB), BB
+       return IB = IB * qB - zB, ZB = ZB * qB - (hB - FB - gB), oB.update(IB, ZB, NB, gB, TB || JB.b.IdentityReadOnly, vB ? JB.b.IdentityReadOnly : GB.getViewMatrix(), GB.getProjectionMatrix(), kB), BB
```

#### 75. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L463-L464` → after: `L463-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L463-L464) · [Before (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L463-L464)

```diff
-       if (!NB.d) return BB;
-       const IB = BB.wJ();
+       if (!vB.e) return BB;
+       const GB = BB.PN();
```

#### 76. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L474` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L474) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L474)

```diff
-         JB = nB.c.Identity(),
+         NB = JB.b.Identity(),
```

#### 77. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L485` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L485) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L485)

```diff
-       return uB && uB.hit ? !nB && null != BB && uB.distance >= BB.distance ? null : uB : null
+       return kB && kB.hit ? !JB && null != BB && kB.distance >= BB.distance ? null : kB : null
```

#### 78. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L507)

```diff
-       return dB.intersectsSphere(QB.fQB, nB) && dB.intersectsBox(QB.boundingBox, nB) ? dB : null
+       return oB.intersectsSphere(TB.ZJB, JB) && oB.intersectsBox(TB.boundingBox, JB) ? oB : null
```

#### 79. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L520)

```diff
-         } else if (!aB.isEnabled() || !aB.isVisible || !aB.Ny) continue;
+         } else if (!nB.isEnabled() || !nB.isVisible || !nB.tg) continue;
```

#### 80. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L523` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L523) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L523)

```diff
-         if (aB.hasThinInstances && aB.tjB) {
+         if (nB.hasThinInstances && nB.DIB) {
```

#### 81. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L532-L534` → after: `L532-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L532-L534) · [Before (L532-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L532-L534)

```diff
-               const BB = nB.h.Matrix[0],
-                 JB = nB.h.Matrix[1],
-                 yB = Math.min(aB.F_, pB.length >> 4);
+               const BB = JB.m.Matrix[0],
+                 NB = JB.m.Matrix[1],
+                 qB = Math.min(nB.B3, hB.length >> 4);
```

#### 82. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L537)

```diff
-                 nB.c.FromArrayToRef(pB, GB << 4, BB), BB.multiplyToRef(mB, JB);
+                 JB.b.FromArrayToRef(hB, UB << 4, BB), BB.multiplyToRef(gB, NB);
```

#### 83. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L550)

```diff
-       return uB || new NB.d
+       return kB || new vB.e
```

#### 84. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L554)

```diff
-       if (!NB.d) return null;
+       if (!vB.e) return null;
```

#### 85. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L564` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L564) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L564)

```diff
-         } else if (!aB.isEnabled() || !aB.isVisible || !aB.Ny) continue;
+         } else if (!nB.isEnabled() || !nB.isVisible || !nB.tg) continue;
```

#### 86. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L567)

```diff
-         if (aB.hasThinInstances && aB.tjB) {
+         if (nB.hasThinInstances && nB.DIB) {
```

#### 87. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L574-L576` → after: `L574-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L574-L576) · [Before (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L574-L576)

```diff
-               const uB = nB.h.Matrix[0],
-                 rB = nB.h.Matrix[1],
-                 JB = Math.min(aB.F_, NB.length >> 4);
+               const kB = JB.m.Matrix[0],
+                 zB = JB.m.Matrix[1],
+                 NB = Math.min(nB.B3, vB.length >> 4);
```

#### 88. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L579)

```diff
-                 nB.c.FromArrayToRef(NB, mB << 4, uB), uB.multiplyToRef(sB, rB);
+                 JB.b.FromArrayToRef(vB, gB << 4, kB), kB.multiplyToRef(FB, zB);
```

#### 89. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L596` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L596) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L596)

```diff
-       if (!NB.d) return null;
+       if (!vB.e) return null;
```

#### 90. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L598` → after: `L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L598) · [Before (L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L598)

```diff
-       return uB && (uB.ray = rB(BB, jB, zB, nB.c.Identity(), IB || null)), uB
+       return kB && (kB.ray = zB(BB, IB, ZB, JB.b.Identity(), GB || null)), kB
```

#### 91. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L603)

```diff
-       return uB && (uB.ray = rB(BB, jB, zB, nB.c.Identity(), IB || null)), uB
+       return kB && (kB.ray = zB(BB, IB, ZB, JB.b.Identity(), GB || null)), kB
```

#### 92. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L607)

```diff
-       const IB = tB(BB, (zB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = nB.c.Identity()), zB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = pB.Zero()), pB.TransformToRef(jB, BB._pickWithRayInverseMatrix … [truncated]
+       const GB = CB(BB, (ZB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = JB.b.Identity()), ZB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = hB.Zero()), hB.TransformToRef(IB, BB._pickWithRayInverseMatrix … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L616)

```diff
-       return SB(BB, (zB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = nB.c.Identity()), zB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = pB.Zero()), pB.TransformToRef(jB, BB._pickWithRayInverseMatrix, BB … [truncated]
+       return QB(BB, (ZB => (BB._pickWithRayInverseMatrix || (BB._pickWithRayInverseMatrix = JB.b.Identity()), ZB.invertToRef(BB._pickWithRayInverseMatrix), BB._cachedRayForTransform || (BB._cachedRayForTransform = hB.Zero()), hB.TransformToRef(IB, BB._pickWithRayInverseMatrix, BB … [truncated]
```

#### 94. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L623-L624` → after: `L623-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L623-L624) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L623-L624)

```diff
-       QB || (QB = BB.getWorldMatrix()), jB.length = zB, dB ? jB.origin.jH(dB) : jB.origin.jH(BB.position);
-       const IB = nB.h.KJ[2];
+       TB || (TB = BB.getWorldMatrix()), IB.length = ZB, oB ? IB.origin.TY(oB) : IB.origin.TY(BB.position);
+       const GB = JB.m.rN[2];
```

#### 95. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L626-L627` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L626-L627) · [Before (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L626-L627)

```diff
-       const NB = nB.h.KJ[3];
-       return nB.m.TransformNormalToRef(IB, QB, NB), nB.m.NormalizeToRef(NB, jB.direction), jB
+       const vB = JB.m.rN[3];
+       return JB.s.TransformNormalToRef(GB, TB, vB), JB.s.NormalizeToRef(vB, IB.direction), IB
```

#### 96. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L635` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L635) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L635)

```diff
-         return oB(this, new pB(nB.m.Zero(), nB.m.Zero(), BB), BB, jB, zB)
+         return pB(this, new hB(JB.s.Zero(), JB.s.Zero(), BB), BB, IB, ZB)
```

#### 97. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L642)

```diff
-     pB._TmpVector3 = (0, dB.c)(6, nB.m.Zero), pB._RayDistant = pB.Zero(), pB._Smallnum = 1e-8, pB._Rayl = 1e9
+     hB._TmpVector3 = (0, oB.b)(6, JB.s.Zero), hB._RayDistant = hB.Zero(), hB._Smallnum = 1e-8, hB._Rayl = 1e9
```

#### 98. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L644)

```diff
-   41651: (BB, jB, zB) => {
+   41582: (BB, IB, ZB) => {
```

#### 99. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L646)

```diff
-       c: () => dB.y
+       e: () => oB.A
```

#### 100. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L648-L650` → after: `L648-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L648-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L648-L650) · [Before (L648-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L648-L650)

```diff
-     var QB = zB(40156),
-       nB = zB(40301),
-       dB = zB(41659);
+     var TB = ZB(40148),
+       JB = ZB(40269),
+       oB = ZB(41584);
```

#### 101. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L652)

```diff
-     IB || (IB = !0, (0, dB.e)(QB.g, nB.b), QB.g.prototype.createPickingRayToRef = function(BB, jB, zB, QB, nB) {
+     GB || (GB = !0, (0, oB.c)(TB.e, JB.c), TB.e.prototype.createPickingRayToRef = function(BB, IB, ZB, TB, JB) {
```

#### 102. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L656-L660` → after: `L656-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L656-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L656-L660) · [Before (L656-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L656-L660)

```diff
-     }, QB.g.prototype.createPickingRayInCameraSpace = function(BB, jB, zB) {
-       return (0, dB.j)(this, BB, jB, zB)
-     }, QB.g.prototype.createPickingRayInCameraSpaceToRef = function(BB, jB, zB, QB) {
-       return (0, dB.f)(this, BB, jB, zB, QB)
-     }, QB.g.prototype.pickWithBoundingInfo = function(BB, jB, zB, QB, nB) {
+     }, TB.e.prototype.createPickingRayInCameraSpace = function(BB, IB, ZB) {
+       return (0, oB.h)(this, BB, IB, ZB)
+     }, TB.e.prototype.createPickingRayInCameraSpaceToRef = function(BB, IB, ZB, TB) {
+       return (0, oB.d)(this, BB, IB, ZB, TB)
+     }, TB.e.prototype.pickWithBoundingInfo = function(BB, IB, ZB, TB, JB) {
```

#### 103. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L662)

```diff
-     }, QB.g.prototype.zs = function(BB, jB, zB, QB, nB, IB) {
+     }, TB.e.prototype.TF = function(BB, IB, ZB, TB, JB, GB) {
```

#### 104. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L664-L670` → after: `L664-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L664-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L664-L670) · [Before (L664-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L664-L670)

```diff
-       return (0, dB.x)(this, BB, jB, zB, QB, nB, IB, NB)
-     }, QB.g.prototype.pickWithRay = function(BB, jB, zB, QB) {
-       return (0, dB.t)(this, BB, jB, zB, QB)
-     }, QB.g.prototype.multiPick = function(BB, jB, zB, QB, nB) {
-       return (0, dB.q)(this, BB, jB, zB, QB, nB)
-     }, QB.g.prototype.multiPickWithRay = function(BB, jB, zB) {
-       return (0, dB.n)(this, BB, jB, zB)
+       return (0, oB.z)(this, BB, IB, ZB, TB, JB, GB, vB)
+     }, TB.e.prototype.pickWithRay = function(BB, IB, ZB, TB) {
+       return (0, oB.w)(this, BB, IB, ZB, TB)
+     }, TB.e.prototype.multiPick = function(BB, IB, ZB, TB, JB) {
+       return (0, oB.p)(this, BB, IB, ZB, TB, JB)
+     }, TB.e.prototype.multiPickWithRay = function(BB, IB, ZB) {
+       return (0, oB.o)(this, BB, IB, ZB)
```

#### 105. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L673)

```diff
-   41663: (BB, jB, zB) => {
+   41590: (BB, IB, ZB) => {
```

#### 106. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L677-L683` → after: `L677-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L677-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L677-L683) · [Before (L677-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L677-L683)

```diff
-     var QB = zB(40066),
-       nB = zB(40068),
-       dB = zB(37171),
-       IB = zB(40344),
-       NB = zB(41668),
-       uB = zB(40306),
-       UB = zB(37222);
+     var TB = ZB(40061),
+       JB = ZB(40065),
+       oB = ZB(37120),
+       GB = ZB(40310),
+       vB = ZB(41597),
+       kB = ZB(40272),
+       cB = ZB(37170);
```

#### 107. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L686` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L686) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L686)

```diff
-         let jB, zB, uB, UB, aB, pB, rB, sB, JB = NB.b,
+         let IB, ZB, kB, cB, nB, hB, zB, FB, NB = vB.d,
```

#### 108. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L738` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L738) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L738)

```diff
-             super(BB, zB, nB), this._shadowFrustumSize = ((0, QB.g)(this, mB), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, QB.g)(this, yB, !0), this.autoCalcShadowZBounds = ((0, QB.g)(this, kB), (0, QB.g)(this, GB, !1)), this._orthoLeft = ((0, QB.g)(this, LB), ( … [truncated]
+             super(BB, ZB, JB), this._shadowFrustumSize = ((0, TB.l)(this, gB), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, TB.l)(this, qB, !0), this.autoCalcShadowZBounds = ((0, TB.l)(this, yB), (0, TB.l)(this, UB, !1)), this._orthoLeft = ((0, TB.l)(this, WB), ( … [truncated]
```

#### 109. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L750-L751` → after: `L750-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L750-L751) · [Before (L750-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L750-L751)

```diff
-             const jB = this.aY().activeCamera;
-             dB.c.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : jB ? jB.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : jB ? jB.maxZ : 1e4, BB, this.aY().wJ().isNDCHalfZRange)
+             const IB = this.JR().activeCamera;
+             oB.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : IB ? IB.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : IB ? IB.maxZ : 1e4, BB, this.JR().PN().isNDCHalfZRange)
```

#### 110. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L754)

```diff
-             const QB = this.aY().activeCamera;
+             const TB = this.JR().activeCamera;
```

#### 111. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L756` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L756) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L756)

```diff
-               const BB = dB.m.Zero();
+               const BB = oB.s.Zero();
```

#### 112. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L763-L764` → after: `L763-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L763-L764) · [Before (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L763-L764)

```diff
-                 const uB = NB.rV().boundingBox;
-                 for (let zB = 0; zB < uB.vectorsWorld.length; zB++) dB.m.TransformCoordinatesToRef(uB.vectorsWorld[zB], jB, BB), BB.x < this._orthoLeft && (this._orthoLeft = BB.x), BB.y < this._orthoBottom && (this._orthoBottom = BB.y), BB.x > this._orthoRight && (this._orthoRigh … [truncated]
+                 const kB = vB.qm().boundingBox;
+                 for (let ZB = 0; ZB < kB.vectorsWorld.length; ZB++) oB.s.TransformCoordinatesToRef(kB.vectorsWorld[ZB], IB, BB), BB.x < this._orthoLeft && (this._orthoLeft = BB.x), BB.y < this._orthoBottom && (this._orthoBottom = BB.y), BB.x > this._orthoRight && (this._orthoRigh … [truncated]
```

#### 113. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L772-L773` → after: `L772-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L772-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L772-L773) · [Before (L772-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L772-L773)

```diff
-               UB = this.aY().wJ().jQB;
-             dB.c.OrthoOffCenterLHToRef(this._orthoLeft - nB * this.shadowOrthoScale, this._orthoRight + nB * this.shadowOrthoScale, this._orthoBottom - IB * this.shadowOrthoScale, this._orthoTop + IB * this.shadowOrthoScale, UB ? uB : NB, UB ? NB : uB, BB, this.aY().wJ().isNDCHal … [truncated]
+               cB = this.JR().PN().iTB;
+             oB.b.OrthoOffCenterLHToRef(this._orthoLeft - JB * this.shadowOrthoScale, this._orthoRight + JB * this.shadowOrthoScale, this._orthoBottom - GB * this.shadowOrthoScale, this._orthoTop + GB * this.shadowOrthoScale, cB ? kB : vB, cB ? vB : kB, BB, this.JR().PN().isNDCHal … [truncated]
```

#### 114. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L785-L786` → after: `L785-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L785-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L785-L786) · [Before (L785-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L785-L786)

```diff
-             const jB = this._scene.wJ();
-             return !jB.jQB && jB.isNDCHalfZRange ? 0 : 1
+             const IB = this._scene.PN();
+             return !IB.iTB && IB.isNDCHalfZRange ? 0 : 1
```

#### 115. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L789-L790` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L789-L790) · [Before (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L789-L790)

```diff
-             const jB = this._scene.wJ();
-             return jB.jQB && jB.isNDCHalfZRange ? 0 : 1
+             const IB = this._scene.PN();
+             return IB.iTB && IB.isNDCHalfZRange ? 0 : 1
```

#### 116. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L797` → after: `L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L797) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L797)

```diff
-           jB = [(0, nB.A)()], zB = [(0, nB.A)()], uB = [(0, nB.A)()], UB = [(0, nB.A)()], aB = [(0, nB.A)("orthoLeft")], pB = [(0, nB.A)("orthoRight")], rB = [(0, nB.A)("orthoTop")], sB = [(0, nB.A)("orthoBottom")], (0, QB.e)(BB, null, jB, {
+           IB = [(0, JB.C)()], ZB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], nB = [(0, JB.C)("orthoLeft")], hB = [(0, JB.C)("orthoRight")], zB = [(0, JB.C)("orthoTop")], FB = [(0, JB.C)("orthoBottom")], (0, TB.j)(BB, null, IB, {
```

#### 117. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L807` → after: `L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L807) · [Before (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L807)

```diff
-           }, null, mB), (0, QB.e)(BB, null, zB, {
+           }, null, gB), (0, TB.j)(BB, null, ZB, {
```

#### 118. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L817)

```diff
-           }, null, mB), (0, QB.e)(null, null, uB, {
+           }, null, gB), (0, TB.j)(null, null, kB, {
```

#### 119. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L830` → after: `L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L830) · [Before (L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L830)

```diff
-           }, yB, kB), (0, QB.e)(null, null, UB, {
+           }, qB, yB), (0, TB.j)(null, null, cB, {
```

#### 120. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L843` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L843) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L843)

```diff
-           }, GB, LB), (0, QB.e)(null, null, aB, {
+           }, UB, WB), (0, TB.j)(null, null, nB, {
```

#### 121. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L856` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L856) · [Before (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L856)

```diff
-           }, gB, tB), (0, QB.e)(null, null, pB, {
+           }, dB, CB), (0, TB.j)(null, null, hB, {
```

#### 122. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L869)

```diff
-           }, SB, MB), (0, QB.e)(null, null, rB, {
+           }, QB, sB), (0, TB.j)(null, null, zB, {
```

#### 123. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L882` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L882) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L882)

```diff
-           }, EB, iB), (0, QB.e)(null, null, sB, {
+           }, wB, OB), (0, TB.j)(null, null, FB, {
```

#### 124. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L904` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L904) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L904)

```diff
-     pB || (pB = !0, uB.c.AddNodeConstructor("Light_Type_1", ((BB, jB) => () => new aB(BB, dB.m.Zero(), jB))), (0, UB.d)("BABYLON.DirectionalLight", aB))
+     hB || (hB = !0, kB.e.AddNodeConstructor("Light_Type_1", ((BB, IB) => () => new nB(BB, oB.s.Zero(), IB))), (0, cB.i)("BABYLON.DirectionalLight", nB))
```

#### 125. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L906)

```diff
-   41679: (BB, jB, zB) => {
+   41607: (BB, IB, ZB) => {
```

#### 126. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L908)

```diff
-       e: () => xj
+       d: () => tI
```

#### 127. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L910-L920` → after: `L910-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L910-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L910-L920) · [Before (L910-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L910-L920)

```diff
-     var QB = zB(38811),
-       nB = zB(37202),
-       dB = zB(37171),
-       IB = zB(40211),
-       NB = zB(41682),
-       uB = zB(37197),
-       UB = zB(40373),
-       aB = zB(37379),
-       pB = zB(38813),
-       rB = zB(38780),
-       sB = zB(37208);
+     var TB = ZB(38754),
+       JB = ZB(37153),
+       oB = ZB(37120),
+       GB = ZB(40188),
+       vB = ZB(41610),
+       kB = ZB(37147),
+       cB = ZB(40333),
+       nB = ZB(37311),
+       hB = ZB(38756),
+       zB = ZB(38714),
+       FB = ZB(37158);
```

#### 128. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L923)

```diff
-         this.direction1 = new dB.m(0, 1, 0), this.direction2 = new dB.m(0, 1, 0)
+         this.direction1 = new oB.s(0, 1, 0), this.direction2 = new oB.s(0, 1, 0)
```

#### 129. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L929` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L929) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L929)

```diff
-         QB ? jB.U3(nB, IB, NB) : dB.m.TransformNormalFromFloatsToRef(nB, IB, NB, BB, jB)
+         TB ? IB.cBB(JB, GB, vB) : oB.s.TransformNormalFromFloatsToRef(JB, GB, vB, BB, IB)
```

#### 130. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L932` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L932) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L932)

```diff
-         QB ? jB.U3(0, 0, 0) : dB.m.TransformCoordinatesFromFloatsToRef(0, 0, 0, BB, jB)
+         TB ? IB.cBB(0, 0, 0) : oB.s.TransformCoordinatesFromFloatsToRef(0, 0, 0, BB, IB)
```

#### 131. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L936` → after: `L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L936) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L936)

```diff
-         return rB.e.DeepCopy(this, BB), BB
+         return zB.b.DeepCopy(this, BB), BB
```

#### 132. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L952` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L952) · [Before (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L952)

```diff
-         return BB.type = this.getClassName(), BB.direction1 = this.direction1.nQB(), BB.direction2 = this.direction2.nQB(), BB
+         return BB.type = this.getClassName(), BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB
```

#### 133. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L955` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L955) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L955)

```diff
-         dB.m.FromArrayToRef(BB.direction1, 0, this.direction1), dB.m.FromArrayToRef(BB.direction2, 0, this.direction2)
+         oB.s.FromArrayToRef(BB.direction1, 0, this.direction1), oB.s.FromArrayToRef(BB.direction2, 0, this.direction2)
```

#### 134. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L970)

```diff
-         nB.x += IB, nB.y += NB, nB.z += uB, nB.normalize(), QB ? jB.jH(nB) : dB.m.TransformNormalFromFloatsToRef(nB.x, nB.y, nB.z, BB, jB)
+         JB.x += GB, JB.y += vB, JB.z += kB, JB.normalize(), TB ? IB.TY(JB) : oB.s.TransformNormalFromFloatsToRef(JB.x, JB.y, JB.z, BB, IB)
```

#### 135. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L980` → after: `L980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L980) · [Before (L980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L980)

```diff
-         QB ? jB.U3(UB, Math.abs(aB), pB) : dB.m.TransformCoordinatesFromFloatsToRef(UB, Math.abs(aB), pB, BB, jB)
+         TB ? IB.cBB(cB, Math.abs(nB), hB) : oB.s.TransformCoordinatesFromFloatsToRef(cB, Math.abs(nB), hB, BB, IB)
```

#### 136. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L984` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L984) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L984)

```diff
-         return rB.e.DeepCopy(this, BB), BB
+         return zB.b.DeepCopy(this, BB), BB
```

#### 137. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1018` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1018) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1018)

```diff
-         nB.x += IB, nB.y += NB, nB.z += uB, nB.normalize(), QB ? jB.jH(nB) : dB.m.TransformNormalFromFloatsToRef(nB.x, nB.y, nB.z, BB, jB)
+         JB.x += GB, JB.y += vB, JB.z += kB, JB.normalize(), TB ? IB.TY(JB) : oB.s.TransformNormalFromFloatsToRef(JB.x, JB.y, JB.z, BB, IB)
```

#### 138. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1028)

```diff
-         QB ? jB.U3(UB, aB, pB) : dB.m.TransformCoordinatesFromFloatsToRef(UB, aB, pB, BB, jB)
+         TB ? IB.cBB(cB, nB, hB) : oB.s.TransformCoordinatesFromFloatsToRef(cB, nB, hB, BB, IB)
```

#### 139. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1032` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1032) · [Before (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1032)

```diff
-         return rB.e.DeepCopy(this, BB), BB
+         return zB.b.DeepCopy(this, BB), BB
```

#### 140. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1057-L1058` → after: `L1057-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1057-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1057-L1058) · [Before (L1057-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1057-L1058)

```diff
-           jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new dB.m(0, 1, 0),
-           zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0);
+           IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oB.s(0, 1, 0),
+           ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0);
```

#### 141. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1065` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1065) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1065)

```diff
-         QB ? jB.U3(nB, IB, NB) : dB.m.TransformNormalFromFloatsToRef(nB, IB, NB, BB, jB)
+         TB ? IB.cBB(JB, GB, vB) : oB.s.TransformNormalFromFloatsToRef(JB, GB, vB, BB, IB)
```

#### 142. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1069` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1069) · [Before (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1069)

```diff
-         return rB.e.DeepCopy(this, BB), BB
+         return zB.b.DeepCopy(this, BB), BB
```

#### 143. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1085` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1085) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1085)

```diff
-         return BB.direction1 = this.direction1.nQB(), BB.direction2 = this.direction2.nQB(), BB
+         return BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB
```

#### 144. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1088)

```diff
-         super.parse(BB), dB.m.FromArrayToRef(BB.direction1, 0, this.direction1), dB.m.FromArrayToRef(BB.direction2, 0, this.direction2)
+         super.parse(BB), oB.s.FromArrayToRef(BB.direction1, 0, this.direction1), oB.s.FromArrayToRef(BB.direction2, 0, this.direction2)
```

#### 145. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1091` → after: `L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1091) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1091)

```diff
-     var GB = zB(38773);
+     var UB = ZB(38712);
```

#### 146. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1119` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1119) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1119)

```diff
-         nB.x += IB, nB.y += NB, nB.z += uB, nB.normalize(), QB ? jB.jH(nB) : dB.m.TransformNormalFromFloatsToRef(nB.x, nB.y, nB.z, BB, jB)
+         JB.x += GB, JB.y += vB, JB.z += kB, JB.normalize(), TB ? IB.TY(JB) : oB.s.TransformNormalFromFloatsToRef(JB.x, JB.y, JB.z, BB, IB)
```

#### 147. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1131` → after: `L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1131) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1131)

```diff
-         dB.m.TransformCoordinatesFromFloatsToRef(uB, aB, UB, BB, jB)
+         oB.s.TransformCoordinatesFromFloatsToRef(kB, nB, cB, BB, IB)
```

#### 148. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1135` → after: `L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1135) · [Before (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1135)

```diff
-         return rB.e.DeepCopy(this, BB), BB
+         return zB.b.DeepCopy(this, BB), BB
```

#### 149. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1162-L1163` → after: `L1162-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1162-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1162-L1163) · [Before (L1162-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1162-L1163)

```diff
-           zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0),
-           QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dB.m(0, 1, 0);
+           ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0),
+           TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oB.s(0, 1, 0);
```

#### 150. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1170)

```diff
-         QB ? jB.U3(nB, IB, NB) : dB.m.TransformNormalFromFloatsToRef(nB, IB, NB, BB, jB)
+         TB ? IB.cBB(JB, GB, vB) : oB.s.TransformNormalFromFloatsToRef(JB, GB, vB, BB, IB)
```

#### 151. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1174` → after: `L1174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1174) · [Before (L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1174)

```diff
-         return rB.e.DeepCopy(this, BB), BB
+         return zB.b.DeepCopy(this, BB), BB
```

#### 152. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1190` → after: `L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1190) · [Before (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1190)

```diff
-         return BB.direction1 = this.direction1.nQB(), BB.direction2 = this.direction2.nQB(), BB
+         return BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB
```

#### 153. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1193` → after: `L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1193) · [Before (L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1193)

```diff
-         super.parse(BB), dB.m.FromArrayToRef(BB.direction1, 0, this.direction1), dB.m.FromArrayToRef(BB.direction2, 0, this.direction2)
+         super.parse(BB), oB.s.FromArrayToRef(BB.direction1, 0, this.direction1), oB.s.FromArrayToRef(BB.direction2, 0, this.direction2)
```

#### 154. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1201` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1201) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1201)

```diff
-         this._mesh !== BB && (this._mesh = BB, BB ? (this._indices = BB.dQB(), this._positions = BB.getVerticesData(IB.l.PositionKind), this._normals = BB.getVerticesData(IB.l.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
+         this._mesh !== BB && (this._mesh = BB, BB ? (this._indices = BB.MTB(), this._positions = BB.getVerticesData(GB.i.PositionKind), this._normals = BB.getVerticesData(GB.i.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
```

#### 155. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1205` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1205) · [Before (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1205)

```diff
-         this._indices = null, this._positions = null, this._normals = null, this._storedNormal = dB.m.Zero(), this._mesh = null, this.direction1 = new dB.m(0, 1, 0), this.direction2 = new dB.m(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = BB
+         this._indices = null, this._positions = null, this._normals = null, this._storedNormal = oB.s.Zero(), this._mesh = null, this.direction1 = new oB.s(0, 1, 0), this.direction2 = new oB.s(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = BB
```

#### 156. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1208` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1208) · [Before (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1208)

```diff
-         if (this.useMeshNormalsForDirection && this._normals) return void dB.m.TransformNormalToRef(this._storedNormal, BB, jB);
+         if (this.useMeshNormalsForDirection && this._normals) return void oB.s.TransformNormalToRef(this._storedNormal, BB, IB);
```

#### 157. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1212` → after: `L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1212) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1212)

```diff
-         QB ? jB.U3(nB, IB, NB) : dB.m.TransformNormalFromFloatsToRef(nB, IB, NB, BB, jB)
+         TB ? IB.cBB(JB, GB, vB) : oB.s.TransformNormalFromFloatsToRef(JB, GB, vB, BB, IB)
```

#### 158. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1223-L1227` → after: `L1223-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1223-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1223-L1227) · [Before (L1223-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1223-L1227)

```diff
-           rB = dB.h.KJ[0],
-           sB = dB.h.KJ[1],
-           JB = dB.h.KJ[2],
-           mB = dB.h.KJ[3];
-         dB.m.FromArrayToRef(this._positions, 3 * UB, rB), dB.m.FromArrayToRef(this._positions, 3 * aB, sB), dB.m.FromArrayToRef(this._positions, 3 * pB, JB), mB.x = IB * rB.x + NB * sB.x + uB * JB.x, mB.y = IB * rB.y + NB * sB.y + uB * JB.y, mB.z = IB * rB.z + NB * sB.z + uB * JB … [truncated]
+           zB = oB.m.rN[0],
+           FB = oB.m.rN[1],
+           NB = oB.m.rN[2],
+           gB = oB.m.rN[3];
+         oB.s.FromArrayToRef(this._positions, 3 * cB, zB), oB.s.FromArrayToRef(this._positions, 3 * nB, FB), oB.s.FromArrayToRef(this._positions, 3 * hB, NB), gB.x = GB * zB.x + vB * FB.x + kB * NB.x, gB.y = GB * zB.y + vB * FB.y + kB * NB.y, gB.z = GB * zB.z + vB * FB.z + kB * NB … [truncated]
```

#### 159. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1231)

```diff
-         return rB.e.DeepCopy(this, BB), BB
+         return zB.b.DeepCopy(this, BB), BB
```

#### 160. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1247` → after: `L1247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1247) · [Before (L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1247)

```diff
-         return BB.type = this.getClassName(), BB.direction1 = this.direction1.nQB(), BB.direction2 = this.direction2.nQB(), BB.meshId = this.mesh?.id, BB.useMeshNormalsForDirection = this.useMeshNormalsForDirection, BB
+         return BB.type = this.getClassName(), BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB.meshId = this.mesh?.id, BB.useMeshNormalsForDirection = this.useMeshNormalsForDirection, BB
```

#### 161. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1250` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1250) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1250)

```diff
-         dB.m.FromArrayToRef(BB.direction1, 0, this.direction1), dB.m.FromArrayToRef(BB.direction2, 0, this.direction2), BB.meshId && jB && (this.mesh = jB.getLastMeshById(BB.meshId)), this.useMeshNormalsForDirection = BB.useMeshNormalsForDirection
+         oB.s.FromArrayToRef(BB.direction1, 0, this.direction1), oB.s.FromArrayToRef(BB.direction2, 0, this.direction2), BB.meshId && IB && (this.mesh = IB.getLastMeshById(BB.meshId)), this.useMeshNormalsForDirection = BB.useMeshNormalsForDirection
```

#### 162. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1294` → after: `L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1294) · [Before (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1294)

```diff
-         this._useLogarithmicDepth = BB && this.aY().wJ().getCaps().fragmentDepthSupported
+         this._useLogarithmicDepth = BB && this.JR().PN().getCaps().fragmentDepthSupported
```

#### 163. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1363)

```diff
-         return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : dB.m.Zero()
+         return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : oB.s.Zero()
```

#### 164. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1369` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1369) · [Before (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1369)

```diff
-         return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : dB.m.Zero()
+         return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : oB.s.Zero()
```

#### 165. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1375` → after: `L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1375) · [Before (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1375)

```diff
-         return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : dB.m.Zero()
+         return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : oB.s.Zero()
```

#### 166. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1381` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1381) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1381)

```diff
-         return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : dB.m.Zero()
+         return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : oB.s.Zero()
```

#### 167. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1409` → after: `L1409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1409) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1409)

```diff
-         const dB = new QB.f(jB, zB, nB);
+         const oB = new TB.j(IB, ZB, JB);
```

#### 168. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1436` → after: `L1436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1436) · [Before (L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1436)

```diff
-         this.animations = [], this.renderingGroupId = 0, this.emitter = dB.m.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, t … [truncated]
+         this.animations = [], this.renderingGroupId = 0, this.emitter = oB.s.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, t … [truncated]
```

#### 169. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1460-L1461` → after: `L1460-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1460-L1461) · [Before (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1460-L1461)

```diff
-             jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new dB.m(0, 1, 0),
-             zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0);
+             IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oB.s(0, 1, 0),
+             ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0);
```

#### 170. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1463` → after: `L1463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1463) · [Before (L1463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1463)

```diff
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new dB.m(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0));
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oB.s(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0));
```

#### 171. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1472)

```diff
-           return new GB.g(BB, jB, zB, QB)
+           return new UB.d(BB, IB, ZB, TB)
```

#### 172. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1481-L1484` → after: `L1481-L1484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1481-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1481-L1484) · [Before (L1481-L1484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1481-L1484)

```diff
-             QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dB.m(0, 1, 0),
-             nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new dB.m(0, 1, 0);
-           return new GB.d(BB, jB, zB, QB, nB)
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n … [truncated]
+             TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oB.s(0, 1, 0),
+             JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new oB.s(0, 1, 0);
+           return new UB.b(BB, IB, ZB, TB, JB)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n … [truncated]
```

#### 173. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1499-L1500` → after: `L1499-L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1499-L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1499-L1500) · [Before (L1499-L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1499-L1500)

```diff
-             zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0),
-             QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dB.m(0, 1, 0);
+             ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0),
+             TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oB.s(0, 1, 0);
```

#### 174. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1502` → after: `L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1502) · [Before (L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1502)

```diff
-         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new dB.m(0, 1, 0), arguments.length > 3 && void 0 !== argum … [truncated]
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new oB.s(0, 1, 0), arguments.length > 3 && void 0 !== argum … [truncated]
```

#### 175. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1519)

```diff
-         this.attachedSubEmitters = null, this.currentColor1 = new aB.g(0, 0, 0, 0), this.currentColor2 = new aB.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVeloci … [truncated]
+         this.attachedSubEmitters = null, this.currentColor1 = new nB.g(0, 0, 0, 0), this.currentColor2 = new nB.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVeloci … [truncated]
```

#### 176. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1527` → after: `L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1527) · [Before (L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1527)

```diff
-         this.particleSystem = BB, this.position = dB.m.Zero(), this.direction = dB.m.Zero(), this.color = new aB.g(0, 0, 0, 0), this.colorStep = new aB.g(0, 0, 0, 0), this.initialColor = new aB.g(0, 0, 0, 0), this.colorDead = new aB.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, … [truncated]
+         this.particleSystem = BB, this.position = oB.s.Zero(), this.direction = oB.s.Zero(), this.color = new nB.g(0, 0, 0, 0), this.colorStep = new nB.g(0, 0, 0, 0), this.initialColor = new nB.g(0, 0, 0, 0), this.colorDead = new nB.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, … [truncated]
```

#### 177. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1543-L1544` → after: `L1543-L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1543-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1543-L1544) · [Before (L1543-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1543-L1544)

```diff
-           if (jB.position.jH(this.position), BB.inheritDirection) {
-             const BB = dB.h.KJ[0];
+           if (IB.position.TY(this.position), BB.inheritDirection) {
+             const BB = oB.m.rN[0];
```

#### 178. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1548` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1548) · [Before (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1548)

```diff
-           BB.particleSystem.emitter.jH(this.position)
+           BB.particleSystem.emitter.TY(this.position)
```

#### 179. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1550` → after: `L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1550) · [Before (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1550)

```diff
-         this.direction.scaleToRef(BB.inheritedVelocityAmount / 2, dB.h.KJ[0]), BB.particleSystem._inheritedVelocityOffset.jH(dB.h.KJ[0])
+         this.direction.scaleToRef(BB.inheritedVelocityAmount / 2, oB.m.rN[0]), BB.particleSystem._inheritedVelocityOffset.TY(oB.m.rN[0])
```

#### 180. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1560` → after: `L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1560) · [Before (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1560)

```diff
-         BB.position.jH(this.position), this._properties.initialDirection ? BB._properties.initialDirection ? BB._properties.initialDirection.jH(this._properties.initialDirection) : BB._properties.initialDirection = this._properties.initialDirection.clone() : BB._properties.initia … [truncated]
+         BB.position.TY(this.position), this._properties.initialDirection ? BB._properties.initialDirection ? BB._properties.initialDirection.TY(this._properties.initialDirection) : BB._properties.initialDirection = this._properties.initialDirection.clone() : BB._properties.initia … [truncated]
```

#### 181. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1564` → after: `L1564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1564) · [Before (L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1564)

```diff
-     var iB = zB(41191);
+     var OB = ZB(41124);
```

#### 182. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1600` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1600) · [Before (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1600)

```diff
-         if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget  … [truncated]
+         if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget  … [truncated]
```

#### 183. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1603-L1604` → after: `L1603-L1604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1603-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1603-L1604) · [Before (L1603-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1603-L1604)

```diff
-             cQ: this._getCorrectLoopMode()
-           }, this._animation.dataType === iB.e.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = dB.c.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
+             AT: this._getCorrectLoopMode()
+           }, this._animation.dataType === OB.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = oB.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
```

#### 184. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1611` → after: `L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1611) · [Before (L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1611)

```diff
-         if (this.WC instanceof Array) {
+         if (this.J7 instanceof Array) {
```

#### 185. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1613` → after: `L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1613) · [Before (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1613)

```diff
-           for (const jB of this.WC) this._preparePath(jB, BB), this._getOriginalValues(BB), BB++;
+           for (const IB of this.J7) this._preparePath(IB, BB), this._getOriginalValues(BB), BB++;
```

#### 186. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1615` → after: `L1615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1615) · [Before (L1615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1615)

```diff
-         } else this._preparePath(this.WC), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
+         } else this._preparePath(this.J7), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
```

#### 187. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1628` → after: `L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1628) · [Before (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1628)

```diff
-             if (QB = QB[jB], void 0 === QB) throw new Error(`Invalid property (${jB}) in property path (${zB.join(".")})`)
+             if (TB = TB[IB], void 0 === TB) throw new Error(`Invalid property (${IB}) in property path (${ZB.join(".")})`)
```

#### 188. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1632` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1632) · [Before (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1632)

```diff
-         if (void 0 === this._activeTargets[jB][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${zB.join(".")})`)
+         if (void 0 === this._activeTargets[IB][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${ZB.join(".")})`)
```

#### 189. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1639` → after: `L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1639) · [Before (L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1639)

```diff
-           if (this.WC instanceof Array) {
+           if (this.J7 instanceof Array) {
```

#### 190. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1641-L1642` → after: `L1641-L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1641-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1641-L1642) · [Before (L1641-L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1641-L1642)

```diff
-             for (const jB of this.WC) void 0 !== this._originalValue[BB] && this._setValue(jB, this._activeTargets[BB], this._originalValue[BB], -1, BB), BB++
-           } else void 0 !== this._originalValue[0] && this._setValue(this.WC, this._directTarget, this._originalValue[0], -1, 0);
+             for (const IB of this.J7) void 0 !== this._originalValue[BB] && this._setValue(IB, this._activeTargets[BB], this._originalValue[BB], -1, BB), BB++
+           } else void 0 !== this._originalValue[0] && this._setValue(this.J7, this._directTarget, this._originalValue[0], -1, 0);
```

#### 191. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1655-L1656` → after: `L1655-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1655-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1655-L1656) · [Before (L1655-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1655-L1656)

```diff
-           for (let zB = 0; zB < this.WC.length; zB++) {
-             const QB = this.WC[zB];
+           for (let ZB = 0; ZB < this.J7.length; ZB++) {
+             const TB = this.J7[ZB];
```

#### 192. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1658` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1658) · [Before (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1658)

```diff
-           } else this._setValue(this.WC, this._directTarget, BB, jB, 0)
+           } else this._setValue(this.J7, this._directTarget, BB, IB, 0)
```

#### 193. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1663` → after: `L1663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1663) · [Before (L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1663)

```diff
-         if (iB.e.InheritOriginalValueFromActiveAnimations) {
+         if (OB.b.InheritOriginalValueFromActiveAnimations) {
```

#### 194. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1697-L1698` → after: `L1697-L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1697-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1697-L1698) · [Before (L1697-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1697-L1698)

```diff
-             Dy: !1
-           }), uB.runtimeAnimation = this, uB.target = BB, uB.weight = QB, uB.additive = this.isAdditive, uB.Dy = !1, this._currentActiveTarget = jB, this._weight = QB, this._enableBlending && this._blendingFactor <= 1) {
+             Fq: !1
+           }), kB.runtimeAnimation = this, kB.target = BB, kB.weight = TB, kB.additive = this.isAdditive, kB.Fq = !1, this._currentActiveTarget = IB, this._weight = TB, this._enableBlending && this._blendingFactor <= 1) {
```

#### 195. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1703` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1703) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1703)

```diff
-           this._originalBlendValue.m ? iB.e.AllowMatrixDecomposeForInterpolation ? this._currentValue ? dB.c.DecomposeLerpToRef(this._originalBlendValue, zB, this._blendingFactor, this._currentValue) : this._currentValue = dB.c.DecomposeLerp(this._originalBlendValue, zB, this._bl … [truncated]
+           this._originalBlendValue.m ? OB.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? oB.b.DecomposeLerpToRef(this._originalBlendValue, ZB, this._blendingFactor, this._currentValue) : this._currentValue = oB.b.DecomposeLerp(this._originalBlendValue, ZB, this._bl … [truncated]
```

#### 196. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1706` → after: `L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1706) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1706)

```diff
-         } else uB.blendingFactor = 1, this._currentValue ? this._currentValue.jH ? this._currentValue.jH(zB) : this._currentValue = zB : this._currentValue = zB?.clone ? zB.clone() : zB; - 1 !== QB ? this._registerTargetForLateAnimationBinding(this, this._originalValue[nB]) : thi … [truncated]
+         } else kB.blendingFactor = 1, this._currentValue ? this._currentValue.TY ? this._currentValue.TY(ZB) : this._currentValue = ZB : this._currentValue = ZB?.clone ? ZB.clone() : ZB; - 1 !== TB ? this._registerTargetForLateAnimationBinding(this, this._originalValue[JB]) : thi … [truncated]
```

#### 197. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1709-L1710` → after: `L1709-L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1709-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1709-L1710) · [Before (L1709-L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1709-L1710)

```diff
-         if (this.WC && this.WC.animationPropertiesOverride) {
-           return "MorphTarget" === this.WC.getClassName?.() && null == this.WC._animationPropertiesOverride ? this._animation.cQ : this.WC.animationPropertiesOverride.cQ
+         if (this.J7 && this.J7.animationPropertiesOverride) {
+           return "MorphTarget" === this.J7.getClassName?.() && null == this.J7._animationPropertiesOverride ? this._animation.AT : this.J7.animationPropertiesOverride.AT
```

#### 198. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1712` → after: `L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1712) · [Before (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1712)

```diff
-         return this._animation.cQ
+         return this._animation.AT
```

#### 199. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1744` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1744) · [Before (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1744)

```diff
-           const JB = QB && this._animationState.cQ === iB.e.ANIMATIONLOOPMODE_YOYO;
+           const NB = TB && this._animationState.AT === OB.b.ANIMATIONLOOPMODE_YOYO;
```

#### 200. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1754` → after: `L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1754) · [Before (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1754)

```diff
-           else if (this._animationState.cQ !== iB.e.ANIMATIONLOOPMODE_CYCLE) {
+           else if (this._animationState.AT !== OB.b.ANIMATIONLOOPMODE_CYCLE) {
```

#### 201. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1757` → after: `L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1757) · [Before (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1757)

```diff
-               this._animationState.repeatCount = 0, this._animationState.cQ = iB.e.ANIMATIONLOOPMODE_CYCLE;
+               this._animationState.repeatCount = 0, this._animationState.AT = OB.b.ANIMATIONLOOPMODE_CYCLE;
```

#### 202. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1760-L1761` → after: `L1760-L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1760-L1761) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1760-L1761)

```diff
-               switch (this._animationState.cQ = this._getCorrectLoopMode(), IB.dataType) {
-                 case iB.e.ANIMATIONTYPE_FLOAT:
+               switch (this._animationState.AT = this._getCorrectLoopMode(), GB.dataType) {
+                 case OB.b.ANIMATIONTYPE_FLOAT:
```

#### 203. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1764-L1769` → after: `L1764-L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1764-L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1764-L1769) · [Before (L1764-L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1764-L1769)

```diff
-                 case iB.e.ANIMATIONTYPE_QUATERNION:
-                 case iB.e.ANIMATIONTYPE_VECTOR3:
-                 case iB.e.ANIMATIONTYPE_VECTOR2:
-                 case iB.e.ANIMATIONTYPE_SIZE:
-                 case iB.e.ANIMATIONTYPE_COLOR3:
-                 case iB.e.ANIMATIONTYPE_COLOR4:
+                 case OB.b.ANIMATIONTYPE_QUATERNION:
+                 case OB.b.ANIMATIONTYPE_VECTOR3:
+                 case OB.b.ANIMATIONTYPE_VECTOR2:
+                 case OB.b.ANIMATIONTYPE_SIZE:
+                 case OB.b.ANIMATIONTYPE_COLOR3:
+                 case OB.b.ANIMATIONTYPE_COLOR4:
```

#### 204. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1777)

```diff
-             case iB.e.ANIMATIONTYPE_FLOAT:
+             case OB.b.ANIMATIONTYPE_FLOAT:
```

#### 205. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1780-L1781` → after: `L1780-L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1780-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1780-L1781) · [Before (L1780-L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1780-L1781)

```diff
-             case iB.e.ANIMATIONTYPE_QUATERNION:
-               dB = iB.m;
+             case OB.b.ANIMATIONTYPE_QUATERNION:
+               oB = OB.j;
```

#### 206. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1783-L1784` → after: `L1783-L1784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1783-L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1783-L1784) · [Before (L1783-L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1783-L1784)

```diff
-             case iB.e.ANIMATIONTYPE_VECTOR3:
-               dB = iB.t;
+             case OB.b.ANIMATIONTYPE_VECTOR3:
+               oB = OB.s;
```

#### 207. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1786-L1787` → after: `L1786-L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1786-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1786-L1787) · [Before (L1786-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1786-L1787)

```diff
-             case iB.e.ANIMATIONTYPE_VECTOR2:
-               dB = iB.q;
+             case OB.b.ANIMATIONTYPE_VECTOR2:
+               oB = OB.p;
```

#### 208. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1789-L1790` → after: `L1789-L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1789-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1789-L1790) · [Before (L1789-L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1789-L1790)

```diff
-             case iB.e.ANIMATIONTYPE_SIZE:
-               dB = iB.o;
+             case OB.b.ANIMATIONTYPE_SIZE:
+               oB = OB.m;
```

#### 209. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1792-L1793` → after: `L1792-L1793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1792-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1792-L1793) · [Before (L1792-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1792-L1793)

```diff
-             case iB.e.ANIMATIONTYPE_COLOR3:
-               dB = iB.i;
+             case OB.b.ANIMATIONTYPE_COLOR3:
+               oB = OB.h;
```

#### 210. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1795-L1796` → after: `L1795-L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1795-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1795-L1796) · [Before (L1795-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1795-L1796)

```diff
-             case iB.e.ANIMATIONTYPE_COLOR4:
-               dB = iB.k
+             case OB.b.ANIMATIONTYPE_COLOR4:
+               oB = OB.i
```

#### 211. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1815)

```diff
-           } else uB = NB > 0 && jB > zB || NB < 0 && jB < zB ? UB && 0 !== pB ? zB + NB % pB : jB : UB && 0 !== pB ? jB + NB % pB : zB;
+           } else kB = vB > 0 && IB > ZB || vB < 0 && IB < ZB ? cB && 0 !== hB ? ZB + vB % hB : IB : cB && 0 !== hB ? IB + vB % hB : ZB;
```

#### 212. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1822` → after: `L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1822) · [Before (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1822)

```diff
-           else if (UB) yB = JB ? uB === jB && NB === zB ? pB : uB - jB : NB;
+           else if (cB) qB = NB ? kB === IB && vB === ZB ? hB : kB - IB : vB;
```

#### 213. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1827` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1827) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1827)

```diff
-           this._playbackFrames = yB, this._playbackProgress = this._animationState.cQ === iB.e.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? pB : yB
+           this._playbackFrames = qB, this._playbackProgress = this._animationState.AT === OB.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? hB : qB
```

#### 214. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1838)

```diff
-     var fB = zB(39986);
+     var iB = ZB(39959);
```

#### 215. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1874` → after: `L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1874) · [Before (L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1874)

```diff
-         this.target = jB, this.fromFrame = zB, this.toFrame = QB, this.loopAnimation = dB, this.onAnimationEnd = NB, this.onAnimationLoop = UB, this.isAdditive = aB, this.playOrder = pB, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._ … [truncated]
+         this.target = IB, this.fromFrame = ZB, this.toFrame = TB, this.loopAnimation = oB, this.onAnimationEnd = vB, this.onAnimationLoop = cB, this.isAdditive = nB, this.playOrder = hB, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._ … [truncated]
```

#### 216. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1933` → after: `L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1933) · [Before (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1933)

```diff
-         return this.qL
+         return this.iW
```

#### 217. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1936` → after: `L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1936) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1936)

```diff
-         this.qL || (this.qL = !0)
+         this.iW || (this.iW = !0)
```

#### 218. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1939)

```diff
-         this.qL = !1
+         this.iW = !1
```

#### 219. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1975)

```diff
-         if (this.qL) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = BB), !0;
+         if (this.iW) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = BB), !0;
```

#### 220. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L1997-L1999` → after: `L1997-L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR1997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L1997-L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L1997-L1999) · [Before (L1997-L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L1997-L1999)

```diff
-       const zB = dB.h.KJ[0],
-         QB = dB.h.KJ[1],
-         nB = dB.h.Quaternion[0];
+       const ZB = oB.m.rN[0],
+         TB = oB.m.rN[1],
+         JB = oB.m.Quaternion[0];
```

#### 221. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2018-L2021` → after: `L2018-L2021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2018-L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2018-L2021) · [Before (L2018-L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2018-L2021)

```diff
-           const uB = dB.h.KJ[2],
-             aB = dB.h.KJ[3],
-             pB = dB.h.Quaternion[1];
-           IB.currentValue.decompose(aB, pB, uB), aB.scaleAndAddToRef(UB, QB), pB.scaleAndAddToRef(dB.d.Dot(nB, pB) > 0 ? UB : -UB, nB), uB.scaleAndAddToRef(UB, zB)
+           const kB = oB.m.rN[2],
+             nB = oB.m.rN[3],
+             hB = oB.m.Quaternion[1];
+           GB.currentValue.decompose(nB, hB, kB), nB.scaleAndAddToRef(cB, TB), hB.scaleAndAddToRef(oB.f.Dot(JB, hB) > 0 ? cB : -cB, JB), kB.scaleAndAddToRef(cB, ZB)
```

#### 222. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2028-L2031` → after: `L2028-L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2028-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2028-L2031) · [Before (L2028-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2028-L2031)

```diff
-         const IB = dB.h.KJ[2],
-           NB = dB.h.KJ[3],
-           uB = dB.h.Quaternion[1];
-         jB.currentValue.decompose(NB, uB, IB), NB.multiplyToRef(QB, NB), dB.m.LerpToRef(QB, NB, jB.weight, QB), nB.multiplyToRef(uB, uB), dB.d.SlerpToRef(nB, uB, jB.weight, nB), IB.scaleAndAddToRef(jB.weight, zB)
+         const GB = oB.m.rN[2],
+           vB = oB.m.rN[3],
+           kB = oB.m.Quaternion[1];
+         IB.currentValue.decompose(vB, kB, GB), vB.multiplyToRef(TB, vB), oB.s.LerpToRef(TB, vB, IB.weight, TB), JB.multiplyToRef(kB, kB), oB.f.SlerpToRef(JB, kB, IB.weight, JB), GB.scaleAndAddToRef(IB.weight, ZB)
```

#### 223. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2033-L2034` → after: `L2033-L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2033-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2033-L2034) · [Before (L2033-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2033-L2034)

```diff
-       const pB = NB ? NB._animationState.workValue : dB.h.Matrix[0].clone();
-       return dB.c.ComposeToRef(QB, nB, zB, pB), pB
+       const hB = vB ? vB._animationState.workValue : oB.m.Matrix[0].clone();
+       return oB.b.ComposeToRef(TB, JB, ZB, hB), hB
```

#### 224. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2042` → after: `L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2042) · [Before (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2042)

```diff
-       if (0 === BB.totalWeight && BB.totalAdditiveWeight > 0) nB.jH(QB);
+       if (0 === BB.totalWeight && BB.totalAdditiveWeight > 0) JB.TY(TB);
```

#### 225. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2044)

```diff
-         if (dB.d.SlerpToRef(QB, zB.currentValue, Math.min(1, BB.totalWeight), nB), 0 === BB.totalAdditiveWeight) return nB
+         if (oB.f.SlerpToRef(TB, ZB.currentValue, Math.min(1, BB.totalWeight), JB), 0 === BB.totalAdditiveWeight) return JB
```

#### 226. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2051` → after: `L2051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2051) · [Before (L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2051)

```diff
-           if (2 === BB.animations.length && (dB.d.SlerpToRef(BB.animations[0].currentValue, BB.animations[1].currentValue, BB.animations[1].weight / BB.totalWeight, jB), 0 === BB.totalAdditiveWeight)) return jB;
+           if (2 === BB.animations.length && (oB.f.SlerpToRef(BB.animations[0].currentValue, BB.animations[1].currentValue, BB.animations[1].weight / BB.totalWeight, IB), 0 === BB.totalAdditiveWeight)) return IB;
```

#### 227. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2059` → after: `L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2059) · [Before (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2059)

```diff
-         for (let BB = 0; BB < zB.length;) BB ? (uB += IB[BB], dB.d.SlerpToRef(nB, zB[BB], IB[BB] / uB, nB), BB++) : (dB.d.SlerpToRef(zB[BB], zB[BB + 1], IB[BB + 1] / (IB[BB] + IB[BB + 1]), jB), nB = jB, uB = IB[BB] + IB[BB + 1], BB += 2)
+         for (let BB = 0; BB < ZB.length;) BB ? (kB += GB[BB], oB.f.SlerpToRef(JB, ZB[BB], GB[BB] / kB, JB), BB++) : (oB.f.SlerpToRef(ZB[BB], ZB[BB + 1], GB[BB + 1] / (GB[BB] + GB[BB + 1]), IB), JB = IB, kB = GB[BB] + GB[BB + 1], BB += 2)
```

#### 228. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2063` → after: `L2063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2063) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2063)

```diff
-         0 !== jB.weight && (nB.multiplyToRef(jB.currentValue, dB.h.Quaternion[0]), dB.d.SlerpToRef(nB, dB.h.Quaternion[0], jB.weight, nB))
+         0 !== IB.weight && (JB.multiplyToRef(IB.currentValue, oB.m.Quaternion[0]), oB.f.SlerpToRef(JB, oB.m.Quaternion[0], IB.weight, JB))
```

#### 229. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2072` → after: `L2072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2072) · [Before (L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2072)

```diff
-         0 === this.animations.length && (this.animations.push(new iB.e(this.name, "_matrix", BB.animations[0].framePerSecond, iB.e.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
+         0 === this.animations.length && (this.animations.push(new OB.b(this.name, "_matrix", BB.animations[0].framePerSecond, OB.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
```

#### 230. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2097` → after: `L2097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2097) · [Before (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2097)

```diff
-           BB.Dy && -1 === BB.weight || (BB.Dy = !0, jB[dB] = jB[QB], jB[QB] = BB, QB++)
+           BB.Fq && -1 === BB.weight || (BB.Fq = !0, IB[oB] = IB[TB], IB[TB] = BB, TB++)
```

#### 231. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2104` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2104) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2104)

```diff
-         const nB = fB.e.Now;
+         const JB = iB.c.Now;
```

#### 232. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2127` → after: `L2127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2127) · [Before (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2127)

```diff
-                 const IB = iB.e.AllowMatrixDecomposeForInterpolation && nB.m;
+                 const GB = OB.b.AllowMatrixDecomposeForInterpolation && JB.m;
```

#### 233. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2130` → after: `L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2130) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2130)

```diff
-                 else if (void 0 !== nB.w) NB = DB(jB, NB || dB.d.Identity());
+                 else if (void 0 !== JB.w) vB = HB(IB, vB || oB.f.Identity());
```

#### 234. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2134-L2135` → after: `L2134-L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2134-L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2134-L2135) · [Before (L2134-L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2134-L2135)

```diff
-                   const dB = QB && QB._animationState.cQ === iB.e.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
-                   if (jB.totalWeight < 1) NB = dB ? nB.clone ? nB.clone() : nB : QB && nB.scale ? nB.scale(1 - jB.totalWeight) : QB ? nB * (1 - jB.totalWeight) : nB.clone ? nB.clone() : nB;
+                   const oB = TB && TB._animationState.AT === OB.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
+                   if (IB.totalWeight < 1) vB = oB ? JB.clone ? JB.clone() : JB : TB && JB.scale ? JB.scale(1 - IB.totalWeight) : TB ? JB * (1 - IB.totalWeight) : JB.clone ? JB.clone() : JB;
```

#### 235. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2139)

```diff
-                     NB = 1 !== IB ? QB.currentValue.scale ? QB.currentValue.scale(IB) : QB.currentValue * IB : (jB.animations.length > 1 || jB.additiveAnimations.length > 0) && QB.currentValue.clone ? QB.currentValue.clone() : QB.currentValue, dB && (NB.addToRef ? NB.addToRef(nB, … [truncated]
+                     vB = 1 !== GB ? TB.currentValue.scale ? TB.currentValue.scale(GB) : TB.currentValue * GB : (IB.animations.length > 1 || IB.additiveAnimations.length > 0) && TB.currentValue.clone ? TB.currentValue.clone() : TB.currentValue, oB && (vB.addToRef ? vB.addToRef(JB, … [truncated]
```

#### 236. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2238-L2241` → after: `L2238-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2238-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2238-L2241) · [Before (L2238-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2238-L2241)

```diff
-     var YB, VB = zB(37186),
-       hB = zB(40306),
-       XB = zB(39965);
-     class ZB extends hB.c {
+     var jB, PB = ZB(37131),
+       RB = ZB(40272),
+       rB = ZB(39931);
+     class mB extends RB.e {
```

#### 237. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2246` → after: `L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2246) · [Before (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2246)

```diff
-         (BB.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.jH(BB), this._markAsDirtyAndDecompose())
+         (BB.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.TY(BB), this._markAsDirtyAndDecompose())
```

#### 238. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2254` → after: `L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2254) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2254)

```diff
-         super(BB, jB.aY(), !1), this.name = BB, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTr … [truncated]
+         super(BB, IB.JR(), !1), this.name = BB, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTr … [truncated]
```

#### 239. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2283` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2283) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2283)

```diff
-           this._parentNode = BB, this.parent && this.parent.children.push(this), jB && this._updateAbsoluteBindMatrices(), this.DjB()
+           this._parentNode = BB, this.parent && this.parent.children.push(this), IB && this._updateAbsoluteBindMatrices(), this.GZB()
```

#### 240. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2302)

```diff
-         this._restMatrix.jH(BB)
+         this._restMatrix.TY(BB)
```

#### 241. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2311` → after: `L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2311) · [Before (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2311)

```diff
-         this.l_(BB)
+         this.T6(BB)
```

#### 242. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2324-L2327` → after: `L2324-L2327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2324-L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2324-L2327) · [Before (L2324-L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2324-L2327)

```diff
-           const BB = dB.h.KJ[0],
-             jB = dB.h.Quaternion[0],
-             zB = dB.h.KJ[1];
-           this.getRestMatrix().decompose(BB, jB, zB), this._linkedTransformNode.position.jH(zB), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? dB.d.Identity(), this._linkedTransformNode.rotationQuaternion.jH(jB), this._linkedTransf … [truncated]
+           const BB = oB.m.rN[0],
+             IB = oB.m.Quaternion[0],
+             ZB = oB.m.rN[1];
+           this.getRestMatrix().decompose(BB, IB, ZB), this._linkedTransformNode.position.TY(ZB), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? oB.f.Identity(), this._linkedTransformNode.rotationQuaternion.TY(IB), this._linkedTransf … [truncated]
```

#### 243. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2349` → after: `L2349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2349) · [Before (L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2349)

```diff
-         return this._decompose(), this.xBB
+         return this._decompose(), this.UIB
```

#### 244. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2352` → after: `L2352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2352) · [Before (L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2352)

```diff
-         this._decompose(), this.xBB.jH(BB), this._markAsDirtyAndCompose()
+         this._decompose(), this.UIB.TY(BB), this._markAsDirtyAndCompose()
```

#### 245. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2376` → after: `L2376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2376) · [Before (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2376)

```diff
-         this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = dB.m.Zero(), this._localRotation = dB.d.Zero(), this.xBB = dB.m.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.xBB))
+         this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = oB.s.Zero(), this._localRotation = oB.f.Zero(), this.UIB = oB.s.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.UIB))
```

#### 246. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2379` → after: `L2379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2379) · [Before (L2379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2379)

```diff
-         this._needToCompose && (this._localScaling ? (this._needToCompose = !1, dB.c.ComposeToRef(this._localScaling, this._localRotation, this.xBB, this._localMatrix)) : this._needToCompose = !1)
+         this._needToCompose && (this._localScaling ? (this._needToCompose = !1, oB.b.ComposeToRef(this._localScaling, this._localRotation, this.UIB, this._localMatrix)) : this._needToCompose = !1)
```

#### 247. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2384` → after: `L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2384) · [Before (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2384)

```diff
-         this._bindMatrix.jH(BB), jB && this._updateAbsoluteBindMatrices(), zB ? this._matrix = BB : this.DjB()
+         this._bindMatrix.TY(BB), IB && this._updateAbsoluteBindMatrices(), ZB ? this._matrix = BB : this.GZB()
```

#### 248. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2388` → after: `L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2388) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2388)

```diff
-         if (BB || (BB = this._bindMatrix), this.parent ? BB.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.jH(BB), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), jB)
+         if (BB || (BB = this._bindMatrix), this.parent ? BB.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.TY(BB), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), IB)
```

#### 249. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2392` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2392) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2392)

```diff
-       DjB() {
+       GZB() {
```

#### 250. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2396` → after: `L2396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2396) · [Before (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2396)

```diff
-         this.DjB(), this._needToCompose = !0
+         this.GZB(), this._needToCompose = !0
```

#### 251. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2399` → after: `L2399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2399) · [Before (L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2399)

```diff
-         this.DjB(), this._needToDecompose = !0
+         this.GZB(), this._needToDecompose = !0
```

#### 252. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2410` → after: `L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2410) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2410)

```diff
-           this.parent ? (jB.jH(this.parent.getAbsoluteMatrix()), zB && jB.multiplyToRef(zB.getWorldMatrix(), jB)) : dB.c.IdentityToRef(jB), QB && jB.setTranslationFromFloats(0, 0, 0), jB.invert(), dB.m.TransformCoordinatesToRef(BB, jB, IB), QB ? (nB.addAtIndex(12, IB.x), nB.addAt … [truncated]
+           this.parent ? (IB.TY(this.parent.getAbsoluteMatrix()), ZB && IB.multiplyToRef(ZB.getWorldMatrix(), IB)) : oB.b.IdentityToRef(IB), TB && IB.setTranslationFromFloats(0, 0, 0), IB.invert(), oB.s.TransformCoordinatesToRef(BB, IB, GB), TB ? (JB.addAtIndex(12, GB.x), JB.addAt … [truncated]
```

#### 253. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2431` → after: `L2431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2431) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2431)

```diff
-         dB.c.ScalingToRef(BB, jB, zB, IB), IB.multiplyToRef(nB, nB), IB.invert();
+         oB.b.ScalingToRef(BB, IB, ZB, GB), GB.multiplyToRef(JB, JB), GB.invert();
```

#### 254. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2440` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2440) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2440)

```diff
-         this._decompose(), this._localScaling.jH(BB), this._markAsDirtyAndCompose()
+         this._decompose(), this._localScaling.TY(BB), this._markAsDirtyAndCompose()
```

#### 255. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2446` → after: `L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2446) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2446)

```diff
-         this._decompose(), BB.jH(this._localScaling)
+         this._decompose(), BB.TY(this._localScaling)
```

#### 256. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2453` → after: `L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2453) · [Before (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2453)

```diff
-           return dB.d.RotationYawPitchRollToRef(BB, jB, zB, IB), void this.setRotationQuaternion(IB, QB, nB)
+           return oB.f.RotationYawPitchRollToRef(BB, IB, ZB, GB), void this.setRotationQuaternion(GB, TB, JB)
```

#### 257. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2458` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2458)

```diff
-         dB.c.RotationYawPitchRollToRef(BB, jB, zB, NB), IB.multiplyToRef(NB, NB), this._rotateWithMatrix(NB, QB, nB)
+         oB.b.RotationYawPitchRollToRef(BB, IB, ZB, vB), GB.multiplyToRef(vB, vB), this._rotateWithMatrix(vB, TB, JB)
```

#### 258. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2464` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2464) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2464)

```diff
-         nB.setTranslationFromFloats(0, 0, 0), dB.c.RotationAxisToRef(BB, jB, nB), this._rotateWithMatrix(nB, zB, QB)
+         JB.setTranslationFromFloats(0, 0, 0), oB.b.RotationAxisToRef(BB, IB, JB), this._rotateWithMatrix(JB, ZB, TB)
```

#### 259. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2471` → after: `L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2471) · [Before (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2471)

```diff
-           return dB.d.RotationAxisToRef(BB, jB, nB), void this.setRotationQuaternion(nB, zB, QB)
+           return oB.f.RotationAxisToRef(BB, IB, JB), void this.setRotationQuaternion(JB, ZB, TB)
```

#### 260. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2476` → after: `L2476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2476) · [Before (L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2476)

```diff
-         dB.c.RotationAxisToRef(BB, jB, IB), nB.multiplyToRef(IB, IB), this._rotateWithMatrix(IB, zB, QB)
+         oB.b.RotationAxisToRef(BB, IB, GB), JB.multiplyToRef(GB, GB), this._rotateWithMatrix(GB, ZB, TB)
```

#### 261. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2486` → after: `L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2486) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2486)

```diff
-         if (0 === jB) return this._decompose(), this._localRotation.jH(BB), void this._markAsDirtyAndCompose();
+         if (0 === IB) return this._decompose(), this._localRotation.TY(BB), void this._markAsDirtyAndCompose();
```

#### 262. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2490` → after: `L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2490) · [Before (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2490)

```diff
-         dB.c.FromQuaternionToRef(BB, nB), QB.multiplyToRef(nB, nB), this._rotateWithMatrix(nB, jB, zB)
+         oB.b.FromQuaternionToRef(BB, JB), TB.multiplyToRef(JB, JB), this._rotateWithMatrix(JB, IB, ZB)
```

#### 263. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2497)

```diff
-           return dB.d.FromRotationMatrixToRef(BB, QB), void this.setRotationQuaternion(QB, jB, zB)
+           return oB.f.FromRotationMatrixToRef(BB, TB), void this.setRotationQuaternion(TB, IB, ZB)
```

#### 264. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2502` → after: `L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2502) · [Before (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2502)

```diff
-         nB.jH(BB), QB.multiplyToRef(BB, nB), this._rotateWithMatrix(nB, jB, zB)
+         JB.TY(BB), TB.multiplyToRef(BB, JB), this._rotateWithMatrix(JB, IB, ZB)
```

#### 265. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2514` → after: `L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2514) · [Before (L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2514)

```diff
-         NB && 1 == jB ? (zB ? (uB.jH(zB.getWorldMatrix()), NB.getAbsoluteMatrix().multiplyToRef(uB, uB)) : uB.jH(NB.getAbsoluteMatrix()), UB.jH(uB), UB.invert(), QB.multiplyToRef(uB, QB), QB.multiplyToRef(BB, QB), QB.multiplyToRef(UB, QB)) : 1 == jB && zB ? (uB.jH(zB.getWorldMatr … [truncated]
+         vB && 1 == IB ? (ZB ? (kB.TY(ZB.getWorldMatrix()), vB.getAbsoluteMatrix().multiplyToRef(kB, kB)) : kB.TY(vB.getAbsoluteMatrix()), cB.TY(kB), cB.invert(), TB.multiplyToRef(kB, TB), TB.multiplyToRef(BB, TB), TB.multiplyToRef(cB, TB)) : 1 == IB && ZB ? (kB.TY(ZB.getWorldMatr … [truncated]
```

#### 266. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2518)

```diff
-         return BB.jH(this.getAbsoluteMatrix()), jB ? (BB.multiplyToRef(jB.getWorldMatrix(), BB), dB.c.ScalingToRef(jB.pp.x, jB.pp.y, jB.pp.z, zB)) : dB.c.IdentityToRef(zB), BB.invert(), !isNaN(BB.m[0]) && (zB.multiplyAtIndex(0, this._scalingDeterminant), BB.multiplyToRef(zB, BB), … [truncated]
+         return BB.TY(this.getAbsoluteMatrix()), IB ? (BB.multiplyToRef(IB.getWorldMatrix(), BB), oB.b.ScalingToRef(IB.ek.x, IB.ek.y, IB.ek.z, ZB)) : oB.b.IdentityToRef(ZB), BB.invert(), !isNaN(BB.m[0]) && (ZB.multiplyAtIndex(0, this._scalingDeterminant), BB.multiplyToRef(ZB, BB), … [truncated]
```

#### 267. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2523)

```diff
-         const zB = dB.m.Zero();
+         const ZB = oB.s.Zero();
```

#### 268. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2533)

```diff
-           const zB = ZB._TmpMats[0].jH(this.getAbsoluteMatrix());
+           const ZB = mB._TmpMats[0].TY(this.getAbsoluteMatrix());
```

#### 269. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2539` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2539) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2539)

```diff
-         const jB = dB.m.Zero();
+         const IB = oB.s.Zero();
```

#### 270. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2548)

```diff
-           this._absoluteMatrix.jH(this._localMatrix);
+           this._absoluteMatrix.TY(this._localMatrix);
```

#### 271. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2561` → after: `L2561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2561) · [Before (L2561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2561)

```diff
-         const zB = dB.m.Zero();
+         const ZB = oB.s.Zero();
```

#### 272. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2567-L2568` → after: `L2567-L2568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2567-L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2567-L2568) · [Before (L2567-L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2567-L2568)

```diff
-         const QB = ZB._TmpMats[0].jH(this.getAbsoluteMatrix());
-         jB && QB.multiplyToRef(jB.getWorldMatrix(), QB), dB.m.TransformNormalToRef(BB, QB, zB), zB.normalize()
+         const TB = mB._TmpMats[0].TY(this.getAbsoluteMatrix());
+         IB && TB.multiplyToRef(IB.getWorldMatrix(), TB), oB.s.TransformNormalToRef(BB, TB, ZB), ZB.normalize()
```

#### 273. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2573` → after: `L2573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2573) · [Before (L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2573)

```diff
-         const zB = dB.m.Zero();
+         const ZB = oB.s.Zero();
```

#### 274. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2586` → after: `L2586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2586) · [Before (L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2586)

```diff
-         const zB = dB.d.Identity();
+         const ZB = oB.f.Identity();
```

#### 275. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2592` → after: `L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2592) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2592)

```diff
-         if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), jB.jH(this._localRotation);
+         if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), IB.TY(this._localRotation);
```

#### 276. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2596` → after: `L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2596) · [Before (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2596)

```diff
-           BB ? QB.multiplyToRef(BB.getWorldMatrix(), zB) : zB.jH(QB), zB.multiplyAtIndex(0, this._scalingDeterminant), zB.multiplyAtIndex(1, this._scalingDeterminant), zB.multiplyAtIndex(2, this._scalingDeterminant), zB.decompose(void 0, jB, void 0)
+           BB ? TB.multiplyToRef(BB.getWorldMatrix(), ZB) : ZB.TY(TB), ZB.multiplyAtIndex(0, this._scalingDeterminant), ZB.multiplyAtIndex(1, this._scalingDeterminant), ZB.multiplyAtIndex(2, this._scalingDeterminant), ZB.decompose(void 0, IB, void 0)
```

#### 277. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2602` → after: `L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2602) · [Before (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2602)

```diff
-         const zB = dB.c.Identity();
+         const ZB = oB.b.Identity();
```

#### 278. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2612` → after: `L2612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2612) · [Before (L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2612)

```diff
-           BB ? QB.multiplyToRef(BB.getWorldMatrix(), zB) : zB.jH(QB), zB.multiplyAtIndex(0, this._scalingDeterminant), zB.multiplyAtIndex(1, this._scalingDeterminant), zB.multiplyAtIndex(2, this._scalingDeterminant), zB.getRotationMatrixToRef(jB)
+           BB ? TB.multiplyToRef(BB.getWorldMatrix(), ZB) : ZB.TY(TB), ZB.multiplyAtIndex(0, this._scalingDeterminant), ZB.multiplyAtIndex(1, this._scalingDeterminant), ZB.multiplyAtIndex(2, this._scalingDeterminant), ZB.getRotationMatrixToRef(IB)
```

#### 279. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2617` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2617) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2617)

```diff
-         const zB = dB.m.Zero();
+         const ZB = oB.s.Zero();
```

#### 280. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2623-L2624` → after: `L2623-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2623-L2624) · [Before (L2623-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2623-L2624)

```diff
-         const QB = ZB._TmpMats[0].jH(this.getAbsoluteMatrix());
-         jB && QB.multiplyToRef(jB.getWorldMatrix(), QB), dB.m.TransformCoordinatesToRef(BB, QB, zB)
+         const TB = mB._TmpMats[0].TY(this.getAbsoluteMatrix());
+         IB && TB.multiplyToRef(IB.getWorldMatrix(), TB), oB.s.TransformCoordinatesToRef(BB, TB, ZB)
```

#### 281. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2628` → after: `L2628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2628) · [Before (L2628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2628)

```diff
-         const zB = dB.m.Zero();
+         const ZB = oB.s.Zero();
```

#### 282. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2634-L2635` → after: `L2634-L2635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2634-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2634-L2635) · [Before (L2634-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2634-L2635)

```diff
-         const QB = ZB._TmpMats[0].jH(this.getAbsoluteMatrix());
-         jB && QB.multiplyToRef(jB.getWorldMatrix(), QB), QB.invert(), dB.m.TransformCoordinatesToRef(BB, QB, zB)
+         const TB = mB._TmpMats[0].TY(this.getAbsoluteMatrix());
+         IB && TB.multiplyToRef(IB.getWorldMatrix(), TB), TB.invert(), oB.s.TransformCoordinatesToRef(BB, TB, ZB)
```

#### 283. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2650-L2651` → after: `L2650-L2651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2650-L2651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2650-L2651) · [Before (L2650-L2651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2650-L2651)

```diff
-     ZB._TmpVecs = (0, VB.c)(2, dB.m.Zero), ZB._TmpQuat = dB.d.Identity(), ZB._TmpMats = (0, VB.c)(5, dB.c.Identity), (YB = ZB.prototype).copyAnimationRange ?? (YB.copyAnimationRange = (0, XB.i)("Bone", "copyAnimationRange"));
-     var AB = zB(40156);
+     mB._TmpVecs = (0, PB.b)(2, oB.s.Zero), mB._TmpQuat = oB.f.Identity(), mB._TmpMats = (0, PB.b)(5, oB.b.Identity), (jB = mB.prototype).copyAnimationRange ?? (jB.copyAnimationRange = (0, rB.j)("Bone", "copyAnimationRange"));
+     var XB = ZB(40148);
```

#### 284. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2653-L2657` → after: `L2653-L2657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2653-L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2653-L2657) · [Before (L2653-L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2653-L2657)

```diff
-     var PB = zB(40046),
-       WB = zB(40423),
-       eB = zB(40432),
-       lB = zB(40428),
-       wB = zB(40188);
+     var eB = ZB(40023),
+       uB = ZB(40369),
+       fB = ZB(40380),
+       lB = ZB(40371),
+       AB = ZB(40172);
```

#### 285. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2669` → after: `L2669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2669) · [Before (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2669)

```diff
-       BB._properties.currentColorGradient = jB._colorGradients[0], BB._properties.currentColorGradient.getColorToRef(BB.color), BB._properties.currentColor1.jH(BB.color), jB._colorGradients.length > 1 ? jB._colorGradients[1].getColorToRef(BB._properties.currentColor2) : BB._prope … [truncated]
+       BB._properties.currentColorGradient = IB._colorGradients[0], BB._properties.currentColorGradient.getColorToRef(BB.color), BB._properties.currentColor1.TY(BB.color), IB._colorGradients.length > 1 ? IB._colorGradients[1].getColorToRef(BB._properties.currentColor2) : BB._prope … [truncated]
```

#### 286. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2674-L2675` → after: `L2674-L2675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2674-L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2674-L2675) · [Before (L2674-L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2674-L2675)

```diff
-       QB.j.GetCurrentGradient(jB._ratio, zB, ((jB, zB, QB) => {
-         jB !== BB._properties.currentColorGradient && (BB._properties.currentColor1.jH(BB._properties.currentColor2), zB.getColorToRef(BB._properties.currentColor2), BB._properties.currentColorGradient = jB), aB.g.LerpToRef(BB._properties.currentColor1, BB._properties.currentColo … [truncated]
+       TB.n.GetCurrentGradient(IB._ratio, ZB, ((IB, ZB, TB) => {
+         IB !== BB._properties.currentColorGradient && (BB._properties.currentColor1.TY(BB._properties.currentColor2), ZB.getColorToRef(BB._properties.currentColor2), BB._properties.currentColorGradient = IB), nB.g.LerpToRef(BB._properties.currentColor1, BB._properties.currentColo … [truncated]
```

#### 287. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2684` → after: `L2684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2684) · [Before (L2684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2684)

```diff
-       QB.j.GetCurrentGradient(jB._ratio, jB._angularSpeedGradients, ((jB, zB, QB) => {
+       TB.n.GetCurrentGradient(IB._ratio, IB._angularSpeedGradients, ((IB, ZB, TB) => {
```

#### 288. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2710` → after: `L2710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2710) · [Before (L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2710)

```diff
-       QB.j.GetCurrentGradient(jB._ratio, jB._velocityGradients, ((jB, zB, QB) => {
+       TB.n.GetCurrentGradient(IB._ratio, IB._velocityGradients, ((IB, ZB, TB) => {
```

#### 289. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2716` → after: `L2716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2716) · [Before (L2716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2716)

```diff
-       QB.j.GetCurrentGradient(jB._ratio, jB._limitVelocityGradients, ((zB, QB, nB) => {
+       TB.n.GetCurrentGradient(IB._ratio, IB._limitVelocityGradients, ((ZB, TB, JB) => {
```

#### 290. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2736` → after: `L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2736) · [Before (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2736)

```diff
-       BB._properties.localPosition ? BB._properties.localPosition.jH(BB.position) : BB._properties.localPosition = BB.position.clone(), dB.m.TransformCoordinatesToRef(BB._properties.localPosition, jB._emitterWorldMatrix, BB.position)
+       BB._properties.localPosition ? BB._properties.localPosition.TY(BB.position) : BB._properties.localPosition = BB.position.clone(), oB.s.TransformCoordinatesToRef(BB._properties.localPosition, IB._emitterWorldMatrix, BB.position)
```

#### 291. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2740` → after: `L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2740) · [Before (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2740)

```diff
-       jB.isLocal && BB._properties.localPosition ? (BB._properties.localPosition.addInPlace(BB._properties.scaledDirection), dB.m.TransformCoordinatesToRef(BB._properties.localPosition, jB._emitterWorldMatrix, BB.position)) : BB.position.addInPlace(BB._properties.scaledDirection)
+       IB.isLocal && BB._properties.localPosition ? (BB._properties.localPosition.addInPlace(BB._properties.scaledDirection), oB.s.TransformCoordinatesToRef(BB._properties.localPosition, IB._emitterWorldMatrix, BB.position)) : BB.position.addInPlace(BB._properties.scaledDirection)
```

#### 292. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2748` → after: `L2748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2748) · [Before (L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2748)

```diff
-       QB.j.GetCurrentGradient(jB._ratio, jB._dragGradients, ((jB, zB, QB) => {
+       TB.n.GetCurrentGradient(IB._ratio, IB._dragGradients, ((IB, ZB, TB) => {
```

#### 293. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2756` → after: `L2756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2756) · [Before (L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2756)

```diff
-       BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2 ? (BB._properties.randomNoiseCoordinates1.U3(Math.random(), Math.random(), Math.random()), BB._properties.randomNoiseCoordinates2.U3(Math.random(), Math.random(), Math.random())) : (BB._propert … [truncated]
+       BB._properties.randomNoiseCoordinates1 && BB._properties.randomNoiseCoordinates2 ? (BB._properties.randomNoiseCoordinates1.cBB(Math.random(), Math.random(), Math.random()), BB._properties.randomNoiseCoordinates2.cBB(Math.random(), Math.random(), Math.random())) : (BB._prope … [truncated]
```

#### 294. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2766-L2768` → after: `L2766-L2768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2766-L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2766-L2768) · [Before (L2766-L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2766-L2768)

```diff
-           uB = dB.h.KJ[0],
-           UB = dB.h.KJ[1];
-         uB.U3((2 * nB - 1) * jB.noiseStrength.x, (2 * IB - 1) * jB.noiseStrength.y, (2 * NB - 1) * jB.noiseStrength.z), uB.scaleToRef(jB._tempScaledUpdateSpeed, UB), BB.direction.addInPlace(UB)
+           kB = oB.m.rN[0],
+           cB = oB.m.rN[1];
+         kB.cBB((2 * JB - 1) * IB.noiseStrength.x, (2 * GB - 1) * IB.noiseStrength.y, (2 * vB - 1) * IB.noiseStrength.z), kB.scaleToRef(IB._tempScaledUpdateSpeed, cB), BB.direction.addInPlace(cB)
```

#### 295. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/308.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/308.js#L2777)

```diff
-       BB.size = (0, sB.RandomRange)(jB.minSize, jB.maxSize), BB.scale.U3((0, sB.RandomRange)(jB.minScaleX, jB.maxScaleX), (0, sB.RandomRange)(jB.minScaleY, jB.maxScaleY))
+       BB.size = (0, FB.RandomRange)(IB.minSize, IB.maxSize), BB.scale.cBB((0, FB.RandomRange)(IB.minScaleX, IB.maxScaleX), (0, FB.RandomRange)(IB.minScaleY, IB.maxScaleY))
```
