# Changed — Bundle Modifications Report (Part 019 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `19 / 58` (**312** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/296.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/296.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4)

#### 14. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L159-L202` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L216-L219) · [Before (L159-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L159-L202)

```diff
-       return zz.charCodeAt(0) + (zz.charCodeAt(1) << 8) + (zz.charCodeAt(2) << 16) + (zz.charCodeAt(3) << 24)
-     }
-     const Oz = Hz("DXT1"),
-       pz = Hz("DXT3"),
-       dz = Hz("DXT5"),
-       Fz = Hz("DX10");
-     class Zz {
-       static GetDDSInfo(zz) {
-         const uz = new Int32Array(zz.buffer, zz.byteOffset, 31),
-           bz = new Int32Array(zz.buffer, zz.byteOffset, 35);
-         let Ez = 1;
-         uz[2] & Mz && (Ez = Math.max(1, uz[7]));
-         const nz = uz[21],
-           iz = nz === Fz ? bz[32] : 0;
-         let lz = 0;
-         switch (nz) {
- ... (28 more removed lines; see GitHub link above)
+       for (const gq of qq) try {
+         gq()
+       } catch (Eq) {
+         console.error("GPU resource retirement failed.", Eq)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L204-L213` → after: `L221-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L221-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L221-L264) · [Before (L204-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L204-L213)

```diff
-       static _GetHalfFloatAsFloatRGBAArrayBuffer(zz, uz, bz, Ez, nz, iz) {
-         const Mz = new Float32Array(Ez),
-           tz = new Uint16Array(nz, bz);
-         let Hz = 0;
-         for (let Oz = 0; Oz < uz; Oz++)
-           for (let uz = 0; uz < zz; uz++) {
-             const bz = 4 * (uz + Oz * zz);
-             Mz[Hz] = (0, lz.e)(tz[bz]), Mz[Hz + 1] = (0, lz.e)(tz[bz + 1]), Mz[Hz + 2] = (0, lz.e)(tz[bz + 2]), Zz.StoreLODInAlphaChannel ? Mz[Hz + 3] = iz : Mz[Hz + 3] = (0, lz.e)(tz[bz + 3]), Hz += 4
-           }
-         return Mz
+     }
+ 
+     function Oq(qq, Eq) {
+       qq._flushGpuRetirements ??= mq, (qq._retirements ??= []).push(Eq)
+     }
+ 
+     function mq(qq) {
+       const Eq = qq._retirements;
+       if (!Eq) return;
+       qq._retirements = null;
+       const gq = qq._retiring ??= new Set;
+       gq.add(Eq), queueMicrotask((() => {
+         qq._device.queue.onSubmittedWorkDone().then((() => {
+           gq.delete(Eq), Yq(Eq)
+         })).catch((() => {}))
+       }))
+ ... (28 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L215-L227` → after: `L266-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L266-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L266-L307) · [Before (L215-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L215-L227)

```diff
-       static _GetHalfFloatRGBAArrayBuffer(zz, uz, bz, Ez, nz, iz) {
-         if (Zz.StoreLODInAlphaChannel) {
-           const Mz = new Uint16Array(Ez),
-             tz = new Uint16Array(nz, bz);
-           let Hz = 0;
-           for (let bz = 0; bz < uz; bz++)
-             for (let uz = 0; uz < zz; uz++) {
-               const Ez = 4 * (uz + bz * zz);
-               Mz[Hz] = tz[Ez], Mz[Hz + 1] = tz[Ez + 1], Mz[Hz + 2] = tz[Ez + 2], Mz[Hz + 3] = (0, lz.i)(iz), Hz += 4
-             }
-           return Mz
-         }
-         return new Uint16Array(nz, bz, Ez)
+     }
+ 
+     function mq(qq, Eq) {
+       if (qq._eager) return void qq._syncEager?.(Eq);
+       xq(qq);
+       const gq = qq._descriptor,
+         {
+           width: Oq,
+           height: mq
+         } = (qq._resolveSize ?? lq)(gq);
+       qq._width = Oq, qq._height = mq;
+       const Aq = Eq._device;
+       gq.format && (qq._colorTexture = Aq.createTexture({
+         label: gq.lbl,
+         size: {
+           width: Oq,
+ ... (26 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L229-L241` → after: `L309-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L309-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L309-L396) · [Before (L229-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L229-L241)

```diff
-       static _GetFloatRGBAArrayBuffer(zz, uz, bz, Ez, nz, iz) {
-         if (Zz.StoreLODInAlphaChannel) {
-           const lz = new Float32Array(Ez),
-             Mz = new Float32Array(nz, bz);
-           let tz = 0;
-           for (let bz = 0; bz < uz; bz++)
-             for (let uz = 0; uz < zz; uz++) {
-               const Ez = 4 * (uz + bz * zz);
-               lz[tz] = Mz[Ez], lz[tz + 1] = Mz[Ez + 1], lz[tz + 2] = Mz[Ez + 2], lz[tz + 3] = iz, tz += 4
-             }
-           return lz
-         }
-         return new Float32Array(nz, bz, Ez)
+     }
+   },
+   41483: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Yq,
+       e: () => lq,
+       h: () => Oq
+     });
+     var Yq = Float32Array,
+       lq = Float64Array,
+       Oq = Uint32Array
+   },
+   41492: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => Yq
+     });
+ ... (72 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L243-L249` → after: `L398-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L398-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L398-L415) · [Before (L243-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L243-L249)

```diff
-       static _GetFloatAsHalfFloatRGBAArrayBuffer(zz, uz, bz, Ez, nz, iz) {
-         const Mz = new Uint16Array(Ez),
-           tz = new Float32Array(nz, bz);
-         let Hz = 0;
-         for (let Oz = 0; Oz < uz; Oz++)
-           for (let uz = 0; uz < zz; uz++) Mz[Hz] = (0, lz.i)(tz[Hz]), Mz[Hz + 1] = (0, lz.i)(tz[Hz + 1]), Mz[Hz + 2] = (0, lz.i)(tz[Hz + 2]), Zz.StoreLODInAlphaChannel ? Mz[Hz + 3] = (0, lz.i)(iz) : Mz[Hz + 3] = (0, lz.i)(tz[Hz + 3]), Hz += 4;
-         return Mz
+       let cq = xq.get(Aq);
+       return cq || xq.set(Aq, cq = lq.createSampler(Eq)), cq
+     }
+   },
+   41475: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => pq,
+       g: () => Jq
+     });
+     var Yq = gq(41467),
+       lq = gq(41459);
+ 
+     function Oq(qq, Eq) {
+       Eq._passes.length = 0, qq._currentProcessedTask = Eq;
+       try {
+         Eq.record()
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L251-L258` → after: `L417-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L417-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L417-L470) · [Before (L251-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L251-L258)

```diff
-       static _GetFloatAsUIntRGBAArrayBuffer(zz, uz, bz, nz, iz, lz) {
-         const Mz = new Uint8Array(nz),
-           tz = new Float32Array(iz, bz);
-         let Hz = 0;
-         for (let Oz = 0; Oz < uz; Oz++)
-           for (let uz = 0; uz < zz; uz++) {
-             const bz = 4 * (uz + Oz * zz);
-             Mz[Hz] = 255 * (0, Ez.Clamp)(tz[bz]), Mz[Hz + 1] = 255 * (0, Ez.Clamp)(tz[bz + 1]), Mz[Hz + 2] = 255 * (0, Ez.Clamp)(tz[bz + 2]), Zz.StoreLODInAlphaChannel ? Mz[Hz + 3] = lz : Mz[Hz + 3] = 255 * (0, Ez.Clamp)(tz[bz + 3]), Hz += 4
+     }
+     var mq = gq(41483);
+ 
+     function xq(qq) {
+       const Eq = qq.worldMatrixVersion;
+       if (qq._viewVer === Eq) return qq._viewCache;
+       const gq = qq._viewCache,
+         Yq = qq.worldMatrix,
+         lq = qq._useFloatingOrigin,
+         Oq = lq ? 0 : Yq[12],
+         mq = lq ? 0 : Yq[13],
+         xq = lq ? 0 : Yq[14];
+       return gq[0] = Yq[0], gq[1] = Yq[4], gq[2] = Yq[8], gq[3] = 0, gq[4] = Yq[1], gq[5] = Yq[5], gq[6] = Yq[9], gq[7] = 0, gq[8] = Yq[2], gq[9] = Yq[6], gq[10] = Yq[10], gq[11] = 0, gq[12] = -(Yq[0] * Oq + Yq[1] * mq + Yq[2] * xq), gq[13] = -(Yq[4] * Oq + Yq[5] * mq + Yq[6] * x … [truncated]
+     }
+     var Aq = null;
+ 
+ ... (38 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L260-L269` → after: `L472-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L472-L476) · [Before (L260-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L260-L269)

```diff
-         return Mz
-       }
-       static _GetHalfFloatAsUIntRGBAArrayBuffer(zz, uz, bz, nz, iz, Mz) {
-         const tz = new Uint8Array(nz),
-           Hz = new Uint16Array(iz, bz);
-         let Oz = 0;
-         for (let pz = 0; pz < uz; pz++)
-           for (let uz = 0; uz < zz; uz++) {
-             const bz = 4 * (uz + pz * zz);
-             tz[Oz] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz])), tz[Oz + 1] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz + 1])), tz[Oz + 2] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz + 2])), Zz.StoreLODInAlphaChannel ? tz[Oz + 3] = Mz : tz[Oz + 3] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz + 3])), Oz … [truncated]
+         }, {
+           binding: 1,
+           visibility: Bq.c.FRAGMENT,
+           buffer: {
+             type: "uniform"
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L271` → after: `L478-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L478-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L478-L488) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L271)

```diff
-         return tz
+         }]
+       }), gq.set(Eq, Yq)), Yq
+     }
+ 
+     function dq(qq, Eq, gq) {
+       const Yq = qq._device,
+         lq = Wq(qq, Eq.byteLength, gq);
+       try {
+         Yq.queue.writeBuffer(lq, 0, Eq.buffer, Eq.byteOffset, Eq.byteLength)
+       } catch (Oq) {
+         throw lq.destroy(), Oq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L273-L280` → after: `L490-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L490-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L490-L688) · [Before (L273-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L273-L280)

```diff
-       static _GetRGBAArrayBuffer(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
-         const Hz = new Uint8Array(Ez),
-           Oz = new Uint8Array(nz, bz);
-         let pz = 0;
-         for (let dz = 0; dz < uz; dz++)
-           for (let uz = 0; uz < zz; uz++) {
-             const bz = 4 * (uz + dz * zz);
-             Hz[pz] = Oz[bz + iz], Hz[pz + 1] = Oz[bz + lz], Hz[pz + 2] = Oz[bz + Mz], Hz[pz + 3] = Oz[bz + tz], pz += 4
+       return lq
+     }
+     var jq = gq(41492),
+       Hq = new mq.h(1),
+       oq = new mq.c(Hq.buffer);
+ 
+     function Pq(qq) {
+       let Eq = 0;
+       for (const gq of qq) Eq += gq._lightVersion ?? 0;
+       return Eq
+     }
+ 
+     function Qq(qq, Eq) {
+       qq.fill(0);
+       let gq = 0;
+       for (const Yq of Eq) {
+ ... (183 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L282` → after: `L690-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L690-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L690-L715) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L282)

```diff
-         return Hz
+         };
+       return Bq
+     }
+ 
+     function nq(qq, Eq) {
+       return Eq._sortDistance - qq._sortDistance || qq.renderable.order - Eq.renderable.order
+     }
+ 
+     function bq(qq, Eq) {
+       return qq.renderable.order - Eq.renderable.order
+     }
+ 
+     function iq(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qq._renderables,
+         gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         lq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+ ... (10 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L284-L285` → after: `L717-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L717-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L717-L729) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L284-L285)

```diff
-       static _ExtractLongWordOrder(zz) {
-         return 0 === zz || 255 === zz || -16777216 === zz ? 0 : 1 + Zz._ExtractLongWordOrder(zz >> 8)
+       const {
+         _opaqueBindings: uq,
+         _directBindings: Bq,
+         _transparentBindings: Wq
+       } = cq;
+       try {
+         for (const gq of Eq) {
+           const Eq = gq.bind(qq.engine, qq._targetSignature);
+           cq._batchState = qq._targetSignature._collectBatches?.(cq._batchState, Eq), gq.isTransparent || gq._transmissive ? Wq.push(Eq) : gq._direct ? Bq.push(Eq) : uq.push(Eq)
+         }
+         uq.sort(bq), Bq.sort(bq), gq && fq(qq, qq.engine, !1)
+       } catch (Nq) {
+         throw cq._batchState?._release(void 0, Oq ?? [Aq]), Nq
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L287-L294` → after: `L731-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L731-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L731-L795) · [Before (L287-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L287-L294)

```diff
-       static _GetRGBArrayBuffer(zz, uz, bz, Ez, nz, iz, lz, Mz) {
-         const tz = new Uint8Array(Ez),
-           Hz = new Uint8Array(nz, bz);
-         let Oz = 0;
-         for (let pz = 0; pz < uz; pz++)
-           for (let uz = 0; uz < zz; uz++) {
-             const bz = 3 * (uz + pz * zz);
-             tz[Oz] = Hz[bz + iz], tz[Oz + 1] = Hz[bz + lz], tz[Oz + 2] = Hz[bz + Mz], Oz += 3
+       return gq && (! function(qq, Eq) {
+         const gq = qq._config,
+           Yq = qq._colorAttachment;
+         Yq.view = Eq._colorView, qq._renderPassDescriptor.colorAttachments = Eq._colorView ? [Yq] : [];
+         const lq = gq.depth ?? Eq,
+           Oq = lq._depthView;
+         let mq;
+         if (Oq) {
+           const qq = lq._descriptor,
+             Eq = (gq.depth ? lq._eager : !1 === gq.depthClear) ? "load" : "clear";
+           mq = {
+             view: Oq,
+             depthClearValue: qq.depthClearValue ?? 0,
+             depthLoadOp: Eq,
+             depthStoreOp: "store"
+           }, qq.dFormat?.includes("stencil") && (mq.stencilClearValue = 0, mq.stencilLoadOp = Eq, mq.stencilStoreOp = "store")
+ ... (49 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L296` → after: `L797-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L797-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L797-L811) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L296)

```diff
-         return tz
+         }]
+       });
+       qq._lightsUBO = Yq, qq._sceneBG = lq, gq && (qq._ob = [])
+     }
+ 
+     function Mq(qq, Eq) {
+       for (const gq of qq) gq.update?.(Eq)
+     }
+ 
+     function Tq(qq, Eq, gq) {
+       let Yq = null,
+         lq = 0;
+       for (const Oq of Eq) {
+         const Eq = Oq.renderable.mesh;
+         Eq && !1 === Eq.visible || (Oq.pipeline !== Yq && (qq.setPipeline(Oq.pipeline), Yq = Oq.pipeline), lq += Oq.draw(qq, gq))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L298-L305` → after: `L813-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L813-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L813-L917) · [Before (L298-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L298-L305)

```diff
-       static _GetLuminanceArrayBuffer(zz, uz, bz, Ez, nz) {
-         const iz = new Uint8Array(Ez),
-           lz = new Uint8Array(nz, bz);
-         let Mz = 0;
-         for (let tz = 0; tz < uz; tz++)
-           for (let uz = 0; uz < zz; uz++) {
-             const bz = uz + tz * zz;
-             iz[Mz] = lz[bz], Mz++
+       return lq
+     }
+ 
+     function zq(qq) {
+       const Eq = qq._materialSwapQueue;
+       if (!Eq[0] || qq._runtimeBuilds?.w) return;
+       let Yq, lq, Oq;
+       const mq = qq._renderables;
+       for (const gq of Eq) {
+         const Eq = gq.material;
+         if (!Eq) continue;
+         const xq = gq._runtimeThinBuild;
+         if (xq) {
+           lq = xq(qq, gq, lq);
+           continue
+         }
+ ... (89 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L307` → after: `L919-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L919-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L919-L975) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L307)

```diff
-         return iz
+         },
+         mq = function() {
+           const qq = {
+             _tasks: [],
+             _currentProcessedTask: null,
+             build() {
+               for (let Eq = 0; Eq < qq._tasks.length; Eq++) Oq(qq, qq._tasks[Eq]);
+               for (const Eq of qq._tasks)
+                 for (const qq of Eq._passes) qq._initialize()
+             },
+             execute() {
+               let Eq = 0;
+               for (const gq of qq._tasks)
+                 if (!1 !== gq.executionEnabled)
+                   if (gq.execute) Eq += gq.execute();
+                   else
+ ... (41 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L309-L354` → after: `L977-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L977-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L977-L1138) · [Before (L309-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L309-L354)

```diff
-       static UploadDDSLevels(zz, uz, bz, Ez, lz, tz) {
-         let Hz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
-           Rz = arguments.length > 7 ? arguments[7] : void 0,
-           Kz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-           wz = null;
-         Ez.sphericalPolynomial && (wz = []);
-         const Xz = !!zz.getCaps().s3tc;
-         uz.generateMipMaps = lz;
-         const fz = new Int32Array(bz.buffer, bz.byteOffset, 31);
-         let sz, rz, oz, Nz, vz, xz, Jz, Az = 0,
-           Tz = 0,
-           Lz = 1;
-         if (542327876 !== fz[0]) return void nz.e.Error("Invalid magic number in DDS header");
-         if (!Ez.isFourCC && !Ez.isRGB && !Ez.isLuminance) return void nz.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
-         if (Ez.isCompressed && !Xz) return void nz.e.Error("Compressed textures are not supported on this platform.");
-         let Pz = fz[22];
- ... (30 more removed lines; see GitHub link above)
+       await zq(Eq), Sq?.get(Eq)?.() || (Eq._runtimeBuilds?._e(), Eq._renderableVersion++, Eq._built = !0), await (Eq._rebuildHook?.(Eq))
+     }
+     var Lq = null;
+     async function Jq(qq) {
+       const Eq = qq,
+         Yq = Eq.surface;
+       (0, lq.i)(Yq, Eq) || (await Gq(qq), Eq._renderables.sort(kq), await Promise.all(Eq._frameGraph._tasks.map((qq => qq._preload?.()))), Lq && await Lq(Eq), Eq._frameGraph.build(), Yq._renderingContexts[0] && (await gq.e(354).then((() => gq(61225)))).configureSwapchainOverlaySc … [truncated]
+     }
+     var kq = (qq, Eq) => qq.order - Eq.order
+   },
+   41450: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => cq,
+       d: () => uq
+     });
+     var Yq = gq(41402),
+ ... (146 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L356-L409` → after: `L1140-L1152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L1140-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L1140-L1152) · [Before (L356-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L356-L409)

```diff
-             if (zz) break
-           }
-           default:
-             return void nz.e.Error(["Unsupported FourCC code:", (az = sz, String.fromCharCode(255 & az, az >> 8 & 255, az >> 16 & 255, az >> 24 & 255))])
-         }
-         var az;
-         const Vz = Zz._ExtractLongWordOrder(fz[23]),
-           mz = Zz._ExtractLongWordOrder(fz[24]),
-           qz = Zz._ExtractLongWordOrder(fz[25]),
-           hz = Zz._ExtractLongWordOrder(fz[26]);
-         Gz && (Tz = zz._getRGBABufferInternalSizedFormat(Ez.textureType)), xz = 1, fz[2] & Mz && !1 !== lz && (xz = Math.max(1, fz[7]));
-         const Uz = Rz || 0,
-           cz = zz.getCaps();
-         for (let nz = Uz; nz < tz; nz++) {
-           for (rz = fz[4], oz = fz[3], Jz = 0; Jz < xz; ++Jz) {
-             if (-1 === Hz || Hz === Jz) {
- ... (38 more removed lines; see GitHub link above)
+             const [xq, Aq] = await Promise.all([Hq.popErrorScope(), Hq.popErrorScope()]);
+             if (gq) throw gq;
+             const cq = Aq ?? xq;
+             if (cq) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${cq.message}`, {
+               cause: cq
+             });
+             const uq = jq.texture;
+             return uq && Oq || (0, Yq.d)(677), {
+               texture: uq,
+               view: uq.createView(),
+               sampler: Oq,
+               width: Bq,
+               height: Wq
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L411` → after: `L1154-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L1154-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L1154-L1192) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L411)

```diff
-             Nz += Pz ? rz * oz * (Pz / 8) : Az, rz *= .5, oz *= .5, rz = Math.max(1, rz), oz = Math.max(1, oz)
+           }, vq = await (qq._dlr?.x(Vq, Bq, Wq, oq, Pq, yq, tq, aq, rq)) ?? await rq(Vq);
+         return (0, Oq.b)(vq), vq
+       } catch (Hq) {
+         throw jq.texture?.destroy(), Hq
+       } finally {
+         dq?.close()
+       }
+     }
+   },
+   41427: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       generateMipmaps: () => Nq,
+       recordMipmaps: () => aq
+     });
+     var Yq = gq(41406),
+       lq = gq(41422),
+ ... (23 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L413-L426` → after: `L1194-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L1194-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L1194-L1274) · [Before (L413-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L413-L426)

```diff
-           if (void 0 !== Rz) break
-         }
-         wz && wz.length > 0 ? Ez.sphericalPolynomial = iz.d.ConvertCubeMapToSphericalPolynomial({
-           size: fz[4],
-           right: wz[0],
-           left: wz[1],
-           up: wz[2],
-           down: wz[3],
-           front: wz[4],
-           back: wz[5],
-           format: 5,
-           type: 1,
-           gammaSpace: !1
-         }) : Ez.sphericalPolynomial = void 0
+         }, {
+           binding: 1,
+           visibility: Yq.c.FRAGMENT,
+           sampler: {}
+         }]
+       })
+     }
+ 
+     function Nq(qq, Eq, gq) {
+       const Yq = qq._device,
+         lq = Yq.createCommandEncoder();
+       aq(qq, Eq, lq, gq), Yq.queue.submit([lq.finish()])
+     }
+ 
+     function aq(qq, Eq, gq, Yq) {
+       if (Eq.mipLevelCount <= 1) return;
+ ... (65 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L429` → after: `L1277-L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L1277-L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/296.js#L1277-L1348) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/296.js#L429)

```diff
-     Zz.StoreLODInAlphaChannel = !1
+   },
+   41429: (qq, Eq, gq) => {
+     function Yq(qq, Eq) {
+       return Math.floor(Math.log2(Math.max(qq, Eq))) + 1
+     }
+     gq.d(Eq, {
+       d: () => Yq
+     })
+   },
+   41394: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => cq,
+       f: () => uq
+     });
+     var Yq = gq(41402),
+       lq = gq(41406),
+ ... (56 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/297.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/297.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L2)

```diff
- export const ids = [296, 297];
+ export const ids = [297];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L4-L43` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L4) · [Before (L4-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L4-L43)

```diff
-   40983: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       _DDSTextureLoader: () => iz
-     });
-     var Ez = bz(39164),
-       nz = bz(40967);
-     class iz {
-       constructor() {
-         this.supportCascades = !0
-       }
-       loadCubeData(zz, uz, bz, iz) {
-         const lz = uz.uR();
-         let Mz, tz = !1,
-           Hz = 1e3;
-         if (Array.isArray(zz))
-           for (let Ez = 0; Ez < zz.length; Ez++) {
- ... (24 more removed lines; see GitHub link above)
+   41519: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L45` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L6) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L45)

```diff
-       d: () => Hz
+       b: () => cq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L47-L51` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L8-L12) · [Before (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L47-L51)

```diff
-     var Ez = bz(36519),
-       nz = bz(36553),
-       iz = bz(39164),
-       lz = bz(36526),
-       Mz = bz(36715);
+     var Yq = gq(37139),
+       lq = gq(37158),
+       Oq = gq(39741),
+       mq = gq(37145),
+       xq = gq(37289);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L63` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L24) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L63)

```diff
-         zz.XT()?.uR().flushFramebuffer();
+         qq.ZJ()?.Ba().flushFramebuffer();
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L106` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L67) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L106)

```diff
-         const nz = zz instanceof Float32Array ? zz : Float32Array.from(zz),
+         const lq = qq instanceof Float32Array ? qq : Float32Array.from(qq),
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L165` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L126) · [Before (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L165)

```diff
-               isNaN(wz) && (wz = 0), isNaN(Xz) && (Xz = 0), isNaN(fz) && (fz = 0), 0 === zz.type && (wz /= 255, Xz /= 255, fz /= 255), zz.gammaSpace && (wz = Math.pow((0, nz.Clamp)(wz), lz.i), Xz = Math.pow((0, nz.Clamp)(Xz), lz.i), fz = Math.pow((0, nz.Clamp)(fz), lz.i));
+               isNaN(jq) && (jq = 0), isNaN(Hq) && (Hq = 0), isNaN(oq) && (oq = 0), 0 === qq.type && (jq /= 255, Hq /= 255, oq /= 255), qq.gammaSpace && (jq = Math.pow((0, lq.Clamp)(jq), mq.h), Hq = Math.pow((0, lq.Clamp)(Hq), mq.h), oq = Math.pow((0, lq.Clamp)(oq), mq.h));
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L174` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L135) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L174)

```diff
-               const rz = new Mz.c(wz, Xz, fz);
+               const Qq = new xq.d(jq, Hq, oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L181` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L142) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L181)

```diff
-         return Ez.scaleInPlace(Fz), Ez.convertIncidentRadianceToIrradiance(), Ez.convertIrradianceToLambertianRadiance(), iz.g.FromHarmonics(Ez)
+         return Yq.scaleInPlace(Nq), Yq.convertIncidentRadianceToIrradiance(), Yq.convertIrradianceToLambertianRadiance(), Oq.d.FromHarmonics(Yq)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L184` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L145) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L184)

```diff
-     Hz._FileFaces = [new tz("right", new Ez.n(1, 0, 0), new Ez.n(0, 0, -1), new Ez.n(0, -1, 0)), new tz("left", new Ez.n(-1, 0, 0), new Ez.n(0, 0, 1), new Ez.n(0, -1, 0)), new tz("up", new Ez.n(0, 1, 0), new Ez.n(1, 0, 0), new Ez.n(0, 0, 1)), new tz("down", new Ez.n(0, -1, 0), ne … [truncated]
+     cq._FileFaces = [new Aq("right", new Yq.q(1, 0, 0), new Yq.q(0, 0, -1), new Yq.q(0, -1, 0)), new Aq("left", new Yq.q(-1, 0, 0), new Yq.q(0, 0, 1), new Yq.q(0, -1, 0)), new Aq("up", new Yq.q(0, 1, 0), new Yq.q(1, 0, 0), new Yq.q(0, 0, 1)), new Aq("down", new Yq.q(0, -1, 0), ne … [truncated]
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L186` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L147) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L186)

```diff
-   40967: (zz, uz, bz) => {
+   41515: (qq, Eq, gq) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L190-L193` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L151-L154) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L190-L193)

```diff
-     var Ez = bz(36553),
-       nz = bz(38060),
-       iz = bz(40972),
-       lz = bz(39231);
+     var Yq = gq(37158),
+       lq = gq(38653),
+       Oq = gq(41519),
+       mq = gq(39819);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L220` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L181) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L220)

```diff
-           case Fz:
+           case Nq:
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L250` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L211) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L250)

```diff
-             Mz[Hz] = (0, lz.e)(tz[bz]), Mz[Hz + 1] = (0, lz.e)(tz[bz + 1]), Mz[Hz + 2] = (0, lz.e)(tz[bz + 2]), Zz.StoreLODInAlphaChannel ? Mz[Hz + 3] = iz : Mz[Hz + 3] = (0, lz.e)(tz[bz + 3]), Hz += 4
+             xq[cq] = (0, mq.e)(Aq[gq]), xq[cq + 1] = (0, mq.e)(Aq[gq + 1]), xq[cq + 2] = (0, mq.e)(Aq[gq + 2]), aq.StoreLODInAlphaChannel ? xq[cq + 3] = Oq : xq[cq + 3] = (0, mq.e)(Aq[gq + 3]), cq += 4
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L262` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L223) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L262)

```diff
-               Mz[Hz] = tz[Ez], Mz[Hz + 1] = tz[Ez + 1], Mz[Hz + 2] = tz[Ez + 2], Mz[Hz + 3] = (0, lz.i)(iz), Hz += 4
+               xq[cq] = Aq[Yq], xq[cq + 1] = Aq[Yq + 1], xq[cq + 2] = Aq[Yq + 2], xq[cq + 3] = (0, mq.j)(Oq), cq += 4
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L287` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L248) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L287)

```diff
-           for (let uz = 0; uz < zz; uz++) Mz[Hz] = (0, lz.i)(tz[Hz]), Mz[Hz + 1] = (0, lz.i)(tz[Hz + 1]), Mz[Hz + 2] = (0, lz.i)(tz[Hz + 2]), Zz.StoreLODInAlphaChannel ? Mz[Hz + 3] = (0, lz.i)(iz) : Mz[Hz + 3] = (0, lz.i)(tz[Hz + 3]), Hz += 4;
+           for (let Eq = 0; Eq < qq; Eq++) xq[cq] = (0, mq.j)(Aq[cq]), xq[cq + 1] = (0, mq.j)(Aq[cq + 1]), xq[cq + 2] = (0, mq.j)(Aq[cq + 2]), aq.StoreLODInAlphaChannel ? xq[cq + 3] = (0, mq.j)(Oq) : xq[cq + 3] = (0, mq.j)(Aq[cq + 3]), cq += 4;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L297` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L258) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L297)

```diff
-             Mz[Hz] = 255 * (0, Ez.Clamp)(tz[bz]), Mz[Hz + 1] = 255 * (0, Ez.Clamp)(tz[bz + 1]), Mz[Hz + 2] = 255 * (0, Ez.Clamp)(tz[bz + 2]), Zz.StoreLODInAlphaChannel ? Mz[Hz + 3] = lz : Mz[Hz + 3] = 255 * (0, Ez.Clamp)(tz[bz + 3]), Hz += 4
+             xq[cq] = 255 * (0, Yq.Clamp)(Aq[gq]), xq[cq + 1] = 255 * (0, Yq.Clamp)(Aq[gq + 1]), xq[cq + 2] = 255 * (0, Yq.Clamp)(Aq[gq + 2]), aq.StoreLODInAlphaChannel ? xq[cq + 3] = mq : xq[cq + 3] = 255 * (0, Yq.Clamp)(Aq[gq + 3]), cq += 4
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L308` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L269) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L308)

```diff
-             tz[Oz] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz])), tz[Oz + 1] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz + 1])), tz[Oz + 2] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz + 2])), Zz.StoreLODInAlphaChannel ? tz[Oz + 3] = Mz : tz[Oz + 3] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz + 3])), Oz … [truncated]
+             Aq[uq] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq])), Aq[uq + 1] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq + 1])), Aq[uq + 2] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq + 2])), aq.StoreLODInAlphaChannel ? Aq[uq + 3] = xq : Aq[uq + 3] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq + 3])), uq … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L360-L362` → after: `L321-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L321-L323) · [Before (L360-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L360-L362)

```diff
-         if (542327876 !== fz[0]) return void nz.e.Error("Invalid magic number in DDS header");
-         if (!Ez.isFourCC && !Ez.isRGB && !Ez.isLuminance) return void nz.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
-         if (Ez.isCompressed && !Xz) return void nz.e.Error("Compressed textures are not supported on this platform.");
+         if (542327876 !== oq[0]) return void lq.b.Error("Invalid magic number in DDS header");
+         if (!Yq.isFourCC && !Yq.isRGB && !Yq.isLuminance) return void lq.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
+         if (Yq.isCompressed && !Hq) return void lq.b.Error("Compressed textures are not supported on this platform.");
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L367` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L328) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L367)

```diff
-           case Oz:
+           case uq:
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L370` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L331) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L370)

```diff
-           case pz:
+           case Bq:
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L373` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L334) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L373)

```diff
-           case dz:
+           case Wq:
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L382` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L343) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L382)

```diff
-           case Fz: {
+           case Nq: {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L398` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L359) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L398)

```diff
-             return void nz.e.Error(["Unsupported FourCC code:", (az = sz, String.fromCharCode(255 & az, az >> 8 & 255, az >> 16 & 255, az >> 24 & 255))])
+             return void lq.b.Error(["Unsupported FourCC code:", (Mq = Pq, String.fromCharCode(255 & Mq, Mq >> 8 & 255, Mq >> 16 & 255, Mq >> 24 & 255))])
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L411` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L372) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L411)

```diff
-               const iz = -1 === Hz ? Jz : 0;
+               const Oq = -1 === cq ? hq : 0;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L454` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/297.js#L415) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/297.js#L454)

```diff
-         wz && wz.length > 0 ? Ez.sphericalPolynomial = iz.d.ConvertCubeMapToSphericalPolynomial({
+         jq && jq.length > 0 ? Yq.sphericalPolynomial = Oq.b.ConvertCubeMapToSphericalPolynomial({
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/298.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/298.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L2)

```diff
- export const ids = [298];
+ export const ids = [297, 298];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L4)

```diff
-   40996: (zz, uz, bz) => {
+   41533: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L6)

```diff
-       _ENVTextureLoader: () => xz
+       _DDSTextureLoader: () => Oq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L8-L222` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L8-L9) · [Before (L8-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L8-L222)

```diff
-     var Ez = bz(39118),
-       nz = bz(36519),
-       iz = bz(36553),
-       lz = bz(39164),
-       Mz = bz(39011),
-       tz = bz(39167),
-       Hz = (bz(39253), bz(41e3)),
-       Oz = bz(38060),
-       pz = (bz(41012), bz(41031), bz(39226));
-     const dz = "image/png",
-       Fz = [134, 22, 135, 150, 246, 214, 150, 54];
- 
-     function Zz(zz) {
-       const uz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
-       let bz = 0;
-       for (let lz = 0; lz < Fz.length; lz++)
- ... (199 more removed lines; see GitHub link above)
+     var Yq = gq(39741),
+       lq = gq(41515);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L225` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L12) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L225)

```diff
-         this.supportCascades = !1
+         this.supportCascades = !0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L227-L239` → after: `L14-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L14-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L14-L24) · [Before (L227-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L227-L239)

```diff
-       loadCubeData(zz, uz, bz, Ez, nz) {
-         if (Array.isArray(zz)) return;
-         const iz = Zz(zz);
-         if (iz) {
-           uz.width = iz.width, uz.height = iz.width;
-           try {
-             (0, vz.b)(), Nz(uz, iz), Xz(uz, zz, iz).then((() => {
-               uz.isReady = !0, uz.onLoadedObservable.notifyObservers(uz), uz.onLoadedObservable.clear(), Ez && Ez()
-             }), (zz => {
-               nz?.("Can not upload environment levels", zz)
-             }))
-           } catch (lz) {
-             nz?.("Can not upload environment file", lz)
+       loadCubeData(qq, Eq, gq, Oq) {
+         const mq = Eq.Ba();
+         let xq, Aq = !1,
+           cq = 1e3;
+         if (Array.isArray(qq))
+           for (let Yq = 0; Yq < qq.length; Yq++) {
+             const gq = qq[Yq];
+             xq = lq.DDSTools.GetDDSInfo(gq), Eq.width = xq.width, Eq.height = xq.height, Aq = (xq.isRGB || xq.isLuminance || xq.mipmapCount > 1) && Eq.generateMipMaps, mq._unpackFlipY(xq.isCompressed), lq.DDSTools.UploadDDSLevels(mq, Eq, gq, xq, Aq, 6, -1, Yq), xq.isFourCC || 1 ! … [truncated]
+           } else {
+             const Oq = qq;
+             xq = lq.DDSTools.GetDDSInfo(Oq), Eq.width = xq.width, Eq.height = xq.height, gq && (xq.sphericalPolynomial = new Yq.d), Aq = (xq.isRGB || xq.isLuminance || xq.mipmapCount > 1) && Eq.generateMipMaps, mq._unpackFlipY(xq.isCompressed), lq.DDSTools.UploadDDSLevels(mq, Eq, … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L241` → after: `L26-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L26-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L26-L32) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L241)

```diff
-         } else nz && nz("Can not parse the environment file", null)
+         mq._setCubeMapTextureParams(Eq, Aq, cq), Eq.isReady = !0, Eq.onLoadedObservable.notifyObservers(Eq), Eq.onLoadedObservable.clear(), Oq && Oq({
+           isDDS: !0,
+           width: Eq.width,
+           info: xq,
+           data: qq,
+           texture: Eq
+         })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L243-L244` → after: `L34-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L34-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L34-L39) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L243-L244)

```diff
-       loadData() {
-         throw ".env not supported in 2d."
+       loadData(qq, Eq, gq) {
+         const Yq = lq.DDSTools.GetDDSInfo(qq),
+           Oq = (Yq.isRGB || Yq.isLuminance || Yq.mipmapCount > 1) && Eq.generateMipMaps && Math.max(Yq.width, Yq.height) >> Yq.mipmapCount - 1 === 1;
+         gq(Yq.width, Yq.height, Oq, Yq.isFourCC, (() => {
+           lq.DDSTools.UploadDDSLevels(Eq.Ba(), Eq, qq, Yq, Oq, 1)
+         }))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L248` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L43) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L248)

```diff
-   41037: (zz, uz, bz) => {
+   41519: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L252-L285` → after: `L47-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L47-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L47-L51) · [Before (L252-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L252-L285)

```diff
-     var Ez = bz(40972),
-       nz = bz(39167);
-     let iz = !1;
- 
-     function lz() {
-       iz || (iz = !0, nz.b.prototype._sphericalPolynomialTargetSize = 0, nz.b.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(nz.b.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Ez.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = zz, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
- ... (18 more removed lines; see GitHub link above)
+     var Yq = gq(37139),
+       lq = gq(37158),
+       Oq = gq(39741),
+       mq = gq(37145),
+       xq = gq(37289);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L297` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L63) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L297)

```diff
-         zz.XT()?.uR().flushFramebuffer();
+         qq.ZJ()?.Ba().flushFramebuffer();
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L340` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L106) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L340)

```diff
-         const nz = zz instanceof Float32Array ? zz : Float32Array.from(zz),
+         const lq = qq instanceof Float32Array ? qq : Float32Array.from(qq),
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L399` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L165) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L399)

```diff
-               isNaN(wz) && (wz = 0), isNaN(Xz) && (Xz = 0), isNaN(fz) && (fz = 0), 0 === zz.type && (wz /= 255, Xz /= 255, fz /= 255), zz.gammaSpace && (wz = Math.pow((0, nz.Clamp)(wz), lz.i), Xz = Math.pow((0, nz.Clamp)(Xz), lz.i), fz = Math.pow((0, nz.Clamp)(fz), lz.i));
+               isNaN(jq) && (jq = 0), isNaN(Hq) && (Hq = 0), isNaN(oq) && (oq = 0), 0 === qq.type && (jq /= 255, Hq /= 255, oq /= 255), qq.gammaSpace && (jq = Math.pow((0, lq.Clamp)(jq), mq.h), Hq = Math.pow((0, lq.Clamp)(Hq), mq.h), oq = Math.pow((0, lq.Clamp)(oq), mq.h));
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L408` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L174) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L408)

```diff
-               const rz = new Mz.c(wz, Xz, fz);
+               const Qq = new xq.d(jq, Hq, oq);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L415` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L181) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L415)

```diff
-         return Ez.scaleInPlace(Fz), Ez.convertIncidentRadianceToIrradiance(), Ez.convertIrradianceToLambertianRadiance(), iz.g.FromHarmonics(Ez)
+         return Yq.scaleInPlace(Nq), Yq.convertIncidentRadianceToIrradiance(), Yq.convertIrradianceToLambertianRadiance(), Oq.d.FromHarmonics(Yq)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L418` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L184) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L418)

```diff
-     Hz._FileFaces = [new tz("right", new Ez.n(1, 0, 0), new Ez.n(0, 0, -1), new Ez.n(0, -1, 0)), new tz("left", new Ez.n(-1, 0, 0), new Ez.n(0, 0, 1), new Ez.n(0, -1, 0)), new tz("up", new Ez.n(0, 1, 0), new Ez.n(1, 0, 0), new Ez.n(0, 0, 1)), new tz("down", new Ez.n(0, -1, 0), ne … [truncated]
+     cq._FileFaces = [new Aq("right", new Yq.q(1, 0, 0), new Yq.q(0, 0, -1), new Yq.q(0, -1, 0)), new Aq("left", new Yq.q(-1, 0, 0), new Yq.q(0, 0, 1), new Yq.q(0, -1, 0)), new Aq("up", new Yq.q(0, 1, 0), new Yq.q(1, 0, 0), new Yq.q(0, 0, 1)), new Aq("down", new Yq.q(0, -1, 0), ne … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L420` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L186) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L420)

```diff
-   41012: (zz, uz, bz) => {
+   41515: (qq, Eq, gq) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L422` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L188) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L422)

```diff
-       c: () => iz
+       DDSTools: () => aq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L424-L425` → after: `L190-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L190-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L190-L203) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L424-L425)

```diff
-     var Ez = bz(41e3),
-       nz = bz(41014);
+     var Yq = gq(37158),
+       lq = gq(38653),
+       Oq = gq(41519),
+       mq = gq(39819);
+     const xq = 131072,
+       Aq = 131072;
+ 
+     function cq(qq) {
+       return qq.charCodeAt(0) + (qq.charCodeAt(1) << 8) + (qq.charCodeAt(2) << 16) + (qq.charCodeAt(3) << 24)
+     }
+     const uq = cq("DXT1"),
+       Bq = cq("DXT3"),
+       Wq = cq("DXT5"),
+       Nq = cq("DX10");
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L427-L457` → after: `L205-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L205-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L205-L310) · [Before (L427-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L427-L457)

```diff
-       static ExpandRGBDTexture(zz) {
-         const uz = zz._texture;
-         if (!uz || !zz.isRGBD) return;
-         const nz = uz.uR(),
-           iz = nz.getCaps(),
-           lz = uz.isReady;
-         let Mz = !1;
-         iz.textureHalfFloatRender && iz.textureHalfFloatLinearFiltering ? (Mz = !0, uz.type = 2) : iz.textureFloatRender && iz.textureFloatLinearFiltering && (Mz = !0, uz.type = 1), Mz && (uz.isReady = !1, uz._isRGBD = !1, uz.invertY = !1);
-         const tz = async () => {
-           const iz = nz.isWebGPU,
-             lz = iz ? 1 : 0;
-           uz.isReady = !1, iz ? await bz.e(332).then((() => bz(60527))) : await bz.e(314).then((() => bz(60534)));
-           const Mz = new Ez.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, nz, !1, void 0, uz.type, void 0, null, !1, void 0, lz);
-           Mz.externalTextureSamplerBinding = !0;
-           const tz = nz.createRenderTargetTexture(uz.width, {
-             generateDepthBuffer: !1,
- ... (15 more removed lines; see GitHub link above)
+       static GetDDSInfo(qq) {
+         const Eq = new Int32Array(qq.buffer, qq.byteOffset, 31),
+           gq = new Int32Array(qq.buffer, qq.byteOffset, 35);
+         let Yq = 1;
+         Eq[2] & xq && (Yq = Math.max(1, Eq[7]));
+         const lq = Eq[21],
+           Oq = lq === Nq ? gq[32] : 0;
+         let mq = 0;
+         switch (lq) {
+           case 113:
+             mq = 2;
+             break;
+           case 116:
+             mq = 1;
+             break;
+           case Nq:
+ ... (90 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L459-L461` → after: `L312-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L312-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/298.js#L312-L465) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/298.js#L459-L461)

```diff
-       static async EncodeTextureToRGBD(zz, uz) {
-         let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return uz.uR().isWebGPU ? await bz.e(333).then((() => bz(60551))) : await bz.e(315).then((() => bz(60546))), await (0, nz.c)("rgbdEncode", zz, uz, Ez, 1, 5)
+       static _GetRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
+         const cq = new Uint8Array(Yq),
+           uq = new Uint8Array(lq, gq);
+         let Bq = 0;
+         for (let Wq = 0; Wq < Eq; Wq++)
+           for (let Eq = 0; Eq < qq; Eq++) {
+             const gq = 4 * (Eq + Wq * qq);
+             cq[Bq] = uq[gq + Oq], cq[Bq + 1] = uq[gq + mq], cq[Bq + 2] = uq[gq + xq], cq[Bq + 3] = uq[gq + Aq], Bq += 4
+           }
+         return cq
+       }
+       static _ExtractLongWordOrder(qq) {
+         return 0 === qq || 255 === qq || -16777216 === qq ? 0 : 1 + aq._ExtractLongWordOrder(qq >> 8)
+       }
+       static _GetRGBArrayBuffer(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
+         const Aq = new Uint8Array(Yq),
+ ... (138 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/299.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/299.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/299.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/299.js#L4)

```diff
-   40979: (zz, uz, bz) => {
+   41547: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/299.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/299.js#L6)

```diff
-       _IESTextureLoader: () => Mz
+       _ENVTextureLoader: () => vq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L8` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/299.js#L8-L18) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/299.js#L8)

```diff
-     var Ez = bz(36553);
+     var Yq = gq(39696),
+       lq = gq(37139),
+       Oq = gq(37158),
+       mq = gq(39741),
+       xq = gq(39593),
+       Aq = gq(39748),
+       cq = (gq(39838), gq(41551)),
+       uq = gq(38653),
+       Bq = (gq(41557), gq(41581), gq(39817));
+     const Wq = "image/png",
+       Nq = [134, 22, 135, 150, 246, 214, 150, 54];
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L11` → after: `L21-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L21-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/299.js#L21-L66) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/299.js#L11)

```diff
-       return zz.split(" ").filter((zz => "" !== zz)).map((zz => parseFloat(zz)))
+       const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
+       let gq = 0;
+       for (let mq = 0; mq < Nq.length; mq++)
+         if (Eq.getUint8(gq++) !== Nq[mq]) return uq.b.Error("Not a babylon environment map"), null;
+       let Yq, lq = "";
+       for (; Yq = Eq.getUint8(gq++);) lq += String.fromCharCode(Yq);
+       let Oq = JSON.parse(lq);
+       return Oq = Vq(Oq), Oq.binaryDataPosition = gq, Oq.specular && (Oq.specular.lodGenerationScale = Oq.specular.lodGenerationScale || .8), Oq
+     }
+ 
+     function Vq(qq) {
+       if (qq.version > 2) throw new Error(`Unsupported babylon environment map version "${qq.version}". Latest supported version is "2".`);
+       return 2 === qq.version ? qq : qq = {
+         ...qq,
+         version: 2,
+         imageType: Wq
+ ... (30 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L15-L45` → after: `L70-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L70-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/299.js#L70-L222) · [Before (L15-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/299.js#L15-L45)

```diff
-       for (; bz.length !== uz;) {
-         const uz = nz(zz.lines[zz.index++]);
-         bz.push(...uz)
-       }
-     }
- 
-     function lz(zz, uz, bz) {
-       let nz = 0,
-         iz = 0,
-         lz = 0,
-         Mz = 0,
-         tz = 0,
-         Hz = 0;
-       for (let Ez = 0; Ez < zz.numberOfHorizontalAngles - 1; Ez++)
-         if (bz < zz.horizontalAngles[Ez + 1] || Ez === zz.numberOfHorizontalAngles - 2) {
-           iz = Ez, lz = zz.horizontalAngles[Ez], Mz = zz.horizontalAngles[Ez + 1];
- ... (15 more removed lines; see GitHub link above)
+       const Yq = (gq = Vq(gq)).specular;
+       if (!Yq) return Promise.resolve([]);
+       qq._lodGenerationScale = Yq.lodGenerationScale;
+       const Oq = [],
+         mq = dq(Eq, gq);
+       Oq.push(Pq(qq, mq, gq.imageType));
+       const xq = gq.irradiance?.irradianceTexture;
+       if (xq) {
+         const Yq = jq(Eq, gq);
+         let mq = null;
+         gq.irradiance?.irradianceTexture?.dominantDirection && (mq = lq.q.FromArray(gq.irradiance.irradianceTexture.dominantDirection)), Oq.push(Qq(qq, Yq, xq.size, gq.imageType, mq))
+       }
+       return Promise.all(Oq)
+     }
+     async function oq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
+       return await new Promise(((Bq, Wq) => {
+ ... (137 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L50-L65` → after: `L227-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L227-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/299.js#L227-L330) · [Before (L50-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/299.js#L50-L65)

```diff
-       loadCubeData() {
-         throw ".ies not supported in Cube."
-       }
-       loadData(zz, uz, bz) {
-         const Ez = function(zz) {
-           const uz = {
-               lines: new TextDecoder("utf-8").decode(zz).split("\n"),
-               index: 0
-             },
-             bz = {
-               version: uz.lines[0],
-               candelaValues: [],
-               horizontalAngles: [],
-               verticalAngles: [],
-               numberOfHorizontalAngles: 0,
-               numberOfVerticalAngles: 0
+       loadCubeData(qq, Eq, gq, Yq, lq) {
+         if (Array.isArray(qq)) return;
+         const Oq = aq(qq);
+         if (Oq) {
+           Eq.width = Oq.width, Eq.height = Oq.width;
+           try {
+             (0, rq.e)(), tq(Eq, Oq), Hq(Eq, qq, Oq).then((() => {
+               Eq.isReady = !0, Eq.onLoadedObservable.notifyObservers(Eq), Eq.onLoadedObservable.clear(), Yq && Yq()
+             }), (qq => {
+               lq?.("Can not upload environment levels", qq)
+             }))
+           } catch (mq) {
+             lq?.("Can not upload environment file", mq)
+           }
+         } else lq && lq("Can not parse the environment file", null)
+       }
+ ... (88 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L67-L98` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/299.js#L332-L333) · [Before (L67-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/299.js#L67-L98)

```diff
-           for (uz.index = 1; uz.lines.length > 0 && !uz.lines[uz.index].includes("TILT=");) uz.index++;
-           uz.lines[uz.index].includes("INCLUDE"), uz.index++;
-           const Ez = nz(uz.lines[uz.index++]);
-           bz.numberOfLights = Ez[0], bz.lumensPerLamp = Ez[1], bz.numberOfVerticalAngles = Ez[3], bz.numberOfHorizontalAngles = Ez[4], bz.photometricType = Ez[5], bz.unitsType = Ez[6], bz.width = Ez[7], bz.length = Ez[8], bz.height = Ez[9], uz.index++;
-           for (let nz = 0; nz < bz.numberOfHorizontalAngles; nz++) bz.candelaValues[nz] = [];
-           iz(uz, bz.numberOfVerticalAngles, bz.verticalAngles), iz(uz, bz.numberOfHorizontalAngles, bz.horizontalAngles);
-           for (let nz = 0; nz < bz.numberOfHorizontalAngles; nz++) iz(uz, bz.numberOfVerticalAngles, bz.candelaValues[nz]);
-           let Mz = -1;
-           for (let nz = 0; nz < bz.numberOfHorizontalAngles; nz++)
-             for (let zz = 0; zz < bz.numberOfVerticalAngles; zz++) Mz = Math.max(Mz, bz.candelaValues[nz][zz]);
-           if (Mz > 0)
-             for (let nz = 0; nz < bz.numberOfHorizontalAngles; nz++)
-               for (let zz = 0; zz < bz.numberOfVerticalAngles; zz++) bz.candelaValues[nz][zz] /= Mz;
-           const tz = 180,
-             Hz = 360,
-             Oz = new Float32Array(64800),
- ... (16 more removed lines; see GitHub link above)
+             qq(this.ConvertCubeMapToSphericalPolynomial(Wq))
+           }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/300.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/300.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03)

#### 1. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/300.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/300.js#L4)

```diff
-   40992: (zz, uz, bz) => {
+   41525: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/300.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/300.js#L6)

```diff
-       _BasisTextureLoader: () => Xz
+       _IESTextureLoader: () => xq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L8-L11` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/300.js#L8) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/300.js#L8-L11)

```diff
-     var Ez, nz = bz(39258),
-       iz = bz(38060),
-       lz = bz(39636),
-       Mz = bz(39011);
+     var Yq = gq(37158);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L13-L23` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/300.js#L10-L12) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/300.js#L13-L23)

```diff
-     function tz() {
-       const zz = 0,
-         uz = 1,
-         bz = 2,
-         Ez = 3,
-         nz = 6,
-         iz = 8,
-         lz = 9,
-         Mz = 10,
-         tz = 14;
-       let Hz = null;
+     function lq(qq) {
+       return qq.split(" ").filter((qq => "" !== qq)).map((qq => parseFloat(qq)))
+     }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L25-L48` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/300.js#L14-L17) · [Before (L25-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/300.js#L25-L48)

```diff
-       function Oz(zz, uz, bz, Ez, nz) {
-         const iz = zz.getImageTranscodedSizeInBytes(uz, bz, Ez);
-         let lz = new Uint8Array(iz);
-         if (!zz.transcodeImage(lz, uz, bz, Ez, 1, 0)) return null;
-         if (nz) {
-           lz = function(zz, uz, bz, Ez) {
-             const nz = new Uint16Array(4),
-               iz = new Uint16Array(bz * Ez),
-               lz = bz / 4,
-               Mz = Ez / 4;
-             for (let tz = 0; tz < Mz; tz++)
-               for (let Ez = 0; Ez < lz; Ez++) {
-                 const Mz = uz + 8 * (tz * lz + Ez);
-                 nz[0] = zz[Mz] | zz[Mz + 1] << 8, nz[1] = zz[Mz + 2] | zz[Mz + 3] << 8, nz[2] = (2 * (31 & nz[0]) + 1 * (31 & nz[1])) / 3 | (2 * (2016 & nz[0]) + 1 * (2016 & nz[1])) / 3 & 2016 | (2 * (63488 & nz[0]) + 1 * (63488 & nz[1])) / 3 & 63488, nz[3] = (2 * (31 & nz[1]) +  … [truncated]
-                 for (let uz = 0; uz < 4; uz++) {
-                   const lz = zz[Mz + 4 + uz];
- ... (8 more removed lines; see GitHub link above)
+     function Oq(qq, Eq, gq) {
+       for (; gq.length !== Eq;) {
+         const Eq = lq(qq.lines[qq.index++]);
+         gq.push(...Eq)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L50-L238` → after: `L19-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L19-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/300.js#L19-L45) · [Before (L50-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/300.js#L50-L238)

```diff
-       onmessage = pz => {
-         if ("init" === pz.data.action) {
-           if (pz.data.url) try {
-             importScripts(pz.data.url)
-           } catch (dz) {
-             postMessage({
-               action: "error",
-               error: dz
-             })
-           }
-           Hz || (Hz = BASIS({
-             wasmBinary: pz.data.wasmBinary
-           })), null !== Hz && Hz.then((zz => {
-             BASIS = zz, zz.initializeBasis(), postMessage({
-               action: "init"
-             })
- ... (173 more removed lines; see GitHub link above)
+     }
+ 
+     function mq(qq, Eq, gq) {
+       let lq = 0,
+         Oq = 0,
+         mq = 0,
+         xq = 0,
+         Aq = 0,
+         cq = 0;
+       for (let Yq = 0; Yq < qq.numberOfHorizontalAngles - 1; Yq++)
+         if (gq < qq.horizontalAngles[Yq + 1] || Yq === qq.numberOfHorizontalAngles - 2) {
+           Oq = Yq, mq = qq.horizontalAngles[Yq], xq = qq.horizontalAngles[Yq + 1];
+           break
+         } for (let Yq = 0; Yq < qq.numberOfVerticalAngles - 1; Yq++)
+         if (Eq < qq.verticalAngles[Yq + 1] || Yq === qq.numberOfVerticalAngles - 2) {
+           lq = Yq, Aq = qq.verticalAngles[Yq], cq = qq.verticalAngles[Yq + 1];
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L243-L261` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/300.js#L50-L51) · [Before (L243-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/300.js#L243-L261)

```diff
-       loadCubeData(zz, uz, bz, Ez, iz) {
-         if (Array.isArray(zz)) return;
-         const lz = uz.uR().getCaps(),
-           Mz = {
-             supportedCompressionFormats: {
-               etc1: !!lz.etc1,
-               s3tc: !!lz.s3tc,
-               pvrtc: !!lz.pvrtc,
-               etc2: !!lz.etc2,
-               astc: !!lz.astc,
-               bc7: !!lz.bptc
-             }
-           };
-         Zz(zz, Mz).then((zz => {
-           const bz = zz.fileInfo.images[0].levels.length > 1 && uz.generateMipMaps;
-           Kz(uz, zz), uz.uR()._setCubeMapTextureParams(uz, bz), uz.isReady = !0, uz.onLoadedObservable.notifyObservers(uz), uz.onLoadedObservable.clear(), Ez && Ez()
- ... (3 more removed lines; see GitHub link above)
+       loadCubeData() {
+         throw ".ies not supported in Cube."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L264-L282` → after: `L54-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L54-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/300.js#L54-L98) · [Before (L264-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/300.js#L264-L282)

```diff
-         const Ez = uz.uR().getCaps(),
-           iz = {
-             supportedCompressionFormats: {
-               etc1: !!Ez.etc1,
-               s3tc: !!Ez.s3tc,
-               pvrtc: !!Ez.pvrtc,
-               etc2: !!Ez.etc2,
-               astc: !!Ez.astc,
-               bc7: !!Ez.bptc
-             }
-           };
-         Zz(zz, iz).then((zz => {
-           const Ez = zz.fileInfo.images[0].levels[0],
-             nz = zz.fileInfo.images[0].levels.length > 1 && uz.generateMipMaps;
-           bz(Ez.width, Ez.height, nz, -1 !== zz.format, (() => {
-             Kz(uz, zz)
- ... (3 more removed lines; see GitHub link above)
+         const Yq = function(qq) {
+           const Eq = {
+               lines: new TextDecoder("utf-8").decode(qq).split("\n"),
+               index: 0
+             },
+             gq = {
+               version: Eq.lines[0],
+               candelaValues: [],
+               horizontalAngles: [],
+               verticalAngles: [],
+               numberOfHorizontalAngles: 0,
+               numberOfVerticalAngles: 0
+             };
+           for (Eq.index = 1; Eq.lines.length > 0 && !Eq.lines[Eq.index].includes("TILT=");) Eq.index++;
+           Eq.lines[Eq.index].includes("INCLUDE"), Eq.index++;
+           const Yq = lq(Eq.lines[Eq.index++]);
+ ... (29 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/301.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/301.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L4-L6)

```diff
-   41019: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => wz
+   41542: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       _BasisTextureLoader: () => Hq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L204` → after: `L8-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L8-L43) · [Before (L8-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L8-L204)

```diff
-     var Ez = bz(36547),
-       nz = bz(36519),
-       iz = bz(39636),
-       lz = bz(39304),
-       Mz = bz(39118),
-       tz = bz(38060),
-       Hz = bz(39291),
-       Oz = bz(39314),
-       pz = bz(36528),
-       dz = bz(39071),
-       Fz = bz(39267),
-       Zz = bz(39358);
-     class Rz {
-       get renderList() {
-         return this._renderList
-       }
- ... (181 more removed lines; see GitHub link above)
+     var Yq, lq = gq(39845),
+       Oq = gq(38653),
+       mq = gq(40233),
+       xq = gq(39593);
+ 
+     function Aq() {
+       const qq = 0,
+         Eq = 1,
+         gq = 2,
+         Yq = 3,
+         lq = 6,
+         Oq = 8,
+         mq = 9,
+         xq = 10,
+         Aq = 14;
+       let cq = null;
+ ... (20 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L206-L227` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L45-L46) · [Before (L206-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L206-L227)

```diff
-             } else if (!uz.isReady(!0)) {
-               bz = !1;
-               continue
-             }
-             let Ez = uz._edgesRenderer,
-               nz = uz.hasThinInstances;
-             if (uz.qT) {
-               const zz = uz.wEz;
-               zz.edgesShareWithInstances && zz._edgesRenderer?.isEnabled && (Ez = zz._edgesRenderer, nz = !0)
-             } else uz.KEz && uz.edgesShareWithInstances && (nz = !0);
-             !this.customRenderFunction && this.renderOpaqueMeshes && Ez?.isEnabled && (Ez.isReady(nz) || (bz = !1))
-           }
-           if (this.renderParticles && zz.particlesEnabled) {
-             const uz = this.particleSystemList || zz.yN;
-             for (const zz of uz) zz.isReady() || (bz = !1)
-           }
- ... (6 more removed lines; see GitHub link above)
+             return Oq
+           }(mq, 0, qq.getImageWidth(Eq, gq) + 3 & -4, qq.getImageHeight(Eq, gq) + 3 & -4)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L229` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L48) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L229)

```diff
-         return this._engine.currentRenderPassId = uz, bz
+         return mq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L231-L252` → after: `L50-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L50-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L50-L58) · [Before (L231-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L231-L252)

```diff
-       _prepareRenderingManager() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const bz = this._scene;
-         let Ez, nz, iz = null;
-         const lz = this.renderList ? this.renderList : bz.frameGraph ? bz.meshes : bz.getActiveMeshes().data,
-           Mz = this.renderList || bz.frameGraph ? lz.length : bz.getActiveMeshes().length;
-         if (this.getCustomRenderList && (iz = this.getCustomRenderList(zz, lz, Mz)), iz) Ez = iz.length, nz = this.forceLayerMaskCheck;
-         else {
-           if (this._defaultRenderListPrepared && !uz && !this._engine.isWebGPU) return lz;
-           this._defaultRenderListPrepared = !0, iz = lz, Ez = Mz, nz = !this.renderList || this.forceLayerMaskCheck
-         }
-         const tz = bz.activeCamera,
-           Hz = this.cameraForLOD ?? tz,
-           Oz = bz.getBoundingBoxRenderer?.();
-         if (bz._activeMeshesFrozen && this._isFrozen) {
- ... (6 more removed lines; see GitHub link above)
+       onmessage = Bq => {
+         if ("init" === Bq.data.action) {
+           if (Bq.data.url) try {
+             importScripts(Bq.data.url)
+           } catch (Wq) {
+             postMessage({
+               action: "error",
+               error: Wq
+             })
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L254-L265` → after: `L60-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L60-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L60-L85) · [Before (L254-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L254-L265)

```diff
-           return iz
-         }
-         if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), Oz && Oz.reset(), this.renderMeshes) {
-           const zz = bz.getRenderId(),
-             uz = bz.getFrameId();
-           for (let lz = 0; lz < Ez; lz++) {
-             const Ez = iz[lz];
-             if (Ez && !Ez.isBlocked) {
-               if (this.customIsReadyFunction) {
-                 if (!this.customIsReadyFunction(Ez, this.refreshRate, !1)) {
-                   this.resetRefreshCounter();
-                   continue
+           cq || (cq = BASIS({
+             wasmBinary: Bq.data.wasmBinary
+           })), null !== cq && cq.then((qq => {
+             BASIS = qq, qq.initializeBasis(), postMessage({
+               action: "init"
+             })
+           }))
+         } else if ("transcode" === Bq.data.action) {
+           const cq = Bq.data.config,
+             Wq = Bq.data.imageData,
+             Nq = new BASIS.BasisFile(Wq),
+             aq = function(qq) {
+               const Eq = qq.getHasAlpha(),
+                 gq = qq.getNumImages(),
+                 Yq = [];
+               for (let lq = 0; lq < gq; lq++) {
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L267-L269` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L87) · [Before (L267-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L267-L269)

```diff
-               } else if (!Ez.isReady(0 === this.refreshRate)) {
-                 this.resetRefreshCounter();
-                 continue
+                 Yq.push(Eq)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L271-L283` → after: `L89-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L89-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L89-L114) · [Before (L271-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L271-L283)

```diff
-               let iz, lz;
-               if (Hz) {
-                 const zz = Ez._internalAbstractMeshDataInfo._currentLOD.get(Hz);
-                 zz && zz[1] === uz ? iz = zz[0] : (iz = bz.customLODSelector ? bz.customLODSelector(Ez, Hz) : Ez.getLOD(Hz), zz ? (zz[0] = iz, zz[1] = uz) : Ez._internalAbstractMeshDataInfo._currentLOD.set(Hz, [iz, uz]))
-               } else iz = Ez;
-               if (!iz) continue;
-               if (iz !== Ez && 0 !== iz.billboardMode && iz.computeWorldMatrix(), iz._preActivateForIntermediateRendering(zz), lz = !(!nz || !tz) && 0 === (Ez.layerMask & tz.layerMask), Ez.isEnabled() && Ez.isVisible && Ez.hN && !lz) {
-                 if (this._activeMeshes.push(Ez), iz._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, iz !== Ez && iz._activate(zz, !0), this.enableBoundingBoxRendering && Oz && Oz._preActiveMesh(Ez), Ez._activate(zz, !0) && Ez.hN.length) {
-                   Ez.qT ? Ez._internalAbstractMeshDataInfo._actAsRegularMesh && (iz = Ez) : iz._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, iz._internalAbstractMeshDataInfo._isActiveIntermediate = !0, bz._prepareSkeleton(iz);
-                   for (let zz = 0; zz < iz.hN.length; zz++) {
-                     const uz = iz.hN[zz];
-                     this.enableBoundingBoxRendering && Oz && Oz._evaluateSubMesh(Ez, uz), this._renderingManager.dispatch(uz, iz)
-                   }
+               return {
+                 hasAlpha: Eq,
+                 images: Yq
+               }
+             }(Nq);
+           let Vq = Bq.data.ignoreSupportedFormats ? null : function(cq, uq) {
+               let Bq = null;
+               cq.supportedCompressionFormats && (Bq = cq.supportedCompressionFormats.astc ? xq : cq.supportedCompressionFormats.bc7 ? lq : cq.supportedCompressionFormats.s3tc ? uq.hasAlpha ? Yq : gq : cq.supportedCompressionFormats.pvrtc ? uq.hasAlpha ? mq : Oq : cq.supportedComp … [truncated]
+               return Bq
+             }(Bq.data.config, aq),
+             dq = !1;
+           null === Vq && (dq = !0, Vq = aq.hasAlpha ? Yq : gq);
+           let jq = !0;
+           Nq.startTranscoding() || (jq = !1);
+           const Hq = [];
+           for (let qq = 0; qq < aq.images.length && jq; qq++) {
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L285` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L116) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L285)

```diff
-                 Ez._postActivate()
+                 gq.transcodedPixels = lq, Hq.push(gq.transcodedPixels.buffer)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1053-L1070` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L133-L135) · [Before (L1053-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L1053-L1070)

```diff
-       const dz = await Fz.EncodeImageAsync(bz, zz, uz, Ez, Mz, pz);
-       void 0 !== nz && iz.h.DownloadBlob(dz, nz), dz.type !== Ez && tz.e.Warn(`DumpData: The requested mimeType '${Ez}' is not supported. The result has mimeType '${dz.type}' instead.`);
-       const Zz = await dz.arrayBuffer();
-       return Oz ? Zz : `data:${Ez};base64,${(0,Hz.h)(Zz)}`
-     }
- 
-     function wz(zz, uz, bz, Ez) {
-       let nz = arguments.length > 5 ? arguments[5] : void 0;
-       void 0 !== nz || Ez || (nz = ""), Kz(zz, uz, bz, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", nz, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
-         Ez && Ez(zz)
-       }))
-     }
- 
-     function Xz() {
-       pz && (pz?.then((zz => {
-         zz.canvas instanceof HTMLCanvasElement && zz.canvas.remove(), zz.dumpEngine && (zz.dumpEngine.engine.dispose(), zz.dumpEngine.renderer.dispose(), zz.dumpEngine.wrapper.dispose())
- ... (2 more removed lines; see GitHub link above)
+     }! function(qq) {
+       qq[qq.cTFETC1 = 0] = "cTFETC1", qq[qq.cTFETC2 = 1] = "cTFETC2", qq[qq.cTFBC1 = 2] = "cTFBC1", qq[qq.cTFBC3 = 3] = "cTFBC3", qq[qq.cTFBC4 = 4] = "cTFBC4", qq[qq.cTFBC5 = 5] = "cTFBC5", qq[qq.cTFBC7 = 6] = "cTFBC7", qq[qq.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", qq[qq.cTFPVR … [truncated]
+     }(Yq || (Yq = {}));
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1072-L1075` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L137-L138) · [Before (L1072-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L1072-L1075)

```diff
-       DumpData: wz,
-       DumpDataAsync: Kz,
-       DumpFramebuffer: Rz,
-       Dispose: Xz
+       JSModuleURL: `${lq.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
+       WasmModuleURL: `${lq.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1077-L1199` → after: `L140-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L140-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L140-L158) · [Before (L1077-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L1077-L1199)

```diff
-     let sz = !1;
- 
-     function rz() {
-       if (sz) return;
-       sz = !0;
-       iz.h.DumpData = wz, iz.h.DumpDataAsync = Kz, iz.h.DumpFramebuffer = Rz
-     }
-   },
-   41014: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Fz,
-       e: () => Zz,
-       f: () => Rz
-     });
-     var Ez = bz(39636),
-       nz = bz(41019),
- ... (107 more removed lines; see GitHub link above)
+     let uq = null,
+       Bq = null,
+       Wq = 0;
+     const Nq = async () => (uq || (uq = new Promise(((qq, Eq) => {
+       Bq ? qq(Bq) : lq.f.LoadFileAsync(lq.f.GetBabylonScriptURL(cq.WasmModuleURL)).then((gq => {
+         if ("function" !== typeof URL) return Eq("Basis transcoder requires an environment with a URL constructor");
+         const Yq = URL.createObjectURL(new Blob([`(${Aq})()`], {
+           type: "application/javascript"
+         }));
+         Bq = new Worker(Yq), async function(qq, Eq, gq) {
+           return await new Promise(((Yq, Oq) => {
+             const mq = Eq => {
+               "init" === Eq.data.action ? (qq.removeEventListener("message", mq), Yq(qq)) : "error" === Eq.data.action && Oq(Eq.data.error || "error initializing worker")
+             };
+             qq.addEventListener("message", mq), qq.postMessage({
+               action: "init",
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1203-L1313` → after: `L183-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L183-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L183-L195) · [Before (L1203-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L1203-L1313)

```diff
-     }
-     async function Zz(zz, uz, iz) {
-       let Mz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         tz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-         Hz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-       await async function(zz) {
-         if (zz.isReady()) return;
-         if (zz.loadingError) throw new Error(zz.errorObject?.message || `Texture ${zz.name} errored while loading.`);
-         const uz = zz.onLoadObservable;
-         if (uz) return await new Promise((zz => uz.addOnce((() => zz()))));
-         const bz = zz._texture?.onLoadedObservable;
-         if (bz) return await new Promise((zz => bz.addOnce((() => zz()))));
-         throw new Error(`Cannot determine readiness of texture ${zz.name}.`)
-       }(zz);
-       const dz = zz.getInternalTexture(),
- ... (95 more removed lines; see GitHub link above)
+     }, Vq = (qq, Eq) => {
+       let gq = Eq._gl?.TEXTURE_2D;
+       qq.isCube && (gq = Eq._gl?.TEXTURE_CUBE_MAP), Eq._bindTextureDirectly(gq, qq, !0)
+     }, dq = (qq, Eq) => {
+       const gq = qq.Ba();
+       for (let lq = 0; lq < Eq.fileInfo.images.length; lq++) {
+         const Aq = Eq.fileInfo.images[lq].levels[0];
+         if (qq._invertVScale = qq.invertY, -1 === Eq.format || Eq.format === Yq.cTFRGB565)
+           if (qq.type = 10, qq.format = 4, !gq._features.basisNeedsPOT || Math.log2(Aq.width) % 1 === 0 && Math.log2(Aq.height) % 1 === 0) qq._invertVScale = !qq.invertY, qq.width = Aq.width + 3 & -4, qq.height = Aq.height + 3 & -4, qq.samplingMode = 2, Vq(qq, gq), gq._uploadData … [truncated]
+           else {
+             const Eq = new xq.c(gq, 2);
+             qq._invertVScale = qq.invertY, Eq.type = 10, Eq.format = 4, Eq.width = Aq.width + 3 & -4, Eq.height = Aq.height + 3 & -4, Vq(Eq, gq), gq._uploadDataToTextureDirectly(Eq, new Uint16Array(Aq.transcodedPixels.buffer), lq, 0, 4, !0), gq._rescaleTexture(Eq, qq, gq.scenes[0 … [truncated]
+               gq._releaseTexture(Eq), Vq(qq, gq)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1335-L1363` → after: `L198-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L198-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L198-L206) · [Before (L1335-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L1335-L1363)

```diff
-         }(zz, Kz, wz, Mz, tz, Oz)
-       }
-       let Xz = await zz.readPixels(Mz, tz);
-       if (!Xz) throw new Error(`Failed to read pixels from texture ${zz.name}.`);
-       if (Xz instanceof Float32Array) {
-         const zz = new Uint8Array(Xz.length);
-         let uz = Xz.length;
-         for (; uz--;) {
-           const bz = Xz[uz];
-           zz[uz] = Math.round(255 * (0, pz.Clamp)(bz))
-         }
-         Xz = zz
-       }
-       const fz = Kz * wz,
-         sz = 4 * fz;
-       if (Xz.length !== sz) {
- ... (13 more removed lines; see GitHub link above)
+         else {
+           qq.width = Aq.width, qq.height = Aq.height, qq.generateMipMaps = Eq.fileInfo.images[lq].levels.length > 1;
+           const Yq = jq.GetInternalFormatFromBasisFormat(Eq.format, gq);
+           qq.format = Yq, Vq(qq, gq);
+           const xq = Eq.fileInfo.images[lq].levels;
+           for (let Eq = 0; Eq < xq.length; Eq++) {
+             const Oq = xq[Eq];
+             gq._uploadCompressedDataToTextureDirectly(qq, Yq, Oq.width, Oq.height, Oq.transcodedPixels, lq, Eq)
+           }!gq._features.basisNeedsPOT || Math.log2(qq.width) % 1 === 0 && Math.log2(qq.height) % 1 === 0 || (Oq.b.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with  … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L1366-L2001` → after: `L209-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L209-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L209-L216) · [Before (L1366-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L1366-L2001)

```diff
-       return Xz
-     }
-     const Rz = {
-       CreateResizedCopy: function(zz, uz, bz) {
-         let iz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const lz = zz.XT(),
-           Mz = lz.uR(),
-           tz = new nz.e("resized" + zz.name, {
-             width: uz,
-             height: bz
-           }, lz, !zz.noMipmap, !0, zz._texture.type, !1, zz.samplingMode, !1);
-         tz.wrapU = zz.wrapU, tz.wrapV = zz.wrapV, tz.uOffset = zz.uOffset, tz.vOffset = zz.vOffset, tz.uScale = zz.uScale, tz.vScale = zz.vScale, tz.uAng = zz.uAng, tz.vAng = zz.vAng, tz.wAng = zz.wAng, tz.coordinatesIndex = zz.coordinatesIndex, tz.level = zz.level, tz.anisotropi … [truncated]
-         const Hz = new Oz("pass", 1, null, iz ? Ez.e.BILINEAR_SAMPLINGMODE : Ez.e.NEAREST_SAMPLINGMODE, Mz, !1, 0);
-         return Hz.externalTextureSamplerBinding = !0, Hz.onEffectCreatedObservable.addOnce((uz => {
-           uz.executeWhenCompiled((() => {
-             Hz.onApply = function(uz) {
- ... (620 more removed lines; see GitHub link above)
+     }, jq = {
+       JSModuleURL: cq.JSModuleURL,
+       WasmModuleURL: cq.WasmModuleURL,
+       GetInternalFormatFromBasisFormat: (qq, Eq) => {
+         let gq;
+         switch (qq) {
+           case Yq.cTFETC1:
+             gq = 36196;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2003-L2004` → after: `L218-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L218-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L218-L219) · [Before (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L2003-L2004)

```diff
-           case 1:
-             this.updateEffect("#define NEGATIVEX");
+           case Yq.cTFBC1:
+             gq = 33776;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2006-L2007` → after: `L221-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L221-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L221-L222) · [Before (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L2006-L2007)

```diff
-           case 2:
-             this.updateEffect("#define POSITIVEY");
+           case Yq.cTFBC4:
+             gq = 33779;
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2009-L2010` → after: `L224-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L224-L225) · [Before (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L2009-L2010)

```diff
-           case 3:
-             this.updateEffect("#define NEGATIVEY");
+           case Yq.cTFASTC_4x4:
+             gq = 37808;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2012-L2013` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L227-L228) · [Before (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L2012-L2013)

```diff
-           case 4:
-             this.updateEffect("#define POSITIVEZ");
+           case Yq.cTFETC2:
+             gq = 37496;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L2015-L2016` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/301.js#L230-L231) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/301.js#L2015-L2016)

```diff
-           case 5:
-             this.updateEffect("#define NEGATIVEZ")
+           case Yq.cTFBC7:
+             gq = 36492
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/302.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/302.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L4-L6)

```diff
-   41043: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       _HDRTextureLoader: () => Oz
+   41568: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => jq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L8` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L8-L19) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L8)

```diff
-     var Ez = bz(36519);
+     var Yq = gq(37156),
+       lq = gq(37139),
+       Oq = gq(40233),
+       mq = gq(39886),
+       xq = gq(39696),
+       Aq = gq(38653),
+       cq = gq(39870),
+       uq = gq(39900),
+       Bq = gq(37149),
+       Wq = gq(39644),
+       Nq = gq(39858),
+       aq = gq(39938);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L10-L41` → after: `L21-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L21-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L21-L258) · [Before (L10-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L10-L41)

```diff
-       static ConvertPanoramaToCubemap(zz, uz, bz, Ez) {
-         let nz, iz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           lz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!zz) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (zz.length != uz * bz * 3) {
-           if (zz.length != uz * bz * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           nz = 4
-         } else nz = 3;
-         return {
-           front: this.CreateCubemapTexture(Ez, this.FACE_FRONT, zz, uz, bz, iz, lz, nz),
-           back: this.CreateCubemapTexture(Ez, this.FACE_BACK, zz, uz, bz, iz, lz, nz),
-           left: this.CreateCubemapTexture(Ez, this.FACE_LEFT, zz, uz, bz, iz, lz, nz),
-           right: this.CreateCubemapTexture(Ez, this.FACE_RIGHT, zz, uz, bz, iz, lz, nz),
-           up: this.CreateCubemapTexture(Ez, this.FACE_UP, zz, uz, bz, iz, lz, nz),
-           down: this.CreateCubemapTexture(Ez, this.FACE_DOWN, zz, uz, bz, iz, lz, nz),
-           size: Ez,
- ... (16 more removed lines; see GitHub link above)
+       get renderList() {
+         return this._renderList
+       }
+       set renderList(qq) {
+         this._renderList !== qq && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), qq && (this._unObserveRenderList = (0, Bq.k)(qq, this._renderListHasChanged)), this._renderList = qq)
+       }
+       get disableImageProcessing() {
+         return this._disableImageProcessing
+       }
+       set disableImageProcessing(qq) {
+         qq !== this._disableImageProcessing && (this._disableImageProcessing = qq, this._scene.markAllMaterialsAsDirty(64))
+       }
+       get disableDepthPrePass() {
+         return this._disableDepthPrePass
+       }
+       set disableDepthPrePass(qq) {
+ ... (222 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L43-L50` → after: `L260-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L260-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L260-L285) · [Before (L43-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L43-L50)

```diff
-             let iz = uz[0],
-               tz = uz[2];
-             for (let uz = 0; uz < zz; uz++)
-               for (let pz = 0; pz < Oz; pz++) {
-                 const Oz = tz.subtract(iz).scale(Kz).add(iz);
-                 Oz.normalize();
-                 const pz = this.CalcProjectionSpherical(Oz, bz, Ez, nz, Mz, lz);
-                 Hz[wz * zz * 3 + 3 * uz + 0] += pz.r * dz, Hz[wz * zz * 3 + 3 * uz + 1] += pz.g * dz, Hz[wz * zz * 3 + 3 * uz + 2] += pz.b * dz, iz = iz.add(Fz), tz = tz.add(Zz)
+             const Yq = Oq[mq];
+             if (Yq && !Yq.isBlocked) {
+               if (this.customIsReadyFunction) {
+                 if (!this.customIsReadyFunction(Yq, this.refreshRate, !1)) {
+                   this.resetRefreshCounter();
+                   continue
+                 }
+               } else if (!Yq.isReady(0 === this.refreshRate)) {
+                 this.resetRefreshCounter();
+                 continue
+               }
+               let Oq, mq;
+               if (cq) {
+                 const qq = Yq._internalAbstractMeshDataInfo._currentLOD.get(cq);
+                 qq && qq[1] === Eq ? Oq = qq[0] : (Oq = gq.customLODSelector ? gq.customLODSelector(Yq, cq) : Yq.getLOD(cq), qq ? (qq[0] = Oq, qq[1] = Eq) : Yq._internalAbstractMeshDataInfo._currentLOD.set(cq, [Oq, Eq]))
+               } else Oq = Yq;
+ ... (10 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L52` → after: `L287-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L287-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L287-L569) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L52)

```diff
-             Kz += Rz * pz
+             }
+           }
+         }
+         if (this.enableBoundingBoxRendering && uq && Eq)
+           for (let Bq = 0; Bq < uq.renderList.length; Bq++) {
+             const qq = uq.renderList.data[Bq];
+             this._activeBoundingBoxes.push(qq)
+           }
+         if (this._scene.particlesEnabled && this.renderParticles) {
+           this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
+           const qq = this.particleSystemList || gq.xZ;
+           for (let Eq = 0; Eq < qq.length; Eq++) {
+             const gq = qq[Eq],
+               Yq = gq.emitter;
+             gq.isStarted() && Yq && (!Yq.position || Yq.isEnabled()) && this._renderingManager.dispatchParticles(gq)
+           }
+ ... (267 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L56-L68` → after: `L719-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L719-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L719-L984) · [Before (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L56-L68)

```diff
-       static CalcProjectionSpherical(zz, uz, bz, Ez, nz, iz) {
-         let lz = Math.atan2(zz.z, zz.x);
-         const Mz = Math.acos(zz.y);
-         for (; lz < -Math.PI;) lz += 2 * Math.PI;
-         for (; lz > Math.PI;) lz -= 2 * Math.PI;
-         let tz = lz / Math.PI;
-         const Hz = Mz / Math.PI;
-         tz = .5 * tz + .5;
-         let Oz = Math.round(tz * bz);
-         Oz < 0 ? Oz = 0 : Oz >= bz && (Oz = bz - 1);
-         let pz = Math.round(Hz * Ez);
-         pz < 0 ? pz = 0 : pz >= Ez && (pz = Ez - 1);
-         const dz = iz ? Ez - pz - 1 : pz;
+       disposeFramebufferObjects() {
+         this._renderTarget?.dispose(!0)
+       }
+       releaseInternalTexture() {
+         this._renderTarget?.releaseTextures(), this._texture = null
+       }
+       dispose() {
+         this.onResizeObservable.clear(), this.onClearObservable.clear(), this.onAfterUnbindObservable.clear(), this.onBeforeBindObservable.clear(), this._postProcessManager && (this._postProcessManager.dispose(), this._postProcessManager = null), this._prePassRenderTarget && this … [truncated]
+         const qq = this.ZJ();
+         if (!qq) return;
+         let Eq = qq.customRenderTargets.indexOf(this);
+         Eq >= 0 && qq.customRenderTargets.splice(Eq, 1);
+         for (const gq of qq.cameras) Eq = gq.customRenderTargets.indexOf(this), Eq >= 0 && gq.customRenderTargets.splice(Eq, 1);
+         this._renderTarget?.dispose(), this._renderTarget = null, this._texture = null, super.dispose()
+       }
+       _rebuild() {
+ ... (250 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L70-L72` → after: `L986-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L986-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L986-L1008) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L70-L72)

```diff
-           r: uz[dz * bz * nz + Oz * nz + 0],
-           g: uz[dz * bz * nz + Oz * nz + 1],
-           b: uz[dz * bz * nz + Oz * nz + 2]
+           canvas: qq,
+           dumpEngine: {
+             engine: Yq,
+             renderer: Oq,
+             wrapper: cq
+           }
+         }
+       }()), await Bq
+     }
+     let Nq = (() => {
+       var qq;
+       let Eq, gq = [];
+       return qq = class {
+         static async EncodeImageAsync(qq, Eq, gq, Yq, lq, mq) {
+           const xq = await Wq(),
+             Aq = xq.dumpEngine;
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L77-L80` → after: `L1059-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L1059-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L1059-L1063) · [Before (L77-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L77-L80)

```diff
-     function iz(zz, uz, bz, Ez, nz, iz) {
-       nz > 0 ? (nz = function(zz, uz) {
-         return uz > 1023 ? zz * Math.pow(2, 1023) * Math.pow(2, uz - 1023) : uz < -1074 ? zz * Math.pow(2, -1074) * Math.pow(2, uz + 1074) : zz * Math.pow(2, uz)
-       }(1, nz - 136), zz[iz + 0] = uz * nz, zz[iz + 1] = bz * nz, zz[iz + 2] = Ez * nz) : (zz[iz + 0] = 0, zz[iz + 1] = 0, zz[iz + 2] = 0)
+     function jq(qq, Eq, gq, Yq) {
+       let lq = arguments.length > 5 ? arguments[5] : void 0;
+       void 0 !== lq || Yq || (lq = ""), dq(qq, Eq, gq, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", lq, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
+         Yq && Yq(qq)
+       }))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L83-L86` → after: `L1066-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L1066-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L1066-L1069) · [Before (L83-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L83-L86)

```diff
-     function lz(zz, uz) {
-       let bz, Ez = "";
-       for (let nz = uz; nz < zz.length - uz && (bz = String.fromCharCode(zz[nz]), "\n" != bz); nz++) Ez += bz;
-       return Ez
+     function Hq() {
+       Bq && (Bq?.then((qq => {
+         qq.canvas instanceof HTMLCanvasElement && qq.canvas.remove(), qq.dumpEngine && (qq.dumpEngine.engine.dispose(), qq.dumpEngine.renderer.dispose(), qq.dumpEngine.wrapper.dispose())
+       })), Bq = null)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L89-L109` → after: `L1079-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L1079-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L1079-L1082) · [Before (L89-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L89-L109)

```diff
-     function Mz(zz) {
-       let uz = lz(zz, 0);
-       if ("#" != uz[0] || "?" != uz[1]) throw "Bad HDR Format.";
-       let bz = !1,
-         Ez = !1,
-         nz = 0;
-       do {
-         nz += uz.length + 1, uz = lz(zz, nz), "FORMAT=32-bit_rle_rgbe" == uz ? Ez = !0 : 0 == uz.length && (bz = !0)
-       } while (!bz);
-       if (!Ez) throw "HDR Bad header format, unsupported FORMAT";
-       nz += uz.length + 1, uz = lz(zz, nz);
-       const iz = /^-Y (.*) \+X (.*)$/g.exec(uz);
-       if (!iz || iz.length < 3) throw "HDR Bad header format, no size";
-       const Mz = parseInt(iz[2]),
-         tz = parseInt(iz[1]);
-       if (Mz < 8 || Mz > 32767) throw "HDR Bad header format, unsupported size";
- ... (5 more removed lines; see GitHub link above)
+     function Qq() {
+       if (Pq) return;
+       Pq = !0;
+       Oq.f.DumpData = jq, Oq.f.DumpDataAsync = dq, Oq.f.DumpFramebuffer = Vq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L112-L134` → after: `L1179-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L1179-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L1179-L1344) · [Before (L112-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L112-L134)

```diff
-     function tz(zz, uz) {
-       return function(zz, uz) {
-         let bz = uz.height;
-         const Ez = uz.width;
-         let nz, lz, Mz, tz, Oz, pz, dz, Fz, Zz = uz.dataPosition;
-         const Rz = new ArrayBuffer(4 * Ez),
-           Kz = new Uint8Array(Rz),
-           wz = new ArrayBuffer(uz.width * uz.height * 4 * 3),
-           Xz = new Float32Array(wz);
-         for (; bz > 0;) {
-           if (nz = zz[Zz++], lz = zz[Zz++], Mz = zz[Zz++], tz = zz[Zz++], 2 != nz || 2 != lz || 128 & Mz || uz.width < 8 || uz.width > 32767) return Hz(zz, uz);
-           if ((Mz << 8 | tz) != Ez) throw "HDR Bad header format, wrong scan line width";
-           for (pz = 0, Fz = 0; Fz < 4; Fz++)
-             for (dz = (Fz + 1) * Ez; pz < dz;)
-               if (nz = zz[Zz++], lz = zz[Zz++], nz > 128) {
-                 if (Oz = nz - 128, 0 == Oz || Oz > dz - pz) throw "HDR Bad Format, bad scanline data (run)";
- ... (7 more removed lines; see GitHub link above)
+     function Nq(qq, Eq, gq, Yq, lq, Oq, xq, Aq) {
+       const cq = Eq.Ba();
+       return Eq.isReady = !1, lq = lq ?? Eq.samplingMode, Yq = Yq ?? Eq.type, Oq = Oq ?? Eq.format, xq = xq ?? Eq.width, Aq = Aq ?? Eq.height, -1 === Yq && (Yq = 0), new Promise((uq => {
+         const Bq = new mq.e("postprocess", qq, null, null, 1, null, lq, cq, !1, void 0, Yq, void 0, null, !1, Oq);
+         Bq.externalTextureSamplerBinding = !0;
+         const Wq = cq.createRenderTargetTexture({
+           width: xq,
+           height: Aq
+         }, {
+           generateDepthBuffer: !1,
+           generateMipMaps: !1,
+           generateStencilBuffer: !1,
+           samplingMode: lq,
+           type: Yq,
+           format: Oq
+         });
+ ... (150 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L136-L137` → after: `L1346-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L1346-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L1346-L1392) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L136-L137)

```diff
-         return Xz
-       }(zz, uz)
+         Hq = qq
+       }
+       const oq = dq * jq,
+         Pq = 4 * oq;
+       if (Hq.length !== Pq) {
+         const qq = 0 === oq ? 0 : Hq.length / oq;
+         if (1 === qq || 2 === qq || 3 === qq) {
+           const Eq = new Uint8Array(Pq);
+           for (let gq = 0, Yq = 0, lq = 0; gq < oq; gq++, lq += 4) {
+             const gq = Hq[Yq++];
+             if (1 === qq) {
+               Eq[lq] = gq, Eq[lq + 1] = gq, Eq[lq + 2] = gq, Eq[lq + 3] = 255;
+               continue
+             }
+             const Oq = Hq[Yq++];
+             2 !== qq ? (Eq[lq] = gq, Eq[lq + 1] = Oq, Eq[lq + 2] = Hq[Yq++], Eq[lq + 3] = 255) : (Eq[lq] = gq, Eq[lq + 1] = Oq, Eq[lq + 2] = 0, Eq[lq + 3] = 255)
+ ... (31 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L140-L148` → after: `L1942-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L1942-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L1942-L1976) · [Before (L140-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L140-L148)

```diff
-     function Hz(zz, uz) {
-       let bz = uz.height;
-       const Ez = uz.width;
-       let nz, lz, Mz, tz, Hz, Oz = uz.dataPosition;
-       const pz = new ArrayBuffer(uz.width * uz.height * 4 * 3),
-         dz = new Float32Array(pz);
-       for (; bz > 0;) {
-         for (Hz = 0; Hz < uz.width; Hz++) nz = zz[Oz++], lz = zz[Oz++], Mz = zz[Oz++], tz = zz[Oz++], iz(dz, nz, lz, Mz, tz, (uz.height - bz) * Ez * 3 + 3 * Hz);
-         bz--
+     function dq() {
+       Vq || (Vq = !0, Bq.b.prototype.setTextureFromPostProcess = function(qq, Eq, gq) {
+         let Yq = null;
+         Eq && (Eq._forcedOutputTexture ? Yq = Eq._forcedOutputTexture : Eq._textures.data[Eq._currentRenderTextureInd] && (Yq = Eq._textures.data[Eq._currentRenderTextureInd])), this._bindTexture(qq, Yq?.texture ?? null, gq)
+       }, Bq.b.prototype.setTextureFromPostProcessOutput = function(qq, Eq, gq) {
+         this._bindTexture(qq, Eq?._outputTexture?.texture ?? null, gq)
+       }, xq.d.prototype.setTextureFromPostProcess = function(qq, Eq) {
+         this._engine.setTextureFromPostProcess(this._samplers[qq], Eq, qq)
+       }, xq.d.prototype.setTextureFromPostProcessOutput = function(qq, Eq) {
+         this._engine.setTextureFromPostProcessOutput(this._samplers[qq], Eq, qq)
+       }, (0, uq.g)("BABYLON.PostProcess", aq))
+     }
+   },
+   41577: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq,
+ ... (19 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L152-L170` → after: `L1979-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L1979-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/302.js#L1979-L2017) · [Before (L152-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/302.js#L152-L170)

```diff
-     nz.FACE_LEFT = [new Ez.n(-1, -1, -1), new Ez.n(1, -1, -1), new Ez.n(-1, 1, -1), new Ez.n(1, 1, -1)], nz.FACE_RIGHT = [new Ez.n(1, -1, 1), new Ez.n(-1, -1, 1), new Ez.n(1, 1, 1), new Ez.n(-1, 1, 1)], nz.FACE_FRONT = [new Ez.n(1, -1, -1), new Ez.n(1, -1, 1), new Ez.n(1, 1, -1), … [truncated]
-     class Oz {
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData() {
-         throw ".hdr not supported in Cube."
-       }
-       loadData(zz, uz, bz) {
-         const Ez = new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength),
-           nz = Mz(Ez),
-           iz = tz(Ez, nz),
-           lz = nz.width * nz.height,
-           Hz = new Float32Array(4 * lz);
-         for (let Mz = 0; Mz < lz; Mz += 1) Hz[4 * Mz] = iz[3 * Mz], Hz[4 * Mz + 1] = iz[3 * Mz + 1], Hz[4 * Mz + 2] = iz[3 * Mz + 2], Hz[4 * Mz + 3] = 1;
-         bz(nz.width, nz.height, uz.generateMipMaps, !1, (() => {
- ... (3 more removed lines; see GitHub link above)
+     Oq.FragmentUrl = "pass";
+     class mq extends Yq.e {
+       _gatherImports(qq, Eq) {
+         qq ? (this._webGPUReady = !0, Eq.push(Promise.all([gq.e(366).then((() => gq(61429)))]))) : Eq.push(Promise.all([gq.e(367).then((() => gq(61432)))])), super._gatherImports(qq, Eq)
+       }
+       constructor(qq) {
+         super({
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: qq,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || lq.b.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: mq.FragmentUrl,
+           defines: "#define POSITIVEX"
+         }), this._face = 0
+       }
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/303.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/303.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405)

#### 1. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L4)

```diff
-   41050: (zz, uz, bz) => {
+   41592: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L6)

```diff
-       _KTXTextureLoader: () => Zz
+       _HDRTextureLoader: () => uq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L8)

```diff
-     var Ez = bz(38060);
+     var Yq = gq(37139);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L10-L23` → after: `L10-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L10-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L10-L28) · [Before (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L10-L23)

```diff
-       constructor(zz, uz) {
-         if (this.data = zz, this.isInvalid = !1, !nz.IsValid(zz)) return this.isInvalid = !0, void Ez.e.Error("texture missing KTX identifier");
-         const bz = Uint32Array.BYTES_PER_ELEMENT,
-           iz = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * bz),
-           lz = 67305985 === iz.getUint32(0, !0);
-         return this.glType = iz.getUint32(1 * bz, lz), this.glTypeSize = iz.getUint32(2 * bz, lz), this.glFormat = iz.getUint32(3 * bz, lz), this.glInternalFormat = iz.getUint32(4 * bz, lz), this.glBaseInternalFormat = iz.getUint32(5 * bz, lz), this.pixelWidth = iz.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(zz, uz) {
-         switch (this.loadType) {
-           case nz.COMPRESSED_2D:
-             this._upload2DCompressedLevels(zz, uz);
-           case nz.TEX_2D:
-           case nz.COMPRESSED_3D:
-           case nz.TEX_3D:
+       static ConvertPanoramaToCubemap(qq, Eq, gq, Yq) {
+         let lq, Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!qq) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (qq.length != Eq * gq * 3) {
+           if (qq.length != Eq * gq * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           lq = 4
+         } else lq = 3;
+         return {
+           front: this.CreateCubemapTexture(Yq, this.FACE_FRONT, qq, Eq, gq, Oq, mq, lq),
+           back: this.CreateCubemapTexture(Yq, this.FACE_BACK, qq, Eq, gq, Oq, mq, lq),
+           left: this.CreateCubemapTexture(Yq, this.FACE_LEFT, qq, Eq, gq, Oq, mq, lq),
+           right: this.CreateCubemapTexture(Yq, this.FACE_RIGHT, qq, Eq, gq, Oq, mq, lq),
+           up: this.CreateCubemapTexture(Yq, this.FACE_UP, qq, Eq, gq, Oq, mq, lq),
+           down: this.CreateCubemapTexture(Yq, this.FACE_DOWN, qq, Eq, gq, Oq, mq, lq),
+           size: Yq,
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L26-L36` → after: `L31-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L31-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L31-L52) · [Before (L26-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L26-L36)

```diff
-       _upload2DCompressedLevels(zz, uz) {
-         let bz = nz.HEADER_LEN + this.bytesOfKeyValueData,
-           Ez = this.pixelWidth,
-           iz = this.pixelHeight;
-         const lz = uz ? this.numberOfMipmapLevels : 1;
-         for (let nz = 0; nz < lz; nz++) {
-           const uz = new Int32Array(this.data.buffer, this.data.byteOffset + bz, 1)[0];
-           bz += 4;
-           for (let lz = 0; lz < this.numberOfFaces; lz++) {
-             const Mz = new Uint8Array(this.data.buffer, this.data.byteOffset + bz, uz);
-             zz.uR()._uploadCompressedDataToTextureDirectly(zz, zz.format, Ez, iz, Mz, lz, nz), bz += uz, bz += 3 - (uz + 3) % 4
+       static CreateCubemapTexture(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
+         const Aq = new ArrayBuffer(qq * qq * 4 * 3),
+           cq = new Float32Array(Aq),
+           uq = Oq ? Math.max(1, Math.round(Yq / 4 / qq)) : 1,
+           Bq = 1 / uq,
+           Wq = Bq * Bq,
+           Nq = Eq[1].subtract(Eq[0]).scale(Bq / qq),
+           aq = Eq[3].subtract(Eq[2]).scale(Bq / qq),
+           Vq = 1 / qq;
+         let dq = 0;
+         for (let jq = 0; jq < qq; jq++)
+           for (let Oq = 0; Oq < uq; Oq++) {
+             let Oq = Eq[0],
+               Aq = Eq[2];
+             for (let Eq = 0; Eq < qq; Eq++)
+               for (let Bq = 0; Bq < uq; Bq++) {
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L38` → after: `L54-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L54-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L54-L72) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L38)

```diff
-           Ez = Math.max(1, .5 * Ez), iz = Math.max(1, .5 * iz)
+         return cq
+       }
+       static CalcProjectionSpherical(qq, Eq, gq, Yq, lq, Oq) {
+         let mq = Math.atan2(qq.z, qq.x);
+         const xq = Math.acos(qq.y);
+         for (; mq < -Math.PI;) mq += 2 * Math.PI;
+         for (; mq > Math.PI;) mq -= 2 * Math.PI;
+         let Aq = mq / Math.PI;
+         const cq = xq / Math.PI;
+         Aq = .5 * Aq + .5;
+         let uq = Math.round(Aq * gq);
+         uq < 0 ? uq = 0 : uq >= gq && (uq = gq - 1);
+         let Bq = Math.round(cq * Yq);
+         Bq < 0 ? Bq = 0 : Bq >= Yq && (Bq = Yq - 1);
+         const Wq = Oq ? Yq - Bq - 1 : Bq;
+         return {
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L49-L51` → after: `L76-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L76-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L76-L81) · [Before (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L49-L51)

```diff
-     nz.HEADER_LEN = 64, nz.COMPRESSED_2D = 0, nz.COMPRESSED_3D = 1, nz.TEX_2D = 2, nz.TEX_3D = 3;
-     var iz, lz, Mz, tz = bz(41057),
-       Hz = bz(39258);
+ 
+     function Oq(qq, Eq, gq, Yq, lq, Oq) {
+       lq > 0 ? (lq = function(qq, Eq) {
+         return Eq > 1023 ? qq * Math.pow(2, 1023) * Math.pow(2, Eq - 1023) : Eq < -1074 ? qq * Math.pow(2, -1074) * Math.pow(2, Eq + 1074) : qq * Math.pow(2, Eq)
+       }(1, lq - 136), qq[Oq + 0] = Eq * lq, qq[Oq + 1] = gq * lq, qq[Oq + 2] = Yq * lq) : (qq[Oq + 0] = 0, qq[Oq + 1] = 0, qq[Oq + 2] = 0)
+     }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L54-L55` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L84-L86) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L54-L55)

```diff
-       const bz = uz?.jsDecoderModule || KTX2DECODER;
-       zz && (zz.wasmBaseUrl && (bz.Transcoder.WasmBaseUrl = zz.wasmBaseUrl), zz.wasmUASTCToASTC && (bz.LiteTranscoder_UASTC_ASTC.WasmModuleURL = zz.wasmUASTCToASTC), zz.wasmUASTCToBC7 && (bz.LiteTranscoder_UASTC_BC7.WasmModuleURL = zz.wasmUASTCToBC7), zz.wasmUASTCToRGBA_UNORM &&  … [truncated]
+       let gq, Yq = "";
+       for (let lq = Eq; lq < qq.length - Eq && (gq = String.fromCharCode(qq[lq]), "\n" != gq); lq++) Yq += gq;
+       return Yq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L59-L241` → after: `L90-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L90-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L90-L108) · [Before (L59-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L59-L241)

```diff
-       let uz;
-       "undefined" === typeof zz && "undefined" !== typeof KTX2DECODER && (zz = KTX2DECODER), onmessage = bz => {
-         if (bz.data) switch (bz.data.action) {
-           case "init": {
-             const Ez = bz.data.urls;
-             Ez && (Ez.jsDecoderModule && "undefined" === typeof zz && (importScripts(Ez.jsDecoderModule), zz = KTX2DECODER), Oz(Ez)), bz.data.wasmBinaries && Oz(void 0, {
-               ...bz.data.wasmBinaries,
-               jsDecoderModule: zz
-             }), uz = new zz.KTX2Decoder, postMessage({
-               action: "init"
-             });
-             break
-           }
-           case "setDefaultDecoderOptions":
-             zz.KTX2Decoder.DefaultDecoderOptions = bz.data.options;
-             break;
- ... (167 more removed lines; see GitHub link above)
+       let Eq = mq(qq, 0);
+       if ("#" != Eq[0] || "?" != Eq[1]) throw "Bad HDR Format.";
+       let gq = !1,
+         Yq = !1,
+         lq = 0;
+       do {
+         lq += Eq.length + 1, Eq = mq(qq, lq), "FORMAT=32-bit_rle_rgbe" == Eq ? Yq = !0 : 0 == Eq.length && (gq = !0)
+       } while (!gq);
+       if (!Yq) throw "HDR Bad header format, unsupported FORMAT";
+       lq += Eq.length + 1, Eq = mq(qq, lq);
+       const Oq = /^-Y (.*) \+X (.*)$/g.exec(Eq);
+       if (!Oq || Oq.length < 3) throw "HDR Bad header format, no size";
+       const xq = parseInt(Oq[2]),
+         Aq = parseInt(Oq[1]);
+       if (xq < 8 || xq > 32767) throw "HDR Bad header format, unsupported size";
+       return lq += Eq.length + 1, {
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L245-L288` → after: `L112-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L112-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L112-L148) · [Before (L245-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L245-L288)

```diff
-     function Fz(zz) {
-       switch (zz) {
-         case 35916:
-           return 33776;
-         case 35918:
-           return 33778;
-         case 35919:
-           return 33779;
-         case 37493:
-           return 37492;
-         case 37497:
-           return 37496;
-         case 37495:
-           return 37494;
-         case 37840:
-           return 37808;
- ... (28 more removed lines; see GitHub link above)
+     function Aq(qq, Eq) {
+       return function(qq, Eq) {
+         let gq = Eq.height;
+         const Yq = Eq.width;
+         let lq, mq, xq, Aq, uq, Bq, Wq, Nq, aq = Eq.dataPosition;
+         const Vq = new ArrayBuffer(4 * Yq),
+           dq = new Uint8Array(Vq),
+           jq = new ArrayBuffer(Eq.width * Eq.height * 4 * 3),
+           Hq = new Float32Array(jq);
+         for (; gq > 0;) {
+           if (lq = qq[aq++], mq = qq[aq++], xq = qq[aq++], Aq = qq[aq++], 2 != lq || 2 != mq || 128 & xq || Eq.width < 8 || Eq.width > 32767) return cq(qq, Eq);
+           if ((xq << 8 | Aq) != Yq) throw "HDR Bad header format, wrong scan line width";
+           for (Bq = 0, Nq = 0; Nq < 4; Nq++)
+             for (Wq = (Nq + 1) * Yq; Bq < Wq;)
+               if (lq = qq[aq++], mq = qq[aq++], lq > 128) {
+                 if (uq = lq - 128, 0 == uq || uq > Wq - Bq) throw "HDR Bad Format, bad scanline data (run)";
+ ... (21 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L290` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L150) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L290)

```diff
-       return null
+       return Wq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L292-L361` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L152) · [Before (L292-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L292-L361)

```diff
-     dz.URLConfig = {
-       jsDecoderModule: "https://cdn.babylonjs.com/babylon.ktx2Decoder.js",
-       wasmUASTCToASTC: null,
-       wasmUASTCToBC7: null,
-       wasmUASTCToRGBA_UNORM: null,
-       wasmUASTCToRGBA_SRGB: null,
-       wasmUASTCToR8_UNORM: null,
-       wasmUASTCToRG8_UNORM: null,
-       jsMSCTranscoder: null,
-       wasmMSCTranscoder: null,
-       wasmZSTDDecoder: null
-     }, dz.DefaultNumWorkers = dz.GetDefaultNumWorkers(), dz.DefaultDecoderOptions = new class {
-       constructor() {
-         this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
-       }
-       get isDirty() {
- ... (54 more removed lines; see GitHub link above)
+     lq.FACE_LEFT = [new Yq.q(-1, -1, -1), new Yq.q(1, -1, -1), new Yq.q(-1, 1, -1), new Yq.q(1, 1, -1)], lq.FACE_RIGHT = [new Yq.q(1, -1, 1), new Yq.q(-1, -1, 1), new Yq.q(1, 1, 1), new Yq.q(-1, 1, 1)], lq.FACE_FRONT = [new Yq.q(1, -1, -1), new Yq.q(1, -1, 1), new Yq.q(1, 1, -1), … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L366-L374` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L157-L158) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L366-L374)

```diff
-       loadCubeData(zz, uz, bz, Ez) {
-         if (Array.isArray(zz)) return;
-         uz._invertVScale = !uz.invertY;
-         const iz = uz.uR(),
-           lz = new nz(zz, 6),
-           Mz = Fz(lz.glInternalFormat);
-         null !== Mz ? (uz.format = Mz, uz._useSRGBBuffer = iz._getUseSRGBBuffer(!0, !uz.generateMipMaps), uz._gammaSpace = !0) : uz.format = lz.glInternalFormat;
-         const tz = lz.numberOfMipmapLevels > 1 && uz.generateMipMaps;
-         iz._unpackFlipY(!0), lz.uploadLevels(uz, uz.generateMipMaps), uz.width = lz.pixelWidth, uz.height = lz.pixelHeight, iz._setCubeMapTextureParams(uz, tz, lz.numberOfMipmapLevels - 1), uz.isReady = !0, uz.onLoadedObservable.notifyObservers(uz), uz.onLoadedObservable.clear(), … [truncated]
+       loadCubeData() {
+         throw ".hdr not supported in Cube."
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L376-L424` → after: `L160-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L160-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/303.js#L160-L169) · [Before (L376-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/303.js#L376-L424)

```diff
-       loadData(zz, uz, bz, iz) {
-         if (nz.IsValid(zz)) {
-           uz._invertVScale = !uz.invertY;
-           const Ez = new nz(zz, 1),
-             iz = Fz(Ez.glInternalFormat);
-           null !== iz ? (uz.format = iz, uz._useSRGBBuffer = uz.uR()._getUseSRGBBuffer(!0, !uz.generateMipMaps), uz._gammaSpace = !0) : uz.format = Ez.glInternalFormat, bz(Ez.pixelWidth, Ez.pixelHeight, uz.generateMipMaps, !0, (() => {
-             Ez.uploadLevels(uz, uz.generateMipMaps)
-           }), Ez.isInvalid)
-         } else if (dz.IsValid(zz)) {
-           new dz(uz.uR())._uploadAsync(zz, uz, iz).then((() => {
-             bz(uz.width, uz.height, uz.generateMipMaps, !0, (() => {}), !1)
-           }), (zz => {
-             Ez.e.Warn(`Failed to load KTX2 texture data: ${zz.message}`), bz(0, 0, !1, !1, (() => {}), !0)
-           }))
-         } else Ez.e.Error("texture missing KTX identifier"), bz(0, 0, !1, !1, (() => {}), !0)
-       }
- ... (33 more removed lines; see GitHub link above)
+       loadData(qq, Eq, gq) {
+         const Yq = new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength),
+           lq = xq(Yq),
+           Oq = Aq(Yq, lq),
+           mq = lq.width * lq.height,
+           cq = new Float32Array(4 * mq);
+         for (let xq = 0; xq < mq; xq += 1) cq[4 * xq] = Oq[3 * xq], cq[4 * xq + 1] = Oq[3 * xq + 1], cq[4 * xq + 2] = Oq[3 * xq + 2], cq[4 * xq + 3] = 1;
+         gq(lq.width, lq.height, Eq.generateMipMaps, !1, (() => {
+           const qq = Eq.Ba();
+           Eq.type = 1, Eq.format = 5, Eq._gammaSpace = !1, qq._uploadDataToTextureDirectly(Eq, cq)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/304.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/304.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/304.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/304.js#L4)

```diff
-   41065: (zz, uz, bz) => {
+   41600: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/304.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/304.js#L6)

```diff
-       _TGATextureLoader: () => Mz
+       _KTXTextureLoader: () => aq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L8` → after: `L8-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L8-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/304.js#L8-L56) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/304.js#L8)

```diff
-     var Ez = bz(38060);
+     var Yq = gq(38653);
+     class lq {
+       constructor(qq, Eq) {
+         if (this.data = qq, this.isInvalid = !1, !lq.IsValid(qq)) return this.isInvalid = !0, void Yq.b.Error("texture missing KTX identifier");
+         const gq = Uint32Array.BYTES_PER_ELEMENT,
+           Oq = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * gq),
+           mq = 67305985 === Oq.getUint32(0, !0);
+         return this.glType = Oq.getUint32(1 * gq, mq), this.glTypeSize = Oq.getUint32(2 * gq, mq), this.glFormat = Oq.getUint32(3 * gq, mq), this.glInternalFormat = Oq.getUint32(4 * gq, mq), this.glBaseInternalFormat = Oq.getUint32(5 * gq, mq), this.pixelWidth = Oq.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(qq, Eq) {
+         switch (this.loadType) {
+           case lq.COMPRESSED_2D:
+             this._upload2DCompressedLevels(qq, Eq);
+           case lq.TEX_2D:
+           case lq.COMPRESSED_3D:
+           case lq.TEX_3D:
+ ... (33 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L11-L23` → after: `L59-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L59-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/304.js#L59-L241) · [Before (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/304.js#L11-L23)

```diff
-       let uz = 0;
-       return {
-         id_length: zz[uz++],
-         colormap_type: zz[uz++],
-         image_type: zz[uz++],
-         colormap_index: zz[uz++] | zz[uz++] << 8,
-         colormap_length: zz[uz++] | zz[uz++] << 8,
-         colormap_size: zz[uz++],
-         origin: [zz[uz++] | zz[uz++] << 8, zz[uz++] | zz[uz++] << 8],
-         width: zz[uz++] | zz[uz++] << 8,
-         height: zz[uz++] | zz[uz++] << 8,
-         pixel_size: zz[uz++],
-         flags: zz[17]
+       let Eq;
+       "undefined" === typeof qq && "undefined" !== typeof KTX2DECODER && (qq = KTX2DECODER), onmessage = gq => {
+         if (gq.data) switch (gq.data.action) {
+           case "init": {
+             const Yq = gq.data.urls;
+             Yq && (Yq.jsDecoderModule && "undefined" === typeof qq && (importScripts(Yq.jsDecoderModule), qq = KTX2DECODER), uq(Yq)), gq.data.wasmBinaries && uq(void 0, {
+               ...gq.data.wasmBinaries,
+               jsDecoderModule: qq
+             }), Eq = new qq.KTX2Decoder, postMessage({
+               action: "init"
+             });
+             break
+           }
+           case "setDefaultDecoderOptions":
+             qq.KTX2Decoder.DefaultDecoderOptions = gq.data.options;
+             break;
+ ... (167 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L27-L66` → after: `L245-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L245-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/304.js#L245-L357) · [Before (L27-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/304.js#L27-L66)

```diff
-     function iz(zz, uz) {
-       if (uz.length < 19) return void Ez.e.Error("Unable to load TGA file - Not enough data to contain header");
-       let bz = 18;
-       const iz = nz(uz);
-       if (iz.id_length + bz > uz.length) return void Ez.e.Error("Unable to load TGA file - Not enough data");
-       bz += iz.id_length;
-       let Mz, tz = !1,
-         Hz = !1,
-         Oz = !1;
-       switch (iz.image_type) {
-         case 9:
-           tz = !0;
-         case 1:
-           Hz = !0;
-           break;
-         case 10:
- ... (24 more removed lines; see GitHub link above)
+     function Nq(qq) {
+       switch (qq) {
+         case 35916:
+           return 33776;
+         case 35918:
+           return 33778;
+         case 35919:
+           return 33779;
+         case 37493:
+           return 37492;
+         case 37497:
+           return 37496;
+         case 37495:
+           return 37494;
+         case 37840:
+           return 37808;
+ ... (97 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L68-L155` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/304.js#L359) · [Before (L68-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/304.js#L68-L155)

```diff
-       } else Mz = uz.subarray(bz, bz + (Hz ? iz.width * iz.height : dz));
-       switch ((48 & iz.flags) >> 4) {
-         default:
-         case 2:
-           Zz = 0, Kz = 1, fz = iz.width, Rz = 0, wz = 1, Xz = iz.height;
-           break;
-         case 0:
-           Zz = 0, Kz = 1, fz = iz.width, Rz = iz.height - 1, wz = -1, Xz = -1;
-           break;
-         case 3:
-           Zz = iz.width - 1, Kz = -1, fz = -1, Rz = 0, wz = 1, Xz = iz.height;
-           break;
-         case 1:
-           Zz = iz.width - 1, Kz = -1, fz = -1, Rz = iz.height - 1, wz = -1, Xz = -1
-       }
-       const sz = "_getImageData" + (Oz ? "Grey" : "") + iz.pixel_size + "bits",
- ... (72 more removed lines; see GitHub link above)
+         }), this._ktx2DecoderOptions = qq, qq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L162-L169` → after: `L366-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L366-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/304.js#L366-L424) · [Before (L162-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/304.js#L162-L169)

```diff
-       loadCubeData() {
-         throw ".env not supported in Cube."
-       }
-       loadData(zz, uz, bz) {
-         const Ez = new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength),
-           lz = nz(Ez);
-         bz(lz.width, lz.height, uz.generateMipMaps, !1, (() => {
-           iz(uz, Ez)
+       loadCubeData(qq, Eq, gq, Yq) {
+         if (Array.isArray(qq)) return;
+         Eq._invertVScale = !Eq.invertY;
+         const Oq = Eq.Ba(),
+           mq = new lq(qq, 6),
+           xq = Nq(mq.glInternalFormat);
+         null !== xq ? (Eq.format = xq, Eq._useSRGBBuffer = Oq._getUseSRGBBuffer(!0, !Eq.generateMipMaps), Eq._gammaSpace = !0) : Eq.format = mq.glInternalFormat;
+         const Aq = mq.numberOfMipmapLevels > 1 && Eq.generateMipMaps;
+         Oq._unpackFlipY(!0), mq.uploadLevels(Eq, Eq.generateMipMaps), Eq.width = mq.pixelWidth, Eq.height = mq.pixelHeight, Oq._setCubeMapTextureParams(Eq, Aq, mq.numberOfMipmapLevels - 1), Eq.isReady = !0, Eq.onLoadedObservable.notifyObservers(Eq), Eq.onLoadedObservable.clear(), … [truncated]
+       }
+       loadData(qq, Eq, gq, Oq) {
+         if (lq.IsValid(qq)) {
+           Eq._invertVScale = !Eq.invertY;
+           const Yq = new lq(qq, 1),
+             Oq = Nq(Yq.glInternalFormat);
+           null !== Oq ? (Eq.format = Oq, Eq._useSRGBBuffer = Eq.Ba()._getUseSRGBBuffer(!0, !Eq.generateMipMaps), Eq._gammaSpace = !0) : Eq.format = Yq.glInternalFormat, gq(Yq.pixelWidth, Yq.pixelHeight, Eq.generateMipMaps, !0, (() => {
+ ... (43 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/305.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/305.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/305.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/305.js#L4)

```diff
-   41074: (zz, uz, bz) => {
+   41614: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/305.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/305.js#L6-L7)

```diff
-       ReadExrDataAsync: () => pu,
-       _ExrTextureLoader: () => Ou
+       _TGATextureLoader: () => xq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L9-L165` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/305.js#L8) · [Before (L9-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/305.js#L9-L165)

```diff
-     var Ez = bz(38060),
-       nz = bz(36553),
-       iz = bz(39231);
-     const lz = 4,
-       Mz = 4,
-       tz = 1,
-       Hz = 2,
-       Oz = 8,
-       pz = 65536,
-       dz = pz >> 3,
-       Fz = 14,
-       Zz = 65537,
-       Rz = 1 << Fz,
-       Kz = Rz - 1,
-       wz = 59,
-       Xz = 63,
- ... (141 more removed lines; see GitHub link above)
+     var Yq = gq(38653);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L168-L170` → after: `L11-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/305.js#L11-L23) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/305.js#L168-L170)

```diff
-       for (let uz = 1; uz < zz.length; uz++) {
-         const bz = zz[uz - 1] + zz[uz] - 128;
-         zz[uz] = bz
+       let Eq = 0;
+       return {
+         id_length: qq[Eq++],
+         colormap_type: qq[Eq++],
+         image_type: qq[Eq++],
+         colormap_index: qq[Eq++] | qq[Eq++] << 8,
+         colormap_length: qq[Eq++] | qq[Eq++] << 8,
+         colormap_size: qq[Eq++],
+         origin: [qq[Eq++] | qq[Eq++] << 8, qq[Eq++] | qq[Eq++] << 8],
+         width: qq[Eq++] | qq[Eq++] << 8,
+         height: qq[Eq++] | qq[Eq++] << 8,
+         pixel_size: qq[Eq++],
+         flags: qq[17]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L175-L207` → after: `L28-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L28-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/305.js#L28-L49) · [Before (L175-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/305.js#L175-L207)

```diff
-       let bz = 0,
-         Ez = Math.floor((zz.length + 1) / 2),
-         nz = 0;
-       const iz = zz.length - 1;
-       for (; !(nz > iz) && (uz[nz++] = zz[bz++], !(nz > iz));) uz[nz++] = zz[Ez++]
-     }! function(zz) {
-       zz[zz.NO_COMPRESSION = 0] = "NO_COMPRESSION", zz[zz.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", zz[zz.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", zz[zz.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", zz[zz.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", zz[zz.PXR24_COMPRESSION = 5] = "PX … [truncated]
-     }(sz || (sz = {})),
-     function(zz) {
-       zz[zz.INCREASING_Y = 0] = "INCREASING_Y", zz[zz.DECREASING_Y = 1] = "DECREASING_Y"
-     }(rz || (rz = {}));
-     const qz = 20000630;
- 
-     function hz(zz, uz) {
-       if (zz.getUint32(0, !0) != qz) throw new Error("Incorrect OpenEXR format");
-       const bz = zz.getUint8(4),
- ... (17 more removed lines; see GitHub link above)
+       if (Eq.length < 19) return void Yq.b.Error("Unable to load TGA file - Not enough data to contain header");
+       let gq = 18;
+       const Oq = lq(Eq);
+       if (Oq.id_length + gq > Eq.length) return void Yq.b.Error("Unable to load TGA file - Not enough data");
+       gq += Oq.id_length;
+       let xq, Aq = !1,
+         cq = !1,
+         uq = !1;
+       switch (Oq.image_type) {
+         case 9:
+           Aq = !0;
+         case 1:
+           cq = !0;
+           break;
+         case 10:
+           Aq = !0;
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L209-L213` → after: `L51-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L51-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/305.js#L51-L81) · [Before (L209-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/305.js#L209-L213)

```diff
-       if (0 != (-5 & nz)) throw new Error("Unsupported file format");
-       return {
-         version: bz,
-         spec: iz,
-         ...lz
+       const Bq = Oq.pixel_size >> 3,
+         Wq = Oq.width * Oq.height * Bq;
+       let Nq, aq, Vq, dq, jq, Hq, oq;
+       if (cq && (Nq = Eq.subarray(gq, gq += Oq.colormap_length * (Oq.colormap_size >> 3))), Aq) {
+         let qq, Yq, lq;
+         xq = new Uint8Array(Wq);
+         let Oq = 0;
+         const mq = new Uint8Array(Bq);
+         for (; gq < Wq && Oq < Wq;)
+           if (qq = Eq[gq++], Yq = 1 + (127 & qq), 128 & qq) {
+             for (lq = 0; lq < Bq; ++lq) mq[lq] = Eq[gq++];
+             for (lq = 0; lq < Yq; ++lq) xq.set(mq, Oq + lq * Bq);
+             Oq += Bq * Yq
+           } else {
+             for (Yq *= Bq, lq = 0; lq < Yq; ++lq) xq[Oq + lq] = Eq[gq++];
+             Oq += Yq
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L216-L224` → after: `L87-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L87-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/305.js#L87-L155) · [Before (L216-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/305.js#L216-L224)

```diff
-     const Uz = 32768,
-       cz = 65535;
- 
-     function gz(zz, uz, bz, Ez, nz) {
-       for (; bz < zz;) uz = uz << 8 | Az(Ez, nz), bz += 8;
-       return {
-         l: uz >> (bz -= zz) & (1 << zz) - 1,
-         c: uz,
-         lc: bz
+     const mq = {
+       GetTGAHeader: lq,
+       UploadContent: Oq,
+       _getImageData8bits: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
+         const cq = gq,
+           uq = Eq,
+           Bq = qq.width,
+           Wq = qq.height;
+         let Nq, aq, Vq, dq = 0;
+         const jq = new Uint8Array(Bq * Wq * 4);
+         for (Vq = Yq; Vq !== Oq; Vq += lq)
+           for (aq = mq; aq !== Aq; aq += xq, dq++) Nq = cq[dq], jq[4 * (aq + Bq * Vq) + 3] = 255, jq[4 * (aq + Bq * Vq) + 2] = uq[3 * Nq + 0], jq[4 * (aq + Bq * Vq) + 1] = uq[3 * Nq + 1], jq[4 * (aq + Bq * Vq) + 0] = uq[3 * Nq + 2];
+         return jq
+       },
+       _getImageData16bits: function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
+         const cq = gq,
+ ... (53 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L226-L720` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/305.js#L157) · [Before (L226-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/305.js#L226-L720)

```diff
-     }
- 
-     function Sz(zz, uz, bz, Ez) {
-       return {
-         c: zz = zz << 8 | Az(bz, Ez),
-         lc: uz += 8
-       }
-     }
- 
-     function yz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
-       if (zz == uz) {
-         if (Ez < 8) {
-           const zz = Sz(bz, Ez, nz, iz);
-           bz = zz.c, Ez = zz.lc
-         }
-         let zz = bz >> (Ez -= 8);
- ... (479 more removed lines; see GitHub link above)
+     };
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L725-L726` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/305.js#L162-L163) · [Before (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/305.js#L725-L726)

```diff
-       loadCubeData(zz, uz, bz, Ez, nz) {
-         throw ".exr not supported in Cube."
+       loadCubeData() {
+         throw ".env not supported in Cube."
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L729-L743` → after: `L166-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/305.js#L166-L169) · [Before (L729-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/305.js#L729-L743)

```diff
-         const nz = new DataView(zz.buffer),
-           iz = {
-             value: 0
-           },
-           lz = hz(nz, iz);
-         tu(lz, nz, iz, Mu.DefaultOutputType).then((zz => {
-           Hu(zz, lz, nz, iz);
-           const Ez = lz.dataWindow.xMax - lz.dataWindow.xMin + 1,
-             Mz = lz.dataWindow.yMax - lz.dataWindow.yMin + 1;
-           bz(Ez, Mz, uz.generateMipMaps, !1, (() => {
-             const bz = uz.uR();
-             uz.format = lz.format, uz.type = zz.textureType, uz.invertY = !1, uz._gammaSpace = !lz.linearSpace, zz.byteArray && bz._uploadDataToTextureDirectly(uz, zz.byteArray, 0, 0, void 0, !0)
-           }))
-         })).catch((zz => {
-           Ez.e.Error("Failed to load EXR texture: ", zz)
+         const Yq = new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength),
+           mq = lq(Yq);
+         gq(mq.width, mq.height, Eq.generateMipMaps, !1, (() => {
+           Oq(Eq, Yq)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/306.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/306.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/306.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/306.js#L4-L6)

```diff
-   41217: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
+   41623: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       ReadExrDataAsync: () => BE,
+       _ExrTextureLoader: () => uE
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L8-L104` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/306.js#L9-L771) · [Before (L8-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/306.js#L8-L104)

```diff
-     var Ez = bz(39033);
-     const nz = "bumpVertex",
-       iz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41136: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "bumpVertexDeclaration",
-       iz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
- ... (81 more removed lines; see GitHub link above)
+     var Yq = gq(38653),
+       lq = gq(37158),
+       Oq = gq(39819);
+     const mq = 4,
+       xq = 4,
+       Aq = 1,
+       cq = 2,
+       uq = 8,
+       Bq = 65536,
+       Wq = Bq >> 3,
+       Nq = 14,
+       aq = 65537,
+       Vq = 1 << Nq,
+       dq = Vq - 1,
+       jq = 59,
+       Hq = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/307.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/307.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710)

#### 1. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L4)

```diff
-   41198: (zz, uz, bz) => {
+   41792: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L6)

```diff
-       c: () => lz
+       d: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "bakedVertexAnimation",
-       iz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpVertex",
+       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L17)

```diff
-   41117: (zz, uz, bz) => {
+   41709: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L19)

```diff
-       b: () => lz
+       e: () => mq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "bakedVertexAnimationDeclaration",
-       iz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpVertexDeclaration",
+       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L30)

```diff
-   41114: (zz, uz, bz) => {
+   41657: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L32)

```diff
-       c: () => lz
+       b: () => mq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L34-L37` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L34-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L34-L37)

```diff
-     var Ez = bz(39033);
-     const nz = "bonesDeclaration",
-       iz = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     gq(41642), gq(41651);
+     const lq = "defaultUboDeclaration",
+       Oq = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L43-L45` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L44-L46) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L43-L45)

```diff
-   41195: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
+   41625: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       defaultVertexShader: () => Kq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L47-L50` → after: `L48-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L48-L52) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L47-L50)

```diff
-     var Ez = bz(39033);
-     const nz = "bonesVertex",
-       iz = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617),
+       lq = gq(41634);
+     const Oq = "defaultVertexDeclaration",
+       mq = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     Yq.d.IncludesShadersStore[Oq] || (Yq.d.IncludesShadersStore[Oq] = mq);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L54-L63` → after: `L56-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L56-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L56-L91) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L54-L63)

```diff
-     }
-   },
-   41226: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "clipPlaneVertex",
-       iz = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     };
+     var Aq = gq(41642),
+       cq = gq(41651),
+       uq = gq(41657),
+       Bq = gq(41661),
+       Wq = gq(41670),
+       Nq = gq(41673),
+       aq = gq(41678),
+       Vq = gq(41683),
+       dq = gq(41692),
+       jq = gq(41698),
+       Hq = gq(41706),
+       oq = gq(41709),
+       Pq = gq(41715),
+       Qq = gq(41722),
+       yq = gq(41724),
+ ... (20 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L67-L401` → after: `L95-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L95-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/307.js#L95-L101) · [Before (L67-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/307.js#L67-L401)

```diff
-     }
-   },
-   41141: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "clipPlaneVertexDeclaration",
-       iz = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41087: (zz, uz, bz) => {
- ... (319 more removed lines; see GitHub link above)
+     };
+     var Fq = gq(41811);
+     const sq = "defaultVertexShader",
+       Xq = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uv … [truncated]
+     Yq.d.ShadersStore[sq] || (Yq.d.ShadersStore[sq] = Xq);
+     const wq = [lq.c, xq, Aq.d, cq.c, uq.b, Bq.c, Wq.c, Nq.c, aq.c, Vq.e, dq.e, jq.c, Hq.d, oq.e, Pq.b, Qq.e, yq.d, tq.d, rq.c, vq.d, hq.d, nq.d, bq.c, iq.b, Zq.e, fq.d, Mq.e, Tq.e, zq.b, Sq.d, pq.b, Gq.d, Lq.d, Jq.b, Uq, Fq.b];
+     for (const Cq of wq) Yq.d.IncludesShadersStore[Cq.name] || (Yq.d.IncludesShadersStore[Cq.name] = Cq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/308.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/308.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L4` → after: `L4-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L4-L56) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L4)

```diff
-   41271: (zz, uz, bz) => {
+   41772: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "bakedVertexAnimation",
+       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41678: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+ ... (37 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L8-L11` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L60-L63) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "decalFragmentDeclaration",
-       iz = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneVertex",
+       Oq = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L17` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L69) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L17)

```diff
-   41400: (zz, uz, bz) => {
+   41715: (qq, Eq, gq) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L21-L24` → after: `L73-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L73-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L73-L128) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "depthPrePass",
-       iz = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneVertexDeclaration",
+       Oq = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41634: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "decalVertexDeclaration",
+       Oq = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
+ ... (40 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L30` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L134) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L30)

```diff
-   41296: (zz, uz, bz) => {
+   41683: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L34-L37` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L138-L141) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L34-L37)

```diff
-     var Ez = bz(39033);
-     const nz = "lightFragmentDeclaration",
-       iz = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "instancesDeclaration",
+       Oq = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L43` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L147) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L43)

```diff
-   41301: (zz, uz, bz) => {
+   41761: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L47-L50` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L151-L154) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L47-L50)

```diff
-     var Ez = bz(39033);
-     const nz = "lightUboDeclaration",
-       iz = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "instancesVertex",
+       Oq = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L56` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L160) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L56)

```diff
-   41305: (zz, uz, bz) => {
+   41724: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L58` → after: `L162-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L162-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L162-L201) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L58)

```diff
-       c: () => lz
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "lightVxFragmentDeclaration",
+       Oq = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41730: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+ ... (24 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L60-L63` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L203-L206) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L60-L63)

```diff
-     var Ez = bz(39033);
-     const nz = "ltcHelperFunctions",
-       iz = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "logDepthVertex",
+       Oq = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L69` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L212) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L69)

```diff
-   41132: (zz, uz, bz) => {
+   41698: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L73` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L216) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L73)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L76` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L219) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L76)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L82` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L225) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L82)

```diff
-   41098: (zz, uz, bz) => {
+   41651: (qq, Eq, gq) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L84` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L227) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L84)

```diff
-       e: () => lz
+       c: () => mq
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L86` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L229) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L86)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L89` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L232) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L89)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L95` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L238) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L95)

```diff
-   41291: (zz, uz, bz) => {
+   41756: (qq, Eq, gq) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L97` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L240) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L97)

```diff
-       e: () => lz
+       c: () => mq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L99-L102` → after: `L242-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L242-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L242-L245) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L99-L102)

```diff
-     var Ez = bz(39033);
-     const nz = "oitDeclaration",
-       iz = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "morphTargetsVertex",
+       Oq = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L108` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L251) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L108)

```diff
-   41411: (zz, uz, bz) => {
+   41738: (qq, Eq, gq) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L110` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L253) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L110)

```diff
-       e: () => lz
+       d: () => mq
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L112-L115` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L255-L258) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L112-L115)

```diff
-     var Ez = bz(39033);
-     const nz = "oitFragment",
-       iz = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "morphTargetsVertexDeclaration",
+       Oq = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L121` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L264) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L121)

```diff
-   41330: (zz, uz, bz) => {
+   41754: (qq, Eq, gq) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L125-L128` → after: `L268-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L268-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L268-L297) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L125-L128)

```diff
-     var Ez = bz(39033);
-     const nz = "reflectionFunction",
-       iz = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "morphTargetsVertexGlobal",
+       Oq = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nfloat vertexID;\n#endif\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41735: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "morphTargetsVertexGlobalDeclaration",
+       Oq = "#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector … [truncated]
+ ... (14 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L134` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L303) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L134)

```diff
-   41322: (zz, uz, bz) => {
+   41692: (qq, Eq, gq) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L138-L141` → after: `L307-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L307-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L307-L323) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L138-L141)

```diff
-     var Ez = bz(39033);
-     const nz = "samplerFragmentDeclaration",
-       iz = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "prePassVertexDeclaration",
+       Oq = "#ifdef PREPASS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vec3 vPosition;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vec3 vViewPos;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying float vNormViewDepth;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41706: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "samplerVertexDeclaration",
+       Oq = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying vec2 v_VARYINGNAME_UV;\n#endif\n";
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L147` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L329) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L147)

```diff
-   41095: (zz, uz, bz) => {
+   41789: (qq, Eq, gq) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L151` → after: `L333-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L333-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L333-L346) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L151)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
+     const lq = "samplerVertexImplementation",
+       Oq = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (v_INFONAME_==0.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));}\n#ifdef UV2\nelse if (v_INFONAME_==1.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2Updated,1.0,0.0));}\n#endif\n#ifd … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41642: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L154` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L349) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L154)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L160` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L355) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L160)

```diff
-   41314: (zz, uz, bz) => {
+   41803: (qq, Eq, gq) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L164-L167` → after: `L359-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L359-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L359-L375) · [Before (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L164-L167)

```diff
-     var Ez = bz(39033);
-     const nz = "shadowsFragmentFunctions",
-       iz = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "shadowsVertex",
+       Oq = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\nvPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;\n#ifdef USE_REVERSE_DEPTHBUFFER\nvDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{ … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41661: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "uvAttributeDeclaration",
+       Oq = "#ifdef UV{X}\nattribute vec2 uv{X};\n#endif\n";
+ ... (1 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L173` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L381) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L173)

```diff
-   41347: (zz, uz, bz) => {
+   41784: (qq, Eq, gq) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L177-L180` → after: `L385-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L385-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/308.js#L385-L401) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/308.js#L177-L180)

```diff
-     var Ez = bz(39033);
-     const nz = "textureRepetitionFunctions",
-       iz = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "uvVariableDeclaration",
+       Oq = "#if !defined(UV{X}) && defined(MAINUV{X})\nvec2 uv{X}=vec2(0.,0.);\n#endif\n#ifdef MAINUV{X}\nvMainUV{X}=uv{X};\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41805: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "vertexColorMixing",
+       Oq = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/309.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/309.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L4-L17` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L4) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L4-L17)

```diff
-   41386: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "bumpFragment",
-       iz = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41363: (zz, uz, bz) => {
+   41815: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L21-L38` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L8-L11) · [Before (L21-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L21-L38)

```diff
-     var Ez = bz(39033);
-     bz(41322);
-     const nz = "bumpFragmentFunctions",
-       iz = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41355: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "bumpFragmentMainFunctions",
- ... (2 more removed lines; see GitHub link above)
+     var Yq = gq(39617);
+     const lq = "decalFragmentDeclaration",
+       Oq = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L44` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L17) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L44)

```diff
-   41380: (zz, uz, bz) => {
+   41941: (qq, Eq, gq) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L48-L51` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L21-L24) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L48-L51)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneFragment",
-       iz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "depthPrePass",
+       Oq = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L57` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L30) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L57)

```diff
-   41367: (zz, uz, bz) => {
+   41843: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L59-L85` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L32) · [Before (L59-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L59-L85)

```diff
-       c: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "clipPlaneFragmentDeclaration",
-       iz = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41112: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
-     });
-     var Ez = bz(39033);
- ... (11 more removed lines; see GitHub link above)
+       e: () => mq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L87-L90` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L34-L37) · [Before (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L87-L90)

```diff
-     var Ez = bz(39033);
-     const nz = "objectIdFunctions",
-       iz = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "lightFragmentDeclaration",
+       Oq = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L96` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L43) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L96)

```diff
-   60918: (zz, uz, bz) => {
+   41852: (qq, Eq, gq) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L100-L103` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L47-L50) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L100-L103)

```diff
-     var Ez = bz(39033);
-     const nz = "openpbrDielectricReflectance",
-       iz = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "lightUboDeclaration",
+       Oq = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L109-L122` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L56) · [Before (L109-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L109-L122)

```diff
-   60925: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "openpbrGeometryInfo",
-       iz = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   60931: (zz, uz, bz) => {
+   41856: (qq, Eq, gq) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L126-L129` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L60-L63) · [Before (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L126-L129)

```diff
-     var Ez = bz(39033);
-     const nz = "openpbrIblFunctions",
-       iz = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "ltcHelperFunctions",
+       Oq = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L135` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L69) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L135)

```diff
-   60945: (zz, uz, bz) => {
+   41698: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L139-L142` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L73-L76) · [Before (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L139-L142)

```diff
-     var Ez = bz(39033);
-     const nz = "openpbrSubsurfaceLayerData",
-       iz = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "mainUVVaryingDeclaration",
+       Oq = "#ifdef MAINUV{X}\nvarying vec2 vMainUV{X};\n#endif\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L148` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L82) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L148)

```diff
-   60939: (zz, uz, bz) => {
+   41651: (qq, Eq, gq) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L150-L163` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L84) · [Before (L150-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L150-L163)

```diff
-       d: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "openpbrTransmissionLayerData",
-       iz = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   60684: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
+       c: () => mq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L165-L168` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L86-L89) · [Before (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L165-L168)

```diff
-     var Ez = bz(39033);
-     const nz = "pbrBRDFFunctions",
-       iz = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "meshUboDeclaration",
+       Oq = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L174` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L95) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L174)

```diff
-   60704: (zz, uz, bz) => {
+   41837: (qq, Eq, gq) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L178-L181` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L99-L102) · [Before (L178-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L178-L181)

```diff
-     var Ez = bz(39033);
-     const nz = "pbrFragmentReflectionDeclaration",
-       iz = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "oitDeclaration",
+       Oq = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L187` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L108) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L187)

```diff
-   60756: (zz, uz, bz) => {
+   41959: (qq, Eq, gq) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L191-L194` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L112-L115) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L191-L194)

```diff
-     var Ez = bz(39033);
-     const nz = "pbrIBLFunctions",
-       iz = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "oitFragment",
+       Oq = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L200` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L121) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L200)

```diff
-   41330: (zz, uz, bz) => {
+   41877: (qq, Eq, gq) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L202` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L123) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L202)

```diff
-       d: () => lz
+       c: () => mq
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L204` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L125) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L204)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L207` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L128) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L207)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L213` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L134) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L213)

```diff
-   41322: (zz, uz, bz) => {
+   41869: (qq, Eq, gq) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L215` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L136) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L215)

```diff
-       e: () => lz
+       b: () => mq
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L217` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L138) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L217)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L220` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L141) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L220)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L226` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L147) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L226)

```diff
-   60911: (zz, uz, bz) => {
+   41642: (qq, Eq, gq) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L228` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L149) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L228)

```diff
-       b: () => lz
+       d: () => mq
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L230-L233` → after: `L151-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L151-L154) · [Before (L230-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L230-L233)

```diff
-     var Ez = bz(39033);
-     const nz = "sceneFragmentDeclaration",
-       iz = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "sceneUboDeclaration",
+       Oq = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L239` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L160) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L239)

```diff
-   41095: (zz, uz, bz) => {
+   41864: (qq, Eq, gq) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L241` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L162) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L241)

```diff
-       b: () => lz
+       d: () => mq
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L243-L246` → after: `L164-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L164-L167) · [Before (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L243-L246)

```diff
-     var Ez = bz(39033);
-     const nz = "sceneUboDeclaration",
-       iz = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "shadowsFragmentFunctions",
+       Oq = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L252-L254` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L173-L175) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L252-L254)

```diff
-   61004: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       geometryPixelShader: () => Lz
+   41891: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L256-L287` → after: `L177-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/309.js#L177-L180) · [Before (L256-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/309.js#L256-L287)

```diff
-     var Ez = bz(39033),
-       nz = bz(41277),
-       iz = bz(41367);
-     const lz = "mrtFragmentDeclaration",
-       Mz = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     Ez.e.IncludesShadersStore[lz] || (Ez.e.IncludesShadersStore[lz] = Mz);
-     const tz = {
-       name: lz,
-       shader: Mz
-     };
-     var Hz = bz(41355),
-       Oz = bz(41322),
-       pz = bz(41363),
-       dz = bz(41112),
-       Fz = bz(60704),
-       Zz = bz(60911),
- ... (16 more removed lines; see GitHub link above)
+     var Yq = gq(39617);
+     const lq = "textureRepetitionFunctions",
+       Oq = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/310.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/310.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L4)

```diff
-   41198: (zz, uz, bz) => {
+   41926: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L6)

```diff
-       c: () => lz
+       e: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "bakedVertexAnimation",
-       iz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpFragment",
+       Oq = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L17)

```diff
-   41117: (zz, uz, bz) => {
+   41901: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L19` → after: `L19-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L19-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L19-L33) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L19)

```diff
-       b: () => lz
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     gq(41869);
+     const lq = "bumpFragmentFunctions",
+       Oq = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41894: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L21-L24` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L35-L38) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "bakedVertexAnimationDeclaration",
-       iz = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "bumpFragmentMainFunctions",
+       Oq = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L30` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L44) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L30)

```diff
-   41114: (zz, uz, bz) => {
+   41921: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L34-L37` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L48-L51) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L34-L37)

```diff
-     var Ez = bz(39033);
-     const nz = "bonesDeclaration",
-       iz = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneFragment",
+       Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L43` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L57) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L43)

```diff
-   41195: (zz, uz, bz) => {
+   41905: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L45` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L59) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L45)

```diff
-       b: () => lz
+       d: () => mq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L47-L50` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L61-L64) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L47-L50)

```diff
-     var Ez = bz(39033);
-     const nz = "bonesVertex",
-       iz = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "clipPlaneFragmentDeclaration",
+       Oq = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L56` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L70) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L56)

```diff
-   41217: (zz, uz, bz) => {
+   41670: (qq, Eq, gq) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L58` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L72) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L58)

```diff
-       b: () => lz
+       c: () => mq
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L60-L63` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L74-L77) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L60-L63)

```diff
-     var Ez = bz(39033);
-     const nz = "bumpVertex",
-       iz = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "helperFunctions",
+       Oq = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L69` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L83) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L69)

```diff
-   41226: (zz, uz, bz) => {
+   41823: (qq, Eq, gq) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L71` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L85) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L71)

```diff
-       d: () => lz
+       e: () => mq
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L73-L76` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L87-L90) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L73-L76)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneVertex",
-       iz = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "objectIdFunctions",
+       Oq = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L82` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L96) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L82)

```diff
-   41141: (zz, uz, bz) => {
+   61716: (qq, Eq, gq) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L86-L89` → after: `L100-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L100-L103) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L86-L89)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneVertexDeclaration",
-       iz = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "openpbrDielectricReflectance",
+       Oq = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L95` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L109) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L95)

```diff
-   60687: (zz, uz, bz) => {
+   61721: (qq, Eq, gq) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L99-L102` → after: `L113-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L113-L116) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L99-L102)

```diff
-     var Ez = bz(39033);
-     const nz = "harmonicsFunctions",
-       iz = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "openpbrGeometryInfo",
+       Oq = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L108` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L122) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L108)

```diff
-   41126: (zz, uz, bz) => {
+   61728: (qq, Eq, gq) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L110` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L124) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L110)

```diff
-       c: () => lz
+       d: () => mq
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L112-L115` → after: `L126-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L126-L129) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L112-L115)

```diff
-     var Ez = bz(39033);
-     const nz = "instancesDeclaration",
-       iz = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "openpbrIblFunctions",
+       Oq = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L121` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L135) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L121)

```diff
-   41187: (zz, uz, bz) => {
+   61735: (qq, Eq, gq) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L123` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L137) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L123)

```diff
-       b: () => lz
+       d: () => mq
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L125-L128` → after: `L139-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L139-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L139-L142) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L125-L128)

```diff
-     var Ez = bz(39033);
-     const nz = "instancesVertex",
-       iz = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "openpbrSubsurfaceLayerData",
+       Oq = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L134` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L148) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L134)

```diff
-   41185: (zz, uz, bz) => {
+   61730: (qq, Eq, gq) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L138-L141` → after: `L152-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L152-L155) · [Before (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L138-L141)

```diff
-     var Ez = bz(39033);
-     const nz = "morphTargetsVertex",
-       iz = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;\n#ifdef MORPHTARGETS_POSITION\npositionUpdated+=(readVector3FromRawSa … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "openpbrTransmissionLayerData",
+       Oq = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L147` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L161) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L147)

```diff
-   41165: (zz, uz, bz) => {
+   61509: (qq, Eq, gq) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L149` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L163) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L149)

```diff
-       b: () => lz
+       d: () => mq
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L151-L154` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L165-L168) · [Before (L151-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L151-L154)

```diff
-     var Ez = bz(39033);
-     const nz = "morphTargetsVertexDeclaration",
-       iz = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "pbrBRDFFunctions",
+       Oq = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L160` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L174) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L160)

```diff
-   41180: (zz, uz, bz) => {
+   61530: (qq, Eq, gq) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L162` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L176) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L162)

```diff
-       b: () => lz
+       d: () => mq
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L164-L167` → after: `L178-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L178-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L178-L181) · [Before (L164-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L164-L167)

```diff
-     var Ez = bz(39033);
-     const nz = "morphTargetsVertexGlobal",
-       iz = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nfloat vertexID;\n#endif\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "pbrFragmentReflectionDeclaration",
+       Oq = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L173` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L187) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L173)

```diff
-   41158: (zz, uz, bz) => {
+   61570: (qq, Eq, gq) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L175` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L189) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L175)

```diff
-       b: () => lz
+       d: () => mq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L177-L180` → after: `L191-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L191-L194) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L177-L180)

```diff
-     var Ez = bz(39033);
-     const nz = "morphTargetsVertexGlobalDeclaration",
-       iz = "#ifdef MORPHTARGETS\nuniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];\n#ifdef MORPHTARGETS_TEXTURE \nuniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "pbrIBLFunctions",
+       Oq = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L186` → after: `L200-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L200-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L200-L213) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L186)

```diff
-   41095: (zz, uz, bz) => {
+   41877: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "reflectionFunction",
+       Oq = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41869: (qq, Eq, gq) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L190-L193` → after: `L217-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L217-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L217-L220) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L190-L193)

```diff
-     var Ez = bz(39033);
-     const nz = "sceneUboDeclaration",
-       iz = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "samplerFragmentDeclaration",
+       Oq = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L199-L201` → after: `L226-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L226-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L226-L228) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L199-L201)

```diff
-   60998: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       geometryVertexShader: () => Tz
+   61711: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => mq
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L203-L211` → after: `L230-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L230-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L230-L233) · [Before (L203-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L203-L211)

```diff
-     var Ez = bz(39033),
-       nz = bz(41114),
-       iz = bz(41117),
-       lz = bz(41158),
-       Mz = bz(41165),
-       tz = bz(41126);
-     const Hz = "geometryVertexDeclaration",
-       Oz = "uniform mat4 viewProjection;uniform mat4 view;";
-     Ez.e.IncludesShadersStore[Hz] || (Ez.e.IncludesShadersStore[Hz] = Oz);
+     var Yq = gq(39617);
+     const lq = "sceneFragmentDeclaration",
+       Oq = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L215-L219` → after: `L237-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L237-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L237-L261) · [Before (L215-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L215-L219)

```diff
-     };
-     var dz = bz(41095);
-     const Fz = "geometryUboDeclaration",
-       Zz = "#include<sceneUboDeclaration>\n";
-     Ez.e.IncludesShadersStore[Fz] || (Ez.e.IncludesShadersStore[Fz] = Zz);
+     }
+   },
+   41642: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "sceneUboDeclaration",
+       Oq = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   61799: (qq, Eq, gq) => {
+ ... (9 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L224-L237` → after: `L266-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L266-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/310.js#L266-L287) · [Before (L224-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/310.js#L224-L237)

```diff
-     var Kz = bz(41141),
-       wz = bz(60687),
-       Xz = bz(41180),
-       fz = bz(41185),
-       sz = bz(41187),
-       rz = bz(41195),
-       oz = bz(41198),
-       Nz = bz(41226),
-       vz = bz(41217);
-     const xz = "geometryVertexShader",
-       Jz = "precision highp float;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<__decl__geom … [truncated]
-     Ez.e.ShadersStore[xz] || (Ez.e.ShadersStore[xz] = Jz);
-     const Az = [nz.c, iz.b, lz.b, Mz.b, tz.c, pz, dz.b, Rz, Kz.c, wz.e, Xz.b, fz.c, sz.b, rz.b, oz.c, Nz.d, vz.b];
-     for (const Lz of Az) Ez.e.IncludesShadersStore[Lz.name] || (Ez.e.IncludesShadersStore[Lz.name] = Lz.shader);
+     var cq = gq(41894),
+       uq = gq(41869),
+       Bq = gq(41901),
+       Wq = gq(41670),
+       Nq = gq(61530),
+       aq = gq(61711),
+       Vq = gq(41642),
+       dq = gq(61509),
+       jq = gq(61716),
+       Hq = gq(61570),
+       oq = gq(41877),
+       Pq = gq(61721),
+       Qq = gq(61728),
+       yq = gq(41921),
+       tq = gq(41926),
+       rq = gq(61735),
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/311.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/311.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L4-L18` → after: `L4-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/311.js#L4-L199) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/311.js#L4-L18)

```diff
-   41104: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
-     });
-     var Ez = bz(39033);
-     bz(41095), bz(41098);
-     const nz = "defaultUboDeclaration",
-       iz = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41268: (zz, uz, bz) => {
+   41772: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => mq
+     });
+     var Yq = gq(39617);
+     const lq = "bakedVertexAnimation",
+       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     const mq = {
+       name: lq,
+       shader: Oq
+     }
+   },
+   41678: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => mq
+ ... (180 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L20-L26` → after: `L201-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L201-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/311.js#L201-L211) · [Before (L20-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/311.js#L20-L26)

```diff
-       defaultPixelShader: () => kz
-     });
-     var Ez = bz(39033),
-       nz = bz(41271);
-     const iz = "defaultFragmentDeclaration",
-       lz = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
-     Ez.e.IncludesShadersStore[iz] || (Ez.e.IncludesShadersStore[iz] = lz);
+       geometryVertexShader: () => bq
+     });
+     var Yq = gq(39617),
+       lq = gq(41673),
+       Oq = gq(41678),
+       mq = gq(41735),
+       xq = gq(41738),
+       Aq = gq(41683);
+     const cq = "geometryVertexDeclaration",
+       uq = "uniform mat4 viewProjection;uniform mat4 view;";
+     Yq.d.IncludesShadersStore[cq] || (Yq.d.IncludesShadersStore[cq] = uq);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L31-L45` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/311.js#L216-L219) · [Before (L31-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/311.js#L31-L45)

```diff
-     var tz = bz(41095),
-       Hz = bz(41098),
-       Oz = bz(41104),
-       pz = bz(41277),
-       dz = bz(41284),
-       Fz = bz(41291),
-       Zz = bz(41132),
-       Rz = bz(41112),
-       Kz = bz(41296),
-       wz = bz(41301),
-       Xz = bz(41305),
-       fz = bz(41308);
-     const sz = "lightsFragmentFunctions",
-       rz = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
-     Ez.e.IncludesShadersStore[sz] || (Ez.e.IncludesShadersStore[sz] = rz);
+     var Wq = gq(41642);
+     const Nq = "geometryUboDeclaration",
+       aq = "#include<sceneUboDeclaration>\n";
+     Yq.d.IncludesShadersStore[Nq] || (Yq.d.IncludesShadersStore[Nq] = aq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L50-L87` → after: `L224-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L224-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/311.js#L224-L237) · [Before (L50-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/311.js#L50-L87)

```diff
-     var Nz = bz(41314),
-       vz = bz(41322);
-     const xz = "fresnelFunction",
-       Jz = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     Ez.e.IncludesShadersStore[xz] || (Ez.e.IncludesShadersStore[xz] = Jz);
-     const Az = {
-       name: xz,
-       shader: Jz
-     };
-     var Tz = bz(41330),
-       Lz = bz(41332),
-       Pz = bz(41338),
-       Gz = bz(41347),
-       az = bz(41355),
-       Vz = bz(41363),
-       mz = bz(41367),
- ... (22 more removed lines; see GitHub link above)
+     var dq = gq(41715),
+       jq = gq(61516),
+       Hq = gq(41754),
+       oq = gq(41756),
+       Pq = gq(41761),
+       Qq = gq(41763),
+       yq = gq(41772),
+       tq = gq(41798),
+       rq = gq(41792);
+     const vq = "geometryVertexShader",
+       hq = "precision highp float;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<__decl__geom … [truncated]
+     Yq.d.ShadersStore[vq] || (Yq.d.ShadersStore[vq] = hq);
+     const nq = [lq.c, Oq.c, mq.c, xq.d, Aq.e, Bq, Wq.d, Vq, dq.b, jq.e, Hq.d, oq.c, Pq.b, Qq.e, yq.d, tq.b, rq.d];
+     for (const iq of nq) Yq.d.IncludesShadersStore[iq.name] || (Yq.d.IncludesShadersStore[iq.name] = iq.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/312.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/312.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/312.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/312.js#L4)

```diff
-   41380: (zz, uz, bz) => {
+   41657: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/312.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/312.js#L6)

```diff
-       e: () => lz
+       b: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/312.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/312.js#L8-L11)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneFragment",
-       iz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     gq(41642), gq(41651);
+     const lq = "defaultUboDeclaration",
+       Oq = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L17-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/312.js#L18-L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/312.js#L17-L19)

```diff
-   41367: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
+   41813: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       defaultPixelShader: () => Dq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L21-L24` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/312.js#L22-L26) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/312.js#L21-L24)

```diff
-     var Ez = bz(39033);
-     const nz = "clipPlaneFragmentDeclaration",
-       iz = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617),
+       lq = gq(41815);
+     const Oq = "defaultFragmentDeclaration",
+       mq = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     Yq.d.IncludesShadersStore[Oq] || (Yq.d.IncludesShadersStore[Oq] = mq);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L28-L37` → after: `L30-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/312.js#L30-L45) · [Before (L28-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/312.js#L28-L37)

```diff
-     }
-   },
-   41407: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "fogFragment",
-       iz = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     };
+     var Aq = gq(41642),
+       cq = gq(41651),
+       uq = gq(41657),
+       Bq = gq(41823),
+       Wq = gq(41831),
+       Nq = gq(41837),
+       aq = gq(41698),
+       Vq = gq(41670),
+       dq = gq(41843),
+       jq = gq(41852),
+       Hq = gq(41856),
+       oq = gq(41862);
+     const Pq = "lightsFragmentFunctions",
+       Qq = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
+     Yq.d.IncludesShadersStore[Pq] || (Yq.d.IncludesShadersStore[Pq] = Qq);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L41-L50` → after: `L49-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/312.js#L49-L54) · [Before (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/312.js#L41-L50)

```diff
-     }
-   },
-   41376: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "fogFragmentDeclaration",
-       iz = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     };
+     var tq = gq(41864),
+       rq = gq(41869);
+     const vq = "fresnelFunction",
+       hq = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     Yq.d.IncludesShadersStore[vq] || (Yq.d.IncludesShadersStore[vq] = hq);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L54-L63` → after: `L58-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/312.js#L58-L73) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/312.js#L54-L63)

```diff
-     }
-   },
-   41112: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "helperFunctions",
-       iz = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     };
+     var bq = gq(41877),
+       iq = gq(41880),
+       Zq = gq(41888),
+       fq = gq(41891),
+       Mq = gq(41894),
+       Tq = gq(41901),
+       zq = gq(41905),
+       Sq = gq(41747),
+       pq = gq(41912),
+       Gq = gq(41921),
+       Lq = gq(41926),
+       Jq = gq(41933);
+     const kq = "defaultFragmentAlpha",
+       Rq = "#ifdef OPACITY\nvec4 opacityMap=TEXRD(opacitySampler,vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*vOpacityInfos.y;\n#endif\n#en … [truncated]
+     Yq.d.IncludesShadersStore[kq] || (Yq.d.IncludesShadersStore[kq] = Rq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L67-L142` → after: `L77-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/312.js#L77-L87) · [Before (L67-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/312.js#L67-L142)

```diff
-     }
-   },
-   41332: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => lz
-     });
-     var Ez = bz(39033);
-     const nz = "imageProcessingDeclaration",
-       iz = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
-     const lz = {
-       name: nz,
-       shader: iz
-     }
-   },
-   41338: (zz, uz, bz) => {
- ... (60 more removed lines; see GitHub link above)
+     };
+     var Fq = gq(41941),
+       sq = gq(41943),
+       Xq = gq(41948),
+       wq = gq(41956),
+       Kq = gq(41959);
+     const Cq = "defaultPixelShader",
+       Iq = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
+     Yq.d.ShadersStore[Cq] || (Yq.d.ShadersStore[Cq] = Iq);
+     const eq = [lq.b, xq, Aq.d, cq.c, uq.b, Bq.e, Wq.b, Nq.c, aq.c, Vq.c, dq.e, jq.b, Hq.d, oq.b, yq, tq.d, rq.b, nq, bq.c, iq.d, Zq.d, fq.b, Mq.d, Tq.d, zq.d, Sq.d, pq.e, Gq.c, Lq.e, Jq.e, Uq, Fq.e, sq.c, Xq.d, wq.e, Kq.d];
+     for (const qE of eq) Yq.d.IncludesShadersStore[qE.name] || (Yq.d.IncludesShadersStore[qE.name] = qE.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/313.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/313.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207)

#### 1. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L4)

```diff
-   41380: (zz, uz, bz) => {
+   41921: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L6)

```diff
-       e: () => lz
+       c: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L8)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L11)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L17)

```diff
-   41367: (zz, uz, bz) => {
+   41905: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L19)

```diff
-       c: () => lz
+       d: () => mq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L21)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L24)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L30)

```diff
-   41407: (zz, uz, bz) => {
+   41956: (qq, Eq, gq) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L32)

```diff
-       b: () => lz
+       e: () => mq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L34)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L37)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L43)

```diff
-   41376: (zz, uz, bz) => {
+   41912: (qq, Eq, gq) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L45)

```diff
-       c: () => lz
+       e: () => mq
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L47)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L50)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L56)

```diff
-   41112: (zz, uz, bz) => {
+   41670: (qq, Eq, gq) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L60)

```diff
-     var Ez = bz(39033);
+     var Yq = gq(39617);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L63)

```diff
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L69)

```diff
-   41171: (zz, uz, bz) => {
+   41880: (qq, Eq, gq) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L73-L76)

```diff
-     var Ez = bz(39033);
-     const nz = "logDepthDeclaration",
-       iz = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     Ez.e.IncludesShadersStore[nz] || (Ez.e.IncludesShadersStore[nz] = iz);
+     var Yq = gq(39617);
+     const lq = "imageProcessingDeclaration",
+       Oq = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
+     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/313.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/313.js#L82)

```diff
-   41404: (zz, uz, bz) => {
+   41888: (qq, Eq, gq) => {
```
