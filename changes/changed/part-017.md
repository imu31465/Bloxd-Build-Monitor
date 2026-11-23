# Changed — Bundle Modifications Report (Part 017 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `17 / 50` (**288** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/303.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/303.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405)

#### 8. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L136-L137` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L549-L550) · [Before (L136-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L136-L137)

```diff
-         return Hq
-       }(qq, Eq)
+       }
+       return oC || new fC.c
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L140-L148` → after: `L553-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L553-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L553-L590) · [Before (L140-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L140-L148)

```diff
-     function cq(qq, Eq) {
-       let gq = Eq.height;
-       const Yq = Eq.width;
-       let lq, mq, xq, Aq, cq, uq = Eq.dataPosition;
-       const Bq = new ArrayBuffer(Eq.width * Eq.height * 4 * 3),
-         Wq = new Float32Array(Bq);
-       for (; gq > 0;) {
-         for (cq = 0; cq < Eq.width; cq++) lq = qq[uq++], mq = qq[uq++], xq = qq[uq++], Aq = qq[uq++], Oq(Wq, lq, mq, xq, Aq, (Eq.height - gq) * Yq * 3 + 3 * cq);
-         gq--
+     function JC(CC, zC, ZC, QC) {
+       if (!fC.c) return null;
+       const bC = [],
+         nC = !!(CC.activeCameras && CC.activeCameras.length > 1 && CC.cameraToUseForPointers !== CC.activeCamera),
+         oC = CC.cameraToUseForPointers || CC.activeCamera,
+         qC = FC.internalPickerForMesh || pC,
+         WC = qC === pC;
+       for (let fC = 0; fC < CC.meshes.length; fC++) {
+         const FC = CC.meshes[fC];
+         if (ZC) {
+           if (!ZC(FC, -1)) continue
+         } else if (!FC.isEnabled() || !FC.isVisible || !FC.tS) continue;
+         const NC = nC && FC.isWorldMatrixCameraDependent(),
+           MC = FC.computeWorldMatrix(NC, oC);
+         if (FC.hasThinInstances && FC.AzC) {
+           if (qC(null, zC, FC, MC, !0, !0, QC)) {
+ ... (22 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L152` → after: `L594-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L594-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L594-L920) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L152)

```diff
-     lq.FACE_LEFT = [new Yq.q(-1, -1, -1), new Yq.q(1, -1, -1), new Yq.q(-1, 1, -1), new Yq.q(1, 1, -1)], lq.FACE_RIGHT = [new Yq.q(1, -1, 1), new Yq.q(-1, -1, 1), new Yq.q(1, 1, 1), new Yq.q(-1, 1, 1)], lq.FACE_FRONT = [new Yq.q(1, -1, -1), new Yq.q(1, -1, 1), new Yq.q(1, 1, -1), … [truncated]
+ 
+     function IC(CC, zC, ZC, QC, bC, nC) {
+       if (!fC.c) return null;
+       const oC = xC(CC, (QC => (CC._tempPickingRay || (CC._tempPickingRay = WC.Zero()), MC(CC, zC, ZC, QC, CC._tempPickingRay, nC || null), CC._tempPickingRay)), QC, bC, !0);
+       return oC && (oC.ray = NC(CC, zC, ZC, wC.b.Identity(), nC || null)), oC
+     }
+ 
+     function iC(CC, zC, ZC, QC, bC, nC, fC) {
+       const oC = xC(CC, ((QC, wC) => (CC._tempPickingRay || (CC._tempPickingRay = WC.Zero()), MC(CC, zC, ZC, QC, CC._tempPickingRay, nC || null, !1, wC), CC._tempPickingRay)), QC, bC, !1, fC);
+       return oC && (oC.ray = NC(CC, zC, ZC, wC.b.Identity(), nC || null)), oC
+     }
+ 
+     function vC(CC, zC, ZC, QC, bC) {
+       const nC = xC(CC, (ZC => (CC._pickWithRayInverseMatrix || (CC._pickWithRayInverseMatrix = wC.b.Identity()), ZC.invertToRef(CC._pickWithRayInverseMatrix), CC._cachedRayForTransform || (CC._cachedRayForTransform = WC.Zero()), WC.TransformToRef(zC, CC._pickWithRayInverseMatrix … [truncated]
+       return nC && (nC.ray = zC), nC
+     }
+ ... (311 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L155-L170` → after: `L923-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L923-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L923-L1250) · [Before (L155-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L155-L170)

```diff
-         this.supportCascades = !1
-       }
-       loadCubeData() {
-         throw ".hdr not supported in Cube."
-       }
-       loadData(qq, Eq, gq) {
-         const Yq = new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength),
-           lq = xq(Yq),
-           Oq = Aq(Yq, lq),
-           mq = lq.width * lq.height,
-           cq = new Float32Array(4 * mq);
-         for (let xq = 0; xq < mq; xq += 1) cq[4 * xq] = Oq[3 * xq], cq[4 * xq + 1] = Oq[3 * xq + 1], cq[4 * xq + 2] = Oq[3 * xq + 2], cq[4 * xq + 3] = 1;
-         gq(lq.width, lq.height, Eq.generateMipMaps, !1, (() => {
-           const qq = Eq.Ba();
-           Eq.type = 1, Eq.format = 5, Eq._gammaSpace = !1, qq._uploadDataToTextureDirectly(Eq, cq)
-         }))
+         this.direction1 = new bC.r(0, 1, 0), this.direction2 = new bC.r(0, 1, 0)
+       }
+       startDirectionFunction(CC, zC, ZC, QC) {
+         const wC = (0, MC.RandomRange)(this.direction1.x, this.direction2.x),
+           nC = (0, MC.RandomRange)(this.direction1.y, this.direction2.y),
+           fC = (0, MC.RandomRange)(this.direction1.z, this.direction2.z);
+         QC ? zC.L_(wC, nC, fC) : bC.r.TransformNormalFromFloatsToRef(wC, nC, fC, CC, zC)
+       }
+       startPositionFunction(CC, zC, ZC, QC) {
+         QC ? zC.L_(0, 0, 0) : bC.r.TransformCoordinatesFromFloatsToRef(0, 0, 0, CC, zC)
+       }
+       clone() {
+         const CC = new gC;
+         return NC.e.DeepCopy(this, CC), CC
+       }
+       applyToShader(CC) {
+ ... (312 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/304.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/304.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L4-L6` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L4-L11) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L4-L6)

```diff
-   41600: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       _KTXTextureLoader: () => aq
+   41514: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => NC,
+       i: () => PC,
+       j: () => MC,
+       n: () => gC,
+       q: () => RC,
+       s: () => GC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L8-L36` → after: `L13-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L13-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L13-L42) · [Before (L8-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L8-L36)

```diff
-     var Yq = gq(38653);
-     class lq {
-       constructor(qq, Eq) {
-         if (this.data = qq, this.isInvalid = !1, !lq.IsValid(qq)) return this.isInvalid = !0, void Yq.b.Error("texture missing KTX identifier");
-         const gq = Uint32Array.BYTES_PER_ELEMENT,
-           Oq = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * gq),
-           mq = 67305985 === Oq.getUint32(0, !0);
-         return this.glType = Oq.getUint32(1 * gq, mq), this.glTypeSize = Oq.getUint32(2 * gq, mq), this.glFormat = Oq.getUint32(3 * gq, mq), this.glInternalFormat = Oq.getUint32(4 * gq, mq), this.glBaseInternalFormat = Oq.getUint32(5 * gq, mq), this.pixelWidth = Oq.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(qq, Eq) {
-         switch (this.loadType) {
-           case lq.COMPRESSED_2D:
-             this._upload2DCompressedLevels(qq, Eq);
-           case lq.TEX_2D:
-           case lq.COMPRESSED_3D:
-           case lq.TEX_3D:
- ... (13 more removed lines; see GitHub link above)
+     var QC = ZC(41459);
+     var wC = "Babylon Lite v1.32.0",
+       bC = ZC(41519);
+ 
+     function nC(CC) {
+       return "clientWidth" in CC
+     }
+     var fC = 1;
+ 
+     function oC(CC, zC, ZC) {
+       const oC = zC.getContext("webgpu");
+       oC || (0, QC.b)(54), nC(zC) && zC.setAttribute("data-engine", wC);
+       const qC = ZC?.format ?? navigator.gpu.getPreferredCanvasFormat(),
+         FC = ZC?.srgb ? (WC = qC).endsWith("-srgb") ? WC : `${WC}-srgb` : qC;
+       var WC;
+       const NC = ZC?.alphaMode ?? "opaque";
+ ... (14 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L38-L46` → after: `L44-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L44-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L44-L56) · [Before (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L38-L46)

```diff
-           Yq = Math.max(1, .5 * Yq), Oq = Math.max(1, .5 * Oq)
-         }
-       }
-       static IsValid(qq) {
-         if (qq.byteLength >= 12) {
-           const Eq = new Uint8Array(qq.buffer, qq.byteOffset, 12);
-           if (171 === Eq[0] && 75 === Eq[1] && 84 === Eq[2] && 88 === Eq[3] && 32 === Eq[4] && 49 === Eq[5] && 49 === Eq[6] && 187 === Eq[7] && 13 === Eq[8] && 10 === Eq[9] && 26 === Eq[10] && 10 === Eq[11]) return !0
-         }
-         return !1
+         });
+       return gC._eager = !0, {
+         engine: CC,
+         canvas: zC,
+         format: FC,
+         msaaSamples: MC,
+         scRT: gC,
+         maxDevicePixelRatio: ZC?.maxDevicePixelRatio ?? 1 / 0,
+         _uniqueId: fC++,
+         _context: oC,
+         _configureFormat: qC,
+         _alphaMode: NC,
+         _renderingContexts: []
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L53-L55` → after: `L60-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L60-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L60-L65) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L53-L55)

```diff
-     function uq(qq, Eq) {
-       const gq = Eq?.jsDecoderModule || KTX2DECODER;
-       qq && (qq.wasmBaseUrl && (gq.Transcoder.WasmBaseUrl = qq.wasmBaseUrl), qq.wasmUASTCToASTC && (gq.LiteTranscoder_UASTC_ASTC.WasmModuleURL = qq.wasmUASTCToASTC), qq.wasmUASTCToBC7 && (gq.LiteTranscoder_UASTC_BC7.WasmModuleURL = qq.wasmUASTCToBC7), qq.wasmUASTCToRGBA_UNORM &&  … [truncated]
+     function qC(CC) {
+       const zC = CC._context.getCurrentTexture(),
+         ZC = CC.scRT;
+       ZC._colorTexture = zC, ZC._colorView = zC.createView({
+         format: CC.format
+       }), ZC._width = zC.width, ZC._height = zC.height
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L59-L155` → after: `L69-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L69-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L69-L84) · [Before (L59-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L59-L155)

```diff
-       let Eq;
-       "undefined" === typeof qq && "undefined" !== typeof KTX2DECODER && (qq = KTX2DECODER), onmessage = gq => {
-         if (gq.data) switch (gq.data.action) {
-           case "init": {
-             const Yq = gq.data.urls;
-             Yq && (Yq.jsDecoderModule && "undefined" === typeof qq && (importScripts(Yq.jsDecoderModule), qq = KTX2DECODER), uq(Yq)), gq.data.wasmBinaries && uq(void 0, {
-               ...gq.data.wasmBinaries,
-               jsDecoderModule: qq
-             }), Eq = new qq.KTX2Decoder, postMessage({
-               action: "init"
-             });
-             break
-           }
-           case "setDefaultDecoderOptions":
-             qq.KTX2Decoder.DefaultDecoderOptions = gq.data.options;
-             break;
- ... (81 more removed lines; see GitHub link above)
+       const zC = CC.canvas;
+       if (!nC(zC)) return;
+       const ZC = CC._w ?? zC.clientWidth,
+         QC = CC._h ?? zC.clientHeight;
+       if (!(ZC > 0 && QC > 0)) return;
+       const wC = Math.min(globalThis.devicePixelRatio || 1, CC.maxDevicePixelRatio);
+       WC(CC, ZC * wC | 0, QC * wC | 0)
+     }
+ 
+     function WC(CC, zC, ZC) {
+       const QC = CC.canvas,
+         wC = 0 | zC,
+         bC = 0 | ZC;
+       if (wC > 0 && bC > 0 && (wC !== QC.width || bC !== QC.height)) {
+         QC.width = wC, QC.height = bC, CC.scRT._width = wC, CC.scRT._height = bC;
+         for (const zC of CC._renderingContexts) zC._resize?.()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L157-L159` → after: `L86-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L86-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L86-L118) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L157-L159)

```diff
-       async _uploadAsync(qq, Eq, gq) {
-         const Yq = await this._decodeAsync(qq, gq);
-         this._createTexture(Yq, Eq, gq)
+     }
+     var NC = 0;
+ 
+     function MC(CC, zC) {
+       return -1 !== CC._renderingContexts.indexOf(zC)
+     }
+ 
+     function gC(CC, zC) {
+       return -1 === CC._renderingContexts.indexOf(zC) && (CC._renderingContexts.push(zC), !0)
+     }
+     var SC = null;
+     var pC = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
+     async function PC(CC, zC) {
+       const bC = await navigator.gpu.requestAdapter({
+         powerPreference: "high-performance",
+         ...SC ? SC() : {}
+ ... (17 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L161-L209` → after: `L120-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L120-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L120-L129) · [Before (L161-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L161-L209)

```diff
-       async _decodeAsync(qq, Eq) {
-         const gq = this._engine.getCaps(),
-           Yq = {
-             astc: !!gq.astc,
-             bptc: !!gq.bptc,
-             s3tc: !!gq.s3tc,
-             pvrtc: !!gq.pvrtc,
-             etc2: !!gq.etc2,
-             etc1: !!gq.etc1
-           };
-         if (Wq._WorkerPoolPromise) {
-           const gq = await Wq._WorkerPoolPromise;
-           return await new Promise(((lq, Oq) => {
-             gq.push(((gq, mq) => {
-               const xq = qq => {
-                   gq.removeEventListener("error", xq), gq.removeEventListener("message", Aq), Oq(qq), mq()
- ... (33 more removed lines; see GitHub link above)
+       let MC, gC, PC, GC;
+       if (NC) {
+         const [{
+           wrapRenderableForFO: CC,
+           lightFoVersion: zC,
+           applyLightFoOffset: QC
+         }, {
+           makePackMeshWorld: wC
+         }] = await Promise.all([ZC.e(358).then((() => ZC(61016))), ZC.e(359).then((() => ZC(61019)))]);
+         MC = CC, gC = wC, PC = zC, GC = QC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L211-L232` → after: `L131-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L131-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L131-L186) · [Before (L211-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L211-L232)

```diff
-       _createTexture(qq, Eq, gq) {
-         if ((qq.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
-         this._engine._bindTextureDirectly(3553, Eq), gq && (gq.transcodedFormat = qq.transcodedFormat, gq.isInGammaSpace = qq.isInGammaSpace, gq.hasAlpha = qq.hasAlpha, gq.transcoderName = qq.transcoderName);
-         let Yq = !0;
-         switch (qq.transcodedFormat) {
-           case 32856:
-             Eq.type = 0, Eq.format = 5;
-             break;
-           case 33321:
-             Eq.type = 0, Eq.format = 6;
-             break;
-           case 33323:
-             Eq.type = 0, Eq.format = 7;
-             break;
-           default:
-             Eq.format = qq.transcodedFormat, Yq = !1
- ... (6 more removed lines; see GitHub link above)
+       const RC = {
+           _device: fC
+         },
+         AC = [RC];
+       return Object.assign(RC, {
+         engine: RC,
+         surfaces: AC,
+         _surfaces: AC,
+         _device: fC,
+         _options: zC,
+         drawCallCount: 0,
+         gpuFrameTimeMs: 0,
+         useHighPrecisionMatrix: WC,
+         useFloatingOrigin: NC,
+         _animFrameId: 0,
+         _renderFn: null,
+ ... (40 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L234-L239` → after: `L188-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L188-L191) · [Before (L234-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L234-L239)

```diff
-         Eq._extension = ".ktx2", Eq.isReady = !0, this._engine._bindTextureDirectly(3553, null)
-       }
-       static IsValid(qq) {
-         if (qq.byteLength >= 12) {
-           const Eq = new Uint8Array(qq.buffer, qq.byteOffset, 12);
-           if (171 === Eq[0] && 75 === Eq[1] && 84 === Eq[2] && 88 === Eq[3] && 32 === Eq[4] && 50 === Eq[5] && 48 === Eq[6] && 187 === Eq[7] && 13 === Eq[8] && 10 === Eq[9] && 26 === Eq[10] && 10 === Eq[11]) return !0
+         const zC = CC._currentEncoder;
+         for (let CC = 0; CC < ZC.length; CC++) {
+           const QC = ZC[CC];
+           QC._captureService?.(QC, zC)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L241` → after: `L193-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L193-L195) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L241)

```diff
-         return !1
+         CC._gpuTimerEnd?.(zC), CC._cbs[0] = zC.finish(), CC._device.queue.submit(CC._cbs), CC._flushGpuRetirements?.(CC), CC.drawCallCount = QC, CC._gpuTimerResolve?.()
+       } finally {
+         CC._currentEncoder = void 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L246-L288` → after: `L216-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L216-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L216-L219) · [Before (L246-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L246-L288)

```diff
-       switch (qq) {
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
-         case 37841:
- ... (27 more removed lines; see GitHub link above)
+       for (const ZC of CC) try {
+         ZC()
+       } catch (zC) {
+         console.error("GPU resource retirement failed.", zC)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L290-L317` → after: `L221-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L221-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L221-L264) · [Before (L290-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L290-L317)

```diff
-       return null
-     }
-     Wq.URLConfig = {
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
-     }, Wq.DefaultNumWorkers = Wq.GetDefaultNumWorkers(), Wq.DefaultDecoderOptions = new class {
-       constructor() {
-         this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
- ... (12 more removed lines; see GitHub link above)
+     }
+ 
+     function bC(CC, zC) {
+       CC._flushGpuRetirements ??= nC, (CC._retirements ??= []).push(zC)
+     }
+ 
+     function nC(CC) {
+       const zC = CC._retirements;
+       if (!zC) return;
+       CC._retirements = null;
+       const ZC = CC._retiring ??= new Set;
+       ZC.add(zC), queueMicrotask((() => {
+         CC._device.queue.onSubmittedWorkDone().then((() => {
+           ZC.delete(zC), QC(zC)
+         })).catch((() => {}))
+       }))
+ ... (28 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L319-L320` → after: `L266-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L266-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L266-L307) · [Before (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L319-L320)

```diff
-       set useRGBAIfOnlyBC1BC3AvailableWhenUASTC(qq) {
-         this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC !== qq && (this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = qq, this._isDirty = !0)
+     }
+ 
+     function nC(CC, zC) {
+       if (CC._eager) return void CC._syncEager?.(zC);
+       fC(CC);
+       const ZC = CC._descriptor,
+         {
+           width: bC,
+           height: nC
+         } = (CC._resolveSize ?? wC)(ZC);
+       CC._width = bC, CC._height = nC;
+       const oC = zC._device;
+       ZC.format && (CC._colorTexture = oC.createTexture({
+         label: ZC.lbl,
+         size: {
+           width: bC,
+ ... (26 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L322-L323` → after: `L309-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L309-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L309-L396) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L322-L323)

```diff
-       get forceRGBA() {
-         return this._forceRGBA
+     }
+   },
+   41532: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC,
+       g: () => wC,
+       k: () => bC
+     });
+     var QC = Float32Array,
+       wC = Float64Array,
+       bC = Uint32Array
+   },
+   41543: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => QC
+     });
+ ... (72 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L325-L326` → after: `L398-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L398-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L398-L415) · [Before (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L325-L326)

```diff
-       set forceRGBA(qq) {
-         this._forceRGBA !== qq && (this._forceRGBA = qq, this._isDirty = !0)
+       let qC = fC.get(oC);
+       return qC || fC.set(oC, qC = wC.createSampler(zC)), qC
+     }
+   },
+   41525: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => cC,
+       d: () => sC
+     });
+     var QC = ZC(41519),
+       wC = ZC(41514);
+ 
+     function bC(CC, zC) {
+       zC._passes.length = 0, CC._currentProcessedTask = zC;
+       try {
+         zC.record()
+ ... (2 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L328-L329` → after: `L417-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L417-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L417-L488) · [Before (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L328-L329)

```diff
-       get forceR8() {
-         return this._forceR8
+     }
+     var nC = ZC(41532);
+ 
+     function fC(CC) {
+       const zC = CC.worldMatrixVersion;
+       if (CC._viewVer === zC) return CC._viewCache;
+       const ZC = CC._viewCache,
+         QC = CC.worldMatrix,
+         wC = CC._useFloatingOrigin,
+         bC = wC ? 0 : QC[12],
+         nC = wC ? 0 : QC[13],
+         fC = wC ? 0 : QC[14];
+       return ZC[0] = QC[0], ZC[1] = QC[4], ZC[2] = QC[8], ZC[3] = 0, ZC[4] = QC[1], ZC[5] = QC[5], ZC[6] = QC[9], ZC[7] = 0, ZC[8] = QC[2], ZC[9] = QC[6], ZC[10] = QC[10], ZC[11] = 0, ZC[12] = -(QC[0] * bC + QC[1] * nC + QC[2] * fC), ZC[13] = -(QC[4] * bC + QC[5] * nC + QC[6] * f … [truncated]
+     }
+     var oC = null;
+ 
+ ... (56 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L331-L332` → after: `L490-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L490-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L490-L507) · [Before (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L331-L332)

```diff
-       set forceR8(qq) {
-         this._forceR8 !== qq && (this._forceR8 = qq, this._isDirty = !0)
+       return wC
+     }
+     var PC = ZC(41543),
+       GC = new nC.k(1),
+       RC = new nC.c(GC.buffer);
+ 
+     function AC(CC) {
+       let zC = 0;
+       for (const ZC of CC) zC += ZC._lightVersion ?? 0;
+       return zC
+     }
+ 
+     function xC(CC, zC) {
+       CC.fill(0);
+       let ZC = 0;
+       for (const QC of zC) {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L334-L335` → after: `L509-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L509-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L509-L585) · [Before (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L334-L335)

```diff
-       get forceRG8() {
-         return this._forceRG8
+       GC[0] = ZC, CC[0] = RC[0]
+     }
+ 
+     function JC(CC, zC) {
+       let ZC = zC._lightGpuState;
+       const QC = 16 + 16 * PC.b * 4;
+       if (ZC && ZC._byteSize === QC) return ZC;
+       const wC = !ZC;
+       ZC?._buffer.destroy();
+       const bC = new nC.c(QC / 4);
+       return xC(bC, zC.lights), CC._applyLightFoOffset?.(bC, zC), ZC = {
+         _buffer: pC(CC, bC),
+         _scratch: bC,
+         Gs: AC(zC.lights) + (CC._lightFoVersion?.(zC) ?? 0),
+         _listVersion: zC._lightListVersion ?? 0,
+         _lightCount: zC.lights.length,
+ ... (61 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L337-L338` → after: `L587-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L587-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L587-L715) · [Before (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L337-L338)

```diff
-       set forceRG8(qq) {
-         this._forceRG8 !== qq && (this._forceRG8 = qq, this._isDirty = !0)
+     }
+ 
+     function eC(CC, zC, ZC) {
+       CC.clr ??= !0;
+       const wC = CC.rt._descriptor,
+         bC = CC.depth?._descriptor,
+         oC = {
+           _colorFormat: wC.format,
+           _depthStencilFormat: bC?.dFormat ?? wC.dFormat,
+           _depthCompare: wC.depthCompare ?? bC?.depthCompare,
+           _sampleCount: wC.samples
+         },
+         FC = {
+           loadOp: "clear",
+           storeOp: "store"
+         },
+ ... (113 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L340-L341` → after: `L717-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L717-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L717-L729) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L340-L341)

```diff
-       get bypassTranscoders() {
-         return this._bypassTranscoders
+       const {
+         _opaqueBindings: FC,
+         _directBindings: WC,
+         _transparentBindings: NC
+       } = qC;
+       try {
+         for (const ZC of zC) {
+           const zC = ZC.bind(CC.engine, CC._targetSignature);
+           qC._batchState = CC._targetSignature._collectBatches?.(qC._batchState, zC), ZC.isTransparent || ZC._transmissive ? NC.push(zC) : ZC._direct ? WC.push(zC) : FC.push(zC)
+         }
+         FC.sort(KC), WC.sort(KC), ZC && mC(CC, CC.engine, !1)
+       } catch (MC) {
+         throw qC._batchState?._release(void 0, bC ?? [oC]), MC
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L343-L344` → after: `L731-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L731-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L731-L775) · [Before (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L343-L344)

```diff
-       set bypassTranscoders(qq) {
-         this._bypassTranscoders !== qq && (this._bypassTranscoders = qq, this._isDirty = !0)
+       return ZC && (! function(CC, zC) {
+         const ZC = CC._config,
+           QC = CC._colorAttachment;
+         QC.view = zC._colorView, CC._renderPassDescriptor.colorAttachments = zC._colorView ? [QC] : [];
+         const wC = ZC.depth ?? zC,
+           bC = wC._depthView;
+         let nC;
+         if (bC) {
+           const CC = wC._descriptor,
+             zC = (ZC.depth ? wC._eager : !1 === ZC.depthClear) ? "load" : "clear";
+           nC = {
+             view: bC,
+             depthClearValue: CC.depthClearValue ?? 0,
+             depthLoadOp: zC,
+             depthStoreOp: "store"
+           }, CC.dFormat?.includes("stencil") && (nC.stencilClearValue = 0, nC.stencilLoadOp = zC, nC.stencilStoreOp = "store")
+ ... (29 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L346-L357` → after: `L777-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L777-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L777-L790) · [Before (L346-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L346-L357)

```diff
-       _getKTX2DecoderOptions() {
-         if (!this._isDirty) return this._ktx2DecoderOptions;
-         this._isDirty = !1;
-         const qq = {};
-         return void 0 !== this._useRGBAIfASTCBC7NotAvailableWhenUASTC && (qq.useRGBAIfASTCBC7NotAvailableWhenUASTC = this._useRGBAIfASTCBC7NotAvailableWhenUASTC), void 0 !== this._forceRGBA && (qq.forceRGBA = this._forceRGBA), void 0 !== this._forceR8 && (qq.forceR8 = this._force … [truncated]
-           UASTC: {
-             transcodeFormat: [mq.BC1_RGB, mq.BC3_RGBA],
-             yes: {
-               transcodeFormat: mq.RGBA32,
-               engineFormat: 32856,
-               roundToMultiple4: !1
-             }
+       let FC = fC.length;
+       return zC.executeBundles(oC), zC.setBindGroup(0, qC), FC += EC(zC, CC._directBindings, ZC), FC += EC(zC, CC._transparentBindings, ZC), FC
+     }
+ 
+     function mC(CC, zC) {
+       let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+       const QC = JC(zC, CC.sS)._buffer;
+       if (QC === CC._lightsUBO) return;
+       const wC = zC._device.createBindGroup({
+         layout: SC(zC),
+         entries: [{
+           binding: 0,
+           resource: {
+             buffer: CC._sceneUBO
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L359` → after: `L792-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L792-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L792-L811) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L359)

```diff
-         }), this._ktx2DecoderOptions = qq, qq
+         }, {
+           binding: 1,
+           resource: {
+             buffer: QC
+           }
+         }]
+       });
+       CC._lightsUBO = QC, CC._sceneBG = wC, ZC && (CC._ob = [])
+     }
+ 
+     function HC(CC, zC) {
+       for (const ZC of CC) ZC.update?.(zC)
+     }
+ 
+     function EC(CC, zC, ZC) {
+       let QC = null,
+ ... (4 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L361-L364` → after: `L813-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L813-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L813-L850) · [Before (L361-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L361-L364)

```diff
-     };
-     class aq {
-       constructor() {
-         this.supportCascades = !1
+       return wC
+     }
+ 
+     function lC(CC) {
+       const zC = CC._materialSwapQueue;
+       if (!zC[0] || CC._runtimeBuilds?.w) return;
+       let QC, wC, bC;
+       const nC = CC._renderables;
+       for (const ZC of zC) {
+         const zC = ZC.material;
+         if (!zC) continue;
+         const fC = ZC._runtimeThinBuild;
+         if (fC) {
+           wC = fC(CC, ZC, wC);
+           continue
+         }
+ ... (22 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L366-L374` → after: `L852-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L852-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L852-L967) · [Before (L366-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L366-L374)

```diff
-       loadCubeData(qq, Eq, gq, Yq) {
-         if (Array.isArray(qq)) return;
-         Eq._invertVScale = !Eq.invertY;
-         const Oq = Eq.Ba(),
-           mq = new lq(qq, 6),
-           xq = Nq(mq.glInternalFormat);
-         null !== xq ? (Eq.format = xq, Eq._useSRGBBuffer = Oq._getUseSRGBBuffer(!0, !Eq.generateMipMaps), Eq._gammaSpace = !0) : Eq.format = mq.glInternalFormat;
-         const Aq = mq.numberOfMipmapLevels > 1 && Eq.generateMipMaps;
-         Oq._unpackFlipY(!0), mq.uploadLevels(Eq, Eq.generateMipMaps), Eq.width = mq.pixelWidth, Eq.height = mq.pixelHeight, Oq._setCubeMapTextureParams(Eq, Aq, mq.numberOfMipmapLevels - 1), Eq.isReady = !0, Eq.onLoadedObservable.notifyObservers(Eq), Eq.onLoadedObservable.clear(), … [truncated]
+       if (QC && (nC.sort(((CC, zC) => CC.order - zC.order)), CC._renderableVersion++, CC._materialEpoch++), zC.length = 0, !bC) return wC;
+       const fC = bC;
+       return ZC.e(363).then((() => ZC(61035))).then((zC => {
+         let {
+           C: ZC
+         } = zC;
+         return ZC(CC, fC, wC)
+       }), (zC => {
+         const ZC = CC._runtimeBuilds;
+         ZC ? ZC._x(zC) : console.error(zC)
+       }))
+     }
+     var XC = null;
+ 
+     function cC(CC, zC) {
+       const ZC = CC.engine,
+ ... (100 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L376-L390` → after: `L969-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L969-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L969-L975) · [Before (L376-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L376-L390)

```diff
-       loadData(qq, Eq, gq, Oq) {
-         if (lq.IsValid(qq)) {
-           Eq._invertVScale = !Eq.invertY;
-           const Yq = new lq(qq, 1),
-             Oq = Nq(Yq.glInternalFormat);
-           null !== Oq ? (Eq.format = Oq, Eq._useSRGBBuffer = Eq.Ba()._getUseSRGBBuffer(!0, !Eq.generateMipMaps), Eq._gammaSpace = !0) : Eq.format = Yq.glInternalFormat, gq(Yq.pixelWidth, Yq.pixelHeight, Eq.generateMipMaps, !0, (() => {
-             Yq.uploadLevels(Eq, Eq.generateMipMaps)
-           }), Yq.isInvalid)
-         } else if (Wq.IsValid(qq)) {
-           new Wq(Eq.Ba())._uploadAsync(qq, Eq, Oq).then((() => {
-             gq(Eq.width, Eq.height, Eq.generateMipMaps, !0, (() => {}), !1)
-           }), (qq => {
-             Yq.b.Warn(`Failed to load KTX2 texture data: ${qq.message}`), gq(0, 0, !1, !1, (() => {}), !0)
-           }))
-         } else Yq.b.Error("texture missing KTX identifier"), gq(0, 0, !1, !1, (() => {}), !0)
+       return wC._disposables.push((() => nC.dispose())), wC
+     }
+     async function uC(CC) {
+       const zC = CC;
+       for (zC._built || (zC._materialSwapQueue.length = 0); zC._deferredBuilders.length;) {
+         const CC = zC._deferredBuilders.splice(0);
+         await Promise.all(CC.map((CC => CC())))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L394` → after: `L987-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L987-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L987-L1058) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L394)

```diff
-   41607: (qq, Eq, gq) => {
+   41507: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => qC,
+       g: () => FC
+     });
+     var QC = ZC(41459),
+       wC = ZC(41462),
+       bC = ZC(41470),
+       nC = ZC(41476),
+       fC = ZC(41479),
+       oC = ZC(41487);
+ 
+     function qC(CC, zC, ZC) {
+       let fC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       (zC < 1 || ZC < 1) && (0, QC.b)(676, zC, ZC);
+       const qC = CC._device,
+ ... (56 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L398-L425` → after: `L1062-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L1062-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L1062-L1159) · [Before (L398-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L398-L425)

```diff
-     class Yq {
-       constructor(qq) {
-         this._pendingActions = new Array, this._workerInfos = qq.map((qq => ({
-           workerPromise: Promise.resolve(qq),
-           idle: !0
-         })))
-       }
-       dispose() {
-         for (const qq of this._workerInfos) qq.workerPromise.then((qq => {
-           qq.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
-       }
-       push(qq) {
-         this._executeOnIdleWorker(qq) || this._pendingActions.push(qq)
-       }
- ... (12 more removed lines; see GitHub link above)
+     var QC = ZC(41459),
+       wC = ZC(41462),
+       bC = ZC(41470),
+       nC = ZC(41476),
+       fC = ZC(41487);
+     async function oC(CC, zC) {
+       let oC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+       const [qC, FC] = function(CC) {
+         const zC = CC,
+           ZC = [
+             [zC.displayWidth, zC.displayHeight],
+             [zC.videoWidth, zC.videoHeight],
+             [zC.naturalWidth, zC.naturalHeight],
+             [zC.width, zC.height]
+           ];
+         for (const [QC, wC] of ZC)
+ ... (82 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L428-L453` → after: `L1162-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L1162-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L1162-L1274) · [Before (L428-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L428-L453)

```diff
-     class lq extends Yq {
-       constructor(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.DefaultOptions;
-         super([]), this._maxWorkers = qq, this._createWorkerAsync = Eq, this._options = gq
-       }
-       push(qq) {
-         if (!this._executeOnIdleWorker(qq))
-           if (this._workerInfos.length < this._maxWorkers) {
-             const Eq = {
-               workerPromise: this._createWorkerAsync(),
-               idle: !1
-             };
-             this._workerInfos.push(Eq), this._execute(Eq, qq)
-           } else this._pendingActions.push(qq)
-       }
-       _execute(qq, Eq) {
- ... (10 more removed lines; see GitHub link above)
+   },
+   41479: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       generateMipmaps: () => MC,
+       recordMipmaps: () => gC
+     });
+     var QC = ZC(41462),
+       wC = ZC(41476),
+       bC = {
+         magFilter: "linear",
+         minFilter: "linear"
+       };
+     var nC = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*ve … [truncated]
+       fC = null,
+       oC = null,
+       qC = null,
+ ... (97 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L456-L457` → after: `L1277-L1347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L1277-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/304.js#L1277-L1347) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/304.js#L456-L457)

```diff
-     lq.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
+   },
+   41487: (CC, zC, ZC) => {
+     function QC(CC, zC) {
+       return Math.floor(Math.log2(Math.max(CC, zC))) + 1
+     }
+     ZC.d(zC, {
+       e: () => QC
+     })
+   },
+   41457: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => qC,
+       d: () => FC
+     });
+     var QC = ZC(41459),
+       wC = ZC(41462),
+ ... (55 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/305.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/305.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/305.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/305.js#L4-L6)

```diff
-   41614: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       _TGATextureLoader: () => xq
+   41563: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       parseShaderPack: () => QC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L11` → after: `L10-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L10-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/305.js#L10-L22) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/305.js#L11)

```diff
-       let Eq = 0;
+       var zC, ZC;
+       const QC = CC.get("shaderPackUrl"),
+         wC = null !== (zC = CC.get("shaderPackMode")) && void 0 !== zC ? zC : "strict";
+       if (null === QC) {
+         if (CC.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
+         return null
+       }
+       if ("lite" !== CC.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
+       if (! function(CC) {
+           return "strict" === CC || "allow" === CC
+         }(wC)) throw new Error(`Unknown shaderPackMode "${wC}" - use strict or allow`);
+       const bC = (null !== (ZC = CC.get("variants")) && void 0 !== ZC ? ZC : "").split(",").find((CC => CC.trim().startsWith("liteShaderPack")));
+       if (void 0 !== bC) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${bC.trim()}`);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L13-L170` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/305.js#L24-L25) · [Before (L13-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/305.js#L13-L170)

```diff
-         id_length: qq[Eq++],
-         colormap_type: qq[Eq++],
-         image_type: qq[Eq++],
-         colormap_index: qq[Eq++] | qq[Eq++] << 8,
-         colormap_length: qq[Eq++] | qq[Eq++] << 8,
-         colormap_size: qq[Eq++],
-         origin: [qq[Eq++] | qq[Eq++] << 8, qq[Eq++] | qq[Eq++] << 8],
-         width: qq[Eq++] | qq[Eq++] << 8,
-         height: qq[Eq++] | qq[Eq++] << 8,
-         pixel_size: qq[Eq++],
-         flags: qq[17]
-       }
-     }
- 
-     function Oq(qq, Eq) {
-       if (Eq.length < 19) return void Yq.b.Error("Unable to load TGA file - Not enough data to contain header");
- ... (142 more removed lines; see GitHub link above)
+         url: QC,
+         mode: wC
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/306.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/306.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L4-L7)

```diff
-   41623: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       ReadExrDataAsync: () => BE,
-       _ExrTextureLoader: () => uE
+   41590: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => qC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L9-L170` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L8-L15) · [Before (L9-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L9-L170)

```diff
-     var Yq = gq(38653),
-       lq = gq(37158),
-       Oq = gq(39819);
-     const mq = 4,
-       xq = 4,
-       Aq = 1,
-       cq = 2,
-       uq = 8,
-       Bq = 65536,
-       Wq = Bq >> 3,
-       Nq = 14,
-       aq = 65537,
-       Vq = 1 << Nq,
-       dq = Vq - 1,
-       jq = 59,
-       Hq = 63,
- ... (146 more removed lines; see GitHub link above)
+     var QC = ZC(36963),
+       wC = ZC(36991),
+       bC = ZC(39800),
+       nC = ZC(36968),
+       fC = ZC(37142);
+     class oC {
+       constructor(CC, zC, ZC, QC) {
+         this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L173-L213` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L18-L20) · [Before (L173-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L173-L213)

```diff
- 
-     function zq(qq, Eq) {
-       let gq = 0,
-         Yq = Math.floor((qq.length + 1) / 2),
-         lq = 0;
-       const Oq = qq.length - 1;
-       for (; !(lq > Oq) && (Eq[lq++] = qq[gq++], !(lq > Oq));) Eq[lq++] = qq[Yq++]
-     }! function(qq) {
-       qq[qq.NO_COMPRESSION = 0] = "NO_COMPRESSION", qq[qq.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", qq[qq.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", qq[qq.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", qq[qq.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", qq[qq.PXR24_COMPRESSION = 5] = "PX … [truncated]
-     }(Pq || (Pq = {})),
-     function(qq) {
-       qq[qq.INCREASING_Y = 0] = "INCREASING_Y", qq[qq.DECREASING_Y = 1] = "DECREASING_Y"
-     }(Qq || (Qq = {}));
-     const Sq = 20000630;
- 
-     function pq(qq, Eq) {
- ... (25 more removed lines; see GitHub link above)
+     class qC {
+       static _NearestPow2Floor(CC) {
+         return CC <= 1 ? 1 : 1 << Math.floor(Math.log2(CC))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L215-L224` → after: `L22-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L22-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L22-L61) · [Before (L215-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L215-L224)

```diff
-     }
-     const Gq = 32768,
-       Lq = 65535;
- 
-     function Jq(qq, Eq, gq, Yq, lq) {
-       for (; gq < qq;) Eq = Eq << 8 | nq(Yq, lq), gq += 8;
-       return {
-         l: Eq >> (gq -= qq) & (1 << qq) - 1,
-         c: Eq,
-         lc: gq
+       static ConvertCubeMapTextureToSphericalPolynomial(CC) {
+         if (!CC.isCube) return null;
+         CC.Km()?.mg().flushFramebuffer();
+         const zC = CC.getSize().width,
+           ZC = CC._sphericalPolynomialTargetSize,
+           QC = ZC > 0 ? this._NearestPow2Floor(ZC) : 0,
+           wC = !CC.noMipmap && !0 === CC._texture?.generateMipMaps,
+           bC = QC > 0 && QC < zC && wC,
+           nC = bC ? Math.max(0, Math.round(Math.log2(zC / QC))) : 0,
+           fC = bC ? Math.max(1, Math.floor(zC / Math.pow(2, nC))) : zC,
+           oC = CC.readPixels(0, nC, void 0, !1),
+           qC = CC.readPixels(1, nC, void 0, !1);
+         let FC, WC;
+         CC.isRenderTarget ? (FC = CC.readPixels(3, nC, void 0, !1), WC = CC.readPixels(2, nC, void 0, !1)) : (FC = CC.readPixels(2, nC, void 0, !1), WC = CC.readPixels(3, nC, void 0, !1));
+         const NC = CC.readPixels(4, nC, void 0, !1),
+           MC = CC.readPixels(5, nC, void 0, !1),
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L226-L231` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L63-L64) · [Before (L226-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L226-L231)

```diff
-     }
- 
-     function kq(qq, Eq, gq, Yq) {
-       return {
-         c: qq = qq << 8 | nq(gq, Yq),
-         lc: Eq += 8
+       static _AreaElement(CC, zC) {
+         return Math.atan2(CC * zC, Math.sqrt(CC * CC + zC * zC + 1))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L233-L239` → after: `L66-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L66-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L66-L85) · [Before (L233-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L233-L239)

```diff
-     }
- 
-     function Rq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
-       if (qq == Eq) {
-         if (Yq < 8) {
-           const qq = kq(gq, Yq, lq, Oq);
-           gq = qq.c, Yq = qq.lc
+       static _DownsampleFace(CC, zC, ZC, QC) {
+         const wC = CC instanceof Float32Array ? CC : Float32Array.from(CC),
+           bC = ZC * ZC * QC,
+           nC = new Float32Array(bC),
+           fC = zC / ZC,
+           oC = 1 / (fC * fC);
+         for (let FC = 0; FC < ZC; FC++) {
+           const CC = Math.floor(FC * fC),
+             bC = Math.floor((FC + 1) * fC);
+           for (let qC = 0; qC < ZC; qC++) {
+             const WC = Math.floor(qC * fC),
+               NC = Math.floor((qC + 1) * fC),
+               MC = (FC * ZC + qC) * QC;
+             for (let ZC = 0; ZC < QC; ZC++) {
+               let fC = 0;
+               for (let nC = CC; nC < bC; nC++)
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L241-L251` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L87-L90) · [Before (L241-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L241-L251)

```diff
-         let qq = gq >> (Yq -= 8);
-         if (qq = new Uint8Array([qq])[0], xq.value + qq > Aq) return null;
-         const Eq = mq[xq.value - 1];
-         for (; qq-- > 0;) mq[xq.value++] = Eq
-       } else {
-         if (!(xq.value < Aq)) return null;
-         mq[xq.value++] = qq
-       }
-       return {
-         c: gq,
-         lc: Yq
+         if (CC instanceof Float32Array) return nC;
+         const qC = new(0, CC.constructor)(bC);
+         for (let FC = 0; FC < bC; FC++) qC[FC] = nC[FC] + .5 | 0;
+         return qC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L253-L333` → after: `L92-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L92-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L92-L103) · [Before (L253-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L253-L333)

```diff
-     }
-     const Uq = new Array(59);
- 
-     function Fq(qq, Eq, gq, Yq, lq, Oq) {
-       const mq = Eq;
-       let xq = 0,
-         Aq = 0;
-       for (; Yq <= lq; Yq++) {
-         if (mq.value - Eq.value > gq) return;
-         let cq = Jq(6, xq, Aq, qq, mq);
-         const uq = cq.l;
-         if (xq = cq.c, Aq = cq.lc, Oq[Yq] = uq, uq == Hq) {
-           if (mq.value - Eq.value > gq) throw new Error("Error in HufUnpackEncTable");
-           cq = Jq(8, xq, Aq, qq, mq);
-           let uq = cq.l + oq;
-           if (xq = cq.c, Aq = cq.lc, Yq + uq > lq + 1) throw new Error("Error in HufUnpackEncTable");
- ... (65 more removed lines; see GitHub link above)
+       static ConvertCubeMapToSphericalPolynomial(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const ZC = zC > 0 ? this._NearestPow2Floor(zC) : 0;
+         if (ZC > 0 && CC.size > ZC) {
+           const zC = 5 === CC.format ? 4 : 3,
+             QC = ["right", "left", "up", "down", "front", "back"],
+             wC = {};
+           for (const bC of QC) wC[bC] = this._DownsampleFace(CC[bC], CC.size, ZC, zC);
+           CC = {
+             ...CC,
+             ...wC,
+             size: ZC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L336-L360` → after: `L106-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L106-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L106-L132) · [Before (L336-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L336-L360)

```diff
-       }(uq, xq, Aq, Bq),
-       function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
-         let cq = 0,
-           uq = 0;
-         const Bq = mq,
-           Wq = Math.trunc(Yq.value + (lq + 7) / 8);
-         for (; Yq.value < Wq;) {
-           let lq = kq(cq, uq, gq, Yq);
-           for (cq = lq.c, uq = lq.lc; uq >= Nq;) {
-             const mq = Eq[cq >> uq - Nq & dq];
-             if (mq.len) {
-               uq -= mq.len;
-               const qq = Rq(mq.lit, Oq, cq, uq, gq, Yq, xq, Aq, Bq);
-               qq && (cq = qq.c, uq = qq.lc)
-             } else {
-               if (!mq.p) throw new Error("hufDecode issues");
- ... (9 more removed lines; see GitHub link above)
+         const QC = new bC.c;
+         let oC = 0;
+         const qC = 2 / CC.size,
+           FC = qC,
+           WC = .5 * qC,
+           NC = WC - 1;
+         for (let bC = 0; bC < 6; bC++) {
+           const zC = this._FileFaces[bC],
+             ZC = CC[zC.name];
+           let MC = NC;
+           const gC = 5 === CC.format ? 4 : 3;
+           for (let bC = 0; bC < CC.size; bC++) {
+             let SC = NC;
+             for (let FC = 0; FC < CC.size; FC++) {
+               const NC = zC.worldAxisForFileX.scale(SC).add(zC.worldAxisForFileY.scale(MC)).add(zC.worldAxisForNormal);
+               NC.normalize();
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L362-L363` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L134-L136) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L362-L363)

```diff
-               }
-               if (Eq == mq.lit) throw new Error("HufDecode issues")
+               } else PC = (0, wC.Clamp)(PC, 0, AC), GC = (0, wC.Clamp)(GC, 0, AC), RC = (0, wC.Clamp)(RC, 0, AC);
+               const xC = new fC.e(PC, GC, RC);
+               QC.addLight(NC, xC, pC), oC += pC, SC += qC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L367-L397` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L141-L142) · [Before (L367-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L367-L397)

```diff
-         const aq = 8 - lq & 7;
-         for (cq >>= aq, uq -= aq; uq > 0;) {
-           const qq = Eq[cq << Nq - uq & dq];
-           if (!qq.len) throw new Error("HufDecode issues");
-           {
-             uq -= qq.len;
-             const Eq = Rq(qq.lit, Oq, cq, uq, gq, Yq, xq, Aq, Bq);
-             Eq && (cq = Eq.c, uq = Eq.lc)
-           }
-         }
-       }(uq, Bq, qq, gq, cq, Aq, Oq, lq, {
-         value: 0
-       })
-     }
- 
-     function Kq(qq) {
- ... (15 more removed lines; see GitHub link above)
+         const MC = 6 * (4 * Math.PI) / 6 / oC;
+         return QC.scaleInPlace(MC), QC.convertIncidentRadianceToIrradiance(), QC.convertIrradianceToLambertianRadiance(), bC.g.FromHarmonics(QC)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L401-L408` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L158-L159) · [Before (L401-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L401-L408)

```diff
-     function eq(qq, Eq) {
-       const gq = Kq(qq),
-         Yq = Kq(Eq),
-         lq = gq - (Yq >> 1) & Lq;
-       return {
-         a: Yq + lq - Gq & Lq,
-         b: lq
-       }
+     function qC(CC) {
+       return CC.charCodeAt(0) + (CC.charCodeAt(1) << 8) + (CC.charCodeAt(2) << 16) + (CC.charCodeAt(3) << 24)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L410-L436` → after: `L161-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L161-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L161-L188) · [Before (L410-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L410-L436)

```diff
- 
-     function Dq(qq, Eq, gq, Yq, lq, Oq, mq) {
-       const xq = mq < 16384,
-         Aq = gq > lq ? lq : gq;
-       let cq, uq, Bq = 1;
-       for (; Bq <= Aq;) Bq <<= 1;
-       for (Bq >>= 1, cq = Bq, Bq >>= 1; Bq >= 1;) {
-         uq = 0;
-         const mq = uq + Oq * (lq - cq),
-           Aq = Oq * Bq,
-           Wq = Oq * cq,
-           Nq = Yq * Bq,
-           aq = Yq * cq;
-         let Vq, dq, jq, Hq;
-         for (; uq <= mq; uq += Wq) {
-           let lq = uq;
- ... (11 more removed lines; see GitHub link above)
+     const FC = qC("DXT1"),
+       WC = qC("DXT3"),
+       NC = qC("DXT5"),
+       MC = qC("DX10");
+     class gC {
+       static GetDDSInfo(CC) {
+         const zC = new Int32Array(CC.buffer, CC.byteOffset, 31),
+           ZC = new Int32Array(CC.buffer, CC.byteOffset, 35);
+         let QC = 1;
+         zC[2] & fC && (QC = Math.max(1, zC[7]));
+         const wC = zC[21],
+           bC = wC === MC ? ZC[32] : 0;
+         let nC = 0;
+         switch (wC) {
+           case 113:
+             nC = 2;
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L445-L452` → after: `L191-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L191-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L191-L201) · [Before (L445-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L445-L452)

```diff
-         if (lq & Bq) {
-           let lq = uq;
-           const Oq = uq + Yq * (gq - cq);
-           for (; lq <= Oq; lq += aq) {
-             const gq = lq + Nq;
-             let Yq;
-             Yq = xq ? Iq(qq[lq + Eq], qq[gq + Eq]) : eq(qq[lq + Eq], qq[gq + Eq]), Vq = Yq.a, qq[gq + Eq] = Yq.b, qq[lq + Eq] = Vq
-           }
+         return {
+           width: zC[4],
+           height: zC[3],
+           mipmapCount: QC,
+           isFourCC: 4 === (4 & zC[20]),
+           isRGB: 64 === (64 & zC[20]),
+           isLuminance: (zC[20] & oC) === oC,
+           isCube: 512 === (512 & zC[28]),
+           isCompressed: wC === FC || wC === WC || wC === NC,
+           dxgiFormat: bC,
+           textureType: nC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L456-L467` → after: `L204-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L204-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L204-L218) · [Before (L456-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L456-L467)

```diff
-       return uq
-     }
- 
-     function qE(qq) {
-       return new DataView(qq.array.buffer, qq.offset.value, qq.size)
-     }
- 
-     function EE(qq) {
-       const Eq = qq.viewer.buffer.slice(qq.offset.value, qq.offset.value + qq.size),
-         gq = new Uint8Array(function(qq) {
-           let Eq = qq.byteLength;
-           const gq = [];
+       static _GetHalfFloatAsFloatRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC) {
+         const fC = new Float32Array(QC),
+           oC = new Uint16Array(wC, ZC);
+         let qC = 0;
+         for (let FC = 0; FC < zC; FC++)
+           for (let zC = 0; zC < CC; zC++) {
+             const ZC = 4 * (zC + FC * CC);
+             fC[qC] = (0, nC.e)(oC[ZC]), fC[qC + 1] = (0, nC.e)(oC[ZC + 1]), fC[qC + 2] = (0, nC.e)(oC[ZC + 2]), gC.StoreLODInAlphaChannel ? fC[qC + 3] = bC : fC[qC + 3] = (0, nC.e)(oC[ZC + 3]), qC += 4
+           }
+         return fC
+       }
+       static _GetHalfFloatRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC) {
+         if (gC.StoreLODInAlphaChannel) {
+           const fC = new Uint16Array(QC),
+             oC = new Uint16Array(wC, ZC);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L469-L480` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L220-L223) · [Before (L469-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L469-L480)

```diff
-           const lq = new DataView(qq);
-           for (; Eq > 0;) {
-             const qq = lq.getInt8(Yq++);
-             if (qq < 0) {
-               const Oq = -qq;
-               Eq -= Oq + 1;
-               for (let qq = 0; qq < Oq; qq++) gq.push(lq.getUint8(Yq++))
-             } else {
-               const Oq = qq;
-               Eq -= 2;
-               const mq = lq.getUint8(Yq++);
-               for (let qq = 0; qq < Oq + 1; qq++) gq.push(mq)
+           for (let ZC = 0; ZC < zC; ZC++)
+             for (let zC = 0; zC < CC; zC++) {
+               const QC = 4 * (zC + ZC * CC);
+               fC[qC] = oC[QC], fC[qC + 1] = oC[QC + 1], fC[qC + 2] = oC[QC + 2], fC[qC + 3] = (0, nC.k)(bC), qC += 4
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L521-L540` → after: `L227-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L227-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L227-L232) · [Before (L521-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L521-L540)

```diff
-       return new DataView(lq.buffer)
-     }
- 
-     function lE(qq) {
-       const Eq = qq.viewer,
-         gq = {
-           value: qq.offset.value
-         },
-         Yq = new Uint16Array(qq.width * qq.scanlineBlockSize * (qq.channels * qq.type)),
-         lq = new Uint8Array(Wq);
-       let Oq = 0;
-       const mq = new Array(qq.channels);
-       for (let cq = 0; cq < qq.channels; cq++) mq[cq] = {}, mq[cq].start = Oq, mq[cq].end = mq[cq].start, mq[cq].nx = qq.width, mq[cq].ny = qq.lines, mq[cq].size = qq.type, Oq += mq[cq].nx * mq[cq].ny * mq[cq].size;
-       const xq = hq(Eq, gq),
-         Aq = hq(Eq, gq);
-       if (Aq >= Wq) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
- ... (4 more removed lines; see GitHub link above)
+         return new Uint16Array(wC, ZC, QC)
+       }
+       static _GetFloatRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC) {
+         if (gC.StoreLODInAlphaChannel) {
+           const nC = new Float32Array(QC),
+             fC = new Float32Array(wC, ZC);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L542-L544` → after: `L234-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L234-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L234-L238) · [Before (L542-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L542-L544)

```diff
-           for (let lq = 0; lq < Bq; ++lq)(0 == lq || qq[lq >> 3] & 1 << (7 & lq)) && (Eq[gq++] = lq);
-           const Yq = gq - 1;
-           for (; gq < Bq;) Eq[gq++] = 0;
+           for (let ZC = 0; ZC < zC; ZC++)
+             for (let zC = 0; zC < CC; zC++) {
+               const QC = 4 * (zC + ZC * CC);
+               nC[oC] = fC[QC], nC[oC + 1] = fC[QC + 1], nC[oC + 2] = fC[QC + 2], nC[oC + 3] = bC, oC += 4
+             }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L656-L670` → after: `L243-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L243-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L243-L249) · [Before (L656-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L656-L670)

```diff
-       if (1 === lq.type) switch (Yq) {
-         case OE.Float:
-           lq.getter = Zq, lq.inputSize = cq;
-           break;
-         case OE.HalfFloat:
-           lq.getter = hq, lq.inputSize = cq
-       } else {
-         if (2 !== lq.type) throw new Error("Unsupported pixelType " + lq.type + " for " + qq.compression);
-         switch (Yq) {
-           case OE.Float:
-             lq.getter = iq, lq.inputSize = xq;
-             break;
-           case OE.HalfFloat:
-             lq.getter = fq, lq.inputSize = xq
-         }
+       static _GetFloatAsHalfFloatRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC) {
+         const fC = new Uint16Array(QC),
+           oC = new Float32Array(wC, ZC);
+         let qC = 0;
+         for (let FC = 0; FC < zC; FC++)
+           for (let zC = 0; zC < CC; zC++) fC[qC] = (0, nC.k)(oC[qC]), fC[qC + 1] = (0, nC.k)(oC[qC + 1]), fC[qC + 2] = (0, nC.k)(oC[qC + 2]), gC.StoreLODInAlphaChannel ? fC[qC + 3] = (0, nC.k)(bC) : fC[qC + 3] = (0, nC.k)(oC[qC + 3]), qC += 4;
+         return fC
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L672-L683` → after: `L251-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L251-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L251-L260) · [Before (L672-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L672-L683)

```diff
-       lq.blockCount = lq.height / lq.scanlineBlockSize;
-       for (let xq = 0; xq < lq.blockCount; xq++) bq(Eq, gq);
-       const Aq = lq.width * lq.height * lq.outputChannels;
-       switch (Yq) {
-         case OE.Float:
-           lq.byteArray = new Float32Array(Aq), lq.textureType = 1, mq && lq.byteArray.fill(1, 0, Aq);
-           break;
-         case OE.HalfFloat:
-           lq.byteArray = new Uint16Array(Aq), lq.textureType = 2, mq && lq.byteArray.fill(15360, 0, Aq);
-           break;
-         default:
-           throw new Error("Unsupported type: " + Yq)
+       static _GetFloatAsUIntRGBAArrayBuffer(CC, zC, ZC, wC, bC, nC) {
+         const fC = new Uint8Array(wC),
+           oC = new Float32Array(bC, ZC);
+         let qC = 0;
+         for (let FC = 0; FC < zC; FC++)
+           for (let zC = 0; zC < CC; zC++) {
+             const ZC = 4 * (zC + FC * CC);
+             fC[qC] = 255 * (0, QC.Clamp)(oC[ZC]), fC[qC + 1] = 255 * (0, QC.Clamp)(oC[ZC + 1]), fC[qC + 2] = 255 * (0, QC.Clamp)(oC[ZC + 2]), gC.StoreLODInAlphaChannel ? fC[qC + 3] = nC : fC[qC + 3] = 255 * (0, QC.Clamp)(oC[ZC + 3]), qC += 4
+           }
+         return fC
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L685-L715` → after: `L262-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L262-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L262-L269) · [Before (L685-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L685-L715)

```diff
-       let uq = 0;
-       for (const xq of qq.channels) void 0 !== lq.decodeChannels[xq.name] && (lq.channelLineOffsets[xq.name] = uq * lq.width), uq += 2 * xq.pixelType;
-       return lq.bytesPerLine = lq.width * uq, lq.outLineWidth = lq.width * lq.outputChannels, "INCREASING_Y" === qq.lineOrder ? lq.scanOrder = qq => qq : lq.scanOrder = qq => lq.height - 1 - qq, 4 == lq.outputChannels ? (lq.format = 5, lq.linearSpace = !0) : (lq.format = 6, lq.li … [truncated]
-     }
- 
-     function cE(qq, Eq, gq, Yq) {
-       const lq = {
-         value: 0
-       };
-       for (let Oq = 0; Oq < qq.height / qq.scanlineBlockSize; Oq++) {
-         const mq = tq(gq, Yq) - Eq.dataWindow.yMin;
-         qq.size = rq(gq, Yq), qq.lines = mq + qq.scanlineBlockSize > qq.height ? qq.height - mq : qq.scanlineBlockSize;
-         const xq = qq.size < qq.lines * qq.bytesPerLine && qq.uncompress ? qq.uncompress(qq) : qE(qq);
-         Yq.value += qq.size;
-         for (let gq = 0; gq < qq.scanlineBlockSize; gq++) {
-           const Yq = Oq * qq.scanlineBlockSize,
- ... (15 more removed lines; see GitHub link above)
+       static _GetHalfFloatAsUIntRGBAArrayBuffer(CC, zC, ZC, wC, bC, fC) {
+         const oC = new Uint8Array(wC),
+           qC = new Uint16Array(bC, ZC);
+         let FC = 0;
+         for (let WC = 0; WC < zC; WC++)
+           for (let zC = 0; zC < CC; zC++) {
+             const ZC = 4 * (zC + WC * CC);
+             oC[FC] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC])), oC[FC + 1] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC + 1])), oC[FC + 2] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC + 2])), gC.StoreLODInAlphaChannel ? oC[FC + 3] = fC : oC[FC + 3] = 255 * (0, QC.Clamp)((0, nC.e)(qC[ZC + 3])), FC … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L717` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L271) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L717)

```diff
-         }
+         return oC
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L719-L723` → after: `L273-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L273-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L273-L282) · [Before (L719-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L719-L723)

```diff
-     }
-     xE.DefaultOutputType = OE.HalfFloat, xE.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
-     class uE {
-       constructor() {
-         this.supportCascades = !1
+       static _GetRGBAArrayBuffer(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
+         const qC = new Uint8Array(QC),
+           FC = new Uint8Array(wC, ZC);
+         let WC = 0;
+         for (let NC = 0; NC < zC; NC++)
+           for (let zC = 0; zC < CC; zC++) {
+             const ZC = 4 * (zC + NC * CC);
+             qC[WC] = FC[ZC + bC], qC[WC + 1] = FC[ZC + nC], qC[WC + 2] = FC[ZC + fC], qC[WC + 3] = FC[ZC + oC], WC += 4
+           }
+         return qC
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L725-L726` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L284-L285) · [Before (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L725-L726)

```diff
-       loadCubeData(qq, Eq, gq, Yq, lq) {
-         throw ".exr not supported in Cube."
+       static _ExtractLongWordOrder(CC) {
+         return 0 === CC || 255 === CC || -16777216 === CC ? 0 : 1 + gC._ExtractLongWordOrder(CC >> 8)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L728-L744` → after: `L287-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L287-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L287-L296) · [Before (L728-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L728-L744)

```diff
-       loadData(qq, Eq, gq) {
-         const lq = new DataView(qq.buffer),
-           Oq = {
-             value: 0
-           },
-           mq = pq(lq, Oq);
-         AE(mq, lq, Oq, xE.DefaultOutputType).then((qq => {
-           cE(qq, mq, lq, Oq);
-           const Yq = mq.dataWindow.xMax - mq.dataWindow.xMin + 1,
-             xq = mq.dataWindow.yMax - mq.dataWindow.yMin + 1;
-           gq(Yq, xq, Eq.generateMipMaps, !1, (() => {
-             const gq = Eq.Ba();
-             Eq.format = mq.format, Eq.type = qq.textureType, Eq.invertY = !1, Eq._gammaSpace = !mq.linearSpace, qq.byteArray && gq._uploadDataToTextureDirectly(Eq, qq.byteArray, 0, 0, void 0, !0)
-           }))
-         })).catch((qq => {
-           Yq.b.Error("Failed to load EXR texture: ", qq)
- ... (1 more removed lines; see GitHub link above)
+       static _GetRGBArrayBuffer(CC, zC, ZC, QC, wC, bC, nC, fC) {
+         const oC = new Uint8Array(QC),
+           qC = new Uint8Array(wC, ZC);
+         let FC = 0;
+         for (let WC = 0; WC < zC; WC++)
+           for (let zC = 0; zC < CC; zC++) {
+             const ZC = 3 * (zC + WC * CC);
+             oC[FC] = qC[ZC + bC], oC[FC + 1] = qC[ZC + nC], oC[FC + 2] = qC[ZC + fC], FC += 3
+           }
+         return oC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L746-L765` → after: `L298-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L298-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L298-L307) · [Before (L746-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L746-L765)

```diff
-     }
-     async function BE(qq) {
-       const Eq = new DataView(qq),
-         gq = {
-           value: 0
-         },
-         lq = pq(Eq, gq);
-       try {
-         const qq = await AE(lq, Eq, gq, OE.Float);
-         return cE(qq, lq, Eq, gq), qq.byteArray ? {
-           width: lq.dataWindow.xMax - lq.dataWindow.xMin + 1,
-           height: lq.dataWindow.yMax - lq.dataWindow.yMin + 1,
-           data: new Float32Array(qq.byteArray)
-         } : (Yq.b.Error("Failed to decode EXR data: No byte array available."), {
-           width: 0,
-           height: 0,
- ... (4 more removed lines; see GitHub link above)
+       static _GetLuminanceArrayBuffer(CC, zC, ZC, QC, wC) {
+         const bC = new Uint8Array(QC),
+           nC = new Uint8Array(wC, ZC);
+         let fC = 0;
+         for (let oC = 0; oC < zC; oC++)
+           for (let zC = 0; zC < CC; zC++) {
+             const ZC = zC + oC * CC;
+             bC[fC] = nC[ZC], fC++
+           }
+         return bC
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L767-L770` → after: `L309-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L309-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/306.js#L309-L426) · [Before (L767-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/306.js#L767-L770)

```diff
-       return {
-         width: 0,
-         height: 0,
-         data: null
+       static UploadDDSLevels(CC, zC, ZC, QC, nC, oC) {
+         let qC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
+           SC = arguments.length > 7 ? arguments[7] : void 0,
+           pC = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
+           PC = null;
+         QC.sphericalPolynomial && (PC = []);
+         const GC = !!CC.getCaps().s3tc;
+         zC.generateMipMaps = nC;
+         const RC = new Int32Array(ZC.buffer, ZC.byteOffset, 31);
+         let AC, xC, JC, IC, iC, vC, eC, hC = 0,
+           KC = 0,
+           YC = 1;
+         if (542327876 !== RC[0]) return void wC.c.Error("Invalid magic number in DDS header");
+         if (!QC.isFourCC && !QC.isRGB && !QC.isLuminance) return void wC.c.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
+         if (QC.isCompressed && !GC) return void wC.c.Error("Compressed textures are not supported on this platform.");
+         let dC = RC[22];
+ ... (102 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/307.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/307.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710)

#### 1. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/307.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/307.js#L2)

```diff
- export const ids = [307];
+ export const ids = [306, 307];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/307.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/307.js#L4-L6)

```diff
-   41792: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
+   41600: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       _DDSTextureLoader: () => bC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L8-L14` → after: `L8-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L8-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/307.js#L8-L40) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/307.js#L8-L14)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpVertex",
-       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(39800),
+       wC = ZC(41585);
+     class bC {
+       constructor() {
+         this.supportCascades = !0
+       }
+       loadCubeData(CC, zC, ZC, bC) {
+         const nC = zC.mg();
+         let fC, oC = !1,
+           qC = 1e3;
+         if (Array.isArray(CC))
+           for (let QC = 0; QC < CC.length; QC++) {
+             const ZC = CC[QC];
+             fC = wC.DDSTools.GetDDSInfo(ZC), zC.width = fC.width, zC.height = fC.height, oC = (fC.isRGB || fC.isLuminance || fC.mipmapCount > 1) && zC.generateMipMaps, nC._unpackFlipY(fC.isCompressed), wC.DDSTools.UploadDDSLevels(nC, zC, ZC, fC, oC, 6, -1, QC), fC.isFourCC || 1 ! … [truncated]
+           } else {
+             const bC = CC;
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L17-L30` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/307.js#L43) · [Before (L17-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/307.js#L17-L30)

```diff
-   41709: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "bumpVertexDeclaration",
-       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41657: (qq, Eq, gq) => {
+   41590: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L34-L41` → after: `L47-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L47-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/307.js#L47-L55) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/307.js#L34-L41)

```diff
-     var Yq = gq(39617);
-     gq(41642), gq(41651);
-     const lq = "defaultUboDeclaration",
-       Oq = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(36963),
+       wC = ZC(36991),
+       bC = ZC(39800),
+       nC = ZC(36968),
+       fC = ZC(37142);
+     class oC {
+       constructor(CC, zC, ZC, QC) {
+         this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L44-L46` → after: `L186-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/307.js#L186-L188) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/307.js#L44-L46)

```diff
-   41625: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       defaultVertexShader: () => Kq
+   41585: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       DDSTools: () => gC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L48-L104` → after: `L190-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L190-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/307.js#L190-L198) · [Before (L48-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/307.js#L48-L104)

```diff
-     var Yq = gq(39617),
-       lq = gq(41634);
-     const Oq = "defaultVertexDeclaration",
-       mq = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
-     Yq.d.IncludesShadersStore[Oq] || (Yq.d.IncludesShadersStore[Oq] = mq);
-     const xq = {
-       name: Oq,
-       shader: mq
-     };
-     var Aq = gq(41642),
-       cq = gq(41651),
-       uq = gq(41657),
-       Bq = gq(41661),
-       Wq = gq(41670),
-       Nq = gq(41673),
-       aq = gq(41678),
- ... (41 more removed lines; see GitHub link above)
+     var QC = ZC(36991),
+       wC = ZC(38507),
+       bC = ZC(41590),
+       nC = ZC(39889);
+     const fC = 131072,
+       oC = 131072;
+ 
+     function qC(CC) {
+       return CC.charCodeAt(0) + (CC.charCodeAt(1) << 8) + (CC.charCodeAt(2) << 16) + (CC.charCodeAt(3) << 24)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/308.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/308.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L4-L6)

```diff
-   41772: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
+   41612: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       _ENVTextureLoader: () => vC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L8-L14` → after: `L8-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L8-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L8-L28) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L8-L14)

```diff
-     var Yq = gq(39617);
-     const lq = "bakedVertexAnimation",
-       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(39747),
+       wC = ZC(36963),
+       bC = ZC(36991),
+       nC = ZC(39800),
+       fC = ZC(39650),
+       oC = ZC(39803),
+       qC = (ZC(39910), ZC(41618)),
+       FC = ZC(38507),
+       WC = (ZC(41630), ZC(41648), ZC(39882));
+     const NC = "image/png",
+       MC = [134, 22, 135, 150, 246, 214, 150, 54];
+ 
+     function gC(CC) {
+       const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
+       let ZC = 0;
+       for (let nC = 0; nC < MC.length; nC++)
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L16-L27` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L30-L37) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L16-L27)

```diff
-   },
-   41678: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "bakedVertexAnimationDeclaration",
-       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+ 
+     function SC(CC) {
+       if (CC.version > 2) throw new Error(`Unsupported babylon environment map version "${CC.version}". Latest supported version is "2".`);
+       return 2 === CC.version ? CC : CC = {
+         ...CC,
+         version: 2,
+         imageType: NC
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L29-L40` → after: `L39-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L39-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L39-L52) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L29-L40)

```diff
-   },
-   41673: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "bonesDeclaration",
-       Oq = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+ 
+     function pC(CC, zC) {
+       const ZC = (zC = SC(zC)).specular;
+       let QC = Math.log2(zC.width);
+       if (QC = Math.round(QC) + 1, ZC.mipmaps.length !== 6 * QC) throw new Error(`Unsupported specular mipmaps number "${ZC.mipmaps.length}"`);
+       const wC = new Array(QC);
+       for (let bC = 0; bC < QC; bC++) {
+         wC[bC] = new Array(6);
+         for (let QC = 0; QC < 6; QC++) {
+           const nC = ZC.mipmaps[6 * bC + QC];
+           wC[bC][QC] = new Uint8Array(CC.buffer, CC.byteOffset + zC.binaryDataPosition + nC.position, nC.length)
+         }
+       }
+       return wC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L42-L53` → after: `L54-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L54-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L54-L66) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L42-L53)

```diff
-   },
-   41763: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "bonesVertex",
-       Oq = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+ 
+     function PC(CC, zC) {
+       zC = SC(zC);
+       const ZC = new Array(6),
+         QC = zC.irradiance?.irradianceTexture;
+       if (QC) {
+         if (6 !== QC.faces.length) throw new Error(`Incorrect irradiance texture faces number "${QC.faces.length}"`);
+         for (let wC = 0; wC < 6; wC++) {
+           const bC = QC.faces[wC];
+           ZC[wC] = new Uint8Array(CC.buffer, CC.byteOffset + zC.binaryDataPosition + bC.position, bC.length)
+         }
+       }
+       return ZC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L55-L66` → after: `L68-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L68-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L68-L82) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L55-L66)

```diff
-   },
-   41798: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertex",
-       Oq = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+ 
+     function GC(CC, zC, ZC) {
+       const QC = (ZC = SC(ZC)).specular;
+       if (!QC) return Promise.resolve([]);
+       CC._lodGenerationScale = QC.lodGenerationScale;
+       const bC = [],
+         nC = pC(zC, ZC);
+       bC.push(AC(CC, nC, ZC.imageType));
+       const fC = ZC.irradiance?.irradianceTexture;
+       if (fC) {
+         const QC = PC(zC, ZC);
+         let nC = null;
+         ZC.irradiance?.irradianceTexture?.dominantDirection && (nC = wC.r.FromArray(ZC.irradiance.irradianceTexture.dominantDirection)), bC.push(xC(CC, QC, fC.size, ZC.imageType, nC))
+       }
+       return Promise.all(bC)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L68-L79` → after: `L84-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L84-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L84-L104) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L68-L79)

```diff
-   },
-   41715: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertexDeclaration",
-       Oq = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     async function RC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
+       return await new Promise(((WC, NC) => {
+         if (ZC) {
+           const ZC = zC.createTexture(null, !0, !0, null, 1, null, (CC => {
+             NC(CC)
+           }), CC);
+           QC?.onEffectCreatedObservable.addOnce((fC => {
+             fC.executeWhenCompiled((() => {
+               QC.externalTextureSamplerBinding = !0, QC.onApply = QC => {
+                 QC._bindTexture("textureSampler", ZC), QC.setFloat2("scale", 1, zC._features.needsInvertingBitmap && CC instanceof ImageBitmap ? -1 : 1)
+               }, zC.scenes.length && (zC.scenes[0].postProcessManager.directRender([QC], qC, !0, bC, nC), zC.restoreDefaultFramebuffer(), ZC.dispose(), URL.revokeObjectURL(wC), WC())
+             }))
+           }))
+         } else {
+           if (zC._uploadImageToTexture(FC, CC, bC, nC), fC) {
+             const ZC = oC[nC];
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L81-L92` → after: `L106-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L106-L109) · [Before (L81-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L81-L92)

```diff
-   },
-   41634: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "decalVertexDeclaration",
-       Oq = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     async function AC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NC;
+       const QC = CC.mg();
+       CC.format = 5, CC.type = 0, CC.generateMipMaps = !0, CC._cachedAnisotropicFilteringLevel = null, QC.updateTextureSamplingMode(3, CC), await JC(CC, zC, !0, ZC), CC.isReady = !0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L94-L105` → after: `L111-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L111-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L111-L117) · [Before (L94-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L94-L105)

```diff
-   },
-   41801: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "fogVertex",
-       Oq = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     async function xC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NC,
+         wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+       const bC = CC.mg(),
+         nC = new fC.c(bC, 5),
+         qC = new oC.b(bC, nC);
+       CC._irradianceTexture = qC, qC._dominantDirection = wC, nC.isCube = !0, nC.format = 5, nC.type = 0, nC.generateMipMaps = !0, nC._cachedAnisotropicFilteringLevel = null, nC.generateMipMaps = !0, nC.width = ZC, nC.height = ZC, bC.updateTextureSamplingMode(3, nC), await JC(nC, … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L107-L118` → after: `L119-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L119-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L119-L213) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L107-L118)

```diff
-   },
-   41722: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "fogVertexDeclaration",
-       Oq = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     async function JC(CC, zC, wC) {
+       let nC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NC;
+       if (!(0, QC.h)(CC.width)) throw new Error("Texture size must be a power of two");
+       const FC = (0, bC.ILog2)(CC.width) + 1,
+         MC = CC.mg();
+       let gC = !1,
+         SC = !1,
+         pC = null,
+         PC = null,
+         GC = null;
+       const AC = MC.getCaps();
+       AC.textureLOD ? MC._features.supportRenderAndCopyToLodForFloatTextures ? AC.textureHalfFloatRender && AC.textureHalfFloatLinearFiltering ? (gC = !0, CC.type = 2) : AC.textureFloatRender && AC.textureFloatLinearFiltering && (gC = !0, CC.type = 1) : gC = !1 : (gC = !1, SC = w … [truncated]
+       let xC = 0;
+       if (gC) MC.isWebGPU ? (xC = 1, await ZC.e(342).then((() => ZC(61040)))) : await ZC.e(324).then((() => ZC(61045))), pC = new qC.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, MC, !1, void 0, CC.type, void 0, null, !1, void 0, xC), CC._isRGBD = !1, CC.invertY = !1, PC  … [truncated]
+         generateDepthBuffer: !1,
+         generateMipMaps: !0,
+ ... (79 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L120-L131` → after: `L215-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L215-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L215-L220) · [Before (L120-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L120-L131)

```diff
-   },
-   41670: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "helperFunctions",
-       Oq = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+ 
+     function IC(CC, zC) {
+       const ZC = (zC = SC(zC)).irradiance;
+       if (!ZC) return;
+       const QC = new nC.g;
+       wC.r.FromArrayToRef(ZC.x, 0, QC.x), wC.r.FromArrayToRef(ZC.y, 0, QC.y), wC.r.FromArrayToRef(ZC.z, 0, QC.z), wC.r.FromArrayToRef(ZC.xx, 0, QC.xx), wC.r.FromArrayToRef(ZC.yy, 0, QC.yy), wC.r.FromArrayToRef(ZC.zz, 0, QC.zz), wC.r.FromArrayToRef(ZC.yz, 0, QC.yz), wC.r.FromArray … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L133-L144` → after: `L222-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L222-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L222-L245) · [Before (L133-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L133-L144)

```diff
-   },
-   41683: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "instancesDeclaration",
-       Oq = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var iC = ZC(41655);
+     class vC {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData(CC, zC, ZC, QC, wC) {
+         if (Array.isArray(CC)) return;
+         const bC = gC(CC);
+         if (bC) {
+           zC.width = bC.width, zC.height = bC.width;
+           try {
+             (0, iC.e)(), IC(zC, bC), GC(zC, CC, bC).then((() => {
+               zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), QC && QC()
+             }), (CC => {
+               wC?.("Can not upload environment levels", CC)
+             }))
+ ... (8 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L147-L303` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L248) · [Before (L147-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L147-L303)

```diff
-   41761: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "instancesVertex",
-       Oq = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41724: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
- ... (141 more removed lines; see GitHub link above)
+   41655: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L307-L313` → after: `L252-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L252-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L252-L274) · [Before (L307-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L307-L313)

```diff
-     var Yq = gq(39617);
-     const lq = "prePassVertexDeclaration",
-       Oq = "#ifdef PREPASS\n#ifdef PREPASS_LOCAL_POSITION\nvarying vec3 vPosition;\n#endif\n#ifdef PREPASS_DEPTH\nvarying vec3 vViewPos;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvarying float vNormViewDepth;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(41590),
+       wC = ZC(39803);
+     let bC = !1;
+ 
+     function nC() {
+       bC || (bC = !0, wC.b.prototype._sphericalPolynomialTargetSize = 0, wC.b.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(wC.b.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = QC.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = CC, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+ ... (7 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L316-L329` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L277) · [Before (L316-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L316-L329)

```diff
-   41706: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "samplerVertexDeclaration",
-       Oq = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying vec2 v_VARYINGNAME_UV;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41789: (qq, Eq, gq) => {
+   41590: (CC, zC, ZC) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L333-L339` → after: `L281-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L281-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L281-L289) · [Before (L333-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L333-L339)

```diff
-     var Yq = gq(39617);
-     const lq = "samplerVertexImplementation",
-       Oq = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (v_INFONAME_==0.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));}\n#ifdef UV2\nelse if (v_INFONAME_==1.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2Updated,1.0,0.0));}\n#endif\n#ifd … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(36963),
+       wC = ZC(36991),
+       bC = ZC(39800),
+       nC = ZC(36968),
+       fC = ZC(37142);
+     class oC {
+       constructor(CC, zC, ZC, QC) {
+         this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
+       }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L341-L352` → after: `L291-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L291-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L291-L416) · [Before (L341-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L341-L352)

```diff
-   },
-   41642: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "sceneUboDeclaration",
-       Oq = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     class qC {
+       static _NearestPow2Floor(CC) {
+         return CC <= 1 ? 1 : 1 << Math.floor(Math.log2(CC))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(CC) {
+         if (!CC.isCube) return null;
+         CC.Km()?.mg().flushFramebuffer();
+         const zC = CC.getSize().width,
+           ZC = CC._sphericalPolynomialTargetSize,
+           QC = ZC > 0 ? this._NearestPow2Floor(ZC) : 0,
+           wC = !CC.noMipmap && !0 === CC._texture?.generateMipMaps,
+           bC = QC > 0 && QC < zC && wC,
+           nC = bC ? Math.max(0, Math.round(Math.log2(zC / QC))) : 0,
+           fC = bC ? Math.max(1, Math.floor(zC / Math.pow(2, nC))) : zC,
+           oC = CC.readPixels(0, nC, void 0, !1),
+           qC = CC.readPixels(1, nC, void 0, !1);
+ ... (110 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L355` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L420) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L355)

```diff
-   41803: (qq, Eq, gq) => {
+   41630: (CC, zC, ZC) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L359-L404` → after: `L424-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L424-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/308.js#L424-L462) · [Before (L359-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/308.js#L359-L404)

```diff
-     var Yq = gq(39617);
-     const lq = "shadowsVertex",
-       Oq = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\nvPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;\n#ifdef USE_REVERSE_DEPTHBUFFER\nvDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{ … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41661: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "uvAttributeDeclaration",
-       Oq = "#ifdef UV{X}\nattribute vec2 uv{X};\n#endif\n";
- ... (30 more removed lines; see GitHub link above)
+     var QC = ZC(41618),
+       wC = ZC(41634);
+     class bC {
+       static ExpandRGBDTexture(CC) {
+         const zC = CC._texture;
+         if (!zC || !CC.isRGBD) return;
+         const wC = zC.mg(),
+           bC = wC.getCaps(),
+           nC = zC.isReady;
+         let fC = !1;
+         bC.textureHalfFloatRender && bC.textureHalfFloatLinearFiltering ? (fC = !0, zC.type = 2) : bC.textureFloatRender && bC.textureFloatLinearFiltering && (fC = !0, zC.type = 1), fC && (zC.isReady = !1, zC._isRGBD = !1, zC.invertY = !1);
+         const oC = async () => {
+           const bC = wC.isWebGPU,
+             nC = bC ? 1 : 0;
+           zC.isReady = !1, bC ? await ZC.e(342).then((() => ZC(61040))) : await ZC.e(324).then((() => ZC(61045)));
+           const fC = new QC.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, wC, !1, void 0, zC.type, void 0, null, !1, void 0, nC);
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/309.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/309.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/309.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/309.js#L4-L6)

```diff
-   41815: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
+   41598: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       _IESTextureLoader: () => fC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L8-L14` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/309.js#L8-L11) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/309.js#L8-L14)

```diff
-     var Yq = gq(39617);
-     const lq = "decalFragmentDeclaration",
-       Oq = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(36991);
+ 
+     function wC(CC) {
+       return CC.split(" ").filter((CC => "" !== CC)).map((CC => parseFloat(CC)))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L16-L27` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/309.js#L13-L18) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/309.js#L16-L27)

```diff
-   },
-   41941: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "depthPrePass",
-       Oq = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+ 
+     function bC(CC, zC, ZC) {
+       for (; ZC.length !== zC;) {
+         const zC = wC(CC.lines[CC.index++]);
+         ZC.push(...zC)
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L29-L40` → after: `L20-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L20-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/309.js#L20-L44) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/309.js#L29-L40)

```diff
-   },
-   41843: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "lightFragmentDeclaration",
-       Oq = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+ 
+     function nC(CC, zC, ZC) {
+       let wC = 0,
+         bC = 0,
+         nC = 0,
+         fC = 0,
+         oC = 0,
+         qC = 0;
+       for (let QC = 0; QC < CC.numberOfHorizontalAngles - 1; QC++)
+         if (ZC < CC.horizontalAngles[QC + 1] || QC === CC.numberOfHorizontalAngles - 2) {
+           bC = QC, nC = CC.horizontalAngles[QC], fC = CC.horizontalAngles[QC + 1];
+           break
+         } for (let QC = 0; QC < CC.numberOfVerticalAngles - 1; QC++)
+         if (zC < CC.verticalAngles[QC + 1] || QC === CC.numberOfVerticalAngles - 2) {
+           wC = QC, oC = CC.verticalAngles[QC], qC = CC.verticalAngles[QC + 1];
+           break
+ ... (9 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L42-L183` → after: `L46-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L46-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/309.js#L46-L100) · [Before (L42-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/309.js#L42-L183)

```diff
-   },
-   41852: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "lightUboDeclaration",
-       Oq = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41856: (qq, Eq, gq) => {
-     gq.d(Eq, {
- ... (126 more removed lines; see GitHub link above)
+     class fC {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData() {
+         throw ".ies not supported in Cube."
+       }
+       loadData(CC, zC, ZC) {
+         const QC = function(CC) {
+           const zC = {
+               lines: new TextDecoder("utf-8").decode(CC).split("\n"),
+               index: 0
+             },
+             ZC = {
+               version: zC.lines[0],
+               candelaValues: [],
+ ... (39 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/310.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/310.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L4-L252` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/310.js#L4) · [Before (L4-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/310.js#L4-L252)

```diff
-   41926: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "bumpFragment",
-       Oq = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41901: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
- ... (233 more removed lines; see GitHub link above)
+   41604: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L254` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/310.js#L6) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/310.js#L254)

```diff
-       geometryPixelShader: () => iq
+       _BasisTextureLoader: () => GC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L256-L261` → after: `L8-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L8-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/310.js#L8-L135) · [Before (L256-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/310.js#L256-L261)

```diff
-     var Yq = gq(39617),
-       lq = gq(41823),
-       Oq = gq(41905);
-     const mq = "mrtFragmentDeclaration",
-       xq = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     Yq.d.IncludesShadersStore[mq] || (Yq.d.IncludesShadersStore[mq] = xq);
+     var QC, wC = ZC(39913),
+       bC = ZC(38507),
+       nC = ZC(40303),
+       fC = ZC(39650);
+ 
+     function oC() {
+       const CC = 0,
+         zC = 1,
+         ZC = 2,
+         QC = 3,
+         wC = 6,
+         bC = 8,
+         nC = 9,
+         fC = 10,
+         oC = 14;
+       let qC = null;
+ ... (112 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L263-L264` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/310.js#L137-L138) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/310.js#L263-L264)

```diff
-       name: mq,
-       shader: xq
+       JSModuleURL: `${wC.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
+       WasmModuleURL: `${wC.g._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L266-L290` → after: `L140-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L140-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/310.js#L140-L284) · [Before (L266-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/310.js#L266-L290)

```diff
-     var cq = gq(41894),
-       uq = gq(41869),
-       Bq = gq(41901),
-       Wq = gq(41670),
-       Nq = gq(61530),
-       aq = gq(61711),
-       Vq = gq(41642),
-       dq = gq(61509),
-       jq = gq(61716),
-       Hq = gq(61570),
-       oq = gq(41877),
-       Pq = gq(61721),
-       Qq = gq(61728),
-       yq = gq(41921),
-       tq = gq(41926),
-       rq = gq(61735),
- ... (9 more removed lines; see GitHub link above)
+     let FC = null,
+       WC = null,
+       NC = 0;
+     const MC = async () => (FC || (FC = new Promise(((CC, zC) => {
+       WC ? CC(WC) : wC.g.LoadFileAsync(wC.g.GetBabylonScriptURL(qC.WasmModuleURL)).then((ZC => {
+         if ("function" !== typeof URL) return zC("Basis transcoder requires an environment with a URL constructor");
+         const QC = URL.createObjectURL(new Blob([`(${oC})()`], {
+           type: "application/javascript"
+         }));
+         WC = new Worker(QC), async function(CC, zC, ZC) {
+           return await new Promise(((QC, bC) => {
+             const nC = zC => {
+               "init" === zC.data.action ? (CC.removeEventListener("message", nC), QC(CC)) : "error" === zC.data.action && bC(zC.data.error || "error initializing worker")
+             };
+             CC.addEventListener("message", nC), CC.postMessage({
+               action: "init",
+ ... (129 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/311.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/311.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L4)

```diff
-   41772: (qq, Eq, gq) => {
+   41638: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L6-L19` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L6) · [Before (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L6-L19)

```diff
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "bakedVertexAnimation",
-       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41678: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
+       e: () => PC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L21-L27` → after: `L8-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L8-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L8-L341) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L21-L27)

```diff
-     var Yq = gq(39617);
-     const lq = "bakedVertexAnimationDeclaration",
-       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(36987),
+       wC = ZC(36963),
+       bC = ZC(40303),
+       nC = ZC(39962),
+       fC = ZC(39747),
+       oC = ZC(38507),
+       qC = ZC(39950),
+       FC = ZC(39978),
+       WC = ZC(36971),
+       NC = ZC(39712),
+       MC = ZC(39925),
+       gC = ZC(40022);
+     class SC {
+       get renderList() {
+         return this._renderList
+       }
+ ... (318 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L29-L40` → after: `L343-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L343-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L343-L742) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L29-L40)

```diff
-   },
-   41673: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "bonesDeclaration",
-       Oq = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     SC.REFRESHRATE_RENDER_ONCE = 0, SC.REFRESHRATE_RENDER_ONEVERYFRAME = 1, SC.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
+     var pC = ZC(39694);
+     class PC extends bC.h {
+       get renderListPredicate() {
+         return this._objectRenderer.renderListPredicate
+       }
+       set renderListPredicate(CC) {
+         this._objectRenderer.renderListPredicate = CC
+       }
+       get renderList() {
+         return this._objectRenderer.renderList
+       }
+       set renderList(CC) {
+         this._objectRenderer.renderList = CC
+       }
+       get particleSystemList() {
+ ... (384 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L43` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L747) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L43)

```diff
-   41763: (qq, Eq, gq) => {
+   41622: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L47-L50` → after: `L752-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L752-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L752-L756) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L47-L50)

```diff
-     var Yq = gq(39617);
-     const lq = "bonesVertex",
-       Oq = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39959),
+       wC = ZC(37931),
+       bC = ZC(36987),
+       nC = ZC(39666),
+       fC = ZC(40148);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L52-L53` → after: `L758-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L758-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L758-L810) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L52-L53)

```diff
-       name: lq,
-       shader: Oq
+       positions: [1, 1, -1, 1, -1, -1, 1, -1],
+       indices: [0, 1, 2, 0, 2, 3]
+     };
+     class qC {
+       constructor(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oC;
+         this._fullscreenViewport = new wC.d(0, 0, 1, 1);
+         const ZC = zC.positions ?? oC.positions,
+           bC = zC.indices ?? oC.indices;
+         this.engine = CC, this._vertexBuffers = {
+           [QC.k.PositionKind]: new QC.k(CC, ZC, QC.k.PositionKind, !1, !1, 2)
+         }, this._indexBuffer = CC.createIndexBuffer(bC), this._indexBufferLength = bC.length, this._onContextRestoredObserver = CC.Yg.add((() => {
+           this._indexBuffer = CC.createIndexBuffer(bC);
+           for (const CC in this._vertexBuffers) {
+             this._vertexBuffers[CC]._rebuild()
+           }
+ ... (37 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L55-L66` → after: `L812-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L812-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L812-L932) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L55-L66)

```diff
-   },
-   41792: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "bumpVertex",
-       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     class FC {
+       static RegisterShaderCodeProcessing(CC, zC) {
+         zC ? FC._CustomShaderCodeProcessing[CC ?? ""] = zC : delete FC._CustomShaderCodeProcessing[CC ?? ""]
+       }
+       static _GetShaderCodeProcessing(CC) {
+         return FC._CustomShaderCodeProcessing[CC] ?? FC._CustomShaderCodeProcessing[""]
+       }
+       get name() {
+         return this.options.name
+       }
+       set name(CC) {
+         this.options.name = CC
+       }
+       isReady() {
+         return this._drawWrapper.effect?.isReady() ?? !1
+       }
+ ... (105 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L69-L71` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L936-L944) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L69-L71)

```diff
-   41798: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
+   41648: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       Dispose: () => GC,
+       DumpData: () => PC,
+       DumpDataAsync: () => pC,
+       DumpFramebuffer: () => SC,
+       DumpTools: () => RC,
+       EncodeImageAsync: () => gC,
+       RegisterDumpTools: () => xC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L73-L79` → after: `L946-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L946-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L946-L993) · [Before (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L73-L79)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertex",
-       Oq = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(39811),
+       wC = ZC(41622),
+       bC = ZC(39913),
+       nC = ZC(36991),
+       fC = ZC(36985),
+       oC = ZC(38507),
+       qC = ZC(39878),
+       FC = ZC(39818);
+     let WC = null;
+     async function NC() {
+       return WC || (WC = async function() {
+         const CC = fC.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
+         CC instanceof OffscreenCanvas && oC.c.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
+         const {
+           ThinEngine: zC
+         } = await Promise.resolve().then((() => ZC(39663)));
+ ... (32 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L81-L92` → after: `L995-L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L995-L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L995-L1036) · [Before (L81-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L81-L92)

```diff
-   },
-   41715: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertexDeclaration",
-       Oq = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     let MC = (() => {
+       var CC;
+       let zC, ZC = [];
+       return CC = class {
+         static async EncodeImageAsync(CC, zC, ZC, QC, wC, nC) {
+           const fC = await NC(),
+             oC = fC.dumpEngine;
+           oC.engine.setSize(zC, ZC, !0);
+           const qC = oC.engine.createRawTexture(CC, zC, ZC, 5, !1, !wC, 1);
+           return oC.renderer.setViewport(), oC.renderer.applyEffectWrapper(oC.wrapper), oC.wrapper.effect._bindTexture("textureSampler", qC), oC.renderer.draw(), qC.dispose(), await new Promise(((CC, zC) => {
+             bC.g.ToBlob(fC.canvas, (ZC => {
+               ZC ? CC(ZC) : zC(new Error("EncodeImageAsync: Failed to convert canvas to blob."))
+             }), QC, nC)
+           }))
+         }
+       }, (() => {
+ ... (26 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L94-L105` → after: `L1038-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1038-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1038-L1056) · [Before (L94-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L94-L105)

```diff
-   },
-   61516: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "harmonicsFunctions",
-       Oq = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     async function pC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         wC = arguments.length > 4 ? arguments[4] : void 0,
+         fC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         FC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         WC = arguments.length > 7 ? arguments[7] : void 0;
+       if (ZC instanceof Float32Array) {
+         const CC = new Uint8Array(ZC.length);
+         let zC = ZC.length;
+         for (; zC--;) {
+           const QC = ZC[zC];
+           CC[zC] = Math.round(255 * (0, nC.Clamp)(QC))
+         }
+         ZC = CC
+       }
+       const NC = await MC.EncodeImageAsync(ZC, CC, zC, QC, fC, WC);
+ ... (3 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L107-L118` → after: `L1058-L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1058-L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1058-L1063) · [Before (L107-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L107-L118)

```diff
-   },
-   41683: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "instancesDeclaration",
-       Oq = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+ 
+     function PC(CC, zC, ZC, QC) {
+       let wC = arguments.length > 5 ? arguments[5] : void 0;
+       void 0 !== wC || QC || (wC = ""), pC(CC, zC, ZC, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", wC, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
+         QC && QC(CC)
+       }))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L120-L131` → after: `L1065-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1065-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1065-L1069) · [Before (L120-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L120-L131)

```diff
-   },
-   41761: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "instancesVertex",
-       Oq = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+ 
+     function GC() {
+       WC && (WC?.then((CC => {
+         CC.canvas instanceof HTMLCanvasElement && CC.canvas.remove(), CC.dumpEngine && (CC.dumpEngine.engine.dispose(), CC.dumpEngine.renderer.dispose(), CC.dumpEngine.wrapper.dispose())
+       })), WC = null)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L143-L144` → after: `L1072-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1072-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1072-L1082) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L143-L144)

```diff
-       name: lq,
-       shader: Oq
+       DumpData: PC,
+       DumpDataAsync: pC,
+       DumpFramebuffer: SC,
+       Dispose: GC
+     };
+     let AC = !1;
+ 
+     function xC() {
+       if (AC) return;
+       AC = !0;
+       bC.g.DumpData = PC, bC.g.DumpDataAsync = pC, bC.g.DumpFramebuffer = SC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L147` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1085) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L147)

```diff
-   41738: (qq, Eq, gq) => {
+   41634: (CC, zC, ZC) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L149` → after: `L1087-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1087-L1089) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L149)

```diff
-       d: () => mq
+       b: () => MC,
+       d: () => gC,
+       f: () => SC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L151-L157` → after: `L1091-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1091-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1091-L1202) · [Before (L151-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L151-L157)

```diff
-     var Yq = gq(39617);
-     const lq = "morphTargetsVertexDeclaration",
-       Oq = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(40303),
+       wC = ZC(41638),
+       bC = ZC(39811),
+       nC = ZC(41618),
+       fC = ZC(39842),
+       oC = ZC(41640),
+       qC = ZC(39818);
+     class FC extends nC.d {
+       getClassName() {
+         return "PassPostProcess"
+       }
+       constructor(CC, zC) {
+         let ZC = arguments.length > 4 ? arguments[4] : void 0;
+         const QC = {
+           size: "number" === typeof zC ? zC : void 0,
+           camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+ ... (96 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L159-L170` → after: `L1204-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1204-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1204-L1366) · [Before (L159-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L159-L170)

```diff
-   },
-   41754: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "morphTargetsVertexGlobal",
-       Oq = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nfloat vertexID;\n#endif\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     async function gC(CC, zC, bC) {
+       let fC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         oC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
+         qC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         FC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+       await async function(CC) {
+         if (CC.isReady()) return;
+         if (CC.loadingError) throw new Error(CC.errorObject?.message || `Texture ${CC.name} errored while loading.`);
+         const zC = CC.onLoadObservable;
+         if (zC) return await new Promise((CC => zC.addOnce((() => CC()))));
+         const ZC = CC._texture?.onLoadedObservable;
+         if (ZC) return await new Promise((CC => ZC.addOnce((() => CC()))));
+         throw new Error(`Cannot determine readiness of texture ${CC.name}.`)
+       }(CC);
+       const NC = CC.getInternalTexture(),
+         MC = CC.is3D || !!NC?.is3D,
+ ... (147 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L182-L183` → after: `L1369-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1369-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1369-L1392) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L182-L183)

```diff
-       name: lq,
-       shader: Oq
+       CreateResizedCopy: function(CC, zC, ZC) {
+         let bC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         const nC = CC.Km(),
+           fC = nC.mg(),
+           oC = new wC.e("resized" + CC.name, {
+             width: zC,
+             height: ZC
+           }, nC, !CC.noMipmap, !0, CC._texture.type, !1, CC.samplingMode, !1);
+         oC.wrapU = CC.wrapU, oC.wrapV = CC.wrapV, oC.uOffset = CC.uOffset, oC.vOffset = CC.vOffset, oC.uScale = CC.uScale, oC.vScale = CC.vScale, oC.uAng = CC.uAng, oC.vAng = CC.vAng, oC.wAng = CC.wAng, oC.coordinatesIndex = CC.coordinatesIndex, oC.level = CC.level, oC.anisotropi … [truncated]
+         const qC = new FC("pass", 1, null, bC ? QC.h.BILINEAR_SAMPLINGMODE : QC.h.NEAREST_SAMPLINGMODE, fC, !1, 0);
+         return qC.externalTextureSamplerBinding = !0, qC.onEffectCreatedObservable.addOnce((zC => {
+           zC.executeWhenCompiled((() => {
+             qC.onApply = function(zC) {
+               zC.setTexture("textureSampler", CC)
+             };
+             const zC = oC.renderTarget;
+ ... (8 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L186` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1395) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L186)

```diff
-   41642: (qq, Eq, gq) => {
+   41618: (CC, zC, ZC) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L190-L196` → after: `L1399-L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1399-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1399-L1952) · [Before (L190-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L190-L196)

```diff
-     var Yq = gq(39617);
-     const lq = "sceneUboDeclaration",
-       Oq = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(39811),
+       wC = ZC(39925),
+       bC = ZC(36987),
+       nC = ZC(36963),
+       fC = ZC(39666),
+       oC = ZC(39818),
+       qC = ZC(39842),
+       FC = ZC(37002),
+       WC = ZC(39721),
+       NC = ZC(39747),
+       MC = ZC(41622);
+     let gC = (() => {
+         var CC;
+         let zC, fC, WC, gC, SC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC = [],
+           YC = [],
+           dC = [],
+ ... (538 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L199-L201` → after: `L1955-L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1955-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1955-L1958) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L199-L201)

```diff
-   61793: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       geometryVertexShader: () => bq
+   41640: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC,
+       g: () => bC
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L203-L240` → after: `L1960-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L1960-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/311.js#L1960-L2018) · [Before (L203-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/311.js#L203-L240)

```diff
-     var Yq = gq(39617),
-       lq = gq(41673),
-       Oq = gq(41678),
-       mq = gq(41735),
-       xq = gq(41738),
-       Aq = gq(41683);
-     const cq = "geometryVertexDeclaration",
-       uq = "uniform mat4 viewProjection;uniform mat4 view;";
-     Yq.d.IncludesShadersStore[cq] || (Yq.d.IncludesShadersStore[cq] = uq);
-     const Bq = {
-       name: cq,
-       shader: uq
-     };
-     var Wq = gq(41642);
-     const Nq = "geometryUboDeclaration",
-       aq = "#include<sceneUboDeclaration>\n";
- ... (22 more removed lines; see GitHub link above)
+     var QC = ZC(41622),
+       wC = ZC(36985);
+     class bC extends QC.e {
+       _gatherImports(CC, zC) {
+         CC ? (this._webGPUReady = !0, zC.push(Promise.all([ZC.e(371).then((() => ZC(61101)))]))) : zC.push(Promise.all([ZC.e(372).then((() => ZC(61109)))])), super._gatherImports(CC, zC)
+       }
+       constructor(CC) {
+         let zC = arguments.length > 2 ? arguments[2] : void 0;
+         const ZC = {
+           name: CC,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || wC.c.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: bC.FragmentUrl,
+           ...zC
+         };
+ ... (43 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/312.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/312.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L5-L6` → after: `L5-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L5-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/312.js#L5-L6) · [Before (L5-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/312.js#L5-L6)

```diff
-     gq.d(Eq, {
-       b: () => mq
+     ZC.r(zC), ZC.d(zC, {
+       _HDRTextureLoader: () => FC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L8-L15` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/312.js#L8-L74) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/312.js#L8-L15)

```diff
-     var Yq = gq(39617);
-     gq(41642), gq(41651);
-     const lq = "defaultUboDeclaration",
-       Oq = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(36963);
+     class wC {
+       static ConvertPanoramaToCubemap(CC, zC, ZC, QC) {
+         let wC, bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!CC) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (CC.length != zC * ZC * 3) {
+           if (CC.length != zC * ZC * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           wC = 4
+         } else wC = 3;
+         return {
+           front: this.CreateCubemapTexture(QC, this.FACE_FRONT, CC, zC, ZC, bC, nC, wC),
+           back: this.CreateCubemapTexture(QC, this.FACE_BACK, CC, zC, ZC, bC, nC, wC),
+           left: this.CreateCubemapTexture(QC, this.FACE_LEFT, CC, zC, ZC, bC, nC, wC),
+           right: this.CreateCubemapTexture(QC, this.FACE_RIGHT, CC, zC, ZC, bC, nC, wC),
+           up: this.CreateCubemapTexture(QC, this.FACE_UP, CC, zC, ZC, bC, nC, wC),
+ ... (51 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L17-L90` → after: `L76-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L76-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/312.js#L76-L171) · [Before (L17-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/312.js#L17-L90)

```diff
-   },
-   41813: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       defaultPixelShader: () => Dq
-     });
-     var Yq = gq(39617),
-       lq = gq(41815);
-     const Oq = "defaultFragmentDeclaration",
-       mq = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
-     Yq.d.IncludesShadersStore[Oq] || (Yq.d.IncludesShadersStore[Oq] = mq);
-     const xq = {
-       name: Oq,
-       shader: mq
-     };
-     var Aq = gq(41642),
-       cq = gq(41651),
- ... (58 more removed lines; see GitHub link above)
+ 
+     function bC(CC, zC, ZC, QC, wC, bC) {
+       wC > 0 ? (wC = function(CC, zC) {
+         return zC > 1023 ? CC * Math.pow(2, 1023) * Math.pow(2, zC - 1023) : zC < -1074 ? CC * Math.pow(2, -1074) * Math.pow(2, zC + 1074) : CC * Math.pow(2, zC)
+       }(1, wC - 136), CC[bC + 0] = zC * wC, CC[bC + 1] = ZC * wC, CC[bC + 2] = QC * wC) : (CC[bC + 0] = 0, CC[bC + 1] = 0, CC[bC + 2] = 0)
+     }
+ 
+     function nC(CC, zC) {
+       let ZC, QC = "";
+       for (let wC = zC; wC < CC.length - zC && (ZC = String.fromCharCode(CC[wC]), "\n" != ZC); wC++) QC += ZC;
+       return QC
+     }
+ 
+     function fC(CC) {
+       let zC = nC(CC, 0);
+       if ("#" != zC[0] || "?" != zC[1]) throw "Bad HDR Format.";
+ ... (80 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/313.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/313.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207)

#### 1. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/313.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/313.js#L4-L6)

```diff
-   41921: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
+   41665: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       _KTXTextureLoader: () => gC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L8-L14` → after: `L8-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L8-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/313.js#L8-L391) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/313.js#L8-L14)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneFragment",
-       Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
+     var QC = ZC(38507);
+     class wC {
+       constructor(CC, zC) {
+         if (this.data = CC, this.isInvalid = !1, !wC.IsValid(CC)) return this.isInvalid = !0, void QC.c.Error("texture missing KTX identifier");
+         const ZC = Uint32Array.BYTES_PER_ELEMENT,
+           bC = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ZC),
+           nC = 67305985 === bC.getUint32(0, !0);
+         return this.glType = bC.getUint32(1 * ZC, nC), this.glTypeSize = bC.getUint32(2 * ZC, nC), this.glFormat = bC.getUint32(3 * ZC, nC), this.glInternalFormat = bC.getUint32(4 * ZC, nC), this.glBaseInternalFormat = bC.getUint32(5 * ZC, nC), this.pixelWidth = bC.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(CC, zC) {
+         switch (this.loadType) {
+           case wC.COMPRESSED_2D:
+             this._upload2DCompressedLevels(CC, zC);
+           case wC.TEX_2D:
+           case wC.COMPRESSED_3D:
+           case wC.TEX_3D:
+ ... (368 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L17-L30` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/313.js#L394) · [Before (L17-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/313.js#L17-L30)

```diff
-   41905: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "clipPlaneFragmentDeclaration",
-       Oq = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41956: (qq, Eq, gq) => {
+   41672: (CC, zC, ZC) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L34-L145` → after: `L398-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L398-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/313.js#L398-L457) · [Before (L34-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/313.js#L34-L145)

```diff
-     var Yq = gq(39617);
-     const lq = "fogFragment",
-       Oq = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41912: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "fogFragmentDeclaration",
-       Oq = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
- ... (96 more removed lines; see GitHub link above)
+     class QC {
+       constructor(CC) {
+         this._pendingActions = new Array, this._workerInfos = CC.map((CC => ({
+           workerPromise: Promise.resolve(CC),
+           idle: !0
+         })))
+       }
+       dispose() {
+         for (const CC of this._workerInfos) CC.workerPromise.then((CC => {
+           CC.terminate()
+         }));
+         this._workerInfos.length = 0, this._pendingActions.length = 0
+       }
+       push(CC) {
+         this._executeOnIdleWorker(CC) || this._pendingActions.push(CC)
+       }
+ ... (44 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/314.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/314.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/314.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/314.js#L4-L6)

```diff
-   41921: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
+   41679: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       _TGATextureLoader: () => fC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L8-L11` → after: `L8-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L8-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/314.js#L8-L86) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/314.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneFragment",
-       Oq = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(38507);
+ 
+     function wC(CC) {
+       let zC = 0;
+       return {
+         id_length: CC[zC++],
+         colormap_type: CC[zC++],
+         image_type: CC[zC++],
+         colormap_index: CC[zC++] | CC[zC++] << 8,
+         colormap_length: CC[zC++] | CC[zC++] << 8,
+         colormap_size: CC[zC++],
+         origin: [CC[zC++] | CC[zC++] << 8, CC[zC++] | CC[zC++] << 8],
+         width: CC[zC++] | CC[zC++] << 8,
+         height: CC[zC++] | CC[zC++] << 8,
+         pixel_size: CC[zC++],
+         flags: CC[17]
+ ... (63 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L13-L112` → after: `L88-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L88-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/314.js#L88-L99) · [Before (L13-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/314.js#L13-L112)

```diff
-       name: lq,
-       shader: Oq
-     }
-   },
-   41905: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "clipPlaneFragmentDeclaration",
-       Oq = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
- ... (84 more removed lines; see GitHub link above)
+       GetTGAHeader: wC,
+       UploadContent: bC,
+       _getImageData8bits: function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
+         const qC = ZC,
+           FC = zC,
+           WC = CC.width,
+           NC = CC.height;
+         let MC, gC, SC, pC = 0;
+         const PC = new Uint8Array(WC * NC * 4);
+         for (SC = QC; SC !== bC; SC += wC)
+           for (gC = nC; gC !== oC; gC += fC, pC++) MC = qC[pC], PC[4 * (gC + WC * SC) + 3] = 255, PC[4 * (gC + WC * SC) + 2] = FC[3 * MC + 0], PC[4 * (gC + WC * SC) + 1] = FC[3 * MC + 1], PC[4 * (gC + WC * SC) + 0] = FC[3 * MC + 2];
+         return PC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L114-L121` → after: `L101-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L101-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/314.js#L101-L171) · [Before (L114-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/314.js#L114-L121)

```diff
-       aq = "skyPixelShader",
-       Vq = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform floa … [truncated]
-     Yq.d.ShadersStore[aq] || (Yq.d.ShadersStore[aq] = Vq);
-     const dq = [lq.d, Oq.d, mq.e, xq.c, Aq.c, cq.d, uq.e, Nq];
-     for (const Hq of dq) Yq.d.IncludesShadersStore[Hq.name] || (Yq.d.IncludesShadersStore[Hq.name] = Hq.shader);
-     const jq = {
-       name: aq,
-       shader: Vq
+       _getImageData16bits: function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
+         const qC = ZC,
+           FC = CC.width,
+           WC = CC.height;
+         let NC, MC, gC, SC = 0;
+         const pC = new Uint8Array(FC * WC * 4);
+         for (gC = QC; gC !== bC; gC += wC)
+           for (MC = nC; MC !== oC; MC += fC, SC += 2) {
+             NC = qC[SC + 0] + (qC[SC + 1] << 8);
+             const CC = 255 * ((31744 & NC) >> 10) / 31 | 0,
+               zC = 255 * ((992 & NC) >> 5) / 31 | 0,
+               ZC = 255 * (31 & NC) / 31 | 0;
+             pC[4 * (MC + FC * gC) + 0] = CC, pC[4 * (MC + FC * gC) + 1] = zC, pC[4 * (MC + FC * gC) + 2] = ZC, pC[4 * (MC + FC * gC) + 3] = 32768 & NC ? 0 : 255
+           }
+         return pC
+       },
+ ... (55 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/315.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/315.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/315.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/315.js#L4-L6)

```diff
-   41670: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
+   41687: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       ReadExrDataAsync: () => Wz,
+       _ExrTextureLoader: () => Fz
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L8-L30` → after: `L9-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/315.js#L9-L771) · [Before (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/315.js#L8-L30)

```diff
-     var Yq = gq(39617);
-     const lq = "helperFunctions",
-       Oq = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61365: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       rgbdDecodePixelShader: () => Aq
-     });
-     var Yq = gq(39617),
-       lq = gq(41670);
-     const Oq = "rgbdDecodePixelShader",
- ... (7 more removed lines; see GitHub link above)
+     var QC = ZC(38507),
+       wC = ZC(36991),
+       bC = ZC(39889);
+     const nC = 4,
+       fC = 4,
+       oC = 1,
+       qC = 2,
+       FC = 8,
+       WC = 65536,
+       NC = WC >> 3,
+       MC = 14,
+       gC = 65537,
+       SC = 1 << MC,
+       pC = SC - 1,
+       PC = 59,
+       GC = 63,
+ ... (747 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/316.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/316.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/316.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/316.js#L4)

```diff
-   41670: (qq, Eq, gq) => {
+   41872: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/316.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/316.js#L6)

```diff
-       c: () => mq
+       b: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/316.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/316.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "helperFunctions",
-       Oq = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "bumpVertex",
+       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L17` → after: `L17-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L17-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/316.js#L17-L44) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/316.js#L17)

```diff
-   61377: (qq, Eq, gq) => {
+   41770: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "bumpVertexDeclaration",
+       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41714: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L19` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/316.js#L46) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/316.js#L19)

```diff
-       rgbdEncodePixelShader: () => Aq
+       defaultVertexShader: () => UC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L21-L27` → after: `L48-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L48-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/316.js#L48-L101) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/316.js#L21-L27)

```diff
-     var Yq = gq(39617),
-       lq = gq(41670);
-     const Oq = "rgbdEncodePixelShader",
-       mq = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
-     Yq.d.ShadersStore[Oq] || (Yq.d.ShadersStore[Oq] = mq);
-     const xq = [lq.c];
-     for (const cq of xq) Yq.d.IncludesShadersStore[cq.name] || (Yq.d.IncludesShadersStore[cq.name] = cq.shader);
+     var QC = ZC(39674),
+       wC = ZC(41699);
+     const bC = "defaultVertexDeclaration",
+       nC = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     QC.b.IncludesShadersStore[bC] || (QC.b.IncludesShadersStore[bC] = nC);
+     const fC = {
+       name: bC,
+       shader: nC
+     };
+     var oC = ZC(41703),
+       qC = ZC(41708),
+       FC = ZC(41714),
+       WC = ZC(41717),
+       NC = ZC(41726),
+       MC = ZC(41729),
+       gC = ZC(41737),
+ ... (38 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/317.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/317.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691)

#### 1. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L4-L8` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L4-L8) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L4-L8)

```diff
-   41772: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
+   41848: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L11-L21` → after: `L11-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L11-L21) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L11-L21)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41678: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41737: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L24-L34` → after: `L24-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L24-L34) · [Before (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L24-L34)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41673: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41729: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L37-L47` → after: `L37-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L37-L47) · [Before (L37-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L37-L47)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41763: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41846: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
+     });
+     var QC = ZC(39674);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L50-L60` → after: `L50-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L50-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L50-L60) · [Before (L50-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L50-L60)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41798: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41875: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L63-L73` → after: `L63-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L63-L73) · [Before (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L63-L73)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41715: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41778: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L76-L86` → after: `L76-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L76-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L76-L99) · [Before (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L76-L86)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41801: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41699: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "decalVertexDeclaration",
+       bC = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+ ... (8 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L89-L99` → after: `L102-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L102-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L102-L112) · [Before (L89-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L89-L99)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41722: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41787: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L102-L112` → after: `L115-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L115-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L115-L138) · [Before (L102-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L102-L112)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41683: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41726: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L115-L125` → after: `L141-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L141-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L141-L151) · [Before (L115-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L115-L125)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41761: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41837: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L128-L134` → after: `L154-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L154-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L154-L316) · [Before (L128-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L128-L134)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41805: (qq, Eq, gq) => {
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41795: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "lightVxFragmentDeclaration",
+       bC = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+ ... (147 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L138` → after: `L320-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L320-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L320-L398) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L138)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
+     const wC = "samplerVertexDeclaration",
+       bC = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nvarying vec2 v_VARYINGNAME_UV;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41863: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "samplerVertexImplementation",
+       bC = "#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0\nif (v_INFONAME_==0.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));}\n#ifdef UV2\nelse if (v_INFONAME_==1.)\n{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2Updated,1.0,0.0));}\n#endif\n#ifd … [truncated]
+ ... (63 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L141-L167` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/317.js#L401) · [Before (L141-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/317.js#L141-L167)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42324: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       colorVertexShader: () => Hq
-     });
-     var Yq = gq(39617),
-       lq = gq(41673),
-       Oq = gq(41678),
-       mq = gq(41715),
-       xq = gq(41722),
-       Aq = gq(41683),
- ... (11 more removed lines; see GitHub link above)
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/318.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/318.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/318.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/318.js#L4)

```diff
-   41683: (qq, Eq, gq) => {
+   41909: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/318.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/318.js#L6)

```diff
-       e: () => mq
+       c: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/318.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/318.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "instancesDeclaration",
-       Oq = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "decalFragmentDeclaration",
+       bC = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/318.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/318.js#L17)

```diff
-   41761: (qq, Eq, gq) => {
+   42033: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/318.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/318.js#L19)

```diff
-       b: () => mq
+       e: () => nC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/318.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/318.js#L21-L24)

```diff
-     var Yq = gq(39617);
-     const lq = "instancesVertex",
-       Oq = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "depthPrePass",
+       bC = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/318.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/318.js#L30-L32)

```diff
-   61844: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       greasedLineVertexShader: () => cq
+   41925: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L34-L41` → after: `L34-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L34-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/318.js#L34-L180) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/318.js#L34-L41)

```diff
-     var Yq = gq(39617),
-       lq = gq(41683),
-       Oq = gq(41761);
-     const mq = "greasedLineVertexShader",
-       xq = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
-     Yq.d.ShadersStore[mq] || (Yq.d.ShadersStore[mq] = xq);
-     const Aq = [lq.e, Oq.b];
-     for (const uq of Aq) Yq.d.IncludesShadersStore[uq.name] || (Yq.d.IncludesShadersStore[uq.name] = uq.shader);
+     var QC = ZC(39674);
+     const wC = "lightFragmentDeclaration",
+       bC = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41934: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "lightUboDeclaration",
+       bC = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
+ ... (131 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/319.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/319.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L4` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L4-L17) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L4)

```diff
-   41792: (qq, Eq, gq) => {
+   42020: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "bumpFragment",
+       bC = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41988: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L8-L11` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L21-L25) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpVertex",
-       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     ZC(41961);
+     const wC = "bumpFragmentFunctions",
+       bC = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L17` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L31) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L17)

```diff
-   41709: (qq, Eq, gq) => {
+   41982: (CC, zC, ZC) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L21-L24` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L35-L38) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L21-L24)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpVertexDeclaration",
-       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "bumpFragmentMainFunctions",
+       bC = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L30` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L44) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L30)

```diff
-   61516: (qq, Eq, gq) => {
+   42013: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L32` → after: `L46-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L46-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L46-L124) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L32)

```diff
-       e: () => mq
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragment",
+       bC = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41996: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+ ... (63 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L34-L37` → after: `L126-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L126-L129) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L34-L37)

```diff
-     var Yq = gq(39617);
-     const lq = "harmonicsFunctions",
-       Oq = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "openpbrIblFunctions",
+       bC = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L43` → after: `L135-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L135-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L135-L161) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L43)

```diff
-   61509: (qq, Eq, gq) => {
+   61439: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "openpbrSubsurfaceLayerData",
+       bC = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   61430: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+ ... (11 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L47` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L165) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L47)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L50` → after: `L168-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L168-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L168-L233) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L50)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   61222: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "pbrFragmentReflectionDeclaration",
+       bC = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+ ... (50 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L56` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L239) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L56)

```diff
-   61503: (qq, Eq, gq) => {
+   41703: (CC, zC, ZC) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L60-L64` → after: `L243-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L243-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L243-L246) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L60-L64)

```diff
-     var Yq = gq(39617);
-     gq(41642), gq(41651);
-     const lq = "pbrUboDeclaration",
-       Oq = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "sceneUboDeclaration",
+       bC = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L70` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L252) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L70)

```diff
-   61497: (qq, Eq, gq) => {
+   61505: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L72` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L254) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L72)

```diff
-       pbrVertexShader: () => wq
+       geometryPixelShader: () => YC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L74-L78` → after: `L256-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L256-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L256-L261) · [Before (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L74-L78)

```diff
-     var Yq = gq(39617),
-       lq = gq(41634);
-     const Oq = "pbrVertexDeclaration",
-       mq = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
-     Yq.d.IncludesShadersStore[Oq] || (Yq.d.IncludesShadersStore[Oq] = mq);
+     var QC = ZC(39674),
+       wC = ZC(41911),
+       bC = ZC(41996);
+     const nC = "mrtFragmentDeclaration",
+       fC = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
+     QC.b.IncludesShadersStore[nC] || (QC.b.IncludesShadersStore[nC] = fC);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L83-L122` → after: `L266-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L266-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/319.js#L266-L287) · [Before (L83-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/319.js#L83-L122)

```diff
-     var Aq = gq(41642),
-       cq = gq(41651),
-       uq = gq(61503),
-       Bq = gq(41661),
-       Wq = gq(41698),
-       Nq = gq(41670),
-       aq = gq(61509),
-       Vq = gq(41673),
-       dq = gq(41678),
-       jq = gq(41683),
-       Hq = gq(41692),
-       oq = gq(41706),
-       Pq = gq(61516),
-       Qq = gq(41709),
-       yq = gq(41715),
-       tq = gq(41722),
- ... (24 more removed lines; see GitHub link above)
+     var qC = ZC(41982),
+       FC = ZC(41961),
+       WC = ZC(41988),
+       NC = ZC(41726),
+       MC = ZC(61222),
+       gC = ZC(61414),
+       SC = ZC(41703),
+       pC = ZC(61189),
+       PC = ZC(61416),
+       GC = ZC(61261),
+       RC = ZC(41964),
+       AC = ZC(61418),
+       xC = ZC(61422),
+       JC = ZC(42013),
+       IC = ZC(42020),
+       iC = ZC(61439),
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/320.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/320.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68)

#### 1. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L4-L8` → after: `L4-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/320.js#L4-L73) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/320.js#L4-L8)

```diff
-   41798: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
+   41848: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "bakedVertexAnimation",
+       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41737: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+ ... (54 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L11-L21` → after: `L76-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L76-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/320.js#L76-L86) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/320.js#L11-L21)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41715: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41778: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L24-L63` → after: `L89-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L89-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/320.js#L89-L141) · [Before (L24-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/320.js#L24-L63)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41801: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "fogVertex",
-       Oq = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
- ... (24 more removed lines; see GitHub link above)
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   61198: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "harmonicsFunctions",
+       bC = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+ ... (37 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L71-L82` → after: `L149-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L149-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/320.js#L149-L199) · [Before (L71-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/320.js#L71-L82)

```diff
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "logDepthVertex",
-       Oq = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61167: (qq, Eq, gq) => {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "morphTargetsVertexDeclaration",
+       bC = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute vec3 position{X};\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute vec3 normal{X};\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute vec3 tangent{X};\n#endif\n#ifdef MORPHTARGETS_UV … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41824: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+ ... (35 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L84-L97` → after: `L201-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L201-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/320.js#L201-L237) · [Before (L84-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/320.js#L84-L97)

```diff
-       particlesVertexShader: () => Nq
-     });
-     var Yq = gq(39617),
-       lq = gq(41715),
-       Oq = gq(41722),
-       mq = gq(41747),
-       xq = gq(41798),
-       Aq = gq(41801),
-       cq = gq(41811);
-     const uq = "particlesVertexShader",
-       Bq = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
-     Yq.d.ShadersStore[uq] || (Yq.d.ShadersStore[uq] = Bq);
-     const Wq = [lq.b, Oq.e, mq.d, xq.b, Aq.d, cq.b];
-     for (const aq of Wq) Yq.d.IncludesShadersStore[aq.name] || (Yq.d.IncludesShadersStore[aq.name] = aq.shader);
+       geometryVertexShader: () => KC
+     });
+     var QC = ZC(39674),
+       wC = ZC(41729),
+       bC = ZC(41737),
+       nC = ZC(41808),
+       fC = ZC(41811),
+       oC = ZC(41740);
+     const qC = "geometryVertexDeclaration",
+       FC = "uniform mat4 viewProjection;uniform mat4 view;";
+     QC.b.IncludesShadersStore[qC] || (QC.b.IncludesShadersStore[qC] = FC);
+     const WC = {
+       name: qC,
+       shader: FC
+     };
+     var NC = ZC(41703);
+ ... (21 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/321.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/321.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80)

#### 1. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/321.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/321.js#L4)

```diff
-   41798: (qq, Eq, gq) => {
+   41714: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/321.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/321.js#L6)

```diff
-       b: () => mq
+       c: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L8-L11` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/321.js#L8-L12) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/321.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertex",
-       Oq = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     ZC(41703), ZC(41708);
+     const wC = "defaultUboDeclaration",
+       bC = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L17-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/321.js#L18-L20) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/321.js#L17-L19)

```diff
-   41715: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
+   41900: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       defaultPixelShader: () => VC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L21-L24` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/321.js#L22-L26) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/321.js#L21-L24)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertexDeclaration",
-       Oq = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674),
+       wC = ZC(41909);
+     const bC = "defaultFragmentDeclaration",
+       nC = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     QC.b.IncludesShadersStore[bC] || (QC.b.IncludesShadersStore[bC] = nC);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L28-L37` → after: `L30-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/321.js#L30-L45) · [Before (L28-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/321.js#L28-L37)

```diff
-     }
-   },
-   41801: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "fogVertex",
-       Oq = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     };
+     var oC = ZC(41703),
+       qC = ZC(41708),
+       FC = ZC(41714),
+       WC = ZC(41911),
+       NC = ZC(41913),
+       MC = ZC(41919),
+       gC = ZC(41755),
+       SC = ZC(41726),
+       pC = ZC(41925),
+       PC = ZC(41934),
+       GC = ZC(41938),
+       RC = ZC(41946);
+     const AC = "lightsFragmentFunctions",
+       xC = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
+     QC.b.IncludesShadersStore[AC] || (QC.b.IncludesShadersStore[AC] = xC);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L41-L50` → after: `L49-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/321.js#L49-L54) · [Before (L41-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/321.js#L41-L50)

```diff
-     }
-   },
-   41722: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "fogVertexDeclaration",
-       Oq = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     };
+     var IC = ZC(41952),
+       iC = ZC(41961);
+     const vC = "fresnelFunction",
+       eC = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     QC.b.IncludesShadersStore[vC] || (QC.b.IncludesShadersStore[vC] = eC);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L54-L63` → after: `L58-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/321.js#L58-L73) · [Before (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/321.js#L54-L63)

```diff
-     }
-   },
-   41747: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "logDepthDeclaration",
-       Oq = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     };
+     var KC = ZC(41964),
+       YC = ZC(41967),
+       dC = ZC(41975),
+       mC = ZC(41977),
+       HC = ZC(41982),
+       EC = ZC(41988),
+       lC = ZC(41996),
+       XC = ZC(41816),
+       cC = ZC(42005),
+       uC = ZC(42013),
+       rC = ZC(42020),
+       sC = ZC(42029);
+     const TC = "defaultFragmentAlpha",
+       aC = "#ifdef OPACITY\nvec4 opacityMap=TEXRD(opacitySampler,vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*vOpacityInfos.y;\n#endif\n#en … [truncated]
+     QC.b.IncludesShadersStore[TC] || (QC.b.IncludesShadersStore[TC] = aC);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/321.js` (Changed code · before: `L67-L97` → after: `L77-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-20836b4d43f84d7217164b82e5c682fd3c8860af512ab83e980cbfd8fa459f80) · [After (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/321.js#L77-L87) · [Before (L67-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/321.js#L67-L97)

```diff
-     }
-   },
-   41811: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "logDepthVertex",
-       Oq = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   61180: (qq, Eq, gq) => {
- ... (15 more removed lines; see GitHub link above)
+     };
+     var DC = ZC(42033),
+       jC = ZC(42036),
+       yC = ZC(42039),
+       LC = ZC(42041),
+       UC = ZC(42044);
+     const BC = "defaultPixelShader",
+       OC = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
+     QC.b.ShadersStore[BC] || (QC.b.ShadersStore[BC] = OC);
+     const kC = [wC.c, fC, oC.b, qC.e, FC.c, WC.d, NC.c, MC.e, gC.e, SC.d, pC.c, PC.b, GC.c, RC.b, JC, IC.e, iC.e, hC, KC.d, YC.c, dC.d, mC.e, HC.e, EC.d, lC.b, XC.c, cC.c, uC.c, rC.b, sC.e, tC, DC.e, jC.d, yC.c, LC.c, UC.c];
+     for (const Cz of kC) QC.b.IncludesShadersStore[Cz.name] || (QC.b.IncludesShadersStore[Cz.name] = Cz.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/322.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/322.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L4)

```diff
-   41926: (qq, Eq, gq) => {
+   42013: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L6)

```diff
-       e: () => mq
+       c: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpFragment",
-       Oq = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragment",
+       bC = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L17)

```diff
-   41901: (qq, Eq, gq) => {
+   41996: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L19)

```diff
-       d: () => mq
+       b: () => nC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L21-L25)

```diff
-     var Yq = gq(39617);
-     gq(41869);
-     const lq = "bumpFragmentFunctions",
-       Oq = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "clipPlaneFragmentDeclaration",
+       bC = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L31)

```diff
-   41894: (qq, Eq, gq) => {
+   42041: (CC, zC, ZC) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L33)

```diff
-       d: () => mq
+       c: () => nC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L35-L38)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpFragmentMainFunctions",
-       Oq = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "fogFragment",
+       bC = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L44` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L43) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L44)

```diff
-   41862: (qq, Eq, gq) => {
+   42005: (CC, zC, ZC) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L46` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L45) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L46)

```diff
-       b: () => mq
+       c: () => nC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L48-L51` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L47-L50) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L48-L51)

```diff
-     var Yq = gq(39617);
-     const lq = "clusteredLightingFunctions",
-       Oq = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "fogFragmentDeclaration",
+       bC = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L57` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L56) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L57)

```diff
-   41933: (qq, Eq, gq) => {
+   41726: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L59` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L58) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L59)

```diff
-       e: () => mq
+       d: () => nC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L61-L64` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L60-L63) · [Before (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L61-L64)

```diff
-     var Yq = gq(39617);
-     const lq = "decalFragment",
-       Oq = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L70` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L69) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L70)

```diff
-   41943: (qq, Eq, gq) => {
+   41967: (CC, zC, ZC) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/322.js` (Changed code · before: `L74-L77` → after: `L73-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6958addef94c8ffa5d46192703112e3d5d5cd12bc0b2b64874efbeb1662f76b6) · [After (L73-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/322.js#L73-L142) · [Before (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/322.js#L74-L77)

```diff
-     var Yq = gq(39617);
-     const lq = "lightFragment",
-       Oq = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "imageProcessingDeclaration",
+       bC = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41975: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "imageProcessingFunctions",
+       bC = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
+ ... (54 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/323.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/323.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L4)

```diff
-   41921: (qq, Eq, gq) => {
+   42013: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L8)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L11)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L17)

```diff
-   41905: (qq, Eq, gq) => {
+   41996: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L19)

```diff
-       d: () => mq
+       b: () => nC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L21)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L24)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L30)

```diff
-   41956: (qq, Eq, gq) => {
+   42041: (CC, zC, ZC) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L32)

```diff
-       e: () => mq
+       c: () => nC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L34)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L37)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L43)

```diff
-   41912: (qq, Eq, gq) => {
+   42005: (CC, zC, ZC) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L45)

```diff
-       e: () => mq
+       c: () => nC
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L47)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L50)

```diff
-     Yq.d.IncludesShadersStore[lq] || (Yq.d.IncludesShadersStore[lq] = Oq);
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L56` → after: `L56-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L56-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L56-L95) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L56)

```diff
-   42328: (qq, Eq, gq) => {
+   41726: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41816: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => nC
+ ... (24 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L58` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L97) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L58)

```diff
-       colorPixelShader: () => Bq
+       skyPixelShader: () => PC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/323.js` (Changed code · before: `L60-L69` → after: `L99-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0aR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-720299fae9fab884edd51a10ecafebffd57a7991f87fce4894eea263d4e46f0a) · [After (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/323.js#L99-L118) · [Before (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/323.js#L60-L69)

```diff
-     var Yq = gq(39617),
-       lq = gq(41905),
-       Oq = gq(41912),
-       mq = gq(41921),
-       xq = gq(41956);
-     const Aq = "colorPixelShader",
-       cq = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
-     Yq.d.ShadersStore[Aq] || (Yq.d.ShadersStore[Aq] = cq);
-     const uq = [lq.d, Oq.e, mq.c, xq.e];
-     for (const Wq of uq) Yq.d.IncludesShadersStore[Wq.name] || (Yq.d.IncludesShadersStore[Wq.name] = Wq.shader);
+     var QC = ZC(39674),
+       wC = ZC(41996),
+       bC = ZC(41816),
+       nC = ZC(42005),
+       fC = ZC(41726),
+       oC = ZC(42013),
+       qC = ZC(42039),
+       FC = ZC(42041);
+     const WC = "imageProcessingCompatibility",
+       NC = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
+     QC.b.IncludesShadersStore[WC] || (QC.b.IncludesShadersStore[WC] = NC);
+     const MC = {
+         name: WC,
+         shader: NC
+       },
+       gC = "skyPixelShader",
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/324.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/324.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05)

#### 1. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/324.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/324.js#L4)

```diff
-   42125: (qq, Eq, gq) => {
+   41726: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/324.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/324.js#L6)

```diff
-       b: () => mq
+       d: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/324.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/324.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpVertex",
-       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/324.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/324.js#L17-L19)

```diff
-   42037: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => mq
+   61045: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       rgbdDecodePixelShader: () => oC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/324.js` (Changed code · before: `L21-L120` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5c54cd11f76185fd2304bb7fc6877ee9e5a9daf193807f49944c8b1b41e4ea05) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/324.js#L21-L27) · [Before (L21-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/324.js#L21-L120)

```diff
-     var Yq = gq(39617);
-     const lq = "bumpVertexDeclaration",
-       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41987: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     gq(41973), gq(41979);
-     const lq = "defaultUboDeclaration",
- ... (84 more removed lines; see GitHub link above)
+     var QC = ZC(39674),
+       wC = ZC(41726);
+     const bC = "rgbdDecodePixelShader",
+       nC = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+     QC.b.ShadersStore[bC] || (QC.b.ShadersStore[bC] = nC);
+     const fC = [wC.d];
+     for (const qC of fC) QC.b.IncludesShadersStore[qC.name] || (QC.b.IncludesShadersStore[qC.name] = qC.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/325.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/325.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02)

#### 1. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/325.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/325.js#L4)

```diff
-   42018: (qq, Eq, gq) => {
+   41726: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/325.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/325.js#L6)

```diff
-       c: () => mq
+       d: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/325.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/325.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "instancesDeclaration",
-       Oq = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "helperFunctions",
+       bC = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/325.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/325.js#L17-L19)

```diff
-   42094: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
+   61056: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       rgbdEncodePixelShader: () => oC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/325.js` (Changed code · before: `L21-L69` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-18e124f57a49900facd122898d02346513cdc6aef905e2bf64ef92d12f016a02) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/325.js#L21-L27) · [Before (L21-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/325.js#L21-L69)

```diff
-     var Yq = gq(39617);
-     const lq = "instancesVertex",
-       Oq = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   41979: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "meshUboDeclaration",
-       Oq = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
- ... (33 more removed lines; see GitHub link above)
+     var QC = ZC(39674),
+       wC = ZC(41726);
+     const bC = "rgbdEncodePixelShader",
+       nC = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     QC.b.ShadersStore[bC] || (QC.b.ShadersStore[bC] = nC);
+     const fC = [wC.d];
+     for (const qC of fC) QC.b.IncludesShadersStore[qC.name] || (QC.b.IncludesShadersStore[qC.name] = qC.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/326.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/326.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea)

#### 1. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L4)

```diff
-   41987: (qq, Eq, gq) => {
+   41848: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L8-L12)

```diff
-     var Yq = gq(39617);
-     gq(41973), gq(41979);
-     const lq = "defaultUboDeclaration",
-       Oq = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "bakedVertexAnimation",
+       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L18)

```diff
-   42e3: (qq, Eq, gq) => {
+   41737: (CC, zC, ZC) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L22-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L21-L24) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L22-L25)

```diff
-     var Yq = gq(39617);
-     const lq = "helperFunctions",
-       Oq = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "bakedVertexAnimationDeclaration",
+       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L31)

```diff
-   41973: (qq, Eq, gq) => {
+   41729: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L33)

```diff
-       b: () => mq
+       d: () => nC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L35-L38` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L34-L37) · [Before (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L35-L38)

```diff
-     var Yq = gq(39617);
-     const lq = "sceneUboDeclaration",
-       Oq = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "bonesDeclaration",
+       bC = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L44-L46` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L43-L45) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L44-L46)

```diff
-   42163: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       defaultPixelShaderWGSL: () => eq
+   41846: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => nC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L48-L69` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L47-L50) · [Before (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L48-L69)

```diff
-     var Yq = gq(39617),
-       lq = gq(41973),
-       Oq = gq(41979),
-       mq = gq(41987),
-       xq = gq(42172),
-       Aq = gq(42177),
-       cq = gq(42185),
-       uq = gq(42029),
-       Bq = gq(42e3),
-       Wq = gq(42189),
-       Nq = gq(42196),
-       aq = gq(42204);
-     const Vq = "clusteredLightingCompute",
-       dq = "#if defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nfn computeClusteredLighting{X}(\nlightDataTexture: texture_2d<f32>,\nviewDirectionW: vec3f,\nvNormal: vec3f,\nlightData: vec4f,\nsliceRange: vec2u,\nglossiness: f32\n)->lightingInfo {var re … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[Vq] || (Yq.d.IncludesShadersStoreWGSL[Vq] = dq);
-     const jq = {
- ... (6 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "bonesVertex",
+       bC = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L73-L78` → after: `L54-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L54-L63) · [Before (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L73-L78)

```diff
-     };
-     var Qq = gq(42210),
-       yq = gq(42216);
-     const tq = "fresnelFunction",
-       rq = "#ifdef FRESNEL\nfn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32\n{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
-     Yq.d.IncludesShadersStoreWGSL[tq] || (Yq.d.IncludesShadersStoreWGSL[tq] = rq);
+     }
+   },
+   41875: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "clipPlaneVertex",
+       bC = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L82-L97` → after: `L67-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L67-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L67-L76) · [Before (L82-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L82-L97)

```diff
-     };
-     var hq = gq(42222),
-       nq = gq(42228),
-       bq = gq(42231),
-       iq = gq(42238),
-       Zq = gq(42240),
-       fq = gq(42245),
-       Mq = gq(42253),
-       Tq = gq(42074),
-       zq = gq(42258),
-       Sq = gq(42267),
-       pq = gq(42271),
-       Gq = gq(42273);
-     const Lq = "defaultFragmentAlpha",
-       Jq = "#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpa … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[Lq] || (Yq.d.IncludesShadersStoreWGSL[Lq] = Jq);
+     }
+   },
+   41778: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "clipPlaneVertexDeclaration",
+       bC = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/326.js` (Changed code · before: `L101-L112` → after: `L80-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aeaR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b62f6e152e4e0bf18f538866beba366849546b8ad3f7edf8e08273b4a2a34aea) · [After (L80-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/326.js#L80-L167) · [Before (L101-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/326.js#L101-L112)

```diff
-     };
-     var Rq = gq(42275),
-       Uq = gq(42283),
-       Fq = gq(42289),
-       sq = gq(42291),
-       Xq = gq(42300),
-       wq = gq(42302);
-     const Kq = "defaultPixelShader",
-       Cq = "#include<defaultUboDeclaration>\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && … [truncated]
-     Yq.d.ShadersStoreWGSL[Kq] || (Yq.d.ShadersStoreWGSL[Kq] = Cq);
-     const Iq = [lq.b, Oq.b, mq.b, xq.e, Aq.b, cq.d, uq.b, Bq.b, Wq.b, Nq.b, aq.b, jq, Pq, Qq.c, yq.e, vq, hq.b, nq.c, bq.b, iq.d, Zq.c, fq.e, Mq.c, Tq.d, zq.c, Sq.d, pq.c, Gq.d, kq, Rq.d, Uq.d, Fq.b, sq.b, Xq.d, wq.e];
-     for (const Dq of Iq) Yq.d.IncludesShadersStoreWGSL[Dq.name] || (Yq.d.IncludesShadersStoreWGSL[Dq.name] = Dq.shader);
+     }
+   },
+   41881: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => nC
+     });
+     var QC = ZC(39674);
+     const wC = "fogVertex",
+       bC = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     const nC = {
+       name: wC,
+       shader: bC
+     }
+   },
+   41787: (CC, zC, ZC) => {
+ ... (72 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/327.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/327.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/327.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/327.js#L4)

```diff
-   42e3: (qq, Eq, gq) => {
+   41740: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/327.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/327.js#L6)

```diff
-       b: () => mq
+       d: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/327.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/327.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "helperFunctions",
-       Oq = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "instancesDeclaration",
+       bC = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/327.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/327.js#L17)

```diff
-   61596: (qq, Eq, gq) => {
+   41837: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/327.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/327.js#L19)

```diff
-       e: () => mq
+       c: () => nC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/327.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/327.js#L21-L24)

```diff
-     var Yq = gq(39617);
-     const lq = "pbrBRDFFunctions",
-       Oq = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "instancesVertex",
+       bC = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L30-L32` → after: `L30-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/327.js#L30-L32) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/327.js#L30-L32)

```diff
-   41973: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
+   61546: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       greasedLineVertexShader: () => qC
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/327.js` (Changed code · before: `L34-L37` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8d303efff963a7b3397d2cd7560898519c7eb086870a72e7956f6b549166eee9) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/327.js#L34-L41) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/327.js#L34-L37)

```diff
-     var Yq = gq(39617);
-     const lq = "sceneUboDeclaration",
-       Oq = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674),
+       wC = ZC(41740),
+       bC = ZC(41837);
+     const nC = "greasedLineVertexShader",
+       fC = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     QC.b.ShadersStore[nC] || (QC.b.ShadersStore[nC] = fC);
+     const oC = [wC.d, bC.c];
+     for (const FC of oC) QC.b.IncludesShadersStore[FC.name] || (QC.b.IncludesShadersStore[FC.name] = FC.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/328.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/328.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L4-L56` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L4) · [Before (L4-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L4-L56)

```diff
-   42106: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "bakedVertexAnimation",
-       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42012: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq
- ... (37 more removed lines; see GitHub link above)
+   41872: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L60` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L8) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L60)

```diff
-     var Yq = gq(39617);
+     var QC = ZC(39674);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L62-L63` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L10-L11) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L62-L63)

```diff
-       Oq = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L69-L82` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L17) · [Before (L69-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L69-L82)

```diff
-   42134: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertex",
-       Oq = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42041: (qq, Eq, gq) => {
+   41770: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L86-L89` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L21-L24) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L86-L89)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertexDeclaration",
-       Oq = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "bumpVertexDeclaration",
+       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L95-L108` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L30) · [Before (L95-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L95-L108)

```diff
-   61603: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "harmonicsFunctions",
-       Oq = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ un … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42018: (qq, Eq, gq) => {
+   61198: (CC, zC, ZC) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L112-L167` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L34-L37) · [Before (L112-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L112-L167)

```diff
-     var Yq = gq(39617);
-     const lq = "instancesDeclaration",
-       Oq = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
-     const mq = {
-       name: lq,
-       shader: Oq
-     }
-   },
-   42094: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(39617);
-     const lq = "instancesVertex",
-       Oq = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
- ... (40 more removed lines; see GitHub link above)
+     var QC = ZC(39674);
+     const wC = "harmonicsFunctions",
+       bC = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L173` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L43) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L173)

```diff
-   42060: (qq, Eq, gq) => {
+   61189: (CC, zC, ZC) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L177-L180` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L47-L50) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L177-L180)

```diff
-     var Yq = gq(39617);
-     const lq = "morphTargetsVertexGlobalDeclaration",
-       Oq = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f3 … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "pbrBRDFFunctions",
+       bC = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L186` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L56) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L186)

```diff
-   41973: (qq, Eq, gq) => {
+   61185: (CC, zC, ZC) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L190-L193` → after: `L60-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L60-L64) · [Before (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L190-L193)

```diff
-     var Yq = gq(39617);
-     const lq = "sceneUboDeclaration",
-       Oq = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     ZC(41703), ZC(41708);
+     const wC = "pbrUboDeclaration",
+       bC = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L199` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L70) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L199)

```diff
-   61783: (qq, Eq, gq) => {
+   61176: (CC, zC, ZC) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/328.js` (Changed code · before: `L201-L223` → after: `L72-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9b7348ded9a26b73f390205e93e025f758951b767b3f0fbec01bd707ef53bbb9) · [After (L72-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/328.js#L72-L122) · [Before (L201-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/328.js#L201-L223)

```diff
-       geometryVertexShaderWGSL: () => yq
-     });
-     var Yq = gq(39617),
-       lq = gq(42007),
-       Oq = gq(42012),
-       mq = gq(42060),
-       xq = gq(42067),
-       Aq = gq(42018),
-       cq = gq(41973),
-       uq = gq(42041),
-       Bq = gq(61603),
-       Wq = gq(42083),
-       Nq = gq(42086),
-       aq = gq(42094),
-       Vq = gq(42101),
-       dq = gq(42106),
- ... (7 more removed lines; see GitHub link above)
+       pbrVertexShader: () => LC
+     });
+     var QC = ZC(39674),
+       wC = ZC(41699);
+     const bC = "pbrVertexDeclaration",
+       nC = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
+     QC.b.IncludesShadersStore[bC] || (QC.b.IncludesShadersStore[bC] = nC);
+     const fC = {
+       name: bC,
+       shader: nC
+     };
+     var oC = ZC(41703),
+       qC = ZC(41708),
+       FC = ZC(61185),
+       WC = ZC(41717),
+       NC = ZC(41755),
+ ... (35 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/329.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/329.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe)

#### 1. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L4)

```diff
-   42106: (qq, Eq, gq) => {
+   41875: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L6)

```diff
-       e: () => mq
+       d: () => nC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L8-L11)

```diff
-     var Yq = gq(39617);
-     const lq = "bakedVertexAnimation",
-       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationS … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "clipPlaneVertex",
+       bC = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L17)

```diff
-   42012: (qq, Eq, gq) => {
+   41778: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L19)

```diff
-       b: () => mq
+       d: () => nC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L21-L24)

```diff
-     var Yq = gq(39617);
-     const lq = "bakedVertexAnimationDeclaration",
-       Oq = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn  … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "clipPlaneVertexDeclaration",
+       bC = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L30)

```diff
-   42007: (qq, Eq, gq) => {
+   41881: (CC, zC, ZC) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L32)

```diff
-       e: () => mq
+       d: () => nC
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L34-L37)

```diff
-     var Yq = gq(39617);
-     const lq = "bonesDeclaration",
-       Oq = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERT … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "fogVertex",
+       bC = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L43)

```diff
-   42101: (qq, Eq, gq) => {
+   41787: (CC, zC, ZC) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L45)

```diff
-       b: () => mq
+       c: () => nC
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L47-L50)

```diff
-     var Yq = gq(39617);
-     const lq = "bonesVertex",
-       Oq = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluenc … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "fogVertexDeclaration",
+       bC = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L56)

```diff
-   42134: (qq, Eq, gq) => {
+   41816: (CC, zC, ZC) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L58)

```diff
-       d: () => mq
+       c: () => nC
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L60-L63)

```diff
-     var Yq = gq(39617);
-     const lq = "clipPlaneVertex",
-       Oq = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n … [truncated]
-     Yq.d.IncludesShadersStoreWGSL[lq] || (Yq.d.IncludesShadersStoreWGSL[lq] = Oq);
+     var QC = ZC(39674);
+     const wC = "logDepthDeclaration",
+       bC = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/329.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbeR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-355153beae96054e1698b6d3d4c188365a2b059cf4e46ae7520eb845e0873cbe) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/329.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/329.js#L69)

```diff
-   42041: (qq, Eq, gq) => {
+   41894: (CC, zC, ZC) => {
```
