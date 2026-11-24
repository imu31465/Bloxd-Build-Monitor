# Changed — Bundle Modifications Report (Part 020 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `20 / 69` (**287** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (117 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 39. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L378-L419` → after: `L622-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L622-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L622-L644) · [Before (L378-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L378-L419)

```diff
-     class DC extends tC {
-       constructor(CC, zC, ZC) {
-         super(CC), this.mesh = zC, this.rowStride = void 0, this.matrices = null, this.attributes = null;
-         const QC = this.inputs;
-         let wC = 0;
-         for (const {
-             size: nC
-           }
-           of ZC) wC += nC;
-         for (const {
-             name: nC,
-             offset: fC,
-             size: oC,
-             type: qC
-           }
-           of ZC) QC[nC] = new yC(this.attributesKey, 4 * fC, 4 * wC, oC, !0, qC);
- ... (26 more removed lines; see GitHub link above)
+ 
+     function Ii(pp, ip) {
+       pp.container.addOrOverwriteComponent(ip)
+     }
+ 
+     function Si(pp) {
+       const ip = pp.name;
+       if (Oi.has(ip)) return Rp.debug(`There were multiple attempts to register component ${ip}.`), !1;
+       Oi.set(ip, pp);
+       for (const cp of ci.values()) oi(cp, pp);
+       return !0
+     }
+ 
+     function xi(pp, ip) {
+       const cp = pp.container.getProvider("heartbeat").getImmediate({
+         optional: !0
+ ... (7 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L421` → after: `L646-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L646-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L646-L664) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L421)

```diff
-     class jC extends tC {
+ 
+     function Yi() {
+       Oi.clear()
+     }
+     const Di = {
+         "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
+         "bad-app-name": "Illegal App name: '{$appName}",
+         "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
+         "app-deleted": "Firebase App named '{$appName}' already deleted",
+         "no-options": "Need to provide options, when not being deployed to hosting via source.",
+         "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
+         "invalid-log-argument": "First argument to `onLog` must be null or a function.",
+         "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
+         "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
+         "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
+         "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
+ ... (3 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L423-L428` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L666) · [Before (L423-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L423-L428)

```diff
-         var QC, wC, bC, nC;
-         super(CC), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (QC = null === ZC | … [truncated]
-           this.inputs[CC] = new yC(this.attributesKey, 4 * this.offsets[zC], 4 * this.rowStride, ZC.strides[CC])
-         })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), CC.batchUploads.set(zC, this), zC.Tm.addOnce((() => {
-           this.release()
-         }))
+         this._isDeleted = !1, this._options = Object.assign({}, pp), this._config = Object.assign({}, ip), this._name = ip.name, this._automaticDataCollectionEnabled = ip.automaticDataCollectionEnabled, this._container = cp, this.container.vJ(new Op.d("app", (() => this), "PUBLIC … [truncated]
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L430-L431` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L668-L669) · [Before (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L430-L431)

```diff
-       get packedMatrices() {
-         return this.matrices
+       get automaticDataCollectionEnabled() {
+         return this.checkDestroyed(), this._automaticDataCollectionEnabled
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L433-L435` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L671-L672) · [Before (L433-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L433-L435)

```diff
-       packedRowMesh(CC) {
-         const zC = this.packedBatch;
-         return zC.renderSelf ? 0 === CC ? this.packedSource : zC.instances[CC - 1] : zC.instances[CC]
+       set automaticDataCollectionEnabled(pp) {
+         this.checkDestroyed(), this._automaticDataCollectionEnabled = pp
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L437-L438` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L674-L675) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L437-L438)

```diff
-       get packedAttributes() {
-         return this.attributes
+       get name() {
+         return this.checkDestroyed(), this._name
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L440-L451` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L677-L678) · [Before (L440-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L440-L451)

```diff
-       pack(CC, zC, ZC, QC) {
-         const wC = (zC.renderSelf ? 1 : 0) + zC.rows.length;
-         if (this.frame = QC, this.count = wC, this.packedSource = CC, this.packedBatch = zC, 0 === wC) return;
-         if (CC.getWorldMatrix(), 16 * wC > this.matrices.length) {
-           let CC = this.matrices.length / 16;
-           for (; CC < wC;) CC *= 2;
-           this.matrices = new Float32Array(16 * CC), this.attributes &&= new Float32Array(CC * this.rowStride), this.bind(this.matrices, this.attributes)
-         }
-         let bC = 0;
-         zC.renderSelf && this.packRow(bC++, CC, zC.row, ZC);
-         for (let nC = 0; nC < zC.rows.length; nC++) this.packRow(bC++, zC.instances[nC], zC.rows[nC], ZC);
-         this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * wC), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, wC * this.rowStride)
+       get options() {
+         return this.checkDestroyed(), this._options
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L453-L467` → after: `L680-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L680-L681) · [Before (L453-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L453-L467)

```diff
-       packRow(CC, zC, ZC, QC) {
-         const wC = this.matrices;
-         if (ZC < 0) wC.set(zC.getWorldMatrix().m, 16 * CC);
-         else
-           for (let qC = 0; qC < 16; qC++) wC[16 * CC + qC] = QC[16 * ZC + qC];
-         const bC = this.attributes;
-         if (!bC) return;
-         const nC = zC.ZE,
-           fC = this.layout;
-         for (let qC = 0; qC < fC.length; qC++) {
-           var oC;
-           const zC = null !== (oC = nC[fC[qC]]) && void 0 !== oC ? oC : 0,
-             ZC = CC * this.rowStride + this.offsets[qC];
-           zC.toArray ? zC.toArray(bC, ZC) : zC.copyToArray ? zC.copyToArray(bC, ZC) : bC[ZC] = zC
-         }
+       get config() {
+         return this.checkDestroyed(), this._config
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L469-L475` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L683-L684) · [Before (L469-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L469-L475)

```diff
-     }
-     class yC {
-       constructor(CC, zC, ZC, QC) {
-         let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
-           nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         this.key = CC, this.byteOffset = zC, this.byteStride = ZC, this.size = QC, this.instanced = wC, this.type = bC, this.normalized = nC
+       get container() {
+         return this._container
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L477-L478` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L686-L687) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L477-L478)

```diff
-       getBuffer() {
-         return this.key
+       get isDeleted() {
+         return this._isDeleted
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L480-L481` → after: `L689-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L689-L690) · [Before (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L480-L481)

```diff
-       getSize() {
-         return this.size
+       set isDeleted(pp) {
+         this._isDeleted = pp
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L483-L484` → after: `L692-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L692-L695) · [Before (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L483-L484)

```diff
-       getIsInstanced() {
-         return this.instanced
+       checkDestroyed() {
+         if (this.isDeleted) throw Ai.create("app-deleted", {
+           appName: this._name
+         })
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L487-L530` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L698) · [Before (L487-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L487-L530)

```diff
-     const LC = "CANVAS_ALPHA_ONE",
-       UC = `override ${LC}: bool = false;`,
-       BC = {
-         srcFactor: "zero",
-         dstFactor: "one",
-         operation: "add"
-       };
- 
-     function OC(CC, zC, ZC) {
-       var QC;
-       let wC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const bC = null !== (QC = zC._colorFormat) && void 0 !== QC ? QC : "bgra8unorm",
-         nC = wC ? 15 : 0;
-       return ZC ? {
-         ...CC,
-         targets: [{
- ... (28 more removed lines; see GitHub link above)
+     const Wi = "9.23.0";
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L533-L561` → after: `L701-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L701-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L701-L703) · [Before (L533-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L533-L561)

```diff
-       return CC._currentEncoder
-     }
- 
-     function zz(CC) {
-       return CC.createBindGroupLayout({
-         label: "lite-scene-equivalent",
-         entries: [{
-           binding: 0,
-           visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-           buffer: {
-             type: "uniform"
-           }
-         }, {
-           binding: 1,
-           visibility: GPUShaderStage.FRAGMENT,
-           buffer: {
- ... (13 more removed lines; see GitHub link above)
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         cp = pp;
+       if ("object" !== typeof ip) {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L563-L1045` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L705) · [Before (L563-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L563-L1045)

```diff
-           module: CC.createShaderModule({
-             label: "placeholder",
-             code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
-           }),
-           pipelines: new Map
-         }, bz.set(CC, ZC)
-       }
-       const QC = `${zC._colorFormat}|${zC._depthStencilFormat}|${zC._sampleCount}`;
-       let wC = ZC.pipelines.get(QC);
-       if (!wC) {
-         var bC;
-         const {
-           module: nC
-         } = ZC;
-         wC = CC.createRenderPipeline({
-           label: `placeholder ${QC}`,
- ... (467 more removed lines; see GitHub link above)
+           name: ip
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1048-L1122` → after: `L708-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L708-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L708-L717) · [Before (L1048-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L1048-L1122)

```diff
-       return !0
-     }
-     const RZ = new Float32Array(1);
-     new Uint32Array(RZ.buffer);
-     var AZ = ZC(38584);
- 
-     function xZ(CC) {
-       const [zC, ZC, QC] = AZ.q;
-       return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${CC.group}) @binding(${CC.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeT … [truncated]
-     }
- 
-     function JZ(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const [wC, bC, nC] = dz, [fC, oC, qC] = Yz, FC = Math.log2(Kz), WC = QC ? "var<private> bloxdSpCrossed: bool;\n" : "", NC = QC ? "\t\t\tbloxdSpCrossed = true;\n" : "";
- ... (59 more removed lines; see GitHub link above)
+       const op = Object.assign({
+           name: Vp,
+           automaticDataCollectionEnabled: !1
+         }, ip),
+         Sp = op.name;
+       if ("string" !== typeof Sp || !Sp) throw Ai.create("bad-app-name", {
+         appName: String(Sp)
+       });
+       if (cp || (cp = (0, Ip.B)()), !cp) throw Ai.create("no-options");
+       const xp = ci.get(Sp);
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1124-L1136` → after: `L719-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L719-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L719-L722) · [Before (L1124-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L1124-L1136)

```diff
-         const zC = cZ,
-           wC = "trace" === ZC || "lit" === ZC;
-         let bC = "";
-         CC.sunShadow && (bC = wC ? `${JZ(zC,!0,"lit"===ZC)}${QC=zC,`@group(${QC.group}) @binding(${QC.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${QC.group}) @binding(${QC.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn blo … [truncated]
-           const QC = `@group(${CC}) @binding(${zC}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
-           return ZC ? `${QC}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${eZ}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = text … [truncated]
-         }(zC.group, ez.x, "maskEdge" === ZC));
-         const nC = {
-           shadowDirection: `${ez.n}.shadowDirection`,
-           renderOffset: `${ez.n}.renderOffset`,
-           eyePosition: `${ez.n}.eyePosition`
-         };
-         return `${xZ(zC)}${bC}${function(CC){const[zC,ZC,QC]=AZ.q;return`@group(${CC.group}) @binding(${CC.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${CC.group}) @binding(${CC.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset … [truncated]
+         if ((0, Ip.y)(cp, xp.options) && (0, Ip.y)(op, xp.config)) return xp;
+         throw Ai.create("duplicate-app", {
+           appName: Sp
+         })
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1138-L1151` → after: `L724-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L724-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L724-L727) · [Before (L1138-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L1138-L1151)

```diff
-       var QC;
-       return `${CC.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${CC.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
-     }
- 
-     function rZ(CC, zC, ZC, QC) {
-       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
-       if (!zC) return "";
-       const bC = (nC = "fragmentInputs.vPositionW", fC = CC.sunShadow ? {
-         normal: ZC,
-         flags: QC
-       } : null, `\n\tbloxdSpShadowPosition = ${nC};\n${fC?`\tbloxdSpShadowNormal = normalize(${fC.normal});\n\tbloxdSpShadowEmissive = (${fC.flags} & ${oz.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${fC.flags} & ${oz.i}u) != 0u;\n`:""}`);
-       var nC, fC;
-       return CC.sunShadow && ("mask" === wC || "maskEdge" === wC) ? `${bC}${oC="fragmentInputs.position",qC="maskEdge"===wC,`\n\tbloxdSpShadowPixel = vec2i(${oC}.xy);\n${qC?`\tbloxdSpShadowZ = ${oC}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${oC}.z), dpdy(${oC}.z));\n`:""}`}` : bC;
-       var oC, qC
+       const Lp = new Op.c(Sp);
+       for (const Op of Oi.values()) Lp.vJ(Op);
+       const Yp = new Pi(cp, op, Lp);
+       return ci.set(Sp, Yp), Yp
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1157-L1158` → after: `L730-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L730-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L730-L737) · [Before (L1157-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L1157-L1158)

```diff
-     function tZ(CC) {
-       return `\tvertexOutputs.vPackTexture = ${TZ}[min(u32(${CC}), arrayLength(&${TZ}) - 1u)];\n`
+     function Ui() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vp;
+       const ip = ci.get(pp);
+       if (!ip && pp === Vp && (0, Ip.B)()) return yi();
+       if (!ip) throw Ai.create("no-app", {
+         appName: pp
+       });
+       return ip
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1161-L1162` → after: `L740-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L740-L741) · [Before (L1161-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L1161-L1162)

```diff
-     function DZ(CC) {
-       return void 0 !== CC.uv
+     function wi() {
+       return Array.from(ci.values())
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1164-L1193` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L743-L745) · [Before (L1164-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L1164-L1193)

```diff
- 
-     function jZ(CC) {
-       if (!CC) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
-       if (DZ(CC)) return function(CC) {
-         const {
-           texture: zC,
-           cells: ZC,
-           layers: QC
-         } = CC, wC = `textureDimensions(${zC}, bloxdSpLevel)`, bC = ZC ? `max(vec2u(vec2f(${wC}) / ${ZC}), vec2u(1u))` : wC, nC = ZC ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${bC};\n\tlet bloxdSpIndex = u32( … [truncated]
-         let fC;
-         if (ZC)
-           if (1 === QC.length) fC = `\treturn bloxdSpOwnTexel(${QC[0]}, bloxdSpUv, bloxdSpLevel);\n`;
-           else {
-             const CC = QC.length - 1;
-             fC = `\tvar bloxdSpColour = bloxdSpOwnTexel(${QC[CC]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
-             for (let zC = CC - 1; zC >= 0; zC--) fC += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${QC[zC]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a)) … [truncated]
- ... (14 more removed lines; see GitHub link above)
+     async function vi(pp) {
+       const ip = pp.name;
+       ci.has(ip) && (ci.delete(ip), await Promise.all(pp.container.getProviders().map((pp => pp.delete()))), pp.isDeleted = !0)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1268-L1477` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L750-L756) · [Before (L1268-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L1268-L1477)

```diff
-       return !(null === (zC = (0, hz.g)(CC)) || void 0 === zC || !zC.sceneDepth)
-     }
- 
-     function bQ(CC) {
-       const zC = (0, hz.g)(CC);
-       return !!zC && yZ(zC.hooks, zC.strict, zC.program)
-     }
- 
-     function nQ(CC, zC, ZC, QC) {
-       return EZ(CC, zC, ZC, QC, "terrain")
-     }
- 
-     function fQ(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
-       const bC = function(CC) {
- ... (194 more removed lines; see GitHub link above)
+       let Ip = null !== (op = ii[pp]) && void 0 !== op ? op : pp;
+       cp && (Ip += `-${cp}`);
+       const Sp = Ip.match(/\s|\//),
+         xp = ip.match(/\s|\//);
+       if (Sp || xp) {
+         const pp = [`Unable to register library "${Ip}" with version "${ip}":`];
+         return Sp && pp.push(`library name "${Ip}" contains illegal characters (whitespace or "/")`), Sp && xp && pp.push("and"), xp && pp.push(`version name "${ip}" contains illegal characters (whitespace or "/")`), void Rp.warn(pp.join(" "))
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1524-L1584` → after: `L765-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L765-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L765-L766) · [Before (L1524-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L1524-L1584)

```diff
-       return `#if defined(${CC}) && ${CC}DIRECTUV == 0\nvarying v${zC}UV: vec2f;\n#endif`
-     }
- 
-     function cQ(CC, zC, ZC) {
-       return `#if defined(${CC}) && ${CC}DIRECTUV == 0\nif (uniforms.v${zC}Infos.x==0.)\n{vertexOutputs.v${zC}UV= (uniforms.${ZC}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${zC}UV= (uniforms.${ZC}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
-     }
- 
-     function uQ(CC, zC, ZC) {
-       return `#ifdef ${CC}\n#if ${CC}DIRECTUV == 1\n#define v${zC}UV vMainUV1\n#elif ${CC}DIRECTUV == 2\n#define v${zC}UV vMainUV2\n#else\nvarying v${zC}UV: vec2f;\n#endif\nvar ${ZC}SamplerSampler: sampler;\nvar ${ZC}Sampler: texture_2d<f32>;\n#endif`
-     }
-     const rQ = {
-         lights: 0,
-         lightStride: 12,
-         fogInfos: 96,
-         fogColour: 100,
-         outputHeight: 103,
- ... (45 more removed lines; see GitHub link above)
+       if (null !== pp && "function" !== typeof pp) throw Ai.create("invalid-log-argument");
+       (0, op.j)(pp, ip)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1586-L7327` → after: `L768-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L768-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L768-L811) · [Before (L1586-L7327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L1586-L7327)

```diff
- 
-     function Cw(CC, zC) {
-       let ZC = CC;
-       const QC = new Map;
-       for (const [bC, nC] of zC) {
-         var wC;
-         QC.set(bC, `${null!==(wC=QC.get(bC))&&void 0!==wC?wC:""}${nC}\n`)
-       }
-       for (const [bC, nC] of QC) {
-         if (!bC.startsWith("!")) {
-           const CC = `#define ${bC}`;
-           if (!ZC.includes(CC)) {
-             VQ(bC);
-             continue
-           }
-           ZC = ZC.replace(CC, (() => `\n${nC}\n${CC}`));
- ... (5726 more removed lines; see GitHub link above)
+ 
+     function di(pp) {
+       (0, op.g)(pp)
+     }
+     const ei = "firebase-heartbeat-store";
+     let ui = null;
+ 
+     function ji() {
+       return ui || (ui = function(pp, ip) {
+         let {
+           blocked: cp,
+           upgrade: Op,
+           blocking: op,
+           terminated: Ip
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const Sp = indexedDB.open(pp, ip),
+ ... (28 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7336` → after: `L815-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L815-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L815-L818) · [Before (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7336)

```diff
-     var Mo = ZC(37339);
+ 
+     function mi(pp) {
+       return `${pp.name}!${pp.options.appId}`
+     }
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7339-L7437` → after: `L821-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L821-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L821-L851) · [Before (L7339-L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7339-L7437)

```diff
-         this.device = CC, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new SZ, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.fN = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = CC.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = CC.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
-       }
-       update(CC, zC, ZC) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
-           frame: QC
-         } = this;
-         QC.RM(CC, zC), ZC.forEachSunShadowCaster((CC => {
- ... (83 more removed lines; see GitHub link above)
+         this.container = pp, this._heartbeatsCache = null;
+         const ip = this.container.getProvider("app").getImmediate();
+         this.XU = new Mi(ip), this._heartbeatsCachePromise = this.XU.read().then((pp => (this._heartbeatsCache = pp, pp)))
+       }
+       async triggerHeartbeat() {
+         const pp = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
+           ip = qi();
+         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== ip && !this._heartbeatsCache.heartbeats.some((pp => pp.date === ip))) return this._heartbeatsCache.heartbeats.push({
+           date: ip,
+           agent: pp
+         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((pp => {
+           const ip = new Date(pp.date).valueOf();
+           return Date.now() - ip <= 2592e6
+         })), this.XU.overwrite(this._heartbeatsCache)
+       }
+       async getHeartbeatsHeader() {
+ ... (15 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7439-L7451` → after: `L853-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L853-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L853-L860) · [Before (L7439-L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7439-L7451)

```diff
-                 for (let CC = pC[2]; CC <= PC[2]; CC++)
-                   for (let zC = pC[1]; zC <= PC[1]; zC++)
-                     for (let ZC = pC[0]; ZC <= PC[0]; ZC++)
-                       if (GZ(SC, NC[0] + (ZC + .5) * FC, NC[1] + (zC + .5) * FC, NC[2] + (CC + .5) * FC, FC / 2)) {
-                         const QC = ZC + WC[0] * (zC + WC[1] * CC);
-                         gC[QC >>> 5] |= 1 << (31 & QC)
-                       }
-               } return {
-               words: gC,
-               lo: NC,
-               hi: MC,
-               cell: FC,
-               dims: WC
+               } else if (cp.push({
+                   agent: op.agent,
+                   dates: [op.date]
+                 }), Ci(cp) > ip) {
+                 cp.pop();
+                 break
+               }
+               Op = Op.slice(1)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7453-L7464` → after: `L862-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L862-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L862-L871) · [Before (L7453-L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7453-L7464)

```diff
-           }((0, Mo.g)(bC, CC.vertexCount), zC ? CC.indexData : null, ZC, QC, wC) : null;
-         if (!nC) return null;
-         const {
-           words: fC,
-           ...oC
-         } = nC;
-         if (this.gridTop + fC.length > WZ) return void(this.gridsFull = !0);
-         const qC = this.gridTop;
-         return this.gridTop += fC.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * qC, fC), {
-           ...oC,
-           at: qC
-         }
+             return {
+               heartbeatsToSend: cp,
+               unsentEntries: Op
+             }
+           }(this._heartbeatsCache.heartbeats),
+           Op = (0, Ip.s)(JSON.stringify({
+             version: 2,
+             heartbeats: ip
+           }));
+         return this._heartbeatsCache.lastSentHeartbeatDate = pp, cp.length > 0 ? (this._heartbeatsCache.heartbeats = cp, await this.XU.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.XU.overwrite(this._heartbeatsCache)), Op
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7469-L7483` → after: `L875-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L875-L876) · [Before (L7469-L7483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7469-L7483)

```diff
-     function po(CC, zC) {
-       return CC[0] * zC[0] + CC[1] * zC[1] + CC[2] * zC[2] < So
-     }
-     async function Po(CC) {
-       const {
-         pixels: zC,
-         width: ZC,
-         height: QC
-       } = await uw(CC), wC = new Uint8Array(ZC * QC);
-       for (let bC = 0; bC < wC.length; bC++) wC[bC] = zC[4 * bC + 3];
-       return {
-         width: ZC,
-         height: QC,
-         alpha: wC
-       }
+     function qi() {
+       return (new Date).toISOString().substring(0, 10)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7486-L7531` → after: `L879-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L879-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L879-L880) · [Before (L7486-L7531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7486-L7531)

```diff
-       constructor(CC, zC) {
-         this.device = CC, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(AZ.o), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = CC.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * tz,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = CC.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [ZC, QC, wC] = AZ.q;
-         this.volume = CC.createTexture({
- ... (30 more removed lines; see GitHub link above)
+       constructor(pp) {
+         this.app = pp, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7533-L7538` → after: `L882-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L882-L883) · [Before (L7533-L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7533-L7538)

```diff
-       describePendingWork() {
-         var CC, zC;
-         const ZC = [];
-         !this.volumePassStarted || this.volumePass || this.volumePassFailed || ZC.push("Lite sun shadow volume pipeline compiling");
-         const QC = null !== (CC = null === (zC = this.casters) || void 0 === zC ? void 0 : zC.planesLoading) && void 0 !== CC ? CC : 0;
-         return QC > 0 && ZC.push(`${QC} Lite sun shadow plane casters loading their textures`), ZC
+       async runIndexedDBEnvironmentCheck() {
+         return !!(0, Ip.Q)() && (0, Ip.gb)().then((() => !0)).catch((() => !1))
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7540-L7572` → after: `L885-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L885-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L885-L901) · [Before (L7540-L7572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7540-L7572)

```diff
-       entries() {
-         var CC, zC, ZC, QC;
-         const wC = ez.w;
-         return [{
-           binding: wC.uniform,
-           resource: {
-             buffer: this.uniform
-           }
-         }, {
-           binding: wC.lN,
-           resource: {
-             buffer: this.voxelBuffer
-           }
-         }, {
-           binding: wC.special,
-           resource: {
- ... (17 more removed lines; see GitHub link above)
+       async read() {
+         if (await this._canUseIndexedDBPromise) {
+           return await async function(pp) {
+             try {
+               const ip = await ji();
+               return await ip.transaction(ei).objectStore(ei).get(mi(pp))
+             } catch (ip) {
+               if (ip instanceof Ip.l) Rp.warn(ip.message);
+               else {
+                 const pp = Ai.create("idb-get", {
+                   originalErrorMessage: null === ip || void 0 === ip ? void 0 : ip.message
+                 });
+                 Rp.warn(pp.message)
+               }
+             }
+           }(this.app) || {
+ ... (1 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7574` → after: `L903-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L903-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L903-L906) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7574)

```diff
-         }]
+         }
+         return {
+           heartbeats: []
+         }
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7576` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L908) · [Before (L7576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7576)

```diff
-       prepare(CC, zC, ZC) {
+       async overwrite(pp) {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7578-L7633` → after: `L910-L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L910-L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L910-L915) · [Before (L7578-L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7578-L7633)

```diff
-         this.entitiesThisFrame = !1;
-         const wC = null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.sunShadowReach()) && void 0 !== QC ? QC : {
-           sunShadow: !1,
-           airShadow: !1
-         };
-         if (!ZC || !wC.sunShadow && !wC.airShadow) return void(this.volumeHolds = null);
-         if (CC.fN.WCC !== Kz) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${CC.fN.WCC}; everything is lit.`)));
-         const bC = this.start(CC);
-         this.casters.update(CC.qM, CC.qM.MM.length);
-         const nC = CC.YN;
-         for (let NC = 0; NC < 3; NC++) this.eye[NC] = zC[NC] + nC[NC];
-         const fC = (0, AZ.x)(this.eye);
-         this.staleNear = fC;
-         const oC = CC.fN.PS;
-         bC.update(this.eye, ((CC, zC, ZC) => oC.GS(CC, zC, ZC)), 1);
-         const qC = (0, AZ.t)(ZC.B3()),
- ... (40 more removed lines; see GitHub link above)
+         if (await this._canUseIndexedDBPromise) {
+           const cp = await this.read();
+           return ki(this.app, {
+             lastSentHeartbeatDate: null !== (ip = pp.lastSentHeartbeatDate) && void 0 !== ip ? ip : cp.lastSentHeartbeatDate,
+             heartbeats: pp.heartbeats
+           })
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7640-L7654` → after: `L918-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L918-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L918-L925) · [Before (L7640-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7640-L7654)

```diff
-       computeVolume(CC, zC, ZC) {
-         const QC = this.buildVolumePass();
-         if (!QC) return void(this.volumeHolds = null);
-         const wC = (0, AZ.v)(this.volumeHolds, CC);
-         this.volumeHolds = CC;
-         const bC = 1 === wC.length && wC[0].size.every(((CC, zC) => CC === AZ.q[zC])),
-           nC = this.sweptChunk,
-           fC = this.sweptLight,
-           oC = zC[0] !== fC[0] || zC[1] !== fC[1] || zC[2] !== fC[2],
-           qC = ZC[0] !== nC[0] || ZC[1] !== nC[1] || ZC[2] !== nC[2],
-           FC = oC && po(zC, fC);
-         if ((bC || this.written || qC || FC) && (this.fastLeft = AZ.k), bC || this.written || oC || qC) {
-           this.written = !1;
-           for (let CC = 0; CC < 3; CC++) nC[CC] = ZC[CC], fC[CC] = zC[CC];
-           this.sweepLeft = bC ? 0 : AZ.k
+       async add(pp) {
+         var ip;
+         if (await this._canUseIndexedDBPromise) {
+           const cp = await this.read();
+           return ki(this.app, {
+             lastSentHeartbeatDate: null !== (ip = pp.lastSentHeartbeatDate) && void 0 !== ip ? ip : cp.lastSentHeartbeatDate,
+             heartbeats: [...cp.heartbeats, ...pp.heartbeats]
+           })
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7783-L7784` → after: `L930-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L930-L934) · [Before (L7783-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7783-L7784)

```diff
-     function vo(CC, zC, ZC, QC) {
-       CC.drawOffset(zC, QC + xo), zC[QC + Jo] = CC.drawTime(), ZC[QC + Io] = CC.ring.drawStart(), ZC[QC + io] = CC.ring.drawCount()
+     function Ci(pp) {
+       return (0, Ip.s)(JSON.stringify({
+         version: 2,
+         heartbeats: pp
+       })).length
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7786-L7787` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L936-L944) · [Before (L7786-L7787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7786-L7787)

```diff
-     const eo = `\n${SQ}\n\nconst MAX_STOPS = ${Ao.d}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Ao.d/4}>,\n\tcolor1: array<vec4f, ${Ao.d}>,\n\t … [truncated]
-     var ho = ZC(41418);
+     var Ei;
+     Ei = "", Si(new Op.d("platform-logger", (pp => new jp(pp)), "PRIVATE")), Si(new Op.d("heartbeat", (pp => new Ri(pp)), "PRIVATE")), ti(kp, mp, Ei), ti(kp, mp, "esm2017"), ti("fire-js", "")
+   },
+   40692: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => xp,
+       d: () => op
+     });
+     var Op = cp(40700);
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7789-L7804` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L946-L947) · [Before (L7789-L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7789-L7804)

```diff
-       constructor(CC, zC, ZC, QC) {
-         this.device = CC, this.system = zC, this.frameIndex = ZC, this.bindings = QC, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, ho.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, CC * Ao.e * 4, this.system.ring.records, CC * Ao.e, (zC - CC) * Ao.e)
-         };
-         const {
-           name: wC
-         } = zC;
-         this.ring = CC.createBuffer({
-           label: `particles-${wC}`,
-           size: zC.ring.records.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.uniforms = CC.createBuffer({
-           label: `particles-uniforms-${wC}`,
-           size: 4 * Ao.r,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       constructor(pp, ip, cp) {
+         this.name = pp, this.instanceFactory = ip, this.type = cp, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7806-L7808` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L949-L950) · [Before (L7806-L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7806-L7808)

```diff
-       writeUniforms(CC) {
-         const zC = (0, ho.c)(this.system, this.uniformBits, CC);
-         zC && (this.uniformBits = zC, this.device.queue.writeBuffer(this.uniforms, 0, zC))
+       setInstantiationMode(pp) {
+         return this.instantiationMode = pp, this
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7810-L7851` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L952-L953) · [Before (L7810-L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7810-L7851)

```diff
-       bind() {
-         const {
-           system: CC
-         } = this, zC = this.texture;
-         (0, ho.j)(CC, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
-           label: `particles-ramp-${CC.name}`,
-           size: [Ao.k, 1],
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
-           texture: this.ramp
-         }, this.rampTexels.texels, {
-           bytesPerRow: 4 * Ao.k
-         }, [Ao.k, 1]));
-         const ZC = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
-         this.bindGroup && this.boundView === zC.view && this.boundSampler === zC.sampler && this.boundRamp === ZC || (this.boundView = zC.view, this.boundSampler = zC.sampler, this.boundRamp = ZC, this.bindGroup = this.device.createBindGroup({
- ... (26 more removed lines; see GitHub link above)
+       setMultipleInstances(pp) {
+         return this.multipleInstances = pp, this
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7853-L7855` → after: `L955-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L955-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L955-L959) · [Before (L7853-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7853-L7855)

```diff
-       destroy() {
-         var CC;
-         this.ring.destroy(), this.uniforms.destroy(), null === (CC = this.ramp) || void 0 === CC || CC.destroy()
+       setServiceProps(pp) {
+         return this.serviceProps = pp, this
+       }
+       setInstanceCreatedCallback(pp) {
+         return this.onInstanceCreated = pp, this
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7860-L7945` → after: `L965-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L965-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L965-L976) · [Before (L7860-L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7860-L7945)

```diff
-         this.device = CC, this.resources = zC, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-         const ZC = CC.createBindGroupLayout({
-           label: "particles-system",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
-             }
-           }, {
-             binding: 1,
-             visibility: GPUShaderStage.VERTEX,
-             buffer: {
-               type: "read-only-storage"
-             }
-           }, {
- ... (70 more removed lines; see GitHub link above)
+         this.name = pp, this.container = ip, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
+       }
+       get(pp) {
+         const ip = this.normalizeInstanceIdentifier(pp);
+         if (!this.instancesDeferred.has(ip)) {
+           const pp = new Op.e;
+           if (this.instancesDeferred.set(ip, pp), this.isInitialized(ip) || this.shouldAutoInitialize()) try {
+             const cp = this.getOrInitializeService({
+               instanceIdentifier: ip
+             });
+             cp && pp.resolve(cp)
+           } catch (cp) {}
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7948-L7949` → after: `L980-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L980-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L980-L995) · [Before (L7948-L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7948-L7949)

```diff
-       get CwC() {
-         return this.systems.size
+       getImmediate(pp) {
+         var ip;
+         const cp = this.normalizeInstanceIdentifier(null === pp || void 0 === pp ? void 0 : pp.identifier),
+           Op = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.optional) && void 0 !== ip && ip;
+         if (!this.isInitialized(cp) && !this.shouldAutoInitialize()) {
+           if (Op) return null;
+           throw Error(`Service ${this.name} is not available`)
+         }
+         try {
+           return this.getOrInitializeService({
+             instanceIdentifier: cp
+           })
+         } catch (op) {
+           if (Op) return null;
+           throw op
+         }
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7951-L7952` → after: `L997-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L997-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L997-L998) · [Before (L7951-L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7951-L7952)

```diff
-       reset() {
-         for (const CC of this.systems.keys()) CC.reset()
+       getComponent() {
+         return this.component
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7954-L7955` → after: `L1000-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1000-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1000-L1020) · [Before (L7954-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7954-L7955)

```diff
-       describePendingWork() {
-         return (0, Ro.g)(this.systems.keys(), "Lite")
+       setComponent(pp) {
+         if (pp.name !== this.name) throw Error(`Mismatching Component ${pp.name} for Provider ${this.name}.`);
+         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
+         if (this.component = pp, this.shouldAutoInitialize()) {
+           if (function(pp) {
+               return "EAGER" === pp.instantiationMode
+             }(pp)) try {
+             this.getOrInitializeService({
+               instanceIdentifier: Ip
+             })
+           } catch (ip) {}
+           for (const [pp, cp] of this.instancesDeferred.entries()) {
+             const Op = this.normalizeInstanceIdentifier(pp);
+             try {
+               const pp = this.getOrInitializeService({
+                 instanceIdentifier: Op
+ ... (5 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7957-L7959` → after: `L1022-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1022-L1024) · [Before (L7957-L7959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7957-L7959)

```diff
-       DH(CC, zC) {
-         const ZC = new Ro.d(CC, zC, this);
-         return this.systems.set(ZC, new Ko(this.device, ZC, this.allocateFrameIndex(), this.bindings)), ZC
+       clearInstance() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
+         this.instancesDeferred.delete(pp), this.instancesOptions.delete(pp), this.instances.delete(pp)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7961-L7962` → after: `L1026-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1026-L1028) · [Before (L7961-L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7961-L7962)

```diff
-       y_(CC, zC) {
-         for (const ZC of this.systems.keys()) ZC.y_(CC, zC)
+       async delete() {
+         const pp = Array.from(this.instances.values());
+         await Promise.all([...pp.filter((pp => "INTERNAL" in pp)).map((pp => pp.INTERNAL.delete())), ...pp.filter((pp => "_delete" in pp)).map((pp => pp._delete()))])
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7964-L7975` → after: `L1030-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1030-L1031) · [Before (L7964-L7975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7964-L7975)

```diff
-       canDraw(CC) {
-         const zC = this.systems.get(CC),
-           ZC = CC.texture ? this.resources.boundTexture(CC.texture) : null;
-         if (!zC || !ZC || !this.targetPipelines) return !1;
-         if (zC.texture = ZC, zC.pipelines.length = 0, !tw(CC.blendMode)) return this.warnOnce(`blend:${CC.blendMode}`, `particle blend mode ${CC.blendMode} is not drawn (${CC.name})`), !0;
-         const QC = (0, Kw.i)(CC.blendMode);
-         for (const wC of QC) {
-           const CC = this.pipelineFor(wC);
-           if (!1 === CC) return zC.pipelines.length = 0, !0;
-           CC && zC.pipelines.push(CC)
-         }
-         return zC.pipelines.length === QC.length
+       isComponentSet() {
+         return null != this.component
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7977-L7978` → after: `L1033-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1033-L1035) · [Before (L7977-L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7977-L7978)

```diff
-       disposeStopped(CC) {
-         CC.dispose()
+       isInitialized() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
+         return this.instances.has(pp)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7980-L7982` → after: `L1037-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1037-L1039) · [Before (L7980-L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7980-L7982)

```diff
-       remove(CC) {
-         const zC = this.systems.get(CC);
-         zC && (this.systems.delete(CC), zC.destroy(), this.freeFrameIndices.push(zC.frameIndex))
+       getOptions() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
+         return this.instancesOptions.get(pp) || {}
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7984-L7994` → after: `L1041-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1041-L1053) · [Before (L7984-L7994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7984-L7994)

```diff
-       prepare(CC) {
-         const zC = CC.animationRatio || 1;
-         fz(this.renderable._worldCenter, CC, Qz), this.preparedTarget = this.target, this.draws.length = 0;
-         let ZC = 0;
-         for (const QC of this.systems.values()) {
-           const CC = QC.system;
-           if (!CC.animateIfActive(zC)) continue;
-           if (CC.ring.takeUploads(QC.upload), !CC.hasLiveParticles() || 0 === QC.pipelines.length) continue;
-           QC.writeUniforms(this.warnOnce), QC.bind();
-           const wC = 64 * QC.frameIndex;
-           QC.count = CC.ring.drawCount(), vo(CC, this.frameData, this.frameBits, wC), ZC = Math.max(ZC, wC + 64), this.draws.push(QC)
+       initialize() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         const {
+           options: ip = {}
+         } = pp, cp = this.normalizeInstanceIdentifier(pp.instanceIdentifier);
+         if (this.isInitialized(cp)) throw Error(`${this.name}(${cp}) has already been initialized`);
+         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
+         const Op = this.getOrInitializeService({
+           instanceIdentifier: cp,
+           options: ip
+         });
+         for (const [op, Ip] of this.instancesDeferred.entries()) {
+           cp === this.normalizeInstanceIdentifier(op) && Ip.resolve(Op)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7996` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1055) · [Before (L7996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7996)

```diff
-         ZC > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, ZC)
+         return Op
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L7998-L8003` → after: `L1057-L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1057-L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1057-L1064) · [Before (L7998-L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L7998-L8003)

```diff
-       draw(CC) {
-         let zC = 0,
-           ZC = null;
-         for (const QC of this.draws) {
-           CC.setBindGroup(1, QC.bindGroup), CC.setBindGroup(2, this.frameBindGroup, [256 * QC.frameIndex]);
-           for (const wC of QC.pipelines) wC !== ZC && (CC.setPipeline(wC), ZC = wC), CC.draw(4, QC.count), zC++
+       pN(pp, ip) {
+         var cp;
+         const Op = this.normalizeInstanceIdentifier(ip),
+           op = null !== (cp = this.onInitCallbacks.get(Op)) && void 0 !== cp ? cp : new Set;
+         op.add(pp), this.onInitCallbacks.set(Op, op);
+         const Ip = this.instances.get(Op);
+         return Ip && pp(Ip, Op), () => {
+           op.delete(pp)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8007-L8011` → after: `L1067-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1067-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1067-L1072) · [Before (L8007-L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8007-L8011)

```diff
-       bindTarget(CC) {
-         this.target = CC;
-         const zC = `${CC._colorFormat}|${CC._depthStencilFormat}|${CC._depthCompare}|${CC._sampleCount}`;
-         let ZC = this.pipelines.get(zC);
-         ZC || (ZC = new Map, this.pipelines.set(zC, ZC)), this.targetPipelines = ZC
+       invokeOnInitCallbacks(pp, ip) {
+         const cp = this.onInitCallbacks.get(ip);
+         if (cp)
+           for (const op of cp) try {
+             op(pp, ip)
+           } catch (Op) {}
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8013` → after: `L1074-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1074-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1074-L1084) · [Before (L8013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8013)

```diff
-       pipelineFor(CC) {
+       getOrInitializeService(pp) {
+         let {
+           instanceIdentifier: ip,
+           options: cp = {}
+         } = pp, Op = this.instances.get(ip);
+         if (!Op && this.component && (Op = this.component.instanceFactory(this.container, {
+             instanceIdentifier: (op = ip, op === Ip ? void 0 : op),
+             options: cp
+           }), this.instances.set(ip, Op), this.instancesOptions.set(ip, cp), this.invokeOnInitCallbacks(Op, ip), this.component.onInstanceCreated)) try {
+           this.component.onInstanceCreated(this.container, ip, Op)
+         } catch (Sp) {}
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8015-L8062` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1086) · [Before (L8015-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8015-L8062)

```diff
-         const ZC = this.targetPipelines,
-           QC = ZC.get(CC);
-         if (void 0 !== QC) return QC;
-         ZC.set(CC, null);
-         const wC = this.target,
-           bC = CC === Kw.e,
-           nC = null !== (zC = wC._depthCompare) && void 0 !== zC ? zC : Zz;
-         return this.device.createRenderPipelineAsync({
-           label: `particles-${CC}`,
-           layout: this.pipelineLayout,
-           vertex: {
-             module: this.module,
-             entryPoint: "mainVertex"
-           },
-           fragment: OC({
-             module: this.module,
- ... (32 more removed lines; see GitHub link above)
+         return Op || null
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8064-L8069` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1088-L1090) · [Before (L8064-L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8064-L8069)

```diff
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       normalizeInstanceIdentifier() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ip;
+         return this.component ? this.component.multipleInstances ? pp : Ip : pp
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8071-L8082` → after: `L1092-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1092-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1092-L1093) · [Before (L8071-L8082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8071-L8082)

```diff
-       createFrameBindGroup() {
-         return this.device.createBindGroup({
-           label: "particles-frames",
-           layout: this.frameLayout,
-           entries: [{
-             binding: 0,
-             resource: {
-               buffer: this.frameBuffer,
-               size: 32
-             }
-           }]
-         })
+       shouldAutoInitialize() {
+         return !!this.component && "EXPLICIT" !== this.component.instantiationMode
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8086-L8138` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1097-L1098) · [Before (L8086-L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8086-L8138)

```diff
-       constructor(CC, zC, ZC, QC, wC) {
-         this.lite = CC, this.canvas = zC, this.info = ZC, this.resources = wC, this.BZC = !1, this.needPOTTextures = !1, this.R6 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
-           }
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = zC.width, this.renderHeight = zC.height, this.caps = {
-           maxTextureSize: QC.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: QC.maxTextureArrayLayers
-         }
-       }
-       getCaps() {
-         return this.caps
-       }
-       getRenderWidth() {
-         return this.renderWidth
-       }
- ... (37 more removed lines; see GitHub link above)
+       constructor(pp) {
+         this.name = pp, this.providers = new Map
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8140-L8141` → after: `L1100-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1100-L1103) · [Before (L8140-L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8140-L8141)

```diff
-       getDeltaTime() {
-         return this.deltaTime
+       vJ(pp) {
+         const ip = this.getProvider(pp.name);
+         if (ip.isComponentSet()) throw new Error(`Component ${pp.name} has already been registered with ${this.name}`);
+         ip.setComponent(pp)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8143-L8145` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1105-L1106) · [Before (L8143-L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8143-L8145)

```diff
-       createCanvas(CC, zC) {
-         const ZC = document.createElement("canvas");
-         return ZC.width = CC, ZC.height = zC, ZC
+       addOrOverwriteComponent(pp) {
+         this.getProvider(pp.name).isComponentSet() && this.providers.delete(pp.name), this.vJ(pp)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8147-L8149` → after: `L1108-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1108-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1108-L1111) · [Before (L8147-L8149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8147-L8149)

```diff
-       T6(CC, zC) {
-         var ZC;
-         return null !== (ZC = this.resources.T6.get(CC)) && void 0 !== ZC ? ZC : new DC(this.resources, CC, zC)
+       getProvider(pp) {
+         if (this.providers.has(pp)) return this.providers.get(pp);
+         const ip = new Sp(pp, this);
+         return this.providers.set(pp, ip), ip
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8151-L8152` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1113-L1114) · [Before (L8151-L8152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8151-L8152)

```diff
-       atlasArray(CC, zC, ZC) {
-         return this.resources.atlasArray(CC, zC, ZC)
+       getProviders() {
+         return Array.from(this.providers.values())
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8156-L8157` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1155-L1156) · [Before (L8156-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8156-L8157)

```diff
-       constructor() {
-         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
+       constructor(pp) {
+         this.name = pp, this._logLevel = Sp, this._logHandler = Lp, this._userLogHandler = null, Op.push(this)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8159-L8163` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1158-L1159) · [Before (L8159-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8159-L8163)

```diff
-       copyFromView(CC) {
-         this.fov = CC.fov, this.nearPlane = CC.near, this.farPlane = CC.far;
-         const zC = CC.worldMatrix;
-         for (let ZC = 0; ZC < 16; ZC++)
-           if (this.worldMatrix[ZC] !== zC[ZC]) return this.worldMatrix.set(zC), void this.worldMatrixVersion++
+       get logLevel() {
+         return this._logLevel
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8165-L8177` → after: `L1161-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1161-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1161-L1163) · [Before (L8165-L8177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8165-L8177)

```diff
-     }
-     class Eo {
-       constructor(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
-         let FC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
-         this.engine = CC, this.sS = zC, this.sceneTask = ZC, this.gpuDevice = QC, this.terrain = wC, this.meshes = bC, this.particles = nC, this.resources = fC, this.sunShadow = FC, this.mzC = void 0, this.backendName = "WebGPU (Lite)", this.b_ = void 0, this.modelMeshes = void 0 … [truncated]
-           vq: CC => {
-             mC(CC) && fC.textureSlot(CC)
-           },
-           loaded: CC => mC(CC) ? fC.textureLoaded(CC) : null,
-           canvasUpdated: (CC, zC, ZC) => {
-             mC(CC) && fC.canvasUpdated(CC, zC, ZC)
-           }
-         }), this.b_ = bC.b_, this.modelMeshes = bC.modelMeshes, zC.camera = this.camera
+       set logLevel(pp) {
+         if (!(pp in op)) throw new TypeError(`Invalid value "${pp}" assigned to \`logLevel\``);
+         this._logLevel = pp
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8179-L8181` → after: `L1165-L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1165-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1165-L1166) · [Before (L8179-L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8179-L8181)

```diff
-       get castsEntitySunShadows() {
-         var CC, zC;
-         return null !== (CC = null === (zC = this.sunShadow) || void 0 === zC ? void 0 : zC.tracesEntities) && void 0 !== CC && CC
+       setLogLevel(pp) {
+         this._logLevel = "string" === typeof pp ? Ip[pp] : pp
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8183-L8184` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1168-L1169) · [Before (L8183-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8183-L8184)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       get logHandler() {
+         return this._logHandler
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8186-L8191` → after: `L1171-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1171-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1171-L1173) · [Before (L8186-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8186-L8191)

```diff
-       attach(CC) {
-         this.modelMeshes.attach(CC.model, CC.sceneMirror);
-         const zC = CC.sS;
-         this.setClearColour(zC.clearColor.r, zC.clearColor.g, zC.clearColor.b), zC.draw = () => {
-           this.drawFrame(CC, zC)
-         }
+       set logHandler(pp) {
+         if ("function" !== typeof pp) throw new TypeError("Value assigned to `logHandler` must be a function");
+         this._logHandler = pp
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8193-L8201` → after: `L1175-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1175-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1175-L1176) · [Before (L8193-L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8193-L8201)

```diff
-       render(CC) {
-         if (!this.refusals.lost) {
-           try {
-             this.mzC.jR(), CC.sS.render()
-           } catch (zC) {
-             throw this.refusals.frameFailed(zC), zC
-           }
-           this.refusals.frameDrawn()
-         }
+       get userLogHandler() {
+         return this._userLogHandler
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8203-L8204` → after: `L1178-L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1178-L1179) · [Before (L8203-L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8203-L8204)

```diff
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
+       set userLogHandler(pp) {
+         this._userLogHandler = pp
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8206-L8214` → after: `L1181-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1181-L1183) · [Before (L8206-L8214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8206-L8214)

```diff
-       describePendingWork() {
-         var CC, zC, ZC, QC;
-         const wC = [...this.particles.describePendingWork(), ...null !== (CC = null === (zC = this.sunShadow) || void 0 === zC ? void 0 : zC.describePendingWork()) && void 0 !== CC ? CC : []],
-           bC = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (ZC = this.terrain.sceneDepth) && void 0 !== ZC && ZC.compiling ? 1 : 0) + (null !== (QC = this.terrain.shadowMask) && void 0 !== QC && QC.compiling ? 1 : 0);
-         bC > 0 && wC.push(`${bC} Lite pipelines compiling`);
-         const nC = this.terrain.buffersAwaitingVerdict;
-         nC > 0 && wC.push(`${nC} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const fC = this.resources.texturesLoading;
-         return fC > 0 && wC.push(`${fC} Lite textures loading`), wC
+       debug() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         this._userLogHandler && this._userLogHandler(this, op.DEBUG, ...ip), this._logHandler(this, op.DEBUG, ...ip)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8216-L8217` → after: `L1185-L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1185-L1187) · [Before (L8216-L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8216-L8217)

```diff
-       prepareTexture(CC) {
-         return null !== this.resources.boundTexture(CC) || this.resources.textureFailed(CC)
+       log() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         this._userLogHandler && this._userLogHandler(this, op.VERBOSE, ...ip), this._logHandler(this, op.VERBOSE, ...ip)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8219-L8230` → after: `L1189-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1189-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1189-L1195) · [Before (L8219-L8230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8219-L8230)

```diff
-       drawFrame(CC, zC) {
-         var ZC, QC, wC, bC, nC, fC;
-         const oC = Sf(CC);
-         this.camera.copyFromView(oC), this.setClearColour(oC.clearColour[0], oC.clearColour[1], oC.clearColour[2]), null === (ZC = this.sunShadow) || void 0 === ZC || ZC.prepare(CC.MN, oC.eye, null !== (QC = CC.MN.zg) && void 0 !== QC ? QC : null), this.terrain.prepare(CC, oC), n … [truncated]
-         const qC = performance.now();
-         this.resources.flushUploads(), null === (fC = this.sunShadow) || void 0 === fC || fC.traceEntities(this.meshes);
-         try {
-           (0, sC.q)(this.engine, this.lastFrameTime > 0 ? qC - this.lastFrameTime : 0)
-         } finally {
-           this.resources.endUploadFrame()
-         }
-         this.lastFrameTime = qC
+       info() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         this._userLogHandler && this._userLogHandler(this, op.INFO, ...ip), this._logHandler(this, op.INFO, ...ip)
+       }
+       warn() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         this._userLogHandler && this._userLogHandler(this, op.WARN, ...ip), this._logHandler(this, op.WARN, ...ip)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8232-L8234` → after: `L1197-L1199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1197-L1199) · [Before (L8232-L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8232-L8234)

```diff
-       setClearColour(CC, zC, ZC) {
-         const QC = this.sS.clearColor;
-         QC.r = CC, QC.g = zC, QC.b = ZC, QC.a = 1
+       error() {
+         for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
+         this._userLogHandler && this._userLogHandler(this, op.ERROR, ...ip), this._logHandler(this, op.ERROR, ...ip)
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8239-L8242` → after: `L1203-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1203-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1203-L1206) · [Before (L8239-L8242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8239-L8242)

```diff
-     function co(CC, zC) {
-       return "object" === typeof CC && null !== CC ? Object.assign(CC, {
-         startStep: zC
-       }) : CC
+     function Dp(pp) {
+       Op.forEach((ip => {
+         ip.setLogLevel(pp)
+       }))
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8244-L8292` → after: `L1208-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1208-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1208-L1221) · [Before (L8244-L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8244-L8292)

```diff
-     async function uo(CC, zC) {
-       const ZC = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance"
-       });
-       if (!ZC) throw co(new Error("No WebGPU adapter"), "no_adapter");
-       const QC = ZC.info,
-         wC = {
-           vendor: (null === QC || void 0 === QC ? void 0 : QC.vendor) || "unknown vendor",
-           renderer: (null === QC || void 0 === QC ? void 0 : QC.architecture) || "unknown renderer",
-           version: (null === QC || void 0 === QC ? void 0 : QC.description) || "unknown version"
-         },
-         bC = function(CC) {
-           const zC = {};
-           for (const ZC in CC.limits) {
-             const QC = CC.limits[ZC];
-             "number" === typeof QC && (zC[ZC] = QC)
- ... (33 more removed lines; see GitHub link above)
+ 
+     function Ap(pp, ip) {
+       for (const cp of Op) {
+         let Op = null;
+         ip && ip.level && (Op = Ip[ip.level]), cp.userLogHandler = null === pp ? null : function(ip, cp) {
+           for (var Ip = arguments.length, Sp = new Array(Ip > 2 ? Ip - 2 : 0), xp = 2; xp < Ip; xp++) Sp[xp - 2] = arguments[xp];
+           const Lp = Sp.map((pp => {
+             if (null == pp) return null;
+             if ("string" === typeof pp) return pp;
+             if ("number" === typeof pp || "boolean" === typeof pp) return pp.toString();
+             if (pp instanceof Error) return pp.message;
+             try {
+               return JSON.stringify(pp)
+             } catch (ip) {
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8294-L8315` → after: `L1223-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1223-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L1223-L1229) · [Before (L8294-L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8294-L8315)

```diff
-             }(nC, CC))),
-             FC = new Yo(zC, fC);
-           for (const MC of function(CC, zC, ZC) {
-               return [zC.opaqueRenderable, CC.opaqueRenderable, CC.skyLastRenderable, ZC.renderable, zC.transparentRenderable, CC.transparentRenderable, CC.frontRenderable]
-             }(qC, oC, FC)) kC(nC, MC);
-           const WC = function(CC) {
-             for (const zC of VC(CC))
-               if ("sS" === zC.name) return zC;
-             throw new Error("Lite: the scene has no render task named scene")
-           }(nC);
-           wC && oC.installSceneDepth(WC, CC);
-           const NC = bC ? new Go(zC, bC.entities) : null;
-           oC.sunShadow = NC, NC && null !== bC && void 0 !== bC && bC.entities && (oC.shadowMask = new mf(zC, WC, CC, oC));
-           return qC.sunShadow = NC, await (0, TC.d)(nC), new Eo(CC, nC, WC, zC, oC, qC, FC, fC, ZC, QC, NC)
-         }(nC, oC, CC, wC, zC.sceneDepth, zC.sunShadow);
-         if (null !== qC) {
- ... (6 more removed lines; see GitHub link above)
+             }
+           })).filter((pp => pp)).join(" ");
+           cp >= (null !== Op && void 0 !== Op ? Op : ip.logLevel) && pp({
+             level: op[cp].toLowerCase(),
+             message: Lp,
+             args: Sp,
+             type: ip.name
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/271.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/271.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136)

#### 1. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/271.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/271.js#L4)

```diff
-   40888: (CC, zC, ZC) => {
+   40713: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6` → after: `L7-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L7-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/271.js#L7-L18) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/271.js#L6)

```diff
-       gamePackSource: () => bC
+       getAnalytics: () => zi,
+       getGoogleAnalyticsClientId: () => pc,
+       initializeAnalytics: () => si,
+       isSupported: () => Ki,
+       logEvent: () => Ic,
+       setAnalyticsCollectionEnabled: () => Oc,
+       setConsent: () => Sc,
+       setCurrentScreen: () => Vi,
+       setDefaultEventParameters: () => oc,
+       setUserId: () => ic,
+       setUserProperties: () => cc,
+       settings: () => ri
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L8-L9` → after: `L20-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L20-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/271.js#L20-L149) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/271.js#L8-L9)

```diff
-     var QC = ZC(4925),
-       wC = ZC(1439);
+     var Op = cp(40687),
+       op = cp(40704),
+       Ip = cp(40700),
+       Sp = cp(40692);
+     let xp, Lp;
+     const Yp = new WeakMap,
+       Dp = new WeakMap,
+       Ap = new WeakMap,
+       Pp = new WeakMap,
+       Wp = new WeakMap;
+     let yp = {
+       get(pp, ip, cp) {
+         if (pp instanceof IDBTransaction) {
+           if ("done" === ip) return Dp.get(pp);
+           if ("objectStoreNames" === ip) return pp.objectStoreNames || Ap.get(pp);
+           if ("store" === ip) return cp.objectStoreNames[1] ? void 0 : cp.objectStore(cp.objectStoreNames[0])
+ ... (114 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L13-L16` → after: `L153-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L153-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/271.js#L153-L1039) · [Before (L13-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/271.js#L13-L16)

```diff
-         packKey: async zC => (await wC.d.getGame(CC, zC, !0)).customTexturePackKey,
-         fetchPack: QC.d
-       }
-     }
+         token: pp.token,
+         requestStatus: 2,
+         expiresIn: (ip = pp.expiresIn, Number(ip.replace("s", "000"))),
+         creationTime: Date.now()
+       };
+       var ip
+     }
+     async function Bp(pp, ip) {
+       const cp = (await ip.json()).error;
+       return Xp.create("request-failed", {
+         requestName: pp,
+         serverCode: cp.code,
+         serverMessage: cp.message,
+         serverStatus: cp.status
+       })
+     }
+ ... (871 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/272.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/272.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/272.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/272.js#L2)

```diff
- export const ids = [271, 272];
+ export const ids = [272];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L97` → after: `L5-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L5-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/272.js#L5-L4026) · [Before (L4-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L97)

```diff
-   40888: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       gamePackSource: () => bC
-     });
-     var QC = ZC(4925),
-       wC = ZC(1439);
- 
-     function bC(CC) {
-       return {
-         packKey: async zC => (await wC.d.getGame(CC, zC, !0)).customTexturePackKey,
-         fetchPack: QC.d
-       }
-     }
-   },
-   50720: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
- ... (78 more removed lines; see GitHub link above)
+     40721: (pp, ip, cp) => {
+         cp.r(ip), cp.d(ip, {
+           ActionCodeOperation: () => Pp,
+           ActionCodeURL: () => pc,
+           AuthCredential: () => bi,
+           AuthErrorCodes: () => vp,
+           EmailAuthCredential: () => Zi,
+           EmailAuthProvider: () => cc,
+           FacebookAuthProvider: () => Sc,
+           FactorId: () => Lp,
+           GithubAuthProvider: () => Lc,
+           GoogleAuthProvider: () => xc,
+           OAuthCredential: () => si,
+           OAuthProvider: () => Ic,
+           OperationType: () => Ap,
+           PhoneAuthCredential: () => Vi,
+ ... (4006 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/273.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/273.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L6` → after: `L4-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L141) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L6)

```diff
-   40893: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       BloxdInformation: () => MC
+   40769: (pp, ip, cp) => {
+     cp.d(ip, {
+       $c: () => yp,
+       $d: () => Ac,
+       $e: () => qc,
+       A: () => Mp,
+       Ab: () => di,
+       Ac: () => Ii,
+       Af: () => sc,
+       B: () => Ep,
+       Bd: () => ti,
+       C: () => Cp,
+       Cb: () => sp,
+       Cd: () => Zi,
+       Dc: () => Wi,
+       Dd: () => hp,
+ ... (122 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L8-L122` → after: `L143-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L143-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/273.js#L143-L778) · [Before (L8-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/273.js#L8-L122)

```diff
-     var QC = ZC(1143),
-       wC = ZC(48),
-       bC = ZC(77),
-       nC = ZC(1388),
-       fC = ZC(113),
-       oC = ZC(1013),
-       qC = ZC(1056);
-     const FC = (0, wC.lazy)((() => ZC.e(123).then((() => ZC(6529))))),
-       WC = (0, wC.lazy)((() => ZC.e(124).then((() => ZC(6533)))));
- 
-     function NC() {
-       return (0, qC.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, qC.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
- ... (99 more removed lines; see GitHub link above)
+     const Op = -2147483648,
+       op = 12,
+       Ip = 12,
+       Sp = 4095,
+       xp = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
+       },
+       Lp = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+ ... (620 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L124-L151` → after: `L780-L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L780-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/273.js#L780-L1364) · [Before (L124-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/273.js#L124-L151)

```diff
-       return (0, qC.jsxs)("div", {
-         className: "BloxdInformation",
-         children: [(0, qC.jsxs)("div", {
-           className: "BloxdInformationSectionList",
-           children: [Object.keys(MC).map((QC => (0, qC.jsx)(nC.O, {
-             active: zC === QC,
-             onClick: () => {
-               ZC(QC)
-             },
-             children: CC(MC[QC].title)
-           }, QC))), bC.featureFlags.usePartnerLinks && (0, qC.jsx)(qC.Fragment, {
-             children: (0, qC.jsxs)(nC.O, {
-               onClick: () => {
-                 window.open("https://www.crazygames.com/c/io")
-               },
-               children: [(0, qC.jsx)(oC.c, {
- ... (12 more removed lines; see GitHub link above)
+ 
+     function Ac(pp, ip, cp, Op, op) {
+       var Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep;
+       switch (pp) {
+         case 32:
+           return 4 === Op && (null === (Ip = op.tickEnd) || void 0 === Ip || Ip.call(op, Hi.LP(ip, cp)), !0);
+         case 33:
+           return 12 === Op && (null === (Sp = op.entitySpawned) || void 0 === Sp || Sp.call(op, di.serverId(ip, cp), di.index(ip, cp), di.kind(ip, cp)), !0);
+         case 34:
+           return 12 === Op && (null === (xp = op.entityDespawned) || void 0 === xp || xp.call(op, di.serverId(ip, cp), di.index(ip, cp), di.kind(ip, cp)), !0);
+         case 39:
+           return !(Op < 20) && (null === (Lp = op.changeBlockFail) || void 0 === Lp || Lp.call(op, ei.pos(ip, cp, 0), ei.pos(ip, cp, 1), ei.pos(ip, cp, 2), ei.actual(ip, cp), ei.dataLen(ip, cp), cp + 20, Op - 20), !0);
+         case 46:
+           return 0 === Op && (null === (Yp = op.changeBlockFailEnd) || void 0 === Yp || Yp.call(op), !0);
+         case 48:
+           return 20 === Op && (null === (Dp = op.inventoryEvent) || void 0 === Dp || Dp.call(op, ui.what(ip, cp), ui.value(ip, cp), ui.pos(ip, cp, 0), ui.pos(ip, cp, 1), ui.pos(ip, cp, 2), ui.block(ip, cp)), !0);
+ ... (569 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/274.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/274.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L4)

```diff
-   40934: (CC, zC, ZC) => {
+   41864: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L6)

```diff
-       b: () => RC,
+       d: () => wp,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L15-L47` → after: `L11-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L11-L24) · [Before (L15-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L15-L47)

```diff
-     var QC = ZC(36963),
-       wC = ZC(37142),
-       bC = ZC(36991),
-       nC = ZC(40941),
-       fC = ZC(40046),
-       oC = ZC(39833),
-       qC = ZC(39867),
-       FC = ZC(39842),
-       WC = ZC(37002);
-     const NC = Object.freeze(new QC.f(0, 0, 0, 0)),
-       MC = Object.freeze(QC.r.Zero()),
-       gC = Object.freeze(QC.n.Zero()),
-       SC = Object.freeze(oC.d.Zero()),
-       pC = Object.freeze(wC.e.Black()),
-       PC = Object.freeze(new wC.g(0, 0, 0, 0)),
-       GC = {
- ... (17 more removed lines; see GitHub link above)
+     var Op = cp(37479),
+       op = cp(38942),
+       Ip = cp(38938);
+ 
+     function Sp(pp, ip, cp, Op) {
+       const op = Ip.o;
+       ip.fill(0), pp.gravity.toArray(ip, op.gravity), pp.colorDead.toArray(ip, op.colorDead), cp[op.ramp] = pp.useRampGradients ? 1 : 0;
+       const Sp = pp.getColorGradients(),
+         xp = Pp(pp, Sp, "colour", Op);
+       cp[op.colorCount] = xp;
+       for (let Ip = 0; Ip < xp; Ip++) {
+         var Lp;
+         const pp = Sp[Wp(Sp, Ip)];
+         ip[op.colorPositions + Ip] = pp.gradient, pp.color1.toArray(ip, op.color1 + 4 * Ip), (null !== (Lp = pp.color2) && void 0 !== Lp ? Lp : pp.color1).toArray(ip, op.color2 + 4 * Ip)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L49-L50` → after: `L26-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L26-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L26-L39) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L49-L50)

```diff
-       get runtimeAnimations() {
-         return this._runtimeAnimations
+       const Yp = pp.getVelocityGradients(),
+         Dp = Pp(pp, Yp, "tw", Op);
+       cp[op.velocityCount] = Dp;
+       for (let Ip = 0; Ip < Dp; Ip++) tp(ip, op.tw + 4 * Ip, Yp[Wp(Yp, Ip)]);
+       const Ap = pp.useRampGradients ? pp.getColorRemapGradients() : null,
+         yp = Pp(pp, Ap, "colour remap", Op);
+       cp[op.remapCount] = yp;
+       for (let Ip = 0; Ip < yp; Ip++) tp(ip, op.remap + 4 * Ip, Ap[Wp(Ap, Ip)])
+     }
+ 
+     function xp() {
+       return {
+         key: [],
+         texels: new Uint8Array(4 * Ip.k)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L52-L55` → after: `L41-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L41-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L41-L109) · [Before (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L52-L55)

```diff
-       get hasRunningRuntimeAnimations() {
-         for (const CC of this._runtimeAnimations)
-           if (!CC.isStopped()) return !0;
-         return !1
+     }
+     const Lp = [];
+ 
+     function Yp(pp, ip) {
+       return Dp(pp, Lp), !vp(Lp, ip.key) && (ip.key.length = 0, ip.key.push(...Lp), ip.key.length > 0 && function(pp, ip) {
+         for (let cp = 0; cp < Ip.k; cp++) op.l.GetCurrentGradient(cp / Ip.k, pp, ((pp, ip, cp) => {
+           Op.Color3.LerpToRef(pp.color, ip.color, cp, Ap)
+         })), ip[4 * cp] = 255 * Ap.r, ip[4 * cp + 1] = 255 * Ap.g, ip[4 * cp + 2] = 255 * Ap.b, ip[4 * cp + 3] = 255
+       }(pp.getRampGradients(), ip.texels), !0)
+     }
+ 
+     function Dp(pp, ip) {
+       ip.length = 0;
+       const cp = pp.useRampGradients ? pp.getRampGradients() : null;
+       if (null !== cp && void 0 !== cp && cp.length) {
+         ip.push(cp.length);
+ ... (53 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L57-L58` → after: `L111-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L111-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L111-L141) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L57-L58)

```diff
-       constructor(CC, zC, ZC, QC, wC, bC) {
-         this.name = CC, this.targetProperty = zC, this.framePerSecond = ZC, this.dataType = QC, this.zb = wC, this.enableBlending = bC, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._c … [truncated]
+       return Lp
+     }
+     cp.d(ip, {
+       d: () => Op,
+       h: () => Ip
+     });
+     const op = new WeakMap;
+ 
+     function Ip(pp, ip, cp) {
+       var Op, Ip;
+       const Sp = null !== (Op = op.get(pp)) && void 0 !== Op ? Op : new Map;
+       op.set(pp, Sp);
+       const xp = null !== (Ip = Sp.get(ip[0])) && void 0 !== Ip ? Ip : [];
+       Sp.set(ip[0], xp);
+       const Lp = xp.find((pp => pp.urls.length === ip.length && pp.urls.every(((pp, cp) => pp === ip[cp]))));
+       if (Lp) return Lp.built;
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L60-L66` → after: `L143-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L143-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L143-L180) · [Before (L60-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L60-L66)

```diff
-       toString(CC) {
-         let zC = "Name: " + this.name + ", property: " + this.targetProperty;
-         if (zC += ", datatype: " + ["Float", "Eg", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], zC += ", nKeys: " + (this._keys ? this._keys.length : "none"), zC += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), CC) {
-           zC += ", Ranges: {";
-           let CC = !0;
-           for (const ZC in this._ranges) CC || (zC += ", "), CC = !1, zC += ZC;
-           zC += "}"
+     }
+     cp.d(ip, {
+       c: () => Op
+     })
+   },
+   41890: (pp, ip, cp) => {
+     cp.d(ip, {
+       createLiteRendererAsync: () => bL,
+       liteBabylonBackend: () => bp,
+       setPipelineFailureHook: () => Yi
+     });
+     var Op = cp(37479),
+       op = cp(37815),
+       Ip = cp(38118),
+       Sp = cp(37445),
+       xp = cp(38126);
+ ... (22 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L70-L71` → after: `L183-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L183-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L183-L223) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L70-L71)

```diff
-       addEvent(CC) {
-         this._events.push(CC), this._events.sort(((CC, zC) => CC.frame - zC.frame))
+       getClassName() {
+         return "LinesMesh"
+       }
+     }
+     const Yp = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
+       Dp = pp => 1 << Yp.indexOf(pp),
+       Ap = Dp("VERTEXCOLOR"),
+       Pp = Dp("INSTANCES"),
+       Wp = Dp("THIN_INSTANCES"),
+       yp = Dp("INSTANCESCOLOR"),
+       Up = Dp("FOG"),
+       wp = Dp("LITE_FRONT_LAYER");
+ 
+     function vp(pp, ip, cp, Op) {
+       let op = 0;
+       return pp.isVerticesDataPresent("color") && (op |= Ap), "none" !== ip && (op |= Pp), "thin" === ip && (op |= Wp, pp.isVerticesDataPresent("instanceColor") && (op |= yp)), Op.fogEnabled && pp.applyFog && 0 !== Op.fogMode && (op |= Up), cp >= 1 && (op |= wp), op
+ ... (25 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L73-L74` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L225-L226) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L73-L74)

```diff
-       removeEvents(CC) {
-         for (let zC = 0; zC < this._events.length; zC++) this._events[zC].frame === CC && (this._events.splice(zC, 1), zC--)
+       Gl() {
+         return this.pw
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L76-L77` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L228-L229) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L76-L77)

```diff
-       getEvents() {
-         return this._events
+       getClassName() {
+         return "LiteMaterial"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L79-L80` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L231-L232) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L79-L80)

```diff
-       createRange(CC, zC, ZC) {
-         this._ranges[CC] || (this._ranges[CC] = new nC.e(CC, zC, ZC))
+       freeze() {
+         this.checkReadyOnlyOnce = !0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L82-L92` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L234-L235) · [Before (L82-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L82-L92)

```diff
-       deleteRange(CC) {
-         let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const ZC = this._ranges[CC];
-         if (ZC) {
-           if (zC) {
-             const CC = ZC.from,
-               zC = ZC.to;
-             for (let ZC = this._keys.length - 1; ZC >= 0; ZC--) this._keys[ZC].frame >= CC && this._keys[ZC].frame <= zC && this._keys.splice(ZC, 1)
-           }
-           this._ranges[CC] = null
-         }
+       unfreeze() {
+         this.checkReadyOnlyOnce = !1
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L94-L95` → after: `L237-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L237-L239) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L94-L95)

```diff
-       getRange(CC) {
-         return this._ranges[CC]
+       markDirty() {}
+       get fillMode() {
+         return this.model.fillMode
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L97-L98` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L241-L242) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L97-L98)

```diff
-       getKeys() {
-         return this._keys
+       needAlphaBlendingForMesh(pp) {
+         return (0, Rp.P)(this.model, pp.visibility, pp.hasVertexAlpha)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L100-L103` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L244-L245) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L100-L103)

```diff
-       getHighestFrame() {
-         let CC = 0;
-         for (let zC = 0, ZC = this._keys.length; zC < ZC; zC++) CC < this._keys[zC].frame && (CC = this._keys[zC].frame);
-         return CC
+       needAlphaTestingForMesh(pp) {
+         return (0, Rp.T)(this.model, pp.visibility, pp.hasVertexAlpha)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L105-L106` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L247-L249) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L105-L106)

```diff
-       getEasingFunction() {
-         return this._easingFunction
+       dispose() {
+         (0, dp.i)(this);
+         for (const pp of this.disposers.splice(0)) pp()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L108-L109` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L251-L252) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L108-L109)

```diff
-       setEasingFunction(CC) {
-         this._easingFunction = CC
+       get model() {
+         return (0, Rp.$)(this)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L111-L112` → after: `L254-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L254-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L254-L314) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L111-L112)

```diff
-       floatInterpolateFunction(CC, zC, ZC) {
-         return (0, bC.Lerp)(CC, zC, ZC)
+     }
+     const Xp = new WeakSet;
+ 
+     function lp(pp) {
+       return Xp.has(pp)
+     }
+ 
+     function Qp(pp) {
+       Xp.add(pp)
+     }
+     const Jp = {
+       create: (pp, ip) => ((0, ep.p)(pp, new Ep(pp.name, ip)), qp.d.defines()),
+       write: () => {},
+       addFeature: (pp, ip) => {
+         const cp = pp.mirror;
+         ip.feature === mp.g && ip.state.dirLightCount > 0 && (pp.disableLighting = !0, (0, Rp.Y)(pp)), "BLOXD_LIGHTING" in ip.defines && (0, dp.g)(cp), ip.feature === kp.f && ((0, Hp.n)(ip.state, Cp), function(pp, ip) {
+ ... (45 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L114-L115` → after: `L316-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L316-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L316-L321) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L114-L115)

```diff
-       floatInterpolateFunctionWithTangents(CC, zC, ZC, QC, wC) {
-         return (0, bC.Hermite)(CC, zC, ZC, QC, wC)
+     };
+     var Bp = cp(37667),
+       Np = cp(37349);
+     class Tp {
+       constructor(pp, ip, cp) {
+         this.engine = pp, this.clearColor = ip, this.ambientColor = cp, this.onBeforeRenderObservable = new Np.d, this.onBeforeCameraRenderObservable = new Np.d, this.onAfterRenderObservable = new Np.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L117-L118` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L323-L324) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L117-L118)

```diff
-       quaternionInterpolateFunction(CC, zC, ZC) {
-         return QC.f.Slerp(CC, zC, ZC)
+       gy() {
+         return this.engine
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L120-L121` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L326-L327) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L120-L121)

```diff
-       quaternionInterpolateFunctionWithTangents(CC, zC, ZC, wC, bC) {
-         return QC.f.Hermite(CC, zC, ZC, wC, bC).normalize()
+       getUniqueId() {
+         return ++this.lastId
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L123-L124` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L329-L330) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L123-L124)

```diff
-       vector3InterpolateFunction(CC, zC, ZC) {
-         return QC.r.Lerp(CC, zC, ZC)
+       getFrameId() {
+         return this.frameId
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L126-L127` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L332-L333) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L126-L127)

```diff
-       vector3InterpolateFunctionWithTangents(CC, zC, ZC, wC, bC) {
-         return QC.r.Hermite(CC, zC, ZC, wC, bC)
+       getAnimationRatio() {
+         return this.animationRatio
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L129-L130` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L335-L336) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L129-L130)

```diff
-       vector2InterpolateFunction(CC, zC, ZC) {
-         return QC.n.Lerp(CC, zC, ZC)
+       addPendingData(pp) {
+         this.pending.push(pp)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L132-L133` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L338-L339) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L132-L133)

```diff
-       vector2InterpolateFunctionWithTangents(CC, zC, ZC, wC, bC) {
-         return QC.n.Hermite(CC, zC, ZC, wC, bC)
+       removePendingData(pp) {
+         const ip = this.pending.indexOf(pp); - 1 !== ip && this.pending.splice(ip, 1)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L135-L136` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L341-L342) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L135-L136)

```diff
-       sizeInterpolateFunction(CC, zC, ZC) {
-         return oC.d.Lerp(CC, zC, ZC)
+       getWaitingItemsCount() {
+         return this.pending.length
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L138-L139` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L344-L345) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L138-L139)

```diff
-       color3InterpolateFunction(CC, zC, ZC) {
-         return wC.e.Lerp(CC, zC, ZC)
+       isReady() {
+         return 0 === this.pending.length
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L141-L142` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L347-L348) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L141-L142)

```diff
-       color3InterpolateFunctionWithTangents(CC, zC, ZC, QC, bC) {
-         return wC.e.Hermite(CC, zC, ZC, QC, bC)
+       getActiveMeshes() {
+         return []
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L144-L145` → after: `L350-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L350-L351) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L144-L145)

```diff
-       color4InterpolateFunction(CC, zC, ZC) {
-         return wC.g.Lerp(CC, zC, ZC)
+       render() {
+         this.frameId++, this.animationRatio = .06 * Math.max(1, Math.min(this.engine.getDeltaTime(), 1e3)), this.draw(), this.onAfterRenderObservable.notifyObservers(this)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L147-L148` → after: `L353-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L353-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L353-L389) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L147-L148)

```diff
-       color4InterpolateFunctionWithTangents(CC, zC, ZC, QC, bC) {
-         return wC.g.Hermite(CC, zC, ZC, QC, bC)
+     }
+ 
+     function fp() {
+       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
+     }
+     const bp = {
+       Zcp: fp,
+       jop: (pp, ip) => {
+         const cp = new Tp(pp.engine, Op.b.FromArray(ip.clearColor), Op.Color3.FromArray(ip.ambientColor));
+         (0, Sp.e)(Jp, cp), pp.pw = cp,
+           function(pp, ip) {
+             const cp = Object.assign((0, Bp.j)(pp, "camera"), {
+               layerMask: 268435455
+             });
+             pp.model.nodes.setWorldSource(cp.row, pp.model.view.worldMatrix), pp.camera = ip.activeCamera = cp
+           }(pp, cp), (0, op.i)(pp, ((pp, ip, cp) => (0, Ip.e)(pp, ip, cp, xp.c)))
+ ... (21 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L150-L151` → after: `L391-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L391-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L391-L392) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L150-L151)

```diff
-       _getKeyValue(CC) {
-         return "function" === typeof CC ? CC() : CC
+       frameDrawn() {
+         this.refusedFrames = 0
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L153-L154` → after: `L394-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L394-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L394-L405) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L153-L154)

```diff
-       evaluate(CC) {
-         return GC.key = 0, this._interpolate(CC, GC)
+       frameFailed(pp) {
+         (function(pp) {
+           const {
+             name: ip,
+             message: cp
+           } = null !== pp && void 0 !== pp ? pp : {};
+           return "InvalidStateError" === ip && "string" === typeof cp && cp.startsWith("GPUDevice.")
+         })(pp) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
+           reason: "unknown",
+           message: pp.message,
+           framesRefused: !0
+         }))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L156-L203` → after: `L407-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L407-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L407-L476) · [Before (L156-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L156-L203)

```diff
-       _interpolate(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (zC.zb === RC.ANIMATIONLOOPMODE_CONSTANT && zC.repeatCount > 0) return zC.highLimitValue.clone ? zC.highLimitValue.clone() : zC.highLimitValue;
-         const QC = this._keys;
-         let wC;
-         if (this._coreAnimation) wC = this._coreAnimation._key;
-         else {
-           const bC = QC.length;
-           for (wC = zC.key; wC >= 0 && CC < QC[wC].frame;) --wC;
-           for (; wC + 1 <= bC - 1 && CC >= QC[wC + 1].frame;) ++wC;
-           if (zC.key = wC, wC < 0) return ZC ? void 0 : this._getKeyValue(QC[0].value);
-           if (wC + 1 > bC - 1) return ZC ? void 0 : this._getKeyValue(QC[bC - 1].value);
-           this._key = wC
-         }
-         const bC = QC[wC],
-           nC = QC[wC + 1];
- ... (32 more removed lines; see GitHub link above)
+     }
+     var gp = cp(41375),
+       Gp = cp(38949);
+ 
+     function rp(pp) {
+       return Math.max(4, 4 * Math.ceil(pp / 4))
+     }
+ 
+     function Zp(pp, ip, cp, Op) {
+       const op = pp.createBuffer({
+         label: Op,
+         size: rp(ip.byteLength),
+         usage: cp,
+         mappedAtCreation: !0
+       });
+       return new Uint8Array(op.getMappedRange(), 0, ip.byteLength).set(new Uint8Array(ip.buffer, ip.byteOffset, ip.byteLength)), op.unmap(), op
+ ... (54 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L205` → after: `L478-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L478-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L478-L641) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L205)

```diff
-             return CC
+             yield {
+               data: cp,
+               width: pp,
+               height: ip
+             }, op = cp, Ip = pp, Sp = ip
+           }
+         }(ip, cp, Op, op)) xp(Yp.data, Lp++, Yp.width, Yp.height);
+       return Sp
+     }
+     const Kp = {
+       premultiplyAlpha: "none",
+       colorSpaceConversion: "none"
+     };
+ 
+     function Vp(pp) {
+       if (pp.startsWith("data:")) {
+ ... (148 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L207-L293` → after: `L643-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L643-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L643-L648) · [Before (L207-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L207-L293)

```diff
-           case RC.ANIMATIONTYPE_VECTOR3: {
-             const CC = qC ? this.vector3InterpolateFunctionWithTangents(fC, bC.outTangent.scale(FC), oC, nC.inTangent.scale(FC), WC) : this.vector3InterpolateFunction(fC, oC, WC);
-             switch (zC.zb) {
-               case RC.ANIMATIONLOOPMODE_CYCLE:
-               case RC.ANIMATIONLOOPMODE_CONSTANT:
-               case RC.ANIMATIONLOOPMODE_YOYO:
-                 return CC;
-               case RC.ANIMATIONLOOPMODE_RELATIVE:
-               case RC.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
-                 return CC.add((zC.offsetValue || MC).scale(zC.repeatCount))
-             }
-             break
-           }
-           case RC.ANIMATIONTYPE_VECTOR2: {
-             const CC = qC ? this.vector2InterpolateFunctionWithTangents(fC, bC.outTangent.scale(FC), oC, nC.inTangent.scale(FC), WC) : this.vector2InterpolateFunction(fC, oC, WC);
-             switch (zC.zb) {
- ... (71 more removed lines; see GitHub link above)
+           of cp) op += Sp;
+         for (const {
+             name: Sp,
+             offset: xp,
+             size: Lp,
+             type: Yp
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L296` → after: `L711-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L711-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L711-L714) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L296)

```diff
-         return zC
+         let Ip = 0;
+         ip.renderSelf && this.packRow(Ip++, pp, ip.row, cp);
+         for (let Sp = 0; Sp < ip.rows.length; Sp++) this.packRow(Ip++, ip.instances[Sp], ip.rows[Sp], cp);
+         this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * op), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, op * this.rowStride)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L298-L330` → after: `L716-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L716-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L716-L724) · [Before (L298-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L298-L330)

```diff
-       setKeys(CC) {
-         let zC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = CC;
-         else if (this._keys = CC.slice(0), zC)
-           for (let ZC = 0; ZC < this._keys.length; ZC++) {
-             const CC = this._keys[ZC];
-             this._keys[ZC] = {
-               frame: CC.frame,
-               value: CC.value.clone ? CC.value.clone() : CC.value,
-               inTangent: CC.inTangent && CC.inTangent.clone ? CC.inTangent.clone() : CC.inTangent,
-               outTangent: CC.outTangent && CC.outTangent.clone ? CC.outTangent.clone() : CC.outTangent,
-               interpolation: CC.interpolation,
-               lockedTangent: CC.lockedTangent,
-               easingFunction: CC.easingFunction
-             }
-           }
- ... (17 more removed lines; see GitHub link above)
+       packRow(pp, ip, cp, Op) {
+         const op = this.matrices;
+         if (cp < 0) op.set(ip.getWorldMatrix().m, 16 * pp);
+         else
+           for (let Yp = 0; Yp < 16; Yp++) op[16 * pp + Yp] = Op[16 * cp + Yp];
+         const Ip = this.attributes;
+         if (!Ip) return;
+         const Sp = ip.MJ,
+           xp = this.layout;
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L332-L352` → after: `L726-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L726-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L726-L729) · [Before (L332-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L332-L352)

```diff
-           const wC = ZC[QC],
-             bC = {};
-           switch (bC.frame = wC.frame, zC) {
-             case RC.ANIMATIONTYPE_FLOAT:
-               bC.values = [wC.value], void 0 !== wC.inTangent && bC.values.push(wC.inTangent), void 0 !== wC.outTangent && (void 0 === wC.inTangent && bC.values.push(void 0), bC.values.push(wC.outTangent)), void 0 !== wC.interpolation && (void 0 === wC.inTangent && bC.values.push … [truncated]
-               break;
-             case RC.ANIMATIONTYPE_QUATERNION:
-             case RC.ANIMATIONTYPE_MATRIX:
-             case RC.ANIMATIONTYPE_VECTOR3:
-             case RC.ANIMATIONTYPE_COLOR3:
-             case RC.ANIMATIONTYPE_COLOR4:
-               bC.values = wC.value.VZC(), void 0 != wC.inTangent && bC.values.push(wC.inTangent.VZC()), void 0 != wC.outTangent && (void 0 === wC.inTangent && bC.values.push(void 0), bC.values.push(wC.outTangent.VZC())), void 0 !== wC.interpolation && (void 0 === wC.inTangent &&  … [truncated]
-           }
-           CC.keys.push(bC)
-         }
-         CC.np = [];
- ... (5 more removed lines; see GitHub link above)
+           var Lp;
+           const ip = null !== (Lp = Sp[xp[Yp]]) && void 0 !== Lp ? Lp : 0,
+             cp = pp * this.rowStride + this.offsets[Yp];
+           ip.toArray ? ip.toArray(Ip, cp) : ip.copyToArray ? ip.copyToArray(Ip, cp) : Ip[cp] = ip
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L356-L358` → after: `L732-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L732-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L732-L747) · [Before (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L356-L358)

```diff
-       static _UniversalLerp(CC, zC, ZC) {
-         const QC = CC.constructor;
-         return QC.Lerp ? QC.Lerp(CC, zC, ZC) : QC.Slerp ? QC.Slerp(CC, zC, ZC) : CC.toFixed ? CC * (1 - ZC) + ZC * zC : zC
+     }
+     class wi {
+       constructor(pp, ip, cp, Op) {
+         let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
+           Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+         this.key = pp, this.byteOffset = ip, this.byteStride = cp, this.size = Op, this.instanced = op, this.type = Ip, this.normalized = Sp
+       }
+       getBuffer() {
+         return this.key
+       }
+       getSize() {
+         return this.size
+       }
+       getIsInstanced() {
+         return this.instanced
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L363-L443` → after: `L759-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L759-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L759-L783) · [Before (L363-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L363-L443)

```diff
-       let wC;
-       wC = "object" === typeof zC ? zC : {
-         referenceFrame: zC ?? 0,
-         range: ZC,
-         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
-       };
-       let bC = CC;
-       wC.cloneOriginalAnimation && (bC = CC.clone(), bC.name = wC.clonedAnimationName || bC.name);
-       const nC = bC.getKeys();
-       if (!nC.length) return bC;
-       const fC = wC.referenceFrame && wC.referenceFrame >= 0 ? wC.referenceFrame : 0;
-       let oC = 0;
-       const qC = nC[0];
-       let FC = nC.length - 1;
-       const WC = nC[FC],
- ... (65 more removed lines; see GitHub link above)
+       var Op;
+       let op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const Ip = null !== (Op = ip._colorFormat) && void 0 !== Op ? Op : "bgra8unorm",
+         Sp = op ? 15 : 0;
+       return cp ? {
+         ...pp,
+         targets: [{
+           format: Ip,
+           blend: {
+             color: cp,
+             alpha: Hi
+           },
+           writeMask: Sp
+         }]
+       } : {
+         ...pp,
+ ... (9 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L446-L448` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L786-L787) · [Before (L446-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L446-L448)

```diff
-     function xC(CC, zC, ZC, QC) {
-       const wC = new RC(CC + "Animation", CC, ZC, zC, RC.ANIMATIONLOOPMODE_CONSTANT);
-       return wC.setEasingFunction(QC), wC
+     function ei(pp, ip) {
+       pp._renderables.push(ip)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L451-L453` → after: `L790-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L790-L791) · [Before (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L451-L453)

```diff
-     function JC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
-       const WC = RC._PrepareAnimation(CC, ZC, QC, wC, bC, nC, fC, oC);
-       return WC ? (zC.Km && (FC = zC.Km()), FC ? FC.beginDirectAnimation(zC, [WC], 0, wC, WC.zb !== RC.ANIMATIONLOOPMODE_CONSTANT, 1, qC) : null) : null
+     function ui(pp) {
+       return pp._device
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L456-L459` → after: `L794-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L794-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L794-L796) · [Before (L456-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L456-L459)

```diff
-     function IC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
-       const WC = RC._PrepareAnimation(CC, QC, wC, bC, nC, fC, oC, qC);
-       if (!WC) return null;
-       return zC.Km().beginDirectHierarchyAnimation(zC, ZC, [WC], 0, bC, 1 === WC.zb, 1, FC)
+     function ji(pp) {
+       var ip, cp;
+       return null !== (ip = null === (cp = pp._frameGraph) || void 0 === cp ? void 0 : cp._tasks) && void 0 !== ip ? ip : []
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L462-L464` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L799-L800) · [Before (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L462-L464)

```diff
-     function iC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
-       const FC = RC._PrepareAnimation(CC, ZC, QC, wC, bC, nC, fC, oC);
-       return FC ? (zC.animations.push(FC), zC.Km().beginAnimation(zC, 0, wC, 1 === FC.zb, 1, qC)) : null
+     function ki(pp) {
+       return pp._currentEncoder
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L467-L480` → after: `L803-L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L803-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L803-L819) · [Before (L467-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L467-L480)

```diff
-     function vC(CC, zC, ZC, QC, wC, bC, nC) {
-       let fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-         oC = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-         qC = arguments.length > 9 ? arguments[9] : void 0;
-       if (nC <= 0) return ZC[CC] = zC, fC && fC(), null;
-       const FC = wC * (nC / 1e3);
-       bC.setKeys(qC ?? [{
-         frame: 0,
-         value: ZC[CC].clone ? ZC[CC].clone() : ZC[CC]
-       }, {
-         frame: FC,
-         value: zC
-       }]), ZC.animations || (ZC.animations = []), ZC.animations.push(bC);
-       return QC.beginAnimation(ZC, 0, FC, !1, 1, fC ?? void 0, void 0, oC)
+     function mi(pp) {
+       return pp.createBindGroupLayout({
+         label: "lite-scene-equivalent",
+         entries: [{
+           binding: 0,
+           visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
+           buffer: {
+             type: "uniform"
+           }
+         }, {
+           binding: 1,
+           visibility: GPUShaderStage.FRAGMENT,
+           buffer: {
+             type: "uniform"
+           }
+         }]
+ ... (1 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L484` → after: `L827-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L827-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L827-L871) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L484)

```diff
-       FC.d.AppendSerializedAnimations(CC, zC)
+       let cp = Ci.get(pp);
+       if (!cp) {
+         cp = {
+           module: pp.createShaderModule({
+             label: "placeholder",
+             code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
+           }),
+           pipelines: new Map
+         }, Ci.set(pp, cp)
+       }
+       const Op = `${ip._colorFormat}|${ip._depthStencilFormat}|${ip._sampleCount}`;
+       let op = cp.pipelines.get(Op);
+       if (!op) {
+         var Ip;
+         const {
+           module: Sp
+ ... (29 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L487-L528` → after: `L874-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L874-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L874-L877) · [Before (L487-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L487-L528)

```diff
-     function hC(CC) {
-       const zC = new RC(CC.name, CC.property, CC.framePerSecond, CC.dataType, CC.loopBehavior),
-         ZC = CC.dataType,
-         bC = [];
-       let nC, fC;
-       for (CC.enableBlending && (zC.enableBlending = CC.enableBlending), CC.blendingSpeed && (zC.blendingSpeed = CC.blendingSpeed), fC = 0; fC < CC.keys.length; fC++) {
-         const zC = CC.keys[fC];
-         let oC, qC, FC;
-         switch (ZC) {
-           case RC.ANIMATIONTYPE_FLOAT:
-             nC = zC.values[0], zC.values.length >= 2 && (oC = zC.values[1]), zC.values.length >= 3 && (qC = zC.values[2]), zC.values.length >= 4 && (FC = zC.values[3]);
-             break;
-           case RC.ANIMATIONTYPE_QUATERNION:
-             if (nC = QC.f.FromArray(zC.values), zC.values.length >= 8) {
-               const CC = QC.f.FromArray(zC.values.slice(4, 8));
-               CC.equals(QC.f.Zero()) || (oC = CC)
- ... (26 more removed lines; see GitHub link above)
+     function Xi(pp, ip, cp) {
+       const Op = ip.eye,
+         op = ip.viewMatrix;
+       pp[0] = Op[0] + op[2] * cp, pp[1] = Op[1] + op[6] * cp, pp[2] = Op[2] + op[10] * cp
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L530-L547` → after: `L879-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L879-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L879-L910) · [Before (L530-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L530-L547)

```diff
-     async function KC(CC, zC) {
-       return await new Promise(((ZC, QC) => {
-         const wC = new qC.d;
-         wC.addEventListener("readystatechange", (() => {
-           if (4 == wC.readyState)
-             if (200 == wC.status) {
-               let zC = JSON.parse(wC.responseText);
-               if (zC.animations && (zC = zC.animations), zC.length) {
-                 const CC = [];
-                 for (const ZC of zC) CC.push(hC(ZC));
-                 ZC(CC)
-               } else {
-                 const QC = hC(zC);
-                 CC && (QC.name = CC), ZC(QC)
-               }
-             } else QC("Unable to load the animation")
- ... (2 more removed lines; see GitHub link above)
+     var li = cp(38178),
+       Qi = cp(41860),
+       Ji = cp(37433);
+     const Bi = Math.PI,
+       Ni = Bi / 1.95,
+       Ti = [5e-4 / 94, 125e-7, 5e-4 / 18],
+       fi = [
+         [68e-8, .686],
+         [55e-8, .678],
+         [45e-8, .666]
+       ].map((pp => {
+         let [ip, cp] = pp;
+         return .434 * Bi * Math.pow(2 * Bi / ip, 2) * cp
+       }));
+ 
+     function bi(pp, ip, cp) {
+ ... (16 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L549-L570` → after: `L912-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L912-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L912-L990) · [Before (L549-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L549-L570)

```diff
-     async function YC(CC) {
-       const zC = this?.SnippetUrl ?? RC.SnippetUrl;
-       return await new Promise(((ZC, QC) => {
-         const wC = new qC.d;
-         wC.addEventListener("readystatechange", (() => {
-           if (4 == wC.readyState)
-             if (200 == wC.status) {
-               const zC = JSON.parse(JSON.parse(wC.responseText).jsonPayload);
-               if (zC.animations) {
-                 const QC = JSON.parse(zC.animations),
-                   wC = [];
-                 for (const zC of QC.animations) {
-                   const ZC = hC(zC);
-                   ZC.snippetId = CC, wC.push(ZC)
-                 }
-                 ZC(wC)
- ... (6 more removed lines; see GitHub link above)
+     const ai = {
+       A: .15,
+       B: .5,
+       C: .1,
+       D: .2,
+       E: .02,
+       F: .3
+     };
+     const ni = 1 / function(pp) {
+       const {
+         A: ip,
+         B: cp,
+         C: Op,
+         D: op,
+         E: Ip,
+         F: Sp
+ ... (63 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L577-L578` → after: `L994-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L994-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L994-L1062) · [Before (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L577-L578)

```diff
-     function HC() {
-       mC || (mC = !0, RC.Parse = hC, RC.ParseFromFileAsync = KC, RC.ParseFromSnippetAsync = YC, RC.CreateFromSnippetAsync = dC, RC.CreateAnimation = xC, RC.CreateAndStartAnimation = JC, RC.CreateAndStartHierarchyAnimation = IC, RC.CreateMergeAndStartAnimation = iC, RC.MakeAnimati … [truncated]
+     function Zi(pp, ip) {
+       var cp;
+       const Op = null !== (cp = pp.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== cp ? cp : [];
+       let op = 0;
+       const Ip = () => Op[op],
+         Sp = () => Op[op++],
+         xp = pp => {
+           const cp = /^\d/.test(pp) ? pp : ip.get(pp);
+           return "string" === typeof cp ? parseInt(cp) : Number.NaN
+         },
+         Lp = () => {
+           const pp = Sp();
+           if ("!" === pp) return !Lp();
+           if ("(" === pp) {
+             const pp = Dp();
+             return Sp(), pp
+ ... (53 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L580-L591` → after: `L1064-L8584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L1064-L8584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L1064-L8584) · [Before (L580-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L580-L591)

```diff
-   },
-   40941: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => QC
-     });
-     class QC {
-       constructor(CC, zC, ZC) {
-         this.name = CC, this.from = zC, this.to = ZC
-       }
-       clone() {
-         return new QC(this.name, this.from, this.to)
-       }
+     var zi = cp(37429),
+       si = cp(37745),
+       Ki = cp(37747),
+       Vi = cp(40892),
+       pc = cp(38982);
+     const ic = 32,
+       cc = [10, 3, 10],
+       Oc = [21, 7, 21],
+       oc = Oc[0] * Oc[1] * Oc[2],
+       Ic = 0,
+       Sc = 1,
+       xc = 2,
+       Lc = 3,
+       Yc = 64,
+       Dc = 512,
+       Ac = 4 * oc,
+ ... (7505 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L594-L623` → after: `L8587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R8587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L8587) · [Before (L594-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L594-L623)

```diff
-   40985: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC.c,
-       f: () => QC.k
-     });
-     var QC = ZC(39959);
-     (0, QC.e)()
-   },
-   40968: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => QC.h
-     });
-     var QC = ZC(40303);
-     (0, QC.d)()
-   },
-   40948: (CC, zC, ZC) => {
- ... (14 more removed lines; see GitHub link above)
+   40892: (pp, ip, cp) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L625` → after: `L8589-L8600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R8589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L8589-L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L8589-L8600) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L625)

```diff
-       c: () => QC.e
+       A: () => Up,
+       C: () => Wp,
+       E: () => yp,
+       c: () => op,
+       g: () => Op,
+       h: () => Pp,
+       l: () => Dp,
+       m: () => wp,
+       o: () => Ip,
+       r: () => xp,
+       t: () => Lp,
+       x: () => Sp
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L627-L628` → after: `L8602-L8677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R8602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L8602-L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/274.js#L8602-L8677) · [Before (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/274.js#L627-L628)

```diff
-     var QC = ZC(40272);
-     (0, QC.c)()
+     const Op = 3,
+       op = 0,
+       Ip = 1,
+       Sp = 2,
+       xp = {
+         uniform: 3,
+         hP: 4,
+         special: 5,
+         volume: 6,
+         sampler: 7,
+         entities: 8,
+         entityGrids: 9
+       },
+       Lp = 10,
+       Yp = "BloxdPackInputs",
+       Dp = "bloxdPackInputs",
+ ... (60 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/275.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/275.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896)

#### 1. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L5` → after: `L4-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L68) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L5)

```diff
-   41003: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   41114: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Sp,
+       f: () => Ip,
+       g: () => xp
+     });
+     let Op = null,
+       op = null;
+ 
+     function Ip(pp, ip) {
+       return Op = pp, op = null, xp(ip), () => {
+         Op === pp && (Op = null, op = null)
+       }
+     }
+ 
+     function Sp() {
+ ... (49 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/276.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/276.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651)

#### 1. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L5` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L16) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L5)

```diff
-   41009: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   41273: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       gamePackSource: () => Ip
+     });
+     var Op = cp(5103),
+       op = cp(1520);
+ 
+     function Ip(pp) {
+       return {
+         packKey: async ip => (await op.b.getGame(pp, ip, !0)).customTexturePackKey,
+         fetchPack: Op.d
+       }
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/277.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/277.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592)

#### 1. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/277.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/277.js#L2)

```diff
- export const ids = [277];
+ export const ids = [276, 277];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4-L5` → after: `L4-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/277.js#L4-L93) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/277.js#L4-L5)

```diff
-   41018: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   41273: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       gamePackSource: () => Ip
+     });
+     var Op = cp(5103),
+       op = cp(1520);
+ 
+     function Ip(pp) {
+       return {
+         packKey: async ip => (await op.b.getGame(pp, ip, !0)).customTexturePackKey,
+         fetchPack: Op.d
+       }
+     }
+   },
+   51202: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+ ... (74 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/278.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/278.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L5` → after: `L4-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L152) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L5)

```diff
-   41025: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   41277: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       BloxdInformation: () => Wp
+     });
+     var Op = cp(1201),
+       op = cp(62),
+       Ip = cp(104),
+       Sp = cp(1480),
+       xp = cp(131),
+       Lp = cp(1060),
+       Yp = cp(1112);
+     const Dp = (0, op.lazy)((() => Promise.all([cp.e(124), cp.e(398)]).then((() => cp(6658))))),
+       Ap = (0, op.lazy)((() => cp.e(126).then((() => cp(6672)))));
+ 
+     function Pp() {
+       return (0, Yp.jsxs)("div", {
+ ... (133 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/279.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/279.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/279.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/279.js#L4-L5)

```diff
-   41031: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   41315: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Hp,
+       h: () => Qp,
+       j: () => wp,
+       m: () => vp,
+       o: () => Pp,
+       p: () => Up,
+       t: () => yp,
+       w: () => Wp
+     });
+     var Op = cp(37320),
+       op = cp(37487),
+       Ip = cp(37356),
+       Sp = cp(41320),
+       xp = cp(40415),
+ ... (609 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/280.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/280.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/280.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/280.js#L4-L5)

```diff
-   41035: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   41402: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/281.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/281.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L5)

```diff
-   41044: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
+   41410: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/282.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/282.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/282.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/282.js#L4-L5)

```diff
-   41047: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
+   41418: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/283.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/283.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/283.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/283.js#L4-L5)

```diff
-   41050: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
+   41427: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/284.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/284.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L5)

```diff
-   41056: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
+   41432: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/285.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/285.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/285.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/285.js#L4-L5)

```diff
-   41062: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
+   41440: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/286.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/286.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L5)

```diff
-   41067: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
+   41446: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/287.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/287.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/287.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/287.js#L4-L5)

```diff
-   41070: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   41454: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/288.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/288.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468)

#### 1. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L5)

```diff
-   41075: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
+   41461: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/289.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/289.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/289.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/289.js#L4-L5)

```diff
-   41082: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   41467: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/290.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/290.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/290.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/290.js#L4-L5)

```diff
-   41084: CC => {
-     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   41469: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/291.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/291.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade)

#### 1. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L4-L152` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/291.js#L4-L5) · [Before (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/291.js#L4-L152)

```diff
-   41104: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       CharacterPreview: () => WC
-     });
-     var QC = ZC(48),
-       wC = ZC(2734),
-       bC = ZC(1183),
-       nC = ZC(2534),
-       fC = ZC(34185),
-       oC = ZC(3569),
-       qC = ZC(1056);
-     const FC = .6 * Math.PI,
-       WC = (0, QC.memo)((0, QC.forwardRef)((function(CC, zC) {
-         let {
-           onReady: ZC,
-           onDrawn: WC,
- ... (133 more removed lines; see GitHub link above)
+   41478: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/292.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/292.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L4-L1182` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/292.js#L4-L5) · [Before (L4-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/292.js#L4-L1182)

```diff
-   41113: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       default: () => jz
-     });
-     var QC = ZC(41122),
-       wC = ZC(41153),
-       bC = ZC(41158),
-       nC = ZC(48),
-       fC = ZC(60),
-       oC = ZC(41177),
-       qC = ZC(41179),
-       FC = ZC(4696),
-       WC = ZC(41188),
-       NC = ZC(1811),
-       MC = ZC(41191),
-       gC = ZC(41203),
- ... (1163 more removed lines; see GitHub link above)
+   41481: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/293.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/293.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22)

#### 1. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L4-L17228` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/293.js#L4-L5) · [Before (L4-L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/293.js#L4-L17228)

```diff
-   41122: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => Hz,
-       g: () => iz,
-       i: () => Gz,
-       j: () => oC,
-       m: () => Ez,
-       p: () => qC,
-       r: () => Nz
-     });
-     var QC = ZC(41125),
-       wC = ZC(41128),
-       bC = ZC(41142);
-     class nC {
-       constructor(CC, zC, ZC, QC) {
-         this.state = CC, this.pos = zC, this.explicit = ZC, this.view = QC, this.abortListeners = [], this.abortOnDocChange = !1
- ... (17209 more removed lines; see GitHub link above)
+   41484: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/294.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/294.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79)

#### 1. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L2146` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L5) · [Before (L4-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L2146)

```diff
-   41125: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => Gz,
-       e: () => mC,
-       ChangeSet: () => HC,
-       h: () => Yz,
-       i: () => TC,
-       l: () => Ez,
-       n: () => DC,
-       o: () => dC,
-       r: () => wz,
-       u: () => Tz,
-       s: () => az,
-       v: () => Xz,
-       w: () => xz,
-       A: () => kC,
- ... (2127 more removed lines; see GitHub link above)
+   41492: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/295.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/295.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4-L4269` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/295.js#L4-L6) · [Before (L4-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/295.js#L4-L4269)

```diff
-   41201: CC => {
-     function zC(CC) {
-       var zC = new Error("Cannot find module '" + CC + "'");
-       throw zC.code = "MODULE_NOT_FOUND", zC
-     }
-     zC.keys = () => [], zC.resolve = zC, zC.id = 41201, CC.exports = zC
-   },
-   41255: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC,
-       d: () => wC
-     });
-     const QC = "Sends one question to the AI",
-       wC = {
-         title: QC,
-         "data-asks-ai": !0
- ... (4250 more removed lines; see GitHub link above)
+   41498: pp => {
+     pp.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/296.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/296.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/296.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/296.js#L4-L6)

```diff
-   41188: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => QC
+   41524: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       CharacterPreview: () => Ap
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L8-L7359` → after: `L8-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L8-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/296.js#L8-L152) · [Before (L8-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/296.js#L8-L7359)

```diff
-     const QC = String.raw`interface Map<K, V> {
-     clear(): void;
-     /**
-      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
-      */
-     delete(key: K): boolean;
-     /**
-      * Executes a provided function once per each key/value pair in the Map, in insertion order.
-      */
-     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
-     /**
-      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
-      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
-      */
-     get(key: K): V | undefined;
-     /**
- ... (7336 more removed lines; see GitHub link above)
+     var Op = cp(62),
+       op = cp(2835),
+       Ip = cp(1251),
+       Sp = cp(2638),
+       xp = cp(34462),
+       Lp = cp(3731),
+       Yp = cp(1112);
+     const Dp = .6 * Math.PI,
+       Ap = (0, Op.memo)((0, Op.forwardRef)((function(pp, ip) {
+         let {
+           onReady: cp,
+           onDrawn: Ap,
+           owner: Pp = "other",
+           framing: Wp = "player",
+           forcedCosmetics: yp,
+           IL: Up,
+ ... (129 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/297.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/297.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L4-L9` → after: `L4-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L4-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L4-L58) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L4-L9)

```diff
-   41191: (CC, zC, ZC) => {
-     function QC() {
-       return QC = Object.assign ? Object.assign.bind() : function(CC) {
-         for (var zC = 1; zC < arguments.length; zC++) {
-           var ZC = arguments[zC];
-           for (var QC in ZC)({}).hasOwnProperty.call(ZC, QC) && (CC[QC] = ZC[QC])
+   41535: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => Zi
+     });
+     var Op = cp(41541),
+       op = cp(41591),
+       Ip = cp(41595),
+       Sp = cp(62),
+       xp = cp(82),
+       Lp = cp(41612),
+       Yp = cp(41621),
+       Dp = cp(4874),
+       Ap = cp(41630),
+       Pp = cp(1929),
+       Wp = cp(41637),
+       yp = cp(41647),
+ ... (39 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L12` → after: `L61-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L61-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L61-L115) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L12)

```diff
-       }, QC.apply(null, arguments)
+       }
+       eq(pp) {
+         return this.colour === pp.colour && this.playerName === pp.playerName && this.showName === pp.showName
+       }
+       get estimatedHeight() {
+         return -1
+       }
+       ignoreEvent() {
+         return !0
+       }
+     }
+ 
+     function Gp(pp, ip) {
+       const cp = [],
+         Op = [];
+       for (const [, Sp] of pp) {
+ ... (39 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L14-L16` → after: `L117-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L117-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L117-L153) · [Before (L14-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L14-L16)

```diff
-     ZC.d(zC, {
-       e: () => NC,
-       h: () => fC
+     const rp = Mp.E.define({
+       create: () => ({
+         cursors: new Map,
+         uO: Cp.c.none
+       }),
+       update(pp, ip) {
+         let cp = pp.cursors,
+           Op = !1;
+         if (ip.docChanged) {
+           const pp = new Map;
+           for (const [Op, op] of cp) pp.set(Op, {
+             ...op,
+             anchor: ip.changes.mapPos(op.anchor, 1),
+             head: ip.changes.mapPos(op.head, 1)
+           });
+           cp = pp, Op = !0
+ ... (21 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L18-L32` → after: `L155-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L155-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L155-L223) · [Before (L18-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L18-L32)

```diff
-     var wC = !1;
-     try {
-       wC = "undefined" !== typeof localStorage
-     } catch (gC) {}
-     var bC = "undefined" !== typeof process,
-       nC = wC && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || bC && {
-         NODE_ENV: "production",
-         PUBLIC_URL: "",
-         WDS_SOCKET_HOST: void 0,
-         WDS_SOCKET_PATH: void 0,
-         WDS_SOCKET_PORT: void 0,
-         FAST_REFRESH: !0,
-         REACT_APP_DEV_URLS: "false"
-       }.DEBUG ? console.log : function(CC) {
-         return ""
+     const Zp = Mp.C.define(),
+       zp = Cp.c.mark({
+         class: "CodeInsertFlash"
+       }),
+       sp = Mp.E.define({
+         create: () => Cp.c.none,
+         update(pp, ip) {
+           let cp = pp.map(ip.changes);
+           for (const Op of ip.effects) Op.is(Zp) && (cp = Op.value ? Cp.c.set(zp.range(Op.value.from, Op.value.to)) : Cp.c.none);
+           return cp
+         },
+         provide: pp => Cp.f.uO.from(pp)
+       }),
+       Kp = Mp.E.define({
+         create: () => !1,
+         update: (pp, ip) => pp || void 0 !== ip.annotation(Mp.I.userEvent) && !ip.annotation(Mp.I.remote)
+ ... (53 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L35-L61` → after: `L256-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L256-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L256-L276) · [Before (L35-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L35-L61)

```diff
-     function fC(CC, zC, ZC, wC, bC) {
-       void 0 === wC && (wC = {});
-       var nC = QC({}, FC(ZC), wC),
-         fC = function(CC, zC, ZC, wC, bC) {
-           var nC = [].concat(zC),
-             fC = MC(CC, ZC, wC),
-             oC = fC.compilerHost,
-             qC = fC.updateFile,
-             FC = fC.deleteFile,
-             WC = new Map,
-             NC = 0,
-             gC = QC({}, oC, {
-               getProjectVersion: function() {
-                 return NC.toString()
-               },
-               getCompilationSettings: function() {
- ... (11 more removed lines; see GitHub link above)
+     function Si(pp, ip) {
+       const {
+         t: cp
+       } = (0, Ii.H)();
+       (0, kp.f)("CodeEditorInsertText", (Op => {
+         let {
+           text: op,
+           focus: Ip
+         } = Op;
+         const Sp = pp.current,
+           xp = null !== Sp && void 0 !== Sp && Sp.dom.isConnected ? function(pp, ip) {
+             if (!ii(pp)) return null;
+             const {
+               from: cp,
+               to: Op
+             } = pp.selection.main, op = cp + ip.length;
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L63-L64` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L278-L279) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L63-L64)

```diff
-               getScriptVersion: function(CC) {
-                 return WC.get(CC) || "0"
+               selection: {
+                 anchor: op
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L66` → after: `L281-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L281-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L281-L297) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L66)

```diff
-               writeFile: CC.writeFile
+               effects: [Cp.f.scrollIntoView(op, {
+                 y: "center"
+               }), Zp.of({
+                 from: cp,
+                 to: op
+               })],
+               userEvent: "input"
+             }
+           }(Sp.state, op) : null;
+         null !== Sp && null !== xp ? (Sp.dispatch(xp), Ip && Sp.focus(), setTimeout((() => {
+           Sp.dom.isConnected && Sp.dispatch({
+             effects: Zp.of(null)
+           })
+         }), 1500)) : (0, oi.d)(op).then((() => {
+           ip({
+             message: cp("codeEditorWorld:pickCopied", {
+ ... (1 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L68-L77` → after: `L299-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L299-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L299-L452) · [Before (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L68-L77)

```diff
-             SC = {
-               languageServiceHost: gC,
-               updateFile: function(CC) {
-                 NC++, WC.set(CC.fileName, NC.toString()), nC.includes(CC.fileName) || nC.push(CC.fileName), qC(CC)
-               },
-               deleteFile: function(CC) {
-                 NC++, WC.set(CC.fileName, NC.toString());
-                 var zC = nC.indexOf(CC.fileName); - 1 !== zC && nC.splice(zC, 1), FC(CC)
-               }
-             };
+             type: "success"
+           })
+         }), (pp => {
+           console.error("Pick could not copy the coordinates", pp), ip({
+             message: cp("codeEditorWorld:pickPlaceCursor", {
+               coords: op
+             }),
+             type: "warning"
+           })
+         }))
+       }))
+     }
+     var xi = cp(41583);
+     const Li = "#e45649",
+       Yi = "#383a42",
+       Di = "#696c77",
+ ... (138 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L79-L87` → after: `L454-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L454-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L454-L552) · [Before (L79-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L79-L87)

```diff
-         }(CC, zC, nC, ZC, bC),
-         oC = fC.languageServiceHost,
-         qC = fC.updateFile,
-         WC = fC.deleteFile,
-         NC = ZC.createLanguageService(oC),
-         gC = NC.getCompilerOptionsDiagnostics();
-       if (gC.length) {
-         var SC = MC(CC, wC, ZC);
-         throw new Error(ZC.formatDiagnostics(gC, SC.compilerHost))
+         }
+       }),
+       ji = [{
+         action: "explain",
+         label: "Explain this"
+       }, {
+         action: "fix",
+         label: "Fix this"
+       }, {
+         action: "change",
+         label: "Change this\u2026"
+       }];
+ 
+     function ki(pp, ip) {
+       return [ui, Ip.m.fromClass(class {
+         constructor(pp) {
+ ... (83 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L89-L114` → after: `L554-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L554-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L554-L559) · [Before (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L89-L114)

```diff
-       return {
-         name: "vfs",
-         sys: CC,
-         languageService: NC,
-         getSourceFile: function(CC) {
-           var zC;
-           return null == (zC = NC.getProgram()) ? void 0 : zC.getSourceFile(CC)
-         },
-         createFile: function(CC, zC) {
-           qC(ZC.createSourceFile(CC, zC, nC.target, !1))
-         },
-         updateFile: function(CC, zC, QC) {
-           var wC = NC.getProgram().getSourceFile(CC);
-           if (!wC) throw new Error("Did not find a source file for " + CC);
-           var bC = wC.text,
-             nC = null != QC ? QC : ZC.createTextSpan(0, bC.length),
- ... (10 more removed lines; see GitHub link above)
+       const Op = [];
+       if (Op.push(...cp(pp.prefixDisplayParts, Mi.text)), pp.parameters.length > 0) {
+         Op.push("\n");
+         for (let op = 0; op < pp.parameters.length; op++) {
+           const Ip = pp.parameters[op];
+           Op.push("\t"), Op.push(...cp(Ip.displayParts, Mi.parameter, null !== ip && op !== ip)), Op.push("\n")
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L120` → after: `L581-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L581-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L581-L593) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L120)

```diff
-       throw new Error("Method '" + CC + "' is not implemented.")
+       return !!pp && ((0, ep.p)(pp) || (0, ep.m)(pp))
+     }
+ 
+     function fi(pp, ip, cp) {
+       return () => {
+         let Op = [...ip.languageService.getSemanticDiagnostics(cp), ...ip.languageService.getSyntacticDiagnostics(cp)];
+         return Op = Op.filter((pp => !(0, mp.G)(pp.start) && !(0, mp.G)(pp.length) && !Xi.has(pp.code))), pp || (Op = Op.filter((pp => !li.has(pp.code)))), Op.map((pp => ({
+           from: pp.start,
+           to: pp.start + pp.length,
+           message: "string" === typeof pp.messageText ? pp.messageText : pp.messageText.messageText,
+           severity: Qi.has(pp.code) ? "warning" : "error"
+         })))
+       }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L124-L128` → after: `L597-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L597-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L597-L635) · [Before (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L124-L128)

```diff
-       return function() {
-         for (var ZC = arguments.length, QC = new Array(ZC), wC = 0; wC < ZC; wC++) QC[wC] = arguments[wC];
-         var bC = zC.apply(void 0, QC),
-           fC = "string" === typeof bC ? bC.slice(0, 80) + "..." : bC;
-         return nC.apply(void 0, ["> " + CC].concat(QC)), nC("< " + fC), bC
+       return cp => {
+         var Op, op;
+         const Ip = pp.languageService.getCompletionsAtPosition(ip, cp.pos, {});
+         if (!Ip) return {
+           from: cp.pos,
+           options: []
+         };
+         let Sp = null !== (Op = null === (op = Ip.optionalReplacementSpan) || void 0 === op ? void 0 : op.start) && void 0 !== Op ? Op : cp.pos;
+         if (!Ip.optionalReplacementSpan) {
+           const pp = cp.state.doc.sliceString(0, cp.pos);
+           for (; Sp > 0 && /[\w$]/.test(pp[Sp - 1]);) Sp--
+         }
+         return Ip.entries = Ip.entries.filter((pp => pp.kind !== Up().ScriptElementKind.warning)), {
+           from: Sp,
+           options: Ip.entries.map((Op => {
+             var op, Ip, xp, Lp;
+ ... (23 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L151-L195` → after: `L640-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L640-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L640-L654) · [Before (L151-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L151-L195)

```diff
-       return {
-         args: [],
-         createDirectory: function() {
-           return oC("createDirectory")
-         },
-         directoryExists: qC("directoryExists", (function(zC) {
-           return Array.from(CC.keys()).some((function(CC) {
-             return CC.startsWith(zC)
-           }))
-         })),
-         exit: function() {
-           return oC("exit")
-         },
-         fileExists: qC("fileExists", (function(zC) {
-           return CC.has(zC) || CC.has(WC(zC))
-         })),
- ... (29 more removed lines; see GitHub link above)
+       return ip => {
+         const cp = document.createElement("div");
+         cp.className = "CodeEditorTooltip";
+         let Op = !1;
+         return queueMicrotask((() => {
+           Op || (xp.render((0, mi.jsx)(Pp.e, {
+             text: pp
+           }), cp), ip.requestMeasure())
+         })), {
+           dom: cp,
+           destroy() {
+             Op = !0, queueMicrotask((() => {
+               xp.unmountComponentAtNode(cp)
+             }))
+           }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L201-L218` → after: `L660-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L660-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L660-L726) · [Before (L201-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L201-L218)

```diff
-       var wC = new Map;
-       return {
-         compilerHost: QC({}, CC, {
-           getCanonicalFileName: function(CC) {
-             return CC
-           },
-           getDefaultLibFileName: function() {
-             return "/" + ZC.getDefaultLibFileName(zC)
-           },
-           getNewLine: function() {
-             return CC.newLine
-           },
-           getSourceFile: function(QC, bC) {
-             var nC, fC;
-             return wC.get(QC) || (fC = ZC.createSourceFile(QC, CC.readFile(QC), null != (nC = null != bC ? bC : zC.target) ? nC : FC(ZC).target, !1), wC.set(fC.fileName, fC), fC)
-           },
- ... (2 more removed lines; see GitHub link above)
+       return Op => {
+         var op;
+         if (!ip) return [];
+         const Ip = null === (op = Op.selection.By[0]) || void 0 === op ? void 0 : op.head;
+         if (void 0 === Ip) return [];
+         const Sp = pp.languageService.getSignatureHelpItems(cp, Ip, {});
+         if (!Sp || !Sp.items.length) return [];
+         const xp = Sp.applicableSpan.start - Sp.items[0].prefixDisplayParts.map((pp => pp.text)).join("").length,
+           Lp = Sp.applicableSpan.start,
+           Yp = Op.doc.lineAt(Ip),
+           Dp = Yp.from,
+           Ap = Math.min(Yp.to, Ip);
+         let Pp, Wp;
+         return xp < Dp ? (Pp = Dp, Wp = Ap) : (Pp = xp, Wp = Lp), [{
+           pos: Pp,
+           end: Wp,
+ ... (51 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L220-L227` → after: `L728-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L728-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/297.js#L728-L736) · [Before (L220-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/297.js#L220-L227)

```diff
-         }),
-         updateFile: function(zC) {
-           var ZC = wC.has(zC.fileName);
-           return CC.writeFile(zC.fileName, zC.text), wC.set(zC.fileName, zC), ZC
-         },
-         deleteFile: function(zC) {
-           var ZC = wC.has(zC.fileName);
-           return wC.delete(zC.fileName), CC.deleteFile(zC.fileName), ZC
+         });
+         if (Ip.documentation) {
+           Lp.push("\n\n");
+           for (const pp of Ip.documentation) Lp.push({
+             str: pp.text,
+             style: {
+               color: Mi.docs
+             }
+           })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/298.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/298.js` (867 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4-L2269` → after: `L4-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L4-L79) · [Before (L4-L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L4-L2269)

```diff
-   41203: (CC, zC, ZC) => {
-     var QC = "/index.js",
-       wC = {};
-     (CC => {
-       var zC = Object.defineProperty,
-         wC = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (CC, ZC) => {
-           for (var QC in ZC) zC(CC, QC, {
-             get: ZC[QC],
-             enumerable: !0
-           })
-         }),
-         bC = {};
-       wC(bC, {
-         ANONYMOUS: () => j6,
-         AccessFlags: () => fb,
-         AssertionLevel: () => RZ,
- ... (2250 more removed lines; see GitHub link above)
+   41541: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Ji,
+       g: () => Ri,
+       h: () => di,
+       l: () => Lp,
+       o: () => Bi,
+       r: () => Yp,
+       u: () => yi
+     });
+     var Op = cp(41548),
+       op = cp(41556),
+       Ip = cp(41566);
+     class Sp {
+       constructor(pp, ip, cp, Op) {
+         this.state = pp, this.pos = ip, this.explicit = cp, this.view = Op, this.abortListeners = [], this.abortOnDocChange = !1
+ ... (60 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2272-L2277` → after: `L83-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L83-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L83-L89) · [Before (L2272-L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2272-L2277)

```diff
-       function NC(CC, zC) {
-         if (void 0 !== CC)
-           for (let ZC = 0; ZC < CC.length; ZC++) {
-             const QC = zC(CC[ZC], ZC);
-             if (QC) return QC
-           }
+     function Yp(pp, ip) {
+       return cp => {
+         for (let ip = (0, Ip.kb)(cp.state).resolveInner(cp.pos, -1); ip; ip = ip.parent) {
+           if (pp.indexOf(ip.name) > -1) return null;
+           if (ip.type.isTop) break
+         }
+         return ip(cp)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2279-L2284` → after: `L91-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L91-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L91-L127) · [Before (L2279-L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2279-L2284)

```diff
- 
-       function MC(CC, zC) {
-         if (void 0 !== CC)
-           for (let ZC = CC.length - 1; ZC >= 0; ZC--) {
-             const QC = zC(CC[ZC], ZC);
-             if (QC) return QC
+     }
+     class Dp {
+       constructor(pp, ip, cp, Op) {
+         this.completion = pp, this.source = ip, this.match = cp, this.score = Op
+       }
+     }
+ 
+     function Ap(pp) {
+       return pp.selection.main.from
+     }
+ 
+     function Pp(pp, ip) {
+       var cp;
+       let {
+         source: Op
+       } = pp, op = ip && "^" != Op[0], Ip = "$" != Op[Op.length - 1];
+ ... (21 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2286-L2292` → after: `L129-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L129-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L129-L176) · [Before (L2286-L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2286-L2292)

```diff
-       }
- 
-       function gC(CC, zC) {
-         if (void 0 !== CC)
-           for (let ZC = 0; ZC < CC.length; ZC++) {
-             const QC = zC(CC[ZC], ZC);
-             if (void 0 !== QC) return QC
+         })),
+         scrollIntoView: !0,
+         userEvent: "input.complete"
+       }
+     }
+     const Up = new WeakMap;
+ 
+     function wp(pp) {
+       if (!Array.isArray(pp)) return pp;
+       let ip = Up.get(pp);
+       return ip || Up.set(pp, ip = Lp(pp)), ip
+     }
+     const vp = Op.C.define(),
+       tp = Op.C.define();
+     class Hp {
+       constructor(pp) {
+ ... (32 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2294-L2299` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L178) · [Before (L2294-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2294-L2299)

```diff
-       }
- 
-       function SC(CC, zC) {
-         for (const ZC of CC) {
-           const CC = zC(ZC);
-           if (void 0 !== CC) return CC
+           return this.ret(Sp, [0, Ip])
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2301-L2345` → after: `L180-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L180-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L180-L187) · [Before (L2301-L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2301-L2345)

```diff
-       }
- 
-       function pC(CC, zC, ZC) {
-         let QC = ZC;
-         if (CC) {
-           let ZC = 0;
-           for (const wC of CC) QC = zC(QC, wC, ZC), ZC++
-         }
-         return QC
-       }
- 
-       function PC(CC, zC, ZC) {
-         const QC = [];
-         PQ.assertEqual(CC.length, zC.length);
-         for (let wC = 0; wC < CC.length; wC++) QC.push(ZC(CC[wC], zC[wC], wC));
-         return QC
- ... (29 more removed lines; see GitHub link above)
+         let xp = pp.indexOf(this.pattern);
+         if (0 == xp) return this.ret(pp.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
+         let Lp = ip.length,
+           Yp = 0;
+         if (xp < 0) {
+           for (let Ip = 0, Sp = Math.min(pp.length, 200); Ip < Sp && Yp < Lp;) {
+             let Sp = (0, Op.J)(pp, Ip);
+             Sp != ip[Yp] && Sp != cp[Yp] || (op[Yp++] = Ip), Ip += (0, Op.N)(Sp)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2349-L2361` → after: `L259-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L259-L261) · [Before (L2349-L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2349-L2361)

```diff
-       function JC(CC, zC, ZC) {
-         if (void 0 === CC) return -1;
-         for (let QC = ZC ?? 0; QC < CC.length; QC++)
-           if (zC(CC[QC], QC)) return QC;
-         return -1
-       }
- 
-       function IC(CC, zC, ZC) {
-         if (void 0 === CC) return -1;
-         for (let QC = ZC ?? CC.length - 1; QC >= 0; QC--)
-           if (zC(CC[QC], QC)) return QC;
-         return -1
-       }
+     function jp(pp, ip) {
+       return pp ? ip ? pp + " " + ip : pp : ip
+     }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2363-L2368` → after: `L263-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L263-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L263-L365) · [Before (L2363-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2363-L2368)

```diff
-       function iC(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AZ;
-         if (void 0 !== CC)
-           for (let QC = 0; QC < CC.length; QC++)
-             if (ZC(CC[QC], zC)) return !0;
-         return !1
+     function kp(pp, ip, cp, Op, Ip, Sp) {
+       let xp, Lp, Yp = pp.textDirection == op.e.RTL,
+         Dp = Yp,
+         Ap = !1,
+         Pp = "top",
+         Wp = ip.left - Ip.left,
+         yp = Ip.right - ip.right,
+         Up = Op.right - Op.left,
+         wp = Op.bottom - Op.top;
+       if (Dp && Wp < Math.min(Up, yp) ? Dp = !1 : !Dp && yp < Math.min(Up, Wp) && (Dp = !0), Up <= (Dp ? Wp : yp)) xp = Math.max(Ip.top, Math.min(cp.top, Ip.bottom - wp)) - ip.top, Lp = Math.min(400, Dp ? Wp : yp);
+       else {
+         Ap = !0, Lp = Math.min(400, (Yp ? ip.right : Ip.right - ip.left) - 30);
+         let pp = Ip.bottom - ip.bottom;
+         pp >= wp || pp > ip.top ? xp = cp.bottom - ip.top : (Pp = "bottom", xp = ip.bottom - cp.top)
+       }
+       return {
+ ... (87 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2370-L2374` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L367-L368) · [Before (L2370-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2370-L2374)

```diff
- 
-       function vC(CC, zC, ZC) {
-         for (let QC = ZC ?? 0; QC < CC.length; QC++)
-           if (iC(zC, CC.charCodeAt(QC))) return QC;
-         return -1
+       mount() {
+         this.updateSel()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2376-L2383` → after: `L370-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L370-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L370-L373) · [Before (L2376-L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2376-L2383)

```diff
- 
-       function eC(CC, zC) {
-         let ZC = 0;
-         if (void 0 !== CC)
-           for (let QC = 0; QC < CC.length; QC++) {
-             zC(CC[QC], QC) && ZC++
-           }
-         return ZC
+       showOptions(pp, ip) {
+         this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(pp, ip, this.range)), this.list.addEventListener("scroll", (() => {
+           this.info && this.view.requestMeasure(this.placeInfoReq)
+         }))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2385-L2398` → after: `L375-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L375-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L375-L385) · [Before (L2385-L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2385-L2398)

```diff
- 
-       function hC(CC, zC) {
-         if (void 0 !== CC) {
-           const ZC = CC.length;
-           let QC = 0;
-           for (; QC < ZC && zC(CC[QC]);) QC++;
-           if (QC < ZC) {
-             const wC = CC.slice(0, QC);
-             for (QC++; QC < ZC;) {
-               const ZC = CC[QC];
-               zC(ZC) && wC.push(ZC), QC++
-             }
-             return wC
-           }
+       update(pp) {
+         var ip;
+         let cp = pp.state.field(this.stateField),
+           Op = pp.startState.field(this.stateField);
+         if (this.updateTooltipClass(pp.state), cp != Op) {
+           let {
+             options: op,
+             selected: Ip,
+             disabled: Sp
+           } = cp.open;
+           Op.open && Op.open.options == op || (this.range = Rp(op.length, Ip, pp.state.facet(ep).maxRenderedOptions), this.showOptions(op, cp.id)), this.updateSel(), Sp != (null === (ip = Op.open) || void 0 === ip ? void 0 : ip.disabled) && this.dom.classList.toggle("cm-tooltip-a … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2402-L2406` → after: `L388-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L388-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L388-L394) · [Before (L2402-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2402-L2406)

```diff
- 
-       function KC(CC, zC) {
-         let ZC = 0;
-         for (let QC = 0; QC < CC.length; QC++) zC(CC[QC], QC, CC) && (CC[ZC] = CC[QC], ZC++);
-         CC.length = ZC
+       updateTooltipClass(pp) {
+         let ip = this.tooltipClass(pp);
+         if (ip != this.currentClass) {
+           for (let pp of this.currentClass.split(" ")) pp && this.dom.classList.remove(pp);
+           for (let pp of ip.split(" ")) pp && this.dom.classList.add(pp);
+           this.currentClass = ip
+         }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2408-L2410` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L396-L397) · [Before (L2408-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2408-L2410)

```diff
- 
-       function YC(CC) {
-         CC.length = 0
+       positioned(pp) {
+         this.space = pp, this.info && this.view.requestMeasure(this.placeInfoReq)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2412-L2417` → after: `L399-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L399-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L399-L416) · [Before (L2412-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2412-L2417)

```diff
- 
-       function dC(CC, zC) {
-         let ZC;
-         if (void 0 !== CC) {
-           ZC = [];
-           for (let QC = 0; QC < CC.length; QC++) ZC.push(zC(CC[QC], QC))
+       updateSel() {
+         let pp = this.view.state.field(this.stateField),
+           ip = pp.open;
+         (ip.selected > -1 && ip.selected < this.range.from || ip.selected >= this.range.to) && (this.range = Rp(ip.options.length, ip.selected, this.view.state.facet(ep).maxRenderedOptions), this.showOptions(ip.options, pp.id));
+         let cp = this.updateSelectedOption(ip.selected);
+         if (cp) {
+           this.destroyInfo();
+           let {
+             completion: Op
+           } = ip.options[ip.selected], {
+             info: Ip
+           } = Op;
+           if (!Ip) return;
+           let Sp = "string" === typeof Ip ? document.createTextNode(Ip) : Ip(Op);
+           if (!Sp) return;
+           "then" in Sp ? Sp.then((ip => {
+ ... (2 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2421-L2435` → after: `L419-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L419-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L419-L455) · [Before (L2421-L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2421-L2435)

```diff
- 
-       function* mC(CC, zC) {
-         for (const ZC of CC) yield zC(ZC)
-       }
- 
-       function HC(CC, zC) {
-         if (void 0 !== CC)
-           for (let ZC = 0; ZC < CC.length; ZC++) {
-             const QC = CC[ZC],
-               wC = zC(QC, ZC);
-             if (QC !== wC) {
-               const QC = CC.slice(0, ZC);
-               for (QC.push(wC), ZC++; ZC < CC.length; ZC++) QC.push(zC(CC[ZC], ZC));
-               return QC
-             }
+       addInfoPane(pp, ip) {
+         this.destroyInfo();
+         let cp = this.info = document.createElement("div");
+         if (cp.className = "cm-tooltip cm-completionInfo", cp.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != pp.nodeType) cp.appendChild(pp), this.infoDestroy = null;
+         else {
+           let {
+             dom: ip,
+             destroy: Op
+           } = pp;
+           cp.appendChild(ip), this.infoDestroy = Op || null
+         }
+         this.dom.appendChild(cp), this.view.requestMeasure(this.placeInfoReq)
+       }
+       updateSelectedOption(pp) {
+         let ip = null;
+         for (let cp = this.list.firstChild, Op = this.range.from; cp; cp = cp.nextSibling, Op++) "LI" == cp.nodeName && cp.id ? Op == pp ? cp.hasAttribute("aria-selected") || (cp.setAttribute("aria-selected", "true"), ip = cp) : cp.hasAttribute("aria-selected") && (cp.removeAttri … [truncated]
+ ... (21 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2446` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L458) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2446)

```diff
-         return zC
+         return Op.top > Math.min(op.bottom, ip.bottom) - 10 || Op.bottom < Math.max(op.top, ip.top) + 10 ? null : this.view.state.facet(ep).positionInfo(this.view, ip, Op, cp, op, this.dom)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2448-L2456` → after: `L460-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L460-L461) · [Before (L2448-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2448-L2456)

```diff
- 
-       function lC(CC, zC) {
-         let ZC;
-         if (void 0 !== CC)
-           for (let QC = 0; QC < CC.length; QC++) {
-             const wC = zC(CC[QC], QC);
-             wC && (ZC = ZZ(wC) ? Fz(ZC, wC) : fz(ZC, wC))
-           }
-         return ZC ?? qC
+       placeInfo(pp) {
+         this.info && (pp ? (pp.style && (this.info.style.cssText = pp.style), this.info.className = "cm-tooltip cm-completionInfo " + (pp.class || "")) : this.info.style.cssText = "top: -1e6px")
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2458-L2464` → after: `L463-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L463-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L463-L482) · [Before (L2458-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2458-L2464)

```diff
- 
-       function XC(CC, zC) {
-         const ZC = [];
-         if (void 0 !== CC)
-           for (let QC = 0; QC < CC.length; QC++) {
-             const wC = zC(CC[QC], QC);
-             wC && (ZZ(wC) ? Fz(ZC, wC) : ZC.push(wC))
+       createListBox(pp, ip, cp) {
+         const Op = document.createElement("ul");
+         Op.id = ip, Op.setAttribute("role", "listbox"), Op.setAttribute("aria-expanded", "true"), Op.setAttribute("aria-label", this.view.state.phrase("Completions")), Op.addEventListener("mousedown", (pp => {
+           pp.target == Op && pp.preventDefault()
+         }));
+         let op = null;
+         for (let Ip = cp.from; Ip < cp.to; Ip++) {
+           let {
+             completion: Sp,
+             match: xp
+           } = pp[Ip], {
+             section: Lp
+           } = Sp;
+           if (Lp) {
+             let pp = "string" == typeof Lp ? Lp : Lp.name;
+             if (pp != op && (Ip > cp.from || 0 == cp.from))
+ ... (4 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2466-L2482` → after: `L484-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L484-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L484-L490) · [Before (L2466-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2466-L2482)

```diff
-         return ZC
-       }
- 
-       function* cC(CC, zC) {
-         for (const ZC of CC) {
-           const CC = zC(ZC);
-           CC && (yield* CC)
-         }
-       }
- 
-       function uC(CC, zC) {
-         let ZC;
-         if (void 0 !== CC)
-           for (let QC = 0; QC < CC.length; QC++) {
-             const wC = CC[QC],
-               bC = zC(wC, QC);
- ... (1 more removed lines; see GitHub link above)
+           const Yp = Op.appendChild(document.createElement("li"));
+           Yp.id = ip + "-" + Ip, Yp.setAttribute("role", "option");
+           let Dp = this.optionClass(Sp);
+           Dp && (Yp.className = Dp);
+           for (let pp of this.optionContent) {
+             let ip = pp(Sp, this.view.state, this.view, xp);
+             ip && Yp.appendChild(ip)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2494` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L493) · [Before (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2494)

```diff
-         return ZC
+         return cp.from && Op.classList.add("cm-completionListIncompleteTop"), cp.to < pp.length && Op.classList.add("cm-completionListIncompleteBottom"), Op
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2496-L2504` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L495-L496) · [Before (L2496-L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2496-L2504)

```diff
- 
-       function sC(CC, zC) {
-         const ZC = [];
-         if (void 0 !== CC)
-           for (let QC = 0; QC < CC.length; QC++) {
-             const wC = zC(CC[QC], QC);
-             void 0 !== wC && ZC.push(wC)
-           }
-         return ZC
+       destroyInfo() {
+         this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2506-L2511` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L498-L499) · [Before (L2506-L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2506-L2511)

```diff
- 
-       function* TC(CC, zC) {
-         for (const ZC of CC) {
-           const CC = zC(ZC);
-           void 0 !== CC && (yield CC)
-         }
+       destroy() {
+         this.destroyInfo()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2514-L2518` → after: `L503-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L503-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L503-L505) · [Before (L2514-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2514-L2518)

```diff
-       function aC(CC, zC, ZC) {
-         if (CC.has(zC)) return CC.get(zC);
-         const QC = ZC();
-         return CC.set(zC, QC), QC
-       }
+     function Mp(pp, ip) {
+       return cp => new qp(cp, pp, ip)
+     }
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2520-L2521` → after: `L507-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L507-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L507-L512) · [Before (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2520-L2521)

```diff
-       function tC(CC, zC) {
-         return !CC.has(zC) && (CC.add(zC), !0)
+     function Cp(pp) {
+       return 100 * (pp.boost || 0) + (pp.apply ? 10 : 0) + (pp.info ? 5 : 0) + (pp.type ? 1 : 0)
+     }
+     class Ep {
+       constructor(pp, ip, cp, Op, op, Ip) {
+         this.options = pp, this.attrs = ip, this.tooltip = cp, this.timestamp = Op, this.selected = op, this.disabled = Ip
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2523-L2525` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L514-L515) · [Before (L2523-L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2523-L2525)

```diff
- 
-       function* DC(CC) {
-         yield CC
+       setSelected(pp, ip) {
+         return pp == this.selected || pp >= this.options.length ? this : new Ep(this.options, Jp(ip, pp), this.tooltip, this.timestamp, pp, this.disabled)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2527-L2543` → after: `L517-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L517-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L517-L566) · [Before (L2527-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2527-L2543)

```diff
- 
-       function jC(CC, zC, ZC) {
-         let QC;
-         if (void 0 !== CC) {
-           QC = [];
-           const wC = CC.length;
-           let bC, nC, fC = 0,
-             oC = 0;
-           for (; fC < wC;) {
-             for (; oC < wC;) {
-               if (nC = zC(CC[oC], oC), 0 === oC) bC = nC;
-               else if (nC !== bC) break;
-               oC++
-             }
-             if (fC < oC) {
-               const zC = ZC(CC.slice(fC, oC), bC, fC, oC);
- ... (1 more removed lines; see GitHub link above)
+       static build(pp, ip, cp, Op, op, Ip) {
+         if (Op && !Ip && pp.some((pp => pp.isPending))) return Op.setDisabled();
+         let Sp = function(pp, ip) {
+           let cp = [],
+             Op = null,
+             op = null,
+             Ip = pp => {
+               cp.push(pp);
+               let {
+                 section: ip
+               } = pp.completion;
+               if (ip) {
+                 Op || (Op = []);
+                 let pp = "string" == typeof ip ? ip : ip.name;
+                 Op.some((ip => ip.name == pp)) || Op.push("string" == typeof ip ? {
+                   name: pp
+ ... (34 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2548` → after: `L588-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L588-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L588-L592) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2548)

```diff
-         return QC
+         return new Ep(Sp, Jp(cp, xp), {
+           pos: pp.reduce(((pp, ip) => ip.hasResult() ? Math.min(pp, ip.from) : pp), 1e8),
+           create: np,
+           above: op.aboveCursor
+         }, Op ? Op.timestamp : Date.now(), xp, !1)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2550-L2557` → after: `L594-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L594-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L594-L598) · [Before (L2550-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2550-L2557)

```diff
- 
-       function yC(CC, zC) {
-         if (void 0 === CC) return;
-         const ZC = new Map;
-         return CC.forEach(((CC, QC) => {
-           const [wC, bC] = zC(QC, CC);
-           ZC.set(wC, bC)
-         })), ZC
+       map(pp) {
+         return new Ep(this.options, this.attrs, {
+           ...this.tooltip,
+           pos: pp.mapPos(this.tooltip.pos)
+         }, this.timestamp, this.selected, this.disabled)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2559-L2566` → after: `L600-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L600-L601) · [Before (L2559-L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2559-L2566)

```diff
- 
-       function LC(CC, zC) {
-         if (void 0 !== CC) {
-           if (void 0 === zC) return CC.length > 0;
-           for (let ZC = 0; ZC < CC.length; ZC++)
-             if (zC(CC[ZC])) return !0
-         }
-         return !1
+       setDisabled() {
+         return new Ep(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2568-L2572` → after: `L603-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L603-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L603-L606) · [Before (L2568-L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2568-L2572)

```diff
- 
-       function UC(CC, zC, ZC) {
-         let QC;
-         for (let wC = 0; wC < CC.length; wC++) zC(CC[wC]) ? QC = void 0 === QC ? wC : QC : void 0 !== QC && (ZC(QC, wC), QC = void 0);
-         void 0 !== QC && ZC(QC, CC.length)
+     }
+     class Xp {
+       constructor(pp, ip, cp) {
+         this.active = pp, this.id = ip, this.open = cp
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2574-L2576` → after: `L608-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L608-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L608-L609) · [Before (L2574-L2576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2574-L2576)

```diff
- 
-       function BC(CC, zC) {
-         return void 0 === zC || 0 === zC.length ? CC : void 0 === CC || 0 === CC.length ? zC : [...CC, ...zC]
+       static start() {
+         return new Xp(Bp, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2579` → after: `L644-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L644-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L644-L681) · [Before (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2579)

```diff
-       function OC(CC, zC) {
+     function Jp(pp, ip) {
+       let cp = {
+         "aria-autocomplete": "list",
+         "aria-haspopup": "listbox",
+         "aria-controls": pp
+       };
+       return ip > -1 && (cp["aria-activedescendant"] = pp + "-" + ip), cp
+     }
+     const Bp = [];
+ 
+     function Np(pp, ip) {
+       if (pp.isUserEvent("input.complete")) {
+         let cp = pp.annotation(Wp);
+         if (cp && ip.activateOnCompletion(cp)) return 12
+       }
+       let cp = pp.isUserEvent("input.type");
+ ... (22 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2582-L2584` → after: `L684-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L684-L685) · [Before (L2582-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2582-L2584)

```diff
- 
-       function kC(CC) {
-         return CC.map(OC)
+       updateFor(pp, ip) {
+         return this.map(pp.changes)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2586-L2599` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L687-L688) · [Before (L2586-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2586-L2599)

```diff
- 
-       function VC(CC, zC, ZC) {
-         const QC = kC(CC);
-         ! function(CC, zC, ZC) {
-           zC.sort(((zC, QC) => ZC(CC[zC], CC[QC]) || iZ(zC, QC)))
-         }(CC, QC, ZC);
-         let wC = CC[QC[0]];
-         const bC = [QC[0]];
-         for (let nC = 1; nC < QC.length; nC++) {
-           const ZC = QC[nC],
-             fC = CC[ZC];
-           zC(wC, fC) || (bC.push(ZC), wC = fC)
-         }
-         return bC.sort(), bC.map((zC => CC[zC]))
+       map(pp) {
+         return this
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2601-L2607` → after: `L690-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L690-L691) · [Before (L2601-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2601-L2607)

```diff
- 
-       function Cz(CC, zC, ZC) {
-         return 0 === CC.length ? [] : 1 === CC.length ? CC.slice() : ZC ? VC(CC, zC, ZC) : function(CC, zC) {
-           const ZC = [];
-           for (let QC = 0; QC < CC.length; QC++) Wz(ZC, CC[QC], zC);
-           return ZC
-         }(CC, zC)
+       touches(pp) {
+         return pp.changes.touchesRange(Ap(pp.state))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2609-L2611` → after: `L693-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L693-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L693-L696) · [Before (L2609-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2609-L2611)

```diff
- 
-       function zz() {
-         return []
+     }
+     class fp extends Tp {
+       constructor(pp, ip, cp, Op, op, Ip) {
+         super(pp, 3, ip), this.limit = cp, this.result = Op, this.from = op, this.to = Ip
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2613-L2625` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L698-L699) · [Before (L2613-L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2613-L2625)

```diff
- 
-       function Zz(CC, zC, ZC, QC, wC) {
-         if (0 === CC.length) return CC.push(zC), !0;
-         const bC = hz(CC, zC, NZ, ZC);
-         if (bC < 0) {
-           if (QC && !wC) {
-             const ZC = ~bC;
-             if (ZC > 0 && QC(zC, CC[ZC - 1])) return !1;
-             if (ZC < CC.length && QC(zC, CC[ZC])) return CC.splice(ZC, 1, zC), !0
-           }
-           return CC.splice(~bC, 0, zC), !0
-         }
-         return !!wC && (CC.splice(bC, 0, zC), !0)
+       hasResult() {
+         return !0
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2628-L2640` → after: `L734-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L734-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L734-L836) · [Before (L2628-L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2628-L2640)

```diff
-       function Qz(CC, zC, ZC) {
-         return function(CC, zC) {
-           if (0 === CC.length) return qC;
-           let ZC = CC[0];
-           const QC = [ZC];
-           for (let wC = 1; wC < CC.length; wC++) {
-             const bC = CC[wC];
-             switch (zC(bC, ZC)) {
-               case !0:
-               case 0:
-                 continue;
-               case -1:
-                 return PQ.fail("Array is unsorted.")
+     function ap(pp, ip) {
+       const cp = ip.completion.apply || ip.completion.label;
+       let Op = pp.state.field(hp).active.find((pp => pp.source == ip.source));
+       return Op instanceof fp && ("string" == typeof cp ? pp.dispatch({
+         ...yp(pp.state, cp, Op.from, Op.to),
+         annotations: Wp.of(ip.completion)
+       }) : cp(pp, ip.completion, Op.from, Op.to), !0)
+     }
+     const np = Mp(hp, ap);
+ 
+     function Fp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
+       return cp => {
+         let Op = cp.state.field(hp, !1);
+         if (!Op || !Op.open || Op.open.disabled || Date.now() - Op.open.timestamp < cp.state.facet(ep).interactionDelay) return !1;
+         let Ip, Sp = 1;
+ ... (87 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2642` → after: `L838-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L838-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L838-L984) · [Before (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2642)

```diff
-             QC.push(ZC = bC)
+             let Sp = Op.active.find((pp => pp.source == Ip.active.source));
+             if (Sp && Sp.isPending)
+               if (null == Ip.done) {
+                 let pp = new Tp(Ip.active.source, 0);
+                 for (let ip of Ip.updates) pp = pp.update(ip, cp);
+                 pp.isPending || ip.push(pp)
+               } else this.startQuery(Sp)
+           }(ip.length || Op.open && Op.open.disabled) && this.view.dispatch({
+             effects: bp.of(ip)
+           })
+         }
+       }, {
+         eventHandlers: {
+           blur(pp) {
+             let ip = this.view.state.field(hp, !1);
+             if (ip && ip.tooltip && this.view.state.facet(ep).closeOnBlur) {
+ ... (131 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2644-L2654` → after: `L986-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L986-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L986-L1077) · [Before (L2644-L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2644-L2654)

```diff
-           return QC
-         }(Mz(CC, zC), ZC ?? zC ?? dZ)
-       }
- 
-       function wz(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AZ;
-         if (void 0 === CC || void 0 === zC) return CC === zC;
-         if (CC.length !== zC.length) return !1;
-         for (let QC = 0; QC < CC.length; QC++)
-           if (!ZC(CC[QC], zC[QC], QC)) return !1;
-         return !0
+         },
+         ".cm-completionIcon-class": {
+           "&:after": {
+             content: "'\u25cb'"
+           }
+         },
+         ".cm-completionIcon-interface": {
+           "&:after": {
+             content: "'\u25cc'"
+           }
+         },
+         ".cm-completionIcon-variable": {
+           "&:after": {
+             content: "'\ud835\udc65'"
+           }
+         },
+ ... (76 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2656-L2662` → after: `L1079-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1079-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1079-L1103) · [Before (L2656-L2662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2656-L2662)

```diff
- 
-       function bz(CC) {
-         let zC;
-         if (void 0 !== CC)
-           for (let ZC = 0; ZC < CC.length; ZC++) {
-             const QC = CC[ZC];
-             (zC ?? !QC) && (zC ?? (zC = CC.slice(0, ZC)), QC && zC.push(QC))
+       static parse(pp) {
+         let ip, cp = [],
+           Op = [],
+           op = [];
+         for (let Ip of pp.split(/\r\n?|\n/)) {
+           for (; ip = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(Ip);) {
+             let pp = ip[1] ? +ip[1] : null,
+               Sp = ip[2] || ip[3] || "",
+               xp = -1,
+               Lp = Sp.replace(/\\[{}]/g, (pp => pp[1]));
+             for (let ip = 0; ip < cp.length; ip++)(null != pp ? cp[ip].seq == pp : Lp && cp[ip].name == Lp) && (xp = ip);
+             if (xp < 0) {
+               let ip = 0;
+               for (; ip < cp.length && (null == pp || null != cp[ip].seq && cp[ip].seq < pp);) ip++;
+               cp.splice(ip, 0, {
+                 seq: pp,
+ ... (9 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2664` → after: `L1105-L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1105-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1105-L1110) · [Before (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2664)

```diff
-         return zC ?? CC
+           Ip = Ip.replace(/\\([{}])/g, ((pp, ip, cp) => {
+             for (let Ip of op) Ip.line == Op.length && Ip.from > cp && (Ip.from--, Ip.to--);
+             return ip
+           })), Op.push(Ip)
+         }
+         return new ii(Op, op)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2666-L2679` → after: `L1112-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1112-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1112-L1120) · [Before (L2666-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2666-L2679)

```diff
- 
-       function nz(CC, zC, ZC) {
-         if (!zC || !CC || 0 === zC.length || 0 === CC.length) return zC;
-         const QC = [];
-         CC: for (let wC = 0, bC = 0; bC < zC.length; bC++) {
-           bC > 0 && PQ.assertGreaterThanOrEqual(ZC(zC[bC], zC[bC - 1]), 0);
-           zC: for (const nC = wC; wC < CC.length; wC++) switch (wC > nC && PQ.assertGreaterThanOrEqual(ZC(CC[wC], CC[wC - 1]), 0), ZC(zC[bC], CC[wC])) {
-             case -1:
-               QC.push(zC[bC]);
-               continue CC;
-             case 0:
-               continue CC;
-             case 1:
-               continue zC
+     }
+     let ci = op.c.widget({
+         widget: new class extends op.l {
+           toDOM() {
+             let pp = document.createElement("span");
+             return pp.className = "cm-snippetFieldPosition", pp
+           }
+           ignoreEvent() {
+             return !1
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2682` → after: `L1123-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1123-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1123-L1129) · [Before (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2682)

```diff
-         return QC
+       }),
+       Oi = op.c.mark({
+         class: "cm-snippetField"
+       });
+     class oi {
+       constructor(pp, ip) {
+         this.By = pp, this.active = ip, this.deco = op.c.set(pp.map((pp => (pp.from == pp.to ? ci : Oi).range(pp.from, pp.to))), !0)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2684-L2686` → after: `L1131-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1131-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1131-L1138) · [Before (L2684-L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2684-L2686)

```diff
- 
-       function fz(CC, zC) {
-         return void 0 === zC ? CC : void 0 === CC ? [zC] : (CC.push(zC), CC)
+       map(pp) {
+         let ip = [];
+         for (let cp of this.By) {
+           let Op = cp.map(pp);
+           if (!Op) return null;
+           ip.push(Op)
+         }
+         return new oi(ip, this.active)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2688-L2690` → after: `L1140-L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1140-L1141) · [Before (L2688-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2688-L2690)

```diff
- 
-       function oz(CC, zC) {
-         return void 0 === CC ? zC : void 0 === zC ? CC : ZZ(CC) ? ZZ(zC) ? BC(CC, zC) : fz(CC, zC) : ZZ(zC) ? fz(zC, CC) : [CC, zC]
+       selectionInsideField(pp) {
+         return pp.By.every((pp => this.By.some((ip => ip.field == this.active && ip.from <= pp.from && ip.to >= pp.to))))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2693-L2694` → after: `L1160-L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1160-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1160-L1186) · [Before (L2693-L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2693-L2694)

```diff
-       function qz(CC, zC) {
-         return zC < 0 ? CC.length + zC : zC
+     function Li(pp, ip) {
+       return Op.l.create(pp.filter((pp => pp.field == ip)).map((pp => Op.l.range(pp.from, pp.to))))
+     }
+ 
+     function Yi(pp) {
+       let ip = ii.parse(pp);
+       return (pp, cp, op, Ip) => {
+         let {
+           text: Sp,
+           By: xp
+         } = ip.instantiate(pp.state, op), {
+           main: Lp
+         } = pp.state.selection, Yp = {
+           changes: {
+             from: op,
+             to: Ip == Lp.from ? Lp.to : Ip,
+ ... (11 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2697-L2701` → after: `L1190-L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1190-L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1190-L1272) · [Before (L2697-L2701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2697-L2701)

```diff
-       function Fz(CC, zC, ZC, QC) {
-         if (void 0 === zC || 0 === zC.length) return CC;
-         if (void 0 === CC) return zC.slice(ZC, QC);
-         ZC = void 0 === ZC ? 0 : qz(zC, ZC), QC = void 0 === QC ? zC.length : qz(zC, QC);
-         for (let wC = ZC; wC < QC && wC < zC.length; wC++) void 0 !== zC[wC] && CC.push(zC[wC]);
+     function Di(pp) {
+       return ip => {
+         let {
+           state: cp,
+           dispatch: Op
+         } = ip, op = cp.field(xi, !1);
+         if (!op || pp < 0 && 0 == op.active) return !1;
+         let Ip = op.active + pp,
+           Sp = pp > 0 && !op.By.some((ip => ip.field == Ip + pp));
+         return Op(cp.update({
+           selection: Li(op.By, Ip),
+           effects: Ii.of(Sp ? null : new oi(op.By, Ip)),
+           scrollIntoView: !0
+         })), !0
+       }
+     }
+ ... (67 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2705-L2706` → after: `L1591-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1591-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1591-L1655) · [Before (L2705-L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2705-L2706)

```diff
-       function Wz(CC, zC, ZC) {
-         return !iC(CC, zC, ZC) && (CC.push(zC), !0)
+     function Yp() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+       return [Lp, Sp.of(Object.assign({
+         generatedID: Math.floor(1e9 * Math.random()).toString(36)
+       }, pp))]
+     }
+ 
+     function Dp(pp, ip) {
+       let {
+         version: cp,
+         unconfirmed: Yp
+       } = pp.field(Lp), {
+         clientID: Dp
+       } = pp.facet(Sp);
+       cp += ip.length;
+       let Ap = [],
+ ... (49 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2708-L2710` → after: `L1657-L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1657-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1657-L1658) · [Before (L2708-L2710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2708-L2710)

```diff
- 
-       function Nz(CC, zC, ZC) {
-         return void 0 !== CC ? (Wz(CC, zC, ZC), CC) : [zC]
+       get context() {
+         return this.curContext ? this.curContext.context : null
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2712-L2714` → after: `L1660-L1661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1660-L1661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1660-L1661) · [Before (L2712-L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2712-L2714)

```diff
- 
-       function Mz(CC, zC) {
-         return 0 === CC.length ? qC : CC.slice().sort(zC)
+       pushState(pp, ip) {
+         this.stack.push(this.state, ip, this.bufferBase + this.buffer.length), this.state = pp
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2716-L2718` → after: `L1663-L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1663-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1663-L1714) · [Before (L2716-L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2716-L2718)

```diff
- 
-       function* gz(CC) {
-         for (let zC = CC.length - 1; zC >= 0; zC--) yield CC[zC]
+       reduce(pp) {
+         var ip;
+         let cp = pp >> 19,
+           Op = 65535 & pp,
+           {
+             parser: op
+           } = this.p,
+           Ip = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
+           Sp = op.dynamicPrecedence(Op);
+         if (Sp && (this.score += Sp), 0 == cp) return this.pushState(op.getGoto(this.state, Op, !0), this.reducePos), Op < op.minRepeatTerm && this.storeNode(Op, this.reducePos, this.reducePos, Ip ? 8 : 4, !0), void this.reduceContext(Op, this.reducePos);
+         let xp = this.stack.length - 3 * (cp - 1) - (262144 & pp ? 6 : 0),
+           Lp = xp ? this.stack[xp - 2] : this.p.By[0].from,
+           Yp = this.reducePos - Lp;
+         Yp >= 2e3 && !(null === (ip = this.p.parser.nodeSet.types[Op]) || void 0 === ip ? void 0 : ip.isAnonymous) && (Lp == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = Yp) : this.p.lastBigReductionSize < Yp && (this.p.bigReductionCou … [truncated]
+         let Dp = xp ? this.stack[xp - 1] : 0,
+           Ap = this.bufferBase + this.buffer.length - Dp;
+ ... (36 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2720-L2724` → after: `L1716-L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1716-L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1716-L1769) · [Before (L2720-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2720-L2724)

```diff
- 
-       function Sz(CC, zC, ZC, QC) {
-         for (; ZC < QC;) {
-           if (CC[ZC] !== zC[ZC]) return !1;
-           ZC++
+       shift(pp, ip, cp, Op) {
+         if (131072 & pp) this.pushState(65535 & pp, this.pos);
+         else if (0 == (262144 & pp)) {
+           let op = pp,
+             {
+               parser: Ip
+             } = this.p;
+           this.pos = Op;
+           let Sp = Ip.stateFlag(op, 1);
+           !Sp && (Op > cp || ip <= Ip.maxNode) && (this.reducePos = Op), this.pushState(op, Sp ? cp : Math.min(cp, this.reducePos)), this.shiftContext(ip, cp), ip <= Ip.maxNode && this.buffer.push(ip, cp, Op, 4)
+         } else this.pos = Op, this.shiftContext(ip, cp), ip <= this.p.parser.maxNode && this.buffer.push(ip, cp, Op, 4)
+       }
+       apply(pp, ip, cp, Op) {
+         65536 & pp ? this.reduce(pp) : this.shift(pp, ip, cp, Op)
+       }
+       useNode(pp, ip) {
+ ... (38 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2726` → after: `L1771-L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1771-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1771-L1778) · [Before (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2726)

```diff
-         return !0
+         let cp = [];
+         for (let Op = 0; Op < ip.length && cp.length < 4; Op += 2) {
+           let pp = ip[Op + 1];
+           if (pp == this.state) continue;
+           let op = this.split();
+           op.pushState(pp, this.pos), op.storeNode(0, op.pos, op.pos, 4, !0), op.shiftContext(ip[Op], this.pos), op.reducePos = this.pos, op.score -= 200, cp.push(op)
+         }
+         return cp
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2728-L2733` → after: `L1780-L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1780-L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1780-L1796) · [Before (L2728-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2728-L2733)

```diff
-       var pz = Array.prototype.at ? (CC, zC) => null == CC ? void 0 : CC.at(zC) : (CC, zC) => {
-         if (void 0 !== CC && (zC = qz(CC, zC)) < CC.length) return CC[zC]
-       };
- 
-       function Pz(CC) {
-         return void 0 === CC || 0 === CC.length ? void 0 : CC[0]
+       forceReduce() {
+         let {
+           parser: pp
+         } = this.p, ip = pp.stateSlot(this.state, 5);
+         if (0 == (65536 & ip)) return !1;
+         if (!pp.validAction(this.state, ip)) {
+           let cp = ip >> 19,
+             Op = 65535 & ip,
+             op = this.stack.length - 3 * cp;
+           if (op < 0 || pp.getGoto(this.stack[op], Op, !1) < 0) {
+             let pp = this.findForcedReduction();
+             if (null == pp) return !1;
+             ip = pp
+           }
+           this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
+         }
+ ... (1 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2735-L2738` → after: `L1798-L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1798-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1798-L1817) · [Before (L2735-L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2735-L2738)

```diff
- 
-       function Gz(CC) {
-         if (void 0 !== CC)
-           for (const zC of CC) return zC
+       findForcedReduction() {
+         let {
+           parser: pp
+         } = this.p, ip = [], cp = (Op, op) => {
+           if (!ip.includes(Op)) return ip.push(Op), pp.allActions(Op, (ip => {
+             if (393216 & ip);
+             else if (65536 & ip) {
+               let cp = (ip >> 19) - op;
+               if (cp > 1) {
+                 let Op = 65535 & ip,
+                   op = this.stack.length - 3 * cp;
+                 if (op >= 0 && pp.getGoto(this.stack[op], Op, !1) >= 0) return cp << 19 | 65536 | Op
+               }
+             } else {
+               let pp = cp(ip, op + 1);
+               if (null != pp) return pp
+ ... (4 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2740-L2742` → after: `L1819-L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1819-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1819-L1824) · [Before (L2740-L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2740-L2742)

```diff
- 
-       function Rz(CC) {
-         return PQ.assert(0 !== CC.length), CC[0]
+       forceAll() {
+         for (; !this.p.parser.stateFlag(this.state, 2);)
+           if (!this.forceReduce()) {
+             this.storeNode(0, this.pos, this.pos, 4, !0);
+             break
+           } return this
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2744-L2747` → after: `L1826-L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1826-L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1826-L1831) · [Before (L2744-L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2744-L2747)

```diff
- 
-       function Az(CC) {
-         for (const zC of CC) return zC;
-         PQ.fail("iterator is empty")
+       get deadEnd() {
+         if (3 != this.stack.length) return !1;
+         let {
+           parser: pp
+         } = this.p;
+         return 65535 == pp.data[pp.stateSlot(this.state, 1)] && !pp.stateSlot(this.state, 4)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2749-L2751` → after: `L1833-L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1833-L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1833-L1834) · [Before (L2749-L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2749-L2751)

```diff
- 
-       function xz(CC) {
-         return void 0 === CC || 0 === CC.length ? void 0 : CC[CC.length - 1]
+       restart() {
+         this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2753-L2755` → after: `L1836-L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1836-L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1836-L1840) · [Before (L2753-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2753-L2755)

```diff
- 
-       function Jz(CC) {
-         return PQ.assert(0 !== CC.length), CC[CC.length - 1]
+       sameState(pp) {
+         if (this.state != pp.state || this.stack.length != pp.stack.length) return !1;
+         for (let ip = 0; ip < this.stack.length; ip += 3)
+           if (this.stack[ip] != pp.stack[ip]) return !1;
+         return !0
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2757-L2759` → after: `L1842-L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1842-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1842-L1843) · [Before (L2757-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2757-L2759)

```diff
- 
-       function Iz(CC) {
-         return void 0 !== CC && 1 === CC.length ? CC[0] : void 0
+       get parser() {
+         return this.p.parser
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2761-L2763` → after: `L1845-L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1845-L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1845-L1846) · [Before (L2761-L2763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2761-L2763)

```diff
- 
-       function iz(CC) {
-         return PQ.checkDefined(Iz(CC))
+       dialectEnabled(pp) {
+         return this.p.parser.dialect.flags[pp]
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2765-L2767` → after: `L1848-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1848-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1848-L1849) · [Before (L2765-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2765-L2767)

```diff
- 
-       function vz(CC) {
-         return void 0 !== CC && 1 === CC.length ? CC[0] : CC
+       shiftContext(pp, ip) {
+         this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, pp, this, this.p.stream.reset(ip)))
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2769-L2772` → after: `L1851-L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1851-L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1851-L1852) · [Before (L2769-L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2769-L2772)

```diff
- 
-       function ez(CC, zC, ZC) {
-         const QC = CC.slice(0);
-         return QC[zC] = ZC, QC
+       reduceContext(pp, ip) {
+         this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, pp, this, this.p.stream.reset(ip)))
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2774-L2776` → after: `L1854-L1856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1854-L1856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1854-L1856) · [Before (L2774-L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2774-L2776)

```diff
- 
-       function hz(CC, zC, ZC, QC, wC) {
-         return Kz(CC, ZC(zC), ZC, QC, wC)
+       emitContext() {
+         let pp = this.buffer.length - 1;
+         (pp < 0 || -3 != this.buffer[pp]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2778-L2795` → after: `L1858-L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1858-L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1858-L1860) · [Before (L2778-L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2778-L2795)

```diff
- 
-       function Kz(CC, zC, ZC, QC, wC) {
-         if (!LC(CC)) return -1;
-         let bC = wC ?? 0,
-           nC = CC.length - 1;
-         for (; bC <= nC;) {
-           const wC = bC + (nC - bC >> 1);
-           switch (QC(ZC(CC[wC], wC), zC)) {
-             case -1:
-               bC = wC + 1;
-               break;
-             case 0:
-               return wC;
-             case 1:
-               nC = wC - 1
-           }
- ... (2 more removed lines; see GitHub link above)
+       emitLookAhead() {
+         let pp = this.buffer.length - 1;
+         (pp < 0 || -4 != this.buffer[pp]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2797-L2807` → after: `L1862-L1865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1862-L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1862-L1865) · [Before (L2797-L2807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2797-L2807)

```diff
- 
-       function Yz(CC, zC, ZC, QC, wC) {
-         if (CC && CC.length > 0) {
-           const bC = CC.length;
-           if (bC > 0) {
-             let nC = void 0 === QC || QC < 0 ? 0 : QC;
-             const fC = void 0 === wC || nC + wC > bC - 1 ? bC - 1 : nC + wC;
-             let oC;
-             for (arguments.length <= 2 ? (oC = CC[nC], nC++) : oC = ZC; nC <= fC;) oC = zC(oC, CC[nC], nC), nC++;
-             return oC
-           }
+       updateContext(pp) {
+         if (pp != this.curContext.context) {
+           let ip = new Ip(this.curContext.tracker, pp);
+           ip.hash != this.curContext.hash && this.emitContext(), this.curContext = ip
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2811-L2814` → after: `L1868-L1869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1868-L1869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1868-L1869) · [Before (L2811-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2811-L2814)

```diff
-       var dz = Object.prototype.hasOwnProperty;
- 
-       function mz(CC, zC) {
-         return dz.call(CC, zC)
+       setLookAhead(pp) {
+         return !(pp <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = pp, !0)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2816-L2818` → after: `L1871-L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1871-L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1871-L1872) · [Before (L2816-L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2816-L2818)

```diff
- 
-       function Hz(CC, zC) {
-         return dz.call(CC, zC) ? CC[zC] : void 0
+       close() {
+         this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2820-L2824` → after: `L1874-L1877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1874-L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1874-L1877) · [Before (L2820-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2820-L2824)

```diff
- 
-       function Ez(CC) {
-         const zC = [];
-         for (const ZC in CC) dz.call(CC, ZC) && zC.push(ZC);
-         return zC
+     }
+     class Ip {
+       constructor(pp, ip) {
+         this.tracker = pp, this.context = ip, this.hash = pp.strict ? pp.hash(ip) : 0
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2826-L2833` → after: `L1879-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1879-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1879-L1882) · [Before (L2826-L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2826-L2833)

```diff
- 
-       function lz(CC) {
-         const zC = [];
-         do {
-           const ZC = Object.getOwnPropertyNames(CC);
-           for (const CC of ZC) Wz(zC, CC)
-         } while (CC = Object.getPrototypeOf(CC));
-         return zC
+     }
+     class Sp {
+       constructor(pp) {
+         this.start = pp, this.state = pp.state, this.stack = pp.stack, this.base = this.stack.length
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2835-L2839` → after: `L1884-L1889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1884-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1884-L1889) · [Before (L2835-L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2835-L2839)

```diff
- 
-       function Xz(CC) {
-         const zC = [];
-         for (const ZC in CC) dz.call(CC, ZC) && zC.push(CC[ZC]);
-         return zC
+       reduce(pp) {
+         let ip = 65535 & pp,
+           cp = pp >> 19;
+         0 == cp ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (cp - 1);
+         let Op = this.start.p.parser.getGoto(this.stack[this.base - 3], ip, !0);
+         this.state = Op
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2841-L2845` → after: `L1891-L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1891-L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1891-L1894) · [Before (L2841-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2841-L2845)

```diff
- 
-       function cz(CC, zC) {
-         const ZC = new Array(CC);
-         for (let QC = 0; QC < CC; QC++) ZC[QC] = zC(QC);
-         return ZC
+     }
+     class xp {
+       constructor(pp, ip, cp) {
+         this.stack = pp, this.pos = ip, this.index = cp, this.buffer = pp.buffer, 0 == this.index && this.maybeNext()
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2847-L2851` → after: `L1896-L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1896-L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1896-L1898) · [Before (L2847-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2847-L2851)

```diff
- 
-       function uz(CC, zC) {
-         const ZC = [];
-         for (const QC of CC) ZC.push(zC ? zC(QC) : QC);
-         return ZC
+       static create(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pp.bufferBase + pp.buffer.length;
+         return new xp(pp, ip, ip - pp.bufferBase)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2853-L2859` → after: `L1900-L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1900-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1900-L1902) · [Before (L2853-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2853-L2859)

```diff
- 
-       function rz(CC) {
-         for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
-         for (const wC of ZC)
-           if (void 0 !== wC)
-             for (const zC in wC) mz(wC, zC) && (CC[zC] = wC[zC]);
-         return CC
+       maybeNext() {
+         let pp = this.stack.parent;
+         null != pp && (this.index = this.stack.bufferBase - pp.bufferBase, this.stack = pp, this.buffer = pp.buffer)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2861-L2872` → after: `L1904-L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1904-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1904-L1911) · [Before (L2861-L2872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2861-L2872)

```diff
- 
-       function sz(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AZ;
-         if (CC === zC) return !0;
-         if (!CC || !zC) return !1;
-         for (const QC in CC)
-           if (dz.call(CC, QC)) {
-             if (!dz.call(zC, QC)) return !1;
-             if (!ZC(CC[QC], zC[QC])) return !1
-           } for (const QC in zC)
-           if (dz.call(zC, QC) && !dz.call(CC, QC)) return !1;
-         return !0
+       get id() {
+         return this.buffer[this.index - 4]
+       }
+       get start() {
+         return this.buffer[this.index - 3]
+       }
+       get end() {
+         return this.buffer[this.index - 2]
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2875-L2881` → after: `L1924-L1968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1924-L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1924-L1968) · [Before (L2875-L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2875-L2881)

```diff
-       function Tz(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NZ;
-         const QC = new Map;
-         for (let wC = 0; wC < CC.length; wC++) {
-           const bC = CC[wC],
-             nC = zC(bC);
-           void 0 !== nC && QC.set(nC, ZC(bC))
+     function Lp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
+       if ("string" != typeof pp) return pp;
+       let cp = null;
+       for (let Op = 0, op = 0; Op < pp.length;) {
+         let Ip = 0;
+         for (;;) {
+           let ip = pp.charCodeAt(Op++),
+             cp = !1;
+           if (126 == ip) {
+             Ip = 65535;
+             break
+           }
+           ip >= 92 && ip--, ip >= 34 && ip--;
+           let op = ip - 32;
+           if (op >= 46 && (op -= 46, cp = !0), Ip += op, cp) break;
+ ... (29 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2885-L2891` → after: `L1972-L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1972-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1972-L1990) · [Before (L2885-L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2885-L2891)

```diff
- 
-       function az(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NZ;
-         const QC = [];
-         for (let wC = 0; wC < CC.length; wC++) {
-           const bC = CC[wC];
-           QC[zC(bC)] = ZC(bC)
+       clipPos(pp) {
+         if (pp >= this.range.from && pp < this.range.to) return pp;
+         for (let ip of this.By)
+           if (ip.to > pp) return Math.max(pp, ip.from);
+         return this.end
+       }
+       peek(pp) {
+         let ip, cp, Op = this.chunkOff + pp;
+         if (Op >= 0 && Op < this.chunk.length) ip = this.pos + pp, cp = this.chunk.charCodeAt(Op);
+         else {
+           let Op = this.resolveOffset(pp, 1);
+           if (null == Op) return -1;
+           if (ip = Op, ip >= this.chunk2Pos && ip < this.chunk2Pos + this.chunk2.length) cp = this.chunk2.charCodeAt(ip - this.chunk2Pos);
+           else {
+             let pp = this.rangeIndex,
+               Op = this.range;
+ ... (3 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2893` → after: `L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1992) · [Before (L2893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2893)

```diff
-         return QC
+         return ip >= this.token.lookAhead && (this.token.lookAhead = ip + 1), cp
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2895-L2901` → after: `L1994-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L1994-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L1994-L2014) · [Before (L2895-L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2895-L2901)

```diff
- 
-       function tz(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NZ;
-         const QC = Oz();
-         for (let wC = 0; wC < CC.length; wC++) {
-           const bC = CC[wC];
-           QC.add(zC(bC), ZC(bC))
+       acceptToken(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           cp = ip ? this.resolveOffset(ip, -1) : this.pos;
+         if (null == cp || cp < this.token.start) throw new RangeError("Token end out of bounds");
+         this.token.value = pp, this.token.end = cp
+       }
+       acceptTokenTo(pp, ip) {
+         this.token.value = pp, this.token.end = ip
+       }
+       getChunk() {
+         if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
+           let {
+             chunk: pp,
+             chunkPos: ip
+           } = this;
+           this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = pp, this.chunk2Pos = ip, this.chunkOff = this.pos - this.chunkPos
+ ... (5 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2905-L2908` → after: `L2017-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2017-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2017-L2018) · [Before (L2905-L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2905-L2908)

```diff
- 
-       function Dz(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NZ;
-         return uz(tz(CC, zC).values(), ZC)
+       readNext() {
+         return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2910-L2919` → after: `L2020-L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2020-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2020-L2026) · [Before (L2910-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2910-L2919)

```diff
- 
-       function jz(CC, zC) {
-         const ZC = {};
-         if (void 0 !== CC)
-           for (let QC = 0; QC < CC.length; QC++) {
-             const wC = CC[QC],
-               bC = `${zC(wC)}`;
-             (ZC[bC] ?? (ZC[bC] = [])).push(wC)
-           }
-         return ZC
+       advance() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         for (this.chunkOff += pp; this.pos + pp >= this.range.to;) {
+           if (this.rangeIndex == this.By.length - 1) return this.setDone();
+           pp -= this.range.to - this.pos, this.range = this.By[++this.rangeIndex], this.pos = this.range.from
+         }
+         return this.pos += pp, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2921-L2925` → after: `L2028-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2028-L2029) · [Before (L2921-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2921-L2925)

```diff
- 
-       function yz(CC) {
-         const zC = {};
-         for (const ZC in CC) dz.call(CC, ZC) && (zC[ZC] = CC[ZC]);
-         return zC
+       setDone() {
+         return this.pos = this.chunkPos = this.end, this.range = this.By[this.rangeIndex = this.By.length - 1], this.chunk = "", this.next = -1
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2927-L2931` → after: `L2031-L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2031-L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2031-L2048) · [Before (L2927-L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2927-L2931)

```diff
- 
-       function Lz(CC, zC) {
-         const ZC = {};
-         for (const QC in zC) dz.call(zC, QC) && (ZC[QC] = zC[QC]);
-         for (const QC in CC) dz.call(CC, QC) && (ZC[QC] = CC[QC]);
+       reset(pp, ip) {
+         if (ip ? (this.token = ip, ip.start = pp, ip.lookAhead = pp + 1, ip.value = ip.extended = -1) : this.token = Dp, this.pos != pp) {
+           if (this.pos = pp, pp == this.end) return this.setDone(), this;
+           for (; pp < this.range.from;) this.range = this.By[--this.rangeIndex];
+           for (; pp >= this.range.to;) this.range = this.By[++this.rangeIndex];
+           pp >= this.chunkPos && pp < this.chunkPos + this.chunk.length ? this.chunkOff = pp - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
+         }
+         return this
+       }
+       read(pp, ip) {
+         if (pp >= this.chunkPos && ip <= this.chunkPos + this.chunk.length) return this.chunk.slice(pp - this.chunkPos, ip - this.chunkPos);
+         if (pp >= this.chunk2Pos && ip <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(pp - this.chunk2Pos, ip - this.chunk2Pos);
+         if (pp >= this.range.from && ip <= this.range.to) return this.input.read(pp, ip);
+         let cp = "";
+         for (let Op of this.By) {
+           if (Op.from >= ip) break;
+ ... (2 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2934-L2936` → after: `L2051-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2051-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2051-L2054) · [Before (L2934-L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2934-L2936)

```diff
- 
-       function Uz(CC, zC) {
-         for (const ZC in zC) dz.call(zC, ZC) && (CC[ZC] = zC[ZC])
+     }
+     class Pp {
+       constructor(pp, ip) {
+         this.data = pp, this.id = ip
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2938-L2940` → after: `L2056-L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2056-L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2056-L2086) · [Before (L2938-L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2938-L2940)

```diff
- 
-       function Bz(CC, zC) {
-         return null == zC ? void 0 : zC.bind(CC)
+       token(pp, ip) {
+         let {
+           parser: cp
+         } = ip.p;
+         Up(this.data, pp, ip, this.id, cp.data, cp.tokenPrecTable)
+       }
+     }
+     Pp.prototype.contextual = Pp.prototype.fallback = Pp.prototype.extend = !1;
+     class Wp {
+       constructor(pp, ip, cp) {
+         this.precTable = ip, this.elseToken = cp, this.data = "string" == typeof pp ? Lp(pp) : pp
+       }
+       token(pp, ip) {
+         let cp = pp.pos,
+           Op = 0;
+         for (;;) {
+ ... (15 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2943-L2945` → after: `L2090-L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2090-L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2090-L2170) · [Before (L2943-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2943-L2945)

```diff
-       function Oz() {
-         const CC = new Map;
-         return CC.add = kz, CC.remove = Vz, CC
+     function Up(pp, ip, cp, Op, op, Ip) {
+       let Sp = 0,
+         xp = 1 << Op,
+         {
+           dialect: Lp
+         } = cp.p.parser;
+       pp: for (; 0 != (xp & pp[Sp]);) {
+         let cp = pp[Sp + 1];
+         for (let Ap = Sp + 3; Ap < cp; Ap += 2)
+           if ((pp[Ap + 1] & xp) > 0) {
+             let cp = pp[Ap];
+             if (Lp.allows(cp) && (-1 == ip.token.value || ip.token.value == cp || vp(cp, ip.token.value, op, Ip))) {
+               ip.acceptToken(cp);
+               break
+             }
+           } let Op = ip.next,
+ ... (65 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2947-L2950` → after: `L2172-L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2172-L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2172-L2206) · [Before (L2947-L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2947-L2950)

```diff
- 
-       function kz(CC, zC) {
-         let ZC = this.get(CC);
-         return void 0 !== ZC ? ZC.push(zC) : this.set(CC, ZC = [zC]), ZC
+       nextFragment() {
+         let pp = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
+         if (pp) {
+           for (this.safeFrom = pp.openStart ? dp(pp.tree, pp.from + pp.offset, 1) - pp.offset : pp.from, this.safeTo = pp.openEnd ? dp(pp.tree, pp.to + pp.offset, -1) - pp.offset : pp.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
+           this.trees.push(pp.tree), this.start.push(-pp.offset), this.index.push(0), this.nextStart = this.safeFrom
+         } else this.nextStart = 1e9
+       }
+       nodeAt(pp) {
+         if (pp < this.nextStart) return null;
+         for (; this.fragment && this.safeTo <= pp;) this.nextFragment();
+         if (!this.fragment) return null;
+         for (;;) {
+           let ip = this.trees.length - 1;
+           if (ip < 0) return this.nextFragment(), null;
+           let cp = this.trees[ip],
+             op = this.index[ip];
+ ... (19 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2952-L2955` → after: `L2208-L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2208-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2208-L2211) · [Before (L2952-L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2952-L2955)

```diff
- 
-       function Vz(CC, zC) {
-         const ZC = this.get(CC);
-         void 0 !== ZC && (OZ(ZC, zC), ZC.length || this.delete(CC))
+     }
+     class jp {
+       constructor(pp, ip) {
+         this.stream = ip, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = pp.tokenizers.map((pp => new Yp))
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2957-L2963` → after: `L2213-L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2213-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2213-L2232) · [Before (L2957-L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2957-L2963)

```diff
- 
-       function CZ(CC) {
-         const zC = (null == CC ? void 0 : CC.slice()) ?? [];
-         let ZC = 0;
- 
-         function QC() {
-           return ZC === zC.length
+       getActions(pp) {
+         let ip = 0,
+           cp = null,
+           {
+             parser: Op
+           } = pp.p,
+           {
+             tokenizers: op
+           } = Op,
+           Ip = Op.stateSlot(pp.state, 3),
+           Sp = pp.curContext ? pp.curContext.hash : 0,
+           xp = 0;
+         for (let Lp = 0; Lp < op.length; Lp++) {
+           if (0 == (1 << Lp & Ip)) continue;
+           let Op = op[Lp],
+             Yp = this.tokens[Lp];
+ ... (4 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2965-L2974` → after: `L2234-L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2234-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2234-L2258) · [Before (L2965-L2974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2965-L2974)

```diff
-         return {
-           enqueue: function() {
-             zC.push(...arguments)
-           },
-           dequeue: function() {
-             if (QC()) throw new Error("Queue is empty");
-             const CC = zC[ZC];
-             if (zC[ZC] = void 0, ZC++, ZC > 100 && ZC > zC.length >> 1) {
-               const CC = zC.length - ZC;
-               zC.copyWithin(0, ZC), zC.length = CC, ZC = 0
+         for (; this.actions.length > ip;) this.actions.pop();
+         return xp && pp.setLookAhead(xp), cp || pp.pos != this.stream.end || (cp = new Yp, cp.value = pp.p.parser.eofTerm, cp.start = cp.end = pp.pos, ip = this.addActions(pp, cp.value, cp.end, ip)), this.mainToken = cp, this.actions
+       }
+       getMainToken(pp) {
+         if (this.mainToken) return this.mainToken;
+         let ip = new Yp,
+           {
+             pos: cp,
+             p: Op
+           } = pp;
+         return ip.start = cp, ip.end = Math.min(cp + 1, Op.stream.end), ip.value = cp == Op.stream.end ? Op.parser.eofTerm : 0, ip
+       }
+       updateCachedToken(pp, ip, cp) {
+         let Op = this.stream.clipPos(cp.pos);
+         if (ip.token(this.stream.reset(Op, pp), cp), pp.value > -1) {
+           let {
+ ... (9 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2976-L2979` → after: `L2260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2260) · [Before (L2976-L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2976-L2979)

```diff
-             return CC
-           },
-           fg: QC
-         }
+         } else pp.value = 0, pp.end = this.stream.clipPos(Op + 1)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2981-L2987` → after: `L2262-L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2262-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2262-L2307) · [Before (L2981-L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2981-L2987)

```diff
- 
-       function zZ(CC, zC) {
-         const ZC = new Map;
-         let QC = 0;
- 
-         function* wC() {
-           for (const CC of ZC.values()) ZZ(CC) ? yield* CC: yield CC
+       putAction(pp, ip, cp, Op) {
+         for (let op = 0; op < Op; op += 3)
+           if (this.actions[op] == pp) return Op;
+         return this.actions[Op++] = pp, this.actions[Op++] = ip, this.actions[Op++] = cp, Op
+       }
+       addActions(pp, ip, cp, Op) {
+         let {
+           state: op
+         } = pp, {
+           parser: Ip
+         } = pp.p, {
+           data: Sp
+         } = Ip;
+         for (let xp = 0; xp < 2; xp++)
+           for (let pp = Ip.stateSlot(op, xp ? 2 : 1);; pp += 3) {
+             if (65535 == Sp[pp]) {
+ ... (30 more added lines; see GitHub link above)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2989-L3003` → after: `L2309-L2318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2309-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2309-L2318) · [Before (L2989-L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L2989-L3003)

```diff
-         const bC = {
-           has(QC) {
-             const wC = CC(QC);
-             if (!ZC.has(wC)) return !1;
-             const bC = ZC.get(wC);
-             return ZZ(bC) ? iC(bC, QC, zC) : zC(bC, QC)
-           },
-           add(wC) {
-             const bC = CC(wC);
-             if (ZC.has(bC)) {
-               const CC = ZC.get(bC);
-               if (ZZ(CC)) iC(CC, wC, zC) || (CC.push(wC), QC++);
-               else {
-                 const nC = CC;
-                 zC(nC, wC) || (ZC.set(bC, [nC, wC]), QC++)
+         for (let Ip = 0; Ip < cp.length; Ip++) {
+           let Sp = cp[Ip];
+           for (;;) {
+             if (this.tokens.mainToken = null, Sp.pos > Op) op.push(Sp);
+             else {
+               if (this.advanceStack(Sp, op, cp)) continue;
+               {
+                 pp || (pp = [], ip = []), pp.push(Sp);
+                 let cp = this.tokens.getMainToken(Sp);
+                 ip.push(cp.value, cp.end)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3018-L3023` → after: `L2321-L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2321-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2321-L2330) · [Before (L3018-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3018-L3023)

```diff
-             return !1
-           },
-           clear() {
-             ZC.clear(), QC = 0
-           },
-           get size() {
+             break
+           }
+         }
+         if (!op.length) {
+           let ip = pp && function(pp) {
+             let ip = null;
+             for (let cp of pp) {
+               let pp = cp.p.stoppedAt;
+               (cp.pos == cp.p.stream.end || null != pp && cp.pos > pp) && cp.p.parser.stateFlag(cp.state, 2) && (!ip || ip.score < cp.score) && (ip = cp)
+             }
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3025-L3031` → after: `L2332-L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2332-L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2332-L2356) · [Before (L3025-L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3025-L3031)

```diff
-           },
-           forEach(CC) {
-             for (const zC of uz(ZC.values()))
-               if (ZZ(zC))
-                 for (const ZC of zC) CC(ZC, ZC, bC);
-               else {
-                 CC(zC, zC, bC)
+           }(pp);
+           if (ip) return tp && console.log("Finish with " + this.stackID(ip)), this.stackToTree(ip);
+           if (this.parser.strict) throw tp && pp && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + Op);
+           this.recovering || (this.recovering = 5)
+         }
+         if (this.recovering && pp) {
+           let cp = null != this.stoppedAt && pp[0].pos > this.stoppedAt ? pp[0] : this.runRecovery(pp, ip, op);
+           if (cp) return tp && console.log("Force-finish " + this.stackID(cp)), this.stackToTree(cp.forceAll())
+         }
+         if (this.recovering) {
+           let pp = 1 == this.recovering ? 1 : 3 * this.recovering;
+           if (op.length > pp)
+             for (op.sort(((pp, ip) => ip.score - pp.score)); op.length > pp;) op.pop();
+           op.some((pp => pp.reducePos > Op)) && this.recovering--
+         } else if (op.length > 1) {
+           pp: for (let pp = 0; pp < op.length - 1; pp++) {
+ ... (9 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3033-L3042` → after: `L2358-L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2358-L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2358-L2364) · [Before (L3033-L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3033-L3042)

```diff
-           },
-           keys: () => wC(),
-           values: () => wC(),
-           * entries() {
-             for (const CC of wC()) yield [CC, CC]
-           },
-           [Symbol.iterator]: () => wC(),
-           [Symbol.toStringTag]: ZC[Symbol.toStringTag]
-         };
-         return bC
+             }
+           }
+           op.length > 12 && (op.sort(((pp, ip) => ip.score - pp.score)), op.splice(12, op.length - 12))
+         }
+         this.minStackPos = op[0].pos;
+         for (let Ip = 1; Ip < op.length; Ip++) op[Ip].pos < this.minStackPos && (this.minStackPos = op[Ip].pos);
+         return null
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3044-L3046` → after: `L2366-L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2366-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2366-L2368) · [Before (L3044-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3044-L3046)

```diff
- 
-       function ZZ(CC) {
-         return Array.isArray(CC)
+       stopAt(pp) {
+         if (null != this.stoppedAt && this.stoppedAt < pp) throw new RangeError("Can't move stoppedAt forward");
+         this.stoppedAt = pp
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3048-L3050` → after: `L2370-L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2370-L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2370-L2404) · [Before (L3048-L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3048-L3050)

```diff
- 
-       function QZ(CC) {
-         return ZZ(CC) ? CC : [CC]
+       advanceStack(pp, ip, cp) {
+         let op = pp.pos,
+           {
+             parser: Ip
+           } = this,
+           Sp = tp ? this.stackID(pp) + " -> " : "";
+         if (null != this.stoppedAt && op > this.stoppedAt) return pp.forceReduce() ? pp : null;
+         if (this.fragments) {
+           let ip = pp.curContext && pp.curContext.tracker.strict,
+             cp = ip ? pp.curContext.hash : 0;
+           for (let xp = this.fragments.nodeAt(op); xp;) {
+             let op = this.parser.nodeSet.types[xp.type.id] == xp.type ? Ip.getGoto(pp.state, xp.type.id) : -1;
+             if (op > -1 && xp.length && (!ip || (xp.prop(Op.j.contextHash) || 0) == cp)) return pp.useNode(xp, op), tp && console.log(Sp + this.stackID(pp) + ` (via reuse of ${Ip.getName(xp.type.id)})`), !0;
+             if (!(xp instanceof Op.w) || 0 == xp.children.length || xp.positions[0] > 0) break;
+             let Lp = xp.children[0];
+             if (!(Lp instanceof Op.w && 0 == xp.positions[0])) break;
+ ... (19 more added lines; see GitHub link above)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3052-L3054` → after: `L2406-L2411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2406-L2411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2406-L2411) · [Before (L3052-L3054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3052-L3054)

```diff
- 
-       function wZ(CC) {
-         return "string" === typeof CC
+       advanceFully(pp, ip) {
+         let cp = pp.pos;
+         for (;;) {
+           if (!this.advanceStack(pp, null, null)) return !1;
+           if (pp.pos > cp) return mp(pp, ip), !0
+         }
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3056-L3058` → after: `L2413-L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2413-L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2413-L2434) · [Before (L3056-L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3056-L3058)

```diff
- 
-       function bZ(CC) {
-         return "number" === typeof CC
+       runRecovery(pp, ip, cp) {
+         let Op = null,
+           op = !1;
+         for (let Ip = 0; Ip < pp.length; Ip++) {
+           let Sp = pp[Ip],
+             xp = ip[Ip << 1],
+             Lp = ip[1 + (Ip << 1)],
+             Yp = tp ? this.stackID(Sp) + " -> " : "";
+           if (Sp.deadEnd) {
+             if (op) continue;
+             if (op = !0, Sp.restart(), tp && console.log(Yp + this.stackID(Sp) + " (restarted)"), this.advanceFully(Sp, cp)) continue
+           }
+           let Dp = Sp.split(),
+             Ap = Yp;
+           for (let pp = 0; pp < 10 && Dp.forceReduce(); pp++) {
+             if (tp && console.log(Ap + this.stackID(Dp) + " (via force-reduce)"), this.advanceFully(Dp, cp)) break;
+ ... (6 more added lines; see GitHub link above)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3060-L3062` → after: `L2436-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2436-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2436-L2446) · [Before (L3060-L3062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3060-L3062)

```diff
- 
-       function nZ(CC, zC) {
-         return void 0 !== CC && zC(CC) ? CC : void 0
+       stackToTree(pp) {
+         return pp.close(), Op.w.build({
+           buffer: xp.create(pp),
+           nodeSet: this.parser.nodeSet,
+           topID: this.topTerm,
+           maxBufferLength: this.parser.bufferLength,
+           reused: this.reused,
+           start: this.By[0].from,
+           length: pp.pos - this.By[0].from,
+           minRepeatType: this.parser.minRepeatTerm
+         })
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3064-L3066` → after: `L2448-L2450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2448-L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2448-L2450) · [Before (L3064-L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3064-L3066)

```diff
- 
-       function fZ(CC, zC) {
-         return void 0 !== CC && zC(CC) ? CC : PQ.fail(`Invalid cast. The supplied value ${CC} did not pass the test '${PQ.getFunctionName(zC)}'.`)
+       stackID(pp) {
+         let ip = (Hp || (Hp = new WeakMap)).get(pp);
+         return ip || Hp.set(pp, ip = String.fromCodePoint(this.nextStackID++)), ip + pp
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3069-L3073` → after: `L2454-L2478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2454-L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2454-L2478) · [Before (L3069-L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3069-L3073)

```diff
-       function oZ(CC) {}
- 
-       function qZ() {
-         return !1
-       }
+     function mp(pp, ip) {
+       for (let cp = 0; cp < ip.length; cp++) {
+         let Op = ip[cp];
+         if (Op.pos == pp.pos && Op.sameState(pp)) return void(ip[cp].score < pp.score && (ip[cp] = pp))
+       }
+       ip.push(pp)
+     }
+     class Rp {
+       constructor(pp, ip, cp) {
+         this.source = pp, this.flags = ip, this.disabled = cp
+       }
+       allows(pp) {
+         return !this.disabled || 0 == this.disabled[pp]
+       }
+     }
+     const qp = pp => pp;
+ ... (9 more added lines; see GitHub link above)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3075-L3076` → after: `L2480-L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2480-L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2480-L2508) · [Before (L3075-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3075-L3076)

```diff
-       function FZ() {
-         return !0
+         function Ip(pp, ip, cp) {
+           op[pp].push([ip, ip.deserialize(String(cp))])
+         }
+         if (pp.nodeProps)
+           for (let xp of pp.nodeProps) {
+             let pp = xp[0];
+             "string" == typeof pp && (pp = Op.j[pp]);
+             for (let ip = 1; ip < xp.length;) {
+               let cp = xp[ip++];
+               if (cp >= 0) Ip(cp, pp, xp[ip++]);
+               else {
+                 let Op = xp[ip + -cp];
+                 for (let op = -cp; op > 0; op--) Ip(xp[ip++], pp, Op);
+                 ip++
+               }
+             }
+ ... (13 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L3078-L3081` → after: `L2510-L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2510-L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/298.js#L2510-L2512) · [Before (L3078-L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/298.js#L3078-L3081)

```diff
- 
-       function WZ() {}
- 
-       function NZ(CC) {
+       createParse(pp, ip, cp) {
+         let Op = new kp(this, pp, ip, cp);
+         for (let op of this.wrappers) Op = op(Op, pp, ip, cp);
```
