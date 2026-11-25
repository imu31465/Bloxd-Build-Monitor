# Changed — Bundle Modifications Report (Part 014 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `14 / 56` (**325** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/265.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/265.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250)

#### 24. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L902-L903` → after: `L156-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L156-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L156-L243) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L902-L903)

```diff
-           serialize() {
-             return Dp.c.Serialize(this)
+           constructor(QQ, WQ) {
+             let XQ, qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               TQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               sQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               PQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               JQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               pQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
+               GQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               UQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
+               bQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+               vQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
+               dQ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
+               HQ = arguments.length > 13 ? arguments[13] : void 0,
+               oQ = arguments.length > 14 ? arguments[14] : void 0;
+             super(WQ), this._delayedOnLoad = (0, wQ.n)(this, aQ), this.onLoadObservable = new gQ.b, this.url = (0, wQ.n)(this, lQ, void 0), this.boundingBoxPosition = ((0, wQ.n)(this, hQ), (0, wQ.n)(this, iQ, zQ.s.Zero())), this._boundingBoxSize = (0, wQ.n)(this, cQ), this._rotat … [truncated]
+               let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+ ... (72 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L905-L906` → after: `L245-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L245-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L245-L311) · [Before (L905-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L905-L906)

```diff
-           parse(pp, ip, cp) {
-             Dp.c.Parse((() => this), pp, ip, cp)
+           getClassName() {
+             return "CubeTexture"
+           }
+           updateURL(QQ) {
+             let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+               sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               FQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
+             this.name && !this.name.startsWith("data:") || (this.name = QQ), this.url = QQ, WQ && (this._forcedExtension = WQ);
+             const PQ = QQ.lastIndexOf("."),
+               gQ = WQ || (PQ > -1 ? QQ.substring(PQ).toLowerCase() : ""),
+               JQ = 0 === gQ.indexOf(".dds"),
+ ... (51 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L909-L910` → after: `L314-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L314-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L314-L376) · [Before (L909-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L909-L910)

```diff
-           const Lp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], Sp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
+           const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(HQ[Symbol.metadata] ?? null) : void 0;
+           WQ = [(0, qQ.I)()], XQ = [(0, qQ.F)()], PQ = [(0, qQ.F)()], pQ = [(0, qQ.I)("rotationY")], GQ = [(0, qQ.I)("files")], UQ = [(0, qQ.I)("forcedExtension")], bQ = [(0, qQ.I)("extensions")], vQ = [(0, qQ.t)("textureMatrix")], dQ = [(0, qQ.t)("textureMatrixRefraction")], (0, … [truncated]
+             kind: "getter",
+             name: "boundingBoxSize",
+             static: !1,
+             private: !1,
+             access: {
+               has: QQ => "boundingBoxSize" in QQ,
+               get: QQ => QQ.boundingBoxSize
+             },
+             metadata: TQ
+           }, null, aQ), (0, wQ.k)(QQ, null, pQ, {
+             kind: "setter",
+             name: "rotationY",
+             static: !1,
+             private: !1,
+ ... (47 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L912` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L378) · [Before (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L912)

```diff
-             name: "name",
+             name: "_forcedExtension",
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L916-L917` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L382-L383) · [Before (L916-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L916-L917)

```diff
-               has: pp => "name" in pp,
-               get: pp => pp.name,
+               has: QQ => "_forcedExtension" in QQ,
+               get: QQ => QQ._forcedExtension,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L919` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L385) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L919)

```diff
-                 pp.name = ip
+                 QQ._forcedExtension = WQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L923` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L389) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L923)

```diff
-           }, xp, Yp), (0, Op.j)(null, null, cp, {
+           }, EQ, CQ), (0, wQ.k)(null, null, bQ, {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L925` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L391) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L925)

```diff
-             name: "priority",
+             name: "_extensions",
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L929-L930` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L395-L396) · [Before (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L929-L930)

```diff
-               has: pp => "priority" in pp,
-               get: pp => pp.priority,
+               has: QQ => "_extensions" in QQ,
+               get: QQ => QQ._extensions,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L932` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L398) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L932)

```diff
-                 pp.priority = ip
+                 QQ._extensions = WQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L936` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L402) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L936)

```diff
-           }, Ap, Pp), (0, Op.j)(null, null, Ip, {
+           }, uQ, LQ), (0, wQ.k)(null, null, vQ, {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L938` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L404) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L938)

```diff
-             name: "resolveIncludes",
+             name: "_textureMatrix",
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L942-L943` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L408-L409) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L942-L943)

```diff
-               has: pp => "resolveIncludes" in pp,
-               get: pp => pp.resolveIncludes,
+               has: QQ => "_textureMatrix" in QQ,
+               get: QQ => QQ._textureMatrix,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L945` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L411) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L945)

```diff
-                 pp.resolveIncludes = ip
+                 QQ._textureMatrix = WQ
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L949` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L415) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L949)

```diff
-           }, Wp, yp), (0, Op.j)(null, null, Sp, {
+           }, kQ, fQ), (0, wQ.k)(null, null, dQ, {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L951` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L417) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L951)

```diff
-             name: "registerForExtraEvents",
+             name: "_textureMatrixRefraction",
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L955-L956` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L421-L422) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L955-L956)

```diff
-               has: pp => "registerForExtraEvents" in pp,
-               get: pp => pp.registerForExtraEvents,
+               has: QQ => "_textureMatrixRefraction" in QQ,
+               get: QQ => QQ._textureMatrixRefraction,
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L958` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L424) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L958)

```diff
-                 pp.registerForExtraEvents = ip
+                 QQ._textureMatrixRefraction = WQ
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L972-L973` → after: `L438-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L438-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L438-L464) · [Before (L972-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L972-L973)

```diff
-     function yp() {
-       Wp || (Wp = !0, (0, Ap.g)("BABYLON.MaterialPluginBase", Pp))
+     function UQ(QQ, WQ, XQ) {
+       let wQ = "";
+       for (const qQ of QQ) wQ += qQ;
+       return new pQ(wQ, WQ, null, XQ, QQ)
+     }
+ 
+     function bQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+         wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const qQ = WQ.useDelayedTextureLoading;
+       WQ.useDelayedTextureLoading = !1;
+       const TQ = new pQ(QQ, WQ, null, !1, null, null, null, void 0, !0, XQ, wQ);
+       return WQ.useDelayedTextureLoading = qQ, TQ
+     }
+ 
+     function vQ(QQ, WQ, XQ) {
+ ... (11 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L976` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L468) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L976)

```diff
-   40465: (pp, ip, cp) => {
+   41394: (QQ, WQ, XQ) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L978` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L470) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L978)

```diff
-       c: () => Op
+       b: () => PQ
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L980-L982` → after: `L472-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L472-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L472-L524) · [Before (L980-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L980-L982)

```diff
-     class Op {
-       constructor() {
-         this.previousWorldMatrices = {}, this.previousBones = {}
+     var wQ = XQ(38956),
+       qQ = XQ(40724),
+       TQ = XQ(40206),
+       zQ = XQ(40117),
+       sQ = XQ(40103);
+     let FQ = !1;
+     class PQ extends qQ.g {
+       constructor(QQ, WQ, XQ) {
+         let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           PQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
+           gQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
+           JQ = arguments.length > 6 ? arguments[6] : void 0;
+         const rQ = !XQ || XQ._isScene;
+         super(null, rQ ? XQ : XQ?.cB, rQ ? !wQ : XQ, JQ, PQ, void 0, void 0, void 0, void 0, gQ), FQ || (FQ = !0, zQ.ThinEngine.prototype.createDynamicTexture = function(QQ, WQ, XQ, wQ) {
+           const qQ = new sQ.e(this, 4);
+           return qQ.baseWidth = QQ, qQ.baseHeight = WQ, XQ && (QQ = this.needPOTTextures ? (0, TQ.h)(QQ, this._caps.maxTextureSize) : QQ, WQ = this.needPOTTextures ? (0, TQ.h)(WQ, this._caps.maxTextureSize) : WQ), qQ.width = QQ, qQ.height = WQ, qQ.isReady = !1, qQ.generateMipMaps … [truncated]
+ ... (37 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L984-L985` → after: `L526-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L526-L528) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L984-L985)

```diff
-       static AddUniforms(pp) {
-         pp.push("previousWorld", "previousViewProjection", "mPreviousBones")
+       scaleTo(QQ, WQ) {
+         const XQ = this.getSize();
+         XQ.width = QQ, XQ.height = WQ, this._recreate(XQ)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L987-L992` → after: `L530-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L530-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L530-L551) · [Before (L987-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L987-L992)

```diff
-       static AddSamplers(pp) {}
-       bindForSubMesh(pp, ip, cp, Op, op) {
-         if (ip.prePassRenderer && ip.prePassRenderer.enabled && ip.prePassRenderer.currentRTisSceneRT && (-1 !== ip.prePassRenderer.getIndex(2) || -1 !== ip.prePassRenderer.getIndex(11))) {
-           this.previousWorldMatrices[cp.uniqueId] || (this.previousWorldMatrices[cp.uniqueId] = Op.clone()), this.previousViewProjection || (this.previousViewProjection = ip.getTransformMatrix().clone(), this.currentViewProjection = ip.getTransformMatrix().clone());
-           const op = ip.gy();
-           this.currentViewProjection.updateFlag !== ip.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = op.frameId, this.previousViewProjection.rM(this.currentViewProjection), this.currentViewProjection.rM(ip.getTransformMatrix())) : this._lastUpdateFrameId !== op.fra … [truncated]
+       getContext() {
+         return this._context
+       }
+       clear(QQ) {
+         const WQ = this.getSize();
+         QQ && (this._context.fillStyle = QQ), this._context.clearRect(0, 0, WQ.width, WQ.height)
+       }
+       update(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === QQ || QQ, WQ, this._format || void 0, void 0, XQ)
+       }
+       drawText(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+         let sQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
+         const FQ = this.getSize();
+         if (TQ && (this._context.fillStyle = TQ, this._context.fillRect(0, 0, FQ.width, FQ.height)), this._context.font = wQ, null === WQ || void 0 === WQ) {
+ ... (6 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L997-L1002` → after: `L579-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L579-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L579-L604) · [Before (L997-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L997-L1002)

```diff
-   40556: (pp, ip, cp) => {
-     function Op(pp) {
-       return class extends pp {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
-         }
+   41364: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => qQ
+     });
+     var wQ = XQ(40724);
+     class qQ extends wQ.g {
+       get depth() {
+         return this._depth
+       }
+       constructor(QQ, WQ, XQ, qQ, TQ, zQ) {
+         let sQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
+           FQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+           PQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : wQ.g.TRILINEAR_SAMPLINGMODE,
+           gQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
+           JQ = arguments.length > 10 ? arguments[10] : void 0,
+           rQ = arguments.length > 11 ? arguments[11] : void 0;
+ ... (10 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L1009` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L608) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L1009)

```diff
-   40459: (pp, ip, cp) => {
+   41357: (QQ, WQ, XQ) => {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L1011` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L610) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L1011)

```diff
-       StandardMaterial: () => Op.f
+       b: () => wQ.b
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L1013-L1014` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L612-L613) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L1013-L1014)

```diff
-     var Op = cp(40463);
-     (0, Op.e)()
+     var wQ = XQ(40612);
+     (0, wQ.d)()
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L1016` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L615) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L1016)

```diff
-   40463: (pp, ip, cp) => {
+   40349: (QQ, WQ, XQ) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L1018-L1019` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L617) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L1018-L1019)

```diff
-       e: () => Np,
-       f: () => Jp
+       c: () => wQ.h
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L1021-L2730` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/265.js#L619-L620) · [Before (L1021-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/265.js#L1021-L2730)

```diff
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(40314),
-       Sp = cp(40296),
-       xp = cp(37487),
-       Lp = cp(40342),
-       Yp = cp(40465),
-       Dp = cp(40467),
-       Ap = cp(40318),
-       Pp = cp(40476),
-       Wp = cp(40472),
-       yp = cp(40523),
-       Up = cp(40519),
-       wp = cp(40530),
-       vp = cp(40533),
-       tp = cp(40516),
- ... (1694 more removed lines; see GitHub link above)
+     var wQ = XQ(40355);
+     (0, wQ.e)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/266.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/266.js` (126 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927)

#### 1. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4-L343` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L4) · [Before (L4-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L4-L343)

```diff
-   40489: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op
-     });
-     class Op {
-       constructor(pp, ip, cp) {
-         this.bu = pp, this.bv = ip, this.distance = cp, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
-   },
-   40504: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Sp
-     });
-     var Op = cp(37329),
-       op = cp(37320),
- ... (324 more removed lines; see GitHub link above)
+   40479: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L347-L405` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L8-L14) · [Before (L347-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L347-L405)

```diff
-     class Op {
-       constructor() {
-         this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
-       }
-       unBindMesh() {
-         this._mesh = null
-       }
-       addFallback(pp, ip) {
-         this._defines[pp] || (pp < this._currentRank && (this._currentRank = pp), pp > this._maxRank && (this._maxRank = pp), this._defines[pp] = new Array), this._defines[pp].push(ip)
-       }
-       addCPUSkinningFallback(pp, ip) {
-         this._mesh = ip, pp < this._currentRank && (this._currentRank = pp), pp > this._maxRank && (this._maxRank = pp)
-       }
-       get hasMoreFallbacks() {
-         return this._currentRank <= this._maxRank
-       }
- ... (43 more removed lines; see GitHub link above)
+     var wQ = XQ(40260),
+       qQ = XQ(40268),
+       TQ = XQ(37370),
+       zQ = XQ(40484),
+       sQ = XQ(40515),
+       FQ = XQ(40445),
+       PQ = XQ(40357);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L408-L664` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L17) · [Before (L408-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L408-L664)

```diff
-       let ip, cp, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, yp, Up, wp = [];
-       return pp = class {
-         constructor() {
-           this._func = (0, Op.l)(this, wp), this.reset()
-         }
-         reset() {
-           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
-         }
-         get func() {
-           return this._func
-         }
-         set func(pp) {
-           this._func = pp
-         }
-         get backFunc() {
-           return this._backFunc
- ... (241 more removed lines; see GitHub link above)
+       let WQ, XQ, zQ, sQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ = [],
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L687-L995` → after: `L40-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L40-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L40-L55) · [Before (L687-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L687-L995)

```diff
-         get useVertexPulling() {
-           return this._useVertexPulling
-         }
-         set useVertexPulling(ip) {
-           this._useVertexPulling !== ip && (this._useVertexPulling = ip, this.ocp(pp.MiscDirtyFlag))
-         }
-         get _supportGlowLayer() {
-           return !1
-         }
-         set _glowModeEnabled(pp) {}
-         get shaderLanguage() {
-           return this._shaderLanguage
-         }
-         get canRenderToMRT() {
-           return !1
-         }
- ... (293 more removed lines; see GitHub link above)
+         constructor() {
+           this.keysUp = (0, wQ.n)(this, VQ, [38]), this.keysUpward = ((0, wQ.n)(this, DQ), (0, wQ.n)(this, pQ, [33])), this.keysDown = ((0, wQ.n)(this, GQ), (0, wQ.n)(this, UQ, [40])), this.keysDownward = ((0, wQ.n)(this, bQ), (0, wQ.n)(this, vQ, [34])), this.keysLeft = ((0, wQ.n … [truncated]
+         }
+         attachControl(QQ) {
+           QQ = PQ.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.sE(), this._engine = this._scene.Uj(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+             this._keys.length = 0
+           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((WQ => {
+             const XQ = WQ.event;
+             if (!XQ.metaKey)
+               if (WQ.type === FQ.c.KEYDOWN) {
+                 if (-1 !== this.keysUp.indexOf(XQ.keyCode) || -1 !== this.keysDown.indexOf(XQ.keyCode) || -1 !== this.keysLeft.indexOf(XQ.keyCode) || -1 !== this.keysRight.indexOf(XQ.keyCode) || -1 !== this.keysUpward.indexOf(XQ.keyCode) || -1 !== this.keysDownward.indexOf(XQ.key … [truncated]
+                   -1 === this._keys.indexOf(XQ.keyCode) && this._keys.push(XQ.keyCode), QQ || XQ.preventDefault()
+                 }
+               } else if (-1 !== this.keysUp.indexOf(XQ.keyCode) || -1 !== this.keysDown.indexOf(XQ.keyCode) || -1 !== this.keysLeft.indexOf(XQ.keyCode) || -1 !== this.keysRight.indexOf(XQ.keyCode) || -1 !== this.keysUpward.indexOf(XQ.keyCode) || -1 !== this.keysDownward.indexOf(X … [truncated]
+               const WQ = this._keys.indexOf(XQ.keyCode);
+               WQ >= 0 && this._keys.splice(WQ, 1), QQ || XQ.preventDefault()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L997-L1003` → after: `L57-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L57-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L57-L75) · [Before (L997-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L997-L1003)

```diff
-         }
-         getBindedMeshes() {
-           if (this.meshMap) {
-             const pp = [];
-             for (const ip in this.meshMap) {
-               const cp = this.meshMap[ip];
-               cp && pp.push(cp)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         }
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const QQ = this.camera,
+               WQ = QQ.movement.input,
+               XQ = WQ.getEntry("keyboard", "translate"),
+               wQ = WQ.getEntry("keyboard", "rotate"),
+               qQ = wQ?.sensitivity ?? 1,
+               zQ = QQ._localDirection.XQQ(0, 0, 0);
+             for (let TQ = 0; TQ < this._keys.length; TQ++) {
+               const WQ = this._keys[TQ]; - 1 !== this.keysLeft.indexOf(WQ) ? zQ.x -= 1 : -1 !== this.keysUp.indexOf(WQ) ? zQ.z += 1 : -1 !== this.keysRight.indexOf(WQ) ? zQ.x += 1 : -1 !== this.keysDown.indexOf(WQ) ? zQ.z -= 1 : -1 !== this.keysUpward.indexOf(WQ) ? zQ.y += 1 : -1 … [truncated]
+             }
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1109-L1152` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L79-L80) · [Before (L1109-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1109-L1152)

```diff
-         setPrePassRenderer(pp) {
-           return !1
-         }
-         dispose(pp, ip, cp) {
-           const Op = this.Gl();
-           if (Op.stopAnimation(this), Op.freeProcessedMaterials(), Op.removeMaterial(this), this._eventInfo.forceDisposeTextures = ip, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
-             const pp = this._parentContainer.materials.indexOf(this);
-             pp > -1 && this._parentContainer.materials.splice(pp, 1), this._parentContainer = null
-           }
-           if (!0 !== cp)
-             if (this.meshMap)
-               for (const op in this.meshMap) {
-                 const pp = this.meshMap[op];
-                 this._disposeMeshResources(pp)
-               } else {
-                 const pp = Op.meshes;
- ... (28 more removed lines; see GitHub link above)
+         getClassName() {
+           return "FreeCameraKeyboardMoveInput"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1154-L1155` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L82-L83) · [Before (L1154-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1154-L1155)

```diff
-         static ParseAlphaMode(pp, ip) {
-           void 0 !== pp._alphaMode ? ip._alphaMode = Array.isArray(pp._alphaMode) ? [...pp._alphaMode] : [pp._alphaMode] : void 0 !== pp.alphaMode ? ip._alphaMode = Array.isArray(pp.alphaMode) ? [...pp.alphaMode] : [pp.alphaMode] : ip._alphaMode = [2]
+         _onLostFocus() {
+           this._keys.length = 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1157-L1162` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L85-L86) · [Before (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1157-L1162)

```diff
-         static Parse(ip, cp, Op) {
-           if (ip.customType) {
-             if ("BABYLON.PBRMaterial" === ip.customType && ip.overloadedAlbedo && (ip.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Dp.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
-           } else ip.customType = "BABYLON.StandardMaterial";
-           const op = Ip.i.Instantiate(ip.customType).Parse(ip, cp, Op);
-           return op._loadedUniqueId = ip.uniqueId, pp.ParseAlphaMode(ip, op), op
+         getSimpleName() {
+           return "keyboard"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1164-L1174` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L88-L90) · [Before (L1164-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1164-L1174)

```diff
-         static _ParsePlugins(pp, ip, cp, Op) {
-           if (pp.plugins)
-             for (const op in pp.plugins) {
-               const Sp = pp.plugins[op];
-               let xp = ip.pluginManager?.getPlugin(Sp.name);
-               if (!xp) {
-                 const pp = Ip.i.Instantiate("BABYLON." + op);
-                 pp && (xp = new pp(ip))
-               }
-               xp?.parse(Sp, cp, Op)
-             }
+         _getLocalRotation() {
+           const QQ = this.camera._calculateHandednessMultiplier();
+           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * QQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1178-L1218` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L94) · [Before (L1178-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1178-L1218)

```diff
-         ip = [(0, op.K)()], cp = [(0, op.K)()], vp = [(0, op.K)()], tp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)("alpha")], kp = [(0, op.K)("backFaceCulling")], mp = [(0, op.K)("textureRepetitionMode")], Rp = [(0, op.K)("textureR … [truncated]
-           kind: "getter",
-           name: "pointsCloud",
-           static: !1,
-           private: !1,
-           access: {
-             has: pp => "pointsCloud" in pp,
-             get: pp => pp.pointsCloud
-           },
-           metadata: Ip
-         }, null, Gp), (0, Op.j)(pp, null, ap, {
-           kind: "getter",
-           name: "fillMode",
-           static: !1,
-           private: !1,
-           access: {
- ... (25 more removed lines; see GitHub link above)
+         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], zQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], BQ = [(0, qQ.I)()], yQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1220` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L96) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1220)

```diff
-           name: "id",
+           name: "keysUp",
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1224-L1225` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L100-L101) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1224-L1225)

```diff
-             has: pp => "id" in pp,
-             get: pp => pp.id,
+             has: QQ => "keysUp" in QQ,
+             get: QQ => QQ.keysUp,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1227` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L103) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1227)

```diff
-               pp.id = ip
+               QQ.keysUp = WQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1231` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L107) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1231)

```diff
-         }, rp, Zp), (0, Op.j)(null, null, cp, {
+         }, VQ, DQ), (0, wQ.k)(null, null, XQ, {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1233` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L109) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1233)

```diff
-           name: "uniqueId",
+           name: "keysUpward",
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1237-L1238` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L113-L114) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1237-L1238)

```diff
-             has: pp => "uniqueId" in pp,
-             get: pp => pp.uniqueId,
+             has: QQ => "keysUpward" in QQ,
+             get: QQ => QQ.keysUpward,
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1240` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L116) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1240)

```diff
-               pp.uniqueId = ip
+               QQ.keysUpward = WQ
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1244` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L120) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1244)

```diff
-         }, zp, sp), (0, Op.j)(null, null, vp, {
+         }, pQ, GQ), (0, wQ.k)(null, null, zQ, {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1246` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L122) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1246)

```diff
-           name: "name",
+           name: "keysDown",
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1250-L1251` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L126-L127) · [Before (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1250-L1251)

```diff
-             has: pp => "name" in pp,
-             get: pp => pp.name,
+             has: QQ => "keysDown" in QQ,
+             get: QQ => QQ.keysDown,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1253` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L129) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1253)

```diff
-               pp.name = ip
+               QQ.keysDown = WQ
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1257` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L133) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1257)

```diff
-         }, Kp, Vp), (0, Op.j)(null, null, tp, {
+         }, UQ, bQ), (0, wQ.k)(null, null, sQ, {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1259` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L135) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1259)

```diff
-           name: "metadata",
+           name: "keysDownward",
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1263-L1264` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L139-L140) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1263-L1264)

```diff
-             has: pp => "metadata" in pp,
-             get: pp => pp.metadata,
+             has: QQ => "keysDownward" in QQ,
+             get: QQ => QQ.keysDownward,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1266` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L142) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1266)

```diff
-               pp.metadata = ip
+               QQ.keysDownward = WQ
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1270` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L146) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1270)

```diff
-         }, ii, ci), (0, Op.j)(null, null, Hp, {
+         }, vQ, dQ), (0, wQ.k)(null, null, gQ, {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1272` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L148) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1272)

```diff
-           name: "checkReadyOnEveryCall",
+           name: "keysLeft",
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1276-L1277` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L152-L153) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1276-L1277)

```diff
-             has: pp => "checkReadyOnEveryCall" in pp,
-             get: pp => pp.checkReadyOnEveryCall,
+             has: QQ => "keysLeft" in QQ,
+             get: QQ => QQ.keysLeft,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1279` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L155) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1279)

```diff
-               pp.checkReadyOnEveryCall = ip
+               QQ.keysLeft = WQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1283` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L159) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1283)

```diff
-         }, Oi, oi), (0, Op.j)(null, null, dp, {
+         }, HQ, aQ), (0, wQ.k)(null, null, JQ, {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1285` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L161) · [Before (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1285)

```diff
-           name: "checkReadyOnlyOnce",
+           name: "keysRight",
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1289-L1290` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L165-L166) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1289-L1290)

```diff
-             has: pp => "checkReadyOnlyOnce" in pp,
-             get: pp => pp.checkReadyOnlyOnce,
+             has: QQ => "keysRight" in QQ,
+             get: QQ => QQ.keysRight,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1292` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L168) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1292)

```diff
-               pp.checkReadyOnlyOnce = ip
+               QQ.keysRight = WQ
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1296` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L172) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1296)

```diff
-         }, Ii, Si), (0, Op.j)(null, null, ep, {
+         }, lQ, hQ), (0, wQ.k)(null, null, rQ, {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1298` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L174) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1298)

```diff
-           name: "state",
+           name: "rotationSpeed",
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1302-L1303` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L178-L179) · [Before (L1302-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1302-L1303)

```diff
-             has: pp => "state" in pp,
-             get: pp => pp.state,
+             has: QQ => "rotationSpeed" in QQ,
+             get: QQ => QQ.rotationSpeed,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1305` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L181) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1305)

```diff
-               pp.state = ip
+               QQ.rotationSpeed = WQ
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1309` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L185) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1309)

```diff
-         }, xi, Li), (0, Op.j)(null, null, jp, {
+         }, iQ, cQ), (0, wQ.k)(null, null, IQ, {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1311` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L187) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1311)

```diff
-           name: "_alpha",
+           name: "keysRotateLeft",
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1315-L1316` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L191-L192) · [Before (L1315-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1315-L1316)

```diff
-             has: pp => "_alpha" in pp,
-             get: pp => pp._alpha,
+             has: QQ => "keysRotateLeft" in QQ,
+             get: QQ => QQ.keysRotateLeft,
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1318` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L194) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1318)

```diff
-               pp._alpha = ip
+               QQ.keysRotateLeft = WQ
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1322` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L198) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1322)

```diff
-         }, Yi, Di), (0, Op.j)(null, null, kp, {
+         }, AQ, RQ), (0, wQ.k)(null, null, jQ, {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1324` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L200) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1324)

```diff
-           name: "_backFaceCulling",
+           name: "keysRotateRight",
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1328-L1329` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L204-L205) · [Before (L1328-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1328-L1329)

```diff
-             has: pp => "_backFaceCulling" in pp,
-             get: pp => pp._backFaceCulling,
+             has: QQ => "keysRotateRight" in QQ,
+             get: QQ => QQ.keysRotateRight,
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1331` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L207) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1331)

```diff
-               pp._backFaceCulling = ip
+               QQ.keysRotateRight = WQ
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1335` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L211) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1335)

```diff
-         }, Ai, Pi), (0, Op.j)(null, null, mp, {
+         }, EQ, CQ), (0, wQ.k)(null, null, BQ, {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1337` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L213) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1337)

```diff
-           name: "_textureRepetitionMode",
+           name: "keysRotateUp",
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1341-L1342` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L217-L218) · [Before (L1341-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1341-L1342)

```diff
-             has: pp => "_textureRepetitionMode" in pp,
-             get: pp => pp._textureRepetitionMode,
+             has: QQ => "keysRotateUp" in QQ,
+             get: QQ => QQ.keysRotateUp,
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1344` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L220) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1344)

```diff
-               pp._textureRepetitionMode = ip
+               QQ.keysRotateUp = WQ
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1348` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L224) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1348)

```diff
-         }, Wi, yi), (0, Op.j)(null, null, Rp, {
+         }, uQ, LQ), (0, wQ.k)(null, null, yQ, {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1350` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L226) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1350)

```diff
-           name: "textureRepetitionHexTilingParams",
+           name: "keysRotateDown",
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1354-L1355` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L230-L231) · [Before (L1354-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1354-L1355)

```diff
-             has: pp => "textureRepetitionHexTilingParams" in pp,
-             get: pp => pp.textureRepetitionHexTilingParams,
+             has: QQ => "keysRotateDown" in QQ,
+             get: QQ => QQ.keysRotateDown,
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1357` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L233) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1357)

```diff
-               pp.textureRepetitionHexTilingParams = ip
+               QQ.keysRotateDown = WQ
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1361` → after: `L237-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L237-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L237-L333) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1361)

```diff
-         }, Ui, wi), (0, Op.j)(null, null, qp, {
+         }, kQ, fQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: TQ
+         })
+       })(), QQ
+     })();
+     sQ.d.FreeCameraKeyboardMoveInput = gQ;
+     var JQ = XQ(37399),
+       rQ = XQ(40436);
+     let IQ = (() => {
+       var QQ;
+       let WQ, XQ, TQ = [],
+         zQ = [],
+         sQ = [],
+ ... (81 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1363` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L335) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1363)

```diff
-           name: "_cullBackFaces",
+           name: "buttons",
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1367-L1368` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L339-L340) · [Before (L1367-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1367-L1368)

```diff
-             has: pp => "_cullBackFaces" in pp,
-             get: pp => pp._cullBackFaces,
+             has: QQ => "buttons" in QQ,
+             get: QQ => QQ.buttons,
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1370` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L342) · [Before (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1370)

```diff
-               pp._cullBackFaces = ip
+               QQ.buttons = WQ
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1374` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L346) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1374)

```diff
-         }, vi, ti), (0, Op.j)(null, null, Mp, {
+         }, TQ, zQ), (0, wQ.k)(null, null, XQ, {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1376` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L348) · [Before (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1376)

```diff
-           name: "sideOrientation",
+           name: "angularSensibility",
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1380-L1381` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L352-L353) · [Before (L1380-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1380-L1381)

```diff
-             has: pp => "sideOrientation" in pp,
-             get: pp => pp.sideOrientation,
+             has: QQ => "angularSensibility" in QQ,
+             get: QQ => QQ.angularSensibility,
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1383` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L355) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1383)

```diff
-               pp.sideOrientation = ip
+               QQ.angularSensibility = WQ
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1387` → after: `L359-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L359-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L359-L407) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1387)

```diff
-         }, Hi, di), (0, Op.j)(null, null, Cp, {
+         }, sQ, FQ), PQ && Object.defineProperty(QQ, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: PQ
+         })
+       })(), QQ
+     })();
+     sQ.d.FreeCameraMouseInput = IQ;
+     var jQ = XQ(40453);
+     let BQ = (() => {
+       var QQ;
+       let WQ, XQ, TQ, zQ = [],
+         sQ = [],
+         FQ = [],
+         gQ = [],
+ ... (33 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1389` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L409) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1389)

```diff
-           name: "_alphaMode",
+           name: "wheelPrecisionX",
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1393-L1394` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L413-L414) · [Before (L1393-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1393-L1394)

```diff
-             has: pp => "_alphaMode" in pp,
-             get: pp => pp._alphaMode,
+             has: QQ => "wheelPrecisionX" in QQ,
+             get: QQ => QQ.wheelPrecisionX,
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1396` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L416) · [Before (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1396)

```diff
-               pp._alphaMode = ip
+               QQ.wheelPrecisionX = WQ
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1400` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L420) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1400)

```diff
-         }, ei, ui), (0, Op.j)(null, null, Ep, {
+         }, zQ, sQ), (0, wQ.k)(null, null, XQ, {
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1402` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L422) · [Before (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1402)

```diff
-           name: "_needDepthPrePass",
+           name: "wheelPrecisionY",
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1406-L1407` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L426-L427) · [Before (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1406-L1407)

```diff
-             has: pp => "_needDepthPrePass" in pp,
-             get: pp => pp._needDepthPrePass,
+             has: QQ => "wheelPrecisionY" in QQ,
+             get: QQ => QQ.wheelPrecisionY,
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1409` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L429) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1409)

```diff
-               pp._needDepthPrePass = ip
+               QQ.wheelPrecisionY = WQ
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1413` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L433) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1413)

```diff
-         }, ji, ki), (0, Op.j)(null, null, Xp, {
+         }, FQ, gQ), (0, wQ.k)(null, null, TQ, {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1415` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L435) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1415)

```diff
-           name: "disableDepthWrite",
+           name: "wheelPrecisionZ",
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1419-L1420` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L439-L440) · [Before (L1419-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1419-L1420)

```diff
-             has: pp => "disableDepthWrite" in pp,
-             get: pp => pp.disableDepthWrite,
+             has: QQ => "wheelPrecisionZ" in QQ,
+             get: QQ => QQ.wheelPrecisionZ,
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1422` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L442) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1422)

```diff
-               pp.disableDepthWrite = ip
+               QQ.wheelPrecisionZ = WQ
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1426-L1428` → after: `L446-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L446-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L446-L563) · [Before (L1426-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1426-L1428)

```diff
-         }, mi, Ri), (0, Op.j)(null, null, lp, {
-           kind: "field",
-           name: "disableColorWrite",
+         }, IQ, BQ), PQ && Object.defineProperty(QQ, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: PQ
+         })
+       })(), QQ
+     })();
+     var yQ;
+     ! function(QQ) {
+       QQ[QQ.MoveRelative = 0] = "MoveRelative", QQ[QQ.RotateRelative = 1] = "RotateRelative", QQ[QQ.MoveScene = 2] = "MoveScene"
+     }(yQ || (yQ = {}));
+     let VQ = (() => {
+       var QQ;
+       let WQ, XQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ = BQ,
+         jQ = [];
+ ... (102 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1432-L1433` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L567) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1432-L1433)

```diff
-             has: pp => "disableColorWrite" in pp,
-             get: pp => pp.disableColorWrite,
+             has: QQ => "wheelXMoveRelative" in QQ,
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1435` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L569) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1435)

```diff
-               pp.disableColorWrite = ip
+               QQ.wheelXMoveRelative = WQ
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1439-L1441` → after: `L573-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L573-L575) · [Before (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1439-L1441)

```diff
-         }, qi, Mi), (0, Op.j)(null, null, Qp, {
-           kind: "field",
-           name: "forceDepthWrite",
+         }, null, jQ), (0, wQ.k)(QQ, null, XQ, {
+           kind: "setter",
+           name: "wheelYMoveRelative",
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1445-L1446` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L579) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1445-L1446)

```diff
-             has: pp => "forceDepthWrite" in pp,
-             get: pp => pp.forceDepthWrite,
+             has: QQ => "wheelYMoveRelative" in QQ,
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1448` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L581) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1448)

```diff
-               pp.forceDepthWrite = ip
+               QQ.wheelYMoveRelative = WQ
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1452-L1454` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L585-L587) · [Before (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1452-L1454)

```diff
-         }, Ci, Ei), (0, Op.j)(null, null, Jp, {
-           kind: "field",
-           name: "depthFunction",
+         }, null, jQ), (0, wQ.k)(QQ, null, zQ, {
+           kind: "setter",
+           name: "wheelZMoveRelative",
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1458-L1459` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L591) · [Before (L1458-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1458-L1459)

```diff
-             has: pp => "depthFunction" in pp,
-             get: pp => pp.depthFunction,
+             has: QQ => "wheelZMoveRelative" in QQ,
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1461` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L593) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1461)

```diff
-               pp.depthFunction = ip
+               QQ.wheelZMoveRelative = WQ
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1465-L1467` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L597-L599) · [Before (L1465-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1465-L1467)

```diff
-         }, Xi, li), (0, Op.j)(null, null, Bp, {
-           kind: "field",
-           name: "separateCullingPass",
+         }, null, jQ), (0, wQ.k)(QQ, null, sQ, {
+           kind: "setter",
+           name: "wheelXRotateRelative",
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1471-L1472` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L603) · [Before (L1471-L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1471-L1472)

```diff
-             has: pp => "separateCullingPass" in pp,
-             get: pp => pp.separateCullingPass,
+             has: QQ => "wheelXRotateRelative" in QQ,
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1474` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L605) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1474)

```diff
-               pp.separateCullingPass = ip
+               QQ.wheelXRotateRelative = WQ
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1478-L1480` → after: `L609-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L609-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L609-L611) · [Before (L1478-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1478-L1480)

```diff
-         }, Qi, Ji), (0, Op.j)(null, null, Np, {
-           kind: "field",
-           name: "_fogEnabled",
+         }, null, jQ), (0, wQ.k)(QQ, null, FQ, {
+           kind: "setter",
+           name: "wheelYRotateRelative",
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1484-L1485` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L615) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1484-L1485)

```diff
-             has: pp => "_fogEnabled" in pp,
-             get: pp => pp._fogEnabled,
+             has: QQ => "wheelYRotateRelative" in QQ,
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1487` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L617) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1487)

```diff
-               pp._fogEnabled = ip
+               QQ.wheelYRotateRelative = WQ
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1491-L1493` → after: `L621-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L621-L623) · [Before (L1491-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1491-L1493)

```diff
-         }, Bi, Ni), (0, Op.j)(null, null, Tp, {
-           kind: "field",
-           name: "pointSize",
+         }, null, jQ), (0, wQ.k)(QQ, null, PQ, {
+           kind: "setter",
+           name: "wheelZRotateRelative",
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1497-L1498` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L627) · [Before (L1497-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1497-L1498)

```diff
-             has: pp => "pointSize" in pp,
-             get: pp => pp.pointSize,
+             has: QQ => "wheelZRotateRelative" in QQ,
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1500` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L629) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1500)

```diff
-               pp.pointSize = ip
+               QQ.wheelZRotateRelative = WQ
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1504-L1506` → after: `L633-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L633-L635) · [Before (L1504-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1504-L1506)

```diff
-         }, Ti, fi), (0, Op.j)(null, null, fp, {
-           kind: "field",
-           name: "zOffset",
+         }, null, jQ), (0, wQ.k)(QQ, null, gQ, {
+           kind: "setter",
+           name: "wheelXMoveScene",
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1510-L1511` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L639) · [Before (L1510-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1510-L1511)

```diff
-             has: pp => "zOffset" in pp,
-             get: pp => pp.zOffset,
+             has: QQ => "wheelXMoveScene" in QQ,
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1513` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L641) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1513)

```diff
-               pp.zOffset = ip
+               QQ.wheelXMoveScene = WQ
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1517-L1519` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L645-L647) · [Before (L1517-L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1517-L1519)

```diff
-         }, bi, ai), (0, Op.j)(null, null, bp, {
-           kind: "field",
-           name: "zOffsetUnits",
+         }, null, jQ), (0, wQ.k)(QQ, null, JQ, {
+           kind: "setter",
+           name: "wheelYMoveScene",
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1523-L1524` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L651) · [Before (L1523-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1523-L1524)

```diff
-             has: pp => "zOffsetUnits" in pp,
-             get: pp => pp.zOffsetUnits,
+             has: QQ => "wheelYMoveScene" in QQ,
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1526` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L653) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1526)

```diff
-               pp.zOffsetUnits = ip
+               QQ.wheelYMoveScene = WQ
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1530-L1532` → after: `L657-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L657-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L657-L659) · [Before (L1530-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1530-L1532)

```diff
-         }, ni, Fi), (0, Op.j)(null, null, Fp, {
-           kind: "field",
-           name: "_isVertexOutputInvariant",
+         }, null, jQ), (0, wQ.k)(QQ, null, rQ, {
+           kind: "setter",
+           name: "wheelZMoveScene",
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1536-L1537` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L663) · [Before (L1536-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1536-L1537)

```diff
-             has: pp => "_isVertexOutputInvariant" in pp,
-             get: pp => pp._isVertexOutputInvariant,
+             has: QQ => "wheelZMoveScene" in QQ,
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1539` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L665) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1539)

```diff
-               pp._isVertexOutputInvariant = ip
+               QQ.wheelZMoveScene = WQ
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1543` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L669) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1543)

```diff
-         }, gi, Gi), Ip && Object.defineProperty(pp, Symbol.metadata, {
+         }, null, jQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1549-L1555` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L675) · [Before (L1549-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1549-L1555)

```diff
-       })(), pp.TriangleFillMode = 0, pp.WireFrameFillMode = 1, pp.PointFillMode = 2, pp.PointListDrawMode = 3, pp.LineListDrawMode = 4, pp.LineLoopDrawMode = 5, pp.LineStripDrawMode = 6, pp.TriangleStripDrawMode = 7, pp.TriangleFanDrawMode = 8, pp.ClockWiseSideOrientation = 0, pp … [truncated]
-         pp._FresnelDirtyCallBack(ip), pp._MiscDirtyCallBack(ip)
-       }, pp._TextureAndMiscDirtyCallBack = ip => {
-         pp._TextureDirtyCallBack(ip), pp._MiscDirtyCallBack(ip)
-       }, pp._DirtyCallbackArray = [], pp._RunDirtyCallBacks = ip => {
-         for (const cp of pp._DirtyCallbackArray) cp(ip)
-       }, pp
+       })(), QQ
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1557-L1871` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L677-L678) · [Before (L1557-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1557-L1871)

```diff
-     Object.getOwnPropertyDescriptor(tp.prototype, "pluginManager") || Object.defineProperty(tp.prototype, "pluginManager", (0, vp.h)("Material", "pluginManager"))
-   },
-   40519: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => op
-     });
-     var Op = cp(40113);
-     class op {
-       static get DiffuseTextureEnabled() {
-         return this._DiffuseTextureEnabled
-       }
-       static set DiffuseTextureEnabled(pp) {
-         this._DiffuseTextureEnabled !== pp && (this._DiffuseTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseWeightTextureEnabled() {
-         return this._BaseWeightTextureEnabled
- ... (299 more removed lines; see GitHub link above)
+     sQ.d.FreeCameraMouseWheelInput = VQ;
+     let DQ = (() => {
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1873-L2092` → after: `L680-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L680-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L680-L713) · [Before (L1873-L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L1873-L2092)

```diff
-       if (ip && pp && (pp.computeBonesUsingShaders && ip._bonesComputationForcedToCPU && (pp.computeBonesUsingShaders = !1), pp.useBones && pp.computeBonesUsingShaders && pp.skeleton)) {
-         const op = pp.skeleton;
-         if (op.isUsingTextureForMatrices && ip.getUniformIndex("boneTextureInfo") > -1) {
-           const cp = op.getTransformMatrixTexture(pp);
-           ip.setTexture("boneSampler", cp), ip.setFloat2("boneTextureInfo", op._textureWidth, op._textureHeight)
-         } else {
-           const Ip = op.getTransformMatrices(pp);
-           Ip && (ip.setMatrices("mBones", Ip), cp && pp.Gl().prePassRenderer && pp.Gl().prePassRenderer.getIndex(2) && (cp.previousBones[pp.uniqueId] || (cp.previousBones[pp.uniqueId] = Ip.slice()), ip.setMatrices("mPreviousBones", cp.previousBones[pp.uniqueId]), Op = Ip, cp.prev … [truncated]
-         }
-       }
-     }
- 
-     function kp(pp, ip, cp, Op, op) {
-       let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-       pp._bindLight(ip, cp, Op, op, Ip)
-     }
- ... (204 more removed lines; see GitHub link above)
+       let WQ, XQ, zQ = [],
+         sQ = [],
+         FQ = [],
+         gQ = [];
+       return QQ = class {
+         constructor() {
+           let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           this.allowMouse = QQ, this.touchAngularSensibility = (0, wQ.n)(this, zQ, 2e5), this.touchMoveSensibility = ((0, wQ.n)(this, sQ), (0, wQ.n)(this, FQ, 250)), this.singleFingerRotate = ((0, wQ.n)(this, gQ), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
+         }
+         attachControl(QQ) {
+           QQ = PQ.g.BackCompatCameraNoPreventDefault(arguments);
+           let WQ = null;
+           if (void 0 === this._pointerInput && (this._onLostFocus = () => {
+               this._offsetX = null, this._offsetY = null
+             }, this._pointerInput = XQ => {
+               const wQ = XQ.event,
+ ... (18 more added lines; see GitHub link above)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2094` → after: `L715-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L715-L717) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2094)

```diff
-             }
+             }), this._observer = this.camera.sE()._inputManager._addCameraPointerObserver(this._pointerInput, rQ.d.POINTERDOWN | rQ.d.POINTERUP | rQ.d.POINTERMOVE), this._onLostFocus) {
+             const QQ = this.camera.Uj().getInputElement();
+             QQ && QQ.addEventListener("blur", this._onLostFocus)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2296-L2325` → after: `L720-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L720-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L720-L726) · [Before (L2296-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2296-L2325)

```diff
-       }
-       return cp
-     }
- 
-     function Ip(pp, ip) {
-       ip.forEach(((ip, cp) => {
-         const Op = `vp_${cp}_info`;
-         pp.setFloat4(Op, ip.offset, ip.stride, ip.type, ip.normalized ? 1 : 0)
-       }))
-     }
-   },
-   40506: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => xp,
-       f: () => Lp
-     });
- ... (14 more removed lines; see GitHub link above)
+         detachControl() {
+           if (this._pointerInput) {
+             if (this._observer && (this.camera.sE()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
+               const QQ = this.camera.Uj().getInputElement();
+               QQ && QQ.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+             }
+             this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2328-L2333` → after: `L729-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L729-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L729-L746) · [Before (L2328-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2328-L2333)

```diff
-         static extractMinAndMax(pp, ip, cp, Op, op, Ip) {
-           for (let Sp = ip, xp = ip * Op; Sp < ip + cp; Sp++, xp += Op) {
-             const ip = pp[xp],
-               cp = pp[xp + 1],
-               Op = pp[xp + 2];
-             op.minimizeInPlaceFromFloats(ip, cp, Op), Ip.maximizeInPlaceFromFloats(ip, cp, Op)
+         checkInputs() {
+           if (null === this._offsetX || null === this._offsetY) return;
+           if (0 === this._offsetX && 0 === this._offsetY) return;
+           const QQ = this.camera,
+             WQ = QQ.movement.input,
+             XQ = WQ.getEntry("touch", "rotate"),
+             wQ = WQ.getEntry("touch", "translate"),
+             qQ = QQ._calculateHandednessMultiplier(),
+             zQ = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
+           if (XQ) {
+             const WQ = XQ.sensitivity ?? 1 / this.touchAngularSensibility;
+             QQ.cameraRotation.y = this._offsetX * qQ * WQ, zQ && (QQ.cameraRotation.x = -this._offsetY * qQ * WQ)
+           }
+           if (!zQ && wQ) {
+             const WQ = QQ._computeLocalCameraSpeed(),
+               XQ = wQ.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
+ ... (2 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2338-L2345` → after: `L757-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L757-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L757-L760) · [Before (L2338-L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2338-L2345)

```diff
-         ip = [Ip.f.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
-         }))], cp = [Ip.f.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], (0, Op.j)(pp, null, ip, {
-           kind: "method",
-           name: "extractMinAndMaxIndexed",
-           static: !0,
+         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
+           kind: "field",
+           name: "touchAngularSensibility",
+           static: !1,
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2348-L2349` → after: `L763-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L763-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L763-L767) · [Before (L2348-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2348-L2349)

```diff
-             has: pp => "extractMinAndMaxIndexed" in pp,
-             get: pp => pp.extractMinAndMaxIndexed
+             has: QQ => "touchAngularSensibility" in QQ,
+             get: QQ => QQ.touchAngularSensibility,
+             set: (QQ, WQ) => {
+               QQ.touchAngularSensibility = WQ
+             }
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2352-L2355` → after: `L770-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L770-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L770-L773) · [Before (L2352-L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2352-L2355)

```diff
-         }, null, op), (0, Op.j)(pp, null, cp, {
-           kind: "method",
-           name: "extractMinAndMax",
-           static: !0,
+         }, zQ, sQ), (0, wQ.k)(null, null, XQ, {
+           kind: "field",
+           name: "touchMoveSensibility",
+           static: !1,
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2358-L2359` → after: `L776-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L776-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L776-L780) · [Before (L2358-L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2358-L2359)

```diff
-             has: pp => "extractMinAndMax" in pp,
-             get: pp => pp.extractMinAndMax
+             has: QQ => "touchMoveSensibility" in QQ,
+             get: QQ => QQ.touchMoveSensibility,
+             set: (QQ, WQ) => {
+               QQ.touchMoveSensibility = WQ
+             }
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2362` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L783) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2362)

```diff
-         }, null, op), Sp && Object.defineProperty(pp, Symbol.metadata, {
+         }, FQ, gQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2367` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L788) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2367)

```diff
-         }), (0, Op.l)(pp, op)
+         })
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2370-L2427` → after: `L791-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L791-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L791-L795) · [Before (L2370-L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2370-L2427)

```diff
- 
-     function xp(pp, ip, cp, Op) {
-       let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const xp = new op.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         Lp = new op.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return Sp.extractMinAndMaxIndexed(pp, ip, cp, Op, xp, Lp), Ip && (xp.x -= xp.x * Ip.x + Ip.y, xp.y -= xp.y * Ip.x + Ip.y, xp.z -= xp.z * Ip.x + Ip.y, Lp.x += Lp.x * Ip.x + Ip.y, Lp.y += Lp.y * Ip.x + Ip.y, Lp.z += Lp.z * Ip.x + Ip.y), {
-         minimum: xp,
-         maximum: Lp
-       }
-     }
- 
-     function Lp(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         Ip = arguments.length > 4 ? arguments[4] : void 0;
-       const xp = new op.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         Lp = new op.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
- ... (42 more removed lines; see GitHub link above)
+     sQ.d.FreeCameraTouchInput = DQ;
+     var pQ, GQ, UQ, bQ = XQ(40153);
+     class vQ extends sQ.g {
+       constructor(QQ) {
+         super(QQ), this._mouseInput = null, this._mouseWheelInput = null
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2429-L2430` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L797-L798) · [Before (L2429-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2429-L2430)

```diff
-       _setMainDrawWrapperOverride(pp) {
-         this._mainDrawWrapperOverride = pp
+       addKeyboard() {
+         return this.add(new gQ), this
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2432-L2477` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L800) · [Before (L2432-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2432-L2477)

```diff
-       setEffect(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           cp = arguments.length > 2 ? arguments[2] : void 0,
-           Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const op = this._drawWrapper;
-         op.setEffect(pp, ip, Op), void 0 !== cp && (op.materialContext = cp), pp || (op.defines = null, op.materialContext = void 0)
-       }
-       resetDrawCache(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._drawWrappers) {
-           if (void 0 !== pp) return void this._removeDrawWrapper(pp, !0, ip);
-           for (const pp of this._drawWrappers) pp?.dispose(ip)
-         }
-         this._drawWrappers = []
-       }
-       static AddToMesh(pp, ip, cp, Op, op, Ip, Sp) {
- ... (30 more removed lines; see GitHub link above)
+       addMouse() {
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2479-L2503` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L802) · [Before (L2479-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2479-L2503)

```diff
-         const ip = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
-         if (!ip) return pp && this._mesh.Gl()._hasDefaultMaterial ? this._mesh.Gl().defaultMaterial : null;
-         if (this._isMultiMaterial(ip)) {
-           const pp = ip.getSubMaterial(this.materialIndex);
-           return this._currentMaterial !== pp && (this._currentMaterial = pp, this.resetDrawCache()), pp
-         }
-         return ip
-       }
-       _isMultiMaterial(pp) {
-         return void 0 !== pp.getSubMaterial
-       }
-       refreshBoundingInfo() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
-         if (pp || (pp = this._renderingMesh.getVerticesData(op.j.PositionKind)), !pp) return this._boundingInfo = this._mesh.bJ(), this;
-         const ip = this._renderingMesh.NOp();
- ... (9 more removed lines; see GitHub link above)
+         return this._mouseInput || (this._mouseInput = new IQ(QQ), this.add(this._mouseInput)), this
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2505-L2506` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L804-L805) · [Before (L2505-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2505-L2506)

```diff
-       _checkCollision(pp) {
-         return this.bJ()._checkCollision(pp)
+       removeMouse() {
+         return this._mouseInput && this.remove(this._mouseInput), this
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2508-L2510` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L807-L808) · [Before (L2508-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2508-L2510)

```diff
-       updateBoundingInfo(pp) {
-         let ip = this.bJ();
-         return ip || (this.refreshBoundingInfo(), ip = this.bJ()), ip && ip.update(pp), this
+       addMouseWheel() {
+         return this._mouseWheelInput || (this._mouseWheelInput = new VQ, this.add(this._mouseWheelInput)), this
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2512-L2514` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L810-L811) · [Before (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2512-L2514)

```diff
-       isInFrustum(pp) {
-         const ip = this.bJ();
-         return !!ip && ip.isInFrustum(pp, this._mesh.cullingStrategy)
+       removeMouseWheel() {
+         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2516-L2518` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L813-L814) · [Before (L2516-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2516-L2518)

```diff
-       isCompletelyInFrustum(pp) {
-         const ip = this.bJ();
-         return !!ip && ip.isCompletelyInFrustum(pp)
+       addTouch() {
+         return this.add(new DQ), this
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2520-L2521` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L816-L817) · [Before (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2520-L2521)

```diff
-       render(pp) {
-         return this._renderingMesh.render(this, pp, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
+       clear() {
+         super.clear(), this._mouseInput = null
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2523-L2586` → after: `L819-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L819-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L819-L836) · [Before (L2523-L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2523-L2586)

```diff
-       _getLinesIndexBuffer(pp, ip) {
-         if (!this._linesIndexBuffer) {
-           const cp = 6 * Math.floor(this.indexCount / 3),
-             Op = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(cp) : new Uint16Array(cp);
-           let op = 0;
-           if (0 === pp.length)
-             for (let pp = this.indexStart; pp < this.indexStart + this.indexCount; pp += 3) Op[op++] = pp, Op[op++] = pp + 1, Op[op++] = pp + 1, Op[op++] = pp + 2, Op[op++] = pp + 2, Op[op++] = pp;
-           else
-             for (let ip = this.indexStart; ip < this.indexStart + this.indexCount; ip += 3) Op[op++] = pp[ip], Op[op++] = pp[ip + 1], Op[op++] = pp[ip + 1], Op[op++] = pp[ip + 2], Op[op++] = pp[ip + 2], Op[op++] = pp[ip];
-           this._linesIndexBuffer = ip.createIndexBuffer(Op), this._linesIndexCount = Op.length
-         }
-         return this._linesIndexBuffer
-       }
-       canIntersects(pp) {
-         const ip = this.bJ();
-         return !!ip && pp.intersectsBox(ip.boundingBox)
- ... (48 more removed lines; see GitHub link above)
+     }(pQ = vQ.prototype).addDeviceOrientation ?? (pQ.addDeviceOrientation = (0, bQ.h)("FreeCameraInputsManager", "addDeviceOrientation")), (GQ = vQ.prototype).addVirtualJoystick ?? (GQ.addVirtualJoystick = (0, bQ.h)("FreeCameraInputsManager", "addVirtualJoystick")), (UQ = vQ.prot … [truncated]
+     var dQ = XQ(40170),
+       HQ = XQ(37418);
+     let aQ = (() => {
+         var QQ;
+         let WQ, XQ, sQ, FQ, gQ = zQ.c,
+           JQ = [],
+           rQ = [],
+           IQ = [],
+           jQ = [],
+           BQ = [],
+           yQ = [],
+           VQ = [],
+           DQ = [];
+         return QQ = class extends gQ {
+           get angularSensibility() {
+ ... (2 more added lines; see GitHub link above)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2588-L2596` → after: `L838-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L838-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L838-L840) · [Before (L2588-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2588-L2596)

```diff
-           const Pp = ip[Op],
-             Wp = ip[Dp],
-             yp = ip[Ap];
-           if (!Pp || !Wp || !yp) continue;
-           if (Sp && !Sp(Pp, Wp, yp, pp, Op, Dp, Ap)) continue;
-           const Up = pp.intersectsTriangle(Pp, Wp, yp);
-           if (Up) {
-             if (Up.distance < 0) continue;
-             if ((Ip || !xp || Up.distance < xp.distance) && (xp = Up, xp.faceId = Lp, Ip)) break
+           set angularSensibility(QQ) {
+             const WQ = this.inputs.attached.mouse;
+             WQ && (WQ.angularSensibility = QQ)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2598-L2611` → after: `L842-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L842-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L842-L844) · [Before (L2598-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2598-L2611)

```diff
-         }
-         return xp
-       }
-       _intersectUnIndexedTriangles(pp, ip, cp, Op, op) {
-         let Ip = null;
-         for (let Sp = this.verticesStart; Sp < this.verticesStart + this.verticesCount; Sp += 3) {
-           const cp = ip[Sp],
-             xp = ip[Sp + 1],
-             Lp = ip[Sp + 2];
-           if (op && !op(cp, xp, Lp, pp, -1, -1, -1)) continue;
-           const Yp = pp.intersectsTriangle(cp, xp, Lp);
-           if (Yp) {
-             if (Yp.distance < 0) continue;
-             if ((Op || !Ip || Yp.distance < Ip.distance) && (Ip = Yp, Ip.faceId = Sp / 3, Op)) break
+           get keysUp() {
+             const QQ = this.inputs.attached.keyboard;
+             return QQ ? QQ.keysUp : []
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L2613-L2648` → after: `L846-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L846-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/266.js#L846-L1033) · [Before (L2613-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/266.js#L2613-L2648)

```diff
-         }
-         return Ip
-       }
-       _rebuild() {
-         this._linesIndexBuffer && (this._linesIndexBuffer = null)
-       }
-       clone(pp, ip) {
-         const cp = new Dp(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, pp, ip, !1);
-         if (!this.IsGlobal) {
-           const pp = this.bJ();
-           if (!pp) return cp;
-           cp._boundingInfo = new Sp.d(pp.minimum, pp.maximum)
-         }
-         return cp
-       }
-       dispose() {
- ... (20 more removed lines; see GitHub link above)
+           set keysUp(QQ) {
+             const WQ = this.inputs.attached.keyboard;
+             WQ && (WQ.keysUp = QQ)
+           }
+           get keysUpward() {
+             const QQ = this.inputs.attached.keyboard;
+             return QQ ? QQ.keysUpward : []
+           }
+           set keysUpward(QQ) {
+             const WQ = this.inputs.attached.keyboard;
+             WQ && (WQ.keysUpward = QQ)
+           }
+           get keysDown() {
+             const QQ = this.inputs.attached.keyboard;
+             return QQ ? QQ.keysDown : []
+           }
+ ... (172 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/267.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/267.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L4)

```diff
-   41851: (pp, ip, cp) => {
+   40525: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L8-L19` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L8-L16) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L8-L19)

```diff
-     class Op {}
-     Op.AUTOSAMPLERSUFFIX = "Sampler", Op.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Op.ALPHA_DISABLE = 0, Op.ALPHA_ADD = 1, Op.ALPHA_COMBINE = 2, Op.ALPHA_SUBTRACT = 3, Op.ALPHA_MULTIPLY = 4, Op.ALPHA_MAXIMIZED = 5, Op.ALPHA_ONEONE = 6, Op.ALPHA_PREMULTIPLIED = 7, Op.ALPH … [truncated]
-   },
-   41823: (pp, ip, cp) => {
-     cp.d(ip, {
-       d: () => Lp
-     });
-     var Op = cp(40203),
-       op = cp(40210),
-       Ip = cp(37320),
-       Sp = cp(40451),
-       xp = cp(40423);
+     var wQ = XQ(40260),
+       qQ = XQ(40268),
+       TQ = XQ(37370),
+       zQ = XQ(37546),
+       sQ = XQ(40491),
+       FQ = XQ(40400),
+       PQ = XQ(37418),
+       gQ = XQ(40470),
+       JQ = XQ(40286);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L21-L22` → after: `L18-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L18-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L18-L39) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L21-L22)

```diff
-       var pp;
-       let ip, cp, Lp, Yp, Dp = Sp.d,
+       var QQ, WQ;
+       let XQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ = sQ.e,
+         HQ = [],
+         aQ = [],
+         lQ = [],
+         hQ = [],
+         iQ = [],
+         cQ = [],
+         AQ = [],
+         RQ = [],
+         EQ = [],
+         CQ = [],
+         uQ = [],
+         LQ = [],
+         kQ = [],
+         fQ = [],
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L25-L29` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L42-L43) · [Before (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L25-L29)

```diff
-         constructor() {
-           super(...arguments), this._position = (0, Op.l)(this, Ap), this._needProjectionMatrixCompute = !0, this._viewMatrix = Ip.b.Identity(), this._projectionMatrix = Ip.b.Identity()
-         }
-         _setPosition(pp) {
-           this._position = pp
+         get range() {
+           return this._range
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L31-L32` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L45-L46) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L31-L32)

```diff
-         get position() {
-           return this._position
+         set range(QQ) {
+           this._range = QQ, this._inverseSquaredRange = 1 / (this.range * this.range)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L34-L35` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L48-L49) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L34-L35)

```diff
-         set position(pp) {
-           this._setPosition(pp)
+         get intensityMode() {
+           return this._intensityMode
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L37-L38` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L51-L52) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L37-L38)

```diff
-         _setDirection(pp) {
-           this._direction = pp
+         set intensityMode(QQ) {
+           this._intensityMode = QQ, this._computePhotometricScale()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L40-L41` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L54-L55) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L40-L41)

```diff
-         get direction() {
-           return this._direction
+         get radius() {
+           return this._radius
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L43-L44` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L57-L58) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L43-L44)

```diff
-         set direction(pp) {
-           this._setDirection(pp)
+         set radius(QQ) {
+           this._radius = QQ, this._computePhotometricScale()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L46-L47` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L60-L61) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L46-L47)

```diff
-         get shadowMinZ() {
-           return this._shadowMinZ
+         get renderPriority() {
+           return (0, wQ.d)(this, WQ, "f")
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L49-L50` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L63-L64) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L49-L50)

```diff
-         set shadowMinZ(pp) {
-           this._shadowMinZ = pp, this.forceProjectionMatrixCompute()
+         set renderPriority(QQ) {
+           (0, wQ.h)(this, WQ, QQ, "f")
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L52-L53` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L66-L67) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L52-L53)

```diff
-         get shadowMaxZ() {
-           return this._shadowMaxZ
+         get shadowEnabled() {
+           return this._shadowEnabled
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L55-L56` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L69-L70) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L55-L56)

```diff
-         set shadowMaxZ(pp) {
-           this._shadowMaxZ = pp, this.forceProjectionMatrixCompute()
+         set shadowEnabled(QQ) {
+           this._shadowEnabled !== QQ && (this._shadowEnabled = QQ, this._markMeshesAsLightDirty())
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L58-L59` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L72-L73) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L58-L59)

```diff
-         computeTransformedInformation() {
-           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = Ip.o.Zero()), Ip.o.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+         get includedOnlyMeshes() {
+           return this._includedOnlyMeshes
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L61-L62` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L75-L76) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L61-L62)

```diff
-         getDepthScale() {
-           return 50
+         set includedOnlyMeshes(QQ) {
+           this._includedOnlyMeshes = QQ, this._hookArrayForIncludedOnly(QQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L64-L65` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L78-L79) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L64-L65)

```diff
-         getShadowDirection(pp) {
-           return this.transformedDirection ? this.transformedDirection : this.direction
+         get excludedMeshes() {
+           return this._excludedMeshes
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L67-L77` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L81-L82) · [Before (L67-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L67-L77)

```diff
-         getAbsolutePosition() {
-           return this.transformedPosition ? this.transformedPosition : this.position
-         }
-         setDirectionToTarget(pp) {
-           return this.direction = Ip.o.Normalize(pp.subtract(this.position)), this.direction
-         }
-         getRotation() {
-           this.direction.normalize();
-           const pp = Ip.o.Cross(this.direction, xp.c.Y),
-             ip = Ip.o.Cross(pp, this.direction);
-           return Ip.o.RotationFromAxis(pp, ip, this.direction)
+         set excludedMeshes(QQ) {
+           this._excludedMeshes = QQ, this._hookArrayForExcluded(QQ)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L79-L80` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L84-L85) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L79-L80)

```diff
-         needCube() {
-           return !1
+         get excludeWithLayerMask() {
+           return this._excludeWithLayerMask
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L82-L83` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L87-L88) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L82-L83)

```diff
-         needProjectionMatrixCompute() {
-           return this._needProjectionMatrixCompute
+         set excludeWithLayerMask(QQ) {
+           this._excludeWithLayerMask = QQ, this._resyncMeshes()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L85-L86` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L90-L91) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L85-L86)

```diff
-         forceProjectionMatrixCompute() {
-           this._needProjectionMatrixCompute = !0
+         get includeOnlyWithLayerMask() {
+           return this._includeOnlyWithLayerMask
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L88-L92` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L93-L94) · [Before (L88-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L88-L92)

```diff
-         _initCache() {
-           super._initCache(), this._cache.position = Ip.o.Zero()
-         }
-         _isSynchronized() {
-           return !!this._cache.position.equals(this.position)
+         set includeOnlyWithLayerMask(QQ) {
+           this._includeOnlyWithLayerMask = QQ, this._resyncMeshes()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L94-L95` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L96-L97) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L94-L95)

```diff
-         computeWorldMatrix(pp) {
-           return !pp && this.isSynchronized() ? (this._currentRenderId = this.Gl().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.rM(this.position), this._worldMatrix || (this._worldMatrix = Ip.b.Identity()), Ip.b.TranslationToRef(this.position.x,  … [truncated]
+         get lightmapMode() {
+           return this._lightmapMode
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L97-L98` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L99-L100) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L97-L98)

```diff
-         getDepthMinZ(pp) {
-           return void 0 !== this.shadowMinZ ? this.shadowMinZ : pp?.minZ || 0
+         set lightmapMode(QQ) {
+           this._lightmapMode !== QQ && (this._lightmapMode = QQ, this._markMeshesAsLightDirty())
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L100-L101` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L102-L103) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L100-L101)

```diff
-         getDepthMaxZ(pp) {
-           return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : pp?.maxZ || 1e4
+         getViewMatrix(QQ) {
+           return null
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L103-L104` → after: `L105-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L105-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L105-L136) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L103-L104)

```diff
-         setShadowProjectionMatrix(pp, ip, cp) {
-           return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(ip, cp, pp) : this._setDefaultShadowProjectionMatrix(pp, ip, cp), this
+         getProjectionMatrix(QQ, WQ) {
+           return null
+         }
+         constructor(XQ, qQ, TQ) {
+           super(XQ, qQ, !1), this.diffuse = ((0, wQ.n)(this, HQ), (0, wQ.n)(this, aQ, new zQ.b(1, 1, 1))), this.specular = ((0, wQ.n)(this, lQ), (0, wQ.n)(this, hQ, new zQ.b(1, 1, 1))), this.falloffType = ((0, wQ.n)(this, iQ), (0, wQ.n)(this, cQ, QQ.FALLOFF_DEFAULT)), this.intens … [truncated]
+         }
+         transferTexturesToEffect(QQ, WQ) {
+           return this
+         }
+         _bindLight(QQ, WQ, XQ, wQ) {
+           let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
+           const TQ = QQ.toString();
+           let sQ = !1;
+           if (this._uniformBuffer.bindToEffect(XQ, "Light" + TQ), this._renderId !== WQ.getRenderId() || this._lastUseSpecular !== wQ || !this._uniformBuffer.useUbo) {
+             this._renderId = WQ.getRenderId(), this._lastUseSpecular = wQ;
+             const QQ = this.getScaledIntensity();
+ ... (16 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L107` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L139) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L107)

```diff
-           super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
+           super._syncParentEnabledState(), this.rG() || this._resyncMeshes()
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L109-L114` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L141-L142) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L109-L114)

```diff
-         getViewMatrix(pp) {
-           const ip = Ip.i.Zy[0];
-           let cp = this.position;
-           this.computeTransformedInformation() && (cp = this.transformedPosition), Ip.o.NormalizeToRef(this.getShadowDirection(pp), ip), 1 === Math.abs(Ip.o.Dot(ip, Ip.o.Up())) && (ip.z = 1e-13);
-           const Op = Ip.i.Zy[1];
-           return cp.addToRef(ip, Op), Ip.b.LookAtLHToRef(cp, Op, Ip.o.Up(), this._viewMatrix), this._viewMatrix
+         UH(QQ) {
+           super.UH(QQ), this._resyncMeshes()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L116-L117` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L144-L146) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L116-L117)

```diff
-         getProjectionMatrix(pp, ip) {
-           return this.setShadowProjectionMatrix(this._projectionMatrix, pp ?? this._viewMatrix, ip ?? []), this._projectionMatrix
+         getShadowGenerator() {
+           let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return null === this._shadowGenerators ? null : this._shadowGenerators.get(QQ) ?? null
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L119` → after: `L148-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L148-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L148-L307) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L119)

```diff
-       }, (() => {
+         getShadowGenerators() {
+           return this._shadowGenerators
+         }
+         getAbsolutePosition() {
+           return TQ.s.Zero()
+         }
+         canAffectMesh(QQ) {
+           return !QQ || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(QQ)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(QQ)) && ((0 === this.includeOnlyWithLayerMask | … [truncated]
+         }
+         dispose(QQ) {
+           let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this._shadowGenerators) {
+             const QQ = this._shadowGenerators.values();
+             for (let WQ = QQ.next(); !0 !== WQ.done; WQ = QQ.next()) {
+               WQ.value.dispose()
+             }
+ ... (144 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L121` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L309) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L121)

```diff
-         ip = [(0, op.H)()], cp = [(0, op.H)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], (0, Op.j)(pp, null, ip, {
+         XQ = [(0, qQ.l)()], rQ = [(0, qQ.l)()], IQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], BQ = [(0, qQ.I)()], yQ = [(0, qQ.I)()], VQ = [(0, qQ.I)()], DQ = [(0, qQ.I)()], pQ = [(0, qQ.e)("_reorderLightsInScene")], GQ = [(0, qQ.I)("shadowEnabled")], UQ = [(0, qQ.I)("excludeWithLayerM … [truncated]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L123` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L311) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L123)

```diff
-           name: "position",
+           name: "range",
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L127-L128` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L315-L316) · [Before (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L127-L128)

```diff
-             has: pp => "position" in pp,
-             get: pp => pp.position
+             has: QQ => "range" in QQ,
+             get: QQ => QQ.range
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L131` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L319) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L131)

```diff
-         }, null, Ap), (0, Op.j)(pp, null, cp, {
+         }, null, HQ), (0, wQ.k)(QQ, null, yQ, {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L133` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L321) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L133)

```diff
-           name: "direction",
+           name: "intensityMode",
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L137-L138` → after: `L325-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L325-L326) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L137-L138)

```diff
-             has: pp => "direction" in pp,
-             get: pp => pp.direction
+             has: QQ => "intensityMode" in QQ,
+             get: QQ => QQ.intensityMode
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L141` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L329) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L141)

```diff
-         }, null, Ap), (0, Op.j)(pp, null, Lp, {
+         }, null, HQ), (0, wQ.k)(QQ, null, VQ, {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L143` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L331) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L143)

```diff
-           name: "shadowMinZ",
+           name: "radius",
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L147-L148` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L335-L336) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L147-L148)

```diff
-             has: pp => "shadowMinZ" in pp,
-             get: pp => pp.shadowMinZ
+             has: QQ => "radius" in QQ,
+             get: QQ => QQ.radius
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L151-L153` → after: `L339-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L339-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L339-L406) · [Before (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L151-L153)

```diff
-         }, null, Ap), (0, Op.j)(pp, null, Yp, {
-           kind: "getter",
-           name: "shadowMaxZ",
+         }, null, HQ), (0, wQ.k)(QQ, null, pQ, {
+           kind: "accessor",
+           name: "renderPriority",
+           static: !1,
+           private: !1,
+           access: {
+             has: QQ => "renderPriority" in QQ,
+             get: QQ => QQ.renderPriority,
+             set: (QQ, WQ) => {
+               QQ.renderPriority = WQ
+             }
+           },
+           metadata: WQ
+         }, LQ, kQ), (0, wQ.k)(null, null, XQ, {
+           kind: "field",
+           name: "diffuse",
+ ... (52 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L157-L158` → after: `L410-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L410-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L410-L414) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L157-L158)

```diff
-             has: pp => "shadowMaxZ" in pp,
-             get: pp => pp.shadowMaxZ
+             has: QQ => "_renderPriority" in QQ,
+             get: QQ => QQ._renderPriority,
+             set: (QQ, WQ) => {
+               QQ._renderPriority = WQ
+             }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L161` → after: `L417-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L417-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L417-L469) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L161)

```diff
-         }, null, Ap), Ip && Object.defineProperty(pp, Symbol.metadata, {
+         }, CQ, uQ), (0, wQ.k)(null, null, GQ, {
+           kind: "field",
+           name: "_shadowEnabled",
+           static: !1,
+           private: !1,
+           access: {
+             has: QQ => "_shadowEnabled" in QQ,
+             get: QQ => QQ._shadowEnabled,
+             set: (QQ, WQ) => {
+               QQ._shadowEnabled = WQ
+             }
+           },
+           metadata: WQ
+         }, fQ, SQ), (0, wQ.k)(null, null, UQ, {
+           kind: "field",
+           name: "_excludeWithLayerMask",
+ ... (37 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L167` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L475) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L167)

```diff
-       })(), pp
+       })(), QQ.FALLOFF_DEFAULT = gQ.e.FALLOFF_DEFAULT, QQ.FALLOFF_PHYSICAL = gQ.e.FALLOFF_PHYSICAL, QQ.FALLOFF_GLTF = gQ.e.FALLOFF_GLTF, QQ.FALLOFF_STANDARD = gQ.e.FALLOFF_STANDARD, QQ.LIGHTMAP_DEFAULT = gQ.e.LIGHTMAP_DEFAULT, QQ.LIGHTMAP_SPECULAR = gQ.e.LIGHTMAP_SPECULAR, QQ.LIG … [truncated]
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L170` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L478) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L170)

```diff
-   41843: (pp, ip, cp) => {
+   40491: (QQ, WQ, XQ) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L172` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L480) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L172)

```diff
-       b: () => op
+       e: () => JQ
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L174-L229` → after: `L482-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L482-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L482-L491) · [Before (L174-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L174-L229)

```diff
-     var Op = cp(40654);
-     class op extends Op.d {
-       constructor(pp, ip, cp, op, Ip) {
-         let Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           Lp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
-           Yp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
-           Dp = arguments.length > 9 ? arguments[9] : void 0,
-           Ap = arguments.length > 10 ? arguments[10] : void 0,
-           Pp = arguments.length > 11 ? arguments[11] : void 0,
-           Wp = arguments.length > 12 ? arguments[12] : void 0;
-         super(null, Ip, !Sp, xp, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, Dp), this.format = op, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Yp || (Lp = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Yp || (Lp = … [truncated]
-       }
-       update(pp) {
-         this.updateMipLevel(pp, 0)
-       }
- ... (40 more removed lines; see GitHub link above)
+     var wQ = XQ(40260),
+       qQ = XQ(37370),
+       TQ = XQ(40268),
+       zQ = XQ(37399),
+       sQ = XQ(37392),
+       FQ = XQ(40153),
+       PQ = XQ(40286);
+     class gQ {
+       constructor() {
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new zQ.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L232-L283` → after: `L494-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L494-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L494-L508) · [Before (L232-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L232-L283)

```diff
-   },
-   41884: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op.b
-     });
-     var Op = cp(40614);
-     (0, Op.d)()
-   },
-   41826: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Op.e
-     });
-     var Op = cp(40631);
-     (0, Op.h)()
-   },
-   40631: (pp, ip, cp) => {
- ... (36 more removed lines; see GitHub link above)
+     let JQ = (() => {
+       var QQ;
+       let WQ, XQ, JQ, rQ, IQ, jQ = [],
+         BQ = [],
+         yQ = [],
+         VQ = [],
+         DQ = [],
+         pQ = [],
+         GQ = [],
+         UQ = [],
+         bQ = [],
+         vQ = [];
+       return QQ = class {
+         static AddNodeConstructor(QQ, WQ) {
+           this._NodeConstructors[QQ] = WQ
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L285-L340` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L510-L512) · [Before (L285-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L285-L340)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(pp) {
-         const ip = this.material;
-         if (ip === pp) return;
-         const cp = ip && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(pp), cp && ip?.dispose()
-       }
-       _setInternalMaterial(pp) {
-         this._setMaterial(pp), this.material && (this.material.fillMode = Yp.b.LineListDrawMode, this.material.disableLighting = !0)
-       }
- ... (40 more removed lines; see GitHub link above)
+         static Construct(QQ, WQ, XQ, wQ) {
+           const qQ = this._NodeConstructors[QQ];
+           return qQ ? qQ(WQ, XQ, wQ) : null
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L342-L365` → after: `L514-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L514-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/267.js#L514-L880) · [Before (L342-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/267.js#L342-L365)

```diff
-         return ip
-       }
-       serialize(pp) {
-         super.serialize(pp), pp.color = this.color.BOp(), pp.alpha = this.alpha
-       }
-       static Parse(pp, ip) {
-         const cp = new Pp(pp.name, ip);
-         return cp.color = Ip.d.FromArray(pp.color), cp.alpha = pp.alpha, cp
-       }
-     }
-     Pp.ForceGLSL = !1;
-     class Wp extends Lp.d {
-       constructor(pp, ip) {
-         super(pp, ip), this.intersectionThreshold = ip.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+         set accessibilityTag(QQ) {
+           this._accessibilityTag = QQ, this.onAccessibilityTagChangedObservable.notifyObservers(QQ)
+         }
+         get accessibilityTag() {
+           return this._accessibilityTag
+         }
+         get doNotSerialize() {
+           return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
+         }
+         set doNotSerialize(QQ) {
+           this._nodeDataStorage._doNotSerialize = QQ
+         }
+         rG() {
+           return this._nodeDataStorage._isDisposed
+         }
+         set parent(QQ) {
+ ... (351 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/268.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/268.js` (68 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813)

#### 1. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L4)

```diff
-   40647: (pp, ip, cp) => {
+   41298: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L6-L11)

```diff
-       e: () => kp,
-       f: () => ep,
-       j: () => Hp,
-       m: () => dp,
-       p: () => tp,
-       q: () => vp
+       d: () => SQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L13-L45` → after: `L8-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L8-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L8-L117) · [Before (L13-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L13-L45)

```diff
-     var Op = cp(40233),
-       op = cp(40296),
-       Ip = cp(37320),
-       Sp = cp(40342),
-       xp = cp(40654),
-       Lp = cp(40530),
-       Yp = cp(40261),
-       Dp = cp(40523),
-       Ap = cp(37345),
-       Pp = cp(40516),
-       Wp = cp(40512),
-       yp = cp(40544),
-       Up = cp(37368);
-     const wp = {
-       effect: null,
-       subMesh: null
- ... (17 more removed lines; see GitHub link above)
+     var wQ = XQ(40260),
+       qQ = XQ(40268),
+       TQ = XQ(37399),
+       zQ = XQ(37370),
+       sQ = XQ(37404),
+       FQ = XQ(40491),
+       PQ = XQ(40651),
+       gQ = XQ(40436),
+       JQ = XQ(40178),
+       rQ = XQ(37374);
+     class IQ {
+       constructor() {
+         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+       }
+       get name() {
+         return "AutoRotation"
+ ... (94 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L48-L49` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L128-L129) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L48-L49)

```diff
-       get shaderPath() {
-         return this._shaderPath
+       get name() {
+         return "Bouncing"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L51-L52` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L131-L132) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L51-L52)

```diff
-       set shaderPath(pp) {
-         this._shaderPath = pp
+       get autoTransitionRange() {
+         return this._autoTransitionRange
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L54-L55` → after: `L134-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L134-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L134-L143) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L54-L55)

```diff
-       get options() {
-         return this._options
+       set autoTransitionRange(QQ) {
+         if (this._autoTransitionRange === QQ) return;
+         this._autoTransitionRange = QQ;
+         const WQ = this._attachedCamera;
+         WQ && (QQ ? this._onMeshTargetChangedObserver = WQ.onMeshTargetChangedObservable.add((QQ => {
+           if (QQ && (QQ.computeWorldMatrix(!0), QQ.uC)) {
+             const WQ = QQ.uC().diagonalLength;
+             this.lowerRadiusTransitionRange = .05 * WQ, this.upperRadiusTransitionRange = .05 * WQ
+           }
+         })) : this._onMeshTargetChangedObserver && WQ.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L57-L58` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L145-L146) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L57-L58)

```diff
-       get isMultiview() {
-         return this._multiview
+       get attachedNode() {
+         return this._attachedCamera
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L60-L61` → after: `L148-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L148-L152) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L60-L61)

```diff
-       getClassName() {
-         return "ShaderMaterial"
+       init() {}
+       attach(QQ) {
+         this._attachedCamera = QQ, this._onAfterCheckInputsObserver = QQ.onAfterCheckInputsObservable.add((() => {
+           this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTra … [truncated]
+         }))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L63-L64` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L154-L155) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L63-L64)

```diff
-       needAlphaBlending() {
-         return this.alpha < 1 || this._options.needAlphaBlending
+       detach() {
+         this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChange … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L66-L67` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L157-L158) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L66-L67)

```diff
-       needAlphaTesting() {
-         return this._options.needAlphaTesting
+       _isRadiusAtLimit(QQ) {
+         return !!this._attachedCamera && (this._attachedCamera.radius === QQ && !this._radiusIsAnimating)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L69-L70` → after: `L160-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L160-L164) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L69-L70)

```diff
-       _checkUniform(pp) {
-         -1 === this._options.uniforms.indexOf(pp) && this._options.uniforms.push(pp)
+       _applyBoundRadiusAnimation(QQ) {
+         if (!this._attachedCamera) return;
+         this._radiusBounceTransition || (yQ.EasingFunction.setEasingMode(yQ.EasingMode), this._radiusBounceTransition = BQ.b.CreateAnimation("radius", BQ.b.ANIMATIONTYPE_FLOAT, 60, yQ.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
+         const WQ = BQ.b.TransitionTo("radius", this._attachedCamera.radius + QQ, this._attachedCamera, this._attachedCamera.sE(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
+         WQ && this._animatables.push(WQ)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L72-L73` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L166-L167) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L72-L73)

```diff
-       setTexture(pp, ip) {
-         return -1 === this._options.samplers.indexOf(pp) && this._options.samplers.push(pp), this._textures[pp] = ip, this
+       _clearAnimationLocks() {
+         this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L75-L76` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L169-L170) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L75-L76)

```diff
-       setInternalTexture(pp, ip) {
-         return -1 === this._options.samplers.indexOf(pp) && this._options.samplers.push(pp), this._internalTextures[pp] = ip, this
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L78-L79` → after: `L172-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L172-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L172-L176) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L78-L79)

```diff
-       removeTexture(pp) {
-         delete this._textures[pp]
+     }
+     yQ.EasingFunction = new class extends jQ {
+       constructor() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         super(), this.amplitude = QQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L81-L82` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L178-L180) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L81-L82)

```diff
-       setTextureArray(pp, ip) {
-         return -1 === this._options.samplers.indexOf(pp) && this._options.samplers.push(pp), this._checkUniform(pp), this._textureArrays[pp] = ip, this
+       easeInCore(QQ) {
+         const WQ = Math.max(0, this.amplitude);
+         return Math.pow(QQ, 3) - QQ * WQ * Math.sin(3.141592653589793 * QQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L84-L85` → after: `L182-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L182-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L182-L185) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L84-L85)

```diff
-       setExternalTexture(pp, ip) {
-         return -1 === this._options.externalTextures.indexOf(pp) && this._options.externalTextures.push(pp), this._externalTextures[pp] = ip, this
+     }(.3), yQ.EasingMode = jQ.EASINGMODE_EASEOUT;
+     class VQ {
+       constructor() {
+         this.onTargetFramingAnimationEndObservable = new TQ.b, this._mode = VQ.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L87-L88` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L187-L188) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L87-L88)

```diff
-       setFloat(pp, ip) {
-         return this._checkUniform(pp), this._floats[pp] = ip, this
+       get name() {
+         return "Framing"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L90-L91` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L190-L191) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L90-L91)

```diff
-       setInt(pp, ip) {
-         return this._checkUniform(pp), this._ints[pp] = ip, this
+       set mode(QQ) {
+         this._mode = QQ
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L93-L94` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L193-L194) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L93-L94)

```diff
-       setUInt(pp, ip) {
-         return this._checkUniform(pp), this._uints[pp] = ip, this
+       get mode() {
+         return this._mode
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L96-L97` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L196-L197) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L96-L97)

```diff
-       setFloats(pp, ip) {
-         return this._checkUniform(pp), this._floatsArrays[pp] = ip, this
+       set radiusScale(QQ) {
+         this._radiusScale = QQ
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L99-L100` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L199-L200) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L99-L100)

```diff
-       setColor3(pp, ip) {
-         return this._checkUniform(pp), this._colors3[pp] = ip, this
+       get radiusScale() {
+         return this._radiusScale
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L102-L103` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L202-L203) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L102-L103)

```diff
-       setColor3Array(pp, ip) {
-         return this._checkUniform(pp), this._colors3Arrays[pp] = ip.reduce(((pp, ip) => (pp.push(ip.r, ip.g, ip.b), pp)), []), this
+       set positionScale(QQ) {
+         this._positionScale = QQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L105-L106` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L205-L206) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L105-L106)

```diff
-       setColor4(pp, ip) {
-         return this._checkUniform(pp), this._colors4[pp] = ip, this
+       get positionScale() {
+         return this._positionScale
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L108-L109` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L208-L209) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L108-L109)

```diff
-       setColor4Array(pp, ip) {
-         return this._checkUniform(pp), this._colors4Arrays[pp] = ip.reduce(((pp, ip) => (pp.push(ip.r, ip.g, ip.b, ip.a), pp)), []), this
+       set defaultElevation(QQ) {
+         this._defaultElevation = QQ
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L111-L112` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L211-L212) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L111-L112)

```diff
-       setVector2(pp, ip) {
-         return this._checkUniform(pp), this._vectors2[pp] = ip, this
+       get defaultElevation() {
+         return this._defaultElevation
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L114-L115` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L214-L215) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L114-L115)

```diff
-       setVector3(pp, ip) {
-         return this._checkUniform(pp), this._vectors3[pp] = ip, this
+       set elevationReturnTime(QQ) {
+         this._elevationReturnTime = QQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L117-L118` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L217-L218) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L117-L118)

```diff
-       setVector4(pp, ip) {
-         return this._checkUniform(pp), this._vectors4[pp] = ip, this
+       get elevationReturnTime() {
+         return this._elevationReturnTime
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L120-L121` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L220-L221) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L120-L121)

```diff
-       setQuaternion(pp, ip) {
-         return this._checkUniform(pp), this._quaternions[pp] = ip, this
+       set elevationReturnWaitTime(QQ) {
+         this._elevationReturnWaitTime = QQ
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L123-L124` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L223-L224) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L123-L124)

```diff
-       setQuaternionArray(pp, ip) {
-         return this._checkUniform(pp), this._quaternionsArrays[pp] = ip.reduce(((pp, ip) => (ip.toArray(pp, pp.length), pp)), []), this
+       get elevationReturnWaitTime() {
+         return this._elevationReturnWaitTime
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L126-L127` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L226-L227) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L126-L127)

```diff
-       setMatrix(pp, ip) {
-         return this._checkUniform(pp), this._matrices[pp] = ip, this
+       set zoomStopsAnimation(QQ) {
+         this._zoomStopsAnimation = QQ
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L129-L135` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L229-L230) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L129-L135)

```diff
-       setMatrices(pp, ip) {
-         this._checkUniform(pp);
-         const cp = new Float32Array(16 * ip.length);
-         for (let Op = 0; Op < ip.length; Op++) {
-           ip[Op].copyToArray(cp, 16 * Op)
-         }
-         return this._matrixArrays[pp] = cp, this
+       get zoomStopsAnimation() {
+         return this._zoomStopsAnimation
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L137-L138` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L232-L233) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L137-L138)

```diff
-       setMatrix3x3(pp, ip) {
-         return this._checkUniform(pp), this._matrices3x3[pp] = ip, this
+       set framingTime(QQ) {
+         this._framingTime = QQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L140-L141` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L235-L236) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L140-L141)

```diff
-       setMatrix2x2(pp, ip) {
-         return this._checkUniform(pp), this._matrices2x2[pp] = ip, this
+       get framingTime() {
+         return this._framingTime
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L143-L144` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L238-L239) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L143-L144)

```diff
-       setArray2(pp, ip) {
-         return this._checkUniform(pp), this._vectors2Arrays[pp] = ip, this
+       get attachedNode() {
+         return this._attachedCamera
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L146-L147` → after: `L241-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L241-L253) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L146-L147)

```diff
-       setArray3(pp, ip) {
-         return this._checkUniform(pp), this._vectors3Arrays[pp] = ip, this
+       init() {}
+       attach(QQ) {
+         this._attachedCamera = QQ;
+         const WQ = this._attachedCamera.sE();
+         VQ.EasingFunction.setEasingMode(VQ.EasingMode), this._onPrePointerObservableObserver = WQ.onPrePointerObservable.add((QQ => {
+           QQ.type !== gQ.d.POINTERDOWN ? QQ.type === gQ.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+         })), this._onMeshTargetChangedObserver = QQ.onMeshTargetChangedObservable.add((QQ => {
+           QQ && QQ.uC && this.zoomOnMesh(QQ, void 0, (() => {
+             this.onTargetFramingAnimationEndObservable.notifyObservers()
+           }))
+         })), this._onAfterCheckInputsObserver = QQ.onAfterCheckInputsObservable.add((() => {
+           this._applyUserInteraction(), this._maintainCameraAboveGround()
+         }))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L149-L150` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L255-L258) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L149-L150)

```diff
-       setArray4(pp, ip) {
-         return this._checkUniform(pp), this._vectors4Arrays[pp] = ip, this
+       detach() {
+         if (!this._attachedCamera) return;
+         const QQ = this._attachedCamera.sE();
+         this._onPrePointerObservableObserver && QQ.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L152-L153` → after: `L260-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L260-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L260-L265) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L152-L153)

```diff
-       setUniformBuffer(pp, ip) {
-         return -1 === this._options.uniformBuffers.indexOf(pp) && this._options.uniformBuffers.push(pp), this._uniformBuffers[pp] = ip, this
+       zoomOnMesh(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         QQ.computeWorldMatrix(!0);
+         const wQ = QQ.uC().boundingBox;
+         this.zoomOnBoundingInfo(wQ.minimumWorld, wQ.maximumWorld, WQ, XQ)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L155-L156` → after: `L267-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L267-L272) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L155-L156)

```diff
-       setTextureSampler(pp, ip) {
-         return -1 === this._options.samplerObjects.indexOf(pp) && this._options.samplerObjects.push(pp), this._textureSamplers[pp] = ip, this
+       zoomOnMeshHierarchy(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         QQ.computeWorldMatrix(!0);
+         const wQ = QQ.getHierarchyBoundingVectors(!0);
+         this.zoomOnBoundingInfo(wQ.min, wQ.max, WQ, XQ)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L158-L159` → after: `L274-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L274-L283) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L158-L159)

```diff
-       setStorageBuffer(pp, ip) {
-         return -1 === this._options.storageBuffers.indexOf(pp) && this._options.storageBuffers.push(pp), this._storageBuffers[pp] = ip, this
+       zoomOnMeshesHierarchy(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         const wQ = new zQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           qQ = new zQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         for (let TQ = 0; TQ < QQ.length; TQ++) {
+           const WQ = QQ[TQ].getHierarchyBoundingVectors(!0);
+           zQ.s.CheckExtends(WQ.min, wQ, qQ), zQ.s.CheckExtends(WQ.max, wQ, qQ)
+         }
+         this.zoomOnBoundingInfo(wQ, qQ, WQ, XQ)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L161-L164` → after: `L285-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L285-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L285-L312) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L161-L164)

```diff
-       setDefine(pp, ip) {
-         const cp = pp.trimEnd() + " ",
-           Op = this.options.defines.findIndex((ip => ip === pp || ip.startsWith(cp)));
-         return Op >= 0 && this.options.defines.splice(Op, 1), ("boolean" !== typeof ip || ip) && this.options.defines.push(cp + ip), this
+       zoomOnBoundingInfo(QQ, WQ) {
+         let XQ, wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         if (!this._attachedCamera) return !1;
+         const TQ = QQ.y,
+           sQ = TQ + (WQ.y - TQ) * this._positionScale,
+           FQ = WQ.subtract(QQ).scale(.5);
+         if (!isFinite(sQ)) return !1;
+         if (wQ) XQ = new zQ.s(0, sQ, 0);
+         else {
+           const WQ = QQ.add(FQ);
+           XQ = new zQ.s(WQ.x, sQ, WQ.z)
+         }
+         this._vectorTransition || (this._vectorTransition = BQ.b.CreateAnimation("target", BQ.b.ANIMATIONTYPE_VECTOR3, 60, VQ.EasingFunction)), this._betaIsAnimating = !0;
+         let PQ = BQ.b.TransitionTo("target", XQ, this._attachedCamera, this._attachedCamera.sE(), 60, this._vectorTransition, this._framingTime);
+         PQ && this._animatables.push(PQ);
+ ... (12 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L166-L167` → after: `L314-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L314-L318) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L166-L167)

```diff
-       isReadyForSubMesh(pp, ip, cp) {
-         return this.isReady(pp, cp, ip)
+       _calculateLowerRadiusFromModelBoundingSphere(QQ, WQ) {
+         const XQ = this._attachedCamera;
+         if (!XQ) return 0;
+         let wQ = XQ._calculateLowerRadiusFromModelBoundingSphere(QQ, WQ, this._radiusScale);
+         return XQ.lowerRadiusLimit && this._mode === VQ.IgnoreBoundsSizeMode && (wQ = wQ < XQ.lowerRadiusLimit ? XQ.lowerRadiusLimit : wQ), XQ.upperRadiusLimit && (wQ = wQ > XQ.upperRadiusLimit ? XQ.upperRadiusLimit : wQ), wQ
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L169-L173` → after: `L320-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L320-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L320-L330) · [Before (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L169-L173)

```diff
-       isReady(pp, ip, cp) {
-         const Op = cp && this._storeEffectOnSubMeshes;
-         if (this.isFrozen) {
-           const pp = Op ? cp._drawWrapper : this._drawWrapper;
-           if (pp.effect && pp._wasPreviouslyReady && pp._wasPreviouslyUsingInstances === ip) return !0
+       _maintainCameraAboveGround() {
+         if (this._elevationReturnTime < 0) return;
+         const QQ = JQ.e.Now - this._lastInteractionTime,
+           WQ = .5 * Math.PI - this._defaultElevation,
+           XQ = .5 * Math.PI;
+         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > XQ && QQ >= this._elevationReturnWaitTime) {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = BQ.b.CreateAnimation("beta", BQ.b.ANIMATIONTYPE_FLOAT, 60, VQ.EasingFunction));
+           const QQ = BQ.b.TransitionTo("beta", WQ, this._attachedCamera, this._attachedCamera.sE(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+             this._clearAnimationLocks(), this.stopAllAnimations()
+           }));
+           QQ && this._animatables.push(QQ)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L175-L176` → after: `L332-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L332-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L332-L504) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L175-L176)

```diff
-         const Ip = this.Gl(),
-           xp = Ip.gy(),
+       }
+       _clearAnimationLocks() {
+         this._betaIsAnimating = !1
+       }
+       _applyUserInteraction() {
+         this.isUserIsMoving && (this._lastInteractionTime = JQ.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       }
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       }
+       get isUserIsMoving() {
+         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       }
+     }
+     VQ.EasingFunction = new class extends jQ {
+       constructor() {
+ ... (157 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L179-L187` → after: `L507-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L507-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L507-L784) · [Before (L179-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L179-L187)

```diff
-         let Ap = null,
-           Up = this._shaderPath,
-           vp = this._options.uniforms,
-           tp = this._options.uniformBuffers,
-           Hp = this._options.samplers;
-         xp.getCaps().multiview && Ip.activeCamera && Ip.activeCamera.outputRenderTarget && Ip.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Yp.push("#define MULTIVIEW"), -1 !== vp.indexOf("viewProjection") && -1 === vp.indexOf("viewProjectionR") &&  … [truncated]
-         for (let op = 0; op < this._options.defines.length; op++) {
-           const pp = 0 === this._options.defines[op].indexOf("#define") ? this._options.defines[op] : `#define ${this._options.defines[op]}`;
-           Yp.push(pp)
+         return QQ = class extends zQ {
+           constructor() {
+             super(...arguments), this.pinchZoom = (0, wQ.n)(this, sQ, !0), this.multiTouchPanning = ((0, wQ.n)(this, FQ), (0, wQ.n)(this, PQ, !0)), this.multiTouchPanAndZoom = ((0, wQ.n)(this, gQ), (0, wQ.n)(this, JQ, !0)), this._isPinching = ((0, wQ.n)(this, rQ), !1), this._twoF … [truncated]
+           }
+           _computePinchZoom(QQ, WQ) {}
+           _computeMultiTouchPanning(QQ, WQ) {}
+           onMultiTouch(QQ, WQ, XQ, wQ, qQ, TQ) {
+             0 === XQ && null === qQ || 0 === wQ && null === TQ || (this.multiTouchPanAndZoom ? (this._computePinchZoom(XQ, wQ), this._computeMultiTouchPanning(qQ, TQ)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldSt … [truncated]
+           }
+           onButtonUp(QQ) {
+             this._twoFingerActivityCount = 0, this._isPinching = !1
+           }
+           onLostFocus() {
+             this._twoFingerActivityCount = 0, this._isPinching = !1
+           }
+         }, (() => {
+ ... (262 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L189-L207` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L786-L787) · [Before (L189-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L189-L207)

```diff
-         for (let op = 0; op < this._options.attributes.length; op++) Dp.push(this._options.attributes[op]);
-         if (pp && pp.isVerticesDataPresent(Sp.j.ColorKind) && (-1 === Dp.indexOf(Sp.j.ColorKind) && Dp.push(Sp.j.ColorKind), Yp.push("#define VERTEXCOLOR")), ip && (Yp.push("#define INSTANCES"), (0, Wp.Ab)(Dp, this._materialHelperNeedsPreviousMatrices), pp?.hasThinInstances && (Y … [truncated]
-           Dp.push(Sp.j.MatricesIndicesKind), Dp.push(Sp.j.MatricesWeightsKind), pp.numBoneInfluencers > 4 && (Dp.push(Sp.j.MatricesIndicesExtraKind), Dp.push(Sp.j.MatricesWeightsExtraKind));
-           const ip = pp.skeleton;
-           Yp.push("#define NUM_BONE_INFLUENCERS " + pp.numBoneInfluencers), Ap = new Lp.c, Ap.addCPUSkinningFallback(0, pp), ip.isUsingTextureForMatrices ? (Yp.push("#define BONETEXTURE"), -1 === vp.indexOf("boneTextureInfo") && vp.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
-         } else Yp.push("#define NUM_BONE_INFLUENCERS 0");
-         let dp = 0;
-         const ep = pp ? pp.morphTargetManager : null;
-         if (ep) {
-           const ip = -1 !== Yp.indexOf("#define UV1"),
-             cp = -1 !== Yp.indexOf("#define UV2"),
-             Op = -1 !== Yp.indexOf("#define TANGENT"),
-             op = -1 !== Yp.indexOf("#define NORMAL"),
-             Ip = -1 !== Yp.indexOf("#define VERTEXCOLOR");
-           dp = (0, Wp.Q)(ep, Yp, Dp, pp, !0, op, Op, ip, cp, Ip), ep.isUsingTextureForTargets && (-1 === vp.indexOf("morphTargetTextureIndices") && vp.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
-         } else Yp.push("#define NUM_MORPH_INFLUENCERS 0");
- ... (3 more removed lines; see GitHub link above)
+         get useAltToZoom() {
+           return this._useAltToZoom
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L209-L221` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L789-L790) · [Before (L209-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L209-L221)

```diff
-         for (const op in this._textures)
-           if (!this._textures[op].isReady()) return !1;
-         for (const op in this._internalTextures)
-           if (!this._internalTextures[op].isReady) return !1;
-         pp && this.needAlphaTestingForMesh(pp) && Yp.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Pp.c)(vp), (0, Pp.k)(this, Ip, Yp)), Ip.fogEnabled && pp?.applyFog && Ip.fogMode !== op.f.FOGMODE_NONE && (Yp.push("#define FOG"), -1 === vp.indexOf("view") & … [truncated]
-         const jp = cp ? cp.getRenderingMesh() : pp;
-         if (jp && this.useVertexPulling) {
-           const pp = jp.geometry;
-           pp && (this._vertexPullingMetadata = (0, yp.i)(pp), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((pp, ip) => {
-             vp.push(`vp_${ip}_info`)
-           }))), Yp.push("#define USE_VERTEX_PULLING");
-           const ip = jp.geometry?.getIndexBuffer();
-           ip && !jp.isUnIndexed && (Yp.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), ip.is32Bits && Yp.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
+         set useAltToZoom(QQ) {
+           this._useAltToZoom = QQ, this._applyUseAltToZoomToInputMap()
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L223-L269` → after: `L792-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L792-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L792-L820) · [Before (L223-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L223-L269)

```diff
-         this.customShaderNameResolve && (vp = vp.slice(), tp = tp.slice(), Hp = Hp.slice(), Up = this.customShaderNameResolve(this.name, vp, tp, Hp, Yp, Dp));
-         const kp = Op ? cp._getDrawWrapper(void 0, !0) : this._drawWrapper,
-           mp = kp?.effect ?? null,
-           Rp = kp?.defines ?? null,
-           qp = Yp.join("\n");
-         let Mp = mp;
-         return Rp !== qp && (Mp = xp.createEffect(Up, {
-           attributes: Dp,
-           uniformsNames: vp,
-           uniformBuffersNames: tp,
-           samplers: Hp,
-           defines: qp,
-           fallbacks: Ap,
-           onCompiled: this.onCompiled,
-           onError: this.onError,
-           indexParameters: {
- ... (31 more removed lines; see GitHub link above)
+         _applyUseAltToZoomToInputMap() {
+           if (!this.camera?.movement) return;
+           const QQ = this.camera.movement.input,
+             WQ = QQ.getEntry("keyboard", "zoom", {
+               modifiers: {
+                 alt: !0
+               }
+             });
+           !this._useAltToZoom && WQ ? QQ.inputMap.splice(QQ.inputMap.indexOf(WQ), 1) : this._useAltToZoom && !WQ && QQ.addEntry({
+             source: "keyboard",
+             modifiers: {
+               alt: !0
+             },
+             interaction: "zoom"
+           })
+         }
+ ... (13 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L271-L314` → after: `L822-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L822-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L822-L825) · [Before (L271-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L271-L314)

```diff
-           }
-         const Yp = ip && op ? this._mustRebind(Sp, Ip, Op, ip.visibility) : Sp.getCachedMaterial() !== this;
-         if (Ip && Yp) {
-           let pp;
-           for (pp in Lp || -1 === this._options.uniforms.indexOf("view") || Ip.setMatrix("view", Sp.getViewMatrix()), Lp || -1 === this._options.uniforms.indexOf("projection") || Ip.setMatrix("projection", Sp.getProjectionMatrix()), Lp || -1 === this._options.uniforms.indexOf("vi … [truncated]
-           for (pp in this._internalTextures) Ip._bindTexture(pp, this._internalTextures[pp]);
-           for (pp in this._textureArrays) Ip.setTextureArray(pp, this._textureArrays[pp]);
-           for (pp in this._ints) Ip.setInt(pp, this._ints[pp]);
-           for (pp in this._uints) Ip.setUInt(pp, this._uints[pp]);
-           for (pp in this._floats) Ip.setFloat(pp, this._floats[pp]);
-           for (pp in this._floatsArrays) Ip.setArray(pp, this._floatsArrays[pp]);
-           for (pp in this._colors3) Ip.setColor3(pp, this._colors3[pp]);
-           for (pp in this._colors3Arrays) Ip.setArray3(pp, this._colors3Arrays[pp]);
-           for (pp in this._colors4) {
-             const ip = this._colors4[pp];
-             Ip.setFloat4(pp, ip.r, ip.g, ip.b, ip.a)
- ... (28 more removed lines; see GitHub link above)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L316-L321` → after: `L827-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L827-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L827-L847) · [Before (L316-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L316-L321)

```diff
-         if (Ip && ip && (Yp || !this.isFrozen)) {
-           (0, Wp.v)(ip, Ip), ip.morphTargetManager && ip.morphTargetManager.isUsingTextureForTargets && ip.morphTargetManager._bind(Ip);
-           const pp = ip.bakedVertexAnimationManager;
-           if (pp && pp.isEnabled) {
-             const pp = op ? Op._drawWrapper : this._drawWrapper;
-             ip.bakedVertexAnimationManager?.bind(Ip, !!pp._wasPreviouslyUsingInstances)
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const QQ = this.camera,
+               WQ = QQ.movement.input;
+             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
+             const XQ = this._rotateDirection.set(0, 0),
+               wQ = this._panDirection.set(0, 0);
+             let qQ = 0,
+               TQ = 0;
+             for (let zQ = 0; zQ < this._keys.length; zQ++) {
+               const sQ = this._keys[zQ];
+               if (this._keyboardConditions.key = sQ, -1 === this.keysReset.indexOf(sQ)) {
+                 const QQ = WQ.resolveInteraction("keyboard", this._keyboardConditions);
+                 if (QQ)
+                   if ("pan" === QQ.interaction) TQ = Math.max(TQ, QQ.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(sQ) ? wQ.x -= 1 : -1 !== this.keysRight.indexOf(sQ) ? wQ.x += 1 : -1 !== this.keysUp.indexOf(sQ) ? wQ.y += 1 : -1 !== this.keysDown.index … [truncated]
+                   else if ("zoom" === QQ.interaction) {
+ ... (5 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L324-L331` → after: `L850-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L850-L851) · [Before (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L324-L331)

```diff
-         this._afterBind(ip, Ip, Op)
-       }
-       getActiveTextures() {
-         const pp = super.getActiveTextures();
-         for (const ip in this._textures) pp.push(this._textures[ip]);
-         for (const ip in this._textureArrays) {
-           const cp = this._textureArrays[ip];
-           for (let ip = 0; ip < cp.length; ip++) pp.push(cp[ip])
+         getClassName() {
+           return "ArcRotateCameraKeyboardMoveInput"
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L333-L345` → after: `L853-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L853-L854) · [Before (L333-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L333-L345)

```diff
-         return pp
-       }
-       hasTexture(pp) {
-         if (super.hasTexture(pp)) return !0;
-         for (const cp in this._textures)
-           if (this._textures[cp] === pp) return !0;
-         const ip = pp.getInternalTexture();
-         for (const cp in this._internalTextures)
-           if (this._internalTextures[cp] === ip) return !0;
-         for (const cp in this._textureArrays) {
-           const ip = this._textureArrays[cp];
-           for (let cp = 0; cp < ip.length; cp++)
-             if (ip[cp] === pp) return !0
+         getSimpleName() {
+           return "keyboard"
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L347-L359` → after: `L856-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L856-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L856-L1019) · [Before (L347-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L347-L359)

```diff
-         return !1
-       }
-       clone(pp) {
-         const ip = Op.c.Clone((() => new vp(pp, this.Gl(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
-         ip.name = pp, ip.id = pp, "object" === typeof ip._shaderPath && (ip._shaderPath = {
-           ...ip._shaderPath
-         }), this._options = {
-           ...this._options
-         };
-         const cp = Object.keys(this._options);
-         for (const Op of cp) {
-           const pp = this._options[Op];
-           Array.isArray(pp) && (this._options[Op] = pp.slice(0))
+       }, (() => {
+         const zQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], (0, wQ.k)(QQ, null, jQ, {
+           kind: "getter",
+           name: "useAltToZoom",
+           static: !1,
+           private: !1,
+           access: {
+             has: QQ => "useAltToZoom" in QQ,
+             get: QQ => QQ.useAltToZoom
+           },
+           metadata: zQ
+         }, null, BQ), (0, wQ.k)(null, null, WQ, {
+           kind: "field",
+           name: "keysUp",
+           static: !1,
+ ... (148 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L361-L392` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1021) · [Before (L361-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L361-L392)

```diff
-         this.stencil.copyTo(ip.stencil);
-         for (const Op in this._textures) ip.setTexture(Op, this._textures[Op]);
-         for (const Op in this._internalTextures) ip.setInternalTexture(Op, this._internalTextures[Op]);
-         for (const Op in this._textureArrays) ip.setTextureArray(Op, this._textureArrays[Op]);
-         for (const Op in this._externalTextures) ip.setExternalTexture(Op, this._externalTextures[Op]);
-         for (const Op in this._ints) ip.setInt(Op, this._ints[Op]);
-         for (const Op in this._uints) ip.setUInt(Op, this._uints[Op]);
-         for (const Op in this._floats) ip.setFloat(Op, this._floats[Op]);
-         for (const Op in this._floatsArrays) ip.setFloats(Op, this._floatsArrays[Op]);
-         for (const Op in this._colors3) ip.setColor3(Op, this._colors3[Op]);
-         for (const Op in this._colors3Arrays) ip._colors3Arrays[Op] = this._colors3Arrays[Op];
-         for (const Op in this._colors4) ip.setColor4(Op, this._colors4[Op]);
-         for (const Op in this._colors4Arrays) ip._colors4Arrays[Op] = this._colors4Arrays[Op];
-         for (const Op in this._vectors2) ip.setVector2(Op, this._vectors2[Op]);
-         for (const Op in this._vectors3) ip.setVector3(Op, this._vectors3[Op]);
-         for (const Op in this._vectors4) ip.setVector4(Op, this._vectors4[Op]);
- ... (16 more removed lines; see GitHub link above)
+         _computeDeltaFromMouseWheelLegacyEvent(QQ, WQ) {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L394-L398` → after: `L1023-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1023-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1023-L1058) · [Before (L394-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L394-L398)

```diff
-           for (pp in this._textures) this._textures[pp].dispose();
-           for (pp in this._internalTextures) this._internalTextures[pp].dispose();
-           for (pp in this._textureArrays) {
-             const ip = this._textureArrays[pp];
-             for (let pp = 0; pp < ip.length; pp++) ip[pp].dispose()
+           const wQ = .01 * QQ * this.wheelDeltaPercentage * WQ;
+           return XQ = QQ > 0 ? wQ / (1 + this.wheelDeltaPercentage) : wQ * (1 + this.wheelDeltaPercentage), XQ
+         }
+         attachControl(QQ) {
+           QQ = UQ.g.BackCompatCameraNoPreventDefault(arguments), this._wheel = WQ => {
+             if (WQ.type !== gQ.d.POINTERWHEEL) return;
+             const XQ = WQ.event;
+             let wQ;
+             const qQ = XQ.deltaMode === hQ.e.DOM_DELTA_LINE ? 40 : 1,
+               TQ = -XQ.deltaY * qQ;
+             if (this.customComputeDeltaFromMouseWheel) wQ = this.customComputeDeltaFromMouseWheel(TQ, this, XQ);
+             else if (this.wheelDeltaPercentage) {
+               if (wQ = this._computeDeltaFromMouseWheelLegacyEvent(TQ, this.camera.radius), wQ > 0) {
+                 const QQ = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
+                 let WQ = this.camera.radius,
+                   XQ = QQ + wQ;
+ ... (20 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L401-L410` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1061-L1062) · [Before (L401-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L401-L410)

```diff
-         this._textures = {}, this._internalTextures = {}, super.dispose(pp, ip, cp)
-       }
-       serialize() {
-         const pp = Op.c.Serialize(this);
-         let ip;
-         for (ip in pp.customType = "BABYLON.ShaderMaterial", pp.uniqueId = this.uniqueId, pp.options = this._options, pp.shaderPath = this._shaderPath, pp.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, pp.stencil = this.stencil.serialize(), pp.textures = {}, this._texture … [truncated]
-         for (ip in pp.textureArrays = {}, this._textureArrays) {
-           pp.textureArrays[ip] = [];
-           const cp = this._textureArrays[ip];
-           for (let Op = 0; Op < cp.length; Op++) pp.textureArrays[ip].push(cp[Op].serialize())
+         getClassName() {
+           return "ArcRotateCameraMouseWheelInput"
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L412-L418` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1064-L1065) · [Before (L412-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L412-L418)

```diff
-         for (ip in pp.ints = {}, this._ints) pp.ints[ip] = this._ints[ip];
-         for (ip in pp.uints = {}, this._uints) pp.uints[ip] = this._uints[ip];
-         for (ip in pp.floats = {}, this._floats) pp.floats[ip] = this._floats[ip];
-         for (ip in pp.floatsArrays = {}, this._floatsArrays) pp.floatsArrays[ip] = this._floatsArrays[ip];
-         for (ip in pp.colors3 = {}, this._colors3) {
-           const cp = this._colors3[ip];
-           pp.colors3[ip] = [cp.r, cp.g, cp.b]
+         getSimpleName() {
+           return "mousewheel"
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L420-L423` → after: `L1067-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1067-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1067-L1070) · [Before (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L420-L423)

```diff
-         for (ip in pp.colors3Arrays = {}, this._colors3Arrays) pp.colors3Arrays[ip] = this._colors3Arrays[ip];
-         for (ip in pp.colors4 = {}, this._colors4) {
-           const cp = this._colors4[ip];
-           pp.colors4[ip] = [cp.r, cp.g, cp.b, cp.a]
+         _updateHitPlane() {
+           const QQ = this.camera,
+             WQ = QQ.target.subtract(QQ.position);
+           this._hitPlane = lQ.b.FromPositionAndNormal(QQ.target, WQ)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L425-L428` → after: `L1072-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1072-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1072-L1078) · [Before (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L425-L428)

```diff
-         for (ip in pp.colors4Arrays = {}, this._colors4Arrays) pp.colors4Arrays[ip] = this._colors4Arrays[ip];
-         for (ip in pp.vectors2 = {}, this._vectors2) {
-           const cp = this._vectors2[ip];
-           pp.vectors2[ip] = [cp.x, cp.y]
+         _getPosition() {
+           const QQ = this.camera,
+             WQ = QQ.sE(),
+             XQ = WQ.createPickingRay(WQ.pointerX, WQ.pointerY, zQ.e.Identity(), QQ, !1);
+           0 === QQ.targetScreenOffset.x && 0 === QQ.targetScreenOffset.y || (this._viewOffset.set(QQ.targetScreenOffset.x, QQ.targetScreenOffset.y, 0), QQ.getViewMatrix().invertToRef(QQ._cameraTransformMatrix), this._globalOffset = zQ.s.TransformNormal(this._viewOffset, QQ._camer … [truncated]
+           let wQ = 0;
+           return this._hitPlane && (wQ = XQ.intersectsPlane(this._hitPlane) ?? 0), XQ.origin.addInPlace(XQ.direction.scaleInPlace(wQ))
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L430-L432` → after: `L1080-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1080-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1080-L1095) · [Before (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L430-L432)

```diff
-         for (ip in pp.vectors3 = {}, this._vectors3) {
-           const cp = this._vectors3[ip];
-           pp.vectors3[ip] = [cp.x, cp.y, cp.z]
+         _zoomToMouse(QQ) {
+           const WQ = this.camera,
+             XQ = 1 - WQ.inertia,
+             wQ = WQ.movement.getFrameIndependentInputScale(WQ.inertia);
+           if (WQ.lowerRadiusLimit) {
+             const qQ = WQ.lowerRadiusLimit ?? 0;
+             WQ.radius - (this._zoomToMouseRadiusOffset + QQ * wQ) / XQ < qQ && (QQ = ((WQ.radius - qQ) * XQ - this._zoomToMouseRadiusOffset) / wQ)
+           }
+           if (WQ.upperRadiusLimit) {
+             const qQ = WQ.upperRadiusLimit ?? 0;
+             WQ.radius - (this._zoomToMouseRadiusOffset + QQ * wQ) / XQ > qQ && (QQ = ((WQ.radius - qQ) * XQ - this._zoomToMouseRadiusOffset) / wQ)
+           }
+           const qQ = QQ / XQ / WQ.radius,
+             TQ = this._getPosition(),
+             sQ = zQ.m.vj[6];
+           TQ.subtractToRef(WQ.target, sQ), sQ.scaleInPlace(qQ), sQ.scaleInPlace(XQ), sQ.scaleInPlace(wQ), this._inertialPanning.addInPlace(sQ), this._zoomToMouseRadiusOffset += QQ * wQ
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L434-L436` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1097-L1098) · [Before (L434-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L434-L436)

```diff
-         for (ip in pp.vectors4 = {}, this._vectors4) {
-           const cp = this._vectors4[ip];
-           pp.vectors4[ip] = [cp.x, cp.y, cp.z, cp.w]
+         _zeroIfClose(QQ) {
+           Math.abs(QQ.x) < rQ.b && (QQ.x = 0), Math.abs(QQ.y) < rQ.b && (QQ.y = 0), Math.abs(QQ.z) < rQ.b && (QQ.z = 0)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L438-L470` → after: `L1100-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1100-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1100-L1145) · [Before (L438-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L438-L470)

```diff
-         for (ip in pp.quaternions = {}, this._quaternions) pp.quaternions[ip] = this._quaternions[ip].BOp();
-         for (ip in pp.matrices = {}, this._matrices) pp.matrices[ip] = this._matrices[ip].BOp();
-         for (ip in pp.matrixArray = {}, this._matrixArrays) pp.matrixArray[ip] = this._matrixArrays[ip];
-         for (ip in pp.matrices3x3 = {}, this._matrices3x3) pp.matrices3x3[ip] = this._matrices3x3[ip];
-         for (ip in pp.matrices2x2 = {}, this._matrices2x2) pp.matrices2x2[ip] = this._matrices2x2[ip];
-         for (ip in pp.vectors2Arrays = {}, this._vectors2Arrays) pp.vectors2Arrays[ip] = this._vectors2Arrays[ip];
-         for (ip in pp.vectors3Arrays = {}, this._vectors3Arrays) pp.vectors3Arrays[ip] = this._vectors3Arrays[ip];
-         for (ip in pp.vectors4Arrays = {}, this._vectors4Arrays) pp.vectors4Arrays[ip] = this._vectors4Arrays[ip];
-         for (ip in pp.quaternionsArrays = {}, this._quaternionsArrays) pp.quaternionsArrays[ip] = this._quaternionsArrays[ip];
-         return pp
-       }
-     }
- 
-     function tp(pp, ip, cp) {
-       const op = Op.c.Parse((() => new vp(pp.name, ip, pp.shaderPath, pp.options, pp.storeEffectOnSubMeshes)), pp, ip, cp);
-       let Sp;
- ... (17 more removed lines; see GitHub link above)
+       }, (() => {
+         const zQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
+           kind: "field",
+           name: "wheelPrecision",
+           static: !1,
+           private: !1,
+           access: {
+             has: QQ => "wheelPrecision" in QQ,
+             get: QQ => QQ.wheelPrecision,
+             set: (QQ, WQ) => {
+               QQ.wheelPrecision = WQ
+             }
+           },
+           metadata: zQ
+         }, FQ, PQ), (0, wQ.k)(null, null, XQ, {
+ ... (30 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L473-L488` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1155-L1156) · [Before (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L473-L488)

```diff
-       for (Sp in pp.colors3Arrays) {
-         const ip = pp.colors3Arrays[Sp].reduce(((pp, ip, cp) => (cp % 3 === 0 ? pp.push([ip]) : pp[pp.length - 1].push(ip), pp)), []).map((pp => ({
-           r: pp[0],
-           g: pp[1],
-           b: pp[2]
-         })));
-         op.setColor3Array(Sp, ip)
-       }
-       for (Sp in pp.colors4) {
-         const ip = pp.colors4[Sp];
-         op.setColor4(Sp, {
-           r: ip[0],
-           g: ip[1],
-           b: ip[2],
-           a: ip[3]
-         })
+       addMouseWheel() {
+         return this.add(new iQ), this
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L490-L504` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1158-L1159) · [Before (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L490-L504)

```diff
-       for (Sp in pp.colors4Arrays) {
-         const ip = pp.colors4Arrays[Sp].reduce(((pp, ip, cp) => (cp % 4 === 0 ? pp.push([ip]) : pp[pp.length - 1].push(ip), pp)), []).map((pp => ({
-           r: pp[0],
-           g: pp[1],
-           b: pp[2],
-           a: pp[3]
-         })));
-         op.setColor4Array(Sp, ip)
-       }
-       for (Sp in pp.vectors2) {
-         const ip = pp.vectors2[Sp];
-         op.setVector2(Sp, {
-           x: ip[0],
-           y: ip[1]
-         })
+       addPointers() {
+         return this.add(new dQ), this
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L506-L512` → after: `L1161-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1161-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1161-L1162) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L506-L512)

```diff
-       for (Sp in pp.vectors3) {
-         const ip = pp.vectors3[Sp];
-         op.setVector3(Sp, {
-           x: ip[0],
-           y: ip[1],
-           z: ip[2]
-         })
+       addKeyboard() {
+         return this.add(new aQ), this
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L514-L521` → after: `L1164-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1164-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1164-L1220) · [Before (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L514-L521)

```diff
-       for (Sp in pp.vectors4) {
-         const ip = pp.vectors4[Sp];
-         op.setVector4(Sp, {
-           x: ip[0],
-           y: ip[1],
-           z: ip[2],
-           w: ip[3]
-         })
+     }(cQ = EQ.prototype).addVRDeviceOrientation ?? (cQ.addVRDeviceOrientation = (0, RQ.h)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (AQ = EQ.prototype).addGamepad ?? (AQ.addGamepad = (0, RQ.h)("ArcRotateCameraInputsManager", "addGamepad"));
+     var CQ = XQ(37418),
+       uQ = XQ(40501),
+       LQ = XQ(40506);
+     class kQ extends uQ.d {
+       constructor(QQ, WQ, XQ) {
+         super(QQ, WQ, XQ), this.input = new LQ.c({
+           pan: (QQ, WQ) => {
+             this.panAccumulatedPixels.x += QQ, this.panAccumulatedPixels.y += WQ
+           },
+           rotate: (QQ, WQ) => {
+             this.rotationAccumulatedPixels.x += QQ, this.rotationAccumulatedPixels.y += WQ
+           },
+           zoom: QQ => {
+             this.zoomAccumulatedPixels += QQ
+           }
+ ... (41 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L548-L561` → after: `L1223-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1223-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1223-L1225) · [Before (L548-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L548-L561)

```diff
-     async function dp(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const Op = this?.SnippetUrl ?? vp.SnippetUrl;
-       return await new Promise(((op, Ip) => {
-         const Sp = new Yp.e;
-         Sp.addEventListener("readystatechange", (() => {
-           if (4 == Sp.readyState)
-             if (200 == Sp.status) {
-               const Op = JSON.parse(JSON.parse(Sp.responseText).jsonPayload),
-                 Ip = tp(JSON.parse(Op.shaderMaterial), ip || Ap.e.LastCreatedScene, cp);
-               Ip.snippetId = pp, op(Ip)
-             } else Ip("Unable to load the snippet " + pp)
-         })), Sp.open("GET", Op + "/" + pp.replace(/#/g, "/")), Sp.send()
-       }))
+ 
+     function fQ(QQ, WQ) {
+       return isNaN(QQ) ? WQ : QQ
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L563-L565` → after: `L1227-L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L1227-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L1227-L2232) · [Before (L563-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L563-L565)

```diff
-     vp.SnippetUrl = "https://snippet.babylonjs.com";
-     const ep = dp;
-     let jp = !1;
+     let SQ = (() => {
+         var QQ;
+         let WQ, XQ, FQ, gQ, JQ, jQ, BQ, GQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, CQ, uQ, LQ, SQ, tQ, oQ, eQ, nQ, xQ, YQ = pQ.c,
+           NQ = [],
+           ZQ = [],
+           OQ = [],
+           KQ = [],
+           mQ = [],
+           MQ = [],
+           QW = [],
+           WW = [],
+           XW = [],
+           wW = [],
+           qW = [],
+           TW = [],
+           zW = [],
+ ... (990 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L568` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/268.js#L2235) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/268.js#L568)

```diff
-       jp || (jp = !0, vp.Parse = tp, vp.ParseFromFileAsync = Hp, vp.ParseFromSnippetAsync = dp, vp.CreateFromSnippetAsync = ep, (0, Up.g)("BABYLON.ShaderMaterial", vp))
+       JQ || (JQ = !0, FQ.e.AddNodeConstructor("Light_Type_3", ((QQ, WQ) => () => new gQ(QQ, TQ.s.Zero(), WQ))), (0, PQ.d)("BABYLON.HemisphericLight", gQ))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/269.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/269.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L5-L27` → after: `L4-L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/269.js#L4-L2730) · [Before (L5-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/269.js#L5-L27)

```diff
-   40682: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       FirebaseError: () => Op.d,
-       SDK_VERSION: () => Op.f,
-       _DEFAULT_ENTRY_NAME: () => Op.g,
-       uOp: () => Op.i,
-       _addOrOverwriteComponent: () => Op.k,
-       _apps: () => Op.o,
-       _clearComponents: () => Op.r,
-       _components: () => Op.u,
-       _getProvider: () => Op.x,
-       _registerComponent: () => Op.z,
-       _removeServiceInstance: () => Op.B,
-       deleteApp: () => Op.D,
-       getApp: () => Op.J,
-       getApps: () => Op.G,
- ... (7 more removed lines; see GitHub link above)
+   40640: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => qQ
+     });
+     var wQ = XQ(40272);
+ 
+     function qQ(QQ) {
+       return class extends QQ {
+         constructor() {
+           super(...arguments);
+           const QQ = new.target;
+           if (!QQ[Symbol.metadata]) {
+             const WQ = Object.getPrototypeOf(QQ)?.[Symbol.metadata];
+             QQ[Symbol.metadata] = WQ ? Object.create(WQ) : {}
+           }
+           const WQ = (0, wQ.e)(QQ[Symbol.metadata]);
+ ... (2711 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L5)

```diff
-   40700: (pp, ip, cp) => {
+   40557: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7-L30` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L6) · [Before (L7-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L7-L30)

```diff
-       A: () => Xp,
-       B: () => Ap,
-       D: () => Dp,
-       E: () => Pp,
-       F: () => hp,
-       H: () => yp,
-       K: () => wp,
-       L: () => Rp,
-       P: () => tp,
-       Q: () => Hp,
-       T: () => Up,
-       X: () => vp,
-       _: () => Ep,
-       cb: () => Cp,
-       e: () => Wp,
-       gb: () => dp,
- ... (8 more removed lines; see GitHub link above)
+       c: () => wQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L32-L37` → after: `L8-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L8-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L8-L65) · [Before (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L32-L37)

```diff
-     const Op = function(pp) {
-         const ip = [];
-         let cp = 0;
-         for (let Op = 0; Op < pp.length; Op++) {
-           let op = pp.charCodeAt(Op);
-           op < 128 ? ip[cp++] = op : op < 2048 ? (ip[cp++] = op >> 6 | 192, ip[cp++] = 63 & op | 128) : 55296 === (64512 & op) && Op + 1 < pp.length && 56320 === (64512 & pp.charCodeAt(Op + 1)) ? (op = 65536 + ((1023 & op) << 10) + (1023 & pp.charCodeAt(++Op)), ip[cp++] = op >> 1 … [truncated]
+     class wQ {
+       constructor(QQ, WQ, XQ) {
+         this.bu = QQ, this.bv = WQ, this.distance = XQ, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+       }
+     }
+   },
+   40564: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => zQ
+     });
+     var wQ = XQ(37379),
+       qQ = XQ(37370),
+       TQ = XQ(37374);
+     class zQ {
+       constructor(QQ, WQ, XQ) {
+         this.vectors = (0, wQ.c)(8, qQ.s.Zero), this.center = qQ.s.Zero(), this.centerWorld = qQ.s.Zero(), this.extendSize = qQ.s.Zero(), this.extendSizeWorld = qQ.s.Zero(), this.directions = (0, wQ.c)(3, qQ.s.Zero), this.vectorsWorld = (0, wQ.c)(8, qQ.s.Zero), this.minimumWorld  … [truncated]
+ ... (42 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L39` → after: `L67-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L67-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L67-L213) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L39)

```diff
-         return ip
+         qQ.s.FromArrayToRef(QQ.m, 0, wQ[0]), qQ.s.FromArrayToRef(QQ.m, 4, wQ[1]), qQ.s.FromArrayToRef(QQ.m, 8, wQ[2]), this._worldMatrix = QQ
+       }
+       isInFrustum(QQ) {
+         return zQ.IsInFrustum(this.vectorsWorld, QQ)
+       }
+       isCompletelyInFrustum(QQ) {
+         return zQ.IsCompletelyInFrustum(this.vectorsWorld, QQ)
+       }
+       intersectsPoint(QQ) {
+         const WQ = this.minimumWorld,
+           XQ = this.maximumWorld,
+           wQ = WQ.x,
+           qQ = WQ.y,
+           zQ = WQ.z,
+           sQ = XQ.x,
+           FQ = XQ.y,
+ ... (131 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L42-L69` → after: `L216-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L216-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L216-L960) · [Before (L42-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L42-L69)

```diff
-         byteToCharMap_: null,
-         charToByteMap_: null,
-         byteToCharMapWebSafe_: null,
-         charToByteMapWebSafe_: null,
-         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
-         get ENCODED_VALS() {
-           return this.ENCODED_VALS_BASE + "+/="
-         },
-         get ENCODED_VALS_WEBSAFE() {
-           return this.ENCODED_VALS_BASE + "-_."
-         },
-         HAS_NATIVE_SUPPORT: "function" === typeof atob,
-         encodeByteArray(pp, ip) {
-           if (!Array.isArray(pp)) throw Error("encodeByteArray takes an array as a parameter");
-           this.init_();
-           const cp = ip ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
- ... (12 more removed lines; see GitHub link above)
+         min: 0,
+         max: 0
+       },
+       PQ = (QQ, WQ, XQ) => {
+         const wQ = qQ.s.Dot(WQ.centerWorld, QQ),
+           TQ = Math.abs(qQ.s.Dot(WQ.directions[0], QQ)) * WQ.extendSize.x + Math.abs(qQ.s.Dot(WQ.directions[1], QQ)) * WQ.extendSize.y + Math.abs(qQ.s.Dot(WQ.directions[2], QQ)) * WQ.extendSize.z;
+         XQ.min = wQ - TQ, XQ.max = wQ + TQ
+       },
+       gQ = (QQ, WQ, XQ) => (PQ(QQ, WQ, sQ), PQ(QQ, XQ, FQ), !(sQ.min > FQ.max || FQ.min > sQ.max));
+     class JQ {
+       constructor(QQ, WQ, XQ) {
+         this._isLocked = !1, this.boundingBox = new TQ.b(QQ, WQ, XQ), this.mwQ = new zQ(QQ, WQ, XQ)
+       }
+       reConstruct(QQ, WQ, XQ) {
+         this.boundingBox.reConstruct(QQ, WQ, XQ), this.mwQ.reConstruct(QQ, WQ, XQ)
+       }
+ ... (729 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L71-L77` → after: `L962-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L962-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L962-L999) · [Before (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L71-L77)

```diff
-           return Op.join("")
-         },
-         encodeString(pp, ip) {
-           return this.HAS_NATIVE_SUPPORT && !ip ? btoa(pp) : this.encodeByteArray(Op(pp), ip)
-         },
-         decodeString(pp, ip) {
-           return this.HAS_NATIVE_SUPPORT && !ip ? atob(pp) : function(pp) {
+           if (0 !== this.depthFunction) {
+             const QQ = this._scene.Uj();
+             this._cachedDepthFunctionState = QQ.getDepthFunction() || 0, QQ.setDepthFunction(this.depthFunction)
+           }
+         }
+         unbind() {
+           if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
+             this._scene.Uj().setDepthFunction(this._cachedDepthFunctionState)
+           }
+           if (this.disableDepthWrite) {
+             this._scene.Uj().setDepthWrite(this._cachedDepthWriteState)
+           }
+           if (this.disableColorWrite) {
+             this._scene.Uj().setColorWrite(this._cachedColorWriteState)
+           }
+         }
+ ... (22 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L79-L94` → after: `L1001-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1001-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1001-L1003) · [Before (L79-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L79-L94)

```diff
-             let cp = 0,
-               Op = 0;
-             for (; cp < pp.length;) {
-               const op = pp[cp++];
-               if (op < 128) ip[Op++] = String.fromCharCode(op);
-               else if (op > 191 && op < 224) {
-                 const Ip = pp[cp++];
-                 ip[Op++] = String.fromCharCode((31 & op) << 6 | 63 & Ip)
-               } else if (op > 239 && op < 365) {
-                 const Ip = ((7 & op) << 18 | (63 & pp[cp++]) << 12 | (63 & pp[cp++]) << 6 | 63 & pp[cp++]) - 65536;
-                 ip[Op++] = String.fromCharCode(55296 + (Ip >> 10)), ip[Op++] = String.fromCharCode(56320 + (1023 & Ip))
-               } else {
-                 const Ip = pp[cp++],
-                   Sp = pp[cp++];
-                 ip[Op++] = String.fromCharCode((15 & op) << 12 | (63 & Ip) << 6 | 63 & Sp)
-               }
+             for (const WQ in this.meshMap) {
+               const XQ = this.meshMap[WQ];
+               XQ && QQ.push(XQ)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L96-L116` → after: `L1005-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1005-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1005-L1026) · [Before (L96-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L96-L116)

```diff
-             return ip.join("")
-           }(this.decodeStringToByteArray(pp, ip))
-         },
-         decodeStringToByteArray(pp, ip) {
-           this.init_();
-           const cp = ip ? this.charToByteMapWebSafe_ : this.charToByteMap_,
-             Op = [];
-           for (let op = 0; op < pp.length;) {
-             const ip = cp[pp.charAt(op++)],
-               Sp = op < pp.length ? cp[pp.charAt(op)] : 0;
-             ++op;
-             const xp = op < pp.length ? cp[pp.charAt(op)] : 64;
-             ++op;
-             const Lp = op < pp.length ? cp[pp.charAt(op)] : 64;
-             if (++op, null == ip || null == Sp || null == xp || null == Lp) throw new Ip;
-             const Yp = ip << 2 | Sp >> 4;
- ... (5 more removed lines; see GitHub link above)
+             return QQ
+           }
+           return this._scene.meshes.filter((QQ => QQ.material === this))
+         }
+         forceCompilation(QQ, WQ, XQ, wQ) {
+           const qQ = {
+               clipPlane: !1,
+               useInstances: !1,
+               ...XQ
+             },
+             TQ = this.sE(),
+             zQ = this.allowShaderHotSwapping;
+           this.allowShaderHotSwapping = !1;
+           const sQ = () => {
+             if (!this._scene || !this._scene.Uj()) return;
+             const XQ = TQ.clipPlane;
+ ... (6 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L118` → after: `L1028-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1028-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1028-L1106) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L118)

```diff
-             }
+               XQ && (this.allowShaderHotSwapping = zQ, TQ && wQ && wQ(TQ), WQ && WQ(this))
+             } else this.isReady() ? (this.allowShaderHotSwapping = zQ, WQ && WQ(this)) : setTimeout(sQ, 16);
+             qQ.clipPlane && (TQ.clipPlane = XQ)
+           };
+           sQ()
+         }
+         async forceCompilationAsync(QQ, WQ) {
+           return await new Promise(((XQ, wQ) => {
+             this.forceCompilation(QQ, (() => {
+               XQ()
+             }), WQ, (QQ => {
+               wQ(QQ)
+             }))
+           }))
+         }
+         KWQ(WQ) {
+ ... (63 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L120-L125` → after: `L1108-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1108-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1108-L1116) · [Before (L120-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L120-L125)

```diff
-           return Op
-         },
-         init_() {
-           if (!this.byteToCharMap_) {
-             this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
-             for (let pp = 0; pp < this.ENCODED_VALS.length; pp++) this.byteToCharMap_[pp] = this.ENCODED_VALS.charAt(pp), this.charToByteMap_[this.byteToCharMap_[pp]] = pp, this.byteToCharMapWebSafe_[pp] = this.ENCODED_VALS_WEBSAFE.charAt(pp), this.charToByteMapWebSafe_[this.byte … [truncated]
+         }
+         setPrePassRenderer(QQ) {
+           return !1
+         }
+         dispose(QQ, WQ, XQ) {
+           const wQ = this.sE();
+           if (wQ.stopAnimation(this), wQ.freeProcessedMaterials(), wQ.removeMaterial(this), this._eventInfo.forceDisposeTextures = WQ, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
+             const QQ = this._parentContainer.materials.indexOf(this);
+             QQ > -1 && this._parentContainer.materials.splice(QQ, 1), this._parentContainer = null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L128-L144` → after: `L1129-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1129-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1129-L1144) · [Before (L128-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L128-L144)

```diff
-       };
-     class Ip extends Error {
-       constructor() {
-         super(...arguments), this.name = "DecodeBase64StringError"
-       }
-     }
-     const Sp = function(pp) {
-         return function(pp) {
-           const ip = Op(pp);
-           return op.encodeByteArray(ip, !0)
-         }(pp).replace(/\./g, "")
-       },
-       xp = function(pp) {
-         try {
-           return op.decodeString(pp, !0)
-         } catch (ip) {
- ... (1 more removed lines; see GitHub link above)
+         _disposeMeshResources(QQ) {
+           if (!QQ) return;
+           const WQ = QQ.geometry,
+             XQ = QQ._internalAbstractMeshDataInfo._materialForRenderPass;
+           if (this._storeEffectOnSubMeshes) {
+             if (QQ.ZD && XQ)
+               for (const wQ of QQ.ZD) {
+                 const QQ = wQ._drawWrappers;
+                 for (let qQ = 0; qQ < QQ.length; qQ++) {
+                   const TQ = QQ[qQ]?.effect;
+                   if (!TQ) continue;
+                   XQ[qQ] === this && (WQ?._releaseVertexArrayObject(TQ), wQ._removeDrawWrapper(qQ, !0, !0))
+                 }
+               }
+           } else WQ?._releaseVertexArrayObject(this._drawWrapper.effect);
+           QQ.material !== this || QQ.bqQ || (QQ.material = null)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L146-L164` → after: `L1146-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1146-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1146-L1173) · [Before (L146-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L146-L164)

```diff
-         return null
-       };
-     const Lp = () => function() {
-         if ("undefined" !== typeof self) return self;
-         if ("undefined" !== typeof window) return window;
-         if ("undefined" !== typeof cp.g) return cp.g;
-         throw new Error("Unable to locate global object.")
-       }().__FIREBASE_DEFAULTS__,
-       Yp = () => {
-         try {
-           return Lp() || (() => {
-             if ("undefined" === typeof process) return
-           })() || (() => {
-             if ("undefined" === typeof document) return;
-             let pp;
-             try {
- ... (3 more removed lines; see GitHub link above)
+         serialize() {
+           const QQ = IQ.b.Serialize(this);
+           return QQ.stencil = this.stencil.serialize(), QQ.uniqueId = this.uniqueId, this._serializePlugins(QQ), QQ
+         }
+         _serializePlugins(QQ) {
+           if (QQ.plugins = {}, this.pluginManager)
+             for (const WQ of this.pluginManager._plugins) WQ.doNotSerialize || (QQ.plugins[WQ.getClassName()] = WQ.serialize())
+         }
+         static ParseAlphaMode(QQ, WQ) {
+           void 0 !== QQ._alphaMode ? WQ._alphaMode = Array.isArray(QQ._alphaMode) ? [...QQ._alphaMode] : [QQ._alphaMode] : void 0 !== QQ.alphaMode ? WQ._alphaMode = Array.isArray(QQ.alphaMode) ? [...QQ.alphaMode] : [QQ.alphaMode] : WQ._alphaMode = [2]
+         }
+         static Parse(WQ, XQ, wQ) {
+           if (WQ.customType) {
+             if ("BABYLON.PBRMaterial" === WQ.customType && WQ.overloadedAlbedo && (WQ.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return gQ.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
+           } else WQ.customType = "BABYLON.StandardMaterial";
+           const qQ = TQ.g.Instantiate(WQ.customType).Parse(WQ, XQ, wQ);
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L172-L184` → after: `L1176-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1176-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1176-L1563) · [Before (L172-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L172-L184)

```diff
-       },
-       Dp = pp => {
-         var ip, cp;
-         return null === (cp = null === (ip = Yp()) || void 0 === ip ? void 0 : ip.emulatorHosts) || void 0 === cp ? void 0 : cp[pp]
-       },
-       Ap = () => {
-         var pp;
-         return null === (pp = Yp()) || void 0 === pp ? void 0 : pp.config
-       },
-       Pp = pp => {
-         var ip;
-         return null === (ip = Yp()) || void 0 === ip ? void 0 : ip[`_${pp}`]
-       };
+       }, (() => {
+         const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], VQ = [(0, qQ.I)()], DQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], bQ = [(0, qQ.I)("alpha")], vQ = [(0, qQ.I)("backFaceCulling")], dQ = [(0, qQ.I)("textureRepetitionMode")], HQ = [(0, qQ.I)("textureR … [truncated]
+           kind: "getter",
+           name: "pointsCloud",
+           static: !1,
+           private: !1,
+           access: {
+             has: QQ => "pointsCloud" in QQ,
+             get: QQ => QQ.pointsCloud
+           },
+           metadata: TQ
+         }, null, xQ), (0, wQ.k)(QQ, null, tQ, {
+           kind: "getter",
+           name: "fillMode",
+           static: !1,
+ ... (372 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L186-L189` → after: `L1565-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1565-L1566) · [Before (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L186-L189)

```diff
-       constructor() {
-         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((pp, ip) => {
-           this.resolve = pp, this.reject = ip
-         }))
+       static get DiffuseTextureEnabled() {
+         return this._DiffuseTextureEnabled
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L191-L194` → after: `L1568-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1568-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1568-L1713) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L191-L194)

```diff
-       wrapCallback(pp) {
-         return (ip, cp) => {
-           ip ? this.reject(ip) : this.resolve(cp), "function" === typeof pp && (this.promise.catch((() => {})), 1 === pp.length ? pp(ip) : pp(ip, cp))
-         }
+       static set DiffuseTextureEnabled(QQ) {
+         this._DiffuseTextureEnabled !== QQ && (this._DiffuseTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
+       }
+       static get BaseWeightTextureEnabled() {
+         return this._BaseWeightTextureEnabled
+       }
+       static set BaseWeightTextureEnabled(QQ) {
+         this._BaseWeightTextureEnabled !== QQ && (this._BaseWeightTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
+       }
+       static get BaseDiffuseRoughnessTextureEnabled() {
+         return this._BaseDiffuseRoughnessTextureEnabled
+       }
+       static set BaseDiffuseRoughnessTextureEnabled(QQ) {
+         this._BaseDiffuseRoughnessTextureEnabled !== QQ && (this._BaseDiffuseRoughnessTextureEnabled = QQ, wQ.d.MarkAllMaterialsAsDirty(1))
+       }
+       static get DetailTextureEnabled() {
+ ... (130 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L198-L199` → after: `L1756-L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1756-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1756-L1778) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L198-L199)

```diff
-     function yp() {
-       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
+     function FQ(QQ, WQ, XQ) {
+       if (!QQ || QQ.LOGARITHMICDEPTH || QQ.indexOf && QQ.indexOf("LOGARITHMICDEPTH") >= 0) {
+         const QQ = XQ.activeCamera;
+         1 === QQ.mode && wQ.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), WQ.setFloat("logarithmicDepthConstant", 2 / (Math.log(QQ.maxZ + 1) / Math.LN2))
+       }
+     }
+     const PQ = {
+         r: 0,
+         g: 0,
+         b: 0
+       },
+       gQ = {
+         NUM_MORPH_INFLUENCERS: 0,
+         NORMAL: !1,
+         TANGENT: !1,
+         UV: !1,
+ ... (7 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L202-L203` → after: `L1781-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1781-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1781-L1783) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L202-L203)

```diff
-     function Up() {
-       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yp())
+     function rQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
+       const JQ = QQ.numMaxInfluencers || QQ.numInfluencers;
+       return JQ <= 0 ? 0 : (WQ.push("#define MORPHTARGETS"), QQ.hasPositions && WQ.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), QQ.hasNormals && WQ.push("#define MORPHTARGETTEXTURE_HASNORMALS"), QQ.hasTangents && WQ.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), QQ.hasUVs && … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L206-L208` → after: `L1786-L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1786-L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1786-L1800) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L206-L208)

```diff
-     function wp() {
-       const pp = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
-       return "object" === typeof pp && void 0 !== pp.id
+     function IQ(QQ, WQ, XQ) {
+       let TQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const zQ = XQ.NUM_MORPH_INFLUENCERS;
+       if (zQ > 0 && qQ.d.LastCreatedEngine) {
+         const sQ = qQ.d.LastCreatedEngine.getCaps().maxVertexAttribs,
+           FQ = WQ.morphTargetManager;
+         if (FQ?.isUsingTextureForTargets) return;
+         const PQ = FQ && FQ.supportsPositions && TQ,
+           gQ = FQ && FQ.supportsNormals && XQ.NORMAL,
+           JQ = FQ && FQ.supportsTangents && XQ.TANGENT,
+           rQ = FQ && FQ.supportsUVs && XQ.UV1,
+           IQ = FQ && FQ.supportsUV2s && XQ.UV2,
+           jQ = FQ && FQ.supportsColors && XQ.VERTEXCOLOR;
+         for (let XQ = 0; XQ < zQ; XQ++) PQ && QQ.push("position" + XQ), gQ && QQ.push("normal" + XQ), JQ && QQ.push("tangent" + XQ), rQ && QQ.push("uv_" + XQ), IQ && QQ.push("uv2_" + XQ), jQ && QQ.push("color" + XQ), QQ.length > sQ && wQ.b.Error("Cannot add more vertex attributes … [truncated]
+       }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L211-L212` → after: `L1803-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1803-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1803-L1805) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L211-L212)

```diff
-     function vp() {
-       return "object" === typeof navigator && "ReactNative" === navigator.product
+     function jQ(QQ) {
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       QQ.push("world0"), QQ.push("world1"), QQ.push("world2"), QQ.push("world3"), WQ && (QQ.push("previousWorld0"), QQ.push("previousWorld1"), QQ.push("previousWorld2"), QQ.push("previousWorld3"))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L215-L217` → after: `L1808-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1808-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1808-L1810) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L215-L217)

```diff
-     function tp() {
-       const pp = yp();
-       return pp.indexOf("MSIE ") >= 0 || pp.indexOf("Trident/") >= 0
+     function BQ(QQ, WQ) {
+       const XQ = QQ.morphTargetManager;
+       QQ && XQ && WQ.setFloatArray("morphTargetInfluences", XQ.influences)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L220-L225` → after: `L1813-L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1813-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1813-L1814) · [Before (L220-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L220-L225)

```diff
-     function Hp() {
-       try {
-         return "object" === typeof indexedDB
-       } catch (pp) {
-         return !1
-       }
+     function yQ(QQ, WQ) {
+       WQ.bindToEffect(QQ, "Scene")
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L228-L243` → after: `L1817-L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1817-L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1817-L1829) · [Before (L228-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L228-L243)

```diff
-     function dp() {
-       return new Promise(((pp, ip) => {
-         try {
-           let cp = !0;
-           const Op = "validate-browser-context-for-indexeddb-analytics-module",
-             op = self.indexedDB.open(Op);
-           op.onsuccess = () => {
-             op.result.close(), cp || self.indexedDB.deleteDatabase(Op), pp(!0)
-           }, op.onupgradeneeded = () => {
-             cp = !1
-           }, op.onerror = () => {
-             var pp;
-             ip((null === (pp = op.error) || void 0 === pp ? void 0 : pp.message) || "")
-           }
-         } catch (cp) {
-           ip(cp)
+     function VQ(QQ, WQ, XQ, wQ) {
+       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         FQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         PQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         gQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         JQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+         rQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
+       if (QQ.texturesEnabled && qQ && sQ.e.ReflectionTextureEnabled) {
+         if (XQ.N_("reflectionMatrix", qQ.getReflectionTextureMatrix()), XQ.updateFloat2("vReflectionInfos", qQ.level * QQ.iblIntensity, rQ), FQ && qQ.boundingBoxSize) {
+           const QQ = qQ;
+           XQ.updateVector3("vReflectionPosition", QQ.boundingBoxPosition), XQ.updateVector3("vReflectionSize", QQ.boundingBoxSize)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L245` → after: `L1831-L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1831-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1831-L1845) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L245)

```diff
-       }))
+         if (TQ) {
+           const QQ = qQ.getSize().width;
+           XQ.updateFloat2("vReflectionFilteringInfo", QQ, Math.log2(QQ))
+         }
+         if (gQ && !WQ.USEIRRADIANCEMAP) {
+           const QQ = qQ.sphericalPolynomial;
+           if (WQ.USESPHERICALFROMREFLECTIONMAP && QQ)
+             if (WQ.SPHERICAL_HARMONICS) {
+               const WQ = QQ.preScaledHarmonics;
+               XQ.updateVector3("vSphericalL00", WQ.l00), XQ.updateVector3("vSphericalL1_1", WQ.l1_1), XQ.updateVector3("vSphericalL10", WQ.l10), XQ.updateVector3("vSphericalL11", WQ.l11), XQ.updateVector3("vSphericalL2_2", WQ.l2_2), XQ.updateVector3("vSphericalL2_1", WQ.l2_1), XQ … [truncated]
+             } else XQ.updateFloat3("vSphericalX", QQ.x.x, QQ.x.y, QQ.x.z), XQ.updateFloat3("vSphericalY", QQ.y.x, QQ.y.y, QQ.y.z), XQ.updateFloat3("vSphericalZ", QQ.z.x, QQ.z.y, QQ.z.z), XQ.updateFloat3("vSphericalXX_ZZ", QQ.xx.x - QQ.zz.x, QQ.xx.y - QQ.zz.y, QQ.xx.z - QQ.zz.z),  … [truncated]
+         } else PQ && WQ.USEIRRADIANCEMAP && WQ.USE_IRRADIANCE_DOMINANT_DIRECTION && qQ.irradianceTexture && XQ.updateVector3("vReflectionDominantDirection", qQ.irradianceTexture._dominantDirection);
+         zQ && XQ.updateFloat3("vReflectionMicrosurfaceInfos", qQ.getSize().width, qQ.lodGenerationScale, qQ.lodGenerationOffset)
+       }
+       JQ && XQ.updateColor3("vReflectionColor", wQ)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L248-L253` → after: `L1848-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1848-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1848-L1854) · [Before (L248-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L248-L253)

```diff
-     function ep() {
-       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
-     }
-     class jp extends Error {
-       constructor(pp, ip, cp) {
-         super(ip), this.code = pp, this.customData = cp, this.name = "FirebaseError", Object.setPrototypeOf(this, jp.prototype), Error.captureStackTrace && Error.captureStackTrace(this, kp.prototype.create)
+     function DQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       if (wQ && sQ.e.ReflectionTextureEnabled) {
+         WQ.LODBASEDMICROSFURACE ? XQ.setTexture("reflectionSampler", wQ) : (XQ.setTexture("reflectionSampler", wQ._lodTextureMid || wQ), XQ.setTexture("reflectionSamplerLow", wQ._lodTextureLow || wQ), XQ.setTexture("reflectionSamplerHigh", wQ._lodTextureHigh || wQ)), WQ.USEIRRADI … [truncated]
+         const TQ = QQ.iblCdfGenerator;
+         qQ && TQ && XQ.setTexture("icdfSampler", TQ.getIcdfTexture())
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L256-L272` → after: `L1857-L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1857-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1857-L1859) · [Before (L256-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L256-L272)

```diff
-     class kp {
-       constructor(pp, ip, cp) {
-         this.service = pp, this.serviceName = ip, this.errors = cp
-       }
-       create(pp) {
-         const ip = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
-           cp = `${this.service}/${pp}`,
-           Op = this.errors[pp],
-           op = Op ? function(pp, ip) {
-             return pp.replace(mp, ((pp, cp) => {
-               const Op = ip[cp];
-               return null != Op ? String(Op) : `<${cp}?>`
-             }))
-           }(Op, ip) : "Error",
-           Ip = `${this.serviceName}: ${op} (${cp}).`;
-         return new jp(cp, Ip, ip)
- ... (1 more removed lines; see GitHub link above)
+ 
+     function pQ(QQ, WQ, XQ) {
+       WQ._needUVs = !0, WQ[XQ] = !0, QQ.optimizeUVAllocation && QQ.getTextureMatrix().isIdentityAs3x2() ? (WQ[XQ + "DIRECTUV"] = QQ.coordinatesIndex + 1, WQ["MAINUV" + (QQ.coordinatesIndex + 1)] = !0) : WQ[XQ + "DIRECTUV"] = 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L276-L279` → after: `L1862-L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1862-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1862-L1864) · [Before (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L276-L279)

```diff
-     function Rp(pp) {
-       for (const ip in pp)
-         if (Object.prototype.hasOwnProperty.call(pp, ip)) return !1;
-       return !0
+     function GQ(QQ, WQ, XQ) {
+       const wQ = QQ.getTextureMatrix();
+       WQ.N_(XQ + "Matrix", wQ)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L282-L296` → after: `L1867-L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1867-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1867-L1868) · [Before (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L282-L296)

```diff
-     function qp(pp, ip) {
-       if (pp === ip) return !0;
-       const cp = Object.keys(pp),
-         Op = Object.keys(ip);
-       for (const op of cp) {
-         if (!Op.includes(op)) return !1;
-         const cp = pp[op],
-           Ip = ip[op];
-         if (Mp(cp) && Mp(Ip)) {
-           if (!qp(cp, Ip)) return !1
-         } else if (cp !== Ip) return !1
-       }
-       for (const op of Op)
-         if (!cp.includes(op)) return !1;
-       return !0
+     function UQ(QQ, WQ, XQ) {
+       XQ.BAKED_VERTEX_ANIMATION_TEXTURE && XQ.INSTANCES && QQ.push("bakedVertexAnimationSettingsInstanced")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L299-L300` → after: `L1871-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1871-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1871-L1882) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L299-L300)

```diff
-     function Mp(pp) {
-       return null !== pp && "object" === typeof pp
+     function bQ(QQ, WQ, XQ) {
+       var wQ;
+       if (WQ && QQ && (QQ.computeBonesUsingShaders && WQ._bonesComputationForcedToCPU && (QQ.computeBonesUsingShaders = !1), QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton)) {
+         const qQ = QQ.skeleton;
+         if (qQ.isUsingTextureForMatrices && WQ.getUniformIndex("boneTextureInfo") > -1) {
+           const XQ = qQ.getTransformMatrixTexture(QQ);
+           WQ.setTexture("boneSampler", XQ), WQ.setFloat2("boneTextureInfo", qQ._textureWidth, qQ._textureHeight)
+         } else {
+           const TQ = qQ.getTransformMatrices(QQ);
+           TQ && (WQ.setMatrices("mBones", TQ), XQ && QQ.sE().prePassRenderer && QQ.sE().prePassRenderer.getIndex(2) && (XQ.previousBones[QQ.uniqueId] || (XQ.previousBones[QQ.uniqueId] = TQ.slice()), WQ.setMatrices("mPreviousBones", XQ.previousBones[QQ.uniqueId]), wQ = TQ, XQ.prev … [truncated]
+         }
+       }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L303-L308` → after: `L1885-L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1885-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1885-L1887) · [Before (L303-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L303-L308)

```diff
-     function Cp(pp) {
-       const ip = [];
-       for (const [cp, Op] of Object.entries(pp)) Array.isArray(Op) ? Op.forEach((pp => {
-         ip.push(encodeURIComponent(cp) + "=" + encodeURIComponent(pp))
-       })) : ip.push(encodeURIComponent(cp) + "=" + encodeURIComponent(Op));
-       return ip.length ? "&" + ip.join("&") : ""
+     function vQ(QQ, WQ, XQ, wQ, qQ) {
+       let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+       QQ._bindLight(WQ, XQ, wQ, qQ, TQ)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L311-L318` → after: `L1892-L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1892-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1892-L1897) · [Before (L311-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L311-L318)

```diff
-     function Ep(pp) {
-       const ip = {};
-       return pp.replace(/^\?/, "").split("&").forEach((pp => {
-         if (pp) {
-           const [cp, Op] = pp.split("=");
-           ip[decodeURIComponent(cp)] = decodeURIComponent(Op)
-         }
-       })), ip
+     function aQ(QQ, WQ, XQ, wQ) {
+       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
+       const TQ = Math.min(WQ.lightSources.length, qQ);
+       for (let zQ = 0; zQ < TQ; zQ++) {
+         vQ(WQ.lightSources[zQ], zQ, QQ, XQ, "boolean" === typeof wQ ? wQ : wQ.SPECULARTERM, WQ.receiveShadows)
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L321-L325` → after: `L1900-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1900-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1900-L1901) · [Before (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L321-L325)

```diff
-     function Xp(pp) {
-       const ip = pp.indexOf("?");
-       if (!ip) return "";
-       const cp = pp.indexOf("#", ip);
-       return pp.substring(ip, cp > 0 ? cp : void 0)
+     function lQ(QQ, WQ, XQ, wQ) {
+       XQ.NUM_BONE_INFLUENCERS > 0 && (wQ.addCPUSkinningFallback(0, WQ), QQ.push("matricesIndices"), QQ.push("matricesWeights"), XQ.NUM_BONE_INFLUENCERS > 4 && (QQ.push("matricesIndicesExtra"), QQ.push("matricesWeightsExtra")))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L329-L330` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1905) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L329-L330)

```diff
-       const cp = new Qp(pp, ip);
-       return cp.subscribe.bind(cp)
+       (WQ.INSTANCES || WQ.THIN_INSTANCES) && jQ(QQ, !!WQ.PREPASS_VELOCITY), WQ.INSTANCESCOLOR && QQ.push("instanceColor")
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L332-L394` → after: `L1907-L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1907-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1907-L1927) · [Before (L332-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L332-L394)

```diff
-     class Qp {
-       constructor(pp, ip) {
-         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = ip, this.task.then((() => {
-           pp(this)
-         })).catch((pp => {
-           this.error(pp)
-         }))
-       }
-       next(pp) {
-         this.forEachObserver((ip => {
-           ip.next(pp)
-         }))
-       }
-       error(pp) {
-         this.forEachObserver((ip => {
-           ip.error(pp)
- ... (47 more removed lines; see GitHub link above)
+ 
+     function iQ(QQ, WQ) {
+       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+         wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         qQ = 0;
+       for (let TQ = 0; TQ < XQ && QQ["LIGHT" + TQ]; TQ++) TQ > 0 && (qQ = wQ + TQ, WQ.addFallback(qQ, "LIGHT" + TQ)), QQ.SHADOWS || (QQ["SHADOW" + TQ] && WQ.addFallback(wQ, "SHADOW" + TQ), QQ["SHADOWPCF" + TQ] && WQ.addFallback(wQ, "SHADOWPCF" + TQ), QQ["SHADOWPCSS" + TQ] && WQ.a … [truncated]
+       return qQ
+     }
+ 
+     function cQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
+       let sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         PQ = arguments.length > 9 ? arguments[9] : void 0,
+         gQ = arguments.length > 10 ? arguments[10] : void 0;
+       if (zQ._areMiscDirty) {
+         zQ.LOGARITHMICDEPTH = XQ, zQ.POINTSIZE = wQ, zQ.FOG = qQ && function(QQ, WQ) {
+ ... (5 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L398-L402` → after: `L1931-L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1931-L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1931-L1939) · [Before (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L398-L402)

```diff
-     function Jp() {}
-     const Bp = 1e3,
-       Np = 2,
-       Tp = 144e5,
-       fp = .5;
+     function AQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!QQ.lightsEnabled || wQ) return !0;
+       const qQ = WQ.lightSources,
+         TQ = Math.min(qQ.length, XQ);
+       for (let zQ = 0; zQ < TQ; zQ++)
+         if (!qQ[zQ].areLightTexturesReady()) return !1;
+       return !0
+     }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L404-L408` → after: `L1941-L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1941-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1941-L1973) · [Before (L404-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L404-L408)

```diff
-     function bp(pp) {
-       let ip = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Np;
-       const cp = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bp) * Math.pow(ip, pp),
-         Op = Math.round(fp * cp * (Math.random() - .5) * 2);
-       return Math.min(Tp, cp + Op)
+     function RQ(QQ, WQ, XQ, qQ) {
+       let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
+         zQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!XQ._areLightsDirty) return XQ._needNormals;
+       const sQ = TQ;
+       TQ = function(QQ, WQ) {
+         const XQ = QQ.Uj().getCaps().maxUniformBuffersPerShaderStage;
+         if (null == XQ) return WQ;
+         const wQ = Math.max(XQ - dQ, 1);
+         return Math.min(WQ, wQ)
+       }(QQ, TQ);
+       let FQ = 0;
+       const PQ = {
+         needNormals: XQ._needNormals,
+         needRebuild: !1,
+         lightmapMode: !1,
+ ... (17 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L411-L412` → after: `L1976-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1976-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L1976-L2014) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L411-L412)

```diff
-     function hp(pp) {
-       return pp && pp._delegate ? pp._delegate : pp
+     function EQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
+         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (WQ && sQ.e.ReflectionTextureEnabled) {
+         if (!WQ.isReadyOrNotBlocking()) return !1;
+         XQ._needNormals = !0, XQ.REFLECTION = !0, XQ.GAMMAREFLECTION = WQ.gammaSpace, XQ.RGBDREFLECTION = WQ.isRGBD, XQ.LODINREFLECTIONALPHA = WQ.lodLevelInAlpha, XQ.LINEARSPECULARREFLECTION = WQ.linearSpecularLOD, XQ.USEIRRADIANCEMAP = !1, XQ.LODBASEDMICROSFURACE = QQ.Uj().getCa … [truncated]
+         const zQ = QQ.Uj();
+         switch (wQ && qQ > 0 ? (XQ.NUM_SAMPLES = "" + qQ, zQ._features.needTypeSuffixInShaderConstants && (XQ.NUM_SAMPLES = XQ.NUM_SAMPLES + "u"), XQ.REALTIME_FILTERING = !0, QQ.iblCdfGenerator && (XQ.IBL_CDF_FILTERING = !0)) : XQ.REALTIME_FILTERING = !1, XQ.INVERTCUBICMAP = 6 == … [truncated]
+           case 0:
+             XQ.REFLECTIONMAP_EXPLICIT = !0;
+             break;
+           case 2:
+             XQ.REFLECTIONMAP_PLANAR = !0;
+             break;
+           case 4:
+ ... (23 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L458-L468` → after: `L2017-L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2017-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2017-L2033) · [Before (L458-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L458-L468)

```diff
-     function yp(pp) {
-       return pp !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (xp || (xp = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(pp) ? function() {
-         for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
-         return pp.apply(vp(this), cp), wp(Lp.get(this))
-       } : function() {
-         for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
-         return wp(pp.apply(vp(this), cp))
-       } : function(ip) {
-         for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
-         const Ip = pp.call(vp(this), ip, ...Op);
-         return Dp.set(Ip, ip.sort ? ip.sort() : [ip]), wp(Ip)
+     function CQ(QQ, WQ, XQ, wQ, qQ, zQ, sQ) {
+       switch (sQ.needNormals = !0, void 0 === qQ["LIGHT" + wQ] && (sQ.needRebuild = !0), qQ["LIGHT" + wQ] = !0, qQ["SPOTLIGHT" + wQ] = !1, qQ["HEMILIGHT" + wQ] = !1, qQ["POINTLIGHT" + wQ] = !1, qQ["DIRLIGHT" + wQ] = !1, qQ["AREALIGHT" + wQ] = !1, qQ["CLUSTLIGHT" + wQ] = !1, XQ.pr … [truncated]
+         case TQ.e.FALLOFF_GLTF:
+           qQ["LIGHT_FALLOFF_GLTF" + wQ] = !0;
+           break;
+         case TQ.e.FALLOFF_PHYSICAL:
+           qQ["LIGHT_FALLOFF_PHYSICAL" + wQ] = !0;
+           break;
+         case TQ.e.FALLOFF_STANDARD:
+           qQ["LIGHT_FALLOFF_STANDARD" + wQ] = !0
+       }
+       if (zQ && !XQ.specular.equalsFloats(0, 0, 0) && (sQ.specularEnabled = !0), qQ["SHADOW" + wQ] = !1, qQ["SHADOWCSM" + wQ] = !1, qQ["SHADOWCSMDEBUG" + wQ] = !1, qQ["SHADOWCSMNUM_CASCADES" + wQ] = !1, qQ["SHADOWCSMUSESHADOWMAXZ" + wQ] = !1, qQ["SHADOWCSMNOBLEND" + wQ] = !1, qQ[ … [truncated]
+         const WQ = XQ.getShadowGenerator(QQ.activeCamera) ?? XQ.getShadowGenerator();
+         if (WQ) {
+           const QQ = WQ.getShadowMap();
+           QQ && QQ.renderList && QQ.renderList.length > 0 && (sQ.shadowEnabled = !0, WQ.prepareDefines(qQ, wQ))
+ ... (1 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L472-L489` → after: `L2038-L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2038-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2038-L2052) · [Before (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L472-L489)

```diff
-     function Up(pp) {
-       return "function" === typeof pp ? yp(pp) : (pp instanceof IDBTransaction && function(pp) {
-         if (Yp.has(pp)) return;
-         const ip = new Promise(((ip, cp) => {
-           const Op = () => {
-               pp.removeEventListener("complete", op), pp.removeEventListener("error", Ip), pp.removeEventListener("abort", Ip)
-             },
-             op = () => {
-               ip(), Op()
-             },
-             Ip = () => {
-               cp(pp.error || new DOMException("AbortError", "AbortError")), Op()
-             };
-           pp.addEventListener("complete", op), pp.addEventListener("error", Ip), pp.addEventListener("abort", Ip)
-         }));
-         Yp.set(pp, ip)
- ... (2 more removed lines; see GitHub link above)
+     function uQ(QQ, WQ, XQ, wQ, qQ) {
+       let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         sQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         FQ = function(QQ, WQ) {
+           let XQ = !1;
+           if (QQ.activeCamera) {
+             const wQ = WQ.CAMERA_ORTHOGRAPHIC ? 1 : 0,
+               qQ = WQ.CAMERA_PERSPECTIVE ? 1 : 0,
+               TQ = 1 === QQ.activeCamera.mode ? 1 : 0,
+               zQ = 0 === QQ.activeCamera.mode ? 1 : 0;
+             (wQ ^ TQ || qQ ^ zQ) && (WQ.CAMERA_ORTHOGRAPHIC = 1 === TQ, WQ.CAMERA_PERSPECTIVE = 1 === zQ, XQ = !0)
+           }
+           return XQ
+         }(QQ, wQ);
+       !1 !== TQ && (FQ = (0, zQ.e)(XQ, QQ, wQ)), wQ.DEPTHPREPASS !== !WQ.getColorWrite() && (wQ.DEPTHPREPASS = !wQ.DEPTHPREPASS, FQ = !0), wQ.INSTANCES !== qQ && (wQ.INSTANCES = qQ, FQ = !0), wQ.THIN_INSTANCES !== sQ && (wQ.THIN_INSTANCES = sQ, FQ = !0), FQ && wQ.markAsUnprocesse … [truncated]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L492-L512` → after: `L2059-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2059-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2059-L2103) · [Before (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L492-L512)

```diff
-     function wp(pp) {
-       if (pp instanceof IDBRequest) return function(pp) {
-         const ip = new Promise(((ip, cp) => {
-           const Op = () => {
-               pp.removeEventListener("success", op), pp.removeEventListener("error", Ip)
-             },
-             op = () => {
-               ip(wp(pp.result)), Op()
-             },
-             Ip = () => {
-               cp(pp.error), Op()
-             };
-           pp.addEventListener("success", op), pp.addEventListener("error", Ip)
-         }));
-         return ip.then((ip => {
-           ip instanceof IDBCursor && Lp.set(ip, pp)
- ... (5 more removed lines; see GitHub link above)
+     function tQ(QQ, WQ, XQ, qQ) {
+       let TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+         sQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       if (!WQ._areAttributesDirty && WQ._needNormals === WQ._normals && WQ._needUVs === WQ._uvs) return !1;
+       WQ._normals = WQ._needNormals, WQ._uvs = WQ._needUVs, WQ.NORMAL = WQ._needNormals && QQ.isVerticesDataPresent("normal"), WQ._needNormals && QQ.isVerticesDataPresent("tangent") && (WQ.TANGENT = !0);
+       for (let wQ = 1; wQ <= 6; ++wQ) WQ["UV" + wQ] = !!WQ._needUVs && QQ.isVerticesDataPresent(`uv${1===wQ?"":wQ}`);
+       if (XQ) {
+         const XQ = QQ.useVertexColors && QQ.isVerticesDataPresent("color");
+         WQ.VERTEXCOLOR = XQ, WQ.VERTEXALPHA = QQ.hasVertexAlpha && XQ && zQ
+       }
+       return QQ.isVerticesDataPresent("instanceColor") && (QQ.UqQ || QQ.hasThinInstances) && (WQ.INSTANCESCOLOR = !0), qQ && function(QQ, WQ) {
+         if (QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton) {
+           WQ.NUM_BONE_INFLUENCERS = QQ.numBoneInfluencers;
+           const XQ = void 0 !== WQ.BONETEXTURE;
+           if (QQ.skeleton.isUsingTextureForMatrices && XQ) WQ.BONETEXTURE = !0;
+ ... (29 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L520-L553` → after: `L2107-L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2107-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2107-L2109) · [Before (L520-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L520-L553)

```diff
-       if (!(pp instanceof IDBDatabase) || ip in pp || "string" !== typeof ip) return;
-       if (dp.get(ip)) return dp.get(ip);
-       const cp = ip.replace(/FromIndex$/, ""),
-         Op = ip !== cp,
-         op = Hp.includes(cp);
-       if (!(cp in (Op ? IDBIndex : IDBObjectStore).prototype) || !op && !tp.includes(cp)) return;
-       const Ip = async function(pp) {
-         const ip = this.transaction(pp, op ? "readwrite" : "readonly");
-         let Ip = ip.store;
-         for (var Sp = arguments.length, xp = new Array(Sp > 1 ? Sp - 1 : 0), Lp = 1; Lp < Sp; Lp++) xp[Lp - 1] = arguments[Lp];
-         return Op && (Ip = Ip.index(xp.shift())), (await Promise.all([Ip[cp](...xp), op && ip.done]))[0]
-       };
-       return dp.set(ip, Ip), Ip
-     }
-     Wp = (pp => ({
-       ...pp,
- ... (18 more removed lines; see GitHub link above)
+       if (QQ.activeCamera) {
+         const XQ = WQ.MULTIVIEW;
+         WQ.MULTIVIEW = null !== QQ.activeCamera.outputRenderTarget && QQ.activeCamera.outputRenderTarget.getViewCount() > 1, WQ.MULTIVIEW != XQ && WQ.markAsUnprocessed()
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L615-L620` → after: `L2113-L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2113-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2113-L2116) · [Before (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L615-L620)

```diff
-     function oi(pp, ip) {
-       try {
-         pp.container.vJ(ip)
-       } catch (cp) {
-         Rp.debug(`Component ${ip.name} failed to register with FirebaseApp ${pp.name}`, cp)
-       }
+     function eQ(QQ, WQ, XQ) {
+       const wQ = WQ.ORDER_INDEPENDENT_TRANSPARENCY,
+         qQ = WQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
+       WQ.ORDER_INDEPENDENT_TRANSPARENCY = QQ.useOrderIndependentTransparency && XQ, WQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !QQ.Uj().getCaps().textureFloatLinearFiltering, wQ === WQ.ORDER_INDEPENDENT_TRANSPARENCY && qQ === WQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || WQ.markAsU … [truncated]
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L623-L624` → after: `L2119-L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2119-L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2119-L2180) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L623-L624)

```diff
-     function Ii(pp, ip) {
-       pp.container.addOrOverwriteComponent(ip)
+     function nQ(QQ, WQ, XQ) {
+       const wQ = WQ.PREPASS;
+       if (!WQ._arePrePassDirty) return;
+       const qQ = [{
+         type: 1,
+         define: "PREPASS_POSITION",
+         index: "PREPASS_POSITION_INDEX"
+       }, {
+         type: 9,
+         define: "PREPASS_LOCAL_POSITION",
+         index: "PREPASS_LOCAL_POSITION_INDEX"
+       }, {
+         type: 2,
+         define: "PREPASS_VELOCITY",
+         index: "PREPASS_VELOCITY_INDEX"
+       }, {
+ ... (46 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L627-L632` → after: `L2183-L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2183-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2183-L2190) · [Before (L627-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L627-L632)

```diff
-     function Si(pp) {
-       const ip = pp.name;
-       if (Oi.has(ip)) return Rp.debug(`There were multiple attempts to register component ${ip}.`), !1;
-       Oi.set(ip, pp);
-       for (const cp of ci.values()) oi(cp, pp);
-       return !0
+     function xQ(QQ, WQ, XQ, wQ) {
+       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         PQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
+       qQ && qQ.push("Light" + QQ), TQ || (WQ.push("vLightData" + QQ, "vLightDiffuse" + QQ, "vLightSpecular" + QQ, "vLightDirection" + QQ, "vLightWidth" + QQ, "vLightHeight" + QQ, "vLightFalloff" + QQ, "vLightGround" + QQ, "vSliceData" + QQ, "vSliceRanges" + QQ, "lightMatrix" + QQ … [truncated]
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L635-L639` → after: `L2193-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2193-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2193-L2196) · [Before (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L635-L639)

```diff
-     function xi(pp, ip) {
-       const cp = pp.container.getProvider("heartbeat").getImmediate({
-         optional: !0
-       });
-       return cp && cp.triggerHeartbeat(), pp.container.getProvider(ip)
+     function YQ(QQ, WQ, XQ) {
+       const wQ = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
+       XQ && wQ.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
+       WQ.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L642-L644` → after: `L2199-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2199-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2199-L2207) · [Before (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L642-L644)

```diff
-     function Li(pp, ip) {
-       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vp;
-       xi(pp, ip).clearInstance(cp)
+     function NQ(QQ, WQ, XQ) {
+       let wQ, qQ, TQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
+         zQ = null;
+       if (QQ.uniformsNames) {
+         const sQ = QQ;
+         wQ = sQ.uniformsNames, qQ = sQ.uniformBuffersNames, WQ = sQ.samplers, XQ = sQ.defines, TQ = sQ.maxSimultaneousLights || 0, zQ = sQ.shaderLanguage ?? null
+       } else wQ = QQ, WQ || (WQ = []);
+       for (let sQ = 0; sQ < TQ && XQ["LIGHT" + sQ]; sQ++) xQ(sQ, wQ, WQ, XQ["PROJECTEDLIGHTTEXTURE" + sQ], qQ, !1, XQ["IESLIGHTTEXTURE" + sQ], XQ["CLUSTLIGHT" + sQ], XQ["RECTAREALIGHTEMISSIONTEXTURE" + sQ], 1 === zQ);
+       XQ.NUM_MORPH_INFLUENCERS && (wQ.push("morphTargetInfluences"), wQ.push("morphTargetCount")), XQ.BAKED_VERTEX_ANIMATION_TEXTURE && (wQ.push("bakedVertexAnimationSettings"), wQ.push("bakedVertexAnimationTextureSizeInverted"), wQ.push("bakedVertexAnimationTime"), WQ.push("bake … [truncated]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L647-L648` → after: `L2210-L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2210-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2210-L2216) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L647-L648)

```diff
-     function Yi() {
-       Oi.clear()
+     function ZQ(QQ) {
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       QQ.addUniform("vReflectionInfos", 2), QQ.addUniform("reflectionMatrix", 16), WQ && QQ.addUniform("vReflectionMicrosurfaceInfos", 3), XQ && (QQ.addUniform("vReflectionPosition", 3), QQ.addUniform("vReflectionSize", 3)), wQ && (QQ.addUniform("vReflectionFilteringInfo", 2), QQ … [truncated]
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L650-L666` → after: `L2218-L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2218-L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2218-L2228) · [Before (L650-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L650-L666)

```diff
-     const Di = {
-         "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
-         "bad-app-name": "Illegal App name: '{$appName}",
-         "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
-         "app-deleted": "Firebase App named '{$appName}' already deleted",
-         "no-options": "Need to provide options, when not being deployed to hosting via source.",
-         "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
-         "invalid-log-argument": "First argument to `onLog` must be null or a function.",
-         "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
-       },
-       Ai = new Ip.i("app", "Firebase", Di);
-     class Pi {
-       constructor(pp, ip, cp) {
- ... (1 more removed lines; see GitHub link above)
+   },
+   40596: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => TQ
+     });
+     var wQ = XQ(37370),
+       qQ = XQ(40551);
+     class TQ extends qQ.b {
+       constructor(QQ, WQ) {
+         let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         super(QQ, WQ, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new wQ.e, this._storeEffectOnSubMeshes = XQ
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L668-L669` → after: `L2230-L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2230-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2230-L2231) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L668-L669)

```diff
-       get automaticDataCollectionEnabled() {
-         return this.checkDestroyed(), this._automaticDataCollectionEnabled
+       getEffect() {
+         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L671-L672` → after: `L2233-L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2233-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2233-L2234) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L671-L672)

```diff
-       set automaticDataCollectionEnabled(pp) {
-         this.checkDestroyed(), this._automaticDataCollectionEnabled = pp
+       isReady(QQ, WQ) {
+         return !!QQ && (!this._storeEffectOnSubMeshes || (!QQ.ZD || 0 === QQ.ZD.length || this.isReadyForSubMesh(QQ, QQ.ZD[0], WQ)))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L674-L675` → after: `L2236-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2236-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2236-L2238) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L674-L675)

```diff
-       get name() {
-         return this.checkDestroyed(), this._name
+       _isReadyForSubMesh(QQ) {
+         const WQ = QQ.materialDefines;
+         return !(this.checkReadyOnEveryCall || !QQ.effect || !WQ || WQ._renderId !== this.sE().getRenderId())
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L677-L678` → after: `L2240-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L2240-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/270.js#L2240-L2241) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/270.js#L677-L678)

```diff
-       get options() {
-         return this.checkDestroyed(), this._options
+       bindOnlyWorldMatrix(QQ) {
+         this._activeEffect.setMatrix("world", QQ)
```
