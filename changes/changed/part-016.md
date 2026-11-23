# Changed — Bundle Modifications Report (Part 016 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `16 / 50` (**261** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (216 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 158. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6552` → after: `L2050-L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2050-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2050-L2068) · [Before (L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6552)

```diff
-         }
+           return ZC
+         }(CC, QC);
+       !1 !== bC && (oC = (0, nC.i)(ZC, CC, QC)), QC.DEPTHPREPASS !== !zC.getColorWrite() && (QC.DEPTHPREPASS = !QC.DEPTHPREPASS, oC = !0), QC.INSTANCES !== wC && (QC.INSTANCES = wC, oC = !0), QC.THIN_INSTANCES !== fC && (QC.THIN_INSTANCES = fC, oC = !0), oC && QC.markAsUnprocesse … [truncated]
+     }
+     const cC = 40,
+       uC = 64,
+       rC = new WeakMap,
+       sC = new WeakSet;
+ 
+     function TC(CC, zC, ZC, wC) {
+       let bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+         fC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       if (!zC._areAttributesDirty && zC._needNormals === zC._normals && zC._needUVs === zC._uvs) return !1;
+       zC._normals = zC._needNormals, zC._uvs = zC._needUVs, zC.NORMAL = zC._needNormals && CC.isVerticesDataPresent("normal"), zC._needNormals && CC.isVerticesDataPresent("tangent") && (zC.TANGENT = !0);
+       for (let QC = 1; QC <= 6; ++QC) zC["UV" + QC] = !!zC._needUVs && CC.isVerticesDataPresent(`uv${1===QC?"":QC}`);
+ ... (3 more added lines; see GitHub link above)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6554-L6596` → after: `L2070-L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2070-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2070-L2081) · [Before (L6554-L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6554-L6596)

```diff
-       prepare(qq, Eq) {
-         var gq, Yq, lq, Oq;
-         const {
-           wB: mq
-         } = qq;
-         this.lighting = qq.VV;
-         const xq = (0, Bx.w)(Eq);
-         this.dirLightCount = Math.min(xq, 4), this.pN = null !== (gq = mq.pN) && void 0 !== gq ? gq : null, xq > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(qq, Eq), this.animateMaterials(Eq.animTick);
-         const Aq = mq.BW,
-           cq = Aq[0] !== this.originOffset[0] || Aq[1] !== this.originOffset[1] || Aq[2] !== this.originOffset[2];
-         cq && (this.originOffset[0] = Aq[0], this.originOffset[1] = Aq[1], this.originOffset[2] = Aq[2]);
-         const uq = Eq.eye;
-         this.eye[0] = uq[0], this.eye[1] = uq[1], this.eye[2] = uq[2], this.writeShaderPackInputs();
-         const Bq = Eq.projectionMatrix,
-           Wq = 0 === Bq[15];
-         let Nq = 0;
- ... (27 more removed lines; see GitHub link above)
+       return CC.isVerticesDataPresent("instanceColor") && (CC.yQC || CC.hasThinInstances) && (zC.INSTANCESCOLOR = !0), wC && function(CC, zC) {
+         if (CC.useBones && CC.computeBonesUsingShaders && CC.skeleton) {
+           zC.NUM_BONE_INFLUENCERS = CC.numBoneInfluencers;
+           const ZC = void 0 !== zC.BONETEXTURE;
+           if (CC.skeleton.isUsingTextureForMatrices && ZC) zC.BONETEXTURE = !0;
+           else {
+             zC.BonesPerMesh = CC.skeleton.bones.length + 1, zC.BONETEXTURE = !ZC && void 0;
+             const wC = CC.Km(),
+               bC = wC.prePassRenderer;
+             if (bC && bC.enabled) {
+               const ZC = -1 === bC.excludedSkinnedMesh.indexOf(CC);
+               zC.BONES_VELOCITY_ENABLED = ZC
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6598-L6677` → after: `L2083-L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2083-L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2083-L2092) · [Before (L6598-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6598-L6677)

```diff
-             if (0 === qq.rangeCount) return
-           } else - 1 !== qq.faceMask && this.drawWhole(qq);
-           gq.meshes.push(qq), hq += 2 * ((qq.rangeCount > 0 ? qq.count0 : 0) + (qq.rangeCount > 1 ? qq.count1 : 0))
-         };
-         for (const iq of this.chunks.values()) {
-           cq && this.writeSlot(iq);
-           const qq = iq.mesh.visibility;
-           qq !== iq.visibility && (iq.visibility = qq, this.slots.setVisibility(iq.slot, qq));
-           const {
-             material: gq
-           } = iq;
-           this.geometry.lost(iq) && performance.now() >= iq.lostRetryAt && this.remeshLost(mq, iq);
-           const Yq = !(null === gq || void 0 === gq || !gq.bindGroup) && this.geometry.backed(iq),
-             lq = Yq && this.lighting && !iq.vertices.page.twin;
-           if (Qq && (Number.isNaN(iq.key) && (iq.ci = Math.floor(iq.origin[0] / Vq), iq.cj = Math.floor(iq.origin[1] / Vq), iq.ck = Math.floor(iq.origin[2] / Vq), iq.key = (0, Gx.i)(iq.ci, iq.cj, iq.ck)), (!Yq || qq < 1 || lq || !this.batchDraws(gq, iq.packed, Qq)) && this.visSee … [truncated]
-           lq || (iq.lostRemeshes = 0);
- ... (64 more removed lines; see GitHub link above)
+             const nC = !0 === zC.MULTIVIEW,
+               fC = 2 * zC.BonesPerMesh + (nC ? 1 : 0);
+             if (rC.get(CC.skeleton) !== fC) {
+               rC.set(CC.skeleton, fC);
+               const ZC = wC.mg().getCaps().maxVertexUniformVectors;
+               if (ZC && !sC.has(CC.skeleton)) {
+                 const wC = 4 * zC.BonesPerMesh,
+                   bC = nC ? uC : cC,
+                   fC = Math.max(ZC - bC, 0);
+                 (wC > fC || nC && 3 * wC > ZC) && (sC.add(CC.skeleton), QC.c.Warn(`Skeleton "${CC.skeleton.name}": ${CC.skeleton.bones.length} bones stored as vertex uniforms use ${wC} of ~${fC} usable uniform vectors${nC?" (multiview)":""} on a device reporting ${ZC}. This can e … [truncated]
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6737-L6838` → after: `L2096-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2096-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2096-L2103) · [Before (L6737-L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6737-L6838)

```diff
-           gq.nearest = gq.meshes.length > 0 ? gq.meshes[0].distance : 1 / 0
-         }
-         qq.sort(Jx)
-       }
-       batchFor(qq, Eq, gq, Yq, lq) {
-         for (const mq of this.opaqueBatches)
-           if (mq.material === qq && mq.packed === Eq && mq.page === gq && mq.resting === Yq) return mq;
-         const Oq = {
-           material: qq,
-           packed: Eq,
-           page: gq,
-           resting: Yq,
-           meshes: [],
-           group: 0,
-           nearest: 0,
-           faceCull: this.batchFaceCull(qq, lq)
- ... (86 more removed lines; see GitHub link above)
+         } else zC.NUM_BONE_INFLUENCERS = 0, zC.BonesPerMesh = 0, void 0 !== zC.BONETEXTURE && (zC.BONETEXTURE = !1)
+       }(CC, zC), bC && function(CC, zC) {
+         const ZC = CC.morphTargetManager;
+         ZC ? (zC.MORPHTARGETS_UV = ZC.supportsUVs && zC.UV1, zC.MORPHTARGETS_UV2 = ZC.supportsUV2s && zC.UV2, zC.MORPHTARGETS_TANGENT = ZC.supportsTangents && zC.TANGENT, zC.MORPHTARGETS_NORMAL = ZC.supportsNormals && zC.NORMAL, zC.MORPHTARGETS_POSITION = ZC.supportsPositions, zC … [truncated]
+       }(CC, zC), fC && function(CC, zC) {
+         const ZC = CC.bakedVertexAnimationManager;
+         zC.BAKED_VERTEX_ANIMATION_TEXTURE = !(!ZC || !ZC.isEnabled)
+       }(CC, zC), !0
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6842` → after: `L2107-L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2107-L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2107-L2110) · [Before (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6842)

```diff
-       return qq.distance - Eq.distance
+       if (CC.activeCamera) {
+         const ZC = zC.MULTIVIEW;
+         zC.MULTIVIEW = null !== CC.activeCamera.outputRenderTarget && CC.activeCamera.outputRenderTarget.getViewCount() > 1, zC.MULTIVIEW != ZC && zC.markAsUnprocessed()
+       }
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6845-L6846` → after: `L2113-L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2113-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2113-L2116) · [Before (L6845-L6846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6845-L6846)

```diff
-     function Cx(qq, Eq) {
-       return Eq.distance - qq.distance
+     function tC(CC, zC, ZC) {
+       const QC = zC.ORDER_INDEPENDENT_TRANSPARENCY,
+         wC = zC.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
+       zC.ORDER_INDEPENDENT_TRANSPARENCY = CC.useOrderIndependentTransparency && ZC, zC.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !CC.mg().getCaps().textureFloatLinearFiltering, QC === zC.ORDER_INDEPENDENT_TRANSPARENCY && wC === zC.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || zC.markAsU … [truncated]
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6848-L6852` → after: `L2118-L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2118-L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2118-L2172) · [Before (L6848-L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6848-L6852)

```diff
-     class Ix {
-       constructor() {
-         this.left = []
-       }
-       sort(qq, Eq) {
+ 
+     function DC(CC, zC, ZC) {
+       const QC = zC.PREPASS;
+       if (!zC._arePrePassDirty) return;
+       const wC = [{
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
+ ... (39 more added lines; see GitHub link above)
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6854-L6855` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2174) · [Before (L6854-L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6854-L6855)

```diff
-           const Eq = qq[gq].distance;
-           if (Eq - Eq !== 0) return !1
+           const QC = CC.prePassRenderer.getIndex(wC[ZC].type); - 1 !== QC ? (zC[wC[ZC].define] = !0, zC[wC[ZC].index] = QC) : zC[wC[ZC].define] = !1
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6857-L6880` → after: `L2176-L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2176-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2176-L2178) · [Before (L6857-L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6857-L6880)

```diff
-         return this.sortRange(qq, 0, qq.length, Eq), !0
-       }
-       sortRange(qq, Eq, gq, Yq) {
-         if (gq - Eq <= 16) {
-           for (let lq = Eq + 1; lq < gq; lq++) {
-             const gq = qq[lq],
-               Oq = Yq * gq.distance;
-             let mq = lq - 1;
-             for (; mq >= Eq && Yq * qq[mq].distance > Oq; mq--) qq[mq + 1] = qq[mq];
-             qq[mq + 1] = gq
-           }
-           return
-         }
-         const lq = Eq + gq >>> 1;
-         if (this.sortRange(qq, Eq, lq, Yq), this.sortRange(qq, lq, gq, Yq), Yq * qq[lq - 1].distance <= Yq * qq[lq].distance) return;
-         const {
- ... (8 more removed lines; see GitHub link above)
+       } else {
+         zC.PREPASS = !1;
+         for (let CC = 0; CC < wC.length; CC++) zC[wC[CC].define] = !1
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6886-L6904` → after: `L2184-L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2184-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2184-L2190) · [Before (L6886-L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6886-L6904)

```diff
-       let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Eq;
-       const Oq = Math.min(Eq, gq),
-         mq = new Uint32Array(qg(Yq));
-       for (let xq = 0; xq < Yq; xq++) {
-         const Eq = Math.floor(xq * Oq / Yq),
-           gq = Math.max(Eq + 1, Math.floor((xq + 1) * Oq / Yq));
-         for (let Aq = 0; Aq < Yq; Aq++) {
-           const cq = Math.floor(Aq * Oq / Yq),
-             uq = Math.max(cq + 1, Math.floor((Aq + 1) * Oq / Yq));
-           let Bq = 0;
-           for (let Yq = Eq; Yq < gq; Yq++)
-             for (let Eq = cq; Eq < uq; Eq++) qq[Yq * lq + Eq] >= ex && Bq++;
-           if (2 * Bq >= (gq - Eq) * (uq - cq)) {
-             const qq = Aq + Yq * xq;
-             mq[qq >>> 5] |= 1 << (31 & qq)
-           }
- ... (3 more removed lines; see GitHub link above)
+       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         qC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
+       wC && wC.push("Light" + CC), bC || (zC.push("vLightData" + CC, "vLightDiffuse" + CC, "vLightSpecular" + CC, "vLightDirection" + CC, "vLightWidth" + CC, "vLightHeight" + CC, "vLightFalloff" + CC, "vLightGround" + CC, "vSliceData" + CC, "vSliceRanges" + CC, "lightMatrix" + CC … [truncated]
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6907-L6908` → after: `L2193-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2193-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2193-L2196) · [Before (L6907-L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6907-L6908)

```diff
-     function qA(qq) {
-       return Math.max(1, Math.min(16, qq))
+     function yC(CC, zC, ZC) {
+       const QC = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
+       ZC && QC.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
+       zC.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6910-L7074` → after: `L2198-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2198-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2198-L2207) · [Before (L6910-L7074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6910-L7074)

```diff
-     class EA {
-       constructor(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
-         this.sink = qq, this.loadTexture = Eq, this.warn = gq, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise. … [truncated]
-       }
-       update(qq, Eq) {
-         return (qq.Gs !== this.builtVersion || this.blockCaster.length !== Eq) && (this.build(qq, Eq), !0)
-       }
-       build(qq, Eq) {
-         this.builtVersion = qq.Gs;
-         const gq = new Uint16Array(Eq),
-           Yq = new Map;
-         for (let lq = 1; lq < Eq; lq++) {
-           const Eq = this.classify(qq, lq, Yq);
-           if (null === Eq || Eq === KE) {
-             gq[lq] = null === Eq ? 0 : KE;
- ... (149 more removed lines; see GitHub link above)
+ 
+     function LC(CC, zC, ZC) {
+       let QC, wC, bC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
+         nC = null;
+       if (CC.uniformsNames) {
+         const fC = CC;
+         QC = fC.uniformsNames, wC = fC.uniformBuffersNames, zC = fC.samplers, ZC = fC.defines, bC = fC.maxSimultaneousLights || 0, nC = fC.shaderLanguage ?? null
+       } else QC = CC, zC || (zC = []);
+       for (let fC = 0; fC < bC && ZC["LIGHT" + fC]; fC++) jC(fC, QC, zC, ZC["PROJECTEDLIGHTTEXTURE" + fC], wC, !1, ZC["IESLIGHTTEXTURE" + fC], ZC["CLUSTLIGHT" + fC], ZC["RECTAREALIGHTEMISSIONTEXTURE" + fC], 1 === nC);
+       ZC.NUM_MORPH_INFLUENCERS && (QC.push("morphTargetInfluences"), QC.push("morphTargetCount")), ZC.BAKED_VERTEX_ANIMATION_TEXTURE && (QC.push("bakedVertexAnimationSettings"), QC.push("bakedVertexAnimationTextureSizeInverted"), QC.push("bakedVertexAnimationTime"), zC.push("bake … [truncated]
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7079` → after: `L2211-L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2211-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2211-L2216) · [Before (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7079)

```diff
-       return !qq.ea && !qq.pM && !qq.va
+       let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       CC.addUniform("vReflectionInfos", 2), CC.addUniform("reflectionMatrix", 16), zC && CC.addUniform("vReflectionMicrosurfaceInfos", 3), ZC && (CC.addUniform("vReflectionPosition", 3), CC.addUniform("vReflectionSize", 3)), QC && (CC.addUniform("vReflectionFilteringInfo", 2), CC … [truncated]
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7081-L7086` → after: `L2218-L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2218-L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2218-L2228) · [Before (L7081-L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7081-L7086)

```diff
- 
-     function lA() {
-       return {
-         bricks: new Uint32Array(JE),
-         cells: new Uint16Array(32768),
-         special: new Uint8Array(GE)
+   },
+   40167: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC
+     });
+     var QC = ZC(36963),
+       wC = ZC(40110);
+     class bC extends wC.d {
+       constructor(CC, zC) {
+         let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         super(CC, zC, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new QC.b, this._storeEffectOnSubMeshes = ZC
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7088-L7151` → after: `L2230-L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2230-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2230-L2231) · [Before (L7088-L7151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7088-L7151)

```diff
-     }
-     class OA {
-       constructor(qq, Eq, gq) {
-         let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
-         this.casters = qq, this.writeVoxels = Eq, this.writePool = gq, this.warn = Yq, this.eyeChunk = null, this.slotChunk = new Array(fE).fill(null), this.slotVersion = new Float64Array(fE).fill(-1), this.slotPool = new Array(fE).fill(null), this.starved = new Uint8Array(fE), t … [truncated]
-         for (let lq = 0; lq < Yg; lq++) this.freePool[lq] = 65535 - lq
-       }
-       get queuedCount() {
-         return this.queue.length
-       }
-       get poolInUse() {
-         return Yg - this.freeCount
-       }
-       chunkAdded(qq) {
-         if (null === this.eyeChunk || !this.inRadius(qq.i, qq.j, qq.k)) return;
-         const Eq = sE(qq.i, qq.j, qq.k);
- ... (48 more removed lines; see GitHub link above)
+       getEffect() {
+         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7153-L7276` → after: `L2233-L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2233-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2233-L2234) · [Before (L7153-L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7153-L7276)

```diff
-       requeueStarved() {
-         for (let qq = 0; qq < fE; qq++) this.starved[qq] && this.slotChunk[qq] && this.enqueue(qq)
-       }
-       enqueue(qq) {
-         this.queued[qq] || (this.queued[qq] = 1, this.queue.push(qq), this.queueSorted = !1)
-       }
-       drain(qq) {
-         if (0 === this.queue.length) return;
-         if (!this.queueSorted) {
-           const qq = new Map;
-           for (const Eq of this.queue) qq.set(Eq, this.slotDistance(Eq));
-           this.queue.sort(((Eq, gq) => qq.get(gq) - qq.get(Eq))), this.queueSorted = !0
-         }
-         const Eq = performance.now();
-         let gq = 0;
-         const Yq = [];
- ... (108 more removed lines; see GitHub link above)
+       isReady(CC, zC) {
+         return !!CC && (!this._storeEffectOnSubMeshes || (!CC.Zx || 0 === CC.Zx.length || this.isReadyForSubMesh(CC, CC.Zx[0], zC)))
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7278-L7287` → after: `L2236-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2236-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2236-L2238) · [Before (L7278-L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7278-L7287)

```diff
-       evictBeyond(qq, Eq) {
-         const gq = this.slotDistance(qq),
-           Yq = [];
-         for (let lq = 0; lq < fE; lq++) lq !== qq && this.slotPool[lq] && this.slotDistance(lq) > gq && Yq.push(lq);
-         Yq.sort(((qq, Eq) => this.slotDistance(Eq) - this.slotDistance(qq)));
-         for (const lq of Yq) {
-           if (this.freeCount >= Eq) return;
-           const qq = this.slotChunk[lq];
-           qq && !qq.bM && qq.dW && (qq.ba === this.slotVersion[lq] || YA(qq)) && this.encodeSlot(lq, this.victimScratch, !1)
-         }
+       _isReadyForSubMesh(CC) {
+         const zC = CC.materialDefines;
+         return !(this.checkReadyOnEveryCall || !CC.effect || !zC || zC._renderId !== this.Km().getRenderId())
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7289-L7292` → after: `L2240-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2240-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2240-L2241) · [Before (L7289-L7292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7289-L7292)

```diff
-       dropSpecials(qq, Eq) {
-         this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
-         const gq = 3 * Eq;
-         for (let Yq = 0; Yq < pE; Yq++) qq.cells[Eq * pE + Yq] !== KE && (qq.bricks[gq + (Yq >>> 5)] &= ~(1 << (31 & Yq)))
+       bindOnlyWorldMatrix(CC) {
+         this._activeEffect.setMatrix("world", CC)
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7294-L7306` → after: `L2243-L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2243-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2243-L2244) · [Before (L7294-L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7294-L7306)

```diff
-     }
-     var mA = gq(37481);
-     class xA {
-       constructor(qq) {
-         this.device = qq, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Vg, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.kB = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = qq.createBuffer( … [truncated]
-           label: "sun-shadow-entities",
-           size: 589828,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.gridBuffer = qq.createBuffer({
-           label: "sun-shadow-entity-grids",
-           size: 16777216,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
+       bindOnlyNormalMatrix(CC) {
+         this._activeEffect.setMatrix("normalMatrix", CC)
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7308-L7422` → after: `L2246-L2294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2246-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2246-L2294) · [Before (L7308-L7422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7308-L7422)

```diff
-       update(qq, Eq, gq) {
-         this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
-         const {
-           frame: Yq
-         } = this;
-         Yq.gN(qq, Eq), gq.forEachSunShadowCaster((qq => {
-           this.add(qq)
-         })), Yq.finish();
-         const lq = 0 === Yq.parts;
-         if (lq && this.uploadedEmpty) return;
-         this.uploadedEmpty = lq;
-         const {
-           queue: Oq
-         } = this.device, {
-           words: mq
-         } = Yq;
- ... (99 more removed lines; see GitHub link above)
+       bind(CC, zC) {
+         zC && this.bindForSubMesh(CC, zC, zC.Zx[0])
+       }
+       _afterBind(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         super._afterBind(CC, zC, ZC), this.Km()._cachedEffect = zC, ZC ? ZC._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
+       }
+       _mustRebind(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         return ZC._drawWrapper._forceRebindOnNextCall || CC.isCachedMaterialInvalid(this, zC, QC)
+       }
+       dispose(CC, zC, ZC) {
+         this._activeEffect = void 0, super.dispose(CC, zC, ZC)
+       }
+     }
+ ... (33 more added lines; see GitHub link above)
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7429-L7442` → after: `L2301-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2301-L2304) · [Before (L7429-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7429-L7442)

```diff
-       return qq[0] * Eq[0] + qq[1] * Eq[1] + qq[2] * Eq[2] < AA
-     }
-     async function uA(qq) {
-       const {
-         pixels: Eq,
-         width: gq,
-         height: Yq
-       } = await pl(qq), lq = new Uint8Array(gq * Yq);
-       for (let Oq = 0; Oq < lq.length; Oq++) lq[Oq] = Eq[4 * Oq + 3];
-       return {
-         width: gq,
-         height: Yq,
-         alpha: lq
-       }
+       zC.forEach(((zC, ZC) => {
+         const QC = `vp_${ZC}_info`;
+         CC.setFloat4(QC, zC.offset, zC.stride, zC.type, zC.normalized ? 1 : 0)
+       }))
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7444-L7711` → after: `L2306-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2306-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2306-L2325) · [Before (L7444-L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7444-L7711)

```diff
-     class BA {
-       constructor(qq, Eq) {
-         this.device = qq, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Pg.p), this.entities = void 0, this.entityStandIn =  … [truncated]
-           label: "sun-shadow",
-           size: 128,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.voxelBuffer = qq.createBuffer({
-           label: "sun-shadow-voxels",
-           size: 4 * UE,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         }), this.special = qq.createBuffer({
-           label: "sun-shadow-special",
-           size: 9568256,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         });
-         const [gq, Yq, lq] = Pg.r;
- ... (252 more removed lines; see GitHub link above)
+   },
+   40145: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => fC,
+       d: () => oC
+     });
+     var QC = ZC(39811),
+       wC = ZC(36963),
+       bC = ZC(39818);
+     let nC = (() => {
+       var CC;
+       let zC, ZC, wC = [];
+       return CC = class {
+         static extractMinAndMaxIndexed(CC, zC, ZC, QC, wC, bC) {
+           for (let nC = ZC; nC < ZC + QC; nC++) {
+             const ZC = 3 * zC[nC],
+ ... (4 more added lines; see GitHub link above)
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7713-L7740` → after: `L2327-L2369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2327-L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2327-L2369) · [Before (L7713-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7713-L7740)

```diff
-         }), (qq => {
-           this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(qq)}`)
-         })), null
-       }
-       start(qq) {
-         if (this.window) return this.window;
-         const Eq = (qq, Eq) => {
-           this.written = !0, this.device.queue.writeBuffer(this.special, 4 * qq, Eq)
-         };
-         this.casters = new EA(((qq, gq) => {
-           this.castersWritten = !0, Eq(qq, gq)
-         }), uA);
-         const gq = new OA(this.casters, ((qq, Eq) => {
-           this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * qq, Eq)
-         }), Eq);
-         return gq.encoded = qq => {
- ... (12 more removed lines; see GitHub link above)
+         }
+         static extractMinAndMax(CC, zC, ZC, QC, wC, bC) {
+           for (let nC = zC, fC = zC * QC; nC < zC + ZC; nC++, fC += QC) {
+             const zC = CC[fC],
+               ZC = CC[fC + 1],
+               QC = CC[fC + 2];
+             wC.minimizeInPlaceFromFloats(zC, ZC, QC), bC.maximizeInPlaceFromFloats(zC, ZC, QC)
+           }
+         }
+       }, (() => {
+         const nC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         zC = [bC.h.filter((function() {
+           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
+         }))], ZC = [bC.h.filter((function() {
+           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
+         }))], (0, QC.j)(CC, null, zC, {
+ ... (27 more added lines; see GitHub link above)
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7743-L7763` → after: `L2372-L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2372-L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2372-L2377) · [Before (L7743-L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7743-L7763)

```diff
-       qq.drawOffset(Eq, Yq + aA), Eq[Yq + VA] = qq.drawTime(), gq[Yq + dA] = qq.ring.drawStart(), gq[Yq + jA] = qq.ring.drawCount()
-     }
-     const oA = `\n${VY}\n\nconst MAX_STOPS = ${NA.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${NA.b/4}>,\n\tcolor1: array<vec4f, ${NA.b}>,\n\t … [truncated]
-     var PA = gq(41355);
-     class QA {
-       constructor(qq, Eq, gq, Yq) {
-         this.device = qq, this.system = Eq, this.frameIndex = gq, this.bindings = Yq, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, PA.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, qq * NA.f * 4, this.system.ring.records, qq * NA.f, (Eq - qq) * NA.f)
-         };
-         const {
-           name: lq
-         } = Eq;
-         this.ring = qq.createBuffer({
-           label: `particles-${lq}`,
-           size: Eq.ring.records.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
- ... (5 more removed lines; see GitHub link above)
+       let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+       const fC = new wC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         oC = new wC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return nC.extractMinAndMaxIndexed(CC, zC, ZC, QC, fC, oC), bC && (fC.x -= fC.x * bC.x + bC.y, fC.y -= fC.y * bC.x + bC.y, fC.z -= fC.z * bC.x + bC.y, oC.x += oC.x * bC.x + bC.y, oC.y += oC.y * bC.x + bC.y, oC.z += oC.z * bC.x + bC.y), {
+         minimum: fC,
+         maximum: oC
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7765-L7814` → after: `L2379-L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2379-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2379-L2388) · [Before (L7765-L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7765-L7814)

```diff
-       writeUniforms(qq) {
-         const Eq = (0, PA.b)(this.system, this.uniformBits, qq);
-         Eq && (this.uniformBits = Eq, this.device.queue.writeBuffer(this.uniforms, 0, Eq))
-       }
-       bind() {
-         const {
-           system: qq
-         } = this, Eq = this.texture;
-         (0, PA.l)(qq, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
-           label: `particles-ramp-${qq.name}`,
-           size: [NA.m, 1],
-           format: "rgba8unorm",
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
-           texture: this.ramp
-         }, this.rampTexels.texels, {
- ... (34 more removed lines; see GitHub link above)
+     }
+ 
+     function oC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         bC = arguments.length > 4 ? arguments[4] : void 0;
+       const fC = new wC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         oC = new wC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return bC || (bC = 3), nC.extractMinAndMax(CC, zC, ZC, bC, fC, oC), QC && (fC.x -= fC.x * QC.x + QC.y, fC.y -= fC.y * QC.x + QC.y, fC.z -= fC.z * QC.x + QC.y, oC.x += oC.x * QC.x + QC.y, oC.y += oC.y * QC.x + QC.y, oC.z += oC.z * QC.x + QC.y), {
+         minimum: fC,
+         maximum: oC
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7818-L7905` → after: `L2403-L2405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2403-L2405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2403-L2405) · [Before (L7818-L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7818-L7905)

```diff
-       constructor(qq, Eq) {
-         this.device = qq, this.resources = Eq, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-         const gq = qq.createBindGroupLayout({
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
- ... (72 more removed lines; see GitHub link above)
+       get materialDefines() {
+         const CC = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
+         return "string" === typeof CC ? null : CC
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7907-L7908` → after: `L2407-L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2407-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2407-L2408) · [Before (L7907-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7907-L7908)

```diff
-       get tlq() {
-         return this.systems.size
+       set materialDefines(CC) {
+         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = CC
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7910-L7911` → after: `L2410-L2414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2410-L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2410-L2414) · [Before (L7910-L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7910-L7911)

```diff
-       reset() {
-         for (const qq of this.systems.keys()) qq.reset()
+       _getDrawWrapper(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         CC = CC ?? this._engine.currentRenderPassId;
+         let ZC = this._drawWrappers[CC];
+         return !ZC && zC && (this._drawWrappers[CC] = ZC = new oC.d(this._mesh.Km().mg())), ZC
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7913-L7914` → after: `L2416-L2418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2416-L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2416-L2418) · [Before (L7913-L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7913-L7914)

```diff
-       describePendingWork() {
-         return (0, WA.g)(this.systems.keys(), "Lite")
+       _removeDrawWrapper(CC) {
+         let zC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[CC]?.dispose(zC), this._drawWrappers[CC] = void 0
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7916-L7918` → after: `L2420-L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2420-L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2420-L2421) · [Before (L7916-L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7916-L7918)

```diff
-       Fk(qq, Eq) {
-         const gq = new WA.d(qq, Eq, this);
-         return this.systems.set(gq, new QA(this.device, gq, this.allocateFrameIndex(), this.bindings)), gq
+       get effect() {
+         return this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.effect : this._getDrawWrapper()?.effect ?? null
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7920-L7921` → after: `L2423-L2424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2423-L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2423-L2424) · [Before (L7920-L7921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7920-L7921)

```diff
-       aqq(qq, Eq) {
-         for (const gq of this.systems.keys()) gq.aqq(qq, Eq)
+       get _drawWrapper() {
+         return this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7923-L7934` → after: `L2426-L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2426-L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2426-L2427) · [Before (L7923-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7923-L7934)

```diff
-       canDraw(qq) {
-         const Eq = this.systems.get(qq),
-           gq = qq.texture ? this.resources.boundTexture(qq.texture) : null;
-         if (!Eq || !gq || !this.targetPipelines) return !1;
-         if (Eq.texture = gq, Eq.pipelines.length = 0, !Rl(qq.blendMode)) return this.warnOnce(`blend:${qq.blendMode}`, `particle blend mode ${qq.blendMode} is not drawn (${qq.name})`), !0;
-         const Yq = (0, bl.l)(qq.blendMode);
-         for (const lq of Yq) {
-           const qq = this.pipelineFor(lq);
-           if (!1 === qq) return Eq.pipelines.length = 0, !0;
-           qq && Eq.pipelines.push(qq)
-         }
-         return Eq.pipelines.length === Yq.length
+       get _drawWrapperOverride() {
+         return this._mainDrawWrapperOverride
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7936-L7937` → after: `L2429-L2430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2429-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2429-L2430) · [Before (L7936-L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7936-L7937)

```diff
-       disposeStopped(qq) {
-         qq.dispose()
+       _setMainDrawWrapperOverride(CC) {
+         this._mainDrawWrapperOverride = CC
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7939-L7941` → after: `L2432-L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2432-L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2432-L2437) · [Before (L7939-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7939-L7941)

```diff
-       remove(qq) {
-         const Eq = this.systems.get(qq);
-         Eq && (this.systems.delete(qq), Eq.destroy(), this.freeFrameIndices.push(Eq.frameIndex))
+       setEffect(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           ZC = arguments.length > 2 ? arguments[2] : void 0,
+           QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         const wC = this._drawWrapper;
+         wC.setEffect(CC, zC, QC), void 0 !== ZC && (wC.materialContext = ZC), CC || (wC.defines = null, wC.materialContext = void 0)
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7943-L7953` → after: `L2439-L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2439-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2439-L2443) · [Before (L7943-L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7943-L7953)

```diff
-       prepare(qq) {
-         const Eq = qq.animationRatio || 1;
-         xE(this.renderable._worldCenter, qq, YE), this.preparedTarget = this.target, this.draws.length = 0;
-         let gq = 0;
-         for (const Yq of this.systems.values()) {
-           const qq = Yq.system;
-           if (!qq.animateIfActive(Eq)) continue;
-           if (qq.ring.takeUploads(Yq.upload), !qq.hasLiveParticles() || 0 === Yq.pipelines.length) continue;
-           Yq.writeUniforms(this.warnOnce), Yq.bind();
-           const lq = 64 * Yq.frameIndex;
-           Yq.count = qq.ring.drawCount(), HA(qq, this.frameData, this.frameBits, lq), gq = Math.max(gq, lq + 64), this.draws.push(Yq)
+       resetDrawCache(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this._drawWrappers) {
+           if (void 0 !== CC) return void this._removeDrawWrapper(CC, !0, zC);
+           for (const CC of this._drawWrappers) CC?.dispose(zC)
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7955` → after: `L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2445) · [Before (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7955)

```diff
-         gq > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, gq)
+         this._drawWrappers = []
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7957-L7964` → after: `L2447-L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2447-L2448) · [Before (L7957-L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7957-L7964)

```diff
-       draw(qq) {
-         let Eq = 0,
-           gq = null;
-         for (const Yq of this.draws) {
-           qq.setBindGroup(1, Yq.bindGroup), qq.setBindGroup(2, this.frameBindGroup, [256 * Yq.frameIndex]);
-           for (const lq of Yq.pipelines) lq !== gq && (qq.setPipeline(lq), gq = lq), qq.draw(4, Yq.count), Eq++
-         }
-         return Eq
+       static AddToMesh(CC, zC, ZC, QC, wC, bC, nC) {
+         return new FC(CC, zC, ZC, QC, wC, bC, nC, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L7966-L8021` → after: `L2450-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2450-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2450-L2453) · [Before (L7966-L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L7966-L8021)

```diff
-       bindTarget(qq) {
-         this.target = qq;
-         const Eq = `${qq._colorFormat}|${qq._depthStencilFormat}|${qq._depthCompare}|${qq._sampleCount}`;
-         let gq = this.pipelines.get(Eq);
-         gq || (gq = new Map, this.pipelines.set(Eq, gq)), this.targetPipelines = gq
-       }
-       pipelineFor(qq) {
-         var Eq;
-         const gq = this.targetPipelines,
-           Yq = gq.get(qq);
-         if (void 0 !== Yq) return Yq;
-         gq.set(qq, null);
-         const lq = this.target,
-           Oq = qq === bl.d,
-           mq = null !== (Eq = lq._depthCompare) && void 0 !== Eq ? Eq : gE;
-         return this.device.createRenderPipelineAsync({
- ... (40 more removed lines; see GitHub link above)
+       constructor(CC, zC, ZC, QC, wC, bC, nC) {
+         let fC = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
+           oC = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
+         this.materialIndex = CC, this.verticesStart = zC, this.verticesCount = ZC, this.indexStart = QC, this.indexCount = wC, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8023-L8028` → after: `L2455-L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2455-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2455-L2456) · [Before (L8023-L8028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8023-L8028)

```diff
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+       get IsGlobal() {
+         return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8030-L8041` → after: `L2458-L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2458-L2459) · [Before (L8030-L8041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8030-L8041)

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
+       WE() {
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.WE() : this._boundingInfo
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8043-L8086` → after: `L2461-L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2461-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2461-L2462) · [Before (L8043-L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8043-L8086)

```diff
-     }
-     class tA {
-       constructor(qq, Eq, gq, Yq, lq) {
-         this.lite = qq, this.canvas = Eq, this.info = gq, this.resources = lq, this.vYq = !1, this.needPOTTextures = !1, this.J_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
-           }
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Eq.width, this.renderHeight = Eq.height, this.caps = {
-           maxTextureSize: Yq.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: Yq.maxTextureArrayLayers
-         }
-       }
-       getCaps() {
-         return this.caps
-       }
-       getRenderWidth() {
- ... (28 more removed lines; see GitHub link above)
+       setBoundingInfo(CC) {
+         return this._boundingInfo = CC, this
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8088-L8090` → after: `L2464-L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2464-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2464-L2465) · [Before (L8088-L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8088-L8090)

```diff
-       resize() {}
-       getRenderingCanvas() {
-         return this.canvas
+       getMesh() {
+         return this._mesh
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8092-L8093` → after: `L2467-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2467-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2467-L2475) · [Before (L8092-L8093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8092-L8093)

```diff
-       getInfo() {
-         return this.info
+       getRenderingMesh() {
+         return this._renderingMesh
+       }
+       getReplacementMesh() {
+         return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
+       }
+       getEffectiveMesh() {
+         const CC = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
+         return CC || this._renderingMesh
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8096-L8097` → after: `L2478-L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2478-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2478-L2485) · [Before (L8096-L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8096-L8097)

```diff
-         const qq = performance.now();
-         this.deltaTime = null === this.lastFrameTime ? 0 : qq - this.lastFrameTime, this.lastFrameTime = qq
+         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         const zC = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
+         if (!zC) return CC && this._mesh.Km()._hasDefaultMaterial ? this._mesh.Km().defaultMaterial : null;
+         if (this._isMultiMaterial(zC)) {
+           const CC = zC.getSubMaterial(this.materialIndex);
+           return this._currentMaterial !== CC && (this._currentMaterial = CC, this.resetDrawCache()), CC
+         }
+         return zC
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8099-L8100` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2487-L2488) · [Before (L8099-L8100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8099-L8100)

```diff
-       getDeltaTime() {
-         return this.deltaTime
+       _isMultiMaterial(CC) {
+         return void 0 !== CC.getSubMaterial
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8102-L8104` → after: `L2490-L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2490-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2490-L2503) · [Before (L8102-L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8102-L8104)

```diff
-       createCanvas(qq, Eq) {
-         const gq = document.createElement("canvas");
-         return gq.width = qq, gq.height = Eq, gq
+       refreshBoundingInfo() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
+         if (CC || (CC = this._renderingMesh.getVerticesData(wC.k.PositionKind)), !CC) return this._boundingInfo = this._mesh.WE(), this;
+         const zC = this._renderingMesh.CQC();
+         let ZC;
+         if (0 === this.indexStart && this.indexCount === zC.length) {
+           const CC = this._renderingMesh.WE();
+           ZC = {
+             minimum: CC.minimum.clone(),
+             maximum: CC.maximum.clone()
+           }
+         } else ZC = (0, fC.c)(CC, zC, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
+         return this._boundingInfo ? this._boundingInfo.reConstruct(ZC.minimum, ZC.maximum) : this._boundingInfo = new nC.d(ZC.minimum, ZC.maximum), this
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8106-L8108` → after: `L2505-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2505-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2505-L2506) · [Before (L8106-L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8106-L8108)

```diff
-       U_(qq, Eq) {
-         var gq;
-         return null !== (gq = this.resources.U_.get(qq)) && void 0 !== gq ? gq : new Fq(this.resources, qq, Eq)
+       _checkCollision(CC) {
+         return this.WE()._checkCollision(CC)
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8110-L8111` → after: `L2508-L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2508-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2508-L2510) · [Before (L8110-L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8110-L8111)

```diff
-       atlasArray(qq, Eq, gq) {
-         return this.resources.atlasArray(qq, Eq, gq)
+       updateBoundingInfo(CC) {
+         let zC = this.WE();
+         return zC || (this.refreshBoundingInfo(), zC = this.WE()), zC && zC.update(CC), this
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8113-L8116` → after: `L2512-L2514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2512-L2514) · [Before (L8113-L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8113-L8116)

```diff
-     }
-     class rA {
-       constructor() {
-         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
+       isInFrustum(CC) {
+         const zC = this.WE();
+         return !!zC && zC.isInFrustum(CC, this._mesh.cullingStrategy)
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8118-L8122` → after: `L2516-L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2516-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2516-L2518) · [Before (L8118-L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8118-L8122)

```diff
-       copyFromView(qq) {
-         this.fov = qq.fov, this.nearPlane = qq.near, this.farPlane = qq.far;
-         const Eq = qq.worldMatrix;
-         for (let gq = 0; gq < 16; gq++)
-           if (this.worldMatrix[gq] !== Eq[gq]) return this.worldMatrix.set(Eq), void this.worldMatrixVersion++
+       isCompletelyInFrustum(CC) {
+         const zC = this.WE();
+         return !!zC && zC.isCompletelyInFrustum(CC)
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8124-L8136` → after: `L2520-L2534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2520-L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2520-L2534) · [Before (L8124-L8136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8124-L8136)

```diff
-     }
-     class vA {
-       constructor(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
-         let uq = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
-         this.engine = qq, this.PV = Eq, this.sceneTask = gq, this.gpuDevice = Yq, this.terrain = lq, this.meshes = Oq, this.particles = mq, this.resources = xq, this.sunShadow = uq, this.cgq = void 0, this.backendName = "WebGPU (Lite)", this.W4 = void 0, this.modelMeshes = void 0 … [truncated]
-           Fc: qq => {
-             fq(qq) && xq.textureSlot(qq)
-           },
-           loaded: qq => fq(qq) ? xq.textureLoaded(qq) : null,
-           canvasUpdated: (qq, Eq, gq) => {
-             fq(qq) && xq.canvasUpdated(qq, Eq, gq)
-           }
-         }), this.W4 = Oq.W4, this.modelMeshes = Oq.modelMeshes, Eq.camera = this.camera
+       render(CC) {
+         return this._renderingMesh.render(this, CC, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
+       }
+       _getLinesIndexBuffer(CC, zC) {
+         if (!this._linesIndexBuffer) {
+           const ZC = 6 * Math.floor(this.indexCount / 3),
+             QC = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(ZC) : new Uint16Array(ZC);
+           let wC = 0;
+           if (0 === CC.length)
+             for (let CC = this.indexStart; CC < this.indexStart + this.indexCount; CC += 3) QC[wC++] = CC, QC[wC++] = CC + 1, QC[wC++] = CC + 1, QC[wC++] = CC + 2, QC[wC++] = CC + 2, QC[wC++] = CC;
+           else
+             for (let zC = this.indexStart; zC < this.indexStart + this.indexCount; zC += 3) QC[wC++] = CC[zC], QC[wC++] = CC[zC + 1], QC[wC++] = CC[zC + 1], QC[wC++] = CC[zC + 2], QC[wC++] = CC[zC + 2], QC[wC++] = CC[zC];
+           this._linesIndexBuffer = zC.createIndexBuffer(QC), this._linesIndexCount = QC.length
+         }
+         return this._linesIndexBuffer
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8138-L8140` → after: `L2536-L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2536-L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2536-L2538) · [Before (L8138-L8140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8138-L8140)

```diff
-       get castsEntitySunShadows() {
-         var qq, Eq;
-         return null !== (qq = null === (Eq = this.sunShadow) || void 0 === Eq ? void 0 : Eq.tracesEntities) && void 0 !== qq && qq
+       canIntersects(CC) {
+         const zC = this.WE();
+         return !!zC && CC.intersectsBox(zC.boundingBox)
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8142-L8143` → after: `L2540-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2540-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2540-L2564) · [Before (L8142-L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8142-L8143)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       intersects(CC, zC, ZC, QC, wC) {
+         const bC = this.cg();
+         if (!bC) return null;
+         let nC = 3,
+           fC = !1;
+         switch (bC.fillMode) {
+           case 3:
+           case 5:
+           case 6:
+           case 8:
+             return null;
+           case 7:
+             nC = 1, fC = !0
+         }
+         return 4 === bC.fillMode ? ZC.length ? this._intersectLines(CC, zC, ZC, this._mesh.intersectionThreshold, QC) : this._intersectUnIndexedLines(CC, zC, ZC, this._mesh.intersectionThreshold, QC) : !ZC.length && this._mesh._unIndexed ? this._intersectUnIndexedTriangles(CC, zC … [truncated]
+       }
+ ... (9 more added lines; see GitHub link above)
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8145-L8149` → after: `L2566-L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2566-L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2566-L2572) · [Before (L8145-L8149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8145-L8149)

```diff
-       attach(qq) {
-         this.modelMeshes.attach(qq.model, qq.sceneMirror);
-         const Eq = qq.PV;
-         this.setClearColour(Eq.clearColor.r, Eq.clearColor.g, Eq.clearColor.b), Eq.draw = () => {
-           this.drawFrame(qq, Eq)
+       _intersectUnIndexedLines(CC, zC, ZC, QC, wC) {
+         let nC = null;
+         for (let fC = this.verticesStart; fC < this.verticesStart + this.verticesCount; fC += 2) {
+           const ZC = zC[fC],
+             oC = zC[fC + 1],
+             qC = CC.intersectionSegment(ZC, oC, QC);
+           if (!(qC < 0) && ((wC || !nC || qC < nC.distance) && (nC = new bC.d(null, null, qC), nC.faceId = fC / 2, wC))) break
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8152-L8191` → after: `L2576-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2576-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2576-L2599) · [Before (L8152-L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8152-L8191)

```diff
-       render(qq) {
-         try {
-           this.cgq.Qr(), qq.PV.render()
-         } catch (Eq) {
-           throw this.refusals.frameFailed(Eq), Eq
-         }
-         this.refusals.frameDrawn()
-       }
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
-       }
-       describePendingWork() {
-         var qq, Eq, gq, Yq;
-         const lq = [...this.particles.describePendingWork(), ...null !== (qq = null === (Eq = this.sunShadow) || void 0 === Eq ? void 0 : Eq.describePendingWork()) && void 0 !== qq ? qq : []],
-           Oq = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (gq = this.terrain.sceneDepth) && void 0 !== gq && gq.compiling ? 1 : 0) + (null !== (Yq = this.terrain.shadowMask) && void 0 !== Yq && Yq.compiling ? 1 : 0);
-         Oq > 0 && lq.push(`${Oq} Lite pipelines compiling`);
- ... (24 more removed lines; see GitHub link above)
+       _intersectTriangles(CC, zC, ZC, QC, wC, bC, nC) {
+         let fC = null,
+           oC = -1;
+         for (let qC = this.indexStart; qC < this.indexStart + this.indexCount - (3 - QC); qC += QC) {
+           oC++;
+           const QC = ZC[qC],
+             FC = ZC[qC + 1],
+             WC = ZC[qC + 2];
+           if (wC && 4294967295 === WC) {
+             qC += 2;
+             continue
+           }
+           const NC = zC[QC],
+             MC = zC[FC],
+             gC = zC[WC];
+           if (!NC || !MC || !gC) continue;
+ ... (8 more added lines; see GitHub link above)
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8193-L8216` → after: `L2601-L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2601-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2601-L2611) · [Before (L8193-L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8193-L8216)

```diff
-     }
-     const hA = "WebGPU device lost while Lite was starting";
- 
-     function nA(qq, Eq) {
-       return "object" === typeof qq && null !== qq ? Object.assign(qq, {
-         startStep: Eq
-       }) : qq
-     }
-     async function bA(qq, Eq) {
-       const gq = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance"
-       });
-       if (!gq) throw nA(new Error("No WebGPU adapter"), "no_adapter");
-       const Yq = gq.info,
-         lq = {
-           vendor: (null === Yq || void 0 === Yq ? void 0 : Yq.vendor) || "unknown vendor",
- ... (8 more removed lines; see GitHub link above)
+       _intersectUnIndexedTriangles(CC, zC, ZC, QC, wC) {
+         let bC = null;
+         for (let nC = this.verticesStart; nC < this.verticesStart + this.verticesCount; nC += 3) {
+           const ZC = zC[nC],
+             fC = zC[nC + 1],
+             oC = zC[nC + 2];
+           if (wC && !wC(ZC, fC, oC, CC, -1, -1, -1)) continue;
+           const qC = CC.intersectsTriangle(ZC, fC, oC);
+           if (qC) {
+             if (qC.distance < 0) continue;
+             if ((QC || !bC || qC.distance < bC.distance) && (bC = qC, bC.faceId = nC / 3, QC)) break
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8218-L8229` → after: `L2613-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2613-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2613-L2614) · [Before (L8218-L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8218-L8229)

```diff
-           return Eq
-         }(gq);
-       let mq;
-       qq.style.background = "black";
-       try {
-         mq = await (0, Jq.f)(qq, {
-           msaaSamples: Eq.Rgq ? 4 : 1,
-           requiredLimits: Oq,
-           alphaMode: "premultiplied"
-         })
-       } catch (uq) {
-         throw nA(uq, "#47" === (null === (xq = uq) || void 0 === xq ? void 0 : xq.message) ? "no_adapter" : "device")
+         }
+         return bC
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8231-L8272` → after: `L2616-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2616-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2616-L2624) · [Before (L8231-L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8231-L8272)

```diff
-       var xq;
-       const Aq = function(qq) {
-         return qq._device
-       }(mq);
-       let cq = null;
-       Aq.lost.then((qq => {
-         cq = qq, console.error(`WebGPU device lost (${qq.reason}): ${qq.message}`)
-       }));
-       try {
-         const gq = await async function(qq, Eq, gq, Yq, lq, Oq) {
-           const mq = (0, kq.c)(qq),
-             xq = new sm(qq, Eq),
-             Aq = new Xx(Eq),
-             cq = new nm(Eq, xq, (qq => function(qq, Eq) {
-               for (const Yq of Dq(qq)) {
-                 var gq;
- ... (26 more removed lines; see GitHub link above)
+       _rebuild() {
+         this._linesIndexBuffer && (this._linesIndexBuffer = null)
+       }
+       clone(CC, zC) {
+         const ZC = new FC(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, CC, zC, !1);
+         if (!this.IsGlobal) {
+           const CC = this.WE();
+           if (!CC) return ZC;
+           ZC._boundingInfo = new nC.d(CC.minimum, CC.maximum)
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L8278-L8370` → after: `L2628-L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2628-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2628-L2648) · [Before (L8278-L8370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L8278-L8370)

```diff
-     }
-   },
-   40622: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       B: () => Nq,
-       D: () => aq,
-       b: () => lq,
-       c: () => Yq,
-       e: () => Wq,
-       g: () => uq,
-       j: () => dq,
-       l: () => Oq,
-       n: () => xq,
-       r: () => Aq,
-       v: () => mq,
-       x: () => Vq
- ... (77 more removed lines; see GitHub link above)
+       dispose() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._linesIndexBuffer && (this._mesh.Km().mg()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const zC = this._mesh.Zx.indexOf(this);
+         this._mesh.Zx.splice(zC, 1), this.resetDrawCache(void 0, CC)
+       }
+       getClassName() {
+         return "SubMesh"
+       }
+       static CreateFromIndices(CC, zC, ZC, QC, wC) {
+         let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           nC = Number.MAX_VALUE,
+           fC = -Number.MAX_VALUE;
+         const oC = (wC || QC).CQC();
+         for (let qC = zC; qC < zC + ZC; qC++) {
+           const CC = oC[qC];
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/263.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/263.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696)

#### 1. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L4-L13` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L4) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L4-L13)

```diff
-   40733: (qq, Eq, gq) => {
-     function Yq(qq, Eq, gq) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(qq, Eq).getContext("2d", gq);
-       const Yq = document.createElement("canvas");
-       return Yq.width = qq, Yq.height = Eq, Yq.getContext("2d", gq)
-     }
- 
-     function lq(qq, Eq) {
-       return qq.getContext("2d", Eq)
-     }
+   41402: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L15-L17` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L6-L9) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L15-L17)

```diff
-       d: () => lq,
-       f: () => Yq
-     })
+       d: () => QC
+     });
+     class QC {}
+     QC.AUTOSAMPLERSUFFIX = "Sampler", QC.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", QC.ALPHA_DISABLE = 0, QC.ALPHA_ADD = 1, QC.ALPHA_COMBINE = 2, QC.ALPHA_SUBTRACT = 3, QC.ALPHA_MULTIPLY = 4, QC.ALPHA_MAXIMIZED = 5, QC.ALPHA_ONEONE = 6, QC.ALPHA_PREMULTIPLIED = 7, QC.ALPH … [truncated]
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L19` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L11) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L19)

```diff
-   40659: (qq, Eq, gq) => {
+   41384: (CC, zC, ZC) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L21-L36` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L13) · [Before (L21-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L21-L36)

```diff
-       e: () => oq,
-       i: () => aq,
-       l: () => Fq,
-       p: () => nq,
-       r: () => iq,
-       s: () => Zq,
-       w: () => Hq,
-       x: () => dq,
-       z: () => jq,
-       B: () => hq,
-       D: () => Jq,
-       G: () => yq,
-       K: () => Sq,
-       L: () => Uq,
-       O: () => fq,
-       S: () => Tq
+       d: () => oC
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L38-L268` → after: `L15-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L15-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L15-L26) · [Before (L38-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L38-L268)

```diff
-     var Yq = gq(4622),
-       lq = gq(40369),
-       Oq = (gq(40515), gq(15));
-     class mq {
-       constructor(qq, Eq) {
-         this.memory = qq, this.access = Eq, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.WB = 0, this.u32 = new Oq.l(0), this.f32 = new Oq.g(0), this.u8 = new Oq.c(0), this.dataView = new Oq.i(new ArrayBuffer(0)), this.refresh()
-       }
-       refresh() {
-         this.ptr = this.access.ptr(), this.WB = this.access.WB(), this.buffer = (0, Oq.K)(this.memory()), this.u32 = new Oq.l(this.buffer, this.ptr, this.WB >>> 2), this.f32 = new Oq.g(this.buffer, this.ptr, this.WB >>> 2), this.u8 = new Oq.c(this.buffer, this.ptr, this.WB), this … [truncated]
-       }
-       ensureViews() {
-         (0, Oq.K)(this.memory()) !== this.buffer && this.refresh()
-       }
-       get view() {
-         return this.ensureViews(), this.dataView
-       }
- ... (215 more removed lines; see GitHub link above)
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36963),
+       nC = ZC(40084),
+       fC = ZC(40049);
+     let oC = (() => {
+       var CC;
+       let zC, ZC, oC, qC, FC = nC.c,
+         WC = [];
+       return CC = class extends FC {
+         constructor() {
+           super(...arguments), this._position = (0, QC.n)(this, WC), this._needProjectionMatrixCompute = !0, this._viewMatrix = bC.b.Identity(), this._projectionMatrix = bC.b.Identity()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L270-L394` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L28-L29) · [Before (L270-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L270-L394)

```diff
-       }
-       get isStopped() {
-         return this.stopped
-       }
-       frame(qq, Eq) {
-         var gq;
-         let Oq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this.stopped) return !1;
-         if (!this.writePendingInput()) return !1;
-         const {
-           input: mq,
-           net: xq,
-           worker: Aq,
-           cmd: cq
-         } = this.rings, uq = xq.cursor, Bq = Eq && !this.drawsHeld;
-         let dq = Yq.D.Fatal;
- ... (109 more removed lines; see GitHub link above)
+         _setPosition(CC) {
+           this._position = CC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L396-L399` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L31-L32) · [Before (L396-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L396-L399)

```diff
-       }
-       setEnvPrefs(qq) {
-         this.unsentEnvPrefs = {
-           ...qq
+         get position() {
+           return this._position
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L401-L404` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L34-L35) · [Before (L401-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L401-L404)

```diff
-       }
-       setLookPrefs(qq) {
-         this.unsentLookPrefs = {
-           ...qq
+         set position(CC) {
+           this._setPosition(CC)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L406-L503` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L37-L38) · [Before (L406-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L406-L503)

```diff
-       }
-       queueOptions(qq, Eq) {
-         return !this.isStopped && (Eq.byteLength > Yq._b.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
-           aux: qq,
-           payload: Eq
-         }), !0))
-       }
-       setChunkCap(qq) {
-         return this.callCore("setChunkCap", null, (Eq => Eq.Vmq(qq)))
-       }
-       shedMemory(qq) {
-         const Eq = this.callCore("shedMemory", null, (Eq => Eq.ymq(qq)));
-         return 0 === Eq ? null : Eq
-       }
-       addDistanceInUse() {
-         const qq = this.callCore("addDistanceInUse", null, (qq => qq.MOq()));
- ... (82 more removed lines; see GitHub link above)
+         _setDirection(CC) {
+           this._direction = CC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L505-L599` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L40-L41) · [Before (L505-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L505-L599)

```diff
-       }
-       readEvents(qq) {
-         this.netOffsets.length = 0;
-         const Eq = this.headerView(),
-           gq = Eq[Yq.hb.EventsPtr],
-           lq = Eq[Yq.hb.EventsLen];
-         if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === lq) return Gq;
-         const Oq = [],
-           mq = this.memory().buffer;
-         if (gq % 4 !== 0 || gq + lq > mq.byteLength) return this.crash(pq, `events of ${lq} bytes at ${gq} outside ${mq.byteLength} bytes of memory`), Gq;
-         const xq = new DataView(mq, gq, lq),
-           Aq = this.rings.net,
-           cq = (Eq, gq) => Eq + gq <= qq ? Aq.copyWritten(Eq, gq) : null;
-         let uq = 0;
-         for (; uq < lq;) {
-           const qq = uq + Yq.P,
- ... (79 more removed lines; see GitHub link above)
+         get direction() {
+           return this._direction
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L601-L639` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L43-L44) · [Before (L601-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L601-L639)

```diff
-         return Oq
-       }
-       forEachNetOut(qq) {
-         this.forEachOut(Pq, "net-out", Yq.hb.NetOutPtr, Yq.hb.NetOutLen, Yq.Tb, 0, ((Eq, gq, lq, Oq) => {
-           const mq = (0, Yq.ve)(gq);
-           mq === Yq.Ub.Frame ? qq((0, Yq.ue)(gq), lq) : this.crash(Pq, `net-out record at ${Oq} is kind ${mq}, not a frame`)
-         }))
-       }
-       forEachWorkerOut(qq) {
-         this.forEachOut(Qq, "worker-out", Yq.hb.WorkerOutPtr, Yq.hb.WorkerOutLen, Yq.Md, 4, ((Eq, gq, lq, Oq) => {
-           const mq = 255 & Eq,
-             xq = mq === Yq.ce.Init ? this.initOf(lq, Oq) : lq;
-           null !== xq && qq(mq, Eq >>> 8 & 16777215, xq)
-         }))
-       }
-       initOf(qq, Eq) {
- ... (23 more removed lines; see GitHub link above)
+         set direction(CC) {
+           this._setDirection(CC)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L641-L657` → after: `L46-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L46-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L46-L95) · [Before (L641-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L641-L657)

```diff
-       }
-       forEachEvent(qq) {
-         if (this.stopped || null === this.lastHeader) return;
-         const Eq = this.headerView(),
-           gq = Eq[Yq.hb.EventsPtr],
-           lq = Eq[Yq.hb.EventsLen];
-         if (0 === lq) return;
-         const Oq = this.memory().buffer;
-         if (gq % 4 !== 0 || gq + lq > Oq.byteLength) return void this.crash(pq, `events of ${lq} bytes at ${gq} outside ${Oq.byteLength} bytes of memory`);
-         const mq = new DataView(Oq, gq, lq);
-         let xq = 0;
-         for (; xq < lq;) {
-           const Eq = xq + Yq.P,
-             gq = Eq <= lq ? mq.getUint32(xq, !0) : -1,
-             Oq = gq >>> 16;
-           if (gq < 0 || Oq > lq - Eq) return void this.crash(pq, `event record at ${xq} overruns its ${lq} bytes`);
- ... (1 more removed lines; see GitHub link above)
+         get shadowMinZ() {
+           return this._shadowMinZ
+         }
+         set shadowMinZ(CC) {
+           this._shadowMinZ = CC, this.forceProjectionMatrixCompute()
+         }
+         get shadowMaxZ() {
+           return this._shadowMaxZ
+         }
+         set shadowMaxZ(CC) {
+           this._shadowMaxZ = CC, this.forceProjectionMatrixCompute()
+         }
+         computeTransformedInformation() {
+           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = bC.r.Zero()), bC.r.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+         }
+         getDepthScale() {
+ ... (34 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L660-L661` → after: `L231-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L231-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L231-L284) · [Before (L660-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L660-L661)

```diff
-       crashOn(qq, Eq) {
-         Eq instanceof lq.d ? this.crash(pq, Eq.message) : this.crash(qq, Eq)
+     }
+   },
+   41438: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC.b
+     });
+     var QC = ZC(40265);
+     (0, QC.e)()
+   },
+   41392: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => QC.c
+     });
+     var QC = ZC(40283);
+     (0, QC.e)()
+   },
+ ... (38 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L663-L668` → after: `L286-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L286-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L286-L334) · [Before (L663-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L663-L668)

```diff
-       crash(qq, Eq) {
-         this.stopped || (this.stopped = !0, this.handlers.onCrash({
-           site: qq,
-           error: Eq,
-           header: this.lastHeader
-         }))
+       getClassName() {
+         return "LinesMesh"
+       }
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
+       }
+       set material(CC) {
+         const zC = this.material;
+         if (zC === CC) return;
+         const ZC = zC && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(CC), ZC && zC?.dispose()
+       }
+       _setInternalMaterial(CC) {
+         this._setMaterial(CC), this.material && (this.material.fillMode = qC.d.LineListDrawMode, this.material.disableLighting = !0)
+       }
+       get checkCollisions() {
+ ... (33 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L670-L671` → after: `L336-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L336-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L336-L342) · [Before (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L670-L671)

```diff
-       headerWord(qq) {
-         return this.stopped || null === this.lastHeader ? 0 : this.headerView()[qq]
+       createInstance(CC) {
+         const zC = new MC(CC, this);
+         if (this.ZE) {
+           zC.ZE = {};
+           for (const CC in this.ZE) zC.ZE[CC] = this.ZE[CC]
+         }
+         return zC
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L673-L680` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L344-L345) · [Before (L673-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L673-L680)

```diff
-       readLoadCounts(qq) {
-         if (this.stopped || null === this.lastHeader) return !1;
-         const Eq = this.core.od();
-         if (0 === Eq) return !1;
-         const gq = this.memory().buffer;
-         gq !== this.loadCountsBuffer && (this.loadCountsBuffer = gq, this.loadCounts = new Uint32Array(gq, Eq, Yq.zb));
-         const lq = this.loadCounts;
-         return qq.chunksReceived = lq[Yq.Gb.ChunksReceived], qq.chunksCancelled = this.headerView()[Yq.hb.ChunksCancelled], qq.chunksStored = lq[Yq.Gb.ChunksStored], qq.jobsSent = lq[Yq.Gb.JobsSent], qq.jobsDone = lq[Yq.Gb.JobsDone], qq.jobsInFlight = lq[Yq.Gb.JobsInFlight], qq.w … [truncated]
+       serialize(CC) {
+         super.serialize(CC), CC.color = this.color.VZC(), CC.alpha = this.alpha
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L682-L684` → after: `L347-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L347-L349) · [Before (L682-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L682-L684)

```diff
-       headerView() {
-         const qq = this.memory().buffer;
-         return qq !== this.headerBuffer && (this.headerBuffer = qq, this.header = new Uint32Array(qq, this.core.YN(), Yq.db)), this.header
+       static Parse(CC, zC) {
+         const ZC = new NC(CC.name, zC);
+         return ZC.color = bC.e.FromArray(CC.color), ZC.alpha = CC.alpha, ZC
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L687-L703` → after: `L352-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L352-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L352-L358) · [Before (L687-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L687-L703)

```diff
-   },
-   40663: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => mq,
-       c: () => Oq
-     });
-     var Yq = gq(4524);
-     let lq = null;
- 
-     function Oq(qq) {
-       lq = {
-         scanned: !1
-       };
-       try {
-         return qq()
-       } finally {
- ... (1 more removed lines; see GitHub link above)
+     NC.ForceGLSL = !1;
+     class MC extends oC.c {
+       constructor(CC, zC) {
+         super(CC, zC), this.intersectionThreshold = zC.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L708-L712` → after: `L364-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/263.js#L364-L365) · [Before (L708-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/263.js#L708-L712)

```diff
-       const qq = lq;
-       if (null === qq) return (0, Yq.h)();
-       const Eq = (0, Yq.h)(!qq.scanned);
-       return qq.scanned = !0, Eq
-     }
+       gC || (gC = !0, fC.b._LinesMeshParser = (CC, zC) => NC.Parse(CC, zC))
+     }(QC = NC.prototype).enableEdgesRendering ?? (QC.enableEdgesRendering = (0, WC.f)("LinesMesh", "enableEdgesRendering")), (wC = MC.prototype).enableEdgesRendering ?? (wC.enableEdgesRendering = (0, WC.f)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/264.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/264.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42)

#### 1. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4-L6` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/264.js#L4-L11) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/264.js#L4-L6)

```diff
-   40797: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       BloxdInformation: () => Nq
+   40297: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => IC,
+       f: () => xC,
+       i: () => RC,
+       k: () => AC,
+       o: () => GC,
+       r: () => PC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L8-L16` → after: `L13-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L13-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/264.js#L13-L565) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/264.js#L8-L16)

```diff
-     var Yq = gq(1183),
-       lq = gq(57),
-       Oq = gq(96),
-       mq = gq(1422),
-       xq = gq(136),
-       Aq = gq(1025),
-       cq = gq(1070);
-     const uq = (0, lq.lazy)((() => gq.e(117).then((() => gq(6390))))),
-       Bq = (0, lq.lazy)((() => gq.e(118).then((() => gq(6398)))));
+     var QC = ZC(39842),
+       wC = ZC(39910),
+       bC = ZC(36963),
+       nC = ZC(39959),
+       fC = ZC(40303),
+       oC = ZC(40175),
+       qC = ZC(39867),
+       FC = ZC(40167),
+       WC = ZC(36985),
+       NC = ZC(40157),
+       MC = ZC(40151),
+       gC = ZC(40196),
+       SC = ZC(37002);
+     const pC = {
+       effect: null,
+       subMesh: null
+ ... (537 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L19-L151` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/264.js#L568) · [Before (L19-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/264.js#L19-L151)

```diff
-       return (0, cq.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, cq.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
-         }), (0, cq.jsx)("p", {
-           children: "We have a program for reporting security exploits. Find an important security flaw in Bloxd? Report it through the process below. Please include steps to reproduce the exploit, including any relevant code if the exploit requires it. You will receive the rewar … [truncated]
-         }), (0, cq.jsx)("h3", {
-           children: "1. How to Report"
-         }), (0, cq.jsxs)("p", {
-           children: ["Please follow the instructions on", " ", (0, cq.jsx)("a", {
-             href: "https://forms.gle/wUL8WiH3LbGiJBzF7",
-             target: "_blank",
-             rel: "noreferrer",
-             children: "this form"
-           }), " ", "to report the exploit."]
- ... (117 more removed lines; see GitHub link above)
+       JC || (JC = !0, PC.Parse = GC, PC.ParseFromFileAsync = RC, PC.ParseFromSnippetAsync = AC, PC.CreateFromSnippetAsync = xC, (0, SC.d)("BABYLON.ShaderMaterial", PC))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/265.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/265.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250)

#### 1. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L4-L13` → after: `L5-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/265.js#L5-L24) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/265.js#L4-L13)

```diff
-   40844: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => oq,
-       e: () => Mq,
-       f: () => dq,
-       g: () => jq,
-       h: () => Wq,
-       j: () => Vq,
-       m: () => aq,
-       q: () => Nq
+   40325: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       FirebaseError: () => QC.e,
+       SDK_VERSION: () => QC.i,
+       _DEFAULT_ENTRY_NAME: () => QC.m,
+       sZC: () => QC.o,
+       _addOrOverwriteComponent: () => QC.q,
+       _apps: () => QC.u,
+       _clearComponents: () => QC.y,
+       _components: () => QC.C,
+       _getProvider: () => QC.D,
+       _registerComponent: () => QC.H,
+       _removeServiceInstance: () => QC.I,
+       deleteApp: () => QC.M,
+       getApp: () => QC.S,
+       getApps: () => QC.Q,
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L15-L628` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/265.js#L26-L27) · [Before (L15-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/265.js#L15-L628)

```diff
-     var Yq = gq(37139),
-       lq = gq(37289),
-       Oq = gq(37158),
-       mq = gq(40851),
-       xq = gq(39960),
-       Aq = gq(39774),
-       cq = gq(39801),
-       uq = gq(39779),
-       Bq = gq(37171);
-     const Wq = Object.freeze(new Yq.h(0, 0, 0, 0)),
-       Nq = Object.freeze(Yq.q.Zero()),
-       aq = Object.freeze(Yq.p.Zero()),
-       Vq = Object.freeze(Aq.b.Zero()),
-       dq = Object.freeze(lq.d.Black()),
-       jq = Object.freeze(new lq.g(0, 0, 0, 0)),
-       Hq = {
- ... (598 more removed lines; see GitHub link above)
+     var QC = ZC(40329);
+     (0, QC.$)("firebase", "9.23.0", "app")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/266.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/266.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927)

#### 1. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4-L5` → after: `L5-L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L5-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/266.js#L5-L1233) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/266.js#L4-L5)

```diff
-   40921: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   40340: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       D: () => dC,
+       E: () => WC,
+       H: () => FC,
+       I: () => NC,
+       L: () => sC,
+       O: () => gC,
+       R: () => pC,
+       U: () => vC,
+       X: () => GC,
+       _: () => RC,
+       cb: () => SC,
+       d: () => MC,
+       g: () => IC,
+       gb: () => PC,
+ ... (1213 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/267.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/267.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L4-L5` → after: `L5-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L5-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/267.js#L5-L1039) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/267.js#L4-L5)

```diff
-   40927: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   40357: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       getAnalytics: () => yz,
+       getGoogleAnalyticsClientId: () => Oz,
+       initializeAnalytics: () => Lz,
+       isSupported: () => Uz,
+       logEvent: () => ZZ,
+       setAnalyticsCollectionEnabled: () => CZ,
+       setConsent: () => QZ,
+       setCurrentScreen: () => Bz,
+       setDefaultEventParameters: () => zZ,
+       setUserId: () => kz,
+       setUserProperties: () => Vz,
+       settings: () => Dz
+     });
+     var QC = ZC(40329),
+ ... (1019 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/268.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/268.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813)

#### 1. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4-L9` → after: `L5-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L5-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/268.js#L5-L4026) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/268.js#L4-L9)

```diff
-   40929: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
-   }
- };
- Object.freeze(modules);
- for (const qq in modules) Object.freeze(modules[qq]);
+     40364: (CC, zC, ZC) => {
+         ZC.r(zC), ZC.d(zC, {
+           ActionCodeOperation: () => NC,
+           ActionCodeURL: () => Oz,
+           AuthCredential: () => uz,
+           AuthErrorCodes: () => PC,
+           EmailAuthCredential: () => jz,
+           EmailAuthProvider: () => Vz,
+           FacebookAuthProvider: () => QZ,
+           FactorId: () => oC,
+           GithubAuthProvider: () => bZ,
+           GoogleAuthProvider: () => wZ,
+           OAuthCredential: () => Lz,
+           OAuthProvider: () => ZZ,
+           OperationType: () => WC,
+           PhoneAuthCredential: () => Bz,
+ ... (4006 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/269.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/269.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L4-L5` → after: `L4-L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/269.js#L4-L1364) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/269.js#L4-L5)

```diff
-   40935: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   40412: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       $: () => Vz,
+       $d: () => gz,
+       $e: () => BZ,
+       $f: () => cZ,
+       Ab: () => rC,
+       Ac: () => RC,
+       Ad: () => SC,
+       Be: () => ZQ,
+       Bf: () => hZ,
+       Cc: () => Fz,
+       Cg: () => NZ,
+       D: () => DC,
+       Dd: () => gC,
+       Eb: () => ZZ,
+ ... (1345 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L5` → after: `L4-L8414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L4-L8414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/270.js#L4-L8414) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/270.js#L4-L5)

```diff
-   40940: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   41418: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => pC,
+       e: () => fC,
+       h: () => nC,
+       j: () => qC
+     });
+     var QC = ZC(37138),
+       wC = ZC(38538),
+       bC = ZC(38529);
+ 
+     function nC(CC, zC, ZC, QC) {
+       const wC = bC.x;
+       zC.fill(0), CC.gravity.toArray(zC, wC.gravity), CC.colorDead.toArray(zC, wC.colorDead), ZC[wC.ramp] = CC.useRampGradients ? 1 : 0;
+       const nC = CC.getColorGradients(),
+         fC = NC(CC, nC, "colour", QC);
+ ... (8395 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/271.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/271.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136)

#### 1. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4-L5` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/271.js#L4-L16) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/271.js#L4-L5)

```diff
-   40947: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   40888: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       gamePackSource: () => bC
+     });
+     var QC = ZC(4925),
+       wC = ZC(1439);
+ 
+     function bC(CC) {
+       return {
+         packKey: async zC => (await wC.d.getGame(CC, zC, !0)).customTexturePackKey,
+         fetchPack: QC.d
+       }
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/272.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/272.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/272.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/272.js#L2)

```diff
- export const ids = [272];
+ export const ids = [271, 272];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L4-L5` → after: `L4-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L4-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L93) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L5)

```diff
-   40952: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
+   40888: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       gamePackSource: () => bC
+     });
+     var QC = ZC(4925),
+       wC = ZC(1439);
+ 
+     function bC(CC) {
+       return {
+         packKey: async zC => (await wC.d.getGame(CC, zC, !0)).customTexturePackKey,
+         fetchPack: QC.d
+       }
+     }
+   },
+   50720: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+ ... (74 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/273.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/273.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L4-L5` → after: `L4-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L152) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L5)

```diff
-   40956: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
+   40893: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       BloxdInformation: () => MC
+     });
+     var QC = ZC(1143),
+       wC = ZC(48),
+       bC = ZC(77),
+       nC = ZC(1388),
+       fC = ZC(113),
+       oC = ZC(1013),
+       qC = ZC(1056);
+     const FC = (0, wC.lazy)((() => ZC.e(123).then((() => ZC(6529))))),
+       WC = (0, wC.lazy)((() => ZC.e(124).then((() => ZC(6533)))));
+ 
+     function NC() {
+       return (0, qC.jsxs)("div", {
+ ... (133 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/274.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/274.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/274.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/274.js#L4-L5)

```diff
-   40963: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
+   40934: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => RC,
+       e: () => HC,
+       f: () => pC,
+       i: () => PC,
+       j: () => NC,
+       k: () => SC,
+       l: () => gC,
+       m: () => MC
+     });
+     var QC = ZC(36963),
+       wC = ZC(37142),
+       bC = ZC(36991),
+       nC = ZC(40941),
+       fC = ZC(40046),
+ ... (609 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/275.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/275.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896)

#### 1. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/275.js#L4-L5)

```diff
-   40965: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
+   41003: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/276.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/276.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651)

#### 1. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L5)

```diff
-   40973: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
+   41009: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/277.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/277.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592)

#### 1. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/277.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/277.js#L4-L5)

```diff
-   40975: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
+   41018: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/278.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/278.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L5)

```diff
-   40977: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   41025: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/279.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/279.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/279.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/279.js#L4-L5)

```diff
-   40980: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
+   41031: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/280.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/280.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/280.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/280.js#L4-L5)

```diff
-   40983: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   41035: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/281.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/281.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L5)

```diff
-   40988: qq => {
-     qq.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   41044: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/282.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/282.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/282.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/282.js#L2)

```diff
- export const ids = [282, 283];
+ export const ids = [282];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L4-L754` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/282.js#L4-L5) · [Before (L4-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/282.js#L4-L754)

```diff
-   41007: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       CharacterCustomisationUI: () => Gq
-     });
-     var Yq = gq(57),
-       lq = gq(2907),
-       Oq = gq(1101),
-       mq = gq(1904),
-       xq = gq(1018),
-       Aq = gq.n(xq),
-       cq = gq(1226),
-       uq = gq(576),
-       Bq = gq(1183),
-       Wq = gq(2182),
-       Nq = gq(1547),
-       aq = gq(8794),
- ... (735 more removed lines; see GitHub link above)
+   41047: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/283.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/283.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L4-L152` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/283.js#L4-L5) · [Before (L4-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/283.js#L4-L152)

```diff
-   41011: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       CharacterPreview: () => Bq
-     });
-     var Yq = gq(57),
-       lq = gq(2660),
-       Oq = gq(1226),
-       mq = gq(8794),
-       xq = gq(9313),
-       Aq = gq(3501),
-       cq = gq(1070);
-     const uq = .6 * Math.PI,
-       Bq = (0, Yq.memo)((0, Yq.forwardRef)((function(qq, Eq) {
-         let {
-           onReady: gq,
-           onDrawn: Bq,
- ... (133 more removed lines; see GitHub link above)
+   41050: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/284.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/284.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L1182` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L5) · [Before (L4-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L1182)

```diff
-   41028: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       default: () => sE
-     });
-     var Yq = gq(41037),
-       lq = gq(41082),
-       Oq = gq(41091),
-       mq = gq(57),
-       xq = gq(71),
-       Aq = gq(41108),
-       cq = gq(41113),
-       uq = gq(4583),
-       Bq = gq(41120),
-       Wq = gq(1876),
-       Nq = gq(41125),
-       aq = gq(41144),
- ... (1163 more removed lines; see GitHub link above)
+   41056: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/285.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/285.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L4-L17228` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/285.js#L4-L5) · [Before (L4-L17228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/285.js#L4-L17228)

```diff
-   41037: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       d: () => ME,
-       e: () => rE,
-       g: () => HE,
-       i: () => Aq,
-       k: () => TE,
-       m: () => cq,
-       q: () => WE
-     });
-     var Yq = gq(41044),
-       lq = gq(41053),
-       Oq = gq(41070);
-     class mq {
-       constructor(qq, Eq, gq, Yq) {
-         this.state = qq, this.pos = Eq, this.explicit = gq, this.view = Yq, this.abortListeners = [], this.abortOnDocChange = !1
- ... (17209 more removed lines; see GitHub link above)
+   41062: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/286.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/286.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L2146` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L5) · [Before (L4-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L2146)

```diff
-   41044: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => HE,
-       i: () => fq,
-       ChangeSet: () => Mq,
-       m: () => iE,
-       q: () => kq,
-       u: () => TE,
-       x: () => Fq,
-       B: () => Zq,
-       C: () => lE,
-       G: () => kE,
-       E: () => RE,
-       I: () => SE,
-       J: () => QE,
-       L: () => eq,
- ... (2127 more removed lines; see GitHub link above)
+   41067: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/287.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/287.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4-L4269` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/287.js#L4-L6) · [Before (L4-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/287.js#L4-L4269)

```diff
-   41138: qq => {
-     function Eq(qq) {
-       var Eq = new Error("Cannot find module '" + qq + "'");
-       throw Eq.code = "MODULE_NOT_FOUND", Eq
-     }
-     Eq.keys = () => [], Eq.resolve = Eq, Eq.id = 41138, qq.exports = Eq
-   },
-   41208: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Yq,
-       i: () => lq
-     });
-     const Yq = "Sends one question to the AI",
-       lq = {
-         title: Yq,
-         "data-asks-ai": !0
- ... (4250 more removed lines; see GitHub link above)
+   41070: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/288.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/288.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468)

#### 1. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L7359` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L5) · [Before (L4-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L7359)

```diff
-   41120: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Yq
-     });
-     const Yq = String.raw`interface Map<K, V> {
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
- ... (7340 more removed lines; see GitHub link above)
+   41075: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/289.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/289.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L4-L230` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/289.js#L4-L5) · [Before (L4-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/289.js#L4-L230)

```diff
-   41125: (qq, Eq, gq) => {
-     function Yq() {
-       return Yq = Object.assign ? Object.assign.bind() : function(qq) {
-         for (var Eq = 1; Eq < arguments.length; Eq++) {
-           var gq = arguments[Eq];
-           for (var Yq in gq)({}).hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
-         }
-         return qq
-       }, Yq.apply(null, arguments)
-     }
-     gq.d(Eq, {
-       c: () => Wq,
-       d: () => xq
-     });
-     var lq = !1;
-     try {
- ... (211 more removed lines; see GitHub link above)
+   41082: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/290.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/290.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L4-L125586` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/290.js#L4-L5) · [Before (L4-L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/290.js#L4-L125586)

```diff
-   41144: (qq, Eq, gq) => {
-     var Yq = "/index.js",
-       lq = {};
-     (qq => {
-       var Eq = Object.defineProperty,
-         lq = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (qq, gq) => {
-           for (var Yq in gq) Eq(qq, Yq, {
-             get: gq[Yq],
-             enumerable: !0
-           })
-         }),
-         Oq = {};
-       lq(Oq, {
-         ANONYMOUS: () => s6,
-         AccessFlags: () => mO,
-         AssertionLevel: () => og,
- ... (125567 more removed lines; see GitHub link above)
+   41084: CC => {
+     CC.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/291.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/291.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade)

#### 1. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/291.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/291.js#L4-L6)

```diff
-   41230: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       collectImportedWorldCodePluginNames: () => cq
+   41104: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       CharacterPreview: () => WC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L8-L57` → after: `L8-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L8-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/291.js#L8-L92) · [Before (L8-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/291.js#L8-L57)

```diff
-     var Yq = gq(36912),
-       lq = gq(36906),
-       Oq = gq(41144),
-       mq = gq.n(Oq);
- 
-     function xq(qq) {
-       return mq().isImportDeclaration(qq) && mq().isStringLiteral(qq.moduleSpecifier) && function(qq) {
-         const Eq = qq.importClause;
-         if (!Eq) return !0;
-         if (Eq.isTypeOnly) return !1;
-         const gq = Eq.namedBindings;
-         return !(gq && !mq().isNamespaceImport(gq)) || !!Eq.name || gq.elements.some((qq => !qq.isTypeOnly))
-       }(qq) || mq().isExportDeclaration(qq) && qq.moduleSpecifier && mq().isStringLiteral(qq.moduleSpecifier) && function(qq) {
-         return !qq.isTypeOnly && (!qq.exportClause || !mq().isNamedExports(qq.exportClause) || 0 === qq.exportClause.elements.length || qq.exportClause.elements.some((qq => !qq.isTypeOnly)))
-       }(qq) ? qq.moduleSpecifier.text : mq().isImportEqualsDeclaration(qq) && !qq.isTypeOnly && mq().isExternalModuleReference(qq.moduleReference) && qq.moduleReference.expression && mq().isStringLiteral(qq.moduleReference.expression) ? qq.moduleReference.expression.text : mq().i … [truncated]
-     }
- ... (34 more removed lines; see GitHub link above)
+     var QC = ZC(48),
+       wC = ZC(2734),
+       bC = ZC(1183),
+       nC = ZC(2534),
+       fC = ZC(34185),
+       oC = ZC(3569),
+       qC = ZC(1056);
+     const FC = .6 * Math.PI,
+       WC = (0, QC.memo)((0, QC.forwardRef)((function(CC, zC) {
+         let {
+           onReady: ZC,
+           onDrawn: WC,
+           owner: NC = "other",
+           framing: MC = "player",
+           forcedCosmetics: gC,
+           Bn: SC,
+ ... (69 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L59` → after: `L94-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L94-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/291.js#L94-L134) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/291.js#L59)

```diff
-             mq().forEachChild(cq, uq)
+           }
+         }), [gC, mC]), (0, QC.useEffect)((() => {
+           const CC = oC.c.register(NC),
+             zC = fC.k.openCharacter(GC.current, MC);
+           xC.current = zC;
+           let ZC = !0;
+           return zC.ready.then((() => {
+             ZC && (vC(!0), eC.current())
+           })).catch((CC => {
+             console.error("Failed to set up the character preview", CC)
+           })), () => {
+             ZC = !1, CC(), zC.resetCamera(), zC.close(), xC.current = null
+           }
+         }), []), (0, QC.useEffect)((() => {
+           RC <= 0 || AC <= 0 || xC.current.resize(RC, AC)
+         }), [RC, AC]), (0, QC.useEffect)((() => {
+ ... (25 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L61-L79` → after: `L136-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L136-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/291.js#L136-L153) · [Before (L61-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/291.js#L61-L79)

```diff
-         uq(cq)
-       }
-       return [...Eq].sort()
-     }
-   },
-   41186: qq => {
-     function Eq(qq) {
-       var Eq = new Error("Cannot find module '" + qq + "'");
-       throw Eq.code = "MODULE_NOT_FOUND", Eq
-     }
-     Eq.keys = () => [], Eq.resolve = Eq, Eq.id = 41186, qq.exports = Eq
-   },
-   41170: () => {},
-   41153: () => {},
-   41195: () => {},
-   41162: () => {},
- ... (3 more removed lines; see GitHub link above)
+           const QC = performance.now();
+           let wC = 0;
+           const bC = nC => {
+             CC.setOrbit({
+               yaw: PC + (nC - QC) / 6e3 * 2 * Math.PI,
+               pitch: zC,
+               radius: ZC
+             }), wC = requestAnimationFrame(bC)
+           };
+           return wC = requestAnimationFrame(bC), () => {
+             cancelAnimationFrame(wC), CC.resetCamera()
+           }
+         }), [iC, PC]), (0, qC.jsx)("div", {
+           className: "CharCustomisationPreview",
+           ref: GC
+         })
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/292.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/292.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L4)

```diff
-   41216: (qq, Eq, gq) => {
+   41113: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L8-L11` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L8-L19) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L8-L11)

```diff
-     var Yq = gq(57),
-       lq = gq(4572),
-       Oq = gq(1659),
-       mq = gq(1018),
+     var QC = ZC(41122),
+       wC = ZC(41153),
+       bC = ZC(41158),
+       nC = ZC(48),
+       fC = ZC(60),
+       oC = ZC(41177),
+       qC = ZC(41179),
+       FC = ZC(4696),
+       WC = ZC(41188),
+       NC = ZC(1811),
+       MC = ZC(41191),
+       gC = ZC(41203),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L13` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L21-L24) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L13)

```diff
-       Aq = gq(1422),
+       pC = ZC(41165),
+       PC = ZC(41169),
+       GC = ZC(1295),
+       RC = ZC(36714),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L15-L27` → after: `L26-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L26-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L26-L70) · [Before (L15-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L15-L27)

```diff
-       uq = gq(4540),
-       Bq = gq(4553),
-       Wq = gq(4562),
-       Nq = gq(1070);
- 
-     function aq(qq) {
-       return qq.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
-     }
-     uq.b.registerLanguage("javascript", Bq.e), uq.b.registerLanguage("typescript", Wq.b);
- 
-     function Vq(qq, Eq) {
-       const gq = aq(qq).replace(/"/g, "&quot;");
-       return `<button type="button" class="DocsCopyButton ${Eq}" title="${gq}" aria-label="${gq}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+       xC = ZC(36725),
+       JC = ZC(36630),
+       IC = ZC(1383),
+       iC = ZC(600),
+       vC = ZC(1187),
+       eC = ZC(41252),
+       hC = ZC(41125),
+       KC = ZC(41128),
+       YC = ZC(1840),
+       dC = ZC(3677),
+       mC = ZC(28),
+       HC = ZC(1078);
+     const EC = 1e4,
+       lC = 250,
+       XC = 250;
+     var cC = ZC(41142);
+ ... (29 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L32-L39` → after: `L75-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L75-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L75-L96) · [Before (L32-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L32-L39)

```diff
-         Yq = qq.toLowerCase(),
-         lq = Eq.toLowerCase();
-       let Oq = 0;
-       for (; Oq < qq.length;) {
-         const mq = Yq.indexOf(lq, Oq);
-         if (-1 === mq) {
-           gq.push(qq.slice(Oq));
-           break
+         QC = [];
+       for (const [, nC] of CC) {
+         const CC = zC - nC.lastMoved < sC;
+         if (ZC.push({
+             pos: nC.head,
+             decoration: KC.e.widget({
+               widget: new DC(nC.colour, nC.playerName, CC),
+               side: 1
+             })
+           }), nC.anchor !== nC.head) {
+           const CC = Math.min(nC.anchor, nC.head),
+             zC = Math.max(nC.anchor, nC.head);
+           QC.push({
+             from: CC,
+             to: zC,
+             decoration: KC.e.mark({
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L46` → after: `L99-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L99-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L99-L115) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L46)

```diff
-       return gq
+       const wC = new hC.s,
+         bC = [];
+       for (const nC of ZC) bC.push({
+         bias: 1,
+         deco: nC.decoration,
+         from: nC.pos,
+         to: nC.pos
+       });
+       for (const nC of QC) bC.push({
+         bias: 0,
+         deco: nC.decoration,
+         from: nC.from,
+         to: nC.to
+       });
+       bC.sort(((CC, zC) => CC.from - zC.from || CC.deco.startSide - zC.deco.startSide || CC.bias - zC.bias));
+       for (const nC of bC) wC.add(nC.from, nC.to, nC.deco);
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L48-L69` → after: `L117-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L117-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L117-L132) · [Before (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L48-L69)

```diff
-     var jq = gq(1025),
-       Hq = gq(1341),
-       oq = gq(36931),
-       Pq = gq(36935);
-     const Qq = {
-         clientOptions: {
-           tabStep: "docsClientOptionsTab",
-           tabText: "codeEditor:tutorialClientOptionsTab",
-           pageStep: "docsClientOptions",
-           pageText: "codeEditor:tutorialClientOptions"
-         },
-         apiReference: {
-           tabStep: "docsApiReferenceTab",
-           tabText: "codeEditor:tutorialApiReferenceTab",
-           pageStep: "docsApiReference",
-           pageText: "codeEditor:tutorialApiReference"
- ... (6 more removed lines; see GitHub link above)
+     const yC = hC.A.define({
+       create: () => ({
+         cursors: new Map,
+         gC: KC.e.none
+       }),
+       update(CC, zC) {
+         let ZC = CC.cursors,
+           QC = !1;
+         if (zC.docChanged) {
+           const CC = new Map;
+           for (const [QC, wC] of ZC) CC.set(QC, {
+             ...wC,
+             anchor: zC.changes.mapPos(wC.anchor, 1),
+             head: zC.changes.mapPos(wC.head, 1)
+           });
+           ZC = CC, QC = !0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L72-L73` → after: `L153-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L153-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L153-L260) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L72-L73)

```diff
-       yq = (0, Yq.memo)((function(qq) {
-         var Eq, gq, mq, Bq, Wq, yq, tq;
+       provide: CC => KC.j.gC.from(CC, (CC => CC.gC))
+     });
+     const LC = hC.w.define(),
+       UC = KC.e.mark({
+         class: "CodeInsertFlash"
+       }),
+       BC = hC.A.define({
+         create: () => KC.e.none,
+         update(CC, zC) {
+           let ZC = CC.map(zC.changes);
+           for (const QC of zC.effects) QC.is(LC) && (ZC = QC.value ? KC.e.set(UC.range(QC.value.from, QC.value.to)) : KC.e.none);
+           return ZC
+         },
+         provide: CC => KC.j.gC.from(CC)
+       }),
+       OC = hC.A.define({
+ ... (92 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L75-L77` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L262-L263) · [Before (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L75-L77)

```diff
-           popOutDocs: rq,
-           hideDocs: vq,
-           tutorialEnabled: hq
+           text: wC,
+           focus: bC
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L79-L103` → after: `L265-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L265-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L265-L287) · [Before (L79-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L79-L103)

```diff
-         const [nq, bq] = (0, Yq.useState)(lq.e[0].id), iq = (0, Yq.useRef)(null), Zq = (0, Yq.useRef)(null), [fq, Mq] = (0, Yq.useState)(""), [Tq, zq] = (0, Yq.useState)(0), [Sq, pq] = (0, Yq.useState)(null), [Gq, Lq] = (0, Yq.useState)(!1), [Jq, kq] = (0, Yq.useState)(160), Rq = … [truncated]
-         (0, Yq.useEffect)((() => {
-           wq && fq.length > 0 && (Mq(""), Xq((qq => qq + 1)))
-         }), [wq, fq]);
-         const Kq = fq.length > 0,
-           Cq = (0, Yq.useMemo)((() => function(qq) {
-             if (!qq) return [];
-             const Eq = qq.toLowerCase(),
-               gq = [];
-             for (const Yq of lq.e) {
-               const qq = Yq.content.toLowerCase();
-               let lq = 0,
-                 Oq = -1,
-                 mq = 0,
-                 xq = qq.indexOf(Eq, mq);
-               for (; - 1 !== xq;) - 1 === Oq && (Oq = xq), lq++, mq = xq + Eq.length, xq = qq.indexOf(Eq, mq);
- ... (9 more removed lines; see GitHub link above)
+         const nC = CC.current,
+           fC = null !== nC && void 0 !== nC && nC.dom.isConnected ? function(CC, zC) {
+             if (!VC(CC)) return null;
+             const {
+               from: ZC,
+               to: QC
+             } = CC.selection.main, wC = ZC + zC.length;
+             return {
+               changes: {
+                 from: ZC,
+                 to: QC,
+                 insert: zC
+               },
+               selection: {
+                 anchor: wC
+               },
+ ... (7 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L105-L136` → after: `L289-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L289-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L289-L494) · [Before (L105-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L105-L136)

```diff
-             return gq.sort(((qq, Eq) => Eq.matchCount - qq.matchCount)), gq
-           }(fq)), [fq]),
-           Iq = Kq ? null !== (Eq = null !== (gq = null === (mq = Cq.find((qq => qq.doc.id === nq))) || void 0 === mq ? void 0 : mq.doc) && void 0 !== gq ? gq : null === (Bq = Cq[0]) || void 0 === Bq ? void 0 : Bq.doc) && void 0 !== Eq ? Eq : null : null !== (Wq = lq.e.find((qq => … [truncated]
-           {
-             t: eq
-           } = (0, cq.v)(),
-           Dq = eq("codeEditor:copySnippet"),
-           qE = (0, Yq.useMemo)((() => Iq ? function(qq, Eq, gq, Yq) {
-             let lq = Eq;
-             lq = lq.replace(/\r\n/g, "\n");
-             const Oq = [];
-             lq = lq.replace(/```(\w*)\n([\s\S]*?)```/g, ((qq, Eq, Yq) => {
-               const lq = Oq.length;
-               let mq = aq(Yq);
-               try {
-                 mq = uq.b.highlight(Yq.trimEnd(), {
- ... (16 more removed lines; see GitHub link above)
+           }(nC.state, wC) : null;
+         null !== nC && null !== fC ? (nC.dispatch(fC), bC && nC.focus(), setTimeout((() => {
+           nC.dom.isConnected && nC.dispatch({
+             effects: LC.of(null)
+           })
+         }), 1500)) : (0, Zz.e)(wC).then((() => {
+           zC({
+             message: ZC("codeEditorWorld:pickCopied", {
+               coords: wC
+             }),
+             type: "success"
+           })
+         }), (CC => {
+           console.error("Pick could not copy the coordinates", CC), zC({
+             message: ZC("codeEditorWorld:pickPlaceCursor", {
+               coords: wC
+ ... (190 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L138-L146` → after: `L496-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L496-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L496-L630) · [Before (L138-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L138-L146)

```diff
-               return Oq.push(`<span class="DocsInlineCodeRow"><code class="DocsInlineCode">${Aq}</code>${Vq(gq,"DocsCopyInline")}</span>`), `\0PLACEHOLDER_${mq}\0`
-             })), lq = aq(lq), lq = lq.replace(/^#### (.+)$/gm, '<h4 class="DocsH4">$1</h4>'), lq = lq.replace(/^### (.+)$/gm, '<h3 class="DocsH3">$1</h3>'), lq = lq.replace(/^## (.+)$/gm, '<h2 class="DocsH2">$1</h2>'), lq = lq.replace(/^# (.+)$/gm, '<h1 class="DocsH1">$1</h1>'),  … [truncated]
-               const gq = "*" === Eq,
-                 Yq = [];
-               for (const xq of qq.split("\n")) {
-                 const qq = xq.match(/^([ \t]*)(?:[*-])[ \t]+(.+)$/);
-                 qq && Yq.push({
-                   indent: qq[1].replace(/\t/g, "  ").length,
-                   content: qq[2]
+               of xz) {
+               if (!ZC && "explain" !== wC) continue;
+               const nC = document.createElement("button");
+               nC.type = "button", nC.textContent = bC, "change" !== wC && (nC.title = Gz.c, nC.dataset.asksAi = "true"), nC.addEventListener("mousedown", (CC => {
+                 CC.preventDefault()
+               })), nC.addEventListener("click", (() => {
+                 const ZC = CC.state.selection.main;
+                 if (ZC.empty) return;
+                 const QC = {
+                   action: wC,
+                   path: zC,
+                   fromLine: CC.state.doc.lineAt(ZC.from).number,
+                   toLine: CC.state.doc.lineAt(ZC.to > ZC.from && CC.state.doc.lineAt(ZC.to).from === ZC.to ? ZC.to - 1 : ZC.to).number,
+                   text: CC.state.sliceDoc(ZC.from, ZC.to)
+                 };
+                 mC.o.bp("WorldCodeAiSelection", QC), CC.dispatch({
+ ... (119 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L169-L185` → after: `L634-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L634-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L634-L652) · [Before (L169-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L169-L185)

```diff
-             return lq
-           }(Iq.id, Iq.content, Dq, Kq ? fq : void 0) : ""), [Iq, Dq, Kq, fq]);
-         (0, Yq.useEffect)((() => {
-           const qq = Zq.current;
-           if (!qq) return;
-           const Eq = qq => {
-             var Eq, gq, Yq, lq, Oq;
-             const mq = null === (Eq = (gq = qq.target).closest) || void 0 === Eq ? void 0 : Eq.call(gq, ".DocsCopyButton");
-             if (!mq) return;
-             qq.preventDefault(), qq.stopPropagation();
-             const xq = null !== (Yq = null === (lq = mq.parentElement) || void 0 === lq || null === (Oq = lq.querySelector("code")) || void 0 === Oq ? void 0 : Oq.textContent) && void 0 !== Yq ? Yq : "";
-             navigator.clipboard.writeText(xq.trimEnd()).then((() => {
-               mq.classList.add("Copied"), setTimeout((() => {
-                 mq.classList.remove("Copied")
-               }), 1500)
-             })).catch((qq => {
- ... (1 more removed lines; see GitHub link above)
+           }))
+         }
+       }
+     }
+ 
+     function rz(CC) {
+       return zC => {
+         const ZC = document.createElement("div");
+         ZC.className = "CodeEditorTooltip";
+         let QC = !1;
+         return queueMicrotask((() => {
+           QC || (fC.render((0, Iz.jsx)(NC.e, {
+             text: CC
+           }), ZC), zC.requestMeasure())
+         })), {
+           dom: ZC,
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L191-L207` → after: `L655-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L655-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L655-L735) · [Before (L191-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L191-L207)

```diff
-         }), []);
-         const [EE, gE] = (0, Yq.useState)(0);
-         (0, Yq.useEffect)((() => {
-           if (!Kq || !Zq.current) return void gE(0);
-           const qq = Zq.current.querySelectorAll(".DocsHighlight").length;
-           gE(qq)
-         }), [Kq, qE]), (0, Yq.useEffect)((() => {
-           if (null === Sq || !Zq.current) return;
-           pq(null);
-           const qq = Zq.current.querySelectorAll(".DocsHighlight");
-           if (0 === qq.length) return;
-           const Eq = Math.min(Sq, qq.length - 1);
-           zq(Eq), qq.forEach((qq => {
-             qq.classList.remove("DocsHighlightActive")
-           })), qq[Eq].classList.add("DocsHighlightActive"), qq[Eq].scrollIntoView({
-             block: "center",
- ... (1 more removed lines; see GitHub link above)
+         }
+       }
+     }
+ 
+     function sz(CC, zC, ZC) {
+       return QC => {
+         var wC;
+         if (!zC) return [];
+         const bC = null === (wC = QC.selection.np[0]) || void 0 === wC ? void 0 : wC.head;
+         if (void 0 === bC) return [];
+         const nC = CC.languageService.getSignatureHelpItems(ZC, bC, {});
+         if (!nC || !nC.items.length) return [];
+         const fC = nC.applicableSpan.start - nC.items[0].prefixDisplayParts.map((CC => CC.text)).join("").length,
+           oC = nC.applicableSpan.start,
+           qC = QC.doc.lineAt(bC),
+           FC = qC.from,
+ ... (65 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L209-L252` → after: `L737-L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L737-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L737-L838) · [Before (L209-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L209-L252)

```diff
-         }), [Sq, qE]);
-         const YE = (0, Yq.useCallback)((qq => {
-             if (!Zq.current) return;
-             const Eq = Zq.current.querySelectorAll(".DocsHighlight");
-             if (0 === Eq.length) return;
-             const gq = (Tq + qq + Eq.length) % Eq.length;
-             zq(gq), pq(gq)
-           }), [Tq]),
-           lE = (0, Yq.useCallback)((qq => {
-             var Eq;
-             const gq = null === (Eq = Qq[qq]) || void 0 === Eq ? void 0 : Eq.tabStep;
-             gq && gq === Fq && (0, Pq.e)(gq), qq !== nq ? (Lq(!0), bq(qq), zq(0), Zq.current && (Zq.current.scrollTop = 0), Kq && pq(0)) : Lq(!Gq)
-           }), [Kq, nq, Gq, Fq]),
-           OE = (0, Yq.useCallback)((qq => {
-             var Eq;
-             const gq = Array.from((null === (Eq = Zq.current) || void 0 === Eq ? void 0 : Eq.querySelectorAll(".DocsH2, .DocsH3")) || []).find((Eq => {
- ... (28 more removed lines; see GitHub link above)
+         }
+         return [{
+           pos: nC,
+           end: fC,
+           above: !0,
+           create: rz(oC)
+         }]
+       }
+     }
+     const az = {
+       indentSize: 4,
+       tabSize: 4,
+       newLineCharacter: "\n",
+       convertTabsToSpaces: !0,
+       insertSpaceAfterCommaDelimiter: !0,
+       insertSpaceAfterSemicolonInForStatements: !0,
+ ... (86 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L254-L255` → after: `L840-L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L840-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L840-L902) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L254-L255)

```diff
-           return window.addEventListener("mousemove", Eq), window.addEventListener("mouseup", xE), () => {
-             window.removeEventListener("mousemove", Eq), window.removeEventListener("mouseup", xE), null === qq || void 0 === qq || qq.classList.remove("DocsSidebarResizing")
+             for (const [zC, ZC] of Object.entries(CC)) {
+               const CC = Ez(zC);
+               bC.set(CC, ZC || "\n"), nC.push(CC)
+             }
+             const wC = Ez(null !== QC && void 0 !== QC ? QC : AC.k);
+             bC.has(wC) ? bC.set(wC, ZC || "\n") : (bC.set(wC, ZC || "\n"), nC.push(wC)), bC.set("/node_modules/@bloxd/index.d.ts", FC.default), nC.push("/node_modules/@bloxd/index.d.ts");
+             for (const zC of Object.values(RC.c)) {
+               bC.set(zC.typesVfsPath, zC.types), nC.push(zC.typesVfsPath);
+               for (const [CC, ZC] of Object.entries(zC.files)) {
+                 const QC = `/plugin-preview/${zC.name}/${CC}`;
+                 bC.set(QC, ZC || "\n"), nC.push(QC)
+               }
+             }
+           } else bC.set(Hz, ZC || "\n"), nC.push(Hz);
+           bC.set("/globals.d.ts", CC ? qC.b : oC.b), bC.set("/lib.d.ts", WC.d), nC.push("/globals.d.ts", "/lib.d.ts");
+           const fC = MC.e(bC),
+ ... (47 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L257-L264` → after: `L904-L939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L904-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L904-L939) · [Before (L257-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L257-L264)

```diff
-         }), [mE, xE]);
-         const cE = (0, Yq.useCallback)((qq => {
-           if (qq) {
-             const [Eq, gq] = qq.slice(1).split("-");
-             gq && (Uq.current = {
-               docId: Eq,
-               subsection: gq
-             }), Eq && lE(Eq)
+         }), !0
+       })), () => {
+         Mz.current = null, Sz.current = null, Qz(null)
+       })), [Qz, VC]);
+       const ez = zC ? VC ? null : null !== OC && void 0 !== OC ? OC : AC.k : Pz.e,
+         hz = zz(Mz, ez);
+       wz(Mz, gC), (0, IC.c)("FormatCode", (() => {
+         if (!fz || !Mz.current || VC) return;
+         const {
+           fp: CC,
+           fsMap: ZC
+         } = fz, QC = CC.getSourceFile(vz).getFullText();
+         let wC = 0;
+         if (zC && BC)
+           for (const [zC, fC] of Object.entries(BC)) zC !== (null !== OC && void 0 !== OC ? OC : AC.k) && (wC += fC.length);
+         const bC = function(CC, zC, ZC, QC, wC) {
+ ... (20 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L266-L366` → after: `L941-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L941-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L941-L995) · [Before (L266-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L266-L366)

```diff
-         }), [lE]);
-         (0, Yq.useEffect)((() => {
-           const qq = Uq.current;
-           qq && nq === qq.docId && (setTimeout((() => {
-             OE(qq.subsection)
-           }), 0), Uq.current = null)
-         })), (0, Yq.useEffect)((() => {
-           if (!Zq.current) return;
-           Zq.current.querySelectorAll("a.DocsAnchor").forEach((qq => {
-             qq.addEventListener("click", (Eq => {
-               Eq.preventDefault(), cE(qq.dataset.id)
-             }))
-           }))
-         }), [nq, cE]);
-         const uE = Object.values(Qq).find((qq => (null === qq || void 0 === qq ? void 0 : qq.pageStep) === Fq));
-         return (0, Nq.jsx)(oq.h, {
- ... (85 more removed lines; see GitHub link above)
+         }), lz(CC, vz, nC), fC(nC))
+       }));
+       const Kz = (0, nC.useMemo)((() => {
+         if (!fz) return [];
+         const {
+           fp: CC,
+           fsMap: ZC
+         } = fz;
+         ! function(CC, zC, ZC, QC) {
+           if (CC.getSourceFile(ZC)) return;
+           const wC = QC || "\n";
+           zC.set(ZC, wC), CC.createFile(ZC, wC)
+         }(CC, ZC, vz, (VC ? iz.current : xz.current) || "\n");
+         const nC = zC && Xz(VC ? null !== Cz && void 0 !== Cz ? Cz : "index.ts" : OC),
+           fC = [(0, wC.e)({
+             jsx: !1,
+ ... (39 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L368-L376` → after: `L997-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L997-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L997-L1093) · [Before (L368-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L368-L376)

```diff
-               }), (0, Nq.jsx)("div", {
-                 className: "DocsSidebarButtonContainer",
-                 children: (0, Nq.jsx)(Hq.e, {
-                   tooltipInner: eq("codeEditor:popOutDocsTooltip"),
-                   placement: "top",
-                   children: (0, Nq.jsx)(Aq.g, {
-                     className: "DocsSidebarButton",
-                     onClick: rq,
-                     children: eq("codeEditor:popOutDocs")
+               }
+             }
+           })];
+         bz && !VC && fC.push(Jz(zC ? null !== OC && void 0 !== OC ? OC : AC.k : Pz.e, nz));
+         const oC = gz.current;
+         if (oC && !VC) {
+           fC.push(... function(CC, zC, ZC, QC, wC) {
+             let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+             const nC = (0, xC.z)(ZC),
+               fC = KC.o.fromClass(class {
+                 constructor(CC) {
+                   this.view = CC, this.pushing = !1, this.pushTimeout = null, this.pushDelayTimeout = null, this.cursorTimeout = null, this.lastPushTime = 0, this.pulling = !1, this.pullPending = !1, this.lastCursorSent = 0, this.destroyed = !1, this.subToken = void 0, this.subTo … [truncated]
+                     CC.docKey === nC && CC.type === xC.g.Updates && (CC.updates ? this.applyUpdates(CC.updates) : this.pull())
+                   })), this.pull()
+                 }
+                 applyUpdates(CC) {
+ ... (81 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L409-L413` → after: `L1096-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L1096-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/292.js#L1096-L1182) · [Before (L409-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/292.js#L409-L413)

```diff
-               })]
-             })]
-           })
-         })
-       }))
+                 destroy() {
+                   this.destroyed = !0, mC.o.unsubscribe(this.subToken), this.clearPushState(), this.cursorTimeout && clearTimeout(this.cursorTimeout)
+                 }
+               });
+             return [(0, eC.e)({
+               startVersion: CC,
+               clientID: zC
+             }), fC]
+           }(qz, Fz, oC.docKey, oC.httpConfig, (CC => {
+             var zC;
+             null === (zC = Nz.current) || void 0 === zC || zC.call(Nz, CC)
+           }), NC));
+           const CC = function(CC, zC) {
+             const ZC = (0, xC.z)(CC);
+             return {
+               extensions: [yC],
+ ... (71 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/293.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/293.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22)

#### 1. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L4)

```diff
-   41238: (qq, Eq, gq) => {
+   41122: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L6)

```diff
-       ensureLocalBloxdTypes: () => jq
+       e: () => Hz,
+       g: () => iz,
+       i: () => Gz,
+       j: () => oC,
+       m: () => Ez,
+       p: () => qC,
+       r: () => Nz
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L8-L17` → after: `L14-L14963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L14-L14963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L14-L14963) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L8-L17)

```diff
-     var Yq = gq(4583),
-       lq = gq(41120),
-       Oq = gq(41113),
-       mq = gq(36902),
-       xq = gq(36906),
-       Aq = gq(36922);
-     const cq = JSON.stringify({
-       name: "@bloxd",
-       types: "index.d.ts"
-     }, null, "\t") + "\n";
+     var QC = ZC(41125),
+       wC = ZC(41128),
+       bC = ZC(41142);
+     class nC {
+       constructor(CC, zC, ZC, QC) {
+         this.state = CC, this.pos = zC, this.explicit = ZC, this.view = QC, this.abortListeners = [], this.abortOnDocChange = !1
+       }
+       tokenBefore(CC) {
+         let zC = (0, bC.gb)(this.state).resolveInner(this.pos, -1);
+         for (; zC && CC.indexOf(zC.name) < 0;) zC = zC.parent;
+         return zC ? {
+           from: zC.from,
+           to: this.pos,
+           text: this.state.sliceDoc(zC.from, this.pos),
+           type: zC.type
+         } : null
+ ... (14934 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L20` → after: `L14966-L15625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R14966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L14966-L15625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L14966-L15625) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L20)

```diff
-       return qq.replace(/^\//, "")
+       let zC = Object.create(null);
+       for (let ZC in CC) {
+         let QC = CC[ZC];
+         Array.isArray(QC) || (QC = [QC]);
+         for (let CC of ZC.split(" "))
+           if (CC) {
+             let ZC = [],
+               wC = 2,
+               bC = CC;
+             for (let zC = 0;;) {
+               if ("..." == bC && zC > 0 && zC + 3 == CC.length) {
+                 wC = 1;
+                 break
+               }
+               let QC = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(bC);
+               if (!QC) throw new RangeError("Invalid path: " + CC);
+ ... (644 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L24` → after: `L15629-L15774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R15629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L15629-L15774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L15629-L15774) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L24)

```diff
-       return uq((0, xq.o)(qq.name, "")).replace(/\/$/, "")
+       let zC = CC[CC.length - 1],
+         ZC = CC.slice();
+       return ZC[CC.length - 1] = zC.setSelAfter(zC.selectionsAfter.slice(0, zC.selectionsAfter.length - 1)), ZC
+     }
+ 
+     function XC(CC, zC) {
+       if (!CC.length) return CC;
+       let ZC = CC.length,
+         QC = mC;
+       for (; ZC;) {
+         let wC = cC(CC[ZC - 1], zC, QC);
+         if (wC.changes && !wC.changes.empty || wC.effects.length) {
+           let zC = CC.slice(0, ZC);
+           return zC[ZC - 1] = wC, zC
+         }
+         zC = wC.mapped, ZC--, QC = wC.selectionsAfter
+ ... (130 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L28` → after: `L15778-L15810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R15778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L15778-L15810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L15778-L15810) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L28)

```diff
-       return qq.typesVfsPath.slice(qq.typesVfsPath.lastIndexOf("/") + 1)
+       return CC.textDirectionAt(CC.state.selection.main.head) == fC.i.LTR
+     }
+     const LC = CC => jC(CC, !yC(CC)),
+       UC = CC => jC(CC, yC(CC));
+ 
+     function BC(CC, zC) {
+       return tC(CC, (ZC => ZC.empty ? CC.moveByGroup(ZC, zC) : DC(ZC, zC)))
+     }
+     "undefined" != typeof Intl && Intl.Segmenter;
+ 
+     function OC(CC, zC, ZC) {
+       if (zC.type.prop(ZC)) return !0;
+       let QC = zC.to - zC.from;
+       return QC && (QC > 2 || /[^\s,.;:]/.test(CC.sliceDoc(zC.from, zC.to))) || zC.firstChild
+     }
+ 
+ ... (17 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L32-L35` → after: `L15816-L15905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R15816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L15816-L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L15816-L15905) · [Before (L32-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L32-L35)

```diff
-       return JSON.stringify({
-         name: qq.specifier,
-         types: Wq(qq)
-       }, null, "\t") + "\n"
+       let zC, ZC = CC.scrollDOM.clientHeight < CC.scrollDOM.scrollHeight - 2,
+         QC = 0,
+         wC = 0;
+       if (ZC) {
+         for (let zC of CC.state.facet(fC.j.scrollMargins)) {
+           let ZC = zC(CC);
+           (null === ZC || void 0 === ZC ? void 0 : ZC.top) && (QC = Math.max(null === ZC || void 0 === ZC ? void 0 : ZC.top, QC)), (null === ZC || void 0 === ZC ? void 0 : ZC.bottom) && (wC = Math.max(null === ZC || void 0 === ZC ? void 0 : ZC.bottom, wC))
+         }
+         zC = CC.scrollDOM.clientHeight - QC - wC
+       } else zC = (CC.dom.ownerDocument.defaultView || window).innerHeight;
+       return {
+         marginTop: QC,
+         marginBottom: wC,
+         selfScroll: ZC,
+         height: Math.max(CC.defaultLineHeight, zC - 5)
+       }
+ ... (74 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L37-L42` → after: `L15907-L16059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R15907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L15907-L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L15907-L16059) · [Before (L37-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L37-L42)

```diff
-     async function aq(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
-       const gq = [];
-       for await (const [Yq, lq] of qq.entries()) {
-         const qq = Eq ? `${Eq}/${Yq}` : Yq;
-         "directory" !== lq.kind ? gq.push(qq) : gq.push(...await aq(lq, qq))
+     const Pz = CC => pz(CC, !1),
+       Gz = CC => pz(CC, !0),
+       Rz = CC => {
+         let {
+           state: zC,
+           dispatch: ZC
+         } = CC;
+         return ZC(aC(zC, {
+           anchor: 0
+         })), !0
+       },
+       Az = CC => {
+         let {
+           state: zC,
+           dispatch: ZC
+         } = CC;
+ ... (137 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L46-L66` → after: `L16063-L16090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R16063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L16063-L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L16063-L16090) · [Before (L46-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L46-L66)

```diff
-     async function Vq(qq, Eq, gq) {
-       const Yq = Bq(Eq),
-         lq = await (0, Aq.k)(qq, Yq);
-       if (!lq) return;
-       const Oq = new Set([Wq(Eq), "package.json"]);
-       if (gq)
-         for (const Aq of Object.keys(Eq.files)) Oq.add(Aq);
-       const mq = await aq(lq),
-         xq = new Set;
-       for (const Bq of mq) {
-         if (Oq.has(Bq)) continue;
-         await (0, Aq.D)(qq, `${Yq}/${Bq}`);
-         const Eq = Bq.split("/");
-         for (let qq = 1; qq < Eq.length; qq++) xq.add(Eq.slice(0, qq).join("/"))
-       }
-       const cq = [...xq].sort(((qq, Eq) => Eq.split("/").length - qq.split("/").length));
- ... (5 more removed lines; see GitHub link above)
+ 
+     function Hz(CC, zC, ZC) {
+       if (CC.readOnly) return !1;
+       let QC = [],
+         wC = [];
+       for (let bC of mz(CC)) {
+         if (ZC ? bC.to == CC.doc.length : 0 == bC.from) continue;
+         let zC = CC.doc.lineAt(ZC ? bC.to + 1 : bC.from - 1),
+           fC = zC.length + 1;
+         if (ZC) {
+           QC.push({
+             from: bC.to,
+             to: zC.to
+           }, {
+             from: bC.from,
+             insert: zC.text + CC.lineBreak
+ ... (12 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L71-L72` → after: `L16121-L16659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R16121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L16121-L16659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L16121-L16659) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L71-L72)

```diff
-       const Eq = {
-         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       return zC => {
+         let {
+           state: ZC,
+           dispatch: QC
+         } = zC;
+         if (ZC.readOnly) return !1;
+         let wC = ZC.changeByRange((zC => {
+           let {
+             from: QC,
+             to: wC
+           } = zC, bC = ZC.doc.lineAt(QC), fC = !CC && QC == wC && function(CC, zC) {
+             if (/\(\)|\[\]|\{\}/.test(CC.sliceDoc(zC - 1, zC + 1))) return {
+               from: zC,
+               to: zC
+             };
+             let ZC, QC = (0, oC.gb)(CC).resolveInner(zC),
+ ... (523 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L74-L107` → after: `L16661-L17227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R16661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L16661-L17227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/293.js#L16661-L17227) · [Before (L74-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/293.js#L74-L107)

```diff
-       for (const Yq of Object.values(mq.i)) Eq[Yq.specifier] = [`.${Yq.typesVfsPath}`];
-       const gq = [];
-       for (const Yq of qq)
-         for (const qq of Object.keys(Yq.files)) gq.push(uq((0, xq.o)(Yq.name, qq)));
-       return JSON.stringify({
-         compilerOptions: {
-           allowJs: !0,
-           checkJs: !1,
-           strict: !1,
-           module: "ESNext",
-           moduleResolution: "bundler",
-           target: "ES2015",
-           noEmit: !0,
-           noLib: !0,
-           skipLibCheck: !0,
-           baseUrl: ".",
- ... (18 more removed lines; see GitHub link above)
+     var az = ZC(41165),
+       tz = ZC(41122),
+       Dz = ZC(41169),
+       jz = function(CC) {
+         void 0 === CC && (CC = {});
+         var {
+           crosshairCursor: zC = !1
+         } = CC, ZC = [];
+         !1 !== CC.closeBracketsKeymap && (ZC = ZC.concat(tz.g)), !1 !== CC.defaultKeymap && (ZC = ZC.concat(sz)), !1 !== CC.searchKeymap && (ZC = ZC.concat(az.l)), !1 !== CC.historyKeymap && (ZC = ZC.concat(sC)), !1 !== CC.foldKeymap && (ZC = ZC.concat(oC.C)), !1 !== CC.completio … [truncated]
+         var QC = [];
+         return !1 !== CC.lineNumbers && QC.push((0, fC.V)()), !1 !== CC.highlightActiveLineGutter && QC.push((0, fC.J)()), !1 !== CC.highlightSpecialChars && QC.push((0, fC.O)()), !1 !== CC.history && QC.push(function() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+           return [JC, xC.of(CC), fC.j.domEventHandlers({
+             beforeinput(CC, zC) {
+               let ZC = "historyUndo" == CC.inputType ? iC : "historyRedo" == CC.inputType ? vC : null;
+               return !!ZC && (CC.preventDefault(), ZC(zC))
+ ... (551 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/294.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/294.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79)

#### 1. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L66` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/294.js#L4) · [Before (L4-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L66)

```diff
-   41295: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       installImageBitmapTextureLoader: () => cq
-     });
-     var Yq = gq(39630),
-       lq = gq(41299),
-       Oq = gq(3108);
- 
-     function mq(qq, Eq) {
-       if ("string" === typeof qq) {
-         const gq = (0, Oq.h)(qq);
-         return gq ? new Blob([(0, Oq.d)(gq.base64)], {
-           type: gq.mimeType || Eq
-         }) : null
-       }
-       return qq instanceof Blob ? qq : new Blob([qq], {
- ... (47 more removed lines; see GitHub link above)
+   41125: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L68-L69` → after: `L6-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L6-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/294.js#L6-L430) · [Before (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/294.js#L68-L69)

```diff
-       d: () => Yq.m,
-       f: () => Yq.x
+       d: () => Gz,
+       e: () => mC,
+       ChangeSet: () => HC,
+       h: () => Yz,
+       i: () => TC,
+       l: () => Ez,
+       n: () => DC,
+       o: () => dC,
+       r: () => wz,
+       u: () => Tz,
+       s: () => az,
+       v: () => Xz,
+       w: () => xz,
+       A: () => kC,
+       B: () => SC,
+       F: () => Jz,
+ ... (409 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L71-L72` → after: `L432-L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L432-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/294.js#L432-L2146) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/294.js#L71-L72)

```diff
-     var Yq = gq(39799);
-     (0, Yq.D)()
+     class IC {
+       constructor(CC, zC, ZC, QC) {
+         this.from = CC, this.to = zC, this.number = ZC, this.text = QC
+       }
+       get length() {
+         return this.to - this.from
+       }
+     }
+ 
+     function iC(CC, zC, ZC) {
+       return [zC = Math.max(0, Math.min(CC.length, zC)), Math.max(zC, Math.min(CC.length, ZC))]
+     }
+ 
+     function vC(CC, zC) {
+       return oC(CC, zC, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
+     }
+ ... (1699 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/295.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/295.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4-L145` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L4-L7) · [Before (L4-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L4-L145)

```diff
-   41361: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Oq
-     });
-     var Yq = gq(39858),
-       lq = gq(41369);
-     class Oq {
-       constructor(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = gq, this.UYq = [], this._maxBlockCapacity = Eq || 64, this._selectionContent = new Yq.b(1024), this._creationFunc = qq
-       }
-       update(qq, Eq, gq) {
-         lq.c._CreateBlocks(qq, Eq, gq, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       ZYq(qq) {
-         for (let Eq = 0; Eq < this.blocks.length; Eq++) {
- ... (126 more removed lines; see GitHub link above)
+   41201: CC => {
+     function zC(CC) {
+       var zC = new Error("Cannot find module '" + CC + "'");
+       throw zC.code = "MODULE_NOT_FOUND", zC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L148` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L11) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L148)

```diff
-   41374: (qq, Eq, gq) => {
+   41255: (CC, zC, ZC) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L150` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L13-L14) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L150)

```diff
-       e: () => uq
+       c: () => QC,
+       d: () => wC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L152-L195` → after: `L16-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L16-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L16-L19) · [Before (L152-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L152-L195)

```diff
-     var Yq = gq(39838),
-       lq = gq(37139),
-       Oq = gq(40197),
-       mq = gq(41315),
-       xq = gq(39911),
-       Aq = gq(37153),
-       cq = gq(41361);
-     class uq {
-       constructor(qq) {
-         this.name = xq.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new mq.A(lq.q.Zero(), new lq.q(1, 1, 1)), (qq = qq || Aq.b.LastCreatedScene) && (this.PV = qq, this.PV.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.PV.getActiveSubMeshCandidat … [truncated]
-       }
-       register() {
-         this.PV.onMeshRemovedObservable.add((qq => {
-           const Eq = this.PV.selectionOctree;
-           if (void 0 !== Eq && null !== Eq) {
-             const gq = Eq.UYq.indexOf(qq); - 1 !== gq && Eq.UYq.splice(gq, 1)
- ... (28 more removed lines; see GitHub link above)
+     const QC = "Sends one question to the AI",
+       wC = {
+         title: QC,
+         "data-asks-ai": !0
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L224` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L22) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L224)

```diff
-   41315: (qq, Eq, gq) => {
+   41177: (CC, zC, ZC) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L226-L235` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L24) · [Before (L226-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L226-L235)

```diff
-       A: () => Bq,
-       e: () => iq,
-       h: () => Vq,
-       j: () => aq,
-       l: () => Nq,
-       n: () => nq,
-       r: () => hq,
-       v: () => tq,
-       w: () => vq,
-       z: () => rq
+       b: () => QC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L237-L432` → after: `L26-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L26-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L26-L35) · [Before (L237-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L237-L432)

```diff
-     var Yq = gq(37145),
-       lq = gq(37139),
-       Oq = gq(37149),
-       mq = gq(40049),
-       xq = gq(39876),
-       Aq = gq(37153),
-       cq = gq(39932);
-     const uq = {
-       internalPickerForMesh: void 0
-     };
-     class Bq {
-       constructor(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
-           lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Yq.c;
-         this.origin = qq, this.direction = Eq, this.length = gq, this.epsilon = lq
-       }
- ... (180 more removed lines; see GitHub link above)
+     const QC = String.raw`
+ 	/** The ID of the player running the code.
+ 	 *
+ 	 * Lobby code usually has nobody running it, so this is null.
+ 	 */
+ 	declare const myId: string | null
+ 	/** The position of the code block or press to code board */
+ 	declare const thisPos: [number, number, number]
+ 	/** The owner of the current custom lobby */
+ 	declare const lobbyOwnerId: string | null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L434-L438` → after: `L37-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L37-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L37-L41) · [Before (L434-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L434-L438)

```diff
-     function Wq(qq, Eq, gq, Yq, lq) {
-       let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       const mq = Bq.Zero();
-       return Nq(qq, Eq, gq, Yq, mq, lq, Oq), mq
-     }
+ 	interface Console {
+ 		/** Log a message to chat. */
+ 		log(message: any): void
+ 	}
+ 	declare const console: Console
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L440-L455` → after: `L43-L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L43-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L43-L1851) · [Before (L440-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L440-L455)

```diff
-     function Nq(qq, Eq, gq, Yq, Oq, mq) {
-       let xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         Aq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       const cq = qq.Ba();
-       if (!mq && !(mq = qq.activeCamera) && !(mq = qq.cameraToUseForPointers)) return qq;
-       const uq = mq.viewport,
-         Bq = cq.getRenderHeight(),
-         {
-           x: Wq,
-           y: Nq,
-           width: aq,
-           height: Vq
-         } = uq.toGlobal(cq.getRenderWidth(), Bq),
-         dq = 1 / cq.getHardwareScalingLevel();
-       return Eq = Eq * dq - Wq, gq = gq * dq - (Bq - Nq - Vq), Oq.update(Eq, gq, aq, Vq, Yq || lq.e.IdentityReadOnly, xq ? lq.e.IdentityReadOnly : mq.getViewMatrix(), mq.getProjectionMatrix(), Aq), qq
-     }
+ 	interface GameApi {
+ 		/** The ID of the player running the code.
+ 		 *
+ 		 * Lobby code usually has nobody running it, so this is null.
+ 		 */
+ 		myId: string | null
+ 		/** The position of the code block or press to code board */
+ 		thisPos: [number, number, number]
+ 		/** The owner of the current custom lobby */
+ 		lobbyOwnerId: string | null
+ 		/**
+  * Get position of a player / entity.
+  * @param entityId
+  */
+ getPosition(entityId: EntityId): Pos
+ /**
+ ... (1793 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L457-L460` → after: `L1853-L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L1853-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L1853-L2218) · [Before (L457-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L457-L460)

```diff
-     function aq(qq, Eq, gq, Yq) {
-       const lq = Bq.Zero();
-       return Vq(qq, Eq, gq, lq, Yq), lq
-     }
+ calcExplosionForce(eId: EntityId, explosionType: ExplosionType, knockbackFactor: number, explosionRadius: number, explosionPos: number[], ignoreProjectiles: boolean): { force: Pos; forceFrac: number; }
+ /**
+  * Add a custom killfeed message to the killfeed
+  * @param killer - The entity ID or a custom name and colour for the killer
+  * @param victim - The entity ID or a custom name and colour for the victim
+  * @param withItem - The item used
+  */
+ addCustomKillfeedMessage(killer: { eId: EntityId } | { name: string; colour: string }, victim: { eId: EntityId } | { name: string; colour: string }, withItem: string): void
+ /**
+  * Get the position of a player's target block and the block adjacent to it (e.g. where a block would be placed)
+  *
+  *
+  * Note: This position is a tick ahead of the client's block target info (noa.targetedBlock),
+  * since the client updates the blocktarget before the entities tick (and since it uses the renderposition of the camera)
+  *
+  * This normally doesn't matter but if you are client predicting something based on noa.targetedBlock
+ ... (350 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L462-L477` → after: `L2220-L2262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2220-L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2220-L2262) · [Before (L462-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L462-L477)

```diff
-     function Vq(qq, Eq, gq, Yq, Oq) {
-       if (!xq.d) return qq;
-       const mq = qq.Ba();
-       if (!Oq && !(Oq = qq.activeCamera) && !(Oq = qq.cameraToUseForPointers)) throw new Error("Active camera not set");
-       const Aq = Oq.viewport,
-         cq = mq.getRenderHeight(),
-         {
-           x: uq,
-           y: Bq,
-           width: Wq,
-           height: Nq
-         } = Aq.toGlobal(mq.getRenderWidth(), cq),
-         aq = lq.e.Identity(),
-         Vq = 1 / mq.getHardwareScalingLevel();
-       return Eq = Eq * Vq - uq, gq = gq * Vq - (cq - Bq - Nq), Yq.update(Eq, gq, Wq, Nq, aq, aq, Oq.getProjectionMatrix()), qq
-     }
+ 	}
+ 	/** Game API */
+ 	declare const api: GameApi;
+ type EntityId = string
+ type Pos = [number, number, number]
+ type LifeformId = EntityId
+ type PlayerId = LifeformId
+ type PlayerDbId = string
+ type LifeformBodyPart = (_TypeOf["lifeformBodyParts"])[number]
+ interface PlayerAttemptDamageOtherPlayerOpts {
+ 	eId: PlayerId
+ 	hitEId: PlayerId
+ 	attemptedDmgAmt: number
+ 	withItem: string
+ 	bodyPartHit?: LifeformBodyPart
+ 	attackDir?: number[]
+ ... (27 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L479-L481` → after: `L2264-L2267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2264-L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2264-L2267) · [Before (L479-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L479-L481)

```diff
-     function dq(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
-       return jq(qq, gq, Yq, Eq(Yq, gq.enableDistantPicking), lq, Oq, mq, xq)
-     }
+ 	// Armour
+ 	| "Protection"
+ 	| "Health"
+ 	| "Health Regen"
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L483-L486` → after: `L2269-L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2269-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2269-L2271) · [Before (L483-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L483-L486)

```diff
-     function jq(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
-       const Aq = Eq.intersects(Yq, lq, mq, Oq, gq, xq);
-       return Aq && Aq.hit ? !lq && null != qq && Aq.distance >= qq.distance ? null : Aq : null
-     }
+ 	// Special Armour
+ 	| "Stomp Damage"
+ 	| "Knockback Resist"
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L488-L490` → after: `L2273-L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2273-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2273-L2276) · [Before (L488-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L488-L490)

```diff
-     function Hq(qq, Eq) {
-       return "InstancedLinesMesh" === qq || "LinesMesh" === qq ? Eq.intersectionThreshold : 0
-     }
+ 	// Bows & Crossbows
+ 	| "Arrow Speed"
+ 	| "Arrow Damage"
+ 	| "Quick Charge"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L492-L503` → after: `L2278-L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2278-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2278-L2286) · [Before (L492-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L492-L503)

```diff
-     function oq(qq) {
-       const Eq = qq.getClassName();
-       if ("GreasedLineMesh" === Eq) return {
-         rawBoundingInfo: null,
-         intersectionThreshold: 0
-       };
-       const gq = qq.rawBoundingInfo;
-       return {
-         rawBoundingInfo: gq,
-         intersectionThreshold: gq ? Hq(Eq, qq) : 0
-       }
-     }
+ 	// Tools
+ 	| "Break Speed"
+ 	| "Momentum"
+ 	| "Mining Yield"
+ 	| "Farming Yield"
+ 	| "Mining Aura"
+ 	| "Digging Aura"
+ 	| "Lumber Aura"
+ 	| "Farming Aura"
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L505-L508` → after: `L2288-L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2288-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2288-L2290) · [Before (L505-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L505-L508)

```diff
-     function Pq(qq, Eq, gq, Yq, lq) {
-       const Oq = qq(gq, Eq.enableDistantPicking);
-       return Oq.intersectsSphere(Yq.DYq, lq) && Oq.intersectsBox(Yq.boundingBox, lq) ? Oq : null
-     }
+ 	// Sticks
+ 	| "Horizontal Knockback"
+ 	| "Vertical Knockback"
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L510-L551` → after: `L2292-L2577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2292-L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2292-L2577) · [Before (L510-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L510-L551)

```diff
-     function Qq(qq, Eq, gq, Yq, Oq, mq) {
-       let Aq = null;
-       const cq = !!(qq.activeCameras && qq.activeCameras.length > 1 && qq.cameraToUseForPointers !== qq.activeCamera),
-         Bq = qq.cameraToUseForPointers || qq.activeCamera,
-         Wq = uq.internalPickerForMesh || dq,
-         Nq = Wq === dq;
-       for (let xq = 0; xq < qq.meshes.length; xq++) {
-         const uq = qq.meshes[xq];
-         if (gq) {
-           if (!gq(uq, -1)) continue
-         } else if (!uq.isEnabled() || !uq.isVisible || !uq.yV) continue;
-         const aq = cq && uq.isWorldMatrixCameraDependent(),
-           Vq = uq.computeWorldMatrix(aq, Bq);
-         if (uq.hasThinInstances && uq.eEq) {
-           const qq = Wq(Aq, Eq, uq, Vq, !0, !0, mq);
-           if (qq) {
- ... (26 more removed lines; see GitHub link above)
+ 	// Hang Gliders
+ 	| "Firecracker Cooldown"
+ 	| "Firecracker Boost"
+ 	| "Gliding Speed"
+ type EnchantmentTier = (_TypeOf["enchantmentTiers"])[number]
+ type CustomTextStyling = (string | EntityName | TranslatedText | StyledIcon | StyledText | ProgressBar | StyledKeyBinding)[]
+ type TranslatedText = {
+ 	translationKey: string
+ 	params?: Record<string, string | number | boolean | EntityName>
+ }
+ type EntityName = {
+ 	entityName: string
+ 	ranks?: Readonly<Rank[]>
+ 	style?: {
+ 		color?: string
+ 		colour?: string
+ ... (270 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L553-L593` → after: `L2579-L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2579-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2579-L2919) · [Before (L553-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L553-L593)

```diff
-     function yq(qq, Eq, gq, Yq) {
-       if (!xq.d) return null;
-       const Oq = [],
-         mq = !!(qq.activeCameras && qq.activeCameras.length > 1 && qq.cameraToUseForPointers !== qq.activeCamera),
-         Aq = qq.cameraToUseForPointers || qq.activeCamera,
-         cq = uq.internalPickerForMesh || dq,
-         Bq = cq === dq;
-       for (let xq = 0; xq < qq.meshes.length; xq++) {
-         const uq = qq.meshes[xq];
-         if (gq) {
-           if (!gq(uq, -1)) continue
-         } else if (!uq.isEnabled() || !uq.isVisible || !uq.yV) continue;
-         const Wq = mq && uq.isWorldMatrixCameraDependent(),
-           Nq = uq.computeWorldMatrix(Wq, Aq);
-         if (uq.hasThinInstances && uq.eEq) {
-           if (cq(null, Eq, uq, Nq, !0, !0, Yq)) {
- ... (25 more removed lines; see GitHub link above)
+ 	// Not defined on client, must be defined on server
+ 	boughtCallback?: (
+ 		playerId: PlayerId,
+ 		cost: number,
+ 		currency: string,
+ 		categoryKey: ShopCategoryKey,
+ 		itemKey: ShopItemKey,
+ 		userInput: string,
+ 		amount: number | undefined,
+ 	) => void
+ 	sell?: boolean // Optional, defaults to false. If true, the sign of "cost" is flipped. So a "cost" of -25 would give the player 25 currency AND be displayed as "25" (instead of -25)
+ 	sortPriority?: number // Descending, bigger number means closer to the top
+ 	hidden?: boolean
+ 	smp?: SmpShopItemMeta // Set by the SMP marketplace plugin only, for its own shop screens
+ }
+ type ShopItemUserInput =
+ ... (325 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L595-L599` → after: `L2921-L2922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2921-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2921-L2922) · [Before (L595-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L595-L599)

```diff
-     function tq(qq, Eq, gq, Yq, Oq, mq) {
-       if (!xq.d) return null;
-       const Aq = Qq(qq, (Yq => (qq._tempPickingRay || (qq._tempPickingRay = Bq.Zero()), Nq(qq, Eq, gq, Yq, qq._tempPickingRay, mq || null), qq._tempPickingRay)), Yq, Oq, !0);
-       return Aq && (Aq.ray = Wq(qq, Eq, gq, lq.e.Identity(), mq || null)), Aq
-     }
+ 	msPerRound?: number // computed from fireRate
+ 	msPerRoundTouchScreen?: number // computed from fireRateWithHeldTouch
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L601-L604` → after: `L2924-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2924-L2925) · [Before (L601-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L601-L604)

```diff
-     function rq(qq, Eq, gq, Yq, Oq, mq, xq) {
-       const Aq = Qq(qq, ((Yq, lq) => (qq._tempPickingRay || (qq._tempPickingRay = Bq.Zero()), Nq(qq, Eq, gq, Yq, qq._tempPickingRay, mq || null, !1, lq), qq._tempPickingRay)), Yq, Oq, !1, xq);
-       return Aq && (Aq.ray = Wq(qq, Eq, gq, lq.e.Identity(), mq || null)), Aq
-     }
+ 	altYVelocityInaccuracy?: number
+ 	altInaccuracyFromJump?: number
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L606-L609` → after: `L2927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2927) · [Before (L606-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L606-L609)

```diff
-     function vq(qq, Eq, gq, Yq, Oq) {
-       const mq = Qq(qq, (gq => (qq._pickWithRayInverseMatrix || (qq._pickWithRayInverseMatrix = lq.e.Identity()), gq.invertToRef(qq._pickWithRayInverseMatrix), qq._cachedRayForTransform || (qq._cachedRayForTransform = Bq.Zero()), Bq.TransformToRef(Eq, qq._pickWithRayInverseMatrix … [truncated]
-       return mq && (mq.ray = Eq), mq
-     }
+ 	hasVerticalInaccuracy?: boolean
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L611-L613` → after: `L2929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2929) · [Before (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L611-L613)

```diff
-     function hq(qq, Eq, gq, Yq, lq, Oq) {
-       return yq(qq, (Yq => Wq(qq, Eq, gq, Yq, lq || null)), Yq, Oq)
-     }
+ 	keepScopeOnShot?: boolean
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L615-L617` → after: `L2931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2931) · [Before (L615-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L615-L617)

```diff
-     function nq(qq, Eq, gq, Yq) {
-       return yq(qq, (gq => (qq._pickWithRayInverseMatrix || (qq._pickWithRayInverseMatrix = lq.e.Identity()), gq.invertToRef(qq._pickWithRayInverseMatrix), qq._cachedRayForTransform || (qq._cachedRayForTransform = Bq.Zero()), Bq.TransformToRef(Eq, qq._pickWithRayInverseMatrix, qq … [truncated]
-     }
+ 	aimZoomFactor?: number
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L619-L628` → after: `L2933-L2942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2933-L2942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2933-L2942) · [Before (L619-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L619-L628)

```diff
-     function bq(qq, Eq) {
-       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
-         Yq = arguments.length > 3 ? arguments[3] : void 0,
-         Oq = arguments.length > 4 ? arguments[4] : void 0;
-       Yq || (Yq = qq.getWorldMatrix()), Eq.length = gq, Oq ? Eq.origin.WG(Oq) : Eq.origin.WG(qq.position);
-       const mq = lq.o.Na[2];
-       mq.set(0, 0, qq._scene.useRightHandedSystem ? -1 : 1);
-       const xq = lq.o.Na[3];
-       return lq.q.TransformNormalToRef(mq, Yq, xq), lq.q.NormalizeToRef(xq, Eq.direction), Eq
-     }
+ 	// Kickback
+ 	kickbackDecreaseRate: number
+ 	minKickback?: number
+ 	maxKickback?: number
+ 	kickbackRate?: number
+ }
+ type NonOverridableStats =
+ 	// Precomputed values
+ 	| "msPerRound"
+ 	| "msPerRoundTouchScreen"
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L630-L904` → after: `L2944-L4253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR2944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L2944-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L2944-L4253) · [Before (L630-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L630-L904)

```diff
-     function iq(qq, Eq) {
-       Eq && (Eq.prototype.getForwardRay = function() {
-         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
-           Eq = arguments.length > 1 ? arguments[1] : void 0,
-           gq = arguments.length > 2 ? arguments[2] : void 0;
-         return bq(this, new Bq(lq.q.Zero(), lq.q.Zero(), qq), qq, Eq, gq)
-       }, Eq.prototype.getForwardRayToRef = function(qq) {
-         return bq(this, qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
-       }), qq && (cq.b._IsPickingAvailable = !0, qq.prototype.createPickingRay = function(qq, Eq, gq, Yq) {
-         return Wq(this, qq, Eq, gq, Yq, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
-       })
-     }
-     Bq._TmpVector3 = (0, Oq.e)(6, lq.q.Zero), Bq._RayDistant = Bq.Zero(), Bq._Smallnum = 1e-8, Bq._Rayl = 1e9
-   },
-   41311: (qq, Eq, gq) => {
-     gq.d(Eq, {
- ... (259 more removed lines; see GitHub link above)
+ 	// These two don't even work lol
+ 	// TODO: Fix them
+ 	| "tagSpeedMult"
+ 	| "subsequentTagSpeedReductionScalar"
+ type GunCategory = (_TypeOf["gunCategories"])[number]
+ type WeaponComboInfo = Readonly<{
+ 	comboWindowMs: number
+ 	comboMultipliers: readonly number[]
+ 	backstabAngle?: number // If present, hitting an enemy from behind within this angle (radians) skip to end of combo
+ }>
+ type AnyMetadataItem = Partial<BlockMetadataItem & NonBlockMetadataItem>
+ type CustomItemStat = (_TypeOf["customItemStats"])[number]
+ type InvenItem = { name: string; amount: number | null; attributes: ItemAttributes; typeObj: any }
+ type RecipesForItem = RecursiveReadonly<
+ 	{
+ 		requires: { items: ItemName[]; amt: number }[]
+ ... (1294 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L906-L1561` → after: `L4255-L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4255-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L4255-L4258) · [Before (L906-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L906-L1561)

```diff
-   41338: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => sE
-     });
-     var Yq = gq(38677),
-       lq = gq(37156),
-       Oq = gq(37139),
-       mq = gq(39879),
-       xq = gq(41340),
-       Aq = gq(37153),
-       cq = gq(40028),
-       uq = gq(37289),
-       Bq = gq(38679),
-       Wq = gq(38649),
-       Nq = gq(37158);
-     class aq {
- ... (640 more removed lines; see GitHub link above)
+   41242: CC => {
+     function zC(CC) {
+       var zC = new Error("Cannot find module '" + CC + "'");
+       throw zC.code = "MODULE_NOT_FOUND", zC
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L1563-L4043` → after: `L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L4260) · [Before (L1563-L4043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L1563-L4043)

```diff
-     rq._Count = 0;
-     var vq = gq(40844);
-     class hq {
-       get currentFrame() {
-         return this._currentFrame
-       }
-       get _evaluatedFrom() {
-         return this._playbackFrom
-       }
-       get _evaluatedTo() {
-         return this._playbackTo
-       }
-       get _evaluatedProgress() {
-         return this._playbackProgress
-       }
-       get _evaluatedSyncRoot() {
- ... (2465 more removed lines; see GitHub link above)
+     zC.keys = () => [], zC.resolve = zC, zC.id = 41242, CC.exports = zC
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4045-L4406` → after: `L4262-L4269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L4262-L4269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/295.js#L4262-L4269) · [Before (L4045-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/295.js#L4045-L4406)

```diff
-   41383: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       SkyMaterial: () => oq,
-       _MaxColorValueForRenderTarget: () => Hq
-     });
-     var Yq = gq(39757),
-       lq = gq(39759),
-       Oq = gq(39779),
-       mq = gq(37131),
-       xq = gq(40033),
-       Aq = gq(40096),
-       cq = gq(41347),
-       uq = gq(40901),
-       Bq = gq(39833),
-       Wq = gq(37171),
-       Nq = gq(40123),
- ... (346 more removed lines; see GitHub link above)
+   41197: () => {},
+   41232: () => {},
+   41216: () => {},
+   41244: () => {},
+   41226: () => {},
+   41222: () => {},
+   41207: () => {},
+   41237: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/296.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/296.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L4-L327` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/296.js#L4) · [Before (L4-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/296.js#L4-L327)

```diff
-   41459: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => Wq,
-       f: () => jq,
-       i: () => Nq,
-       l: () => aq,
-       o: () => oq,
-       r: () => Hq
-     });
-     var Yq = gq(41402);
-     var lq = "Babylon Lite v1.32.0",
-       Oq = gq(41467);
- 
-     function mq(qq) {
-       return "clientWidth" in qq
-     }
- ... (308 more removed lines; see GitHub link above)
+   41188: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L331` → after: `L8-L5408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L8-L5408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/296.js#L8-L5408) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/296.js#L331)

```diff
-     var Yq = null;
+     const QC = String.raw`interface Map<K, V> {
+     clear(): void;
+     /**
+      * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
+      */
+     delete(key: K): boolean;
+     /**
+      * Executes a provided function once per each key/value pair in the Map, in insertion order.
+      */
+     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
+     /**
+      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
+      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
+      */
+     get(key: K): V | undefined;
+     /**
+ ... (5385 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L333-L358` → after: `L5410-L5418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R5410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L5410-L5418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/296.js#L5410-L5418) · [Before (L333-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/296.js#L333-L358)

```diff
-     function lq(qq) {
-       for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), lq = 1; lq < Eq; lq++) gq[lq - 1] = arguments[lq];
-       const Oq = new Error(Yq?.(qq, gq) ?? `#${qq}`);
-       throw Oq.lite = gq, Oq
-     }
-   },
-   41436: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => lq
-     });
-     var Yq = gq(41422);
- 
-     function lq(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const gq = Eq.compare,
-         lq = Eq.lodMinClamp ?? 0,
- ... (10 more removed lines; see GitHub link above)
+ /**
+  * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the
+  * requested number of bytes could not be allocated an exception is raised.
+  */
+ interface Uint32Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
+     /**
+      * The size in bytes of each element in the array.
+      */
+     readonly BYTES_PER_ELEMENT: number;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L360-L363` → after: `L5420-L5423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R5420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L5420-L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/296.js#L5420-L5423) · [Before (L360-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/296.js#L360-L363)

```diff
-     function lq(qq) {
-       const Eq = Yq ??= new WeakMap;
-       Eq.set(qq, (Eq.get(qq) ?? 0) + 1)
-     }
+     /**
+      * The ArrayBuffer instance referenced by the array.
+      */
+     readonly buffer: TArrayBuffer;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L365-L1056` → after: `L5425-L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L5425-L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/296.js#L5425-L6410) · [Before (L365-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/296.js#L365-L1056)

```diff
-     function Oq(qq) {
-       lq(qq.texture)
-     }
-   },
-   41422: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => xq
-     });
-     var Yq = null,
-       lq = "nearest",
-       Oq = "clamp-to-edge",
-       mq = {
-         minFilter: lq,
-         magFilter: lq,
-         mipmapFilter: lq,
-         addressModeU: Oq,
- ... (676 more removed lines; see GitHub link above)
+     /**
+      * The length in bytes of the array.
+      */
+     readonly byteLength: number;
+ 
+     /**
+      * The offset in bytes of the array.
+      */
+     readonly byteOffset: number;
+ 
+     /**
+      * Returns the this object after copying a section of the array identified by start and end
+      * to the same array starting at position target
+      * @param target If target is negative, it is treated as length+target where length is the
+      * length of the array.
+      * @param start If start is negative, it is treated as length+start. If end is negative, it
+ ... (970 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L1058` → after: `L6412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R6412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/296.js#L6412) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/296.js#L1058)

```diff
-   41443: (qq, Eq, gq) => {
+   41179: (CC, zC, ZC) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L1062-L1348` → after: `L6416-L7359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R6416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L6416-L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/296.js#L6416-L7359) · [Before (L1062-L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/296.js#L1062-L1348)

```diff
-     var Yq = gq(41402),
-       lq = gq(41406),
-       Oq = gq(41413),
-       mq = gq(41422),
-       xq = gq(41429);
-     async function Aq(qq, Eq) {
-       let Aq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const [cq, uq] = function(qq) {
-         const Eq = qq,
-           gq = [
-             [Eq.displayWidth, Eq.displayHeight],
-             [Eq.videoWidth, Eq.videoHeight],
-             [Eq.naturalWidth, Eq.naturalHeight],
-             [Eq.width, Eq.height]
-           ];
-         for (const [Yq, lq] of gq)
- ... (271 more removed lines; see GitHub link above)
+     const QC = String.raw`import type {
+ 	GameApi,
+ 	Console,
+ 	EntityId,
+ 	Pos,
+ 	LifeformId,
+ 	PlayerId,
+ 	PlayerDbId,
+ 	LifeformBodyPart,
+ 	PlayerAttemptDamageOtherPlayerOpts,
+ 	HittingSoundOverride,
+ 	DamageCause,
+ 	ItemName,
+ 	EnchantmentAttributes,
+ 	EnchantmentPerk,
+ 	EnchantmentTier,
+ ... (928 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/297.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/297.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L4` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/297.js#L4-L13) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/297.js#L4)

```diff
-   41519: (qq, Eq, gq) => {
+   41191: (CC, zC, ZC) => {
+     function QC() {
+       return QC = Object.assign ? Object.assign.bind() : function(CC) {
+         for (var zC = 1; zC < arguments.length; zC++) {
+           var ZC = arguments[zC];
+           for (var QC in ZC)({}).hasOwnProperty.call(ZC, QC) && (CC[QC] = ZC[QC])
+         }
+         return CC
+       }, QC.apply(null, arguments)
+     }
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L6` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/297.js#L15-L16) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/297.js#L6)

```diff
-       b: () => cq
+       e: () => NC,
+       h: () => fC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L8-L57` → after: `L18-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L18-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/297.js#L18-L76) · [Before (L8-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/297.js#L8-L57)

```diff
-     var Yq = gq(37139),
-       lq = gq(37158),
-       Oq = gq(39741),
-       mq = gq(37145),
-       xq = gq(37289);
-     class Aq {
-       constructor(qq, Eq, gq, Yq) {
-         this.name = qq, this.worldAxisForNormal = Eq, this.worldAxisForFileX = gq, this.worldAxisForFileY = Yq
-       }
-     }
-     class cq {
-       static _NearestPow2Floor(qq) {
-         return qq <= 1 ? 1 : 1 << Math.floor(Math.log2(qq))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(qq) {
-         if (!qq.isCube) return null;
- ... (34 more removed lines; see GitHub link above)
+     var wC = !1;
+     try {
+       wC = "undefined" !== typeof localStorage
+     } catch (gC) {}
+     var bC = "undefined" !== typeof process,
+       nC = wC && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || bC && {
+         NODE_ENV: "production",
+         PUBLIC_URL: "",
+         WDS_SOCKET_HOST: void 0,
+         WDS_SOCKET_PATH: void 0,
+         WDS_SOCKET_PORT: void 0,
+         FAST_REFRESH: !0,
+         REACT_APP_DEV_URLS: "false"
+       }.DEBUG ? console.log : function(CC) {
+         return ""
+       };
+ ... (43 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L59` → after: `L78-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L78-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/297.js#L78-L158) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/297.js#L59)

```diff
-             qq(this.ConvertCubeMapToSphericalPolynomial(Wq))
+           return SC
+         }(CC, zC, nC, ZC, bC),
+         oC = fC.languageServiceHost,
+         qC = fC.updateFile,
+         WC = fC.deleteFile,
+         NC = ZC.createLanguageService(oC),
+         gC = NC.getCompilerOptionsDiagnostics();
+       if (gC.length) {
+         var SC = MC(CC, wC, ZC);
+         throw new Error(ZC.formatDiagnostics(gC, SC.compilerHost))
+       }
+       return {
+         name: "vfs",
+         sys: CC,
+         languageService: NC,
+         getSourceFile: function(CC) {
+ ... (65 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L61-L84` → after: `L160-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L160-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/297.js#L160-L218) · [Before (L61-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/297.js#L61-L84)

```diff
-         }))
-       }
-       static _AreaElement(qq, Eq) {
-         return Math.atan2(qq * Eq, Math.sqrt(qq * qq + Eq * Eq + 1))
-       }
-       static _DownsampleFace(qq, Eq, gq, Yq) {
-         const lq = qq instanceof Float32Array ? qq : Float32Array.from(qq),
-           Oq = gq * gq * Yq,
-           mq = new Float32Array(Oq),
-           xq = Eq / gq,
-           Aq = 1 / (xq * xq);
-         for (let uq = 0; uq < gq; uq++) {
-           const qq = Math.floor(uq * xq),
-             Oq = Math.floor((uq + 1) * xq);
-           for (let cq = 0; cq < gq; cq++) {
-             const Bq = Math.floor(cq * xq),
- ... (8 more removed lines; see GitHub link above)
+         })),
+         exit: function() {
+           return oC("exit")
+         },
+         fileExists: qC("fileExists", (function(zC) {
+           return CC.has(zC) || CC.has(WC(zC))
+         })),
+         getCurrentDirectory: function() {
+           return "/"
+         },
+         getDirectories: function() {
+           return []
+         },
+         getExecutingFilePath: function() {
+           return oC("getExecutingFilePath")
+         },
+ ... (43 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L86-L429` → after: `L220-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L220-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/297.js#L220-L230) · [Before (L86-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/297.js#L86-L429)

```diff
-         }
-         if (qq instanceof Float32Array) return mq;
-         const cq = new(0, qq.constructor)(Oq);
-         for (let uq = 0; uq < Oq; uq++) cq[uq] = mq[uq] + .5 | 0;
-         return cq
-       }
-       static ConvertCubeMapToSphericalPolynomial(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const gq = Eq > 0 ? this._NearestPow2Floor(Eq) : 0;
-         if (gq > 0 && qq.size > gq) {
-           const Eq = 5 === qq.format ? 4 : 3,
-             Yq = ["right", "left", "up", "down", "front", "back"],
-             lq = {};
-           for (const Oq of Yq) lq[Oq] = this._DownsampleFace(qq[Oq], qq.size, gq, Eq);
-           qq = {
-             ...qq,
- ... (328 more removed lines; see GitHub link above)
+         }),
+         updateFile: function(zC) {
+           var ZC = wC.has(zC.fileName);
+           return CC.writeFile(zC.fileName, zC.text), wC.set(zC.fileName, zC), ZC
+         },
+         deleteFile: function(zC) {
+           var ZC = wC.has(zC.fileName);
+           return wC.delete(zC.fileName), CC.deleteFile(zC.fileName), ZC
+         }
+       }
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/298.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/298.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L2)

```diff
- export const ids = [297, 298];
+ export const ids = [298];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4-L18` → after: `L4-L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4-L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L4-L2289) · [Before (L4-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L4-L18)

```diff
-   41533: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       _DDSTextureLoader: () => Oq
-     });
-     var Yq = gq(39741),
-       lq = gq(41515);
-     class Oq {
-       constructor() {
-         this.supportCascades = !0
-       }
-       loadCubeData(qq, Eq, gq, Oq) {
-         const mq = Eq.Ba();
-         let xq, Aq = !1,
-           cq = 1e3;
-         if (Array.isArray(qq))
+   41203: (CC, zC, ZC) => {
+     var QC = "/index.js",
+       wC = {};
+     (CC => {
+       var zC = Object.defineProperty,
+         wC = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyNames, Object.prototype.hasOwnProperty, (CC, ZC) => {
+           for (var QC in ZC) zC(CC, QC, {
+             get: ZC[QC],
+             enumerable: !0
+           })
+         }),
+         bC = {};
+       wC(bC, {
+         ANONYMOUS: () => j6,
+         AccessFlags: () => fb,
+         AssertionLevel: () => RZ,
+ ... (2270 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L21-L24` → after: `L2337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2337) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L21-L24)

```diff
-             xq = lq.DDSTools.GetDDSInfo(gq), Eq.width = xq.width, Eq.height = xq.height, Aq = (xq.isRGB || xq.isLuminance || xq.mipmapCount > 1) && Eq.generateMipMaps, mq._unpackFlipY(xq.isCompressed), lq.DDSTools.UploadDDSLevels(mq, Eq, gq, xq, Aq, 6, -1, Yq), xq.isFourCC || 1 ! … [truncated]
-           } else {
-             const Oq = qq;
-             xq = lq.DDSTools.GetDDSInfo(Oq), Eq.width = xq.width, Eq.height = xq.height, gq && (xq.sphericalPolynomial = new Yq.d), Aq = (xq.isRGB || xq.isLuminance || xq.mipmapCount > 1) && Eq.generateMipMaps, mq._unpackFlipY(xq.isCompressed), lq.DDSTools.UploadDDSLevels(mq, Eq, … [truncated]
+             if (zC(ZC, QC)) return ZC
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L34-L84` → after: `L2340-L2395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2340-L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2340-L2395) · [Before (L34-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L34-L84)

```diff
-       loadData(qq, Eq, gq) {
-         const Yq = lq.DDSTools.GetDDSInfo(qq),
-           Oq = (Yq.isRGB || Yq.isLuminance || Yq.mipmapCount > 1) && Eq.generateMipMaps && Math.max(Yq.width, Yq.height) >> Yq.mipmapCount - 1 === 1;
-         gq(Yq.width, Yq.height, Oq, Yq.isFourCC, (() => {
-           lq.DDSTools.UploadDDSLevels(Eq.Ba(), Eq, qq, Yq, Oq, 1)
-         }))
-       }
-     }
-   },
-   41519: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => cq
-     });
-     var Yq = gq(37139),
-       lq = gq(37158),
-       Oq = gq(39741),
- ... (35 more removed lines; see GitHub link above)
+ 
+       function xC(CC, zC, ZC) {
+         if (void 0 !== CC)
+           for (let QC = ZC ?? CC.length - 1; QC >= 0; QC--) {
+             const ZC = CC[QC];
+             if (zC(ZC, QC)) return ZC
+           }
+       }
+ 
+       function JC(CC, zC, ZC) {
+         if (void 0 === CC) return -1;
+         for (let QC = ZC ?? 0; QC < CC.length; QC++)
+           if (zC(CC[QC], QC)) return QC;
+         return -1
+       }
+ 
+ ... (40 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L86-L100` → after: `L2397-L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2397-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2397-L2406) · [Before (L86-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L86-L100)

```diff
-             const Wq = {
-               size: Bq,
-               right: Oq,
-               left: lq,
-               up: mq,
-               down: Aq,
-               front: cq,
-               back: uq,
-               format: 5,
-               type: lq instanceof Float32Array ? 1 : 0,
-               gammaSpace: aq
-             };
-             qq(this.ConvertCubeMapToSphericalPolynomial(Wq))
-           }))
-         }))
+             return wC
+           }
+         }
+         return CC
+       }
+ 
+       function KC(CC, zC) {
+         let ZC = 0;
+         for (let QC = 0; QC < CC.length; QC++) zC(CC[QC], QC, CC) && (CC[ZC] = CC[QC], ZC++);
+         CC.length = ZC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L102-L103` → after: `L2408-L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2408-L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2408-L2410) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L102-L103)

```diff
-       static _AreaElement(qq, Eq) {
-         return Math.atan2(qq * Eq, Math.sqrt(qq * qq + Eq * Eq + 1))
+ 
+       function YC(CC) {
+         CC.length = 0
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L105-L122` → after: `L2412-L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2412-L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2412-L2434) · [Before (L105-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L105-L122)

```diff
-       static _DownsampleFace(qq, Eq, gq, Yq) {
-         const lq = qq instanceof Float32Array ? qq : Float32Array.from(qq),
-           Oq = gq * gq * Yq,
-           mq = new Float32Array(Oq),
-           xq = Eq / gq,
-           Aq = 1 / (xq * xq);
-         for (let uq = 0; uq < gq; uq++) {
-           const qq = Math.floor(uq * xq),
-             Oq = Math.floor((uq + 1) * xq);
-           for (let cq = 0; cq < gq; cq++) {
-             const Bq = Math.floor(cq * xq),
-               Wq = Math.floor((cq + 1) * xq),
-               Nq = (uq * gq + cq) * Yq;
-             for (let gq = 0; gq < Yq; gq++) {
-               let xq = 0;
-               for (let mq = qq; mq < Oq; mq++)
- ... (2 more removed lines; see GitHub link above)
+ 
+       function dC(CC, zC) {
+         let ZC;
+         if (void 0 !== CC) {
+           ZC = [];
+           for (let QC = 0; QC < CC.length; QC++) ZC.push(zC(CC[QC], QC))
+         }
+         return ZC
+       }
+ 
+       function* mC(CC, zC) {
+         for (const ZC of CC) yield zC(ZC)
+       }
+ 
+       function HC(CC, zC) {
+         if (void 0 !== CC)
+ ... (7 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L131-L142` → after: `L2448-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2448-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2448-L2482) · [Before (L131-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L131-L142)

```diff
-       static ConvertCubeMapToSphericalPolynomial(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const gq = Eq > 0 ? this._NearestPow2Floor(Eq) : 0;
-         if (gq > 0 && qq.size > gq) {
-           const Eq = 5 === qq.format ? 4 : 3,
-             Yq = ["right", "left", "up", "down", "front", "back"],
-             lq = {};
-           for (const Oq of Yq) lq[Oq] = this._DownsampleFace(qq[Oq], qq.size, gq, Eq);
-           qq = {
-             ...qq,
-             ...lq,
-             size: gq
+ 
+       function lC(CC, zC) {
+         let ZC;
+         if (void 0 !== CC)
+           for (let QC = 0; QC < CC.length; QC++) {
+             const wC = zC(CC[QC], QC);
+             wC && (ZC = ZZ(wC) ? Fz(ZC, wC) : fz(ZC, wC))
+           }
+         return ZC ?? qC
+       }
+ 
+       function XC(CC, zC) {
+         const ZC = [];
+         if (void 0 !== CC)
+           for (let QC = 0; QC < CC.length; QC++) {
+             const wC = zC(CC[QC], QC);
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L145-L223` → after: `L2494-L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2494-L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2494-L2539) · [Before (L145-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L145-L223)

```diff
-         const Yq = new Oq.c;
-         let Aq = 0;
-         const cq = 2 / qq.size,
-           uq = cq,
-           Bq = .5 * cq,
-           Wq = Bq - 1;
-         for (let Oq = 0; Oq < 6; Oq++) {
-           const Eq = this._FileFaces[Oq],
-             gq = qq[Eq.name];
-           let Nq = Wq;
-           const aq = 5 === qq.format ? 4 : 3;
-           for (let Oq = 0; Oq < qq.size; Oq++) {
-             let Vq = Wq;
-             for (let uq = 0; uq < qq.size; uq++) {
-               const Wq = Eq.worldAxisForFileX.scale(Vq).add(Eq.worldAxisForFileY.scale(Nq)).add(Eq.worldAxisForNormal);
-               Wq.normalize();
- ... (63 more removed lines; see GitHub link above)
+         return ZC
+       }
+ 
+       function sC(CC, zC) {
+         const ZC = [];
+         if (void 0 !== CC)
+           for (let QC = 0; QC < CC.length; QC++) {
+             const wC = zC(CC[QC], QC);
+             void 0 !== wC && ZC.push(wC)
+           }
+         return ZC
+       }
+ 
+       function* TC(CC, zC) {
+         for (const ZC of CC) {
+           const CC = zC(ZC);
+ ... (30 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L225-L227` → after: `L2541-L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2541-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2541-L2543) · [Before (L225-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L225-L227)

```diff
-             if (2 === Oq) {
-               mq = 1;
-               break
+             if (fC < oC) {
+               const zC = ZC(CC.slice(fC, oC), bC, fC, oC);
+               zC && QC.push(zC), fC = oC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L230-L240` → after: `L2548-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2548-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2548-L2564) · [Before (L230-L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L230-L240)

```diff
-         return {
-           width: Eq[4],
-           height: Eq[3],
-           mipmapCount: Yq,
-           isFourCC: 4 === (4 & Eq[20]),
-           isRGB: 64 === (64 & Eq[20]),
-           isLuminance: (Eq[20] & Aq) === Aq,
-           isCube: 512 === (512 & Eq[28]),
-           isCompressed: lq === uq || lq === Bq || lq === Wq,
-           dxgiFormat: Oq,
-           textureType: mq
+         return QC
+       }
+ 
+       function yC(CC, zC) {
+         if (void 0 === CC) return;
+         const ZC = new Map;
+         return CC.forEach(((CC, QC) => {
+           const [wC, bC] = zC(QC, CC);
+           ZC.set(wC, bC)
+         })), ZC
+       }
+ 
+       function LC(CC, zC) {
+         if (void 0 !== CC) {
+           if (void 0 === zC) return CC.length > 0;
+           for (let ZC = 0; ZC < CC.length; ZC++)
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L243-L251` → after: `L2568-L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2568-L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2568-L2579) · [Before (L243-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L243-L251)

```diff
-       static _GetHalfFloatAsFloatRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq) {
-         const xq = new Float32Array(Yq),
-           Aq = new Uint16Array(lq, gq);
-         let cq = 0;
-         for (let uq = 0; uq < Eq; uq++)
-           for (let Eq = 0; Eq < qq; Eq++) {
-             const gq = 4 * (Eq + uq * qq);
-             xq[cq] = (0, mq.e)(Aq[gq]), xq[cq + 1] = (0, mq.e)(Aq[gq + 1]), xq[cq + 2] = (0, mq.e)(Aq[gq + 2]), aq.StoreLODInAlphaChannel ? xq[cq + 3] = Oq : xq[cq + 3] = (0, mq.e)(Aq[gq + 3]), cq += 4
-           }
+ 
+       function UC(CC, zC, ZC) {
+         let QC;
+         for (let wC = 0; wC < CC.length; wC++) zC(CC[wC]) ? QC = void 0 === QC ? wC : QC : void 0 !== QC && (ZC(QC, wC), QC = void 0);
+         void 0 !== QC && ZC(QC, CC.length)
+       }
+ 
+       function BC(CC, zC) {
+         return void 0 === zC || 0 === zC.length ? CC : void 0 === CC || 0 === CC.length ? zC : [...CC, ...zC]
+       }
+ 
+       function OC(CC, zC) {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L254-L263` → after: `L2582-L2605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2582-L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2582-L2605) · [Before (L254-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L254-L263)

```diff
-       static _GetHalfFloatRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq) {
-         if (aq.StoreLODInAlphaChannel) {
-           const xq = new Uint16Array(Yq),
-             Aq = new Uint16Array(lq, gq);
-           let cq = 0;
-           for (let gq = 0; gq < Eq; gq++)
-             for (let Eq = 0; Eq < qq; Eq++) {
-               const Yq = 4 * (Eq + gq * qq);
-               xq[cq] = Aq[Yq], xq[cq + 1] = Aq[Yq + 1], xq[cq + 2] = Aq[Yq + 2], xq[cq + 3] = (0, mq.j)(Oq), cq += 4
-             }
+ 
+       function kC(CC) {
+         return CC.map(OC)
+       }
+ 
+       function VC(CC, zC, ZC) {
+         const QC = kC(CC);
+         ! function(CC, zC, ZC) {
+           zC.sort(((zC, QC) => ZC(CC[zC], CC[QC]) || iZ(zC, QC)))
+         }(CC, QC, ZC);
+         let wC = CC[QC[0]];
+         const bC = [QC[0]];
+         for (let nC = 1; nC < QC.length; nC++) {
+           const ZC = QC[nC],
+             fC = CC[ZC];
+           zC(wC, fC) || (bC.push(ZC), wC = fC)
+ ... (8 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L266` → after: `L2625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2625) · [Before (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L266)

```diff
-         return new Uint16Array(lq, gq, Yq)
+         return !!wC && (CC.splice(bC, 0, zC), !0)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L268-L276` → after: `L2627-L2640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2627-L2640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2627-L2640) · [Before (L268-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L268-L276)

```diff
-       static _GetFloatRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq) {
-         if (aq.StoreLODInAlphaChannel) {
-           const mq = new Float32Array(Yq),
-             xq = new Float32Array(lq, gq);
-           let Aq = 0;
-           for (let gq = 0; gq < Eq; gq++)
-             for (let Eq = 0; Eq < qq; Eq++) {
-               const Yq = 4 * (Eq + gq * qq);
-               mq[Aq] = xq[Yq], mq[Aq + 1] = xq[Yq + 1], mq[Aq + 2] = xq[Yq + 2], mq[Aq + 3] = Oq, Aq += 4
+ 
+       function Qz(CC, zC, ZC) {
+         return function(CC, zC) {
+           if (0 === CC.length) return qC;
+           let ZC = CC[0];
+           const QC = [ZC];
+           for (let wC = 1; wC < CC.length; wC++) {
+             const bC = CC[wC];
+             switch (zC(bC, ZC)) {
+               case !0:
+               case 0:
+                 continue;
+               case -1:
+                 return PQ.fail("Array is unsorted.")
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L279-L280` → after: `L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2645) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L279-L280)

```diff
-         }
-         return new Float32Array(lq, gq, Yq)
+         }(Mz(CC, zC), ZC ?? zC ?? dZ)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L282-L288` → after: `L2647-L2654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2647-L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2647-L2654) · [Before (L282-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L282-L288)

```diff
-       static _GetFloatAsHalfFloatRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq) {
-         const xq = new Uint16Array(Yq),
-           Aq = new Float32Array(lq, gq);
-         let cq = 0;
-         for (let uq = 0; uq < Eq; uq++)
-           for (let Eq = 0; Eq < qq; Eq++) xq[cq] = (0, mq.j)(Aq[cq]), xq[cq + 1] = (0, mq.j)(Aq[cq + 1]), xq[cq + 2] = (0, mq.j)(Aq[cq + 2]), aq.StoreLODInAlphaChannel ? xq[cq + 3] = (0, mq.j)(Oq) : xq[cq + 3] = (0, mq.j)(Aq[cq + 3]), cq += 4;
-         return xq
+ 
+       function wz(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AZ;
+         if (void 0 === CC || void 0 === zC) return CC === zC;
+         if (CC.length !== zC.length) return !1;
+         for (let QC = 0; QC < CC.length; QC++)
+           if (!ZC(CC[QC], zC[QC], QC)) return !1;
+         return !0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L290-L297` → after: `L2656-L2662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2656-L2662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2656-L2662) · [Before (L290-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L290-L297)

```diff
-       static _GetFloatAsUIntRGBAArrayBuffer(qq, Eq, gq, lq, Oq, mq) {
-         const xq = new Uint8Array(lq),
-           Aq = new Float32Array(Oq, gq);
-         let cq = 0;
-         for (let uq = 0; uq < Eq; uq++)
-           for (let Eq = 0; Eq < qq; Eq++) {
-             const gq = 4 * (Eq + uq * qq);
-             xq[cq] = 255 * (0, Yq.Clamp)(Aq[gq]), xq[cq + 1] = 255 * (0, Yq.Clamp)(Aq[gq + 1]), xq[cq + 2] = 255 * (0, Yq.Clamp)(Aq[gq + 2]), aq.StoreLODInAlphaChannel ? xq[cq + 3] = mq : xq[cq + 3] = 255 * (0, Yq.Clamp)(Aq[gq + 3]), cq += 4
+ 
+       function bz(CC) {
+         let zC;
+         if (void 0 !== CC)
+           for (let ZC = 0; ZC < CC.length; ZC++) {
+             const QC = CC[ZC];
+             (zC ?? !QC) && (zC ?? (zC = CC.slice(0, ZC)), QC && zC.push(QC))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L299` → after: `L2664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2664) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L299)

```diff
-         return xq
+         return zC ?? CC
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L301-L308` → after: `L2666-L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2666-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2666-L2679) · [Before (L301-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L301-L308)

```diff
-       static _GetHalfFloatAsUIntRGBAArrayBuffer(qq, Eq, gq, lq, Oq, xq) {
-         const Aq = new Uint8Array(lq),
-           cq = new Uint16Array(Oq, gq);
-         let uq = 0;
-         for (let Bq = 0; Bq < Eq; Bq++)
-           for (let Eq = 0; Eq < qq; Eq++) {
-             const gq = 4 * (Eq + Bq * qq);
-             Aq[uq] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq])), Aq[uq + 1] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq + 1])), Aq[uq + 2] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq + 2])), aq.StoreLODInAlphaChannel ? Aq[uq + 3] = xq : Aq[uq + 3] = 255 * (0, Yq.Clamp)((0, mq.e)(cq[gq + 3])), uq … [truncated]
+ 
+       function nz(CC, zC, ZC) {
+         if (!zC || !CC || 0 === zC.length || 0 === CC.length) return zC;
+         const QC = [];
+         CC: for (let wC = 0, bC = 0; bC < zC.length; bC++) {
+           bC > 0 && PQ.assertGreaterThanOrEqual(ZC(zC[bC], zC[bC - 1]), 0);
+           zC: for (const nC = wC; wC < CC.length; wC++) switch (wC > nC && PQ.assertGreaterThanOrEqual(ZC(CC[wC], CC[wC - 1]), 0), ZC(zC[bC], CC[wC])) {
+             case -1:
+               QC.push(zC[bC]);
+               continue CC;
+             case 0:
+               continue CC;
+             case 1:
+               continue zC
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L312-L320` → after: `L2684-L2701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2684-L2701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2684-L2701) · [Before (L312-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L312-L320)

```diff
-       static _GetRGBAArrayBuffer(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
-         const cq = new Uint8Array(Yq),
-           uq = new Uint8Array(lq, gq);
-         let Bq = 0;
-         for (let Wq = 0; Wq < Eq; Wq++)
-           for (let Eq = 0; Eq < qq; Eq++) {
-             const gq = 4 * (Eq + Wq * qq);
-             cq[Bq] = uq[gq + Oq], cq[Bq + 1] = uq[gq + mq], cq[Bq + 2] = uq[gq + xq], cq[Bq + 3] = uq[gq + Aq], Bq += 4
-           }
+ 
+       function fz(CC, zC) {
+         return void 0 === zC ? CC : void 0 === CC ? [zC] : (CC.push(zC), CC)
+       }
+ 
+       function oz(CC, zC) {
+         return void 0 === CC ? zC : void 0 === zC ? CC : ZZ(CC) ? ZZ(zC) ? BC(CC, zC) : fz(CC, zC) : ZZ(zC) ? fz(zC, CC) : [CC, zC]
+       }
+ 
+       function qz(CC, zC) {
+         return zC < 0 ? CC.length + zC : zC
+       }
+ 
+       function Fz(CC, zC, ZC, QC) {
+         if (void 0 === zC || 0 === zC.length) return CC;
+         if (void 0 === CC) return zC.slice(ZC, QC);
+ ... (2 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L323-L324` → after: `L2704-L2706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2704-L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2704-L2706) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L323-L324)

```diff
-       static _ExtractLongWordOrder(qq) {
-         return 0 === qq || 255 === qq || -16777216 === qq ? 0 : 1 + aq._ExtractLongWordOrder(qq >> 8)
+ 
+       function Wz(CC, zC, ZC) {
+         return !iC(CC, zC, ZC) && (CC.push(zC), !0)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L326-L333` → after: `L2708-L2792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2708-L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2708-L2792) · [Before (L326-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L326-L333)

```diff
-       static _GetRGBArrayBuffer(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
-         const Aq = new Uint8Array(Yq),
-           cq = new Uint8Array(lq, gq);
-         let uq = 0;
-         for (let Bq = 0; Bq < Eq; Bq++)
-           for (let Eq = 0; Eq < qq; Eq++) {
-             const gq = 3 * (Eq + Bq * qq);
-             Aq[uq] = cq[gq + Oq], Aq[uq + 1] = cq[gq + mq], Aq[uq + 2] = cq[gq + xq], uq += 3
+ 
+       function Nz(CC, zC, ZC) {
+         return void 0 !== CC ? (Wz(CC, zC, ZC), CC) : [zC]
+       }
+ 
+       function Mz(CC, zC) {
+         return 0 === CC.length ? qC : CC.slice().sort(zC)
+       }
+ 
+       function* gz(CC) {
+         for (let zC = CC.length - 1; zC >= 0; zC--) yield CC[zC]
+       }
+ 
+       function Sz(CC, zC, ZC, QC) {
+         for (; ZC < QC;) {
+           if (CC[ZC] !== zC[ZC]) return !1;
+ ... (69 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L335` → after: `L2794-L2795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2794-L2795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2794-L2795) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L335)

```diff
-         return Aq
+         }
+         return ~bC
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L337-L344` → after: `L2797-L2806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2797-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2797-L2806) · [Before (L337-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L337-L344)

```diff
-       static _GetLuminanceArrayBuffer(qq, Eq, gq, Yq, lq) {
-         const Oq = new Uint8Array(Yq),
-           mq = new Uint8Array(lq, gq);
-         let xq = 0;
-         for (let Aq = 0; Aq < Eq; Aq++)
-           for (let Eq = 0; Eq < qq; Eq++) {
-             const gq = Eq + Aq * qq;
-             Oq[xq] = mq[gq], xq++
+ 
+       function Yz(CC, zC, ZC, QC, wC) {
+         if (CC && CC.length > 0) {
+           const bC = CC.length;
+           if (bC > 0) {
+             let nC = void 0 === QC || QC < 0 ? 0 : QC;
+             const fC = void 0 === wC || nC + wC > bC - 1 ? bC - 1 : nC + wC;
+             let oC;
+             for (arguments.length <= 2 ? (oC = CC[nC], nC++) : oC = ZC; nC <= fC;) oC = zC(oC, CC[nC], nC), nC++;
+             return oC
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L348-L390` → after: `L2811-L122891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L2811-L122891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L2811-L122891) · [Before (L348-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L348-L390)

```diff
-       static UploadDDSLevels(qq, Eq, gq, Yq, mq, Aq) {
-         let cq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
-           Vq = arguments.length > 7 ? arguments[7] : void 0,
-           dq = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
-           jq = null;
-         Yq.sphericalPolynomial && (jq = []);
-         const Hq = !!qq.getCaps().s3tc;
-         Eq.generateMipMaps = mq;
-         const oq = new Int32Array(gq.buffer, gq.byteOffset, 31);
-         let Pq, Qq, yq, tq, rq, vq, hq, nq = 0,
-           bq = 0,
-           iq = 1;
-         if (542327876 !== oq[0]) return void lq.b.Error("Invalid magic number in DDS header");
-         if (!Yq.isFourCC && !Yq.isRGB && !Yq.isLuminance) return void lq.b.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
-         if (Yq.isCompressed && !Hq) return void lq.b.Error("Compressed textures are not supported on this platform.");
-         let Zq = oq[22];
- ... (27 more removed lines; see GitHub link above)
+       var dz = Object.prototype.hasOwnProperty;
+ 
+       function mz(CC, zC) {
+         return dz.call(CC, zC)
+       }
+ 
+       function Hz(CC, zC) {
+         return dz.call(CC, zC) ? CC[zC] : void 0
+       }
+ 
+       function Ez(CC) {
+         const zC = [];
+         for (const ZC in CC) dz.call(CC, ZC) && zC.push(ZC);
+         return zC
+       }
+ 
+ ... (120065 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L392-L393` → after: `L122893-L124107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR122893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L122893-L124107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L122893-L124107) · [Before (L392-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L392-L393)

```diff
-               case 88:
-                 Yq.isRGB = !0, Yq.isFourCC = !1, Zq = 32, qq = !0
+               case RxC:
+                 this.event({
+                   projectName: CC.data.project.getProjectName()
+                 }, CC.eventName);
+                 break;
+               case AxC:
+               case vxC:
+               case exC:
+               case hxC:
+                 this.event(CC.data, CC.eventName);
+                 break;
+               case xxC:
+                 this.event({
+                   triggerFile: CC.data.triggerFile,
+                   configFile: CC.data.configFileName,
+                   diagnostics: dC(CC.data.diagnostics, (CC => KJC(CC, !0)))
+ ... (1199 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L397-L398` → after: `L124110-L124817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR124110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L124110-L124817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L124110-L124817) · [Before (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L397-L398)

```diff
-           default:
-             return void lq.b.Error(["Unsupported FourCC code:", (Mq = Pq, String.fromCharCode(255 & Mq, Mq >> 8 & 255, Mq >> 16 & 255, Mq >> 24 & 255))])
+           getDiagnostics(CC, zC, ZC) {
+             this.suppressDiagnosticEvents || ZC.length > 0 && this.updateErrorCheck(CC, ZC, zC)
+           }
+           change(CC) {
+             const zC = this.projectService.getScriptInfo(CC.file);
+             PQ.assert(!!zC), zC.textStorage.switchToScriptVersionCache();
+             const ZC = zC.lineOffsetToPosition(CC.line, CC.offset),
+               QC = zC.lineOffsetToPosition(CC.endLine, CC.endOffset);
+             ZC >= 0 && (this.changeSeq++, this.projectService.applyChangesToFile(zC, DC({
+               span: {
+                 start: ZC,
+                 length: QC - ZC
+               },
+               rn: CC.insertString
+             })))
+           }
+ ... (692 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L400-L440` → after: `L124819-L124862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR124819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L124819-L124862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L124819-L124862) · [Before (L400-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L400-L440)

```diff
-         var Mq;
-         const Tq = aq._ExtractLongWordOrder(oq[23]),
-           zq = aq._ExtractLongWordOrder(oq[24]),
-           Sq = aq._ExtractLongWordOrder(oq[25]),
-           pq = aq._ExtractLongWordOrder(oq[26]);
-         fq && (bq = qq._getRGBABufferInternalSizedFormat(Yq.textureType)), vq = 1, oq[2] & xq && !1 !== mq && (vq = Math.max(1, oq[7]));
-         const Gq = Vq || 0,
-           Lq = qq.getCaps();
-         for (let lq = Gq; lq < Aq; lq++) {
-           for (Qq = oq[4], yq = oq[3], hq = 0; hq < vq; ++hq) {
-             if (-1 === cq || cq === hq) {
-               const Oq = -1 === cq ? hq : 0;
-               if (!Yq.isCompressed && Yq.isFourCC) {
-                 Eq.format = 5, nq = Qq * yq * 4;
-                 let Yq = null;
-                 if (qq._badOS || qq._badDesktopOS || !Lq.textureHalfFloat && !Lq.textureFloat) 128 === Zq ? (Yq = aq._GetFloatAsUIntRGBAArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, gq.buffer, Oq), jq && 0 == Oq && jq.push(aq._GetFloatRGBAArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, … [truncated]
- ... (25 more removed lines; see GitHub link above)
+       }
+ 
+       function OJC(CC, zC) {
+         return {
+           start: zC.positionToLineOffset(CC.start),
+           end: zC.positionToLineOffset(Zq(CC))
+         }
+       }
+ 
+       function kJC(CC, zC, ZC) {
+         const QC = OJC(CC, ZC),
+           wC = zC && OJC(zC, ZC);
+         return wC ? {
+           ...QC,
+           contextStart: wC.start,
+           contextEnd: wC.end
+ ... (28 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L442-L445` → after: `L124864-L124922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR124864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L124864-L124922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L124864-L124922) · [Before (L442-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L442-L445)

```diff
-                 Yq && qq._uploadDataToTextureDirectly(Eq, Yq, lq, Oq)
-               } else if (Yq.isRGB) Eq.type = 0, 24 === Zq ? (Eq.format = 4, nq = Qq * yq * 3, rq = aq._GetRGBArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, gq.buffer, Tq, zq, Sq), qq._uploadDataToTextureDirectly(Eq, rq, lq, Oq)) : (Eq.format = 5, nq = Qq * yq * 4, rq = aq._GetRGBAAr … [truncated]
-               else if (Yq.isLuminance) {
-                 const Yq = qq._getUnpackAlignement(),
+             return CC
+           }(CC, zC, QC),
+           {
+             line: bC,
+             character: nC
+           } = fo(Qo(wC), ZC);
+         return {
+           line: bC + 1,
+           offset: nC + 1
+         }
+       }
+ 
+       function zIC(CC, zC, ZC) {
+         let {
+           fileName: QC,
+           textSpan: wC,
+ ... (43 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L447-L465` → after: `L124924-L125584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR124924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L124924-L125584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L124924-L125584) · [Before (L447-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L447-L465)

```diff
-                 nq = Math.floor((Qq + Yq - 1) / Yq) * Yq * (yq - 1) + mq, rq = aq._GetLuminanceArrayBuffer(Qq, yq, gq.byteOffset + tq, nq, gq.buffer), Eq.format = 1, Eq.type = 0, qq._uploadDataToTextureDirectly(Eq, rq, lq, Oq)
-               } else nq = Math.max(4, Qq) / 4 * Math.max(4, yq) / 4 * iq, rq = new Uint8Array(gq.buffer, gq.byteOffset + tq, nq), Eq.type = 0, qq._uploadCompressedDataToTextureDirectly(Eq, bq, Qq, yq, rq, lq, Oq)
-             }
-             tq += Zq ? Qq * yq * (Zq / 8) : nq, Qq *= .5, yq *= .5, Qq = Math.max(1, Qq), yq = Math.max(1, yq)
-           }
-           if (void 0 !== Vq) break
-         }
-         jq && jq.length > 0 ? Yq.sphericalPolynomial = Oq.b.ConvertCubeMapToSphericalPolynomial({
-           size: oq[4],
-           right: jq[0],
-           left: jq[1],
-           up: jq[2],
-           down: jq[3],
-           front: jq[4],
-           back: jq[5],
-           format: 5,
- ... (3 more removed lines; see GitHub link above)
+                 for (let bC = 1; bC < ZC.length; bC++) CC[bC - 1] = new WIC(ZC[bC]);
+                 let QC = this.startPath.length - 2;
+                 for (; QC >= 0;) {
+                   const ZC = this.startPath[QC];
+                   CC = ZC.insertAt(zC, CC), QC--, zC = ZC
+                 }
+                 let wC = CC.length;
+                 for (; wC > 0;) {
+                   const zC = new FIC;
+                   zC.add(this.lineIndex.root), CC = zC.insertAt(this.lineIndex.root, CC), wC = CC.length, this.lineIndex.root = zC
+                 }
+                 this.lineIndex.root.updateCounts()
+               } else
+                 for (let nC = this.startPath.length - 2; nC >= 0; nC--) this.startPath[nC].updateCounts();
+             else {
+               this.startPath[this.startPath.length - 2].remove(bC);
+ ... (645 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L467-L468` → after: `L125586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR125586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/298.js#L125586) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/298.js#L467-L468)

```diff
-     }
-     aq.StoreLODInAlphaChannel = !1
+     })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/299.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/299.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/299.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/299.js#L4-L6)

```diff
-   41547: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       _ENVTextureLoader: () => vq
+   41282: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       collectImportedWorldCodePluginNames: () => qC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L8-L18` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/299.js#L8-L11) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/299.js#L8-L18)

```diff
-     var Yq = gq(39696),
-       lq = gq(37139),
-       Oq = gq(37158),
-       mq = gq(39741),
-       xq = gq(39593),
-       Aq = gq(39748),
-       cq = (gq(39838), gq(41551)),
-       uq = gq(38653),
-       Bq = (gq(41557), gq(41581), gq(39817));
-     const Wq = "image/png",
-       Nq = [134, 22, 135, 150, 246, 214, 150, 54];
+     var QC = ZC(36725),
+       wC = ZC(36721),
+       bC = ZC(41203),
+       nC = ZC.n(bC);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L21-L28` → after: `L14-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L14-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/299.js#L14-L37) · [Before (L21-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/299.js#L21-L28)

```diff
-       const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
-       let gq = 0;
-       for (let mq = 0; mq < Nq.length; mq++)
-         if (Eq.getUint8(gq++) !== Nq[mq]) return uq.b.Error("Not a babylon environment map"), null;
-       let Yq, lq = "";
-       for (; Yq = Eq.getUint8(gq++);) lq += String.fromCharCode(Yq);
-       let Oq = JSON.parse(lq);
-       return Oq = Vq(Oq), Oq.binaryDataPosition = gq, Oq.specular && (Oq.specular.lodGenerationScale = Oq.specular.lodGenerationScale || .8), Oq
+       return nC().isImportDeclaration(CC) && nC().isStringLiteral(CC.moduleSpecifier) && function(CC) {
+         const zC = CC.importClause;
+         if (!zC) return !0;
+         if (zC.isTypeOnly) return !1;
+         const ZC = zC.namedBindings;
+         return !(ZC && !nC().isNamespaceImport(ZC)) || !!zC.name || ZC.elements.some((CC => !CC.isTypeOnly))
+       }(CC) || nC().isExportDeclaration(CC) && CC.moduleSpecifier && nC().isStringLiteral(CC.moduleSpecifier) && function(CC) {
+         return !CC.isTypeOnly && (!CC.exportClause || !nC().isNamedExports(CC.exportClause) || 0 === CC.exportClause.elements.length || CC.exportClause.elements.some((CC => !CC.isTypeOnly)))
+       }(CC) ? CC.moduleSpecifier.text : nC().isImportEqualsDeclaration(CC) && !CC.isTypeOnly && nC().isExternalModuleReference(CC.moduleReference) && CC.moduleReference.expression && nC().isStringLiteral(CC.moduleReference.expression) ? CC.moduleReference.expression.text : nC().i … [truncated]
+     }
+ 
+     function oC(CC, zC, ZC) {
+       if (!zC.startsWith("./") && !zC.startsWith("../")) return;
+       const wC = ((CC.includes("/") ? CC.slice(0, CC.lastIndexOf("/") + 1) : "") + zC).split("/"),
+         bC = [];
+       for (const QC of wC)
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L32-L36` → after: `L41-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L41-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/299.js#L41-L61) · [Before (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/299.js#L32-L36)

```diff
-       if (qq.version > 2) throw new Error(`Unsupported babylon environment map version "${qq.version}". Latest supported version is "2".`);
-       return 2 === qq.version ? qq : qq = {
-         ...qq,
-         version: 2,
-         imageType: Wq
+       const zC = new Set,
+         ZC = (0, wC.b)(CC);
+       if (!ZC) return [];
+       const QC = [ZC],
+         bC = new Set;
+       for (; QC.length > 0;) {
+         const ZC = QC.pop();
+         if (!ZC || bC.has(ZC)) continue;
+         bC.add(ZC);
+         const qC = nC().createSourceFile(ZC, CC[ZC], nC().ScriptTarget.Latest, !1),
+           FC = qC => {
+             const WC = fC(qC),
+               NC = WC ? (0, wC.p)(WC) : null;
+             if (NC) zC.add(NC);
+             else if (WC) {
+               const zC = oC(ZC, WC, CC);
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L38-L245` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/299.js#L63) · [Before (L38-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/299.js#L38-L245)

```diff
-     }
- 
-     function dq(qq, Eq) {
-       const gq = (Eq = Vq(Eq)).specular;
-       let Yq = Math.log2(Eq.width);
-       if (Yq = Math.round(Yq) + 1, gq.mipmaps.length !== 6 * Yq) throw new Error(`Unsupported specular mipmaps number "${gq.mipmaps.length}"`);
-       const lq = new Array(Yq);
-       for (let Oq = 0; Oq < Yq; Oq++) {
-         lq[Oq] = new Array(6);
-         for (let Yq = 0; Yq < 6; Yq++) {
-           const mq = gq.mipmaps[6 * Oq + Yq];
-           lq[Oq][Yq] = new Uint8Array(qq.buffer, qq.byteOffset + Eq.binaryDataPosition + mq.position, mq.length)
-         }
-       }
-       return lq
-     }
- ... (192 more removed lines; see GitHub link above)
+       return [...zC].sort()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L248-L274` → after: `L66-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/299.js#L66-L69) · [Before (L248-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/299.js#L248-L274)

```diff
-   41585: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       e: () => mq
-     });
-     var Yq = gq(41519),
-       lq = gq(39748);
-     let Oq = !1;
- 
-     function mq() {
-       Oq || (Oq = !0, lq.d.prototype._sphericalPolynomialTargetSize = 0, lq.d.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(lq.d.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Yq.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
- ... (11 more removed lines; see GitHub link above)
+   41242: CC => {
+     function zC(CC) {
+       var zC = new Error("Cannot find module '" + CC + "'");
+       throw zC.code = "MODULE_NOT_FOUND", zC
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L277-L464` → after: `L73-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/299.js#L73-L79) · [Before (L277-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/299.js#L277-L464)

```diff
-   41519: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       b: () => cq
-     });
-     var Yq = gq(37139),
-       lq = gq(37158),
-       Oq = gq(39741),
-       mq = gq(37145),
-       xq = gq(37289);
-     class Aq {
-       constructor(qq, Eq, gq, Yq) {
-         this.name = qq, this.worldAxisForNormal = Eq, this.worldAxisForFileX = gq, this.worldAxisForFileY = Yq
-       }
-     }
-     class cq {
-       static _NearestPow2Floor(qq) {
- ... (172 more removed lines; see GitHub link above)
+   41232: () => {},
+   41216: () => {},
+   41244: () => {},
+   41226: () => {},
+   41222: () => {},
+   41207: () => {},
+   41237: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/300.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/300.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03)

#### 1. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/300.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/300.js#L4)

```diff
-   41525: (qq, Eq, gq) => {
+   41260: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/300.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/300.js#L6)

```diff
-       _IESTextureLoader: () => xq
+       default: () => JC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L8` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/300.js#L8-L18) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/300.js#L8)

```diff
-     var Yq = gq(37158);
+     var QC = ZC(48),
+       wC = ZC(4679),
+       bC = ZC(1593),
+       nC = ZC(1002),
+       fC = ZC.n(nC),
+       oC = ZC(1388),
+       qC = ZC(1143),
+       FC = ZC(4657),
+       WC = ZC(4668),
+       NC = ZC(4672),
+       MC = ZC(1056);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L11` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/300.js#L21-L27) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/300.js#L11)

```diff
-       return qq.split(" ").filter((qq => "" !== qq)).map((qq => parseFloat(qq)))
+       return CC.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+     }
+     FC.c.registerLanguage("javascript", WC.b), FC.c.registerLanguage("typescript", NC.b);
+ 
+     function SC(CC, zC) {
+       const ZC = gC(CC).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${zC}" title="${ZC}" aria-label="${ZC}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L14-L17` → after: `L30-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/300.js#L30-L44) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/300.js#L14-L17)

```diff
-     function Oq(qq, Eq, gq) {
-       for (; gq.length !== Eq;) {
-         const Eq = lq(qq.lines[qq.index++]);
-         gq.push(...Eq)
+     function pC(CC, zC) {
+       const ZC = [],
+         QC = CC.toLowerCase(),
+         wC = zC.toLowerCase();
+       let bC = 0;
+       for (; bC < CC.length;) {
+         const nC = QC.indexOf(wC, bC);
+         if (-1 === nC) {
+           ZC.push(CC.slice(bC));
+           break
+         }
+         nC > bC && ZC.push(CC.slice(bC, nC)), ZC.push((0, MC.jsx)("mark", {
+           className: "DocsHighlight",
+           children: CC.slice(nC, nC + zC.length)
+         }, nC)), bC = nC + zC.length
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L20-L65` → after: `L48-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L48-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/300.js#L48-L252) · [Before (L20-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/300.js#L20-L65)

```diff
- 
-     function mq(qq, Eq, gq) {
-       let lq = 0,
-         Oq = 0,
-         mq = 0,
-         xq = 0,
-         Aq = 0,
-         cq = 0;
-       for (let Yq = 0; Yq < qq.numberOfHorizontalAngles - 1; Yq++)
-         if (gq < qq.horizontalAngles[Yq + 1] || Yq === qq.numberOfHorizontalAngles - 2) {
-           Oq = Yq, mq = qq.horizontalAngles[Yq], xq = qq.horizontalAngles[Yq + 1];
-           break
-         } for (let Yq = 0; Yq < qq.numberOfVerticalAngles - 1; Yq++)
-         if (Eq < qq.verticalAngles[Yq + 1] || Yq === qq.numberOfVerticalAngles - 2) {
-           lq = Yq, Aq = qq.verticalAngles[Yq], cq = qq.verticalAngles[Yq + 1];
-           break
- ... (30 more removed lines; see GitHub link above)
+     var PC = ZC(1013),
+       GC = ZC(1321),
+       RC = ZC(36747),
+       AC = ZC(36750);
+     const xC = {
+         clientOptions: {
+           tabStep: "docsClientOptionsTab",
+           tabText: "codeEditor:tutorialClientOptionsTab",
+           pageStep: "docsClientOptions",
+           pageText: "codeEditor:tutorialClientOptions"
+         },
+         apiReference: {
+           tabStep: "docsApiReferenceTab",
+           tabText: "codeEditor:tutorialApiReferenceTab",
+           pageStep: "docsApiReference",
+           pageText: "codeEditor:tutorialApiReference"
+ ... (189 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L67-L88` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/300.js#L254-L255) · [Before (L67-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/300.js#L67-L88)

```diff
-           for (Eq.index = 1; Eq.lines.length > 0 && !Eq.lines[Eq.index].includes("TILT=");) Eq.index++;
-           Eq.lines[Eq.index].includes("INCLUDE"), Eq.index++;
-           const Yq = lq(Eq.lines[Eq.index++]);
-           gq.numberOfLights = Yq[0], gq.lumensPerLamp = Yq[1], gq.numberOfVerticalAngles = Yq[3], gq.numberOfHorizontalAngles = Yq[4], gq.photometricType = Yq[5], gq.unitsType = Yq[6], gq.width = Yq[7], gq.length = Yq[8], gq.height = Yq[9], Eq.index++;
-           for (let lq = 0; lq < gq.numberOfHorizontalAngles; lq++) gq.candelaValues[lq] = [];
-           Oq(Eq, gq.numberOfVerticalAngles, gq.verticalAngles), Oq(Eq, gq.numberOfHorizontalAngles, gq.horizontalAngles);
-           for (let lq = 0; lq < gq.numberOfHorizontalAngles; lq++) Oq(Eq, gq.numberOfVerticalAngles, gq.candelaValues[lq]);
-           let xq = -1;
-           for (let lq = 0; lq < gq.numberOfHorizontalAngles; lq++)
-             for (let qq = 0; qq < gq.numberOfVerticalAngles; qq++) xq = Math.max(xq, gq.candelaValues[lq][qq]);
-           if (xq > 0)
-             for (let lq = 0; lq < gq.numberOfHorizontalAngles; lq++)
-               for (let qq = 0; qq < gq.numberOfVerticalAngles; qq++) gq.candelaValues[lq][qq] /= xq;
-           const Aq = 180,
-             cq = 360,
-             uq = new Float32Array(64800),
- ... (6 more removed lines; see GitHub link above)
+           return window.addEventListener("mousemove", zC), window.addEventListener("mouseup", fz), () => {
+             window.removeEventListener("mousemove", zC), window.removeEventListener("mouseup", fz), null === CC || void 0 === CC || CC.classList.remove("DocsSidebarResizing")
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L90-L93` → after: `L257-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L257-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/300.js#L257-L264) · [Before (L90-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/300.js#L90-L93)

```diff
-           return {
-             width: 180,
-             height: 1,
-             data: uq
+         }), [nz, fz]);
+         const qz = (0, QC.useCallback)((CC => {
+           if (CC) {
+             const [zC, ZC] = CC.slice(1).split("-");
+             ZC && (tC.current = {
+               docId: zC,
+               subsection: ZC
+             }), zC && wz(zC)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L95-L101` → after: `L266-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L266-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/300.js#L266-L413) · [Before (L95-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/300.js#L95-L101)

```diff
-         }(new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength));
-         gq(Yq.width, Yq.height, !!Eq.useMipMaps, !1, (() => {
-           const qq = Eq.Ba();
-           Eq.type = 1, Eq.format = 6, Eq._gammaSpace = !1, qq._uploadDataToTextureDirectly(Eq, Yq.data)
-         }))
-       }
-     }
+         }), [wz]);
+         (0, QC.useEffect)((() => {
+           const CC = tC.current;
+           CC && hC === CC.docId && (setTimeout((() => {
+             bz(CC.subsection)
+           }), 0), tC.current = null)
+         })), (0, QC.useEffect)((() => {
+           if (!dC.current) return;
+           dC.current.querySelectorAll("a.DocsAnchor").forEach((CC => {
+             CC.addEventListener("click", (zC => {
+               zC.preventDefault(), qz(CC.dataset.id)
+             }))
+           }))
+         }), [hC, qz]);
+         const Fz = Object.values(xC).find((CC => (null === CC || void 0 === CC ? void 0 : CC.pageStep) === DC));
+         return (0, MC.jsx)(RC.h, {
+ ... (132 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/301.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/301.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/301.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/301.js#L4-L6)

```diff
-   41542: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       _BasisTextureLoader: () => Hq
+   41289: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       ensureLocalBloxdTypes: () => PC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L11` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/301.js#L8-L17) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/301.js#L8-L11)

```diff
-     var Yq, lq = gq(39845),
-       Oq = gq(38653),
-       mq = gq(40233),
-       xq = gq(39593);
+     var QC = ZC(4696),
+       wC = ZC(41188),
+       bC = ZC(41179),
+       nC = ZC(36714),
+       fC = ZC(36721),
+       oC = ZC(36735);
+     const qC = JSON.stringify({
+       name: "@bloxd",
+       types: "index.d.ts"
+     }, null, "\t") + "\n";
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L13-L23` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/301.js#L19-L21) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/301.js#L13-L23)

```diff
-     function Aq() {
-       const qq = 0,
-         Eq = 1,
-         gq = 2,
-         Yq = 3,
-         lq = 6,
-         Oq = 8,
-         mq = 9,
-         xq = 10,
-         Aq = 14;
-       let cq = null;
+     function FC(CC) {
+       return CC.replace(/^\//, "")
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L25-L48` → after: `L23-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L23-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/301.js#L23-L42) · [Before (L25-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/301.js#L25-L48)

```diff
-       function uq(qq, Eq, gq, Yq, lq) {
-         const Oq = qq.getImageTranscodedSizeInBytes(Eq, gq, Yq);
-         let mq = new Uint8Array(Oq);
-         if (!qq.transcodeImage(mq, Eq, gq, Yq, 1, 0)) return null;
-         if (lq) {
-           mq = function(qq, Eq, gq, Yq) {
-             const lq = new Uint16Array(4),
-               Oq = new Uint16Array(gq * Yq),
-               mq = gq / 4,
-               xq = Yq / 4;
-             for (let Aq = 0; Aq < xq; Aq++)
-               for (let Yq = 0; Yq < mq; Yq++) {
-                 const xq = Eq + 8 * (Aq * mq + Yq);
-                 lq[0] = qq[xq] | qq[xq + 1] << 8, lq[1] = qq[xq + 2] | qq[xq + 3] << 8, lq[2] = (2 * (31 & lq[0]) + 1 * (31 & lq[1])) / 3 | (2 * (2016 & lq[0]) + 1 * (2016 & lq[1])) / 3 & 2016 | (2 * (63488 & lq[0]) + 1 * (63488 & lq[1])) / 3 & 63488, lq[3] = (2 * (31 & lq[1]) +  … [truncated]
-                 for (let Eq = 0; Eq < 4; Eq++) {
-                   const mq = qq[xq + 4 + Eq];
- ... (8 more removed lines; see GitHub link above)
+     function WC(CC) {
+       return FC((0, fC.t)(CC.name, "")).replace(/\/$/, "")
+     }
+ 
+     function NC(CC) {
+       return CC.typesVfsPath.slice(CC.typesVfsPath.lastIndexOf("/") + 1)
+     }
+ 
+     function MC(CC) {
+       return JSON.stringify({
+         name: CC.specifier,
+         types: NC(CC)
+       }, null, "\t") + "\n"
+     }
+     async function gC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
+ ... (4 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L50-L131` → after: `L44-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L44-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/301.js#L44-L59) · [Before (L50-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/301.js#L50-L131)

```diff
-       onmessage = Bq => {
-         if ("init" === Bq.data.action) {
-           if (Bq.data.url) try {
-             importScripts(Bq.data.url)
-           } catch (Wq) {
-             postMessage({
-               action: "error",
-               error: Wq
-             })
-           }
-           cq || (cq = BASIS({
-             wasmBinary: Bq.data.wasmBinary
-           })), null !== cq && cq.then((qq => {
-             BASIS = qq, qq.initializeBasis(), postMessage({
-               action: "init"
-             })
- ... (66 more removed lines; see GitHub link above)
+       return ZC
+     }
+     async function SC(CC, zC, ZC) {
+       const QC = WC(zC),
+         wC = await (0, oC.k)(CC, QC);
+       if (!wC) return;
+       const bC = new Set([NC(zC), "package.json"]);
+       if (ZC)
+         for (const oC of Object.keys(zC.files)) bC.add(oC);
+       const nC = await gC(wC),
+         fC = new Set;
+       for (const WC of nC) {
+         if (bC.has(WC)) continue;
+         await (0, oC.y)(CC, `${QC}/${WC}`);
+         const zC = WC.split("/");
+         for (let CC = 1; CC < zC.length; CC++) fC.add(zC.slice(0, CC).join("/"))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L133-L147` → after: `L61-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L61-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/301.js#L61-L105) · [Before (L133-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/301.js#L133-L147)

```diff
-     }! function(qq) {
-       qq[qq.cTFETC1 = 0] = "cTFETC1", qq[qq.cTFETC2 = 1] = "cTFETC2", qq[qq.cTFBC1 = 2] = "cTFBC1", qq[qq.cTFBC3 = 3] = "cTFBC3", qq[qq.cTFBC4 = 4] = "cTFBC4", qq[qq.cTFBC5 = 5] = "cTFBC5", qq[qq.cTFBC7 = 6] = "cTFBC7", qq[qq.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", qq[qq.cTFPVR … [truncated]
-     }(Yq || (Yq = {}));
-     const cq = {
-       JSModuleURL: `${lq.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,
-       WasmModuleURL: `${lq.f._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`
-     };
-     let uq = null,
-       Bq = null,
-       Wq = 0;
-     const Nq = async () => (uq || (uq = new Promise(((qq, Eq) => {
-       Bq ? qq(Bq) : lq.f.LoadFileAsync(lq.f.GetBabylonScriptURL(cq.WasmModuleURL)).then((gq => {
-         if ("function" !== typeof URL) return Eq("Basis transcoder requires an environment with a URL constructor");
-         const Yq = URL.createObjectURL(new Blob([`(${Aq})()`], {
-           type: "application/javascript"
+       const qC = [...fC].sort(((CC, zC) => zC.split("/").length - CC.split("/").length));
+       for (const WC of qC) try {
+         await (0, oC.y)(CC, `${QC}/${WC}`)
+       } catch (FC) {
+         if (FC instanceof DOMException && "InvalidModificationError" === FC.name) continue;
+         throw FC
+       }
+     }
+ 
+     function pC(CC) {
+       const zC = {
+         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       };
+       for (const QC of Object.values(nC.c)) zC[QC.specifier] = [`.${QC.typesVfsPath}`];
+       const ZC = [];
+       for (const QC of CC)
+ ... (29 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L149-L284` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/301.js#L107) · [Before (L149-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/301.js#L149-L284)

```diff
-         Bq = new Worker(Yq), async function(qq, Eq, gq) {
-           return await new Promise(((Yq, Oq) => {
-             const mq = Eq => {
-               "init" === Eq.data.action ? (qq.removeEventListener("message", mq), Yq(qq)) : "error" === Eq.data.action && Oq(Eq.data.error || "error initializing worker")
-             };
-             qq.addEventListener("message", mq), qq.postMessage({
-               action: "init",
-               url: gq ? lq.f.GetBabylonScriptURL(gq) : void 0,
-               wasmBinary: Eq
-             }, [Eq])
-           }))
-         }(Bq, gq, cq.JSModuleURL).then(qq, Eq)
-       })).catch(Eq)
-     }))), await uq), aq = async (qq, Eq) => {
-       const gq = qq instanceof ArrayBuffer ? new Uint8Array(qq) : qq;
-       return await new Promise(((qq, Yq) => {
- ... (120 more removed lines; see GitHub link above)
+       await Promise.all([(0, oC.F)(CC, "node_modules/@bloxd/index.d.ts", QC.default), (0, oC.F)(CC, "node_modules/@bloxd/globals.d.ts", bC.b), (0, oC.F)(CC, "node_modules/@bloxd/lib.d.ts", wC.d), (0, oC.F)(CC, "node_modules/@bloxd/package.json", qC), (0, oC.F)(CC, "tsconfig.json" … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/302.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/302.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L4-L936` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/302.js#L4) · [Before (L4-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/302.js#L4-L936)

```diff
-   41568: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => jq
-     });
-     var Yq = gq(37156),
-       lq = gq(37139),
-       Oq = gq(40233),
-       mq = gq(39886),
-       xq = gq(39696),
-       Aq = gq(38653),
-       cq = gq(39870),
-       uq = gq(39900),
-       Bq = gq(37149),
-       Wq = gq(39644),
-       Nq = gq(39858),
-       aq = gq(39938);
- ... (917 more removed lines; see GitHub link above)
+   41347: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L938-L944` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/302.js#L6) · [Before (L938-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/302.js#L938-L944)

```diff
-       Dispose: () => Hq,
-       DumpData: () => jq,
-       DumpDataAsync: () => dq,
-       DumpFramebuffer: () => Vq,
-       DumpTools: () => oq,
-       EncodeImageAsync: () => aq,
-       RegisterDumpTools: () => Qq
+       installImageBitmapTextureLoader: () => qC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L946-L1032` → after: `L8-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L8-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/302.js#L8-L24) · [Before (L946-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/302.js#L946-L1032)

```diff
-     var Yq = gq(39757),
-       lq = gq(41555),
-       Oq = gq(39845),
-       mq = gq(37158),
-       xq = gq(37153),
-       Aq = gq(38653),
-       cq = gq(39810),
-       uq = gq(39759);
-     let Bq = null;
-     async function Wq() {
-       return Bq || (Bq = async function() {
-         const qq = xq.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
-         qq instanceof OffscreenCanvas && Aq.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
-         const {
-           ThinEngine: Eq
-         } = await Promise.resolve().then((() => gq(39608)));
- ... (71 more removed lines; see GitHub link above)
+     var QC = ZC(39692),
+       wC = ZC(41349),
+       bC = ZC(3188);
+ 
+     function nC(CC, zC) {
+       if ("string" === typeof CC) {
+         const ZC = (0, bC.e)(CC);
+         return ZC ? new Blob([(0, bC.c)(ZC.base64)], {
+           type: ZC.mimeType || zC
+         }) : null
+       }
+       return CC instanceof Blob ? CC : new Blob([CC], {
+         type: zC
+       })
+     }
+     const fC = function(CC, zC, ZC, QC) {
+ ... (1 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1035-L1075` → after: `L27-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L27-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/302.js#L27-L40) · [Before (L1035-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/302.js#L1035-L1075)

```diff
-       const xq = await gq.readPixels(0, 0, qq, Eq);
-       jq(qq, Eq, new Uint8Array(xq.buffer), Yq, lq, Oq, !0, void 0, mq)
-     }
-     async function dq(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         lq = arguments.length > 4 ? arguments[4] : void 0,
-         xq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         uq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         Bq = arguments.length > 7 ? arguments[7] : void 0;
-       if (gq instanceof Float32Array) {
-         const qq = new Uint8Array(gq.length);
-         let Eq = gq.length;
-         for (; Eq--;) {
-           const Yq = gq[Eq];
-           qq[Eq] = Math.round(255 * (0, mq.Clamp)(Yq))
-         }
- ... (25 more removed lines; see GitHub link above)
+       try {
+         bC = nC(CC, fC)
+       } catch {
+         bC = null
+       }
+       return bC ? (createImageBitmap(bC, {
+         premultiplyAlpha: "none",
+         colorSpaceConversion: "none",
+         ...oC
+       }).then((CC => {
+         zC(CC)
+       }), (() => {
+         (0, wC.d)(CC, zC, ZC, QC, fC, oC, qC)
+       })), null) : (0, wC.d)(CC, zC, ZC, QC, fC, oC, qC)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1077` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/302.js#L42) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/302.js#L1077)

```diff
-     let Pq = !1;
+     let oC = "idle";
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1080-L1193` → after: `L45-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L45-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/302.js#L45-L56) · [Before (L1080-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/302.js#L1080-L1193)

```diff
-       if (Pq) return;
-       Pq = !0;
-       Oq.f.DumpData = jq, Oq.f.DumpDataAsync = dq, Oq.f.DumpFramebuffer = Vq
-     }
-   },
-   41561: (qq, Eq, gq) => {
-     gq.d(Eq, {
-       c: () => Nq,
-       g: () => aq,
-       h: () => Vq
-     });
-     var Yq = gq(40233),
-       lq = gq(41568),
-       Oq = gq(39757),
-       mq = gq(41551),
-       xq = gq(39779),
- ... (98 more removed lines; see GitHub link above)
+       "idle" === oC && "function" === typeof createImageBitmap && (oC = "pending", async function() {
+         const CC = document.createElement("canvas");
+         CC.width = 1, CC.height = 2;
+         const zC = CC.getContext("2d");
+         if (!zC) throw new Error("2d context unavailable");
+         zC.fillStyle = "#f00", zC.fillRect(0, 0, 1, 1), zC.fillStyle = "#0f0", zC.fillRect(0, 1, 1, 1);
+         const ZC = nC(CC.toDataURL(), "");
+         if (!ZC) throw new Error("toDataURL did not produce a base64 data URL");
+         const QC = await createImageBitmap(ZC, {
+           premultiplyAlpha: "none",
+           colorSpaceConversion: "none",
+           imageOrientation: "flipY"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1195-L1952` → after: `L58-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L58-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/302.js#L58-L63) · [Before (L1195-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/302.js#L1195-L1952)

```diff
-         Bq.onEffectCreatedObservable.addOnce((qq => {
-           qq.executeWhenCompiled((() => {
-             Bq.onApply = qq => {
-               qq._bindTexture("textureSampler", Eq), qq.setFloat2("scale", 1, 1)
-             }, gq.postProcessManager.directRender([Bq], Wq, !0), cq.restoreDefaultFramebuffer(), cq._releaseTexture(Eq), Bq && Bq.dispose(), Wq._swapAndDie(Eq), Eq.type = Yq, Eq.format = 5, Eq.isReady = !0, uq(Eq)
-           }))
-         }))
-       }))
-     }
-     async function aq(qq, Eq, Oq) {
-       let xq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         Aq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-         cq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         uq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-       await async function(qq) {
-         if (qq.isReady()) return;
- ... (742 more removed lines; see GitHub link above)
+         zC.drawImage(QC, 0, 0);
+         const wC = zC.getImageData(0, 0, 1, 1).data;
+         return wC[1] > wC[0]
+       }().catch((() => (oC = "idle", !1))).then((CC => {
+         "pending" === oC && (oC = "concluded"), CC && (QC.e.loadImage = fC)
+       })))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1955` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/302.js#L66) · [Before (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/302.js#L1955)

```diff
-   41577: (qq, Eq, gq) => {
+   41349: (CC, zC, ZC) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1957-L1958` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/302.js#L68-L69) · [Before (L1957-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/302.js#L1957-L1958)

```diff
-       d: () => mq,
-       f: () => Oq
+       c: () => QC.g,
+       d: () => QC.m
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L1960-L2020` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/302.js#L71-L72) · [Before (L1960-L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/302.js#L1960-L2020)

```diff
-     var Yq = gq(41555),
-       lq = gq(37153);
-     class Oq extends Yq.e {
-       _gatherImports(qq, Eq) {
-         qq ? (this._webGPUReady = !0, Eq.push(Promise.all([gq.e(364).then((() => gq(61421)))]))) : Eq.push(Promise.all([gq.e(365).then((() => gq(61424)))])), super._gatherImports(qq, Eq)
-       }
-       constructor(qq) {
-         let Eq = arguments.length > 2 ? arguments[2] : void 0;
-         const gq = {
-           name: qq,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || lq.b.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: Oq.FragmentUrl,
-           ...Eq
-         };
- ... (45 more removed lines; see GitHub link above)
+     var QC = ZC(39865);
+     (0, QC.p)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/303.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/303.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405)

#### 1. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L4-L6)

```diff
-   41592: (qq, Eq, gq) => {
-     gq.r(Eq), gq.d(Eq, {
-       _HDRTextureLoader: () => uq
+   41422: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => bC
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L8-L52` → after: `L8-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L8-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L8-L85) · [Before (L8-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L8-L52)

```diff
-     var Yq = gq(37139);
-     class lq {
-       static ConvertPanoramaToCubemap(qq, Eq, gq, Yq) {
-         let lq, Oq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           mq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!qq) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (qq.length != Eq * gq * 3) {
-           if (qq.length != Eq * gq * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           lq = 4
-         } else lq = 3;
-         return {
-           front: this.CreateCubemapTexture(Yq, this.FACE_FRONT, qq, Eq, gq, Oq, mq, lq),
-           back: this.CreateCubemapTexture(Yq, this.FACE_BACK, qq, Eq, gq, Oq, mq, lq),
-           left: this.CreateCubemapTexture(Yq, this.FACE_LEFT, qq, Eq, gq, Oq, mq, lq),
-           right: this.CreateCubemapTexture(Yq, this.FACE_RIGHT, qq, Eq, gq, Oq, mq, lq),
-           up: this.CreateCubemapTexture(Yq, this.FACE_UP, qq, Eq, gq, Oq, mq, lq),
- ... (29 more removed lines; see GitHub link above)
+     var QC = ZC(39925),
+       wC = ZC(41429);
+     class bC {
+       constructor(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = ZC, this.gQC = [], this._maxBlockCapacity = zC || 64, this._selectionContent = new QC.e(1024), this._creationFunc = CC
+       }
+       update(CC, zC, ZC) {
+         wC.b._CreateBlocks(CC, zC, ZC, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       }
+       zQC(CC) {
+         for (let zC = 0; zC < this.blocks.length; zC++) {
+           this.blocks[zC].addEntry(CC)
+         }
+       }
+       IH(CC) {
+ ... (62 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L54` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L87-L90) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L54)

```diff
-         return cq
+           return
+         }
+         const zC = this.entries.indexOf(CC);
+         zC > -1 && this.entries.splice(zC, 1)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L56-L72` → after: `L92-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L92-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L92-L417) · [Before (L56-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L56-L72)

```diff
-       static CalcProjectionSpherical(qq, Eq, gq, Yq, lq, Oq) {
-         let mq = Math.atan2(qq.z, qq.x);
-         const xq = Math.acos(qq.y);
-         for (; mq < -Math.PI;) mq += 2 * Math.PI;
-         for (; mq > Math.PI;) mq -= 2 * Math.PI;
-         let Aq = mq / Math.PI;
-         const cq = xq / Math.PI;
-         Aq = .5 * Aq + .5;
-         let uq = Math.round(Aq * gq);
-         uq < 0 ? uq = 0 : uq >= gq && (uq = gq - 1);
-         let Bq = Math.round(cq * Yq);
-         Bq < 0 ? Bq = 0 : Bq >= Yq && (Bq = Yq - 1);
-         const Wq = Oq ? Yq - Bq - 1 : Bq;
-         return {
-           r: Eq[Wq * gq * lq + uq * lq + 0],
-           g: Eq[Wq * gq * lq + uq * lq + 1],
- ... (1 more removed lines; see GitHub link above)
+       addEntries(CC) {
+         for (let zC = 0; zC < CC.length; zC++) {
+           const ZC = CC[zC];
+           this.addEntry(ZC)
+         }
+       }
+       select(CC, zC, ZC) {
+         if (wC.b.IsInFrustum(this.SQC, CC)) {
+           if (this.blocks) {
+             for (let QC = 0; QC < this.blocks.length; QC++) {
+               this.blocks[QC].select(CC, zC, ZC)
+             }
+             return
+           }
+           ZC ? zC.concat(this.entries) : zC.concatWithNoDuplicate(this.entries)
+         }
+ ... (310 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L78-L80` → after: `L441-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L441-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L441-L485) · [Before (L78-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L78-L80)

```diff
-       lq > 0 ? (lq = function(qq, Eq) {
-         return Eq > 1023 ? qq * Math.pow(2, 1023) * Math.pow(2, Eq - 1023) : Eq < -1074 ? qq * Math.pow(2, -1074) * Math.pow(2, Eq + 1074) : qq * Math.pow(2, Eq)
-       }(1, lq - 136), qq[Oq + 0] = Eq * lq, qq[Oq + 1] = gq * lq, qq[Oq + 2] = Yq * lq) : (qq[Oq + 0] = 0, qq[Oq + 1] = 0, qq[Oq + 2] = 0)
+       let fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         oC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const qC = CC.mg();
+       if (!nC && !(nC = CC.activeCamera) && !(nC = CC.cameraToUseForPointers)) return CC;
+       const FC = nC.viewport,
+         WC = qC.getRenderHeight(),
+         {
+           x: NC,
+           y: MC,
+           width: gC,
+           height: SC
+         } = FC.toGlobal(qC.getRenderWidth(), WC),
+         pC = 1 / qC.getHardwareScalingLevel();
+       return zC = zC * pC - NC, ZC = ZC * pC - (WC - MC - SC), bC.update(zC, ZC, gC, SC, QC || wC.b.IdentityReadOnly, fC ? wC.b.IdentityReadOnly : nC.getViewMatrix(), nC.getProjectionMatrix(), oC), CC
+     }
+ 
+ ... (29 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L84-L86` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L489) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L84-L86)

```diff
-       let gq, Yq = "";
-       for (let lq = Eq; lq < qq.length - Eq && (gq = String.fromCharCode(qq[lq]), "\n" != gq); lq++) Yq += gq;
-       return Yq
+       return "InstancedLinesMesh" === CC || "LinesMesh" === CC ? zC.intersectionThreshold : 0
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L90-L134` → after: `L493-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L493-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/303.js#L493-L547) · [Before (L90-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/303.js#L90-L134)

```diff
-       let Eq = mq(qq, 0);
-       if ("#" != Eq[0] || "?" != Eq[1]) throw "Bad HDR Format.";
-       let gq = !1,
-         Yq = !1,
-         lq = 0;
-       do {
-         lq += Eq.length + 1, Eq = mq(qq, lq), "FORMAT=32-bit_rle_rgbe" == Eq ? Yq = !0 : 0 == Eq.length && (gq = !0)
-       } while (!gq);
-       if (!Yq) throw "HDR Bad header format, unsupported FORMAT";
-       lq += Eq.length + 1, Eq = mq(qq, lq);
-       const Oq = /^-Y (.*) \+X (.*)$/g.exec(Eq);
-       if (!Oq || Oq.length < 3) throw "HDR Bad header format, no size";
-       const xq = parseInt(Oq[2]),
-         Aq = parseInt(Oq[1]);
-       if (xq < 8 || xq > 32767) throw "HDR Bad header format, unsupported size";
-       return lq += Eq.length + 1, {
- ... (29 more removed lines; see GitHub link above)
+       const zC = CC.getClassName();
+       if ("GreasedLineMesh" === zC) return {
+         rawBoundingInfo: null,
+         intersectionThreshold: 0
+       };
+       const ZC = CC.rawBoundingInfo;
+       return {
+         rawBoundingInfo: ZC,
+         intersectionThreshold: ZC ? GC(zC, CC) : 0
+       }
+     }
+ 
+     function AC(CC, zC, ZC, QC, wC) {
+       const bC = CC(ZC, zC.enableDistantPicking);
+       return bC.intersectsSphere(QC.IQC, wC) && bC.intersectsBox(QC.boundingBox, wC) ? bC : null
+     }
+ ... (39 more added lines; see GitHub link above)
```
