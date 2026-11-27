# Changed — Bundle Modifications Report (Part 023 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `23 / 82` (**269** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 022](part-022.md) · [Part 024 →](part-024.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (474 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 380. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6940-L6944` → after: `L9381-L9382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9381-L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9381-L9382) · [Before (L6940-L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6940-L6944)

```diff
-       batchFaceCull(ee, ie) {
-         return !(!ie || !(0, SU.v)(ee.model)) && (!this.Zf || ! function(ee) {
-           var ie;
-           return !(null === (ie = (0, Qi.c)(ee)) || void 0 === ie || !ie.movesVertices)
-         }(this.packVariant(ee, this.Zf)))
+       updateLiveTime() {
+         !0 === this.raf && this.rafCheck()
```

#### 381. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6946-L6952` → after: `L9384-L9389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9384-L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9384-L9389) · [Before (L6946-L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6946-L6952)

```diff
-       writeFrameUniforms(ee, ie) {
-         const He = this.frameUniforms,
-           ye = cy;
-         if ((0, BU.A)(ee, He), He[ye.fogInfos] = ie.fogEnabled ? ie.fogMode : 0, He[ye.fogInfos + 1] = ie.fogStart, He[ye.fogInfos + 2] = ie.fogEnd, He[ye.fogInfos + 3] = ie.fogDensity, He.set(ie.fogColour, ye.fogColour), He[ye.outputHeight] = ie.renderHeight, He.set(ie.ambientCo … [truncated]
-           const ie = (0, EU.i)(ee.XT, ee.Sf, ee.jf);
-           for (let ee = 0; ee < 4; ee++) He[ye.aoLevels + ee] = ie[ee] / 255;
-           this.aoLevelsWritten = !0
+       rafCheck() {
+         const WW = performance.now();
+         for (this.timeOffset += (WW - this.lastTimestamp) * this.speed, this.lastTimestamp = WW; this.actions.length;) {
+           const WW = this.actions[0];
+           if (!(this.timeOffset >= WW.delay)) break;
+           this.actions.shift(), WW.doAction()
```

#### 382. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6954-L6958` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9391) · [Before (L6954-L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6954-L6958)

```diff
-         this.device.queue.writeBuffer(this.frameBuffer, 0, He)
-       }
-       animateMaterials(ee) {
-         const ie = Ly.anim;
-         for (const He of this.materials.values()) He.animated && (He.uniformData[ie] = ee, this.device.queue.writeBuffer(He.uniformBuffer, 4 * ie, He.uniformData, ie, 1))
+         this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
```

#### 383. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6960-L6961` → after: `L9393-L9394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9393-L9394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9393-L9394) · [Before (L6960-L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6960-L6961)

```diff
-       canDraw(ee, ie) {
-         return !("atlas" === ee.texture && !ie) || (this.warnOnce(`stride:${ee.id}`, `Lite terrain: material "${ee.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
+       clear() {
+         this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
```

#### 384. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6963-L6971` → after: `L9396-L9397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9396-L9397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9396-L9397) · [Before (L6963-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6963-L6971)

```diff
-       drawOpaque(ee, ie) {
-         let He = 0;
-         ee.setBindGroup(1, this.frameBindGroup);
-         for (const ye of this.opaqueBatches) {
-           if (!ye.meshes.length || !this.canDraw(ye.material, ye.packed)) continue;
-           const be = this.pipelineFor(ye.material, ye.packed, ie, ye.resting);
-           be && (ee.setPipeline(be), ee.setBindGroup(2, ye.material.bindGroup), this.Zf && this.bindShaderPackInputs(ee, ye.material, this.Zf, this.prepassOf.has(be)), He += this.drawBatch(ee, ye))
-         }
-         return He
+       setSpeed(WW) {
+         this.speed = WW
```

#### 385. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6973-L6974` → after: `L9399-L9400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9399-L9400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9399-L9400) · [Before (L6973-L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6973-L6974)

```diff
-       get readsMask() {
-         return this.maskPipelines > 0
+       isActive() {
+         return null !== this.raf
```

#### 386. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6976-L6979` → after: `L9402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9402) · [Before (L6976-L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6976-L6979)

```diff
-       drawPrepass(ee, ie, He) {
-         const ye = this.target,
-           be = this.Zf;
-         if (!ye || !be || 0 === this.maskPipelines) return 0;
+       findActionIndex(WW) {
```

#### 387. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6981-L6988` → after: `L9404-L9410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9404-L9410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9404-L9410) · [Before (L6981-L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6981-L6988)

```diff
-           Ke = null;
-         this.geometry.setDrawing(!0);
-         try {
-           for (const Ue of this.opaqueBatches) {
-             if (!Ue.meshes.length || !this.canDraw(Ue.material, Ue.packed)) continue;
-             const Fe = this.pipelineFor(Ue.material, Ue.packed, ye, Ue.resting),
-               Je = Fe && this.prepassOf.get(Fe);
-             Je && (Ke || (Ke = ee.beginRenderPass(ie), Ke.setBindGroup(0, He), Ke.setBindGroup(1, this.frameBindGroup)), Ke.setPipeline(Je), Ke.setBindGroup(2, Ue.material.bindGroup), this.bindShaderPackInputs(Ke, Ue.material, be, !0), Me += this.drawBatch(Ke, Ue))
+           OW = this.actions.length - 1;
+         for (; iW <= OW;) {
+           const mW = Math.floor((iW + OW) / 2);
+           if (this.actions[mW].delay < WW.delay) iW = mW + 1;
+           else {
+             if (!(this.actions[mW].delay > WW.delay)) return mW + 1;
+             OW = mW - 1
```

#### 388. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6996-L7004` → after: `L9415-L9421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9415-L9421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9415-L9421) · [Before (L6996-L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L6996-L7004)

```diff
-       drawBatch(ee, ie) {
-         let He = 0;
-         for (const ye of ie.meshes) {
-           const {
-             rangeCount: ie
-           } = ye;
-           ie > 0 && (He += this.geometry.draw(ee, ye, this.lighting, ye.first0, ye.count0), ie > 1 && (He += this.geometry.draw(ee, ye, this.lighting, ye.first1, ye.count1)))
-         }
-         return He
+     }
+ 
+     function eL(WW, iW) {
+       if (WW.type === uP.IncrementalSnapshot && WW.data.source === oP.MouseMove && WW.data.positions && WW.data.positions.length) {
+         const OW = WW.data.positions[0].timeOffset,
+           mW = WW.timestamp + OW;
+         return WW.delay = mW - iW, mW - iW
```

#### 389. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7006-L7015` → after: `L9423-L9442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9423-L9442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9423-L9442) · [Before (L7006-L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7006-L7015)

```diff
-       drawTransparent(ee, ie) {
-         let He = 0,
-           ye = null,
-           be = null;
-         ee.setBindGroup(1, this.frameBindGroup);
-         for (const Me of this.transparent) {
-           const Ke = Me.material;
-           if (!this.canDraw(Ke, Me.packed)) continue;
-           const Ue = this.pipelineFor(Ke, Me.packed, ie);
-           Ue && (Ue !== ye && (ee.setPipeline(Ue), ye = Ue, this.Zf && this.bindShaderPackInputs(ee, Ke, this.Zf)), Ke !== be && (ee.setBindGroup(2, Ke.bindGroup), be = Ke), He += this.geometry.draw(ee, Me, this.lighting))
+       return WW.delay = WW.timestamp - iW, WW.delay
+     }
+ 
+     function vL(WW, iW) {
+       var OW = "function" == typeof Symbol && WW[Symbol.iterator];
+       if (!OW) return WW;
+       var mW, EW, NW = OW.call(WW),
+         PW = [];
+       try {
+         for (;
+           (void 0 === iW || iW-- > 0) && !(mW = NW.next()).done;) PW.push(mW.value)
+       } catch (LW) {
+         EW = {
+           error: LW
+         }
+       } finally {
+ ... (4 more added lines; see GitHub link above)
```

#### 390. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7021-L7022` → after: `L9453-L9454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9453-L9454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9453-L9454) · [Before (L7021-L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7021-L7022)

```diff
-     function HF(ee, ie, He, ye) {
-       return `${eb(ee)}|${ee.atlasLayers}|${ee.W4}|${ie}|${He}|${ye._colorFormat}|${ye._depthStencilFormat}|${ye._sampleCount}`
+     function pL(WW) {
+       return void 0 === WW ? [] : [].concat(WW)
```

#### 391. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7025-L7026` → after: `L9457-L9461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9457-L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9457-L9461) · [Before (L7025-L7026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7025-L7026)

```diff
-     function yF(ee, ie) {
-       return ee.distance - ie.distance
+     function fL(WW) {
+       return {
+         type: "xstate.assign",
+         assignment: WW
+       }
```

#### 392. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7030` → after: `L9465-L9470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9465-L9470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9465-L9470) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7030)

```diff
-       return ie.distance - ee.distance
+       return "string" == typeof(WW = "string" == typeof WW && iW && iW[WW] ? iW[WW] : WW) ? {
+         type: WW
+       } : "function" == typeof WW ? {
+         type: WW.name,
+         exec: WW
+       } : WW
```

#### 393. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7032-L7034` → after: `L9472-L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9472-L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9472-L9475) · [Before (L7032-L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7032-L7034)

```diff
-     class MF {
-       constructor() {
-         this.left = []
+ 
+     function XL(WW) {
+       return function(iW) {
+         return WW === iW
```

#### 394. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7036-L7041` → after: `L9477-L9491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9477-L9491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9477-L9491) · [Before (L7036-L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7036-L7041)

```diff
-       sort(ee, ie) {
-         for (let He = 0; He < ee.length; He++) {
-           const ie = ee[He].distance;
-           if (ie - ie !== 0) return !1
-         }
-         return this.sortRange(ee, 0, ee.length, ie), !0
+     }
+ 
+     function BL(WW) {
+       return "string" == typeof WW ? {
+         type: WW
+       } : WW
+     }
+ 
+     function qL(WW, iW) {
+       return {
+         value: WW,
+         context: iW,
+         actions: [],
+         changed: !1,
+         matches: XL(WW)
```

#### 395. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7043-L7052` → after: `L9493-L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9493-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9493-L9504) · [Before (L7043-L7052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7043-L7052)

```diff
-       sortRange(ee, ie, He, ye) {
-         if (He - ie <= 16) {
-           for (let be = ie + 1; be < He; be++) {
-             const He = ee[be],
-               Me = ye * He.distance;
-             let Ke = be - 1;
-             for (; Ke >= ie && ye * ee[Ke].distance > Me; Ke--) ee[Ke + 1] = ee[Ke];
-             ee[Ke + 1] = He
-           }
-           return
+     }
+ 
+     function RL(WW, iW, OW) {
+       var mW = iW,
+         EW = !1;
+       return [WW.filter((function(WW) {
+         if ("xstate.assign" === WW.type) {
+           EW = !0;
+           var iW = Object.assign({}, mW);
+           return "function" == typeof WW.assignment ? iW = WW.assignment(mW, OW) : Object.keys(WW.assignment).forEach((function(EW) {
+             iW[EW] = "function" == typeof WW.assignment[EW] ? WW.assignment[EW](mW, OW) : WW.assignment[EW]
+           })), mW = iW, !1
```

#### 396. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7054-L7065` → after: `L9506-L9507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9506-L9507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9506-L9507) · [Before (L7054-L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7054-L7065)

```diff
-         const be = ie + He >>> 1;
-         if (this.sortRange(ee, ie, be, ye), this.sortRange(ee, be, He, ye), ye * ee[be - 1].distance <= ye * ee[be].distance) return;
-         const {
-           left: Me
-         } = this, Ke = be - ie;
-         for (let oe = 0; oe < Ke; oe++) Me[oe] = ee[ie + oe];
-         let Ue = 0,
-           Fe = be,
-           Je = ie;
-         for (; Ue < Ke && Fe < He;) ee[Je++] = ye * ee[Fe].distance < ye * Me[Ue].distance ? ee[Fe++] : Me[Ue++];
-         for (; Ue < Ke;) ee[Je++] = Me[Ue++]
-       }
+         return !0
+       })), mW, EW]
```

#### 397. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7069-L7084` → after: `L9510-L9599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9510-L9599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9510-L9599) · [Before (L7069-L7084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7069-L7084)

```diff
-     function UF(ee, ie, He, ye) {
-       let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ie;
-       const Me = Math.min(ie, He),
-         Ke = new Uint32Array(WH(ye));
-       for (let Ue = 0; Ue < ye; Ue++) {
-         const ie = Math.floor(Ue * Me / ye),
-           He = Math.max(ie + 1, Math.floor((Ue + 1) * Me / ye));
-         for (let Fe = 0; Fe < ye; Fe++) {
-           const Je = Math.floor(Fe * Me / ye),
-             oe = Math.max(Je + 1, Math.floor((Fe + 1) * Me / ye));
-           let Re = 0;
-           for (let ye = ie; ye < He; ye++)
-             for (let ie = Je; ie < oe; ie++) ee[ye * be + ie] >= KF && Re++;
-           if (2 * Re >= (He - ie) * (oe - Je)) {
-             const ee = Fe + ye * Ue;
-             Ke[ee >>> 5] |= 1 << (31 & ee)
+     function GL(WW, iW) {
+       void 0 === iW && (iW = {});
+       var OW = vL(RL(pL(WW.states[WW.initial].entry).map((function(WW) {
+           return CL(WW, iW.actions)
+         })), WW.context, VL), 2),
+         mW = OW[0],
+         EW = OW[1],
+         NW = {
+           config: WW,
+           _options: iW,
+           initialState: {
+             value: WW.initial,
+             actions: mW,
+             context: EW,
+             matches: XL(WW.initial)
+           },
+ ... (74 more added lines; see GitHub link above)
```

#### 398. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7086-L7087` → after: `L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9601) · [Before (L7086-L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7086-L7087)

```diff
-         }
-       }
+         };
```

#### 399. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7092` → after: `L9612-L9654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9612-L9654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9612-L9654) · [Before (L7092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7092)

```diff
-       return Math.max(1, Math.min(16, ee))
+       var iW = WW.initialState,
+         OW = gL.NotStarted,
+         mW = new Set,
+         EW = {
+           _machine: WW,
+           send: function(EW) {
+             OW === gL.Running && (iW = WW.transition(iW, EW), IL(iW, BL(EW)), mW.forEach((function(WW) {
+               return WW(iW)
+             })))
+           },
+           subscribe: function(WW) {
+             return mW.add(WW), WW(iW), {
+               unsubscribe: function() {
+                 return mW.delete(WW)
+               }
+             }
+ ... (27 more added lines; see GitHub link above)
```

#### 400. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7094-L7134` → after: `L9656-L9718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9656-L9718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9656-L9718) · [Before (L7094-L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7094-L7134)

```diff
-     class JF {
-       constructor(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
-         this.sink = ee, this.loadTexture = ie, this.warn = He, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise. … [truncated]
-       }
-       update(ee, ie) {
-         return (ee.iN !== this.builtVersion || this.blockCaster.length !== ie) && (this.build(ee, ie), !0)
-       }
-       build(ee, ie) {
-         this.builtVersion = ee.iN;
-         const He = new Uint16Array(ie),
-           ye = new Map;
-         for (let be = 1; be < ie; be++) {
-           const ie = this.classify(ee, be, ye);
-           if (null === ie || ie === BH) {
-             He[be] = null === ie ? 0 : BH;
- ... (25 more removed lines; see GitHub link above)
+ 
+     function rL(WW, iW) {
+       let {
+         getCastFn: OW,
+         applyEventsSynchronously: mW,
+         emitter: EW
+       } = iW;
+       return aL(GL({
+         id: "player",
+         context: WW,
+         initial: "paused",
+         states: {
+           playing: {
+             on: {
+               PAUSE: {
+                 target: "paused",
+ ... (47 more added lines; see GitHub link above)
```

#### 401. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7137-L7150` → after: `L9721-L9731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9721-L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9721-L9731) · [Before (L7137-L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7137-L7150)

```diff
-         if (ee.xq[ie]) return null;
-         const be = ee.Cq[ie] ? ee.FN(ie) : null;
-         if (be && be.length >= 6) {
-           const ee = function(ee) {
-             const ie = new Uint32Array(16);
-             for (let He = 0; He + 6 <= ee.length; He += 6) {
-               const ye = [0, 1, 2].map((ie => Math.max(0, Math.ceil(8 * ee[He + ie] - .5)))),
-                 be = [0, 1, 2].map((ie => Math.min(7, Math.floor(8 * ee[He + ie + 3] - .5))));
-               for (let ee = ye[2]; ee <= be[2]; ee++)
-                 for (let He = ye[1]; He <= be[1]; He++)
-                   for (let Me = ye[0]; Me <= be[0]; Me++) {
-                     const ye = Me + 8 * (He + 8 * ee);
-                     ie[ye >>> 5] |= 1 << (31 & ye)
-                   }
+       }, {
+         actions: {
+           castEvent: fL({
+             lastPlayedEvent: (WW, iW) => "CAST_EVENT" === iW.type ? iW.payload.event : WW.lastPlayedEvent
+           }),
+           recordTimeOffset: fL(((WW, iW) => {
+             let OW = WW.timeOffset;
+             return "payload" in iW && "timeOffset" in iW.payload && (OW = iW.payload.timeOffset), {
+               ...WW,
+               timeOffset: OW,
+               baselineTime: WW.events[0].timestamp + OW
```

#### 402. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7152-L7167` → after: `L9733-L9735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9733-L9735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9733-L9735) · [Before (L7152-L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7152-L7167)

```diff
-             return ie
-           }(be);
-           return function(ee) {
-             return ee.every((ee => 4294967295 === ee))
-           }(ee) ? BH : ee.every((ee => 0 === ee)) ? null : {
-             kind: "shape",
-             key: `shape:${ee.join(",")}`,
-             mask: ee
-           }
-         }
-         if (ee.Cw[ie] || !ee.zT[ie]) return null;
-         const Me = [0, 1, 2, 3, 4, 5].map((ye => {
-           const be = ee.BT[6 * ie + ye];
-           let Me = He.get(be);
-           return void 0 === Me && (Me = function(ee) {
-             if (!ee || ee.PT) return null;
+           })),
+           play(WW) {
+             var iW;
```

#### 403. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7169-L7171` → after: `L9737-L9740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9737-L9740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9737-L9740) · [Before (L7169-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7169-L7171)

```diff
-               O4: ie,
-               W4: He,
-               f4: ye
+               timer: NW,
+               events: PW,
+               baselineTime: LW,
+               lastPlayedEvent: cW
```

#### 404. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7173-L7263` → after: `L9742-L9813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9742-L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9742-L9813) · [Before (L7173-L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7173-L7263)

```diff
-             if (!ie || !He || !(He > 0) || void 0 === ye || !(ye >= 0)) return null;
-             const be = ie[0],
-               Me = He * He * 4;
-             if (!be || be.byteLength < Me) return null;
-             const Ke = Math.floor(be.byteLength / Me),
-               Ue = ie[Math.floor(ye / Ke)];
-             if (!Ue) return null;
-             const Fe = new Uint8Array(Ue.buffer, Ue.byteOffset, Ue.byteLength),
-               Je = ye % Ke * Me;
-             if (Je + Me > Fe.length) return null;
-             const oe = new Uint8Array(He * He);
-             let Re = !1;
-             for (let ke = 0; ke < oe.length; ke++) oe[ke] = Fe[Je + 4 * ke + 3], Re ||= oe[ke] < KF;
-             return Re ? {
-               alpha: oe,
-               width: He
- ... (75 more removed lines; see GitHub link above)
+             NW.clear();
+             for (const OW of PW) eL(OW, LW);
+             const wW = function(WW, iW) {
+               for (let OW = WW.length - 1; OW >= 0; OW--) {
+                 const mW = WW[OW];
+                 if (mW.type === uP.Meta && mW.timestamp <= iW) return WW.slice(OW)
+               }
+               return WW
+             }(PW, LW);
+             let tW = null == cW ? void 0 : cW.timestamp;
+             (null == cW ? void 0 : cW.type) === uP.IncrementalSnapshot && cW.data.source === oP.MouseMove && (tW = cW.timestamp + (null == (iW = cW.data.positions[0]) ? void 0 : iW.timeOffset)), LW < (tW || 0) && EW.emit(DP.PlayBack);
+             const ZW = new Array;
+             for (const mW of wW)
+               if (!(tW && tW < LW && (mW.timestamp <= tW || mW === cW)))
+                 if (mW.timestamp < LW) ZW.push(mW);
+                 else {
+ ... (56 more added lines; see GitHub link above)
```

#### 405. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7266-L7271` → after: `L9817-L9819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9817-L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9817-L9819) · [Before (L7266-L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7266-L7271)

```diff
-     function kF() {
-       return {
-         bricks: new Uint32Array(RH),
-         cells: new Uint16Array(32768),
-         special: new Uint8Array(JH)
-       }
+     function FL(WW, iW) {
+       let OW = zL.get(WW);
+       return OW || (OW = new Map, zL.set(WW, OW)), OW.has(iW) || OW.set(iW, []), OW.get(iW)
```

#### 406. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7273-L7428` → after: `L9821-L9859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9821-L9859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9821-L9859) · [Before (L7273-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7273-L7428)

```diff
-     class qF {
-       constructor(ee, ie, He) {
-         let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
-         this.casters = ee, this.writeVoxels = ie, this.writePool = He, this.warn = ye, this.eyeChunk = null, this.slotChunk = new Array(yH).fill(null), this.slotVersion = new Float64Array(yH).fill(-1), this.slotPool = new Array(yH).fill(null), this.starved = new Uint8Array(yH), t … [truncated]
-         for (let be = 0; be < wH; be++) this.freePool[be] = 65535 - be
-       }
-       get queuedCount() {
-         return this.queue.length
-       }
-       get poolInUse() {
-         return wH - this.freeCount
-       }
-       chunkAdded(ee) {
-         if (null === this.eyeChunk || !this.inRadius(ee.i, ee.j, ee.k)) return;
-         const ie = pH(ee.i, ee.j, ee.k);
-         this.slotChunk[ie] = ee, this.slotVersion[ie] = -1, this.enqueue(ie)
- ... (140 more removed lines; see GitHub link above)
+ 
+     function QL(WW, iW, OW) {
+       return async mW => {
+         if (mW && "object" === typeof mW && "rr_type" in mW) {
+           if (OW && (OW.isUnchanged = !1), "ImageBitmap" === mW.rr_type && "args" in mW) {
+             const EW = await QL(WW, iW, OW)(mW.args);
+             return await createImageBitmap.apply(null, EW)
+           }
+           if ("index" in mW) {
+             if (OW || null === iW) return mW;
+             const {
+               rr_type: WW,
+               index: EW
+             } = mW;
+             return FL(iW, WW)[EW]
+           }
+ ... (23 more added lines; see GitHub link above)
```

#### 407. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7452-L7456` → after: `L9862-L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9862-L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9862-L9866) · [Before (L7452-L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7452-L7456)

```diff
-           const Ue = this.freePool[--this.freeCount];
-           Fe[Je++] = Ue;
-           for (let ee = 0; ee < FH; ee++) {
-             const ie = ye[He + (ee >>> 5)] >>> (31 & ee) & 1 ? be[oe * FH + ee] : 0;
-             1 & ee ? Ke[ee >> 1] |= ie << 16 : Ke[ee >> 1] = ie
+           if ("data" in mW && "Blob" === mW.rr_type) {
+             const EW = await Promise.all(mW.data.map(QL(WW, iW, OW)));
+             return new Blob(EW, {
+               type: mW.type
+             })
```

#### 408. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7458` → after: `L9868-L9869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9868-L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9868-L9869) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7458)

```diff
-           ye[He + 2] = Ue + 1, this.writePool(DH + 32 * Ue, Ke)
+         } else if (Array.isArray(mW)) {
+           return await Promise.all(mW.map(QL(WW, iW, OW)))
```

#### 409. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7460` → after: `L9871-L9905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9871-L9905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9871-L9905) · [Before (L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7460)

```diff
-         Fe.length > 0 && (this.slotPool[ee] = Fe)
+         return mW
+       }
+     }
+     const Wc = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
+     async function ic(WW) {
+       let {
+         mutation: iW,
+         target: OW,
+         type: mW,
+         imageMap: EW,
+         errorHandler: NW
+       } = WW;
+       try {
+         const WW = function(WW, iW) {
+           try {
+             return iW === vP.WebGL ? WW.getContext("webgl") || WW.getContext("experimental-webgl") : WW.getContext("webgl2")
+ ... (19 more added lines; see GitHub link above)
```

#### 410. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7462-L7470` → after: `L9907-L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9907-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9907-L9931) · [Before (L7462-L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7462-L7470)

```diff
-       evictBeyond(ee, ie) {
-         const He = this.slotDistance(ee),
-           ye = [];
-         for (let be = 0; be < yH; be++) be !== ee && this.slotPool[be] && this.slotDistance(be) > He && ye.push(be);
-         ye.sort(((ee, ie) => this.slotDistance(ie) - this.slotDistance(ee)));
-         for (const be of ye) {
-           if (this.freeCount >= ie) return;
-           const ee = this.slotChunk[be];
-           ee && !ee.RZ && ee.Uq && (ee.kT === this.slotVersion[be] || RF(ee)) && this.encodeSlot(be, this.victimScratch, !1)
+     }
+     async function Oc(WW) {
+       let {
+         event: iW,
+         mutation: OW,
+         target: mW,
+         imageMap: EW,
+         canvasEventMap: NW,
+         errorHandler: PW
+       } = WW;
+       try {
+         const WW = NW.get(iW) || OW,
+           LW = "commands" in WW ? WW.commands : [WW];
+         if ([vP.WebGL, vP.WebGL2].includes(OW.type)) {
+           for (let WW = 0; WW < LW.length; WW++) {
+             const iW = LW[WW];
+ ... (9 more added lines; see GitHub link above)
```

#### 411. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7472-L7476` → after: `L9933-L9962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9933-L9962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9933-L9962) · [Before (L7472-L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7472-L7476)

```diff
-       }
-       dropSpecials(ee, ie) {
-         this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
-         const He = 3 * ie;
-         for (let ye = 0; ye < FH; ye++) ee.cells[ie * FH + ye] !== BH && (ee.bricks[He + (ye >>> 5)] &= ~(1 << (31 & ye)))
+         await async function(WW) {
+           let {
+             event: iW,
+             mutations: OW,
+             target: mW,
+             imageMap: EW,
+             errorHandler: NW
+           } = WW;
+           const PW = mW.getContext("2d");
+           if (!PW) return void NW(OW[0], new Error("Canvas context is null"));
+           const LW = OW.map((async WW => Promise.all(WW.args.map(QL(EW, PW)))));
+           (await Promise.all(LW)).forEach(((WW, mW) => {
+             const LW = OW[mW];
+             try {
+               if (LW.setter) return void(PW[LW.property] = LW.args[0]);
+               const OW = PW[LW.property];
+ ... (14 more added lines; see GitHub link above)
```

#### 412. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7482-L7489` → after: `L9967-L9984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9967-L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9967-L9984) · [Before (L7482-L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7482-L7489)

```diff
-         this.device = ee, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new uH, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.xR = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = ee.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = ee.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
+         NW(this, "mediaMap", new Map), NW(this, "warn"), NW(this, "service"), NW(this, "speedService"), NW(this, "emitter"), NW(this, "getCurrentTime"), NW(this, "metadataCallbackMap", new Map), this.warn = WW.warn, this.service = WW.service, this.speedService = WW.speedService,  … [truncated]
+           this.syncAllMediaElements()
+         }))
+       }
+       syncAllMediaElements() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
+           pause: !1
+         };
+         this.mediaMap.forEach(((iW, OW) => {
+           this.syncTargetWithState(OW), WW.pause && OW.pause()
+         }))
+       }
+       start() {
+         this.syncAllMediaElements()
+       }
+       pause() {
+ ... (2 more added lines; see GitHub link above)
```

#### 413. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7492-L7506` → after: `L9987-L10021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L9987-L10021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L9987-L10021) · [Before (L7492-L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7492-L7506)

```diff
-       update(ee, ie, He) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
-           frame: ye
-         } = this;
-         ye.gR(ee, ie), He.forEachSunShadowCaster((ee => {
-           this.add(ee)
-         })), ye.finish();
-         const be = 0 === ye.parts;
-         if (be && this.uploadedEmpty) return;
-         this.uploadedEmpty = be;
-         const {
-           queue: Me
-         } = this.device, {
-           words: Ke
+       seekTo(WW) {
+         let {
+           time: iW,
+           target: OW,
+           mediaState: mW
+         } = WW;
+         if (mW.isPlaying) {
+           const WW = (iW - mW.lastInteractionTimeOffset) / 1e3 * mW.playbackRate,
+             EW = "duration" in OW && OW.duration;
+           if (Number.isNaN(EW)) return void this.waitForMetadata(OW);
+           let NW = mW.currentTimeAtLastInteraction + WW;
+           OW.loop && !1 !== EW && (NW %= EW), OW.currentTime = NW
+         } else OW.pause(), OW.currentTime = mW.currentTimeAtLastInteraction
+       }
+       waitForMetadata(WW) {
+         if (this.metadataCallbackMap.has(WW)) return;
+ ... (19 more added lines; see GitHub link above)
```

#### 414. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7508` → after: `L10023-L10040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10023-L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10023-L10040) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7508)

```diff
-         Me.writeBuffer(this.frameBuffer, 0, Ke, 0, 16385), ye.refs > 0 && Me.writeBuffer(this.frameBuffer, 65540, Ke, VH, ye.refs), be || Me.writeBuffer(this.frameBuffer, 327684, Ke, aH, ye.parts * YH)
+         const EW = this.mediaMap.get(iW),
+           {
+             type: NW,
+             playbackRate: PW,
+             currentTime: LW,
+             muted: cW,
+             volume: wW,
+             loop: tW
+           } = mW;
+         return {
+           isPlaying: NW === gP.Play || NW !== gP.Pause && ((null == EW ? void 0 : EW.isPlaying) || null !== iW.getAttribute("autoplay")),
+           currentTimeAtLastInteraction: LW ?? (null == EW ? void 0 : EW.currentTimeAtLastInteraction) ?? 0,
+           lastInteractionTimeOffset: OW,
+           playbackRate: PW ?? (null == EW ? void 0 : EW.playbackRate) ?? 1,
+           volume: wW ?? (null == EW ? void 0 : EW.volume) ?? 1,
+           muted: cW ?? (null == EW ? void 0 : EW.muted) ?? null === iW.getAttribute("muted"),
+ ... (2 more added lines; see GitHub link above)
```

#### 415. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7510-L7511` → after: `L10042-L10043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10042-L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10042-L10043) · [Before (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7510-L7511)

```diff
-       add(ee) {
-         const ie = this.gridFor(ee);
+       syncTargetWithState(WW) {
+         const iW = this.mediaMap.get(WW);
```

#### 416. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7514-L7524` → after: `L10046-L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10046-L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10046-L10059) · [Before (L7514-L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7514-L7524)

```diff
-           frame: He
-         } = this, {
-           xR: ye,
-           worldAt: be,
-           instances: Me,
-           instanceCount: Ke,
-           thin: Ue
-         } = ee;
-         if (Me)
-           for (let Fe = 0; Fe < Ke; Fe++) Ue ? (lH(Me, 16 * Fe, ye, be, this.xR), He.add(ie, this.xR)) : He.add(ie, Me, 16 * Fe);
-         else He.add(ie, ye, be)
+           muted: OW,
+           loop: mW,
+           volume: EW,
+           isPlaying: NW
+         } = iW, PW = this.service.state.matches("paused"), LW = iW.playbackRate * this.speedService.state.context.timer.speed;
+         try {
+           this.seekTo({
+             time: this.getCurrentTime(),
+             target: WW,
+             mediaState: iW
+           }), WW.volume !== EW && (WW.volume = EW), WW.muted = OW, WW.loop = mW, WW.playbackRate !== LW && (WW.playbackRate = LW), NW && !PW ? WW.play() : WW.pause()
+         } catch (cW) {
+           this.warn(`Failed to replay media interactions: ${cW.message||cW}`)
+         }
```

#### 417. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7526` → after: `L10061-L10089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10061-L10089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10061-L10089) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7526)

```diff
-       gridFor(ee) {
+       addMediaElements(WW, iW, OW) {
+         if (!["AUDIO", "VIDEO"].includes(WW.nodeName)) return;
+         const mW = WW,
+           EW = OW.getMeta(mW);
+         if (!EW || !("attributes" in EW)) return;
+         const NW = this.service.state.matches("paused"),
+           PW = EW.attributes;
+         let LW = !1;
+         LW = PW.rr_mediaState ? "played" === PW.rr_mediaState : null !== mW.getAttribute("autoplay"), LW && NW && mW.pause();
+         let cW = 1;
+         "number" === typeof PW.rr_mediaPlaybackRate && (cW = PW.rr_mediaPlaybackRate);
+         let wW = !1;
+         wW = "boolean" === typeof PW.rr_mediaMuted ? PW.rr_mediaMuted : null !== mW.getAttribute("muted");
+         let tW = !1;
+         tW = "boolean" === typeof PW.rr_mediaLoop ? PW.rr_mediaLoop : null !== mW.getAttribute("loop");
+         let ZW = 1;
+ ... (13 more added lines; see GitHub link above)
```

#### 418. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7528-L7600` → after: `L10091-L10093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10091-L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10091-L10093) · [Before (L7528-L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7528-L7600)

```diff
-           geometry: ie,
-           indexed: He,
-           first: ye,
-           count: be,
-           skip: Me
-         } = ee, Ke = this.grids.get(ie);
-         Ke || (Ke = new Map, this.grids.set(ie, Ke));
-         const Ue = `${He?ye:-1-ye}:${be}:${null!==Me&&void 0!==Me?Me:""}`;
-         let Fe = Ke.get(Ue);
-         if (void 0 !== Fe || this.gridsFull) return Fe;
-         const Je = performance.now();
-         if (this.bakeDeadline < 0) this.bakeDeadline = Je + 2;
-         else if (Je > this.bakeDeadline) return;
-         return Fe = this.bake(ie, He, ye, be, Me), void 0 !== Fe && Ke.set(Ue, Fe), Fe
-       }
-       bake(ee, ie, He, ye, be) {
- ... (57 more removed lines; see GitHub link above)
+           target: iW,
+           timeOffset: OW,
+           mutation: mW
```

#### 419. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7602-L7607` → after: `L10095-L10105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10095-L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10095-L10105) · [Before (L7602-L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7602-L7607)

```diff
-         if (this.gridTop + Ue.length > xH) return void(this.gridsFull = !0);
-         const Je = this.gridTop;
-         return this.gridTop += Ue.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Je, Ue), {
-           ...Fe,
-           at: Je
-         }
+         this.mediaMap.set(iW, this.getMediaStateFromMutation({
+           target: iW,
+           timeOffset: OW,
+           mutation: mW
+         })), this.syncTargetWithState(iW)
+       }
+       isSupportedMediaElement(WW) {
+         return ["AUDIO", "VIDEO"].includes(WW.nodeName)
+       }
+       reset() {
+         this.mediaMap.clear()
```

#### 420. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7613` → after: `L10110-L10117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10110-L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10110-L10117) · [Before (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7613)

```diff
-       return ee[0] * ie[0] + ee[1] * ie[1] + ee[2] * ie[2] < pF
+       if ("DIALOG" !== WW.nodeName || WW instanceof mN) return;
+       const OW = WW,
+         mW = OW.open,
+         EW = mW && OW.matches("dialog:modal"),
+         NW = OW.getAttribute("rr_open_mode"),
+         PW = "string" === typeof(null == iW ? void 0 : iW.attributes.open) || "string" === typeof OW.getAttribute("open"),
+         LW = "modal" === NW;
+       mW && !(EW && "non-modal" === NW || !EW && LW) || (OW.isConnected ? (mW && OW.close(), PW && (LW ? OW.showModal() : OW.show())) : console.warn("dialog is not attached to the dom", OW))
```

#### 421. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7615-L7626` → after: `L10119-L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10119-L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10119-L10123) · [Before (L7615-L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7615-L7626)

```diff
-     async function zF(ee) {
-       const {
-         pixels: ie,
-         width: He,
-         height: ye
-       } = await ei(ee), be = new Uint8Array(He * ye);
-       for (let Me = 0; Me < be.length; Me++) be[Me] = ie[4 * Me + 3];
-       return {
-         width: He,
-         height: ye,
-         alpha: be
-       }
+ 
+     function Nc(WW, iW) {
+       if ("DIALOG" !== WW.nodeName || WW instanceof mN) return;
+       const OW = WW;
+       OW.isConnected ? null === iW.attributes.open && (OW.removeAttribute("open"), OW.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", OW)
```

#### 422. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7628-L7649` → after: `L10125-L10130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10125-L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10125-L10130) · [Before (L7628-L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7628-L7649)

```diff
-     class BF {
-       constructor(ee, ie) {
-         this.device = ee, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(jH.n), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = ee.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * fH,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = ee.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [He, ye, be] = jH.p;
- ... (6 more removed lines; see GitHub link above)
+     const Pc = function(WW) {
+         return {
+           all: WW = WW || new Map,
+           on: function(iW, OW) {
+             var mW = WW.get(iW);
+             mW ? mW.push(OW) : WW.set(iW, [OW])
```

#### 423. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7651-L7899` → after: `L10132-L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10132-L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10132-L10142) · [Before (L7651-L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7651-L7899)

```diff
-           dimension: "3d",
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
-         }), this.volumeView = this.volume.createView({
-           label: "sun-shadow-volume"
-         }), this.volumeSampler = ee.createSampler({
-           label: "sun-shadow-volume",
-           magFilter: "linear",
-           minFilter: "linear",
-           addressModeU: "repeat",
-           addressModeV: "repeat",
-           addressModeW: "repeat"
-         }), this.work = ee.createBuffer({
-           label: "sun-shadow-volume-work",
-           size: jH.n,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
- ... (233 more removed lines; see GitHub link above)
+           off: function(iW, OW) {
+             var mW = WW.get(iW);
+             mW && (OW ? mW.splice(mW.indexOf(OW) >>> 0, 1) : WW.set(iW, []))
+           },
+           emit: function(iW, OW) {
+             var mW = WW.get(iW);
+             mW && mW.slice().map((function(WW) {
+               WW(OW)
+             })), (mW = WW.get("*")) && mW.slice().map((function(WW) {
+               WW(iW, OW)
+             }))
```

#### 424. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7901-L7932` → after: `L10144-L10152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10144-L10152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10144-L10152) · [Before (L7901-L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7901-L7932)

```diff
-         }), (ee => {
-           this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(ee)}`)
-         })), null
-       }
-       start(ee) {
-         if (this.window) return this.window;
-         const ie = (ee, ie) => {
-           this.written = !0, this.device.queue.writeBuffer(this.special, 4 * ee, ie)
-         };
-         this.casters = new JF(((ee, He) => {
-           this.castersWritten = !0, ie(ee, He)
-         }), zF);
-         const He = new qF(this.casters, ((ee, ie) => {
-           this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * ee, ie)
-         }), ie);
-         He.encoded = ee => {
- ... (16 more removed lines; see GitHub link above)
+         }
+       },
+       Lc = "[replayer]",
+       cc = {
+         duration: 500,
+         lineCap: "round",
+         lineWidth: 3,
+         strokeStyle: "red"
+       };
```

#### 425. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7934-L8007` → after: `L10154-L10155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10154-L10155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10154-L10155) · [Before (L7934-L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L7934-L8007)

```diff
-     function ZF(ee, ie, He, ye) {
-       ee.drawOffset(ie, ye + OF), ie[ye + dF] = ee.drawTime(), He[ye + WF] = ee.ring.drawStart(), He[ye + tF] = ee.ring.drawCount()
-     }
-     const wF = `\n${uy}\n\nconst MAX_STOPS = ${gF.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${gF.b/4}>,\n\tcolor1: array<vec4f, ${gF.b}>,\n\t … [truncated]
-     var DF = He(44799);
-     class PF {
-       constructor(ee, ie, He, ye) {
-         this.device = ee, this.system = ie, this.frameIndex = He, this.bindings = ye, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, DF.g)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, ee * gF.c * 4, this.system.ring.records, ee * gF.c, (ie - ee) * gF.c)
-         };
-         const {
-           name: be
-         } = ie;
-         this.ring = ee.createBuffer({
-           label: `particles-${be}`,
-           size: ie.ring.records.byteLength,
- ... (58 more removed lines; see GitHub link above)
+     function wc(WW) {
+       return WW.type == uP.IncrementalSnapshot && (WW.data.source == oP.TouchMove || WW.data.source == oP.MouseInteraction && WW.data.type == dP.TouchStart)
```

#### 426. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8011-L8057` → after: `L10159-L10174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10159-L10174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10159-L10174) · [Before (L8011-L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8011-L8057)

```diff
-         this.device = ee, this.resources = ie, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-           order: 251,
-           isTransparent: !0,
-           _worldCenter: [0, 0, 0],
-           bind: (ee, ie) => (this.bindTarget(ie), {
-             renderable: this.renderable,
-             pipeline: Pi(this.device, ie),
-             draw: ee => ie === this.preparedTarget ? this.draw(ee) : 0
-           })
-         }
-       }
-       rebind(ee) {
-         this.device = ee, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
-         for (const [ie, He] of this.systems) {
-           const ye = new PF(ee, ie, He.frameIndex, this.bindings),
-             be = ie.ring.drawCount();
- ... (31 more removed lines; see GitHub link above)
+         var OW = this;
+         if (NW(this, "wrapper"), NW(this, "iframe"), NW(this, "UNSAFE_replayCanvas", !1), NW(this, "service"), NW(this, "speedService"), NW(this, "config"), NW(this, "usingVirtualDom", !1), NW(this, "virtualDom", new TN), NW(this, "mouse"), NW(this, "mouseTail", null), NW(this, " … [truncated]
+             this.iframe.style.display = "inherit";
+             for (const iW of [this.mouseTail, this.iframe]) iW && (iW.setAttribute("width", String(WW.width)), iW.setAttribute("height", String(WW.height)))
+           })), NW(this, "applyEventsSynchronously", (WW => {
+             for (const iW of WW) {
+               switch (iW.type) {
+                 case uP.DomContentLoaded:
+                 case uP.Load:
+                   continue;
+                 case uP.FullSnapshot:
+                 case uP.Meta:
+                 case uP.Plugin:
+                 case uP.IncrementalSnapshot:
+               }
+               this.getCastFn(iW, !0)()
```

#### 427. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8059-L8063` → after: `L10176-L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10176-L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10176-L10220) · [Before (L8059-L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8059-L8063)

```diff
-           }, {
-             binding: 4,
-             visibility: GPUShaderStage.FRAGMENT,
-             sampler: {
-               type: "filtering"
+           })), NW(this, "getCastFn", (function(WW) {
+             let iW, mW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             switch (WW.type) {
+               case uP.DomContentLoaded:
+               case uP.Load:
+                 break;
+               case uP.Custom:
+                 iW = () => {
+                   OW.emitter.emit(DP.CustomEvent, WW)
+                 };
+                 break;
+               case uP.Meta:
+                 iW = () => OW.emitter.emit(DP.Resize, {
+                   width: WW.data.width,
+                   height: WW.data.height
+                 });
+ ... (29 more added lines; see GitHub link above)
```

#### 428. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8065-L8069` → after: `L10222-L10241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10222-L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10222-L10241) · [Before (L8065-L8069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8065-L8069)

```diff
-           }, {
-             binding: 5,
-             visibility: GPUShaderStage.FRAGMENT,
-             texture: {
-               sampleType: "float"
+             return () => {
+               iW && iW();
+               for (const iW of OW.config.plugins || []) iW.handler && iW.handler(WW, mW, {
+                 replayer: OW
+               });
+               OW.service.send({
+                 type: "CAST_EVENT",
+                 payload: {
+                   event: WW
+                 }
+               });
+               const EW = OW.service.state.context.events.length - 1;
+               if (!OW.config.liveMode && WW === OW.service.state.context.events[EW]) {
+                 const iW = () => {
+                   EW < OW.service.state.context.events.length - 1 || (OW.backToNormal(), OW.service.send("END"), OW.emitter.emit(DP.Finish))
+                 };
+ ... (4 more added lines; see GitHub link above)
```

#### 429. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8071` → after: `L10243-L10265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10243-L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10243-L10265) · [Before (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8071)

```diff
-           }]
+           })), !(null == iW ? void 0 : iW.liveMode) && WW.length < 2) throw new Error("Replayer need at least 2 events.");
+         const mW = {
+           speed: 1,
+           maxSpeed: 360,
+           root: document.body,
+           loadTimeout: 0,
+           skipInactive: !1,
+           inactivePeriodThreshold: 1e4,
+           showWarning: !0,
+           showDebug: !1,
+           blockClass: "rr-block",
+           liveMode: !1,
+           insertStyleRules: [],
+           triggerFocus: !0,
+           UNSAFE_replayCanvas: !1,
+           pauseAnimation: !0,
+ ... (7 more added lines; see GitHub link above)
```

#### 430. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8073-L8080` → after: `L10267-L10296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10267-L10296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10267-L10296) · [Before (L8073-L8080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8073-L8080)

```diff
-         this.frameLayout = ee.createBindGroupLayout({
-           label: "particles-frame",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX,
-             buffer: {
-               type: "uniform",
-               hasDynamicOffset: !0
+         this.emitter.on(DP.Flush, (() => {
+           if (this.usingVirtualDom) {
+             const OW = {
+               mirror: this.mirror,
+               applyCanvas: (WW, iW, OW) => {
+                 Oc({
+                   event: WW,
+                   mutation: iW,
+                   target: OW,
+                   imageMap: this.imageMap,
+                   canvasEventMap: this.canvasEventMap,
+                   errorHandler: this.warnCanvasMutationFailed.bind(this)
+                 })
+               },
+               applyInput: this.applyInput.bind(this),
+               applyScroll: this.applyScroll.bind(this),
+ ... (14 more added lines; see GitHub link above)
```

#### 431. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8082-L8093` → after: `L10298-L10321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10298-L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10298-L10321) · [Before (L8082-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8082-L8093)

```diff
-           }]
-         }), this.pipelineLayout = ee.createPipelineLayout({
-           bindGroupLayouts: [Wi(ee), ie, this.frameLayout]
-         }), this.module = ee.createShaderModule({
-           label: "particles",
-           code: wF
-         });
-         const He = ee.createTexture({
-           label: "particles-no-ramp",
-           size: [1, 1],
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
+             if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
+               for (const WW in this.legacy_missingNodeRetryMap) try {
+                 const iW = this.legacy_missingNodeRetryMap[WW],
+                   mW = SN(iW.node, this.mirror, this.virtualDom.mirror);
+                 MN(mW, iW.node, OW, this.virtualDom.mirror), iW.node = mW
+               } catch (iW) {
+                 this.warn(iW)
+               }
+             this.constructedStyleMutations.forEach((WW => {
+               this.applyStyleSheetMutation(WW)
+             })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((WW => {
+               this.applyAdoptedStyleSheet(WW)
+             })), this.adoptedStyleSheets = []
+           }
+           if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove(" … [truncated]
+             const [WW, iW] = this.lastMouseDownEvent;
+ ... (8 more added lines; see GitHub link above)
```

#### 432. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8095-L8204` → after: `L10323-L10341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10323-L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10323-L10341) · [Before (L8095-L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8095-L8204)

```diff
-         ee.queue.writeTexture({
-           texture: He
-         }, new Uint8Array([255, 255, 255, 255]), {
-           bytesPerRow: 4
-         }, [1, 1]), this.bindings = {
-           layout: ie,
-           rampSampler: ee.createSampler({
-             label: "particles-ramp",
-             magFilter: "nearest",
-             minFilter: "nearest",
-             addressModeU: "repeat",
-             addressModeV: "repeat"
-           }),
-           whiteRamp: He.createView()
-         }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
-       }
- ... (94 more removed lines; see GitHub link above)
+         this.service = rL({
+           events: WW.map((WW => iW && iW.unpackFn ? iW.unpackFn(WW) : WW)).sort(((WW, iW) => WW.timestamp - iW.timestamp)),
+           timer: EW,
+           timeOffset: 0,
+           baselineTime: 0,
+           lastPlayedEvent: null
+         }, {
+           getCastFn: this.getCastFn,
+           applyEventsSynchronously: this.applyEventsSynchronously,
+           emitter: this.emitter
+         }), this.service.start(), this.service.subscribe((WW => {
+           this.emitter.emit(DP.StateChange, {
+             player: WW
+           })
+         })), this.speedService = aL(GL({
+           id: "speed",
+ ... (3 more added lines; see GitHub link above)
```

#### 433. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8206-L8226` → after: `L10343-L10405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10343-L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10343-L10405) · [Before (L8206-L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8206-L8226)

```diff
-           depthStencil: be._depthStencilFormat ? {
-             format: be._depthStencilFormat,
-             depthCompare: Ke,
-             depthWriteEnabled: !1
-           } : void 0,
-           multisample: {
-             count: be._sampleCount
-           }
-         }).then((ie => {
-           He.set(ee, ie)
-         }), (ie => {
-           He.set(ee, !1), console.error("Lite particle pipeline failed", ie), oi(Ue, "particles", `blend-${ee}`, ie)
-         })), null
-       }
-       allocateFrameIndex() {
-         const ee = this.freeFrameIndices.pop();
- ... (5 more removed lines; see GitHub link above)
+           initial: "normal",
+           states: {
+             normal: {
+               on: {
+                 FAST_FORWARD: {
+                   target: "skipping",
+                   actions: ["recordSpeed", "setSpeed"]
+                 },
+                 SET_SPEED: {
+                   target: "normal",
+                   actions: ["setSpeed"]
+                 }
+               }
+             },
+             skipping: {
+               on: {
+ ... (47 more added lines; see GitHub link above)
```

#### 434. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8228-L8235` → after: `L10407-L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10407-L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10407-L10410) · [Before (L8228-L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8228-L8235)

```diff
-         return ie
-       }
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+         LW && setTimeout((() => {
+           var WW;
+           this.firstFullSnapshot || (this.firstFullSnapshot = LW, this.rebuildFullSnapshot(LW), null == (WW = this.iframe.contentWindow) || WW.scrollTo(LW.data.initialOffset))
+         }), 1), this.service.state.context.events.find(wc) && this.mouse.classList.add("touch-device")
```

#### 435. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8237-L8248` → after: `L10412-L10413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10412-L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10412-L10413) · [Before (L8237-L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8237-L8248)

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
+       get timer() {
+         return this.service.state.context.timer
```

#### 436. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8250-L8255` → after: `L10415-L10427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10415-L10427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10415-L10427) · [Before (L8250-L8255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8250-L8255)

```diff
-     }
-     class YF {
-       constructor(ee, ie, He, ye, be) {
-         this.lite = ee, this.canvas = ie, this.info = He, this.resources = be, this.Gbe = !1, this.needPOTTextures = !1, this.Eee = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
+       on(WW, iW) {
+         return this.emitter.on(WW, iW), this
+       }
+       off(WW, iW) {
+         return this.emitter.off(WW, iW), this
+       }
+       setConfig(WW) {
+         Object.keys(WW).forEach((iW => {
+           WW[iW], this.config[iW] = WW[iW]
+         })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof WW.speed && this.speedService.send({
+           type: "SET_SPEED",
+           payload: {
+             speed: WW.speed
```

#### 437. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8257-L8259` → after: `L10429-L10437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10429-L10437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10429-L10437) · [Before (L8257-L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8257-L8259)

```diff
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = ie.width, this.renderHeight = ie.height, this.caps = {
-           maxTextureSize: ye.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: ye.maxTextureArrayLayers
+         }), "undefined" !== typeof WW.mouseTail && (!1 === WW.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail … [truncated]
+       }
+       getMetaData() {
+         const WW = this.service.state.context.events[0],
+           iW = this.service.state.context.events[this.service.state.context.events.length - 1];
+         return {
+           startTime: WW.timestamp,
+           endTime: iW.timestamp,
+           totalTime: iW.timestamp - WW.timestamp
```

#### 438. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8262-L8263` → after: `L10440-L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10440-L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10440-L10441) · [Before (L8262-L8263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8262-L8263)

```diff
-       getCaps() {
-         return this.caps
+       getCurrentTime() {
+         return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
```

#### 439. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8265-L8266` → after: `L10443-L10448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10443-L10448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10443-L10448) · [Before (L8265-L8266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8265-L8266)

```diff
-       detach() {
-         this.lite = null
+       getTimeOffset() {
+         const {
+           baselineTime: WW,
+           events: iW
+         } = this.service.state.context;
+         return WW - iW[0].timestamp
```

#### 440. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8268-L8269` → after: `L10450-L10451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10450-L10451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10450-L10451) · [Before (L8268-L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8268-L8269)

```diff
-       rebind(ee) {
-         this.lite = ee, (0, ue.r)(ee, this.renderWidth, this.renderHeight)
+       getMirror() {
+         return this.mirror
```

#### 441. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8271-L8272` → after: `L10453-L10463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10453-L10463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10453-L10463) · [Before (L8271-L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8271-L8272)

```diff
-       getRenderWidth() {
-         return this.renderWidth
+       play() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         var iW, OW;
+         this.service.state.matches("paused") || this.service.send({
+           type: "PAUSE"
+         }), this.service.send({
+           type: "PLAY",
+           payload: {
+             timeOffset: WW
+           }
+         }), null == (OW = null == (iW = this.iframe.contentDocument) ? void 0 : iW.getElementsByTagName("html")[0]) || OW.classList.remove("rrweb-paused"), this.emitter.emit(DP.Start)
```

#### 442. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8274-L8275` → after: `L10465-L10471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10465-L10471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10465-L10471) · [Before (L8274-L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8274-L8275)

```diff
-       getRenderHeight() {
-         return this.renderHeight
+       pause(WW) {
+         var iW, OW;
+         void 0 === WW && this.service.state.matches("playing") && this.service.send({
+           type: "PAUSE"
+         }), "number" === typeof WW && (this.play(WW), this.service.send({
+           type: "PAUSE"
+         })), null == (OW = null == (iW = this.iframe.contentDocument) ? void 0 : iW.getElementsByTagName("html")[0]) || OW.classList.add("rrweb-paused"), this.emitter.emit(DP.Pause)
```

#### 443. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8277-L8278` → after: `L10473-L10475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10473-L10475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10473-L10475) · [Before (L8277-L8278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8277-L8278)

```diff
-       getHardwareScalingLevel() {
-         return 1
+       resume() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(WW), this.emitter.emit(DP.Resume)
```

#### 444. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8280-L8297` → after: `L10477-L10484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10477-L10484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10477-L10484) · [Before (L8280-L8297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8280-L8297)

```diff
-       setSize(ee, ie) {
-         if (this.renderWidth === ee && this.renderHeight === ie) return !1;
-         const He = this.renderWidth,
-           ye = this.renderHeight;
-         this.renderWidth = ee, this.renderHeight = ie;
-         const be = this.lite;
-         if (null === be) return !0;
-         try {
-           (0, ue.r)(be, ee, ie)
-         } catch (Me) {
-           if (Me instanceof DOMException && "InvalidStateError" === Me.name) {
-             this.renderWidth = He, this.renderHeight = ye;
-             try {
-               (0, ue.r)(be, He, ye)
-             } catch {
-               this.canvas.width = He, this.canvas.height = ye
- ... (2 more removed lines; see GitHub link above)
+       destroy() {
+         this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(DP.Destroy)
+       }
+       startLive(WW) {
+         this.service.send({
+           type: "TO_LIVE",
+           payload: {
+             baselineTime: WW
```

#### 445. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8299-L8301` → after: `L10486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10486) · [Before (L8299-L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8299-L8301)

```diff
-           throw Me
-         }
-         return !0
+         })
```

#### 446. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8303-L8305` → after: `L10488-L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10488-L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10488-L10495) · [Before (L8303-L8305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8303-L8305)

```diff
-       resize() {}
-       getRenderingCanvas() {
-         return this.canvas
+       addEvent(WW) {
+         const iW = this.config.unpackFn ? this.config.unpackFn(WW) : WW;
+         wc(iW) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
+           type: "ADD_EVENT",
+           payload: {
+             event: iW
+           }
+         })))
```

#### 447. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8307-L8308` → after: `L10497-L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10497-L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10497-L10498) · [Before (L8307-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8307-L8308)

```diff
-       getInfo() {
-         return this.info
+       enableInteract() {
+         this.iframe.setAttribute("scrolling", "auto"), this.iframe.style.pointerEvents = "auto"
```

#### 448. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8310-L8312` → after: `L10500-L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10500-L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10500-L10501) · [Before (L8310-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8310-L8312)

```diff
-       LO() {
-         const ee = performance.now();
-         this.deltaTime = null === this.lastFrameTime ? 0 : ee - this.lastFrameTime, this.lastFrameTime = ee
+       disableInteract() {
+         this.iframe.setAttribute("scrolling", "no"), this.iframe.style.pointerEvents = "none"
```

#### 449. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8314-L8315` → after: `L10503-L10504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10503-L10504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10503-L10504) · [Before (L8314-L8315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8314-L8315)

```diff
-       getDeltaTime() {
-         return this.deltaTime
+       resetCache() {
+         this.cache = QO()
```

#### 450. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8317-L8319` → after: `L10506-L10554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10506-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10506-L10554) · [Before (L8317-L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8317-L8319)

```diff
-       createCanvas(ee, ie) {
-         const He = document.createElement("canvas");
-         return He.width = ee, He.height = ie, He
+       setupDom() {
+         this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== t … [truncated]
+           var iW;
+           if (!WW.root.isConnected) throw new Error(Wm);
+           const OW = WW.root.ownerDocument.createElement("iframe");
+           for (const [EW, NW] of Object.entries(WW.iframeAttributes || {})) "sandbox" !== EW && OW.setAttribute(EW, NW);
+           OW.setAttribute("sandbox", "allow-same-origin"), WW.root.appendChild(OW);
+           const mW = OW.contentDocument;
+           if (!mW || !OW.contentWindow) throw null == (iW = OW.parentNode) || iW.removeChild(OW), new Error(Wm);
+           return im.add(mW), OW
+         }({
+           root: this.wrapper
+         }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (oL(this.iframe.contentWindow, this.iframe.contentDocument), bP(this.iframe.contentWindow))
+       }
+       rebuildFullSnapshot(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (33 more added lines; see GitHub link above)
```

#### 451. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8321` → after: `L10556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10556) · [Before (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8321)

```diff
-       Zee(ee, ie) {
+       insertStyleRules(WW, iW) {
```

#### 452. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8323-L8337` → after: `L10558-L10574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10558-L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10558-L10574) · [Before (L8323-L8337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8323-L8337)

```diff
-         return null !== (He = this.resources.Zee.get(ee)) && void 0 !== He ? He : new ki(this.resources, ee, ie)
-       }
-       atlasArrays(ee) {
-         return this.resources.atlasArrays(ee)
-       }
-     }
-     class VF {
-       constructor() {
-         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
-       }
-       copyFromView(ee) {
-         this.fov = ee.fov, this.nearPlane = ee.near, this.farPlane = ee.far;
-         const ie = ee.worldMatrix;
-         for (let He = 0; He < 16; He++)
-           if (this.worldMatrix[He] !== ie[He]) return this.worldMatrix.set(ie), void this.worldMatrixVersion++
+         const mW = (EW = this.config.blockClass, [`.${EW} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
+         var EW;
+         if (this.config.pauseAnimation && mW.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), mW.length)
+           if (this.usingVirtualDom) {
+             const OW = this.virtualDom.createElement("style");
+             this.virtualDom.mirror.add(OW, fN(OW, this.virtualDom.unserializedId)), WW.insertBefore(OW, iW), OW.rules.push({
+               source: oP.StyleSheetRule,
+               adds: mW.map(((WW, iW) => ({
+                 rule: WW,
+                 index: iW
+               })))
+             })
+           } else {
+             const EW = document.createElement("style");
+             WW.insertBefore(EW, iW);
+             for (let WW = 0; WW < mW.length; WW++) null == (OW = EW.sheet) || OW.insertRule(mW[WW], WW)
+ ... (1 more added lines; see GitHub link above)
```

#### 453. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8339-L8353` → after: `L10576-L10606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10576-L10606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10576-L10606) · [Before (L8339-L8353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8339-L8353)

```diff
-     }
-     class aF {
-       constructor(ee, ie, He, ye) {
-         this.canvas = ie, this.options = He, this.Dye = void 0, this.backendName = "WebGPU (Lite)", this.Nee = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new VF, this.lastFrameTime = 0, this.engine = void 0, this.yp = void 0 … [truncated]
-         const {
-           resources: be,
-           meshes: Me
-         } = ee;
-         this.resources = be, this.particles = ee.particles, this.Dye = new YF(ee.engine, ie, ye, ee.device.limits, be), (0, we.D)({
-           lJ: ee => {
-             Ye(ee) && be.textureSlot(ee)
-           },
-           loaded: ee => Ye(ee) ? be.textureLoaded(ee) : null,
-           canvasUpdated: (ee, ie, He) => {
-             Ye(ee) && be.canvasUpdated(ee, ie, He)
+       attachDocumentToIframe(WW, iW) {
+         const OW = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
+           mW = [],
+           EW = new Set,
+           NW = (WW, NW) => {
+             "DIALOG" === WW.nodeName && EW.add(WW), this.collectIframeAndAttachDocument(mW, WW);
+             const PW = OW.getMeta(WW);
+             if ((null == PW ? void 0 : PW.type) === VP.Element && "HTML" === (null == PW ? void 0 : PW.tagName.toUpperCase())) {
+               const {
+                 documentElement: WW,
+                 head: OW
+               } = iW.contentDocument;
+               this.insertStyleRules(WW, OW)
+             }
+             if (!this.usingVirtualDom)
+               for (const iW of this.config.plugins || []) iW.onBuild && iW.onBuild(WW, {
+ ... (15 more added lines; see GitHub link above)
```

#### 454. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8355` → after: `L10608-L10609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10608-L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10608-L10609) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8355)

```diff
-         }), this.Nee = Me.Nee, this.modelMeshes = Me.modelMeshes
+           of mW) this.attachDocumentToIframe(PW, LW), this.newDocumentQueue = this.newDocumentQueue.filter((WW => WW !== PW));
+         EW.forEach((WW => Ec(WW)))
```

#### 455. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8357-L8358` → after: `L10611-L10618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10611-L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10611-L10618) · [Before (L8357-L8358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8357-L8358)

```diff
-       get gpuDevice() {
-         return this.device
+       collectIframeAndAttachDocument(WW, iW) {
+         if (kP(iW, this.mirror)) {
+           const OW = this.newDocumentQueue.find((WW => WW.parentId === this.mirror.getId(iW)));
+           OW && WW.push({
+             mutationInQueue: OW,
+             builtNode: iW
+           })
+         }
```

#### 456. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8360-L8361` → after: `L10620-L10642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10620-L10642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10620-L10642) · [Before (L8360-L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8360-L8361)

```diff
-       get deviceLost() {
-         return this.refusals.deviceLost
+       waitForStylesheetLoad() {
+         var WW;
+         const iW = null == (WW = this.iframe.contentDocument) ? void 0 : WW.head;
+         if (iW) {
+           const WW = new Set;
+           let OW, mW = this.service.state;
+           const EW = () => {
+             mW = this.service.state
+           };
+           this.emitter.on(DP.Start, EW), this.emitter.on(DP.Pause, EW);
+           const NW = () => {
+             this.emitter.off(DP.Start, EW), this.emitter.off(DP.Pause, EW)
+           };
+           iW.querySelectorAll('link[rel="stylesheet"]').forEach((iW => {
+             iW.sheet || (WW.add(iW), iW.addEventListener("load", (() => {
+               WW.delete(iW), 0 === WW.size && -1 !== OW && (mW.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(DP.LoadStylesheetEnd), OW && clearTimeout(OW), NW())
+ ... (7 more added lines; see GitHub link above)
```

#### 457. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8363-L8364` → after: `L10644-L10652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10644-L10652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10644-L10652) · [Before (L8363-L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8363-L8364)

```diff
-       get terrain() {
-         return this.liteTerrain
+       async preloadAllImages() {
+         const WW = [];
+         for (const iW of this.service.state.context.events)
+           if (iW.type === uP.IncrementalSnapshot && iW.data.source === oP.CanvasMutation) {
+             WW.push(this.deserializeAndPreloadCanvasEvents(iW.data, iW));
+             ("commands" in iW.data ? iW.data.commands : [iW.data]).forEach((WW => {
+               this.preloadImages(WW, iW)
+             }))
+           } return Promise.all(WW)
```

#### 458. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8366-L8372` → after: `L10654-L10660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10654-L10660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10654-L10660) · [Before (L8366-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8366-L8372)

```diff
-       install(ee) {
-         this.engine = ee.engine, this.yp = ee.yp, this.sceneTask = ee.sceneTask, this.device = ee.device, this.liteTerrain = ee.terrain, this.meshes = ee.meshes, this.sunShadow = ee.sunShadow;
-         const ie = new Se(ee.device.lost);
-         this.refusals = ie, ie.deviceLost.then((() => {
-           var ie;
-           ie = ee.device, Fi.add(ie)
-         })), ee.yp.camera = this.camera
+       preloadImages(WW, iW) {
+         if ("drawImage" === WW.property && "string" === typeof WW.args[0] && !this.imageMap.has(iW)) {
+           const WW = document.createElement("canvas"),
+             iW = WW.getContext("2d"),
+             OW = null == iW ? void 0 : iW.createImageData(WW.width, WW.height);
+           null == iW || iW.putImageData(OW, 0, 0)
+         }
```

#### 459. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8374-L8381` → after: `L10662-L10685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10662-L10685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10662-L10685) · [Before (L8374-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8374-L8381)

```diff
-       async rebuild() {
-         var ee, ie, He, ye, be;
-         const Me = await CF();
-         this.halted = !0, this.liteTerrain.retire(), null === (ee = this.sunShadow) || void 0 === ee || ee.dispose(), this.Dye.detach();
-         try {
-           (0, me.d)(this.engine)
-         } catch (oe) {
-           console.warn("Lite: disposing the lost device's engine threw", oe)
+       async deserializeAndPreloadCanvasEvents(WW, iW) {
+         if (!this.canvasEventMap.has(iW)) {
+           const OW = {
+             isUnchanged: !0
+           };
+           if ("commands" in WW) {
+             const mW = await Promise.all(WW.commands.map((async WW => {
+               const iW = await Promise.all(WW.args.map(QL(this.imageMap, null, OW)));
+               return {
+                 ...WW,
+                 args: iW
+               }
+             })));
+             !1 === OW.isUnchanged && this.canvasEventMap.set(iW, {
+               ...WW,
+               commands: mW
+ ... (8 more added lines; see GitHub link above)
```

#### 460. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8384-L8385` → after: `L10875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10875) · [Before (L8384-L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8384-L8385)

```diff
-             width: this.Dye.renderWidth,
-             height: this.Dye.renderHeight
+             ...this.legacy_missingNodeRetryMap
```

#### 461. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8387-L8411` → after: `L10877-L10947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10877-L10947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10877-L10947) · [Before (L8387-L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8387-L8411)

```diff
-           Ue = await vF(this.canvas, this.options, Ke, Me),
-           Fe = gi(Ue),
-           Je = uF(Fe);
-         try {
-           this.resources.rebind(Ue, Fe), this.particles.rebind(Fe), this.Nee.dropSteady();
-           const ee = {
-               resources: this.resources,
-               particles: this.particles,
-               Nee: this.Nee,
-               modelMeshes: this.modelMeshes
-             },
-             ie = await mF(Ue, Fe, this.options, ee),
-             He = Je();
-           if (null !== He) throw new Error(`WebGPU device lost while Lite was rebuilding (${He.reason}): ${He.message}`);
-           const {
-             r: ye,
- ... (9 more removed lines; see GitHub link above)
+           EW = [],
+           NW = WW => {
+             var iW, NW;
+             if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
+             let PW = OW.AmW(WW.parentId);
+             if (!PW) return WW.node.type === VP.Document ? this.newDocumentQueue.push(WW) : EW.push(WW);
+             WW.node.isShadow && (KP(PW) || PW.attachShadow({
+               mode: "open"
+             }), PW = PW.shadowRoot);
+             let LW = null,
+               cW = null;
+             if (WW.previousId && (LW = OW.AmW(WW.previousId)), WW.nextId && (cW = OW.AmW(WW.nextId)), (WW => {
+                 let iW = null;
+                 return WW.nextId && (iW = OW.AmW(WW.nextId)), null !== WW.nextId && void 0 !== WW.nextId && -1 !== WW.nextId && !iW
+               })(WW)) return EW.push(WW);
+             if (WW.node.rootId && !OW.AmW(WW.node.rootId)) return;
+ ... (55 more added lines; see GitHub link above)
```

#### 462. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8413-L8418` → after: `L10949-L10959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR10949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L10949-L10959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L10949-L10959) · [Before (L8413-L8418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8413-L8418)

```diff
-       }
-       whenTerrainDrawn() {
-         return new Promise(((ee, ie) => {
-           this.firstTerrain = {
-             drawn: ee,
-             failed: ie
+         Object.keys(mW).length && Object.assign(this.legacy_missingNodeRetryMap, mW), yP(WW.texts).forEach((iW => {
+           var mW;
+           const EW = OW.AmW(iW.id);
+           if (!EW) {
+             if (WW.removes.find((WW => WW.id === iW.id))) return;
+             return this.warnNodeNotFound(WW, iW.id)
+           }
+           const NW = EW.parentElement;
+           if (iW.value && NW && "STYLE" === NW.tagName ? EW.textContent = FO(iW.value, this.cache) : EW.textContent = iW.value, this.usingVirtualDom) {
+             const WW = EW.parentNode;
+             (null == (mW = null == WW ? void 0 : WW.rules) ? void 0 : mW.length) > 0 && (WW.rules = [])
```

#### 463. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8422` → after: `L11021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11021) · [Before (L8422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8422)

```diff
-       get castsEntitySunShadows() {
+       applyScroll(WW, iW) {
```

#### 464. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8424` → after: `L11023-L11042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11023-L11042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11023-L11042) · [Before (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8424)

```diff
-         return null !== (ee = null === (ie = this.sunShadow) || void 0 === ie ? void 0 : ie.tracesEntities) && void 0 !== ee && ee
+         const EW = this.mirror.AmW(WW.id);
+         if (!EW) return this.debugNodeNotFound(WW, WW.id);
+         const NW = this.mirror.getMeta(EW);
+         if (EW === this.iframe.contentDocument) null == (OW = this.iframe.contentWindow) || OW.scrollTo({
+           top: WW.y,
+           left: WW.x,
+           behavior: iW ? "auto" : "smooth"
+         });
+         else if ((null == NW ? void 0 : NW.type) === VP.Document) null == (mW = EW.defaultView) || mW.scrollTo({
+           top: WW.y,
+           left: WW.x,
+           behavior: iW ? "auto" : "smooth"
+         });
+         else try {
+           EW.scrollTo({
+             top: WW.y,
+ ... (4 more added lines; see GitHub link above)
```

#### 465. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8426-L8427` → after: `L11044-L11049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11044-L11049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11044-L11049) · [Before (L8426-L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8426-L8427)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       applyInput(WW) {
+         const iW = this.mirror.AmW(WW.id);
+         if (!iW) return this.debugNodeNotFound(WW, WW.id);
+         try {
+           iW.checked = WW.isChecked, iW.value = WW.text
+         } catch (OW) {}
```

#### 466. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8429-L8434` → after: `L11051-L11077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11051-L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11051-L11077) · [Before (L8429-L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8429-L8434)

```diff
-       attach(ee) {
-         this.PR = ee, this.modelMeshes.attach(ee.model, ee.sceneMirror);
-         const ie = ee.yp;
-         this.setClearColour(ie.clearColor.r, ie.clearColor.g, ie.clearColor.b), ie.draw = () => {
-           this.drawFrame(ee, ie)
-         }
+       applySelection(WW) {
+         try {
+           const iW = new Set,
+             OW = WW.kj.map((WW => {
+               let {
+                 start: OW,
+                 startOffset: mW,
+                 end: EW,
+                 endOffset: NW
+               } = WW;
+               const PW = this.mirror.AmW(OW),
+                 LW = this.mirror.AmW(EW);
+               if (!PW || !LW) return;
+               const cW = new Range;
+               cW.setStart(PW, mW), cW.setEnd(LW, NW);
+               const wW = PW.ownerDocument,
+ ... (11 more added lines; see GitHub link above)
```

#### 467. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8436-L8437` → after: `L11079-L11082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11079-L11082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11079-L11082) · [Before (L8436-L8437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8436-L8437)

```diff
-       get tR() {
-         return !this.refusals.lost && !this.halted
+       applyStyleSheetMutation(WW) {
+         var iW;
+         let OW = null;
+         WW.styleId ? OW = this.styleMirror.getStyle(WW.styleId) : WW.id && (OW = (null == (iW = this.mirror.AmW(WW.id)) ? void 0 : iW.sheet) || null), OW && (WW.source === oP.StyleSheetRule ? this.applyStyleSheetRule(WW, OW) : WW.source === oP.StyleDeclaration && this.applyStyleD … [truncated]
```

#### 468. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8439-L8446` → after: `L11084-L11165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11084-L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11084-L11165) · [Before (L8439-L8446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8439-L8446)

```diff
-       render(ee) {
-         if (this.tR) {
-           try {
-             this.Dye.LO(), ee.yp.render()
-           } catch (ie) {
-             throw this.refusals.frameFailed(ie), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(ie), this.firstTerrain = null), ie
-           }
-           this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
+       applyStyleSheetRule(WW, iW) {
+         var OW, mW, EW, NW;
+         if (null == (OW = WW.adds) || OW.forEach((WW => {
+             let {
+               rule: OW,
+               index: mW
+             } = WW;
+             try {
+               if (Array.isArray(mW)) {
+                 const {
+                   positions: WW,
+                   index: EW
+                 } = YP(mW), NW = SP(iW.cssRules, WW);
+                 null == NW || NW.insertRule(OW, EW)
+               } else {
+                 const WW = void 0 === mW ? void 0 : Math.min(mW, iW.cssRules.length);
+ ... (66 more added lines; see GitHub link above)
```

#### 469. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8449-L8450` → after: `L11202-L11218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11202-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11202-L11218) · [Before (L8449-L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8449-L8450)

```diff
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
+       hoverElements(WW) {
+         var iW;
+         null == (iW = this.lastHoveredRootNode || this.iframe.contentDocument) || iW.querySelectorAll(".\\:hover").forEach((WW => {
+           WW.classList.remove(":hover")
+         })), this.lastHoveredRootNode = WW.getRootNode();
+         let OW = WW;
+         for (; OW;) OW.classList && OW.classList.add(":hover"), OW = OW.parentElement
+       }
+       isUserInteraction(WW) {
+         return WW.type === uP.IncrementalSnapshot && (WW.data.source > oP.Mutation && WW.data.source <= oP.Input)
+       }
+       backToNormal() {
+         this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
+           type: "BACK_TO_NORMAL"
+         }), this.emitter.emit(DP.SkipEnd, {
+           speed: this.speedService.state.context.normalSpeed
+ ... (1 more added lines; see GitHub link above)
```

#### 470. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8452-L8476` → after: `L11220-L11221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11220-L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11220-L11221) · [Before (L8452-L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8452-L8476)

```diff
-       describePendingWork() {
-         var ee, ie, He, ye;
-         const be = [...this.particles.describePendingWork(), ...null !== (ee = null === (ie = this.sunShadow) || void 0 === ie ? void 0 : ie.describePendingWork()) && void 0 !== ee ? ee : []],
-           Me = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (He = this.terrain.sceneDepth) && void 0 !== He && He.compiling ? 1 : 0) + (null !== (ye = this.terrain.shadowMask) && void 0 !== ye && ye.compiling ? 1 : 0);
-         Me > 0 && be.push(`${Me} Lite pipelines compiling`);
-         const Ke = this.terrain.buffersAwaitingVerdict;
-         Ke > 0 && be.push(`${Ke} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const Ue = this.resources.texturesLoading;
-         return Ue > 0 && be.push(`${Ue} Lite textures loading`), be
-       }
-       prepareTexture(ee) {
-         return null !== this.resources.boundTexture(ee) || this.resources.textureFailed(ee)
-       }
-       drawFrame(ee, ie) {
-         var He, ye, be, Me, Ke, Ue;
-         const Fe = zU(ee);
- ... (9 more removed lines; see GitHub link above)
+       warnNodeNotFound(WW, iW) {
+         this.warn(`Node with id '${iW}' not found. `, WW)
```

#### 471. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8478-L8480` → after: `L11223-L11224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11223-L11224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11223-L11224) · [Before (L8478-L8480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8478-L8480)

```diff
-       setClearColour(ee, ie, He) {
-         const ye = this.yp.clearColor;
-         ye.r = ee, ye.g = ie, ye.b = He, ye.a = 1
+       warnCanvasMutationFailed(WW, iW) {
+         this.warn("Has error on canvas update", iW, "canvas mutation:", WW)
```

#### 472. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8482-L8488` → after: `L11226-L11227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11226-L11227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11226-L11227) · [Before (L8482-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8482-L8488)

```diff
-     }
- 
-     function cF(ee) {
-       const ie = {};
-       for (const He in ee.limits) {
-         const ye = ee.limits[He];
-         "number" === typeof ye && (ie[He] = ye)
+       debugNodeNotFound(WW, iW) {
+         this.debug(`Node with id '${iW}' not found. `, WW)
```

#### 473. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8490-L8515` → after: `L11229-L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11229-L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11229-L11232) · [Before (L8490-L8515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8490-L8515)

```diff
-       return ie
-     }
-     const xF = "WebGPU device lost while Lite was starting";
-     async function LF(ee, ie) {
-       const He = await CF(),
-         ye = He.info,
-         be = {
-           vendor: (null === ye || void 0 === ye ? void 0 : ye.vendor) || "unknown vendor",
-           renderer: (null === ye || void 0 === ye ? void 0 : ye.architecture) || "unknown renderer",
-           version: (null === ye || void 0 === ye ? void 0 : ye.description) || "unknown version"
-         };
-       ee.style.background = "black";
-       const Me = await vF(ee, ie, ie.bufferSize, He),
-         Ke = gi(Me),
-         Ue = uF(Ke);
-       try {
- ... (10 more removed lines; see GitHub link above)
+       warn() {
+         if (this.config.showWarning) {
+           for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+           this.config.logger.warn(Lc, ...iW)
```

#### 474. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8521-L8538` → after: `L11235-L11239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11235-L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/301.js#L11235-L11239) · [Before (L8521-L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/301.js#L8521-L8538)

```diff
-     }
-     async function CF() {
-       const ee = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance"
-       });
-       if (!ee) throw (0, HU.e)(new Error("No WebGPU adapter"), "no_adapter");
-       return ee
-     }
-     async function vF(ee, ie, He, ye) {
-       let be;
-       try {
-         be = await (0, ue.f)(ee, {
-           msaaSamples: ie.Ube ? 4 : 1,
-           requiredLimits: cF(ye),
-           alphaMode: "premultiplied"
-         })
- ... (2 more removed lines; see GitHub link above)
+       debug() {
+         if (this.config.showDebug) {
+           for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
+           this.config.logger.log(Lc, ...iW)
+         }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/302.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/302.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a)

#### 1. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/302.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/302.js#L4)

```diff
-   42138: (ee, ie, He) => {
+   42026: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L6` → after: `L7-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L7-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/302.js#L7-L24) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/302.js#L6)

```diff
-       BloxdInformation: () => qe
+       FirebaseError: () => mW.d,
+       SDK_VERSION: () => mW.f,
+       _DEFAULT_ENTRY_NAME: () => mW.j,
+       MmW: () => mW.n,
+       _addOrOverwriteComponent: () => mW.p,
+       _apps: () => mW.r,
+       _clearComponents: () => mW.v,
+       _components: () => mW.x,
+       _getProvider: () => mW.B,
+       _registerComponent: () => mW.E,
+       _removeServiceInstance: () => mW.F,
+       deleteApp: () => mW.J,
+       getApp: () => mW.N,
+       getApps: () => mW.K,
+       initializeApp: () => mW.R,
+       onLog: () => mW.S,
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L8-L152` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/302.js#L26-L27) · [Before (L8-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/302.js#L8-L152)

```diff
-     var ye = He(1127),
-       be = He(59),
-       Me = He(97),
-       Ke = He(1438),
-       Ue = He(125),
-       Fe = He(1323),
-       Je = He(1228);
-     const oe = (0, be.lazy)((() => Promise.all([He.e(137), He.e(702)]).then((() => He(7151))))),
-       Re = (0, be.lazy)((() => He.e(139).then((() => He(7177)))));
- 
-     function ke() {
-       return (0, Je.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, Je.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
- ... (129 more removed lines; see GitHub link above)
+     var mW = OW(42035);
+     (0, mW.V)("firebase", "9.23.0", "app")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/303.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/303.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a)

#### 1. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L4)

```diff
-   42172: (ee, ie, He) => {
+   42041: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L6` → after: `L7-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L7-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L7-L22) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L6)

```diff
-       b: () => Be,
+       $: () => HW,
+       C: () => JW,
+       F: () => uW,
+       G: () => ZW,
+       H: () => tW,
+       I: () => xW,
+       J: () => fW,
+       L: () => AW,
+       O: () => jW,
+       P: () => TW,
+       R: () => kW,
+       U: () => sW,
+       X: () => bW,
+       Y: () => UW,
+       Z: () => nW,
+       bb: () => MW,
```

#### 3. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L8-L13` → after: `L24-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L24-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L24-L30) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L8-L13)

```diff
-       g: () => pe,
-       j: () => Xe,
-       m: () => ke,
-       p: () => Te,
-       s: () => fe,
-       w: () => qe
+       h: () => YW,
+       k: () => SW,
+       l: () => KW,
+       o: () => LW,
+       q: () => PW,
+       u: () => pW,
+       y: () => oW
```

#### 4. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L15-L29` → after: `L32-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L32-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L32-L40) · [Before (L15-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L15-L29)

```diff
-     var ye = He(37917),
-       be = He(38022),
-       Me = He(37938),
-       Ke = He(42174),
-       Ue = He(41323),
-       Fe = He(41137),
-       Je = He(41161),
-       oe = He(41141),
-       Re = He(37949);
-     const ke = Object.freeze(new ye.f(0, 0, 0, 0)),
-       qe = Object.freeze(ye.p.Zero()),
-       fe = Object.freeze(ye.n.Zero()),
-       Te = Object.freeze(Fe.e.Zero()),
-       pe = Object.freeze(be.c.Black()),
-       Xe = Object.freeze(new be.g(0, 0, 0, 0)),
+     const mW = function(WW) {
+         const iW = [];
+         let OW = 0;
+         for (let mW = 0; mW < WW.length; mW++) {
+           let EW = WW.charCodeAt(mW);
+           EW < 128 ? iW[OW++] = EW : EW < 2048 ? (iW[OW++] = EW >> 6 | 192, iW[OW++] = 63 & EW | 128) : 55296 === (64512 & EW) && mW + 1 < WW.length && 56320 === (64512 & WW.charCodeAt(mW + 1)) ? (EW = 65536 + ((1023 & EW) << 10) + (1023 & WW.charCodeAt(++mW)), iW[OW++] = EW >> 1 … [truncated]
+         }
+         return iW
+       },
```

#### 5. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L31-L33` → after: `L42-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L42-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L42-L183) · [Before (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L31-L33)

```diff
-         key: 0,
-         repeatCount: 0,
-         tH: 2
+         byteToCharMap_: null,
+         charToByteMap_: null,
+         byteToCharMapWebSafe_: null,
+         charToByteMapWebSafe_: null,
+         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
+         get ENCODED_VALS() {
+           return this.ENCODED_VALS_BASE + "+/="
+         },
+         get ENCODED_VALS_WEBSAFE() {
+           return this.ENCODED_VALS_BASE + "-_."
+         },
+         HAS_NATIVE_SUPPORT: "function" === typeof atob,
+         encodeByteArray(WW, iW) {
+           if (!Array.isArray(WW)) throw Error("encodeByteArray takes an array as a parameter");
+           this.init_();
+           const OW = iW ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
+ ... (126 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L36-L55` → after: `L186-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L186-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L186-L194) · [Before (L36-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L36-L55)

```diff
-       static _PrepareAnimation(ee, ie, He, Me, Ke, Ue, Je, oe) {
-         let Re;
-         if (!isNaN(parseFloat(Ke)) && isFinite(Ke) ? Re = Be.ANIMATIONTYPE_FLOAT : Ke instanceof ye.f ? Re = Be.ANIMATIONTYPE_QUATERNION : Ke instanceof ye.p ? Re = Be.ANIMATIONTYPE_VECTOR3 : Ke instanceof ye.n ? Re = Be.ANIMATIONTYPE_VECTOR2 : Ke instanceof be.c ? Re = Be.ANIMAT … [truncated]
-         const ke = new Be(ee, ie, He, Re, Je),
-           qe = [{
-             frame: 0,
-             value: Ke
-           }, {
-             frame: Me,
-             value: Ue
-           }];
-         return ke.setKeys(qe), void 0 !== oe && ke.setEasingFunction(oe), ke
-       }
-       get runtimeAnimations() {
-         return this._runtimeAnimations
-       }
- ... (4 more removed lines; see GitHub link above)
+       constructor() {
+         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((WW, iW) => {
+           this.resolve = WW, this.reject = iW
+         }))
+       }
+       wrapCallback(WW) {
+         return (iW, OW) => {
+           iW ? this.reject(iW) : this.resolve(OW), "function" === typeof WW && (this.promise.catch((() => {})), 1 === WW.length ? WW(iW) : WW(iW, OW))
+         }
```

#### 7. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L57-L58` → after: `L196-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L196-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L196-L224) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L57-L58)

```diff
-       constructor(ee, ie, He, ye, be, Me) {
-         this.name = ee, this.targetProperty = ie, this.framePerSecond = He, this.dataType = ye, this.tH = be, this.enableBlending = Me, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._c … [truncated]
+     }
+ 
+     function AW() {
+       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
+     }
+ 
+     function bW() {
+       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(AW())
+     }
+ 
+     function jW() {
+       const WW = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
+       return "object" === typeof WW && void 0 !== WW.id
+     }
+ 
+     function UW() {
+ ... (13 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L60-L63` → after: `L226-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L226-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L226-L230) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L60-L63)

```diff
-       toString(ee) {
-         let ie = "Name: " + this.name + ", property: " + this.targetProperty;
-         if (ie += ", datatype: " + ["Float", "rf", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], ie += ", nKeys: " + (this._keys ? this._keys.length : "none"), ie += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), ee) {
-           ie += ", Ranges: {";
+     }
+ 
+     function MW() {
+       return new Promise(((WW, iW) => {
+         try {
```

#### 9. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L65-L66` → after: `L232-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L232-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L232-L243) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L65-L66)

```diff
-           for (const He in this._ranges) ee || (ie += ", "), ee = !1, ie += He;
-           ie += "}"
+           const mW = "validate-browser-context-for-indexeddb-analytics-module",
+             EW = self.indexedDB.open(mW);
+           EW.onsuccess = () => {
+             EW.result.close(), OW || self.indexedDB.deleteDatabase(mW), WW(!0)
+           }, EW.onupgradeneeded = () => {
+             OW = !1
+           }, EW.onerror = () => {
+             var WW;
+             iW((null === (WW = EW.error) || void 0 === WW ? void 0 : WW.message) || "")
+           }
+         } catch (OW) {
+           iW(OW)
```

#### 10. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L68-L71` → after: `L245-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L245-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L245-L253) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L68-L71)

```diff
-         return ie
-       }
-       addEvent(ee) {
-         this._events.push(ee), this._events.sort(((ee, ie) => ee.frame - ie.frame))
+       }))
+     }
+ 
+     function KW() {
+       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
+     }
+     class SW extends Error {
+       constructor(WW, iW, OW) {
+         super(iW), this.code = WW, this.customData = OW, this.name = "FirebaseError", Object.setPrototypeOf(this, SW.prototype), Error.captureStackTrace && Error.captureStackTrace(this, YW.prototype.create)
```

#### 11. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L73-L74` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L255-L258) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L73-L74)

```diff
-       removeEvents(ee) {
-         for (let ie = 0; ie < this._events.length; ie++) this._events[ie].frame === ee && (this._events.splice(ie, 1), ie--)
+     }
+     class YW {
+       constructor(WW, iW, OW) {
+         this.service = WW, this.serviceName = iW, this.errors = OW
```

#### 12. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L76-L77` → after: `L260-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L260-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L260-L271) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L76-L77)

```diff
-       getEvents() {
-         return this._events
+       create(WW) {
+         const iW = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
+           OW = `${this.service}/${WW}`,
+           mW = this.errors[WW],
+           EW = mW ? function(WW, iW) {
+             return WW.replace(yW, ((WW, OW) => {
+               const mW = iW[OW];
+               return null != mW ? String(mW) : `<${OW}?>`
+             }))
+           }(mW, iW) : "Error",
+           NW = `${this.serviceName}: ${EW} (${OW}).`;
+         return new SW(OW, NW, iW)
```

#### 13. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L79-L80` → after: `L273-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L273-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L273-L292) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L79-L80)

```diff
-       createRange(ee, ie, He) {
-         this._ranges[ee] || (this._ranges[ee] = new Ke.e(ee, ie, He))
+     }
+     const yW = /\{\$([^}]+)}/g;
+ 
+     function TW(WW) {
+       for (const iW in WW)
+         if (Object.prototype.hasOwnProperty.call(WW, iW)) return !1;
+       return !0
+     }
+ 
+     function JW(WW, iW) {
+       if (WW === iW) return !0;
+       const OW = Object.keys(WW),
+         mW = Object.keys(iW);
+       for (const EW of OW) {
+         if (!mW.includes(EW)) return !1;
+         const OW = WW[EW],
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L82-L84` → after: `L294-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L294-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L294-L313) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L82-L84)

```diff
-       deleteRange(ee) {
-         let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const He = this._ranges[ee];
+       for (const EW of mW)
+         if (!OW.includes(EW)) return !1;
+       return !0
+     }
+ 
+     function hW(WW) {
+       return null !== WW && "object" === typeof WW
+     }
+ 
+     function HW(WW) {
+       const iW = [];
+       for (const [OW, mW] of Object.entries(WW)) Array.isArray(mW) ? mW.forEach((WW => {
+         iW.push(encodeURIComponent(OW) + "=" + encodeURIComponent(WW))
+       })) : iW.push(encodeURIComponent(OW) + "=" + encodeURIComponent(mW));
+       return iW.length ? "&" + iW.join("&") : ""
+     }
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L86-L91` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L315-L316) · [Before (L86-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L86-L91)

```diff
-           if (ie) {
-             const ee = He.from,
-               ie = He.to;
-             for (let He = this._keys.length - 1; He >= 0; He--) this._keys[He].frame >= ee && this._keys[He].frame <= ie && this._keys.splice(He, 1)
-           }
-           this._ranges[ee] = null
+           const [OW, mW] = WW.split("=");
+           iW[decodeURIComponent(OW)] = decodeURIComponent(mW)
```

#### 16. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L94-L95` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L340-L343) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L94-L95)

```diff
-       getRange(ee) {
-         return this._ranges[ee]
+       next(WW) {
+         this.forEachObserver((iW => {
+           iW.next(WW)
+         }))
```

#### 17. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L97-L98` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L345-L348) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L97-L98)

```diff
-       getKeys() {
-         return this._keys
+       error(WW) {
+         this.forEachObserver((iW => {
+           iW.error(WW)
+         })), this.close(WW)
```

#### 18. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L100-L103` → after: `L350-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L350-L353) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L100-L103)

```diff
-       getHighestFrame() {
-         let ee = 0;
-         for (let ie = 0, He = this._keys.length; ie < He; ie++) ee < this._keys[ie].frame && (ee = this._keys[ie].frame);
-         return ee
+       complete() {
+         this.forEachObserver((WW => {
+           WW.complete()
+         })), this.close()
```

#### 19. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L105-L106` → after: `L355-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L355-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L355-L373) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L105-L106)

```diff
-       getEasingFunction() {
-         return this._easingFunction
+       subscribe(WW, iW, OW) {
+         let mW;
+         if (void 0 === WW && void 0 === iW && void 0 === OW) throw new Error("Missing Observer.");
+         mW = function(WW, iW) {
+           if ("object" !== typeof WW || null === WW) return !1;
+           for (const OW of iW)
+             if (OW in WW && "function" === typeof WW[OW]) return !0;
+           return !1
+         }(WW, ["next", "error", "complete"]) ? WW : {
+           next: WW,
+           error: iW,
+           complete: OW
+         }, void 0 === mW.next && (mW.next = eW), void 0 === mW.error && (mW.error = eW), void 0 === mW.complete && (mW.complete = eW);
+         const EW = this.unsubscribeOne.bind(this, this.observers.length);
+         return this.finalized && this.task.then((() => {
+           try {
+ ... (3 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L108-L109` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L375-L376) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L108-L109)

```diff
-       setEasingFunction(ee) {
-         this._easingFunction = ee
+       unsubscribeOne(WW) {
+         void 0 !== this.observers && void 0 !== this.observers[WW] && (delete this.observers[WW], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
```

#### 21. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L111-L112` → after: `L378-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L378-L380) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L111-L112)

```diff
-       floatInterpolateFunction(ee, ie, He) {
-         return (0, Me.Lerp)(ee, ie, He)
+       forEachObserver(WW) {
+         if (!this.finalized)
+           for (let iW = 0; iW < this.observers.length; iW++) this.sendOne(iW, WW)
```

#### 22. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L114-L115` → after: `L382-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L382-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L382-L389) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L114-L115)

```diff
-       floatInterpolateFunctionWithTangents(ee, ie, He, ye, be) {
-         return (0, Me.Hermite)(ee, ie, He, ye, be)
+       sendOne(WW, iW) {
+         this.task.then((() => {
+           if (void 0 !== this.observers && void 0 !== this.observers[WW]) try {
+             iW(this.observers[WW])
+           } catch (OW) {
+             "undefined" !== typeof console && console.error && console.error(OW)
+           }
+         }))
```

#### 23. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L117-L118` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L391-L394) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L117-L118)

```diff
-       quaternionInterpolateFunction(ee, ie, He) {
-         return ye.f.Slerp(ee, ie, He)
+       close(WW) {
+         this.finalized || (this.finalized = !0, void 0 !== WW && (this.finalError = WW), this.task.then((() => {
+           this.observers = void 0, this.onNoObservers = void 0
+         })))
```

#### 24. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L120-L121` → after: `L396-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L396-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L396-L468) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L120-L121)

```diff
-       quaternionInterpolateFunctionWithTangents(ee, ie, He, be, Me) {
-         return ye.f.Hermite(ee, ie, He, be, Me).normalize()
+     }
+ 
+     function eW() {}
+     const vW = 1e3,
+       gW = 2,
+       DW = 144e5,
+       VW = .5;
+ 
+     function pW(WW) {
+       let iW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gW;
+       const OW = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vW) * Math.pow(iW, WW),
+         mW = Math.round(VW * OW * (Math.random() - .5) * 2);
+       return Math.min(DW, OW + mW)
+     }
+ 
+     function fW(WW) {
+ ... (57 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L123-L124` → after: `L470-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L470-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L470-L541) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L123-L124)

```diff
-       vector3InterpolateFunction(ee, ie, He) {
-         return ye.p.Lerp(ee, ie, He)
+     }
+ 
+     function bW(WW) {
+       return "function" === typeof WW ? AW(WW) : (WW instanceof IDBTransaction && function(WW) {
+         if (wW.has(WW)) return;
+         const iW = new Promise(((iW, OW) => {
+           const mW = () => {
+               WW.removeEventListener("complete", EW), WW.removeEventListener("error", NW), WW.removeEventListener("abort", NW)
+             },
+             EW = () => {
+               iW(), mW()
+             },
+             NW = () => {
+               OW(WW.error || new DOMException("AbortError", "AbortError")), mW()
+             };
+           WW.addEventListener("complete", EW), WW.addEventListener("error", NW), WW.addEventListener("abort", NW)
+ ... (56 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L126-L127` → after: `L543-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L543-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L543-L553) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L126-L127)

```diff
-       vector3InterpolateFunctionWithTangents(ee, ie, He, be, Me) {
-         return ye.p.Hermite(ee, ie, He, be, Me)
+       getPlatformInfoString() {
+         return this.container.getProviders().map((WW => {
+           if (function(WW) {
+               const iW = WW.getComponent();
+               return "VERSION" === (null === iW || void 0 === iW ? void 0 : iW.type)
+             }(WW)) {
+             const iW = WW.getImmediate();
+             return `${iW.library}/${iW.version}`
+           }
+           return null
+         })).filter((WW => WW)).join(" ")
```

#### 27. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L129-L130` → after: `L555-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L555-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L555-L619) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L129-L130)

```diff
-       vector2InterpolateFunction(ee, ie, He) {
-         return ye.n.Lerp(ee, ie, He)
+     }
+     const YW = "@firebase/app",
+       yW = "0.9.13",
+       TW = new EW.f("@firebase/app"),
+       JW = "@firebase/app-compat",
+       hW = "@firebase/analytics-compat",
+       HW = "@firebase/analytics",
+       nW = "@firebase/app-check-compat",
+       uW = "@firebase/app-check",
+       oW = "@firebase/auth",
+       dW = "@firebase/auth-compat",
+       eW = "@firebase/database",
+       vW = "@firebase/database-compat",
+       gW = "@firebase/functions",
+       DW = "@firebase/functions-compat",
+       VW = "@firebase/installations",
+ ... (49 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L132-L133` → after: `L621-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L621-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L621-L666) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L132-L133)

```diff
-       vector2InterpolateFunctionWithTangents(ee, ie, He, be, Me) {
-         return ye.n.Hermite(ee, ie, He, be, Me)
+     }
+ 
+     function mi(WW, iW) {
+       WW.container.addOrOverwriteComponent(iW)
+     }
+ 
+     function Ei(WW) {
+       const iW = WW.name;
+       if (ii.has(iW)) return TW.debug(`There were multiple attempts to register component ${iW}.`), !1;
+       ii.set(iW, WW);
+       for (const OW of Wi.values()) Oi(OW, WW);
+       return !0
+     }
+ 
+     function Ni(WW, iW) {
+       const OW = WW.container.getProvider("heartbeat").getImmediate({
+ ... (30 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L135-L136` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L668-L669) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L135-L136)

```diff
-       sizeInterpolateFunction(ee, ie, He) {
-         return Fe.e.Lerp(ee, ie, He)
+       get automaticDataCollectionEnabled() {
+         return this.checkDestroyed(), this._automaticDataCollectionEnabled
```

#### 30. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L138-L139` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L671-L672) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L138-L139)

```diff
-       color3InterpolateFunction(ee, ie, He) {
-         return be.c.Lerp(ee, ie, He)
+       set automaticDataCollectionEnabled(WW) {
+         this.checkDestroyed(), this._automaticDataCollectionEnabled = WW
```

#### 31. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L141-L142` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L674-L675) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L141-L142)

```diff
-       color3InterpolateFunctionWithTangents(ee, ie, He, ye, Me) {
-         return be.c.Hermite(ee, ie, He, ye, Me)
+       get name() {
+         return this.checkDestroyed(), this._name
```

#### 32. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L144-L145` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L677-L678) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L144-L145)

```diff
-       color4InterpolateFunction(ee, ie, He) {
-         return be.g.Lerp(ee, ie, He)
+       get options() {
+         return this.checkDestroyed(), this._options
```

#### 33. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L147-L148` → after: `L680-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L680-L681) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L147-L148)

```diff
-       color4InterpolateFunctionWithTangents(ee, ie, He, ye, Me) {
-         return be.g.Hermite(ee, ie, He, ye, Me)
+       get config() {
+         return this.checkDestroyed(), this._config
```

#### 34. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L150-L151` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L683-L684) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L150-L151)

```diff
-       _getKeyValue(ee) {
-         return "function" === typeof ee ? ee() : ee
+       get container() {
+         return this._container
```

#### 35. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L153-L154` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L686-L687) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L153-L154)

```diff
-       evaluate(ee) {
-         return ze.key = 0, this._interpolate(ee, ze)
+       get isDeleted() {
+         return this._isDeleted
```

#### 36. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L156-L354` → after: `L689-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L689-L690) · [Before (L156-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L156-L354)

```diff
-       _interpolate(ee, ie) {
-         let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (ie.tH === Be.ANIMATIONLOOPMODE_CONSTANT && ie.repeatCount > 0) return ie.highLimitValue.clone ? ie.highLimitValue.clone() : ie.highLimitValue;
-         const ye = this._keys;
-         let be;
-         if (this._coreAnimation) be = this._coreAnimation._key;
-         else {
-           const Me = ye.length;
-           for (be = ie.key; be >= 0 && ee < ye[be].frame;) --be;
-           for (; be + 1 <= Me - 1 && ee >= ye[be + 1].frame;) ++be;
-           if (ie.key = be, be < 0) return He ? void 0 : this._getKeyValue(ye[0].value);
-           if (be + 1 > Me - 1) return He ? void 0 : this._getKeyValue(ye[Me - 1].value);
-           this._key = be
-         }
-         const Me = ye[be],
-           Ke = ye[be + 1];
- ... (183 more removed lines; see GitHub link above)
+       set isDeleted(WW) {
+         this._isDeleted = WW
```

#### 37. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L356-L358` → after: `L692-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L692-L695) · [Before (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L356-L358)

```diff
-       static _UniversalLerp(ee, ie, He) {
-         const ye = ee.constructor;
-         return ye.Lerp ? ye.Lerp(ee, ie, He) : ye.Slerp ? ye.Slerp(ee, ie, He) : ee.toFixed ? ee * (1 - He) + He * ie : ie
+       checkDestroyed() {
+         if (this.isDeleted) throw wi.create("app-deleted", {
+           appName: this._name
+         })
```

#### 38. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L362-L378` → after: `L700-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L700-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L700-L703) · [Before (L362-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L362-L378)

```diff
-     function Ee(ee, ie, He) {
-       let be;
-       be = "object" === typeof ie ? ie : {
-         referenceFrame: ie ?? 0,
-         range: He,
-         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
-       };
-       let Me = ee;
-       be.cloneOriginalAnimation && (Me = ee.clone(), Me.name = be.clonedAnimationName || Me.name);
-       const Ke = Me.getKeys();
-       if (!Ke.length) return Me;
-       const Ue = be.referenceFrame && be.referenceFrame >= 0 ? be.referenceFrame : 0;
-       let Fe = 0;
-       const Je = Ke[0];
-       let oe = Ke.length - 1;
- ... (1 more removed lines; see GitHub link above)
+     function xi(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         OW = WW;
+       if ("object" !== typeof iW) {
```

#### 39. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L380-L440` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L705) · [Before (L380-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L380-L440)

```diff
-           referenceValue: Je.value,
-           referencePosition: ye.j.rf[0],
-           referenceQuaternion: ye.j.Quaternion[0],
-           referenceScaling: ye.j.rf[1],
-           keyPosition: ye.j.rf[2],
-           keyQuaternion: ye.j.Quaternion[1],
-           keyScaling: ye.j.rf[3]
-         };
-       let qe = Je.frame,
-         fe = Re.frame;
-       if (be.range) {
-         const ee = Me.getRange(be.range);
-         ee && (qe = ee.from, fe = ee.to)
-       } else qe = be.fromFrame ?? qe, fe = be.toFrame ?? fe;
-       qe !== Je.frame && (Fe = Me.createKeyForFrame(qe)), fe !== Re.frame && (oe = Me.createKeyForFrame(fe));
-       const Te = Me.getKeys();
- ... (45 more removed lines; see GitHub link above)
+           name: iW
```

#### 40. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L443` → after: `L708-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L708-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L708-L727) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L443)

```diff
-       return Xe && Me.setKeys(Xe, !0), Me
+       const EW = Object.assign({
+           name: FW,
+           automaticDataCollectionEnabled: !1
+         }, iW),
+         PW = EW.name;
+       if ("string" !== typeof PW || !PW) throw wi.create("bad-app-name", {
+         appName: String(PW)
+       });
+       if (OW || (OW = (0, NW.G)()), !OW) throw wi.create("no-options");
+       const LW = Wi.get(PW);
+       if (LW) {
+         if ((0, NW.C)(OW, LW.options) && (0, NW.C)(EW, LW.config)) return LW;
+         throw wi.create("duplicate-app", {
+           appName: PW
+         })
+       }
+ ... (4 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L446-L448` → after: `L730-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L730-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L730-L737) · [Before (L446-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L446-L448)

```diff
-     function ge(ee, ie, He, ye) {
-       const be = new Be(ee + "Animation", ee, He, ie, Be.ANIMATIONLOOPMODE_CONSTANT);
-       return be.setEasingFunction(ye), be
+     function li() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FW;
+       const iW = Wi.get(WW);
+       if (!iW && WW === FW && (0, NW.G)()) return xi();
+       if (!iW) throw wi.create("no-app", {
+         appName: WW
+       });
+       return iW
```

#### 42. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L451-L453` → after: `L740-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L740-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L740-L745) · [Before (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L451-L453)

```diff
-     function Oe(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
-       const Re = Be._PrepareAnimation(ee, He, ye, be, Me, Ke, Ue, Fe);
-       return Re ? (ie.Xx && (oe = ie.Xx()), oe ? oe.beginDirectAnimation(ie, [Re], 0, be, Re.tH !== Be.ANIMATIONLOOPMODE_CONSTANT, 1, Je) : null) : null
+     function Ai() {
+       return Array.from(Wi.values())
+     }
+     async function bi(WW) {
+       const iW = WW.name;
+       Wi.has(iW) && (Wi.delete(iW), await Promise.all(WW.container.getProviders().map((WW => WW.delete()))), WW.isDeleted = !0)
```

#### 43. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L456-L459` → after: `L748-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L748-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L748-L761) · [Before (L456-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L456-L459)

```diff
-     function de(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
-       const Re = Be._PrepareAnimation(ee, ye, be, Me, Ke, Ue, Fe, Je);
-       if (!Re) return null;
-       return ie.Xx().beginDirectHierarchyAnimation(ie, He, [Re], 0, Me, 1 === Re.tH, 1, oe)
+     function ji(WW, iW, OW) {
+       var EW;
+       let NW = null !== (EW = QW[WW]) && void 0 !== EW ? EW : WW;
+       OW && (NW += `-${OW}`);
+       const PW = NW.match(/\s|\//),
+         LW = iW.match(/\s|\//);
+       if (PW || LW) {
+         const WW = [`Unable to register library "${NW}" with version "${iW}":`];
+         return PW && WW.push(`library name "${NW}" contains illegal characters (whitespace or "/")`), PW && LW && WW.push("and"), LW && WW.push(`version name "${iW}" contains illegal characters (whitespace or "/")`), void TW.warn(WW.join(" "))
+       }
+       Ei(new mW.h(`${NW}-version`, (() => ({
+         library: NW,
+         version: iW
+       })), "VERSION"))
```

#### 44. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L462-L464` → after: `L764-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L764-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L764-L766) · [Before (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L462-L464)

```diff
-     function We(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
-       const oe = Be._PrepareAnimation(ee, He, ye, be, Me, Ke, Ue, Fe);
-       return oe ? (ie.animations.push(oe), ie.Xx().beginAnimation(ie, 0, be, 1 === oe.tH, 1, Je)) : null
+     function Ui(WW, iW) {
+       if (null !== WW && "function" !== typeof WW) throw wi.create("invalid-log-argument");
+       (0, EW.m)(WW, iW)
```

#### 45. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L467-L480` → after: `L769-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L769-L770) · [Before (L467-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L467-L480)

```diff
-     function te(ee, ie, He, ye, be, Me, Ke) {
-       let Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-         Fe = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-         Je = arguments.length > 9 ? arguments[9] : void 0;
-       if (Ke <= 0) return He[ee] = ie, Ue && Ue(), null;
-       const oe = be * (Ke / 1e3);
-       Me.setKeys(Je ?? [{
-         frame: 0,
-         value: He[ee].clone ? He[ee].clone() : He[ee]
-       }, {
-         frame: oe,
-         value: ie
-       }]), He.animations || (He.animations = []), He.animations.push(Me);
-       return ye.beginAnimation(He, 0, oe, !1, 1, Ue ?? void 0, void 0, Fe)
+     function ki(WW) {
+       (0, EW.i)(WW)
```

#### 46. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L483-L484` → after: `L775-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L775-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L775-L813) · [Before (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L483-L484)

```diff
-     function Ze(ee, ie) {
-       oe.c.AppendSerializedAnimations(ee, ie)
+     function Ki() {
+       return Mi || (Mi = function(WW, iW) {
+         let {
+           blocked: OW,
+           upgrade: mW,
+           blocking: EW,
+           terminated: NW
+         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         const PW = indexedDB.open(WW, iW),
+           LW = jW(PW);
+         return mW && PW.addEventListener("upgradeneeded", (WW => {
+           mW(jW(PW.result), WW.oldVersion, WW.newVersion, jW(PW.transaction), WW)
+         })), OW && PW.addEventListener("blocked", (WW => OW(WW.oldVersion, WW.newVersion, WW))), LW.then((WW => {
+           NW && WW.addEventListener("close", (() => NW())), EW && WW.addEventListener("versionchange", (WW => EW(WW.oldVersion, WW.newVersion, WW)))
+         })).catch((() => {})), LW
+       }("firebase-heartbeat-database", 1, {
+ ... (23 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L488-L502` → after: `L817-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L817-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L817-L860) · [Before (L488-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L488-L502)

```diff
-       const ie = new Be(ee.name, ee.property, ee.framePerSecond, ee.dataType, ee.loopBehavior),
-         He = ee.dataType,
-         Me = [];
-       let Ke, Ue;
-       for (ee.enableBlending && (ie.enableBlending = ee.enableBlending), ee.blendingSpeed && (ie.blendingSpeed = ee.blendingSpeed), Ue = 0; Ue < ee.keys.length; Ue++) {
-         const ie = ee.keys[Ue];
-         let Fe, Je, oe;
-         switch (He) {
-           case Be.ANIMATIONTYPE_FLOAT:
-             Ke = ie.values[0], ie.values.length >= 2 && (Fe = ie.values[1]), ie.values.length >= 3 && (Je = ie.values[2]), ie.values.length >= 4 && (oe = ie.values[3]);
-             break;
-           case Be.ANIMATIONTYPE_QUATERNION:
-             if (Ke = ye.f.FromArray(ie.values), ie.values.length >= 8) {
-               const ee = ye.f.FromArray(ie.values.slice(4, 8));
-               ee.equals(ye.f.Zero()) || (Fe = ee)
+       return `${WW.name}!${WW.options.appId}`
+     }
+     class yi {
+       constructor(WW) {
+         this.container = WW, this._heartbeatsCache = null;
+         const iW = this.container.getProvider("app").getImmediate();
+         this.Tb = new Ji(iW), this._heartbeatsCachePromise = this.Tb.read().then((WW => (this._heartbeatsCache = WW, WW)))
+       }
+       async triggerHeartbeat() {
+         const WW = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
+           iW = Ti();
+         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== iW && !this._heartbeatsCache.heartbeats.some((WW => WW.date === iW))) return this._heartbeatsCache.heartbeats.push({
+           date: iW,
+           agent: WW
+         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((WW => {
+           const iW = new Date(WW.date).valueOf();
+ ... (28 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L504-L506` → after: `L862-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L862-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L862-L864) · [Before (L504-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L504-L506)

```diff
-             if (ie.values.length >= 12) {
-               const ee = ye.f.FromArray(ie.values.slice(8, 12));
-               ee.equals(ye.f.Zero()) || (Je = ee)
+             return {
+               heartbeatsToSend: OW,
+               unsentEntries: mW
```

#### 49. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L508-L524` → after: `L866-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L866-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L866-L871) · [Before (L508-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L508-L524)

```diff
-             ie.values.length >= 13 && (oe = ie.values[12]);
-             break;
-           case Be.ANIMATIONTYPE_MATRIX:
-             Ke = ye.b.FromArray(ie.values), ie.values.length >= 17 && (oe = ie.values[16]);
-             break;
-           case Be.ANIMATIONTYPE_COLOR3:
-             Ke = be.c.FromArray(ie.values), ie.values[3] && (Fe = be.c.FromArray(ie.values[3])), ie.values[4] && (Je = be.c.FromArray(ie.values[4])), ie.values[5] && (oe = ie.values[5]);
-             break;
-           case Be.ANIMATIONTYPE_COLOR4:
-             Ke = be.g.FromArray(ie.values), ie.values[4] && (Fe = be.g.FromArray(ie.values[4])), ie.values[5] && (Je = be.g.FromArray(ie.values[5])), ie.values[6] && (oe = ie.values[6]);
-             break;
-           case Be.ANIMATIONTYPE_VECTOR3:
-           default:
-             Ke = ye.p.FromArray(ie.values), ie.values[3] && (Fe = ye.p.FromArray(ie.values[3])), ie.values[4] && (Je = ye.p.FromArray(ie.values[4])), ie.values[5] && (oe = ie.values[5])
-         }
-         const Re = {};
- ... (1 more removed lines; see GitHub link above)
+           }(this._heartbeatsCache.heartbeats),
+           mW = (0, NW.q)(JSON.stringify({
+             version: 2,
+             heartbeats: iW
+           }));
+         return this._heartbeatsCache.lastSentHeartbeatDate = WW, OW.length > 0 ? (this._heartbeatsCache.heartbeats = OW, await this.Tb.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.Tb.overwrite(this._heartbeatsCache)), mW
```

#### 50. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L530-L547` → after: `L874-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L874-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L874-L876) · [Before (L530-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L530-L547)

```diff
-     async function De(ee, ie) {
-       return await new Promise(((He, ye) => {
-         const be = new Je.c;
-         be.addEventListener("readystatechange", (() => {
-           if (4 == be.readyState)
-             if (200 == be.status) {
-               let ie = JSON.parse(be.responseText);
-               if (ie.animations && (ie = ie.animations), ie.length) {
-                 const ee = [];
-                 for (const He of ie) ee.push(we(He));
-                 He(ee)
-               } else {
-                 const ye = we(ie);
-                 ee && (ye.name = ee), He(ye)
-               }
-             } else ye("Unable to load the animation")
- ... (2 more removed lines; see GitHub link above)
+ 
+     function Ti() {
+       return (new Date).toISOString().substring(0, 10)
```

#### 51. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L549-L567` → after: `L878-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L878-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L878-L897) · [Before (L549-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L549-L567)

```diff
-     async function Pe(ee) {
-       const ie = this?.SnippetUrl ?? Be.SnippetUrl;
-       return await new Promise(((He, ye) => {
-         const be = new Je.c;
-         be.addEventListener("readystatechange", (() => {
-           if (4 == be.readyState)
-             if (200 == be.status) {
-               const ie = JSON.parse(JSON.parse(be.responseText).jsonPayload);
-               if (ie.animations) {
-                 const ye = JSON.parse(ie.animations),
-                   be = [];
-                 for (const ie of ye.animations) {
-                   const He = we(ie);
-                   He.snippetId = ee, be.push(He)
-                 }
-                 He(be)
- ... (3 more removed lines; see GitHub link above)
+     class Ji {
+       constructor(WW) {
+         this.app = WW, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
+       }
+       async runIndexedDBEnvironmentCheck() {
+         return !!(0, NW.U)() && (0, NW.bb)().then((() => !0)).catch((() => !1))
+       }
+       async read() {
+         if (await this._canUseIndexedDBPromise) {
+           return await async function(WW) {
+             try {
+               const iW = await Ki();
+               return await iW.transaction(si).objectStore(si).get(Yi(WW))
+             } catch (iW) {
+               if (iW instanceof NW.k) TW.warn(iW.message);
+               else {
+ ... (4 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L569-L571` → after: `L899-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L899-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L899-L927) · [Before (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L569-L571)

```diff
-             } else ye("Unable to load the snippet " + ee)
-         })), be.open("GET", ie + "/" + ee.replace(/#/g, "/")), be.send()
-       }))
+             }
+           }(this.app) || {
+             heartbeats: []
+           }
+         }
+         return {
+           heartbeats: []
+         }
+       }
+       async overwrite(WW) {
+         var iW;
+         if (await this._canUseIndexedDBPromise) {
+           const OW = await this.read();
+           return Si(this.app, {
+             lastSentHeartbeatDate: null !== (iW = WW.lastSentHeartbeatDate) && void 0 !== iW ? iW : OW.lastSentHeartbeatDate,
+             heartbeats: WW.heartbeats
+ ... (13 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L577-L578` → after: `L930-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L930-L934) · [Before (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L577-L578)

```diff
-     function Ve() {
-       Ye || (Ye = !0, Be.Parse = we, Be.ParseFromFileAsync = De, Be.ParseFromSnippetAsync = Pe, Be.CreateFromSnippetAsync = Ae, Be.CreateAnimation = ge, Be.CreateAndStartAnimation = Oe, Be.CreateAndStartHierarchyAnimation = de, Be.CreateMergeAndStartAnimation = We, Be.MakeAnimati … [truncated]
+     function Hi(WW) {
+       return (0, NW.q)(JSON.stringify({
+         version: 2,
+         heartbeats: WW
+       })).length
```

#### 54. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L581` → after: `L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L939) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L581)

```diff
-   42174: (ee, ie, He) => {
+   42038: (WW, iW, OW) => {
```

#### 55. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L583` → after: `L941-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L941-L942) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L583)

```diff
-       e: () => ye
+       e: () => LW,
+       h: () => EW
```

#### 56. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L587` → after: `L947-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L947-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L947-L950) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L587)

```diff
-         this.name = ee, this.from = ie, this.to = He
+         this.name = WW, this.instanceFactory = iW, this.type = OW, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
+       }
+       setInstantiationMode(WW) {
+         return this.instantiationMode = WW, this
```

#### 57. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L589-L590` → after: `L952-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L952-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L952-L1114) · [Before (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L589-L590)

```diff
-       clone() {
-         return new ye(this.name, this.from, this.to)
+       setMultipleInstances(WW) {
+         return this.multipleInstances = WW, this
+       }
+       setServiceProps(WW) {
+         return this.serviceProps = WW, this
+       }
+       setInstanceCreatedCallback(WW) {
+         return this.onInstanceCreated = WW, this
+       }
+     }
+     const NW = "[DEFAULT]";
+     class PW {
+       constructor(WW, iW) {
+         this.name = WW, this.container = iW, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
+       }
+       get(WW) {
+ ... (147 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L594-L623` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L1118) · [Before (L594-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L594-L623)

```diff
-   42233: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => ye.b,
-       f: () => ye.h
-     });
-     var ye = He(41247);
-     (0, ye.c)()
-   },
-   42217: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => ye.e
-     });
-     var ye = He(41593);
-     (0, ye.c)()
-   },
-   42193: (ee, ie, He) => {
- ... (14 more removed lines; see GitHub link above)
+   42043: (WW, iW, OW) => {
```

#### 59. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L625` → after: `L1120-L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L1120-L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L1120-L1123) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L625)

```diff
-       b: () => ye.d
+       b: () => EW,
+       f: () => wW,
+       i: () => tW,
+       m: () => ZW
```

#### 60. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L627-L628` → after: `L1125-L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L1125-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/303.js#L1125-L1233) · [Before (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/303.js#L627-L628)

```diff
-     var ye = He(41559);
-     (0, ye.c)()
+     const mW = [];
+     var EW;
+     ! function(WW) {
+       WW[WW.DEBUG = 0] = "DEBUG", WW[WW.VERBOSE = 1] = "VERBOSE", WW[WW.INFO = 2] = "INFO", WW[WW.WARN = 3] = "WARN", WW[WW.ERROR = 4] = "ERROR", WW[WW.SILENT = 5] = "SILENT"
+     }(EW || (EW = {}));
+     const NW = {
+         debug: EW.DEBUG,
+         verbose: EW.VERBOSE,
+         info: EW.INFO,
+         warn: EW.WARN,
+         error: EW.ERROR,
+         silent: EW.SILENT
+       },
+       PW = EW.INFO,
+       LW = {
+         [EW.DEBUG]: "log",
+ ... (93 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/304.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/304.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc)

#### 1. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L4-L5` → after: `L5-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L5-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/304.js#L5-L1039) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/304.js#L4-L5)

```diff
-   42863: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABbCAYAAACI0FBrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANGSURBVHic7ZwxixNBFMdnJQRCmkCCjYVXHFoIciJoYWWX0m8hYpfCD2FhJ+K3ECu/gIWCRIQUkS1OxEbuYJvj4JqzMCEhmZ15M29297/Z/6+ay+7O7O1/33v7HjOTGQ8P3 … [truncated]
+   42045: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       getAnalytics: () => ai,
+       getGoogleAnalyticsClientId: () => Qi,
+       initializeAnalytics: () => ri,
+       isSupported: () => zi,
+       logEvent: () => EO,
+       setAnalyticsCollectionEnabled: () => OO,
+       setConsent: () => NO,
+       setCurrentScreen: () => Fi,
+       setDefaultEventParameters: () => mO,
+       setUserId: () => WO,
+       setUserProperties: () => iO,
+       settings: () => Gi
+     });
+     var mW = OW(42035),
+ ... (1019 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/305.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/305.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e)

#### 1. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L4-L9` → after: `L5-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L5-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/305.js#L5-L4026) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/305.js#L4-L9)

```diff
-   42869: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALqSURBVFiF3Ze/T1NRFMc/73lb01IKija1TUv5MTgYojEsCungREiYnBxYHHUwLpLwBxhno4thYXDRyWCYHAiwSAyJMUQSWh4lLaQCJrVpoS3U4fU929De+2JNIH6X+3LuP … [truncated]
-   }
- };
- Object.freeze(modules);
- for (const ee in modules) Object.freeze(modules[ee]);
+     42048: (WW, iW, OW) => {
+         OW.r(iW), OW.d(iW, {
+           ActionCodeOperation: () => xW,
+           ActionCodeURL: () => Qi,
+           AuthCredential: () => fi,
+           AuthErrorCodes: () => UW,
+           EmailAuthCredential: () => Ii,
+           EmailAuthProvider: () => iO,
+           FacebookAuthProvider: () => NO,
+           FactorId: () => cW,
+           GithubAuthProvider: () => LO,
+           GoogleAuthProvider: () => PO,
+           OAuthCredential: () => ri,
+           OAuthProvider: () => EO,
+           OperationType: () => ZW,
+           PhoneAuthCredential: () => Fi,
+ ... (4006 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/306.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/306.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2)

#### 1. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L4-L5` → after: `L4-L1384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L4-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/306.js#L4-L1384) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/306.js#L4-L5)

```diff
-   42873: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   42094: (WW, iW, OW) => {
+     OW.d(iW, {
+       $d: () => Ii,
+       Ac: () => kW,
+       Ad: () => AW,
+       Ae: () => rO,
+       Af: () => FO,
+       Bb: () => pW,
+       Be: () => IO,
+       Bf: () => pO,
+       D: () => Ri,
+       Dc: () => sW,
+       Dd: () => LO,
+       De: () => vO,
+       Eb: () => EO,
+       Ef: () => fO,
+ ... (1365 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/307.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/307.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a)

#### 1. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4-L5` → after: `L4-L8695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L4-L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/307.js#L4-L8695) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/307.js#L4-L5)

```diff
-   42878: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAdSURBVAiZYzi+peH/rLqY/z+/3v/PAGMc39LwHwDpAxJzISLv6wAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.33843,0.44812,0.5765,0.33843, … [truncated]
+   53776: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => jW,
+       g: () => LW,
+       h: () => PW,
+       i: () => wW
+     });
+     var mW = OW(38369),
+       EW = OW(39938),
+       NW = OW(39931);
+ 
+     function PW(WW, iW, OW, mW) {
+       const EW = NW.A;
+       iW.fill(0), WW.gravity.toArray(iW, EW.gravity), WW.colorDead.toArray(iW, EW.colorDead), OW[EW.ramp] = WW.useRampGradients ? 1 : 0;
+       const PW = WW.getColorGradients(),
+         LW = xW(WW, PW, "colour", mW);
+ ... (8676 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/308.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/308.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e)

#### 1. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L4-L5` → after: `L4-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/308.js#L4-L152) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/308.js#L4-L5)

```diff
-   42885: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   42541: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       BloxdInformation: () => lW
+     });
+     var mW = OW(1172),
+       EW = OW(62),
+       NW = OW(100),
+       PW = OW(1532),
+       LW = OW(136),
+       cW = OW(1391),
+       wW = OW(1283);
+     const tW = (0, EW.lazy)((() => Promise.all([OW.e(146), OW.e(711)]).then((() => OW(7519))))),
+       ZW = (0, EW.lazy)((() => OW.e(148).then((() => OW(7541)))));
+ 
+     function xW() {
+       return (0, wW.jsxs)("div", {
+ ... (133 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/309.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/309.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868)

#### 1. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L4-L5` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/309.js#L4-L25) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/309.js#L4-L5)

```diff
-   42891: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZYzy+peH/80evGQAbSQWwz2X/bgAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.7723,1,0.0765,0.7723,1,0.0765,0.7723,1,0.0765 … [truncated]
+   42551: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       blankPhotoCode: () => cW,
+       reportBlankPhoto: () => wW
+     });
+     var mW = OW(1888),
+       EW = OW(1301),
+       NW = OW(100),
+       PW = OW(274),
+       LW = OW(5096);
+ 
+     function cW(WW, iW, OW, mW, EW) {
+       return `${WW}-${iW}-${null===OW?"noloss":OW>=mW?"loss_photo":`loss_${(0,LW.h)(mW-OW)}`}-${EW}`
+     }
+ 
+     function wW(WW, iW, OW, LW) {
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/310.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/310.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d)

#### 1. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L4-L5` → after: `L4-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L4-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/310.js#L4-L297) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/310.js#L4-L5)

```diff
-   42894: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZYzi+peH/rLqY/z+/3v8PADf5CTq4b563AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
+   42563: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       openMobLineupPreview: () => GW,
+       openMobPreview: () => RW,
+       openPetPreview: () => IW
+     });
+     var mW = OW(41359),
+       EW = OW(41604),
+       NW = OW(42569),
+       PW = OW(38369),
+       LW = OW(38235),
+       cW = OW(41760),
+       wW = OW(42588),
+       tW = OW(39661),
+       ZW = OW(38328),
+       xW = OW(38307),
+ ... (278 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/311.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/311.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab)

#### 1. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/311.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/311.js#L4-L5)

```diff
-   42899: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAD6CAYAAAD3EYqJAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAgJSURBVHic7Z0xjFVFFIbnkWlkI5FFQaKVmphgtLHaxM5ELbSQECmko0GzlYkNRguMNCRWRGjslkJDsMACrE22spFopVYmBBQwmMXyWeA859135s2ZO2fn/ve88zXsfe/e2 … [truncated]
+   42580: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => sW,
+       g: () => dW,
+       i: () => jW,
+       l: () => UW,
+       o: () => xW,
+       r: () => bW,
+       v: () => AW,
+       y: () => lW
+     });
+     var mW = OW(38241),
+       EW = OW(38372),
+       NW = OW(38285),
+       PW = OW(42586),
+       LW = OW(41732),
+ ... (609 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/312.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/312.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986)

#### 1. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/312.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/312.js#L4-L5)

```diff
-   42903: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABYCAYAAABrqdC6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAWNSURBVHic7Z29axxHGMbflfd0WCccnMQyLpIU0fVpgsAEGUNMIBi5UboETCBN/gA3KUKKNCZ1mkCiwqUL48LY4BAwcSEMxr3sInFhkHDkKHcS573TpLDmtDs378w7H7s7c … [truncated]
+   43291: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABbCAYAAACI0FBrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANGSURBVHic7ZwxixNBFMdnJQRCmkCCjYVXHFoIciJoYWWX0m8hYpfCD2FhJ+K3ECu/gIWCRIQUkS1OxEbuYJvj4JqzMCEhmZ15M29297/Z/6+ay+7O7O1/33v7HjOTGQ8P3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/313.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/313.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333)

#### 1. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/313.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/313.js#L4-L5)

```diff
-   42911: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAqCAYAAADMKGkhAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGXSURBVFiF7ZixTsMwEIb/IAsV1AWJB+ncmWfohjqyVB06MHZgZGCoWBgRW5+hM3OfA5C6VKVCldKhXHQCx47PlmNTvqm1c4r963z3x8XD82sJAZNhv7h/WpQAoDrnxmd32 … [truncated]
+   43295: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALqSURBVFiF3Ze/T1NRFMc/73lb01IKija1TUv5MTgYojEsCungREiYnBxYHHUwLpLwBxhno4thYXDRyWCYHAiwSAyJMUQSWh4lLaQCJrVpoS3U4fU929De+2JNIH6X+3LuP … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/314.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/314.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65)

#### 1. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/314.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/314.js#L4-L5)

```diff
-   42917: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVGiB7Zi9SsRAFIVPTNgF/wrFP0RtbAVhG30CC99kwcbaMm8g+CYp8gY2gmBroxa6xW7hH+ziEpsMZMYwE5OBGYbzdUnuzc6dM5ebPRE6srG5WwDAfP4DAJiMR5Euf … [truncated]
+   43304: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/315.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/315.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b)

#### 1. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/315.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/315.js#L4-L5)

```diff
-   42921: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYA2NjdAOfn5ABBQT8A33Ua4vPiZVMAAAAAS … [truncated]
+   43312: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAdSURBVAiZYzi+peH/rLqY/z+/3v/PAGMc39LwHwDpAxJzISLv6wAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.33843,0.44812,0.5765,0.33843, … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/316.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/316.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064)

#### 1. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/316.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/316.js#L4-L5)

```diff
-   42924: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZYxQSFv/PzcPLIC5exgAADicCBfqQrQEAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.46559 … [truncated]
+   43318: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/317.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/317.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9)

#### 1. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/317.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/317.js#L4-L5)

```diff
-   42932: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5SVV/nPwMDA8PjhHUYJSbn/DAwMDEwMWAAAq/oFUma3L30AAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43323: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZYzy+peH/80evGQAbSQWwz2X/bgAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.7723,1,0.0765,0.7723,1,0.0765,0.7723,1,0.0765 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/318.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/318.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c)

#### 1. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/318.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/318.js#L4-L5)

```diff
-   42939: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAACCAYAAABxAQMMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHkSURBVCiR7dLPS1MBAMDx79xmrb23ue1t0+XItTWcK3JF9ENpVgSV6aG6WIegCKyMRpFJy0N2sJnNojqsslZpiESypQghUYcuwkBKokKyeE3JyG0VCelc147d6/svfD+Kq … [truncated]
+   43329: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZYzi+peH/rLqY/z+/3v8PADf5CTq4b563AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/319.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/319.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9)

#### 1. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/319.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/319.js#L4-L5)

```diff
-   42943: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoilb9zwAFdUtvM6Lz1bUM4XwGBgaGm9fOMwoJi6OIvXv7kpGJgYqAhYGBgUFZFNVMdP7PH9+JMoz6LiMEHty7wYgu9u7tSwwxogzDFgHY1FHfm1++f … [truncated]
+   43336: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAD6CAYAAAD3EYqJAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAgJSURBVHic7Z0xjFVFFIbnkWlkI5FFQaKVmphgtLHaxM5ELbSQECmko0GzlYkNRguMNCRWRGjslkJDsMACrE22spFopVYmBBQwmMXyWeA859135s2ZO2fn/ve88zXsfe/e2 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/320.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/320.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d)

#### 1. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/320.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/320.js#L4-L5)

```diff
-   42946: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGJSURBVGiB7ZixTsNADIZ/R6YLdGmHToiFpwCeoRJPWinPADwFCzBAhmRpu7TDMdBUJ4FQ7vxfsVA+qUpPah3bv89nnSyX9wEG6nols/nCZKNrG4oNfXh8stig0bWNWG3o+ … [truncated]
+   43341: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABYCAYAAABrqdC6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAWNSURBVHic7Z29axxHGMbflfd0WCccnMQyLpIU0fVpgsAEGUNMIBi5UboETCBN/gA3KUKKNCZ1mkCiwqUL48LY4BAwcSEMxr3sInFhkHDkKHcS573TpLDmtDs378w7H7s7c … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/321.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/321.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49)

#### 1. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/321.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/321.js#L4-L5)

```diff
-   42951: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGRSURBVGiB7Zg/S8QwGMbfXMsVDunm5seQEw5uExRcBNHByek+gpOjn0IQnFzEP4vogZsgePSbuBUR7vCsgyk0sZe0TSAhPL8t6Zumb56+JHkYGTIcXRZERD/fSyIiymYTp … [truncated]
+   43343: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAqCAYAAADMKGkhAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGXSURBVFiF7ZixTsMwEIb/IAsV1AWJB+ncmWfohjqyVB06MHZgZGCoWBgRW5+hM3OfA5C6VKVCldKhXHQCx47PlmNTvqm1c4r963z3x8XD82sJAZNhv7h/WpQAoDrnxmd32 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/322.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/322.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c)

#### 1. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/322.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/322.js#L4-L5)

```diff
-   42957: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA5SURBVAiZY1jfH/rfymnFf9eoff//////nwEHYEEX2NwT+P/lm58MYoqsDIuXnmGo6FjNIK+mxgAAtuUU1Ys7U8AAAAAASUVORK5CYII=","alphaCutoff":0,"vertic … [truncated]
+   43350: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVGiB7Zi9SsRAFIVPTNgF/wrFP0RtbAVhG30CC99kwcbaMm8g+CYp8gY2gmBroxa6xW7hH+ziEpsMZMYwE5OBGYbzdUnuzc6dM5ebPRE6srG5WwDAfP4DAJiMR5Euf … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/323.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/323.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3)

#### 1. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/323.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/323.js#L4-L5)

```diff
-   42966: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY5SVV/kvLl7GwMbHw8D8bwEDAB57A8ZQ9iKrAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43355: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYA2NjdAOfn5ABBQT8A33Ua4vPiZVMAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/324.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/324.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2)

#### 1. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/324.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/324.js#L4-L5)

```diff
-   42973: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY7RyWfafgYGB4dieKEYTs1n/GRgYGJgYsAAAxYYGBwfNrmYAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43360: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZYxQSFv/PzcPLIC5exgAADicCBfqQrQEAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.46559 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/325.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/325.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5)

#### 1. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/325.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/325.js#L4-L5)

```diff
-   42976: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVAiZY5w8f8F/STExBi0NTYZNB84yEAOWTHzM8P3DFoY/8VUMmQrvGdbMfMdw5lQaI7IaxsfPnv/n5uRk4OHmYpBRVmGobWpioIZFAFNaJQbN7skBAAAAAElFTkSuQ … [truncated]
+   43363: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5SVV/nPwMDA8PjhHUYJSbn/DAwMDEwMWAAAq/oFUma3L30AAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/326.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/326.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a)

#### 1. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/326.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/326.js#L4-L5)

```diff
-   42984: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVDiNY2RgYGDoSnH7zwAFZXN2MaLznXx3wvkMDAwM+za7M5qYzUIRO3MqjZGJgYqAhYGBgUGa5yGKIDr/948vRBlGfZcRAod3BzOii505lYYhRpRh2CIAmzrqe/PL1 … [truncated]
+   43372: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAACCAYAAABxAQMMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHkSURBVCiR7dLPS1MBAMDx79xmrb23ue1t0+XItTWcK3JF9ENpVgSV6aG6WIegCKyMRpFJy0N2sJnNojqsslZpiESypQghUYcuwkBKokKyeE3JyG0VCelc147d6/svfD+Kq … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/327.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/327.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042)

#### 1. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/327.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/327.js#L4-L5)

```diff
-   42990: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZhBSsNQEIb/iUPdiAfwGi1duHbZE7hyFfFEYg/gCVy6EwRDeg0PULoxIM9NIw/tIsn/pw6SD8rrg3Yy8/6ZyfDs9u4pgeDhfmWL5ZqyUVelxIZvNu+MDRl1V … [truncated]
+   43379: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoilb9zwAFdUtvM6Lz1bUM4XwGBgaGm9fOMwoJi6OIvXv7kpGJgYqAhYGBgUFZFNVMdP7PH9+JMoz6LiMEHty7wYgu9u7tSwwxogzDFgHY1FHfm1++f … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/328.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/328.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81)

#### 1. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/328.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/328.js#L4-L5)

```diff
-   42999: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY5xT4fVfWJybAQAPmAKUQohcYQAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.10007,0.03268,-0.0935,0.10007,0.03268,-0.0935 … [truncated]
+   43386: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGJSURBVGiB7ZixTsNADIZ/R6YLdGmHToiFpwCeoRJPWinPADwFCzBAhmRpu7TDMdBUJ4FQ7vxfsVA+qUpPah3bv89nnSyX9wEG6nols/nCZKNrG4oNfXh8stig0bWNWG3o+ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/329.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/329.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab)

#### 1. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/329.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/329.js#L4-L5)

```diff
-   43002: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAYAAABRGGN6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANRSURBVHic7Zo9iNRAFMcTGXKXs7ERK4u9K5btLIQFQRFEOFAOtLq1sLGyu8pGUA47Kzt7G63shAUbPeFk4Qq75YrTWmwOzr11pzkLmZhMJjMvM5PsS/J+VT5eZib/vLz3Z … [truncated]
+   43392: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGRSURBVGiB7Zg/S8QwGMbfXMsVDunm5seQEw5uExRcBNHByek+gpOjn0IQnFzEP4vogZsgePSbuBUR7vCsgyk0sZe0TSAhPL8t6Zumb56+JHkYGTIcXRZERD/fSyIiymYTp … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/330.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/330.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2)

#### 1. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/330.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/330.js#L4-L5)

```diff
-   43007: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA0CAYAAAD19ArKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJsSURBVGiB7Zi/a9tAHMWfjDg3jimtIWRwF8eDcdpuBUOgWUIgkD3UwXTv1j/A2AQ8hw7ZOrWUOv9Ag5csDQQCgQxJMBkSL81gupiYtI1ocYdaqnSS7nS+6MeBPyDQyae7x … [truncated]
+   43396: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA5SURBVAiZY1jfH/rfymnFf9eoff//////nwEHYEEX2NwT+P/lm58MYoqsDIuXnmGo6FjNIK+mxgAAtuUU1Ys7U8AAAAAASUVORK5CYII=","alphaCutoff":0,"vertic … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/331.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/331.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430)

#### 1. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/331.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/331.js#L4-L5)

```diff
-   43012: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADRSURBVFiF7ZU/CwIxDMVT6aJ+S3Fz80AQTg7xQBDOzU38gCI4qaM3tdwfqOZJazjymzrkweMlTUy5P72JQb5eGESTZQVLU1VbM+IIUmPvtysREY0n02Dh6/nwb0SDIDo5N … [truncated]
+   43400: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY5SVV/kvLl7GwMbHw8D8bwEDAB57A8ZQ9iKrAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/332.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/332.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1)

#### 1. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/332.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/332.js#L4-L5)

```diff
-   43020: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZY3x268h/QVFZhonrTjMAACyMBdKWCLAlAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[1,0.53165,0.3176,1,0.53165,0.3176,1,0.53165 … [truncated]
+   43403: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY7RyWfafgYGB4dieKEYTs1n/GRgYGJgYsAAAxYYGBwfNrmYAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/333.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/333.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613)

#### 1. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/333.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/333.js#L4-L5)

```diff
-   43029: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zg/TsMwFMafm5BKiPQCLCwIUXENBFInTsKA1AkmmNh6ETp1qHqNCili4QwNQmraEIY6Upykzh9bsmV9v83xe0mevzzZ+Rgp8nR/nRER7dM/IiKarSImi3+8v … [truncated]
+   43410: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVAiZY5w8f8F/STExBi0NTYZNB84yEAOWTHzM8P3DFoY/8VUMmQrvGdbMfMdw5lQaI7IaxsfPnv/n5uRk4OHmYpBRVmGobWpioIZFAFNaJQbN7skBAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/334.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/334.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069)

#### 1. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/334.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/334.js#L4-L5)

```diff
-   43036: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYARBDqAO3u+ADPAh4A0oEZ4lM0BcsAAAAAS … [truncated]
+   43419: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVDiNY2RgYGDoSnH7zwAFZXN2MaLznXx3wvkMDAwM+za7M5qYzUIRO3MqjZGJgYqAhYGBgUGa5yGKIDr/948vRBlGfZcRAod3BzOii505lYYhRpRh2CIAmzrqe/PL1 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/335.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/335.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6)

#### 1. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/335.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/335.js#L4-L5)

```diff
-   43042: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY/zTqvi/+AAbAx8PKwOfdQQDADbJBJwakkKMAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43425: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZhBSsNQEIb/iUPdiAfwGi1duHbZE7hyFfFEYg/gCVy6EwRDeg0PULoxIM9NIw/tIsn/pw6SD8rrg3Yy8/6ZyfDs9u4pgeDhfmWL5ZqyUVelxIZvNu+MDRl1V … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/336.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/336.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028)

#### 1. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/336.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/336.js#L4-L5)

```diff
-   43045: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY6wN1PnPwMDA0Lz+CmO+q/p/BgYGBiYGLAAAwGgF3kpJcUoAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43429: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY5xT4fVfWJybAQAPmAKUQohcYQAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.10007,0.03268,-0.0935,0.10007,0.03268,-0.0935 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/337.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/337.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557)

#### 1. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/337.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/337.js#L4-L5)

```diff
-   43053: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAACCAYAAABWr4LkAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGvSURBVCiR7dHPS1MBAMDx73ObNffe5nNvG1uONMdwrsiKkJg0M4R+qIc6rQ5BEFQYCdEPWl70YJNcRXmYJK1SEZHGliKIiF6FgdgQi0hhTClR3yoK0rWuHbsGff6Fj/Dke … [truncated]
+   43432: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAYAAABRGGN6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANRSURBVHic7Zo9iNRAFMcTGXKXs7ERK4u9K5btLIQFQRFEOFAOtLq1sLGyu8pGUA47Kzt7G63shAUbPeFk4Qq75YrTWmwOzr11pzkLmZhMJjMvM5PsS/J+VT5eZib/vLz3Z … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/338.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/338.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07)

#### 1. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/338.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/338.js#L4-L5)

```diff
-   43057: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAChSURBVDiNY2RgYGCYla7xnwEK0mbeYETnd0UawPkMDAwMZcsvMOa7qqOITdx9k5GJgYqAhYGBgYGbE8USDP63n3+JMoz6LiMEGtZdZkQXm7j7JoYYUYZhiwBs6qjvzS9fv … [truncated]
+   43435: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA0CAYAAAD19ArKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJsSURBVGiB7Zi/a9tAHMWfjDg3jimtIWRwF8eDcdpuBUOgWUIgkD3UwXTv1j/A2AQ8hw7ZOrWUOv9Ag5csDQQCgQxJMBkSL81gupiYtI1ocYdaqnSS7nS+6MeBPyDQyae7x … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/339.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/339.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2)

#### 1. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/339.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/339.js#L4-L5)

```diff
-   43063: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGISURBVGiB7ZgxSgNREIb/WUZtgqcQ0gh23iAH8AAeQdLYWtmJzeIRPICV1d7ALiDCQk4R0mjAZ5OVh6bY3f/fOMh+EF4eJLMz75+ZHZ49XF8mEFzdP9p8NqVslFUtseHLx … [truncated]
+   43438: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADRSURBVFiF7ZU/CwIxDMVT6aJ+S3Fz80AQTg7xQBDOzU38gCI4qaM3tdwfqOZJazjymzrkweMlTUy5P72JQb5eGESTZQVLU1VbM+IIUmPvtysREY0n02Dh6/nwb0SDIDo5N … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/340.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/340.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f)

#### 1. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/340.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/340.js#L4-L5)

```diff
-   43070: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACcCAYAAAAXtcvFAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAr4SURBVHic7Z1NaBxHFsffSKPRSLbQYGGjEKS9yCxe2EOCIbAisN6czB7MkiwsOfpkCKwWLyw55JiDCayIA2ZzynEJ+0HIYfEp60BwIBDwwQctSJeVCQjbWSZMLM306GMPU … [truncated]
+   43440: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZY3x268h/QVFZhonrTjMAACyMBdKWCLAlAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[1,0.53165,0.3176,1,0.53165,0.3176,1,0.53165 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/341.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/341.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450)

#### 1. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/341.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/341.js#L4-L5)

```diff
-   43072: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAGACAYAAADLU767AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABD7SURBVHic7Z1BiFzHEUBrnBaJRA5aKexFyATpYF2CDgoiNj44hOxNl70IiVyC8CEYg8GwwaBDEJiBBYPBCJ1ELlZgCOSimxfhnBITrFMSmD1ICOlmJI2Iwm7CbqQcdmvo6 … [truncated]
+   43443: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zg/TsMwFMafm5BKiPQCLCwIUXENBFInTsKA1AkmmNh6ETp1qHqNCili4QwNQmraEIY6Upykzh9bsmV9v83xe0mevzzZ+Rgp8nR/nRER7dM/IiKarSImi3+8v … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/342.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/342.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2)

#### 1. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/342.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/342.js#L4-L5)

```diff
-   43074: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAARFSURBVHic7Z3PT9RAFMdfYV1+JIsQEjTiDyKERFGJIdEYYvwHxCM3PZmoiQeNf4DGGzHePBjjiZtc9eLBgxpiOBBClBhXIEhcoyawwIrAqqmH7iztbNtpt9Ppa/s+l5122 … [truncated]
+   43449: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYARBDqAO3u+ADPAh4A0oEZ4lM0BcsAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/343.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/343.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2)

#### 1. `bundles/bloxd.io/chunks/js/343.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/343.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/343.js#L4-L5)

```diff
-   43077: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABQCAYAAAD4K0AmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALYSURBVHic7du9btswFAXg64IGnHZIhgJpmq0emvRnaTe/R5+hz5S5Y9Y8gzu1HfoTZXA2xynQoSmQxIANqIPB2lYliyJpiUc83xLHIS0GJ1ciKaUjll6+ep3a9BuenoiIi … [truncated]
+   43453: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY/zTqvi/+AAbAx8PKwOfdQQDADbJBJwakkKMAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/344.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/344.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5)

#### 1. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/344.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/344.js#L4-L5)

```diff
-   43084: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAzSURBVAiZY7BVFfpvb2//X1OU53+gieR/BgYGBiYmKV0Goa+3GE5NlWB48/Eng6Yoz38ADtwN2A2YEbIAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.3 … [truncated]
+   43455: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY6wN1PnPwMDA0Lz+CmO+q/p/BgYGBiYGLAAAwGgF3kpJcUoAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/345.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/345.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89)

#### 1. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/345.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/345.js#L4-L5)

```diff
-   43090: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   43458: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAACCAYAAABWr4LkAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGvSURBVCiR7dHPS1MBAMDx73ObNffe5nNvG1uONMdwrsiKkJg0M4R+qIc6rQ5BEFQYCdEPWl70YJNcRXmYJK1SEZHGliKIiF6FgdgQi0hhTClR3yoK0rWuHbsGff6Fj/Dke … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/346.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/346.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a)

#### 1. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/346.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/346.js#L4-L5)

```diff
-   43093: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfovws/OUJ36jAEAFFIDZYkSkDYAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.1171,0.50665,-0.3483,0.1171,0.50665,-0.34 … [truncated]
+   43460: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAChSURBVDiNY2RgYGCYla7xnwEK0mbeYETnd0UawPkMDAwMZcsvMOa7qqOITdx9k5GJgYqAhYGBgYGbE8USDP63n3+JMoz6LiMEGtZdZkQXm7j7JoYYUYZhiwBs6qjvzS9fv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/347.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/347.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373)

#### 1. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/347.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/347.js#L4-L5)

```diff
-   43096: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfr/5sMvBg15XgYAIxsEnz/wS4IAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
+   43464: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGISURBVGiB7ZgxSgNREIb/WUZtgqcQ0gh23iAH8AAeQdLYWtmJzeIRPICV1d7ALiDCQk4R0mjAZ5OVh6bY3f/fOMh+EF4eJLMz75+ZHZ49XF8mEFzdP9p8NqVslFUtseHLx … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/348.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/348.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25)

#### 1. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/348.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/348.js#L4-L5)

```diff
-   43098: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAvSURBVAiZY3h5YPf/C3Pn/v/w+PF/Bihg/PD48X8BWVmGW6tWMfCLCTI8v/uIAQDQfhMsC1+8ywAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.61541 … [truncated]
+   43469: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACcCAYAAAAXtcvFAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAr4SURBVHic7Z1NaBxHFsffSKPRSLbQYGGjEKS9yCxe2EOCIbAisN6czB7MkiwsOfpkCKwWLyw55JiDCayIA2ZzynEJ+0HIYfEp60BwIBDwwQctSJeVCQjbWSZMLM306GMPU … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/349.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/349.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1)

#### 1. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/349.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/349.js#L4-L5)

```diff
-   43102: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   43477: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAGACAYAAADLU767AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABD7SURBVHic7Z1BiFzHEUBrnBaJRA5aKexFyATpYF2CDgoiNj44hOxNl70IiVyC8CEYg8GwwaBDEJiBBYPBCJ1ELlZgCOSimxfhnBITrFMSmD1ICOlmJI2Iwm7CbqQcdmvo6 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/350.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/350.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea)

#### 1. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/350.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/350.js#L4-L5)

```diff
-   43105: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY7w8f/5/MUUZBgAUqwNl1ncXcwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.70912,1,0,0.70912,1,0,0.70912,1,0,0.79277,0.9 … [truncated]
+   43486: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAARFSURBVHic7Z3PT9RAFMdfYV1+JIsQEjTiDyKERFGJIdEYYvwHxCM3PZmoiQeNf4DGGzHePBjjiZtc9eLBgxpiOBBClBhXIEhcoyawwIrAqqmH7iztbNtpt9Ppa/s+l5122 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/351.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/351.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df)

#### 1. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/351.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/351.js#L4-L5)

```diff
-   43111: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY7i1atX/5xcv/mdgYPj/8sDu/wBgKgsY6yMuIAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.9375,0.50631,0.361,0.9375,0.50631 … [truncated]
+   43488: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABQCAYAAAD4K0AmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALYSURBVHic7du9btswFAXg64IGnHZIhgJpmq0emvRnaTe/R5+hz5S5Y9Y8gzu1HfoTZXA2xynQoSmQxIANqIPB2lYliyJpiUc83xLHIS0GJ1ciKaUjll6+ep3a9BuenoiIi … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/352.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/352.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130)

#### 1. `bundles/bloxd.io/chunks/js/352.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/352.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/352.js#L4-L5)

```diff
-   43116: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
+   43492: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAzSURBVAiZY7BVFfpvb2//X1OU53+gieR/BgYGBiYmKV0Goa+3GE5NlWB48/Eng6Yoz38ADtwN2A2YEbIAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/353.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/353.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3)

#### 1. `bundles/bloxd.io/chunks/js/353.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/353.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/353.js#L4-L5)

```diff
-   43125: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVCiRY2CgK2BE5hjVmvz/9/UfAxM3E8O55jOMGIpgCmAAXSEKMCgy+o8uxkSMm4hSRD0wZIOAKEUAGl0ftSoKsxQAAAAASUVORK5CYII=","alphaCutoff":0.050 … [truncated]
+   43494: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/354.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/354.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248)

#### 1. `bundles/bloxd.io/chunks/js/354.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/354.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/354.js#L4-L5)

```diff
-   43134: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB2SURBVCiRtZAxDsAgDANNVj6DEC9jZ+rel1Won2FNOoEghYqlt0RKbNkKAMCnID4FQcdr56KXr2m0mwuDLCEf13Brgt6t4weqqIeW6l9EwO6fKvo/0ziyBBe9kB1bmOokS … [truncated]
+   43497: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfovws/OUJ36jAEAFFIDZYkSkDYAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.1171,0.50665,-0.3483,0.1171,0.50665,-0.34 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/355.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/355.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de)

#### 1. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/355.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/355.js#L4-L5)

```diff
-   43138: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
+   43503: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfr/5sMvBg15XgYAIxsEnz/wS4IAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/356.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/356.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9)

#### 1. `bundles/bloxd.io/chunks/js/356.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/356.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/356.js#L4-L5)

```diff
-   43147: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
+   43511: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAvSURBVAiZY3h5YPf/C3Pn/v/w+PF/Bihg/PD48X8BWVmGW6tWMfCLCTI8v/uIAQDQfhMsC1+8ywAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.61541 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/357.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/357.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b)

#### 1. `bundles/bloxd.io/chunks/js/357.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/357.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/357.js#L4-L5)

```diff
-   43155: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
+   43513: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/358.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/358.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786)

#### 1. `bundles/bloxd.io/chunks/js/358.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/358.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/358.js#L4-L5)

```diff
-   43160: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABrCAYAAAD+ZTVwAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAT+SURBVHic7Zw/iBVHHMd/m6ze5faKiF0gBznUJojYSERISJAcoga1D6lsU4igTVKYJo2NqeRKwTJIjMiFEDhFBJsgQqqgIIeFIF5xu3on3rPYN8/d2T8zszszv9+8/X3g8 … [truncated]
+   43520: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY7w8f/5/MUUZBgAUqwNl1ncXcwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.70912,1,0,0.70912,1,0,0.70912,1,0,0.79277,0.9 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/359.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/359.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa)

#### 1. `bundles/bloxd.io/chunks/js/359.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/359.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/359.js#L4-L5)

```diff
-   43163: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEjSURBVFiFY9w0Iek/AwnAr2Ae49lLt3DqMdZTYyTHTCZSNCCDm3cekKsVK2CBMb58/YFXIQ83BwpfXUUBp1q/gnmMZDuEFKChitsRDAwMDLCoM9ZTY9w/N+M/AwMDw+fPv … [truncated]
+   43524: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY7i1atX/5xcv/mdgYPj/8sDu/wBgKgsY6yMuIAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.9375,0.50631,0.361,0.9375,0.50631 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/360.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/360.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99)

#### 1. `bundles/bloxd.io/chunks/js/360.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/360.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/360.js#L4-L5)

```diff
-   43167: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG3SURBVGiB7dixTsJAGAfw+0jjZCQNEVYjL4Abq2Fy8A1kcyMObjpoJF3YXOgTsDmy8Ai4yeDiUBYnNQZ9gnOitsfZa88vgr3/b6N3/eBPr98VSGhc3L/K5OvLUT81Xg1D0 … [truncated]
+   43533: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/361.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/361.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4)

#### 1. `bundles/bloxd.io/chunks/js/361.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/361.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/361.js#L4-L5)

```diff
-   43169: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
+   43535: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVCiRY2CgK2BE5hjVmvz/9/UfAxM3E8O55jOMGIpgCmAAXSEKMCgy+o8uxkSMm4hSRD0wZIOAKEUAGl0ftSoKsxQAAAAASUVORK5CYII=","alphaCutoff":0.050 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/362.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/362.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46)

#### 1. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/362.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/362.js#L4-L5)

```diff
-   43176: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAqCAYAAABGB/BgAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD4SURBVFiF7ZYxDoJAEEXfqpUFBQfgBsbCg1h4GwsLC09CZ4zxGBYWhhtwAAsTqTRY4CBunMJARjH8hsxfwuezf5ZxKNjcdjnAIT8CMHFjALaXGIDzKQUgCCMA4mDttGf1t … [truncated]
+   43538: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB2SURBVCiRtZAxDsAgDANNVj6DEC9jZ+rel1Won2FNOoEghYqlt0RKbNkKAMCnID4FQcdr56KXr2m0mwuDLCEf13Brgt6t4weqqIeW6l9EwO6fKvo/0ziyBBe9kB1bmOokS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/363.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/363.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a)

#### 1. `bundles/bloxd.io/chunks/js/363.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/363.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/363.js#L4-L5)

```diff
-   43179: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zi9SgQxFIVv1lFRwUJQ8V3sV/E93MLGKRQWLAdshBXBYn0IrRadVux8EJEFC0HF37HJwN7sbDIzCSSE83XJ3JvMzZmQzBFkycbZRUFEVHz/EhHRuJ8KXfz66 … [truncated]
+   43542: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/364.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/364.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e)

#### 1. `bundles/bloxd.io/chunks/js/364.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/364.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/364.js#L4-L5)

```diff
-   43181: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAx1NSAPri6wA/y8MA1sEa4oTj3EEAAAAAS … [truncated]
+   43546: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/365.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/365.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999)

#### 1. `bundles/bloxd.io/chunks/js/365.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/365.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/365.js#L4-L5)

```diff
-   43186: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY4wvV/i/TSCfgUWImyFEto4BACzPBDzVKZ6iAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43555: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/366.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/366.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c)

#### 1. `bundles/bloxd.io/chunks/js/366.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/366.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/366.js#L4-L5)

```diff
-   43190: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5ScOes/AwMDw/P0NEbR9v7/DAwMDEwMWAAAyvYGLkl26sMAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43560: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABrCAYAAAD+ZTVwAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAT+SURBVHic7Zw/iBVHHMd/m6ze5faKiF0gBznUJojYSERISJAcoga1D6lsU4igTVKYJo2NqeRKwTJIjMiFEDhFBJsgQqqgIIeFIF5xu3on3rPYN8/d2T8zszszv9+8/X3g8 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/367.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/367.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4)

#### 1. `bundles/bloxd.io/chunks/js/367.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/367.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/367.js#L4-L5)

```diff
-   43196: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAACCAYAAADyxTo3AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEuSURBVCiR7dBNK8MBAIDx579mzMbe/pumLdOWvB3cJ0Y5eD24jYNSCq24oNQuLkzZiMvKMqG0ZG2tVtrBWa0WUiQOa4QwL6UYc3VRPoDnGzw/YXktmDcaDNRW1xDdT/KXN … [truncated]
+   43565: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEjSURBVFiFY9w0Iek/AwnAr2Ae49lLt3DqMdZTYyTHTCZSNCCDm3cekKsVK2CBMb58/YFXIQ83BwpfXUUBp1q/gnmMZDuEFKChitsRDAwMDLCoM9ZTY9w/N+M/AwMDw+fPv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/368.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/368.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64)

#### 1. `bundles/bloxd.io/chunks/js/368.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/368.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/368.js#L4-L5)

```diff
-   43198: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoqnD+zwAFdR17GdH50suWw/kMDAwMT6MiGUXb+1HEXlcWMjIxUBGwMDAwMCj/eIIiiM7/9/U7UYZR32WEwPPUJEZ0sdeVhRhiRBmGLQKwqaO+N798/ … [truncated]
+   43572: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG3SURBVGiB7dixTsJAGAfw+0jjZCQNEVYjL4Abq2Fy8A1kcyMObjpoJF3YXOgTsDmy8Ai4yeDiUBYnNQZ9gnOitsfZa88vgr3/b6N3/eBPr98VSGhc3L/K5OvLUT81Xg1D0 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/369.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/369.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c)

#### 1. `bundles/bloxd.io/chunks/js/369.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/369.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/369.js#L4-L5)

```diff
-   43201: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZixSgNBEIb/OcZC7IQUgvgivoSNlb0WNl55T5AytfZWNnkJX0QEkYN0wcLgWpiTRVPk7v83DnIfhM1CMjez/8zcsHZ2/5BAML84t8l0Rtlom1piwx+fnhkbM … [truncated]
+   43576: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/370.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/370.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4)

#### 1. `bundles/bloxd.io/chunks/js/370.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/370.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/370.js#L4-L5)

```diff
-   43207: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABMSURBVBiVY3QIZf/f6pvDgA6s43oZmTBEkQDLgdU/GT/YffqPLOidO5uRgYGBgYWBgYFBgJ8Pq068xuK3k4GBgeHDx0+4JXHZiRcAADlyDh3q8hR1AAAAAElFTkSuQmCC" … [truncated]
+   43580: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAqCAYAAABGB/BgAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD4SURBVFiF7ZYxDoJAEEXfqpUFBQfgBsbCg1h4GwsLC09CZ4zxGBYWhhtwAAsTqTRY4CBunMJARjH8hsxfwuezf5ZxKNjcdjnAIT8CMHFjALaXGIDzKQUgCCMA4mDttGf1t … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/371.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/371.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2)

#### 1. `bundles/bloxd.io/chunks/js/371.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/371.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/371.js#L4-L5)

```diff
-   43214: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABfSURBVBiVYwzKkvnPgAbevX7NwMDAwNDqm8PAwsvLgiL5+fMfFD4LugBM94HVPxk/2H36z4RuPDIQ4OdjwKuAgYEB0w3vXqMpQHfDgdU/GWHsDx8/4bdCgJ+PkAsYGAA3k … [truncated]
+   43582: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zi9SgQxFIVv1lFRwUJQ8V3sV/E93MLGKRQWLAdshBXBYn0IrRadVux8EJEFC0HF37HJwN7sbDIzCSSE83XJ3JvMzZmQzBFkycbZRUFEVHz/EhHRuJ8KXfz66 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/372.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/372.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f)

#### 1. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/372.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/372.js#L4-L5)

```diff
-   43219: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH0SURBVEiJzVQxiNRAFH0jKbYRDQjCapmBRVmLS5FKBiFXWITbZkGwTSPYbW21rXZXpt0qzcqVN3AM2qTwilvuWIilLiwIWdlmu2/hTpxNsu54pPA1yc//w38v//1hPFXUD … [truncated]
+   43591: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAx1NSAPri6wA/y8MA1sEa4oTj3EEAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/373.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/373.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef)

#### 1. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/373.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/373.js#L4-L5)

```diff
-   43222: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAYAAAAMwoR9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAwSURBVAiZASUA2v8A/wCZ/x+Rpf//ADP//wAA/8z////l/fP/P+/J/yWrwf/M/zP/t8EZO2UdOzkAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.14287 … [truncated]
+   43596: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY4wvV/i/TSCfgUWImyFEto4BACzPBDzVKZ6iAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/374.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/374.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f)

#### 1. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/374.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/374.js#L4-L5)

```diff
-   43225: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAElSURBVFiFY2SgEOisP/wfn/yVQFtGepjJRKolgxWMemSwAZaBdgADAwOD0tTtKHni27MvJKm/l+3JOBoj1ARcUjwUmzFsYoTR++PZ/wwMDAyz+dRRJFI/3UTh00p+K78xy … [truncated]
+   43602: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5ScOes/AwMDw/P0NEbR9v7/DAwMDEwMWAAAyvYGLkl26sMAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/375.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/375.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7)

#### 1. `bundles/bloxd.io/chunks/js/375.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/375.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/375.js#L4-L5)

```diff
-   43227: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIQSURBVGiB7ZgxS8NAFMffSZKCgp/CwcHJwUUHJyMoitWhKIibg5uDk2NnJx3ERQSlg61YWjWC0sXVydFPUVBoUoiDPchdc3dJ7mhDeL/tkutd3/vf5d79CWhSWV8Oo+1aq … [truncated]
+   43606: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAACCAYAAADyxTo3AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEuSURBVCiR7dBNK8MBAIDx579mzMbe/pumLdOWvB3cJ0Y5eD24jYNSCq24oNQuLkzZiMvKMqG0ZG2tVtrBWa0WUiQOa4QwL6UYc3VRPoDnGzw/YXktmDcaDNRW1xDdT/KXN … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/376.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/376.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514)

#### 1. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/376.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/376.js#L4-L5)

```diff
-   43233: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPWSURBVFiF3ZdbaBxlFIC/TWazk73imDQslazUEmgDqVECsSEPgkEQKfrQIl5AWSo2pn2xt9gmkiamaWy9NAEjkjSUIDFRlAh98TG0DyoI4oulxiRGI9ZOdrM7k393NqwP6 … [truncated]
+   43611: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoqnD+zwAFdR17GdH50suWw/kMDAwMT6MiGUXb+1HEXlcWMjIxUBGwMDAwMCj/eIIiiM7/9/U7UYZR32WEwPPUJEZ0sdeVhRhiRBmGLQKwqaO+N798/ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/377.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/377.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4)

#### 1. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/377.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/377.js#L4-L5)

```diff
-   43242: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA4CAYAAABQZsDpAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANySURBVGiB3Vm/ixNREJ7Vl8idtlaKhYU2AbFI5X9wcCBYCWdznCJaWAQhYHGkOBBF8BoRUZsE0gpC/gOrCBKwkCvsrGz1DpM9ziKZ9e28eTsvu7NJ3K/Jj/dr9n3fzHszG … [truncated]
+   43613: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZixSgNBEIb/OcZC7IQUgvgivoSNlb0WNl55T5AytfZWNnkJX0QEkYN0wcLgWpiTRVPk7v83DnIfhM1CMjez/8zcsHZ2/5BAML84t8l0Rtlom1piwx+fnhkbM … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/378.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/378.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace)

#### 1. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/378.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/378.js#L4-L5)

```diff
-   43247: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB4SURBVCiRY2AYfoARXcAixuo/AwMDw9fXHxjYuDkYGBgYGH59/cHALSrAwMDAwHBiyTFGFlymXd55DcVAmGFYga67Fk5JmBwTugTMSdgATA5DEzEAQ9Ovrz9wKobJYWjiF … [truncated]
+   43622: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABMSURBVBiVY3QIZf/f6pvDgA6s43oZmTBEkQDLgdU/GT/YffqPLOidO5uRgYGBgYWBgYFBgJ8Pq068xuK3k4GBgeHDx0+4JXHZiRcAADlyDh3q8hR1AAAAAElFTkSuQmCC" … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/379.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/379.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72)

#### 1. `bundles/bloxd.io/chunks/js/379.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/379.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/379.js#L4-L5)

```diff
-   43249: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAABCAYAAACbkyOnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEXSURBVBiVdcE9LwNhAMDxv/Z6KvdSvZ6USNOIRGKxiEnEYkMHpn4BC0obiUlj8tZSX0BCTJKGIDZWwiYMEglhs5RGe889pz0+gd+vZWOv/DuSVDAtm8rtOTfqEPePOaT0M … [truncated]
+   43629: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABfSURBVBiVYwzKkvnPgAbevX7NwMDAwNDqm8PAwsvLgiL5+fMfFD4LugBM94HVPxk/2H36z4RuPDIQ4OdjwKuAgYEB0w3vXqMpQHfDgdU/GWHsDx8/4bdCgJ+PkAsYGAA3k … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/380.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/380.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355)

#### 1. `bundles/bloxd.io/chunks/js/380.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/380.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/380.js#L4-L5)

```diff
-   43251: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAYAAADq6085AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVAiZATEAzv8B9Ke5//lBEQD1VWYA0wwrADMxNQDo4N4AC/P/ACOSdACgm5kANVRKAPLu7AAGX5UAEdoULN8RPVsAAAAASUVORK5CYII=","alphaCutoff":0,"ve … [truncated]
+   43636: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH0SURBVEiJzVQxiNRAFH0jKbYRDQjCapmBRVmLS5FKBiFXWITbZkGwTSPYbW21rXZXpt0qzcqVN3AM2qTwilvuWIilLiwIWdlmu2/hTpxNsu54pPA1yc//w38v//1hPFXUD … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/381.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/381.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543)

#### 1. `bundles/bloxd.io/chunks/js/381.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/381.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/381.js#L4-L5)

```diff
-   43254: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAANCAYAAACjDOAMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJjSURBVFiF7ZbNS1RhFIefiaCU/IohSxsiBElosBknN8L4BS10lYES2N6dK/FvCFftZm8gBuZqWgh9KLRJU0MhGQiRsdFksJpkRlenhZ7hXufet7mzqrjP8j7vub/FgcMPf … [truncated]
+   43640: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAYAAAAMwoR9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAwSURBVAiZASUA2v8A/wCZ/x+Rpf//ADP//wAA/8z////l/fP/P+/J/yWrwf/M/zP/t8EZO2UdOzkAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.14287 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/382.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/382.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1)

#### 1. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/382.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/382.js#L4-L5)

```diff
-   43257: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
+   43644: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAElSURBVFiFY2SgEOisP/wfn/yVQFtGepjJRKolgxWMemSwAZaBdgADAwOD0tTtKHni27MvJKm/l+3JOBoj1ARcUjwUmzFsYoTR++PZ/wwMDAyz+dRRJFI/3UTh00p+K78xy … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/383.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/383.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8)

#### 1. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/383.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/383.js#L4-L5)

```diff
-   43259: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABCSURBVBiVY1RSVv7PAAWXr1yHMRl0dTTh7Ht37zIyMRAJiFbI+PX7L7jVyNYhO4Obk40GVrPgsg5ZnCQTiVZINAAAQoERlZZrqhQAAAAASUVORK5CYII=","alphaCutof … [truncated]
+   43649: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIQSURBVGiB7ZgxS8NAFMffSZKCgp/CwcHJwUUHJyMoitWhKIibg5uDk2NnJx3ERQSlg61YWjWC0sXVydFPUVBoUoiDPchdc3dJ7mhDeL/tkutd3/vf5d79CWhSWV8Oo+1aq … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/384.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/384.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd)

#### 1. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/384.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/384.js#L4-L5)

```diff
-   43266: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC+SURBVEiJY2xpn/qfgQhQU5nNSIra/XMz/jMwMDA4Js9gZCJGE6WABcaYN6cPq4KklCI4+/2bV0Qb7Jg8gxHDEmJAb28jIxHKMABJlpASJ8h8+sYJMYCUOCHbEorjBDkV4 … [truncated]
+   43652: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPWSURBVFiF3ZdbaBxlFIC/TWazk73imDQslazUEmgDqVECsSEPgkEQKfrQIl5AWSo2pn2xt9gmkiamaWy9NAEjkjSUIDFRlAh98TG0DyoI4oulxiRGI9ZOdrM7k393NqwP6 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/385.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/385.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4)

#### 1. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/385.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/385.js#L4-L5)

```diff
-   43270: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   43655: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA4CAYAAABQZsDpAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANySURBVGiB3Vm/ixNREJ7Vl8idtlaKhYU2AbFI5X9wcCBYCWdznCJaWAQhYHGkOBBF8BoRUZsE0gpC/gOrCBKwkCvsrGz1DpM9ziKZ9e28eTsvu7NJ3K/Jj/dr9n3fzHszG … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/386.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/386.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff)

#### 1. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/386.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/386.js#L4-L5)

```diff
-   43275: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA5CAYAAACCsf3qAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFpSURBVGiB7drPbcIwFAbw98DqhVM40xWyAwsUiRVYoWOwAitEogt0h64A5xYhIapKNBx4QeAq9R/sxIm+380ScYL5/CJjM3maf5TlbTsbX5pfn+zb5b+KnON0LBQR0frn/ … [truncated]
+   43659: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB4SURBVCiRY2AYfoARXcAixuo/AwMDw9fXHxjYuDkYGBgYGH59/cHALSrAwMDAwHBiyTFGFlymXd55DcVAmGFYga67Fk5JmBwTugTMSdgATA5DEzEAQ9Ovrz9wKobJYWjiF … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/387.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/387.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100be)

#### 1. `bundles/bloxd.io/chunks/js/387.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100beR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100be) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/387.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/387.js#L4-L5)

```diff
-   43283: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY5ieLf7/8yqV/79fGfzvmLvmPwBVswq9s1wBAAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[1,0.52644,0.3074,1,0.52644,0.3074,1 … [truncated]
+   43661: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAABCAYAAACbkyOnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEXSURBVBiVdcE9LwNhAMDxv/Z6KvdSvZ6USNOIRGKxiEnEYkMHpn4BC0obiUlj8tZSX0BCTJKGIDZWwiYMEglhs5RGe889pz0+gd+vZWOv/DuSVDAtm8rtOTfqEPePOaT0M … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/388.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/388.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a)

#### 1. `bundles/bloxd.io/chunks/js/388.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/388.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/388.js#L4-L5)

```diff
-   43290: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHfSURBVEiJ7VS/S0JRGD03nsMbtAYhSMc3RKTDa4xQJApaAgWXVgfbbG9sbHARHPwLHhi0BElIEo41aIiDYwbCG8w3OPjgNlyvXt+75e3H0NBZLt/9vne/891z3iWOZVA9F … [truncated]
+   43667: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAYAAADq6085AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVAiZATEAzv8B9Ke5//lBEQD1VWYA0wwrADMxNQDo4N4AC/P/ACOSdACgm5kANVRKAPLu7AAGX5UAEdoULN8RPVsAAAAASUVORK5CYII=","alphaCutoff":0,"ve … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/389.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/389.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4)

#### 1. `bundles/bloxd.io/chunks/js/389.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/389.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/389.js#L4-L5)

```diff
-   43293: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAqSURBVAiZY7wxWe6/+oJqBgaGswwMDGcZrkz8xiAuxsLAeeE7A09YKQMAwl8KmURuPDUAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.85713,0.70382 … [truncated]
+   43671: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAANCAYAAACjDOAMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJjSURBVFiF7ZbNS1RhFIefiaCU/IohSxsiBElosBknN8L4BS10lYES2N6dK/FvCFftZm8gBuZqWgh9KLRJU0MhGQiRsdFksJpkRlenhZ7hXufet7mzqrjP8j7vub/FgcMPf … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/390.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/390.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061)

#### 1. `bundles/bloxd.io/chunks/js/390.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/390.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/390.js#L4-L5)

```diff
-   43295: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEbSURBVFiF7ZgxCsJAEEVnJAomNoKFWIjnEESs9BKezktoJSJYeQE7sQgWgk2SwhRrIQlOUNewWV2Ged3mh00m/082GwRDbpuB+qQ3xkf8xZy1shdxFSnENbx/3wAAwHXRI … [truncated]
+   43676: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/391.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/391.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982)

#### 1. `bundles/bloxd.io/chunks/js/391.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/391.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/391.js#L4-L5)

```diff
-   43301: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANISURBVFiF5ZdLaFNZHMZ/uT1tzA2tqKtKQi1DFoUxLoTioiFZdOGgdlYKAelipCMM1BcUfNWFRSyKD9DFuIizcgozqxGDWCjMYBdVEUYRgq3QJykucmnU3NR7c42LJtfXv … [truncated]
+   43685: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABCSURBVBiVY1RSVv7PAAWXr1yHMRl0dTTh7Ht37zIyMRAJiFbI+PX7L7jVyNYhO4Obk40GVrPgsg5ZnCQTiVZINAAAQoERlZZrqhQAAAAASUVORK5CYII=","alphaCutof … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/392.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/392.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d)

#### 1. `bundles/bloxd.io/chunks/js/392.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/392.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/392.js#L4-L5)

```diff
-   43303: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF9SURBVGiB7ZjfSsMwFMZPTbCo2/CFxH8wmTK88F288tLXmSIiw4ET6Rttw1HZrDcpNLFL2iaQEL7fXdqcNidfTpN+CVlyNrwuiIi2mw0REWXzWaLrf3IxLIiIGOdUjSs5P … [truncated]
+   43691: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC+SURBVEiJY2xpn/qfgQhQU5nNSIra/XMz/jMwMDA4Js9gZCJGE6WABcaYN6cPq4KklCI4+/2bV0Qb7Jg8gxHDEmJAb28jIxHKMABJlpASJ8h8+sYJMYCUOCHbEorjBDkV4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/393.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/393.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234)

#### 1. `bundles/bloxd.io/chunks/js/393.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/393.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/393.js#L4-L5)

```diff
-   43308: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFyYoAOvp6gD+8e4AzmUa4gxrmFAAAAAAS … [truncated]
+   43696: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/394.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/394.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239)

#### 1. `bundles/bloxd.io/chunks/js/394.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/394.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/394.js#L4-L5)

```diff
-   43317: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY7RyWfaf+d8CBh5eXoZ38S0MADX5Bb3RlRVIAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43698: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA5CAYAAACCsf3qAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFpSURBVGiB7drPbcIwFAbw98DqhVM40xWyAwsUiRVYoWOwAitEogt0h64A5xYhIapKNBx4QeAq9R/sxIm+380ScYL5/CJjM3maf5TlbTsbX5pfn+zb5b+KnON0LBQR0frn/ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/395.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/395.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceec)

#### 1. `bundles/bloxd.io/chunks/js/395.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceecR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceec) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/395.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/395.js#L4-L5)

```diff
-   43324: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAACCAYAAAA3t6CmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFoSURBVCiR7dDLK+QBAMDx70/jOfPzmt+MRmRkkvcjW5tGxq4cLOawTsNBKYUUF4/IZRwYMbub04iMsG0SGTalSVzVlJYUicM0K4SfR5QxxtVxL3vz+RM+wtiUM6jTasnKy … [truncated]
+   43700: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY5ieLf7/8yqV/79fGfzvmLvmPwBVswq9s1wBAAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[1,0.52644,0.3074,1,0.52644,0.3074,1 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/396.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/396.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7)

#### 1. `bundles/bloxd.io/chunks/js/396.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/396.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/396.js#L4-L5)

```diff
-   43328: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACjSURBVDiNY2RgYGDoTTf8zwAFxTPPM6LzQ6IT4HwGBgaGNUsXMNo6uaGIHd63i5GJgYqAhYGBgUGC8xuKIDr/x/fvRBlGfZcRAlvWrWREFzu8bxeGGFGGYYsAbOqo780vX … [truncated]
+   43708: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHfSURBVEiJ7VS/S0JRGD03nsMbtAYhSMc3RKTDa4xQJApaAgWXVgfbbG9sbHARHPwLHhi0BElIEo41aIiDYwbCG8w3OPjgNlyvXt+75e3H0NBZLt/9vne/891z3iWOZVA9F … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/397.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/397.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711f)

#### 1. `bundles/bloxd.io/chunks/js/397.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/397.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/397.js#L4-L5)

```diff
-   43333: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGQSURBVGiB7ZivT8QwFMffuCVLSI6/gF8GwykECf8BAocgQeERJBgwJzEo3HkUrigEfwXqMBggE2guIVmyMMR1yb2ya7e1SZvm+3Hd3tv23ndN229ClpxcbFRERGVZERGRm … [truncated]
+   43710: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAqSURBVAiZY7wxWe6/+oJqBgaGswwMDGcZrkz8xiAuxsLAeeE7A09YKQMAwl8KmURuPDUAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.85713,0.70382 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/398.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/398.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-261b6d2bb8a4e56f3bfb2f690ec2b6333bb864a52ff9fec254b0b0351ca61168)

#### 1. `bundles/bloxd.io/chunks/js/398.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-261b6d2bb8a4e56f3bfb2f690ec2b6333bb864a52ff9fec254b0b0351ca61168R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-261b6d2bb8a4e56f3bfb2f690ec2b6333bb864a52ff9fec254b0b0351ca61168) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/398.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/398.js#L4-L5)

```diff
-   43336: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFTbLAOjp+AAD4T0A0BkZ4rm59cYAAAAAS … [truncated]
+   43716: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEbSURBVFiF7ZgxCsJAEEVnJAomNoKFWIjnEESs9BKezktoJSJYeQE7sQgWgk2SwhRrIQlOUNewWV2Ged3mh00m/082GwRDbpuB+qQ3xkf8xZy1shdxFSnENbx/3wAAwHXRI … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/399.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/399.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-90895c6f863987ed6541fc28f5f164165e18e815d727a14f3f531f501491c77d)

#### 1. `bundles/bloxd.io/chunks/js/399.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-90895c6f863987ed6541fc28f5f164165e18e815d727a14f3f531f501491c77dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-90895c6f863987ed6541fc28f5f164165e18e815d727a14f3f531f501491c77d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/399.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/399.js#L4-L5)

```diff
-   43344: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZYzzttfd/u0I8Ay8vC8M2gXwGADicBSzq4ZO6AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43720: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANISURBVFiF5ZdLaFNZHMZ/uT1tzA2tqKtKQi1DFoUxLoTioiFZdOGgdlYKAelipCMM1BcUfNWFRSyKD9DFuIizcgozqxGDWCjMYBdVEUYRgq3QJykucmnU3NR7c42LJtfXv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/400.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/400.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-824826e19e46e611ae81cc96b6c394d7ca4ff430c1c2a991ca181214de33a35b)

#### 1. `bundles/bloxd.io/chunks/js/400.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-824826e19e46e611ae81cc96b6c394d7ca4ff430c1c2a991ca181214de33a35bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-824826e19e46e611ae81cc96b6c394d7ca4ff430c1c2a991ca181214de33a35b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/400.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/400.js#L4-L5)

```diff
-   43352: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY4wvV/jPwMDAsLDzAWNQlsx/BgYGBiYGLAAAv+IF21V42BkAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43725: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF9SURBVGiB7ZjfSsMwFMZPTbCo2/CFxH8wmTK88F288tLXmSIiw4ET6Rttw1HZrDcpNLFL2iaQEL7fXdqcNidfTpN+CVlyNrwuiIi2mw0REWXzWaLrf3IxLIiIGOdUjSs5P … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/401.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/401.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ff6c22d0403b441ebb5a9ccc02bf9736c66a8f3a0fa50819f478fe5f26a5fdb4)

#### 1. `bundles/bloxd.io/chunks/js/401.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ff6c22d0403b441ebb5a9ccc02bf9736c66a8f3a0fa50819f478fe5f26a5fdb4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ff6c22d0403b441ebb5a9ccc02bf9736c66a8f3a0fa50819f478fe5f26a5fdb4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/401.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/401.js#L4-L5)

```diff
-   43357: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAACCAYAAAAti0AoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFQSURBVCiR7dDLK8MBAMDx70/z3H5e+22aCFnyDOfJPHLwPHAaB6UUWnHxiFx2mSlDThOZPJJkGVKSuKqVkCKh1ghhHlE25uro4OjzJ3yEsSl7QKNWk5megXPHxW/Mjrp59 … [truncated]
+   43731: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFyYoAOvp6gD+8e4AzmUa4gxrmFAAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/402.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/402.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c405d18837fbe8cbe9aaf07c37ae5f8054c7082f76e96345e41a0a23ed2f5af)

#### 1. `bundles/bloxd.io/chunks/js/402.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c405d18837fbe8cbe9aaf07c37ae5f8054c7082f76e96345e41a0a23ed2f5afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c405d18837fbe8cbe9aaf07c37ae5f8054c7082f76e96345e41a0a23ed2f5af) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/402.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/402.js#L4-L5)

```diff
-   43366: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACiSURBVDiNY2RgYGCYVKj6nwEK8vpvM6LzM1uU4XwGBgaG6TV3GYOyZFDE1k17wsjEQEXAwsDAwCD8H9VMdP6P7/+IMoz6LiME5rfeZ0QXWzftCYYYUYZhiwBs6qjvzS9fv … [truncated]
+   43736: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY7RyWfaf+d8CBh5eXoZ38S0MADX5Bb3RlRVIAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/403.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/403.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9853737249d1438d2da96d9fed2f1c94b1626bfdf695a77949456f214735c8af)

#### 1. `bundles/bloxd.io/chunks/js/403.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9853737249d1438d2da96d9fed2f1c94b1626bfdf695a77949456f214735c8afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9853737249d1438d2da96d9fed2f1c94b1626bfdf695a77949456f214735c8af) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/403.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/403.js#L4-L5)

```diff
-   43374: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZgxTsNAEEX/WKN0uUEKKiouwDUiUdOnoqNLQUcFlXsqiki+BhegokKRb+Auitg0MVpBitj/24yQnxRtVkrGM/tnxqO19fNNAsHD3caWqwVloypriQ1//3hjb … [truncated]
+   43743: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAACCAYAAAA3t6CmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFoSURBVCiR7dDLK+QBAMDx70/jOfPzmt+MRmRkkvcjW5tGxq4cLOawTsNBKYUUF4/IZRwYMbub04iMsG0SGTalSVzVlJYUicM0K4SfR5QxxtVxL3vz+RM+wtiUM6jTasnKy … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/404.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/404.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b15e8cfde8c11c3e67c4aba91fde1e87abda30c4b62f6c1ca93c0f6053dcd960)

#### 1. `bundles/bloxd.io/chunks/js/404.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b15e8cfde8c11c3e67c4aba91fde1e87abda30c4b62f6c1ca93c0f6053dcd960R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b15e8cfde8c11c3e67c4aba91fde1e87abda30c4b62f6c1ca93c0f6053dcd960) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/404.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/404.js#L4-L5)

```diff
-   43383: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY/T0D/7PwMDAsH3jWkZbJ7f/DAwMDEwMWAAAvTcFyNvAMsUAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43749: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACjSURBVDiNY2RgYGDoTTf8zwAFxTPPM6LzQ6IT4HwGBgaGNUsXMNo6uaGIHd63i5GJgYqAhYGBgUGC8xuKIDr/x/fvRBlGfZcRAlvWrWREFzu8bxeGGFGGYYsAbOqo780vX … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/405.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/405.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cd31764e445499dae9e1623119a3f0c21e50369d49556ef56fa1bef3b8e44b9)

#### 1. `bundles/bloxd.io/chunks/js/405.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cd31764e445499dae9e1623119a3f0c21e50369d49556ef56fa1bef3b8e44b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-0cd31764e445499dae9e1623119a3f0c21e50369d49556ef56fa1bef3b8e44b9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/405.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/405.js#L4-L5)

```diff
-   43391: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZgxTsNAEEX/WCNX5CzAAdKkiERFwT0okDgFEgX3oEAUkSzhxgcAzuJUbpYmRitIYft/hxHyk6LNSsl4Zv/MeLR2e3efQPD0+GDrzZay0dSVxIa/f3wyNmQ0d … [truncated]
+   43753: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGQSURBVGiB7ZivT8QwFMffuCVLSI6/gF8GwykECf8BAocgQeERJBgwJzEo3HkUrigEfwXqMBggE2guIVmyMMR1yb2ya7e1SZvm+3Hd3tv23ndN229ClpxcbFRERGVZERGRm … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/406.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/406.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36943ddaa695d97d1a935eb3c96a7529383a055fd819678a8d80b38f6e74473e)

#### 1. `bundles/bloxd.io/chunks/js/406.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36943ddaa695d97d1a935eb3c96a7529383a055fd819678a8d80b38f6e74473eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36943ddaa695d97d1a935eb3c96a7529383a055fd819678a8d80b38f6e74473e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/406.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/406.js#L4-L5)

```diff
-   43399: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAxCAYAAAChzEtEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH4SURBVGiB7Zg/S8NAGMafSAYtiJRrqkJWJ510ci3oVB0K7VLpVugo/QT9BMVRcBAEFwUHcXJwdXPSQQQnh9o2FBG61kEupPmf3OV6B/lN13C9vHn63HtPqj0+f8zAwOH+l … [truncated]
+   43761: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFTbLAOjp+AAD4T0A0BkZ4rm59cYAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/407.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/407.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bcb3b8b0a954112d90233f067e1f31a0df7e4d9a61bbfac3b983d6b8eac1ae06)

#### 1. `bundles/bloxd.io/chunks/js/407.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bcb3b8b0a954112d90233f067e1f31a0df7e4d9a61bbfac3b983d6b8eac1ae06R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bcb3b8b0a954112d90233f067e1f31a0df7e4d9a61bbfac3b983d6b8eac1ae06) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/407.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/407.js#L4-L5)

```diff
-   43406: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAxCAYAAAChzEtEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH7SURBVGiB7Zg/SMNAGMVfJIMWREqaqpBJcNJJJweXgk4VpNAuhU4WOndy7OjUWXATXBTEwcnB1UFw0kGETh1q21BE6FoHuZDmf3J36R3kN13D9fLl9d13L1WeXr5moOD4Y … [truncated]
+   43767: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZYzzttfd/u0I8Ay8vC8M2gXwGADicBSzq4ZO6AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/408.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/408.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3a24135e2a2243f6ad42ddb8a76b524921076704e7aea59f7381db1df76679)

#### 1. `bundles/bloxd.io/chunks/js/408.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3a24135e2a2243f6ad42ddb8a76b524921076704e7aea59f7381db1df76679R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-da3a24135e2a2243f6ad42ddb8a76b524921076704e7aea59f7381db1df76679) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/408.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/408.js#L4-L5)

```diff
-   43408: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABBCAYAAADc1PQOAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKdSURBVFiF7ZfNaxNBHIafXVarqVGIFmy0VpAghVD8aPAQip7sTUH8gBZtoLFCFdQ/QPTqqZfgoagoFUEsPfTcS7FKJf0iFCzkYKJtKiXm0JCVJko8xNnuppvsblRIoe9pd … [truncated]
+   43776: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY4wvV/jPwMDAsLDzAWNQlsx/BgYGBiYGLAAAv+IF21V42BkAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/409.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/409.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1ec4c60be473800338bf6f83e23db29f333d5d3fba029bba4252d9fc64c24f50)

#### 1. `bundles/bloxd.io/chunks/js/409.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1ec4c60be473800338bf6f83e23db29f333d5d3fba029bba4252d9fc64c24f50R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1ec4c60be473800338bf6f83e23db29f333d5d3fba029bba4252d9fc64c24f50) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/409.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/409.js#L4-L5)

```diff
-   43411: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABYCAYAAAAdk2IxAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAQ8SURBVHic7Zw9TBRBFMffmIPjw4QYG0tsrGgorNBaYwU2BmKjhhApT41REhNN0FiIncZCTYwRrY5GAzVQX4MNDZY0BDXycVCsxd0cu7O7t18zu/M2/191NzM7+/H2P/Pm7 … [truncated]
+   43784: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAACCAYAAAAti0AoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFQSURBVCiR7dDLK8MBAMDx70/z3H5e+22aCFnyDOfJPHLwPHAaB6UUWnHxiFx2mSlDThOZPJJkGVKSuKqVkCKh1ghhHlE25uro4OjzJ3yEsSl7QKNWk5megXPHxW/Mjrp59 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/410.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/410.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1eab6a178dcbc4b81acc6a562e03b8503415994912e42b89b643b672889642f5)

#### 1. `bundles/bloxd.io/chunks/js/410.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1eab6a178dcbc4b81acc6a562e03b8503415994912e42b89b643b672889642f5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1eab6a178dcbc4b81acc6a562e03b8503415994912e42b89b643b672889642f5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/410.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/410.js#L4-L5)

```diff
-   43417: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHlSURBVEiJxVU9SwNBEH0nZ9AgaCEIakgjosEzhZAgKieIhZVtwPYK/QsSUohY+QMs8gNsrSxUMKhIrrtE1pAu+AEBi4gSJQbXQmfdxI23QdEHV8zu3L6Zee/2wDyX12tVX … [truncated]
+   43786: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACiSURBVDiNY2RgYGCYVKj6nwEK8vpvM6LzM1uU4XwGBgaG6TV3GYOyZFDE1k17wsjEQEXAwsDAwCD8H9VMdP6P7/+IMoz6LiME5rfeZ0QXWzftCYYYUYZhiwBs6qjvzS9fv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/411.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/411.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7c6533e4f1ab7ae7c2e6e0684120636dbc41504a563c6deb8305568b84760ee1)

#### 1. `bundles/bloxd.io/chunks/js/411.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7c6533e4f1ab7ae7c2e6e0684120636dbc41504a563c6deb8305568b84760ee1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7c6533e4f1ab7ae7c2e6e0684120636dbc41504a563c6deb8305568b84760ee1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/411.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/411.js#L4-L5)

```diff
-   43426: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY2zvnfBfTV2NAQAR2QMYLvTBQAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.78216,0.4149,0.514,0.78216,0.4149,0.514,0.782 … [truncated]
+   43794: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZgxTsNAEEX/WKN0uUEKKiouwDUiUdOnoqNLQUcFlXsqiki+BhegokKRb+Auitg0MVpBitj/24yQnxRtVkrGM/tnxqO19fNNAsHD3caWqwVloypriQ1//3hjb … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/412.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/412.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-063fe3d5f83c171a032fdf9ed2c4d9d4ae0cf930cb77eb1af9f8f500727cefcc)

#### 1. `bundles/bloxd.io/chunks/js/412.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-063fe3d5f83c171a032fdf9ed2c4d9d4ae0cf930cb77eb1af9f8f500727cefccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-063fe3d5f83c171a032fdf9ed2c4d9d4ae0cf930cb77eb1af9f8f500727cefcc) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/412.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/412.js#L4-L5)

```diff
-   43434: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAsSURBVAiZASEA3v8Aipaa//9m////Zsz//2aZ//9mZv/Q3N7/o7G2//8z//+SuBjWIEp09QAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.14287,0.4 … [truncated]
+   43798: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY/T0D/7PwMDAsH3jWkZbJ7f/DAwMDEwMWAAAvTcFyNvAMsUAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/413.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/413.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7d6f145e4e34160970e9c67c77dbba76310453445075b2f640527463ba83411b)

#### 1. `bundles/bloxd.io/chunks/js/413.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7d6f145e4e34160970e9c67c77dbba76310453445075b2f640527463ba83411bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-7d6f145e4e34160970e9c67c77dbba76310453445075b2f640527463ba83411b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/413.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/413.js#L4-L5)

```diff
-   43441: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEgSURBVFiF7Ze9CsIwFIVvpJP1rw4iguDmOwgdxKmbkw/p5NZJHATfwUERhCIO/tW66iARb1FjSavhcr8tPSXN7Tm3aQRoMh3710+62/PEL+bMJX2IqXAhpmH9ewEAAP5oi … [truncated]
+   43806: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZgxTsNAEEX/WCNX5CzAAdKkiERFwT0okDgFEgX3oEAUkSzhxgcAzuJUbpYmRitIYft/hxHyk6LNSsl4Zv/MeLR2e3efQPD0+GDrzZay0dSVxIa/f3wyNmQ0d … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/414.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/414.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2c9245090789d6cb2e7f7867c88160391fd7dc6a7866461b05286d573710d5cd)

#### 1. `bundles/bloxd.io/chunks/js/414.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2c9245090789d6cb2e7f7867c88160391fd7dc6a7866461b05286d573710d5cdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2c9245090789d6cb2e7f7867c88160391fd7dc6a7866461b05286d573710d5cd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/414.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/414.js#L4-L5)

```diff
-   43443: ee => {
-     ee.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABZCAYAAADWz7GUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASXSURBVHic7Z3NTtwwEMedqoBWC9w4cEJiT0hQQVv1Qh+Ah+ABeKQ+QB+iL7AXBBISSNADlXiFqlXVcqCH1ivv7NieiZ3Yk8xPQiSOHWc9G//t8cc2P3/9eTEjZjpZb0qXw … [truncated]
+   43815: WW => {
+     WW.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAxCAYAAAChzEtEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH4SURBVGiB7Zg/S8NAGMafSAYtiJRrqkJWJ510ci3oVB0K7VLpVugo/QT9BMVRcBAEFwUHcXJwdXPSQQQnh9o2FBG61kEupPmf3OV6B/lN13C9vHn63HtPqj0+f8zAwOH+l … [truncated]
```
