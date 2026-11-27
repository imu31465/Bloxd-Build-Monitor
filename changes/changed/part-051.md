# Changed — Bundle Modifications Report (Part 051 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `51 / 126` (**310** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 050](part-050.md) · [Part 052 →](part-052.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (516 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 232. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7803-L7804` → after: `L3851-L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3851-L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3851-L3853) · [Before (L7803-L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7803-L7804)

```diff
-       set skipFrustumClipping(RR) {
-         this._skipFrustumClipping !== RR && (this._skipFrustumClipping = RR)
+       getVerticesData(rr, Sr, Qr) {
+         const Zr = this.getVertexBuffer(rr);
+         return Zr ? Zr.getFloatData(this._totalVertices, Qr || Sr && 1 !== this._meshes.length) : null
```

#### 233. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7806-L7807` → after: `L3855-L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3855-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3855-L3860) · [Before (L7806-L7807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7806-L7807)

```diff
-       get skipFrustumClipping() {
-         return this._skipFrustumClipping
+       copyVerticesData(rr, Sr) {
+         const Qr = this.getVertexBuffer(rr);
+         if (!Qr) return;
+         Sr[rr] || (Sr[rr] = new Float32Array(this._totalVertices * Qr.getSize()));
+         const Zr = Qr.getData();
+         Zr && (0, hr.e)(Zr, Qr.getSize(), Qr.type, Qr.byteOffset, Qr.byteStride, Qr.normalized, this._totalVertices, Sr[rr])
```

#### 234. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7809-L7810` → after: `L3862-L3864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3862-L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3862-L3864) · [Before (L7809-L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7809-L7810)

```diff
-       set forcePointsCloud(RR) {
-         this._forcePointsCloud !== RR && (this._forcePointsCloud = RR, this.markAllMaterialsAsDirty(16))
+       isVertexBufferUpdatable(rr) {
+         const Sr = this._vertexBuffers[rr];
+         return !!Sr && Sr.isUpdatable()
```

#### 235. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7812-L7813` → after: `L3866-L3867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3866-L3867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3866-L3867) · [Before (L7812-L7813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7812-L7813)

```diff
-       get forcePointsCloud() {
-         return this._forcePointsCloud
+       getVertexBuffer(rr) {
+         return this.isReady() ? this._vertexBuffers[rr] : null
```

#### 236. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7815-L7816` → after: `L3869-L3870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3869-L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3869-L3870) · [Before (L7815-L7816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7815-L7816)

```diff
-       get environmentTexture() {
-         return this._environmentTexture
+       getVertexBuffers() {
+         return this.isReady() ? this._vertexBuffers : null
```

#### 237. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7818-L7819` → after: `L3872-L3873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3872-L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3872-L3873) · [Before (L7818-L7819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7818-L7819)

```diff
-       set environmentTexture(RR) {
-         this._environmentTexture !== RR && (this._environmentTexture = RR, this.onEnvironmentTextureChangedObservable.notifyObservers(RR), this.markAllMaterialsAsDirty(1))
+       isVerticesDataPresent(rr) {
+         return this._vertexBuffers ? void 0 !== this._vertexBuffers[rr] : !!this._delayInfo && -1 !== this._delayInfo.indexOf(rr)
```

#### 238. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7821-L7824` → after: `L3875-L3881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3875-L3881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3875-L3881) · [Before (L7821-L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7821-L7824)

```diff
-       getNodes() {
-         let RR = [];
-         RR = RR.concat(this.meshes), RR = RR.concat(this.lights), RR = RR.concat(this.cameras), RR = RR.concat(this.transformNodes);
-         for (const JR of this.skeletons) RR = RR.concat(JR.bones);
+       getVerticesDataKinds() {
+         const rr = [];
+         let Sr;
+         if (!this._vertexBuffers && this._delayInfo)
+           for (Sr in this._delayInfo) rr.push(Sr);
+         else
+           for (Sr in this._vertexBuffers) rr.push(Sr);
```

#### 239. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7827-L7831` → after: `L3884-L3897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3884-L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3884-L3897) · [Before (L7827-L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7827-L7831)

```diff
-       get animationPropertiesOverride() {
-         return this._animationPropertiesOverride
-       }
-       set animationPropertiesOverride(RR) {
-         this._animationPropertiesOverride = RR
+       updateIndices(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this._indexBuffer)
+           if (this._indexBufferIsUpdatable) {
+             const Zr = rr.length !== this._indices.length;
+             if (Qr || (this._indices = rr.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, rr, Sr), Zr)
+               for (const rr of this._meshes) rr._createGlobalSubMesh(!0)
+           } else this.setIndices(rr, null, !0)
+       }
+       setIndexBuffer(rr, Sr, Qr) {
+         let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = rr, this._totalVertices = Sr, this._totalIndices = Qr, rr.is32Bits = null === Zr ? Sr > 65535 : Zr;
+         for (const Wr of this._meshes) Wr._createGlobalSubMesh(!0), Wr.synchronizeInstances();
+         this._notifyUpdate()
```

#### 240. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7833-L7834` → after: `L3899-L3905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3899-L3905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3899-L3905) · [Before (L7833-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7833-L7834)

```diff
-       set onDispose(RR) {
-         this._onDisposeObserver && this.YH.remove(this._onDisposeObserver), this._onDisposeObserver = this.YH.add(RR)
+       setIndices(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = rr, this._indexBufferIsUpdatable = Qr, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, Qr, "Geometry_" + this.id + "_Index … [truncated]
+         for (const Wr of this._meshes) Wr._createGlobalSubMesh(!Zr), Wr.synchronizeInstances();
+         this._notifyUpdate()
```

#### 241. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7836-L7837` → after: `L3907-L3908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3907-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3907-L3908) · [Before (L7836-L7837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7836-L7837)

```diff
-       set beforeRender(RR) {
-         this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), RR && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(RR))
+       getTotalIndices() {
+         return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
```

#### 242. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7839-L7840` → after: `L3910-L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3910-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3910-L3913) · [Before (L7839-L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7839-L7840)

```diff
-       set afterRender(RR) {
-         this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), RR && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(RR))
+       yar(rr, Sr) {
+         if (!this.isReady()) return null;
+         const Qr = this._indices;
+         return Sr || rr && 1 !== this._meshes.length ? Qr.slice() : Qr
```

#### 243. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7842-L7843` → after: `L3915-L3916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3915-L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3915-L3916) · [Before (L7842-L7843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7842-L7843)

```diff
-       set beforeCameraRender(RR) {
-         this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(RR)
+       getIndexBuffer() {
+         return this.isReady() ? this._indexBuffer : null
```

#### 244. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7845-L7846` → after: `L3918-L3920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3918-L3920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3918-L3920) · [Before (L7845-L7846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7845-L7846)

```diff
-       set afterCameraRender(RR) {
-         this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(RR)
+       _releaseVertexArrayObject() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         rr && this._vertexArrayObjects && this._vertexArrayObjects[rr.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[rr.key]), delete this._vertexArrayObjects[rr.key])
```

#### 245. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7848-L7849` → after: `L3922-L3924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3922-L3924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3922-L3924) · [Before (L7848-L7849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7848-L7849)

```diff
-       get pointerDownPredicate() {
-         return this._pointerPickingConfiguration.pointerDownPredicate
+       releaseForMesh(rr, Sr) {
+         const Qr = this._meshes,
+           Zr = Qr.indexOf(rr); - 1 !== Zr && (Qr.splice(Zr, 1), this._vertexArrayObjects && rr._invalidateInstanceVertexArrayObject(), rr._geometry = null, 0 === Qr.length && Sr && this.dispose())
```

#### 246. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7851-L7852` → after: `L3926-L3931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3926-L3931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3926-L3931) · [Before (L7851-L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7851-L7852)

```diff
-       set pointerDownPredicate(RR) {
-         this._pointerPickingConfiguration.pointerDownPredicate = RR
+       applyToMesh(rr) {
+         if (rr._geometry === this) return;
+         const Sr = rr._geometry;
+         Sr && Sr.releaseForMesh(rr), this._vertexArrayObjects && rr._invalidateInstanceVertexArrayObject();
+         const Qr = this._meshes;
+         rr._geometry = this, rr._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), Qr.push(rr), this.isReady() ? this._applyToMesh(rr) : this._boundingInfo && rr.setBoundingInfo(this._boundingInfo)
```

#### 247. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7854-L7855` → after: `L3933-L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3933-L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3933-L3942) · [Before (L7854-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7854-L7855)

```diff
-       get pointerUpPredicate() {
-         return this._pointerPickingConfiguration.pointerUpPredicate
+       _updateExtend() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
+           minimum: this._boundingInfo.minimum.clone(),
+           maximum: this._boundingInfo.maximum.clone()
+         };
+         else {
+           if (!rr && (rr = this.getVerticesData(jr.j.PositionKind), !rr)) return;
+           this._extend = (0, Nr.e)(rr, 0, this._totalVertices, this.boundingBias, 3)
+         }
```

#### 248. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7857-L7858` → after: `L3944-L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3944-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3944-L3948) · [Before (L7857-L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7857-L7858)

```diff
-       set pointerUpPredicate(RR) {
-         this._pointerPickingConfiguration.pointerUpPredicate = RR
+       _applyToMesh(rr) {
+         for (const Sr in this._vertexBuffers) {
+           const Qr = this._vertexBuffers[Sr];
+           Qr._buffer.getBuffer() || Qr.create(), Sr === jr.j.PositionKind && (this._extend || this._updateExtend(), rr.buildBoundingInfo(this._extend.minimum, this._extend.maximum), rr._createGlobalSubMesh(rr.isUnIndexed), rr._updateBoundingInfo())
+         }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), rr._syncGeometryWithMorphTargetManager(), rr.synchronizeInstances()
```

#### 249. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7860-L7861` → after: `L3950-L3952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3950-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3950-L3952) · [Before (L7860-L7861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7860-L7861)

```diff
-       get pointerMovePredicate() {
-         return this._pointerPickingConfiguration.pointerMovePredicate
+       _notifyUpdate(rr) {
+         this.onGeometryUpdated && this.onGeometryUpdated(this, rr), this._vertexArrayObjects && this._disposeVertexArrayObjects();
+         for (const Sr of this._meshes) Sr._markSubMeshesAsAttributesDirty()
```

#### 250. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7863-L7864` → after: `L3954-L3955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3954-L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3954-L3955) · [Before (L7863-L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7863-L7864)

```diff
-       set pointerMovePredicate(RR) {
-         this._pointerPickingConfiguration.pointerMovePredicate = RR
+       load(rr, Sr) {
+         2 !== this.delayLoadState && (this.isReady() ? Sr && Sr() : (this.delayLoadState = 2, this._queueLoad(rr, Sr)))
```

#### 251. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7866-L7867` → after: `L3957-L3970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3957-L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3957-L3970) · [Before (L7866-L7867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7866-L7867)

```diff
-       get pointerDownFastCheck() {
-         return this._pointerPickingConfiguration.pointerDownFastCheck
+       _queueLoad(rr, Sr) {
+         this.delayLoadingFile && (rr.addPendingData(this), (async () => {
+           try {
+             const Qr = await rr._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
+             if (!this._delayLoadingFunction) return void rr.removePendingData(this);
+             this._delayLoadingFunction(JSON.parse(Qr), this), this.delayLoadState = 1, this._delayInfo = [], rr.removePendingData(this);
+             const Zr = this._meshes,
+               Wr = Zr.length;
+             for (let rr = 0; rr < Wr; rr++) this._applyToMesh(Zr[rr]);
+             Sr && Sr()
+           } catch (Qr) {
+             rr.removePendingData(this), rr.Dv || xr.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${Qr}`)
+           }
+         })())
```

#### 252. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7869-L7870` → after: `L3972-L3990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3972-L3990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3972-L3990) · [Before (L7869-L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7869-L7870)

```diff
-       set pointerDownFastCheck(RR) {
-         this._pointerPickingConfiguration.pointerDownFastCheck = RR
+       toLeftHanded() {
+         const rr = this.yar(!1);
+         if (null != rr && rr.length > 0) {
+           for (let Sr = 0; Sr < rr.length; Sr += 3) {
+             const Qr = rr[Sr + 0];
+             rr[Sr + 0] = rr[Sr + 2], rr[Sr + 2] = Qr
+           }
+           this.setIndices(rr)
+         }
+         const Sr = this.getVerticesData(jr.j.PositionKind, !1);
+         if (null != Sr && Sr.length > 0) {
+           for (let rr = 0; rr < Sr.length; rr += 3) Sr[rr + 2] = -Sr[rr + 2];
+           this.setVerticesData(jr.j.PositionKind, Sr, !1)
+         }
+         const Qr = this.getVerticesData(jr.j.NormalKind, !1);
+         if (null != Qr && Qr.length > 0) {
+ ... (3 more added lines; see GitHub link above)
```

#### 253. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7872-L7873` → after: `L3992-L3993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3992-L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3992-L3993) · [Before (L7872-L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7872-L7873)

```diff
-       get pointerUpFastCheck() {
-         return this._pointerPickingConfiguration.pointerUpFastCheck
+       _resetPointsArrayCache() {
+         this._positions = null
```

#### 254. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7875-L7876` → after: `L3995-L4001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R3995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L3995-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L3995-L4001) · [Before (L7875-L7876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7875-L7876)

```diff
-       set pointerUpFastCheck(RR) {
-         this._pointerPickingConfiguration.pointerUpFastCheck = RR
+       _generatePointsArray() {
+         if (this._positions) return !0;
+         const rr = this.getVerticesData(jr.j.PositionKind);
+         if (!rr || 0 === rr.length) return !1;
+         for (let Sr = 3 * this._positionsCache.length, Qr = this._positionsCache.length; Sr < rr.length; Sr += 3, ++Qr) this._positionsCache[Qr] = Zr.u.FromArray(rr, Sr);
+         for (let Sr = 0, Qr = 0; Sr < rr.length; Sr += 3, ++Qr) this._positionsCache[Qr].set(rr[0 + Sr], rr[1 + Sr], rr[2 + Sr]);
+         return this._positionsCache.length = rr.length / 3, this._positions = this._positionsCache, !0
```

#### 255. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7878-L7879` → after: `L4003-L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4003-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4003-L4004) · [Before (L7878-L7879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7878-L7879)

```diff
-       get pointerMoveFastCheck() {
-         return this._pointerPickingConfiguration.pointerMoveFastCheck
+       Dv() {
+         return this._isDisposed
```

#### 256. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7881-L7882` → after: `L4006-L4013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4006-L4013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4006-L4013) · [Before (L7881-L7882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7881-L7882)

```diff
-       set pointerMoveFastCheck(RR) {
-         this._pointerPickingConfiguration.pointerMoveFastCheck = RR
+       _disposeVertexArrayObjects() {
+         if (this._vertexArrayObjects) {
+           for (const Qr in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[Qr]);
+           this._vertexArrayObjects = {};
+           const rr = this._meshes,
+             Sr = rr.length;
+           for (let Qr = 0; Qr < Sr; Qr++) rr[Qr]._invalidateInstanceVertexArrayObject()
+         }
```

#### 257. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7884-L7885` → after: `L4015-L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4015-L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4015-L4066) · [Before (L7884-L7885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7884-L7885)

```diff
-       get skipPointerMovePicking() {
-         return this._pointerPickingConfiguration.skipPointerMovePicking
+       dispose() {
+         const rr = this._meshes,
+           Sr = rr.length;
+         let Qr;
+         for (Qr = 0; Qr < Sr; Qr++) this.releaseForMesh(rr[Qr]);
+         this._meshes.length = 0, this._disposeVertexArrayObjects();
+         for (const Zr in this._vertexBuffers) this._vertexBuffers[Zr].dispose();
+         if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayI … [truncated]
+           const rr = this._parentContainer.geometries.indexOf(this);
+           rr > -1 && this._parentContainer.geometries.splice(rr, 1), this._parentContainer = null
+         }
+         this._isDisposed = !0
+       }
+       copy(rr) {
+         const Sr = new zr(rr, this._scene),
+           Qr = this.yar(void 0, !0);
+ ... (36 more added lines; see GitHub link above)
```

#### 258. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7887-L7888` → after: `L4068-L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4068-L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4068-L4070) · [Before (L7887-L7888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7887-L7888)

```diff
-       set skipPointerMovePicking(RR) {
-         this._pointerPickingConfiguration.skipPointerMovePicking = RR
+       serialize() {
+         const rr = {};
+         return rr.id = this.id, rr.uniqueId = this.uniqueId, rr.updatable = this._updatable, mr.b && mr.b.HasTags(this) && (rr.tags = mr.b.GetTags(this)), rr
```

#### 259. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7890-L7891` → after: `L4072-L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4072-L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4072-L4073) · [Before (L7890-L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7890-L7891)

```diff
-       get skipPointerDownPicking() {
-         return this._pointerPickingConfiguration.skipPointerDownPicking
+       _toNumberArray(rr) {
+         return Array.isArray(rr) ? rr : Array.prototype.slice.call(rr)
```

#### 260. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7893-L7894` → after: `L4075-L4077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4075-L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4075-L4077) · [Before (L7893-L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7893-L7894)

```diff
-       set skipPointerDownPicking(RR) {
-         this._pointerPickingConfiguration.skipPointerDownPicking = RR
+       clearCachedData() {
+         this._totalIndices = this._indices.length, this._indices = [], this._resetPointsArrayCache();
+         for (const rr in this._vertexBuffers) Object.prototype.hasOwnProperty.call(this._vertexBuffers, rr) && (this._vertexBuffers[rr]._buffer._data = null)
```

#### 261. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7896-L7897` → after: `L4079-L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4079-L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4079-L4081) · [Before (L7896-L7897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7896-L7897)

```diff
-       get skipPointerUpPicking() {
-         return this._pointerPickingConfiguration.skipPointerUpPicking
+       serializeVerticeData() {
+         const rr = this.serialize();
+         return this.isVerticesDataPresent(jr.j.PositionKind) && (rr.positions = this._toNumberArray(this.getVerticesData(jr.j.PositionKind)), this.isVertexBufferUpdatable(jr.j.PositionKind) && (rr.positionsUpdatable = !0)), this.isVerticesDataPresent(jr.j.NormalKind) && (rr.norma … [truncated]
```

#### 262. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7899-L7900` → after: `L4083-L4085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4083-L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4083-L4085) · [Before (L7899-L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7899-L7900)

```diff
-       set skipPointerUpPicking(RR) {
-         this._pointerPickingConfiguration.skipPointerUpPicking = RR
+       static ExtractFromMesh(rr, Sr) {
+         const Qr = rr._geometry;
+         return Qr ? Qr.copy(Sr) : null
```

#### 263. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7902-L7903` → after: `L4087-L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4087-L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4087-L4088) · [Before (L7902-L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7902-L7903)

```diff
-       get unTranslatedPointer() {
-         return this._inputManager.unTranslatedPointer
+       static RandomId() {
+         return pr.h.RandomId()
```

#### 264. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7905-L7906` → after: `L4090-L4093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4090-L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4090-L4093) · [Before (L7905-L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7905-L7906)

```diff
-       static get DragMovementThreshold() {
-         return jR.DragMovementThreshold
+       static _GetGeometryByLoadedUniqueId(rr, Sr) {
+         for (let Qr = 0; Qr < Sr.geometries.length; Qr++)
+           if (Sr.geometries[Qr]._loadedUniqueId === rr) return Sr.geometries[Qr];
+         return null
```

#### 265. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7908-L7909` → after: `L4095-L4222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4095-L4222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4095-L4222) · [Before (L7908-L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7908-L7909)

```diff
-       static set DragMovementThreshold(RR) {
-         jR.DragMovementThreshold = RR
+       static _ImportGeometry(rr, Sr) {
+         const Qr = Sr.eC(),
+           Zr = rr.geometryUniqueId,
+           ar = rr.geometryId;
+         if (Zr || ar) {
+           const rr = Zr ? this._GetGeometryByLoadedUniqueId(Zr, Qr) : Qr.getGeometryById(ar);
+           rr && rr.applyToMesh(Sr)
+         } else if (rr instanceof ArrayBuffer) {
+           const Qr = Sr._binaryInfo;
+           if (Qr.positionsAttrDesc && Qr.positionsAttrDesc.count > 0) {
+             const Zr = new Float32Array(rr, Qr.positionsAttrDesc.offset, Qr.positionsAttrDesc.count);
+             Sr.setVerticesData(jr.j.PositionKind, Zr, !1)
+           }
+           if (Qr.normalsAttrDesc && Qr.normalsAttrDesc.count > 0) {
+             const Zr = new Float32Array(rr, Qr.normalsAttrDesc.offset, Qr.normalsAttrDesc.count);
+             Sr.setVerticesData(jr.j.NormalKind, Zr, !1)
+ ... (112 more added lines; see GitHub link above)
```

#### 266. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7911-L7912` → after: `L4224-L4259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4224-L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4224-L4259) · [Before (L7911-L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7911-L7912)

```diff
-       static get LongPressDelay() {
-         return jR.LongPressDelay
+       static _CleanMatricesWeights(rr, Sr) {
+         const Qr = .001;
+         if (!fr.e.CleanBoneMatrixWeights) return;
+         let Zr;
+         if (!(rr.skeletonId > -1)) return;
+         {
+           const Qr = Sr.eC().getLastSkeletonById(rr.skeletonId);
+           if (!Qr) return;
+           Zr = Qr.bones.length
+         }
+         const Wr = Sr.getVerticesData(jr.j.MatricesIndicesKind),
+           ar = Sr.getVerticesData(jr.j.MatricesIndicesExtraKind),
+           Ir = rr.matricesWeights,
+           Er = rr.matricesWeightsExtra,
+           pr = rr.numBoneInfluencer,
+           xr = Ir.length;
+ ... (20 more added lines; see GitHub link above)
```

#### 267. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7914-L7915` → after: `L4261-L4263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4261-L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4261-L4263) · [Before (L7914-L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7914-L7915)

```diff
-       static set LongPressDelay(RR) {
-         jR.LongPressDelay = RR
+       static Parse(rr, Sr, Qr) {
+         const Wr = new zr(rr.id, Sr, void 0, rr.updatable);
+         return Wr._loadedUniqueId = rr.uniqueId, mr.b && mr.b.AddTagsTo(Wr, rr.tags), rr.delayLoadingFile ? (Wr.delayLoadState = 4, Wr.delayLoadingFile = Qr + rr.delayLoadingFile, Wr._boundingInfo = new Er.c(Zr.u.FromArray(rr.boundingBoxMinimum), Zr.u.FromArray(rr.boundingBoxMaxi … [truncated]
```

#### 268. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7917-L7918` → after: `L4265-L4289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4265-L4289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4265-L4289) · [Before (L7917-L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7917-L7918)

```diff
-       static get DoubleClickDelay() {
-         return jR.DoubleClickDelay
+     }
+   },
+   42299: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => xr,
+       f: () => Ur
+     });
+     var Zr = Qr(38560),
+       Wr = Qr(40246),
+       ar = Qr(42284),
+       jr = Qr(42243),
+       Ir = Qr(40237),
+       fr = Qr(42287),
+       Er = Qr(41995),
+       pr = Qr(38609);
+     class xr extends ar.c {
+ ... (9 more added lines; see GitHub link above)
```

#### 269. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7920-L7921` → after: `L4291-L4292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4291-L4292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4291-L4292) · [Before (L7920-L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7920-L7921)

```diff
-       static set DoubleClickDelay(RR) {
-         jR.DoubleClickDelay = RR
+       getClassName() {
+         return "InstancedMesh"
```

#### 270. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7923-L7924` → after: `L4294-L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4294-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4294-L4295) · [Before (L7923-L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7923-L7924)

```diff
-       static get ExclusiveDoubleClickMode() {
-         return jR.ExclusiveDoubleClickMode
+       get lightSources() {
+         return this._sourceMesh._lightSources
```

#### 271. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7926-L7927` → after: `L4297-L4301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4297-L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4297-L4301) · [Before (L7926-L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7926-L7927)

```diff
-       static set ExclusiveDoubleClickMode(RR) {
-         jR.ExclusiveDoubleClickMode = RR
+       _resyncLightSources() {}
+       _resyncLightSource() {}
+       _removeLightSource() {}
+       get receiveShadows() {
+         return this._sourceMesh.receiveShadows
```

#### 272. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7929-L7930` → after: `L4303-L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4303-L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4303-L4304) · [Before (L7929-L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7929-L7930)

```diff
-       get _eyePosition() {
-         return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? VR.r.ZeroReadOnly
+       set receiveShadows(rr) {
+         this._sourceMesh?.receiveShadows !== rr && Wr.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
```

#### 273. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7932-L7940` → after: `L4306-L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4306-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4306-L4307) · [Before (L7932-L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7932-L7940)

```diff
-       bindEyePosition(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
-           GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const yR = this._eyePosition,
-           tR = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
-           uR = this.floatingOriginOffset,
-           ZR = GG.set(yR.x, yR.y, yR.z, tR ? -1 : 1),
-           qR = ZR.subtractFromFloatsToRef(uR.x, uR.y, uR.z, 0, yG);
-         return RR && (GR ? RR.setFloat3(JR, qR.x, qR.y, qR.z) : RR.setVector4(JR, qR)), ZR
+       get material() {
+         return this._sourceMesh.material
```

#### 274. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7942-L7946` → after: `L4309-L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4309-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4309-L4310) · [Before (L7942-L7946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7942-L7946)

```diff
-       finalizeSceneUbo() {
-         const RR = this.getSceneUniformBuffer(),
-           JR = this.bindEyePosition(null),
-           GR = this.floatingOriginOffset;
-         return RR.updateFloat4("vEyePosition", JR.x - GR.x, JR.y - GR.y, JR.z - GR.z, JR.w), RR.update(), RR
+       set material(rr) {
+         this._sourceMesh?.material !== rr && Wr.c.Warn("Setting material on an instanced mesh has no effect")
```

#### 275. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7948-L7949` → after: `L4312-L4313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4312-L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4312-L4313) · [Before (L7948-L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7948-L7949)

```diff
-       set useRightHandedSystem(RR) {
-         this._useRightHandedSystem !== RR && (this._useRightHandedSystem = RR, this.markAllMaterialsAsDirty(16))
+       get visibility() {
+         return this._sourceMesh.visibility
```

#### 276. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7951-L7952` → after: `L4315-L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4315-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4315-L4316) · [Before (L7951-L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7951-L7952)

```diff
-       get useRightHandedSystem() {
-         return this._useRightHandedSystem
+       set visibility(rr) {
+         this._sourceMesh?.visibility !== rr && Wr.c.Warn("Setting visibility on an instanced mesh has no effect")
```

#### 277. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7954-L7955` → after: `L4318-L4319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4318-L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4318-L4319) · [Before (L7954-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7954-L7955)

```diff
-       setStepId(RR) {
-         this._currentStepId = RR
+       get skeleton() {
+         return this._sourceMesh.skeleton
```

#### 278. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7957-L7958` → after: `L4321-L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4321-L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4321-L4322) · [Before (L7957-L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7957-L7958)

```diff
-       getStepId() {
-         return this._currentStepId
+       set skeleton(rr) {
+         this._sourceMesh?.skeleton !== rr && Wr.c.Warn("Setting skeleton on an instanced mesh has no effect")
```

#### 279. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7960-L7961` → after: `L4324-L4325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4324-L4325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4324-L4325) · [Before (L7960-L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7960-L7961)

```diff
-       getInternalStep() {
-         return this._currentInternalStep
+       get renderingGroupId() {
+         return this._sourceMesh.renderingGroupId
```

#### 280. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7963-L7964` → after: `L4327-L4328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4327-L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4327-L4328) · [Before (L7963-L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7963-L7964)

```diff
-       set fogEnabled(RR) {
-         this._fogEnabled !== RR && (this._fogEnabled = RR, this.markAllMaterialsAsDirty(16))
+       set renderingGroupId(rr) {
+         this._sourceMesh && rr !== this._sourceMesh.renderingGroupId && Wr.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
```

#### 281. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7966-L7967` → after: `L4330-L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4330-L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4330-L4331) · [Before (L7966-L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7966-L7967)

```diff
-       get fogEnabled() {
-         return this._fogEnabled
+       get meshBlendingTag() {
+         return this._sourceMesh.meshBlendingTag
```

#### 282. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7969-L7970` → after: `L4333-L4334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4333-L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4333-L4334) · [Before (L7969-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7969-L7970)

```diff
-       set fogMode(RR) {
-         this._fogMode !== RR && (this._fogMode = RR, this.markAllMaterialsAsDirty(16))
+       set meshBlendingTag(rr) {
+         this._sourceMesh && rr !== this._sourceMesh.meshBlendingTag && Wr.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
```

#### 283. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7972-L7973` → after: `L4336-L4337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4336-L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4336-L4337) · [Before (L7972-L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7972-L7973)

```diff
-       get fogMode() {
-         return this._fogMode
+       getTotalVertices() {
+         return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
```

#### 284. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7975-L7976` → after: `L4339-L4340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4339-L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4339-L4340) · [Before (L7975-L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7975-L7976)

```diff
-       get prePass() {
-         return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
+       getTotalIndices() {
+         return this._sourceMesh.getTotalIndices()
```

#### 285. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7978-L7979` → after: `L4342-L4343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4342-L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4342-L4343) · [Before (L7978-L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7978-L7979)

```diff
-       set shadowsEnabled(RR) {
-         this._shadowsEnabled !== RR && (this._shadowsEnabled = RR, this.markAllMaterialsAsDirty(2))
+       get Rar() {
+         return this._sourceMesh
```

#### 286. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7981-L7982` → after: `L4345-L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4345-L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4345-L4346) · [Before (L7981-L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7981-L7982)

```diff
-       get shadowsEnabled() {
-         return this._shadowsEnabled
+       get geometry() {
+         return this._sourceMesh._geometry
```

#### 287. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7984-L7985` → after: `L4348-L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4348-L4349) · [Before (L7984-L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7984-L7985)

```diff
-       set lightsEnabled(RR) {
-         this._lightsEnabled !== RR && (this._lightsEnabled = RR, this.markAllMaterialsAsDirty(2))
+       createInstance(rr) {
+         return this._sourceMesh.createInstance(rr)
```

#### 288. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7987-L7988` → after: `L4351-L4353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4351-L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4351-L4353) · [Before (L7987-L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7987-L7988)

```diff
-       get lightsEnabled() {
-         return this._lightsEnabled
+       isReady() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         return this._sourceMesh.isReady(rr, !0)
```

#### 289. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7990-L7991` → after: `L4355-L4356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4355-L4356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4355-L4356) · [Before (L7990-L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7990-L7991)

```diff
-       get activeCameras() {
-         return this._activeCameras
+       getVerticesData(rr, Sr, Qr) {
+         return this._sourceMesh.getVerticesData(rr, Sr, Qr)
```

#### 290. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7993-L7996` → after: `L4358-L4359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4358-L4359) · [Before (L7993-L7996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7993-L7996)

```diff
-       set activeCameras(RR) {
-         this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), RR && (this._unObserveActiveCameras = (0, TR.i)(RR, (() => {
-           this.onActiveCamerasChanged.notifyObservers(this)
-         }))), this._activeCameras = RR
+       copyVerticesData(rr, Sr) {
+         this._sourceMesh.copyVerticesData(rr, Sr)
```

#### 291. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L7998-L7999` → after: `L4361-L4362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4361-L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4361-L4362) · [Before (L7998-L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L7998-L7999)

```diff
-       get activeCamera() {
-         return this._activeCamera
+       getVertexBuffer(rr, Sr) {
+         return this._sourceMesh.getVertexBuffer(rr, Sr)
```

#### 292. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8001-L8002` → after: `L4364-L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4364-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4364-L4365) · [Before (L8001-L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8001-L8002)

```diff
-       set activeCamera(RR) {
-         RR !== this._activeCamera && (this._activeCamera = RR, this.onActiveCameraChanged.notifyObservers(this))
+       setVerticesData(rr, Sr, Qr, Zr) {
+         return this.Rar && this.Rar.setVerticesData(rr, Sr, Qr, Zr), this.Rar
```

#### 293. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8004-L8005` → after: `L4367-L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4367-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4367-L4368) · [Before (L8004-L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8004-L8005)

```diff
-       get _hasDefaultMaterial() {
-         return uG.DefaultMaterialFactory !== uG._OriginalDefaultMaterialFactory
+       updateVerticesData(rr, Sr, Qr, Zr) {
+         return this.Rar && this.Rar.updateVerticesData(rr, Sr, Qr, Zr), this.Rar
```

#### 294. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8007-L8008` → after: `L4370-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4370-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4370-L4372) · [Before (L8007-L8008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8007-L8008)

```diff
-       get defaultMaterial() {
-         return this._defaultMaterial || (this._defaultMaterial = uG.DefaultMaterialFactory(this)), this._defaultMaterial
+       setIndices(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+         return this.Rar && this.Rar.setIndices(rr, Sr), this.Rar
```

#### 295. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8010-L8011` → after: `L4374-L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4374-L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4374-L4375) · [Before (L8010-L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8010-L8011)

```diff
-       set defaultMaterial(RR) {
-         this._defaultMaterial = RR
+       isVerticesDataPresent(rr) {
+         return this._sourceMesh.isVerticesDataPresent(rr)
```

#### 296. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8013-L8014` → after: `L4377-L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4377-L4378) · [Before (L8013-L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8013-L8014)

```diff
-       set texturesEnabled(RR) {
-         this._texturesEnabled !== RR && (this._texturesEnabled = RR, this.markAllMaterialsAsDirty(1))
+       yar() {
+         return this._sourceMesh.yar()
```

#### 297. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8016-L8017` → after: `L4380-L4381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4380-L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4380-L4381) · [Before (L8016-L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8016-L8017)

```diff
-       get texturesEnabled() {
-         return this._texturesEnabled
+       get _positions() {
+         return this._sourceMesh._positions
```

#### 298. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8019-L8020` → after: `L4383-L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4383-L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4383-L4392) · [Before (L8019-L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8019-L8020)

```diff
-       get frameGraph() {
-         return this._frameGraph
+       refreshBoundingInfo() {
+         let rr, Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           Qr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.hasBoundingInfo && this.mG().isLocked) return this;
+         rr = "object" === typeof Sr ? Sr : {
+           applySkeleton: Sr,
+           applyMorph: Qr
+         };
+         const Zr = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
+         return this._refreshBoundingInfo(this._sourceMesh._getData(rr, null, Er.j.PositionKind), Zr), this
```

#### 299. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8022-L8024` → after: `L4394-L4395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4394-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4394-L4395) · [Before (L8022-L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8022-L8024)

```diff
-       set frameGraph(RR) {
-         if (this._frameGraph) return this._frameGraph = RR, void(RR || (this.customRenderFunction = this._currentCustomRenderFunction));
-         this._frameGraph = RR, RR && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
+       _preActivate() {
+         return this._currentLOD && this._currentLOD._preActivate(), this
```

#### 300. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8026-L8027` → after: `L4397-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4397-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4397-L4404) · [Before (L8026-L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8026-L8027)

```diff
-       set skeletonsEnabled(RR) {
-         this._skeletonsEnabled !== RR && (this._skeletonsEnabled = RR, this.markAllMaterialsAsDirty(8))
+       _activate(rr, Sr) {
+         if (super._activate(rr, Sr), this._sourceMesh.jT || Wr.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
+           if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
+           if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, rr), Sr) {
+             if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
+           } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
+         }
+         return !1
```

#### 301. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8029-L8030` → after: `L4406-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4406-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4406-L4407) · [Before (L8029-L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8029-L8030)

```diff
-       get skeletonsEnabled() {
-         return this._skeletonsEnabled
+       _postActivate() {
+         this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceM … [truncated]
```

#### 302. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8032-L8033` → after: `L4409-L4415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4409-L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4409-L4415) · [Before (L8032-L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8032-L8033)

```diff
-       get collisionCoordinator() {
-         return this._collisionCoordinator || (this._collisionCoordinator = uG.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
+       getWorldMatrix() {
+         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== fr.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
+           this._billboardWorldMatrix || (this._billboardWorldMatrix = new Zr.d);
+           const rr = this._currentLOD._masterMesh;
+           return this._currentLOD._masterMesh = this, Zr.n.kU[7].iH(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.iH(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.iH(Zr.n.kU[7]), this._currentLOD._masterMesh = … [truncated]
+         }
+         return super.getWorldMatrix()
```

#### 303. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8035-L8036` → after: `L4417-L4418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4417-L4418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4417-L4418) · [Before (L8035-L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8035-L8036)

```diff
-       get renderingManager() {
-         return this._renderingManager
+       get gC() {
+         return !0
```

#### 304. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8038-L8039` → after: `L4420-L4427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4420-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4420-L4427) · [Before (L8038-L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8038-L8039)

```diff
-       get frustumPlanes() {
-         return this._frustumPlanes
+       getLOD(rr) {
+         if (!rr) return this;
+         const Sr = this.Rar.getLODLevels();
+         if (Sr && 0 !== Sr.length) {
+           const Sr = this.mG();
+           this._currentLOD = this.Rar.getLOD(rr, Sr.oWr)
+         } else this._currentLOD = this.Rar;
+         return this._currentLOD
```

#### 305. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8041-L8045` → after: `L4429-L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4429-L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4429-L4430) · [Before (L8041-L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8041-L8045)

```diff
-       _registerTransientComponents() {
-         if (this._transientComponents.length > 0) {
-           for (const RR of this._transientComponents) RR.register();
-           this._transientComponents.length = 0
-         }
+       _preActivateForIntermediateRendering(rr) {
+         return this.Rar._preActivateForIntermediateRendering(rr)
```

#### 306. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8047-L8050` → after: `L4432-L4435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4432-L4435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4432-L4435) · [Before (L8047-L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8047-L8050)

```diff
-       qtR(RR) {
-         this._components.push(RR), this._transientComponents.push(RR);
-         const JR = RR;
-         JR.addFromContainer && JR.serialize && this._serializableComponents.push(JR)
+       _syncSubMeshes() {
+         if (this.releaseSubMeshes(), this._sourceMesh.jT)
+           for (let rr = 0; rr < this._sourceMesh.jT.length; rr++) this._sourceMesh.jT[rr].clone(this, this._sourceMesh);
+         return this
```

#### 307. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8052-L8055` → after: `L4437-L4438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4437-L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4437-L4438) · [Before (L8052-L8055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8052-L8055)

```diff
-       _getComponent(RR) {
-         for (const JR of this._components)
-           if (JR.name === RR) return JR;
-         return null
+       _generatePointsArray() {
+         return this._sourceMesh._generatePointsArray()
```

#### 308. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8057-L8058` → after: `L4440-L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4440-L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4440-L4441) · [Before (L8057-L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8057-L8058)

```diff
-       get uniqueId() {
-         return this._uniqueId
+       _updateBoundingInfo() {
+         return this.hasBoundingInfo ? this.mG().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
```

#### 309. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8060-L8077` → after: `L4443-L4452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4443-L4452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4443-L4452) · [Before (L8060-L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8060-L8077)

```diff
-       constructor(RR, JR) {
-         this._inputManager = new jR(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new ER.e(.2, .2, .3, 1), this.onClearColorChangedObservable = new ZR.b, … [truncated]
-           data: [],
-           length: 0
-         }, this._defaultSubMeshCandidates = {
-           data: [],
-           length: 0
-         }, this.onReadyTimeoutObservable = new ZR.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipp … [truncated]
-         const GR = {
-           useGeometryUniqueIdsMap: !0,
-           useMaterialMeshMap: !0,
-           useClonedMeshMap: !0,
-           virtual: !1,
-           defaultCameraLayerMask: 268435455,
-           defaultRenderableLayerMask: 268435455,
-           ...JR
- ... (2 more removed lines; see GitHub link above)
+       clone(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           Qr = arguments.length > 2 ? arguments[2] : void 0;
+         const Zr = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(rr);
+         if (Ir.b.DeepCopy(this, Zr, ["name", "jT", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "Rar", "gC", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "Har", "collider", "edgesRenderer", "forward", "up", "right", "a … [truncated]
+           for (let Wr = 0; Wr < this.eC().meshes.length; Wr++) {
+             const rr = this.eC().meshes[Wr];
+             rr.parent === this && rr.clone(rr.name, Zr)
+           }
+         return Zr.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(Zr), Zr
```

#### 310. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8079-L8080` → after: `L4454-L4456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4454-L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4454-L4456) · [Before (L8079-L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8079-L8080)

```diff
-       getClassName() {
-         return "Scene"
+       dispose(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._sourceMesh.trr(this), super.dispose(rr, Sr)
```

#### 311. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8082-L8083` → after: `L4458-L4459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4458-L4459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4458-L4459) · [Before (L8082-L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8082-L8083)

```diff
-       _getDefaultMeshCandidates() {
-         return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
+       _serializeAsParent(rr) {
+         super._serializeAsParent(rr), rr.parentId = this._sourceMesh.uniqueId, rr.parentInstanceIndex = this._indexInSourceMeshInstanceArray
```

#### 312. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8085-L8086` → after: `L4461-L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4461-L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4461-L4468) · [Before (L8085-L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8085-L8086)

```diff
-       _getDefaultSubMeshCandidates(RR) {
-         return this._defaultSubMeshCandidates.data = RR.XM, this._defaultSubMeshCandidates.length = RR.XM.length, this._defaultSubMeshCandidates
+       instantiateHierarchy() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           Sr = arguments.length > 1 ? arguments[1] : void 0,
+           Qr = arguments.length > 2 ? arguments[2] : void 0;
+         const Zr = this.clone("Clone of " + (this.name || this.id), rr || this.parent, !0, Sr && Sr.newSourcedMesh);
+         Zr && Qr && Qr(this, Zr);
+         for (const Wr of this.getChildTransformNodes(!0)) Wr.instantiateHierarchy(Zr, Sr, Qr);
+         return Zr
```

#### 313. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8088-L8089` → after: `L4470-L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4470-L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4470-L4477) · [Before (L8088-L8089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8088-L8089)

```diff
-       setDefaultCandidateProviders() {
-         this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = RR => this._getDefaultSubMeshCandidates(RR), this.getIntersectingSubMeshCandidates = (RR, JR) => this._getDefaultSubMeshCandidates(RR), this.getCollidingSubMeshCandida … [truncated]
+     }
+     let mr = !1;
+ 
+     function Nr(rr, Sr, Qr, Zr, Wr) {
+       for (let ar = 0; ar < Sr.length; ar++) {
+         const jr = rr[Sr[ar]] ?? 0,
+           Ir = Wr + Qr[ar];
+         jr.toArray ? jr.toArray(Zr, Ir) : jr.copyToArray ? jr.copyToArray(Zr, Ir) : Zr[Ir] = jr
```

#### 314. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8091-L8092` → after: `L4479-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4479-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4479-L4594) · [Before (L8091-L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8091-L8092)

```diff
-       get meshUnderPointer() {
-         return this._inputManager.meshUnderPointer
+     }
+ 
+     function Ur() {
+       mr || (mr = !0, jr.c._instancedMeshFactory = (rr, Sr) => {
+         const Qr = new xr(rr, Sr);
+         if (Sr.pG) {
+           Qr.pG = {};
+           for (const rr in Sr.pG) Qr.pG[rr] = Sr.pG[rr]
+         }
+         return Qr
+       }, jr.c.prototype.aG = function(rr, Sr) {
+         if (!this.pG) {
+           this.pG = {};
+           for (const rr of this.instances) rr.pG = {}
+         }
+         this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
+ ... (100 more added lines; see GitHub link above)
```

#### 315. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8094-L8095` → after: `L4596-L4600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4596-L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4596-L4600) · [Before (L8094-L8095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8094-L8095)

```diff
-       get pointerX() {
-         return this._inputManager.pointerX
+     }
+     class wr {}
+     class cr {
+       constructor() {
+         this.batchCache = new or(this), this.batchCacheReplacementModeInFrozenMode = new or(this), this.instancesBufferSize = 2048
```

#### 316. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8097-L8098` → after: `L4602-L4605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4602-L4605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4602-L4605) · [Before (L8097-L8098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8097-L8098)

```diff
-       set pointerX(RR) {
-         this._inputManager.pointerX = RR
+     }
+     class Fr {
+       constructor() {
+         this.renderPasses = {}
```

#### 317. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8100-L8101` → after: `L4607-L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4607-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4607-L4610) · [Before (L8100-L8101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8100-L8101)

```diff
-       get pointerY() {
-         return this._inputManager.pointerY
+     }
+     class or {
+       constructor(rr) {
+         this.parent = rr, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
```

#### 318. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8103-L8104` → after: `L4612-L4615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4612-L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4612-L4615) · [Before (L8103-L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8103-L8104)

```diff
-       set pointerY(RR) {
-         this._inputManager.pointerY = RR
+     }
+     class br {
+       constructor() {
+         this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
```

#### 319. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8106-L8107` → after: `L4617-L4620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4617-L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4617-L4620) · [Before (L8106-L8107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8106-L8107)

```diff
-       getCachedMaterial() {
-         return this._cachedMaterial
+     }
+     class Jr {
+       constructor() {
+         this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
```

#### 320. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8109-L8110` → after: `L4622-L4632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4622-L4632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4622-L4632) · [Before (L8109-L8110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8109-L8110)

```diff
-       getCachedEffect() {
-         return this._cachedEffect
+     }
+     const Dr = {
+       source: null,
+       parent: null,
+       doNotCloneChildren: !1,
+       clonePhysicsImpostor: !0,
+       cloneThinInstances: !1
+     };
+     class dr extends Pr.c {
+       static _GetDefaultSideOrientation(rr) {
+         return rr || dr.FRONTSIDE
```

#### 321. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8112-L8113` → after: `L4634-L4635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4634-L4635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4634-L4635) · [Before (L8112-L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8112-L8113)

```diff
-       getCachedVisibility() {
-         return this._cachedVisibility
+       get useLODScreenCoverage() {
+         return this._internalMeshDataInfo._useLODScreenCoverage
```

#### 322. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8115-L8117` → after: `L4637-L4638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4637-L4638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4637-L4638) · [Before (L8115-L8117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8115-L8117)

```diff
-       isCachedMaterialInvalid(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-         return this._cachedEffect !== JR || this._cachedMaterial !== RR || this._cachedVisibility !== GR
+       set useLODScreenCoverage(rr) {
+         this._internalMeshDataInfo._useLODScreenCoverage = rr, this._sortLODLevels()
```

#### 323. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8119-L8120` → after: `L4640-L4641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4640-L4641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4640-L4641) · [Before (L8119-L8120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8119-L8120)

```diff
-       ke() {
-         return this._engine
+       get computeBonesUsingShaders() {
+         return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
```

#### 324. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8122-L8123` → after: `L4643-L4644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4643-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4643-L4644) · [Before (L8122-L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8122-L8123)

```diff
-       getTotalVertices() {
-         return this._totalVertices.current
+       set computeBonesUsingShaders(rr) {
+         this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== rr && (rr && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(Lr.j.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVer … [truncated]
```

#### 325. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8125-L8126` → after: `L4646-L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4646-L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4646-L4647) · [Before (L8125-L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8125-L8126)

```diff
-       get totalVerticesPerfCounter() {
-         return this._totalVertices
+       get onBeforeRenderObservable() {
+         return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new zr.d), this._internalMeshDataInfo._onBeforeRenderObservable
```

#### 326. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8128-L8129` → after: `L4649-L4650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4649-L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4649-L4650) · [Before (L8128-L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8128-L8129)

```diff
-       getActiveIndices() {
-         return this._activeIndices.current
+       get onBeforeBindObservable() {
+         return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new zr.d), this._internalMeshDataInfo._onBeforeBindObservable
```

#### 327. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8131-L8132` → after: `L4652-L4653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4652-L4653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4652-L4653) · [Before (L8131-L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8131-L8132)

```diff
-       get totalActiveIndicesPerfCounter() {
-         return this._activeIndices
+       get onAfterRenderObservable() {
+         return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new zr.d), this._internalMeshDataInfo._onAfterRenderObservable
```

#### 328. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8134-L8135` → after: `L4655-L4656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4655-L4656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4655-L4656) · [Before (L8134-L8135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8134-L8135)

```diff
-       getActiveParticles() {
-         return this._activeParticles.current
+       get onBetweenPassObservable() {
+         return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new zr.d), this._internalMeshDataInfo._onBetweenPassObservable
```

#### 329. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8137-L8138` → after: `L4658-L4659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4658-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4658-L4659) · [Before (L8137-L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8137-L8138)

```diff
-       get activeParticlesPerfCounter() {
-         return this._activeParticles
+       get onBeforeDrawObservable() {
+         return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new zr.d), this._internalMeshDataInfo._onBeforeDrawObservable
```

#### 330. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8140-L8141` → after: `L4661-L4662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4661-L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4661-L4662) · [Before (L8140-L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8140-L8141)

```diff
-       getActiveBones() {
-         return this._activeBones.current
+       set onBeforeDraw(rr) {
+         this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(rr)
```

#### 331. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8143-L8144` → after: `L4664-L4665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4664-L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4664-L4665) · [Before (L8143-L8144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8143-L8144)

```diff
-       get activeBonesPerfCounter() {
-         return this._activeBones
+       get Har() {
+         return this.instances.length > 0
```

#### 332. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8146-L8147` → after: `L4667-L4668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4667-L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4667-L4668) · [Before (L8146-L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8146-L8147)

```diff
-       getActiveMeshes() {
-         return this._activeMeshes
+       get hasThinInstances() {
+         return (this.forcedInstanceCount || this._thinInstanceDataStorage.instancesCount || 0) > 0
```

#### 333. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8149-L8150` → after: `L4670-L4671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4670-L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4670-L4671) · [Before (L8149-L8150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8149-L8150)

```diff
-       getAnimationRatio() {
-         return void 0 !== this._animationRatio ? this._animationRatio : 1
+       get forcedInstanceCount() {
+         return this._internalMeshDataInfo._forcedInstanceCount
```

#### 334. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8152-L8153` → after: `L4673-L4674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4673-L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4673-L4674) · [Before (L8152-L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8152-L8153)

```diff
-       getRenderId() {
-         return this._renderId
+       set forcedInstanceCount(rr) {
+         this._internalMeshDataInfo._forcedInstanceCount = rr
```

#### 335. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8155-L8156` → after: `L4676-L4677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4676-L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4676-L4677) · [Before (L8155-L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8155-L8156)

```diff
-       getFrameId() {
-         return this._frameId
+       get sideOrientation() {
+         return this._internalMeshDataInfo._sideOrientation
```

#### 336. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8158-L8159` → after: `L4679-L4680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4679-L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4679-L4680) · [Before (L8158-L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8158-L8159)

```diff
-       incrementRenderId() {
-         this._renderId++
+       set sideOrientation(rr) {
+         this._internalMeshDataInfo._sideOrientation = rr, this._internalAbstractMeshDataInfo._sideOrientationHint = this._scene.useRightHandedSystem && 1 === rr || !this._scene.useRightHandedSystem && 0 === rr
```

#### 337. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8161-L8162` → after: `L4682-L4683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4682-L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4682-L4683) · [Before (L8161-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8161-L8162)

```diff
-       _createUbo() {
-         this.setSceneUniformBuffer(this.createSceneUniformBuffer())
+       get _effectiveSideOrientation() {
+         return this._internalMeshDataInfo._effectiveSideOrientation
```

#### 338. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8164-L8165` → after: `L4685-L4686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4685-L4686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4685-L4686) · [Before (L8164-L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8164-L8165)

```diff
-       simulatePointerMove(RR, JR) {
-         return this._inputManager.simulatePointerMove(RR, JR), this
+       get overrideMaterialSideOrientation() {
+         return this.sideOrientation
```

#### 339. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8167-L8168` → after: `L4688-L4689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4688-L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4688-L4689) · [Before (L8167-L8168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8167-L8168)

```diff
-       simulatePointerDown(RR, JR) {
-         return this._inputManager.simulatePointerDown(RR, JR), this
+       set overrideMaterialSideOrientation(rr) {
+         this.sideOrientation = rr, this.material && (this.material.sideOrientation = null)
```

#### 340. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8170-L8171` → after: `L4691-L4692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4691-L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4691-L4692) · [Before (L8170-L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8170-L8171)

```diff
-       simulatePointerUp(RR, JR, GR) {
-         return this._inputManager.simulatePointerUp(RR, JR, GR), this
+       get overrideRenderingFillMode() {
+         return this._internalMeshDataInfo._overrideRenderingFillMode
```

#### 341. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8173-L8175` → after: `L4694-L4695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4694-L4695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4694-L4695) · [Before (L8173-L8175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8173-L8175)

```diff
-       isPointerCaptured() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return this._inputManager.isPointerCaptured(RR)
+       set overrideRenderingFillMode(rr) {
+         this._internalMeshDataInfo._overrideRenderingFillMode = rr
```

#### 342. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8177-L8181` → after: `L4697-L4698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4697-L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4697-L4698) · [Before (L8177-L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8177-L8181)

```diff
-       attachControl() {
-         let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         this._inputManager.attachControl(RR, JR, GR)
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 343. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8183-L8184` → after: `L4700-L4701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4700-L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4700-L4701) · [Before (L8183-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8183-L8184)

```diff
-       detachControl() {
-         this._inputManager.detachControl()
+       set material(rr) {
+         rr && (this.material && null === this.material.sideOrientation || this._internalAbstractMeshDataInfo._sideOrientationHint) && (rr.sideOrientation = null), this._setMaterial(rr)
```

#### 344. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8186-L8235` → after: `L4703-L4704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4703-L4704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4703-L4704) · [Before (L8186-L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8186-L8235)

```diff
-       isReady() {
-         let RR, JR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         if (this._isDisposed) return !1;
-         const GR = this.ke(),
-           yR = GR.currentRenderPassId;
-         GR.currentRenderPassId = this.activeCamera?.renderPassId ?? yR;
-         let tR = !0;
-         for (this._pendingData.length > 0 && (tR = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && tR && (tR = this.depthPeelingRenderer.isReady()), JR && (this._processedMaterials.reset(), this._materialsRenderTargets.res … [truncated]
-           const yR = this.meshes[RR];
-           if (!yR.XM || 0 === yR.XM.length) continue;
-           if (!yR.isReady(!0)) {
-             tR = !1;
-             continue
-           }
-           const uR = yR.hasThinInstances || "InstancedMesh" === yR.getClassName() || "InstancedLinesMesh" === yR.getClassName() || GR.getCaps().instancedArrays && yR.instances.length > 0;
-           for (let RR = 0, JR = this._isReadyForMeshStage; RR < JR.length; RR++) {
- ... (34 more removed lines; see GitHub link above)
+       get source() {
+         return this._internalMeshDataInfo._source
```

#### 345. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8237-L8238` → after: `L4706-L4707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4706-L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4706-L4707) · [Before (L8237-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8237-L8238)

```diff
-       resetCachedMaterial() {
-         this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
+       get cloneMeshMap() {
+         return this._internalMeshDataInfo.meshMap
```

#### 346. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8240-L8241` → after: `L4709-L4710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4709-L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4709-L4710) · [Before (L8240-L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8240-L8241)

```diff
-       registerBeforeRender(RR) {
-         this.onBeforeRenderObservable.add(RR)
+       get isUnIndexed() {
+         return this._unIndexed
```

#### 347. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8243-L8244` → after: `L4712-L4713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4712-L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4712-L4713) · [Before (L8243-L8244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8243-L8244)

```diff
-       unregisterBeforeRender(RR) {
-         this.onBeforeRenderObservable.removeCallback(RR)
+       set isUnIndexed(rr) {
+         this._unIndexed !== rr && (this._unIndexed = rr, this._markSubMeshesAsAttributesDirty())
```

#### 348. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8246-L8247` → after: `L4715-L4717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4715-L4717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4715-L4717) · [Before (L8246-L8247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8246-L8247)

```diff
-       registerAfterRender(RR) {
-         this.onAfterRenderObservable.add(RR)
+       get worldMatrixInstancedBuffer() {
+         const rr = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
+         return rr ? rr.instancesData : void 0
```

#### 349. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8249-L8250` → after: `L4719-L4721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4719-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4719-L4721) · [Before (L8249-L8250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8249-L8250)

```diff
-       unregisterAfterRender(RR) {
-         this.onAfterRenderObservable.removeCallback(RR)
+       get previousWorldMatrixInstancedBuffer() {
+         const rr = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._instanceDataStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
+         return rr ? rr.instancesPreviousData : void 0
```

#### 350. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8252-L8258` → after: `L4723-L4724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4723-L4724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4723-L4724) · [Before (L8252-L8258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8252-L8258)

```diff
-       _executeOnceBeforeRender(RR) {
-         const JR = () => {
-           RR(), setTimeout((() => {
-             this.unregisterBeforeRender(JR)
-           }))
-         };
-         this.registerBeforeRender(JR)
+       get manualUpdateOfWorldMatrixInstancedBuffer() {
+         return this._instanceDataStorage.manualUpdate
```

#### 351. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8260-L8263` → after: `L4726-L4727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4726-L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4726-L4727) · [Before (L8260-L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8260-L8263)

```diff
-       executeOnceBeforeRender(RR, JR) {
-         void 0 !== JR ? setTimeout((() => {
-           this._executeOnceBeforeRender(RR)
-         }), JR) : this._executeOnceBeforeRender(RR)
+       set manualUpdateOfWorldMatrixInstancedBuffer(rr) {
+         this._instanceDataStorage.manualUpdate = rr
```

#### 352. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8265-L8266` → after: `L4729-L4730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4729-L4730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4729-L4730) · [Before (L8265-L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8265-L8266)

```diff
-       addPendingData(RR) {
-         this._pendingData.push(RR)
+       get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
+         return this._instanceDataStorage.previousManualUpdate
```

#### 353. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8268-L8270` → after: `L4732-L4733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4732-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4732-L4733) · [Before (L8268-L8270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8268-L8270)

```diff
-       removePendingData(RR) {
-         const JR = this.isLoading,
-           GR = this._pendingData.indexOf(RR); - 1 !== GR && this._pendingData.splice(GR, 1), JR && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
+       set manualUpdateOfPreviousWorldMatrixInstancedBuffer(rr) {
+         this._instanceDataStorage.previousManualUpdate = rr
```

#### 354. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8272-L8273` → after: `L4735-L4736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4735-L4736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4735-L4736) · [Before (L8272-L8273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8272-L8273)

```diff
-       getWaitingItemsCount() {
-         return this._pendingData.length
+       get forceWorldMatrixInstancedBufferUpdate() {
+         return this._instanceDataStorage.forceMatrixUpdates
```

#### 355. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8275-L8276` → after: `L4738-L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4738-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4738-L4739) · [Before (L8275-L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8275-L8276)

```diff
-       get isLoading() {
-         return this._pendingData.length > 0
+       set forceWorldMatrixInstancedBufferUpdate(rr) {
+         this._instanceDataStorage.forceMatrixUpdates = rr
```

#### 356. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8278-L8279` → after: `L4741-L4772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4741-L4772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4741-L4772) · [Before (L8278-L8279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8278-L8279)

```diff
-       addIsReadyCheck(RR) {
-         -1 === this._isReadyChecks.indexOf(RR) && this._isReadyChecks.push(RR)
+       _copySource(rr, Sr) {
+         let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         const Wr = this.eC();
+         if (rr._geometry && rr._geometry.applyToMesh(this), er.b.DeepCopy(rr, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "Har", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
+           const Sr = rr._ranges;
+           for (const rr in Sr) Object.prototype.hasOwnProperty.call(Sr, rr) && Sr[rr] && this.createAnimationRange(rr, Sr[rr].from, Sr[rr].to)
+         }
+         if (rr.metadata && rr.metadata.clone ? this.metadata = rr.metadata.clone() : this.metadata = rr.metadata, this._internalMetadata = rr._internalMetadata, this.meshBlendingTag = rr.meshBlendingTag, Kr.b && Kr.b.HasTags(rr) && Kr.b.AddTagsTo(this, Kr.b.GetTags(rr, !0)), this … [truncated]
+           const Wr = rr.getDescendants(!0);
+           for (let rr = 0; rr < Wr.length; rr++) {
+             const ar = Wr[rr];
+             ar._isMesh ? (Dr.parent = this, Dr.doNotCloneChildren = Sr, Dr.clonePhysicsImpostor = Qr, Dr.cloneThinInstances = Zr, ar.clone(this.name + "." + ar.name, Dr)) : ar.clone && ar.clone(this.name + "." + ar.name, this)
+           }
+         }
+         if (rr.morphTargetManager && (this.morphTargetManager = rr.morphTargetManager), (0, Ar.c)(Wr.getPhysicsEngine)) {
+ ... (16 more added lines; see GitHub link above)
```

#### 357. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8281-L8282` → after: `L4774-L4792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4774-L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4774-L4792) · [Before (L8281-L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8281-L8282)

```diff
-       removeIsReadyCheck(RR) {
-         const JR = this._isReadyChecks.indexOf(RR); - 1 !== JR && this._isReadyChecks.splice(JR, 1)
+       constructor(rr) {
+         let Sr, Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           ar = arguments.length > 4 ? arguments[4] : void 0,
+           jr = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         super(rr, Qr), this._internalMeshDataInfo = new Jr, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new br, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation =  … [truncated]
+           rr && Qr && (this._uniformBuffer ? this.transferToEffect(Sr) : Qr.bindOnlyWorldMatrix(Sr))
+         };
+         let Ir = !1;
+         if (Zr && void 0 === Zr._addToSceneRootNodes) {
+           const rr = Zr;
+           Sr = rr.parent ?? null, Wr = rr.source ?? null, ar = rr.doNotCloneChildren ?? !1, jr = rr.clonePhysicsImpostor ?? !0, Ir = rr.cloneThinInstances ?? !1
+         } else Sr = Zr;
+         Wr && this._copySource(Wr, ar, jr, Ir), null !== Sr && (this.parent = Sr), this._instanceDataStorage.hardwareInstancedRendering = this.MU().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = rr => {
+           rr.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
+ ... (3 more added lines; see GitHub link above)
```

#### 358. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8284-L8286` → after: `L4794-L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4794-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4794-L4804) · [Before (L8284-L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8284-L8286)

```diff
-       executeWhenReady(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.onReadyObservable.addOnce(RR), null === this._executeWhenReadyTimeoutId && this._checkIsReady(JR)
+       instantiateHierarchy() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           Sr = arguments.length > 1 ? arguments[1] : void 0,
+           Qr = arguments.length > 2 ? arguments[2] : void 0;
+         const Zr = 0 === this.getTotalVertices() || Sr && Sr.doNotInstantiate && (!0 === Sr.doNotInstantiate || Sr.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), rr || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
+         Zr.parent = rr || this.parent, Zr.position = this.position.clone(), Zr.Tx = this.Tx.clone(), this.rotationQuaternion ? Zr.rotationQuaternion = this.rotationQuaternion.clone() : Zr.rotation = this.rotation.clone(), Qr && Qr(this, Zr);
+         for (const Wr of this.getChildTransformNodes(!0)) "InstancedMesh" === Wr.getClassName() && "Mesh" === Zr.getClassName() && Wr.Rar === this ? Wr.instantiateHierarchy(Zr, {
+           doNotInstantiate: Sr && Sr.doNotInstantiate || !1,
+           newSourcedMesh: Zr
+         }, Qr) : Wr.instantiateHierarchy(Zr, Sr, Qr);
+         return Zr
```

#### 359. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8288-L8294` → after: `L4806-L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4806-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4806-L4807) · [Before (L8288-L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8288-L8294)

```diff
-       async whenReadyAsync() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         return await new Promise((JR => {
-           this.executeWhenReady((() => {
-             JR()
-           }), RR)
-         }))
+       getClassName() {
+         return "Mesh"
```

#### 360. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8296-L8297` → after: `L4809-L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4809-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4809-L4810) · [Before (L8296-L8297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8296-L8297)

```diff
-       _clearReadynessChecksData() {
-         this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
+       get _isMesh() {
+         return !0
```

#### 361. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8299-L8306` → after: `L4812-L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4812-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4812-L4822) · [Before (L8299-L8306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8299-L8306)

```diff
-       _checkIsReady() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = uR.b.Now;
-         else if (this.onReadyTimeoutDuration > 0 && uR.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
-         if (this.isReady(RR)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
-         this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
-           this.incrementRenderId(), this._checkIsReady(RR)
-         }), 100)
+       toString(rr) {
+         let Sr = super.toString(rr);
+         if (Sr += ", n vertices: " + this.getTotalVertices(), Sr += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
+           for (let Qr = 0; Qr < this.animations.length; Qr++) Sr += ", animation[0]: " + this.animations[Qr].toString(rr);
+         if (rr)
+           if (this._geometry) {
+             const rr = this.yar(),
+               Qr = this.getVerticesData(Lr.j.PositionKind);
+             Qr && rr && (Sr += ", flat shading: " + (Qr.length / 3 === rr.length ? "YES" : "NO"))
+           } else Sr += ", flat shading: UNKNOWN";
+         return Sr
```

#### 362. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8308-L8309` → after: `L4824-L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4824-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4824-L4826) · [Before (L8308-L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8308-L8309)

```diff
-       get animatables() {
-         return this._activeAnimatables
+       _unBindEffect() {
+         super._unBindEffect();
+         for (const rr of this.instances) rr._unBindEffect()
```

#### 363. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8311-L8312` → after: `L4828-L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4828-L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4828-L4829) · [Before (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8311-L8312)

```diff
-       resetLastAnimationTimeFrame() {
-         this._animationTimeLast = uR.b.Now
+       get hasLODLevels() {
+         return this._internalMeshDataInfo._LODLevels.length > 0
```

#### 364. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8314-L8315` → after: `L4831-L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4831-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4831-L4832) · [Before (L8314-L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8314-L8315)

```diff
-       getViewMatrix() {
-         return this._viewMatrix
+       getLODLevels() {
+         return this._internalMeshDataInfo._LODLevels
```

#### 365. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8317-L8318` → after: `L4834-L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4834-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4834-L4836) · [Before (L8317-L8318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8317-L8318)

```diff
-       getProjectionMatrix() {
-         return this._projectionMatrix
+       _sortLODLevels() {
+         const rr = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
+         this._internalMeshDataInfo._LODLevels.sort(((Sr, Qr) => Sr.distanceOrScreenCoverage < Qr.distanceOrScreenCoverage ? rr : Sr.distanceOrScreenCoverage > Qr.distanceOrScreenCoverage ? -rr : 0))
```

#### 366. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8320-L8321` → after: `L4838-L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4838-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4838-L4841) · [Before (L8320-L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8320-L8321)

```diff
-       getInverseProjectionMatrix() {
-         return this._inverseProjectionMatrix
+       addLODLevel(rr, Sr) {
+         if (Sr && Sr._masterMesh) return Gr.c.Warn("You cannot use a mesh as LOD level twice"), this;
+         const Qr = new ir(rr, Sr);
+         return this._internalMeshDataInfo._LODLevels.push(Qr), Sr && (Sr._masterMesh = this), this._sortLODLevels(), this
```

#### 367. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8323-L8324` → after: `L4843-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4843-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4843-L4849) · [Before (L8323-L8324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8323-L8324)

```diff
-       getTransformMatrix() {
-         return this._transformMatrix
+       getLODLevelAtDistance(rr) {
+         const Sr = this._internalMeshDataInfo;
+         for (let Qr = 0; Qr < Sr._LODLevels.length; Qr++) {
+           const Zr = Sr._LODLevels[Qr];
+           if (Zr.distanceOrScreenCoverage === rr) return Zr.mesh
+         }
+         return null
```

#### 368. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8326-L8327` → after: `L4851-L4880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4851-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4851-L4880) · [Before (L8326-L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8326-L8327)

```diff
-       setTransformMatrix(RR, JR, GR, yR) {
-         this._multiviewSceneUboIsActive = !!(GR && yR && this._multiviewSceneUbo), this._viewUpdateFlag === RR.updateFlag && this._projectionUpdateFlag === JR.updateFlag || (this._viewUpdateFlag = RR.updateFlag, this._projectionUpdateFlag = JR.updateFlag, this._viewMatrix = RR, t … [truncated]
+       removeLODLevel(rr) {
+         const Sr = this._internalMeshDataInfo;
+         for (let Qr = 0; Qr < Sr._LODLevels.length; Qr++) Sr._LODLevels[Qr].mesh === rr && (Sr._LODLevels.splice(Qr, 1), rr && (rr._masterMesh = null));
+         return this._sortLODLevels(), this
+       }
+       getLOD(rr, Sr) {
+         const Qr = this._internalMeshDataInfo;
+         if (!Qr._LODLevels || 0 === Qr._LODLevels.length) return this;
+         const Zr = Sr || this.mG().oWr,
+           Wr = rr.mode === Br.d.ORTHOGRAPHIC_CAMERA ? rr.minZ : Zr.centerWorld.subtract(rr.globalPosition).length();
+         let ar = Wr,
+           jr = 1;
+         if (Qr._useLODScreenCoverage) {
+           const Sr = rr.screenArea;
+           let Qr = Zr.radiusWorld * rr.minZ / Wr;
+           Qr = Qr * Qr * Math.PI, ar = Qr / Sr, jr = -1
+ ... (14 more added lines; see GitHub link above)
```

#### 369. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8329-L8330` → after: `L4882-L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4882-L4883) · [Before (L8329-L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8329-L8330)

```diff
-       getSceneUniformBuffer() {
-         return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
+       get geometry() {
+         return this._geometry
```

#### 370. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8332-L8335` → after: `L4885-L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4885-L4886) · [Before (L8332-L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8332-L8335)

```diff
-       createSceneUniformBuffer(RR, JR) {
-         const GR = "boolean" === typeof JR ? JR : JR?.trackUBOsInFrame,
-           yR = new wR.b(this._engine, void 0, !1, RR ?? "tL", void 0, GR);
-         return yR.addUniform("viewProjection", 16), yR.addUniform("view", 16), yR.addUniform("projection", 16), yR.addUniform("vEyePosition", 4), yR.addUniform("inverseProjection", 16), yR
+       getTotalVertices() {
+         return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
```

#### 371. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8337-L8338` → after: `L4888-L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4888-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4888-L4891) · [Before (L8337-L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8337-L8338)

```diff
-       setSceneUniformBuffer(RR) {
-         this._sceneUbo = RR, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
+       getVerticesData(rr, Sr, Qr, Zr) {
+         if (!this._geometry) return null;
+         let Wr = Zr ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[rr]?.getFloatData(this.instances.length + 1, Qr || Sr && 1 !== this._geometry.meshes.length);
+         return Wr || (Wr = this._geometry.getVerticesData(rr, Sr, Qr)), Wr
```

#### 372. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8340-L8341` → after: `L4893-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4893-L4894) · [Before (L8340-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8340-L8341)

```diff
-       get floatingOriginMode() {
-         return void 0 !== this._floatingOriginScene
+       copyVerticesData(rr, Sr) {
+         this._geometry && this._geometry.copyVerticesData(rr, Sr)
```

#### 373. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8343-L8344` → after: `L4896-L4897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4896-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4896-L4897) · [Before (L8343-L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8343-L8344)

```diff
-       get floatingOriginOffset() {
-         return this.floatingOriginMode ? this._eyePosition : VR.r.ZeroReadOnly
+       getVertexBuffer(rr, Sr) {
+         return this._geometry ? (Sr ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[rr]) ?? this._geometry.getVertexBuffer(rr) : null
```

#### 374. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8346-L8347` → after: `L4899-L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4899-L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4899-L4900) · [Before (L8346-L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8346-L8347)

```diff
-       getUniqueId() {
-         return kR.UniqueId
+       isVerticesDataPresent(rr, Sr) {
+         return this._geometry ? !Sr && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[rr] || this._geometry.isVerticesDataPresent(rr) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(rr)
```

#### 375. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8349-L8355` → after: `L4902-L4906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4902-L4906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4902-L4906) · [Before (L8349-L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8349-L8355)

```diff
-       stR(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (!this._blockEntityCollection && (this.meshes.push(RR), RR._resyncLightSources(), RR.parent || RR._addToSceneRootNodes(), tR.e.SetImmediate((() => {
-             this.onNewMeshAddedObservable.notifyObservers(RR)
-           })), JR)) {
-           const JR = RR.getChildMeshes();
-           for (const RR of JR) this.stR(RR)
+       isVertexBufferUpdatable(rr, Sr) {
+         if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(rr);
+         if (!Sr) {
+           const Sr = this._userInstancedBuffersStorage?.vertexBuffers[rr];
+           if (Sr) return Sr.isUpdatable()
```

#### 376. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8358-L8363` → after: `L4910-L4915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4910-L4915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4910-L4915) · [Before (L8358-L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8358-L8363)

```diff
-       vI(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const GR = this.meshes.indexOf(RR);
-         if (-1 !== GR && (this.meshes.splice(GR, 1), RR.parent || RR._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(RR), this.onMeshRemovedObservable.notifyObservers(RR), JR) {
-           const JR = RR.getChildMeshes();
-           for (const RR of JR) this.vI(RR)
+       getVerticesDataKinds(rr) {
+         if (!this._geometry) {
+           const rr = [];
+           if (this._delayInfo)
+             for (const Sr of this._delayInfo) rr.push(Sr);
+           return rr
```

#### 377. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8367-L8368` → after: `L4922-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4922-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4922-L4926) · [Before (L8367-L8368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8367-L8368)

```diff
-       addTransformNode(RR) {
-         this._blockEntityCollection || RR.jH() === this && -1 !== RR._indexInSceneTransformNodesArray || (RR._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(RR), RR.parent || RR._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable … [truncated]
+       getTotalIndices() {
+         return this._geometry ? this._geometry.getTotalIndices() : 0
+       }
+       yar(rr, Sr) {
+         return this._geometry ? this._geometry.yar(rr, Sr) : []
```

#### 378. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8370-L8375` → after: `L4928-L4967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4928-L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4928-L4967) · [Before (L8370-L8375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8370-L8375)

```diff
-       removeTransformNode(RR) {
-         const JR = RR._indexInSceneTransformNodesArray;
-         if (-1 !== JR) {
-           if (JR !== this.transformNodes.length - 1) {
-             const RR = this.transformNodes[this.transformNodes.length - 1];
-             this.transformNodes[JR] = RR, RR._indexInSceneTransformNodesArray = JR
+       get isBlocked() {
+         return null !== this._masterMesh && void 0 !== this._masterMesh
+       }
+       isReady() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (2 === this.delayLoadState) return !1;
+         if (!super.isReady(rr)) return !1;
+         if (!this.jT || 0 === this.jT.length) return !0;
+         if (!rr) return !0;
+         const Qr = this.MU(),
+           Zr = this.eC(),
+           Wr = Sr || Qr.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
+         this.computeWorldMatrix();
+         const ar = this.material || Zr.defaultMaterial;
+         if (ar)
+ ... (24 more added lines; see GitHub link above)
```

#### 379. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8379` → after: `L4970-L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4970-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4970-L4975) · [Before (L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8379)

```diff
-         return this.onTransformNodeRemovedObservable.notifyObservers(RR), JR
+         for (const Ir of this._internalMeshDataInfo._LODLevels)
+           if (Ir.mesh && !Ir.mesh.isReady(Wr)) return !1;
+         return !0
+       }
+       get areNormalsFrozen() {
+         return this._internalMeshDataInfo._areNormalsFrozen
```

#### 380. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8381-L8383` → after: `L4977-L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4977-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4977-L4978) · [Before (L8381-L8383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8381-L8383)

```diff
-       removeSkeleton(RR) {
-         const JR = this.skeletons.indexOf(RR);
-         return -1 !== JR && (this.skeletons.splice(JR, 1), this.onSkeletonRemovedObservable.notifyObservers(RR), this._executeActiveContainerCleanup(this._activeSkeletons)), JR
+       wU() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !0, this
```

#### 381. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8385-L8387` → after: `L4980-L4981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4980-L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4980-L4981) · [Before (L8385-L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8385-L8387)

```diff
-       removeMorphTargetManager(RR) {
-         const JR = this.morphTargetManagers.indexOf(RR);
-         return -1 !== JR && this.morphTargetManagers.splice(JR, 1), JR
+       unfreezeNormals() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !1, this
```

#### 382. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8389-L8395` → after: `L4983-L4984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4983-L4984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4983-L4984) · [Before (L8389-L8395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8389-L8395)

```diff
-       removeLight(RR) {
-         const JR = this.lights.indexOf(RR);
-         if (-1 !== JR) {
-           for (const JR of this.meshes) JR._removeLightSource(RR, !1);
-           this.lights.splice(JR, 1), this.sortLightsByPriority(), RR.parent || RR._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(RR)
-         }
-         return JR
+       set overridenInstanceCount(rr) {
+         this._instanceDataStorage.overridenInstanceCount = rr
```

#### 383. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8397-L8402` → after: `L4986-L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4986-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4986-L4990) · [Before (L8397-L8402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8397-L8402)

```diff
-       removeCamera(RR) {
-         const JR = this.cameras.indexOf(RR);
-         if (-1 !== JR && (this.cameras.splice(JR, 1), RR.parent || RR._removeFromSceneRootNodes()), this.activeCameras) {
-           const JR = this.activeCameras.indexOf(RR); - 1 !== JR && this.activeCameras.splice(JR, 1)
-         }
-         return this.activeCamera === RR && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(RR), JR
+       _getInstanceDataStorage() {
+         if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
+         const rr = this._instanceDataStorage.engine.currentRenderPassId;
+         let Sr = this._instanceDataStorage.renderPasses[rr];
+         return Sr || (Sr = new cr, this._instanceDataStorage.renderPasses[rr] = Sr), Sr
```

#### 384. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8404-L8406` → after: `L4992-L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4992-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4992-L4995) · [Before (L8404-L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8404-L8406)

```diff
-       removeParticleSystem(RR) {
-         const JR = this.pM.indexOf(RR);
-         return -1 !== JR && (this.pM.splice(JR, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(RR), JR
+       _preActivate() {
+         const rr = this._internalMeshDataInfo,
+           Sr = this.eC().getRenderId();
+         return rr._preActivateId === Sr || (rr._preActivateId = Sr, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
```

#### 385. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8408-L8410` → after: `L4997-L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4997-L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L4997-L4999) · [Before (L8408-L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8408-L8410)

```diff
-       removeAnimation(RR) {
-         const JR = this.animations.indexOf(RR);
-         return -1 !== JR && this.animations.splice(JR, 1), JR
+       _preActivateForIntermediateRendering(rr) {
+         const Sr = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return Sr.visibleInstances && (Sr.visibleInstances.intermediateDefaultRenderId = rr), this
```

#### 386. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8412-L8415` → after: `L5001-L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5001-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5001-L5048) · [Before (L8412-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8412-L8415)

```diff
-       stopAnimation(RR, JR, GR) {}
-       removeAnimationGroup(RR) {
-         const JR = this.animationGroups.indexOf(RR);
-         return -1 !== JR && this.animationGroups.splice(JR, 1), this.onAnimationGroupRemovedObservable.notifyObservers(RR), JR
+       _registerInstanceForRenderId(rr, Sr) {
+         const Qr = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return Qr.visibleInstances || (Qr.visibleInstances = {
+           defaultRenderId: Sr,
+           selfDefaultRenderId: this._renderId,
+           intermediateDefaultRenderId: -1
+         }), Qr.visibleInstances[Sr] || (void 0 === Qr.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete Qr.visibleInstances[Qr.previousRenderId], Qr.previousRenderId = Sr, Qr.visibleInstances[Sr] = new Arra … [truncated]
+       }
+       _afterComputeWorldMatrix() {
+         super._afterComputeWorldMatrix(), this.hasThinInstances && (this.VU || this.thinInstanceRefreshBoundingInfo(!1))
+       }
+       _postActivate() {
+         this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
+       }
+       refreshBoundingInfo() {
+         let rr, Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+ ... (32 more added lines; see GitHub link above)
```

#### 387. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8417-L8419` → after: `L5050-L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5050-L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5050-L5058) · [Before (L8417-L8419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8417-L8419)

```diff
-       removeMultiMaterial(RR) {
-         const JR = this.multiMaterials.indexOf(RR);
-         return -1 !== JR && this.multiMaterials.splice(JR, 1), this.onMultiMaterialRemovedObservable.notifyObservers(RR), JR
+       subdivide(rr) {
+         if (rr < 1) return;
+         const Sr = this.getTotalIndices();
+         let Qr = Sr / rr | 0,
+           Zr = 0;
+         for (; Qr % 3 !== 0;) Qr++;
+         this.releaseSubMeshes();
+         for (let Wr = 0; Wr < rr && !(Zr >= Sr); Wr++) Hr.b.CreateFromIndices(0, Zr, Zr + Qr >= Sr ? Sr - Zr : Qr, this, void 0, !1), Zr += Qr;
+         this.refreshBoundingInfo(), this.synchronizeInstances()
```

#### 388. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8421-L8428` → after: `L5060-L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5060-L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5060-L5068) · [Before (L8421-L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8421-L8428)

```diff
-       removeMaterial(RR) {
-         const JR = RR._indexInSceneMaterialArray;
-         if (-1 !== JR && JR < this.materials.length) {
-           if (JR !== this.materials.length - 1) {
-             const RR = this.materials[this.materials.length - 1];
-             this.materials[JR] = RR, RR._indexInSceneMaterialArray = JR
-           }
-           RR._indexInSceneMaterialArray = -1, this.materials.pop()
+       setVerticesData(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Zr = arguments.length > 3 ? arguments[3] : void 0;
+         if (this._geometry) this._geometry.setVerticesData(rr, Sr, Qr, Zr);
+         else {
+           const Zr = new lr.b;
+           Zr.set(Sr, rr);
+           const Wr = this.eC();
+           new Xr.e(Xr.e.RandomId(), Wr, Zr, Qr, this)
```

#### 389. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8430` → after: `L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5070) · [Before (L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8430)

```diff
-         return this.onMaterialRemovedObservable.notifyObservers(RR), JR
+         return this
```

#### 390. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8432-L8434` → after: `L5072-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5072-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5072-L5073) · [Before (L8432-L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8432-L8434)

```diff
-       removeActionManager(RR) {
-         const JR = this.actionManagers.indexOf(RR);
-         return -1 !== JR && this.actionManagers.splice(JR, 1), JR
+       removeVerticesData(rr) {
+         this._geometry && this._geometry.removeVerticesData(rr)
```

#### 391. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8436-L8442` → after: `L5075-L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5075-L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5075-L5078) · [Before (L8436-L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8436-L8442)

```diff
-       removeTexture(RR) {
-         const JR = this.textures.indexOf(RR);
-         return -1 !== JR && this.textures.splice(JR, 1), this.onTextureRemovedObservable.notifyObservers(RR), JR
-       }
-       removeFrameGraph(RR) {
-         const JR = this.frameGraphs.indexOf(RR);
-         return -1 !== JR && this.frameGraphs.splice(JR, 1), this.onFrameGraphRemovedObservable.notifyObservers(RR), JR
+       markVerticesDataAsUpdatable(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const Qr = this.getVertexBuffer(rr);
+         Qr && Qr.isUpdatable() !== Sr && this.setVerticesData(rr, this.getVerticesData(rr), Sr)
```

#### 392. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8444-L8446` → after: `L5080-L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5080-L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5080-L5083) · [Before (L8444-L8446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8444-L8446)

```diff
-       removeObjectRenderer(RR) {
-         const JR = this.objectRenderers.indexOf(RR);
-         return -1 !== JR && this.objectRenderers.splice(JR, 1), this.onObjectRendererRemovedObservable.notifyObservers(RR), JR
+       setVerticesBuffer(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         return this._geometry || (this._geometry = Xr.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(rr, Qr, Sr), this
```

#### 393. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8448-L8450` → after: `L5085-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5085-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5085-L5086) · [Before (L8448-L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8448-L8450)

```diff
-       removePostProcess(RR) {
-         const JR = this.postProcesses.indexOf(RR);
-         return -1 !== JR && this.postProcesses.splice(JR, 1), this.onPostProcessRemovedObservable.notifyObservers(RR), JR
+       updateVerticesData(rr, Sr, Qr, Zr) {
+         return this._geometry ? (Zr ? (this.makeGeometryUnique(), this.updateVerticesData(rr, Sr, Qr, !1)) : this._geometry.updateVerticesData(rr, Sr, Qr), this) : this
```

#### 394. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8452-L8454` → after: `L5088-L5110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5088-L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5088-L5110) · [Before (L8452-L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8452-L8454)

```diff
-       removeEffectLayer(RR) {
-         const JR = this.effectLayers.indexOf(RR);
-         return -1 !== JR && this.effectLayers.splice(JR, 1), this.onEffectLayerRemovedObservable.notifyObservers(RR), JR
+       updateMeshPositions(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const Qr = this.getVerticesData(Lr.j.PositionKind);
+         if (!Qr) return this;
+         if (rr(Qr), this.updateVerticesData(Lr.j.PositionKind, Qr, !1, !1), Sr) {
+           const rr = this.yar(),
+             Sr = this.getVerticesData(Lr.j.NormalKind);
+           if (!Sr) return this;
+           lr.b.ComputeNormals(Qr, rr, Sr), this.updateVerticesData(Lr.j.NormalKind, Sr, !1, !1)
+         }
+         return this
+       }
+       makeGeometryUnique() {
+         if (!this._geometry) return this;
+         if (1 === this._geometry.meshes.length) return this;
+         const rr = this._geometry,
+ ... (7 more added lines; see GitHub link above)
```

#### 395. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8456-L8462` → after: `L5112-L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5112-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5112-L5121) · [Before (L8456-L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8456-L8462)

```diff
-       addLight(RR) {
-         if (!this._blockEntityCollection) {
-           this.lights.push(RR), this.sortLightsByPriority(), RR.parent || RR._addToSceneRootNodes();
-           for (const JR of this.meshes) - 1 === JR.lightSources.indexOf(RR) && (JR.lightSources.push(RR), JR._resyncLightSources());
-           tR.e.SetImmediate((() => {
-             this.onNewLightAddedObservable.notifyObservers(RR)
-           }))
+       setIndices(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._geometry) this._geometry.setIndices(rr, Sr, Qr, Zr);
+         else {
+           const Zr = new lr.b;
+           Zr.indices = rr;
+           const Wr = this.eC();
+           new Xr.e(Xr.e.RandomId(), Wr, Zr, Qr, this, Sr)
```

#### 396. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8465-L8471` → after: `L5125-L5127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5125-L5127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5125-L5127) · [Before (L8465-L8471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8465-L8471)

```diff
-       sortLightsByPriority() {
-         this.requireLightSorting && this.lights.sort(FR.c.CompareLightsPriority)
-       }
-       addCamera(RR) {
-         this._blockEntityCollection || (this.cameras.push(RR), tR.e.SetImmediate((() => {
-           this.onNewCameraAddedObservable.notifyObservers(RR)
-         })), RR.parent || RR._addToSceneRootNodes())
+       updateIndices(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         return this._geometry ? (this._geometry.updateIndices(rr, Sr, Qr), this) : this
```

#### 397. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8473-L8476` → after: `L5129-L5130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5129-L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5129-L5130) · [Before (L8473-L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8473-L8476)

```diff
-       addSkeleton(RR) {
-         this._blockEntityCollection || (this.skeletons.push(RR), tR.e.SetImmediate((() => {
-           this.onNewSkeletonAddedObservable.notifyObservers(RR)
-         })))
+       toLeftHanded() {
+         return this._geometry ? (this._geometry.toLeftHanded(), this) : this
```

#### 398. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8478-L8481` → after: `L5132-L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5132-L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5132-L5151) · [Before (L8478-L8481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8478-L8481)

```diff
-       addParticleSystem(RR) {
-         this._blockEntityCollection || (this.pM.push(RR), tR.e.SetImmediate((() => {
-           this.onNewParticleSystemAddedObservable.notifyObservers(RR)
-         })))
+       _bind(rr, Sr, Qr) {
+         let Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         if (!this._geometry) return this;
+         const Wr = this.eC().MU();
+         let ar;
+         if (this._unIndexed)
+           if (this._getRenderingFillMode(Qr) === qr.d.WireFrameFillMode) ar = rr._getLinesIndexBuffer(this.yar(), Wr);
+           else ar = null;
+         else switch (this._getRenderingFillMode(Qr)) {
+           case qr.d.PointFillMode:
+             ar = null;
+             break;
+           case qr.d.WireFrameFillMode:
+             ar = rr._getLinesIndexBuffer(this.yar(), Wr);
+             break;
+           default:
+ ... (4 more added lines; see GitHub link above)
```

#### 399. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8483-L8484` → after: `L5153-L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5153-L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5153-L5171) · [Before (L8483-L8484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8483-L8484)

```diff
-       addAnimation(RR) {
-         this._blockEntityCollection || this.animations.push(RR)
+       _bindDirect(rr, Sr) {
+         let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         if (!this._geometry) return this;
+         if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(rr), Qr && this._userInstancedBuffersStorage && !this.hasThinInstances) {
+           if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
+             const rr = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
+             for (const Sr in rr) this._userInstancedBuffersStorage.vertexBuffers[Sr] = rr[Sr]
+           }
+           this._geometry._bind(rr, Sr, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
+         } else this._geometry._bind(rr, Sr);
+         return this
+       }
+       _draw(rr, Sr, Qr) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
+         const Zr = this.eC().MU(),
+ ... (3 more added lines; see GitHub link above)
```

#### 400. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8486-L8489` → after: `L5173-L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5173-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5173-L5174) · [Before (L8486-L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8486-L8489)

```diff
-       addAnimationGroup(RR) {
-         this._blockEntityCollection || (this.animationGroups.push(RR), tR.e.SetImmediate((() => {
-           this.onNewAnimationGroupAddedObservable.notifyObservers(RR)
-         })))
+       registerBeforeRender(rr) {
+         return this.onBeforeRenderObservable.add(rr), this
```

#### 401. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8491-L8494` → after: `L5176-L5177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5176-L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5176-L5177) · [Before (L8491-L8494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8491-L8494)

```diff
-       addMultiMaterial(RR) {
-         this._blockEntityCollection || (this.multiMaterials.push(RR), tR.e.SetImmediate((() => {
-           this.onNewMultiMaterialAddedObservable.notifyObservers(RR)
-         })))
+       unregisterBeforeRender(rr) {
+         return this.onBeforeRenderObservable.removeCallback(rr), this
```

#### 402. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8496-L8499` → after: `L5179-L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5179-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5179-L5180) · [Before (L8496-L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8496-L8499)

```diff
-       addMaterial(RR) {
-         this._blockEntityCollection || RR.jH() === this && -1 !== RR._indexInSceneMaterialArray || (RR._indexInSceneMaterialArray = this.materials.length, this.materials.push(RR), tR.e.SetImmediate((() => {
-           this.onNewMaterialAddedObservable.notifyObservers(RR)
-         })))
+       registerAfterRender(rr) {
+         return this.onAfterRenderObservable.add(rr), this
```

#### 403. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8501-L8502` → after: `L5182-L5183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5182-L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5182-L5183) · [Before (L8501-L8502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8501-L8502)

```diff
-       addMorphTargetManager(RR) {
-         this._blockEntityCollection || this.morphTargetManagers.push(RR)
+       unregisterAfterRender(rr) {
+         return this.onAfterRenderObservable.removeCallback(rr), this
```

#### 404. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8504-L8505` → after: `L5185-L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5185-L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5185-L5294) · [Before (L8504-L8505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8504-L8505)

```diff
-       addGeometry(RR) {
-         this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[RR.uniqueId] = this.geometries.length), this.geometries.push(RR))
+       _getInstancesRenderList(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const Qr = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         if (this._instanceDataStorage.isFrozen) {
+           if (Sr) return Qr.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[rr] = !1, Qr.batchCacheReplacementModeInFrozenMode.renderSelf[rr] = !0, Qr.batchCacheReplacementModeInFrozenMode;
+           if (Qr.previousBatch) return Qr.previousBatch
+         }
+         const Zr = this.eC(),
+           Wr = Zr._isInIntermediateRendering(),
+           ar = Wr ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
+           jr = Qr.batchCache;
+         if (jr.mustReturn = !1, jr.renderSelf[rr] = Sr || !ar && this.isEnabled() && this.isVisible, jr.visibleInstances[rr] = null, Qr.visibleInstances && !Sr) {
+           const Sr = Qr.visibleInstances,
+             ar = Zr.getRenderId(),
+             Ir = Wr ? Sr.intermediateDefaultRenderId : Sr.defaultRenderId;
+           jr.visibleInstances[rr] = Sr[ar], !jr.visibleInstances[rr] && Ir && (jr.visibleInstances[rr] = Sr[Ir])
+ ... (94 more added lines; see GitHub link above)
```

#### 405. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8507-L8508` → after: `L5296-L5298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5296-L5298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5296-L5298) · [Before (L8507-L8508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8507-L8508)

```diff
-       addActionManager(RR) {
-         this.actionManagers.push(RR)
+       _disposeInstanceDataStorageRenderPass(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         rr?.instancesBuffer && (Sr && rr.instancesBuffer.dispose(), rr.instancesBuffer = null), rr?.instancesPreviousBuffer && (Sr && rr.instancesPreviousBuffer.dispose(), rr.instancesPreviousBuffer = null)
```

#### 406. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8510-L8511` → after: `L5300-L5313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5300-L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5300-L5313) · [Before (L8510-L8511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8510-L8511)

```diff
-       addTexture(RR) {
-         this._blockEntityCollection || (this.textures.push(RR), this.onNewTextureAddedObservable.notifyObservers(RR))
+       _rebuild() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const Sr in this._instanceDataStorage.renderPasses) {
+           const Qr = this._instanceDataStorage.renderPasses[Sr];
+           this._disposeInstanceDataStorageRenderPass(Qr, rr)
+         }
+         if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, rr), this._userInstancedBuffersStorage) {
+           for (const Sr in this._userInstancedBuffersStorage.vertexBuffers) {
+             const Qr = this._userInstancedBuffersStorage.vertexBuffers[Sr];
+             Qr && (rr && Qr.dispose(), this._userInstancedBuffersStorage.vertexBuffers[Sr] = null)
+           }
+           this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
+         }
+         this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(rr)
```

#### 407. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8513-L8516` → after: `L5315-L5324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5315-L5324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5315-L5324) · [Before (L8513-L8516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8513-L8516)

```diff
-       addFrameGraph(RR) {
-         this.frameGraphs.push(RR), tR.e.SetImmediate((() => {
-           this.onNewFrameGraphAddedObservable.notifyObservers(RR)
-         }))
+       _releaseRenderPassId(rr) {
+         const Sr = this._instanceDataStorage.renderPasses[rr];
+         if (Sr && (this._disposeInstanceDataStorageRenderPass(Sr, !0), delete this._instanceDataStorage.renderPasses[rr]), this._userInstancedBuffersStorage?.renderPasses) {
+           const Sr = this._userInstancedBuffersStorage.renderPasses[rr];
+           if (Sr)
+             for (const rr in Sr) Sr[rr]?.dispose();
+           delete this._userInstancedBuffersStorage.renderPasses[rr]
+         }
+         const Qr = this._userInstancedBuffersStorage?.interleavedBuffers;
+         Qr?.[rr] && (Qr[rr].buffer.dispose(), delete Qr[rr])
```

#### 408. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8518-L8521` → after: `L5326-L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5326-L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5326-L5330) · [Before (L8518-L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8518-L8521)

```diff
-       addObjectRenderer(RR) {
-         this.objectRenderers.push(RR), tR.e.SetImmediate((() => {
-           this.onNewObjectRendererAddedObservable.notifyObservers(RR)
-         }))
+       _freeze() {
+         if (this.jT) {
+           for (let rr = 0; rr < this.jT.length; rr++) this._getInstancesRenderList(rr);
+           this._internalMeshDataInfo._effectiveMaterial = null, this._instanceDataStorage.isFrozen = !0
+         }
```

#### 409. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8523-L8526` → after: `L5332-L5337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5332-L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5332-L5337) · [Before (L8523-L8526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8523-L8526)

```diff
-       addPostProcess(RR) {
-         this._blockEntityCollection || (this.postProcesses.push(RR), tR.e.SetImmediate((() => {
-           this.onNewPostProcessAddedObservable.notifyObservers(RR)
-         })))
+       _unFreeze() {
+         this._instanceDataStorage.isFrozen = !1;
+         for (const rr in this._instanceDataStorage.renderPasses) {
+           this._instanceDataStorage.renderPasses[rr].previousBatch = null
+         }
+         this._instanceDataStorage.dataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass.previousBatch = null)
```

#### 410. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8528-L8531` → after: `L5339-L5421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5339-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5339-L5421) · [Before (L8528-L8531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8528-L8531)

```diff
-       addEffectLayer(RR) {
-         this._blockEntityCollection || (this.effectLayers.push(RR), tR.e.SetImmediate((() => {
-           this.onNewEffectLayerAddedObservable.notifyObservers(RR)
-         })))
+       renderWithRenderPassId(rr, Sr, Qr, Zr) {
+         let Wr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
+         const ar = this._scene.MU(),
+           jr = ar.currentRenderPassId;
+         if (void 0 !== rr && (ar.currentRenderPassId = rr), Zr)(!Wr || Wr && Zr.isInFrustum(this._scene._frustumPlanes)) && this.render(Zr, !!Sr, Qr);
+         else
+           for (let Ir = 0; Ir < this.jT.length; Ir++) {
+             const rr = this.jT[Ir];
+             (!Wr || Wr && rr.isInFrustum(this._scene._frustumPlanes)) && this.render(rr, !!Sr, Qr)
+           }
+         return void 0 !== rr && (ar.currentRenderPassId = jr), this
+       }
+       directRender() {
+         if (!this.jT) return this;
+         for (const rr of this.jT) this.render(rr, !1);
+         return this
+ ... (67 more added lines; see GitHub link above)
```

#### 411. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8533-L8535` → after: `L5423-L5478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5423-L5478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5423-L5478) · [Before (L8533-L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8533-L8535)

```diff
-       switchActiveCamera(RR) {
-         let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = RR, JR && RR.attachControl())
+       _renderRunFollower(rr, Sr) {
+         const Qr = this._scene,
+           Zr = Qr._engine;
+         if (Zr.isWebGPU || rr._mesh !== this || 0 !== this.instances.length || this.render !== dr.prototype.render) return !1;
+         const Wr = rr.iU();
+         if (!Wr || Wr !== Qr._cachedMaterial || void 0 === Wr._canBindRunFollower) return !1;
+         const ar = rr._drawWrapper,
+           jr = ar?.effect;
+         if (!jr || jr !== Qr._cachedEffect || this.visibility !== Qr._cachedVisibility || ar._forceRebindOnNextCall) return !1;
+         const Ir = this.hasThinInstances;
+         if (!Ir && this._userInstancedBuffersStorage) return !1;
+         if (!ar._wasPreviouslyReady || ar._wasPreviouslyUsingInstances !== Ir) return !1;
+         const fr = this._internalMeshDataInfo;
+         if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || Qr._isInIntermediateRendering() || 0 !== Qr._beforeRenderingMeshStage.length || 0 !== Qr._afterRenderingMeshStage.length || fr._onBeforeRenderObservable?.hasObservers() || fr._on … [truncated]
+         const Er = this.occlusionType;
+         if (void 0 !== Er && Er !== Pr.c.OCCLUSION_TYPE_NONE || !Wr._canBindRunFollower(Qr, Zr, this, rr, jr)) return !1;
+ ... (40 more added lines; see GitHub link above)
```

#### 412. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8537-L8539` → after: `L5480-L5492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5480-L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5480-L5492) · [Before (L8537-L8539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8537-L8539)

```diff
-       setActiveCameraById(RR) {
-         const JR = this.getCameraById(RR);
-         return JR ? (this.activeCamera = JR, JR) : null
+       _normalizeSkinWeightsAndExtra() {
+         const rr = this.getVerticesData(Lr.j.MatricesWeightsExtraKind),
+           Sr = this.getVerticesData(Lr.j.MatricesWeightsKind),
+           Qr = Sr.length;
+         for (let Zr = 0; Zr < Qr; Zr += 4) {
+           let Qr = Sr[Zr] + Sr[Zr + 1] + Sr[Zr + 2] + Sr[Zr + 3];
+           if (Qr += rr[Zr] + rr[Zr + 1] + rr[Zr + 2] + rr[Zr + 3], 0 === Qr) Sr[Zr] = 1;
+           else {
+             const Wr = 1 / Qr;
+             Sr[Zr] *= Wr, Sr[Zr + 1] *= Wr, Sr[Zr + 2] *= Wr, Sr[Zr + 3] *= Wr, rr[Zr] *= Wr, rr[Zr + 1] *= Wr, rr[Zr + 2] *= Wr, rr[Zr + 3] *= Wr
+           }
+         }
+         this.setVerticesData(Lr.j.MatricesWeightsKind, Sr), this.setVerticesData(Lr.j.MatricesWeightsKind, rr)
```

#### 413. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8541-L8543` → after: `L5494-L5539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5494-L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5494-L5539) · [Before (L8541-L8543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8541-L8543)

```diff
-       setActiveCameraByName(RR) {
-         const JR = this.getCameraByName(RR);
-         return JR ? (this.activeCamera = JR, JR) : null
+       validateSkinning() {
+         const rr = this.getVerticesData(Lr.j.MatricesWeightsExtraKind),
+           Sr = this.getVerticesData(Lr.j.MatricesWeightsKind);
+         if (null === Sr || null == this.skeleton) return {
+           skinned: !1,
+           valid: !0,
+           jx: "not skinned"
+         };
+         const Qr = Sr.length;
+         let Zr = 0,
+           Wr = 0,
+           ar = 0,
+           jr = 0;
+         const Ir = null === rr ? 4 : 8,
+           fr = [];
+         for (let Nr = 0; Nr <= Ir; Nr++) fr[Nr] = 0;
+ ... (30 more added lines; see GitHub link above)
```

#### 414. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8545-L8548` → after: `L5541-L5543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5541-L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5541-L5543) · [Before (L8545-L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8545-L8548)

```diff
-       getAnimationGroupByName(RR) {
-         for (let JR = 0; JR < this.animationGroups.length; JR++)
-           if (this.animationGroups[JR].name === RR) return this.animationGroups[JR];
-         return null
+       _checkDelayState() {
+         const rr = this.eC();
+         return this._geometry ? this._geometry.load(rr) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(rr)), this
```

#### 415. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8550-L8558` → after: `L5545-L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5545-L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5545-L5555) · [Before (L8550-L8558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8550-L8558)

```diff
-       _getMaterial(RR, JR) {
-         for (let GR = 0; GR < this.materials.length; GR++) {
-           const RR = this.materials[GR];
-           if (JR(RR)) return RR
-         }
-         if (RR)
-           for (let GR = 0; GR < this.multiMaterials.length; GR++) {
-             const RR = this.multiMaterials[GR];
-             if (JR(RR)) return RR
+       _queueLoad(rr) {
+         rr.addPendingData(this);
+         const Sr = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
+         return (async () => {
+           try {
+             const Qr = await rr._loadDelayedFileAsync(this.delayLoadingFile, Sr, !0);
+             Qr instanceof ArrayBuffer ? this._delayLoadingFunction(Qr, this) : this._delayLoadingFunction(JSON.parse(Qr), this);
+             for (const rr of this.instances) rr.refreshBoundingInfo(), rr._syncSubMeshes();
+             this.delayLoadState = 1, rr.removePendingData(this)
+           } catch (Qr) {
+             rr.removePendingData(this), rr.Dv || Gr.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${Qr}`)
```

#### 416. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8560` → after: `L5557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5557) · [Before (L8560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8560)

```diff
-         return null
+         })(), this
```

#### 417. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8562-L8564` → after: `L5559-L5560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5559-L5560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5559-L5560) · [Before (L8562-L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8562-L8564)

```diff
-       getMaterialByUniqueID(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return this.getMaterialByUniqueId(RR, JR)
+       isInFrustum(rr) {
+         return 2 !== this.delayLoadState && (!!super.isInFrustum(rr) && (this._checkDelayState(), !0))
```

#### 418. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8566-L8568` → after: `L5562-L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5562-L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5562-L5592) · [Before (L8566-L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8566-L8568)

```diff
-       getMaterialByUniqueId(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return this._getMaterial(JR, (JR => JR.uniqueId === RR))
+       setMaterialById(rr) {
+         const Sr = this.eC().materials;
+         let Qr;
+         for (Qr = Sr.length - 1; Qr > -1; Qr--)
+           if (Sr[Qr].id === rr) return this.material = Sr[Qr], this;
+         const Zr = this.eC().multiMaterials;
+         for (Qr = Zr.length - 1; Qr > -1; Qr--)
+           if (Zr[Qr].id === rr) return this.material = Zr[Qr], this;
+         return this
+       }
+       getAnimatables() {
+         const rr = [];
+         return this.material && rr.push(this.material), this.skeleton && rr.push(this.skeleton), rr
+       }
+       bakeTransformIntoVertices(rr) {
+         if (!this.isVerticesDataPresent(Lr.j.PositionKind)) return this;
+ ... (15 more added lines; see GitHub link above)
```

#### 419. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8570-L8572` → after: `L5594-L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5594-L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5594-L5596) · [Before (L8570-L8572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8570-L8572)

```diff
-       getMaterialById(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return this._getMaterial(JR, (JR => JR.id === RR))
+       bakeCurrentTransformIntoVertices() {
+         let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(rr), this
```

#### 420. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8574-L8576` → after: `L5598-L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5598-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5598-L5599) · [Before (L8574-L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8574-L8576)

```diff
-       getMaterialByName(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return this._getMaterial(JR, (JR => JR.name === RR))
+       get _positions() {
+         return this._internalAbstractMeshDataInfo._positions || this._geometry && this._geometry._positions || null
```

#### 421. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8578-L8585` → after: `L5601-L5602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5601-L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5601-L5602) · [Before (L8578-L8585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8578-L8585)

```diff
-       getLastMaterialById(RR) {
-         let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         for (let GR = this.materials.length - 1; GR >= 0; GR--)
-           if (this.materials[GR].id === RR) return this.materials[GR];
-         if (JR)
-           for (let GR = this.multiMaterials.length - 1; GR >= 0; GR--)
-             if (this.multiMaterials[GR].id === RR) return this.multiMaterials[GR];
-         return null
+       _resetPointsArrayCache() {
+         return this._geometry && this._geometry._resetPointsArrayCache(), this
```

#### 422. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8587-L8590` → after: `L5604-L5605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5604-L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5604-L5605) · [Before (L8587-L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8587-L8590)

```diff
-       getTextureByUniqueId(RR) {
-         for (let JR = 0; JR < this.textures.length; JR++)
-           if (this.textures[JR].uniqueId === RR) return this.textures[JR];
-         return null
+       _generatePointsArray() {
+         return !!this._geometry && this._geometry._generatePointsArray()
```

#### 423. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8592-L8595` → after: `L5607-L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5607-L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5607-L5616) · [Before (L8592-L8595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8592-L8595)

```diff
-       getTextureByName(RR) {
-         for (let JR = 0; JR < this.textures.length; JR++)
-           if (this.textures[JR].name === RR) return this.textures[JR];
-         return null
+       clone() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
+           Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           Qr = arguments.length > 2 ? arguments[2] : void 0,
+           Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         if (Sr && void 0 === Sr._addToSceneRootNodes) {
+           const Qr = Sr;
+           return Dr.source = this, Dr.doNotCloneChildren = Qr.doNotCloneChildren, Dr.clonePhysicsImpostor = Qr.clonePhysicsImpostor, Dr.cloneThinInstances = Qr.cloneThinInstances, new dr(rr, this.eC(), Dr)
+         }
+         return new dr(rr, this.eC(), Sr, this, Qr, Zr)
```

#### 424. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8597-L8600` → after: `L5618-L5686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5618-L5686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5618-L5686) · [Before (L8597-L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8597-L8600)

```diff
-       getCameraById(RR) {
-         for (let JR = 0; JR < this.cameras.length; JR++)
-           if (this.cameras[JR].id === RR) return this.cameras[JR];
-         return null
+       dispose(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
+         const Qr = this._internalMeshDataInfo;
+         if (Qr._onBeforeDrawObservable && Qr._onBeforeDrawObservable.clear(), Qr._onBeforeBindObservable && Qr._onBeforeBindObservable.clear(), Qr._onBeforeRenderObservable && Qr._onBeforeRenderObservable.clear(), Qr._onAfterRenderObservable && Qr._onAfterRenderObservable.clear() … [truncated]
+           if (Qr.meshMap)
+             for (const rr in Qr.meshMap) {
+               const Sr = Qr.meshMap[rr];
+               Sr && (Sr._internalMeshDataInfo._source = null, Qr.meshMap[rr] = void 0)
+             }
+           Qr._source && Qr._source._internalMeshDataInfo.meshMap && (Qr._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
+         } else {
+           const rr = this.eC().meshes;
+           for (const Sr of rr) {
+             const rr = Sr;
+             rr._internalMeshDataInfo && rr._internalMeshDataInfo._source && rr._internalMeshDataInfo._source === this && (rr._internalMeshDataInfo._source = null)
+ ... (53 more added lines; see GitHub link above)
```

#### 425. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8602-L8605` → after: `L5688-L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5688-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5688-L5733) · [Before (L8602-L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8602-L8605)

```diff
-       getCameraByUniqueId(RR) {
-         for (let JR = 0; JR < this.cameras.length; JR++)
-           if (this.cameras[JR].uniqueId === RR) return this.cameras[JR];
-         return null
+       _convertToUnIndexedMesh() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const Sr = this.getVerticesDataKinds().filter((rr => !this.getVertexBuffer(rr)?.getIsInstanced())),
+           Qr = this.yar(!1, !0),
+           Zr = {},
+           Wr = (rr, Sr) => {
+             const Zr = new Float32Array(Qr.length * Sr);
+             let Wr = 0;
+             for (let ar = 0; ar < Qr.length; ar++)
+               for (let jr = 0; jr < Sr; jr++) Zr[Wr++] = rr[Qr[ar] * Sr + jr];
+             return Zr
+           },
+           ar = this.mG(),
+           jr = this.geometry ? this.jT.slice(0) : [];
+         for (const Ir of Sr) Zr[Ir] = this.getVerticesData(Ir);
+         for (const Ir of Sr) {
+ ... (30 more added lines; see GitHub link above)
```

#### 426. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8607-L8610` → after: `L5735-L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5735-L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5735-L5736) · [Before (L8607-L8610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8607-L8610)

```diff
-       getCameraByName(RR) {
-         for (let JR = 0; JR < this.cameras.length; JR++)
-           if (this.cameras[JR].name === RR) return this.cameras[JR];
-         return null
+       convertToFlatShadedMesh() {
+         return this._convertToUnIndexedMesh(!0)
```

#### 427. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8612-L8616` → after: `L5738-L5747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5738-L5747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5738-L5747) · [Before (L8612-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8612-L8616)

```diff
-       getBoneById(RR) {
-         for (let JR = 0; JR < this.skeletons.length; JR++) {
-           const GR = this.skeletons[JR];
-           for (let JR = 0; JR < GR.bones.length; JR++)
-             if (GR.bones[JR].id === RR) return GR.bones[JR]
+       convertToUnIndexedMesh() {
+         return this._convertToUnIndexedMesh()
+       }
+       flipFaces() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const Sr = lr.b.ExtractFromMesh(this);
+         let Qr;
+         if (rr && this.isVerticesDataPresent(Lr.j.NormalKind) && Sr.normals) {
+           for (Qr = 0; Qr < Sr.normals.length; Qr++) Sr.normals[Qr] *= -1;
+           this.setVerticesData(Lr.j.NormalKind, Sr.normals, this.isVertexBufferUpdatable(Lr.j.NormalKind))
```

#### 428. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8618` → after: `L5749-L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5749-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5749-L5754) · [Before (L8618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8618)

```diff
-         return null
+         if (Sr.indices) {
+           let rr;
+           for (Qr = 0; Qr < Sr.indices.length; Qr += 3) rr = Sr.indices[Qr + 1], Sr.indices[Qr + 1] = Sr.indices[Qr + 2], Sr.indices[Qr + 2] = rr;
+           this.setIndices(Sr.indices, null, this.isVertexBufferUpdatable(Lr.j.PositionKind), !0)
+         }
+         return this
```

#### 429. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8620-L8624` → after: `L5756-L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5756-L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5756-L5851) · [Before (L8620-L8624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8620-L8624)

```diff
-       getBoneByName(RR) {
-         for (let JR = 0; JR < this.skeletons.length; JR++) {
-           const GR = this.skeletons[JR];
-           for (let JR = 0; JR < GR.bones.length; JR++)
-             if (GR.bones[JR].name === RR) return GR.bones[JR]
+       increaseVertices() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         const Sr = lr.b.ExtractFromMesh(this),
+           Qr = Sr.indices && !Array.isArray(Sr.indices) && Array.from ? Array.from(Sr.indices) : Sr.indices,
+           Zr = Sr.positions && !Array.isArray(Sr.positions) && Array.from ? Array.from(Sr.positions) : Sr.positions,
+           Wr = Sr.uvs && !Array.isArray(Sr.uvs) && Array.from ? Array.from(Sr.uvs) : Sr.uvs,
+           ar = Sr.normals && !Array.isArray(Sr.normals) && Array.from ? Array.from(Sr.normals) : Sr.normals;
+         if (Qr && Zr) {
+           Sr.indices = Qr, Sr.positions = Zr, Wr && (Sr.uvs = Wr), ar && (Sr.normals = ar);
+           const jr = rr + 1,
+             Ir = [];
+           for (let rr = 0; rr < jr + 1; rr++) Ir[rr] = [];
+           let fr, Er;
+           const pr = new Tr.u(0, 0, 0),
+             xr = new Tr.u(0, 0, 0),
+             mr = new Tr.q(0, 0),
+ ... (80 more added lines; see GitHub link above)
```

#### 430. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8628-L8631` → after: `L5854-L5855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5854-L5855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5854-L5855) · [Before (L8628-L8631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8628-L8631)

```diff
-       getLightByName(RR) {
-         for (let JR = 0; JR < this.lights.length; JR++)
-           if (this.lights[JR].name === RR) return this.lights[JR];
-         return null
+       static _instancedMeshFactory(rr, Sr) {
+         throw (0, Ar.l)("InstancedMesh")
```

#### 431. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8633-L8636` → after: `L5857-L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5857-L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5857-L5858) · [Before (L8633-L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8633-L8636)

```diff
-       getLightById(RR) {
-         for (let JR = 0; JR < this.lights.length; JR++)
-           if (this.lights[JR].id === RR) return this.lights[JR];
-         return null
+       static _PhysicsImpostorParser(rr, Sr, Qr) {
+         throw (0, Ar.l)("PhysicsImpostor")
```

#### 432. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8638-L8641` → after: `L5860-L5862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5860-L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5860-L5862) · [Before (L8638-L8641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8638-L8641)

```diff
-       getLightByUniqueId(RR) {
-         for (let JR = 0; JR < this.lights.length; JR++)
-           if (this.lights[JR].uniqueId === RR) return this.lights[JR];
-         return null
+       createInstance(rr) {
+         const Sr = dr._instancedMeshFactory(rr, this);
+         return Sr.parent = this.parent, Sr
```

#### 433. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8643-L8646` → after: `L5864-L5868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5864-L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5864-L5868) · [Before (L8643-L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8643-L8646)

```diff
-       getParticleSystemById(RR) {
-         for (let JR = 0; JR < this.pM.length; JR++)
-           if (this.pM[JR].id === RR) return this.pM[JR];
-         return null
+       synchronizeInstances() {
+         for (let rr = 0; rr < this.instances.length; rr++) {
+           this.instances[rr]._syncSubMeshes()
+         }
+         return this
```

#### 434. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8648-L8651` → after: `L5870-L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5870-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5870-L5891) · [Before (L8648-L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8648-L8651)

```diff
-       getGeometryById(RR) {
-         for (let JR = 0; JR < this.geometries.length; JR++)
-           if (this.geometries[JR].id === RR) return this.geometries[JR];
-         return null
+       optimizeIndices(rr) {
+         const Sr = this.yar(),
+           Qr = this.getVerticesData(Lr.j.PositionKind);
+         if (!Qr || !Sr) return this;
+         const Zr = [];
+         for (let ar = 0; ar < Qr.length; ar += 3) Zr.push(Tr.u.FromArray(Qr, ar));
+         const Wr = [];
+         return Yr.b.SyncAsyncForLoop(Zr.length, 40, (rr => {
+           const Sr = Zr.length - 1 - rr,
+             Qr = Zr[Sr];
+           for (let ar = 0; ar < Sr; ++ar) {
+             const rr = Zr[ar];
+             if (Qr.equals(rr)) {
+               Wr[Sr] = ar;
+               break
+             }
+ ... (6 more added lines; see GitHub link above)
```

#### 435. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8653-L8660` → after: `L5893-L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5893-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5893-L5976) · [Before (L8653-L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8653-L8660)

```diff
-       _getGeometryByUniqueId(RR) {
-         if (this._geometriesByUniqueId) {
-           const JR = this._geometriesByUniqueId[RR];
-           if (void 0 !== JR) return this.geometries[JR]
-         } else
-           for (let JR = 0; JR < this.geometries.length; JR++)
-             if (this.geometries[JR].uniqueId === RR) return this.geometries[JR];
-         return null
+       serialize() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         rr.name = this.name, rr.id = this.id, rr.uniqueId = this.uniqueId, rr.type = this.getClassName(), Kr.b && Kr.b.HasTags(this) && (rr.tags = Kr.b.GetTags(this)), rr.position = this.position.OWr(), this.rotationQuaternion ? rr.rotationQuaternion = this.rotationQuaternion.OWr … [truncated]
+         const Sr = this._geometry;
+         if (Sr && this.jT) {
+           rr.geometryUniqueId = Sr.uniqueId, rr.geometryId = Sr.id, rr.jT = [];
+           for (let Sr = 0; Sr < this.jT.length; Sr++) {
+             const Qr = this.jT[Sr];
+             rr.jT.push({
+               materialIndex: Qr.materialIndex,
+               verticesStart: Qr.verticesStart,
+               verticesCount: Qr.verticesCount,
+               indexStart: Qr.indexStart,
+               indexCount: Qr.indexCount
+             })
+           }
+ ... (68 more added lines; see GitHub link above)
```

#### 436. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8662-L8665` → after: `L5978-L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L5978-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L5978-L6012) · [Before (L8662-L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8662-L8665)

```diff
-       getFrameGraphByName(RR) {
-         for (let JR = 0; JR < this.frameGraphs.length; JR++)
-           if (this.frameGraphs[JR].name === RR) return this.frameGraphs[JR];
-         return null
+       static Parse(rr, Sr, Qr) {
+         let Zr, Wr = !1;
+         if (rr.type && "LinesMesh" === rr.type ? Zr = dr._LinesMeshParser(rr, Sr) : rr.type && "GroundMesh" === rr.type ? Zr = dr._GroundMeshParser(rr, Sr) : rr.type && "GoldbergMesh" === rr.type ? Zr = dr._GoldbergMeshParser(rr, Sr) : rr.type && "GreasedLineMesh" === rr.type ? Z … [truncated]
+           for (let Sr = 0; Sr < rr.animations.length; Sr++) {
+             const Qr = rr.animations[Sr],
+               Wr = (0, kr.d)("BABYLON.Animation");
+             Wr && Zr.animations.push(Wr.Parse(Qr))
+           }
+           Or.c.ParseAnimationRanges(Zr, rr, Sr)
+         }
+         if (rr.autoAnimate && Sr.beginAnimation(Zr, rr.autoAnimateFrom, rr.autoAnimateTo, rr.autoAnimateLoop, rr.autoAnimateSpeed || 1), rr.layerMask && !isNaN(rr.layerMask) ? Zr.layerMask = Math.abs(parseInt(rr.layerMask)) : Zr.layerMask = 268435455, rr.physicsImpostor && (Zr.ph … [truncated]
+             ids: rr.lodMeshIds,
+             distances: rr.lodDistances ? rr.lodDistances : null,
+             coverages: rr.lodCoverages ? rr.lodCoverages : null
+           }), rr.instances)
+           for (let ar = 0; ar < rr.instances.length; ar++) {
+ ... (19 more added lines; see GitHub link above)
```

#### 437. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8667-L8670` → after: `L6014-L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6014-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6014-L6071) · [Before (L8667-L8670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8667-L8670)

```diff
-       pushGeometry(RR, JR) {
-         return !(!JR && this._getGeometryByUniqueId(RR.uniqueId)) && (this.addGeometry(RR), tR.e.SetImmediate((() => {
-           this.onNewGeometryAddedObservable.notifyObservers(RR)
-         })), !0)
+       setPositionsForCPUSkinning() {
+         const rr = this._internalMeshDataInfo;
+         if (!rr._sourcePositions) {
+           const Sr = this.getVerticesData(Lr.j.PositionKind);
+           if (!Sr) return rr._sourcePositions;
+           rr._sourcePositions = new Float32Array(Sr), this.isVertexBufferUpdatable(Lr.j.PositionKind) || this.setVerticesData(Lr.j.PositionKind, Sr, !0)
+         }
+         return rr._sourcePositions
+       }
+       setNormalsForCPUSkinning() {
+         const rr = this._internalMeshDataInfo;
+         if (!rr._sourceNormals) {
+           const Sr = this.getVerticesData(Lr.j.NormalKind);
+           if (!Sr) return rr._sourceNormals;
+           rr._sourceNormals = new Float32Array(Sr), this.isVertexBufferUpdatable(Lr.j.NormalKind) || this.setVerticesData(Lr.j.NormalKind, Sr, !0)
+         }
+ ... (42 more added lines; see GitHub link above)
```

#### 438. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8672-L8679` → after: `L6073-L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6073-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6073-L6085) · [Before (L8672-L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8672-L8679)

```diff
-       removeGeometry(RR) {
-         let JR;
-         if (this._geometriesByUniqueId) {
-           if (JR = this._geometriesByUniqueId[RR.uniqueId], void 0 === JR) return !1
-         } else if (JR = this.geometries.indexOf(RR), JR < 0) return !1;
-         if (JR !== this.geometries.length - 1) {
-           const RR = this.geometries[this.geometries.length - 1];
-           RR && (this.geometries[JR] = RR, this._geometriesByUniqueId && (this._geometriesByUniqueId[RR.uniqueId] = JR))
+       static MinMax(rr) {
+         let Sr = null,
+           Qr = null;
+         for (const Zr of rr) {
+           const rr = Zr.mG().boundingBox;
+           Sr && Qr ? (Sr.minimizeInPlace(rr.minimumWorld), Qr.maximizeInPlace(rr.maximumWorld)) : (Sr = rr.minimumWorld.clone(), Qr = rr.maximumWorld.clone())
+         }
+         return Sr && Qr ? {
+           min: Sr,
+           max: Qr
+         } : {
+           min: Tr.u.Zero(),
+           max: Tr.u.Zero()
```

#### 439. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8683-L8684` → after: `L6088-L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6088-L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6088-L6090) · [Before (L8683-L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8683-L8684)

```diff
-       getGeometries() {
-         return this.geometries
+       static Center(rr) {
+         const Sr = rr instanceof Array ? dr.MinMax(rr) : rr;
+         return Tr.u.Center(Sr.min, Sr.max)
```

#### 440. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8686-L8689` → after: `L6092-L6098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6092-L6098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6092-L6098) · [Before (L8686-L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8686-L8689)

```diff
-       getMeshById(RR) {
-         for (let JR = 0; JR < this.meshes.length; JR++)
-           if (this.meshes[JR].id === RR) return this.meshes[JR];
-         return null
+       static MergeMeshes(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           Qr = arguments.length > 2 ? arguments[2] : void 0,
+           Zr = arguments.length > 3 ? arguments[3] : void 0,
+           Wr = arguments.length > 4 ? arguments[4] : void 0,
+           ar = arguments.length > 5 ? arguments[5] : void 0;
+         return (0, yr.o)(dr._MergeMeshesCoroutine(rr, Sr, Qr, Zr, Wr, ar, !1))
```

#### 441. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8691-L8694` → after: `L6100-L6106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6100-L6106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6100-L6106) · [Before (L8691-L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8691-L8694)

```diff
-       getMeshesById(RR) {
-         return this.meshes.filter((function(JR) {
-           return JR.id === RR
-         }))
+       static async MergeMeshesAsync(rr) {
+         let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           Qr = arguments.length > 2 ? arguments[2] : void 0,
+           Zr = arguments.length > 3 ? arguments[3] : void 0,
+           Wr = arguments.length > 4 ? arguments[4] : void 0,
+           ar = arguments.length > 5 ? arguments[5] : void 0;
+         return await (0, yr.k)(dr._MergeMeshesCoroutine(rr, Sr, Qr, Zr, Wr, ar, !0), (0, yr.c)())
```

#### 442. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8696-L8699` → after: `L6108-L6204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6108-L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6108-L6204) · [Before (L8696-L8699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8696-L8699)

```diff
-       getTransformNodeById(RR) {
-         for (let JR = 0; JR < this.transformNodes.length; JR++)
-           if (this.transformNodes[JR].id === RR) return this.transformNodes[JR];
-         return null
+       static * _MergeMeshesCoroutine(rr) {
+         let Sr, Qr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           Zr = arguments.length > 2 ? arguments[2] : void 0,
+           Wr = arguments.length > 3 ? arguments[3] : void 0,
+           ar = arguments.length > 4 ? arguments[4] : void 0,
+           jr = arguments.length > 5 ? arguments[5] : void 0,
+           Ir = arguments.length > 6 ? arguments[6] : void 0;
+         if (0 === (rr = rr.filter(Boolean)).length) return null;
+         if (!Zr) {
+           let Qr = 0;
+           for (Sr = 0; Sr < rr.length; Sr++)
+             if (Qr += rr[Sr].getTotalVertices(), Qr >= 65536) return Gr.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
+         }
+         const fr = rr[0];
+         jr && (ar = !1, rr.sort(((rr, Sr) => (rr.material?.uniqueId ?? -1) - (Sr.material?.uniqueId ?? -1))));
+         const Er = new Array,
+ ... (81 more added lines; see GitHub link above)
```

#### 443. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8701-L8704` → after: `L6206-L6207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6206-L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6206-L6207) · [Before (L8701-L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8701-L8704)

```diff
-       getTransformNodeByUniqueId(RR) {
-         for (let JR = 0; JR < this.transformNodes.length; JR++)
-           if (this.transformNodes[JR].uniqueId === RR) return this.transformNodes[JR];
-         return null
+       Nrr(rr) {
+         rr._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(rr)
```

#### 444. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8706-L8709` → after: `L6209-L6217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6209-L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6209-L6217) · [Before (L8706-L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8706-L8709)

```diff
-       getTransformNodesById(RR) {
-         return this.transformNodes.filter((function(JR) {
-           return JR.id === RR
-         }))
+       trr(rr) {
+         const Sr = rr._indexInSourceMeshInstanceArray;
+         if (-1 != Sr) {
+           if (Sr !== this.instances.length - 1) {
+             const rr = this.instances[this.instances.length - 1];
+             this.instances[Sr] = rr, rr._indexInSourceMeshInstanceArray = Sr
+           }
+           rr._indexInSourceMeshInstanceArray = -1, this.instances.pop()
+         }
```

#### 445. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8711-L8714` → after: `L6219-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6219-L6220) · [Before (L8711-L8714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8711-L8714)

```diff
-       getMeshByUniqueId(RR) {
-         for (let JR = 0; JR < this.meshes.length; JR++)
-           if (this.meshes[JR].uniqueId === RR) return this.meshes[JR];
-         return null
+       _shouldConvertRHS() {
+         return this._scene.useRightHandedSystem && this.sideOrientation === qr.d.CounterClockWiseSideOrientation
```

#### 446. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8716-L8719` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6222-L6224) · [Before (L8716-L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8716-L8719)

```diff
-       getLastMeshById(RR) {
-         for (let JR = this.meshes.length - 1; JR >= 0; JR--)
-           if (this.meshes[JR].id === RR) return this.meshes[JR];
-         return null
+       _getRenderingFillMode(rr) {
+         const Sr = this.eC();
+         return Sr.forcePointsCloud ? qr.d.PointFillMode : Sr.forceWireframe ? qr.d.WireFrameFillMode : this.overrideRenderingFillMode ?? rr
```

#### 447. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8721-L8724` → after: `L6226-L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6226-L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6226-L6227) · [Before (L8721-L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8721-L8724)

```diff
-       getLastTransformNodeById(RR) {
-         for (let JR = this.transformNodes.length - 1; JR >= 0; JR--)
-           if (this.transformNodes[JR].id === RR) return this.transformNodes[JR];
-         return null
+       setMaterialByID(rr) {
+         return this.setMaterialById(rr)
```

#### 448. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8726-L8741` → after: `L6229-L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6229-L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6229-L6230) · [Before (L8726-L8741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8726-L8741)

```diff
-       getLastEntryById(RR) {
-         let JR;
-         for (JR = this.meshes.length - 1; JR >= 0; JR--)
-           if (this.meshes[JR].id === RR) return this.meshes[JR];
-         for (JR = this.transformNodes.length - 1; JR >= 0; JR--)
-           if (this.transformNodes[JR].id === RR) return this.transformNodes[JR];
-         for (JR = this.cameras.length - 1; JR >= 0; JR--)
-           if (this.cameras[JR].id === RR) return this.cameras[JR];
-         for (JR = this.lights.length - 1; JR >= 0; JR--)
-           if (this.lights[JR].id === RR) return this.lights[JR];
-         for (JR = this.skeletons.length - 1; JR >= 0; JR--) {
-           const GR = this.skeletons[JR];
-           for (let JR = GR.bones.length - 1; JR >= 0; JR--)
-             if (GR.bones[JR].id === RR) return GR.bones[JR]
-         }
-         return null
+       static CreateRibbon(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 449. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8743-L8770` → after: `L6232-L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6232-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6232-L6233) · [Before (L8743-L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8743-L8770)

```diff
-       getNodeById(RR) {
-         const JR = this.getMeshById(RR);
-         if (JR) return JR;
-         const GR = this.getTransformNodeById(RR);
-         if (GR) return GR;
-         const yR = this.getLightById(RR);
-         if (yR) return yR;
-         const tR = this.getCameraById(RR);
-         if (tR) return tR;
-         const uR = this.getBoneById(RR);
-         return uR || null
-       }
-       getNodeByName(RR) {
-         const JR = this.getMeshByName(RR);
-         if (JR) return JR;
-         const GR = this.getTransformNodeByName(RR);
- ... (12 more removed lines; see GitHub link above)
+       static CreateDisc(rr, Sr, Qr, Zr, Wr, ar) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 450. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8772-L8775` → after: `L6235-L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6235-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6235-L6236) · [Before (L8772-L8775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8772-L8775)

```diff
-       getTransformNodeByName(RR) {
-         for (let JR = 0; JR < this.transformNodes.length; JR++)
-           if (this.transformNodes[JR].name === RR) return this.transformNodes[JR];
-         return null
+       static CreateBox(rr, Sr, Qr, Zr, Wr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 451. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8777-L8780` → after: `L6238-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6238-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6238-L6239) · [Before (L8777-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8777-L8780)

```diff
-       getLastSkeletonById(RR) {
-         for (let JR = this.skeletons.length - 1; JR >= 0; JR--)
-           if (this.skeletons[JR].id === RR) return this.skeletons[JR];
-         return null
+       static CreateSphere(rr, Sr, Qr, Zr, Wr, ar) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 452. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8782-L8785` → after: `L6241-L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6241-L6242) · [Before (L8782-L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8782-L8785)

```diff
-       getSkeletonByUniqueId(RR) {
-         for (let JR = 0; JR < this.skeletons.length; JR++)
-           if (this.skeletons[JR].uniqueId === RR) return this.skeletons[JR];
-         return null
+       static CreateHemisphere(rr, Sr, Qr, Zr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 453. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8787-L8790` → after: `L6244-L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6244-L6245) · [Before (L8787-L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8787-L8790)

```diff
-       getSkeletonById(RR) {
-         for (let JR = 0; JR < this.skeletons.length; JR++)
-           if (this.skeletons[JR].id === RR) return this.skeletons[JR];
-         return null
+       static CreateCylinder(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 454. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8792-L8795` → after: `L6247-L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6247-L6248) · [Before (L8792-L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8792-L8795)

```diff
-       getSkeletonByName(RR) {
-         for (let JR = 0; JR < this.skeletons.length; JR++)
-           if (this.skeletons[JR].name === RR) return this.skeletons[JR];
-         return null
+       static CreateTorus(rr, Sr, Qr, Zr, Wr, ar, jr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 455. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8797-L8800` → after: `L6250-L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6250-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6250-L6251) · [Before (L8797-L8800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8797-L8800)

```diff
-       getMorphTargetManagerById(RR) {
-         for (let JR = 0; JR < this.morphTargetManagers.length; JR++)
-           if (this.morphTargetManagers[JR].uniqueId === RR) return this.morphTargetManagers[JR];
-         return null
+       static CreateTorusKnot(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 456. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8802-L8810` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6253-L6254) · [Before (L8802-L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8802-L8810)

```diff
-       getMorphTargetById(RR) {
-         for (let JR = 0; JR < this.morphTargetManagers.length; ++JR) {
-           const GR = this.morphTargetManagers[JR];
-           for (let JR = 0; JR < GR.numTargets; ++JR) {
-             const yR = GR.getTarget(JR);
-             if (yR.id === RR) return yR
-           }
-         }
-         return null
+       static CreateLines(rr, Sr, Qr, Zr, Wr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 457. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8812-L8820` → after: `L6256-L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6256-L6257) · [Before (L8812-L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8812-L8820)

```diff
-       getMorphTargetByName(RR) {
-         for (let JR = 0; JR < this.morphTargetManagers.length; ++JR) {
-           const GR = this.morphTargetManagers[JR];
-           for (let JR = 0; JR < GR.numTargets; ++JR) {
-             const yR = GR.getTarget(JR);
-             if (yR.name === RR) return yR
-           }
-         }
-         return null
+       static CreateDashedLines(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 458. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8822-L8827` → after: `L6259-L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6259-L6260) · [Before (L8822-L8827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8822-L8827)

```diff
-       getPostProcessByName(RR) {
-         for (let JR = 0; JR < this.postProcesses.length; ++JR) {
-           const GR = this.postProcesses[JR];
-           if (GR.name === RR) return GR
-         }
-         return null
+       static CreatePolygon(rr, Sr, Qr, Zr, Wr, ar, jr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 459. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8829-L8830` → after: `L6262-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6262-L6263) · [Before (L8829-L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8829-L8830)

```diff
-       isActiveMesh(RR) {
-         return -1 !== this._activeMeshes.indexOf(RR)
+       static ExtrudePolygon(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 460. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8832-L8833` → after: `L6265-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6265-L6266) · [Before (L8832-L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8832-L8833)

```diff
-       get uid() {
-         return this._uid || (this._uid = yR.h.RandomId()), this._uid
+       static ExtrudeShape(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 461. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8835-L8836` → after: `L6268-L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6268-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6268-L6269) · [Before (L8835-L8836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8835-L8836)

```diff
-       addExternalData(RR, JR) {
-         return this._externalData || (this._externalData = new iR), this._externalData.add(RR, JR)
+       static ExtrudeShapeCustom(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 462. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8838-L8839` → after: `L6271-L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6271-L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6271-L6272) · [Before (L8838-L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8838-L8839)

```diff
-       getExternalData(RR) {
-         return this._externalData ? this._externalData.get(RR) : null
+       static CreateLathe(rr, Sr, Qr, Zr, Wr, ar, jr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 463. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8841-L8842` → after: `L6274-L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6274-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6274-L6275) · [Before (L8841-L8842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8841-L8842)

```diff
-       getOrAddExternalDataWithFactory(RR, JR) {
-         return this._externalData || (this._externalData = new iR), this._externalData.getOrAddWithFactory(RR, JR)
+       static CreatePlane(rr, Sr, Qr, Zr, Wr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 464. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8844-L8845` → after: `L6277-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6277-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6277-L6278) · [Before (L8844-L8845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8844-L8845)

```diff
-       removeExternalData(RR) {
-         return this._externalData.remove(RR)
+       static CreateGround(rr, Sr, Qr, Zr, Wr, ar) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 465. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8847-L8854` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6280-L6281) · [Before (L8847-L8854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8847-L8854)

```diff
-       _evaluateSubMesh(RR, JR, GR, yR) {
-         if (yR || RR.isInFrustum(this._frustumPlanes)) {
-           for (let yR = 0, tR = this._evaluateSubMeshStage; yR < tR.length; yR++) {
-             tR[yR].action(JR, RR)
-           }
-           const GR = RR.he();
-           null !== GR && void 0 !== GR && (GR.hasRenderTargetTextures && null != GR.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(GR) && (this._processedMaterials.push(GR), this._materialsRenderTargets.concatWithNoDuplicate(GR.getRenderTargetTextures())), thi … [truncated]
-         }
+       static CreateTiledGround(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 466. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8856-L8857` → after: `L6283-L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6283-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6283-L6284) · [Before (L8856-L8857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8856-L8857)

```diff
-       freeProcessedMaterials() {
-         this._processedMaterials.dispose()
+       static CreateGroundFromHeightMap(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 467. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8859-L8860` → after: `L6286-L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6286-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6286-L6287) · [Before (L8859-L8860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8859-L8860)

```diff
-       get blockfreeActiveMeshesAndRenderingGroups() {
-         return this._preventFreeActiveMeshesAndRenderingGroups
+       static CreateTube(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 468. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8862-L8863` → after: `L6289-L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6289-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6289-L6290) · [Before (L8862-L8863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8862-L8863)

```diff
-       set blockfreeActiveMeshesAndRenderingGroups(RR) {
-         this._preventFreeActiveMeshesAndRenderingGroups !== RR && (RR && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = RR)
+       static CreatePolyhedron(rr, Sr, Qr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 469. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8865-L8870` → after: `L6292-L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6292-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6292-L6293) · [Before (L8865-L8870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8865-L8870)

```diff
-       freeActiveMeshes() {
-         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
-           for (let RR = 0; RR < this.activeCameras.length; RR++) {
-             const JR = this.activeCameras[RR];
-             JR && JR._activeMeshes && JR._activeMeshes.dispose()
-           }
+       static CreateIcoSphere(rr, Sr, Qr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 470. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8872-L8877` → after: `L6295-L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6295-L6296) · [Before (L8872-L8877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8872-L8877)

```diff
-       freeRenderingGroups() {
-         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
-           for (let RR = 0; RR < this.textures.length; RR++) {
-             const JR = this.textures[RR];
-             JR && JR.renderList && JR.freeRenderingGroups()
-           }
+       static CreateDecal(rr, Sr, Qr, Zr, Wr, ar) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 471. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8879-L8880` → after: `L6298-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6298-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6298-L6299) · [Before (L8879-L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8879-L8880)

```diff
-       _isInIntermediateRendering() {
-         return this._intermediateRendering
+       static CreateCapsule(rr, Sr, Qr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 472. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8882-L8883` → after: `L6301-L6302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6301-L6302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6301-L6302) · [Before (L8882-L8883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8882-L8883)

```diff
-       _isInRenderingMeshEvaluation() {
-         return this._renderingMeshEvaluationDepth > 0
+       static ExtendToGoldberg(rr) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 473. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8885-L8910` → after: `L6304-L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6304-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6304-L6465) · [Before (L8885-L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8885-L8910)

```diff
-       freezeActiveMeshes() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           JR = arguments.length > 1 ? arguments[1] : void 0,
-           GR = arguments.length > 2 ? arguments[2] : void 0,
-           yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-           uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (this.frameGraph) {
-           this._renderWithFrameGraph(!0, !1, !0);
-           const ZR = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
-           for (const RR of ZR) RR.objectRenderer._freezeActiveMeshes(yR);
-           return this._freezeActiveMeshesCancel = (0, tR.g)((() => {
-             let RR = !0,
-               JR = !0;
-             for (const GR of ZR) RR && (RR = GR.objectRenderer._isFrozen), JR && (JR = null !== GR.objectRenderer._freezeActiveMeshesCancel);
-             if (RR) return !0;
-             if (!JR) throw new Error("Freezing active meshes was cancelled");
- ... (10 more removed lines; see GitHub link above)
+     }
+     dr.FRONTSIDE = lr.b.FRONTSIDE, dr.BACKSIDE = lr.b.BACKSIDE, dr.DOUBLESIDE = lr.b.DOUBLESIDE, dr.DEFAULTSIDE = lr.b.DEFAULTSIDE, dr.NO_CAP = 0, dr.CAP_START = 1, dr.CAP_END = 2, dr.CAP_ALL = 3, dr.NO_FLIP = 0, dr.FLIP_TILE = 1, dr.ROTATE_TILE = 2, dr.FLIP_ROW = 3, dr.ROTATE_RO … [truncated]
+       throw (0, Ar.l)("GroundMesh")
+     }, dr._GoldbergMeshParser = (rr, Sr) => {
+       throw (0, Ar.l)("GoldbergMesh")
+     }, dr._LinesMeshParser = (rr, Sr) => {
+       throw (0, Ar.l)("LinesMesh")
+     }, dr._GreasedLineMeshParser = (rr, Sr) => {
+       throw (0, Ar.l)("GreasedLineMesh")
+     }, dr._GreasedLineRibbonMeshParser = (rr, Sr) => {
+       throw (0, Ar.l)("GreasedLineRibbonMesh")
+     }, dr._TrailMeshParser = (rr, Sr) => {
+       throw (0, Ar.l)("TrailMesh")
+     }, dr._GaussianSplattingMeshParser = (rr, Sr) => {
+       throw (0, Ar.l)("GaussianSplattingMesh")
+     }, dr._GaussianSplattingPartProxyMeshParser = (rr, Sr) => {
+ ... (146 more added lines; see GitHub link above)
```

#### 474. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8912` → after: `L6467-L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6467-L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6467-L6470) · [Before (L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8912)

```diff
-           })), this
+             const Wr = new Nr;
+             Wr.indexStart = 0, Wr.indexCount = Zr.indices ? Zr.indices.length : 0, Wr.materialIndex = Qr.materialIndex, Wr.verticesStart = 0, Wr.verticesCount = (Zr.positions ? Zr.positions.length : 0) / 3, Zr.materialInfos = [Wr], Sr.push(Zr)
+           }
+           return Sr
```

#### 475. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8914-L8943` → after: `L6472-L6541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6472-L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6472-L6541) · [Before (L8914-L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8914-L8943)

```diff
-         return this.executeWhenReady((() => {
-           if (this.activeCamera) {
-             if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = uR, this._skipEvaluateActiveMeshesCompletely = RR, yR)
-               for (let RR = 0; RR < this._activeMeshes.length; RR++) this._activeMeshes.data[RR]._freeze();
-             JR && JR()
-           } else GR && GR("No active camera found")
-         })), this
-       }
-       unfreezeActiveMeshes() {
-         for (let RR = 0; RR < this.meshes.length; RR++) {
-           const JR = this.meshes[RR];
-           JR._internalAbstractMeshDataInfo && (JR._internalAbstractMeshDataInfo._isActive = !1)
-         }
-         if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
-           const RR = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
-           for (const JR of RR) JR.objectRenderer._unfreezeActiveMeshes()
- ... (14 more removed lines; see GitHub link above)
+         merge(rr) {
+           let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+             Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+             Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+           const ar = Array.isArray(rr) ? rr.map((rr => ({
+             vertexData: rr
+           }))) : [{
+             vertexData: rr
+           }];
+           return (0, pr.o)(this._mergeCoroutine(void 0, ar, Sr, !1, Qr, Zr, Wr))
+         }* _mergeCoroutine(Sr, Qr) {
+           let Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+             Wr = arguments.length > 3 ? arguments[3] : void 0,
+             jr = arguments.length > 4 ? arguments[4] : void 0,
+             Ir = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+ ... (54 more added lines; see GitHub link above)
```

#### 476. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8946-L8948` → after: `L6554-L6577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6554-L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6554-L6577) · [Before (L8946-L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8946-L8948)

```diff
-           if (this._activeParticleSystems) {
-             const RR = this._activeParticleSystems.length;
-             for (let JR = 0; JR < RR; JR++) this._activeParticleSystems.data[JR].animate()
+           return this.indices = mr, this.positions = rr._MergeElement(ar.j.PositionKind, pr.positions, Sr, Qr.map((rr => [rr.vertexData.positions, rr.transform]))), Wr && (yield), pr.normals && (this.normals = rr._MergeElement(ar.j.NormalKind, pr.normals, Sr, Qr.map((rr => [rr.ve … [truncated]
+         }
+         static _MergeElement(Sr, Qr, Zr, Wr) {
+           const jr = Wr.filter((rr => null !== rr[0] && void 0 !== rr[0]));
+           if (!Qr && 0 == jr.length) return Qr;
+           if (!Qr) return this._MergeElement(Sr, jr[0][0], jr[0][1], jr.slice(1));
+           const Ir = jr.reduce(((rr, Sr) => rr + Sr[0].length), Qr.length),
+             fr = Sr === ar.j.PositionKind ? rr._TransformVector3Coordinates : Sr === ar.j.NormalKind ? rr._TransformVector3Normals : Sr === ar.j.TangentKind ? rr._TransformVector4Normals : () => {};
+           if (Qr instanceof Float32Array) {
+             const rr = new Float32Array(Ir);
+             rr.set(Qr), Zr && fr(rr, Zr, 0, Qr.length);
+             let Sr = Qr.length;
+             for (const [Qr, Zr] of jr) rr.set(Qr, Sr), Zr && fr(rr, Zr, Sr, Qr.length), Sr += Qr.length;
+             return rr
+           } {
+             const rr = new Array(Ir);
+ ... (8 more added lines; see GitHub link above)
```

#### 477. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8952-L8955` → after: `L6580-L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6580-L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6580-L6592) · [Before (L8952-L8955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8952-L8955)

```diff
-         if (!this.activeCamera) return;
-         this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(),  … [truncated]
-         for (let tR = 0, uR = this._beforeEvaluateActiveMeshStage; tR < uR.length; tR++) {
-           uR[tR].action()
+         _validate() {
+           if (!this.positions) throw new xr.i("Positions are required", xr.e.MeshInvalidPositionsError);
+           const rr = (rr, Sr) => {
+               const Qr = (0, ar.i)(rr);
+               if (Sr.length % Qr !== 0) throw new Error("The " + rr + "s array count must be a multiple of " + Qr);
+               return Sr.length / Qr
+             },
+             Sr = rr(ar.j.PositionKind, this.positions),
+             Qr = (Qr, Zr) => {
+               const Wr = rr(Qr, Zr);
+               if (Wr !== Sr) throw new Error("The " + Qr + "s element count (" + Wr + ") does not match the positions count (" + Sr + ")")
+             };
+           this.normals && Qr(ar.j.NormalKind, this.normals), this.tangents && Qr(ar.j.TangentKind, this.tangents), this.uvs && Qr(ar.j.UVKind, this.uvs), this.uvs2 && Qr(ar.j.UV2Kind, this.uvs2), this.uvs3 && Qr(ar.j.UV3Kind, this.uvs3), this.uvs4 && Qr(ar.j.UV4Kind, this.uvs4),  … [truncated]
```

#### 478. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8957-L8973` → after: `L6594-L6610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6594-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6594-L6610) · [Before (L8957-L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8957-L8973)

```diff
-         const RR = this.getActiveMeshCandidates(),
-           JR = RR.length,
-           GR = dR.d.Enabled,
-           yR = this.customLODSelector;
-         for (let tR = 0; tR < JR; tR++) {
-           const JR = RR.data[tR],
-             uR = !yR && !JR.sH && !JR._internalMeshDataInfo?._LODLevels.length;
-           let ZR, qR;
-           if ((uR || (ZR = JR._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), ZR ? ZR[1] = -1 : (ZR = [JR, -1], JR._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, ZR))), !JR.isBlocked) && (GR && this._totalVertices.addCount(JR.getTotalVertices() … [truncated]
-             if (JR.computeWorldMatrix(), JR.actionManager && JR.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(JR), uR) qR = JR;
-             else if (qR = yR ? yR(JR, this.activeCamera) : JR.getLOD(this.activeCamera), ZR[0] = qR, ZR[1] = this._frameId, void 0 === qR || null === qR) continue;
-             if (qR !== JR && 0 !== qR.billboardMode && qR.computeWorldMatrix(), JR._preActivate(), JR.isVisible && JR.visibility > 0 && 0 !== (JR.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || JR.Qe || JR.isInFrustum(this._frustumPlanes))) {
-               this._activeMeshes.push(JR), this.activeCamera._activeMeshes.push(JR), qR !== JR && qR._activate(this._renderId, !1);
-               for (let RR = 0, GR = this._preActiveMeshStage; RR < GR.length; RR++) {
-                 GR[RR].action(JR)
-               }
- ... (1 more removed lines; see GitHub link above)
+         clone() {
+           const Sr = this.serialize();
+           return rr.Parse(Sr)
+         }
+         serialize() {
+           const rr = {};
+           if (this.positions && (rr.positions = Array.from(this.positions)), this.normals && (rr.normals = Array.from(this.normals)), this.tangents && (rr.tangents = Array.from(this.tangents)), this.uvs && (rr.uvs = Array.from(this.uvs)), this.uvs2 && (rr.uvs2 = Array.from(this.u … [truncated]
+             rr.materialInfos = [];
+             for (const Sr of this.materialInfos) {
+               const Qr = {
+                 indexStart: Sr.indexStart,
+                 indexCount: Sr.indexCount,
+                 materialIndex: Sr.materialIndex,
+                 verticesStart: Sr.verticesStart,
+                 verticesCount: Sr.verticesCount
+               };
+ ... (1 more added lines; see GitHub link above)
```

#### 479. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8977-L8985` → after: `L6615-L6616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6615-L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6615-L6616) · [Before (L8977-L8985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8977-L8985)

```diff
-         if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
-           this.onBeforeParticlesRenderingObservable.notifyObservers(this);
-           for (let RR = 0; RR < this.pM.length; RR++) {
-             const JR = this.pM[RR];
-             if (!JR.isStarted() || !JR.emitter) continue;
-             const GR = JR.emitter;
-             GR.position && !GR.isEnabled() || (this._activeParticleSystems.push(JR), JR.animate(), this._renderingManager.dispatchParticles(JR))
-           }
-           this.onAfterParticlesRenderingObservable.notifyObservers(this)
+         static ExtractFromMesh(Sr, Qr, Zr) {
+           return rr._ExtractFrom(Sr, Qr, Zr)
```

#### 480. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L8987-L9000` → after: `L6618-L6634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6618-L6634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6618-L6634) · [Before (L8987-L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L8987-L9000)

```diff
-       }
-       _prepareSkeleton(RR) {
-         this._skeletonsEnabled && RR.skeleton && (this._activeSkeletons.pushNoDuplicate(RR.skeleton) && (RR.skeleton.prepare(), this._activeBones.addCount(RR.skeleton.bones.length, !1)), RR.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(RR) && this.frameG … [truncated]
-       }
-       _activeMesh(RR, JR) {
-         this._prepareSkeleton(JR);
-         let GR = RR.PuR || RR.sH || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || JR.Qe;
-         if (JR && JR.XM && JR.XM.length > 0) {
-           const yR = this.getActiveSubMeshCandidates(JR),
-             tR = yR.length;
-           GR = GR || 1 === tR;
-           for (let uR = 0; uR < tR; uR++) {
-             const tR = yR.data[uR];
-             this._evaluateSubMesh(tR, JR, RR, GR)
+         static ExtractFromGeometry(Sr, Qr, Zr) {
+           return rr._ExtractFrom(Sr, Qr, Zr)
+         }
+         static _ExtractFrom(Sr, Qr, Zr) {
+           const Wr = new rr;
+           if (Sr.isVerticesDataPresent(ar.j.PositionKind) && (Wr.positions = Sr.getVerticesData(ar.j.PositionKind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.NormalKind) && (Wr.normals = Sr.getVerticesData(ar.j.NormalKind, Qr, Zr)), Sr.isVerticesDataPresent(ar.j.TangentKind) && (Wr. … [truncated]
+             const rr = Sr.geometry || Sr,
+               jr = rr.getVertexBuffer(ar.j.ColorKind),
+               Ir = rr.getVerticesData(ar.j.ColorKind, Qr, Zr);
+             if (3 === jr.getSize()) {
+               const rr = new Float32Array(4 * Ir.length / 3);
+               for (let Sr = 0, Qr = 0; Sr < Ir.length; Sr += 3, Qr += 4) rr[Qr] = Ir[Sr], rr[Qr + 1] = Ir[Sr + 1], rr[Qr + 2] = Ir[Sr + 2], rr[Qr + 3] = 1;
+               Wr.colors = rr
+             } else {
+               if (4 !== jr.getSize()) throw new Error(`Unexpected number of color components: ${jr.getSize()}`);
+               Wr.colors = Ir
+ ... (1 more added lines; see GitHub link above)
```

#### 481. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9003-L9040` → after: `L6638-L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6638-L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6638-L6639) · [Before (L9003-L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9003-L9040)

```diff
-       }
-       updateTransformMatrix(RR) {
-         const JR = this.activeCamera;
-         if (JR)
-           if (JR._renderingMultiview) {
-             const GR = JR._rigCameras[0],
-               yR = JR._rigCameras[1];
-             this.setTransformMatrix(GR.getViewMatrix(), GR.getProjectionMatrix(RR), yR.getViewMatrix(), yR.getProjectionMatrix(RR))
-           } else this.setTransformMatrix(JR.getViewMatrix(), JR.getProjectionMatrix(RR))
-       }
-       _bindFrameBuffer(RR) {
-         let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         this._useCurrentFrameBuffer || (RR && RR._multiviewTexture ? RR._multiviewTexture._bindFrameBuffer() : RR && RR.outputRenderTarget ? RR.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer … [truncated]
-       }
-       _clearFrameBuffer(RR) {
-         if (RR && RR._multiviewTexture);
- ... (22 more removed lines; see GitHub link above)
+         static CreateRibbon(rr) {
+           throw (0, jr.l)("ribbonBuilder")
```

#### 482. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9042-L9053` → after: `L6641-L6749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6641-L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6641-L6749) · [Before (L9042-L9053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9042-L9053)

```diff
-         let uR = !1;
-         if (this.renderTargetsEnabled) {
-           let RR;
-           if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
-             yR.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
-             const JR = this.getBoundingBoxRenderer?.();
-             for (let GR = 0; GR < this._renderTargets.length; GR++) {
-               const yR = this._renderTargets.data[GR];
-               if (yR._shouldRender()) {
-                 this._renderId++;
-                 const GR = yR.activeCamera && yR.activeCamera !== this.activeCamera;
-                 JR && !RR && (RR = JR.renderList.length > 0 ? JR.renderList.data.slice() : [], RR.length = JR.renderList.length), yR.render(GR, this.dumpNextRenderTargets), uR = !0
+         static CreateBox(rr) {
+           throw (0, jr.l)("boxBuilder")
+         }
+         static CreateTiledBox(rr) {
+           throw (0, jr.l)("tiledBoxBuilder")
+         }
+         static CreateTiledPlane(rr) {
+           throw (0, jr.l)("tiledPlaneBuilder")
+         }
+         static CreateSphere(rr) {
+           throw (0, jr.l)("sphereBuilder")
+         }
+         static CreateCylinder(rr) {
+           throw (0, jr.l)("cylinderBuilder")
+         }
+         static CreateTorus(rr) {
+ ... (93 more added lines; see GitHub link above)
```

#### 483. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9058-L9062` → after: `L6766-L6800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6766-L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6766-L6800) · [Before (L9058-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9058-L9062)

```diff
-           if (this._cameraDrawRenderTargetStage.length > 0) {
-             const JR = this.getBoundingBoxRenderer?.();
-             JR && !RR && (RR = JR.renderList.length > 0 ? JR.renderList.data.slice() : [], RR.length = JR.renderList.length);
-             for (let RR = 0, GR = this._cameraDrawRenderTargetStage; RR < GR.length; RR++) {
-               uR = GR[RR].action(this.activeCamera) || uR
+         }
+         static Parse(Sr) {
+           const Qr = new rr,
+             Zr = Sr.positions;
+           Zr && Qr.set(Zr, ar.j.PositionKind);
+           const Wr = Sr.normals;
+           Wr && Qr.set(Wr, ar.j.NormalKind);
+           const jr = Sr.tangents;
+           jr && Qr.set(jr, ar.j.TangentKind);
+           const fr = Sr.uvs;
+           fr && Qr.set(fr, ar.j.UVKind);
+           const Er = Sr.uvs2;
+           Er && Qr.set(Er, ar.j.UV2Kind);
+           const pr = Sr.uvs3;
+           pr && Qr.set(pr, ar.j.UV3Kind);
+           const xr = Sr.uvs4;
+ ... (19 more added lines; see GitHub link above)
```

#### 484. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9066` → after: `L6803-L7107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R6803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L6803-L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L6803-L7107) · [Before (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9066)

```diff
-           this._intermediateRendering = !1
+           return Qr
+         }
+         static ImportVertexData(Sr, Qr) {
+           const Zr = rr.Parse(Sr);
+           Qr.setAllVerticesData(Zr, Sr.updatable)
+         }
+       }, (() => {
+         const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         Sr = [Er.j.filter((function() {
+           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
+         }))], Qr = [Er.j.filter((function() {
+           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
+         }))], Ur = [Er.j.filter((function() {
+           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
+         }))], tr = [Er.j.filter((function() {
+           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
+ ... (289 more added lines; see GitHub link above)
```

#### 485. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9068-L9070` → after: `L7109-L7110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7109-L7110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7109-L7110) · [Before (L9068-L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9068-L9070)

```diff
-         uR && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || RR._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame … [truncated]
-         for (let yR = 0, qR = this._beforeCameraDrawStage; yR < qR.length; yR++) {
-           qR[yR].action(this.activeCamera)
+         set billboardMode(Sr) {
+           this._billboardMode !== Sr && (this._billboardMode = Sr, this._cache.useBillboardPosition = 0 !== (this._billboardMode & rr.BILLBOARDMODE_USE_POSITION))
```

#### 486. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9072-L9076` → after: `L7112-L7113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7112-L7113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7112-L7113) · [Before (L9072-L9076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9072-L9076)

```diff
-         this.onBeforeDrawPhaseObservable.notifyObservers(this);
-         const ZR = tR.snapshotRendering && 1 === tR.snapshotRenderingMode;
-         ZR && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !ZR), this.onAfterDrawPhaseObservable.notifyObservers(this);
-         for (let yR = 0, qR = this._afterCameraDrawStage; yR < qR.length; yR++) {
-           qR[yR].action(this.activeCamera)
+         get infiniteDistance() {
+           return this._infiniteDistance
```

#### 487. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9078-L9080` → after: `L7115-L7116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7115-L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7115-L7116) · [Before (L9078-L9080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9078-L9080)

```diff
-         if (this.postProcessManager && !RR._multiviewTexture) {
-           const JR = RR.outputRenderTarget ? RR.outputRenderTarget.renderTarget : void 0;
-           this.postProcessManager._finalizeFrame(RR.isIntermediate, JR)
+         set infiniteDistance(rr) {
+           this._infiniteDistance !== rr && (this._infiniteDistance = rr)
```

#### 488. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9082-L9083` → after: `L7118-L7120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7118-L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7118-L7120) · [Before (L9082-L9083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9082-L9083)

```diff
-         for (let yR = 0, qR = this._afterCameraPostProcessStage; yR < qR.length; yR++) {
-           qR[yR].action(this.activeCamera)
+         constructor(Sr) {
+           let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+           super(Sr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new xr.u(0, 0, 1), this._up = new xr.u(0, 1, 0), this._right = new xr.u(1, 0, 0), this._position = (0, Ir.m)(this, zr, xr.u.Zero()), this._rotation = ((0, Ir.m)(this, Y … [truncated]
```

#### 489. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9085-L9113` → after: `L7122-L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7122-L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7122-L7123) · [Before (L9085-L9113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9085-L9113)

```diff
-         this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
-       }
-       _processSubCameras(RR) {
-         let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (0 === RR.cameraRigMode || RR._renderingMultiview) return RR._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(RR, void 0, JR), void this.onAfterRenderCameraObservable.notifyObservers(RR);
-         if (RR._useMultiviewToSingleView) this._renderMultiviewToSingleView(RR);
-         else {
-           this.onBeforeCameraRenderObservable.notifyObservers(RR);
-           for (let JR = 0; JR < RR._rigCameras.length; JR++) this._renderForCamera(RR._rigCameras[JR], RR)
-         }
-         this._activeCamera = RR, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(RR)
-       }
-       _checkIntersections() {
-         for (let RR = 0; RR < this._meshesForIntersections.length; RR++) {
-           const JR = this._meshesForIntersections.data[RR];
-           if (JR.actionManager)
- ... (13 more removed lines; see GitHub link above)
+         getClassName() {
+           return "TransformNode"
```

#### 490. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9115-L9130` → after: `L7125-L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7125-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7125-L7126) · [Before (L9115-L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9115-L9130)

```diff
-       }
-       _advancePhysicsEngineStep(RR) {}
-       _animate(RR) {}
-       animate() {
-         if (this._engine.isDeterministicLockStep()) {
-           let RR = Math.max(uG.MinDeltaTime, Math.min(this._engine.getDeltaTime(), uG.MaxDeltaTime)) + this._timeAccumulator;
-           const JR = this._engine.getTimeStep(),
-             GR = 1e3 / JR / 1e3;
-           let yR = 0;
-           const tR = this._engine.getLockstepMaxSteps();
-           let uR = Math.floor(RR / JR);
-           for (uR = Math.min(uR, tR); RR > 0 && yR < uR;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = JR * GR, this._animate(JR), this.onAfterAnimationsObservable.notifyObservers(this), this.AY && this._advancePhysicsEngineStep(JR), this.onAfterStepO … [truncated]
-           this._timeAccumulator = RR < 0 ? 0 : RR
-         } else {
-           const RR = this.useConstantAnimationDeltaTime ? 16 : Math.max(uG.MinDeltaTime, Math.min(this._engine.getDeltaTime(), uG.MaxDeltaTime));
-           this._animationRatio = .06 * RR, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.AY && this._advancePhysicsEngineStep(RR)
+         get position() {
+           return this._position
```

#### 491. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9132-L9158` → after: `L7128-L7192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7128-L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7128-L7192) · [Before (L9132-L9158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9132-L9158)

```diff
-       }
-       _clear() {
-         (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
-       }
-       _checkCameraRenderTarget(RR) {
-         if (RR?.outputRenderTarget && !RR?.isRigCamera && (RR.outputRenderTarget._cleared = !1), RR?.rigCameras?.length)
-           for (let JR = 0; JR < RR.rigCameras.length; ++JR) {
-             const GR = RR.rigCameras[JR].outputRenderTarget;
-             GR && (GR._cleared = !1)
-           }
-       }
-       resetDrawCache(RR) {
-         if (this.meshes)
-           for (const JR of this.meshes) JR.resetDrawCache(RR)
-       }
-       _renderWithFrameGraph() {
- ... (11 more removed lines; see GitHub link above)
+         set position(rr) {
+           this._position = rr, this._markAsDirtyInternal()
+         }
+         isUsingPivotMatrix() {
+           return this._usePivotMatrix
+         }
+         isUsingPostMultiplyPivotMatrix() {
+           return this._postMultiplyPivotMatrix
+         }
+         get rotation() {
+           return this._rotation
+         }
+         set rotation(rr) {
+           this._rotation = rr, this._rotationQuaternion = null, this._markAsDirtyInternal()
+         }
+         get Tx() {
+ ... (49 more added lines; see GitHub link above)
```

#### 492. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9160-L9171` → after: `L7194-L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7194-L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7194-L7196) · [Before (L9160-L9171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9160-L9171)

```diff
-       }
-       _renderWithFrameGraphAfterBeforeRender(RR) {
-         this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
-         const JR = this._frameGraph?.findMainCamera() ?? null;
-         if (this.renderTargetsEnabled) {
-           this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), yR.h.StartPerformanceCounter("Custom render targets", this._renderTarg … [truncated]
-           for (let RR = 0; RR < this._renderTargets.length; RR++) {
-             const GR = this._renderTargets.data[RR],
-               yR = GR.activeCamera || JR;
-             this._renderRenderTarget(GR, yR, !0, this.dumpNextRenderTargets)
-           }
-           yR.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
+         setPivotMatrix(rr) {
+           let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           return this._pivotMatrix.iH(rr), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = Sr, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
```

#### 493. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9173-L9175` → after: `L7198-L7199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7198-L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7198-L7199) · [Before (L9173-L9175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9173-L9175)

```diff
-         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
-         for (let GR = 0, yR = this._beforeClearStage; GR < yR.length; GR++) {
-           yR[GR].action()
+         getPivotMatrix() {
+           return this._pivotMatrix
```

#### 494. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9177-L9189` → after: `L7201-L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7201-L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7201-L7356) · [Before (L9177-L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9177-L9189)

```diff
-         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
-         else {
-           const JR = this.getActiveMeshCandidates(),
-             GR = JR.length;
-           if (this._activeMeshesFrozen) {
-             if (!this._skipEvaluateActiveMeshesCompletely)
-               for (let RR = 0; RR < GR; RR++) {
-                 const GR = JR.data[RR];
-                 GR._internalAbstractMeshDataInfo._wasActiveLastFrame && GR.computeWorldMatrix()
-               }
-             if (this.particlesEnabled) {
-               const RR = this._activeParticleSystems.length;
-               for (let JR = 0; JR < RR; JR++) this._activeParticleSystems.data[JR].animate()
+         instantiateHierarchy() {
+           let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+             Sr = arguments.length > 1 ? arguments[1] : void 0,
+             Qr = arguments.length > 2 ? arguments[2] : void 0;
+           const Zr = this.clone("Clone of " + (this.name || this.id), rr || this.parent, !0);
+           Zr && Qr && Qr(this, Zr);
+           for (const Wr of this.getChildTransformNodes(!0)) Wr.instantiateHierarchy(Zr, Sr, Qr);
+           return Zr
+         }
+         sC() {
+           let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return rr ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.Srr(0), this._rotationQuaternion = this._rotationQuaternion || xr.h.Identity(), rr.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(! … [truncated]
+         }
+         unfreezeWorldMatrix() {
+           return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
+         }
+ ... (140 more added lines; see GitHub link above)
```

#### 495. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9191-L9195` → after: `L7358-L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7358-L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7358-L7413) · [Before (L9191-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9191-L9195)

```diff
-           } else {
-             this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
-             for (let yR = 0; yR < GR; yR++) {
-               const GR = JR.data[yR];
-               GR._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, GR.isBlocked || (this._totalVertices.addCount(GR.getTotalVertices(), !1), GR.isReady() && GR.isEnabled() && !GR.MK.hasAZeroComponent && (GR.computeWorldMatrix(RR), GR.actionManager && GR.actionManager.hasSpe … [truncated]
+             Wr = xr.h.RotationAxisToRef(Sr, Qr, rr._RotationAxisCache), Wr.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
+           } else Wr = xr.h.RotationAxisToRef(Sr, Qr, rr._RotationAxisCache), this.rotationQuaternion.multiplyToRef(Wr, this.rotationQuaternion);
+           return this
+         }
+         rotateAround(rr, Sr, Qr) {
+           Sr.normalize(), this.rotationQuaternion || (this.rotationQuaternion = xr.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.Srr(0));
+           const Zr = xr.n.kU[0],
+             Wr = xr.n.kU[1],
+             ar = xr.n.kU[2],
+             jr = xr.n.Quaternion[0],
+             Ir = xr.n.Matrix[0],
+             fr = xr.n.Matrix[1],
+             Er = xr.n.Matrix[2],
+             pr = xr.n.Matrix[3];
+           return rr.subtractToRef(this.position, Zr), xr.d.TranslationToRef(Zr.x, Zr.y, Zr.z, Ir), xr.d.TranslationToRef(-Zr.x, -Zr.y, -Zr.z, fr), xr.d.RotationAxisToRef(Sr, Qr, Er), fr.multiplyToRef(Er, pr), pr.multiplyToRef(Ir, pr), pr.decompose(Wr, jr, ar), this.position.addIn … [truncated]
+         }
+ ... (40 more added lines; see GitHub link above)
```

#### 496. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9197-L9202` → after: `L7415-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7415-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7415-L7461) · [Before (L9197-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9197-L9202)

```diff
-             if (this.particlesEnabled)
-               for (let RR = 0; RR < this.pM.length; RR++) {
-                 const JR = this.pM[RR];
-                 if (!JR.isStarted() || !JR.emitter) continue;
-                 const GR = JR.emitter;
-                 GR.position && !GR.isEnabled() || (this._activeParticleSystems.push(JR), JR.animate())
+           } else Ir = rr._TmpRotation, xr.h.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, Ir);
+           if (this._usePivotMatrix) {
+             const rr = xr.n.Matrix[1];
+             xr.d.ScalingToRef(jr.x, jr.y, jr.z, rr);
+             const Sr = xr.n.Matrix[0];
+             Ir.toRotationMatrix(Sr), this._pivotMatrix.multiplyToRef(rr, xr.n.Matrix[4]), xr.n.Matrix[4].multiplyToRef(Sr, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTrans … [truncated]
+           } else xr.d.ComposeToRef(jr, Ir, fr, this._localMatrix);
+           if (ar && ar.getWorldMatrix) {
+             if (Sr && ar.computeWorldMatrix(Sr), this.billboardMode) {
+               if (this._transformToBoneReferal) {
+                 const rr = this.parent;
+                 rr.getSkeleton().prepare(), rr.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), xr.n.Matrix[7])
+               } else xr.n.Matrix[7].iH(ar.getWorldMatrix());
+               const Sr = xr.n.kU[5],
+                 Qr = xr.n.kU[6],
+                 Zr = xr.n.Quaternion[0];
+ ... (31 more added lines; see GitHub link above)
```

#### 497. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9206-L9213` → after: `L7483-L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7483-L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7483-L7485) · [Before (L9206-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9206-L9213)

```diff
-         this.frameGraph?.execute()
-       }
-       _renderRenderTarget(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         if (this._intermediateRendering = !0, RR._shouldRender()) {
-           if (this._renderId++, this.activeCamera = JR, !this.activeCamera) throw new Error("Active camera not set");
-           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), RR.render(GR, yR)
+         _afterComputeWorldMatrix() {}
+         registerAfterWorldMatrixUpdate(rr) {
+           return this.onAfterWorldMatrixUpdateObservable.add(rr), this
```

#### 498. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9215-L9225` → after: `L7487-L7488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7487-L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7487-L7488) · [Before (L9215-L9225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9215-L9225)

```diff
-         this._intermediateRendering = !1
-       }
-       render() {
-         let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this.oB) return;
-         const GR = this._renderingMeshEvaluationDepth;
-         try {
-           this._renderFrame(RR, JR)
-         } finally {
-           this._renderingMeshEvaluationDepth = GR
+         unregisterAfterWorldMatrixUpdate(rr) {
+           return this.onAfterWorldMatrixUpdateObservable.removeCallback(rr), this
```

#### 499. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9227-L9233` → after: `L7490-L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7490-L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7490-L7492) · [Before (L9227-L9233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9227-L9233)

```diff
-       }
-       _renderFrame(RR, JR) {
-         if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), LR.d.jH = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCamer … [truncated]
-           for (const GR of this.activeCameras) this._checkCameraRenderTarget(GR);
-         this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimatio … [truncated]
-         for (let GR = 0, yR = this._beforeCameraUpdateStage; GR < yR.length; GR++) {
-           yR[GR].action()
+         getPositionInCameraSpace() {
+           let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return rr || (rr = this.eC().activeCamera), xr.u.TransformCoordinates(this.getAbsolutePosition(), rr.getViewMatrix())
```

#### 500. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9235-L9252` → after: `L7494-L7504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7494-L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7494-L7504) · [Before (L9235-L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9235-L9252)

```diff
-         if (RR)
-           if (this.activeCameras && this.activeCameras.length > 0)
-             for (let GR = 0; GR < this.activeCameras.length; GR++) {
-               const RR = this.activeCameras[GR];
-               if (RR.update(), 0 !== RR.cameraRigMode)
-                 for (let JR = 0; JR < RR._rigCameras.length; JR++) RR._rigCameras[JR].update()
-             } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
-               for (let GR = 0; GR < this.activeCamera._rigCameras.length; GR++) this.activeCamera._rigCameras[GR].update();
-         if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(RR, JR);
-         else {
-           this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
-           const RR = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
-           if (this.renderTargetsEnabled) {
-             yR.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
-             for (let JR = 0; JR < this.customRenderTargets.length; JR++) {
-               const GR = this.customRenderTargets[JR],
- ... (2 more removed lines; see GitHub link above)
+         getDistanceToCamera() {
+           let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return rr || (rr = this.eC().activeCamera), this.getAbsolutePosition().subtract(rr.globalPosition).length()
+         }
+         clone(Sr, Qr, Zr) {
+           const Wr = Er.e.Clone((() => new rr(Sr, this.eC())), this);
+           if (Wr.name = Sr, Wr.id = Sr, Qr && (Wr.parent = Qr), !Zr) {
+             const rr = this.getDescendants(!0);
+             for (let Qr = 0; Qr < rr.length; Qr++) {
+               const Zr = rr[Qr];
+               Zr.clone && Zr.clone(Sr + "." + Zr.name, Wr)
```

#### 501. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9260-L9273` → after: `L7507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7507) · [Before (L9260-L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9260-L9273)

```diff
-           this._clearFrameBuffer(this.activeCamera);
-           for (let JR = 0, GR = this._gatherRenderTargetsStage; JR < GR.length; JR++) {
-             GR[JR].action(this._renderTargets)
-           }
-           if (this.activeCameras && this.activeCameras.length > 0)
-             for (let JR = 0; JR < this.activeCameras.length; JR++) this._processSubCameras(this.activeCameras[JR], JR > 0);
-           else {
-             if (!this.activeCamera) throw new Error("No camera defined");
-             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
-           }
-         }
-         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
-         for (let GR = 0, yR = this._afterRenderStage; GR < yR.length; GR++) {
-           yR[GR].action()
+           return Wr
```

#### 502. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9275-L9280` → after: `L7509-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7509-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7509-L7511) · [Before (L9275-L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9275-L9280)

```diff
-         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
-           for (let RR = 0; RR < this._toBeDisposed.length; RR++) {
-             const JR = this._toBeDisposed[RR];
-             JR && JR.dispose()
-           }
-           this._toBeDisposed.length = 0
+         serialize(rr) {
+           const Sr = Er.e.Serialize(this, rr);
+           return Sr.type = this.getClassName(), Sr.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(Sr), Sr.localMatrix = this.getPivotMatrix().OWr(), Sr.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (Sr.sC = !0), Er.e.AppendSerializedAnimation … [truncated]
```

#### 503. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9282-L9303` → after: `L7513-L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7513-L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7513-L7515) · [Before (L9282-L9303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9282-L9303)

```diff
-         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
-       }
-       freezeMaterials() {
-         for (let RR = 0; RR < this.materials.length; RR++) this.materials[RR].freeze()
-       }
-       unfreezeMaterials() {
-         for (let RR = 0; RR < this.materials.length; RR++) this.materials[RR].unfreeze()
-       }
-       dispose() {
-         if (this.oB) return;
-         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
-           for (const RR of this._activeAnimatables) RR.onAnimationEndObservable.clear(), RR.onAnimationEnd = null;
-           this.stopAllAnimations()
-         }
-         this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSyste … [truncated]
-         const RR = this._activeRequests.slice();
- ... (6 more removed lines; see GitHub link above)
+         getChildTransformNodes(Sr, Qr) {
+           const Zr = [];
+           return this._getDescendants(Zr, Sr, (Sr => (!Qr || Qr(Sr)) && Sr instanceof rr)), Zr
```

#### 504. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9305-L9322` → after: `L7517-L7521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7517-L7521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7517-L7521) · [Before (L9305-L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9305-L9322)

```diff
-         this.detachControl();
-         const JR = this._engine.getInputElement?.();
-         if (JR)
-           for (let uR = 0; uR < this.cameras.length; uR++) this.cameras[uR].detachControl();
-         this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (RR => RR.dispose(!0))), this._disp … [truncated]
-         const GR = this.cameras;
-         this._disposeList(GR), this._disposeList(this.pM), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multivi … [truncated]
-         let yR = this._engine.scenes.indexOf(this);
-         if (yR > -1 && this._engine.scenes.splice(yR, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, LR.i)(), AR.c._LastCreatedScene === this) {
-           AR.c._LastCreatedScene = null;
-           let RR = AR.c.Instances.length - 1;
-           for (; RR >= 0;) {
-             const JR = AR.c.Instances[RR];
-             if (JR.scenes.length > 0) {
-               AR.c._LastCreatedScene = JR.scenes[this._engine.scenes.length - 1];
-               break
- ... (2 more removed lines; see GitHub link above)
+         dispose(rr) {
+           let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this.eC().stopAnimation(this), this.eC().removeTransformNode(this), this._parentContainer) {
+             const rr = this._parentContainer.transformNodes.indexOf(this);
+             rr > -1 && this._parentContainer.transformNodes.splice(rr, 1), this._parentContainer = null
```

#### 505. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9325-L9344` → after: `L7529-L7541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7529-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7529-L7541) · [Before (L9325-L9344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9325-L9344)

```diff
-         yR = this._engine._virtualScenes.indexOf(this), yR > -1 && this._engine._virtualScenes.splice(yR, 1), this._engine.wipeCaches(!0), this.YH.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
-       }
-       _disposeList(RR, JR) {
-         const GR = RR.slice(0);
-         JR = JR ?? (RR => RR.dispose());
-         for (const yR of GR) JR(yR);
-         RR.length = 0
-       }
-       get oB() {
-         return this._isDisposed
-       }
-       clearCachedVertexData() {
-         for (let RR = 0; RR < this.meshes.length; RR++) {
-           const JR = this.meshes[RR].geometry;
-           JR && JR.clearCachedData()
-         }
- ... (4 more removed lines; see GitHub link above)
+         normalizeToUnitCube() {
+           let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+             Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             Qr = arguments.length > 2 ? arguments[2] : void 0,
+             Zr = null,
+             Wr = null;
+           Sr && (this.rotationQuaternion ? (Wr = this.rotationQuaternion.clone(), this.rotationQuaternion.Hrr(0, 0, 0, 1)) : this.rotation && (Zr = this.rotation.clone(), this.rotation.Hrr(0, 0, 0)));
+           const ar = this.getHierarchyBoundingVectors(rr, Qr),
+             jr = ar.max.subtract(ar.min),
+             Ir = Math.max(jr.x, jr.y, jr.z);
+           if (0 === Ir) return this;
+           const fr = 1 / Ir;
+           return this.Tx.scaleInPlace(fr), Sr && (this.rotationQuaternion && Wr ? this.rotationQuaternion.iH(Wr) : this.rotation && Zr && this.rotation.iH(Zr)), this
```

#### 506. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9346-L9364` → after: `L7543-L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7543-L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7543-L7544) · [Before (L9346-L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9346-L9364)

```diff
-       }
-       getWorldExtends(RR) {
-         const JR = new VR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           GR = new VR.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-         RR = RR || (() => !0);
-         const yR = this.meshes.filter(RR);
-         for (const tR of yR) {
-           if (tR.computeWorldMatrix(!0), !tR.XM || 0 === tR.XM.length || tR.infiniteDistance) continue;
-           const RR = tR.Tm(),
-             yR = RR.boundingBox.minimumWorld,
-             uR = RR.boundingBox.maximumWorld;
-           VR.r.CheckExtends(yR, JR, GR), VR.r.CheckExtends(uR, JR, GR)
-         }
-         return JR.x === Number.MAX_VALUE ? {
-           min: VR.r.Zero(),
-           max: VR.r.Zero()
- ... (3 more removed lines; see GitHub link above)
+         _syncAbsoluteScalingAndRotation() {
+           this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
```

#### 507. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9366-L9420` → after: `L7546-L7680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7546-L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7546-L7680) · [Before (L9366-L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9366-L9420)

```diff
-       }
-       createPickingRay(RR, JR, GR, yR) {
-         throw (0, CR.j)("Ray")
-       }
-       createPickingRayToRef(RR, JR, GR, yR, tR) {
-         throw (0, CR.j)("Ray")
-       }
-       createPickingRayInCameraSpace(RR, JR, GR) {
-         throw (0, CR.j)("Ray")
-       }
-       createPickingRayInCameraSpaceToRef(RR, JR, GR, yR) {
-         throw (0, CR.j)("Ray")
-       }
-       Ur(RR, JR, GR, yR, tR, uR) {
-         const ZR = (0, CR.j)("Ray", !0);
-         return ZR && RG.c.Warn(ZR), new rR.e
- ... (39 more removed lines; see GitHub link above)
+       }, (() => {
+         const Er = "function" === typeof Symbol && Symbol.metadata ? Object.create(hr[Symbol.metadata] ?? null) : void 0;
+         Sr = [(0, fr.C)("position")], Qr = [(0, fr.C)("rotation")], Zr = [(0, fr.w)("rotationQuaternion")], Wr = [(0, fr.C)("Tx")], ar = [(0, fr.G)("billboardMode")], jr = [(0, fr.G)()], Nr = [(0, fr.G)("infiniteDistance")], Ur = [(0, fr.G)()], tr = [(0, fr.G)()], (0, Ir.k)(null, … [truncated]
+           kind: "field",
+           name: "_position",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "_position" in rr,
+             get: rr => rr._position,
+             set: (rr, Sr) => {
+               rr._position = Sr
+             }
+           },
+           metadata: Er
+         }, zr, Yr), (0, Ir.k)(null, null, Qr, {
+ ... (119 more added lines; see GitHub link above)
```

#### 508. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9422-L9591` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7682) · [Before (L9422-L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9422-L9591)

```diff
-         return yR
-       }
-       getMeshesByTags(RR, JR) {
-         return this._getByTags(this.meshes, RR, JR)
-       }
-       getCamerasByTags(RR, JR) {
-         return this._getByTags(this.cameras, RR, JR)
-       }
-       getLightsByTags(RR, JR) {
-         return this._getByTags(this.lights, RR, JR)
-       }
-       getMaterialByTags(RR, JR) {
-         return this._getByTags(this.materials, RR, JR).concat(this._getByTags(this.multiMaterials, RR, JR))
-       }
-       getTransformNodesByTags(RR, JR) {
-         return this._getByTags(this.transformNodes, RR, JR)
- ... (154 more removed lines; see GitHub link above)
+         mr.c.ParseAnimationRanges(Zr, rr, Sr)
```

#### 509. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9598-L9599` → after: `L7689-L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7689-L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7689-L7690) · [Before (L9598-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9598-L9599)

```diff
-       ZG || (ZG = !0, (0, JG.f)("BABYLON.Scene", uG))
-     }(hR = uG.prototype).sortActiveAnimatables ?? (hR.sortActiveAnimatables = (0, CR.f)("Scene", "sortActiveAnimatables")), (RJ = uG.prototype).beginWeightedAnimation ?? (RJ.beginWeightedAnimation = (0, CR.f)("Scene", "beginWeightedAnimation")), (JJ = uG.prototype).beginAnimation … [truncated]
+       zr || (zr = !0, tr.Parse = hr)
+     }(Zr = tr.prototype).cV ?? (Zr.cV = (0, Ur.h)("TransformNode", "cV")), (Wr = tr.prototype).applyImpulse ?? (Wr.applyImpulse = (0, Ur.h)("TransformNode", "applyImpulse")), (ar = tr.prototype).applyAngularImpulse ?? (ar.applyAngularImpulse = (0, Ur.h)("TransformNode", "applyAng … [truncated]
```

#### 510. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9601-L9627` → after: `L7692-L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7692-L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7692-L7700) · [Before (L9601-L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9601-L9627)

```diff
-   41693: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => yR,
-       h: () => tR
-     });
-     class yR {}
-     yR.NAME_EFFECTLAYER = "EffectLayer", yR.NAME_LAYER = "Layer", yR.NAME_LENSFLARESYSTEM = "LensFlareSystem", yR.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", yR.NAME_PARTICLESYSTEM = "ParticleSystem", yR.NAME_GAMEPAD = "Gamepad", yR.NAME_SIMPLIFICATIONQUEUE = "Simplificatio … [truncated]
-     class tR extends Array {
-       constructor(RR) {
-         super(...RR)
-       }
-       static Create() {
-         return Object.create(tR.prototype)
-       }
-       registerStep(RR, JR, GR) {
-         let yR, tR = 0;
- ... (11 more removed lines; see GitHub link above)
+   42251: (rr, Sr, Qr) => {
+     function Zr(rr, Sr, Qr) {
+       try {
+         const Zr = rr.next();
+         Zr.done ? Sr(Zr) : Zr.value ? Zr.value.then((() => {
+           Zr.value = void 0, Sr(Zr)
+         }), Qr) : Sr(Zr)
+       } catch (Zr) {
+         Qr(Zr)
```

#### 511. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9640-L9643` → after: `L7704-L7710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7704-L7710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7704-L7710) · [Before (L9640-L9643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9640-L9643)

```diff
-     function yR(RR, JR, GR, yR, tR, uR) {
-       function ZR(RR) {
-         if (void 0 !== RR && "function" !== typeof RR) throw new TypeError("Function expected");
-         return RR
+     function Wr() {
+       let rr, Sr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
+       return (Qr, Wr, ar) => {
+         const jr = performance.now();
+         void 0 === rr || jr - rr > Sr ? (rr = jr, setTimeout((() => {
+           Zr(Qr, Wr, ar)
+         }), 0)) : Zr(Qr, Wr, ar)
```

#### 512. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9666-L9668` → after: `L7714-L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7714-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7714-L7724) · [Before (L9666-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9666-L9668)

```diff
-     function tR(RR, JR, GR) {
-       for (var yR = arguments.length > 2, tR = 0; tR < JR.length; tR++) GR = yR ? JR[tR].call(RR, GR) : JR[tR].call(RR);
-       return yR ? GR : void 0
+     function ar(rr, Sr, Qr, Zr, Wr) {
+       const ar = () => {
+         let jr;
+         const Ir = rr => {
+           rr.done ? Qr(rr.value) : void 0 === jr ? jr = !0 : ar()
+         };
+         do {
+           jr = void 0, Wr && Wr.aborted ? Zr(new Error("Aborted")) : Sr(rr, Ir, Zr), void 0 === jr && (jr = !1)
+         } while (jr)
+       };
+       ar()
```

#### 513. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9671-L9675` → after: `L7727-L7731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7727-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7727-L7731) · [Before (L9671-L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9671-L9675)

```diff
-     function uR(RR, JR, GR) {
-       return "symbol" === typeof JR && (JR = JR.description ? "[".concat(JR.description, "]") : ""), Object.defineProperty(RR, "name", {
-         configurable: !0,
-         value: GR ? "".concat(GR, " ", JR) : JR
-       })
+     function jr(rr, Sr) {
+       let Qr;
+       return ar(rr, Zr, (rr => Qr = rr), (rr => {
+         throw rr
+       }), Sr), Qr
```

#### 514. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9677-L9683` → after: `L7733-L7736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7733-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7733-L7736) · [Before (L9677-L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9677-L9683)

```diff
-     Object.create;
-     Object.create;
- 
-     function ZR(RR, JR, GR, yR) {
-       if ("a" === GR && !yR) throw new TypeError("Private accessor was defined without a getter");
-       if ("function" === typeof JR ? RR !== JR || !yR : !JR.has(RR)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
-       return "m" === GR ? yR : "a" === GR ? yR.call(RR) : yR ? yR.value : JR.get(RR)
+     async function Ir(rr, Sr, Qr) {
+       return await new Promise(((Zr, Wr) => {
+         ar(rr, Sr, Zr, Wr, Qr)
+       }))
```

#### 515. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9686-L9690` → after: `L7739-L7742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7739-L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7739-L7742) · [Before (L9686-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9686-L9690)

```diff
-     function qR(RR, JR, GR, yR, tR) {
-       if ("m" === yR) throw new TypeError("Private method is not writable");
-       if ("a" === yR && !tR) throw new TypeError("Private accessor was defined without a setter");
-       if ("function" === typeof JR ? RR !== JR || !tR : !JR.has(RR)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
-       return "a" === yR ? tR.call(RR, GR) : tR ? tR.value = GR : JR.set(RR, GR), GR
+     function fr(rr, Sr) {
+       return function() {
+         return jr(rr(...arguments), Sr)
+       }
```

#### 516. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L9692` → after: `L7744-L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L7744-L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/287.js#L7744-L7749) · [Before (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/287.js#L9692)

```diff
-     "function" === typeof SuppressedError && SuppressedError
+     Qr.d(Sr, {
+       c: () => Wr,
+       g: () => fr,
+       k: () => Ir,
+       o: () => jr
+     })
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/288.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/288.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1)

#### 1. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/288.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/288.js#L2)

```diff
- export const ids = [288, 671];
+ export const ids = [288];
```

#### 2. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L4` → after: `L4-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L4-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/288.js#L4-L246) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/288.js#L4)

```diff
-   41387: (RR, JR, GR) => {
+   41995: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Ir,
+       g: () => tr,
+       i: () => Er,
+       j: () => fr
+     });
+     var Zr = Qr(41811),
+       Wr = Qr(40246),
+       ar = Qr(41919),
+       jr = Qr(41847);
+     class Ir {
+       get Dv() {
+         return this._isDisposed
+       }
+       constructor(rr, Sr, Qr) {
+ ... (227 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L9-L10` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/288.js#L253-L254) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/288.js#L9-L10)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? yR.ShadersRepository : yR.ShadersRepositoryWGSL
+       constructor() {
+         this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L12-L13` → after: `L256-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L256-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/288.js#L256-L296) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/288.js#L12-L13)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? yR.ShadersStore : yR.ShadersStoreWGSL
+       getNormal() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!this.pickedMesh || Sr && !this.pickedMesh.isVerticesDataPresent(Wr.j.NormalKind)) return null;
+         let Qr, ar = this.pickedMesh.yar();
+         0 === ar?.length && (ar = null);
+         const jr = Zr.n.kU[0],
+           Ir = Zr.n.kU[1],
+           fr = Zr.n.kU[2];
+         if (Sr) {
+           const rr = this.pickedMesh.getVerticesData(Wr.j.NormalKind);
+           let Sr = ar ? Zr.u.FromArrayToRef(rr, 3 * ar[3 * this.faceId], jr) : jr.Hrr(rr[3 * this.faceId * 3], rr[3 * this.faceId * 3 + 1], rr[3 * this.faceId * 3 + 2]),
+             Er = ar ? Zr.u.FromArrayToRef(rr, 3 * ar[3 * this.faceId + 1], Ir) : Ir.Hrr(rr[3 * (3 * this.faceId + 1)], rr[3 * (3 * this.faceId + 1) + 1], rr[3 * (3 * this.faceId + 1) + 2]),
+             pr = ar ? Zr.u.FromArrayToRef(rr, 3 * ar[3 * this.faceId + 2], fr) : fr.Hrr(rr[3 * (3 * this.faceId + 2)], rr[3 * (3 * this.faceId + 2) + 1], rr[3 * (3 * this.faceId + 2) + 2]);
+           Sr = Sr.scale(this.bu), Er = Er.scale(this.bv), pr = pr.scale(1 - this.bu - this.bv), Qr = new Zr.u(Sr.x + Er.x + pr.x, Sr.y + Er.y + pr.y, Sr.z + Er.z + pr.z)
+         } else {
+ ... (25 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L15-L16` → after: `L298-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L298-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/288.js#L298-L365) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/288.js#L15-L16)

```diff
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? yR.IncludesShadersStore : yR.IncludesShadersStoreWGSL
+       getTextureCoordinates() {
+         let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wr.j.UVKind;
+         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(rr)) return null;
+         const Sr = this.pickedMesh.yar();
+         if (!Sr) return null;
+         const Qr = this.pickedMesh.getVerticesData(rr);
+         if (!Qr) return null;
+         let ar = Zr.q.FromArray(Qr, 2 * Sr[3 * this.faceId]),
+           jr = Zr.q.FromArray(Qr, 2 * Sr[3 * this.faceId + 1]),
+           Ir = Zr.q.FromArray(Qr, 2 * Sr[3 * this.faceId + 2]);
+         return ar = ar.scale(this.bu), jr = jr.scale(this.bv), Ir = Ir.scale(1 - this.bu - this.bv), new Zr.q(ar.x + jr.x + Ir.x, ar.y + jr.y + Ir.y)
+       }
+     }
+   },
+   41847: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+ ... (52 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L21-L23` → after: `L369-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L369-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/288.js#L369-L371) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/288.js#L21-L23)

```diff
-   64146: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       postprocessVertexShader: () => ZR
+   41784: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => Yr
```

#### 7. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L25-L31` → after: `L373-L9690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L373-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/288.js#L373-L9690) · [Before (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/288.js#L25-L31)

```diff
-     var yR = GR(41387);
-     const tR = "postprocessVertexShader",
-       uR = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     yR.b.ShadersStore[tR] || (yR.b.ShadersStore[tR] = uR);
-     const ZR = {
-       name: tR,
-       shader: uR
+     var Zr = Qr(38595),
+       Wr = Qr(41741),
+       ar = Qr(38587),
+       jr = Qr(40246),
+       Ir = Qr(38578),
+       fr = Qr(41787);
+     class Er {
+       constructor() {
+         let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, rr && this.reset()
+       }
+       get isDirty() {
+         return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
+       }
+       get zOffset() {
+         return this._zOffset
+ ... (9302 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/289.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/289.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848)

#### 1. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/289.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/289.js#L2)

```diff
- export const ids = [289];
+ export const ids = [289, 672];
```

#### 2. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/289.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/289.js#L4)

```diff
-   41586: (RR, JR, GR) => {
+   41743: (rr, Sr, Qr) => {
```

#### 3. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L6-L12` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/289.js#L6) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/289.js#L6-L12)

```diff
-       b: () => wR,
-       c: () => KR,
-       e: () => iR,
-       f: () => rR,
-       h: () => fR,
-       k: () => qR,
-       l: () => VR
+       e: () => Zr
```

#### 4. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L278-L724` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/289.js#L9-L10) · [Before (L278-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/289.js#L278-L724)

```diff
-       constructor() {
-         this._lines = []
-       }
-       get currentLine() {
-         return this._lines[this.lineIndex]
-       }
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
-       }
-       set lines(RR) {
-         this._lines.length = 0;
-         for (const JR of RR) {
-           if (!JR || "\r" === JR) continue;
-           if ("#" === JR[0]) {
-             this._lines.push(JR);
-             continue
- ... (431 more removed lines; see GitHub link above)
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.ShadersRepository : Zr.ShadersRepositoryWGSL
```

#### 5. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L726-L773` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/289.js#L12-L13) · [Before (L726-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/289.js#L726-L773)

```diff
-       const tR = new Uint8Array(JR);
-       return yR && tR.set(new Uint8Array(yR)), tR
-     }
-   },
-   41407: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => fR,
-       e: () => VR,
-       f: () => iR,
-       j: () => tR
-     });
-     const yR = {};
- 
-     function tR(RR) {
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !yR[RR]) return yR[RR] = !0, `${RR} needs to be imported before as it contains a side-effect required by your code.`
-     }
- ... (32 more removed lines; see GitHub link above)
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.ShadersStore : Zr.ShadersStoreWGSL
```

#### 6. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L775-L822` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/289.js#L15-L16) · [Before (L775-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/289.js#L775-L822)

```diff
-     }
-   },
-   41395: (RR, JR, GR) => {
-     function yR() {
-       return "undefined" !== typeof window
-     }
- 
-     function tR() {
-       return "undefined" !== typeof navigator
-     }
- 
-     function uR() {
-       return "undefined" !== typeof document
-     }
- 
-     function ZR(RR) {
- ... (32 more removed lines; see GitHub link above)
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.IncludesShadersStore : Zr.IncludesShadersStoreWGSL
```

#### 7. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L826-L837` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/289.js#L21-L23) · [Before (L826-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/289.js#L826-L837)

```diff
-   41564: (RR, JR, GR) => {
-     GR.d(JR, {
-       d: () => OR,
-       e: () => WR,
-       h: () => pR,
-       l: () => bR,
-       m: () => BR,
-       q: () => XR,
-       t: () => MR,
-       u: () => oR,
-       y: () => lR,
-       A: () => AR
+   64611: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       postprocessVertexShader: () => jr
```

#### 8. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L839-L867` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/289.js#L25-L28) · [Before (L839-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/289.js#L839-L867)

```diff
-     var yR = GR(41568),
-       tR = GR(41395),
-       uR = GR(38233);
-     class ZR {}
-     ZR.FilesToLoad = {};
-     var qR = GR(41573),
-       iR = GR(41581),
-       fR = GR(38224),
-       VR = GR(41399),
-       KR = GR(41410),
-       wR = GR(39914),
-       rR = GR(41415),
-       eR = GR(41586);
-     const aR = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
-     class LR extends qR.i {
-       constructor(RR, JR) {
- ... (13 more removed lines; see GitHub link above)
+     var Zr = Qr(41743);
+     const Wr = "postprocessVertexShader",
+       ar = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     Zr.e.ShadersStore[Wr] || (Zr.e.ShadersStore[Wr] = ar);
```

#### 9. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L869-L1506` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/289.js#L30-L31) · [Before (L869-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/289.js#L869-L1506)

```diff
-         DefaultRetryStrategy: class {
-           static ExponentialBackoff() {
-             let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
-               JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
-             return (GR, yR, tR) => 0 !== yR.status || tR >= RR || -1 !== GR.indexOf("file:") ? -1 : Math.pow(2, tR) * JR
-           }
-         }.ExponentialBackoff(),
-         BaseUrl: "",
-         CorsBehavior: "anonymous",
-         PreprocessUrl: RR => RR,
-         ScriptBaseUrl: "",
-         ScriptPreprocessUrl: RR => RR,
-         CleanUrl: RR => RR = RR.replace(/#/gm, "%23")
-       },
-       AR = (RR, JR) => {
-         if ((!RR || 0 !== RR.indexOf("data:")) && WR.CorsBehavior)
- ... (622 more removed lines; see GitHub link above)
+       name: Wr,
+       shader: ar
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/290.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/290.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b)

#### 1. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L4)

```diff
-   41620: (RR, JR, GR) => {
+   41919: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L6-L26` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L6-L12) · [Before (L6-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L6-L26)

```diff
-       b: () => uR
-     });
-     var yR = GR(39914),
-       tR = GR(38253);
-     class uR {
-       static Instantiate(RR) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[RR]) return this.RegisteredExternalClasses[RR];
-         const JR = (0, tR.e)(RR);
-         if (JR) return JR;
-         yR.c.Warn(RR + " not found, you may have missed an import.");
-         const GR = RR.split(".");
-         let uR = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let yR = 0, tR = GR.length; yR < tR; yR++) uR = uR[GR[yR]];
-         return "function" !== typeof uR ? null : uR
-       }
-     }
- ... (5 more removed lines; see GitHub link above)
+       c: () => mr,
+       e: () => xr,
+       f: () => fr,
+       h: () => Nr,
+       j: () => Er,
+       k: () => Ir,
+       n: () => pr
```

#### 3. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L28-L31` → after: `L14-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L14-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L14-L44) · [Before (L28-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L28-L31)

```diff
-     var yR = GR(41395);
-     class tR {
-       static get Now() {
-         return (0, yR.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+     var Zr = Qr(40246),
+       Wr = Qr(41922);
+ 
+     function ar(rr, Sr, Qr, Zr) {
+       switch (Sr) {
+         case 5120: {
+           let Sr = rr.getInt8(Qr);
+           return Zr && (Sr = Math.max(Sr / 127, -1)), Sr
+         }
+         case 5121: {
+           let Sr = rr.getUint8(Qr);
+           return Zr && (Sr /= 255), Sr
+         }
+         case 5122: {
+           let Sr = rr.getInt16(Qr, !0);
+           return Zr && (Sr = Math.max(Sr / 32767, -1)), Sr
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L34-L35` → after: `L47-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L47-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L47-L78) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L34-L35)

```diff
-   },
-   41449: (RR, JR, GR) => {
+ 
+     function jr(rr, Sr, Qr, Zr, ar) {
+       switch (Sr) {
+         case 5120:
+           Zr && (ar = Math.round(127 * ar)), rr.setInt8(Qr, ar);
+           break;
+         case 5121:
+           Zr && (ar = Math.round(255 * ar)), rr.setUint8(Qr, ar);
+           break;
+         case 5122:
+           Zr && (ar = Math.round(32767 * ar)), rr.setInt16(Qr, ar, !0);
+           break;
+         case 5123:
+           Zr && (ar = Math.round(65535 * ar)), rr.setUint16(Qr, ar, !0);
+           break;
+         case 5131:
+ ... (16 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L37-L41` → after: `L80-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L80-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L80-L94) · [Before (L37-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L37-L41)

```diff
-       let JR = 1;
-       do {
-         JR *= 2
-       } while (JR < RR);
-       return JR === RR
+       switch (rr) {
+         case 5120:
+         case 5121:
+           return 1;
+         case 5122:
+         case 5123:
+         case 5131:
+           return 2;
+         case 5124:
+         case 5125:
+         case 5126:
+           return 4;
+         default:
+           throw new Error(`Invalid type '${rr}'`)
+       }
```

#### 6. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L44-L45` → after: `L97-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L97-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L97-L118) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L44-L45)

```diff
-     function tR(RR, JR, GR) {
-       return RR * (1 - GR) + JR * GR
+     function fr(rr, Sr, Qr, Zr, Wr, fr, Er, pr) {
+       const xr = new Array(Zr),
+         mr = new Array(Zr);
+       if (rr instanceof Array) {
+         let Wr = Sr / 4;
+         const ar = Qr / 4;
+         for (let Sr = 0; Sr < fr; Sr += Zr) {
+           for (let Sr = 0; Sr < Zr; Sr++) xr[Sr] = mr[Sr] = rr[Wr + Sr];
+           pr(mr, Sr);
+           for (let Sr = 0; Sr < Zr; Sr++) xr[Sr] !== mr[Sr] && (rr[Wr + Sr] = mr[Sr]);
+           Wr += ar
+         }
+       } else {
+         const Nr = ArrayBuffer.isView(rr) ? new DataView(rr.buffer, rr.byteOffset, rr.byteLength) : new DataView(rr),
+           Ur = Ir(Wr);
+         for (let rr = 0; rr < fr; rr += Zr) {
+ ... (6 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L48-L51` → after: `L121-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L121-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L121-L141) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L48-L51)

```diff
-     function uR(RR) {
-       const JR = ZR(RR),
-         GR = qR(RR);
-       return JR - RR > RR - GR ? GR : JR
+     function Er(rr, Sr, Qr, Wr, ar, jr, Er, pr) {
+       const xr = Sr * Ir(Qr),
+         mr = Er * Sr;
+       if (5126 !== Qr || ar !== xr) {
+         const Zr = new Float32Array(mr);
+         return fr(rr, Wr, ar, Sr, Qr, mr, jr, ((rr, Qr) => {
+           for (let Wr = 0; Wr < Sr; Wr++) Zr[Qr + Wr] = rr[Wr]
+         })), Zr
+       }
+       if (!(rr instanceof Array || rr instanceof Float32Array) || 0 !== Wr || rr.length !== mr) {
+         if (rr instanceof Array) {
+           const Sr = Wr / 4;
+           return rr.slice(Sr, Sr + mr)
+         }
+         if (ArrayBuffer.isView(rr)) {
+           const Sr = rr.byteOffset + Wr;
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L54-L55` → after: `L144-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L144-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L144-L195) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L54-L55)

```diff
-     function ZR(RR) {
-       return RR--, RR |= RR >> 1, RR |= RR >> 2, RR |= RR >> 4, RR |= RR >> 8, RR |= RR >> 16, ++RR
+     function pr(rr, Sr, Qr, Wr, ar, jr, Er) {
+       const pr = Ir(Qr),
+         xr = function(rr) {
+           switch (rr) {
+             case 5120:
+               return Int8Array;
+             case 5121:
+               return Uint8Array;
+             case 5122:
+               return Int16Array;
+             case 5123:
+             case 5131:
+               return Uint16Array;
+             case 5124:
+               return Int32Array;
+             case 5125:
+ ... (36 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L58-L59` → after: `L198-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L198-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/290.js#L198-L216) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/290.js#L58-L59)

```diff
-     function qR(RR) {
-       return RR |= RR >> 1, RR |= RR >> 2, RR |= RR >> 4, RR |= RR >> 8, (RR |= RR >> 16) - (RR >> 1)
+     function xr(rr, Sr, Qr, Wr, ar, jr, Er, pr) {
+       const xr = Sr * Ir(Qr),
+         mr = Er * Sr;
+       if (pr.length !== mr) throw new Error("Output length is not valid");
+       if (5126 === Qr && ar === xr)
+         if (rr instanceof Array) {
+           const Sr = Wr / 4;
+           pr.set(rr, Sr)
+         } else if (ArrayBuffer.isView(rr)) {
+         const Sr = rr.byteOffset + Wr;
+         if (0 !== (3 & Sr)) return Zr.c.Warn("Float array must be aligned to 4-bytes border"), void pr.set(new Float32Array(rr.buffer.slice(Sr, Sr + mr * Float32Array.BYTES_PER_ELEMENT)));
+         const Qr = new Float32Array(rr.buffer, Sr, mr);
+         pr.set(Qr)
+       } else {
+         const Sr = new Float32Array(rr, Wr, mr);
+         pr.set(Sr)
+ ... (3 more added lines; see GitHub link above)
```
