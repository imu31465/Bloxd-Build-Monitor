# Changed — Bundle Modifications Report (Part 017 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `17 / 58` (**293** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 59. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L498-L499` → after: `L8138-L8152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8138-L8152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8138-L8152) · [Before (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L498-L499)

```diff
-       callCore(zz, uz, bz) {
-         if (this.stopped) return uz;
+       get castsEntitySunShadows() {
+         var qq, Eq;
+         return null !== (qq = null === (Eq = this.sunShadow) || void 0 === Eq ? void 0 : Eq.tracesEntities) && void 0 !== qq && qq
+       }
+       get sampleCount() {
+         return this.engine.msaaSamples
+       }
+       attach(qq) {
+         this.modelMeshes.attach(qq.model, qq.sceneMirror);
+         const Eq = qq.PV;
+         this.setClearColour(Eq.clearColor.r, Eq.clearColor.g, Eq.clearColor.b), Eq.draw = () => {
+           this.drawFrame(qq, Eq)
+         }
+       }
+       render(qq) {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L501` → after: `L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8154) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L501)

```diff
-           return bz(this.core)
+           this.cgq.Qr(), qq.PV.render()
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L503` → after: `L8156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8156) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L503)

```diff
-           return this.crash(zz, Ez), uz
+           throw this.refusals.frameFailed(Eq), Eq
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L506-L601` → after: `L8160-L8161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8160-L8161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8160-L8161) · [Before (L506-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L506-L601)

```diff
-       readEvents(zz) {
-         this.netOffsets.length = 0;
-         const uz = this.headerView(),
-           bz = uz[Ez.db.EventsPtr],
-           nz = uz[Ez.db.EventsLen];
-         if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === nz) return Uz;
-         const iz = [],
-           lz = this.memory().buffer;
-         if (bz % 4 !== 0 || bz + nz > lz.byteLength) return this.crash(hz, `events of ${nz} bytes at ${bz} outside ${lz.byteLength} bytes of memory`), Uz;
-         const Mz = new DataView(lz, bz, nz),
-           tz = this.rings.net,
-           Hz = (uz, bz) => uz + bz <= zz ? tz.copyWritten(uz, bz) : null;
-         let Oz = 0;
-         for (; Oz < nz;) {
-           const zz = Oz + Ez.S,
-             uz = zz <= nz ? Mz.getUint32(Oz, !0) : -1,
- ... (80 more removed lines; see GitHub link above)
+       lastFrameDrawCalls() {
+         return this.engine.drawCallCount
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L603-L607` → after: `L8163-L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8163-L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8163-L8171) · [Before (L603-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L603-L607)

```diff
-       forEachNetOut(zz) {
-         this.forEachOut(sz, "net-out", Ez.db.NetOutPtr, Ez.db.NetOutLen, Ez.Pb, 0, ((uz, bz, nz, iz) => {
-           const lz = (0, Ez.ce)(bz);
-           lz === Ez.Qb.Frame ? zz((0, Ez.be)(bz), nz) : this.crash(sz, `net-out record at ${iz} is kind ${lz}, not a frame`)
-         }))
+       describePendingWork() {
+         var qq, Eq, gq, Yq;
+         const lq = [...this.particles.describePendingWork(), ...null !== (qq = null === (Eq = this.sunShadow) || void 0 === Eq ? void 0 : Eq.describePendingWork()) && void 0 !== qq ? qq : []],
+           Oq = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (gq = this.terrain.sceneDepth) && void 0 !== gq && gq.compiling ? 1 : 0) + (null !== (Yq = this.terrain.shadowMask) && void 0 !== Yq && Yq.compiling ? 1 : 0);
+         Oq > 0 && lq.push(`${Oq} Lite pipelines compiling`);
+         const mq = this.terrain.buffersAwaitingVerdict;
+         mq > 0 && lq.push(`${mq} Lite terrain buffers awaiting their out-of-memory verdict`);
+         const xq = this.resources.texturesLoading;
+         return xq > 0 && lq.push(`${xq} Lite textures loading`), lq
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L609-L614` → after: `L8173-L8174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8173-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8173-L8174) · [Before (L609-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L609-L614)

```diff
-       forEachWorkerOut(zz) {
-         this.forEachOut(rz, "worker-out", Ez.db.WorkerOutPtr, Ez.db.WorkerOutLen, Ez.vd, 4, ((uz, bz, nz, iz) => {
-           const lz = 255 & uz,
-             Mz = lz === Ez.Ld.Init ? this.initOf(nz, iz) : nz;
-           null !== Mz && zz(lz, uz >>> 8 & 16777215, Mz)
-         }))
+       prepareTexture(qq) {
+         return null !== this.resources.boundTexture(qq) || this.resources.textureFailed(qq)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L616-L657` → after: `L8176-L8185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8176-L8185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8176-L8185) · [Before (L616-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L616-L657)

```diff
-       initOf(zz, uz) {
-         const bz = this.memory().buffer;
-         if (zz.byteLength !== Ez.hb) return this.crash(rz, `worker-out Init record at ${uz} is ${zz.byteLength} bytes, not a view`), null;
-         const nz = new DataView(zz.buffer, zz.byteOffset, Ez.hb),
-           iz = nz.getUint32(0, !0),
-           lz = nz.getUint32(4, !0);
-         return iz + lz > bz.byteLength ? (this.crash(rz, `worker-out Init record at ${uz} names ${lz} bytes at ${iz} outside ${bz.byteLength} bytes of memory`), null) : new Uint8Array(bz, iz, lz)
-       }
-       forEachOut(zz, uz, bz, nz, iz, lz, Mz) {
-         if (this.stopped || null === this.lastHeader) return;
-         const tz = this.headerView(),
-           Hz = tz[bz],
-           Oz = tz[nz];
-         if (0 === Oz) return;
-         const pz = this.memory().buffer;
-         if (Hz % 4 !== 0 || Hz + Oz > pz.byteLength) return void this.crash(zz, `${uz} of ${Oz} bytes at ${Hz} outside ${pz.byteLength} bytes of memory`);
- ... (26 more removed lines; see GitHub link above)
+       drawFrame(qq, Eq) {
+         var gq, Yq, lq, Oq, mq, xq;
+         const Aq = ux(qq);
+         this.camera.copyFromView(Aq), this.setClearColour(Aq.clearColour[0], Aq.clearColour[1], Aq.clearColour[2]), null === (gq = this.sunShadow) || void 0 === gq || gq.prepare(qq.wB, Aq.eye, null !== (Yq = qq.wB.pN) && void 0 !== Yq ? Yq : null), this.terrain.prepare(qq, Aq), n … [truncated]
+         const cq = performance.now();
+         this.resources.flushUploads(), null === (xq = this.sunShadow) || void 0 === xq || xq.traceEntities(this.meshes);
+         try {
+           (0, Jq.o)(this.engine, this.lastFrameTime > 0 ? cq - this.lastFrameTime : 0)
+         } finally {
+           this.resources.endUploadFrame()
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L660-L661` → after: `L8189-L8191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8189-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8189-L8191) · [Before (L660-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L660-L661)

```diff
-       crashOn(zz, uz) {
-         uz instanceof nz.b ? this.crash(hz, uz.message) : this.crash(zz, uz)
+       setClearColour(qq, Eq, gq) {
+         const Yq = this.PV.clearColor;
+         Yq.r = qq, Yq.g = Eq, Yq.b = gq, Yq.a = 1
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L663-L671` → after: `L8193-L8229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8193-L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8193-L8229) · [Before (L663-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L663-L671)

```diff
-       crash(zz, uz) {
-         this.stopped || (this.stopped = !0, this.handlers.onCrash({
-           site: zz,
-           error: uz,
-           header: this.lastHeader
-         }))
-       }
-       headerWord(zz) {
-         return this.stopped || null === this.lastHeader ? 0 : this.headerView()[zz]
+     }
+     const hA = "WebGPU device lost while Lite was starting";
+ 
+     function nA(qq, Eq) {
+       return "object" === typeof qq && null !== qq ? Object.assign(qq, {
+         startStep: Eq
+       }) : qq
+     }
+     async function bA(qq, Eq) {
+       const gq = await navigator.gpu.requestAdapter({
+         powerPreference: "high-performance"
+       });
+       if (!gq) throw nA(new Error("No WebGPU adapter"), "no_adapter");
+       const Yq = gq.info,
+         lq = {
+           vendor: (null === Yq || void 0 === Yq ? void 0 : Yq.vendor) || "unknown vendor",
+ ... (21 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L673-L675` → after: `L8231-L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8231-L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8231-L8276) · [Before (L673-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L673-L675)

```diff
-       headerView() {
-         const zz = this.memory().buffer;
-         return zz !== this.headerBuffer && (this.headerBuffer = zz, this.header = new Uint32Array(zz, this.core.WF(), Ez.cb)), this.header
+       var xq;
+       const Aq = function(qq) {
+         return qq._device
+       }(mq);
+       let cq = null;
+       Aq.lost.then((qq => {
+         cq = qq, console.error(`WebGPU device lost (${qq.reason}): ${qq.message}`)
+       }));
+       try {
+         const gq = await async function(qq, Eq, gq, Yq, lq, Oq) {
+           const mq = (0, kq.c)(qq),
+             xq = new sm(qq, Eq),
+             Aq = new Xx(Eq),
+             cq = new nm(Eq, xq, (qq => function(qq, Eq) {
+               for (const Yq of Dq(qq)) {
+                 var gq;
+ ... (30 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L679` → after: `L8280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8280) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L679)

```diff
-   40123: (zz, uz, bz) => {
+   40622: (qq, Eq, gq) => {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L682` → after: `L8286-L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8286-L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8286-L8293) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L682)

```diff
-       d: () => iz
+       e: () => Wq,
+       g: () => uq,
+       j: () => dq,
+       l: () => Oq,
+       n: () => xq,
+       r: () => Aq,
+       v: () => mq,
+       x: () => Vq
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L684-L687` → after: `L8295-L8298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8295-L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8295-L8298) · [Before (L684-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L684-L687)

```diff
-     var Ez = bz(4448);
-     let nz = null;
- 
-     function iz(zz) {
+     const Yq = 3,
+       lq = 0,
+       Oq = 1,
+       mq = 2,
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L689-L696` → after: `L8300-L8336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8300-L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8300-L8336) · [Before (L689-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L689-L696)

```diff
-         scanned: !1
-       };
-       try {
-         return zz()
-       } finally {
-         nz = null
-       }
-     }
+         uniform: 3,
+         dW: 4,
+         special: 5,
+         volume: 6,
+         sampler: 7,
+         entities: 8,
+         entityGrids: 9
+       },
+       Aq = 10,
+       cq = "BloxdPackInputs",
+       uq = "bloxdPackInputs",
+       Bq = [{
+         name: "seconds",
+         type: "f32",
+         offset: 0
+       }, {
+ ... (21 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L699-L702` → after: `L8339-L8369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8339-L8369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/262.js#L8339-L8369) · [Before (L699-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/262.js#L699-L702)

```diff
-       const zz = nz;
-       if (null === zz) return (0, Ez.f)();
-       const uz = (0, Ez.f)(!zz.scanned);
-       return zz.scanned = !0, uz
+       const qq = Bq.map((qq => {
+         let {
+           name: Eq,
+           type: gq
+         } = qq;
+         return `    ${Eq}: ${gq},\n`
+       })).join("");
+       return `struct ${cq} {\n${qq}}\n@group(${Yq}) @binding(${lq}) var<uniform> ${uq}: ${cq};\n`
+     }
+ 
+     function aq(qq, Eq) {
+       const gq = new DataView(qq, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Wq),
+         [Yq, lq, Oq, mq, xq, Aq] = Bq;
+       gq.setFloat32(Yq.offset, Eq.seconds, !0), gq.setUint32(lq.offset, Eq.lit ? 1 : 0, !0);
+       for (let cq = 0; cq < 3; cq++) gq.setInt32(Oq.offset + 4 * cq, Eq.renderOffset[cq], !0), gq.setFloat32(mq.offset + 4 * cq, Eq.vqq[cq], !0), gq.setFloat32(xq.offset + 4 * cq, Eq.eyePosition[cq], !0), gq.setFloat32(Aq.offset + 4 * cq, Eq.shadowDirection[cq], !0)
+     }
+ ... (15 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/263.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/263.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696)

#### 1. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L4-L6` → after: `L4-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/263.js#L4-L36) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/263.js#L4-L6)

```diff
-   40251: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       BloxdInformation: () => Fz
+   40733: (qq, Eq, gq) => {
+     function Yq(qq, Eq, gq) {
+       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(qq, Eq).getContext("2d", gq);
+       const Yq = document.createElement("canvas");
+       return Yq.width = qq, Yq.height = Eq, Yq.getContext("2d", gq)
+     }
+ 
+     function lq(qq, Eq) {
+       return qq.getContext("2d", Eq)
+     }
+     gq.d(Eq, {
+       d: () => lq,
+       f: () => Yq
+     })
+   },
+   40659: (qq, Eq, gq) => {
+ ... (17 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L16` → after: `L38-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L38-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/263.js#L38-L705) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/263.js#L8-L16)

```diff
-     var Ez = bz(1181),
-       nz = bz(56),
-       iz = bz(96),
-       lz = bz(1419),
-       Mz = bz(128),
-       tz = bz(1047),
-       Hz = bz(1089);
-     const Oz = (0, nz.lazy)((() => bz.e(116).then((() => bz(6245))))),
-       pz = (0, nz.lazy)((() => bz.e(117).then((() => bz(6252)))));
+     var Yq = gq(4622),
+       lq = gq(40369),
+       Oq = (gq(40515), gq(15));
+     class mq {
+       constructor(qq, Eq) {
+         this.memory = qq, this.access = Eq, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.WB = 0, this.u32 = new Oq.l(0), this.f32 = new Oq.g(0), this.u8 = new Oq.c(0), this.dataView = new Oq.i(new ArrayBuffer(0)), this.refresh()
+       }
+       refresh() {
+         this.ptr = this.access.ptr(), this.WB = this.access.WB(), this.buffer = (0, Oq.K)(this.memory()), this.u32 = new Oq.l(this.buffer, this.ptr, this.WB >>> 2), this.f32 = new Oq.g(this.buffer, this.ptr, this.WB >>> 2), this.u8 = new Oq.c(this.buffer, this.ptr, this.WB), this … [truncated]
+       }
+       ensureViews() {
+         (0, Oq.K)(this.memory()) !== this.buffer && this.refresh()
+       }
+       get view() {
+         return this.ensureViews(), this.dataView
+       }
+ ... (652 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L19-L151` → after: `L708-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L708-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/263.js#L708-L711) · [Before (L19-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/263.js#L19-L151)

```diff
-       return (0, Hz.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, Hz.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
-         }), (0, Hz.jsx)("p", {
-           children: "We have a program for reporting security exploits. Find an important security flaw in Bloxd? Report it through the process below. Please include steps to reproduce the exploit, including any relevant code if the exploit requires it. You will receive the rewar … [truncated]
-         }), (0, Hz.jsx)("h3", {
-           children: "1. How to Report"
-         }), (0, Hz.jsxs)("p", {
-           children: ["Please follow the instructions on", " ", (0, Hz.jsx)("a", {
-             href: "https://forms.gle/wUL8WiH3LbGiJBzF7",
-             target: "_blank",
-             rel: "noreferrer",
-             children: "this form"
-           }), " ", "to report the exploit."]
- ... (117 more removed lines; see GitHub link above)
+       const qq = lq;
+       if (null === qq) return (0, Yq.h)();
+       const Eq = (0, Yq.h)(!qq.scanned);
+       return qq.scanned = !0, Eq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/264.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/264.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42)

#### 1. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4-L13` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/264.js#L4-L6) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/264.js#L4-L13)

```diff
-   40298: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => fz,
-       g: () => az,
-       h: () => Kz,
-       k: () => wz,
-       m: () => dz,
-       o: () => Rz,
-       q: () => Zz,
-       t: () => Fz
+   40797: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       BloxdInformation: () => Nq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L15-L359` → after: `L8-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L8-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/264.js#L8-L80) · [Before (L15-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/264.js#L15-L359)

```diff
-     var Ez = bz(36519),
-       nz = bz(36715),
-       iz = bz(36553),
-       lz = bz(40300),
-       Mz = bz(39384),
-       tz = bz(39180),
-       Hz = bz(39208),
-       Oz = bz(39182),
-       pz = bz(36564);
-     const dz = Object.freeze(new Ez.h(0, 0, 0, 0)),
-       Fz = Object.freeze(Ez.n.Zero()),
-       Zz = Object.freeze(Ez.m.Zero()),
-       Rz = Object.freeze(tz.e.Zero()),
-       Kz = Object.freeze(nz.c.Black()),
-       wz = Object.freeze(new nz.g(0, 0, 0, 0)),
-       Xz = {
- ... (329 more removed lines; see GitHub link above)
+     var Yq = gq(1183),
+       lq = gq(57),
+       Oq = gq(96),
+       mq = gq(1422),
+       xq = gq(136),
+       Aq = gq(1025),
+       cq = gq(1070);
+     const uq = (0, lq.lazy)((() => gq.e(117).then((() => gq(6390))))),
+       Bq = (0, lq.lazy)((() => gq.e(118).then((() => gq(6398)))));
+ 
+     function Wq() {
+       return (0, cq.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, cq.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: "Security Exploit Bounty Program"
+ ... (57 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L362-L368` → after: `L83-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L83-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/264.js#L83-L122) · [Before (L362-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/264.js#L362-L368)

```diff
-     function sz(zz, uz, bz) {
-       let nz;
-       nz = "object" === typeof uz ? uz : {
-         referenceFrame: uz ?? 0,
-         range: bz,
-         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
+     function Nq() {
+       const {
+         t: qq
+       } = (0, Yq.v)(), [Eq, gq] = (0, lq.useState)("partnersAndCredits"), Nq = {
+         partnersAndCredits: {
+           title: Oq.featureFlags.usePartnerLinks ? qq("homePage:partnersAndCredits") : qq("homePage:credits"),
+           content: (0, cq.jsxs)(cq.Fragment, {
+             children: [(0, cq.jsx)("div", {
+               className: "BloxdInformationHeader FullyFancyText",
+               children: Oq.featureFlags.usePartnerLinks ? qq("homePage:partnersAndCredits") : qq("homePage:credits")
+             }), Oq.featureFlags.usePartnerLinks && "\n\t\t\t\t\tPartners:\n\n\t\t\t\t\tcrazygames.com - https://www.crazygames.com/c/io\n\t\t\t\t\tnow.gg - https://now.gg/\n\t\t\t\t\tminijuegos.com - https://www.minijuegos.com/\n\t\t\t\t\tkevin.games - https://kevin.games/\n\t\t\ … [truncated]
+           })
+         },
+         bloxdIngameRules: {
+           title: qq("homePage:bloxdIngameRules"),
+           content: (0, cq.jsxs)(cq.Fragment, {
+ ... (24 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L370-L443` → after: `L124-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L124-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/264.js#L124-L151) · [Before (L370-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/264.js#L370-L443)

```diff
-       let iz = zz;
-       nz.cloneOriginalAnimation && (iz = zz.clone(), iz.name = nz.clonedAnimationName || iz.name);
-       const lz = iz.getKeys();
-       if (!lz.length) return iz;
-       const Mz = nz.referenceFrame && nz.referenceFrame >= 0 ? nz.referenceFrame : 0;
-       let tz = 0;
-       const Hz = lz[0];
-       let Oz = lz.length - 1;
-       const pz = lz[Oz],
-         dz = {
-           referenceValue: Hz.value,
-           referencePosition: Ez.l.ER[0],
-           referenceQuaternion: Ez.l.Quaternion[0],
-           referenceScaling: Ez.l.ER[1],
-           keyPosition: Ez.l.ER[2],
-           keyQuaternion: Ez.l.Quaternion[1],
- ... (58 more removed lines; see GitHub link above)
+       return (0, cq.jsxs)("div", {
+         className: "BloxdInformation",
+         children: [(0, cq.jsxs)("div", {
+           className: "BloxdInformationSectionList",
+           children: [Object.keys(Nq).map((Yq => (0, cq.jsx)(mq.Q, {
+             active: Eq === Yq,
+             onClick: () => {
+               gq(Yq)
+             },
+             children: qq(Nq[Yq].title)
+           }, Yq))), Oq.featureFlags.usePartnerLinks && (0, cq.jsx)(cq.Fragment, {
+             children: (0, cq.jsxs)(mq.Q, {
+               onClick: () => {
+                 window.open("https://www.crazygames.com/c/io")
+               },
+               children: [(0, cq.jsx)(Aq.d, {
+ ... (12 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/265.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/265.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250)

#### 1. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/265.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/265.js#L4-L5)

```diff
-   40390: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   40844: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => oq,
+       e: () => Mq,
+       f: () => dq,
+       g: () => jq,
+       h: () => Wq,
+       j: () => Vq,
+       m: () => aq,
+       q: () => Nq
+     });
+     var Yq = gq(37139),
+       lq = gq(37289),
+       Oq = gq(37158),
+       mq = gq(40851),
+       xq = gq(39960),
+ ... (609 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/266.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/266.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927)

#### 1. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/266.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/266.js#L4-L5)

```diff
-   40398: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   40921: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/267.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/267.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/267.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/267.js#L4-L5)

```diff
-   40406: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   40927: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/268.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/268.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813)

#### 1. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/268.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/268.js#L4-L5)

```diff
-   40415: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   40929: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/269.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/269.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/269.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/269.js#L4-L5)

```diff
-   40420: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   40935: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/270.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/270.js#L4-L5)

```diff
-   40428: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   40940: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/271.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/271.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136)

#### 1. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/271.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/271.js#L4-L5)

```diff
-   40436: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
+   40947: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/272.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/272.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L5)

```diff
-   40443: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
+   40952: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/273.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/273.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L5)

```diff
-   40448: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
+   40956: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/274.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/274.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/274.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/274.js#L4-L5)

```diff
-   40453: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
+   40963: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/275.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/275.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896)

#### 1. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L5)

```diff
-   40457: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
+   40965: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/276.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/276.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651)

#### 1. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L5)

```diff
-   40460: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
+   40973: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/277.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/277.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592)

#### 1. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/277.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/277.js#L4-L5)

```diff
-   40462: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   40975: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/278.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/278.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L5)

```diff
-   40466: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
+   40977: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/279.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/279.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/279.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/279.js#L4-L5)

```diff
-   40469: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   40980: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/280.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/280.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/280.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/280.js#L4-L5)

```diff
-   40477: zz => {
-     zz.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   40983: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/281.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/281.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/281.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/281.js#L2)

```diff
- export const ids = [281, 282];
+ export const ids = [281];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L4-L754` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L5) · [Before (L4-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L754)

```diff
-   40493: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       CharacterCustomisationUI: () => Uz
-     });
-     var Ez = bz(56),
-       nz = bz(2756),
-       iz = bz(1114),
-       lz = bz(1871),
-       Mz = bz(1038),
-       tz = bz.n(Mz),
-       Hz = bz(1226),
-       Oz = bz(577),
-       pz = bz(1181),
-       dz = bz(2132),
-       Fz = bz(1531),
-       Zz = bz(8494),
- ... (735 more removed lines; see GitHub link above)
+   40988: qq => {
+     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/282.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/282.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L2)

```diff
- export const ids = [282];
+ export const ids = [282, 283];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L4` → after: `L4-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L4-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L4-L606) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L4)

```diff
-   40500: (zz, uz, bz) => {
+   41007: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       CharacterCustomisationUI: () => Gq
+     });
+     var Yq = gq(57),
+       lq = gq(2907),
+       Oq = gq(1101),
+       mq = gq(1904),
+       xq = gq(1018),
+       Aq = gq.n(xq),
+       cq = gq(1226),
+       uq = gq(576),
+       Bq = gq(1183),
+       Wq = gq(2182),
+       Nq = gq(1547),
+       aq = gq(8794),
+ ... (587 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L8-L9` → after: `L610-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L610-L611) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L8-L9)

```diff
-     var Ez = bz(56),
-       nz = bz(2602),
+     var Yq = gq(57),
+       lq = gq(2660),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L11-L14` → after: `L613-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L613-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L613-L616) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L11-L14)

```diff
-       lz = bz(8494),
-       Mz = bz(9020),
-       tz = bz(3382),
-       Hz = bz(1089);
+       mq = gq(8794),
+       xq = gq(9313),
+       Aq = gq(3501),
+       cq = gq(1070);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L23` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L625) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L23)

```diff
-           GM: Rz,
+           Dc: Vq,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L49` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L651) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L49)

```diff
-               const bz = Promise.all(iz.u.map((uz => zz.untilDrawn(uz)))).catch((zz => {
+               const gq = Promise.all(Oq.w.map((Eq => qq.untilDrawn(Eq)))).catch((qq => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L69` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L671) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L69)

```diff
-               for (const Ez of iz.u) {
+               for (const Yq of Oq.w) {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L71` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L673) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L71)

```diff
-                 zz(Ez, null !== (bz = uz[Ez]) && void 0 !== bz ? bz : (0, lz.b)(Ez))
+                 qq(Yq, null !== (gq = Eq[Yq]) && void 0 !== gq ? gq : (0, mq.e)(Yq))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L96-L97` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L698-L699) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L96-L97)

```diff
-           const zz = tz.c.register(dz),
-             uz = Mz.j.openCharacter(Xz.current, Fz);
+           const qq = Aq.d.register(Wq),
+             Eq = xq.i.openCharacter(Hq.current, Nq);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L112` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L714) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L112)

```diff
-           for (const uz of iz.u) {
+           for (const Eq of Oq.w) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L121` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/282.js#L723) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/282.js#L121)

```diff
-           vz && rz.current.playEmote(null !== Rz && void 0 !== Rz ? Rz : null)
+           rq && Qq.current.playEmote(null !== Vq && void 0 !== Vq ? Vq : null)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/283.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/283.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L4)

```diff
-   40515: (zz, uz, bz) => {
+   41011: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L6)

```diff
-       default: () => Wu
+       CharacterPreview: () => Bq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L8-L24` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L8-L9) · [Before (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L8-L24)

```diff
-     var Ez = bz(40524),
-       nz = bz(40569),
-       iz = bz(40577),
-       lz = bz(56),
-       Mz = bz(79),
-       tz = bz(40598),
-       Hz = bz(40603),
-       Oz = bz(4517),
-       pz = bz(40607),
-       dz = bz(1846),
-       Fz = bz(40611),
-       Zz = bz(40624),
-       Rz = bz.n(Zz),
-       Kz = bz(40582),
-       wz = bz(40590),
-       Xz = bz(1305),
- ... (1 more removed lines; see GitHub link above)
+     var Yq = gq(57),
+       lq = gq(2660),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L26-L260` → after: `L11-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L11-L16) · [Before (L26-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L26-L260)

```diff
-       rz = bz(36297),
-       oz = bz(36185),
-       Nz = bz(1417),
-       vz = bz(588),
-       xz = bz(1232),
-       Jz = bz(40669),
-       Az = bz(40531),
-       Tz = bz(40538),
-       Lz = bz(1871),
-       Pz = bz(3521),
-       Gz = bz(22),
-       az = bz(1118);
-     const Vz = 1e4,
-       mz = 250,
-       qz = 250;
-     var hz = bz(40551);
- ... (219 more removed lines; see GitHub link above)
+       mq = gq(8794),
+       xq = gq(9313),
+       Aq = gq(3501),
+       cq = gq(1070);
+     const uq = .6 * Math.PI,
+       Bq = (0, Yq.memo)((0, Yq.forwardRef)((function(qq, Eq) {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L262-L263` → after: `L18-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L18-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L18-L25) · [Before (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L262-L263)

```diff
-           text: nz,
-           focus: iz
+           onReady: gq,
+           onDrawn: Bq,
+           owner: Wq = "other",
+           framing: Nq = "player",
+           forcedCosmetics: aq,
+           Dc: Vq,
+           emotePlaySeq: dq,
+           turntableFromYaw: jq = null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L265-L494` → after: `L27-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L27-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L27-L71) · [Before (L265-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L265-L494)

```diff
-         const lz = zz.current,
-           Mz = null !== lz && void 0 !== lz && lz.dom.isConnected ? function(zz, uz) {
-             if (!kz(zz)) return null;
-             const {
-               from: bz,
-               to: Ez
-             } = zz.selection.main, nz = bz + uz.length;
-             return {
-               changes: {
-                 from: bz,
-                 to: Ez,
-                 insert: uz
-               },
-               selection: {
-                 anchor: nz
-               },
- ... (214 more removed lines; see GitHub link above)
+         const Hq = (0, Yq.useRef)(null),
+           {
+             width: oq,
+             height: Pq
+           } = (0, lq.e)(Hq),
+           Qq = (0, Yq.useRef)(null),
+           yq = (0, Yq.useRef)({}),
+           tq = (0, Yq.useRef)({}),
+           [rq, vq] = (0, Yq.useState)(!1),
+           hq = (0, Yq.useRef)(gq);
+         hq.current = gq;
+         const nq = (0, Yq.useRef)(Bq);
+         nq.current = Bq;
+         const bq = (0, Yq.useRef)(null),
+           iq = (0, Yq.useRef)(!1),
+           Zq = (0, Yq.useRef)(!1),
+ ... (29 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L496-L519` → after: `L73-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L73-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L73-L92) · [Before (L496-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L496-L519)

```diff
-               of ru) {
-               if (!bz && "explain" !== nz) continue;
-               const lz = document.createElement("button");
-               lz.type = "button", lz.textContent = iz, "change" !== nz && (lz.title = Xu.e, lz.dataset.asksAi = "true"), lz.addEventListener("mousedown", (zz => {
-                 zz.preventDefault()
-               })), lz.addEventListener("click", (() => {
-                 const bz = zz.state.selection.main;
-                 if (bz.empty) return;
-                 const Ez = {
-                   action: nz,
-                   path: uz,
-                   fromLine: zz.state.doc.lineAt(bz.from).number,
-                   toLine: zz.state.doc.lineAt(bz.to > bz.from && zz.state.doc.lineAt(bz.to).from === bz.to ? bz.to - 1 : bz.to).number,
-                   text: zz.state.sliceDoc(bz.from, bz.to)
-                 };
-                 Gz.k.sK("WorldCodeAiSelection", Ez), zz.dispatch({
- ... (8 more removed lines; see GitHub link above)
+             },
+             isReady() {
+               var qq, Eq;
+               return null !== (qq = null === (Eq = Qq.current) || void 0 === Eq ? void 0 : Eq.isReady()) && void 0 !== qq && qq
+             },
+             resetCamera() {
+               var qq;
+               null === (qq = Qq.current) || void 0 === qq || qq.resetCamera()
+             },
+             setOrbit(qq) {
+               var Eq;
+               null === (Eq = Qq.current) || void 0 === Eq || Eq.setOrbit(qq)
+             },
+             async ensureReadyForCapture(qq) {
+               var Eq;
+               await (null === (Eq = Qq.current) || void 0 === Eq ? void 0 : Eq.untilDrawn(qq))
+ ... (4 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L522-L653` → after: `L95-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L95-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L95-L105) · [Before (L522-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L522-L653)

```diff
-         }
-       }(bz, zz, uz)))]
-     }
-     var Nu = bz(1089);
-     const vu = new Set(["(", "{", "[", "<"]),
-       xu = new Set([")", "}", "]", ">"]),
-       Ju = {
-         text: "var(--codeTooltipText, white)",
-         parameterName: "var(--codeTooltipParameterName, orange)",
-         parameter: "var(--codeTooltipParameter, cyan)",
-         suffix: "var(--codeTooltipSuffix, pink)",
-         docs: "var(--codeTooltipDocs, gray)"
-       };
- 
-     function Au(zz) {
-       let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
- ... (116 more removed lines; see GitHub link above)
+         }), [aq, fq]), (0, Yq.useEffect)((() => {
+           const qq = Aq.d.register(Wq),
+             Eq = xq.i.openCharacter(Hq.current, Nq);
+           Qq.current = Eq;
+           let gq = !0;
+           return Eq.ready.then((() => {
+             gq && (vq(!0), hq.current())
+           })).catch((qq => {
+             console.error("Failed to set up the character preview", qq)
+           })), () => {
+             gq = !1, qq(), Eq.resetCamera(), Eq.close(), Qq.current = null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L655-L726` → after: `L107-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L107-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L107-L115) · [Before (L655-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L655-L726)

```diff
-         }
-       }
-     }
- 
-     function gu(zz, uz, bz) {
-       return Ez => {
-         var nz;
-         if (!uz) return [];
-         const iz = null === (nz = Ez.selection.al[0]) || void 0 === nz ? void 0 : nz.head;
-         if (void 0 === iz) return [];
-         const lz = zz.languageService.getSignatureHelpItems(bz, iz, {});
-         if (!lz || !lz.items.length) return [];
-         const Mz = lz.applicableSpan.start - lz.items[0].prefixDisplayParts.map((zz => zz.text)).join("").length,
-           tz = lz.applicableSpan.start,
-           Hz = Ez.doc.lineAt(iz),
-           Oz = Hz.from,
- ... (56 more removed lines; see GitHub link above)
+         }), []), (0, Yq.useEffect)((() => {
+           oq <= 0 || Pq <= 0 || Qq.current.resize(oq, Pq)
+         }), [oq, Pq]), (0, Yq.useEffect)((() => {
+           if (!rq) return;
+           const qq = tq.current;
+           for (const Eq of Oq.w) {
+             const gq = null === aq || void 0 === aq ? void 0 : aq[Eq],
+               Yq = qq[Eq];
+             gq && gq !== Yq ? Qq.current.setCosmetic(Eq, gq) : !gq && Yq && yq.current[Eq] && Qq.current.setCosmetic(Eq, yq.current[Eq])
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L728-L939` → after: `L117-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L117-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L117-L146) · [Before (L728-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L728-L939)

```diff
-         });
-         if (iz.documentation) {
-           tz.push("\n\n");
-           for (const zz of iz.documentation) tz.push({
-             str: zz.text,
-             style: {
-               color: Ju.docs
-             }
-           })
-         }
-         return [{
-           pos: lz,
-           end: Mz,
-           above: !0,
-           create: cu(tz)
-         }]
- ... (196 more removed lines; see GitHub link above)
+           tq.current = {
+             ...aq
+           }, Zq.current = !0, fq()
+         }), [aq, rq, fq]), (0, Yq.useEffect)((() => {
+           rq && Qq.current.playEmote(null !== Vq && void 0 !== Vq ? Vq : null)
+         }), [Vq, dq, rq]), (0, Yq.useEffect)((() => {
+           if (!rq || null === jq) return;
+           const qq = Qq.current,
+             {
+               pitch: Eq,
+               radius: gq
+             } = xq.c[Nq];
+           if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return qq.setOrbit({
+             yaw: jq + uq,
+             pitch: Eq,
+             radius: gq
+ ... (14 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L941-L1182` → after: `L148-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/283.js#L148-L152) · [Before (L941-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/283.js#L941-L1182)

```diff
-         }), mu(zz, xu, lz), Mz(lz))
-       }));
-       const Tu = (0, lz.useMemo)((() => {
-         if (!Mu) return [];
-         const {
-           ml: zz,
-           fsMap: bz
-         } = Mu;
-         ! function(zz, uz, bz, Ez) {
-           if (zz.getSourceFile(bz)) return;
-           const nz = Ez || "\n";
-           uz.set(bz, nz), zz.createFile(bz, nz)
-         }(zz, bz, xu, (kz ? vu.current : ru.current) || "\n");
-         const lz = uz && qu(kz ? null !== zu && void 0 !== zu ? zu : "index.ts" : Cz),
-           Mz = [(0, nz.d)({
-             jsx: !1,
- ... (226 more removed lines; see GitHub link above)
+         }), [rq, jq]), (0, cq.jsx)("div", {
+           className: "CharCustomisationPreview",
+           ref: Hq
+         })
+       })))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/284.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/284.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L12` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L6) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L12)

```diff
-   40524: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => au,
-       e: () => vu,
-       i: () => Xu,
-       m: () => tz,
-       q: () => Vu,
-       u: () => Hz,
-       v: () => du
+   41028: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => sE
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L14-L15800` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L8-L50) · [Before (L14-L15800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L14-L15800)

```diff
-     var Ez = bz(40531),
-       nz = bz(40538),
-       iz = bz(40551);
-     class lz {
-       constructor(zz, uz, bz, Ez) {
-         this.state = zz, this.pos = uz, this.explicit = bz, this.view = Ez, this.abortListeners = [], this.abortOnDocChange = !1
-       }
-       tokenBefore(zz) {
-         let uz = (0, iz.lb)(this.state).resolveInner(this.pos, -1);
-         for (; uz && zz.indexOf(uz.name) < 0;) uz = uz.parent;
-         return uz ? {
-           from: uz.from,
-           to: this.pos,
-           text: this.state.sliceDoc(uz.from, this.pos),
-           type: uz.type
-         } : null
- ... (15771 more removed lines; see GitHub link above)
+     var Yq = gq(41037),
+       lq = gq(41082),
+       Oq = gq(41091),
+       mq = gq(57),
+       xq = gq(71),
+       Aq = gq(41108),
+       cq = gq(41113),
+       uq = gq(4583),
+       Bq = gq(41120),
+       Wq = gq(1876),
+       Nq = gq(41125),
+       aq = gq(41144),
+       Vq = gq.n(aq),
+       dq = gq(41100),
+       jq = gq(41106),
+       Hq = gq(1326),
+ ... (27 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L15802-L15822` → after: `L52-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L52-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L52-L58) · [Before (L15802-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L15802-L15822)

```diff
-       return nz = iz.type.prop(Mz) && (Ez = bz ? (0, tz._)(zz, iz.from, 1) : (0, tz._)(zz, iz.to, -1)) && Ez.matched ? bz ? Ez.end.to : Ez.end.from : bz ? iz.to : iz.from, lz.l.cursor(nz, bz ? -1 : 1)
-     }
- 
-     function kz(zz, uz) {
-       return Dz(zz, (bz => {
-         if (!bz.empty) return Qz(bz, uz);
-         let Ez = zz.moveVertically(bz, uz);
-         return Ez.head != bz.head ? Ez : zz.moveToLineBoundary(bz, uz)
-       }))
-     }
-     const zu = zz => kz(zz, !1),
-       uu = zz => kz(zz, !0);
- 
-     function bu(zz) {
-       let uz, bz = zz.scrollDOM.clientHeight < zz.scrollDOM.scrollHeight - 2,
-         Ez = 0,
- ... (5 more removed lines; see GitHub link above)
+       toDOM() {
+         const qq = document.createElement("span");
+         qq.className = "cm-remote-cursor-wrapper", qq.style.borderLeftColor = this.colour;
+         const Eq = document.createElement("span");
+         if (Eq.className = "cm-remote-cursor", Eq.style.borderLeftColor = this.colour, qq.appendChild(Eq), this.showName) {
+           const Eq = document.createElement("span");
+           Eq.className = "cm-remote-cursor-name", Eq.style.backgroundColor = this.colour, Eq.textContent = this.playerName, qq.appendChild(Eq)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L15824-L15830` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L60) · [Before (L15824-L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L15824-L15830)

```diff
-         uz = zz.scrollDOM.clientHeight - Ez - nz
-       } else uz = (zz.dom.ownerDocument.defaultView || window).innerHeight;
-       return {
-         marginTop: Ez,
-         marginBottom: nz,
-         selfScroll: bz,
-         height: Math.max(zz.defaultLineHeight, uz - 5)
+         return qq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L15832-L15849` → after: `L62-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L62-L63) · [Before (L15832-L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L15832-L15849)

```diff
-     }
- 
-     function Eu(zz, uz) {
-       let bz, Ez = bu(zz),
-         {
-           state: nz
-         } = zz,
-         iz = Sz(nz.selection, (bz => bz.empty ? zz.moveVertically(bz, uz, Ez.height) : Qz(bz, uz)));
-       if (iz.eq(nz.selection)) return !1;
-       if (Ez.selfScroll) {
-         let uz = zz.coordsAtPos(nz.selection.main.head),
-           lz = zz.scrollDOM.getBoundingClientRect(),
-           tz = lz.top + Ez.marginTop,
-           Hz = lz.bottom - Ez.marginBottom;
-         uz && uz.top > tz && uz.bottom < Hz && (bz = Mz.k.scrollIntoView(iz.main.head, {
-           y: "start",
- ... (2 more removed lines; see GitHub link above)
+       eq(qq) {
+         return this.colour === qq.colour && this.playerName === qq.playerName && this.showName === qq.showName
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L15851-L15863` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L65-L66) · [Before (L15851-L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L15851-L15863)

```diff
-       return zz.dispatch(yz(nz, iz), {
-         effects: bz
-       }), !0
-     }
-     const nu = zz => Eu(zz, !1),
-       iu = zz => Eu(zz, !0);
- 
-     function lu(zz, uz, bz) {
-       let Ez = zz.lineBlockAt(uz.head),
-         nz = zz.moveToLineBoundary(uz, bz);
-       if (nz.head == uz.head && nz.head != (bz ? Ez.to : Ez.from) && (nz = zz.moveToLineBoundary(uz, bz, !1)), !bz && nz.head == Ez.from && Ez.length) {
-         let bz = /^\s*/.exec(zz.state.sliceDoc(Ez.from, Math.min(Ez.from + 100, Ez.to)))[0].length;
-         bz && uz.head != Ez.from + bz && (nz = lz.l.cursor(Ez.from + bz))
+       get estimatedHeight() {
+         return -1
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L15865-L15963` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L68-L69) · [Before (L15865-L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L15865-L15963)

```diff
-       return nz
-     }
- 
-     function Mu(zz, uz, bz) {
-       let Ez = !1,
-         nz = Sz(zz.selection, (uz => {
-           let nz = (0, tz._)(zz, uz.head, -1) || (0, tz._)(zz, uz.head, 1) || uz.head > 0 && (0, tz._)(zz, uz.head - 1, 1) || uz.head < zz.doc.length && (0, tz._)(zz, uz.head + 1, -1);
-           if (!nz || !nz.end) return uz;
-           Ez = !0;
-           let iz = nz.start.from == uz.head ? nz.end.to : nz.end.from;
-           return bz ? lz.l.range(uz.anchor, iz) : lz.l.cursor(iz)
-         }));
-       return !!Ez && (uz(yz(zz, nz)), !0)
-     }
- 
-     function tu(zz, uz) {
- ... (83 more removed lines; see GitHub link above)
+       ignoreEvent() {
+         return !0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L15969-L16066` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L74) · [Before (L15969-L16066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L15969-L16066)

```diff
-       if (zz.state.readOnly) return !1;
-       let bz = "delete.selection",
-         {
-           state: Ez
-         } = zz,
-         nz = Ez.changeByRange((Ez => {
-           let {
-             from: nz,
-             to: iz
-           } = Ez;
-           if (nz == iz) {
-             let lz = uz(Ez);
-             lz < nz ? (bz = "delete.backward", lz = xu(zz, lz, !1)) : lz > nz && (bz = "delete.forward", lz = xu(zz, lz, !0)), nz = Math.min(nz, lz), iz = Math.max(iz, lz)
-           } else nz = xu(zz, nz, !1), iz = xu(zz, iz, !0);
-           return nz == iz ? {
-             range: Ez
- ... (82 more removed lines; see GitHub link above)
+       const gq = [],
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16068-L16081` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L76-L86) · [Before (L16068-L16081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16068-L16081)

```diff
-       for (let iz of Gu(zz)) {
-         if (bz ? iz.to == zz.doc.length : 0 == iz.from) continue;
-         let uz = zz.doc.lineAt(bz ? iz.to + 1 : iz.from - 1),
-           Mz = uz.length + 1;
-         if (bz) {
-           Ez.push({
-             from: iz.to,
-             to: uz.to
-           }, {
-             from: iz.from,
-             insert: uz.text + zz.lineBreak
-           });
-           for (let uz of iz.al) nz.push(lz.l.range(Math.min(zz.doc.length, uz.anchor + Mz), Math.min(zz.doc.length, uz.head + Mz)))
-         } else {
+       for (const [, mq] of qq) {
+         const qq = Eq - mq.lastMoved < Jq;
+         if (gq.push({
+             pos: mq.head,
+             decoration: bq.c.widget({
+               widget: new Fq(mq.colour, mq.playerName, qq),
+               side: 1
+             })
+           }), mq.anchor !== mq.head) {
+           const qq = Math.min(mq.anchor, mq.head),
+             Eq = Math.max(mq.anchor, mq.head);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16083-L16089` → after: `L88-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L88-L96) · [Before (L16083-L16089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16083-L16089)

```diff
-             from: uz.from,
-             to: iz.from
-           }, {
-             from: iz.to,
-             insert: zz.lineBreak + uz.text
-           });
-           for (let zz of iz.al) nz.push(lz.l.range(zz.anchor - Mz, zz.head - Mz))
+             from: qq,
+             to: Eq,
+             decoration: bq.c.mark({
+               class: "cm-remote-selection",
+               attributes: {
+                 style: `background-color: ${mq.colour}33`
+               }
+             })
+           })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16092-L16103` → after: `L99-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L99-L109) · [Before (L16092-L16103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16092-L16103)

```diff
-       return !!Ez.length && (uz(zz.update({
-         changes: Ez,
-         scrollIntoView: !0,
-         selection: lz.l.create(nz, zz.selection.mainIndex),
-         userEvent: "move.line"
-       })), !0)
-     }
- 
-     function Vu(zz, uz, bz) {
-       if (zz.readOnly) return !1;
-       let Ez = [];
-       for (let iz of Gu(zz)) bz ? Ez.push({
+       const lq = new nq.E,
+         Oq = [];
+       for (const mq of gq) Oq.push({
+         bias: 1,
+         deco: mq.decoration,
+         from: mq.pos,
+         to: mq.pos
+       });
+       for (const mq of Yq) Oq.push({
+         bias: 0,
+         deco: mq.decoration,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16105-L16108` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L111) · [Before (L16105-L16108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16105-L16108)

```diff
-         insert: zz.doc.slice(iz.from, iz.to) + zz.lineBreak
-       }) : Ez.push({
-         from: iz.to,
-         insert: zz.lineBreak + zz.doc.slice(iz.from, iz.to)
+         to: mq.to
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16110-L16118` → after: `L113-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L113-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L113-L172) · [Before (L16110-L16118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16110-L16118)

```diff
-       let nz = zz.changes(Ez);
-       return uz(zz.update({
-         changes: nz,
-         selection: zz.selection.map(nz, bz ? 1 : -1),
-         scrollIntoView: !0,
-         userEvent: "input.copyline"
-       })), !0
-     }
-     const mu = qu(!1);
+       Oq.sort(((qq, Eq) => qq.from - Eq.from || qq.deco.startSide - Eq.deco.startSide || qq.bias - Eq.bias));
+       for (const mq of Oq) lq.add(mq.from, mq.to, mq.deco);
+       return lq.finish()
+     }
+     const Xq = nq.L.define({
+       create: () => ({
+         cursors: new Map,
+         YO: bq.c.none
+       }),
+       update(qq, Eq) {
+         let gq = qq.cursors,
+           Yq = !1;
+         if (Eq.docChanged) {
+           const qq = new Map;
+           for (const [Yq, lq] of gq) qq.set(Yq, {
+             ...lq,
+ ... (44 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16121-L16169` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L175) · [Before (L16121-L16169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16121-L16169)

```diff
-       return uz => {
-         let {
-           state: bz,
-           dispatch: Ez
-         } = uz;
-         if (bz.readOnly) return !1;
-         let nz = bz.changeByRange((uz => {
-           let {
-             from: Ez,
-             to: nz
-           } = uz, iz = bz.doc.lineAt(Ez), Mz = !zz && Ez == nz && function(zz, uz) {
-             if (/\(\)|\[\]|\{\}/.test(zz.sliceDoc(uz - 1, uz + 1))) return {
-               from: uz,
-               to: uz
-             };
-             let bz, Ez = (0, tz.lb)(zz).resolveInner(uz),
- ... (33 more removed lines; see GitHub link above)
+       return qq.field(Iq)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16173-L16204` → after: `L180-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L180-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L180-L191) · [Before (L16173-L16204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16173-L16204)

```diff
-       let bz = -1;
-       return zz.changeByRange((Ez => {
-         let nz = [];
-         for (let lz = Ez.from; lz <= Ez.to;) {
-           let iz = zz.doc.lineAt(lz);
-           iz.number > bz && (Ez.empty || Ez.to > iz.from) && (uz(iz, nz, Ez), bz = iz.number), lz = iz.to + 1
-         }
-         let iz = zz.changes(nz);
-         return {
-           changes: nz,
-           range: lz.l.range(iz.mapPos(Ez.anchor, 1), iz.mapPos(Ez.head, 1))
-         }
-       }))
-     }
-     const Uu = zz => {
-         let {
- ... (16 more removed lines; see GitHub link above)
+       const gq = (0, mq.useRef)(null);
+       (0, mq.useEffect)((() => {
+         var qq;
+         (null === (qq = gq.current) || void 0 === qq ? void 0 : qq.path) !== Eq && (gq.current = null)
+       }), [Eq]);
+       const Yq = qq => {
+         var Yq;
+         const lq = gq.current;
+         if (null === qq || void 0 === qq || !qq.dom.isConnected || !lq || lq.path !== Eq) return;
+         gq.current = null;
+         const {
+           jN: mq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16206-L16377` → after: `L193-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L193-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L193-L201) · [Before (L16206-L16377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16206-L16377)

```diff
-         return !uz.readOnly && (bz(uz.update(hu(uz, ((zz, bz) => {
-           let Ez = /^\s*/.exec(zz.text)[0];
-           if (!Ez) return;
-           let nz = (0, lz.R)(Ez, uz.tabSize),
-             iz = 0,
-             Mz = (0, tz.X)(uz, Math.max(0, nz - (0, tz.K)(uz)));
-           for (; iz < Ez.length && iz < Mz.length && Ez.charCodeAt(iz) == Mz.charCodeAt(iz);) iz++;
-           bz.push({
-             from: zz.from + iz,
-             to: zz.from + Ez.length,
-             insert: Mz.slice(iz)
-           })
-         })), {
-           userEvent: "delete.dedent"
-         })), !0)
-       },
- ... (156 more removed lines; see GitHub link above)
+         if (mq && null !== mq.text && performance.now() - mq.at < qE) {
+           const Eq = function(qq, Eq) {
+             if (qq === Eq) return null;
+             const gq = Math.min(qq.length, Eq.length);
+             let Yq = 0;
+             for (; Yq < gq && qq[Yq] === Eq[Yq];) Yq++;
+             let lq = 0;
+             for (; lq < gq - Yq && qq[qq.length - 1 - lq] === Eq[Eq.length - 1 - lq];) lq++;
+             return {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16379` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L203-L204) · [Before (L16379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16379)

```diff
-               to: Ez
+               to: qq.length - lq,
+               insert: Eq.slice(Yq, Eq.length - lq)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16381-L16390` → after: `L206-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L206-L207) · [Before (L16381-L16390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16381-L16390)

```diff
-           }))), Ez = Sz(uz.selection, (uz => {
-             let bz;
-             if (zz.lineWrapping) {
-               let Ez = zz.lineBlockAt(uz.head),
-                 nz = zz.coordsAtPos(uz.head, uz.assoc || 1);
-               nz && (bz = Ez.bottom + zz.documentTop - nz.bottom + zz.defaultLineHeight / 2)
-             }
-             return zz.moveVertically(uz, !0, bz)
-           })).map(bz);
-           return zz.dispatch({
+           }(qq.state.doc.toString(), mq.text);
+           null !== Eq && qq.dispatch({
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16392-L16522` → after: `L209-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L209-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L209-L210) · [Before (L16392-L16522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16392-L16522)

```diff
-             selection: Ez,
-             scrollIntoView: !0,
-             userEvent: "delete.line"
-           }), !0
-         }
-       }, {
-         key: "Shift-Mod-\\",
-         run: zz => {
-           let {
-             state: uz,
-             dispatch: bz
-           } = zz;
-           return Mu(uz, bz, !1)
-         }
-       }, {
-         key: "Mod-/",
- ... (115 more removed lines; see GitHub link above)
+             userEvent: mq.placed ? "input" : void 0
+           })
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16524-L16616` → after: `L212-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L212-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L212-L245) · [Before (L16524-L16616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16524-L16616)

```diff
-       }, {
-         key: "Backspace",
-         run: Au,
-         shift: Au,
-         preventDefault: !0
-       }, {
-         key: "Delete",
-         run: Tu,
-         preventDefault: !0
-       }, {
-         key: "Mod-Backspace",
-         mac: "Alt-Backspace",
-         run: Pu,
-         preventDefault: !0
-       }, {
-         key: "Mod-Delete",
- ... (77 more removed lines; see GitHub link above)
+         const {
+           doc: xq
+         } = qq.state, Aq = xq.line(Math.min(Math.max(lq.line, 1), xq.lines)), cq = Aq.from + Math.min(null !== (Yq = lq.column) && void 0 !== Yq ? Yq : 0, Aq.length);
+         qq.dispatch({
+           selection: {
+             anchor: cq
+           },
+           effects: Oq.d.scrollIntoView(cq, {
+             y: "center"
+           }),
+           userEvent: null !== mq && void 0 !== mq && mq.placed ? "select" : void 0
+         }), !1 !== (null === mq || void 0 === mq ? void 0 : mq.focused) && qq.focus()
+       };
+       return (0, tq.f)("CodeEditorGoToLine", (Eq => {
+         gq.current = Eq, Yq(qq.current)
+       })), (0, tq.f)("CodeEditorKeepEdits", (() => {
+ ... (18 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16618-L16633` → after: `L247-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L247-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L247-L271) · [Before (L16618-L16633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16618-L16633)

```diff
-       }, {
-         key: "Ctrl-t",
-         run: zz => {
-           let {
-             state: uz,
-             dispatch: bz
-           } = zz;
-           if (uz.readOnly) return !1;
-           let Ez = uz.changeByRange((zz => {
-             if (!zz.empty || 0 == zz.from || zz.from == uz.doc.length) return {
-               range: zz
-             };
-             let bz = zz.from,
-               Ez = uz.doc.lineAt(bz),
-               nz = bz == Ez.from ? bz - 1 : (0, lz.U)(Ez.text, bz - Ez.from, !1) + Ez.from,
-               iz = bz == Ez.to ? bz + 1 : (0, lz.U)(Ez.text, bz - Ez.from, !0) + Ez.from;
+       })), qq => {
+         var lq;
+         const Oq = gq.current;
+         !1 === (null === Oq || void 0 === Oq || null === (lq = Oq.jN) || void 0 === lq ? void 0 : lq.focused) && Oq.path === Eq || qq.focus(), Yq(qq)
+       }
+     }
+     var gE = gq(4191),
+       YE = gq(1183);
+ 
+     function lE(qq, Eq) {
+       const {
+         t: gq
+       } = (0, YE.v)();
+       (0, tq.f)("CodeEditorInsertText", (Yq => {
+         let {
+           text: lq,
+ ... (9 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16638` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L276) · [Before (L16638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16638)

```diff
-                 insert: uz.doc.slice(bz, iz).append(uz.doc.slice(nz, bz))
+                 insert: Eq
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16640-L16676` → after: `L278-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L278-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L278-L287) · [Before (L16640-L16676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16640-L16676)

```diff
-               range: lz.l.cursor(iz)
-             }
-           }));
-           return !Ez.changes.empty && (bz(uz.update(Ez, {
-             scrollIntoView: !0,
-             userEvent: "move.character"
-           })), !0)
-         }
-       }, {
-         key: "Ctrl-v",
-         run: iu
-       }].map((zz => ({
-         mac: zz.key,
-         run: zz.run,
-         shift: zz.shift
-       }))))),
- ... (21 more removed lines; see GitHub link above)
+               selection: {
+                 anchor: lq
+               },
+               effects: [bq.g.scrollIntoView(lq, {
+                 y: "center"
+               }), wq.of({
+                 from: gq,
+                 to: lq
+               })],
+               userEvent: "input"
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16678-L16700` → after: `L289-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L289-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L289-L320) · [Before (L16678-L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16678-L16700)

```diff
-           })]
-         }()), !1 !== zz.foldGutter && Ez.push((0, tz.A)()), !1 !== zz.drawSelection && Ez.push((0, Mz.A)()), !1 !== zz.dropCursor && Ez.push((0, Mz.B)()), !1 !== zz.allowMultipleSelections && Ez.push(lz.n.allowMultipleSelections.of(!0)), !1 !== zz.indentOnInput && Ez.push((0, tz. … [truncated]
-           fallback: !0
-         })), !1 !== zz.bracketMatching && Ez.push((0, tz.l)()), !1 !== zz.closeBrackets && Ez.push((0, Du.i)()), !1 !== zz.autocompletion && Ez.push((0, Du.c)()), !1 !== zz.rectangularSelection && Ez.push((0, Mz.ib)()), !1 !== uz && Ez.push((0, Mz.x)()), !1 !== zz.highlightActive … [truncated]
-       },
-       eu = bz(40566);
-     const ju = "#e5c07b",
-       Iu = "#e06c75",
-       Bu = "#56b6c2",
-       Cu = "#ffffff",
-       Yu = "#abb2bf",
-       ku = "#7d8799",
-       zb = "#61afef",
-       ub = "#98c379",
-       bb = "#d19a66",
-       Eb = "#c678dd",
- ... (7 more removed lines; see GitHub link above)
+           }(mq.state, lq) : null;
+         null !== mq && null !== xq ? (mq.dispatch(xq), Oq && mq.focus(), setTimeout((() => {
+           mq.dom.isConnected && mq.dispatch({
+             effects: wq.of(null)
+           })
+         }), 1500)) : (0, gE.d)(lq).then((() => {
+           Eq({
+             message: gq("codeEditorWorld:pickCopied", {
+               coords: lq
+             }),
+             type: "success"
+           })
+         }), (qq => {
+           console.error("Pick could not copy the coordinates", qq), Eq({
+             message: gq("codeEditorWorld:pickPlaceCursor", {
+               coords: lq
+ ... (16 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16712` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L332) · [Before (L16712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16712)

```diff
-           backgroundColor: tb
+           backgroundColor: "#d7d8de"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16715` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L335) · [Before (L16715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16715)

```diff
-           backgroundColor: nb,
+           backgroundColor: "#f0f0f1",
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16719` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L339) · [Before (L16719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16719)

```diff
-           borderBottom: "2px solid black"
+           borderBottom: "2px solid #d4d4d6"
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16722` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L342) · [Before (L16722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16722)

```diff
-           borderTop: "2px solid black"
+           borderTop: "2px solid #d4d4d6"
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16725` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L345) · [Before (L16725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16725)

```diff
-           backgroundColor: "#72a1ff59",
+           backgroundColor: "#72a1ff40",
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16732` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L352) · [Before (L16732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16732)

```diff
-           backgroundColor: "#6699ff0b"
+           backgroundColor: "#383a420a"
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16735` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L355) · [Before (L16735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16735)

```diff
-           backgroundColor: "#aafe661a"
+           backgroundColor: "#50a14f26"
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16738` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L358) · [Before (L16738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16738)

```diff
-           backgroundColor: "#bad0f847"
+           backgroundColor: "#4078f233"
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16751` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L371) · [Before (L16751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16751)

```diff
-           color: "#ddd"
+           color: "#555"
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16772` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L392) · [Before (L16772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16772)

```diff
-         dark: !0
+         dark: !1
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16774` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L394) · [Before (L16774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16774)

```diff
-       pb = tz.d.define([{
+       VE = pq.c.define([{
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16776` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L396) · [Before (L16776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16776)

```diff
-         color: Eb
+         color: "#a626a4"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16782` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L402) · [Before (L16782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16782)

```diff
-         color: zb
+         color: "#4078f2"
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16791` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L411) · [Before (L16791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16791)

```diff
-         color: ju
+         color: "#c18401"
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16794` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L414) · [Before (L16794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16794)

```diff
-         color: Bu
+         color: "#0184bc"
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16820` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L440) · [Before (L16820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16820)

```diff
-         color: ub
+         color: "#50a14f"
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16823` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L443) · [Before (L16823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16823)

```diff
-         color: Cu
+         color: "#000000"
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16825-L16847` → after: `L445-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L445-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L445-L453) · [Before (L16825-L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16825-L16847)

```diff
-       db = [Ob, (0, tz.eb)(pb)];
-     var Fb = Mz.k.theme({
-       "&": {
-         backgroundColor: "#fff"
-       }
-     }, {
-       dark: !1
-     });
-     class Zb {
-       constructor(zz, uz) {
-         this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = uz, this.timeoutMS = uz, this.callbacks.push(zz)
-       }
-       sd() {
-         if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
-           this.isTimeExhausted = !0;
-           var zz = this.callbacks.slice();
- ... (7 more removed lines; see GitHub link above)
+       dE = [aE, (0, pq.cb)(VE)];
+     var jE = gq(36962),
+       HE = gq(41208);
+     const oE = Oq.j.define(),
+       PE = Oq.k.define({
+         create: () => !1,
+         update(qq, Eq) {
+           for (const gq of Eq.effects) gq.is(oE) && (qq = gq.value);
+           return qq
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16849-L16883` → after: `L455-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L455-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L455-L465) · [Before (L16849-L16883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16849-L16883)

```diff
-       }
-       cancel() {
-         this.isCancelled = !0, this.callbacks.length = 0
-       }
-       reset() {
-         this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
-       }
-       get isDone() {
-         return this.isCancelled || this.isTimeExhausted
-       }
-     }
-     class Rb {
-       constructor() {
-         this.interval = null, this.latches = new Set
-       }
-       add(zz) {
- ... (19 more removed lines; see GitHub link above)
+       }),
+       QE = [{
+         action: "explain",
+         label: "Explain this"
+       }, {
+         action: "fix",
+         label: "Fix this"
+       }, {
+         action: "change",
+         label: "Change this\u2026"
+       }];
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16885-L16923` → after: `L467-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L467-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L467-L479) · [Before (L16885-L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16885-L16923)

```diff
-     function fb(zz) {
-       var {
-         value: uz,
-         selection: bz,
-         onChange: Ez,
-         onStatistics: nz,
-         onCreateEditor: tz,
-         onUpdate: Hz,
-         extensions: Oz = Xb,
-         autoFocus: pz,
-         theme: dz = "light",
-         height: Fz = null,
-         minHeight: Zz = null,
-         maxHeight: Rz = null,
-         width: Kz = null,
-         minWidth: wz = null,
- ... (23 more removed lines; see GitHub link above)
+     function yE(qq, Eq) {
+       return [PE, Oq.l.fromClass(class {
+         constructor(qq) {
+           this.view = qq, this.onDown = qq => {
+             const Eq = qq.target instanceof Element && null !== qq.target.closest(".cm-tooltip");
+             0 !== qq.button || Eq || this.view.state.field(PE) || this.view.dispatch({
+               effects: oE.of(!0)
+             })
+           }, this.onUp = () => {
+             this.view.state.field(PE) && this.view.dispatch({
+               effects: oE.of(!1)
+             })
+           }, qq.dom.addEventListener("mousedown", this.onDown), document.addEventListener("mouseup", this.onUp), window.addEventListener("blur", this.onUp)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16925-L16930` → after: `L481-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L481-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L481-L519) · [Before (L16925-L16930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16925-L16930)

```diff
-       }), qz = Mz.k.updateListener.of((zz => {
-         if (zz.docChanged && "function" === typeof Ez && !zz.transactions.some((zz => zz.annotation(wb)))) {
-           az.current ? az.current.reset() : (az.current = new Zb((() => {
-             if (Vz.current) {
-               var zz = Vz.current;
-               Vz.current = null, zz()
+         destroy() {
+           this.view.dom.removeEventListener("mousedown", this.onDown), document.removeEventListener("mouseup", this.onUp), window.removeEventListener("blur", this.onUp)
+         }
+       }), Oq.s.compute(["selection", PE], (gq => function(qq, Eq, gq) {
+         const Yq = qq.selection.main;
+         return Yq.empty || qq.field(PE) || qq.sliceDoc(Yq.from, Yq.to).trim().length < 2 ? null : {
+           pos: Yq.from,
+           above: !0,
+           create: qq => {
+             const Yq = document.createElement("div");
+             Yq.className = "CodeSelectionActions", Yq.setAttribute("role", "toolbar"), Yq.setAttribute("aria-label", "AI Helper: picked code");
+             for (const {
+                 action: lq,
+                 label: Oq
+               }
+               of QE) {
+ ... (23 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L16999-L17000` → after: `L523-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L523-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L523-L550) · [Before (L16999-L17000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L16999-L17000)

```diff
-         return () => {
-           Tz && (Gz(void 0), Lz(void 0))
+       }(gq, qq, Eq)))]
+     }
+     var tE = gq(1070);
+     const rE = new Set(["(", "{", "[", "<"]),
+       vE = new Set([")", "}", "]", ">"]),
+       hE = {
+         text: "var(--codeTooltipText, white)",
+         parameterName: "var(--codeTooltipParameterName, orange)",
+         parameter: "var(--codeTooltipParameter, cyan)",
+         suffix: "var(--codeTooltipSuffix, pink)",
+         docs: "var(--codeTooltipDocs, gray)"
+       };
+ 
+     function nE(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ 
+ ... (12 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L17002-L17027` → after: `L552-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L552-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L552-L559) · [Before (L17002-L17027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L17002-L17027)

```diff
-       }), [Jz, Pz]), (0, iz.useEffect)((() => {
-         zz.container && Az(zz.container)
-       }), [zz.container]), (0, iz.useEffect)((() => () => {
-         Tz && (Tz.destroy(), Lz(void 0)), az.current && (az.current.cancel(), az.current = null)
-       }), [Tz]), (0, iz.useEffect)((() => {
-         pz && Tz && Tz.focus()
-       }), [pz, Tz]), (0, iz.useEffect)((() => {
-         Tz && Tz.dispatch({
-           effects: lz.B.reconfigure.of(Uz)
-         })
-       }), [dz, Oz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, Ez, Hz]), (0, iz.useEffect)((() => {
-         if (void 0 !== uz) {
-           var zz = Tz ? Tz.state.doc.toString() : "";
-           if (Tz && uz !== zz) {
-             var bz = () => {
-               Tz && uz !== Tz.state.doc.toString() && Tz.dispatch({
- ... (10 more removed lines; see GitHub link above)
+         return Yq
+       }
+       const Yq = [];
+       if (Yq.push(...gq(qq.prefixDisplayParts, hE.text)), qq.parameters.length > 0) {
+         Yq.push("\n");
+         for (let lq = 0; lq < qq.parameters.length; lq++) {
+           const Oq = qq.parameters[lq];
+           Yq.push("\t"), Yq.push(...gq(Oq.displayParts, hE.parameter, null !== Eq && lq !== Eq)), Yq.push("\n")
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L17038-L17123` → after: `L564-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L564-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L564-L592) · [Before (L17038-L17123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L17038-L17123)

```diff
-     var sb = bz(1089),
-       rb = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly",  … [truncated]
-       ob = (0, iz.forwardRef)(((zz, uz) => {
-         var {
-           className: bz,
-           value: lz = "",
-           selection: Mz,
-           extensions: tz = [],
-           onChange: Hz,
-           onStatistics: Oz,
-           onCreateEditor: pz,
-           onUpdate: dz,
-           autoFocus: Fz,
-           theme: Zz = "light",
-           height: Rz,
-           minHeight: Kz,
- ... (70 more removed lines; see GitHub link above)
+     var bE = function(qq) {
+       return qq[qq.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", qq[qq.DuplicateIdentifier = 2300] = "DuplicateIdentifier", qq
+     }(bE || {});
+     const iE = new Set([bE.DuplicateIdentifier]),
+       ZE = new Set([bE.VariableDefinedElsewhere]),
+       fE = new Set([]),
+       ME = "/index.js";
+ 
+     function TE(qq) {
+       return "/" + qq
+     }
+ 
+     function zE(qq, Eq, gq) {
+       qq.getSourceFile(Eq) && qq.deleteFile(Eq), qq.createFile(Eq, gq)
+     }
+ 
+ ... (13 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L17130-L17135` → after: `L597-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L597-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L597-L635) · [Before (L17130-L17135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L17130-L17135)

```diff
-       if ("string" == typeof uz) zz.appendChild(document.createTextNode(uz));
-       else if (null == uz);
-       else if (null != uz.nodeType) zz.appendChild(uz);
-       else {
-         if (!Array.isArray(uz)) throw new RangeError("Unsupported child node: " + uz);
-         for (var bz = 0; bz < uz.length; bz++) nz(zz, uz[bz])
+       return gq => {
+         var Yq, lq;
+         const Oq = qq.languageService.getCompletionsAtPosition(Eq, gq.pos, {});
+         if (!Oq) return {
+           from: gq.pos,
+           options: []
+         };
+         let mq = null !== (Yq = null === (lq = Oq.optionalReplacementSpan) || void 0 === lq ? void 0 : lq.start) && void 0 !== Yq ? Yq : gq.pos;
+         if (!Oq.optionalReplacementSpan) {
+           const qq = gq.state.doc.sliceString(0, gq.pos);
+           for (; mq > 0 && /[\w$]/.test(qq[mq - 1]);) mq--
+         }
+         return Oq.entries = Oq.entries.filter((qq => qq.kind !== Vq().ScriptElementKind.warning)), {
+           from: mq,
+           options: Oq.entries.map((Yq => {
+             var lq, Oq, xq, Aq;
+ ... (23 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L17156-L17157` → after: `L639-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L639-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L639-L654) · [Before (L17156-L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L17156-L17157)

```diff
-         function Ez(zz) {
-           return /^@/.test(zz) ? [zz] : zz.split(/,\s*/)
+     function LE(qq) {
+       return Eq => {
+         const gq = document.createElement("div");
+         gq.className = "CodeEditorTooltip";
+         let Yq = !1;
+         return queueMicrotask((() => {
+           Yq || (xq.render((0, tE.jsx)(Wq.c, {
+             text: qq
+           }), gq), Eq.requestMeasure())
+         })), {
+           dom: gq,
+           destroy() {
+             Yq = !0, queueMicrotask((() => {
+               xq.unmountComponentAtNode(gq)
+             }))
+           }
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L17160-L17172` → after: `L659-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L659-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L659-L720) · [Before (L17160-L17172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L17160-L17172)

```diff
-         function nz(zz, uz, iz, lz) {
-           let Mz = [],
-             tz = /^@(\w+)\b/.exec(zz[0]),
-             Hz = tz && "keyframes" == tz[1];
-           if (tz && null == uz) return iz.push(zz[0] + ";");
-           for (let bz in uz) {
-             let lz = uz[bz];
-             if (/&/.test(bz)) nz(bz.split(/,\s*/).map((uz => zz.map((zz => uz.replace(/&/, zz))))).reduce(((zz, uz) => zz.concat(uz))), lz, iz);
-             else if (lz && "object" == typeof lz) {
-               if (!tz) throw new RangeError("The value of a property (" + bz + ") should be a primitive value.");
-               nz(Ez(bz), lz, Mz, Hz)
-             } else null != lz && Mz.push(bz.replace(/_.*/, "").replace(/[A-Z]/g, (zz => "-" + zz.toLowerCase())) + ": " + lz + ";")
-           }(Mz.length || Hz) && iz.push((!bz || tz || lz ? zz : zz.map(bz)).join(", ") + " {" + Mz.join(" ") + "}")
+     function JE(qq, Eq, gq) {
+       return Yq => {
+         var lq;
+         if (!Eq) return [];
+         const Oq = null === (lq = Yq.selection.zV[0]) || void 0 === lq ? void 0 : lq.head;
+         if (void 0 === Oq) return [];
+         const mq = qq.languageService.getSignatureHelpItems(gq, Oq, {});
+         if (!mq || !mq.items.length) return [];
+         const xq = mq.applicableSpan.start - mq.items[0].prefixDisplayParts.map((qq => qq.text)).join("").length,
+           Aq = mq.applicableSpan.start,
+           cq = Yq.doc.lineAt(Oq),
+           uq = cq.from,
+           Bq = Math.min(cq.to, Oq);
+         let Wq, Nq;
+         return xq < uq ? (Wq = uq, Nq = Bq) : (Wq = xq, Nq = Aq), [{
+           pos: Wq,
+ ... (46 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L17174-L17186` → after: `L722-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L722-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L722-L743) · [Before (L17174-L17186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L17174-L17186)

```diff
-         for (let iz in zz) nz(Ez(iz), zz[iz], this.rules)
-       }
-       getRules() {
-         return this.rules.join("\n")
-       }
-       static newName() {
-         let zz = iz[Ez] || 1;
-         return iz[Ez] = zz + 1, "\u037c" + zz.toString(36)
-       }
-       static mount(zz, uz, bz) {
-         let Ez = zz[nz],
-           iz = bz && bz.nonce;
-         Ez ? iz && Ez.setNonce(iz) : Ez = new tz(zz, iz), Ez.mount(Array.isArray(uz) ? uz : [uz], zz)
+         const Aq = [];
+         for (const qq of Oq.displayParts) Aq.push({
+           str: qq.text,
+           style: {
+             color: hE.text
+           }
+         });
+         if (Oq.documentation) {
+           Aq.push("\n\n");
+           for (const qq of Oq.documentation) Aq.push({
+             str: qq.text,
+             style: {
+               color: hE.docs
+             }
+           })
+         }
+ ... (6 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L17189-L17213` → after: `L746-L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L746-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L746-L902) · [Before (L17189-L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L17189-L17213)

```diff
-     let Mz = new Map;
-     class tz {
-       constructor(zz, uz) {
-         let bz = zz.ownerDocument || zz,
-           Ez = bz.defaultView;
-         if (!zz.head && zz.adoptedStyleSheets && Ez.CSSStyleSheet) {
-           let uz = Mz.get(bz);
-           if (uz) return zz[nz] = uz;
-           this.sheet = new Ez.CSSStyleSheet, Mz.set(bz, this)
-         } else this.styleTag = bz.createElement("style"), uz && this.styleTag.setAttribute("nonce", uz);
-         this.modules = [], zz[nz] = this
-       }
-       mount(zz, uz) {
-         let bz = this.sheet,
-           Ez = 0,
-           nz = 0;
- ... (9 more removed lines; see GitHub link above)
+     const RE = {
+       indentSize: 4,
+       tabSize: 4,
+       newLineCharacter: "\n",
+       convertTabsToSpaces: !0,
+       insertSpaceAfterCommaDelimiter: !0,
+       insertSpaceAfterSemicolonInForStatements: !0,
+       insertSpaceBeforeAndAfterBinaryOperators: !0,
+       insertSpaceAfterKeywordsInControlFlowStatements: !0,
+       insertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
+       insertSpaceBeforeFunctionParenthesis: !1,
+       insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
+       insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
+       insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: !0,
+       insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
+       insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: !1,
+ ... (141 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L17216-L17227` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/284.js#L1181) · [Before (L17216-L17227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/284.js#L17216-L17227)

```diff
-         if (bz) uz.adoptedStyleSheets.indexOf(this.sheet) < 0 && (uz.adoptedStyleSheets = [this.sheet, ...uz.adoptedStyleSheets]);
-         else {
-           let zz = "";
-           for (let uz = 0; uz < this.modules.length; uz++) zz += this.modules[uz].getRules() + "\n";
-           this.styleTag.textContent = zz;
-           let bz = uz.head || uz;
-           this.styleTag.parentNode != bz && bz.insertBefore(this.styleTag, bz.firstChild)
-         }
-       }
-       setNonce(zz) {
-         this.styleTag && this.styleTag.getAttribute("nonce") != zz && this.styleTag.setAttribute("nonce", zz)
-       }
+       }, iE)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/285.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/285.js` (213 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L4)

```diff
-   40531: (zz, uz, bz) => {
+   41037: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L8-L28` → after: `L7-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L7-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L7-L12) · [Before (L8-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L8-L28)

```diff
-       ChangeSet: () => az,
-       h: () => Lu,
-       l: () => Sz,
-       n: () => Vu,
-       r: () => Qz,
-       s: () => Pz,
-       t: () => nu,
-       x: () => Su,
-       u: () => yu,
-       z: () => qu,
-       B: () => ru,
-       E: () => Yz,
-       I: () => Rz,
-       J: () => ou,
-       K: () => Jz,
-       N: () => Tz,
- ... (5 more removed lines; see GitHub link above)
+       e: () => rE,
+       g: () => HE,
+       i: () => Aq,
+       k: () => TE,
+       m: () => cq,
+       q: () => WE
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L30-L40` → after: `L14-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14-L39) · [Before (L30-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L30-L40)

```diff
-     let Ez = [],
-       nz = [];
- 
-     function iz(zz) {
-       if (zz < 768) return !1;
-       for (let uz = 0, bz = Ez.length;;) {
-         let iz = uz + bz >> 1;
-         if (zz < Ez[iz]) bz = iz;
-         else {
-           if (!(zz >= nz[iz])) return !0;
-           uz = iz + 1
+     var Yq = gq(41044),
+       lq = gq(41053),
+       Oq = gq(41070);
+     class mq {
+       constructor(qq, Eq, gq, Yq) {
+         this.state = qq, this.pos = Eq, this.explicit = gq, this.view = Yq, this.abortListeners = [], this.abortOnDocChange = !1
+       }
+       tokenBefore(qq) {
+         let Eq = (0, Oq.gb)(this.state).resolveInner(this.pos, -1);
+         for (; Eq && qq.indexOf(Eq.name) < 0;) Eq = Eq.parent;
+         return Eq ? {
+           from: Eq.from,
+           to: this.pos,
+           text: this.state.sliceDoc(Eq.from, this.pos),
+           type: Eq.type
+         } : null
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L42` → after: `L41-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L41-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L41-L46) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L42)

```diff
-         if (uz == bz) return !1
+       }
+       get aborted() {
+         return null == this.abortListeners
+       }
+       addEventListener(qq, Eq, gq) {
+         "abort" == qq && this.abortListeners && (this.abortListeners.push(Eq), gq && gq.onDocChange && (this.abortOnDocChange = !0))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L47-L55` → after: `L51-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L51-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L51-L53) · [Before (L47-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L47-L55)

```diff
-       return zz >= 127462 && zz <= 127487
-     }(() => {
-       let zz = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7, … [truncated]
-       for (let uz = 0, bz = 0; uz < zz.length; uz++)(uz % 2 ? nz : Ez).push(bz += zz[uz])
-     })();
-     const Mz = 8205;
- 
-     function tz(zz, uz) {
-       return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? Hz : Oz)(zz, uz, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+       let Eq = Object.keys(qq).join(""),
+         gq = /\w/.test(Eq);
+       return gq && (Eq = Eq.replace(/\w/g, "")), `[${gq?"\\w":""}${Eq.replace(/[^\w\s]/g,"\\$&")}]`
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L58-L72` → after: `L56-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L56-L68) · [Before (L58-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L58-L72)

```diff
-     function Hz(zz, uz, bz) {
-       if (uz == zz.length) return uz;
-       uz && dz(zz.charCodeAt(uz)) && Fz(zz.charCodeAt(uz - 1)) && uz--;
-       let Ez = pz(zz, uz);
-       for (uz += Zz(Ez); uz < zz.length;) {
-         let nz = pz(zz, uz);
-         if (Ez == Mz || nz == Mz || bz && iz(nz)) uz += Zz(nz), Ez = nz;
-         else {
-           if (!lz(nz)) break;
-           {
-             let bz = 0,
-               Ez = uz - 2;
-             for (; Ez >= 0 && lz(pz(zz, Ez));) bz++, Ez -= 2;
-             if (bz % 2 == 0) break;
-             uz += 2
+     function Aq(qq) {
+       let Eq = qq.map((qq => "string" == typeof qq ? {
+           label: qq
+         } : qq)),
+         [gq, Yq] = Eq.every((qq => /^\w+$/.test(qq.label))) ? [/\w*$/, /\w+$/] : function(qq) {
+           let Eq = Object.create(null),
+             gq = Object.create(null);
+           for (let {
+               label: lq
+             }
+             of qq) {
+             Eq[lq[0]] = !0;
+             for (let qq = 1; qq < lq.length; qq++) gq[lq[qq]] = !0
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L74` → after: `L70-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L70-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L70-L79) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L74)

```diff
-         }
+           let Yq = xq(Eq) + xq(gq) + "*$";
+           return [new RegExp("^" + Yq), new RegExp(Yq)]
+         }(Eq);
+       return qq => {
+         let lq = qq.matchBefore(Yq);
+         return lq || qq.explicit ? {
+           from: lq ? lq.from : qq.pos,
+           options: Eq,
+           validFor: gq
+         } : null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L79-L83` → after: `L83-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L83-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L83-L89) · [Before (L79-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L79-L83)

```diff
-     function Oz(zz, uz, bz) {
-       for (; uz > 0;) {
-         let Ez = Hz(zz, uz - 2, bz);
-         if (Ez < uz) return Ez;
-         uz--
+     function cq(qq, Eq) {
+       return gq => {
+         for (let Eq = (0, Oq.gb)(gq.state).resolveInner(gq.pos, -1); Eq; Eq = Eq.parent) {
+           if (qq.indexOf(Eq.name) > -1) return null;
+           if (Eq.type.isTop) break
+         }
+         return Eq(gq)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L87-L92` → after: `L92-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L92-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L92-L95) · [Before (L87-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L87-L92)

```diff
- 
-     function pz(zz, uz) {
-       let bz = zz.charCodeAt(uz);
-       if (!Fz(bz) || uz + 1 == zz.length) return bz;
-       let Ez = zz.charCodeAt(uz + 1);
-       return dz(Ez) ? Ez - 56320 + (bz - 55296 << 10) + 65536 : bz
+     class uq {
+       constructor(qq, Eq, gq, Yq) {
+         this.completion = qq, this.source = Eq, this.match = gq, this.score = Yq
+       }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L96` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L99) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L96)

```diff
-       return zz >= 56320 && zz < 57344
+       return qq.selection.main.from
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L99-L100` → after: `L102-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L102-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L102-L132) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L99-L100)

```diff
-     function Fz(zz) {
-       return zz >= 55296 && zz < 56320
+     function Wq(qq, Eq) {
+       var gq;
+       let {
+         source: Yq
+       } = qq, lq = Eq && "^" != Yq[0], Oq = "$" != Yq[Yq.length - 1];
+       return lq || Oq ? new RegExp(`${lq?"^":""}(?:${Yq})${Oq?"$":""}`, null !== (gq = qq.flags) && void 0 !== gq ? gq : qq.ignoreCase ? "i" : "") : qq
+     }
+     const Nq = Yq.e.define();
+ 
+     function aq(qq, Eq, gq, lq) {
+       let {
+         main: Oq
+       } = qq.selection, mq = gq - Oq.from, xq = lq - Oq.from;
+       return {
+         ...qq.changeByRange((Aq => {
+           if (Aq != Oq && gq != lq && qq.sliceDoc(Aq.from + mq, Aq.from + xq) != qq.sliceDoc(gq, lq)) return {
+ ... (15 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L104` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L137-L139) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L104)

```diff
-       return zz < 65536 ? 1 : 2
+       if (!Array.isArray(qq)) return qq;
+       let Eq = Vq.get(qq);
+       return Eq || Vq.set(qq, Eq = Aq(qq)), Eq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L107-L118` → after: `L144-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L144-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L144-L154) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L107-L118)

```diff
-       lineAt(zz) {
-         if (zz < 0 || zz > this.length) throw new RangeError(`Invalid position ${zz} in document of length ${this.length}`);
-         return this.lineInner(zz, !1, 1, 0)
-       }
-       line(zz) {
-         if (zz < 1 || zz > this.lines) throw new RangeError(`Invalid line number ${zz} in ${this.lines}-line document`);
-         return this.lineInner(zz, !0, 1, 0)
-       }
-       replace(zz, uz, bz) {
-         [zz, uz] = vz(this, zz, uz);
-         let Ez = [];
-         return this.decompose(0, zz, Ez, 2), bz.length && bz.decompose(0, bz.length, Ez, 3), this.decompose(uz, this.length, Ez, 1), wz.from(Ez, this.length - (uz - zz) + bz.length)
+       constructor(qq) {
+         this.pattern = qq, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
+         for (let Eq = 0; Eq < qq.length;) {
+           let gq = (0, Yq.U)(qq, Eq),
+             lq = (0, Yq.V)(gq);
+           this.chars.push(gq);
+           let Oq = qq.slice(Eq, Eq + lq),
+             mq = Oq.toUpperCase();
+           this.folded.push((0, Yq.U)(mq == Oq ? Oq.toLowerCase() : mq, 0)), Eq += lq
+         }
+         this.astral = qq.length != this.chars.length
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L120-L121` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L156-L157) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L120-L121)

```diff
-       append(zz) {
-         return this.replace(this.length, this.length, zz)
+       ret(qq, Eq) {
+         return this.score = qq, this.matched = Eq, this
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L123-L127` → after: `L159-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L159-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L159-L205) · [Before (L123-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L123-L127)

```diff
-       slice(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
-         [zz, uz] = vz(this, zz, uz);
-         let bz = [];
-         return this.decompose(zz, uz, bz, 0), wz.from(bz, uz - zz)
+       match(qq) {
+         if (0 == this.pattern.length) return this.ret(-100, []);
+         if (qq.length < this.pattern.length) return null;
+         let {
+           chars: Eq,
+           folded: gq,
+           any: lq,
+           precise: Oq,
+           byWord: mq
+         } = this;
+         if (1 == Eq.length) {
+           let lq = (0, Yq.U)(qq, 0),
+             Oq = (0, Yq.V)(lq),
+             mq = Oq == qq.length ? 0 : -100;
+           if (lq == Eq[0]);
+           else {
+ ... (31 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L129-L138` → after: `L207-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L207-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L207-L212) · [Before (L129-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L129-L138)

```diff
-       eq(zz) {
-         if (zz == this) return !0;
-         if (zz.length != this.length || zz.lines != this.lines) return !1;
-         let uz = this.scanIdentical(zz, 1),
-           bz = this.length - this.scanIdentical(zz, -1),
-           Ez = new sz(this),
-           nz = new sz(zz);
-         for (let iz = uz, lz = uz;;) {
-           if (Ez.next(iz), nz.next(iz), iz = 0, Ez.lineBreak != nz.lineBreak || Ez.done != nz.done || Ez.value != nz.value) return !1;
-           if (lz += Ez.value.length, Ez.done || lz >= bz) return !0
+       result(qq, Eq, gq) {
+         let lq = [],
+           Oq = 0;
+         for (let mq of Eq) {
+           let qq = mq + (this.astral ? (0, Yq.V)((0, Yq.U)(gq, mq)) : 1);
+           Oq && lq[Oq - 1] == mq ? lq[Oq - 1] = qq : (lq[Oq++] = mq, lq[Oq++] = qq)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L141-L142` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L216-L219) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L141-L142)

```diff
-       iter() {
-         return new sz(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
+     }
+     class Pq {
+       constructor(qq) {
+         this.pattern = qq, this.matched = [], this.score = 0, this.folded = qq.toLowerCase()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L144-L146` → after: `L221-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L221-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L221-L225) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L144-L146)

```diff
-       iterRange(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
-         return new rz(this, zz, uz)
+       match(qq) {
+         if (qq.length < this.pattern.length) return null;
+         let Eq = qq.slice(0, this.pattern.length),
+           gq = Eq == this.pattern ? 0 : Eq.toLowerCase() == this.folded ? -200 : null;
+         return null == gq ? null : (this.matched = [0, Eq.length], this.score = gq + (qq.length == this.pattern.length ? 0 : -100), this)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L148-L156` → after: `L227-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L227-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L227-L276) · [Before (L148-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L148-L156)

```diff
-       iterLines(zz, uz) {
-         let bz;
-         if (null == zz) bz = this.iter();
-         else {
-           null == uz && (uz = this.lines + 1);
-           let Ez = this.line(zz).from;
-           bz = this.iterRange(Ez, Math.max(Ez, uz == this.lines + 1 ? this.length : uz <= 1 ? 0 : this.line(uz - 1).to))
-         }
-         return new oz(bz)
+     }
+     const Qq = Yq.x.define({
+       combine: qq => (0, Yq.Y)(qq, {
+         activateOnTyping: !0,
+         activateOnCompletion: () => !1,
+         activateOnTypingDelay: 100,
+         selectOnOpen: !0,
+         override: null,
+         closeOnBlur: !0,
+         maxRenderedOptions: 100,
+         defaultKeymap: !0,
+         tooltipClass: () => "",
+         optionClass: () => "",
+         aboveCursor: !1,
+         icons: !0,
+         addToOptions: [],
+ ... (34 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L158-L159` → after: `L278-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L278-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L278-L280) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L158-L159)

```diff
-       toString() {
-         return this.sliceString(0)
+       return {
+         style: `${Wq}: ${xq/((Eq.bottom-Eq.top)/mq.offsetHeight)}px; max-width: ${Aq/((Eq.right-Eq.left)/mq.offsetWidth)}px`,
+         class: "cm-completionInfo-" + (Bq ? cq ? "left-narrow" : "right-narrow" : uq ? "left" : "right")
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L161-L163` → after: `L282-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L282-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L282-L295) · [Before (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L161-L163)

```diff
-       toJSON() {
-         let zz = [];
-         return this.flatten(zz), zz
+     }
+     const rq = Yq.J.define();
+ 
+     function vq(qq, Eq, gq) {
+       if (qq <= gq) return {
+         from: 0,
+         to: qq
+       };
+       if (Eq < 0 && (Eq = 0), Eq <= qq >> 1) {
+         let qq = Math.floor(Eq / gq);
+         return {
+           from: qq * gq,
+           to: (qq + 1) * gq
+         }
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L165-L168` → after: `L297-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L297-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L297-L300) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L165-L168)

```diff
-       constructor() {}
-       static of (zz) {
-         if (0 == zz.length) throw new RangeError("A document must have at least one line");
-         return 1 != zz.length || zz[0] ? zz.length <= 32 ? new Kz(zz) : wz.from(Kz.split(zz, [])) : Rz.empty
+       let Yq = Math.floor((qq - Eq) / gq);
+       return {
+         from: qq - (Yq + 1) * gq,
+         to: qq - Yq * gq
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L171-L178` → after: `L303-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L303-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L303-L365) · [Before (L171-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L171-L178)

```diff
-     class Kz extends Rz {
-       constructor(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(zz) {
-           let uz = -1;
-           for (let bz of zz) uz += bz.length + 1;
-           return uz
-         }(zz);
-         super(), this.text = zz, this.length = uz
+     class hq {
+       constructor(qq, Eq, gq) {
+         this.view = qq, this.stateField = Eq, this.applyCompletion = gq, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
+           read: () => this.measureInfo(),
+           write: qq => this.placeInfo(qq),
+           key: this
+         }, this.space = null, this.currentClass = "";
+         let Yq = qq.state.field(Eq),
+           {
+             options: lq,
+             selected: Oq
+           } = Yq.open,
+           mq = qq.state.facet(Qq);
+         this.optionContent = function(qq) {
+           let Eq = qq.addToOptions.slice();
+           return qq.icons && Eq.push({
+ ... (47 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L180-L181` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L367-L368) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L180-L181)

```diff
-       get lines() {
-         return this.text.length
+       mount() {
+         this.updateSel()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L183-L184` → after: `L370-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L370-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L370-L373) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L183-L184)

```diff
-       get children() {
-         return null
+       showOptions(qq, Eq) {
+         this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(qq, Eq, this.range)), this.list.addEventListener("scroll", (() => {
+           this.info && this.view.requestMeasure(this.placeInfoReq)
+         }))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L186-L191` → after: `L375-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L375-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L375-L385) · [Before (L186-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L186-L191)

```diff
-       lineInner(zz, uz, bz, Ez) {
-         for (let nz = 0;; nz++) {
-           let iz = this.text[nz],
-             lz = Ez + iz.length;
-           if ((uz ? bz : lz) >= zz) return new Nz(Ez, lz, bz, iz);
-           Ez = lz + 1, bz++
+       update(qq) {
+         var Eq;
+         let gq = qq.state.field(this.stateField),
+           Yq = qq.startState.field(this.stateField);
+         if (this.updateTooltipClass(qq.state), gq != Yq) {
+           let {
+             options: lq,
+             selected: Oq,
+             disabled: mq
+           } = gq.open;
+           Yq.open && Yq.open.options == lq || (this.range = vq(lq.length, Oq, qq.state.facet(Qq).maxRenderedOptions), this.showOptions(lq, gq.id)), this.updateSel(), mq != (null === (Eq = Yq.open) || void 0 === Eq ? void 0 : Eq.disabled) && this.dom.classList.toggle("cm-tooltip-a … [truncated]
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L194-L221` → after: `L388-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L388-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L388-L393) · [Before (L194-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L194-L221)

```diff
-       decompose(zz, uz, bz, Ez) {
-         let nz = zz <= 0 && uz >= this.length ? this : new Kz(fz(this.text, zz, uz), Math.min(uz, this.length) - Math.max(0, zz));
-         if (1 & Ez) {
-           let zz = bz.pop(),
-             uz = Xz(nz.text, zz.text.slice(), 0, nz.length);
-           if (uz.length <= 32) bz.push(new Kz(uz, zz.length + nz.length));
-           else {
-             let zz = uz.length >> 1;
-             bz.push(new Kz(uz.slice(0, zz)), new Kz(uz.slice(zz)))
-           }
-         } else bz.push(nz)
-       }
-       replace(zz, uz, bz) {
-         if (!(bz instanceof Kz)) return super.replace(zz, uz, bz);
-         [zz, uz] = vz(this, zz, uz);
-         let Ez = Xz(this.text, Xz(bz.text, fz(this.text, 0, zz)), uz),
- ... (12 more removed lines; see GitHub link above)
+       updateTooltipClass(qq) {
+         let Eq = this.tooltipClass(qq);
+         if (Eq != this.currentClass) {
+           for (let qq of this.currentClass.split(" ")) qq && this.dom.classList.remove(qq);
+           for (let qq of Eq.split(" ")) qq && this.dom.classList.add(qq);
+           this.currentClass = Eq
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L225-L226` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L396-L397) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L225-L226)

```diff
-       flatten(zz) {
-         for (let uz of this.text) zz.push(uz)
+       positioned(qq) {
+         this.space = qq, this.info && this.view.requestMeasure(this.placeInfoReq)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L228-L241` → after: `L399-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L399-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L399-L417) · [Before (L228-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L228-L241)

```diff
-       scanIdentical() {
-         return 0
-       }
-       static split(zz, uz) {
-         let bz = [],
-           Ez = -1;
-         for (let nz of zz) bz.push(nz), Ez += nz.length + 1, 32 == bz.length && (uz.push(new Kz(bz, Ez)), bz = [], Ez = -1);
-         return Ez > -1 && uz.push(new Kz(bz, Ez)), uz
-       }
-     }
-     class wz extends Rz {
-       constructor(zz, uz) {
-         super(), this.children = zz, this.length = uz, this.lines = 0;
-         for (let bz of zz) this.lines += bz.lines
+       updateSel() {
+         let qq = this.view.state.field(this.stateField),
+           Eq = qq.open;
+         (Eq.selected > -1 && Eq.selected < this.range.from || Eq.selected >= this.range.to) && (this.range = vq(Eq.options.length, Eq.selected, this.view.state.facet(Qq).maxRenderedOptions), this.showOptions(Eq.options, qq.id));
+         let gq = this.updateSelectedOption(Eq.selected);
+         if (gq) {
+           this.destroyInfo();
+           let {
+             completion: Yq
+           } = Eq.options[Eq.selected], {
+             info: Oq
+           } = Yq;
+           if (!Oq) return;
+           let mq = "string" === typeof Oq ? document.createTextNode(Oq) : Oq(Yq);
+           if (!mq) return;
+           "then" in mq ? mq.then((Eq => {
+ ... (3 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L243-L249` → after: `L419-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L419-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L419-L428) · [Before (L243-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L243-L249)

```diff
-       lineInner(zz, uz, bz, Ez) {
-         for (let nz = 0;; nz++) {
-           let iz = this.children[nz],
-             lz = Ez + iz.length,
-             Mz = bz + iz.lines - 1;
-           if ((uz ? Mz : lz) >= zz) return iz.lineInner(zz, uz, bz, Ez);
-           Ez = lz + 1, bz = Mz + 1
+       addInfoPane(qq, Eq) {
+         this.destroyInfo();
+         let gq = this.info = document.createElement("div");
+         if (gq.className = "cm-tooltip cm-completionInfo", gq.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != qq.nodeType) gq.appendChild(qq), this.infoDestroy = null;
+         else {
+           let {
+             dom: Eq,
+             destroy: Yq
+           } = qq;
+           gq.appendChild(Eq), this.infoDestroy = Yq || null
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L252-L258` → after: `L432-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L432-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L432-L455) · [Before (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L252-L258)

```diff
-       decompose(zz, uz, bz, Ez) {
-         for (let nz = 0, iz = 0; iz <= uz && nz < this.children.length; nz++) {
-           let lz = this.children[nz],
-             Mz = iz + lz.length;
-           if (zz <= Mz && uz >= iz) {
-             let nz = Ez & ((iz <= zz ? 1 : 0) | (Mz >= uz ? 2 : 0));
-             iz >= zz && Mz <= uz && !nz ? bz.push(lz) : lz.decompose(zz - iz, uz - iz, bz, nz)
+       updateSelectedOption(qq) {
+         let Eq = null;
+         for (let gq = this.list.firstChild, Yq = this.range.from; gq; gq = gq.nextSibling, Yq++) "LI" == gq.nodeName && gq.id ? Yq == qq ? gq.hasAttribute("aria-selected") || (gq.setAttribute("aria-selected", "true"), Eq = gq) : gq.hasAttribute("aria-selected") && (gq.removeAttri … [truncated]
+         return Eq && function(qq, Eq) {
+           let gq = qq.getBoundingClientRect(),
+             Yq = Eq.getBoundingClientRect(),
+             lq = gq.height / qq.offsetHeight;
+           Yq.top < gq.top ? qq.scrollTop -= (gq.top - Yq.top) / lq : Yq.bottom > gq.bottom && (qq.scrollTop += (Yq.bottom - gq.bottom) / lq)
+         }(this.list, Eq), Eq
+       }
+       measureInfo() {
+         let qq = this.dom.querySelector("[aria-selected]");
+         if (!qq || !this.info) return null;
+         let Eq = this.dom.getBoundingClientRect(),
+           gq = this.info.getBoundingClientRect(),
+           Yq = qq.getBoundingClientRect(),
+ ... (8 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L263-L273` → after: `L460-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L460-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L460-L481) · [Before (L263-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L263-L273)

```diff
-       replace(zz, uz, bz) {
-         if ([zz, uz] = vz(this, zz, uz), bz.lines < this.lines)
-           for (let Ez = 0, nz = 0; Ez < this.children.length; Ez++) {
-             let iz = this.children[Ez],
-               lz = nz + iz.length;
-             if (zz >= nz && uz <= lz) {
-               let Mz = iz.replace(zz - nz, uz - nz, bz),
-                 tz = this.lines - iz.lines + Mz.lines;
-               if (Mz.lines < tz >> 4 && Mz.lines > tz >> 6) {
-                 let nz = this.children.slice();
-                 return nz[Ez] = Mz, new wz(nz, this.length - (uz - zz) + bz.length)
+       placeInfo(qq) {
+         this.info && (qq ? (qq.style && (this.info.style.cssText = qq.style), this.info.className = "cm-tooltip cm-completionInfo " + (qq.class || "")) : this.info.style.cssText = "top: -1e6px")
+       }
+       createListBox(qq, Eq, gq) {
+         const Yq = document.createElement("ul");
+         Yq.id = Eq, Yq.setAttribute("role", "listbox"), Yq.setAttribute("aria-expanded", "true"), Yq.setAttribute("aria-label", this.view.state.phrase("Completions")), Yq.addEventListener("mousedown", (qq => {
+           qq.target == Yq && qq.preventDefault()
+         }));
+         let lq = null;
+         for (let Oq = gq.from; Oq < gq.to; Oq++) {
+           let {
+             completion: mq,
+             match: xq
+           } = qq[Oq], {
+             section: Aq
+           } = mq;
+ ... (6 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L279-L289` → after: `L484-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L484-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L484-L491) · [Before (L279-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L279-L289)

```diff
-         return super.replace(zz, uz, bz)
-       }
-       sliceString(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
-           bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
-         [zz, uz] = vz(this, zz, uz);
-         let Ez = "";
-         for (let nz = 0, iz = 0; nz < this.children.length && iz <= uz; nz++) {
-           let lz = this.children[nz],
-             Mz = iz + lz.length;
-           iz > zz && nz && (Ez += bz), zz < Mz && uz > iz && (Ez += lz.sliceString(zz - iz, uz - iz, bz)), iz = Mz + 1
+           const cq = Yq.appendChild(document.createElement("li"));
+           cq.id = Eq + "-" + Oq, cq.setAttribute("role", "option");
+           let uq = this.optionClass(mq);
+           uq && (cq.className = uq);
+           for (let qq of this.optionContent) {
+             let Eq = qq(mq, this.view.state, this.view, xq);
+             Eq && cq.appendChild(Eq)
+           }
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L291-L294` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L493) · [Before (L291-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L291-L294)

```diff
-         return Ez
-       }
-       flatten(zz) {
-         for (let uz of this.children) uz.flatten(zz)
+         return gq.from && Yq.classList.add("cm-completionListIncompleteTop"), gq.to < qq.length && Yq.classList.add("cm-completionListIncompleteBottom"), Yq
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L296-L306` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L495-L496) · [Before (L296-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L296-L306)

```diff
-       scanIdentical(zz, uz) {
-         if (!(zz instanceof wz)) return 0;
-         let bz = 0,
-           [Ez, nz, iz, lz] = uz > 0 ? [0, 0, this.children.length, zz.children.length] : [this.children.length - 1, zz.children.length - 1, -1, -1];
-         for (;; Ez += uz, nz += uz) {
-           if (Ez == iz || nz == lz) return bz;
-           let Mz = this.children[Ez],
-             tz = zz.children[nz];
-           if (Mz != tz) return bz + Mz.scanIdentical(tz, uz);
-           bz += Mz.length + 1
-         }
+       destroyInfo() {
+         this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L308-L336` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L498-L499) · [Before (L308-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L308-L336)

```diff
-       static from(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz.reduce(((zz, uz) => zz + uz.length + 1), -1),
-           bz = 0;
-         for (let dz of zz) bz += dz.lines;
-         if (bz < 32) {
-           let bz = [];
-           for (let uz of zz) uz.flatten(bz);
-           return new Kz(bz, uz)
-         }
-         let Ez = Math.max(32, bz >> 5),
-           nz = Ez << 1,
-           iz = Ez >> 1,
-           lz = [],
-           Mz = 0,
-           tz = -1,
-           Hz = [];
- ... (13 more removed lines; see GitHub link above)
+       destroy() {
+         this.destroyInfo()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L341-L348` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L504) · [Before (L341-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L341-L348)

```diff
-       let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-         Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
-       for (let nz = 0, iz = 0, lz = !0; iz < zz.length && nz <= Ez; iz++) {
-         let Mz = zz[iz],
-           tz = nz + Mz.length;
-         tz >= bz && (tz > Ez && (Mz = Mz.slice(0, Ez - nz)), nz < bz && (Mz = Mz.slice(bz - nz)), lz ? (uz[uz.length - 1] += Mz, lz = !1) : uz.push(Mz)), nz = tz + 1
-       }
-       return uz
+       return gq => new hq(gq, qq, Eq)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L351-L352` → after: `L507-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L507-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L507-L508) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L351-L352)

```diff
-     function fz(zz, uz, bz) {
-       return Xz(zz, [""], uz, bz)
+     function bq(qq) {
+       return 100 * (qq.boost || 0) + (qq.apply ? 10 : 0) + (qq.info ? 5 : 0) + (qq.type ? 1 : 0)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L356-L379` → after: `L511-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L511-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L511-L567) · [Before (L356-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L356-L379)

```diff
-       constructor(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         this.dir = uz, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [zz], this.offsets = [uz > 0 ? 1 : (zz instanceof Kz ? zz.text.length : zz.children.length) << 1]
-       }
-       nextInner(zz, uz) {
-         for (this.done = this.lineBreak = !1;;) {
-           let bz = this.nodes.length - 1,
-             Ez = this.nodes[bz],
-             nz = this.offsets[bz],
-             iz = nz >> 1,
-             lz = Ez instanceof Kz ? Ez.text.length : Ez.children.length;
-           if (iz == (uz > 0 ? lz : 0)) {
-             if (0 == bz) return this.done = !0, this.value = "", this;
-             uz > 0 && this.offsets[bz - 1]++, this.nodes.pop(), this.offsets.pop()
-           } else if ((1 & nz) == (uz > 0 ? 0 : 1)) {
-             if (this.offsets[bz] += uz, 0 == zz) return this.lineBreak = !0, this.value = "\n", this;
- ... (8 more removed lines; see GitHub link above)
+       constructor(qq, Eq, gq, Yq, lq, Oq) {
+         this.options = qq, this.attrs = Eq, this.tooltip = gq, this.timestamp = Yq, this.selected = lq, this.disabled = Oq
+       }
+       setSelected(qq, Eq) {
+         return qq == this.selected || qq >= this.options.length ? this : new iq(this.options, Tq(Eq, qq), this.tooltip, this.timestamp, qq, this.disabled)
+       }
+       static build(qq, Eq, gq, Yq, lq, Oq) {
+         if (Yq && !Oq && qq.some((qq => qq.isPending))) return Yq.setDisabled();
+         let mq = function(qq, Eq) {
+           let gq = [],
+             Yq = null,
+             lq = null,
+             Oq = qq => {
+               gq.push(qq);
+               let {
+                 section: Eq
+ ... (41 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L383-L385` → after: `L594-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L594-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L594-L601) · [Before (L383-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L383-L385)

```diff
-       next() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return zz < 0 && (this.nextInner(-zz, -this.dir), zz = this.value.length), this.nextInner(zz, this.dir)
+       map(qq) {
+         return new iq(this.options, this.attrs, {
+           ...this.tooltip,
+           pos: qq.mapPos(this.tooltip.pos)
+         }, this.timestamp, this.selected, this.disabled)
+       }
+       setDisabled() {
+         return new iq(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L390` → after: `L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L606) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L390)

```diff
-         this.value = "", this.done = !1, this.cursor = new sz(zz, uz > bz ? -1 : 1), this.pos = uz > bz ? zz.length : 0, this.from = Math.min(uz, bz), this.to = Math.max(uz, bz)
+         this.active = qq, this.id = Eq, this.open = gq
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L392-L396` → after: `L608-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L608-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L608-L611) · [Before (L392-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L392-L396)

```diff
-       nextInner(zz, uz) {
-         if (uz < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
-         zz += Math.max(0, uz < 0 ? this.pos - this.to : this.from - this.pos);
-         let bz = uz < 0 ? this.pos - this.from : this.to - this.pos;
-         zz > bz && (zz = bz), bz -= zz;
+       static start() {
+         return new Zq(zq, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
+       }
+       update(qq) {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L398-L400` → after: `L613-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L613-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L613-L630) · [Before (L398-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L398-L400)

```diff
-           value: Ez
-         } = this.cursor.next(zz);
-         return this.pos += (Ez.length + zz) * uz, this.value = Ez.length <= bz ? Ez : uz < 0 ? Ez.slice(Ez.length - bz) : Ez.slice(0, bz), this.done = !this.value, this
+           state: Eq
+         } = qq, gq = Eq.facet(Qq), Yq = (gq.override || Eq.languageDataAt("autocomplete", Bq(Eq)).map(dq)).map((Eq => (this.active.find((qq => qq.source == Eq)) || new pq(Eq, this.active.some((qq => 0 != qq.state)) ? 1 : 0)).update(qq, gq)));
+         Yq.length == this.active.length && Yq.every(((qq, Eq) => qq == this.active[Eq])) && (Yq = this.active);
+         let lq = this.open,
+           Oq = qq.effects.some((qq => qq.is(Lq)));
+         lq && qq.docChanged && (lq = lq.map(qq.changes)), qq.selection || Yq.some((Eq => Eq.hasResult() && qq.changes.touchesRange(Eq.from, Eq.to))) || ! function(qq, Eq) {
+           if (qq == Eq) return !0;
+           for (let gq = 0, Yq = 0;;) {
+             for (; gq < qq.length && !qq[gq].hasResult();) gq++;
+             for (; Yq < Eq.length && !Eq[Yq].hasResult();) Yq++;
+             let lq = gq == qq.length,
+               Oq = Yq == Eq.length;
+             if (lq || Oq) return lq == Oq;
+             if (qq[gq++].result != Eq[Yq++].result) return !1
+           }
+         }(Yq, this.active) || Oq ? lq = iq.build(Yq, Eq, this.id, lq, gq, Oq) : lq && lq.disabled && !Yq.some((qq => qq.isPending)) && (lq = null), !lq && Yq.every((qq => !qq.isPending)) && Yq.some((qq => qq.hasResult())) && (Yq = Yq.map((qq => qq.hasResult() ? new pq(qq.source,  … [truncated]
+ ... (2 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L402-L404` → after: `L632-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L632-L633) · [Before (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L402-L404)

```diff
-       next() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return zz < 0 ? zz = Math.max(zz, this.from - this.pos) : zz > 0 && (zz = Math.min(zz, this.to - this.pos)), this.nextInner(zz, this.cursor.dir)
+       get tooltip() {
+         return this.open ? this.open.tooltip : null
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L406-L407` → after: `L635-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L635-L636) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L406-L407)

```diff
-       get lineBreak() {
-         return this.cursor.lineBreak && "" != this.value
+       get attrs() {
+         return this.open ? this.open.attrs : this.active.length ? fq : Mq
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L410-L412` → after: `L639-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L639-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L639-L657) · [Before (L410-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L410-L412)

```diff
-     class oz {
-       constructor(zz) {
-         this.inner = zz, this.afterBreak = !0, this.value = "", this.done = !1
+     const fq = {
+         "aria-autocomplete": "list"
+       },
+       Mq = {};
+ 
+     function Tq(qq, Eq) {
+       let gq = {
+         "aria-autocomplete": "list",
+         "aria-haspopup": "listbox",
+         "aria-controls": qq
+       };
+       return Eq > -1 && (gq["aria-activedescendant"] = qq + "-" + Eq), gq
+     }
+     const zq = [];
+ 
+     function Sq(qq, Eq) {
+ ... (3 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L414-L421` → after: `L659-L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L659-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L659-L665) · [Before (L414-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L414-L421)

```diff
-       next() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           {
-             done: uz,
-             lineBreak: bz,
-             value: Ez
-           } = this.inner.next(zz);
-         return uz && this.afterBreak ? (this.value = "", this.afterBreak = !1) : uz ? (this.done = !0, this.value = "") : bz ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = Ez, this.afterBreak = !1), this
+       let gq = qq.isUserEvent("input.type");
+       return gq && Eq.activateOnTyping ? 5 : gq ? 1 : qq.isUserEvent("delete.backward") ? 2 : qq.selection ? 8 : qq.docChanged ? 16 : 0
+     }
+     class pq {
+       constructor(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this.source = qq, this.state = Eq, this.explicit = gq
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L423` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L667) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L423)

```diff
-       get lineBreak() {
+       hasResult() {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L426-L434` → after: `L670-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L670-L671) · [Before (L426-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L426-L434)

```diff
-     }
-     "undefined" != typeof Symbol && (Rz.prototype[Symbol.iterator] = function() {
-       return this.iter()
-     }, sz.prototype[Symbol.iterator] = rz.prototype[Symbol.iterator] = oz.prototype[Symbol.iterator] = function() {
-       return this
-     });
-     class Nz {
-       constructor(zz, uz, bz, Ez) {
-         this.from = zz, this.to = uz, this.number = bz, this.text = Ez
+       get isPending() {
+         return 1 == this.state
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L436-L437` → after: `L673-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L673-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L673-L691) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L436-L437)

```diff
-       get length() {
-         return this.to - this.from
+       update(qq, Eq) {
+         let gq = Sq(qq, Eq),
+           Yq = this;
+         (8 & gq || 16 & gq && this.touches(qq)) && (Yq = new pq(Yq.source, 0)), 4 & gq && 0 == Yq.state && (Yq = new pq(this.source, 1)), Yq = Yq.updateFor(qq, gq);
+         for (let lq of qq.effects)
+           if (lq.is(jq)) Yq = new pq(Yq.source, 1, lq.value);
+           else if (lq.is(Hq)) Yq = new pq(Yq.source, 0);
+         else if (lq.is(Lq))
+           for (let qq of lq.value) qq.source == Yq.source && (Yq = qq);
+         return Yq
+       }
+       updateFor(qq, Eq) {
+         return this.map(qq.changes)
+       }
+       map(qq) {
+         return this
+ ... (3 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L440-L442` → after: `L694-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L694-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L694-L723) · [Before (L440-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L440-L442)

```diff
- 
-     function vz(zz, uz, bz) {
-       return [uz = Math.max(0, Math.min(zz.length, uz)), Math.max(uz, Math.min(zz.length, bz))]
+     class Gq extends pq {
+       constructor(qq, Eq, gq, Yq, lq, Oq) {
+         super(qq, 3, Eq), this.limit = gq, this.result = Yq, this.from = lq, this.to = Oq
+       }
+       hasResult() {
+         return !0
+       }
+       updateFor(qq, Eq) {
+         var gq;
+         if (!(3 & Eq)) return this.map(qq.changes);
+         let Yq = this.result;
+         Yq.map && !qq.changes.empty && (Yq = Yq.map(Yq, qq.changes));
+         let lq = qq.changes.mapPos(this.from),
+           Oq = qq.changes.mapPos(this.to, 1),
+           xq = Bq(qq.state);
+         if (xq > Oq || !Yq || 2 & Eq && (Bq(qq.startState) == this.from || xq < this.limit)) return new pq(this.source, 4 & Eq ? 1 : 0);
+ ... (14 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L446` → after: `L735-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L735-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L735-L740) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L446)

```diff
-       return tz(zz, uz, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+       const gq = Eq.completion.apply || Eq.completion.label;
+       let Yq = qq.state.field(Jq).active.find((qq => qq.source == Eq.source));
+       return Yq instanceof Gq && ("string" == typeof gq ? qq.dispatch({
+         ...aq(qq.state, gq, Yq.from, Yq.to),
+         annotations: Nq.of(Eq.completion)
+       }) : gq(qq, Eq.completion, Yq.from, Yq.to), !0)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L449-L456` → after: `L744-L13937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L744-L13937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L744-L13937) · [Before (L449-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L449-L456)

```diff
-     function Jz(zz, uz) {
-       let bz = zz.charCodeAt(uz);
-       if (!((Ez = bz) >= 55296 && Ez < 56320) || uz + 1 == zz.length) return bz;
-       var Ez;
-       let nz = zz.charCodeAt(uz + 1);
-       return function(zz) {
-         return zz >= 56320 && zz < 57344
-       }(nz) ? nz - 56320 + (bz - 55296 << 10) + 65536 : bz
+     function Uq(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
+       return gq => {
+         let Yq = gq.state.field(Jq, !1);
+         if (!Yq || !Yq.open || Yq.open.disabled || Date.now() - Yq.open.timestamp < gq.state.facet(Qq).interactionDelay) return !1;
+         let Oq, mq = 1;
+         "page" == Eq && (Oq = (0, lq.x)(gq, Yq.open.tooltip)) && (mq = Math.max(2, Math.floor(Oq.dom.offsetHeight / Oq.dom.querySelector("li").offsetHeight) - 1));
+         let {
+           length: xq
+         } = Yq.open.options, Aq = Yq.open.selected > -1 ? Yq.open.selected + mq * (qq ? 1 : -1) : qq ? 0 : xq - 1;
+         return Aq < 0 ? Aq = "page" == Eq ? 0 : xq - 1 : Aq >= xq && (Aq = "page" == Eq ? xq - 1 : 0), gq.dispatch({
+           effects: rq.of(Aq)
+         }), !0
+       }
+     }
+     const Fq = qq => !!qq.state.field(Jq, !1) && (qq.dispatch({
+ ... (13178 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L459-L461` → after: `L14111-L14121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14111-L14121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14111-L14121) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L459-L461)

```diff
-     function Az(zz) {
-       return zz <= 65535 ? String.fromCharCode(zz) : (zz -= 65536, String.fromCharCode(55296 + (zz >> 10), 56320 + (1023 & zz)))
-     }
+           function Hq(qq, Eq) {
+             return (gq, Yq, lq) => {
+               let Oq, xq, Aq = 0,
+                 cq = gq.length - 1;
+               if (cq >= 0 && (Oq = gq[cq]) instanceof aq) {
+                 if (!cq && Oq.type == qq && Oq.length == lq) return Oq;
+                 (xq = Oq.prop(mq.lookAhead)) && (Aq = Yq[cq] + Oq.length + xq)
+               }
+               return Pq(qq, gq, Yq, lq, Aq, Eq)
+             }
+           }
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L463-L464` → after: `L14123-L14198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14123-L14198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14123-L14198) · [Before (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L463-L464)

```diff
-     function Tz(zz) {
-       return zz < 65536 ? 1 : 2
+           function oq(qq, Eq, gq, Yq, Oq, mq, xq, Aq, cq) {
+             let uq = [],
+               Bq = [];
+             for (; qq.length > Yq;) uq.push(qq.pop()), Bq.push(Eq.pop() + gq - Oq);
+             qq.push(Pq(lq.types[xq], uq, Bq, mq - Oq, Aq - mq, cq)), Eq.push(Oq - gq)
+           }
+ 
+           function Pq(qq, Eq, gq, Yq, lq, Oq, xq) {
+             if (Oq) {
+               let qq = [mq.contextHash, Oq];
+               xq = xq ? [qq].concat(xq) : [qq]
+             }
+             if (lq > 25) {
+               let qq = [mq.lookAhead, lq];
+               xq = xq ? [qq].concat(xq) : [qq]
+             }
+ ... (60 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L466-L469` → after: `L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14200) · [Before (L466-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L466-L469)

```diff
-     const Lz = /\r\n?|\n/;
-     var Pz = function(zz) {
-       return zz[zz.Simple = 0] = "Simple", zz[zz.TrackDel = 1] = "TrackDel", zz[zz.TrackBefore = 2] = "TrackBefore", zz[zz.TrackAfter = 3] = "TrackAfter", zz
-     }(Pz || (Pz = {}));
+     aq.empty = new aq(cq.none, [], [], 0);
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L471-L472` → after: `L14202-L14203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14202-L14203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14202-L14203) · [Before (L471-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L471-L472)

```diff
-       constructor(zz) {
-         this.sections = zz
+       constructor(qq, Eq) {
+         this.buffer = qq, this.index = Eq
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L474-L477` → after: `L14205-L14206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14205-L14206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14205-L14206) · [Before (L474-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L474-L477)

```diff
-       get length() {
-         let zz = 0;
-         for (let uz = 0; uz < this.sections.length; uz += 2) zz += this.sections[uz];
-         return zz
+       get id() {
+         return this.buffer[this.index - 4]
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L479-L485` → after: `L14208-L14209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14208-L14209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14208-L14209) · [Before (L479-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L479-L485)

```diff
-       get newLength() {
-         let zz = 0;
-         for (let uz = 0; uz < this.sections.length; uz += 2) {
-           let bz = this.sections[uz + 1];
-           zz += bz < 0 ? this.sections[uz] : bz
-         }
-         return zz
+       get start() {
+         return this.buffer[this.index - 3]
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L487-L488` → after: `L14211-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14211-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14211-L14212) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L487-L488)

```diff
-       get empty() {
-         return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
+       get end() {
+         return this.buffer[this.index - 2]
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L490-L495` → after: `L14214-L14229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14214-L14229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14214-L14229) · [Before (L490-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L490-L495)

```diff
-       iterGaps(zz) {
-         for (let uz = 0, bz = 0, Ez = 0; uz < this.sections.length;) {
-           let nz = this.sections[uz++],
-             iz = this.sections[uz++];
-           iz < 0 ? (zz(bz, Ez, nz), Ez += nz) : Ez += iz, bz += nz
-         }
+       get size() {
+         return this.buffer[this.index - 1]
+       }
+       get pos() {
+         return this.index
+       }
+       next() {
+         this.index -= 4
+       }
+       fork() {
+         return new Vq(this.buffer, this.index)
+       }
+     }
+     class dq {
+       constructor(qq, Eq, gq) {
+         this.buffer = qq, this.length = Eq, this.set = gq
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L497-L498` → after: `L14231-L14232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14231-L14232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14231-L14232) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L497-L498)

```diff
-       iterChangedRanges(zz) {
-         qz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
+       get type() {
+         return cq.none
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L500` → after: `L14234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14234) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L500)

```diff
-       get invertedDesc() {
+       toString() {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L502-L507` → after: `L14236-L14237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14236-L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14236-L14237) · [Before (L502-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L502-L507)

```diff
-         for (let uz = 0; uz < this.sections.length;) {
-           let bz = this.sections[uz++],
-             Ez = this.sections[uz++];
-           Ez < 0 ? zz.push(bz, Ez) : zz.push(Ez, bz)
-         }
-         return new Gz(zz)
+         for (let Eq = 0; Eq < this.buffer.length;) qq.push(this.childString(Eq)), Eq = this.buffer[Eq + 3];
+         return qq.join(",")
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L509-L510` → after: `L14239-L14247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14239-L14247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14239-L14247) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L509-L510)

```diff
-       composeDesc(zz) {
-         return this.empty ? zz : zz.empty ? this : Uz(this, zz)
+       childString(qq) {
+         let Eq = this.buffer[qq],
+           gq = this.buffer[qq + 3],
+           Yq = this.set.types[Eq],
+           lq = Yq.name;
+         if (/\W/.test(lq) && !Yq.isError && (lq = JSON.stringify(lq)), gq == (qq += 4)) return lq;
+         let Oq = [];
+         for (; qq < gq;) Oq.push(this.childString(qq)), qq = this.buffer[qq + 3];
+         return lq + "(" + Oq.join(",") + ")"
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L512-L514` → after: `L14249-L14254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14249-L14254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14249-L14254) · [Before (L512-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L512-L514)

```diff
-       mapDesc(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return zz.empty ? this : hz(this, zz, uz)
+       findChild(qq, Eq, gq, Yq, lq) {
+         let {
+           buffer: Oq
+         } = this, mq = -1;
+         for (let xq = qq; xq != Eq && !(jq(lq, Yq, Oq[xq + 1], Oq[xq + 2]) && (mq = xq, gq > 0)); xq = Oq[xq + 3]);
+         return mq
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L516-L519` → after: `L14256-L14258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14256-L14258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14256-L14258) · [Before (L516-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L516-L519)

```diff
-       mapPos(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
-           bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pz.Simple,
-           Ez = 0,
+       slice(qq, Eq, gq) {
+         let Yq = this.buffer,
+           lq = new Uint16Array(Eq - qq),
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L521-L533` → after: `L14260-L14263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14260-L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14260-L14263) · [Before (L521-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L521-L533)

```diff
-         for (let iz = 0; iz < this.sections.length;) {
-           let lz = this.sections[iz++],
-             Mz = this.sections[iz++],
-             tz = Ez + lz;
-           if (Mz < 0) {
-             if (tz > zz) return nz + (zz - Ez);
-             nz += lz
-           } else {
-             if (bz != Pz.Simple && tz >= zz && (bz == Pz.TrackDel && Ez < zz && tz > zz || bz == Pz.TrackBefore && Ez < zz || bz == Pz.TrackAfter && tz > zz)) return null;
-             if (tz > zz || tz == zz && uz < 0 && !lz) return zz == Ez || uz < 0 ? nz : nz + Mz;
-             nz += Mz
-           }
-           Ez = tz
+         for (let mq = qq, xq = 0; mq < Eq;) {
+           lq[xq++] = Yq[mq++], lq[xq++] = Yq[mq++] - gq;
+           let Eq = lq[xq++] = Yq[mq++] - gq;
+           lq[xq++] = Yq[mq++] - qq, Oq = Math.max(Oq, Eq)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L535-L536` → after: `L14265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14265) · [Before (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L535-L536)

```diff
-         if (zz > Ez) throw new RangeError(`Position ${zz} is out of range for changeset of length ${Ez}`);
-         return nz
+         return new dq(lq, Oq, this.set)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L538-L545` → after: `L14267-L14282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14267-L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14267-L14282) · [Before (L538-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L538-L545)

```diff
-       touchesRange(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
-         for (let bz = 0, Ez = 0; bz < this.sections.length && Ez <= uz;) {
-           let nz = Ez + this.sections[bz++];
-           if (this.sections[bz++] >= 0 && Ez <= uz && nz >= zz) return !(Ez < zz && nz > uz) || "cover";
-           Ez = nz
-         }
-         return !1
+     }
+ 
+     function jq(qq, Eq, gq, Yq) {
+       switch (qq) {
+         case -2:
+           return gq < Eq;
+         case -1:
+           return Yq >= Eq && gq < Eq;
+         case 0:
+           return gq < Eq && Yq > Eq;
+         case 1:
+           return gq <= Eq && Yq > Eq;
+         case 2:
+           return Yq > Eq;
+         case 4:
+           return !0
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L547-L552` → after: `L14284-L14327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14284-L14327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14284-L14327) · [Before (L547-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L547-L552)

```diff
-       toString() {
-         let zz = "";
-         for (let uz = 0; uz < this.sections.length;) {
-           let bz = this.sections[uz++],
-             Ez = this.sections[uz++];
-           zz += (zz ? " " : "") + bz + (Ez >= 0 ? ":" + Ez : "")
+     }
+ 
+     function Hq(qq, Eq, gq, Yq) {
+       for (var lq; qq.from == qq.to || (gq < 1 ? qq.from >= Eq : qq.from > Eq) || (gq > -1 ? qq.to <= Eq : qq.to < Eq);) {
+         let Eq = !Yq && qq instanceof Pq && qq.index < 0 ? null : qq.parent;
+         if (!Eq) return qq;
+         qq = Eq
+       }
+       let Oq = Yq ? 0 : Nq.IgnoreOverlays;
+       if (Yq)
+         for (let mq = qq, xq = mq.parent; xq; mq = xq, xq = mq.parent) mq instanceof Pq && mq.index < 0 && (null === (lq = xq.enter(Eq, gq, Oq)) || void 0 === lq ? void 0 : lq.from) != mq.from && (qq = xq);
+       for (;;) {
+         let Yq = qq.enter(Eq, gq, Oq);
+         if (!Yq) return qq;
+         qq = Yq
+       }
+ ... (28 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L556-L561` → after: `L14331-L14332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14331-L14332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14331-L14332) · [Before (L556-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L556-L561)

```diff
-       toJSON() {
-         return this.sections
-       }
-       static fromJSON(zz) {
-         if (!Array.isArray(zz) || zz.length % 2 || zz.some((zz => "number" != typeof zz))) throw new RangeError("Invalid JSON representation of ChangeDesc");
-         return new Gz(zz)
+       get node() {
+         return this
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L563-L564` → after: `L14334-L14335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14334-L14335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14334-L14335) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L563-L564)

```diff
-       static create(zz) {
-         return new Gz(zz)
+       get next() {
+         return this.parent
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L568-L569` → after: `L14339-L14340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14339-L14340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14339-L14340) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L568-L569)

```diff
-       constructor(zz, uz) {
-         super(zz), this.inserted = uz
+       constructor(qq, Eq, gq, Yq) {
+         super(), this._tree = qq, this.from = Eq, this.index = gq, this._parent = Yq
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L571-L573` → after: `L14342-L14343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14342-L14343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14342-L14343) · [Before (L571-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L571-L573)

```diff
-       apply(zz) {
-         if (this.length != zz.length) throw new RangeError("Applying change set to a document with the wrong length");
-         return qz(this, ((uz, bz, Ez, nz, iz) => zz = zz.replace(Ez, Ez + (bz - uz), iz)), !1), zz
+       get type() {
+         return this._tree.type
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L575-L576` → after: `L14345-L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14345-L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14345-L14346) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L575-L576)

```diff
-       mapDesc(zz) {
-         return hz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
+       get name() {
+         return this._tree.type.name
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L578-L588` → after: `L14348-L14370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14348-L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14348-L14370) · [Before (L578-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L578-L588)

```diff
-       invert(zz) {
-         let uz = this.sections.slice(),
-           bz = [];
-         for (let Ez = 0, nz = 0; Ez < uz.length; Ez += 2) {
-           let iz = uz[Ez],
-             lz = uz[Ez + 1];
-           if (lz >= 0) {
-             uz[Ez] = lz, uz[Ez + 1] = iz;
-             let Mz = Ez >> 1;
-             for (; bz.length < Mz;) bz.push(Rz.empty);
-             bz.push(iz ? zz.slice(nz, nz + iz) : Rz.empty)
+       get to() {
+         return this.from + this._tree.length
+       }
+       nextChild(qq, Eq, gq, Yq) {
+         let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         for (let Oq = this;;) {
+           for (let {
+               children: mq,
+               positions: Aq
+             } = Oq._tree, cq = Eq > 0 ? mq.length : -1; qq != cq; qq += Eq) {
+             let cq, uq = mq[qq],
+               Bq = Aq[qq] + Oq.from;
+             if (lq & Nq.EnterBracketed && uq instanceof aq && (cq = xq.get(uq)) && !cq.overlay && cq.bracketed && gq >= Bq && gq <= Bq + uq.length || jq(Yq, gq, Bq, Bq + uq.length))
+               if (uq instanceof dq) {
+                 if (lq & Nq.ExcludeBuffers) continue;
+                 let mq = uq.findChild(0, uq.buffer.length, Eq, gq - Bq, Yq);
+ ... (7 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L590` → after: `L14372-L14373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14372-L14373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14372-L14373) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L590)

```diff
-           nz += iz
+           if (lq & Nq.IncludeAnonymous || !Oq.type.isAnonymous) return null;
+           if (qq = Oq.index >= 0 ? Oq.index + Eq : Eq < 0 ? -1 : Oq._parent._tree.children.length, Oq = Oq._parent, !Oq) return null
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L594-L595` → after: `L14376-L14377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14376-L14377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14376-L14377) · [Before (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L594-L595)

```diff
-       compose(zz) {
-         return this.empty ? zz : zz.empty ? this : Uz(this, zz, !0)
+       get firstChild() {
+         return this.nextChild(0, 1, 0, 4)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L597-L599` → after: `L14379-L14380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14379-L14380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14379-L14380) · [Before (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L597-L599)

```diff
-       map(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return zz.empty ? this : hz(this, zz, uz, !0)
+       get lastChild() {
+         return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L601-L602` → after: `L14382-L14383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14382-L14383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14382-L14383) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L601-L602)

```diff
-       iterChanges(zz) {
-         qz(this, zz, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
+       childAfter(qq) {
+         return this.nextChild(0, 1, qq, 2)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L604-L605` → after: `L14385-L14386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14385-L14386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14385-L14386) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L604-L605)

```diff
-       get desc() {
-         return Gz.create(this.sections)
+       childBefore(qq) {
+         return this.nextChild(this._tree.children.length - 1, -1, qq, -2)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L607-L631` → after: `L14388-L14389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14388-L14389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14388-L14389) · [Before (L607-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L607-L631)

```diff
-       filter(zz) {
-         let uz = [],
-           bz = [],
-           Ez = [],
-           nz = new cz(this);
-         zz: for (let iz = 0, lz = 0;;) {
-           let Mz = iz == zz.length ? 1e9 : zz[iz++];
-           for (; lz < Mz || lz == Mz && 0 == nz.len;) {
-             if (nz.done) break zz;
-             let zz = Math.min(nz.len, Mz - lz);
-             Vz(Ez, zz, -1);
-             let iz = -1 == nz.ins ? -1 : 0 == nz.off ? nz.ins : 0;
-             Vz(uz, zz, iz), iz > 0 && mz(bz, uz, nz.text), nz.forward(zz), lz += zz
-           }
-           let tz = zz[iz++];
-           for (; lz < tz;) {
- ... (9 more removed lines; see GitHub link above)
+       prop(qq) {
+         return this._tree.prop(qq)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L633-L638` → after: `L14391-L14401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14391-L14401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14391-L14401) · [Before (L633-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L633-L638)

```diff
-       toJSON() {
-         let zz = [];
-         for (let uz = 0; uz < this.sections.length; uz += 2) {
-           let bz = this.sections[uz],
-             Ez = this.sections[uz + 1];
-           Ez < 0 ? zz.push(bz) : 0 == Ez ? zz.push([bz]) : zz.push([bz].concat(this.inserted[uz >> 1].toJSON()))
+       enter(qq, Eq) {
+         let gq, Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (!(Yq & Nq.IgnoreOverlays) && (gq = xq.get(this._tree)) && gq.overlay) {
+           let lq = qq - this.from,
+             Oq = Yq & Nq.EnterBracketed && gq.bracketed;
+           for (let {
+               from: qq,
+               to: Yq
+             }
+             of gq.overlay)
+             if ((Eq > 0 || Oq ? qq <= lq : qq < lq) && (Eq < 0 || Oq ? Yq >= lq : Yq > lq)) return new Pq(gq.tree, gq.overlay[0].from + this.from, -1, this)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L642-L646` → after: `L14410-L14428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14410-L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14410-L14428) · [Before (L642-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L642-L646)

```diff
-       static of (zz, uz, bz) {
-         let Ez = [],
-           nz = [],
-           iz = 0,
-           lz = null;
+       get parent() {
+         return this._parent ? this._parent.nextSignificantParent() : null
+       }
+       get nextSibling() {
+         return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null
+       }
+       get prevSibling() {
+         return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null
+       }
+       get tree() {
+         return this._tree
+       }
+       toTree() {
+         return this._tree
+       }
+       toString() {
+ ... (3 more added lines; see GitHub link above)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L648-L672` → after: `L14430-L14450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14430-L14450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14430-L14450) · [Before (L648-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L648-L672)

```diff
-         function Mz() {
-           if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !Ez.length) return;
-           iz < uz && Vz(Ez, uz - iz, -1);
-           let zz = new az(Ez, nz);
-           lz = lz ? lz.compose(zz.map(lz)) : zz, Ez = [], nz = [], iz = 0
-         }
-         return function zz(tz) {
-           if (Array.isArray(tz))
-             for (let uz of tz) zz(uz);
-           else if (tz instanceof az) {
-             if (tz.length != uz) throw new RangeError(`Mismatched change set length (got ${tz.length}, expected ${uz})`);
-             Mz(), lz = lz ? lz.compose(tz.map(lz)) : tz
-           } else {
-             let {
-               from: zz,
-               to: lz = zz,
- ... (9 more removed lines; see GitHub link above)
+     function Qq(qq, Eq, gq, Yq) {
+       let lq = qq.cursor(),
+         Oq = [];
+       if (!lq.firstChild()) return Oq;
+       if (null != gq)
+         for (let mq = !1; !mq;)
+           if (mq = lq.type.is(gq), !lq.nextSibling()) return Oq;
+       for (;;) {
+         if (null != Yq && lq.type.is(Yq)) return Oq;
+         if (lq.type.is(Eq) && Oq.push(lq.node), !lq.nextSibling()) return null == Yq ? Oq : []
+       }
+     }
+ 
+     function yq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq.length - 1;
+       for (let Yq = qq; gq >= 0; Yq = Yq.parent) {
+ ... (5 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L674-L675` → after: `L14452-L14456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14452-L14456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14452-L14456) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L674-L675)

```diff
-       static empty(zz) {
-         return new az(zz ? [zz, -1] : [], [])
+       return !0
+     }
+     class tq {
+       constructor(qq, Eq, gq, Yq) {
+         this.parent = qq, this.buffer = Eq, this.index = gq, this.start = Yq
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L677-L678` → after: `L14458-L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14458-L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14458-L14521) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L677-L678)

```diff
-       static fromJSON(zz) {
-         if (!Array.isArray(zz)) throw new RangeError("Invalid JSON representation of ChangeSet");
+     }
+     class rq extends oq {
+       get name() {
+         return this.type.name
+       }
+       get from() {
+         return this.context.start + this.context.buffer.buffer[this.index + 1]
+       }
+       get to() {
+         return this.context.start + this.context.buffer.buffer[this.index + 2]
+       }
+       constructor(qq, Eq, gq) {
+         super(), this.context = qq, this._parent = Eq, this.index = gq, this.type = qq.buffer.set.types[qq.buffer.buffer[gq]]
+       }
+       child(qq, Eq, gq) {
+         let {
+ ... (48 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L680-L691` → after: `L14523-L14531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14523-L14531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14523-L14531) · [Before (L680-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L680-L691)

```diff
-           bz = [];
-         for (let Ez = 0; Ez < zz.length; Ez++) {
-           let nz = zz[Ez];
-           if ("number" == typeof nz) uz.push(nz, -1);
-           else {
-             if (!Array.isArray(nz) || "number" != typeof nz[0] || nz.some(((zz, uz) => uz && "string" != typeof zz))) throw new RangeError("Invalid JSON representation of ChangeSet");
-             if (1 == nz.length) uz.push(nz[0], 0);
-             else {
-               for (; bz.length < Ez;) bz.push(Rz.empty);
-               bz[Ez] = Rz.of(nz.slice(1)), uz.push(nz[0], bz[Ez].length)
-             }
-           }
+           Eq = [],
+           {
+             buffer: gq
+           } = this.context,
+           Yq = this.index + 4,
+           lq = gq.buffer[this.index + 3];
+         if (lq > Yq) {
+           let Oq = gq.buffer[this.index + 1];
+           qq.push(gq.slice(Yq, lq, Oq)), Eq.push(0)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L693` → after: `L14533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14533) · [Before (L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L693)

```diff
-         return new az(uz, bz)
+         return new aq(this.type, qq, Eq, this.to - this.from)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L695-L696` → after: `L14535-L14536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14535-L14536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14535-L14536) · [Before (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L695-L696)

```diff
-       static createSet(zz, uz) {
-         return new az(zz, uz)
+       toString() {
+         return this.context.buffer.childString(this.index)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L700-L704` → after: `L14540-L14550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14540-L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14540-L14550) · [Before (L700-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L700-L704)

```diff
-     function Vz(zz, uz, bz) {
-       let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       if (0 == uz && bz <= 0) return;
-       let nz = zz.length - 2;
-       nz >= 0 && bz <= 0 && bz == zz[nz + 1] ? zz[nz] += uz : nz >= 0 && 0 == uz && 0 == zz[nz] ? zz[nz + 1] += bz : Ez ? (zz[nz] += uz, zz[nz + 1] += bz) : zz.push(uz, bz)
+     function vq(qq) {
+       if (!qq.length) return null;
+       let Eq = 0,
+         gq = qq[0];
+       for (let Oq = 1; Oq < qq.length; Oq++) {
+         let Yq = qq[Oq];
+         (Yq.from > gq.from || Yq.to < gq.to) && (gq = Yq, Eq = Oq)
+       }
+       let Yq = gq instanceof Pq && gq.index < 0 ? null : gq.parent,
+         lq = qq.slice();
+       return Yq ? lq[Eq] = Yq : lq.splice(Eq, 1), new hq(lq, gq)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L706-L713` → after: `L14552-L14557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14552-L14557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14552-L14557) · [Before (L706-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L706-L713)

```diff
- 
-     function mz(zz, uz, bz) {
-       if (0 == bz.length) return;
-       let Ez = uz.length - 2 >> 1;
-       if (Ez < zz.length) zz[zz.length - 1] = zz[zz.length - 1].append(bz);
-       else {
-         for (; zz.length < Ez;) zz.push(Rz.empty);
-         zz.push(bz)
+     class hq {
+       constructor(qq, Eq) {
+         this.heads = qq, this.node = Eq
+       }
+       get next() {
+         return vq(this.heads)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L716-L722` → after: `L14560-L14566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14560-L14566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14560-L14566) · [Before (L716-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L716-L722)

```diff
- 
-     function qz(zz, uz, bz) {
-       let Ez = zz.inserted;
-       for (let nz = 0, iz = 0, lz = 0; lz < zz.sections.length;) {
-         let Mz = zz.sections[lz++],
-           tz = zz.sections[lz++];
-         if (tz < 0) nz += Mz, iz += Mz;
+     class nq {
+       get name() {
+         return this.type.name
+       }
+       constructor(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = Eq & ~Nq.EnterBracketed, qq instanceof Pq) this.yieldNode(qq);
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L724-L728` → after: `L14568-L14570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14568-L14570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14568-L14570) · [Before (L724-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L724-L728)

```diff
-           let Hz = nz,
-             Oz = iz,
-             pz = Rz.empty;
-           for (; Hz += Mz, Oz += tz, tz && Ez && (pz = pz.append(Ez[lz - 2 >> 1])), !(bz || lz == zz.sections.length || zz.sections[lz + 1] < 0);) Mz = zz.sections[lz++], tz = zz.sections[lz++];
-           uz(nz, Hz, iz, Oz, pz), nz = Hz, iz = Oz
+           this._tree = qq.context.parent, this.buffer = qq.context;
+           for (let Eq = qq._parent; Eq; Eq = Eq._parent) this.stack.unshift(Eq.index);
+           this.bufferNode = qq, this.yieldBuf(qq.index)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L731-L752` → after: `L14573-L14626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14573-L14626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14573-L14626) · [Before (L731-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L731-L752)

```diff
-     }
- 
-     function hz(zz, uz, bz) {
-       let Ez = [],
-         nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
-         iz = new cz(zz),
-         lz = new cz(uz),
-         Mz = 0;
-       for (let tz = -1;;) {
-         if (++Mz > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
-         if (iz.done && lz.len || lz.done && iz.len) throw new Error("Mismatched change set lengths");
-         if (-1 == iz.ins && -1 == lz.ins) {
-           let zz = Math.min(iz.len, lz.len);
-           Vz(Ez, zz, -1), iz.forward(zz), lz.forward(zz)
-         } else if (lz.ins >= 0 && (iz.ins < 0 || tz == iz.i || 0 == iz.off && (lz.len < iz.len || lz.len == iz.len && !bz))) {
-           let zz = lz.len;
- ... (6 more removed lines; see GitHub link above)
+       yieldNode(qq) {
+         return !!qq && (this._tree = qq, this.type = qq.type, this.from = qq.from, this.to = qq.to, !0)
+       }
+       yieldBuf(qq, Eq) {
+         this.index = qq;
+         let {
+           start: gq,
+           buffer: Yq
+         } = this.buffer;
+         return this.type = Eq || Yq.set.types[Yq.buffer[qq]], this.from = gq + Yq.buffer[qq + 1], this.to = gq + Yq.buffer[qq + 2], !0
+       }
+       yield(qq) {
+         return !!qq && (qq instanceof Pq ? (this.buffer = null, this.yieldNode(qq)) : (this.buffer = qq.context, this.yieldBuf(qq.index, qq.type)))
+       }
+       toString() {
+         return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
+ ... (38 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L754-L768` → after: `L14628-L14716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14628-L14716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14628-L14716) · [Before (L754-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L754-L768)

```diff
-           if (!(iz.ins >= 0)) {
-             if (iz.done && lz.done) return nz ? az.createSet(Ez, nz) : Gz.create(Ez);
-             throw new Error("Mismatched change set lengths")
-           } {
-             let zz = 0,
-               uz = iz.len;
-             for (; uz;) {
-               if (++Mz > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
-               if (-1 == lz.ins) {
-                 let bz = Math.min(uz, lz.len);
-                 zz += bz, uz -= bz, lz.forward(bz)
-               } else {
-                 if (!(0 == lz.ins && lz.len < uz)) break;
-                 uz -= lz.len, lz.next()
-               }
+           let qq = Eq.buffer[this.index + 3];
+           if (qq < (gq < 0 ? Eq.buffer.length : Eq.buffer[this.stack[gq] + 3])) return this.yieldBuf(qq)
+         }
+         return gq < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + qq, qq, 0, 4, this.mode))
+       }
+       nextSibling() {
+         return this.sibling(1)
+       }
+       prevSibling() {
+         return this.sibling(-1)
+       }
+       atLastNode(qq) {
+         let Eq, gq, {
+           buffer: Yq
+         } = this;
+         if (Yq) {
+ ... (73 more added lines; see GitHub link above)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L770` → after: `L14718-L14739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14718-L14739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14718-L14739) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L770)

```diff
-             Vz(Ez, zz, tz < iz.i ? iz.ins : 0), nz && tz < iz.i && mz(nz, Ez, iz.text), tz = iz.i, iz.forward(iz.len - uz)
+             this.type.isAnonymous || (Yq = !0)
+           }
+           for (;;) {
+             if (Yq && Eq && Eq(this), Yq = this.type.isAnonymous, !gq) return;
+             if (this.nextSibling()) break;
+             this.parent(), gq--, Yq = !0
+           }
+         }
+       }
+       matchContext(qq) {
+         if (!this.buffer) return yq(this.node.parent, qq);
+         let {
+           buffer: Eq
+         } = this.buffer, {
+           types: gq
+         } = Eq.set;
+ ... (6 more added lines; see GitHub link above)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L777-L795` → after: `L14752-L14759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14752-L14759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14752-L14759) · [Before (L777-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L777-L795)

```diff
-       let bz = [],
-         Ez = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
-         nz = new cz(zz),
-         iz = new cz(uz),
-         lz = 0;
-       for (let Mz = !1;;) {
-         if (++lz > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
-         if (nz.done && iz.done) return Ez ? az.createSet(bz, Ez) : Gz.create(bz);
-         if (0 == nz.ins) Vz(bz, nz.len, 0, Mz), nz.next();
-         else if (0 != iz.len || iz.done) {
-           if (nz.done || iz.done) throw new Error("Mismatched change set lengths");
-           {
-             let zz = Math.min(nz.len2, iz.len),
-               uz = bz.length;
-             if (-1 == nz.ins) {
-               let uz = -1 == iz.ins ? -1 : iz.off ? 0 : iz.ins;
- ... (3 more removed lines; see GitHub link above)
+       if (!qq.isAnonymous || Eq instanceof dq || Eq.type != qq) return 1;
+       let gq = iq.get(Eq);
+       if (null == gq) {
+         gq = 1;
+         for (let Yq of Eq.children) {
+           if (Yq.type != qq || !(Yq instanceof aq)) {
+             gq = 1;
+             break
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L797` → after: `L14761-L14763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14761-L14763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14761-L14763) · [Before (L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L797)

```diff
-         } else Vz(bz, 0, iz.ins, Mz), Ez && mz(Ez, bz, iz.text), iz.next()
+           gq += Zq(qq, Yq)
+         }
+         iq.set(Eq, gq)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L801-L808` → after: `L14800-L14801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14800-L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14800-L14801) · [Before (L801-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L801-L808)

```diff
-       constructor(zz) {
-         this.set = zz, this.i = 0, this.next()
-       }
-       next() {
-         let {
-           sections: zz
-         } = this.set;
-         this.i < zz.length ? (this.len = zz[this.i++], this.ins = zz[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
+       constructor() {
+         this.map = new WeakMap
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L810-L811` → after: `L14803-L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14803-L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14803-L14805) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L810-L811)

```diff
-       get done() {
-         return -2 == this.ins
+       setBuffer(qq, Eq, gq) {
+         let Yq = this.map.get(qq);
+         Yq || this.map.set(qq, Yq = new Map), Yq.set(Eq, gq)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L813-L814` → after: `L14807-L14809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14807-L14809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14807-L14809) · [Before (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L813-L814)

```diff
-       get len2() {
-         return this.ins < 0 ? this.len : this.ins
+       getBuffer(qq, Eq) {
+         let gq = this.map.get(qq);
+         return gq && gq.get(Eq)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L816-L820` → after: `L14811-L14812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14811-L14812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14811-L14812) · [Before (L816-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L816-L820)

```diff
-       get text() {
-         let {
-           inserted: zz
-         } = this.set, uz = this.i - 2 >> 1;
-         return uz >= zz.length ? Rz.empty : zz[uz]
+       set(qq, Eq) {
+         qq instanceof rq ? this.setBuffer(qq.context.buffer, qq.index, Eq) : qq instanceof Pq && this.map.set(qq.tree, Eq)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L822-L826` → after: `L14814-L14815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14814-L14815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14814-L14815) · [Before (L822-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L822-L826)

```diff
-       textBit(zz) {
-         let {
-           inserted: uz
-         } = this.set, bz = this.i - 2 >> 1;
-         return bz >= uz.length && !zz ? Rz.empty : uz[bz].slice(this.off, null == zz ? void 0 : this.off + zz)
+       get(qq) {
+         return qq instanceof rq ? this.getBuffer(qq.context.buffer, qq.index) : qq instanceof Pq ? this.map.get(qq.tree) : void 0
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L828-L829` → after: `L14817-L14818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14817-L14818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14817-L14818) · [Before (L828-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L828-L829)

```diff
-       forward(zz) {
-         zz == this.len ? this.next() : (this.len -= zz, this.off += zz)
+       cursorSet(qq, Eq) {
+         qq.buffer ? this.setBuffer(qq.buffer.buffer, qq.index, Eq) : this.map.set(qq.tree, Eq)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L831-L832` → after: `L14820-L14821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14820-L14821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14820-L14821) · [Before (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L831-L832)

```diff
-       forward2(zz) {
-         -1 == this.ins ? this.forward(zz) : zz == this.ins ? this.next() : (this.ins -= zz, this.off += zz)
+       cursorGet(qq) {
+         return qq.buffer ? this.getBuffer(qq.buffer.buffer, qq.index) : this.map.get(qq.tree)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L836-L840` → after: `L14825-L14828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14825-L14828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14825-L14828) · [Before (L836-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L836-L840)

```diff
-       constructor(zz, uz, bz) {
-         this.from = zz, this.to = uz, this.flags = bz
-       }
-       get anchor() {
-         return 32 & this.flags ? this.to : this.from
+       constructor(qq, Eq, gq, Yq) {
+         let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         this.from = qq, this.to = Eq, this.tree = gq, this.offset = Yq, this.open = (lq ? 1 : 0) | (Oq ? 2 : 0)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L842-L843` → after: `L14830-L14831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14830-L14831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14830-L14831) · [Before (L842-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L842-L843)

```diff
-       get head() {
-         return 32 & this.flags ? this.from : this.to
+       get openStart() {
+         return (1 & this.open) > 0
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L845-L846` → after: `L14833-L14834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14833-L14834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14833-L14834) · [Before (L845-L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L845-L846)

```diff
-       get empty() {
-         return this.from == this.to
+       get openEnd() {
+         return (2 & this.open) > 0
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L848-L849` → after: `L14836-L14841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14836-L14841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14836-L14841) · [Before (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L848-L849)

```diff
-       get assoc() {
-         return 8 & this.flags ? -1 : 16 & this.flags ? 1 : 0
+       static addTree(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           Yq = [new Tq(0, qq.length, qq, 0, !1, gq)];
+         for (let lq of Eq) lq.to > qq.length && Yq.push(lq);
+         return Yq
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L851-L853` → after: `L14843-L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14843-L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14843-L14866) · [Before (L851-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L851-L853)

```diff
-       get bidiLevel() {
-         let zz = 7 & this.flags;
-         return 7 == zz ? null : zz
+       static applyChanges(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
+         if (!Eq.length) return qq;
+         let Yq = [],
+           lq = 1,
+           Oq = qq.length ? qq[0] : null;
+         for (let mq = 0, xq = 0, Aq = 0;; mq++) {
+           let cq = mq < Eq.length ? Eq[mq] : null,
+             uq = cq ? cq.fromA : 1e9;
+           if (uq - xq >= gq)
+             for (; Oq && Oq.from < uq;) {
+               let Eq = Oq;
+               if (xq >= Eq.from || uq <= Eq.to || Aq) {
+                 let qq = Math.max(Eq.from, xq) - Aq,
+                   gq = Math.min(Eq.to, uq) - Aq;
+                 Eq = qq >= gq ? null : new Tq(qq, gq, Eq.tree, Eq.offset + Aq, mq > 0, !!cq)
+ ... (8 more added lines; see GitHub link above)
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L855-L857` → after: `L14868-L14871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14868-L14871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14868-L14871) · [Before (L855-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L855-L857)

```diff
-       get goalColumn() {
-         let zz = this.flags >> 6;
-         return 16777215 == zz ? void 0 : zz
+     }
+     class zq {
+       startParse(qq, Eq, gq) {
+         return "string" == typeof qq && (qq = new Sq(qq)), gq = gq ? gq.length ? gq.map((qq => new Oq(qq.from, qq.to))) : [new Oq(0, 0)] : [new Oq(0, qq.length)], this.createParse(qq, Eq || [], gq)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L859-L861` → after: `L14873-L14878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14873-L14878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14873-L14878) · [Before (L859-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L859-L861)

```diff
-       map(zz) {
-         let uz, bz, Ez = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
-         return this.empty ? uz = bz = zz.mapPos(this.from, Ez) : (uz = zz.mapPos(this.from, 1), bz = zz.mapPos(this.to, -1)), uz == this.from && bz == this.to ? this : new gz(uz, bz, this.flags)
+       parse(qq, Eq, gq) {
+         let Yq = this.startParse(qq, Eq, gq);
+         for (;;) {
+           let qq = Yq.advance();
+           if (qq) return qq
+         }
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L863-L868` → after: `L14880-L14883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14880-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14880-L14883) · [Before (L863-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L863-L868)

```diff
-       extend(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz,
-           bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (zz <= this.anchor && uz >= this.anchor) return Sz.range(zz, uz, void 0, void 0, bz);
-         let Ez = Math.abs(zz - this.anchor) > Math.abs(uz - this.anchor) ? zz : uz;
-         return Sz.range(this.anchor, Ez, void 0, void 0, bz)
+     }
+     class Sq {
+       constructor(qq) {
+         this.string = qq
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L870-L872` → after: `L14885-L14886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14885-L14886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14885-L14886) · [Before (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L870-L872)

```diff
-       eq(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return this.anchor == zz.anchor && this.head == zz.head && this.goalColumn == zz.goalColumn && (!uz || !this.empty || this.assoc == zz.assoc)
+       get length() {
+         return this.string.length
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L874-L878` → after: `L14888-L14889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14888-L14889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14888-L14889) · [Before (L874-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L874-L878)

```diff
-       toJSON() {
-         return {
-           anchor: this.anchor,
-           head: this.head
-         }
+       chunk(qq) {
+         return this.string.slice(qq)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L880-L882` → after: `L14891-L14892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14891-L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14891-L14892) · [Before (L880-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L880-L882)

```diff
-       static fromJSON(zz) {
-         if (!zz || "number" != typeof zz.anchor || "number" != typeof zz.head) throw new RangeError("Invalid JSON representation for SelectionRange");
-         return Sz.range(zz.anchor, zz.head)
+       get lineChunks() {
+         return !1
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L884-L885` → after: `L14894-L14895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14894-L14895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14894-L14895) · [Before (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L884-L885)

```diff
-       static create(zz, uz, bz) {
-         return new gz(zz, uz, bz)
+       read(qq, Eq) {
+         return this.string.slice(qq, Eq)
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L889-L890` → after: `L14912-L14913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14912-L14913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14912-L14913) · [Before (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L889-L890)

```diff
-       constructor(zz, uz) {
-         this.al = zz, this.mainIndex = uz
+       constructor(qq, Eq, gq, Yq) {
+         this.name = qq, this.set = Eq, this.base = gq, this.modified = Yq, this.id = lq++
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L892-L894` → after: `L14915-L14920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14915-L14920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14915-L14920) · [Before (L892-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L892-L894)

```diff
-       map(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
-         return zz.empty ? this : Sz.create(this.al.map((bz => bz.map(zz, uz))), this.mainIndex)
+       toString() {
+         let {
+           name: qq
+         } = this;
+         for (let Eq of this.modified) Eq.name && (qq = `${Eq.name}(${qq})`);
+         return qq
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L896-L901` → after: `L14922-L14928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14922-L14928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14922-L14928) · [Before (L896-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L896-L901)

```diff
-       eq(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this.al.length != zz.al.length || this.mainIndex != zz.mainIndex) return !1;
-         for (let bz = 0; bz < this.al.length; bz++)
-           if (!this.al[bz].eq(zz.al[bz], uz)) return !1;
-         return !0
+       static define(qq, Eq) {
+         let gq = "string" == typeof qq ? qq : "?";
+         if (qq instanceof Oq && (Eq = qq), null === Eq || void 0 === Eq ? void 0 : Eq.base) throw new Error("Can not derive from a modified tag");
+         let Yq = new Oq(gq, [], null, []);
+         if (Yq.set.push(Yq), Eq)
+           for (let lq of Eq.set) Yq.set.push(lq);
+         return Yq
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L903-L904` → after: `L14930-L14932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14930-L14932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14930-L14932) · [Before (L903-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L903-L904)

```diff
-       get main() {
-         return this.al[this.mainIndex]
+       static defineModifier(qq) {
+         let Eq = new xq(qq);
+         return qq => qq.modified.indexOf(Eq) > -1 ? qq : xq.get(qq.base || qq, qq.modified.concat(Eq).sort(((qq, Eq) => qq.id - Eq.id)))
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L906-L907` → after: `L14934-L14938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14934-L14938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14934-L14938) · [Before (L906-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L906-L907)

```diff
-       asSingle() {
-         return 1 == this.al.length ? this : new Sz([this.main], 0)
+     }
+     let mq = 0;
+     class xq {
+       constructor(qq) {
+         this.name = qq, this.instances = [], this.id = mq++
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L909-L911` → after: `L14940-L14961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14940-L14961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14940-L14961) · [Before (L909-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L909-L911)

```diff
-       addRange(zz) {
-         let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         return Sz.create([zz].concat(this.al), uz ? 0 : this.mainIndex + 1)
+       static get(qq, Eq) {
+         if (!Eq.length) return qq;
+         let gq = Eq[0].instances.find((gq => {
+           return gq.base == qq && (Yq = Eq, lq = gq.modified, Yq.length == lq.length && Yq.every(((qq, Eq) => qq == lq[Eq])));
+           var Yq, lq
+         }));
+         if (gq) return gq;
+         let Yq = [],
+           lq = new Oq(qq.name, Yq, qq, Eq);
+         for (let Oq of Eq) Oq.instances.push(lq);
+         let mq = function(qq) {
+           let Eq = [
+             []
+           ];
+           for (let gq = 0; gq < qq.length; gq++)
+             for (let Yq = 0, lq = Eq.length; Yq < lq; Yq++) Eq.push(Eq[Yq].concat(qq[gq]));
+ ... (6 more added lines; see GitHub link above)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L913-L916` → after: `L14963-L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14963-L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14963-L14996) · [Before (L913-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L913-L916)

```diff
-       replaceRange(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
-           bz = this.al.slice();
-         return bz[uz] = zz, Sz.create(bz, this.mainIndex)
+     }
+ 
+     function Aq(qq) {
+       let Eq = Object.create(null);
+       for (let gq in qq) {
+         let Yq = qq[gq];
+         Array.isArray(Yq) || (Yq = [Yq]);
+         for (let qq of gq.split(" "))
+           if (qq) {
+             let gq = [],
+               lq = 2,
+               Oq = qq;
+             for (let Eq = 0;;) {
+               if ("..." == Oq && Eq > 0 && Eq + 3 == qq.length) {
+                 lq = 1;
+                 break
+ ... (18 more added lines; see GitHub link above)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L918-L921` → after: `L14998-L15006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR14998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L14998-L15006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L14998-L15006) · [Before (L918-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L918-L921)

```diff
-       toJSON() {
-         return {
-           al: this.al.map((zz => zz.toJSON())),
-           main: this.mainIndex
+       return cq.add(Eq)
+     }
+     const cq = new Yq.h({
+       combine(qq, Eq) {
+         let gq, Yq, lq;
+         for (; qq || Eq;) {
+           if (!qq || Eq && qq.depth >= Eq.depth ? (lq = Eq, Eq = Eq.next) : (lq = qq, qq = qq.next), gq && gq.mode == lq.mode && !lq.context && !gq.context) continue;
+           let Oq = new uq(lq.tags, lq.mode, lq.context);
+           gq ? gq.next = Oq : Yq = Oq, gq = Oq
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L924-L930` → after: `L15010-L15013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15010-L15013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15010-L15013) · [Before (L924-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L924-L930)

```diff
-       static fromJSON(zz) {
-         if (!zz || !Array.isArray(zz.al) || "number" != typeof zz.main || zz.main >= zz.al.length) throw new RangeError("Invalid JSON representation for EditorSelection");
-         return new Sz(zz.al.map((zz => gz.fromJSON(zz))), zz.main)
-       }
-       static single(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zz;
-         return new Sz([Sz.range(zz, uz)], 0)
+     });
+     class uq {
+       constructor(qq, Eq, gq, Yq) {
+         this.tags = qq, this.mode = Eq, this.context = gq, this.next = Yq
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L932-L940` → after: `L15015-L15016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15015-L15016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15015-L15016) · [Before (L932-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L932-L940)

```diff
-       static create(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         if (0 == zz.length) throw new RangeError("A selection needs at least one range");
-         for (let bz = 0, Ez = 0; Ez < zz.length; Ez++) {
-           let nz = zz[Ez];
-           if (nz.empty ? nz.from <= bz : nz.from < bz) return Sz.normalized(zz.slice(), uz);
-           bz = nz.to
-         }
-         return new Sz(zz, uz)
+       get opaque() {
+         return 0 == this.mode
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L942-L946` → after: `L15018-L15019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15018-L15019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15018-L15019) · [Before (L942-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L942-L946)

```diff
-       static cursor(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           bz = arguments.length > 2 ? arguments[2] : void 0,
-           Ez = arguments.length > 3 ? arguments[3] : void 0;
-         return gz.create(zz, zz, (0 == uz ? 0 : uz < 0 ? 8 : 16) | (null == bz ? 7 : Math.min(6, bz)) | (null !== Ez && void 0 !== Ez ? Ez : 16777215) << 6)
+       get inherit() {
+         return 1 == this.mode
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L948-L950` → after: `L15021-L15022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15021-L15022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15021-L15022) · [Before (L948-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L948-L950)

```diff
-       static range(zz, uz, bz, Ez, nz) {
-         let iz = (null !== bz && void 0 !== bz ? bz : 16777215) << 6 | (null == Ez ? 7 : Math.min(6, Ez));
-         return nz || zz == uz || (nz = uz < zz ? 1 : -1), uz < zz ? gz.create(uz, zz, 48 | iz) : gz.create(zz, uz, (nz ? nz < 0 ? 8 : 16 : 0) | iz)
+       sort(qq) {
+         return !qq || qq.depth < this.depth ? (this.next = qq, this) : (qq.next = this.sort(qq.next), qq)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L952-L965` → after: `L15024-L15025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15024-L15025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15024-L15025) · [Before (L952-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L952-L965)

```diff
-       static normalized(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           bz = zz[uz];
-         zz.sort(((zz, uz) => zz.from - uz.from)), uz = zz.indexOf(bz);
-         for (let Ez = 1; Ez < zz.length; Ez++) {
-           let bz = zz[Ez],
-             nz = zz[Ez - 1];
-           if (bz.empty ? bz.from <= nz.to : bz.from < nz.to) {
-             let iz = nz.from,
-               lz = Math.max(bz.to, nz.to);
-             Ez <= uz && uz--, zz.splice(--Ez, 2, bz.anchor > bz.head ? Sz.range(lz, iz) : Sz.range(iz, lz))
-           }
-         }
-         return new Sz(zz, uz)
+       get depth() {
+         return this.context ? this.context.length : 0
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L970-L997` → after: `L15030-L15052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15030-L15052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15030-L15052) · [Before (L970-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L970-L997)

```diff
-       for (let bz of zz.al)
-         if (bz.to > uz) throw new RangeError("Selection points outside of document")
-     }
-     let Dz = 0;
-     class Qz {
-       constructor(zz, uz, bz, Ez, nz) {
-         this.combine = zz, this.compareInput = uz, this.compare = bz, this.isStatic = Ez, this.id = Dz++, this.default = zz([]), this.extensions = "function" == typeof nz ? nz(this) : nz
-       }
-       get reader() {
-         return this
-       }
-       static define() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         return new Qz(zz.combine || (zz => zz), zz.compareInput || ((zz, uz) => zz === uz), zz.compare || (zz.combine ? (zz, uz) => zz === uz : Wz), !!zz.static, zz.enables)
-       }
-       of(zz) {
- ... (12 more removed lines; see GitHub link above)
+       let gq = Object.create(null);
+       for (let Oq of qq)
+         if (Array.isArray(Oq.tag))
+           for (let qq of Oq.tag) gq[qq.id] = Oq.class;
+         else gq[Oq.tag.id] = Oq.class;
+       let {
+         scope: Yq,
+         all: lq = null
+       } = Eq || {};
+       return {
+         style: qq => {
+           let Eq = lq;
+           for (let Yq of qq)
+             for (let qq of Yq.set) {
+               let Yq = gq[qq.id];
+               if (Yq) {
+ ... (7 more added lines; see GitHub link above)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1001-L1002` → after: `L15056-L15060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15056-L15060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15056-L15060) · [Before (L1001-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1001-L1002)

```diff
-     function Wz(zz, uz) {
-       return zz == uz || zz.length == uz.length && zz.every(((zz, bz) => zz === uz[bz]))
+     function Wq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : qq.length,
+         Oq = new Nq(Yq, Array.isArray(Eq) ? Eq : [Eq], gq);
+       Oq.highlightRange(qq.cursor(), Yq, lq, "", Oq.highlighters), Oq.flush(lq)
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1005-L1006` → after: `L15064-L15065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15064-L15065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15064-L15065) · [Before (L1005-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1005-L1006)

```diff
-       constructor(zz, uz, bz, Ez) {
-         this.dependencies = zz, this.facet = uz, this.type = bz, this.value = Ez, this.id = Dz++
+       constructor(qq, Eq, gq) {
+         this.at = qq, this.highlighters = Eq, this.span = gq, this.class = ""
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1008-L1024` → after: `L15067-L15091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15067-L15091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15067-L15091) · [Before (L1008-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1008-L1024)

```diff
-       dynamicSlot(zz) {
-         var uz;
-         let bz = this.value,
-           Ez = this.facet.compareInput,
-           nz = this.id,
-           iz = zz[nz] >> 1,
-           lz = 2 == this.type,
-           Mz = !1,
-           tz = !1,
-           Hz = [];
-         for (let Oz of this.dependencies) "doc" == Oz ? Mz = !0 : "selection" == Oz ? tz = !0 : 0 == (1 & (null !== (uz = zz[Oz.id]) && void 0 !== uz ? uz : 1)) && Hz.push(zz[Oz.id]);
-         return {
-           create: zz => (zz.values[iz] = bz(zz), 1),
-           update(zz, uz) {
-             if (Mz && uz.docChanged || tz && (uz.docChanged || uz.selection) || Iz(zz, Hz)) {
-               let uz = bz(zz);
- ... (1 more removed lines; see GitHub link above)
+       startSpan(qq, Eq) {
+         Eq != this.class && (this.flush(qq), qq > this.at && (this.at = qq), this.class = Eq)
+       }
+       flush(qq) {
+         qq > this.at && this.class && this.span(this.at, qq, this.class)
+       }
+       highlightRange(qq, Eq, gq, lq, Oq) {
+         let {
+           type: mq,
+           from: xq,
+           to: Aq
+         } = qq;
+         if (xq >= gq || Aq <= Eq) return;
+         mq.isTop && (Oq = this.highlighters.filter((qq => !qq.scope || qq.scope(mq))));
+         let Bq = lq,
+           Wq = function(qq) {
+ ... (9 more added lines; see GitHub link above)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1026-L1034` → after: `L15093-L15109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15093-L15109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15093-L15109) · [Before (L1026-L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1026-L1034)

```diff
-             return 0
-           },
-           reconfigure: (zz, uz) => {
-             let Mz, tz = uz.config.address[nz];
-             if (null != tz) {
-               let nz = Ou(uz, tz);
-               if (this.dependencies.every((bz => bz instanceof Qz ? uz.facet(bz) === zz.facet(bz) : !(bz instanceof Yz) || uz.field(bz, !1) == zz.field(bz, !1))) || (lz ? jz(Mz = bz(zz), nz, Ez) : Ez(Mz = bz(zz), nz))) return zz.values[iz] = nz, 0
-             } else Mz = bz(zz);
-             return zz.values[iz] = Mz, 1
+             return gq
+           }(Oq, Wq.tags);
+         if (Nq && (Bq && (Bq += " "), Bq += Nq, 1 == Wq.mode && (lq += (lq ? " " : "") + Nq)), this.startSpan(Math.max(Eq, xq), Bq), Wq.opaque) return;
+         let aq = qq.tree && qq.tree.prop(Yq.h.mounted);
+         if (aq && aq.overlay) {
+           let Yq = qq.node.enter(aq.overlay[0].from + xq, 1),
+             mq = this.highlighters.filter((qq => !qq.scope || qq.scope(aq.tree.type))),
+             cq = qq.firstChild();
+           for (let uq = 0, Wq = xq;; uq++) {
+             let Nq = uq < aq.overlay.length ? aq.overlay[uq] : null,
+               Vq = Nq ? Nq.from + xq : Aq,
+               dq = Math.max(Eq, Wq),
+               jq = Math.min(gq, Vq);
+             if (dq < jq && cq)
+               for (; qq.from < jq && (this.highlightRange(qq, dq, jq, lq, Oq), this.startSpan(Math.min(jq, qq.to), Bq), !(qq.to >= Vq) && qq.nextSibling()););
+             if (!Nq || Vq > gq) break;
+ ... (1 more added lines; see GitHub link above)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1039-L1044` → after: `L15124-L15227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15124-L15227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15124-L15227) · [Before (L1039-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1039-L1044)

```diff
- 
-     function jz(zz, uz, bz) {
-       if (zz.length != uz.length) return !1;
-       for (let Ez = 0; Ez < zz.length; Ez++)
-         if (!bz(zz[Ez], uz[Ez])) return !1;
-       return !0
+     const aq = Oq.define,
+       Vq = aq(),
+       dq = aq(),
+       jq = aq(dq),
+       Hq = aq(dq),
+       oq = aq(),
+       Pq = aq(oq),
+       Qq = aq(oq),
+       yq = aq(),
+       tq = aq(yq),
+       rq = aq(),
+       vq = aq(),
+       hq = aq(),
+       nq = aq(hq),
+       bq = aq(),
+       iq = {
+ ... (88 more added lines; see GitHub link above)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1048-L1050` → after: `L15341-L15349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15341-L15349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15341-L15349) · [Before (L1048-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1048-L1050)

```diff
-       let bz = !1;
-       for (let Ez of uz) 1 & Hu(zz, Ez) && (bz = !0);
-       return bz
+       return gq => {
+         let {
+           state: Yq,
+           dispatch: lq
+         } = gq;
+         if (Yq.readOnly) return !1;
+         let Oq = qq(Eq, Yq);
+         return !!Oq && (lq(Yq.update(Oq)), !0)
+       }
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1052-L1059` → after: `L15351-L15353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15351-L15353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15351-L15353) · [Before (L1052-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1052-L1059)

```diff
- 
-     function Bz(zz, uz, bz) {
-       let Ez = bz.map((uz => zz[uz.id])),
-         nz = bz.map((zz => zz.type)),
-         iz = Ez.filter((zz => !(1 & zz))),
-         lz = zz[uz.id] >> 1;
- 
-       function Mz(zz) {
+     const Bq = uq(jq, 0),
+       Wq = uq(dq, 0),
+       Nq = uq(((qq, Eq) => dq(qq, Eq, function(qq) {
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1061-L1085` → after: `L15355-L15363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15355-L15363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15355-L15363) · [Before (L1061-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1061-L1085)

```diff
-         for (let uz = 0; uz < Ez.length; uz++) {
-           let iz = Ou(zz, Ez[uz]);
-           if (2 == nz[uz])
-             for (let zz of iz) bz.push(zz);
-           else bz.push(iz)
-         }
-         return uz.combine(bz)
-       }
-       return {
-         create(zz) {
-           for (let uz of Ez) Hu(zz, uz);
-           return zz.values[lz] = Mz(zz), 1
-         },
-         update(zz, bz) {
-           if (!Iz(zz, iz)) return 0;
-           let Ez = Mz(zz);
- ... (9 more removed lines; see GitHub link above)
+         for (let gq of qq.selection.zV) {
+           let Yq = qq.doc.lineAt(gq.from),
+             lq = gq.to <= Yq.to ? Yq : qq.doc.lineAt(gq.to);
+           lq.from > Yq.from && lq.from == gq.to && (lq = gq.to == Yq.to + 1 ? Yq : qq.doc.lineAt(gq.to - 1));
+           let Oq = Eq.length - 1;
+           Oq >= 0 && Eq[Oq].to > Yq.from ? Eq[Oq].to = lq.to : Eq.push({
+             from: Yq.from + /^\s*/.exec(Yq.text)[0].length,
+             to: lq.to
+           })
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1087` → after: `L15365-L15370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15365-L15370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15365-L15370) · [Before (L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1087)

```diff
-       }
+         return Eq
+       }(Eq))), 0);
+ 
+     function aq(qq, Eq) {
+       let gq = qq.languageDataAt("commentTokens", Eq, 1);
+       return gq.length ? gq[0] : {}
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1089-L1111` → after: `L15372-L15405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15372-L15405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15372-L15405) · [Before (L1089-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1089-L1111)

```diff
-     const Cz = Qz.define({
-       static: !0
-     });
-     class Yz {
-       constructor(zz, uz, bz, Ez, nz) {
-         this.id = zz, this.createF = uz, this.updateF = bz, this.compareF = Ez, this.spec = nz, this.provides = void 0
-       }
-       static define(zz) {
-         let uz = new Yz(Dz++, zz.create, zz.update, zz.compare || ((zz, uz) => zz === uz), zz);
-         return zz.provide && (uz.provides = zz.provide(uz)), uz
-       }
-       create(zz) {
-         let uz = zz.facet(Cz).find((zz => zz.field == this));
-         return ((null === uz || void 0 === uz ? void 0 : uz.create) || this.createF)(zz)
-       }
-       slot(zz) {
- ... (7 more removed lines; see GitHub link above)
+     const Vq = 50;
+ 
+     function dq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq.selection.zV,
+         Yq = gq.map((qq => aq(Eq, qq.from).block));
+       if (!Yq.every((qq => qq))) return null;
+       let lq = gq.map(((qq, gq) => function(qq, Eq, gq, Yq) {
+         let lq, Oq, {
+             open: mq,
+             close: xq
+           } = Eq,
+           Aq = qq.sliceDoc(gq - Vq, gq),
+           cq = qq.sliceDoc(Yq, Yq + Vq),
+           uq = /\s*$/.exec(Aq)[0].length,
+           Bq = /^\s*/.exec(cq)[0].length,
+           Wq = Aq.length - uq;
+ ... (18 more added lines; see GitHub link above)
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1113-L1116` → after: `L15407-L15409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15407-L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15407-L15409) · [Before (L1113-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1113-L1116)

```diff
-           reconfigure: (zz, bz) => {
-             let Ez, nz = zz.facet(Cz),
-               iz = bz.facet(Cz);
-             return (Ez = nz.find((zz => zz.field == this))) && Ez != iz.find((zz => zz.field == this)) ? (zz.values[uz] = Ez.create(zz), 1) : null != bz.config.address[this.id] ? (zz.values[uz] = bz.field(this), 0) : (zz.values[uz] = this.create(zz), 1)
+           close: {
+             pos: Yq - aq - xq.length,
+             margin: /\s/.test(Oq.charAt(dq - 1)) ? 1 : 0
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1120-L1128` → after: `L15442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15442) · [Before (L1120-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1120-L1128)

```diff
-       init(zz) {
-         return [this, Cz.of({
-           field: this,
-           create: zz
-         })]
-       }
-       get extension() {
-         return this
-       }
+       return null
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1135-L1152` → after: `L15445-L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15445-L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15445-L15477) · [Before (L1135-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1135-L1152)

```diff
-     function Eu(zz) {
-       return uz => new iu(uz, zz)
-     }
-     const nu = {
-       highest: Eu(0),
-       high: Eu(bu),
-       default: Eu(uu),
-       low: Eu(zu),
-       lowest: Eu(kz)
-     };
-     class iu {
-       constructor(zz, uz) {
-         this.inner = zz, this.prec = uz
-       }
-     }
-     class lu {
- ... (2 more removed lines; see GitHub link above)
+     function jq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Eq.selection.zV,
+         Yq = [],
+         lq = -1;
+       qq: for (let {
+           from: Oq,
+           to: mq
+         }
+         of gq) {
+         let qq, gq = Yq.length,
+           xq = 1e9;
+         for (let Aq = Oq; Aq <= mq;) {
+           let gq = Eq.doc.lineAt(Aq);
+           if (void 0 == qq && (qq = aq(Eq, gq.from).line, !qq)) continue qq;
+           if (gq.from > lq && (Oq == mq || mq > gq.from)) {
+             lq = gq.from;
+ ... (17 more added lines; see GitHub link above)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1154-L1158` → after: `L15479-L15496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15479-L15496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15479-L15496) · [Before (L1154-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1154-L1158)

```diff
-       reconfigure(zz) {
-         return lu.reconfigure.of({
-           compartment: this,
-           extension: zz
-         })
+       if (2 != qq && Yq.some((qq => qq.comment < 0 && (!qq.empty || qq.single)))) {
+         let qq = [];
+         for (let {
+             line: Eq,
+             token: lq,
+             indent: Oq,
+             empty: mq,
+             single: xq
+           }
+           of Yq) !xq && mq || qq.push({
+           from: Eq.from + Oq,
+           insert: lq + " "
+         });
+         let gq = Eq.changes(qq);
+         return {
+           changes: gq,
+ ... (2 more added lines; see GitHub link above)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1160-L1161` → after: `L15498-L15515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15498-L15515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15498-L15515) · [Before (L1160-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1160-L1161)

```diff
-       get(zz) {
-         return zz.config.compartments.get(this)
+       if (1 != qq && Yq.some((qq => qq.comment >= 0))) {
+         let qq = [];
+         for (let {
+             line: Eq,
+             comment: gq,
+             token: lq
+           }
+           of Yq)
+           if (gq >= 0) {
+             let Yq = Eq.from + gq,
+               Oq = Yq + lq.length;
+             " " == Eq.text[Oq - Eq.from] && Oq++, qq.push({
+               from: Yq,
+               to: Oq
+             })
+           } return {
+ ... (2 more added lines; see GitHub link above)
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1164-L1166` → after: `L15519-L15568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15519-L15568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15519-L15568) · [Before (L1164-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1164-L1166)

```diff
-     class Mu {
-       constructor(zz, uz) {
-         this.compartment = zz, this.inner = uz
+     const Hq = mq.e.define(),
+       oq = mq.e.define(),
+       Pq = mq.x.define(),
+       Qq = mq.x.define({
+         combine: qq => (0, mq.Y)(qq, {
+           minDepth: 100,
+           newGroupDelay: 500,
+           joinToEvent: (qq, Eq) => Eq
+         }, {
+           minDepth: Math.max,
+           newGroupDelay: Math.min,
+           joinToEvent: (qq, Eq) => (gq, Yq) => qq(gq, Yq) || Eq(gq, Yq)
+         })
+       }),
+       yq = mq.L.define({
+         create: () => Lq.empty,
+ ... (34 more added lines; see GitHub link above)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1170-L1171` → after: `L15576-L15577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15576-L15577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15576-L15577) · [Before (L1170-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1170-L1171)

```diff
-       constructor(zz, uz, bz, Ez, nz, iz) {
-         for (this.base = zz, this.compartments = uz, this.dynamicSlots = bz, this.address = Ez, this.staticValues = nz, this.facets = iz, this.statusTemplate = []; this.statusTemplate.length < bz.length;) this.statusTemplate.push(0)
+       constructor(qq, Eq, gq, Yq, lq) {
+         this.changes = qq, this.effects = Eq, this.mapped = gq, this.startSelection = Yq, this.selectionsAfter = lq
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1173-L1175` → after: `L15579-L15580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15579-L15580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15579-L15580) · [Before (L1173-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1173-L1175)

```diff
-       staticFacet(zz) {
-         let uz = this.address[zz.id];
-         return null == uz ? zz.default : this.staticValues[uz >> 1]
+       setSelAfter(qq) {
+         return new bq(this.changes, this.effects, this.mapped, this.startSelection, qq)
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1177-L1233` → after: `L15582-L15588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15582-L15588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15582-L15588) · [Before (L1177-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1177-L1233)

```diff
-       static resolve(zz, uz, bz) {
-         let Ez = [],
-           nz = Object.create(null),
-           iz = new Map;
-         for (let pz of function(zz, uz, bz) {
-             let Ez = [
-                 [],
-                 [],
-                 [],
-                 [],
-                 []
-               ],
-               nz = new Map;
- 
-             function iz(zz, lz) {
-               let Mz = nz.get(zz);
- ... (41 more removed lines; see GitHub link above)
+       toJSON() {
+         var qq, Eq, gq;
+         return {
+           changes: null === (qq = this.changes) || void 0 === qq ? void 0 : qq.toJSON(),
+           mapped: null === (Eq = this.mapped) || void 0 === Eq ? void 0 : Eq.toJSON(),
+           startSelection: null === (gq = this.startSelection) || void 0 === gq ? void 0 : gq.toJSON(),
+           selectionsAfter: this.selectionsAfter.map((qq => qq.toJSON()))
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1235-L1236` → after: `L15590-L15603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15590-L15603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15590-L15603) · [Before (L1235-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1235-L1236)

```diff
-         let Oz = tz.map((zz => zz(lz)));
-         return new tu(zz, iz, Oz, lz, Mz, nz)
+       }
+       static fromJSON(qq) {
+         return new bq(qq.changes && mq.ChangeSet.fromJSON(qq.changes), [], qq.mapped && mq.i.fromJSON(qq.mapped), qq.startSelection && mq.q.fromJSON(qq.startSelection), qq.selectionsAfter.map(mq.q.fromJSON))
+       }
+       static fromTransaction(qq, Eq) {
+         let gq = fq;
+         for (let Yq of qq.startState.facet(Pq)) {
+           let Eq = Yq(qq);
+           Eq.length && (gq = gq.concat(Eq))
+         }
+         return !gq.length && qq.changes.empty ? null : new bq(qq.changes.invert(qq.startState.doc), gq, void 0, Eq || qq.startState.selection, fq)
+       }
+       static selection(qq) {
+         return new bq(void 0, fq, void 0, void 0, qq)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1240-L1248` → after: `L15607-L15610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15607-L15610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15607-L15610) · [Before (L1240-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1240-L1248)

```diff
-     function Hu(zz, uz) {
-       if (1 & uz) return 2;
-       let bz = uz >> 1,
-         Ez = zz.status[bz];
-       if (4 == Ez) throw new Error("Cyclic dependency between fields and/or facets");
-       if (2 & Ez) return Ez;
-       zz.status[bz] = 4;
-       let nz = zz.computeSlot(zz, zz.config.dynamicSlots[bz]);
-       return zz.status[bz] = 2 | nz
+     function iq(qq, Eq, gq, Yq) {
+       let lq = Eq + 1 > gq + 20 ? Eq - gq - 1 : 0,
+         Oq = qq.slice(lq, Eq);
+       return Oq.push(Yq), Oq
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1252` → after: `L15614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15614) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1252)

```diff
-       return 1 & uz ? zz.config.staticValues[uz >> 1] : zz.values[uz >> 1]
+       return qq.length ? Eq.length ? qq.concat(Eq) : qq : Eq
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1254-L1274` → after: `L15616-L15623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15616-L15623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15616-L15623) · [Before (L1254-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1254-L1274)

```diff
-     const pu = Qz.define(),
-       du = Qz.define({
-         combine: zz => zz.some((zz => zz)),
-         static: !0
-       }),
-       Fu = Qz.define({
-         combine: zz => zz.length ? zz[0] : void 0,
-         static: !0
-       }),
-       Zu = Qz.define(),
-       Ru = Qz.define(),
-       Ku = Qz.define(),
-       wu = Qz.define({
-         combine: zz => !!zz.length && zz[0]
-       });
-     class Xu {
- ... (5 more removed lines; see GitHub link above)
+     const fq = [],
+       Mq = 200;
+ 
+     function Tq(qq, Eq) {
+       if (qq.length) {
+         let gq = qq[qq.length - 1],
+           Yq = gq.selectionsAfter.slice(Math.max(0, gq.selectionsAfter.length - Mq));
+         return Yq.length && Yq[Yq.length - 1].eq(Eq) ? qq : (Yq.push(Eq), iq(qq, qq.length - 1, 1e9, gq.setSelAfter(Yq)))
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1277-L1280` → after: `L15627-L15631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15627-L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15627-L15631) · [Before (L1277-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1277-L1280)

```diff
-     class fu {
-       of(zz) {
-         return new Xu(this, zz)
-       }
+ 
+     function zq(qq) {
+       let Eq = qq[qq.length - 1],
+         gq = qq.slice();
+       return gq[qq.length - 1] = Eq.setSelAfter(Eq.selectionsAfter.slice(0, Eq.selectionsAfter.length - 1)), gq
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1282-L1287` → after: `L15633-L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15633-L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15633-L15644) · [Before (L1282-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1282-L1287)

```diff
-     class su {
-       constructor(zz) {
-         this.map = zz
-       }
-       of(zz) {
-         return new ru(this, zz)
+ 
+     function Sq(qq, Eq) {
+       if (!qq.length) return qq;
+       let gq = qq.length,
+         Yq = fq;
+       for (; gq;) {
+         let lq = pq(qq[gq - 1], Eq, Yq);
+         if (lq.changes && !lq.changes.empty || lq.effects.length) {
+           let Eq = qq.slice(0, gq);
+           return Eq[gq - 1] = lq, Eq
+         }
+         Eq = lq.mapped, gq--, Yq = lq.selectionsAfter
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1292` → after: `L15660-L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15660-L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15660-L15662) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1292)

```diff
-         this.type = zz, this.value = uz
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
+         this.done = qq, this.undone = Eq, this.prevTime = gq, this.prevUserEvent = Yq
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1294-L1296` → after: `L15664-L15665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15664-L15665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15664-L15665) · [Before (L1294-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1294-L1296)

```diff
-       map(zz) {
-         let uz = this.type.map(this.value, zz);
-         return void 0 === uz ? void 0 : uz == this.value ? this : new ru(this.type, uz)
+       isolate() {
+         return this.prevTime ? new Lq(this.done, this.undone) : this
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1298-L1299` → after: `L15667-L15680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15667-L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15667-L15680) · [Before (L1298-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1298-L1299)

```diff
-       is(zz) {
-         return this.type == zz
+       addChanges(qq, Eq, gq, Yq, lq) {
+         let Oq = this.done,
+           xq = Oq[Oq.length - 1];
+         return Oq = xq && xq.changes && !xq.changes.empty && qq.changes && (!gq || Gq.test(gq)) && (!xq.selectionsAfter.length && Eq - this.prevTime < Yq.newGroupDelay && Yq.joinToEvent(lq, function(qq, Eq) {
+           let gq = [],
+             Yq = !1;
+           return qq.iterChangedRanges(((qq, Eq) => gq.push(qq, Eq))), Eq.iterChangedRanges(((qq, Eq, lq, Oq) => {
+             for (let mq = 0; mq < gq.length;) {
+               let qq = gq[mq++],
+                 Eq = gq[mq++];
+               Oq >= qq && lq <= Eq && (Yq = !0)
+             }
+           })), Yq
+         }(xq.changes, qq.changes)) || "input.type.compose" == gq) ? iq(Oq, Oq.length - 1, Yq.minDepth, new bq(qq.changes.compose(xq.changes), Zq(mq.J.mapEffects(qq.effects, xq.changes), xq.effects), xq.mapped, xq.startSelection, fq)) : iq(Oq, Oq.length, Yq.minDepth, qq), new Lq(O … [truncated]
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1301-L1302` → after: `L15682-L15685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15682-L15685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15682-L15685) · [Before (L1301-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1301-L1302)

```diff
-       static define() {
-         return new su((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (zz => zz))
+       addSelection(qq, Eq, gq, Yq) {
+         let lq = this.done.length ? this.done[this.done.length - 1].selectionsAfter : fq;
+         return lq.length > 0 && Eq - this.prevTime < Yq && gq == this.prevUserEvent && gq && /^select($|\.)/.test(gq) && (Oq = lq[lq.length - 1], mq = qq, Oq.zV.length == mq.zV.length && 0 === Oq.zV.filter(((qq, Eq) => qq.empty != mq.zV[Eq].empty)).length) ? this : new Lq(Tq(this … [truncated]
+         var Oq, mq
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1304-L1309` → after: `L15687-L15719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15687-L15719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15687-L15719) · [Before (L1304-L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1304-L1309)

```diff
-       static mapEffects(zz, uz) {
-         if (!zz.length) return zz;
-         let bz = [];
-         for (let Ez of zz) {
-           let zz = Ez.map(uz);
-           zz && bz.push(zz)
+       addMapping(qq) {
+         return new Lq(Sq(this.done, qq), Sq(this.undone, qq), this.prevTime, this.prevUserEvent)
+       }
+       pop(qq, Eq, gq) {
+         let Yq = 0 == qq ? this.done : this.undone;
+         if (0 == Yq.length) return null;
+         let lq = Yq[Yq.length - 1],
+           Oq = lq.selectionsAfter[0] || (lq.startSelection ? lq.startSelection.map(lq.changes.invertedDesc, 1) : Eq.selection);
+         if (gq && lq.selectionsAfter.length) return Eq.update({
+           selection: lq.selectionsAfter[lq.selectionsAfter.length - 1],
+           annotations: Hq.of({
+             side: qq,
+             rest: zq(Yq),
+             selection: Oq
+           }),
+           userEvent: 0 == qq ? "select.undo" : "select.redo",
+ ... (17 more added lines; see GitHub link above)
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1311` → after: `L15721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15721) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1311)

```diff
-         return bz
+         return null
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1314-L1343` → after: `L15724-L15800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15724-L15800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15724-L15800) · [Before (L1314-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1314-L1343)

```diff
-     ru.reconfigure = ru.define(), ru.appendConfig = ru.define();
-     class ou {
-       constructor(zz, uz, bz, Ez, nz, iz) {
-         this.startState = zz, this.changes = uz, this.selection = bz, this.effects = Ez, this.annotations = nz, this.scrollIntoView = iz, this._doc = null, this._state = null, bz && yz(bz, uz.newLength), nz.some((zz => zz.type == ou.time)) || (this.annotations = nz.concat(ou.time … [truncated]
-       }
-       static create(zz, uz, bz, Ez, nz, iz) {
-         return new ou(zz, uz, bz, Ez, nz, iz)
-       }
-       get newDoc() {
-         return this._doc || (this._doc = this.changes.apply(this.startState.doc))
-       }
-       get newSelection() {
-         return this.selection || this.startState.selection.map(this.changes)
-       }
-       get state() {
-         return this._state || this.startState.applyTransaction(this), this._state
- ... (14 more removed lines; see GitHub link above)
+     Lq.empty = new Lq(fq, fq);
+     const Jq = [{
+       key: "Mod-z",
+       run: rq,
+       preventDefault: !0
+     }, {
+       key: "Mod-y",
+       mac: "Mod-Shift-z",
+       run: vq,
+       preventDefault: !0
+     }, {
+       linux: "Ctrl-Shift-z",
+       run: vq,
+       preventDefault: !0
+     }, {
+       key: "Mod-u",
+ ... (61 more added lines; see GitHub link above)
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1348-L1355` → after: `L15806-L15830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15806-L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15806-L15830) · [Before (L1348-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1348-L1355)

```diff
-       let bz = [];
-       for (let Ez = 0, nz = 0;;) {
-         let iz, lz;
-         if (Ez < zz.length && (nz == uz.length || uz[nz] >= zz[Ez])) iz = zz[Ez++], lz = zz[Ez++];
-         else {
-           if (!(nz < uz.length)) return bz;
-           iz = uz[nz++], lz = uz[nz++]
-         }!bz.length || bz[bz.length - 1] < iz ? bz.push(iz, lz) : bz[bz.length - 1] < lz && (bz[bz.length - 1] = lz)
+       return Uq(qq, (gq => {
+         if (!gq.empty) return Fq(gq, Eq);
+         let Yq = qq.moveVertically(gq, Eq);
+         return Yq.head != gq.head ? Yq : qq.moveToLineBoundary(gq, Eq)
+       }))
+     }
+     const qE = qq => Dq(qq, !1),
+       EE = qq => Dq(qq, !0);
+ 
+     function gE(qq) {
+       let Eq, gq = qq.scrollDOM.clientHeight < qq.scrollDOM.scrollHeight - 2,
+         Yq = 0,
+         lq = 0;
+       if (gq) {
+         for (let Eq of qq.state.facet(xq.g.scrollMargins)) {
+           let gq = Eq(qq);
+ ... (9 more added lines; see GitHub link above)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1359-L1367` → after: `L15834-L15849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15834-L15849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15834-L15849) · [Before (L1359-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1359-L1367)

```diff
-     function vu(zz, uz, bz) {
-       var Ez;
-       let nz, iz, lz;
-       return bz ? (nz = uz.changes, iz = az.empty(uz.changes.length), lz = zz.changes.compose(uz.changes)) : (nz = uz.changes.map(zz.changes), iz = zz.changes.mapDesc(uz.changes, !0), lz = zz.changes.compose(nz)), {
-         changes: lz,
-         selection: uz.selection ? uz.selection.map(iz) : null === (Ez = zz.selection) || void 0 === Ez ? void 0 : Ez.map(nz),
-         effects: ru.mapEffects(zz.effects, nz).concat(ru.mapEffects(uz.effects, iz)),
-         annotations: zz.annotations.length ? zz.annotations.concat(uz.annotations) : uz.annotations,
-         scrollIntoView: zz.scrollIntoView || uz.scrollIntoView
+     function YE(qq, Eq) {
+       let gq, Yq = gE(qq),
+         {
+           state: lq
+         } = qq,
+         Oq = kq(lq.selection, (gq => gq.empty ? qq.moveVertically(gq, Eq, Yq.height) : Fq(gq, Eq)));
+       if (Oq.eq(lq.selection)) return !1;
+       if (Yq.selfScroll) {
+         let Eq = qq.coordsAtPos(lq.selection.main.head),
+           mq = qq.scrollDOM.getBoundingClientRect(),
+           Aq = mq.top + Yq.marginTop,
+           cq = mq.bottom - Yq.marginBottom;
+         Eq && Eq.top > Aq && Eq.bottom < cq && (gq = xq.g.scrollIntoView(Oq.main.head, {
+           y: "start",
+           yMargin: Eq.top - Aq
+         }))
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1372-L1379` → after: `L15859-L15863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15859-L15863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15859-L15863) · [Before (L1372-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1372-L1379)

```diff
-       let Ez = uz.selection,
-         nz = Tu(uz.annotations);
-       return uz.userEvent && (nz = nz.concat(ou.userEvent.of(uz.userEvent))), {
-         changes: uz.changes instanceof az ? uz.changes : az.of(uz.changes || [], bz, zz.facet(Fu)),
-         selection: Ez && (Ez instanceof Sz ? Ez : Sz.single(Ez.anchor, Ez.head)),
-         effects: Tu(uz.effects),
-         annotations: nz,
-         scrollIntoView: !!uz.scrollIntoView
+       let Yq = qq.lineBlockAt(Eq.head),
+         lq = qq.moveToLineBoundary(Eq, gq);
+       if (lq.head == Eq.head && lq.head != (gq ? Yq.to : Yq.from) && (lq = qq.moveToLineBoundary(Eq, gq, !1)), !gq && lq.head == Yq.from && Yq.length) {
+         let gq = /^\s*/.exec(qq.state.sliceDoc(Yq.from, Math.min(Yq.from + 100, Yq.to)))[0].length;
+         gq && Eq.head != Yq.from + gq && (lq = mq.q.cursor(Yq.from + gq))
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1384-L1402` → after: `L15869-L15872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15869-L15872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15869-L15872) · [Before (L1384-L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1384-L1402)

```diff
-       let Ez = xu(zz, uz.length ? uz[0] : {}, zz.doc.length);
-       uz.length && !1 === uz[0].filter && (bz = !1);
-       for (let iz = 1; iz < uz.length; iz++) {
-         !1 === uz[iz].filter && (bz = !1);
-         let nz = !!uz[iz].sequential;
-         Ez = vu(Ez, xu(zz, uz[iz], nz ? Ez.changes.newLength : zz.doc.length), nz)
-       }
-       let nz = ou.create(zz, Ez.changes, Ez.selection, Ez.effects, Ez.annotations, Ez.scrollIntoView);
-       return function(zz) {
-         let uz = zz.startState,
-           bz = uz.facet(Ku),
-           Ez = zz;
-         for (let nz = bz.length - 1; nz >= 0; nz--) {
-           let iz = bz[nz](zz);
-           iz && Object.keys(iz).length && (Ez = vu(Ez, xu(uz, iz, zz.changes.newLength), !0))
-         }
- ... (3 more removed lines; see GitHub link above)
+       let Yq = !1,
+         lq = kq(qq.selection, (Eq => {
+           let lq = (0, Aq.X)(qq, Eq.head, -1) || (0, Aq.X)(qq, Eq.head, 1) || Eq.head > 0 && (0, Aq.X)(qq, Eq.head - 1, 1) || Eq.head < qq.doc.length && (0, Aq.X)(qq, Eq.head + 1, -1);
+           if (!lq || !lq.end) return Eq;
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1404-L1427` → after: `L15874-L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15874-L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15874-L15877) · [Before (L1404-L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1404-L1427)

```diff
-         for (let nz of uz.facet(Zu)) {
-           let uz = nz(zz);
-           if (!1 === uz) {
-             bz = !1;
-             break
-           }
-           Array.isArray(uz) && (bz = !0 === bz ? uz : Nu(bz, uz))
-         }
-         if (!0 !== bz) {
-           let Ez, nz;
-           if (!1 === bz) nz = zz.changes.invertedDesc, Ez = az.empty(uz.doc.length);
-           else {
-             let uz = zz.changes.filter(bz);
-             Ez = uz.changes, nz = uz.filtered.mapDesc(uz.changes).invertedDesc
-           }
-           zz = ou.create(uz, Ez, zz.selection && zz.selection.map(nz), ru.mapEffects(zz.effects, nz), zz.annotations, zz.scrollIntoView)
- ... (8 more removed lines; see GitHub link above)
+           let Oq = lq.start.from == Eq.head ? lq.end.to : lq.end.from;
+           return gq ? mq.q.range(Eq.anchor, Oq) : mq.q.cursor(Oq)
+         }));
+       return !!Yq && (Eq(Rq(qq, lq)), !0)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1432-L1433` → after: `L15880-L15885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15880-L15885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15880-L15885) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1432-L1433)

```diff
-     function Tu(zz) {
-       return null == zz ? Au : Array.isArray(zz) ? zz : [zz]
+     function AE(qq, Eq) {
+       let gq = kq(qq.state.selection, (qq => {
+         let gq = Eq(qq);
+         return mq.q.range(qq.anchor, gq.head, gq.goalColumn, gq.bidiLevel || void 0, gq.assoc)
+       }));
+       return !gq.eq(qq.state.selection) && (qq.dispatch(Rq(qq.state, gq)), !0)
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1444-L1451` → after: `L15888-L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15888-L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15888-L15959) · [Before (L1444-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1444-L1451)

```diff
-     function au(zz) {
-       return uz => {
-         if (!/\S/.test(uz)) return Lu.Space;
-         if (function(zz) {
-             if (Gu) return Gu.test(zz);
-             for (let uz = 0; uz < zz.length; uz++) {
-               let bz = zz[uz];
-               if (/\w/.test(bz) || bz > "\x80" && (bz.toUpperCase() != bz.toLowerCase() || Pu.test(bz))) return !0
+     function cE(qq, Eq) {
+       return AE(qq, (gq => qq.moveByChar(gq, Eq)))
+     }
+     const uE = qq => cE(qq, !Xq(qq)),
+       BE = qq => cE(qq, Xq(qq));
+ 
+     function WE(qq, Eq) {
+       return AE(qq, (gq => qq.moveByGroup(gq, Eq)))
+     }
+ 
+     function NE(qq, Eq) {
+       return AE(qq, (gq => qq.moveVertically(gq, Eq)))
+     }
+     const aE = qq => NE(qq, !1),
+       VE = qq => NE(qq, !0);
+ 
+ ... (56 more added lines; see GitHub link above)
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1453-L1457` → after: `L15961-L15963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15961-L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15961-L15963) · [Before (L1453-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1453-L1457)

```diff
-             return !1
-           }(uz)) return Lu.Word;
-         for (let bz = 0; bz < zz.length; bz++)
-           if (uz.indexOf(zz[bz]) > -1) return Lu.Word;
-         return Lu.Other
+             if (Oq.head == gq.head) break;
+             gq = Oq
+           }
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1460-L1480` → after: `L15967-L15977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15967-L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15967-L15977) · [Before (L1460-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1460-L1480)

```diff
-     class Vu {
-       constructor(zz, uz, bz, Ez, nz, iz) {
-         this.config = zz, this.doc = uz, this.selection = bz, this.values = Ez, this.status = zz.statusTemplate.slice(), this.computeSlot = nz, iz && (iz._state = this);
-         for (let lz = 0; lz < this.config.dynamicSlots.length; lz++) Hu(this, lz << 1);
-         this.computeSlot = null
-       }
-       field(zz) {
-         let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           bz = this.config.address[zz.id];
-         if (null != bz) return Hu(this, bz), Ou(this, bz);
-         if (uz) throw new RangeError("Field is not present in this state")
-       }
-       update() {
-         for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
-         return Ju(this, uz, !0)
-       }
- ... (5 more removed lines; see GitHub link above)
+ 
+     function rE(qq, Eq) {
+       if (qq.state.readOnly) return !1;
+       let gq = "delete.selection",
+         {
+           state: Yq
+         } = qq,
+         lq = Yq.changeByRange((Yq => {
+           let {
+             from: lq,
+             to: Oq
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1482-L1544` → after: `L15979-L15990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR15979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L15979-L15990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L15979-L15990) · [Before (L1482-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1482-L1544)

```diff
-         for (let lz of zz.effects) lz.is(lu.reconfigure) ? (bz && (nz = new Map, bz.compartments.forEach(((zz, uz) => nz.set(uz, zz))), bz = null), nz.set(lz.value.compartment, lz.value.extension)) : lz.is(ru.reconfigure) ? (bz = null, Ez = lz.value) : lz.is(ru.appendConfig) && ( … [truncated]
-         if (bz) uz = zz.startState.values.slice();
-         else {
-           bz = tu.resolve(Ez, nz, this), uz = new Vu(bz, this.doc, this.selection, bz.dynamicSlots.map((() => null)), ((zz, uz) => uz.reconfigure(zz, this)), null).values
-         }
-         let iz = zz.startState.facet(du) ? zz.newSelection : zz.newSelection.asSingle();
-         new Vu(bz, zz.newDoc, iz, uz, ((uz, bz) => bz.update(uz, zz)), zz)
-       }
-       replaceSelection(zz) {
-         return "string" == typeof zz && (zz = this.toText(zz)), this.changeByRange((uz => ({
-           changes: {
-             from: uz.from,
-             to: uz.to,
-             insert: zz
-           },
-           range: Sz.cursor(uz.from + zz.length)
- ... (47 more removed lines; see GitHub link above)
+           if (lq == Oq) {
+             let mq = Eq(Yq);
+             mq < lq ? (gq = "delete.backward", mq = vE(qq, mq, !1)) : mq > lq && (gq = "delete.forward", mq = vE(qq, mq, !0)), lq = Math.min(lq, mq), Oq = Math.max(Oq, mq)
+           } else lq = vE(qq, lq, !1), Oq = vE(qq, Oq, !0);
+           return lq == Oq ? {
+             range: Yq
+           } : {
+             changes: {
+               from: lq,
+               to: Oq
+             },
+             range: mq.q.cursor(lq, lq < Yq.head ? -1 : 1)
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1547-L1585` → after: `L16020-L16032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16020-L16032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16020-L16032) · [Before (L1547-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1547-L1585)

```diff
-       }
-       static fromJSON(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-           bz = arguments.length > 2 ? arguments[2] : void 0;
-         if (!zz || "string" != typeof zz.doc) throw new RangeError("Invalid JSON representation for EditorState");
-         let Ez = [];
-         if (bz)
-           for (let nz in bz)
-             if (Object.prototype.hasOwnProperty.call(zz, nz)) {
-               let uz = bz[nz],
-                 iz = zz[nz];
-               Ez.push(uz.init((zz => uz.spec.fromJSON(iz, zz))))
-             } return Vu.create({
-           doc: zz.doc,
-           selection: Sz.fromJSON(zz.selection),
-           extensions: uz.extensions ? Ez.concat([uz.extensions]) : Ez
- ... (23 more removed lines; see GitHub link above)
+       })),
+       nE = qq => hE(qq, !1, !0),
+       bE = qq => hE(qq, !0, !1),
+       iE = (qq, Eq) => rE(qq, (gq => {
+         let Yq = gq.head,
+           {
+             state: lq
+           } = qq,
+           Oq = lq.doc.lineAt(Yq),
+           xq = lq.charCategorizer(Yq);
+         for (let qq = null;;) {
+           if (Yq == (Eq ? Oq.to : Oq.from)) {
+             Yq == gq.head && Oq.number != (Eq ? lq.doc.lines : 1) && (Yq += Eq ? 1 : -1);
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L1587-L1618` → after: `L16034-L16039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR16034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L16034-L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/285.js#L16034-L16039) · [Before (L1587-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/285.js#L1587-L1618)

```diff
-           } return bz.length && (zz = zz.replace(/\$(\$|\d*)/g, ((zz, uz) => {
-           if ("$" == uz) return "$";
-           let Ez = +(uz || 1);
-           return !Ez || Ez > bz.length ? zz : bz[Ez - 1]
-         }))), zz
-       }
-       languageDataAt(zz, uz) {
-         let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
-           Ez = [];
-         for (let nz of this.facet(pu))
-           for (let iz of nz(this, uz, bz)) Object.prototype.hasOwnProperty.call(iz, zz) && Ez.push(iz[zz]);
-         return Ez
-       }
-       charCategorizer(zz) {
-         let uz = this.languageDataAt("wordChars", zz);
-         return au(uz.length ? uz[0] : "")
- ... (16 more removed lines; see GitHub link above)
+           }
+           let Aq = (0, mq.$)(Oq.text, Yq - Oq.from, Eq) + Oq.from,
+             cq = Oq.text.slice(Math.min(Yq, Aq) - Oq.from, Math.max(Yq, Aq) - Oq.from),
+             uq = xq(cq);
+           if (null != qq && uq != qq) break;
+           " " == cq && Yq == gq.head || (qq = uq), Yq = Aq
```
